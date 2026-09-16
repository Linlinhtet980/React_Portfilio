import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import ThemeToggle from '../Light_Dark_Mode/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = '#' + section.getAttribute('id');
        }
      });
      setActiveNav(current || '#home');
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contacts', label: 'Contacts' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a href="#home" className={styles.navLogo}>
          <span className={styles.logoBracket}>&lt;</span>LTRH<span className={styles.logoBracket}> /&gt;</span>
        </a>
        
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className={`${styles.navLink} ${activeNav === link.href ? styles.activeLink : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <button 
          className={`${styles.navToggle} ${isOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </nav>
  );
}

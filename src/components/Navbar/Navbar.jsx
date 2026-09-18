import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={['container', styles.nav].join(' ')} aria-label="Main navigation">
      <a href="#top" className={styles.brand} aria-label="Lin Thu Rein Htet home">
        <span className={styles.brandMark}>LT</span>
      </a>
      <div className={[styles.navLinks, menuOpen ? styles.isOpen : ''].join(' ')}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
      <a href="#contact" className={styles.navCta}>Let's talk <ArrowUpRight size={15} /></a>
      <button 
        className={styles.menuToggle} 
        aria-label={menuOpen ? 'Close menu' : 'Open menu'} 
        aria-expanded={menuOpen} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  )
}

import { useEffect, useRef, useState } from 'react';
import styles from './ScrollReveal.module.css';

export default function ScrollReveal({ 
  children, 
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const style = {
    transitionDelay: `${delay}s`,
    transitionDuration: `${duration}s`,
  };

  const animationClass = styles[animation] || styles.fadeUp;

  return (
    <div 
      ref={ref} 
      className={`${styles.revealWrapper} ${animationClass} ${isVisible ? styles.visible : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

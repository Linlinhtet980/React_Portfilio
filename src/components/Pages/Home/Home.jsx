import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Home.module.css';
import TextReveal from '../../Animations/TextReveal';
import FadeUp from '../../Animations/FadeUp';
import profileImg from '../../../assets/Lin thu rein htet.jpg';

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section id="home" className={styles.section} data-kid="1" data-name="landing page section">
        <div className={styles.layoutGrid} data-kid="1-1" data-name="layout grid">
            {/* Sidebar / Meta */}
            <div className={styles.sidebar} data-kid="1-1-1" data-name="sidebar meta container">
                <div className={styles.sidebarLabelTop} data-kid="1-1-1-1" data-name="index number label">
                    01 / Index
                </div>
                <div className={styles.sidebarLabelBottom} data-kid="1-1-1-2" data-name="portfolio section label">
                    Portfolio
                </div>
            </div>
            {/* Main Content Area */}
            <div className={styles.mainContent} data-kid="1-1-2" data-name="hero content area">
                {/* Decorative subtle grid */}
                <div className={styles.decorativeGrid} data-kid="1-1-2-1" data-name="decorative background grid">
                </div>
                <div className={styles.relativeZ10} data-kid="1-1-2-2" data-name="hero headline group">
                    <h1 className={styles.heroHeadline} data-kid="1-1-2-2-1" data-name="hero main heading">
                        <TextReveal>LIN THU REIN</TextReveal>
                        <br data-kid="1-1-2-2-1-1" data-name="line break"/>
                        <TextReveal delay={0.1}>
                            <span className={styles.heroHighlight} data-kid="1-1-2-2-1-2" data-name="hero highlight text">
                                HTET
                            </span>
                        </TextReveal>
                    </h1>
                    <FadeUp delay={0.3}>
                        <p className={styles.heroSubheadline} data-kid="1-1-2-2-2" data-name="hero subheadline description">
                            Aspiring Junior Full-Stack Developer with a background in Mathematics and Business. Passionate about building minimal aesthetics and robust performance web applications.
                        </p>
                    </FadeUp>
                </div>
                <FadeUp delay={0.5} className={styles.ctaContainer} data-kid="1-1-2-3" data-name="cta button container">
                    <button className={`btn btn-primary ${styles.viewArchiveBtn}`} data-kid="1-1-2-3-1" data-name="view archive call-to-action button">
                        VIEW ARCHIVE
                        <svg data-kid="1-1-2-3-1-1" data-name="right arrow icon" fill="none" height="16" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" viewBox="0 0 24 24" width="16">
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                            <polyline points="12 5 19 12 19"></polyline>
                        </svg>
                    </button>
                </FadeUp>
            </div>
            {/* Right Image Area */}
            <div className={styles.rightColumn} data-kid="1-1-3" data-name="image and status column">
                <div className={styles.imageContainer} data-kid="1-1-3-1" data-name="portrait image container">
                    <motion.img 
                        style={{ y }}
                        alt="Portrait" 
                        className={styles.portraitImage} 
                        data-kid="1-1-3-1-1" 
                        data-name="designer portrait image" 
                        decoding="async" 
                        loading="lazy" 
                        src={profileImg}
                    />
                    {/* Gradient Overlay for better contrast with the theme */}
                    <div className={styles.gradientOverlay} data-kid="1-1-3-1-2" data-name="gradient overlay">
                    </div>
                </div>
                <div className={styles.footerContainer} data-kid="1-1-3-2" data-name="location and status footer">
                    <div className={styles.footerLabel} data-kid="1-1-3-2-1" data-name="location text container">
                        Based in
                        <span className={styles.footerValue} data-kid="1-1-3-2-1-1" data-name="location name">
                            Myanmar
                        </span>
                    </div>
                    <div className={`${styles.footerLabel} ${styles.footerLabelRight}`} data-kid="1-1-3-2-2" data-name="status text container">
                        Status
                        <span className={styles.footerValue} data-kid="1-1-3-2-2-1" data-name="availability status label">
                            <span className={styles.pulseIndicator} data-kid="1-1-3-2-2-1-1" data-name="pulsing availability indicator">
                            </span>
                            Available
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

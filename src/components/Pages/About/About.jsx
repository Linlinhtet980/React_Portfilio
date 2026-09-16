import styles from './About.module.css';
import TextReveal from '../../Animations/TextReveal';
import FadeUp from '../../Animations/FadeUp';

export default function About() {
  return (
    <section id="about" className={styles.section} data-kid="1" data-name="about section container">
        <div className={styles.container} data-kid="1-1" data-name="section content wrapper">
            <div className={styles.grid} data-kid="1-1-1" data-name="layout grid container">
                {/* Sidebar / Section Label */}
                <div className={styles.sidebar} data-kid="1-1-1-1" data-name="sidebar column">
                    <h2 className={styles.sectionLabel} data-kid="1-1-1-1-1" data-name="section heading">
                        <TextReveal>02 — About</TextReveal>
                    </h2>
                </div>
                {/* Main Prose Content */}
                <div className={styles.proseColumn} data-kid="1-1-1-2" data-name="main content column">
                    <FadeUp delay={0.1}>
                        <p className={styles.paragraph} data-kid="1-1-1-2-1" data-name="first introduction paragraph">
                            I am an enthusiastic Junior Full-Stack Developer transitioning from an Office Administration and Mathematics background. I am dedicated to creating functional, user-focused, and accessible digital experiences.
                        </p>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <p className={`${styles.paragraph} ${styles.paragraphLargeMargin}`} data-kid="1-1-1-2-2" data-name="second introduction paragraph">
                            With over 3 years of professional experience as an Office Assistant, I bring strong communication, organization, and teamwork skills to any development team. My business degree and mathematics background have honed my analytical and problem-solving abilities.
                        </p>
                    </FadeUp>
                    {/* Pull Quote / Core Philosophy */}
                    <FadeUp delay={0.3}>
                        <div className={styles.pullQuoteContainer} data-kid="1-1-1-2-3" data-name="pull quote wrapper">
                            <blockquote className={styles.pullQuoteText} data-kid="1-1-1-2-3-1" data-name="core philosophy quote">
                                "A strong foundation in continuous learning is the key to mastering any technology. I embrace challenges as opportunities to grow."
                            </blockquote>
                        </div>
                    </FadeUp>
                    
                    <FadeUp delay={0.4}>
                        <p className={styles.paragraph} data-kid="1-1-1-2-4" data-name="third paragraph on current work">
                            Currently, I am expanding my technical stack by diving deep into advanced JavaScript, React, and Node.js. My next goals include mastering React Native and Project Management to deliver end-to-end solutions.
                        </p>
                    </FadeUp>
                    <FadeUp delay={0.5}>
                        <p className={`${styles.paragraph} ${styles.paragraphLargeMargin}`} data-kid="1-1-1-2-5" data-name="fourth paragraph closing">
                            I am always open to discussing new opportunities, collaborations, or creative ideas where I can contribute my skills and grow alongside a team. Let's create something meaningful together.
                        </p>
                    </FadeUp>
                    <FadeUp delay={0.6}>
                        <a className={styles.link} data-kid="1-1-1-2-6" data-name="experience section link" href="#education">
                            View Full Experience
                            <svg className={styles.linkIcon} data-kid="1-1-1-2-6-1" data-name="right arrow icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3" data-kid="1-1-1-2-6-1-1" data-name="arrow path" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2">
                                </path>
                            </svg>
                        </a>
                    </FadeUp>
                </div>
            </div>
        </div>
    </section>
  );
}

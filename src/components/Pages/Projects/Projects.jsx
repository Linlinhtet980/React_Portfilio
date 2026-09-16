import styles from './Projects.module.css';
import TextReveal from '../../Animations/TextReveal';
import FadeUp from '../../Animations/FadeUp';

export default function Projects() {
  return (
    <section id="projects" className={styles.section} data-kid="1" data-name="portfolio section container">
        <div className={styles.headerContainer} data-kid="1-1" data-name="header and description wrapper">
            <div data-kid="1-1-1" data-name="header text group">
                <p className={styles.sectionLabel} data-kid="1-1-1-1" data-name="portfolio label group">
                    <span className={styles.labelLine} data-kid="1-1-1-1-1" data-name="decorative horizontal rule">
                    </span>
                    <TextReveal>Portfolio</TextReveal>
                </p>
                <h2 className={styles.sectionTitle} data-kid="1-1-1-2" data-name="section main title">
                    <TextReveal delay={0.1}>Selected</TextReveal>
                    <br data-kid="1-1-1-2-1" data-name="title line break"/>
                    <TextReveal delay={0.2}>Works.</TextReveal>
                </h2>
            </div>
            <FadeUp delay={0.3}>
                <p className={styles.sectionDesc} data-kid="1-1-2" data-name="section description paragraph">
                    A showcase of recent digital products, brand identities, and structural interfaces engineered with precision.
                </p>
            </FadeUp>
        </div>
        <div className={styles.gridContainer} data-kid="1-2" data-name="projects grid container">
            {/* Project 01 */}
            <FadeUp delay={0.1} as="article" className={`${styles.card} ${styles.cardCol7}`} data-kid="1-2-1" data-name="project card one">
                <div className={styles.cardHeader} data-kid="1-2-1-1" data-name="project one header area">
                    <span className={styles.projectNumber} data-kid="1-2-1-1-1" data-name="project number indicator">
                        01
                    </span>
                    <div className={styles.tagContainer} data-kid="1-2-1-1-2" data-name="project one tags container">
                        <span className={styles.tag} data-kid="1-2-1-1-2-1" data-name="tag web design">
                            Web Design
                        </span>
                        <span className={styles.tag} data-kid="1-2-1-1-2-2" data-name="tag development">
                            Development
                        </span>
                    </div>
                </div>
                <div className={styles.cardContent} data-kid="1-2-1-2" data-name="project one content area">
                    <div className={`${styles.imageWrapper} ${styles.imageWrapperAspectVideo}`} data-kid="1-2-1-2-1" data-name="project one image wrapper">
                        <img alt="Project preview" className={styles.projectImage} data-kid="1-2-1-2-1-1" data-name="project one image" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1551397967-8b3b73256395?auto=format&fit=crop&w=1200&q=80"/>
                    </div>
                    <h3 className={styles.projectTitleLarge} data-kid="1-2-1-2-2" data-name="project one title">
                        Fintech
                        <br data-kid="1-2-1-2-2-1" data-name="project one title line break"/>
                        Dashboard
                    </h3>
                    <p className={`${styles.projectDesc} ${styles.projectDescWide}`} data-kid="1-2-1-2-3" data-name="project one description">
                        Comprehensive institutional trading interface designed for absolute clarity, speed, and split-second decision making.
                    </p>
                    <button className={styles.viewBtn} data-kid="1-2-1-2-4" data-name="project one view project button">
                        View Project &rarr;
                    </button>
                </div>
            </FadeUp>
            {/* Project 02 */}
            <FadeUp delay={0.2} as="article" className={`${styles.card} ${styles.cardCol5}`} data-kid="1-2-2" data-name="project card two">
                <div className={styles.cardHeader} data-kid="1-2-2-1" data-name="project two header area">
                    <span className={styles.projectNumber} data-kid="1-2-2-1-1" data-name="project number indicator">
                        02
                    </span>
                    <div className={styles.tagContainer} data-kid="1-2-2-1-2" data-name="project two tags container">
                        <span className={styles.tag} data-kid="1-2-2-1-2-1" data-name="tag branding">
                            Branding
                        </span>
                    </div>
                </div>
                <div className={styles.cardContent} data-kid="1-2-2-2" data-name="project two content area">
                    <div className={`${styles.imageWrapper} ${styles.imageWrapperAspectSquare}`} data-kid="1-2-2-2-1" data-name="project two image wrapper">
                        <img alt="Project preview" className={styles.projectImage} data-kid="1-2-2-2-1-1" data-name="project two image" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1572890016824-4e316f5388f3?auto=format&fit=crop&w=1000&q=80"/>
                    </div>
                    <h3 className={styles.projectTitleMedium} data-kid="1-2-2-2-2" data-name="project two title">
                        Nexus
                        <br data-kid="1-2-2-2-2-1" data-name="project two title line break"/>
                        Identity
                    </h3>
                    <p className={`${styles.projectDesc} ${styles.projectDescNarrow}`} data-kid="1-2-2-2-3" data-name="project two description">
                        A stark, brutalist rebranding for an architectural firm specializing in raw concrete structures and brutal aesthetics.
                    </p>
                    <button className={styles.viewBtn} data-kid="1-2-2-2-4" data-name="project two view project button">
                        View Project &rarr;
                    </button>
                </div>
            </FadeUp>
            {/* Project 03 */}
            <FadeUp delay={0.3} as="article" className={`${styles.card} ${styles.cardCol5RightBorder}`} data-kid="1-2-3" data-name="project card three">
                <div className={styles.cardHeader} data-kid="1-2-3-1" data-name="project three header area">
                    <span className={styles.projectNumber} data-kid="1-2-3-1-1" data-name="project number indicator">
                        03
                    </span>
                    <div className={styles.tagContainer} data-kid="1-2-3-1-2" data-name="project three tags container">
                        <span className={styles.tag} data-kid="1-2-3-1-2-1" data-name="tag e-commerce">
                            E-Commerce
                        </span>
                    </div>
                </div>
                <div className={styles.cardContent} data-kid="1-2-3-2" data-name="project three content area">
                    <div className={`${styles.imageWrapper} ${styles.imageWrapperAspect43}`} data-kid="1-2-3-2-1" data-name="project three image wrapper">
                        <img alt="Project preview" className={styles.projectImage} data-kid="1-2-3-2-1-1" data-name="project three image" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1554034483-04fda0d3507b?auto=format&fit=crop&w=1000&q=80"/>
                    </div>
                    <h3 className={styles.projectTitleMediumLarge} data-kid="1-2-3-2-2" data-name="project three title">
                        Aura
                        <br data-kid="1-2-3-2-2-1" data-name="project three title line break"/>
                        Store
                    </h3>
                    <p className={`${styles.projectDesc} ${styles.projectDescNarrow}`} data-kid="1-2-3-2-3" data-name="project three description">
                        Minimalist digital storefront emphasizing product form, bold typography, and frictionless checkout flows.
                    </p>
                    <button className={styles.viewBtn} data-kid="1-2-3-2-4" data-name="project three view project button">
                        View Project &rarr;
                    </button>
                </div>
            </FadeUp>
            {/* Project 04 */}
            <FadeUp delay={0.4} as="article" className={`${styles.card} ${styles.cardCol7}`} data-kid="1-2-4" data-name="project card four">
                <div className={styles.cardHeader} data-kid="1-2-4-1" data-name="project four header area">
                    <span className={styles.projectNumber} data-kid="1-2-4-1-1" data-name="project number indicator">
                        04
                    </span>
                    <div className={styles.tagContainer} data-kid="1-2-4-1-2" data-name="project four tags container">
                        <span className={styles.tag} data-kid="1-2-4-1-2-1" data-name="tag app design">
                            App Design
                        </span>
                        <span className={styles.tag} data-kid="1-2-4-1-2-2" data-name="tag strategy">
                            Strategy
                        </span>
                    </div>
                </div>
                <div className={styles.cardContentFlexRow} data-kid="1-2-4-2" data-name="project four content area">
                    <div className={`${styles.imageWrapper} ${styles.imageWrapperFlexLeft}`} data-kid="1-2-4-2-1" data-name="project four image wrapper">
                        <img alt="Project preview" className={styles.projectImage} data-kid="1-2-4-2-1-1" data-name="project four image" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1595142245796-3dfab1e157e1?auto=format&fit=crop&w=1000&q=80"/>
                    </div>
                    <div className={styles.detailsWrapperFlexRight} data-kid="1-2-4-2-2" data-name="project four details wrapper">
                        <h3 className={styles.projectTitleLarge} data-kid="1-2-4-2-2-1" data-name="project four title">
                            Sync
                            <br data-kid="1-2-4-2-2-1-1" data-name="project four title line break"/>
                            Platform
                        </h3>
                        <p className={styles.projectDesc} data-kid="1-2-4-2-2-2" data-name="project four description">
                            Real-time collaborative workspace environment. Designed for maximum utility, rigid structural grids, and minimal visual noise.
                        </p>
                        <button className={styles.viewBtn} data-kid="1-2-4-2-2-3" data-name="project four view project button">
                            View Project &rarr;
                        </button>
                    </div>
                </div>
            </FadeUp>
        </div>
    </section>
  );
}

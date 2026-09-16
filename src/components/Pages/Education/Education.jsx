import styles from './Education.module.css';
import TextReveal from '../../Animations/TextReveal';
import FadeUp from '../../Animations/FadeUp';

export default function Education() {
  return (
    <section className={styles.section} data-kid="1" data-name="education and experience section" id="education">
        <div className={styles.container} data-kid="1-1" data-name="container">
            {/* Section Header */}
            <div className={styles.headerContainer} data-kid="1-1-1" data-name="section header container">
                <h2 className={styles.sectionTitle} data-kid="1-1-1-1" data-name="section title heading">
                    <TextReveal>Education</TextReveal>
                    <br data-kid="1-1-1-1-1" data-name="line break"/>
                    <TextReveal delay={0.1}>&amp; Experience</TextReveal>
                </h2>
                <FadeUp delay={0.2} className={styles.sectionMeta} data-kid="1-1-1-2" data-name="section metadata container">
                    <p className={styles.sectionMetaLabel} data-kid="1-1-1-2-1" data-name="section description label">
                        Curriculum Vitae
                    </p>
                    <p className={styles.sectionMetaDate} data-kid="1-1-1-2-2" data-name="date range label">
                        2018 — Present
                    </p>
                </FadeUp>
            </div>
            {/* Timeline Grid */}
            <div className={styles.timelineGrid} data-kid="1-1-2" data-name="timeline grid">
                {/* Timeline Item 1 */}
                <FadeUp delay={0.1} className={styles.timelineItem} data-kid="1-1-2-1" data-name="timeline item 1">
                    <div className={styles.timelineDateColumn} data-kid="1-1-2-1-1" data-name="timeline date container">
                        <span className={styles.timelineDateText} data-kid="1-1-2-1-1-1" data-name="timeline date range">
                            2025 —
                            <br data-kid="1-1-2-1-1-1-1" data-name="line break"/>
                            Present
                        </span>
                    </div>
                    <div className={styles.timelineContentColumn} data-kid="1-1-2-1-2" data-name="timeline content container">
                        <h3 className={styles.timelineItemTitle} data-kid="1-1-2-1-2-1" data-name="timeline item title">
                            Full-Stack Developer Trainee
                        </h3>
                        <h4 className={styles.timelineItemOrg} data-kid="1-1-2-1-2-2" data-name="timeline item organization">
                            O-Technique International Myanmar
                        </h4>
                        <p className={styles.timelineItemDesc} data-kid="1-1-2-1-2-3" data-name="timeline item description">
                            Currently undergoing intensive training in Full-Stack Development and Website Design. Expanding knowledge in advanced JavaScript, React, and Node.js.
                        </p>
                    </div>
                </FadeUp>
                {/* Timeline Item 2 */}
                <FadeUp delay={0.2} className={styles.timelineItem} data-kid="1-1-2-2" data-name="timeline item 2">
                    <div className={styles.timelineDateColumn} data-kid="1-1-2-2-1" data-name="timeline date container">
                        <span className={styles.timelineDateText} data-kid="1-1-2-2-1-1" data-name="timeline date range">
                            2021 —
                            <br data-kid="1-1-2-2-1-1-1" data-name="line break"/>
                            2024
                        </span>
                    </div>
                    <div className={styles.timelineContentColumn} data-kid="1-1-2-2-2" data-name="timeline content container">
                        <h3 className={styles.timelineItemTitle} data-kid="1-1-2-2-2-1" data-name="timeline item title">
                            Office Assistant
                        </h3>
                        <h4 className={styles.timelineItemOrg} data-kid="1-1-2-2-2-2" data-name="timeline item organization">
                            UEC (Union Election Committee)
                        </h4>
                        <p className={styles.timelineItemDesc} data-kid="1-1-2-2-2-3" data-name="timeline item description">
                            Supported daily office operations and administrative tasks. Assisted with communication and document handling. Developed responsibility, organization, and teamwork skills.
                        </p>
                    </div>
                </FadeUp>
                {/* Timeline Item 3 */}
                <FadeUp delay={0.3} className={styles.timelineItem} data-kid="1-1-2-3" data-name="timeline item 3">
                    <div className={styles.timelineDateColumn} data-kid="1-1-2-3-1" data-name="timeline date container">
                        <span className={styles.timelineDateText} data-kid="1-1-2-3-1-1" data-name="timeline date range">
                            2025
                        </span>
                    </div>
                    <div className={styles.timelineContentColumn} data-kid="1-1-2-3-2" data-name="timeline content container">
                        <h3 className={styles.timelineItemTitle} data-kid="1-1-2-3-2-1" data-name="timeline item title">
                            B.Sc. Mathematics
                        </h3>
                        <h4 className={styles.timelineItemOrg} data-kid="1-1-2-3-2-2" data-name="timeline item organization">
                            Hakha University
                        </h4>
                        <p className={styles.timelineItemDesc} data-kid="1-1-2-3-2-3" data-name="timeline item description">
                            Graduated with a GPA of 3.33. Built a strong foundation in analytical and logical thinking.
                        </p>
                    </div>
                </FadeUp>
                {/* Timeline Item 4 */}
                <FadeUp delay={0.4} className={styles.timelineItem} data-kid="1-1-2-4" data-name="timeline item 4">
                    <div className={styles.timelineDateColumn} data-kid="1-1-2-4-1" data-name="timeline date container">
                        <span className={styles.timelineDateText} data-kid="1-1-2-4-1-1" data-name="timeline date range">
                            2020
                        </span>
                    </div>
                    <div className={styles.timelineContentColumn} data-kid="1-1-2-4-2" data-name="timeline content container">
                        <h3 className={styles.timelineItemTitle} data-kid="1-1-2-4-2-1" data-name="timeline item title">
                            Bachelor of Business Association
                        </h3>
                        <h4 className={styles.timelineItemOrg} data-kid="1-1-2-4-2-2" data-name="timeline item organization">
                            Chin Christian University
                        </h4>
                        <p className={styles.timelineItemDesc} data-kid="1-1-2-4-2-3" data-name="timeline item description">
                            Developed a solid understanding of business administration, communication, and organizational structures.
                        </p>
                    </div>
                </FadeUp>
            </div>
        </div>
    </section>
  );
}

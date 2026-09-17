import styles from './Skills.module.css';
import TextReveal from '../../Animations/TextReveal';
import FadeUp from '../../Animations/FadeUp';

export default function Skills() {
  return (
    <section id="skills" className={styles.section} data-kid="1" data-name="core skills section">
        <div className={styles.container} data-kid="1-1" data-name="section container">
            <div className={styles.headerWrapper} data-kid="1-1-1" data-name="section header wrapper">
                <h2 className={styles.sectionHeading} data-kid="1-1-1-1" data-name="section heading">
                    <TextReveal>Core</TextReveal>
                    <br data-kid="1-1-1-1-1" data-name="line break"/>
                    <TextReveal delay={0.1}>Skills</TextReveal>
                </h2>
                <FadeUp delay={0.2} className={styles.sectionDescContainer} data-kid="1-1-1-2" data-name="section description container">
                    <p data-kid="1-1-1-2-1" data-name="section description text">
                        A comprehensive overview of my technical capabilities and creative disciplines, structured for clarity and precision.
                    </p>
                </FadeUp>
            </div>             
            {/* Bento Grid */}
            <div className={styles.bentoGrid} data-kid="1-1-2" data-name="bento grid container">
                {/* Primary Area (2x2) */}
                <FadeUp delay={0.1} className={`${styles.bentoCard} ${styles.primaryCard}`} data-kid="1-1-2-1" data-name="primary skills card">
                    <div className={styles.primaryCardWrapper} data-kid="1-1-2-1-1" data-name="primary skills content wrapper">
                        <div className="mb-12" data-kid="1-1-2-1-1-1" data-name="primary skills text container">
                            <span className={styles.primaryFocusTag} data-kid="1-1-2-1-1-1-1" data-name="primary focus tag">
                                Primary Focus
                            </span>
                            <h3 className={styles.primarySkillsHeading} data-kid="1-1-2-1-1-1-2" data-name="primary skills heading">
                                Frontend Development
                            </h3>
                            <p className={styles.primarySkillsDesc} data-kid="1-1-2-1-1-1-3" data-name="primary skills description">
                                Building robust, scalable, and pixel-perfect user interfaces using modern web technologies.
                            </p>
                        </div>
                        <div className={styles.skillTagsContainer} data-kid="1-1-2-1-1-2" data-name="skill tags container">
                            <span className={styles.skillTag} data-kid="1-1-2-1-1-2-1" data-name="react skill tag">
                                React
                            </span>
                            <span className={styles.skillTag} data-kid="1-1-2-1-1-2-2" data-name="html css skill tag">
                                HTML / CSS
                            </span>
                            <span className={styles.skillTag} data-kid="1-1-2-1-1-2-3" data-name="javascript skill tag">
                                JavaScript
                            </span>
                            <span className={styles.skillTag} data-kid="1-1-2-1-1-2-4" data-name="react native skill tag">
                                React Native (Soon)
                            </span>
                        </div>
                    </div>
                </FadeUp>
                {/* Secondary Area 1 */}
                <FadeUp delay={0.2} className={`${styles.bentoCard} ${styles.secondaryCard}`} data-kid="1-1-2-2" data-name="ui/ux skills card">
                    <h4 className={styles.secondaryHeading} data-kid="1-1-2-2-1" data-name="ui/ux skills heading">
                        Design &amp; Management
                    </h4>
                    <ul className={styles.skillsList} data-kid="1-1-2-2-2" data-name="ui/ux skills list">
                        <li className={styles.skillsListItem} data-kid="1-1-2-2-2-1" data-name="wireframing list item">
                            <span className={styles.bulletIcon} data-kid="1-1-2-2-2-1-1" data-name="bullet icon">
                            </span>
                            Figma
                        </li>
                        <li className={styles.skillsListItem} data-kid="1-1-2-2-2-2" data-name="prototyping list item">
                            <span className={styles.bulletIcon} data-kid="1-1-2-2-2-2-1" data-name="bullet icon">
                            </span>
                            Canva &amp; CapCut
                        </li>
                        <li className={styles.skillsListItem} data-kid="1-1-2-2-2-3" data-name="design systems list item">
                            <span className={styles.bulletIcon} data-kid="1-1-2-2-2-3-1" data-name="bullet icon">
                            </span>
                            Project Management
                        </li>
                        <li className={styles.skillsListItem} data-kid="1-1-2-2-2-4" data-name="figma list item">
                            <span className={styles.bulletIcon} data-kid="1-1-2-2-2-4-1" data-name="bullet icon">
                            </span>
                            Teamwork &amp; Communication
                        </li>
                    </ul>
                </FadeUp>
                {/* Secondary Area 2 */}
                <FadeUp delay={0.3} className={`${styles.bentoCard} ${styles.secondaryCard}`} data-kid="1-1-2-3" data-name="backend skills card">
                    <h4 className={styles.secondaryHeading} data-kid="1-1-2-3-1" data-name="backend skills heading">
                        Backend &amp; Data
                    </h4>
                    <ul className={styles.skillsList} data-kid="1-1-2-3-2" data-name="backend skills list">
                        <li className={styles.skillsListItem} data-kid="1-1-2-3-2-1" data-name="node list item">
                            <span className={styles.bulletIcon} data-kid="1-1-2-3-2-1-1" data-name="bullet icon">
                            </span>
                            Node.js
                        </li>
                        <li className={styles.skillsListItem} data-kid="1-1-2-3-2-2" data-name="express list item">
                            <span className={styles.bulletIcon} data-kid="1-1-2-3-2-2-1" data-name="bullet icon">
                            </span>
                            PHP
                        </li>
                        <li className={styles.skillsListItem} data-kid="1-1-2-3-2-3" data-name="postgresql list item">
                            <span className={styles.bulletIcon} data-kid="1-1-2-3-2-3-1" data-name="bullet icon">
                            </span>
                            MySQL
                        </li>
                        <li className={styles.skillsListItem} data-kid="1-1-2-3-2-4" data-name="api list item">
                            <span className={styles.bulletIcon} data-kid="1-1-2-3-2-4-1" data-name="bullet icon">
                            </span>
                            Laravel
                        </li>
                    </ul>
                </FadeUp>
                {/* Secondary Area 3 */}
                <FadeUp delay={0.4} className={`${styles.bentoCard} ${styles.devopsCard}`} data-kid="1-1-2-4" data-name="devops skills card">
                    <div data-kid="1-1-2-4-1" data-name="devops description container">
                        <h4 className={styles.devopsHeading} data-kid="1-1-2-4-1-1" data-name="devops heading">
                            Tools &amp; DevOps
                        </h4>
                        <p className={styles.devopsToolsList} data-kid="1-1-2-4-1-2" data-name="devops tools list">
                            VSCode, Git, GitHub, XAMPP, Netlify
                        </p>
                    </div>
                    <div className={styles.devopsCommandsGrid} data-kid="1-1-2-4-2" data-name="devops commands grid">
                        <span data-kid="1-1-2-4-2-1" data-name="git command">
                            &gt; git commit -m
                        </span>
                        <span data-kid="1-1-2-4-2-2" data-name="docker command">
                            &gt; docker build .
                        </span>
                        <span data-kid="1-1-2-4-2-3" data-name="npm command">
                            &gt; npm run deploy
                        </span>
                        <span data-kid="1-1-2-4-2-4" data-name="pnpm command">
                            &gt; pnpm dev
                        </span>
                    </div>
                </FadeUp>
            </div>
        </div>
    </section>
  );
}

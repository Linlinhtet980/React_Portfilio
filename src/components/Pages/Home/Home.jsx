import { ArrowUpRight, Download } from 'lucide-react'
import styles from './Home.module.css'
import heroImage from '../../../assets/Lin thu rein htet.jpg'

function FloatingShape({ className, children }) {
  return <div className={[styles.floatingShape, className].join(' ')} aria-hidden="true">{children}</div>
}

export default function Home() {
  return (
    <section className={['container', styles.hero].join(' ')} id="top">
      <FloatingShape className={styles.shapeOne}>&lt;/&gt;</FloatingShape>
      <FloatingShape className={styles.shapeTwo}>✦</FloatingShape>
      <FloatingShape className={styles.shapeThree}>{"{ }"}</FloatingShape>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><span className={styles.statusDot} /> Available for opportunities <span className={styles.eyebrowLine} /></p>
        <h1>LIN THU<br /><span>REIN HTET</span></h1>
        <p className={styles.heroDescription}>Aspiring Junior Full-Stack Developer with a background in Mathematics and Business. Passionate about building minimal aesthetics and robust performance web applications.</p>
        <div className={styles.heroActions}>
          <a className="button button-primary" href="#projects">View projects <ArrowUpRight size={17} /></a>
          <a className="button button-ghost" href="/Lin_Thu_Rein_Htet_Web_Developer_CV.pdf" download><Download size={16} /> Download CV</a>
        </div>
      </div>
      <div className={styles.heroPortrait} aria-label="Portrait of Lin Thu Rein Htet">
        <div className={styles.portraitGlow} />
        <img src={heroImage} alt="Lin Thu Rein Htet" />
        <div className={styles.portraitCaption}><span>MYANMAR / 2026</span><span>FULL-STACK DEVELOPER</span></div>
      </div>
      <div className={styles.scrollNote}><span>Scroll to explore</span><span className={styles.scrollLine} /></div>
    </section>
  )
}

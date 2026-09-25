import { ArrowUpRight, Download, Check } from 'lucide-react'
import { useState } from 'react'
import styles from './Home.module.css'
import heroImage from '../../../assets/Lin thu rein htet.jpg'
import ScrollReveal from '../../ScrollReveal/ScrollReveal'

function FloatingShape({ className, children }) {
  return <div className={[styles.floatingShape, className].join(' ')} aria-hidden="true">{children}</div>
}

export default function Home() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    <section className={['container', styles.hero].join(' ')} id="top">
      <FloatingShape className={styles.shapeOne}>&lt;/&gt;</FloatingShape>
      <FloatingShape className={styles.shapeThree}>{"{ }"}</FloatingShape>
      
      <ScrollReveal className={styles.heroCopy} animation="fadeRight" duration={0.8}>
        <p className={styles.eyebrow}><span className={styles.statusDot} /> Available for opportunities <span className={styles.eyebrowLine} /></p>
        <h1>LIN THU<br /><span>REIN HTET</span></h1>
        <p className={styles.heroDescription}>Aspiring Junior Full-Stack Developer with a background in Mathematics and Business. Passionate about building minimal aesthetics and robust performance web applications.</p>
        <div className={styles.heroActions}>
          <a className="button button-primary" href="#projects">View projects <ArrowUpRight size={17} /></a>
          <a 
            className={`button button-ghost ${styles.downloadBtn} ${isDownloaded ? styles.downloaded : ''}`} 
            href="/public/Maastricht Blue Minimalist Professional Resume Web Developer.pdf" 
            download
            onClick={handleDownload}
          >
            <div className={styles.iconWrapper}>
              <Download size={16} className={styles.downloadIcon} />
              <Check size={16} className={styles.checkIcon} />
            </div>
            <span className={styles.btnTextWrapper}>
              <span className={styles.textOriginal}>Download CV</span>
              <span className={styles.textSuccess}>Downloaded</span>
            </span>
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal className={styles.heroPortrait} animation="scaleUp" duration={0.8} delay={0.2} aria-label="Portrait of Lin Thu Rein Htet">
        <div className={styles.portraitGlow} />
        <img src={heroImage} alt="Lin Thu Rein Htet" />
        <div className={styles.portraitCaption}><span>MYANMAR / 2026</span><span>FULL-STACK DEVELOPER</span></div>
      </ScrollReveal>

      <ScrollReveal className={styles.scrollNote} animation="fadeUp" delay={0.8}>
        <span>Scroll to explore</span><span className={styles.scrollLine} />
      </ScrollReveal>
    </section>
  )
}

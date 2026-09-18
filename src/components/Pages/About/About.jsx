import  { useState } from 'react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import styles from './About.module.css'

export default function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="section container" id="about">
      <div className={styles.sectionLabel}>01 <span>About me</span></div>
      <div className={styles.aboutGrid}>
        <h2>Turning curiosity<br />into <em>capability.</em></h2>
        <div>
          <p className={styles.lead}>
            My journey into software development didn't start with a computer science degree; it started in an office.
          </p>
          <p>
            During my years as an Office Assistant, I spent countless hours managing data and workflows. It was there I realized the transformative power of technology—I wanted to build the systems that made work easier and faster.
          </p>
          
          <div className={[styles.storyWrapper, expanded ? styles.expanded : ''].join(' ')}>
            <div className={styles.storyContent}>
              <p>
                Driven by this passion, I left my administrative role to dedicate myself entirely to mastering web development at O-Technique International. Through intensive, full-time study, I quickly absorbed modern technologies like React, PHP, and Laravel, turning my curiosity into tangible technical capability.
              </p>
              <p>
                Today, I bring a unique blend of skills: strong analytical logic from my Mathematics background, combined with the meticulous organization and teamwork from my office experience. My goal is to leverage this expertise to build robust applications that solve real-world problems.
              </p>
            </div>
          </div>

          <button 
            className={styles.textLink} 
            onClick={() => setExpanded(!expanded)}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', marginTop: expanded ? '15px' : '18px' }}
          >
            {expanded ? 'Show less' : 'More about my journey'} 
            {expanded ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          </button>
        </div>
      </div>
    </section>
  )
}

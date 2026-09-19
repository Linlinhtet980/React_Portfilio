import { useState } from 'react'
import { Code2, GraduationCap, BriefcaseBusiness, ChevronDown } from 'lucide-react'
import styles from './Education.module.css'
import ScrollReveal from '../../ScrollReveal/ScrollReveal'

const timeline = [
  { 
    year: '2025 - PRESENT', 
    title: 'Full-Stack Developer Trainee', 
    place: 'O-Technique International Myanmar', 
    icon: Code2,
    description: "Mastered the complete Software Development Lifecycle-from system design to deployment-while building full-stack applications to solve real-world business problems."
  },
  { 
    year: '2025', 
    title: 'B.Sc. Mathematics', 
    place: 'Hakha University - GPA 3.33', 
    icon: GraduationCap,
    description: "Graduating with a 3.33 GPA demonstrates my persistence and ability to quickly grasp and master complex, abstract concepts."
  },
  { 
    year: '2021 - 2024', 
    title: 'Office Assistant', 
    place: 'UEC (Union Election Committee)', 
    icon: BriefcaseBusiness,
    description: "Collaborated across various departments, developing strong communication soft skills and the adaptability to efficiently resolve diverse operational challenges."
  },
  { 
    year: '2020', 
    title: 'Bachelor of Business Association', 
    place: 'Chin Christian University', 
    icon: GraduationCap,
    description: "Gained a deep understanding of business operations and management, allowing me to build technical solutions that directly address and solve core business needs."
  },
]

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="section container" id="experience">
      <ScrollReveal className={styles.sectionLabel} animation="fadeUp">04 <span>Experience & education</span></ScrollReveal>
      <ScrollReveal className={styles.sectionHeading} animation="fadeUp" delay={0.1}>
        <h2>The path <em>so far.</em></h2>
        <p>Every chapter adds a new perspective to the way I build and collaborate.</p>
      </ScrollReveal>
      <div className={styles.timeline}>
        {timeline.map((item, index) => { 
          const Icon = item.icon;
          const isExpanded = expandedIndex === index;
          
          return (
            <ScrollReveal 
              className={styles.timelineItem} 
              key={item.year + item.title}
              animation="fadeUp"
              delay={0.1 * index}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'contents' }} onClick={() => toggleExpand(index)}>
                <div className={styles.timelineMarker}><Icon size={17} /></div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3>{item.title}</h3>
                    <ChevronDown 
                      size={18} 
                      style={{ 
                        color: 'var(--muted)', 
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }} 
                    />
                  </div>
                  <p>{item.place}</p>
                  
                  <div className={[styles.timelineDesc, isExpanded ? styles.expanded : ''].join(' ')}>
                    <div className={styles.timelineDescInner}>
                      {item.description}
                    </div>
                  </div>

                </div>
                <span className={styles.timelineIndex}>0{index + 1}</span>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}

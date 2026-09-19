import { Code2, Check } from 'lucide-react'
import styles from './Skills.module.css'
import ScrollReveal from '../../ScrollReveal/ScrollReveal'

const skillGroups = [
  { 
    number: '01', 
    title: 'Frontend', 
    items: [
      { name: 'HTML', icon: 'fa-brands fa-html5', level: 'expert' },
      { name: 'CSS', icon: 'fa-brands fa-css3-alt', level: 'expert' },
      { name: 'JavaScript', icon: 'fa-brands fa-js', level: 'expert' },
      { name: 'React (Learning)', icon: 'fa-brands fa-react', level: 'learning' },
      { name: 'React Native (Soon)', icon: 'fa-brands fa-react', level: 'learning' }
    ], 
    accent: 'lime' 
  },
  { 
    number: '02', 
    title: 'Backend & Database', 
    items: [
      { name: 'PHP', icon: 'fa-brands fa-php', level: 'expert' },
      { name: 'Laravel', icon: 'fa-brands fa-laravel', level: 'expert' },
      { name: 'MySQL', icon: 'fa-solid fa-database', level: 'learning' },
      { name: 'Node.js (Learning)', icon: 'fa-brands fa-node-js', level: 'learning' }
    ], 
    accent: 'violet' 
  },
  { 
    number: '03', 
    title: 'Design & Management', 
    items: [
      { name: 'Figma', icon: 'fa-brands fa-figma', level: 'expert' },
      { name: 'Canva', icon: 'fa-solid fa-pen-nib', level: 'expert' },
      { name: 'CapCut', icon: 'fa-solid fa-video', level: 'learning' },
      { name: 'Project Management', icon: 'fa-solid fa-list-check', level: 'learning' }
    ], 
    accent: 'blue' 
  },
  { 
    number: '04', 
    title: 'Tools', 
    items: [
      { name: 'VSCode', icon: 'fa-solid fa-code', level: 'expert' },
      { name: 'Git', icon: 'fa-brands fa-git-alt', level: 'learning' },
      { name: 'GitHub', icon: 'fa-brands fa-github', level: 'expert' },
      { name: 'XAMPP', icon: 'fa-solid fa-server', level: 'expert' },
      { name: 'Netlify', icon: 'fa-solid fa-cloud-arrow-up', level: 'expert' }
    ], 
    accent: 'orange' 
  },
]

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <ScrollReveal className={styles.sectionLabel} animation="fadeUp">03 <span>Technical toolkit</span></ScrollReveal>
      <ScrollReveal className={styles.sectionHeading} animation="fadeUp" delay={0.1}>
        <h2>Built on a <em>curious mind.</em></h2>
        <p>A growing toolkit for thoughtful, useful, and well-crafted digital products.</p>
      </ScrollReveal>
      <div className={styles.skillsGrid}>
        {skillGroups.map((group, idx) => {
          const accentClass = group.accent === 'lime' ? styles.accentLime : group.accent === 'violet' ? styles.accentViolet : group.accent === 'blue' ? styles.accentBlue : styles.accentOrange;
          return (
            <ScrollReveal className={[styles.skillCard, accentClass].join(' ')} key={group.number} animation="fadeUp" delay={0.1 * idx}>
              <div className={styles.skillTop}>
                <span>{group.number}</span>
                <Code2 size={20} />
              </div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map(item => {
                  let checkColor = 'var(--muted)';
                  if (item.level === 'expert') checkColor = '#F5C518'; 
                  if (item.level === 'learning') checkColor = '#3b82f6'; 

                  return (
                    <li key={item.name}>
                      <span style={{ color: checkColor }}><Check size={12} strokeWidth={3} /></span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className={item.icon} style={{ fontSize: '13px', opacity: 0.8, width: '14px', textAlign: 'center' }}></i>
                        {item.name}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </ScrollReveal>
          )
        })}
      </div>
      
      <ScrollReveal style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '12px', color: 'var(--muted)', alignItems: 'center' }} animation="fadeUp" delay={0.4}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ color: '#F5C518' }}><Check size={12} strokeWidth={3} /></span> Proficient
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ color: '#3b82f6' }}><Check size={12} strokeWidth={3} /></span> Learning
        </div>
      </ScrollReveal>
    </section>
  )
}

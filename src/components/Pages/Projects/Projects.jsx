import { ArrowUpRight, GitBranch } from 'lucide-react'
import styles from './Projects.module.css'

const projects = [
  { 
    number: '01', 
    title: 'React Portfolio', 
    type: 'Frontend', 
    icons: ['fa-brands fa-react', 'fa-brands fa-js'],
    repo: 'React_Portfilio', 
    description: 'A modern, responsive personal portfolio website featuring a dark 3D theme. Designed with modular React components and pure CSS to present my technical skills, experience, and projects in a highly professional layout.', 
    accent: 'lime' 
  },
  { 
    number: '02', 
    title: 'Digital Product Marketplace', 
    type: 'E-commerce', 
    icons: ['fa-brands fa-laravel', 'fa-brands fa-php'],
    repo: 'Digital_Product_Marketplace-', 
    description: 'A full-featured e-commerce platform for discovering and purchasing digital products. Includes category-driven browsing, product listings, and a structured checkout workflow built on a robust server-side architecture.', 
    accent: 'violet' 
  },
  { 
    number: '03', 
    title: 'Hotel Management System', 
    type: 'Management', 
    icons: ['fa-brands fa-laravel', 'fa-brands fa-php'],
    repo: 'HotelMS', 
    description: 'A comprehensive hotel management dashboard built for administrators. It streamlines daily operations by centralizing room reservations, guest management, and operational workflows into a single secure platform.', 
    accent: 'blue' 
  },
  { 
    number: '04', 
    title: 'Taxi System', 
    type: 'Transport', 
    icons: ['fa-brands fa-laravel', 'fa-brands fa-php'],
    repo: 'Taxi_System', 
    description: 'A robust transport management system designed to organize rides and drivers. It features role-aware workflows for operators and passengers, backed by a secure relational database.', 
    accent: 'orange' 
  },
  { 
    number: '05', 
    title: 'Coffee Land', 
    type: 'Business', 
    icons: ['fa-brands fa-php', 'fa-brands fa-html5', 'fa-brands fa-css3-alt'],
    repo: 'Coffee_land', 
    description: 'A digital storefront and business management concept for a coffee shop. Features product-focused catalog pages and organized content management, entirely powered by server-side PHP logic.', 
    accent: 'lime' 
  },
  { 
    number: '06', 
    title: 'School Stationery', 
    type: 'Commerce', 
    icons: ['fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-js'],
    repo: 'school_stationary', 
    description: 'A responsive front-end web experience designed for browsing school supplies. Built with pure HTML, CSS, and JS, focusing on clear product presentation and an intuitive user interface across all devices.', 
    accent: 'violet' 
  },
]

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <div className={styles.sectionLabel}>02 <span>Selected projects</span></div>
      <div className={styles.sectionHeading}>
        <h2>Work with <em>purpose.</em></h2>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map(project => {
          const accentClass = project.accent === 'violet' ? styles.accentViolet : project.accent === 'blue' ? styles.accentBlue : project.accent === 'orange' ? styles.accentOrange : '';
          
          return (
            <article className={[styles.projectCard, accentClass].join(' ')} key={project.number}>
              <div className={styles.projectTop}>
                <span>{project.number}</span>
                <a href={"https://github.com/Linlinhtet980/" + project.repo} target="_blank" rel="noreferrer" aria-label={"Open " + project.title + " on GitHub"}><GitBranch size={17} /></a>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  {project.icons.map(icon => (
                    <i key={icon} className={icon} style={{ fontSize: '18px', color: 'var(--muted)' }}></i>
                  ))}
                  <span className={styles.projectType} style={{ marginLeft: 'auto' }}>{project.type}</span>
                </div>
                <h3 style={{ marginTop: '0' }}>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <a className={styles.projectLink} href={"https://github.com/Linlinhtet980/" + project.repo} target="_blank" rel="noreferrer">
                View repository <ArrowUpRight size={14} />
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}

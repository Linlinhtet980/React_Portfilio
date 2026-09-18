import  { useState } from 'react'
import { Mail, GitBranch, Send, Check, Phone, MapPin } from 'lucide-react'
import styles from './Contacts.module.css'

export default function Contacts() {
  const [sent, setSent] = useState(false)

  return (
    <section className={['section container', styles.contact].join(' ')} id="contact">
      <div className={styles.contactCard}>
        <div>
          <div className={styles.sectionLabel}>04 <span>Get in touch</span></div>
          <h2>Let's <em>talk.</em></h2>
          <p>Have a project in mind, or just want to say hello? My inbox is always open.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <a className={styles.emailLink} href="mailto:linpop890@gmail.com">
              <Mail size={17} /> linpop890@gmail.com
            </a>
            <a className={styles.emailLink} href="tel:09890647598">
              <Phone size={17} /> 09-890647598
            </a>
            <div className={styles.emailLink} style={{ cursor: 'default' }}>
              <MapPin size={17} /> Yangon, Insein, Myanmar
            </div>
          </div>

          <div className={styles.socials}>
            <a href="https://www.facebook.com/share/1BvarSo2ys/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://t.me/linthuren" target="_blank" rel="noreferrer" aria-label="Telegram">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://www.linkedin.com/in/lin-thu-rein-htet-35946b356" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Linlinhtet980" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitBranch size={17} />
            </a>
          </div>
        </div>
        <form className={styles.form} onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
          <label htmlFor="name">Your name</label>
          <input className={styles.input} id="name" name="name" placeholder="Jane Smith" required />
          <label htmlFor="email">Email address</label>
          <input className={styles.input} id="email" name="email" type="email" placeholder="jane@company.com" required />
          <label htmlFor="message">Message</label>
          <textarea className={styles.textarea} id="message" name="message" placeholder="Tell me a little about your project..." required />
          <button className="button button-primary" type="submit" style={{marginTop: '20px'}}>
            {sent ? 'Message sent' : 'Send message'} {sent ? <Check size={17} /> : <Send size={15} />}
          </button>
        </form>
      </div>
    </section>
  )
}

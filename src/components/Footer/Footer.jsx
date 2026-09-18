import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={['container', styles.footer].join(' ')}>
      <span>© 2026 Lin Thu Rein Htet</span>
      <span>Designed & built with intention.</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}

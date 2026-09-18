import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Projects from './components/Pages/Projects/Projects'
import Skills from './components/Pages/Skills/Skills'
import Experience from './components/Pages/Education/Education'
import Contacts from './components/Pages/Contacts/Contacts'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <main className={styles.siteShell}>
      <div className={styles.noise} aria-hidden="true" />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contacts />
      <Footer />
    </main>
  )
}

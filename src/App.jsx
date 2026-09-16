import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Skills from './components/Pages/Skills/Skills'
import Projects from './components/Pages/Projects/Projects'
import Education from './components/Pages/Education/Education'
import Contacts from './components/Pages/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import Spotlight from './components/Effects/Spotlight'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading onFinish={() => setIsLoading(false)} />;
  }

  return (
    <div className="app">
      <Spotlight />
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App


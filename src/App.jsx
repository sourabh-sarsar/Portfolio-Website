import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import SkillsStrip from './components/SkillsStrip'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <SkillsStrip />
        <Education />
        <Contact />
      </main>
    </>
  )
}

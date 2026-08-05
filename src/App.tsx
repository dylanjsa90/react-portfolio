import { useEffect } from 'react'
import { meta, hero, about, skills, projects, experience, contact } from './data/portfolio'
import { trackPageView } from './utils/analytics'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

export default function App() {
  useEffect(() => {
    trackPageView()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar name={meta.name} navLinks={meta.navLinks} />
      <main className="flex-1">
        <Hero {...hero} />
        <About {...about} />
        <Skills {...skills} />
        <Projects {...projects} />
        <Experience {...experience} />
        <Contact {...contact} />
      </main>
      <Footer name={meta.name} socials={contact.socials} />
    </div>
  )
}

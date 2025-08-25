import { useEffect, useState } from 'react'
import './index.css'
import { ThemeProvider } from './components/theme/ThemeProvider'
import { Navbar } from './components/navigation/Navbar'
import { Footer } from './components/navigation/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'

function App() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const sectionIds = ['home','about','skills','projects','experience','testimonials','contact']

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar activeSection={activeSection} />
        <main className="container px-4 md:px-6">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
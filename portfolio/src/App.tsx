import React, { useEffect } from 'react'
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Experience from './components/experience'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // SEO Meta tags
    document.title = 'Sumit Kumar - Junior Web Developer | Portfolio'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Sumit Kumar is a passionate Junior Web Developer specializing in PHP, Laravel, React, and modern web technologies. View my portfolio and get in touch for your next project.')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Sumit Kumar is a passionate Junior Web Developer specializing in PHP, Laravel, React, and modern web technologies. View my portfolio and get in touch for your next project.'
      document.head.appendChild(meta)
    }

    // Add other SEO meta tags
    const addMetaTag = (property: string, content: string) => {
      const existingTag = document.querySelector(`meta[property="${property}"]`)
      if (!existingTag) {
        const meta = document.createElement('meta')
        meta.setAttribute('property', property)
        meta.content = content
        document.head.appendChild(meta)
      }
    }

    addMetaTag('og:title', 'Sumit Kumar - Junior Web Developer | Portfolio')
    addMetaTag('og:description', 'Passionate Junior Web Developer specializing in PHP, Laravel, React, and modern web technologies.')
    addMetaTag('og:type', 'website')
    addMetaTag('og:url', window.location.href)
    
    // Add keywords meta tag
    const keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (!keywordsMeta) {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = 'web developer, junior developer, PHP, Laravel, React, JavaScript, MySQL, portfolio, Sumit Kumar'
      document.head.appendChild(meta)
    }

    // Add author meta tag
    const authorMeta = document.querySelector('meta[name="author"]')
    if (!authorMeta) {
      const meta = document.createElement('meta')
      meta.name = 'author'
      meta.content = 'Sumit Kumar'
      document.head.appendChild(meta)
    }

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>
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
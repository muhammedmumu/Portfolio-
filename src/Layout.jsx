import React, { useEffect, useState } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SkillsPage from './components/pages/Skills';
import Experience from './components/pages/Expirence';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Footer from './components/footer/Footer';

export default function Layout() {
  const sections = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ]

  const leftSections = sections.slice(0, 3)
  const rightSections = sections.slice(3, 6)

  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean)

    if (!sectionElements.length) return

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2
      let nextSectionId = sectionElements[0].id
      let nearestDistance = Number.POSITIVE_INFINITY

      sectionElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const sectionCenter = rect.top + rect.height / 2
        const distanceFromViewportCenter = Math.abs(sectionCenter - viewportCenter)

        if (distanceFromViewportCenter < nearestDistance) {
          nearestDistance = distanceFromViewportCenter
          nextSectionId = element.id
        }
      })

      setActiveSection(nextSectionId)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const scrollToSection = (id) => {
    const sectionElement = document.getElementById(id)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const centerTitle = sections.find((section) => section.id === activeSection)?.label || 'HOME'

  return (
    <div className='overflow-x-hidden'>
      <nav className='fixed top-0 left-0 z-50 w-full bg-[#ff4700] px-4 py-3 shadow-md'>
        <div className='mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4'>
          <ul className='flex items-center gap-3 text-sm md:gap-6 md:text-base'>
            {leftSections.map((section) => (
              <li key={`left-${section.id}`}>
                <button
                  type='button'
                  onClick={() => scrollToSection(section.id)}
                  className={`transition duration-200 ${activeSection === section.id ? 'font-bold text-white' : 'text-gray-100 hover:text-white'}`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>

          <h1 className='text-lg font-bold text-white md:text-2xl ewert'>
            --- {centerTitle} ---
          </h1>

          <ul className='flex items-center justify-end gap-3 text-sm md:gap-6 md:text-base'>
            {rightSections.map((section) => (
              <li key={`right-${section.id}`}>
                <button
                  type='button'
                  onClick={() => scrollToSection(section.id)}
                  className={`transition duration-200 ${activeSection === section.id ? 'font-bold text-white' : 'text-gray-100 hover:text-white'}`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Home />
      <About />
      <SkillsPage />
      <Experience />
      <Project />
      <Contact />
      <Footer />

    </div>
  )
}

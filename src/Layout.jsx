import React, { useEffect, useState } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SkillsPage from './components/pages/Skills';
import Experience from './components/pages/Expirence';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import resumePdf from './assets/Resume/Muhammed Mukrim.pdf';

export default function Layout() {
  const sections = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ]

  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({
    title: '',
    shortDescription: '',
    details: '',
    features: [],
    technologies: [],
    links: [],
  })

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
    setMobileMenuOpen(false)
  }

  const centerTitle = sections.find((section) => section.id === activeSection)?.label || 'HOME'
  const leftSections = sections.slice(0, 3)
  const rightSections = sections.slice(3)

  const openModal = (content) => {
    setModalContent(content)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className='overflow-x-hidden'>
      <nav className='fixed top-0 left-0 z-50 w-full bg-[#ff4700] px-3 py-2 shadow-md sm:px-4 sm:py-3 '>
        <div className='mx-auto max-w-6xl'>
          <div className='relative flex items-center justify-between lg:hidden'>
            <div className='w-10' />
            <h1 className='text-center text-white text-2xl font-bold text-black ewert sm:text-xl'>
              --- {centerTitle} ---
            </h1>
            <button
              type='button'
              aria-label='Toggle menu'
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className='flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/20 text-black transition hover:bg-white/30'
            >
              <span className='flex flex-col gap-1.5'>
                <span className='h-0.5 w-5 rounded-full bg-black' />
                <span className='h-0.5 w-5 rounded-full bg-black' />
                <span className='h-0.5 w-5 rounded-full bg-black' />
              </span>
            </button>

            {mobileMenuOpen ? (
              <div className='absolute right-0 top-full mt-2 w-52 rounded-2xl border border-black/10 bg-white p-3 shadow-xl'>
                <div className='grid grid-cols-1 gap-2 text-center text-sm font-semibold'>
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      type='button'
                      onClick={() => scrollToSection(section.id)}
                      className={`rounded-xl px-3 py-2 transition duration-200 ${activeSection === section.id ? 'bg-[#ff4700] text-white' : 'text-slate-700 hover:bg-slate-100'}`}
                    >
                      {section.label}
                    </button>
                  ))}
                  <a
                    href={resumePdf}
                    target='_blank'
                    rel='noreferrer'
                    download='Muhammed-Mukrim-Resume.pdf'
                    className='rounded-xl px-3 py-2  text-slate-700 transition duration-200 hover:bg-slate-100'
                  >
                    RESUME
                  </a>
                </div>
              </div>
            ) : null}
          </div>

          <div className='hidden items-center gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center'>
            <ul className='flex items-center gap-6 text-base'>
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

            <h1 className='text-center text-2xl font-bold text-white ewert'>
              --- {centerTitle} ---
            </h1>

            <ul className='flex items-center justify-end gap-6 text-base'>
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
              <li>
                <a
                  href={resumePdf}
                  target='_blank'
                  rel='noreferrer'
                  download='Muhammed-Mukrim-Resume.pdf'
                  className='rounded-lg border border-white/40 px-3 py-1.5 font-semibold bg-black/50 text-white transition duration-200 hover:bg-white/20'
                >
                  RESUME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Home />
      <About />
      <SkillsPage />
      <Experience onCardClick={openModal} />
      <Project onCardClick={openModal} />
      <Contact />
      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />

    </div>
  )
}

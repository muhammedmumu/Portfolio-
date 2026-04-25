import React from 'react'

import portfolioImg from '../../assets/Screenshot 2026-04-04 170443.png'
import ecommerceImg from '../../assets/project/E-commerce Website.png'
import translatorImg from '../../assets/project/Language Translator.png'
import netflixImg from '../../assets/project/Netflix-Clone.png'
import enrollmentImg from '../../assets/project/Enrollment-Form.png'
import adminPanelImg from '../../assets/project/AdminPanel.png'
import commercialImg from '../../assets/project/Comersial.png'
import dashboardImg from '../../assets/project/Dashboard.png'
import employeeDashImg from '../../assets/project/Employe dash bord.png'
import eventPageImg from '../../assets/project/EventPage.png'
import noiseBg from '../../assets/Bg/noise.png'

const projects = [
  {
    id: 1,
    title: 'Commercial Platform',
    description: 'Full-featured commercial marketplace platform with product listings, vendor management, and transaction handling.',
    tech: ['React', 'Commerce', 'Platform'],
    image: commercialImg,
    viewLink: 'https://muhammedmukrim.vercel.app/',
    codeLink: 'https://github.com/muhammedmumu/Durga-frontend'
  },

  {
    id: 2,
    title: 'Admin Panel',
    description: 'Comprehensive admin dashboard with user management, analytics, and control panel features for easy administration.',
    tech: ['React', 'Dashboard', 'Admin'],
    image: adminPanelImg,
    viewLink: 'https://mu-admin-dashboard.vercel.app',
    codeLink: 'https://github.com/Kafeel-Ahamed/Metrial-UI-React'
  },

  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'A dashboard application designed to manage and display product data in a structured and user-friendly way.',
    tech: ['React', 'Vite', 'Context', 'API', 'CSS'],
    image: dashboardImg,
    viewLink: 'https://mcrud-board.vercel.app/',
    codeLink: 'https://github.com/muhammedmumu/Simple-Dashboard'
  },
  {
    id: 4,
    title: 'Employee Dashboard',
    description: 'Employee management system with attendance tracking, performance metrics, and HR functionalities.',
    tech: ['React', 'HR', 'Management'],
    image: employeeDashImg,
    viewLink: 'https://ui-employee-dashboard.vercel.app',
    codeLink: 'https://github.com/muhammedmumu/Tables'
  },
  {
    id: 5,
    title: 'E-commerce Website',
    description: 'Shop fashion, electronics, and home goods with fast delivery, secure checkout, and great customer support.',
    tech: ['React', 'E-commerce', 'Vercel'],
    image: ecommerceImg,
    viewLink: 'https://e-commers-m.vercel.app',
    codeLink: 'https://github.com/muhammedmumu/E-commers'
  },
  {
    id: 6,
    title: 'Event Management',
    description: 'Event hosting and management platform with event creation, registration, and ticketing features.',
    tech: ['React', 'Events', 'Platform'],
    image: eventPageImg,
    viewLink: 'https://event-registration-kappa.vercel.app',
    codeLink: ''
  }, {
    id: 7,
    title: 'Netflix-Clone',
    description: 'Built a responsive Netflix clone using HTML and CSS, showcasing sleek UI and strong design skills.',
    tech: ['HTML', 'CSS', 'Clone UI'],
    image: netflixImg,
    viewLink: 'https://mukrim-netclone.vercel.app/',
    codeLink: 'https://github.com/muhammedmumu/Netflix'
  },
  {
    id: 8,
    title: 'Language Translator',
    description: 'User-friendly translator web app using Google Translate API with responsive design in HTML, CSS, JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    image: translatorImg,
    viewLink: 'https://muhammedmumu.github.io/Language/',
    codeLink: 'https://github.com/muhammedmumu/Language'
  },





  {
    id: 9,
    title: 'Enrollment-Form',
    description: 'Developed a responsive enrollment form with secure payment integration using HTML, CSS, and Bootstrap.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    image: enrollmentImg,
    viewLink: '',
    codeLink: ''
  },



]

function ProjectCard({ project, onCardClick }) {
  return (
    <div
      className='group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-gradient-to-br from-slate-800/40 to-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/80 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2'
      onClick={() => onCardClick({
        title: project.title,
        shortDescription: project.description,
        details: project.description,
        features: project.tech,
        technologies: project.tech,
        links: [
          project.viewLink ? { label: 'View', url: project.viewLink } : null,
          project.codeLink ? { label: 'Code', url: project.codeLink } : null,
        ].filter(Boolean),
      })}
    >
      {/* Card background accent */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100' />

      {/* Image area */}
      <div className='relative mb-4 overflow-hidden rounded-lg border border-cyan-400/30'>
        <img
          src={project.image}
          alt={project.title}
          draggable={false}
          className='h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>

      {/* Content */}
      <div className='relative'>
        <h3 className='mb-3 text-lg font-semibold text-white transition-colors group-hover:text-cyan-100'>
          {project.title}
        </h3>

        <p className='mb-4 text-sm leading-relaxed text-slate-300 line-clamp-3'>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className='flex flex-wrap gap-2'>
          {project.tech.map((tech) => (
            <span
              key={tech}
              className='inline-block rounded-full bg-cyan-900/40 px-2.5 py-1 text-xs font-medium text-cyan-200 border border-cyan-500/40 transition-all group-hover:bg-cyan-900/60 group-hover:border-cyan-400/60'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='mt-5 flex gap-3'>
          {project.viewLink ? (
            <a
              href={project.viewLink}
              target='_blank'
              rel='noreferrer'
              className='rounded-lg bg-[#0099ff] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#0087e0]'
              onClick={(e) => e.stopPropagation()}
            >
              View
            </a>
          ) : null}
          {project.codeLink ? (
            <a
              href={project.codeLink}
              target='_blank'
              rel='noreferrer'
              className='rounded-lg border border-[#ff4700] px-3 py-1.5 text-xs font-semibold text-[#ffb089] transition hover:bg-[#ff4700]/20'
              onClick={(e) => e.stopPropagation()}
            >
              Code
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default function Project({ onCardClick }) {
  return (
    <div
      id='projects'
      className='relative w-screen min-h-screen px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24'
      style={{
        backgroundColor: 'rgb(255, 240, 224)',
        backgroundImage: `url(${noiseBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '220px 220px',
      }}
    >
      {/* Background accents */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.08),transparent_50%)] pointer-events-none' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none' />

      {/* Content container */}
      <div className='relative z-10 mx-auto max-w-7xl'>
        {/* Section Header */}
        <div className='mb-16 space-y-4 text-center'>
          <h2
            className='text-3xl font-bold text-white sm:text-4xl lg:text-5xl'
            style={{
              fontFamily: 'Mori, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              lineHeight: 1,
              color: 'black',
            }}
          >
            Featured <span className='text-transparent bg-clip-text bg-[#ff4700]'>Projects</span>
          </h2>
          <p className='mx-auto max-w-2xl text-sm sm:text-base lg:text-lg'>
            A collection of projects showcasing my skills in web development, design, and problem-solving across frontend and backend technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onCardClick={onCardClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

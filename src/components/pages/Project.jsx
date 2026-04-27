import React from 'react'

import ecommerceImg from '../../assets/project/E-commerce Website.png'
import translatorImg from '../../assets/project/Language Translator.png'
import netflixImg from '../../assets/project/Netflix-Clone.png'
import enrollmentImg from '../../assets/project/Enrollment-Form.png'
import adminPanelImg from '../../assets/project/AdminPanel.png'
import commercialImg from '../../assets/project/Comersial.png'
import dashboardImg from '../../assets/project/Dashboard.png'
import Gentric from '../../assets/project/Gentric.png'
import employeeDashImg from '../../assets/project/Employe dash bord.png'
import eventPageImg from '../../assets/project/EventPage.png'
import noiseBg from '../../assets/Bg/noise.png'

const projects = [
  {
    id: 10,
    title: 'Gentric - Reusable React UI Components Library',
    projectName: 'Gentric - Reusable React UI Components Library',
    role: 'Functional frontend',
    duration: 'Internship project',
    description: 'A frontend project to design and showcase reusable dashboard-style components.',
    tech: ['React', 'Material UI', 'MUI Data Grid', 'Storybook', 'Vite'],
    details: `I built this project during my internship to focus on creating reusable UI components.
The goal was to understand how large applications maintain consistency across different sections.
I worked on building multiple UI modules and combining them into a single structured layout.
While doing this, I explored advanced table components and component isolation using Storybook.
This project helped me think more about scalability and reusability in frontend development.`,
    features: [
      'Reusable components (tables, tabs, inputs, buttons, headers, lists)',
      'Dashboard modules (metrics, rankings, trends, summaries, multi-form views)',
      'Advanced data tables using MUI Data Grid',
      'Shared responsive layout with structured composition',
      'Storybook setup for independent component preview and documentation',
    ],
    technologies: ['React', 'Vite', 'Material UI', 'MUI Data Grid', 'React Router', 'Emotion', 'Storybook'],
    phases: [
      {
        title: 'Purpose',
        description: 'A frontend project to design and showcase reusable dashboard-style components. It focuses on maintaining consistency, usability, and structured data presentation.',
      },
      {
        title: 'Type',
        description: 'Functional frontend',
      },
      {
        title: 'What I Built',
        showcaseTitle: 'Core implementation',
        showcase: [
          'Reusable components (tables, tabs, inputs, buttons, headers, lists)',
          'Dashboard modules (metrics, rankings, trends, summaries, multi-form views)',
          'Advanced data tables using MUI Data Grid',
          'Shared responsive layout with structured composition',
          'Storybook setup for independent component preview and documentation',
        ],
      },
      {
        title: 'Tech Stack',
        description: 'React · Vite · Material UI · MUI Data Grid · React Router · Emotion · Storybook',
      },
      {
        title: 'Takeaway',
        learned: [
          'This project helped me understand how to build reusable and scalable UI components.',
          'I improved my ability to organize code and maintain consistency across multiple modules.',
          'Working with Storybook also gave me clarity on documenting and testing components independently.',
        ],
      },
    ],
    image: Gentric,
    viewLink: 'https://dashboard-gentric.vercel.app/',
    codeLink: 'https://github.com/muhammedmumu/Gentric-UI'
  },

  {
    id: 1,
    title: 'Commercial Platform',
    projectName: 'Daga Developers Landing Page Clone',
    role: 'UI-only (static frontend)',
    duration: 'Internship project',
    description: 'Responsive real-estate landing page clone created to practice layout structuring and visual design.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    details: `I built this project during the early phase of my internship as part of a UI practice task.
We selected a commercial real-estate website and recreated it to understand layout and structure.
I implemented one full version using pure HTML and CSS.
Alongside this, I also explored the same design using Tailwind, Bootstrap, and Material UI.
This helped me compare different styling approaches and understand their real-world usage.`,
    features: [
      'Multi-section landing page (hero, about, projects, services, testimonials, blog, newsletter, footer)',
      'Reusable layouts for cards, grids, and content sections',
      'CSS-based animations for hero and testimonial areas',
      'Fully responsive design with mobile navigation',
      'Consistent styling with custom typography, spacing, and CTA elements',
    ],
    technologies: ['HTML', 'CSS (Flexbox, Grid, Animations)', 'Google Fonts'],
    phases: [
      {
        title: 'Purpose',
        description: 'A responsive real-estate landing page clone created to practice layout structuring and visual design. It showcases project listings, services, and brand sections in a single-page experience.',
      },
      {
        title: 'Type',
        description: 'UI-only (static frontend)',
      },
      {
        title: 'What I Built',
        showcaseTitle: 'Core implementation',
        showcase: [
          'Multi-section landing page (hero, about, projects, services, testimonials, blog, newsletter, footer)',
          'Reusable layouts for cards, grids, and content sections',
          'CSS-based animations for hero and testimonial areas',
          'Fully responsive design with mobile navigation',
          'Consistent styling with custom typography, spacing, and CTA elements',
        ],
      },
      {
        title: 'Tech Stack',
        description: 'HTML · CSS (Flexbox, Grid, Animations) · Google Fonts',
      },
      {
        title: 'Takeaway',
        learned: [
          'This project helped me strengthen my fundamentals in HTML and CSS by building a complete layout from scratch.',
          'By recreating the same design using Tailwind, Bootstrap, and Material UI, I understood the differences between styling approaches.',
          'It also played a key role in starting my learning journey with Material UI and component-based design.',
        ],
      },
    ],
    image: commercialImg,
    viewLink: 'https://muhammedmukrim.vercel.app/',
    codeLink: 'https://github.com/muhammedmumu/Durga-frontend'
  },

  {
    id: 2,
    title: 'Admin Panel',
    projectName: 'Admin Dashboard',
    role: 'Functional frontend',
    duration: 'Internship project',
    description: 'Comprehensive admin dashboard with user management, analytics, and control panel features for easy administration.',
    tech: ['React', 'Material UI', 'Dashboard'],
    details: `I built this dashboard during the early phase of my internship while learning Material UI.
At the beginning, working with Material UI felt a bit challenging as I was still understanding its structure and styling approach.
As I continued building, I started getting comfortable with its components and design system.
This project helped me understand how real dashboards are structured with multiple sections and data views.
Over time, development became faster and more efficient once I got used to the framework.`,
    features: [
      'Routed dashboard layout with sidebar, header, and breadcrumbs',
      'Reusable components for cards, tables, charts, and sections',
      'Data views for KPIs, property listings, transactions, surveys, and analytics',
      'Theme-based styling and responsive layouts using Material UI',
      'Structured setup ready for API integration and shared state',
    ],
    technologies: ['React', 'Vite', 'JavaScript', 'Material UI', 'React Router', 'Axios', 'React Query', 'Chart.js', 'Recharts', 'MUI Data Grid'],
    phases: [
      {
        title: 'Purpose',
        description: 'A responsive admin dashboard designed to manage and visualize operational data across multiple sections. Built to present KPIs, charts, and structured data in a clean workspace.',
      },
      {
        title: 'Type',
        description: 'Functional frontend',
      },
      {
        title: 'What I Built',
        showcaseTitle: 'Core implementation',
        showcase: [
          'Routed dashboard layout with sidebar, header, and breadcrumbs',
          'Reusable components for cards, tables, charts, and sections',
          'Data views for KPIs, property listings, transactions, surveys, and analytics',
          'Theme-based styling and responsive layouts using Material UI',
          'Structured setup ready for API integration and shared state',
        ],
      },
      {
        title: 'Tech Stack',
        description: 'React · Vite · JavaScript · Material UI · React Router · Axios · React Query · Chart.js · Recharts · MUI Data Grid',
      },
      {
        title: 'Takeaway',
        learned: [
          'This project was a turning point in my learning.',
          'It helped me understand how powerful Material UI is for building faster, consistent, and scalable interfaces.',
          'It also gave me confidence in working with structured UI systems and real-world dashboard patterns.',
        ],
      },
    ],
    image: adminPanelImg,
    viewLink: 'https://admin-dashboard-ulgt.vercel.app/',
    codeLink: 'https://github.com/Kafeel-Ahamed/Metrial-UI-React'
  },

  {
    id: 3,
    title: 'Simple Dashboard',
    projectName: 'Simple Dashboard',
    role: 'CRUD app (frontend-only, local state)',
    duration: 'Internship project',
    description: 'A React-based admin dashboard to manage product data in a clean and structured interface.',
    tech: ['React', 'Vite', 'Material UI', 'Context API', 'CRUD'],
    details: `I built this project during my internship as part of practicing real-world dashboard patterns.
It is inspired by common admin dashboards used in production applications.
The goal was to understand how product listing systems work with CRUD operations.
While building this, I focused on structuring components and managing UI state properly.
It also helped me explore theming and responsive behavior in a practical way.`,
    features: [
      'Dashboard layout with sidebar, header, and product table',
      'Add, edit (modal-based), and delete product functionality',
      'State management using React Context',
      'Reusable UI components using Material UI',
      'Dark mode toggle and responsive sidebar behavior',
    ],
    technologies: ['React', 'Vite', 'JavaScript', 'Material UI', 'Context API', 'date-fns'],
    phases: [
      {
        title: 'Purpose',
        description: 'A React-based admin dashboard to manage product data in a clean and structured interface. It allows users to perform basic CRUD operations on an inventory-style list.',
      },
      {
        title: 'Type',
        description: 'CRUD app (frontend-only, local state)',
      },
      {
        title: 'What I Built',
        showcaseTitle: 'Core implementation',
        showcase: [
          'Dashboard layout with sidebar, header, and product table',
          'Add, edit (modal-based), and delete product functionality',
          'State management using React Context',
          'Reusable UI components using Material UI',
          'Dark mode toggle and responsive sidebar behavior',
        ],
      },
      {
        title: 'Tech Stack',
        description: 'React · Vite · JavaScript · Material UI · Context API · date-fns',
      },
      {
        title: 'Takeaway',
        learned: [
          'This project helped me understand how real admin dashboards are structured and how CRUD operations are handled in the UI.',
          'I improved my ability to manage state and design reusable components.',
          'It also gave me hands-on experience with theming (light/dark mode) and building responsive dashboards.',
        ],
      },
    ],
    image: dashboardImg,
    viewLink: 'https://mcrud-board.vercel.app/',
    codeLink: 'https://github.com/muhammedmumu/Simple-Dashboard'
  },
  {
    id: 4,
    title: 'Employee Management Table',
    projectName: 'Employee Management Table',
    role: 'Functional frontend',
    duration: 'Internship project',
    description: 'A frontend dashboard for managing and browsing employee records in a structured table.',
    tech: ['React', 'Vite', 'Material UI', 'Data Table', 'Management'],
    details: `I built this project during my internship while exploring real-world data table patterns.
The goal was to understand how employee management systems handle large sets of data.
I focused on building a clean and interactive table with sorting, filtering, and pagination.
While working on this, I paid attention to usability and how users interact with table data.
This project helped me improve my understanding of structured UI and data handling.`,
    features: [
      'Responsive data table with sticky headers and structured columns',
      'Client-side sorting (name, email, role, status, join date, salary)',
      'Search functionality and collapsible filters',
      'Pagination with selectable page size and state handling',
      'Row-level actions (view, edit, delete) with status/role indicators',
    ],
    technologies: ['React', 'Vite', 'JavaScript', 'Material UI', 'Emotion'],
    phases: [
      {
        title: 'Purpose',
        description: 'A frontend dashboard for managing and browsing employee records in a structured table. Designed to practice real-world table features like search, filtering, sorting, and pagination.',
      },
      {
        title: 'Type',
        description: 'Functional frontend',
      },
      {
        title: 'What I Built',
        showcaseTitle: 'Core implementation',
        showcase: [
          'Responsive data table with sticky headers and structured columns',
          'Client-side sorting (name, email, role, status, join date, salary)',
          'Search functionality and collapsible filters',
          'Pagination with selectable page size and state handling',
          'Row-level actions (view, edit, delete) with status/role indicators',
        ],
      },
      {
        title: 'Tech Stack',
        description: 'React · Vite · JavaScript · Material UI · Emotion',
      },
      {
        title: 'Takeaway',
        learned: [
          'This project helped me understand how complex table interactions are handled in real applications.',
          'I improved my approach to building clean, user-friendly data views with multiple controls.',
          'It also strengthened my skills in structuring UI components for better usability and scalability.',
        ],
      },
    ],
    image: employeeDashImg,
    viewLink: 'https://ui-employee-dashboard.vercel.app',
    codeLink: 'https://github.com/muhammedmumu/Tables'
  },
  {
    id: 5,
    title: 'E-commerce Store Frontend',
    projectName: 'E-commerce Store Frontend',
    description: 'A responsive shopping application where users can browse products, view details, and manage a cart.',
    tech: ['React', 'React Router', 'Context API', 'E-commerce', 'Cart'],
    details: `I built this project during my internship to simulate a real-world e-commerce flow.
The goal was to understand how users interact with products, categories, and cart systems.
I focused on handling routing, state management, and API integration.
While building this, I also considered edge cases like backend unavailability.
This project helped me connect multiple features into a single working application.`,
    features: [
      'Route-based pages (home, categories, product details, cart, login/signup)',
      'Product filtering, sorting, and incremental loading',
      'Cart management with quantity updates and total calculation',
      'API integration for products, authentication, and cart sync',
      'Local fallback mode using LocalStorage when backend is unavailable',
    ],
    technologies: ['React', 'React Router', 'Context API', 'JavaScript', 'CSS', 'Fetch API', 'LocalStorage'],
    phases: [
      {
        title: 'Purpose',
        description: 'A responsive shopping application where users can browse products, view details, and manage a cart. Designed to simulate a real store experience with categories, authentication, and cart persistence.',
      },
      {
        title: 'Type',
        description: 'Functional frontend',
      },
      {
        title: 'What I Built',
        showcaseTitle: 'Core implementation',
        showcase: [
          'Route-based pages (home, categories, product details, cart, login/signup)',
          'Product filtering, sorting, and incremental loading',
          'Cart management with quantity updates and total calculation',
          'API integration for products, authentication, and cart sync',
          'Local fallback mode using LocalStorage when backend is unavailable',
        ],
      },
      {
        title: 'Tech Stack',
        description: 'React · React Router · Context API · JavaScript · CSS · Fetch API · LocalStorage',
      },
      {
        title: 'Takeaway',
        learned: [
          'This project helped me understand how different parts of an application connect together.',
          'I improved my skills in state management, routing, and handling real-world scenarios like offline support.',
          'It gave me confidence in building complete frontend flows beyond just UI.',
        ],
      },
    ],
    image: ecommerceImg,
    viewLink: 'https://e-commers-m.vercel.app',
    codeLink: 'https://github.com/muhammedmumu/E-commers'
  },
  {
    id: 6,
    title: 'Event Management System',
    projectName: 'Event Management System',
    role: 'Full-stack application',
    duration: 'Freelance client project',
    description: 'A web application to display event details and allow users to register or book tickets.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    details: `I built this project as a freelance work for a client while working on real-world requirements.
The goal was to create a simple event management system where users can view event details and book tickets.
I handled both frontend and backend to make the flow functional.
While working on this, I focused on form handling, data storage, and user interaction.
This project gave me experience in building a complete working application.`,
    features: [
      'Event listing page with complete event details',
      'Ticket booking / registration form',
      'Form validation and data handling',
      'Backend integration for storing user responses',
      'Basic end-to-end flow from UI to database',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB (Mongoose)'],
    phases: [
      {
        title: 'Purpose',
        description: 'A web application to display event details and allow users to register or book tickets. Designed to manage event information and handle user submissions through forms.',
      },
      {
        title: 'Type',
        description: 'Full-stack application',
      },
      {
        title: 'What I Built',
        showcaseTitle: 'Core implementation',
        showcase: [
          'Event listing page with complete event details',
          'Ticket booking / registration form',
          'Form validation and data handling',
          'Backend integration for storing user responses',
          'Basic end-to-end flow from UI to database',
        ],
      },
      {
        title: 'Tech Stack',
        description: 'React · Node.js · Express · MongoDB (Mongoose)',
      },
      {
        title: 'Takeaway',
        learned: [
          'This project helped me understand how to build a complete full-stack application.',
          'I improved my skills in handling forms, connecting frontend with backend, and storing data properly.',
          'It also gave me real client experience and confidence in delivering working solutions.',
        ],
      },
    ],
    image: eventPageImg,
  },
  {
    id: 7,
    title: 'Netflix-Clone',
    description: 'Built a responsive Netflix clone using HTML and CSS, showcasing sleek UI and strong design skills.',
    tech: ['HTML', 'CSS', 'Clone UI'],
    image: netflixImg,
    viewLink: 'https://mukrim-netclone.vercel.app/',
    codeLink: 'https://github.com/muhammedmumu/Netflix',
    disableModal: true,
  },
  {
    id: 8,
    title: 'Language Translator',
    description: 'User-friendly translator web app using Google Translate API with responsive design in HTML, CSS, JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    image: translatorImg,
    viewLink: 'https://muhammedmumu.github.io/Language/',
    codeLink: 'https://github.com/muhammedmumu/Language',
    disableModal: true,
  },
  {
    id: 9,
    title: 'Enrollment-Form',
    description: 'Developed a responsive enrollment form with secure payment integration using HTML, CSS, and Bootstrap.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    image: enrollmentImg,
    viewLink: '',
    codeLink: '',
    disableModal: true,
  },



]

function ProjectCard({ project, onCardClick }) {
  const handleCardClick = () => {
    if (project.disableModal || !onCardClick) return

    onCardClick({
      ...project,
      shortDescription: project.description,
      details: project.details || project.description,
      features: project.features || project.tech,
      technologies: project.technologies || project.tech,
      links: [
        project.viewLink ? { label: 'View', url: project.viewLink } : null,
        project.codeLink ? { label: 'Code', url: project.codeLink } : null,
      ].filter(Boolean),
    })
  }

  return (
    <div
      className='group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-gradient-to-br from-slate-800/40 to-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/80 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2'
      onClick={handleCardClick}
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
        {(() => {
          const techTags = Array.isArray(project.tech) ? project.tech : Array.isArray(project.technologies) ? project.technologies : []

          return (
            <div className='flex flex-wrap gap-2'>
              {techTags.map((tech) => (
                <span
                  key={tech}
                  className='inline-block rounded-full bg-cyan-900/40 px-2.5 py-1 text-xs font-medium text-cyan-200 border border-cyan-500/40 transition-all group-hover:bg-cyan-900/60 group-hover:border-cyan-400/60'
                >
                  {tech}
                </span>
              ))}
            </div>
          )
        })()}

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

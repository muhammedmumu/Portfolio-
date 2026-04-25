import React from 'react'
import { experiences } from '../../data/experiences'
import brainImg from '../../assets/Bg/Appliced.jpg'
import cubeImg from '../../assets/Bg/CubeC.jpg'

const defaultExperienceImages = [brainImg, cubeImg]

const internshipModalContent = {
  companyName: 'Infomatic Solutions',
  role: 'Software enginerring',
  duration: '6 Months Journey',
  details:
    'I started my internship by focusing on building a strong frontend foundation and then progressed to delivering production-level work in a real project environment.',
  phases: [
    {
      title: 'Phase 1 - Learning & Foundation',
      description:
        'I started my internship by focusing on building a strong frontend foundation using HTML, CSS, React, and Material UI. During this phase, I explored component-based development and learned how to create clean and reusable UI elements. I also got introduced to Storybook, which helped me understand how to document and showcase components effectively. This phase helped me gain confidence and clarity in building real-world interfaces.',
      showcaseTitle: 'What I Built (Showcase)',
      showcase: ['Dashboard UI (Material UI)', 'Reusable components', 'Storybook setup'],
      cta: {
        label: 'View Projects',
        href: '#projects',
      },
    },
    {
      title: 'Phase 2 - Real Project / Production',
      description:
        'After building a solid foundation, I moved into working on a real-world project for a non-profit organization. I worked as the sole frontend developer, where I built the application from scratch and focused on creating reusable components and maintaining consistency across the UI. This phase helped me understand real project workflows, improve my problem-solving skills, and work independently on production-level code.',
      learnedTitle: 'What I Learned',
      learned: [
        'Real-world project structure',
        'Writing scalable components',
        'API integration',
        'Working independently',
        'Improving performance & UI consistency',
      ],
    },
  ],
  closingLine:
    'This journey helped me grow from learning the basics to confidently building real-world applications.',
}

function ExperienceCard({ experience, image, index, onCardClick }) {
  const role = experience?.left?.jobTitle ?? 'SOFTWARE ENGINEER'
  const company = experience?.left?.companyName ?? 'Company Name'
  const tools = experience?.left?.tools ?? []
  const summary = experience?.slogan ?? ''
  const isInfomaticExperience = company.toLowerCase().includes('infomatic')
  const modalPayload = isInfomaticExperience
    ? internshipModalContent
    : {
      title: `${company} - ${role}`,
      shortDescription: summary,
      details: experience?.details ?? 'Detailed information about the experience.',
      features: experience?.features ?? ['Feature 1', 'Feature 2'],
      technologies: tools,
      links: experience?.links ?? [],
    }

  return (
    <article className='group flex flex-col gap-5' onClick={() => onCardClick(modalPayload)}>
      <div className='relative overflow-hidden border border-white/20 bg-[#111111] p-4 sm:p-5 lg:p-6'>
        <div className='relative h-40 overflow-hidden border border-white/15 bg-slate-900 sm:h-44 lg:h-52'>
          <img
            src={image}
            alt={`${role} background`}
            draggable={false}
            className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
          />
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent' />
        </div>

        <div className='mt-4 space-y-1'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300'>Experience {index + 1}</p>
          <h3 className='text-lg font-bold leading-tight text-white sm:text-xl lg:text-2xl'>{role}</h3>
          <p className='text-sm font-semibold text-slate-300 sm:text-base'>{company}</p>
          {summary ? <p className='pt-2 text-sm leading-relaxed text-slate-400'>{summary}</p> : null}
        </div>
      </div>

      <div className='border border-cyan-500/30 bg-cyan-500/5 p-4'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200'>Tools Used and Learned</p>
        <div className='flex flex-wrap gap-2'>
          {tools.map((tool) => (
            <span
              key={`${role}-${tool}`}
              className='border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100 sm:text-sm'
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Experience({ onCardClick }) {
  return (
    <section id='experience' className='w-screen min-h-screen px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24'
      style={{
        background: 'linear-gradient(90deg,  #ff4700 50%, rgb(15, 15, 15) 50%)',
      }}>
      <div className='mx-auto max-w-7xl'>
        <header className='mb-10 text-center sm:mb-12 lg:mb-14'>
          <h2 className='text-3xl font-bold text-white sm:text-4xl lg:text-5xl'>Experience</h2>
          <p className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base'>
            A showcase of my professional journey, highlighting key roles, responsibilities, and the tools I've mastered along the way.
          </p>
        </header>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience?.left?.jobTitle ?? 'experience'}-${index}`}
              experience={experience}
              image={defaultExperienceImages[index % defaultExperienceImages.length]}
              index={index}
              onCardClick={onCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { experiences } from '../../data/experiences'
import portfolioImg from '../../assets/Screenshot 2026-04-04 170443.png'
import ecommerceImg from '../../assets/project/E-commerce Website.png'

const defaultExperienceImages = [portfolioImg, ecommerceImg]

function ExperienceCard({ experience, image, index }) {
  const role = experience?.left?.jobTitle ?? 'SOFTWARE ENGINEER'
  const company = experience?.left?.companyName ?? 'Company Name'
  const tools = experience?.left?.tools ?? []
  const summary = experience?.slogan ?? ''

  return (
    <article className='group flex flex-col gap-5'>
      <div className='relative overflow-hidden border border-white/20 bg-[#111111] p-4 md:p-5'>
        <div className='relative h-44 overflow-hidden border border-white/15 bg-slate-900 md:h-52'>
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
          <h3 className='text-xl font-bold leading-tight text-white md:text-2xl'>{role}</h3>
          <p className='text-sm font-semibold text-slate-300 md:text-base'>{company}</p>
          {summary ? <p className='pt-2 text-sm leading-relaxed text-slate-400'>{summary}</p> : null}
        </div>
      </div>

      <div className='border border-cyan-500/30 bg-cyan-500/5 p-4'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200'>Tools Used and Learned</p>
        <div className='flex flex-wrap gap-2'>
          {tools.map((tool) => (
            <span
              key={`${role}-${tool}`}
              className='border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100 md:text-sm'
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section id='experience' className='w-screen min-h-screen  px-6 py-20 md:px-10 md:py-24'
      style={{
        background: 'linear-gradient(90deg,  #ff4700 50%, rgb(15, 15, 15) 50%)',
      }}>
      <div className='mx-auto max-w-7xl'>
        <header className='mb-12 text-center md:mb-14'>
          <h2 className='text-4xl font-bold text-white md:text-5xl'>Experience</h2>
          <p className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base'>
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
            />
          ))}
        </div>
      </div>
    </section>
  )
}

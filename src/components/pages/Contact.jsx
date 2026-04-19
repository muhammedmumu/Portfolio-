import React from 'react'
import contactImage from '../../assets/Bg/download__8.png'

const contactMethods = [
  {
    id: 'email',
    label: 'Email',
    value: 'muhammedmukrim.m@gmail.com',
    href: 'mailto:muhammedmukrim.m@gmail.com',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 9677461781',
    href: 'tel:+919677461781',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Coimbatore, India',
    href: '#',
  },
]

export default function Contact() {
  return (
    <section
      id='contact'
      className='relative min-h-screen w-screen overflow-hidden px-6 py-24 md:px-10'
      style={{
        background: 'linear-gradient(180deg, #111827 0%, #000000 100%)',
      }}
    >
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.2),transparent_40%)]' />
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(249,115,22,0.22),transparent_45%)]' />

      <div className='relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2'>
        <div className='space-y-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-8'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300'>Get In Touch</p>
          <h2 className='text-4xl font-bold text-white md:text-5xl'>Contact Me</h2>
          <p className='max-w-lg text-sm leading-relaxed text-slate-300 md:text-base'>
            Have an idea, project, or role in mind? Send me a message and I will get back to you soon.
          </p>

          <div className='space-y-3 pt-2'>
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.href}
                className='flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 transition hover:border-cyan-300/60 hover:bg-black/45'
              >
                <span className='text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200'>{method.label}</span>
                <span className='text-sm font-medium text-slate-200'>{method.value}</span>
              </a>
            ))}
          </div>
        </div>

        <div className='flex items-center justify-center  md:p-8'>
          <img
            src={contactImage}
            alt='Contact illustration'
            draggable={false}
            className='h-auto w-full max-w-md object-contain drop-shadow-2xl'
          />
        </div>
      </div>
    </section>
  )
}

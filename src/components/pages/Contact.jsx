import React, { useState } from 'react'
import contactImage from '../../assets/Bg/download__8.png'

const contactMethods = [
  {
    id: 'email',
    label: 'Email',
    value: 'muhammedmukrim.m@gmail.com',
    href: 'mailto:muhammedmukrim.m@gmail.com',
    icon: 'fas fa-envelope',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 9677461781',
    href: 'tel:+919677461781',
    icon: 'fas fa-phone',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Coimbatore, India',
    href: '#',
    icon: 'fas fa-map-marker-alt',
    color: 'from-orange-500 to-red-500',
  },
]

export default function Contact() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section
      id='contact'
      className='relative min-h-screen w-screen overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-28'
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e8f2f7 25%, #f0f4f8 50%, #e8ecf2 75%, #f8fafc 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/15 via-transparent to-transparent blur-3xl opacity-40' />
        <div className='absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-gradient-to-bl from-orange-400/10 via-transparent to-transparent blur-3xl opacity-30' />
        <div className='absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-400/12 via-transparent to-transparent blur-3xl opacity-25' />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className='pointer-events-none absolute inset-0 opacity-10'
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className='relative z-10 mx-auto w-full max-w-7xl'>
        {/* Header Section */}
        <div className='mb-8 text-center sm:mb-10 lg:mb-16 xl:mb-20'>
          <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 sm:text-sm lg:tracking-[0.3em]'>Get In Touch</p>
          <h2 className='mb-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
            Let's Connect
          </h2>
          <p className='mx-auto max-w-2xl text-xs leading-relaxed text-slate-700 sm:text-sm lg:text-base xl:text-lg'>
            Have an idea, project, or role in mind? Reach out and let's create something amazing together. I'm always excited to hear from you!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-12'>
          {/* Contact Methods */}
          <div className='space-y-3 sm:space-y-4'>
            {contactMethods.map((method, index) => (
              <a
                key={method.id}
                href={method.href}
                onMouseEnter={() => setHoveredId(method.id)}
                onMouseLeave={() => setHoveredId(null)}
                className='group relative rounded-lg sm:rounded-xl lg:rounded-2xl border-2 border-slate-300 bg-white p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:border-slate-400 hover:shadow-xl shadow-lg active:translate-y-1'
                style={{
                  transform: hoveredId === method.id ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute -inset-1 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r ${method.color} opacity-0 blur transition-all duration-300 group-hover:opacity-15`}
                  style={{ zIndex: -1 }}
                />

                <div className='flex items-center gap-3 sm:gap-4'>
                  {/* Icon */}
                  <div
                    className={`flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${method.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <i className={`${method.icon} text-base text-white sm:text-lg lg:text-xl`} />
                  </div>

                  {/* Content */}
                  <div className='flex-1 min-w-0'>
                    <p className='text-xs font-bold uppercase tracking-[0.12em] text-slate-700 sm:tracking-[0.15em]'>
                      {method.label}
                    </p>
                    <p className='mt-1 break-all text-sm font-bold text-slate-900 sm:text-base lg:text-lg'>
                      {method.value}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className='flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1'>
                    <i className='fas fa-arrow-right text-cyan-600 text-base sm:text-lg font-bold' />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Illustration */}
          <div className='relative flex items-center justify-center'>
            {/* Glow Effect */}
            <div className='absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 blur-3xl' />

            {/* Image Container */}
            <div className='relative'>
              <img
                src={contactImage}
                alt='Contact illustration'
                draggable={false}
                className='h-auto w-full max-w-xs drop-shadow-2xl transition-transform duration-500 hover:scale-105 sm:max-w-sm lg:max-w-md xl:max-w-lg'
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className='mt-8 rounded-lg border border-slate-300/40 bg-gradient-to-r from-cyan-100/40 via-white/60 to-blue-100/40 p-6 text-center shadow-md backdrop-blur-sm sm:mt-10 sm:rounded-xl sm:p-8 lg:mt-16 lg:rounded-3xl lg:p-10 xl:mt-24 xl:p-12'>
          <p className='mb-2 text-xs text-slate-700 sm:text-sm lg:mb-4 lg:text-base'>Ready to collaborate?</p>
          <h3 className='mb-4 text-lg font-bold text-slate-900 sm:text-xl lg:mb-6 lg:text-2xl xl:text-3xl'>
            Let's build something incredible together
          </h3>
          <a
            href='mailto:muhammedmukrim.m@gmail.com'
            className='inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/50 active:translate-y-0 sm:rounded-xl sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:py-5 lg:text-lg'
          >
            <span>Send Me an Email</span>
            <i className='fas fa-paper-plane' />
          </a>
        </div>
      </div>
    </section>
  )
}

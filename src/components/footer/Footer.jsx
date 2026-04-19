import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <footer className='w-screen border-t border-white/10 bg-black px-6 py-6 md:px-10'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center gap-4 text-center'>
        <div className='flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm'>
          {quickLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className='text-slate-300 transition hover:text-cyan-300'
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className='flex w-full flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 md:flex-row md:text-left'>
          <p className='text-sm text-slate-300'>
            © {year} Muhammed Mukrim. All rights reserved.
          </p>

          <div className='flex items-center gap-4 text-sm'>
            <a
              href='https://github.com/muhammedmumu'
              target='_blank'
              rel='noreferrer'
              className='text-slate-300 transition hover:text-cyan-300'
            >
              GitHub
            </a>
            <a
              href='mailto:muhammedmukrim.m@gmail.com'
              className='text-slate-300 transition hover:text-cyan-300'
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

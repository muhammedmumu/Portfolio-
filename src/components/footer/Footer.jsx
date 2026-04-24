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

  const contactInfo = [
    { icon: 'fas fa-phone', text: '+91 9677461781' },
    { icon: 'fas fa-envelope', text: 'muhammedmukrim.m@gmail.com' },
    { icon: 'fas fa-map-marked-alt', text: 'Erode India 638005' },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mukrimm/',
      icon: 'fab fa-linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/muhammedmumu',
      icon: 'fab fa-github',
    },
    {
      name: 'Email',
      url: 'mailto:muhammedmukrim.m@gmail.com',
      icon: 'fas fa-envelope',
    },
    { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
    { name: 'Telegram', url: '#', icon: 'fab fa-telegram-plane' },
  ]

  return (
    <footer className='w-full border-t border-white/10 bg-black px-4 py-10 sm:px-6 lg:px-10'>
      <div className='mx-auto w-full max-w-7xl'>
        {/* Main Footer Content */}
        <div className='mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Portfolio Info Box */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-bold text-white'>Mukrim Portfolio</h3>
            <p className='text-sm leading-relaxed text-slate-300'>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials. <br /> <br /> Keep Rising 🚀. Connect with me
              over live chat!
            </p>
          </div>

          {/* Quick Links Box */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-bold text-white'>Quick Links</h3>
            <div className='flex flex-col gap-2'>
              {quickLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className='flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-300'
                >
                  <i className='fas fa-chevron-circle-right'></i>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info Box */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-bold text-white'>Contact Info</h3>
            <div className='flex flex-col gap-2'>
              {contactInfo.map((info, index) => (
                <p key={index} className='flex items-center gap-2 text-sm text-slate-300'>
                  <i className={info.icon}></i>
                  {info.text}
                </p>
              ))}
            </div>
            {/* Social Links */}
            <div className='flex items-center gap-4 pt-2'>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url !== '#' ? '_blank' : undefined}
                  rel={link.url !== '#' ? 'noreferrer' : undefined}
                  aria-label={link.name}
                  className='text-lg text-slate-300 transition hover:text-cyan-300'
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white/10 pt-6'>
          {/* Credit Line */}
          <h2 className='text-center text-sm text-slate-300'>
            Designed with{' '}
            <i className='fas fa-heart text-red-500 animate-pulse'></i> by{' '}
            <a
              href='https://www.linkedin.com/in/mukrimm/'
              target='_blank'
              rel='noreferrer'
              className='text-cyan-300 transition hover:text-cyan-400'
            >
              Muhammed Mukrim
            </a>
          </h2>

          {/* Copyright */}
          <p className='mt-4 text-center text-sm text-slate-400'>
            © {year} Muhammed Mukrim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

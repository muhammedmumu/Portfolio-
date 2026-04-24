import React from 'react'

export default function About() {
  return (
    <>
      <div className='relative flex w-full flex-col items-center justify-center gap-4 text-center text-[#FF8B06] lg:items-start lg:text-left'>
        <div className='flex rounded-full border border-[#FF8B06]/40 bg-black px-1 py-1'>
          <h1 className='px-4 text-base font-normal leading-none text-[#d4af7f] sm:text-xl'>
            About
          </h1>
        </div>
        <div className='about-content relative z-10 w-full rounded-2xl border border-white/10 bg-black/25 p-4 text-center shadow-lg backdrop-blur-sm sm:p-5 lg:w-[82%] lg:text-start'>
          <h1 className='text-lg font-semibold leading-snug text-white sm:text-xl lg:text-start'>
            Design has always been more than just a job -it's my passion .
          </h1>
          <p className='mt-3 text-xs font-normal leading-relaxed text-slate-200 sm:text-sm lg:text-base'>
            I focus on creating thoughtful interfaces that feel clear, useful, and memorable.
          </p>
          <div className='mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#FF8B06] via-[#d4af7f] to-[#6b8e23] lg:mx-0 lg:w-28' />
        </div>
      </div>
    </>
  )
}

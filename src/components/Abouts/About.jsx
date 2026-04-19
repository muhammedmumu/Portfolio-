import React from 'react'

export default function About() {
  return (
    <>
      <div className='relative flex flex-col items-start justify-center text-[#FF8B06] gap-6'>
        <div className='flex rounded-full border border-[#FF8B06]/40 bg-black px-1 py-1'>
          <h1 className="px-4 text-2xl font-normal leading-none text-[#d4af7f]">
            About
          </h1>
        </div>
        <div className='about-content relative z-10 w-[82%] rounded-2xl border border-white/10 bg-black/25 p-5 text-start shadow-lg backdrop-blur-sm'>
          <h1 className="text-2xl font-semibold text-start text-white">
            Design has always been more than just a job -it's my passion .
          </h1>
          <p className='mt-3 text-base font-normal leading-relaxed text-slate-200'>
            I focus on creating thoughtful interfaces that feel clear, useful, and memorable.
          </p>
          <div className='mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-[#FF8B06] via-[#d4af7f] to-[#6b8e23]' />
        </div>
      </div>
    </>
  )
}

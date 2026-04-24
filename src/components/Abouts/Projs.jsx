import React from 'react'

export default function Projs() {
  return (
    <>
      <div className='mt-6 grid w-full grid-cols-2 gap-3 overflow-hidden p-1 text-white sm:mt-8 sm:gap-4 lg:p-4'>
        <div className='rounded-2xl border border-white/10 bg-black/20 p-3 text-center shadow-sm'>
          <h1 className='text-2xl font-semibold text-[#FF8B06] sm:text-3xl'>+1000</h1>
          <h6 className='mt-1 text-xs leading-snug text-slate-200 sm:text-sm'>Chose better over easier</h6>
        </div>
        <div className='rounded-2xl border border-white/10 bg-black/20 p-3 text-center shadow-sm'>
          <h1 className='text-2xl font-semibold text-[#FF8B06] sm:text-3xl'>+300</h1>
          <h6 className='mt-1 text-xs leading-snug text-slate-200 sm:text-sm'>Hours of learning and building</h6>
        </div>
        <div className='rounded-2xl border border-white/10 bg-black/20 p-3 text-center shadow-sm'>
          <h1 className='text-2xl font-semibold text-[#FF8B06] sm:text-3xl'>+100</h1>
          <h6 className='mt-1 text-xs leading-snug text-slate-200 sm:text-sm'>UI designs explored and refined</h6>
        </div>
        <div className='rounded-2xl border border-white/10 bg-black/20 p-3 text-center shadow-sm'>
          <h1 className='text-2xl font-semibold text-[#FF8B06] sm:text-3xl'>+∞</h1>
          <h6 className='mt-1 text-xs leading-snug text-slate-200 sm:text-sm'>Ideas waiting to be created</h6>
        </div>
      </div>
    </>
  )
}

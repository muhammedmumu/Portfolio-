import React from 'react'

export default function Projs() {
  return (
    <>
      <div className='mt-8  flex flex-col justify-evenly item-center text-white overflow-hidden p-4 '>
        <div className='flex  gap-4 justify-between mb-8'>
          <div className='flex flex-col  gap-2'>
            <h1 className='font-semibold text-3xl text-[#FF8B06]'>+1000</h1>
            <h6 className=''>Chose better over easier</h6>
          </div>
          <div className='flex flex-col  gap-2'>
            <h1 className='font-semibold text-3xl text-[#FF8B06] text-end'>+300</h1>
            <h6 className=''>Hours of learning and building</h6>
          </div>
        </div>
        <div className='flex  gap-4 justify-between mb-8'>
          <div className='flex flex-col  gap-2'>
            <h1 className='font-semibold text-3xl text-[#FF8B06]'>+100</h1>
            <h6 className=''>UI designs explored and refined</h6>
          </div>
          <div className='flex flex-col  gap-2'>
            <h1 className='font-semibold text-4xl text-end text-[#FF8B06]'>+∞</h1>
            <h6 className=''>Ideas waiting to be created</h6>
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import { Name } from '../home';
import Sunny from '../../assets/Thousand-Sunny-One-Piece-464.png'

export default function Home() {
  return (
    <div id='home' className='home-mobile-balance relative min-h-screen w-screen scroll-mt-24 overflow-hidden bg-[#076585]'>
      <div className='home-mobile-hero relative h-[82vh] bg-[#ff4700] pt-16 sm:pt-20 lg:h-[86vh] lg:pt-24'>
        <div className='flex h-1/2 items-center justify-center px-4'>
          <Name />
        </div>
        <div className='absolute left-1/2 top-[70%] z-10 w-[100vw] max-w-[28rem] -translate-x-1/2 -translate-y-1/2 sm:w-[68vw] sm:max-w-[34rem] lg:top-[70%] lg:w-[54vw] lg:max-w-[46rem] xl:w-[48vw] xl:max-w-[62rem]'>
          <img className='Ship relative z-10 mt-10 w-full object-contain sm:mt-14 lg:mt-8'
            src={Sunny}
            alt='Sunny'
            style={{ cursor: 'pointer' }}
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })} />
        </div>
      </div >


    </div>
  )
}

import React from 'react'
import { Name } from '../home';
import Sunny from '../../assets/Thousand-Sunny-One-Piece-464.png'

export default function Home() {
  return (
    <div id='home' className='h-screen w-screen scroll-mt-24 bg-[#076585] relative overflow-hidden'>
      <div className="h-4/5 bg-[#ff4700] pt-20">
        <div className="flex items-center justify-center h-1/2 ">
          <Name />
        </div>
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <img className="Ship relative z-10 mt-20 object-contain"
            src={Sunny}
            alt="Sunny"
            style={{ cursor: 'pointer' }}
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })} />
        </div>
      </div >


    </div>
  );
}
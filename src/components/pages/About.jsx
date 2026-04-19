import React from 'react'
import {
  Left,
  Right
} from '../Abouts';



export default function About() {
  return (
    <div id='about' className='About relative flex flex-col w-screen min-h-screen scroll-mt-24 overflow-hidden' style={{
      background: 'linear-gradient(180deg, #076585 0%, #fff 100%)'
    }}>
      {/* SVG Wave - Positioned at top for continuity */}
      <div className='absolute top-0 left-0 w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='w-full'>
          <path fill="#076585" fillOpacity="1" d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,170.7C672,160,768,192,864,218.7C960,245,1056,267,1152,250.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* Subtle SVG Cloud Overlay */}
      <div className="absolute top-24 left-0 w-full h-40 pointer-events-none z-0 opacity-60">
        <svg width="100%" height="100%" viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="80" rx="120" ry="40" fill="#fff" fillOpacity="0.4" />
          <ellipse cx="400" cy="60" rx="100" ry="30" fill="#fff" fillOpacity="0.3" />
          <ellipse cx="700" cy="100" rx="140" ry="45" fill="#fff" fillOpacity="0.35" />
          <ellipse cx="1100" cy="70" rx="110" ry="35" fill="#fff" fillOpacity="0.3" />
        </svg>
      </div>

      {/* Content - Centered */}
      <div className='flex relative flex-1 flex-col md:flex-row gap-6 md:gap-8 items-center justify-center z-10 px-6 md:px-10 pt-24 md:pt-28 pb-10'>
        <div className="left w-full md:w-1/2 max-w-2xl"><Left /></div>
        <div className="right p-4 md:p-8 w-full md:w-1/2 max-w-2xl"><Right /></div>
      </div>
    </div>
  )
}


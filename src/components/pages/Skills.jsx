import React from 'react'
import Skill from '../skills/Skills';
import pattern from '../../assets/Bg/axiom-pattern.png'

export default function SkillsPage() {
  return (
    <>
      <div
        id='skills'
        className='min-h-screen w-screen scroll-mt-24 justify-center flex gap-8 px-6 md:px-10 py-10 md:py-16'
        style={{
          background: 'rgb(255, 255, 255)',
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '220px 220px',
        }}
      >
        <div className='w-full max-w-7xl flex items-center justify-center'>
          <Skill />
        </div>
      </div >
    </>

  )
}

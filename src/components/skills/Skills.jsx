import React from 'react'
import Left from './Left';
import Right from './Right';

export default function Skills() {
  return (
    <>
      <div className='flex w-full flex-col items-center gap-6 p-4 sm:gap-8 sm:p-6 lg:flex-row lg:p-10'>
        <Left />
        <Right />
      </div>
    </>
  )
}

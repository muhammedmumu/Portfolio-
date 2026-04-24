import { useEffect, useRef, useState } from 'react'
import luffyImg from '../../assets/Bg/luffy.jpg'

export default function Left() {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className={`about-reveal flex h-full w-full flex-col items-start justify-center gap-4 sm:gap-5 lg:ml-10 lg:w-1/2 ${isVisible ? 'about-reveal-visible' : ''}`}>
        <img
          src={luffyImg}
          alt='Luffy'
          draggable={false}
          className='-mb-2 h-auto w-24 sm:w-28 lg:w-32'
        />
        <div className='flex rounded-full border border-[#FF8B06]/40 bg-black px-1 py-1'>
          <h1 className="px-4 text-2xl font-normal leading-none text-[#d4af7f]">
            Skills
          </h1>
        </div>
        <div className='about-content text-start'>
          <h1
            className='w-full text-start text-3xl sm:w-4/5 sm:text-4xl lg:w-3/4'
            style={{
              fontFamily: 'Mori, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              lineHeight: 1,
              color: 'black',
            }}
          >
            What I use to build things that actually make sense
            <p className='mt-3 text-base font-normal text-slate-600'>Still learning, improving, and exploring more every day.</p>
          </h1>
          <div className='mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#FF8B06] via-[#d4af7f] to-[#6b8e23]' />
        </div>
      </div>
    </>
  )
}

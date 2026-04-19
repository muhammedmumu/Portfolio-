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
      <div ref={containerRef} className={`ml-10 w-1/2 flex h-full flex-col items-start justify-center gap-4 about-reveal ${isVisible ? 'about-reveal-visible' : ''}`}>
        <img
          src={luffyImg}
          alt='Luffy'
          draggable={false}
          className='h-auto w-28 md:w-32 -mb-2'
        />
        <div className='flex rounded-full border border-[#FF8B06]/40 bg-black px-1 py-1'>
          <h1 className="px-4 text-2xl font-normal leading-none text-[#d4af7f]">
            Skills
          </h1>
        </div>
        <div className='about-content text-start'>
          <h1
            className="w-3/4 text-4xl text-start"
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

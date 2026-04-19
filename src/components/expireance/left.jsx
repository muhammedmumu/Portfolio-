import { useEffect, useRef, useState } from 'react'
import "./index.css";


export default function Left({ experience }) {
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

  if (!experience) return null;

  return (
    <>

      <div ref={containerRef} className={`box-1 w-full max-w-2xl about-reveal ${isVisible ? 'about-reveal-visible' : ''}`} >

        <h1 className='mt-1 text-2xl font-extrabold leading-tight text-slate-900 md:text-5xl'>
          {experience.jobTitle}
        </h1>


        <p className='mt-1 text-2xl text-slate-700 font-bold leading-tight md:text-3xl'>
          {experience.companyName}
        </p>

        <p className='mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700'>Tools and Knowledge Gained</p>
        <div className='mt-3 flex flex-wrap gap-2'>
          {experience.tools.map((tool) => (
            <span
              key={tool}
              className='rounded-full border border-cyan-400 bg-white/80 px-3 py-1 text-sm font-semibold text-cyan-900 backdrop-blur-sm'
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

    </>
  )
}

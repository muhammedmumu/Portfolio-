import React, { useEffect, useRef, useState } from 'react'
import AboutName from './About';
import Projs from './Projs';

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
      <div ref={containerRef} className={`left flex h-full w-full flex-col items-center justify-start gap-5 p-4 text-center about-reveal sm:p-6 lg:items-start lg:text-left lg:p-8 ${isVisible ? 'about-reveal-visible' : ''}`}>
        <AboutName />
        <Projs />

      </div>
    </>
  )
}

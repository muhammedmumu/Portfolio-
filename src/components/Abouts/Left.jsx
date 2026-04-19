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
      <div ref={containerRef} className={`left p-8 flex flex-col h-full items-start justify-start about-reveal ${isVisible ? 'about-reveal-visible' : ''}`}>
        <AboutName />
        <Projs />

      </div>
    </>
  )
}

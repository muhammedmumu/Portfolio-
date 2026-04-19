
import { useEffect, useRef, useState } from 'react'
import Backend from './Backend'
import CubeSkillsSlider from './CubeSkillsSlider'
import Frontend from './Frontend'

export default function Right() {
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
      <div ref={containerRef} className={`about-reveal ${isVisible ? 'about-reveal-visible' : ''}`}>
        <CubeSkillsSlider />
      </div>

      {/*
      <div className='grid gap-6 lg:grid-cols-2'>
        <div>
          <Frontend />
        </div>
        <div>
          <Backend />
        </div>
      </div>
      */}
    </>
  )
}
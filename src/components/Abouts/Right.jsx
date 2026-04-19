import React, { useEffect, useRef, useState } from 'react'

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
      <div ref={containerRef} className={`rounded-3xl p-8 text-white overflow-hidden bg-black/65 border border-[#FF8B06]/60 about-reveal ${isVisible ? 'about-reveal-visible' : ''}`}>

        <h2 className="text-lg font-semibold text-start text-[#f3e3c3] mb-5">
          I like keeping things simple and easy to use. For me, design is not just about looks, it’s about making things feel right.
        </h2>

        <h1 className='text-2xl text-[#FF8B06] font-base text-end mb-5' style={{ fontFamily: 'Cinzel, serif' }}> 👋 Hey, I’m Mukrim </h1>
        <h2 className="text-lg font-normal text-start text-white/90 leading-relaxed">
          I enjoy building web apps and working on UI design. I like turning ideas into something real and usable.
          Outside of coding, I love traveling and exploring. I also enjoy writing small moments from my life, turning them into fun videos, and editing them — just something I really enjoy doing.
        </h2>
      </div >
    </>
  )
}

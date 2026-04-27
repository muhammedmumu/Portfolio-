import { useEffect, useRef, useState } from 'react'



export default function Right({ points = [], panelClassName = '', animate = false }) {
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
      <div ref={containerRef} className={`box ml-auto flex w-full max-w-3xl flex-col gap-6 text-slate-100 about-reveal ${isVisible ? 'about-reveal-visible' : ''}`}>
        <section className={`hide-scrollbar max-h-[calc(100vh-12rem)] overflow-y-auto rounded-2xl border border-cyan-200/20 p-6 shadow-xl backdrop-blur-sm md:p-8 transition-all duration-700 ${panelClassName} ${animate ? 'animate-fade-in-up' : ''}`}>
          <div className='space-y-3'>
            {points.map((bullet) => (
              <div key={bullet} className='flex gap-3 text-sm leading-6 md:text-base'>
                <span className='mt-2 h-2 w-2 flex-none rounded-full bg-cyan-300' />
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}

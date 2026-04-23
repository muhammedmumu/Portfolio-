import { useEffect, useState } from 'react'
import {
  Api,
  Css3,
  CssTailwindLogoIcon214735,
  Database,
  Git,
  Gitlab,
  JavaScript,
  Netlify,
  NextJs,
  Node,
  React as ReactIcon,
  Social,
  SqlServer,
  Storybook,
  Vercel,
  Express,
  TypeScript,
  Bootstrap,

} from '../../assets/SkillsSets'
import ViteLogo from '../../assets/vite.svg'

export default function CubeSkillsSlider() {
  const [index, setIndex] = useState(0)

  const slides = [
    {
      label: 'Core & Frameworks',
      icons: [
        { name: 'JavaScript', icon: JavaScript },
        { name: 'TypeScript', icon: TypeScript },
        { name: 'React', icon: ReactIcon },
        { name: 'Next', icon: NextJs },
      ],
      gridClass: 'grid grid-cols-2 gap-3',
    },
    {
      label: 'Styling',
      icons: [
        { name: 'CSS', icon: Css3 },
        { name: 'Tailwind', icon: CssTailwindLogoIcon214735 },
        { name: 'Bootstrap', icon: Bootstrap },
        { name: 'MUI', icon: ReactIcon },
      ],
      gridClass: 'grid grid-cols-2 gap-3',
    },
    {
      label: 'Backend',
      icons: [
        { name: 'Node', icon: Node, className: 'col-start-1 row-start-1' },
        { name: 'Express', icon: Express, className: 'col-start-2 row-start-2' },
        { name: 'APIs', icon: Api, className: 'col-start-3 row-start-3' },
      ],
      gridClass: 'grid h-[11.5rem] w-[11.5rem] grid-cols-3 grid-rows-3',
    },
    {
      label: 'Database',
      icons: [
        { name: 'MongoDB', icon: Database, className: 'col-start-1 row-start-1' },
        { name: 'SQL', icon: SqlServer, className: 'col-start-3 row-start-3' },
      ],
      gridClass: 'grid h-[11.5rem] w-[11.5rem] grid-cols-3 grid-rows-3',
    },
    {
      label: 'Tools',
      icons: [
        { name: 'Git', icon: Git, className: 'col-start-1 row-start-1' },
        { name: 'GitHub', icon: Social, className: 'col-start-3 row-start-1' },
        { name: 'GitLab', icon: Gitlab, className: 'col-start-2 row-start-2' },
        { name: 'Vite', icon: ViteLogo, className: 'col-start-1 row-start-3' },
        { name: 'Storybook', icon: Storybook, className: 'col-start-3 row-start-3' },
      ],
      gridClass: 'grid h-[11.5rem] w-[11.5rem] grid-cols-3 grid-rows-3',
    },
    {
      label: 'Deploy',
      icons: [
        { name: 'Vercel', icon: Vercel, className: 'col-start-1 row-start-1' },
        { name: 'Netlify', icon: Netlify, className: 'col-start-3 row-start-3' },
      ],
      gridClass: 'grid h-[11.5rem] w-[11.5rem] grid-cols-3 grid-rows-3',
    },
  ]

  const slideLabels = slides.map((slide) => slide.label)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 10000)

    return () => clearInterval(timer)
  }, [slides.length])

  const baseAngle = 0
  const rotationIndex = index % 4
  const rotationStep = -90 * rotationIndex
  // Keep cube rotation and face content aligned so the front face matches `index`.
  const faceBaseIndex = index - rotationIndex
  const faceSlides = [0, 1, 2, 3].map((offset) => slides[(faceBaseIndex + offset + slides.length) % slides.length])

  const renderSlideIcons = (slide) => (
    <div className={slide.gridClass}>
      {slide.icons.map((item) => (
        <div
          key={item.name}
          className={`group relative flex h-[3.6rem] w-[3.6rem] items-center justify-center rounded-full border border-black/10 bg-white ${item.className || ''}`}
        >
          <img className='h-9 w-9' src={item.icon} alt={item.name} />
          <span className='pointer-events-none absolute -top-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )

  const cubeSize = '20rem'
  const cubeDepth = '10rem'

  return (
    <section className='rounded-2xl p-6'>
      <div className='flex flex-col items-center gap-7'>
        <div className='w-full max-w-xs'>
          <label htmlFor='cube-slide-select' className='mb-2 block text-sm font-semibold text-slate-700'>
            Go To Slide
          </label>
          <select
            id='cube-slide-select'
            value={index}
            onChange={(event) => setIndex(Number(event.target.value))}
            className='w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-[#ff4700] focus:ring-2 focus:ring-[#ff4700]/30'
          >
            {slideLabels.map((label, idx) => (
              <option key={label} value={idx}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className='mt-1 [perspective:1750px]'>
          <div
            className='relative mx-auto aspect-square transition-transform duration-700 [transform-style:preserve-3d]'
            style={{
              width: cubeSize,
              height: cubeSize,
              transform: `rotateY(${baseAngle + rotationStep}deg)`,
            }}
          >
            <div
              className='absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/40 bg-[#ff4700]/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-lg'
              style={{ transform: `translateZ(${cubeDepth})` }}
            >
              {renderSlideIcons(faceSlides[0])}
            </div>

            <div
              className='absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/40 bg-[#ff4700]/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-lg'
              style={{ transform: `rotateY(90deg) translateZ(${cubeDepth})` }}
            >
              {renderSlideIcons(faceSlides[1])}
            </div>

            <div
              className='absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/40 bg-[#ff4700]/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-lg'
              style={{ transform: `rotateY(180deg) translateZ(${cubeDepth})` }}
            >
              {renderSlideIcons(faceSlides[2])}
            </div>

            <div
              className='absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/40 bg-[#ff4700]/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-lg'
              style={{ transform: `rotateY(-90deg) translateZ(${cubeDepth})` }}
            >
              {renderSlideIcons(faceSlides[3])}
            </div>
          </div>
        </div>

        <p className='mt-3 text-2xl font-semibold text-black'>{slideLabels[index]}</p>
      </div>
    </section>
  )
}
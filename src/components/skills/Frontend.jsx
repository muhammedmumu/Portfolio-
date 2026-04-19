import {
  Css3,
  CssTailwindLogoIcon214735,
  Html,
  JavaScript,
  NextJs,
  React as ReactIcon,
} from '../../assets/SkillsSets'

const frontendSkills = [
  { name: 'HTML', icon: Html },
  { name: 'CSS', icon: Css3 },
  { name: 'JavaScript', icon: JavaScript },
  { name: 'React', icon: ReactIcon },
  { name: 'Next', icon: NextJs },
  { name: 'Tailwind', icon: CssTailwindLogoIcon214735 },
]

function SkillTile({ name, icon }) {
  return (
    <div className='group relative flex aspect-square items-center justify-center rounded-2xl border border-black/10 bg-slate-50'>
      <img className='h-10 w-10' src={icon} alt={name} />
      <span className='pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
        {name}
      </span>
    </div>
  )
}

export default function Frontend() {
  return (
    <section className='Front-end rounded-2xl border border-black bg-white p-6 shadow-sm'>
      <div className='grid grid-cols-2 gap-4'>
        {frontendSkills.map((skill) => (
          <SkillTile key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  )
}

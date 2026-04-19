import { Api, Node } from '../../assets/SkillsSets'

const backendSkills = [
  { name: 'Node', icon: Node },
  { name: 'Express', icon: Api },
  { name: 'APIs', icon: Api },
]

function SkillTile({ name, icon, className = '' }) {
  return (
    <div className={`group relative flex aspect-square items-center justify-center rounded-2xl border border-black/10 bg-slate-50 ${className}`}>
      <img className='h-10 w-10' src={icon} alt={name} />
      <span className='pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
        {name}
      </span>
    </div>
  )
}

export default function Backend() {
  return (
    <section className='Backend rounded-2xl border border-black bg-white p-6 shadow-sm'>

      <div className='grid grid-cols-2 gap-4'>
        <SkillTile name={backendSkills[0].name} icon={backendSkills[0].icon} />
        <SkillTile name={backendSkills[1].name} icon={backendSkills[1].icon} />
        <div className='col-span-2 flex justify-start'>
          <SkillTile name={backendSkills[2].name} icon={backendSkills[2].icon} className='w-1/2 max-w-[8rem]' />
        </div>
      </div>
    </section>
  )
}
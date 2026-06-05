import SectionWrapper from '../ui/SectionWrapper'
import SkillBadge from '../ui/SkillBadge'

export default function Skills({ categories }) {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map(cat => (
          <div key={cat.label}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

import SectionWrapper from '../ui/SectionWrapper'
import type { SkillsData } from '../../types'

export default function Skills({ categories }: SkillsData) {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="border-t border-line dark:border-line-dark">
        {categories.map(cat => (
          <div
            key={cat.label}
            className="grid sm:grid-cols-[11rem_1fr] gap-x-8 gap-y-1 py-4 border-b border-line dark:border-line-dark"
          >
            <h3 className="font-mono text-sm font-medium text-ochre dark:text-amber">
              {cat.label.toLowerCase()}:
            </h3>
            <p className="font-mono text-sm text-slate-600 dark:text-slate-400">
              {cat.skills.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

import SectionWrapper from '../ui/SectionWrapper'
import TimelineItem from '../ui/TimelineItem'
import type { ExperienceData } from '../../types'

export default function Experience({ jobs }: ExperienceData) {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="max-w-2xl">
        {jobs.map((job, i) => (
          <TimelineItem key={i} {...job} isLast={i === jobs.length - 1} />
        ))}
      </div>
    </SectionWrapper>
  )
}

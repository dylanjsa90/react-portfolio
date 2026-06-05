import SectionWrapper from '../ui/SectionWrapper'
import TimelineItem from '../ui/TimelineItem'

export default function Experience({ jobs }) {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="max-w-2xl mx-auto">
        {jobs.map((job, i) => (
          <TimelineItem key={i} {...job} isLast={i === jobs.length - 1} />
        ))}
      </div>
    </SectionWrapper>
  )
}

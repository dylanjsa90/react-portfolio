import type { Job } from '../../types'

interface TimelineItemProps extends Job {
  isLast: boolean
}

export default function TimelineItem({
  role,
  company,
  period,
  bullets,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
      <span className="font-mono text-sm text-slate-500 dark:text-graphite sm:w-28 shrink-0 sm:text-right sm:pt-0.5">
        {period}
      </span>
      <div
        className={`border-l border-line dark:border-line-dark pl-6 ${isLast ? 'pb-0' : 'pb-10'}`}
      >
        <div className="mb-2">
          <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
            {role}
          </span>
          <span className="text-slate-500 dark:text-slate-400"> · {company}</span>
        </div>
        <ul className="space-y-1">
          {bullets.map((b, i) => (
            <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
              <span className="font-mono text-ochre dark:text-amber">+</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

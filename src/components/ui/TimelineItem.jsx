export default function TimelineItem({ role, company, period, bullets, isLast }) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary-500 mt-1.5 shrink-0" />
        {!isLast && <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-700 mt-1" />}
      </div>
      <div className={`pb-10 ${isLast ? '' : ''}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">{role}</span>
            <span className="text-slate-500 dark:text-slate-400"> · {company}</span>
          </div>
          <span className="text-sm text-slate-400 dark:text-slate-500 shrink-0">{period}</span>
        </div>
        <ul className="space-y-1">
          {bullets.map((b, i) => (
            <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
              <span className="text-primary-400 mt-0.5">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function SkillBadge({ label }) {
  return (
    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-50 text-primary-600 dark:bg-slate-800 dark:text-primary-400 border border-primary-100 dark:border-slate-700">
      {label}
    </span>
  )
}

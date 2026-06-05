import SectionWrapper from '../ui/SectionWrapper'

export default function About({ bio, highlights }) {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-slate-50 dark:bg-slate-800/30">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{bio}</p>
        <ul className="space-y-3">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
              <span className="mt-1 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}

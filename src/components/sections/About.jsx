import SectionWrapper from '../ui/SectionWrapper'

export default function About({ bio, highlights }) {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{bio}</p>
        <ul className="space-y-3">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
              <span className="font-mono text-ochre dark:text-amber shrink-0">+</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}

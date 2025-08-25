type ExperienceItem = {
  company: string
  role: string
  duration: string
  responsibilities: string[]
}

const experiences: ExperienceItem[] = [
  { company: 'Redn Technologies', role: 'Junior Web Developer', duration: '2024 – Present', responsibilities: ['Frontend features', 'Fixes & maintenance'] },
  { company: 'Medishala (Internship)', role: 'Web Developer Intern', duration: '2023 – 2024', responsibilities: ['API integration', 'UI updates'] },
  { company: 'Excel Wash', role: 'Web Developer', duration: '2023', responsibilities: ['Landing pages', 'Contact forms'] },
  { company: 'Home Pathshala', role: 'Web Developer', duration: '2023', responsibilities: ['Education modules', 'Auth & dashboards'] },
  { company: 'City Best Movers', role: 'Web Developer', duration: '2022', responsibilities: ['Service site', 'SEO improvements'] },
  { company: 'PromoteBusi', role: 'Web Developer', duration: '2022', responsibilities: ['Website revamp', 'Performance improvements'] },
  { company: 'Sahitya Kriti', role: 'Web Developer', duration: '2021', responsibilities: ['Blog setup', 'Theming'] },
]

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {experiences.map((e) => (
          <article key={e.company} className="rounded-lg border p-4 bg-card">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{e.company}</h3>
              <span className="text-xs text-muted-foreground">{e.duration}</span>
            </div>
            <p className="text-sm text-muted-foreground">{e.role}</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
              {e.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}


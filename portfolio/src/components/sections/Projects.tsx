import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

type Project = {
  title: string
  description: string
  image?: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  { title: 'Redn Technologies', description: 'Company website features and enhancements.', github: '#', demo: '#' },
  { title: 'Medishala Internship', description: 'Contributions to healthcare platform.', github: '#', demo: '#' },
  { title: 'Excel Wash', description: 'Service website with booking flow.', github: '#', demo: '#' },
  { title: 'Home Pathshala', description: 'Education portal modules.', github: '#', demo: '#' },
]

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.article key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group rounded-xl border bg-card text-card-foreground overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex gap-3 text-sm">
                {p.github && (
                  <a className="inline-flex items-center gap-1 hover:text-foreground text-muted-foreground" href={p.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" /> Code
                  </a>
                )}
                {p.demo && (
                  <a className="inline-flex items-center gap-1 hover:text-foreground text-muted-foreground" href={p.demo} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}


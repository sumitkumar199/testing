import { motion } from 'framer-motion'

const skills = [
  'PHP','Laravel','MySQL','JavaScript','React','Ajax','Bootstrap','Web Designing','jQuery'
]

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Skills</h2>
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      >
        {skills.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-md border bg-card text-card-foreground px-3 py-2 text-sm"
          >
            {s}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}


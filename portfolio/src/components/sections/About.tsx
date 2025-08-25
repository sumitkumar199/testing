import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="grid md:grid-cols-[240px,1fr] gap-8 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="h-40 w-40 md:h-56 md:w-56 rounded-xl bg-muted" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About Me</h2>
          <p className="mt-4 text-muted-foreground">
            I’m Sumit Kumar, a junior web developer passionate about building user-friendly, performant websites. My journey started with PHP and MySQL, growing into Laravel and modern frontend frameworks like React. I love clean, minimal design and smooth user experiences.
          </p>
          <p className="mt-3 text-muted-foreground">
            I enjoy collaborating, learning new tools, and shipping real-world projects end-to-end—from database and APIs to polished UIs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


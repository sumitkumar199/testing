import { Button } from '../../components/ui/button'
import { Github, Linkedin, Mail, FileDown, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="home" className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm text-muted-foreground">Hello, I’m</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Sumit Kumar</h1>
          <p className="mt-2 text-lg text-muted-foreground">Junior Web Developer</p>
          <p className="mt-4 text-muted-foreground">I build modern, responsive web experiences with PHP, Laravel, MySQL, JavaScript, and React.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact"><Button>Contact Me</Button></a>
            <a href="#" download>
              <Button variant="outline"><FileDown className="h-4 w-4 mr-2" /> Download CV</Button>
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-foreground"><Github /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin /></a>
            <a href="mailto:sumit@example.com" className="hover:text-foreground"><Mail /></a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-foreground"><MessageCircle /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="justify-self-center">
          <div className="h-48 w-48 md:h-64 md:w-64 rounded-full bg-gradient-to-tr from-primary/20 to-primary/60 grid place-items-center">
            <div className="h-40 w-40 md:h-56 md:w-56 rounded-full bg-card shadow-inner" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}


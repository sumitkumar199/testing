import { useEffect, useState } from 'react'

type Testimonial = {
  name: string
  role: string
  quote: string
}

const testimonials: Testimonial[] = [
  { name: 'A. Sharma', role: 'Project Manager', quote: 'Sumit is reliable and proactive, delivering clean UIs and stable features.' },
  { name: 'R. Verma', role: 'Tech Lead', quote: 'Great team player with solid React and Laravel fundamentals.' },
  { name: 'P. Singh', role: 'Client', quote: 'Professional, responsive, and attentive to detail. Highly recommended.' },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000)
    return () => clearInterval(id)
  }, [])
  const t = testimonials[index]
  return (
    <section id="testimonials" className="py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Testimonials</h2>
      <div className="mt-6 rounded-xl border p-6 bg-card">
        <blockquote className="text-lg">“{t.quote}”</blockquote>
        <p className="mt-3 text-sm text-muted-foreground">{t.name} — {t.role}</p>
        <div className="mt-4 flex gap-2">
          {testimonials.map((_, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-primary' : 'bg-muted'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}


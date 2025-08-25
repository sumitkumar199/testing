import { Button } from '../ui/button'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <form className="rounded-lg border p-4 space-y-3 bg-card">
          <div className="grid grid-cols-2 gap-3">
            <input name="name" placeholder="Your name" className="h-10 rounded-md border bg-background px-3 text-sm" />
            <input type="email" name="email" placeholder="Your email" className="h-10 rounded-md border bg-background px-3 text-sm" />
          </div>
          <input name="subject" placeholder="Subject" className="h-10 rounded-md border bg-background px-3 text-sm w-full" />
          <textarea name="message" placeholder="Message" className="min-h-28 rounded-md border bg-background px-3 py-2 text-sm w-full" />
          <Button type="submit">Send Message</Button>
        </form>
        <div className="rounded-lg border p-4 bg-card">
          <p className="text-muted-foreground">Let’s collaborate. Reach me via email or connect on social.</p>
          <div className="mt-4 grid gap-2 text-sm">
            <a href="mailto:sumit@example.com" className="hover:text-foreground inline-flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4"/> sumit@example.com</a>
            <a href="tel:+91XXXXXXXXXX" className="hover:text-foreground inline-flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4"/> +91 XXXXX-XXXXX</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-2 text-muted-foreground"><Github className="h-4 w-4"/> GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-2 text-muted-foreground"><Linkedin className="h-4 w-4"/> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}


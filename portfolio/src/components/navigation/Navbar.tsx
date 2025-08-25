import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { cn } from '../../lib/utils'

type Props = { activeSection: string }

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar({ activeSection }: Props) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">Sumit Kumar</a>
        <nav className="hidden md:flex gap-1">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={cn(
              'px-3 py-2 rounded-md text-sm transition-colors',
              activeSection === l.id ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
            )}>{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {mounted && theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <a href="#contact">
            <Button>Contact Me</Button>
          </a>
        </div>
      </div>
    </header>
  )
}


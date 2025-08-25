export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Sumit Kumar. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="#home" className="hover:text-foreground">Home</a>
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  )
}


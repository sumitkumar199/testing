import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { Button } from './ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary/5 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold text-primary mb-2">
              Sumit Kumar
            </div>
            <p className="text-muted-foreground text-sm">
              Junior Web Developer passionate about creating amazing digital experiences.
            </p>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              Back to Top
              <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Sumit Kumar. Made with
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            and lots of coffee ☕
          </p>
          <p className="mt-2">
            All rights reserved. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
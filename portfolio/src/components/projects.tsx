import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce website built with Laravel and MySQL. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/api/placeholder/400/250',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application built with React and local storage. Features drag-and-drop functionality, task categories, and progress tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'Frontend'
    },
    {
      title: 'Restaurant Website',
      description: 'A modern restaurant website with online reservation system. Built with PHP backend and responsive frontend design.',
      image: '/api/placeholder/400/250',
      technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap', 'Ajax'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'Full Stack'
    },
    {
      title: 'Portfolio Dashboard',
      description: 'An admin dashboard for managing portfolio content. Features CRUD operations, file uploads, and dynamic content management.',
      image: '/api/placeholder/400/250',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'Full Stack'
    },
    {
      title: 'Weather App',
      description: 'A clean and intuitive weather application that provides real-time weather data with beautiful UI and smooth animations.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'API Integration', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'Frontend'
    },
    {
      title: 'Blog CMS',
      description: 'A content management system for blogs with rich text editor, category management, and SEO optimization features.',
      image: '/api/placeholder/400/250',
      technologies: ['PHP', 'Laravel', 'MySQL', 'TinyMCE', 'Bootstrap'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'Full Stack'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden">
                <div className="relative overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-12 w-12 text-primary/60" />
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2 pt-0">
                  <Button variant="outline" size="sm" className="flex-1 group/btn">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 group/btn">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
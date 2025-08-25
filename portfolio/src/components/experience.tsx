import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const Experience = () => {
  const experiences = [
    {
      company: 'Redn Technologies',
      position: 'Web Developer',
      duration: '2023 - Present',
      location: 'Remote',
      type: 'Full-time',
      responsibilities: [
        'Developed and maintained web applications using PHP and Laravel framework',
        'Collaborated with design team to implement responsive user interfaces',
        'Optimized database queries and improved application performance',
        'Participated in code reviews and maintained coding standards'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap']
    },
    {
      company: 'Medishala',
      position: 'Web Development Intern',
      duration: '2023',
      location: 'Remote',
      type: 'Internship',
      responsibilities: [
        'Assisted in developing healthcare management system features',
        'Created responsive web pages using HTML, CSS, and JavaScript',
        'Integrated third-party APIs for enhanced functionality',
        'Participated in daily standups and sprint planning meetings'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']
    },
    {
      company: 'Excel Wash',
      position: 'Frontend Developer',
      duration: '2022 - 2023',
      location: 'On-site',
      type: 'Contract',
      responsibilities: [
        'Developed user-friendly interfaces for laundry service platform',
        'Implemented booking system with real-time availability updates',
        'Ensured cross-browser compatibility and mobile responsiveness',
        'Collaborated with backend team for API integration'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Ajax', 'jQuery']
    },
    {
      company: 'Home Pathshala',
      position: 'Web Developer',
      duration: '2022',
      location: 'Remote',
      type: 'Freelance',
      responsibilities: [
        'Built educational platform with course management features',
        'Implemented user authentication and authorization system',
        'Created admin dashboard for content management',
        'Optimized website for search engines and performance'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'jQuery']
    },
    {
      company: 'City Best Movers',
      position: 'Web Designer & Developer',
      duration: '2021 - 2022',
      location: 'On-site',
      type: 'Part-time',
      responsibilities: [
        'Designed and developed company website from scratch',
        'Created booking system for moving services',
        'Implemented contact forms and quote request features',
        'Maintained and updated website content regularly'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Web Design']
    },
    {
      company: 'PromoteBusi',
      position: 'Junior Web Developer',
      duration: '2021',
      location: 'Remote',
      type: 'Freelance',
      responsibilities: [
        'Developed business promotion websites for various clients',
        'Created responsive landing pages with high conversion rates',
        'Implemented SEO best practices for better search rankings',
        'Provided ongoing maintenance and support services'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'SEO']
    },
    {
      company: 'Sahitya Kriti',
      position: 'Web Development Trainee',
      duration: '2021',
      location: 'Remote',
      type: 'Training',
      responsibilities: [
        'Learned modern web development technologies and frameworks',
        'Built practice projects to strengthen programming skills',
        'Participated in code reviews and peer programming sessions',
        'Completed certification in full-stack web development'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            Work Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12 md:pr-0'
                }`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {experience.type}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{experience.position}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">
                        {experience.company}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
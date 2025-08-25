import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Globe, Palette, Server } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['PHP', 'Laravel', 'MySQL', 'Ajax'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Design',
      icon: Palette,
      skills: ['Web Designing', 'UI/UX', 'Responsive Design'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Others',
      icon: Code2,
      skills: ['Git', 'VS Code', 'Figma', 'Chrome DevTools'],
      color: 'from-orange-500 to-red-500'
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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & Technologies
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="bg-secondary/50 rounded-lg px-3 py-1 text-sm font-medium hover:bg-secondary transition-colors"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Level</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: 'PHP/Laravel', level: 85 },
              { skill: 'JavaScript/React', level: 80 },
              { skill: 'MySQL', level: 75 },
              { skill: 'HTML/CSS', level: 90 },
              { skill: 'Web Design', level: 85 },
              { skill: 'jQuery/Ajax', level: 70 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
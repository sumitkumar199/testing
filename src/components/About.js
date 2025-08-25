import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Mail, Phone, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Birthday', value: 'January 15, 1998' },
    { icon: MapPin, label: 'Location', value: 'New Delhi, India' },
    { icon: Mail, label: 'Email', value: 'sumit@example.com' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Delhi University',
      year: '2016 - 2019',
      description: 'Specialized in web development and database management'
    },
    {
      degree: 'Web Development Certification',
      institution: 'Online Platform',
      year: '2020',
      description: 'Advanced web development with modern frameworks'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know me better - my background, education, and what drives me in web development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile Image & Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="relative inline-block">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto relative overflow-hidden">
                  <div className="absolute inset-4 bg-background rounded-full flex items-center justify-center">
                    <span className="text-5xl font-bold gradient-text">SK</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
              </div>
            </motion.div>

            {/* Personal Information */}
            <motion.div variants={itemVariants} className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Personal Information
              </h3>
              <div className="space-y-3">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <info.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="text-sm text-muted-foreground">{info.label}:</span>
                      <span className="ml-2 font-medium">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* About Text */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate Junior Web Developer with a strong foundation in modern web technologies. 
                  My journey in web development began during my college years when I first discovered the 
                  power of creating interactive web applications.
                </p>
                <p>
                  With expertise in PHP, Laravel, React, and various frontend technologies, I specialize 
                  in building robust, scalable, and user-friendly web applications. I believe in writing 
                  clean, maintainable code and staying up-to-date with the latest industry trends.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I'm always eager to learn 
                  new skills and take on challenging projects that push my boundaries.
                </p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-card rounded-lg p-4 border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Strengths */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Problem Solving',
                  'Team Collaboration',
                  'Quick Learning',
                  'Attention to Detail',
                  'Communication',
                  'Time Management'
                ].map((strength, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{strength}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
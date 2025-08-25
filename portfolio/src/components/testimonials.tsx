import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Project Manager',
      company: 'Redn Technologies',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'Sumit is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. He completed our e-commerce platform ahead of schedule and exceeded all expectations.'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      company: 'Medishala',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'Working with Sumit during his internship was a pleasure. He quickly grasped complex healthcare system requirements and contributed meaningful code. His dedication and learning attitude make him a valuable team member.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Business Owner',
      company: 'Excel Wash',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'Sumit transformed our business with a beautiful, functional website. The booking system he built increased our customer engagement by 150%. His technical skills and creative approach are impressive.'
    },
    {
      name: 'David Kumar',
      position: 'Founder',
      company: 'Home Pathshala',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'The educational platform Sumit built for us is exactly what we envisioned. His ability to understand our needs and translate them into a user-friendly interface is remarkable. Highly recommended!'
    },
    {
      name: 'Lisa Thompson',
      position: 'Marketing Director',
      company: 'City Best Movers',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'Sumit created a stunning website that perfectly represents our brand. The quote system and contact forms work flawlessly. Our online inquiries increased by 200% after the website launch.'
    },
    {
      name: 'Raj Patel',
      position: 'Digital Marketing Consultant',
      company: 'PromoteBusi',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'Sumit\'s expertise in creating conversion-focused landing pages is exceptional. His understanding of SEO and user experience helped our clients achieve better search rankings and higher conversion rates.'
    }
  ]

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

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

  return (
    <section id="testimonials" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            Client Testimonials
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What my clients and colleagues say about working with me
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                <Card className="p-8 text-center relative">
                  <CardContent className="p-0">
                    {/* Quote Icon */}
                    <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
                    
                    {/* Rating Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      "{testimonials[currentIndex].testimonial}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center justify-center space-x-4">
                      {/* Placeholder for client image */}
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-muted-foreground">
                          {testimonials[currentIndex].position}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Testimonials Grid (Mobile Alternative) */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-muted-foreground mb-4">
                    "{testimonial.testimonial.substring(0, 120)}..."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">{testimonial.name}</h5>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
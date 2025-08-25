import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Github, Linkedin, Mail, Phone, ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const Portfolio = () => {
  const [theme, setTheme] = useState("light");
  const [active, setActive] = useState("hero");

  // Toggle dark / light by adding class on html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // IntersectionObserver to highlight nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 scroll-smooth">
      <Helmet>
        <title>Sumit Kumar | Junior Web Developer</title>
        <meta name="description" content="Portfolio of Sumit Kumar – Junior Web Developer" />
      </Helmet>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur bg-white/70 dark:bg-gray-900/70 z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <span className="font-bold text-lg">Sumit.dev</span>
          <div className="hidden md:flex space-x-6">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`hover:text-primary transition-colors ${
                  active === s.id ? "text-primary font-medium" : ""
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-20 space-y-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
};

/* ============= Sub Components ============= */

const SectionWrapper = ({ id, children }) => (
  <section id={id} className="container mx-auto px-4" >
    {children}
  </section>
);

const HeroSection = () => (
  <SectionWrapper id="hero">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Sumit Kumar</h1>
      <p className="text-xl md:text-2xl mb-6 text-primary">Junior Web Developer</p>
      <p className="max-w-xl mb-8">
        I build performant and delightful web experiences with modern technologies.
      </p>
      <div className="space-x-4">
        <Button className="gap-2" onClick={() => window.open("/SumitKumarCV.pdf")}> <ArrowDownToLine size={18}/> Download CV</Button>
        <Button variant="outline" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
          Contact Me
        </Button>
      </div>
    </motion.div>
  </SectionWrapper>
);

const AboutSection = () => (
  <SectionWrapper id="about">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-10 items-center">
      <img src="/assets/profile.jpg" alt="Sumit Kumar" className="w-56 h-56 object-cover rounded-full justify-self-center" />
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="leading-relaxed mb-2">
          Passionate web developer with experience building dynamic web applications using modern stacks. I love turning complex problems into elegant solutions.
        </p>
        <p className="leading-relaxed">
          My journey started with PHP & Laravel and expanded into JavaScript and React ecosystem.
        </p>
      </div>
    </motion.div>
  </SectionWrapper>
);

const skills = [
  "PHP",
  "Laravel",
  "MySQL",
  "JavaScript",
  "React",
  "Ajax",
  "Bootstrap",
  "Web Designing",
  "jQuery",
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
      {skills.map((skill) => (
        <Card key={skill} className="w-full p-4 flex items-center justify-center hover:shadow-md transition-shadow">
          {skill}
        </Card>
      ))}
    </div>
  </SectionWrapper>
);

const projects = [
  {
    title: "Project One",
    img: "/assets/project1.jpg",
    desc: "Brief description of project one showcasing key features and tech stack used.",
    github: "https://github.com/username/project-one",
    demo: "https://project-one-demo.com",
  },
  {
    title: "Project Two",
    img: "/assets/project2.jpg",
    desc: "Brief description of project two showcasing key features and tech stack used.",
    github: "https://github.com/username/project-two",
    demo: "https://project-two-demo.com",
  },
  // Add more...
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <Card key={p.title} className="group cursor-pointer overflow-hidden">
          <img src={p.img} alt={p.title} className="h-48 w-full object-cover group-hover:scale-110 transition-transform" />
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-sm">{p.desc}</p>
            <div className="flex space-x-4 pt-2">
              <Button size="sm" onClick={() => window.open(p.github)} className="gap-1"><Github size={16}/> Code</Button>
              <Button size="sm" variant="outline" onClick={() => window.open(p.demo)}>Live</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </SectionWrapper>
);

const experiences = [
  { company: "Redn Technologies", role: "Web Developer", period: "2022 - Present", details: "Building full-stack web solutions for diverse clients." },
  { company: "Medishala", role: "Intern", period: "2022", details: "Developed appointment booking features using Laravel." },
  { company: "Excel Wash", role: "Freelance", period: "2021", details: "Created responsive website and online booking system." },
  { company: "Home Pathshala", role: "Freelance", period: "2021", details: "Designed e-learning platform UI/UX." },
  { company: "City Best Movers", role: "Freelance", period: "2020", details: "Implemented moving services website with SEO optimisation." },
  { company: "PromoteBusi", role: "Freelance", period: "2020", details: "Developed promotional landing pages and integrations." },
  { company: "Sahitya Kriti", role: "Freelance", period: "2019", details: "Created content management features for publishing company." },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
    <ol className="relative border-l border-gray-300 dark:border-gray-700">
      {experiences.map((e, idx) => (
        <li key={idx} className="mb-10 ml-6">
          <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-primary rounded-full ring-8 ring-white dark:ring-gray-900"></span>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{e.period}</time>
          <h3 className="text-lg font-semibold">{e.company} – {e.role}</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">{e.details}</p>
        </li>
      ))}
    </ol>
  </SectionWrapper>
);

const testimonials = [
  { name: "John Doe", feedback: "Sumit was fantastic to work with, delivering on time and exceeding expectations." },
  { name: "Jane Smith", feedback: "Professional, skilled, and great attention to detail. Highly recommended." },
  { name: "Alex Johnson", feedback: "Creative solutions and solid understanding of web technologies." },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);
  const t = testimonials[idx];
  return (
    <SectionWrapper id="testimonials">
      <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
      <Card className="max-w-2xl mx-auto p-8 text-center space-y-4">
        <p className="italic">“{t.feedback}”</p>
        <span className="font-semibold">— {t.name}</span>
      </Card>
    </SectionWrapper>
  );
};

const ContactSection = () => (
  <SectionWrapper id="contact">
    <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" className="w-full p-3 border rounded-md bg-transparent" required />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-md bg-transparent" required />
        <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded-md bg-transparent" required />
        <Button type="submit">Send Message</Button>
      </form>
      <div className="space-y-4">
        <ContactItem icon={Mail} label="sumit@example.com" href="mailto:sumit@example.com" />
        <ContactItem icon={Phone} label="(+91) 98765 43210" href="tel:+919876543210" />
        <ContactItem icon={Linkedin} label="LinkedIn" href="https://linkedin.com/in/sumit" />
        <ContactItem icon={Github} label="GitHub" href="https://github.com/sumit" />
      </div>
    </div>
  </SectionWrapper>
);

const ContactItem = ({ icon: Icon, label, href }) => (
  <a href={href} className="flex items-center space-x-3 hover:text-primary">
    <Icon size={20} />
    <span>{label}</span>
  </a>
);

const FooterSection = () => (
  <footer className="mt-24 py-6 bg-gray-100 dark:bg-gray-800 text-center">
    <p>
      © {new Date().getFullYear()} Sumit Kumar. All rights reserved.
    </p>
    <div className="flex justify-center space-x-6 mt-2">
      {sections.map((s) => (
        <button key={s.id} onClick={() => document.getElementById(s.id).scrollIntoView({ behavior: "smooth" })} className="hover:text-primary text-sm">
          {s.label}
        </button>
      ))}
    </div>
  </footer>
);

export default Portfolio;
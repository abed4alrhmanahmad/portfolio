"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Car, Database, Shield, Layout } from "lucide-react"

const projects = [
  {
    title: "AutoAnkaufAdel",
    subtitle: "Used Car Buying Platform",
    description:
      "A comprehensive web-based system for purchasing used cars through an online submission process. Features vehicle listing with model, year, mileage, condition, and location data.",
    features: [
      "Vehicle listing with comprehensive details",
      "Admin workflow for reviewing submissions",
      "Offer management system",
      "User-friendly submission process",
    ],
    tech: ["React", "Laravel", "PostgreSQL", "Tailwind CSS"],
    icon: Car,
    color: "from-cyan-500/20 to-teal-500/20",
    highlights: ["Usability", "Transparency", "Efficiency"],
  },
  {
    title: "Inventory Management System",
    subtitle: "Warehouse Operations Tool",
    description:
      "Built during warehouse operations experience to track inventory movement, analyze historical data, and support demand forecasting to reduce shortages and overstock.",
    features: [
      "Real-time inventory tracking",
      "Historical data analysis",
      "Demand forecasting algorithms",
      "Stock organization tools",
    ],
    tech: ["Python", "PostgreSQL", "Data Analysis", "Excel"],
    icon: Database,
    color: "from-blue-500/20 to-indigo-500/20",
    highlights: ["Analytics", "Forecasting", "Optimization"],
  },
  {
    title: "System Administration Suite",
    subtitle: "Network & Server Management",
    description:
      "Comprehensive tools developed during System and Network Administration coursework for managing Windows servers and network infrastructure.",
    features: [
      "Server monitoring dashboard",
      "Network configuration tools",
      "User access management",
      "Security audit logging",
    ],
    tech: ["Windows Server", "PowerShell", "Networking", "Security"],
    icon: Shield,
    color: "from-emerald-500/20 to-green-500/20",
    highlights: ["Security", "Monitoring", "Administration"],
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Brand Showcase",
    description:
      "Modern, animated portfolio website showcasing skills and projects. Built with Next.js and featuring smooth animations and responsive design.",
    features: [
      "Smooth scroll animations",
      "Responsive design",
      "Dark theme optimized",
      "Performance focused",
    ],
    tech: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    icon: Layout,
    color: "from-violet-500/20 to-purple-500/20",
    highlights: ["Modern", "Animated", "Responsive"],
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.span
            className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Featured Projects
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Things I&apos;ve
            <br />
            <span className="text-primary">Built</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            A collection of projects that showcase my skills in full-stack development,
            problem-solving, and creating user-centric solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.15 }}
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <project.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div className="flex gap-3">
                      <motion.a
                        href="#"
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="#"
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mb-4">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.1 + i * 0.05 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-lg bg-secondary text-foreground font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-foreground font-medium hover:border-primary hover:text-primary transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

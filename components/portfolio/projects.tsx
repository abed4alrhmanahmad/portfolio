"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Car, Database, Shield, Layout } from "lucide-react"

const projects = [
  {
    title: "UNRWA - The Digital Hub | 3D E-Commerce Box Project",
    subtitle: "Interactive 3D Shopping Experience",
    description:
      "Created an interactive 3D shopping experience with drag-and-drop product placement using Three.js.",
    features: [
      "Drag-and-drop product placement in 3D scenes",
      "Optimized rendering performance for smooth interaction",
      "Responsive behavior for cross-device usage",
      "Immersive product visualization flow for engagement",
    ],
    tech: ["React", "Next.js", "Three.js", "TypeScript"],
    icon: Layout,
    color: "from-cyan-500/20 to-teal-500/20",
    highlights: ["3D UI", "Performance", "Responsive"],
    github: "https://github.com/abed4alrhmanahmad",
    live: "https://github.com/abed4alrhmanahmad",
  },
  {
    title: "Warehouse & Branch Management Platform",
    subtitle: "Real-Time Sync and AI Analytics",
    description:
      "Built an integrated system connecting warehouses and branches with real-time synchronization and automated workflows.",
    features: [
      "Real-time synchronization across warehouses and branches",
      "AI-powered forecasting and analytics for inventory planning",
      "Automated workflows for operations and stock handling",
      "Monitoring dashboards for stock movement and system activity",
    ],
    tech: ["React", "FastAPI", "MySQL", "AI Analytics"],
    icon: Database,
    color: "from-blue-500/20 to-indigo-500/20",
    highlights: ["Real-Time", "AI Forecasting", "Automation"],
    github: "https://github.com/abed4alrhmanahmad/warehouse",
    live: "https://github.com/abed4alrhmanahmad/warehouse",
  },
  {
    title: "Nutrition CMS System",
    subtitle: "Role-Based Content Management",
    description:
      "Content management system with role-based authentication, admin dashboard, and dynamic content handling.",
    features: [
      "Role-based authentication",
      "Admin dashboard and controls",
      "Dynamic content publishing",
      "Structured CMS workflows",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB"],
    icon: Shield,
    color: "from-emerald-500/20 to-green-500/20",
    highlights: ["CMS", "Auth", "Dynamic Content"],
    github: "https://github.com/abed4alrhmanahmad/nutrition",
    live: "https://github.com/abed4alrhmanahmad/nutrition",
  },
  {
    title: "Gym Management System",
    subtitle: "Secure Gym Operations Platform",
    description:
      "Role-based gym management system with authentication, analytics dashboards, and secure API architecture.",
    features: [
      "Role-based access control",
      "Authentication and secure API flows",
      "Analytics dashboards for operations",
      "Modular management workflows",
    ],
    tech: ["React", "FastAPI", "MySQL"],
    icon: Shield,
    color: "from-violet-500/20 to-purple-500/20",
    highlights: ["Auth", "Dashboards", "Secure API"],
    github: "https://github.com/abed4alrhmanahmad/fitzone",
    live: "https://github.com/abed4alrhmanahmad/fitzone",
  },
  {
    title: "Gym App (Vue 3)",
    subtitle: "Membership & Booking App",
    description:
      "Fitness booking and membership system with modular architecture and reusable Vue components.",
    features: [
      "Fitness booking workflows",
      "Membership lifecycle management",
      "Reusable Vue component architecture",
      "Modular frontend structure",
    ],
    tech: ["Vue 3", "Vite"],
    icon: Layout,
    color: "from-amber-500/20 to-orange-500/20",
    highlights: ["Vue 3", "Modular", "Reusable Components"],
    github: "https://github.com/abed4alrhmanahmad/Gym",
    live: "https://github.com/abed4alrhmanahmad/Gym",
  },
  {
    title: "AutoankaufAdel Website",
    subtitle: "Live Production Car Buying Platform",
    description:
      "Live production car buying platform for Germany with SEO optimization and secure backend integration.",
    features: [
      "Production-ready lead generation flow",
      "SEO-focused information architecture",
      "Secure backend integration",
      "Performance-oriented deployment",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    icon: Car,
    color: "from-rose-500/20 to-red-500/20",
    highlights: ["Production", "SEO", "Backend Integration"],
    github: "https://github.com/abed4alrhmanahmad",
    live: "https://autoankaufadel.de/",
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
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
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
            href="https://github.com/abed4alrhmanahmad"
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

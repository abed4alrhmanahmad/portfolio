"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Target, Lightbulb, Code2 } from "lucide-react"

const stats = [
  { label: "GPA", value: "3.77", suffix: "/4.00" },
  { label: "Technologies", value: "15", suffix: "+" },
  { label: "Projects", value: "10", suffix: "+" },
]

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.S. in Computer Science | Lebanese International University | Saida, Lebanon | Oct 2025",
  },
  {
    icon: Target,
    title: "Focus",
    description: "Full Stack Development with modern frameworks and best practices",
  },
  {
    icon: Lightbulb,
    title: "Approach",
    description: "Data-driven decision making and continuous learning mindset",
  },
  {
    icon: Code2,
    title: "Expertise",
    description: "React, Next.js, NestJS, FastAPI, and scalable full-stack architectures",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24" ref={ref}>
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
            About Me
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Crafting Digital
            <br />
            <span className="text-primary">Experiences</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I&apos;m a motivated Computer Science graduate with a strong foundation in
              Full Stack Development. My journey combines academic excellence with
              hands-on experience in solving real-world technical and operational
              problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With expertise spanning from frontend frameworks like React and Next.js
              to backend technologies like Laravel and Node.js, I build efficient
              web-based solutions that make a difference. I&apos;m passionate about
              continuous learning and contributing to high-impact development teams.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-secondary/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-foreground">
                    {stat.value}
                    <span className="text-primary text-lg">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <highlight.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

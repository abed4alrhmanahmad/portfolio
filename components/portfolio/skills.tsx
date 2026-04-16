"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "NestJS", level: 90 },
      { name: "FastAPI", level: 90 },
      { name: "Django", level: 86 },
      { name: "Express.js", level: 88 },
      { name: "Laravel", level: 85 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "HTML", level: 95 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "AI & Machine Learning Systems",
    skills: [
      { name: "RAG", level: 86 },
      { name: "LangChain", level: 84 },
      { name: "AI Agents", level: 87 },
      { name: "MCP", level: 82 },
      { name: "Prompt Engineering", level: 89 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "Supabase", level: 82 },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "PHP", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Java", level: 80 },
    ],
  },
]

const techStack = [
  "Node.js",
  "Express.js",
  "FastAPI",
  "NestJS",
  "Django",
  "Laravel",
  "React",
  "Next.js",
  "HTML",
  "Tailwind CSS",
  "Python",
  "JavaScript",
  "TypeScript",
  "PHP",
  "SQL",
  "Java",
  "RAG",
  "LangChain",
  "AI Agents",
  "MCP",
  "Prompt Engineering",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "Git",
  "Postman",
  "Jira",
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="skills"
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
            Skills & Expertise
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Technologies I
            <br />
            <span className="text-primary">Work With</span>
          </motion.h2>
        </motion.div>

        {/* Animated Tech Stack Marquee */}
        <motion.div
          className="mb-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="flex gap-4 animate-marquee">
            {[...techStack, ...techStack].map((tech, index) => (
              <motion.span
                key={`${tech}-${index}`}
                className="px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium whitespace-nowrap"
                whileHover={{ scale: 1.1, borderColor: "var(--primary)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="p-6 rounded-2xl bg-card border border-border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + catIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 0.8 + catIndex * 0.1 + skillIndex * 0.1,
                          duration: 1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          className="mt-12 p-8 rounded-2xl bg-card border border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Strengths
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Problem Solving",
              "System Design Thinking",
              "Scalable Architecture Design",
              "API Development",
              "Fast Learner",
              "Clean Code",
              "Team Collaboration (Agile / Scrum)",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

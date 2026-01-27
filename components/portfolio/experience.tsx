"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, BookOpen, Award } from "lucide-react"

const experiences = [
  {
    icon: Briefcase,
    title: "Warehouse Operations & Forecasting",
    company: "Professional Experience",
    period: "Real-world Application",
    description: [
      "Solved daily operational and system-related issues in a warehouse environment",
      "Analyzed inventory movement and historical data to support basic warehouse demand forecasting",
      "Assisted in estimating future stock needs to reduce shortages and overstock",
      "Improved workflow efficiency through better stock organization and tracking methods",
      "Developed strong analytical thinking and responsibility under real operational pressure",
    ],
    skills: ["Data Analysis", "Problem Solving", "Operations Management", "Forecasting"],
  },
  {
    icon: BookOpen,
    title: "B.S. in Computer Science",
    company: "Lebanese International University",
    period: "Graduate | GPA: 3.77/4.00",
    description: [
      "Completed comprehensive coursework in modern software development",
      "Specialized studies in Robotics and Designs",
      "Advanced training in System and Network Administration",
      "Machine Learning fundamentals and applications",
    ],
    skills: ["Robotics", "System Administration", "Machine Learning", "Computer Science"],
  },
]

const coursework = [
  "Robotics and Designs",
  "System and Network Administration",
  "Machine Learning",
  "Data Structures",
  "Algorithms",
  "Database Systems",
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 lg:px-24" ref={ref}>
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
            Experience & Education
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            My Professional
            <br />
            <span className="text-primary">Journey</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.4 }}
            style={{ transformOrigin: "top" }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
              />

              {/* Content Card */}
              <motion.div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <div
                    className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <exp.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-primary">{exp.company}</p>
                    </div>
                  </div>

                  <span className="inline-block text-xs text-muted-foreground mb-4 px-3 py-1 rounded-full bg-secondary">
                    {exp.period}
                  </span>

                  <ul
                    className={`space-y-2 mb-4 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Relevant Coursework */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-card border border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
              Relevant Coursework
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {coursework.map((course, index) => (
              <motion.span
                key={course}
                className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium text-sm border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.3 + index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "var(--primary)",
                }}
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Heart, Code2 } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      className="py-8 px-6 md:px-12 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          className="text-sm text-muted-foreground flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <Code2 className="w-4 h-4 text-primary" />
          Built with
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </motion.span>
          by Abed Alrhman Ahmad
        </motion.p>
        <motion.p
          className="text-sm text-muted-foreground"
          whileHover={{ scale: 1.02 }}
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}

"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  const bookVariants = {
    closed: { rotateY: 0 },
    open: { rotateY: 180 }
  }

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  }

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="w-32 h-40 bg-secondary rounded-r-lg relative overflow-hidden"
          initial="closed"
          animate="open"
          variants={bookVariants}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.div
            className="absolute inset-0 bg-white"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-primary-foreground mt-4 text-center"
        >
          Loading Knowledge...
        </motion.h2>
      </div>
    </div>
  )
}

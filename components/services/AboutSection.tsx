"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-12 sm:space-y-16"
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              At UK Essays, we're proud to know exactly what goes into making an awesome essay. We've dedicated over 20 years towards becoming experts in all things academic – from essays, assignments and coursework, through to dissertations, exams, reports and reflections. While others come and go, UKEssays has grown and developed into one of the world's leading academic support companies. Got more questions about our services?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-orange-600 hover:bg-orange-700">
                Check Out Our Samples
              </Button>
            </motion.div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold"
            >
              About UKEssays.com
            </motion.h2>
            <p className="text-muted-foreground leading-relaxed">
              We use a team of experts and academics to build your order and create a fantastic, unique and exciting piece of work every time. We only use highly qualified writers, including lecturers, teachers and PhD holders. Our in-house teams are on hand to support you with everything from placing your order through to ensuring your order is in perfect condition before being sent to you.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700">
                Discover More About UKEssays
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

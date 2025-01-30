"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileCheck, PenTool, Heart, Globe, Smile, Search } from 'lucide-react'

export function MainContent() {
  const features = [
    { icon: FileCheck, title: "No Stress", description: "We guarantee the final grade* of your work." },
    { icon: PenTool, title: "Easy Choices", description: "We write on any topic, at any level, for any deadline." },
    { icon: Heart, title: "Total Happiness", description: "The highest quality or we will amend your work for free." },
    { icon: Globe, title: "Complete Reassurance", description: "UK Essays, a 20 year global brand with worldwide press." },
    { icon: Smile, title: "Peace of Mind", description: "Thousands of verified customer reviews." },
    { icon: Search, title: "Know It's Real", description: "All work backed by plagiarism and AI scans - free." }
  ]

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            UK Essays - Difference that{" "}
            <span className="text-secondary">Delivers</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            At UK Essays, we provide top-tier academic services tailored to meet
            your needs, filling the gaps your university might overlook in
            supporting your academic journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="p-2 rounded-full bg-accent/20">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </span>
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 h-auto">
            Secure your grade and order today
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

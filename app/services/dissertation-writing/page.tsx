"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, Award, BookOpen, FileText, Search, PenTool } from 'lucide-react'

export default function DissertationWritingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const features = [
    { icon: CheckCircle, title: "Original Research", description: "We conduct thorough research tailored to your topic" },
    { icon: Clock, title: "Timely Delivery", description: "We respect your deadlines and deliver on time" },
    { icon: Users, title: "PhD-Level Writers", description: "Our team includes experts with advanced degrees" },
    { icon: Award, title: "Quality Assurance", description: "Rigorous quality checks for every dissertation" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <motion.h1
              {...fadeIn}
              className="text-4xl md:text-5xl font-bold text-center mb-6"
            >
              Dissertation Writing Service
            </motion.h1>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-center max-w-3xl mx-auto"
            >
              Expert assistance for your doctoral research and writing
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Dissertation Service?</h2>
                <p className="text-gray-600 mb-6">
                  Completing a dissertation is a significant challenge. Our team of PhD-level experts is here to guide you through every step of the process, ensuring your dissertation meets the highest academic standards.
                </p>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <feature.icon className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature.title}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="relative h-80 rounded-lg overflow-hidden"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Dissertation Writing"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeIn}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Dissertation Writing Process
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: FileText, title: "1. Topic Selection", description: "We help you choose a compelling research topic" },
                { icon: Search, title: "2. Literature Review", description: "Comprehensive review of existing research" },
                { icon: PenTool, title: "3. Research & Writing", description: "Conduct original research and draft chapters" },
                { icon: CheckCircle, title: "4. Editing & Proofreading", description: "Thorough revision and quality checks" },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <step.icon className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              {...fadeIn}
              className="text-3xl font-bold mb-6"
            >
              Ready to Start Your Dissertation Journey?
            </motion.h2>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Let our expert PhD-level writers guide you to success. Get started on your dissertation today!
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Start Your Dissertation
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="bg-accent text-accent-foreground py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeIn}
              className="text-3xl font-bold text-center mb-12"
            >
              Success Stories
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Dr. James H.", field: "Computer Science", review: "The support I received throughout my dissertation was invaluable. The team's expertise significantly contributed to my success." },
                { name: "Dr. Lisa M.", field: "Psychology", review: "I was impressed by the depth of research and the quality of writing. The service helped me complete my dissertation on time." },
                { name: "Dr. Robert K.", field: "Business Administration", review: "The guidance provided by the UKEssays team was crucial in helping me navigate the complexities of my doctoral research." },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white text-gray-800 p-6 rounded-lg shadow-md"
                >
                  <p className="italic mb-4">"{testimonial.review}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.field}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, Award, BookOpen, FileText, Zap, MessageSquare } from 'lucide-react'

export default function CourseworkWritingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const features = [
    { icon: CheckCircle, title: "Custom-Written", description: "Tailored coursework to meet your specific requirements" },
    { icon: Clock, title: "On-Time Delivery", description: "We always meet your deadlines, no matter how tight" },
    { icon: Users, title: "Expert Writers", description: "Qualified professionals in your field of study" },
    { icon: Award, title: "Quality Guaranteed", description: "High-quality work or your money back" },
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
              Coursework Writing Service
            </motion.h1>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-center max-w-3xl mx-auto"
            >
              Expert assistance for all your coursework needs
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Coursework Writing Service?</h2>
                <p className="text-gray-600 mb-6">
                  Coursework can be challenging and time-consuming. Our team of expert writers is here to help you excel in your studies by providing high-quality, custom-written coursework across all subjects.
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
                  alt="Coursework Writing"
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
              Our Coursework Writing Process
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: FileText, title: "1. Order Placement", description: "Submit your coursework requirements" },
                { icon: Users, title: "2. Writer Assignment", description: "We match you with an expert in your subject" },
                { icon: Zap, title: "3. Research & Writing", description: "Your writer creates your custom coursework" },
                { icon: CheckCircle, title: "4. Quality Check", description: "Thorough review and plagiarism check" },
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
              Ready to Excel in Your Coursework?
            </motion.h2>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Don't let coursework stress you out. Let our expert writers help you achieve the grades you deserve!
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Order Your Coursework Now
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
              Student Success Stories
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Emma S.", course: "Biology", review: "The coursework I received was exceptional. It was well-researched and perfectly structured. I learned a lot from it!" },
                { name: "Thomas R.", course: "History", review: "I was struggling with my history coursework, but the writer provided invaluable assistance. The final piece was outstanding." },
                { name: "Olivia M.", course: "Economics", review: "The economics coursework was spot-on. The writer demonstrated a deep understanding of complex concepts and applied them brilliantly." },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white text-gray-800 p-6 rounded-lg shadow-md"
                >
                  <p className="italic mb-4">"{testimonial.review}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )}

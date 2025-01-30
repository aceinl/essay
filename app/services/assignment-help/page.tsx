"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, Award, BookOpen, FileText, Zap, MessageSquare } from 'lucide-react'

export default function AssignmentHelpPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const features = [
    { icon: CheckCircle, title: "All Subjects Covered", description: "Expert help across various academic disciplines" },
    { icon: Clock, title: "Fast Turnaround", description: "Quick delivery for urgent assignments" },
    { icon: Users, title: "Qualified Experts", description: "Assistance from professionals in your field" },
    { icon: Award, title: "Top Grades Guaranteed", description: "We aim for nothing less than excellence" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground py-20"> {/* Updated hero section background */}
          <div className="container mx-auto px-4">
            <motion.h1
              {...fadeIn}
              className="text-4xl md:text-5xl font-bold text-center mb-6"
            >
              Assignment Help Service
            </motion.h1>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-center max-w-3xl mx-auto"
            >
              Professional assistance for all your academic assignments
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Assignment Help?</h2>
                <p className="text-gray-600 mb-6">
                  Struggling with complex assignments? Our team of expert academic helpers is here to assist you in achieving top grades across all subjects and assignment types.
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
                  alt="Assignment Help"
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
              Our Assignment Help Process
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: FileText, title: "1. Submit Requirements", description: "Provide your assignment details and instructions" },
                { icon: Users, title: "2. Expert Matching", description: "We assign a qualified expert in your subject" },
                { icon: Zap, title: "3. Writing & Research", description: "Your expert completes the assignment" },
                { icon: CheckCircle, title: "4. Quality Assurance", description: "Thorough review and plagiarism check" },
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
              Need Help with Your Assignment?
            </motion.h2>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Don't stress over deadlines and complex topics. Let our experts help you achieve the grades you deserve!
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"> {/* Updated CTA button colors */}
                Get Assignment Help Now
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="bg-accent text-accent-foreground py-16"> {/* Updated testimonials section background */}
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeIn}
              className="text-3xl font-bold text-center mb-12"
            >
              What Our Students Say
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Alex P.", course: "Engineering", review: "The assignment help I received was exceptional. The expert understood the complex requirements and delivered a top-notch solution." },
                { name: "Sophia L.", course: "Business Studies", review: "I was struggling with my marketing assignment, but the help I got turned it into an A-grade paper. Highly recommended!" },
                { name: "Daniel K.", course: "Computer Science", review: "The coding assignment assistance was brilliant. The expert not only solved the problem but also explained the logic clearly." },
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
  )
}

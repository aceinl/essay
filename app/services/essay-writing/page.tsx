"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, Award, BookOpen } from 'lucide-react'

export default function EssayWritingServicePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const features = [
    { icon: CheckCircle, title: "100% Plagiarism-Free", description: "Every essay is written from scratch and checked for originality" },
    { icon: Clock, title: "On-Time Delivery", description: "We guarantee delivery before your deadline, no matter how urgent" },
    { icon: Users, title: "Expert Writers", description: "Our team consists of experienced academic professionals in various fields" },
    { icon: Award, title: "Quality Guaranteed", description: "We ensure the highest quality in all our work, or your money back" },
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
              Essay Writing Service
            </motion.h1>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-center max-w-3xl mx-auto"
            >
              Professional essay writing tailored to your needs
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Essay Writing Service?</h2>
                <p className="text-gray-600 mb-6">
                  At UKEssays, we understand the challenges students face when it comes to essay writing. Our expert team of writers is here to help you achieve academic excellence with custom-written essays that meet the highest standards.
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
                  alt="Essay Writing"
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
              Our Essay Writing Process
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: BookOpen, title: "1. Order Placement", description: "Submit your essay requirements and instructions" },
                { icon: Users, title: "2. Writer Assignment", description: "We match you with an expert in your subject area" },
                { icon: Clock, title: "3. Writing & Research", description: "Your writer crafts a custom essay based on your needs" },
                { icon: CheckCircle, title: "4. Quality Check", description: "Our team reviews the essay for quality and originality" },
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
              Ready to Excel in Your Essays?
            </motion.h2>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Let our expert writers help you achieve the grades you deserve. Place your order now and experience the UKEssays difference!
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Order Your Essay Now
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
              What Our Customers Say
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah K.", course: "English Literature", review: "The essay I received was outstanding! It perfectly addressed the topic and included insightful analysis." },
                { name: "Michael T.", course: "Business Management", review: "I was impressed by the depth of research and the quality of writing. Will definitely use this service again!" },
                { name: "Emily R.", course: "Psychology", review: "The writer incorporated recent studies and provided a balanced argument. Exactly what I needed for my assignment." },
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

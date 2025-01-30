"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, BookOpen, Award } from 'lucide-react'

export default function AboutUsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <motion.h1
              {...fadeIn}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6"
            >
              About UKEssays
            </motion.h1>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-center max-w-3xl mx-auto"
            >
              Empowering students worldwide with expert academic support since 2003
            </motion.p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2003, UKEssays has grown from a small startup to a global leader in academic support services. Our journey began with a simple mission: to help students achieve their academic goals by providing high-quality, custom-written essays and assignments.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to have assisted over 100,000 students worldwide, continually expanding our services to meet the evolving needs of the academic community.
                </p>
              </motion.div>
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="relative h-64 sm:h-80 rounded-lg overflow-hidden"
              >
                <Image
                  src="/placeholder.svg"
                  alt="UKEssays team"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-secondary text-secondary-foreground py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeIn}
              className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
            >
              Our Values
            </motion.h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: CheckCircle, title: "Quality", description: "We're committed to delivering the highest quality work, every time." },
                { icon: Users, title: "Collaboration", description: "We believe in the power of teamwork and open communication." },
                { icon: BookOpen, title: "Continuous Learning", description: "We're always striving to expand our knowledge and improve our services." }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card text-card-foreground p-4 sm:p-6 rounded-lg shadow-md"
                >
                  <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeIn}
              className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
            >
              Meet Our Team
            </motion.h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { name: "Dr. Sarah Johnson", role: "Chief Academic Officer", image: "/placeholder.svg" },
                { name: "Michael Chen", role: "Head of Quality Assurance", image: "/placeholder.svg" },
                { name: "Emily Rodriguez", role: "Customer Success Manager", image: "/placeholder.svg" },
                { name: "David Okonkwo", role: "Lead Essay Writer", image: "/placeholder.svg" }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent text-accent-foreground py-12 sm:py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              {...fadeIn}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
            >
              Join Our Academic Community
            </motion.h2>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
            >
              Experience the UKEssays difference and take your academic journey to new heights. Our team of experts is ready to support you every step of the way.
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeIn}
              className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
            >
              Our Achievements
            </motion.h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              {[
                { number: "100k+", label: "Students Helped" },
                { number: "20+", label: "Years of Experience" },
                { number: "95%", label: "Customer Satisfaction" },
                { number: "500+", label: "Expert Writers" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
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

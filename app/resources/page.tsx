"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, FileText, Video, Download } from 'lucide-react'

export default function ResourcesPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const resources = [
    { icon: BookOpen, title: "Study Guides", description: "Comprehensive guides to help you excel in your studies", link: "/resources/study-guides" },
    { icon: FileText, title: "Sample Essays", description: "Browse our collection of high-quality sample essays", link: "/resources/sample-essays" },
    { icon: Video, title: "Video Tutorials", description: "Watch our educational videos on various academic topics", link: "/resources/video-tutorials" },
    { icon: Download, title: "Downloadable Templates", description: "Access our free academic templates and tools", link: "/resources/templates" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <motion.h1
              {...fadeIn}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6"
            >
              Academic Resources
            </motion.h1>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-6 sm:mb-8"
            >
              Explore our collection of free resources to support your academic journey
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="max-w-md mx-auto"
            >
              <form className="relative">
                <Input
                  type="search"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-primary-foreground/50" />
              </form>
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card text-card-foreground p-4 sm:p-6 rounded-lg shadow-md"
                >
                  <resource.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">{resource.title}</h2>
                  <p className="text-muted-foreground text-sm sm:text-base mb-4">{resource.description}</p>
                  <Link href={resource.link}>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Explore
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent text-accent-foreground py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeIn}
              className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
            >
              Featured Resources
            </motion.h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: "How to Write a Dissertation", image: "/placeholder.svg", link: "/resources/dissertation-guide" },
                { title: "APA Referencing Guide", image: "/placeholder.svg", link: "/resources/apa-guide" },
                { title: "Critical Thinking Skills", image: "/placeholder.svg", link: "/resources/critical-thinking" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                    <Link href={feature.link}>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              {...fadeIn}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
            >
              Need More Help?
            </motion.h2>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
            >
              Our team of expert writers and researchers is ready to assist you with your academic needs.
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Professional Help
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

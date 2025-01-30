"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, Search } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Sarah J.",
    rating: 5,
    date: "15 May 2023",
    content: "The essay I received was outstanding! It perfectly addressed the topic and included insightful analysis. Highly recommend UKEssays for their exceptional service.",
    course: "English Literature"
  },
  {
    id: 2,
    name: "Michael T.",
    rating: 4,
    date: "3 June 2023",
    content: "Great work on my dissertation proposal. The writer clearly understood the requirements and delivered a well-structured document. Just a few minor revisions needed.",
    course: "Business Management"
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 5,
    date: "22 April 2023",
    content: "I was impressed by the depth of research in my psychology essay. The writer incorporated recent studies and provided a balanced argument. Will definitely use UKEssays again!",
    course: "Psychology"
  },
  {
    id: 4,
    name: "David L.",
    rating: 4,
    date: "10 July 2023",
    content: "The assignment help I received was very useful. The explanations were clear and helped me understand the complex topics better.",
    course: "Computer Science"
  },
  {
    id: 5,
    name: "Sophie W.",
    rating: 5,
    date: "5 August 2023",
    content: "Excellent service! The coursework was delivered before the deadline and exceeded my expectations. The writer's attention to detail was impressive.",
    course: "Marketing"
  },
  {
    id: 6,
    name: "James H.",
    rating: 4,
    date: "20 September 2023",
    content: "Very satisfied with the quality of work. The essay was well-researched and properly formatted. Will use the service again for future assignments.",
    course: "History"
  }
]

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredReviews = reviews.filter(review =>
    review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.course.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6"
            >
              Customer Reviews
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-center mb-6 sm:mb-8"
            >
              See what our customers are saying about UKEssays
            </motion.p>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-primary-foreground/50" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredReviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card text-card-foreground p-4 sm:p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h2 className="text-lg sm:text-xl font-semibold">{review.name}</h2>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            index < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">{review.content}</p>
                  <div className="flex justify-between items-center text-xs sm:text-sm text-muted-foreground">
                    <span>{review.date}</span>
                    <span>{review.course}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary text-secondary-foreground py-12 sm:py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
            >
              Ready to experience our top-rated service?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl mb-6 sm:mb-8"
            >
              Join thousands of satisfied students and get the grade you deserve!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Place Your Order Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

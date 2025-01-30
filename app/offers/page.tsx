"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Percent, Gift, Users } from 'lucide-react'

export default function OffersPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const offers = [
    { title: "New Customer Discount", description: "Get 15% off your first order", code: "NEWCUSTOMER15", icon: Gift },
    { title: "Loyalty Reward", description: "10% off for returning customers", code: "LOYALTY10", icon: Percent },
    { title: "Refer a Friend", description: "Both you and your friend get £20 off", code: "REFER20", icon: Users },
    { title: "Early Bird Special", description: "20% off orders placed 10+ days in advance", code: "EARLYBIRD20", icon: Clock },
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
              Special Offers
            </motion.h1>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-center max-w-3xl mx-auto"
            >
              Exclusive discounts and promotions to help you save on our services
            </motion.p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {offers.map((offer, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card text-card-foreground p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center"
                >
                  <offer.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4 sm:mb-0 sm:mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">{offer.title}</h2>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4">{offer.description}</p>
                    <div className="bg-accent/20 text-accent-foreground p-2 rounded">
                      <span className="font-semibold">Use code: </span>
                      <span className="text-secondary">{offer.code}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary text-secondary-foreground py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeIn}
              className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
            >
              Why Choose UKEssays?
            </motion.h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: CheckCircle, title: "Quality Guaranteed", description: "We ensure the highest quality in all our work" },
                { icon: Clock, title: "On-Time Delivery", description: "We always meet deadlines, no matter how tight" },
                { icon: Users, title: "Expert Writers", description: "Our team consists of experienced academic professionals" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <feature.icon className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-secondary-foreground/80 text-sm sm:text-base">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              {...fadeIn}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
            >
              Ready to Place Your Order?
            </motion.h2>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
            >
              Take advantage of our special offers and get the academic support you need today!
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your Order
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
              Frequently Asked Questions
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              {[
                { question: "How do I apply a discount code?", answer: "Enter the discount code in the designated field during the checkout process. The discount will be automatically applied to your order total." },
                { question: "Can I combine multiple offers?", answer: "Generally, offers cannot be combined. However, some special promotions may allow for combination. Please check the terms of each offer for details." },
                { question: "Do offers apply to all services?", answer: "Most offers apply to our standard essay writing services. However, some specialized services may be excluded. Always check the offer details for any restrictions." },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="mb-6"
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{faq.answer}</p>
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

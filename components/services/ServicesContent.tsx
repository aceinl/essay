"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Star } from 'lucide-react'

export function ServicesContent() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

  const services = [
    {
      title: "Essay Services",
      items: [
        { name: "Essay Writing Service", href: "/services/essay-writing" },
        { name: "Essay / Assignment Editing Service", href: "/services/editing" },
        { name: "Assignment Writing Service", href: "/services/assignment-writing" },
        { name: "Coursework Writing Service", href: "/services/coursework-writing" },
      ]
    },
    {
      title: "Dissertation Services",
      items: [
        { name: "Dissertation Writing Service", href: "/services/dissertation-writing" },
        { name: "Dissertation Proposal Service", href: "/services/dissertation-proposal" },
        { name: "Topics with Titles Service", href: "/services/topics-with-titles" },
        { name: "Literature Review Service", href: "/services/literature-review" },
      ]
    },
    {
      title: "Masters Services",
      items: [
        { name: "Masters Dissertation Service", href: "/services/masters-dissertation" },
        { name: "Masters Essay Writing Service", href: "/services/masters-essay" },
      ]
    }
  ]

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
            Academic Service Portfolio
          </h2>
          <p className="text-center text-muted-foreground mb-6 sm:mb-8">
            Here you can find details of the various academic services we provide to university students, including our popular essay writing, marking and editing services.
          </p>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12">
            We understand the needs of both local and international students, and have a large selection of academic writers who can assist on any university writing assignment you might have.
          </p>

          <div className="flex justify-center mb-8 sm:mb-12">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Start Your Order!
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-12">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold">4.4</span>
              <span className="text-muted-foreground">/5</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              1856 Reviews
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
              What are you looking for?
            </h3>
            <Accordion
              type="single"
              collapsible
              value={activeAccordion}
              onValueChange={setActiveAccordion}
              className="w-full"
            >
              {services.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base sm:text-lg font-semibold">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      {service.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        >
                          <a
                            href={item.href}
                            className="text-blue-600 hover:underline block py-1"
                          >
                            {item.name}
                          </a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

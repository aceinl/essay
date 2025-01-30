import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function ServicesSection() {
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const services = [
    "Essay Writing Service",
    "Assignment Writing Service",
    "Dissertation Writing Service",
    "Dissertation Proposals"
  ]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service}
              variants={serviceVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src="/placeholder.svg"
                alt={service}
                width={300}
                height={200}
                className="w-full aspect-[4/3] object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-primary/80 flex items-end p-4"
              >
                <h3 className="text-primary-foreground font-semibold">{service}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

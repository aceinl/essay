import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function FreeResourcesSection() {
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  const resourceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  const resources = [
    { title: "Lectures", image: "/placeholder.svg" },
    { title: "Essays", image: "/placeholder.svg" },
    { title: "Study Guides", image: "/placeholder.svg" },
    { title: "Referencing Resources", image: "/placeholder.svg" }
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
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={resourceVariants}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Top <span className="text-secondary">Free Study Resources</span>
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              variants={resourceVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src={resource.image}
                alt={resource.title}
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
                <div>
                  <span className="text-secondary text-sm font-medium">FREE</span>
                  <h3 className="text-primary-foreground font-semibold">{resource.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

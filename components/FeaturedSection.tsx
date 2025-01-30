import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function FeaturedSection() {
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      transition={{ duration: 0.5 }}
      className="py-8 sm:py-12 bg-accent text-accent-foreground"
    >
      <div className="container mx-auto px-4">
        <motion.p
          variants={logoVariants}
          className="text-center text-base sm:text-lg mb-6 sm:mb-8"
        >
          As featured In:
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12">
          {["The Times", "Independent", "BBC", "Daily Mail"].map((name, index) => (
            <motion.div
              key={name}
              variants={logoVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src="/placeholder.svg"
                alt={name}
                width={80}
                height={30}
                className="h-5 sm:h-6 md:h-8 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

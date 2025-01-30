import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function FairUsePolicySection() {
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

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
      className="py-16 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Fair Use Policy</h2>
            <p className="text-lg mb-6">
              Understanding how to use your essay is key to gaining the most from your experience with us. Watch now to learn how:
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Our Fair Use Policy
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-black aspect-video rounded-lg flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Image
                src="/placeholder.svg"
                alt="UKEssays Logo"
                width={200}
                height={100}
                className="w-32"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

import { motion } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function CTASection() {
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
      className="py-16 bg-secondary"
    >
      <div className="container mx-auto px-4 text-center text-secondary-foreground">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-4"
        >
          Order an Essay Today!
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg mb-8"
        >
          We have over 500 expert essay writers, ready and waiting to help you achieve academic success
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="flex justify-center gap-4"
        >
          <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Order an Essay
            </Button>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
            <Button variant="secondary" className="bg-white text-secondary hover:bg-white/90">
              Check Prices
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

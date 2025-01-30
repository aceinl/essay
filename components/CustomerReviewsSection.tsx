import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function CustomerReviewsSection() {
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
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
            <p className="text-lg font-bold mb-6">Overall rating</p>
            <div className="text-6xl font-bold mb-4">4.4<span className="text-2xl text-muted-foreground">/5</span></div>
            <div className="flex gap-1 mb-2">
              {"★★★★☆".split("").map((star, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="text-yellow-400 text-xl"
                >
                  {star}
                </motion.span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              1556 Reviews
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              All reviews are supplied by verified UK Essays customers via the trusted and independent online review site, Reviews.io
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <Image
              src="/placeholder.svg"
              alt="Reviews.io"
              width={100}
              height={30}
              className="mb-4"
            />
            <p className="italic mb-4">
              "I would highly recommend this service as it is an excellent service that assists students of different levels in their thinking and analysis of their work. The service is delivered to a high quality and everyone is keen to help and go the extra mile."
            </p>
            <p className="font-semibold">Yasmin D</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

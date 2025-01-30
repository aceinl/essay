"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function ServicesHero() {
  return (
    <section className="relative h-[300px] sm:h-[400px] overflow-hidden">
      <Image
        src="/placeholder.svg"
        alt="Library"
        width={1920}
        height={400}
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4"
          >
            Your Final Grade
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-6"
          >
            GUARANTEED*
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-8"
          >
            Or Your Money Back
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xs sm:text-sm"
          >
            * Refer to our{" "}
            <Link href="/terms" className="underline hover:text-gray-200">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/fair-use" className="underline hover:text-gray-200">
              Fair Use Policy
            </Link>{" "}
            for full details.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

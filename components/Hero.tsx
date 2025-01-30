"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative py-12 md:py-20 min-h-[400px] md:min-h-[500px] overflow-hidden">
      <Image
        src="/placeholder.svg"
        alt="Library"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-primary/80 px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-2 md:mb-4"
        >
          Your Final Grade
        </motion.h1>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-3 md:mb-6"
        >
          GUARANTEED*
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl md:text-3xl"
        >
          Or Your Money Back
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-4 left-0 right-0 text-center text-white text-xs md:text-sm px-4"
      >
        * Refer to our{" "}
        <Link href="/terms" className="underline">
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href="/fair-use" className="underline">
          Fair Use Policy
        </Link>{" "}
        for full details.
      </motion.div>
    </section>
  )
}

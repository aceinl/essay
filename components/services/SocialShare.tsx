"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, MessageCircle, Share2 } from 'lucide-react'

export function SocialShare() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Share on Facebook", color: "bg-[#3b5998]" },
    { icon: Twitter, href: "#", label: "Share on Twitter", color: "bg-[#1da1f2]" },
    { icon: Linkedin, href: "#", label: "Share on LinkedIn", color: "bg-[#0077b5]" },
    { icon: MessageCircle, href: "#", label: "Share on Reddit", color: "bg-[#ff4500]" },
    { icon: Share2, href: "#", label: "More sharing options", color: "bg-[#95a5a6]" },
  ]

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden sm:block">
      {socialLinks.map((link, index) => (
        <motion.div
          key={index}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={link.href}
            className={`${link.color} text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:w-12 transition-all duration-200`}
            title={link.label}
          >
            <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

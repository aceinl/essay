import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const footerSections = [
  {
    title: "SERVICES",
    links: [
      { href: "/services/essay-writing", text: "Essay Writing Service" },
      { href: "/services/assignment-writing", text: "Assignment Writing Service" },
      { href: "/services/coursework-writing", text: "Coursework Writing Service" },
      { href: "/services/dissertation-writing", text: "Dissertation Writing Service" },
      { href: "/services", text: "All Services" },
    ]
  },
  {
    title: "USEFUL RESOURCES",
    links: [
      { href: "/essays", text: "Free Essays" },
      { href: "/referencing", text: "Referencing Tools" },
      { href: "/study-guides", text: "Study Guides" },
      { href: "/writing-services", text: "Writing Services" },
      { href: "/free-resources", text: "Free Resources" },
    ]
  },
  {
    title: "COMPANY",
    links: [
      { href: "/about", text: "About UKEssays" },
      { href: "/guarantees", text: "Guarantees" },
      { href: "/contact", text: "Contact Us" },
      { href: "/become-writer", text: "Become a Researcher" },
      { href: "/fair-use", text: "Fair Use Policy" },
    ]
  },
  {
    title: "SUPPORT",
    links: [
      { href: "/help", text: "Help Centre" },
      { href: "/faqs", text: "FAQs" },
      { href: "/feedback", text: "Feedback" },
      { href: "/complaints", text: "Complaints" },
      { href: "/sitemap", text: "Sitemap" },
    ]
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-sm hover:text-gray-300">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-700">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/placeholder.svg"
              alt="UKEssays Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-lg font-bold">UKEssays</span>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-primary-foreground hover:text-secondary">
                <span className="sr-only">{link.label}</span>
                <link.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-8">
          <p className="mb-2">
            Company Registration No: 4964706. VAT Registration No: 842417633. Registered Data Controller No: Z1821391.
          </p>
          <p className="mb-2">
            Registered office: Venture House, Cross Street, Arnold, Nottingham, Nottinghamshire, NG5 7PJ.
          </p>
          <p>
            Copyright © 2003 - 2023 - UKEssays is a trading name of All Answers Ltd, a company registered in England and Wales.
          </p>
        </div>
      </div>
    </footer>
  )
}

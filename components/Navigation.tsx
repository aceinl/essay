"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X, Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const MotionLink = motion(Link)

export function Navigation() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const mockResults = [
      "Essay Writing Service",
      "Dissertation Writing",
      "Assignment Help",
      "Coursework Assistance",
    ].filter(result => result.toLowerCase().includes(searchQuery.toLowerCase()))
    setSearchResults(mockResults)
    setIsSearching(true)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
    setIsSearching(false)
  }

  return (
    <nav className="border-b relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-4 gap-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <Link 
                  href="/" 
                  className="font-medium px-3 py-2 flex items-center"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="UK Essays Logo"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  <span>UK Essays</span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <Link href="/services/essay-writing" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 hover:bg-gray-50">
                      <div className="font-semibold">Essay Writing Service</div>
                      <div className="text-sm text-muted-foreground">Custom essays tailored to your requirements</div>
                    </Link>
                    <Link href="/services/dissertation-writing" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 hover:bg-gray-50">
                      <div className="font-semibold">Dissertation Writing</div>
                      <div className="text-sm text-muted-foreground">Expert help for your dissertation project</div>
                    </Link>
                    <Link href="/services/assignment-help" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 hover:bg-gray-50">
                      <div className="font-semibold">Assignment Help</div>
                      <div className="text-sm text-muted-foreground">Assistance with various types of assignments</div>
                    </Link>
                    <Link href="/services/coursework-writing" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 hover:bg-gray-50">
                      <div className="font-semibold">Coursework Writing</div>
                      <div className="text-sm text-muted-foreground">Professional help with your coursework</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <MotionLink 
                  href="/reviews" 
                  className="text-muted-foreground hover:text-foreground px-3 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reviews
                </MotionLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <MotionLink 
                  href="/about" 
                  className="text-muted-foreground hover:text-foreground px-3 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Us
                </MotionLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <MotionLink 
                  href="/resources" 
                  className="text-muted-foreground hover:text-foreground px-3 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resources
                </MotionLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <MotionLink 
                  href="/offers" 
                  className="text-muted-foreground hover:text-foreground px-3 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Offers
                </MotionLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center mt-4 md:mt-0 w-full md:w-auto">
            <form onSubmit={handleSearch} className="relative flex-grow md:flex-grow-0 mr-2">
              <Input
                type="search"
                placeholder="Search"
                className="w-full md:w-64 pr-10 bg-background text-foreground placeholder:text-muted-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-10 top-1/2 transform -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              )}
              <Button
                type="submit"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Place an Order
              </Button>
            </motion.div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden w-full mt-4">
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link>
                <Link href="/reviews" className="text-muted-foreground hover:text-foreground">Reviews</Link>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground">Resources</Link>
                <Link href="/offers" className="text-muted-foreground hover:text-foreground">Offers</Link>
              </nav>
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-md z-50"
          >
            <div className="container mx-auto px-4 py-4">
              <h3 className="text-lg font-semibold mb-2">Search Results</h3>
              {searchResults.length > 0 ? (
                <ul>
                  {searchResults.map((result, index) => (
                    <li key={index} className="mb-2">
                      <Link href={`/search?q=${encodeURIComponent(result)}`} className="text-blue-600 hover:underline">
                        {result}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No results found for "{searchQuery}"</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

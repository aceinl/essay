"use client"

import { useState, useEffect } from 'react'
import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { MainContent } from "@/components/MainContent"
import { FeaturedSection } from "@/components/FeaturedSection"
import { ServicesSection } from "@/components/ServicesSection"
import { FreeResourcesSection } from "@/components/FreeResourcesSection"
import { PlaceOrderSection } from "@/components/PlaceOrderSection"
import { ExampleEssaysSection } from "@/components/ExampleEssaysSection"
import { CustomerReviewsSection } from "@/components/CustomerReviewsSection"
import { CTASection } from "@/components/CTASection"
import { FeaturesGridSection } from "@/components/FeaturesGridSection"
import { FairUsePolicySection } from "@/components/FairUsePolicySection"
import { BetterThanCompetitionSection } from "@/components/BetterThanCompetitionSection"
import { Footer } from "@/components/Footer"
import { Preloader } from "@/components/Preloader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time to match Preloader

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader />
      {!isLoading && (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Header />
          <Navigation />
          <main className="flex-grow">
            <Hero />
            <MainContent />
            <FeaturedSection />
            <ServicesSection />
            <FreeResourcesSection />
            <PlaceOrderSection />
            <ExampleEssaysSection />
            <CustomerReviewsSection />
            <CTASection />
            <FeaturesGridSection />
            <FairUsePolicySection />
            <BetterThanCompetitionSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

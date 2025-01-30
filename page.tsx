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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
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
      <Footer />
    </div>
  )
}

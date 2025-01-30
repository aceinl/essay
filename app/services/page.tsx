import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { ServicesHero } from "@/components/services/ServicesHero"
import { ServicesContent } from "@/components/services/ServicesContent"
import { SocialShare } from "@/components/services/SocialShare"
import { AboutSection } from "@/components/services/AboutSection"
import { Footer } from "@/components/Footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <ServicesHero />
        <div className="relative">
          <SocialShare />
          <ServicesContent />
          <AboutSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

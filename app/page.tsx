"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { GallerySection } from "@/components/gallery-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="w-full bg-background text-foreground">
      <Navigation onNavigate={scrollToSection} />
      <HeroSection onContactClick={() => scrollToSection("contact")} />
      <AboutSection />
      <TeamSection />
      <GallerySection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

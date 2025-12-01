"use client"

import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  onContactClick: () => void
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-primary mb-6 text-balance font-serif animate-fade-in">
              Dečji boravak Isabel
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed text-pretty animate-fade-in-delay-1">
              Topao, siguran i inspirativan prostor gde se vaše dete razvija kroz igru, učenje i kreativnost.
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-center gap-2 animate-fade-in-delay-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Iskusna i strpljiva edukatorska ekipa
              </li>
              <li className="flex items-center gap-2 animate-fade-in-delay-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Moderne, bezbedne i čiste prostorije
              </li>
              <li className="flex items-center gap-2 animate-fade-in-delay-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Holistički pristup razvoju deteta
              </li>
            </ul>
            <button
              onClick={onContactClick}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group animate-fade-in-delay-3"
            >
              Započni saradnju
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-accent-light/30 rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden">
              <img
                src="/happy-children-playing.png"
                alt="Deca igraju u boravku"
                className="rounded-2xl w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

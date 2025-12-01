"use client"

import { Heart, Shield, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 text-balance font-serif">O nama</h2>
          <p className="text-lg text-foreground/70">Dečji boravak posvećen razvoju i sreći</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/80">
              Isabel je boravak posvećen razvoju i sreći svakog deteta. Sa iskusnom i strpljivom ekipom, kreiramo
              okruženje gde se deca osećaju sigurno, voljeno i inspirisano da eksplorišu, uče i rastu.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Verujemo da je dečji razvoj kompleksan proces koji zahteva pristup temeljen na ljubavi, strpljenju i
              profesionalnosti. Naš pristup kombinuje tradicionalne vrednosti sa modernim pedagoškim metodama.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/50 rounded-xl p-6 hover:shadow-lg transition">
                <Shield className="text-primary mb-3" size={28} />
                <h4 className="font-bold text-primary mb-2">Sigurnost</h4>
                <p className="text-sm text-foreground/70">Bezbednost je naša prioriteta broj jedan</p>
              </div>
              <div className="bg-white/50 rounded-xl p-6 hover:shadow-lg transition">
                <Heart className="text-accent mb-3" size={28} />
                <h4 className="font-bold text-primary mb-2">Ljubav</h4>
                <p className="text-sm text-foreground/70">Pažnja i briga za svako dete</p>
              </div>
              <div className="bg-white/50 rounded-xl p-6 hover:shadow-lg transition">
                <Lightbulb className="text-secondary mb-3" size={28} />
                <h4 className="font-bold text-primary mb-2">Razvoj</h4>
                <p className="text-sm text-foreground/70">Holistički rast i učenje kroz igru</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-accent-light/40 rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden">
              <img
                src="/aboutusimg.jpg"
                alt="Deca uče zajedno"
                className="rounded-2xl w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

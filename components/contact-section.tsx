"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import type React from "react"

export function ContactSection() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Kontakt forma poslata:", contactForm)
    setSubmitted(true)
    setContactForm({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-balance font-serif">Kontaktirajte nas</h2>
              <p className="text-lg leading-relaxed opacity-90">
                Spremi smo da odgovorimo na vaša pitanja i razmotrimo mogućnosti boravka za vašu porodicu.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 group">
                <Phone className="flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" size={20} />
                <div>
                  <p className="font-semibold">Telefon</p>
                  <a href="tel:+381111234567" className="opacity-90 hover:opacity-100 transition">
                    +381 11 123 4567
                  </a>
                </div>
              </div>
              <div className="flex gap-4 group">
                <Mail className="flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" size={20} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@isabel.rs" className="opacity-90 hover:opacity-100 transition">
                    info@isabel.rs
                  </a>
                </div>
              </div>
              <div className="flex gap-4 group">
                <MapPin className="flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" size={20} />
                <div>
                  <p className="font-semibold">Adresa</p>
                  <p className="opacity-90">
                    Kneza Miloša 25
                    <br />
                    11000 Beograd
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 opacity-90">Vaše ime</label>
              <input
                type="text"
                placeholder="Npr. Petar Petrović"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 opacity-90">Vaš email</label>
              <input
                type="email"
                placeholder="vasaemail@example.com"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 opacity-90">Vaša poruka</label>
              <textarea
                placeholder="Pišite vašu poruku ovdje..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition resize-none"
                required
              />
            </div>
            {submitted && (
              <div className="bg-primary-foreground/20 border border-primary-foreground/30 rounded-lg p-3 text-sm">
                Hvala! Kontaktirajte će vas uskoro.
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Pošalji <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

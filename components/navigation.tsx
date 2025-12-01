"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  onNavigate: (id: string) => void
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Početna", id: "hero" },
    { label: "O nama", id: "about" },
    { label: "Tim", id: "team" },
    { label: "Galerija", id: "gallery" },
    { label: "Ponuda", id: "services" },
    { label: "Kontakt", id: "contact" },
  ]

  const handleNavigate = (id: string) => {
    setMobileMenuOpen(false)
    onNavigate(id)
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="#hero" className=" hover:opacity-80 transition">
          <img
          className="w-[100px] h-auto]"
          src="/logo.png"
          />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col gap-3 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2 text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

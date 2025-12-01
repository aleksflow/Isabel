"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-secondary/10 to-accent/10 py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-primary mb-3 font-serif">Dečji boravak Isabel</h4>
            <p className="text-sm text-foreground/70">Siguran prostor za razvoj, učenje i rast vašeg deteta.</p>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-3 font-serif">Brzine veze</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#hero" className="hover:text-primary transition">
                  Početna
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition">
                  O nama
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition">
                  Tim
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition">
                  Galerija
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-3 font-serif">Kontakt</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="tel:+381111234567" className="hover:text-primary transition">
                  +381 11 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@isabel.rs" className="hover:text-primary transition">
                  info@isabel.rs
                </a>
              </li>
              <li>Kneza Miloša 25, Beograd</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} Dečji boravak Isabel. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  )
}

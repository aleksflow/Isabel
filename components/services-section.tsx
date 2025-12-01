"use client"

export function ServicesSection() {
  const services = [
    {
      title: "Dnevni boravak",
      desc: "Kompletna nega i edukacija od 7:00 do 17:00 sa obrokom i užinama",
      icon: "🌅",
    },
    {
      title: "Poludnevni program",
      desc: "Fleksibilan raspored prema potrebama i mogućnostima vaše porodice",
      icon: "☀️",
    },
    {
      title: "Specijalizovani programi",
      desc: "Engleski jezik, muzika, umetnost, sport i kreativne radionice",
      icon: "🎨",
    },
    {
      title: "Prilagođeni redosled",
      desc: "Posebne potrebe i individualni pristup prema dinamici svakog deteta",
      icon: "💫",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 text-balance font-serif">Naša ponuda</h2>
          <p className="text-lg text-foreground/70">Kompletne usluge za razvoj vašeg deteta</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-accent/30"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 font-serif">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

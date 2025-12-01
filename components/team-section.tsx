"use client"

export function TeamSection() {
  const team = [
    {
      name: "Aleksandra Mijuskovic",
      role: "Voditeljica boravka",
      bio: "15+ godina iskustva u pedagoški radu sa decom",
      icon: "👩‍🏫",
    },
    { name: "Aleksandra Mijuskovic", role: "Pedagog", bio: "Specijalizovana za rano dečje vaspitanje", icon: "👩‍🏫" },
    { name: "Aleksandra Mijuskovic", role: "Asistent", bio: "Posvećen bezbednosti i blagostanju deteta", icon: "👨‍🏫" },
  ]

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 text-balance font-serif">Naš tim</h2>
          <p className="text-lg text-foreground/70">Iskusna i posvećena ekipa stručnjaka</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-secondary/30 to-accent/10 rounded-2xl p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-secondary/20"
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300 flex justify-center"><img className="rounded-2xl object-cover w-[100px]" src="/Aleksandra.jpg"/></div>
              <h3 className="text-xl font-bold text-primary mb-2 font-serif">{member.name}</h3>
              <p className="text-sm font-medium text-accent mb-3">{member.role}</p>
              <p className="text-sm text-foreground/70 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

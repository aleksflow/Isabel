"use client"

export function GallerySection() {
  const galleryItems = [
    "children reading books in colorful bright classroom",
    "children doing creative arts and crafts activities together",
    "happy children playing outdoors in green nature",
    "children eating healthy organic snacks together",
    "children laughing and having fun with toys",
    "children sleeping peacefully in cozy nap room",
  ]

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 text-balance font-serif">Galerija</h2>
          <p className="text-lg text-foreground/70">Pogledajte naš boravak i život u njemu</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((query, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden h-64 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`/.jpg?height=300&width=400&query=${encodeURIComponent(query)}`}
                alt={query}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

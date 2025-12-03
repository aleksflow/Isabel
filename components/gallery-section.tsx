"use client"

import { useState } from "react";
import { Button } from "./ui/button"
import { LoaderCircle } from 'lucide-react';


export function GallerySection() {
  const galleryItems = [
    "children reading books in colorful bright classroom",
    "children doing creative arts and crafts activities together",
    "happy children playing outdoors in green nature",
    "children eating healthy organic snacks together",
    "children laughing and having fun with toys",
    "children sleeping peacefully in cozy nap room",
  ]
  const galerija = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/12.jpg",
    "/13.jpg",
    "/14.jpg",
    "/15.jpg",
    "/16.jpg",
    "/17.jpg",
    "/18.jpg",
  ]
  const [images, setImages] = useState(galerija.slice(1,7));
  const [end, setEnd] = useState(7);
  const [isEnd, setIsEnd] = useState(false);
  const [loading, setLoading] = useState(false);
  const showMore = () => {
    setLoading(true);

    // Calculate the next end index
    const nextEnd = end + 5;

    // Slice the next batch of images
    const nextImages = galerija.slice(0, nextEnd);

    // Update state
    setImages(nextImages);
    setEnd(nextEnd);

    // Check if we've reached the end
    if (nextEnd >= galerija.length) {
      setIsEnd(true);
    }

    setLoading(false);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-secondary/10">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 text-balance font-serif">Galerija</h2>
          <p className="text-lg text-foreground/70">Pogledajte naš boravak i život u njemu</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 ">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden h-64 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`${src}`}
                alt={src}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
          </div>
          <Button className="hover:cursor-pointer w-[200px] mt-[20px]" onClick={showMore} disabled={isEnd}>
           {loading?<LoaderCircle className="animate-spin"/>:"Učitaj više"} 
          </Button>
        
      </div>
    </section>
  )
}

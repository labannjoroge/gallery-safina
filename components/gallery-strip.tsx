"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { galleryImages } from "@/lib/data"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function GalleryStrip() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("gallery")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Customer <span className="text-amber-300">Showcase</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            See how our lamps transform real spaces and create beautiful ambiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div
                  className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedImage(image.image)}
                >
                  <div className="relative h-48 md:h-64 w-full group">
                    <Image
                      src={image.image || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm">View Larger</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-neutral-900 border-neutral-800">
                <div className="relative">
                  <Image
                    src={image.image || "/placeholder.svg"}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                  <button
                    className="absolute top-2 right-2 bg-neutral-900/70 hover:bg-neutral-900 text-white p-2 rounded-full"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-neutral-300">{image.alt}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-400 mb-4">Follow us on Instagram for more inspiration</p>
          <a
            href="https://instagram.com/mortylamps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-amber-300 px-6 py-3 rounded-full hover:from-amber-500/30 hover:to-rose-500/30 transition-all duration-300"
          >
            @mortylamps
          </a>
        </div>
      </div>
    </section>
  )
}

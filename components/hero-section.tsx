"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Curated Elegance",
    subtitle: "Discover our collection of handcrafted furniture and rare decor",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Artisanal Craftsmanship",
    subtitle: "Each piece tells a story of tradition and meticulous attention to detail",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Timeless Design",
    subtitle: "Elevate your space with pieces that transcend trends",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-custom text-center text-white">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="heading-xl mb-6 max-w-4xl mx-auto">{slides[currentSlide].title}</h1>
            <p className="body-lg mb-10 max-w-2xl mx-auto">{slides[currentSlide].subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#collection" className="btn-primary min-w-[200px]">
                Explore Collection
              </a>
              <a
                href="#contact"
                className="btn-outline min-w-[200px] bg-transparent border-white text-white hover:bg-white hover:text-green-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white scale-100" : "bg-white/50 scale-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 hidden md:flex items-center text-white/80 text-sm">
        <span className="mr-2">Scroll to explore</span>
        <ChevronRight className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-sand-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="heading-lg mb-6 text-green-500">Our Story</h2>
            <p className="body-md mb-6 text-gray-700">
              Gallery Safina was born from a passion for exceptional craftsmanship and a desire to bring unique,
              handcrafted furniture pieces to discerning clients in Kenya and beyond.
            </p>
            <p className="body-md mb-6 text-gray-700">
              Each piece in our collection is carefully selected or custom designed, focusing on quality materials,
              traditional techniques, and timeless aesthetics that transcend trends.
            </p>
            <p className="body-md mb-8 text-gray-700">
              We work directly with master artisans from Morocco, Turkey, and local Kenyan craftspeople to create
              furniture that tells a story and transforms spaces into extraordinary environments.
            </p>
            <a href="#collection" className="btn-outline">
              Explore Our Collection
            </a>
          </div>

          <div
            className={`relative h-[500px] transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="absolute top-0 right-0 w-4/5 h-4/5 z-10">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Gallery Safina showroom"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 border-8 border-sand-200">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Handcrafted furniture detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

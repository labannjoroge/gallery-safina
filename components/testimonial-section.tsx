"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { testimonials } from "@/lib/data"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section ref={sectionRef} className="section-padding bg-green-500 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Client Testimonials</h2>
          <p className="body-md max-w-2xl mx-auto opacity-80">
            Hear what our clients have to say about their experience with Gallery Safina.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 absolute inset-0 ${
                  currentIndex === index
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden border-4 border-white/20">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Quote className="h-12 w-12 text-white/20 mb-4" />
                  <p className="text-xl md:text-2xl font-serif italic mb-6 max-w-2xl">"{testimonial.quote}"</p>
                  <h4 className="text-lg font-medium">{testimonial.name}</h4>
                  <p className="opacity-80">{testimonial.role}</p>
                </div>
              </div>
            ))}

            {/* Current testimonial (for proper height calculation) */}
            <div className="opacity-0 pointer-events-none">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 mb-6">
                  <div className="w-full h-full" />
                </div>
                <div className="h-12 w-12 mb-4" />
                <p className="text-xl md:text-2xl font-serif italic mb-6 max-w-2xl">
                  "{testimonials[currentIndex].quote}"
                </p>
                <h4 className="text-lg font-medium">{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

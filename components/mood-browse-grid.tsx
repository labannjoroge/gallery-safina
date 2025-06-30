"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { moodCategories } from "@/lib/data"

export default function MoodBrowseGrid() {
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

    const element = document.getElementById("moods")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="moods" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Browse by <span className="text-amber-300">Mood</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Find the perfect lighting to match your desired ambience and transform your space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moodCategories.map((mood, index) => (
            <div
              key={mood.id}
              className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <a href={`#${mood.id}`} className="block">
                <div className={`relative h-64 w-full ${mood.glow} rounded-xl overflow-hidden group`}>
                  <Image
                    src={mood.image || "/placeholder.svg"}
                    alt={mood.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${mood.color} opacity-70`}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-medium mb-2">{mood.name}</h3>
                    <p className="text-sm text-white/80">{mood.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

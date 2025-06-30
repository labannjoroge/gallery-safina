"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { products, moodCategories, type Mood } from "@/lib/data"
import { MessageCircle } from "lucide-react"

export default function ProductGallery() {
  const [selectedMood, setSelectedMood] = useState<Mood | "all">("all")
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

    const element = document.getElementById("products")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const filteredProducts =
    selectedMood === "all" ? products : products.filter((product) => product.moods.includes(selectedMood as Mood))

  return (
    <section id="products" className="py-20 px-4 bg-neutral-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Our <span className="text-amber-300">Collection</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
            Discover our curated selection of aesthetic lamps to elevate your space.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedMood("all")}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedMood === "all"
                  ? "bg-amber-500/30 text-amber-300"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              }`}
            >
              All Lamps
            </button>
            {moodCategories.map((mood) => (
              <button
                key={mood.id}
                id={mood.id}
                onClick={() => setSelectedMood(mood.id as Mood)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedMood === mood.id
                    ? "bg-amber-500/30 text-amber-300"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                }`}
              >
                {mood.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => {
            // Determine which glow class to use based on the product's first mood
            const moodCategory = moodCategories.find((m) => m.id === product.moods[0])
            const glowClass = moodCategory ? moodCategory.glow : "glow-warm"

            return (
              <div
                key={product.id}
                className={`bg-neutral-900/50 rounded-xl overflow-hidden transition-all duration-500 ${glowClass} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-amber-500/30 hover:bg-amber-500/50 text-amber-300 px-4 py-2 rounded-full transition-all duration-300"
                      onClick={() =>
                        window.open(
                          `https://wa.me/254735712011?text=Hi%20Morty%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}!`,
                          "_blank",
                        )
                      }
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                  <p className="text-amber-300 font-medium mb-3">{product.price}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {product.moods.map((mood) => {
                        const moodInfo = moodCategories.find((m) => m.id === mood)
                        return (
                          <span key={mood} className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300">
                            {moodInfo?.name.split(" ")[0]}
                          </span>
                        )
                      })}
                    </div>
                    <button
                      className="text-amber-300 hover:text-amber-400 transition-colors"
                      onClick={() =>
                        window.open(
                          `https://wa.me/254735712011?text=Hi%20Morty%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}!`,
                          "_blank",
                        )
                      }
                    >
                      <MessageCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-400">No products found for this mood. Try selecting a different category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

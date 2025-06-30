"use client"

import { useState, useEffect, useRef } from "react"
import { products, categories, type Category } from "@/lib/data"
import ProductCard from "@/components/product-card"

export default function FeaturedCollection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")
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

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category.includes(selectedCategory))

  return (
    <section id="collection" ref={sectionRef} className="section-padding bg-sand-100/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-green-500">Featured Collection</h2>
          <p className="body-md max-w-2xl mx-auto text-gray-700">
            Discover our curated selection of handcrafted furniture and rare decor pieces, each telling a unique story
            of craftsmanship and heritage.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as Category)}
              className={`px-4 py-2 rounded-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-green-500 text-white"
                  : "bg-sand-100 text-gray-700 hover:bg-sand-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-700">No products found in this category. Please try another selection.</p>
          </div>
        )}
      </div>
    </section>
  )
}

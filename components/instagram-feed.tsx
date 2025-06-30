"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Instagram, Heart } from "lucide-react"
import { instagramPosts } from "@/lib/data"

export default function InstagramFeed() {
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

  return (
    <section ref={sectionRef} className="section-padding bg-sand-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-green-500">Follow Our Journey</h2>
          <p className="body-md max-w-2xl mx-auto text-gray-700">
            Stay updated with our latest collections, behind-the-scenes, and design inspiration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-white mb-2">
                    <Heart className="h-4 w-4 mr-1 fill-white" />
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <p className="text-white text-xs px-4 text-center line-clamp-2">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-500 hover:text-green-600 transition-colors"
          >
            <Instagram className="h-5 w-5 mr-2" />
            <span className="font-medium">@gallerysafina</span>
          </a>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, Info } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import type { Product } from "@/lib/data"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppInquiry = () => {
    const message = `Hello Gallery Safina, I'm interested in the ${product.name}. Could you provide more information?`
    window.open(`https://wa.me/254700000000?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="group">
      <div
        className="relative overflow-hidden bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[350px] w-full overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div
            className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          ></div>

          {/* Quick actions */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-white/90 hover:bg-white text-green-500 p-3 rounded-full transition-all">
                  <Info className="h-5 w-5" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl p-0 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-[400px]">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="heading-sm mb-2">{product.name}</h3>
                    <p className="text-green-500 font-medium mb-4">{product.price}</p>
                    <p className="text-gray-700 mb-4">{product.description}</p>

                    <div className="space-y-2 mb-6">
                      <p className="text-sm">
                        <span className="font-medium">Dimensions:</span> {product.dimensions}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Material:</span> {product.material}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Availability:</span>{" "}
                        {product.inStock ? "In Stock" : "Made to Order (4-6 weeks)"}
                      </p>
                    </div>

                    <button onClick={handleWhatsAppInquiry} className="btn-primary w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Inquire via WhatsApp
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <button
              onClick={handleWhatsAppInquiry}
              className="bg-green-500/90 hover:bg-green-500 text-white p-3 rounded-full transition-all"
            >
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-4 pb-2">
        <h3 className="text-lg font-serif font-medium">{product.name}</h3>
        <p className="text-green-500 font-medium">{product.price}</p>
        <div className="flex gap-2 mt-2">
          {product.category.map((cat) => (
            <span key={cat} className="text-xs px-2 py-1 bg-sand-100 text-gray-700">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Truck } from "lucide-react"

export default function DeliveryBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 bg-amber-500/10 backdrop-blur-md border border-amber-500/20 rounded-lg p-3 shadow-lg transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="flex items-center">
        <div className="mr-3 bg-amber-500/20 p-2 rounded-full">
          <Truck className="h-5 w-5 text-amber-300 animate-pulse" />
        </div>
        <div>
          <p className="text-amber-300 text-sm font-medium">Same-Day Delivery in Nairobi!</p>
          <p className="text-neutral-400 text-xs">Order before 2PM</p>
        </div>
      </div>
    </div>
  )
}

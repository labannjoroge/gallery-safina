"use client"

import { MessageSquare } from "lucide-react"

export default function WhatsAppCTA() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-amber-900/20 to-neutral-950">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-6">
          Need help choosing a <span className="text-amber-300">vibe</span>?
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto mb-10">
          Our lighting experts can help you find the perfect lamp to match your space and create the ambience you
          desire.
        </p>

        <div className="bg-neutral-900/50 border border-amber-500/20 rounded-xl p-8 mb-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-xl font-medium mb-2">Personal Consultation</h3>
              <p className="text-neutral-400">
                Send us photos of your space and we'll recommend the perfect lighting solutions.
              </p>
            </div>
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center whitespace-nowrap"
              onClick={() =>
                window.open(
                  "https://wa.me/254735712011?text=Hi%20Morty%2C%20I%27d%20love%20lamp%20recommendations%20for%20my%20space.",
                  "_blank",
                )
              }
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/30 p-6 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Fast Delivery</h4>
            <p className="text-neutral-400 text-sm">
              Same-day delivery available in Nairobi for orders placed before 2PM.
            </p>
          </div>
          <div className="bg-neutral-900/30 p-6 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Easy Returns</h4>
            <p className="text-neutral-400 text-sm">
              Not satisfied? Return within 7 days for a full refund or exchange.
            </p>
          </div>
          <div className="bg-neutral-900/30 p-6 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Quality Guarantee</h4>
            <p className="text-neutral-400 text-sm">All our lamps are carefully selected for quality and durability.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

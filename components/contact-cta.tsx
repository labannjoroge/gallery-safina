"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react"

export default function ContactCTA() {
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
    <section id="contact" ref={sectionRef} className="section-padding bg-wood-100/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4 text-green-500">Get In Touch</h2>
            <p className="body-md max-w-2xl mx-auto text-gray-700">
              Visit our showroom, schedule a consultation, or inquire about custom pieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`bg-white p-8 shadow-md transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="heading-sm mb-6 text-green-500">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium mb-1">Visit Our Showroom</h4>
                    <p className="text-gray-700">Riverside Drive, Lavington</p>
                    <p className="text-gray-700">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-gray-700">+254 700 000 000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-gray-700">info@gallerysafina.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-3">Opening Hours</h4>
                <p className="text-gray-700">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-700">Saturday: 10am - 4pm</p>
                <p className="text-gray-700">Sunday: By appointment only</p>
              </div>
            </div>

            <div
              className={`bg-green-500 text-white p-8 shadow-md transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="heading-sm mb-6">Request a Consultation</h3>
              <p className="mb-6 opacity-90">
                Our design consultants are available to help you find the perfect pieces for your space or create custom
                furniture tailored to your needs.
              </p>

              <div className="space-y-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/254700000000?text=Hello%20Gallery%20Safina%2C%20I'd%20like%20to%20schedule%20a%20consultation.",
                      "_blank",
                    )
                  }
                  className="w-full bg-white text-green-500 hover:text-white transition-colors py-3 flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Consultation
                </button>

                <button
                  onClick={() => (window.location.href = "mailto:info@gallerysafina.com?subject=Consultation Request")}
                  className="w-full bg-green-600 hover:bg-green-700 transition-colors py-3 flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Inquiry
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="italic opacity-90">
                  "We believe that every space tells a story, and our furniture helps write that narrative."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

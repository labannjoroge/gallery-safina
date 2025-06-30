"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-sand-50/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-serif tracking-wide">
            <span className="text-green-500">Gallery</span> Safina
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm uppercase tracking-wider hover:text-green-500 transition-colors">
            Home
          </Link>
          <Link href="#collection" className="text-sm uppercase tracking-wider hover:text-green-500 transition-colors">
            Collection
          </Link>
          <Link href="#about" className="text-sm uppercase tracking-wider hover:text-green-500 transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm uppercase tracking-wider hover:text-green-500 transition-colors">
            Contact
          </Link>
          <button
            className="btn-primary"
            onClick={() =>
              window.open(
                "https://wa.me/254700000000?text=Hello%20Gallery%20Safina%2C%20I'm%20interested%20in%20your%20furniture%20collection.",
                "_blank",
              )
            }
          >
            <ShoppingBag className="w-4 h-4 mr-2 text-white" />
            Inquire
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden relative z-10" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} className="text-green-500" /> : <Menu size={24} className="text-green-500" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 bg-sand-50/95 backdrop-blur-md z-0 flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-6">
              <Link
                href="/"
                className="text-lg uppercase tracking-wider hover:text-green-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#collection"
                className="text-lg uppercase tracking-wider hover:text-green-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Collection
              </Link>
              <Link
                href="#about"
                className="text-lg uppercase tracking-wider hover:text-green-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-lg uppercase tracking-wider hover:text-green-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button
                className="btn-primary mt-4"
                onClick={() => {
                  window.open(
                    "https://wa.me/254700000000?text=Hello%20Gallery%20Safina%2C%20I'm%20interested%20in%20your%20furniture%20collection.",
                    "_blank",
                  )
                  setIsOpen(false)
                }}
              >
                <ShoppingBag className="w-4 h-4 mr-2 text-white" />
                Inquire
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

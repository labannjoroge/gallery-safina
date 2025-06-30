"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-green-600 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Gallery Safina</h3>
            <p className="opacity-80 mb-6">
              Curated elegance for discerning spaces. Handcrafted furniture and rare decor pieces that tell a story.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <Link href="/" className="hover:text-sand-100 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#collection" className="hover:text-sand-100 transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-sand-100 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-sand-100 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="opacity-80 mb-4">
              Subscribe to receive updates on new arrivals, special offers and design inspiration.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-white/20 px-4 py-2 flex-grow text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button type="submit" className="bg-white text-green-600 px-4 hover:bg-sand-100 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center opacity-70 text-sm">
          <p>© {currentYear} Gallery Safina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

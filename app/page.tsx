import HeroSection from "@/components/hero-section"
import FeaturedCollection from "@/components/featured-collection"
import AboutSection from "@/components/about-section"
import TestimonialSection from "@/components/testimonial-section"
import InstagramFeed from "@/components/instagram-feed"
import ContactCTA from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedCollection />
      <TestimonialSection />
      <InstagramFeed />
      <ContactCTA />
    </div>
  )
}

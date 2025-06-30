export type Category = "all" | "turkish" | "moroccan" | "contemporary" | "vintage"

export interface Product {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: Category[]
  dimensions: string
  material: string
  inStock: boolean
  moods?: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Moroccan Carved Console",
    description: "Hand-carved wooden console with intricate Moroccan patterns and brass accents.",
    price: "KSh 185,000",
    image: "/placeholder.svg?height=600&width=800",
    category: ["moroccan", "vintage"],
    dimensions: "160cm × 45cm × 85cm",
    material: "Solid Walnut, Brass",
    inStock: true,
  },
  {
    id: "2",
    name: "Turkish Kilim Armchair",
    description: "Handcrafted armchair upholstered with authentic vintage Turkish kilim fabric.",
    price: "KSh 120,000",
    image: "/placeholder.svg?height=600&width=800",
    category: ["turkish", "vintage"],
    dimensions: "75cm × 80cm × 90cm",
    material: "Solid Oak, Vintage Kilim",
    inStock: true,
  },
  {
    id: "3",
    name: "Contemporary Olive Dining Table",
    description: "Minimalist dining table crafted from a single slab of olive wood with brass legs.",
    price: "KSh 250,000",
    image: "/placeholder.svg?height=600&width=800",
    category: ["contemporary"],
    dimensions: "200cm × 100cm × 75cm",
    material: "Olive Wood, Brass",
    inStock: true,
  },
  {
    id: "4",
    name: "Moroccan Mosaic Coffee Table",
    description: "Handcrafted coffee table featuring traditional Moroccan zellige tile work.",
    price: "KSh 95,000",
    image: "/placeholder.svg?height=600&width=800",
    category: ["moroccan"],
    dimensions: "120cm × 70cm × 45cm",
    material: "Cedar Wood, Ceramic Tiles",
    inStock: false,
  },
  {
    id: "5",
    name: "Turkish Brass Floor Lamp",
    description: "Ornate floor lamp with hand-pierced brass shade casting intricate shadow patterns.",
    price: "KSh 75,000",
    image: "/placeholder.svg?height=600&width=800",
    category: ["turkish"],
    dimensions: "45cm × 45cm × 160cm",
    material: "Brass, Marble Base",
    inStock: true,
  },
  {
    id: "6",
    name: "Contemporary Rattan Sideboard",
    description: "Modern sideboard with handwoven rattan doors and solid wood frame.",
    price: "KSh 165,000",
    image: "/placeholder.svg?height=600&width=800",
    category: ["contemporary"],
    dimensions: "180cm × 45cm × 80cm",
    material: "Teak, Natural Rattan",
    inStock: true,
  },
]

export const categories = [
  { id: "all", name: "All Pieces" },
  { id: "turkish", name: "Turkish" },
  { id: "moroccan", name: "Moroccan" },
  { id: "contemporary", name: "Contemporary" },
  { id: "vintage", name: "Vintage" },
]

export const testimonials = [
  {
    id: "1",
    name: "Sarah Kimani",
    role: "Interior Designer",
    quote:
      "Gallery Safina's pieces have transformed my clients' homes. The quality and craftsmanship are unmatched in Nairobi.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "James Odhiambo",
    role: "Homeowner",
    quote:
      "Every piece I've purchased from Gallery Safina has become the focal point of conversation when guests visit our home.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Amina Hassan",
    role: "Boutique Hotel Owner",
    quote:
      "We furnished our entire boutique hotel with Gallery Safina's unique pieces. Our guests constantly ask where we source our furniture.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export const instagramPosts = [
  {
    id: "1",
    image: "/placeholder.svg?height=600&width=600",
    caption: "Our new Moroccan collection has arrived! #GallerySafina #LuxuryFurniture",
    likes: 245,
    url: "https://instagram.com/",
  },
  {
    id: "2",
    image: "/placeholder.svg?height=600&width=600",
    caption: "Handcrafted perfection in every detail. #CustomFurniture #GallerySafina",
    likes: 189,
    url: "https://instagram.com/",
  },
  {
    id: "3",
    image: "/placeholder.svg?height=600&width=600",
    caption: "Transform your space with our unique pieces. #InteriorDesign #GallerySafina",
    likes: 320,
    url: "https://instagram.com/",
  },
  {
    id: "4",
    image: "/placeholder.svg?height=600&width=600",
    caption: "Elegance in simplicity. #MinimalistDesign #GallerySafina",
    likes: 276,
    url: "https://instagram.com/",
  },
]

export interface Mood {
  id: string
  name: string
  description: string
  image: string
  color: string
  glow: string
}

export const moodCategories: Mood[] = [
  {
    id: "modern",
    name: "Modern Minimalist",
    description: "Clean lines, neutral tones, and functional design.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-neutral-900 to-neutral-700",
    glow: "glow-modern",
  },
  {
    id: "rustic",
    name: "Rustic Charm",
    description: "Warm woods, natural textures, and cozy vibes.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-neutral-900 to-neutral-700",
    glow: "glow-rustic",
  },
  {
    id: "glam",
    name: "Glamorous Glow",
    description: "Metallic accents, luxurious fabrics, and bold statements.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-neutral-900 to-neutral-700",
    glow: "glow-glam",
  },
  {
    id: "bohemian",
    name: "Bohemian Rhapsody",
    description: "Eclectic mix of patterns, textures, and global influences.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-neutral-900 to-neutral-700",
    glow: "glow-bohemian",
  },
]

export const galleryImages = [
  {
    id: "1",
    image: "/placeholder.svg?height=600&width=800",
    alt: "Customer showcase image 1",
  },
  {
    id: "2",
    image: "/placeholder.svg?height=600&width=800",
    alt: "Customer showcase image 2",
  },
  {
    id: "3",
    image: "/placeholder.svg?height=600&width=800",
    alt: "Customer showcase image 3",
  },
  {
    id: "4",
    image: "/placeholder.svg?height=600&width=800",
    alt: "Customer showcase image 4",
  },
]

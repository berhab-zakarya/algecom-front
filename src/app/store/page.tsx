import Image from "next/image"
import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { ProductCard } from "@/components/store/product-card"
import { Button } from "@/components/ui/button"
import { Testimonial } from "@/components/store/testimonial"
import { NewsletterSignup } from "@/components/store/newsletter-signup"

const products = [
  {
    id: 1,
    name: "MATOS VIPER",
    price: 120,
    rating: 4.5,
    reviews: 5473,
    image: "/placeholder.svg?height=200&width=200",
    slug: "matos-viper",
  },
  {
    id: 2,
    name: "MATOS MAGMA MSG273",
    price: 240,
    originalPrice: 300,
    discount: "-20%",
    rating: 4.5,
    reviews: 5473,
    image: "/placeholder.svg?height=200&width=200",
    slug: "matos-magma-msg273",
  },
  {
    id: 3,
    name: "MATOS UNREAL",
    price: 150,
    originalPrice: 180,
    discount: "-16%",
    rating: 4.5,
    reviews: 5473,
    image: "/placeholder.svg?height=200&width=200",
    slug: "matos-unreal",
  },
  {
    id: 4,
    name: "MATOS FIGHTER",
    price: 180,
    rating: 4.5,
    reviews: 5473,
    image: "/placeholder.svg?height=200&width=200",
    slug: "matos-fighter",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Alex M.",
    verified: true,
    rating: 5,
    comment:
      "The screen gives the high quality and clarity of the image that I was looking for. The delivery was so elegant it makes other purchases look like a joke. The support team is also very responsive.",
    date: "August 15, 2023",
  },
  {
    id: 2,
    name: "Alex K.",
    verified: true,
    rating: 5,
    comment:
      "Finding another high-quality monitor with my personal budget was a challenge. The design is elegant, the UI offers a lot of customization, and the packaging is simply out of this world!",
    date: "August 15, 2023",
  },
  {
    id: 3,
    name: "James L.",
    verified: true,
    rating: 5,
    comment:
      "It's someone who's always on the lookout for the best gaming monitors, I can say that I'm very satisfied with these. The selection of colors and the image quality are simply out of this world with the latest tech.",
    date: "August 15, 2023",
  },
  {
    id: 4,
    name: "Melissa T.",
    verified: true,
    rating: 5,
    comment:
      "The monitor arrived quickly and was easy to set up. The picture quality is amazing and the colors are vibrant. I'm very happy with my purchase!",
    date: "August 15, 2023",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Gaming monitors display"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-white">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">UPGRADE YOUR FRAMES WITH LOWER PRICES.</h1>
            <p className="text-sm mb-6">
              Browse through our diverse range of meticulously crafted premium monitors, designed to elevate your gaming
              experience to the pinnacle of excellence.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">Shop Now</Button>

            <div className="flex gap-8 mt-16">
              <div>
                <p className="text-2xl font-bold">200+</p>
                <p className="text-xs">satisfied clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold">2,000+</p>
                <p className="text-xs">high-quality products</p>
              </div>
              <div>
                <p className="text-2xl font-bold">30,000+</p>
                <p className="text-xs">products sold</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="bg-[#fb0a0a] text-white py-3 text-center font-bold">NEW MONITORS ARE COMING !</div>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="rounded-full px-8 border-black">
            View All
          </Button>
        </div>
      </section>

      {/* Top Selling */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">TOP SELLING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="rounded-full px-8 border-black">
            View All
          </Button>
        </div>
      </section>

      {/* Happy Customers */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">OUR HAPPY CUSTOMERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />

      <Footer />
    </main>
  )
}

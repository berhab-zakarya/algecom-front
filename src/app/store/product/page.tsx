import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { ProductCard } from "@/components/store/product-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReviewCard } from "@/components/store/review-card"
import { NewsletterSignup } from "@/components/store/newsletter-signup"
import { StarRating } from "@/components/store/star-rating"
import { Minus, Plus } from "lucide-react"

// This would normally come from a database
const product = {
  id: 2,
  name: "MATOS - MAGMA MSG273",
  price: 260,
  originalPrice: 300,
  discount: "-13%",
  rating: 4.5,
  reviews: 5473,
  image: "/placeholder.svg?height=400&width=400",
  description:
    "Monitor gaming MATOS MSG273, 27inch FHD TN TECHNOLOGY, 27 INCH monitor with 165Hz, G-Sync technology for unrivaled and FAST reactions. Featuring 99% coverage with 16.7 million colors, 1ms response time, and 1920x1080 resolution.",
  colors: ["red", "blue", "black"],
  sizes: ['24"', '27"', '32"'],
}

const similarProducts = [
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

const reviews = [
  {
    id: 1,
    name: "Samantha D.",
    verified: true,
    rating: 5,
    comment:
      "I absolutely love the design, colors and the fabric feels so comfortable. It's a nice design, I appreciate the attention to detail. It's perfect for my gaming setup.",
    date: "August 14, 2023",
  },
  {
    id: 2,
    name: "Alex M.",
    verified: true,
    rating: 4,
    comment:
      "I'm impressed by the exceptional! The colors are vibrant and the pixel density is amazing. Really a MUST designer's tool! The detail you can see is incredible. Excellent color accuracy. I would buy again.",
    date: "August 15, 2023",
  },
  {
    id: 3,
    name: "Ethan H.",
    verified: true,
    rating: 4,
    comment:
      "This is a great choice for anyone with appreciative good design. The colors are bright and vibrant, might be the best, and the fit is perfect. I can see the designer's touch. Highly recommend it to all.",
    date: "August 15, 2023",
  },
  {
    id: 4,
    name: "Olivia P.",
    verified: true,
    rating: 4,
    comment:
      "Just what I needed. I value simplicity and functionality. The colors are vibrant and the design is more complex but still feels simple to use. It's perfect how the designer went into incredible detail making the finish spectacular.",
    date: "August 17, 2023",
  },
  {
    id: 5,
    name: "Liam K.",
    verified: true,
    rating: 4,
    comment:
      "This product is a breath of comfort and simplicity. The fabric is soft, and the design is simple which is the designer's style. It's like owning a piece of art when you see it, it's almost too precious for daily usage, but beautiful.",
    date: "August 18, 2023",
  },
  {
    id: 6,
    name: "Ava H.",
    verified: true,
    rating: 5,
    comment:
      "I'm obsessed with it. I'm creating a piece of design philosophy, combining form and function and thoughtful layout of the design make this into a masterpiece. Superb!",
    date: "August 19, 2023",
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm">
          <Link href="/" className="text-gray-500 hover:text-black">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="text-gray-500 hover:text-black">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">1 item</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 space-y-4">
              <div className="border border-gray-200 rounded-md p-2">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Thumbnail"
                  width={80}
                  height={80}
                  className="w-full"
                />
              </div>
              <div className="border border-gray-200 rounded-md p-2">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Thumbnail"
                  width={80}
                  height={80}
                  className="w-full"
                />
              </div>
              <div className="border border-gray-200 rounded-md p-2">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Thumbnail"
                  width={80}
                  height={80}
                  className="w-full"
                />
              </div>
            </div>
            <div className="col-span-3">
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">{product.discount}</span>
                </>
              )}
            </div>

            <p className="text-sm text-gray-700 mb-6">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Select Colors</p>
              <div className="flex gap-2">
                <button className="w-6 h-6 rounded-full bg-red-500 ring-2 ring-offset-2 ring-red-500"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500"></button>
                <button className="w-6 h-6 rounded-full bg-black"></button>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Choose Size</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">24"</button>
                <button className="px-3 py-1 bg-black text-white rounded-md text-sm">27"</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">32"</button>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button className="px-3 py-2">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2">1</span>
                <button className="px-3 py-2">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button className="flex-1 bg-black hover:bg-gray-800">ADD TO CART</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="container mx-auto px-4 py-8 border-t border-gray-200">
        <Tabs defaultValue="reviews">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="reviews">Rating & Reviews</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium mb-4">Product Specifications</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>27-inch FHD TN Technology display</li>
                <li>165Hz refresh rate with G-Sync technology</li>
                <li>99% color coverage with 16.7 million colors</li>
                <li>1ms response time</li>
                <li>1920x1080 resolution</li>
                <li>Multiple connectivity options including HDMI and DisplayPort</li>
                <li>Adjustable stand for ergonomic viewing</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">
                  All Reviews <span className="text-gray-500 text-sm">(6)</span>
                </h3>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <span className="text-gray-500">Filter</span>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <span className="text-gray-500">Latest</span>
                  </Button>
                  <Button size="sm" className="bg-black hover:bg-gray-800 rounded-full">
                    Write a Review
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" className="rounded-full px-8 border-black">
                  Load More Reviews
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faqs">
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">What is the warranty period?</h4>
                  <p className="text-gray-600">The MATOS MAGMA MSG273 comes with a 2-year manufacturer warranty.</p>
                </div>
                <div>
                  <h4 className="font-medium">Does it support VESA mounting?</h4>
                  <p className="text-gray-600">Yes, it supports 100x100mm VESA mounting pattern.</p>
                </div>
                <div>
                  <h4 className="font-medium">What cables are included in the box?</h4>
                  <p className="text-gray-600">The monitor comes with HDMI, DisplayPort, and power cables.</p>
                </div>
                <div>
                  <h4 className="font-medium">Is there built-in speakers?</h4>
                  <p className="text-gray-600">Yes, the monitor has 2x2W built-in speakers.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* You May Also Like */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">YOU MAY ALSO LIKE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />

      <Footer />
    </main>
  )
}

import Image from "next/image"
import Link from "next/link"
import { StarRating } from "@/components/store/star-rating"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    originalPrice?: number
    discount?: string
    rating: number
    reviews: number
    image: string
    slug: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/product/${product.slug}`} className="block relative">
        <div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-gray-100">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount && (
            <span className="absolute top-2 right-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
              {product.discount}
            </span>
          )}
        </div>
      </Link>
      <div>
        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="font-medium text-sm mb-1">{product.name}</h3>
        </Link>
        <div className="flex items-center mb-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 text-sm line-through">${product.originalPrice}</span>
            )}
          </div>
          <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}

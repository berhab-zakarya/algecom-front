import { StarRating } from "@/components/store/star-rating"

interface TestimonialProps {
  testimonial: {
    id: number
    name: string
    verified: boolean
    rating: number
    comment: string
    date: string
  }
}

export function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">{testimonial.name}</span>
          {testimonial.verified && (
            <span className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded-full">✓</span>
          )}
        </div>
      </div>

      <div className="flex mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      <p className="text-sm text-gray-700 mb-4 line-clamp-4">{testimonial.comment}</p>

      <p className="text-xs text-gray-500">Posted on {testimonial.date}</p>
    </div>
  )
}

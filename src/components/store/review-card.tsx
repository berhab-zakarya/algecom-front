import { StarRating } from "@/components/store/star-rating"

interface ReviewCardProps {
  review: {
    id: number
    name: string
    verified: boolean
    rating: number
    comment: string
    date: string
  }
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-medium">{review.name}</span>
          {review.verified && <span className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded-full">✓</span>}
        </div>
        <button className="text-gray-400 hover:text-gray-600">...</button>
      </div>

      <div className="flex items-center mb-2">
        <StarRating rating={review.rating} />
      </div>

      <p className="text-sm text-gray-700 mb-2">{review.comment}</p>

      <p className="text-xs text-gray-500">Posted on {review.date}</p>
    </div>
  )
}

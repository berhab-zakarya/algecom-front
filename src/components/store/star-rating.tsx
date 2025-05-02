import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  max?: number
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex">
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating)
        const halfFilled = i === Math.floor(rating) && rating % 1 >= 0.5

        return (
          <Star
            key={i}
            className={`w-4 h-4 ${
              filled
                ? "text-[#ffc633] fill-[#ffc633]"
                : halfFilled
                  ? "text-[#ffc633] fill-[#ffc633] half-filled"
                  : "text-[#d6dce5]"
            }`}
          />
        )
      })}
    </div>
  )
}

import {  ArrowDownLeft, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BalanceCard() {
  return (
    <div className="h-full font-['Outfit']">
      <div>
        <div className="flex items-baseline mb-2">
          <span className="text-primary-900 text-3xl font-bold">120,435.00</span>
          <span className="text-neutral-500 text-xl ml-2">(DZD)</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-neutral-500 text-sm">From Jan 01, 2025 to Jan 31, 2025</p>
      </div>

      <div className="flex gap-4">
        <Button className="flex-1 bg-primary-900 hover:bg-primary-800 text-white rounded-full py-6">
          <ArrowDownLeft className="mr-2 h-4 w-4" />
          Top Up
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-primary-900 text-primary-900 hover:bg-primary-100 rounded-full py-6">
          <ArrowUpRight className="mr-2 h-4 w-4" />
          Transfer
        </Button>
      </div>
    </div>
  )
}
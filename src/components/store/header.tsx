"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-1 text-sm">Free Delivery on all order above 100$</div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Z.I.CO
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-sm font-medium hover:text-gray-600">
              Shop
            </Link>
            <Link href="/on-sale" className="text-sm font-medium hover:text-gray-600">
              On Sale
            </Link>
            <Link href="/new-arrivals" className="text-sm font-medium hover:text-gray-600">
              New arrivals
            </Link>
            <Link href="/brands" className="text-sm font-medium hover:text-gray-600">
              Brands
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative flex-1 max-w-md mx-4">
            <Input
              type="search"
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 rounded-full border-gray-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-black md:hidden" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="w-5 h-5" />
            </button>
            <Link href="/account" className="p-2 text-gray-700 hover:text-black">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/wishlist" className="p-2 text-gray-700 hover:text-black">
              <Heart className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="p-2 text-gray-700 hover:text-black relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Link>
            <button className="p-2 text-gray-700 hover:text-black md:hidden">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="mt-4 md:hidden">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 rounded-full border-gray-300 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

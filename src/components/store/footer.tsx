import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Z.I.CO</h3>
            <p className="text-sm text-gray-600 mb-4">
              We provide high-end and high-quality gaming monitors to enhance your gaming experience.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-black">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-black">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-gray-600 hover:text-black">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-600 hover:text-black">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/customer-support" className="text-gray-600 hover:text-black">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/delivery-details" className="text-gray-600 hover:text-black">
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-black">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-black">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">FAQ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/account" className="text-gray-600 hover:text-black">
                  Account
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-black">
                  Shipping Deliveries
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-gray-600 hover:text-black">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/payments" className="text-gray-600 hover:text-black">
                  Payments
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-600">© Z.I.CO 2023, All Rights Reserved</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img src="/placeholder.svg?height=20&width=40" alt="Visa" className="h-6" />
            <img src="/placeholder.svg?height=20&width=40" alt="Mastercard" className="h-6" />
            <img src="/placeholder.svg?height=20&width=40" alt="PayPal" className="h-6" />
            <img src="/placeholder.svg?height=20&width=40" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  )
}

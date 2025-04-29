import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-purple-800 mb-4">ALGECOM</h3>
            <p className="text-sm text-gray-600 mb-4">Order visualization and payment management for your business.</p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Digital Invoice
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Payment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Reporting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms & Help
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
              Cookie Policy
            </Link>
          </div>
          <div className="text-xs text-gray-600">© Algecom 2025</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


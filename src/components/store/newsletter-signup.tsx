import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input type="email" placeholder="Enter Your Email Address" className="bg-white text-black" />
            <Button className="bg-white text-black hover:bg-gray-200">Subscribe to Newsletter</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

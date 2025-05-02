import { MouseEvent } from "react"
import Button from "../resuable/Button"

const Newsletter = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get exclusive content</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and get the latest design ideas, articles, resources, and inspiration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Your email" className="w-full sm:w-64 rounded-[32px]" />
            <Button title="Sign up" className="bg-purple-800 hover:bg-purple-900" 
            onTap={()=>{} }/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter


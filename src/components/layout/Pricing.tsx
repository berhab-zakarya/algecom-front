"use client"
import { Check } from "lucide-react"
import Button from "../resuable/Button"
import { MouseEvent } from "react"

const Pricing = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Simple pricing to level up your brand.</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Senior experts. On-demand requests. Fast turnaround. Flat monthly fee. Cancel anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Standard Plan */}
          <div className="border rounded-xl p-6 flex flex-col h-full">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Standard</h3>
                <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">$4.99</span>
                <span className="text-gray-600">/monthly</span>
              </div>
            </div>

            <div className="flex-grow space-y-3 mb-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="flex items-center">
                  <Check className="h-4 w-4 text-orange-500 mr-2" />
                  <span className="text-sm">Feature</span>
                </div>
              ))}
            </div>

            <Button title="Subscribe" className="w-full bg-purple-800 hover:bg-purple-900"onTap={()=>{} }/>
          </div>

          {/* Pro Plan */}
          <div className="border rounded-xl p-6 flex flex-col h-full">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Pro</h3>
                <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded-full">
                  Best Value
                </span>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-gray-600">/monthly</span>
              </div>
            </div>

            <div className="flex-grow space-y-3 mb-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="flex items-center">
                  <Check className="h-4 w-4 text-orange-500 mr-2" />
                  <span className="text-sm">Feature</span>
                </div>
              ))}
            </div>

            <Button title="Subscribe" className="w-full bg-purple-800 hover:bg-purple-900"onTap={()=>{} }></Button>
          </div>

          {/* Business Plan */}
          <div className="border rounded-xl p-6 flex flex-col h-full">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Business</h3>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">$19.99</span>
                <span className="text-gray-600">/monthly</span>
              </div>
            </div>

            <div className="flex-grow space-y-3 mb-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="flex items-center">
                  <Check className="h-4 w-4 text-orange-500 mr-2" />
                  <span className="text-sm">Feature</span>
                </div>
              ))}
            </div>

            <Button title="Subscribe" className="w-full bg-purple-800 hover:bg-purple-900" onTap={()=>{
              
            }}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing


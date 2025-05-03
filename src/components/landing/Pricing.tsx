"use client"
import { Check } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion";
import { Button } from "../common/Button"; // Use your custom Button

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-blue-800 font-bold mb-2">PRICING</div>
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Simple</h2>
          <p className="text-gray-600 max-w-md">
            Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee.
            Cancel anytime.
          </p>
        </div>
        
        {/* Billing toggle */}
        <div className="flex justify-center mb-8 relative">
          <div className="bg-gray-100 rounded-full flex items-center p-1 w-72">
            <button 
              className={`flex-1 py-2 px-4 rounded-full text-center ${billingCycle === "monthly" ? "bg-orange-500 text-white" : ""}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button 
              className={`flex-1 py-2 px-4 rounded-full text-center ${billingCycle === "yearly" ? "bg-white text-blue-800" : ""}`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </button>
          </div>
          <div className="absolute right-1/2 -mr-32 md:right-auto md:left-1/2 md:ml-20 top-0 bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
            Save 40%
          </div>
        </div>
        
        {/* Pricing cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Standard Plan */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="border-2 border-blue-800 rounded-xl p-6 flex flex-col h-full
              transform transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-blue-800">Standard</h3>
                <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-8">
                One request at a time. For companies who need on-going design support.
              </p>
              <div className="mb-4 text-blue-800">
                <span className="text-4xl font-bold">$4.99</span>
                <span className="text-lg">/monthly</span>
              </div>
              <div className="text-sm text-gray-600 mb-8">Paid per weekly</div>
            </div>
            
            <div className="flex-grow space-y-3 mb-6 border-t pt-6">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div key={item} className="flex items-center">
                  <span className="text-orange-500 mr-2 text-lg">+</span>
                  <span className="text-blue-800">Feature</span>
                </div>
              ))}
            </div>
            
            <Button variant="primary" className="w-full">Subscribe</Button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="border-2 border-blue-800 rounded-xl p-6 flex flex-col h-full
              transform transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-blue-800">Pro</h3>
                <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Best value
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-8">
                Double the requests. For companies with increasing design needs. Limited spots.
              </p>
              <div className="mb-4 text-blue-800">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-lg">/monthly</span>
              </div>
              <div className="text-sm text-gray-600 mb-8">Paid per weekly</div>
            </div>
            
            <div className="flex-grow space-y-3 mb-6 border-t pt-6">
              <div className="flex items-center">
                <span className="text-orange-500 mr-2 text-lg">+</span>
                <span className="text-blue-800">2x Feature</span>
              </div>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="flex items-center">
                  <span className="text-orange-500 mr-2 text-lg">+</span>
                  <span className="text-blue-800">Feature</span>
                </div>
              ))}
            </div>
            
            <Button variant="primary" className="w-full">Subscribe</Button>
          </motion.div>

          {/* Business Plan */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="border-2 border-blue-800 rounded-xl p-6 flex flex-col h-full
              transform transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-blue-800">Business</h3>
              </div>
              <p className="text-gray-600 text-sm mb-8">
                Perfect if you want to try the subscription out or only have a few one-off tasks.
              </p>
              <div className="mb-4 text-blue-800">
                <span className="text-4xl font-bold">$19.99</span>
                <span className="text-lg">/monthly</span>
              </div>
              <div className="text-sm text-gray-600 mb-8">Paid per weekly</div>
            </div>
            
            <div className="flex-grow space-y-3 mb-6 border-t pt-6">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div key={item} className="flex items-center">
                  <span className="text-orange-500 mr-2 text-lg">+</span>
                  <span className="text-blue-800">Feature</span>
                </div>
              ))}
            </div>
            
            <Button variant="primary" className="w-full">Subscribe</Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Pricing
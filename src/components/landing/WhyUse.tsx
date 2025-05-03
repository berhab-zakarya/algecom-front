"use client";

import { motion } from 'framer-motion';
import React from 'react';

interface WhyUseProps {}

const WhyUse: React.FC<WhyUseProps> = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[20px] font-normal text-[#2D2E83] mb-2 text-left ml-[20px]">
            WHY USE ALGECOM ?
          </h2>
          <h3 className="text-[40px] font-bold mt-[16px] text-[#2D2E83] text-left ml-[20px]">
            Easy, Simple,
            <br />
            Affordable
          </h3>
          <p className="text-gray-500 mt-4 max-w-2xl text-left ml-[590px]">
            Our platform helps your business in managing expenses. These are
            some of the reasons why you should use our platform in managing
            business finances.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Box 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-[#F4F6FF] rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/logo/png/automatic.png"
              alt="Automatic Invoice Payment"
              className="w-full"
            />
            <div className="p-6">
              <h4 className="text-lg font-bold text-[#2D2E83] mb-2">
                Automatic Invoice Payment
              </h4>
              <p className="text-sm text-gray-600">
                No need to pay manually, we provide automatic invoice payment
                service! Set a payment schedule and you're done, it's that easy!
              </p>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-[#F4F6FF] rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/logo/png/payment-history.png"
              alt="Clear payment history"
              className="w-full"
            />
            <div className="p-6">
              <h4 className="text-lg font-bold text-[#2D2E83] mb-2">
                Clear payment history
              </h4>
              <p className="text-sm text-gray-600">
                Still writing manual expenses? Our platform breaks down every
                expense you log down to the millisecond!
              </p>
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-[#F4F6FF] rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/logo/png/multi-card.png"
              alt="Multi-card payments"
              className="w-full"
            />
            <div className="p-6">
              <h4 className="text-lg font-bold text-[#2D2E83] mb-2">
                Use of multi-card payments
              </h4>
              <p className="text-sm text-gray-600">
                Have more than 1 bank account or credit/debit card? Our platform
                is already integrated with many banks around the world, for
                easier payments!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUse;

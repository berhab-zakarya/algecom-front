import Image from 'next/image';

const Capabilities = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="container mx-auto text-center">
        <h2 className="text-sm font-medium text-[#1E3A8A] uppercase mb-2 tracking-wider text-left ml-20">
          OUR CAPABILITIES
        </h2>
        <h3 className="text-[40px] font-bold text-[#1E3A8A] mb-16 text-left ml-20">
          We can help you with...
        </h3>

        <div className="grid md:grid-cols-3 gap-12 px-4 md:px-0">
          {/* Card 1 */}
          <div className="text-left transform transition-transform duration-300 hover:translate-x-2 hover:translate-y-2 hover:bg-orange-500 p-6 rounded-lg">
            <div className="w-12 h-12 bg-[#1E3A8A] hover:bg-white rounded-md flex items-center justify-center mb-6 transition-colors duration-300">
              <Image  
                src="/logo/svg/empty-wallet-time.svg"
                alt="Automatic Invoice Payment"
                width={24}
                height={24}
                className="text-white hover:text-orange-500 transition-colors duration-300"
              />
            </div>
            <h4 className="text-[24px] font-semibold text-[#1E3A8A] mb-2 ">
              Automatic Invoice Payment
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Automatic payments help you to arrange payments on a certain date
              without doing it again.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-left transform transition-transform duration-300 hover:translate-x-2 hover:translate-y-2 hover:bg-orange-500 p-6 rounded-lg">
            <div className="w-12 h-12 bg-[#1E3A8A] hover:bg-white rounded-md flex items-center justify-center mb-6 transition-colors duration-300">
              <Image  
                src="/logo/svg/document-text.svg"
                alt="Clear payment history"
                width={24}
                height={24}
                className="text-white hover:text-orange-500 transition-colors duration-300"
              />
            </div>
            <h4 className="text-[24px] font-semibold text-[#1E3A8A] mb-2">
              Clear payment history
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Clear payment history helps you to track your business expenses on
              specific dates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-left transform transition-transform duration-300 hover:translate-x-2 hover:translate-y-2 hover:bg-orange-500 p-6 rounded-lg">
            <div className="w-12 h-12 bg-[#1E3A8A] hover:bg-white rounded-md flex items-center justify-center mb-6 transition-colors duration-300">
              <Image  
                src="/logo/svg/cards.svg"
                alt="Use of multi-card payments"
                width={24}
                height={24}
                className="text-white hover:text-orange-500 transition-colors duration-300"
              />
            </div>
            <h4 className="text-[24px] font-semibold text-[#1E3A8A] mb-2">
              Use of multi-card payments
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Have more than one debit or credit card? We support payments using
              more than one card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

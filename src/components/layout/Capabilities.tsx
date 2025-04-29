const Capabilities = () => {
    return (
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-sm font-medium text-purple-800 mb-2">OUR CAPABILITIES</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-12">We can help you with...</h3>
  
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Automatic Invoice Payment</h4>
              <p className="text-gray-600">
                Automatically process high-volume recurring payments and streamline your workflow with advanced features.
              </p>
            </div>
  
            <div className="p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Clear payment history</h4>
              <p className="text-gray-600">
                Get detailed insights into your payment history with easy-to-read reports and analytics.
              </p>
            </div>
  
            <div className="p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Use of multi-card payments</h4>
              <p className="text-gray-600">
                Manage multiple payment methods and cards in one place for seamless transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Capabilities
  
  
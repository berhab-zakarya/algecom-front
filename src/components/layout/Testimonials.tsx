const Testimonials = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our happy customers say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every one of us loves something different, to explore the world through the lens of our smart capabilities,
            and find what moves us.
          </p>
  
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-medium">Customer Name</h4>
                    <p className="text-sm text-gray-600">Company Position</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  "I was amazed at how quickly we were able to implement ALGECOM. The team has been incredibly responsive
                  and helpful."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials
  
  
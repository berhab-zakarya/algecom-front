const Hero = () => {
    return (
      <section className="py-16 px-4 text-center bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-secondary text-white px-2 py-1 rounded mb-4">
            New Introducing AI Automation
          </span>
          <h1 className="text-4xl font-bold text-primary mb-4">
            The UNIQUE solutions for your business.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Empower your finance team. The one-stop platform for all financial management of small and medium-sized business.
          </p>
          <div className="flex max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-r hover:bg-opacity-90">
              Launch your store
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-12 flex-wrap">
          {['hubspot', 'buffer', 'stripe', 'framer', 'dropbox'].map((brand) => (
            <img 
              key={brand}
              src={`/images/${brand}.png`}
              alt={brand}
              className="h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default Hero;
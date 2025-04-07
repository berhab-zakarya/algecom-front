import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    author: "Alex Rivera",
    handle: "@jamietechguru00"
  },
  // ... other testimonials
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Testimonial</h2>
        <p className="text-gray-600">
          Customer is our TOP priority, We survey all of our clients, the results of which go directly to our CEO.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
            <div className="font-bold">{testimonial.author}</div>
            <div className="text-gray-500 text-sm">{testimonial.handle}</div>
          </div>
        ))}
      </div>
      
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-primary mb-4">Subscribe to our newsletter</h3>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="bg-primary text-white px-6 py-3 rounded-r hover:bg-opacity-90">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
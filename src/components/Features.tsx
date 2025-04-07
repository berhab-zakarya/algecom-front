import { Feature } from '../types';

const Features = () => {
  const services = [
    "Web design & UI", "Social media visuals", "Infographics", 
    "Design system", "Email design", "Stationery", "Icons", 
    "Packaging & merch", "Signage", "Brochures", "Logos & branding", 
    "Digital ads", "Wireframes"
  ];

  const features: Feature[] = [
    {
      title: "Feature 1",
      description: "Party we years to order allow asked of. We so opinion friends me message as delight."
    },
    {
      title: "Feature 2",
      description: "His defective nor convinced residence own. Connection has put impossible own apartments boisterous."
    },
    {
      title: "Feature 3",
      description: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly."
    }
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Building the FUTURE of you.</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the future of ecommerce with ALGECOM. We're here to empower your journey.
        </p>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-primary mb-2">Our capabilities</h3>
        <p className="text-gray-600 mb-6">We can help you with...</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded text-center">
              {service}
            </div>
          ))}
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 mx-auto block">
          Learn more
        </button>
      </div>
      
      <div className="bg-blue-50 p-8 rounded-lg mb-12 text-center">
        <p className="text-gray-700">
          A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director. 
          We partner with you to ensure that your design elevates your brand to new levels.
        </p>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
          Explore what services we're offering
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-primary mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
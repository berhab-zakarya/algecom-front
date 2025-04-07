import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Telecommunications",
      description: "Expert telecom solutions for your business needs",
      icon: "/icons/telecom.svg"
    },
    {
      title: "Infrastructure",
      description: "Modern infrastructure development and maintenance",
      icon: "/icons/infrastructure.svg"
    },
    {
      title: "Network Solutions",
      description: "Advanced networking and connectivity solutions",
      icon: "/icons/network.svg"
    },
    {
      title: "Technical Support",
      description: "24/7 technical support and maintenance services",
      icon: "/icons/support.svg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions for your telecommunications needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 mb-4 mx-auto">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
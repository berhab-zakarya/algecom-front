import { Plan } from '../types';

const Pricing = () => {
  const plans: Plan[] = [
    {
      name: "Standard",
      price: "$4.99/monthly",
      description: "One request at a time. For companies who need on-going design support.",
      features: ["Feature", "Feature", "Feature"],
      isPopular: false,
      billing: "Paid per weekly"
    },
    {
      name: "Pro",
      price: "$9.99/monthly",
      description: "Double the requests. For companies with increasing design needs. Limited spots.",
      features: ["2x Feature", "Feature", "Feature"],
      isPopular: true,
      billing: "Paid per weekly"
    },
    {
      name: "Business",
      price: "$19.99/monthly",
      description: "Perfect if you want to try the subscription out or only have a few one-off tasks.",
      features: ["Feature", "Feature", "Feature"],
      isPopular: false,
      billing: "Paid per weekly"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Simple pricing to level up your brand.</h2>
        <p className="text-gray-600">
          Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.
        </p>
      </div>
      
      <div className="flex items-center justify-center gap-4 mb-8">
        <span>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-14 h-7 bg-primary rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
        </label>
        <span>
          Yearly <span className="bg-accent text-white px-2 py-1 rounded text-sm">Save 40%</span>
        </span>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white p-8 rounded-lg shadow-md relative ${plan.isPopular ? 'border-2 border-secondary' : ''}`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 right-4 bg-secondary text-white px-3 py-1 rounded text-sm">
                Most Popular
              </div>
            )}
            {index === 2 && (
              <div className="absolute -top-3 right-4 bg-accent text-white px-3 py-1 rounded text-sm">
                Best value
              </div>
            )}
            <h3 className="text-xl font-bold text-primary mb-4">{plan.name}</h3>
            <div className="text-2xl font-bold text-primary mb-4">{plan.price}</div>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <div className="text-gray-500 text-sm mb-6">{plan.billing}</div>
            <ul className="mb-8 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="border-b border-gray-100 py-2">{feature}</li>
              ))}
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded hover:bg-opacity-90">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
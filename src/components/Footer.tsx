import Link from 'next/link';

interface FooterLinkSection {
  title: string;
  links: string[];
}

const Footer = () => {
  const footerLinks: FooterLinkSection[] = [
    {
      title: "Company",
      links: ["About us", "Company", "Service", "Resources"]
    },
    {
      title: "Service",
      links: ["About us", "Company", "Service", "Resources"]
    },
    {
      title: "Resources",
      links: ["About us", "Company", "Service", "Resources"]
    },
    {
      title: "Help",
      links: ["Customer Support", "Terms & Conditions", "Privacy Policy"]
    }
  ];

  return (
    <footer className="bg-primary text-white py-16 px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-blue-100 hover:text-white">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="max-w-xl mx-auto text-center mb-12">
        <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-l focus:outline-none text-gray-800"
          />
          <button className="bg-accent text-white px-6 py-3 rounded-r hover:bg-opacity-90">
            Launch your store
          </button>
        </div>
      </div>
      
      <div className="pt-8 border-t border-blue-700 text-center text-blue-100">
        <p>Copyright 2025©, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
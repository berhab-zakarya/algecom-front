import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-20 py-0 bg-white shadow-sm h-18">
      <img src="/logo.svg" alt="Logo" className="h-9" />
      <nav className="flex gap-10">
        <Link href="/" className="text-black font-outfit text-lg hover:text-primary">Home</Link>
        <Link href="/about" className="text-black font-outfit text-lg hover:text-primary">About us</Link>
        <Link href="/features" className="text-black font-outfit text-lg hover:text-primary">Services</Link>
        <Link href="/pricing" className="text-black font-outfit text-lg hover:text-primary">Pricing</Link>
        <Link href="/contact" className="text-black font-outfit text-lg hover:text-primary">Contact us</Link>
      </nav>
      <button className="bg-blue-800 text-white px-8 py-3 rounded-full text-lg font-outfit hover:bg-blue-700">
        Get started
      </button>
    </header>
  );
};

export default Header;
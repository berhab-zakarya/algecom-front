import Link from 'next/link'
import React from 'react'
import Logo from '../resuable/Logo'

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between py-4">
      <div className="flex items-center cursor-pointer">
        <Logo />
      </div>
      <nav className="flex justify-between items-center py-2 pr-6 pl-0 gap-8 mx-auto w-[847px] h-[64px] bg-white shadow-[1px_1px_0px_rgba(30,58,138,0.3)] rounded-[75px]">
      <Link 
          href="/" 
          className="flex justify-center items-center  px-8 py-2  w-[118px] h-[64px] bg-[#1E3A8A] rounded-[75px] text-white font-outfit text-[20px]"
        >
          Home
        </Link>
        <Link href="/about" className="text-[#1E3A8A] font-outfit text-lg hover:text-primary">About us</Link>
        <Link href="/features" className="text-[#1E3A8A] font-outfit text-lg hover:text-primary">Services</Link>
        <Link href="/pricing" className="text-[#1E3A8A] font-outfit text-lg hover:text-primary">Pricing</Link>
        <Link href="/contact" className="text-[#1E3A8A] font-outfit text-lg hover:text-primary">Contact us</Link>
     
      </nav>
      <button className="bg-[#1E3A8A] w-[173px] h-[64px] text-white py-[10px]  rounded-[50px] text-[20px] font-outfit hover:bg-blue-700">
        Get started
      </button>
    </header>
  )
}

export default Header

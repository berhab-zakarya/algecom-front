"use client";
import Link from "next/link";
import React from "react";
import Button from "../resuable/Button";
import Logo from "../resuable/Logo";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="container mx-auto flex items-center justify-between py-4">
      <div className="flex items-center cursor-pointer">
        <Logo />
      </div>
      <nav className="hidden md:flex items-center pl-32 w-full justify-between">
        <Link
          href="#"
          className="text-[20px] font-medium hover:text-blue-600 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-[20px] font-medium hover:text-blue-600 transition-colors duration-300"
        >
          About us
        </Link>
        <Link
          href="#"
          className="text-[20px] font-medium hover:text-blue-600 transition-colors duration-300"
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-[20px] font-medium hover:text-blue-600 transition-colors duration-300"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-[20px] font-medium hover:text-blue-600 transition-colors duration-300"
        >
          Contact us
        </Link>
        <div className="ml-4">
          <Button
            onTap={() => {
              router.push("/login");
            }}
            title="Get started"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;

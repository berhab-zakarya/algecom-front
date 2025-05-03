"use client";
import Button from "../resuable/Button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Image from "next/image";

export function HeroSection() {
  const words = [
    {
      text: "Building",
    },
    {
      text: "the",
    },
    {
      text: "FUTURE",
      className: "text-purple-800",
    },
    {
      text: "of",
    },
    {
      text: "you.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/grid.svg"
          alt="Grid Background"
          fill
          className="object-cover opacity-30"
        />
      </div>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-50" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-300 rounded-full opacity-50" />
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-100 rounded-full opacity-50" />
      </div>

      <div className="container mx-auto text-center">
        <button
          className="inline-block w-[167px] h-[32px] mb-4 px-4  border-2 border-[#F97316] items-center rounded-[100px] text-[16px] font-medium
    transition-all duration-300 hover:scale-105
    active:scale-95 cursor-pointer animate-glow"
          onClick={() => console.log("AI Features clicked")}
        >
          New AI Features
        </button>
        <div className="flex flex-col items-center justify-center">
          <TypewriterEffectSmooth words={words} />
          <div className="relative h-[28px] mb-[42px] mt-[28px] items-center w-full justify-center">
            {" "}
            {/* Fixed height container */}
            <p className="animate-fade-in-1 text-[28px] font-medium text-[#1E3A8A] absolute w-full">
              ALGECOM
            </p>
            <p className="animate-fade-in-2 text-[28px] font-medium text-[#1E3A8A] absolute w-full">
              Experience the future of ecommerce with ALGECOM.{" "}
            </p>
            <p className="animate-fade-in-3 text-[28px] font-medium text-[#1E3A8A] absolute w-full">
              ALGECOM. We&apos;re here to empower your journey.
            </p>
            <p className="animate-fade-in-4 text-[28px] font-medium text-[#1E3A8A] absolute w-full">
              Experience the future of ecommerce with ALGECOM. <br /> We&apos;re
              here to empower your journey.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <div className="mt-6 flex flex-col md:flex-row items-center gap-4 w-full ">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-[276px] h-[52px] px-4 rounded-[32px] border border-black focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Button className="text-sm" title={"Launch your store"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

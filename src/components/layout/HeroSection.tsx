// "use client";
// import Image from "next/image";
// import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
// import Button from "../resuable/Button";

// export function HeroSection() {
//   const words = [
//     {
//       text: "Building",
//     },
//     {
//       text: "the",
//     },
//     {
//       text: "FUTURE",
//       className: "text-primary",
//     },
//     {
//       text: "of",
//     },
//     {
//       text: "you.",
//     },
//   ];

//   return (
//     <div className="relative flex flex-col items-center justify-center h-[20rem] px-4">
//       {/* Background */}


//       {/* Text */}
//       <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mb-2">
//         Building the Future of you
//       </p>
//       <TypewriterEffectSmooth words={words} />

//       {/* Email Input + Button */}
//       <div className="mt-6 flex flex-col md:flex-row items-center gap-4 w-full max-w-md">
       
        
//       </div>
//     </div>
//   );
// }



"use client"
import Button from "../resuable/Button"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect"
import Image from "next/image"

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
  ]

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
        <div className="inline-block mb-4 px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
          New Features
        </div>

        <div className="flex flex-col items-center justify-center">
          <TypewriterEffectSmooth words={words} />
          <p className="text-lg mb-8 text-center">ALGECOM</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <div className="mt-6 flex flex-col md:flex-row items-center gap-4 w-full ">
            <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-[276px] h-[52px] px-4 rounded-[32px] border border-black focus:outline-none focus:ring-2 focus:ring-black"
        />
           <Button onTap={()=>{} } className="text-sm" title={"Launch your store"}
        />
            </div>
         
          </div>
        </div>

 
      </div>
    </section>
  )
}


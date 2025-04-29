"use client"

import Capabilities from '@/components/layout/Capabilities'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { HeroSection } from '@/components/layout/HeroSection'
import {MacbookSection} from "@/components/layout/MacbookSection"
import Newsletter from '@/components/layout/Newsletter'
import Partners from '@/components/layout/Partners'
import Pricing from '@/components/layout/Pricing'
import Testimonials from '@/components/layout/Testimonials'
import WhyUse from '@/components/layout/WhyUse'
import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <div className='flex flex-col w-full'>
     
      <Header/>
      <HeroSection/>
      <MacbookSection/>
      <Partners/>
      <Capabilities/>
      <WhyUse/>
      <Pricing/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Landing
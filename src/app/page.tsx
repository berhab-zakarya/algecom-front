import Capabilities from "@/components/landing/Capabilities";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { MacbookSection } from "@/components/landing/MacbookSection";
import Newsletter from "@/components/landing/Newsletter";
import Partners from "@/components/landing/Partners";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import WhyUse from "@/components/landing/WhyUse";
import { fontFamily } from "@/styles/fonts";

export default function Home() {
  return (
    <div className={`${fontFamily} bg-primary`}>
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
  );
}

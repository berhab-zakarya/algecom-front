import { Button } from "@/components/common/Button";
import Header from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { fontFamily } from "@/styles/fonts";

export default function Home() {
  return (
    <div className={`${fontFamily}`}>


     <Header />
    <HeroSection/>
    </div>
  );
}

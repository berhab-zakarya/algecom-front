
import { Geist, Geist_Mono } from "next/font/google";

import Hero from "@/components/Hero";

import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing ";
import Testimonials from "@/components/Testimonials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>ALGECOM - Unique Solutions for Your Business</title>
        <meta name="description" content="Empower your finance team with ALGECOM's one-stop platform for all financial management needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";
import OurFeatures from "@/components/our-features";
import WhatToDo from "@/components/what-to-do";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center">
      <Navbar/>
      <section className="w-full max-h-[1077px] flex flex-col items-center bg-[#F2F2F2]">
        <Hero/>
      </section>
      <HowItWorks/>
      <OurFeatures/>
      <WhatToDo/>
      
    </section>
  );
}

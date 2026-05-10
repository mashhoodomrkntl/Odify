"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyOdify from "@/components/sections/WhyOdify";
import Approach from "@/components/sections/Approach";
import Industries from "@/components/sections/Industries";
import Expertise from "@/components/sections/Expertise";
import ClientCommitment from "@/components/sections/ClientCommitment";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyOdify />
      <Approach />
      <Industries />
      <Expertise />
      <ClientCommitment />
      <Stats />
      <Contact />
    </main>
  );
}

"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Globe, UserCheck, Target, RefreshCw, Award } from "lucide-react";

const values = [
  {
    icon: <Globe size={24} />,
    title: "Global Standards. Local Precision.",
    desc: "We deliver to international benchmarks on every engagement — without compromising on the local detail that matters.",
  },
  {
    icon: <UserCheck size={24} />,
    title: "Practitioner-Led, Always.",
    desc: "Every file is handled by qualified professionals with real-world experience. No outsourcing of judgement.",
  },
  {
    icon: <Target size={24} />,
    title: "Selective by Design.",
    desc: "We work with a curated portfolio of clients who value precision. This is how we maintain the quality of every engagement.",
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Consistent Delivery.",
    desc: "Every file reviewed. Every report verified. Every client served with the same standard — regardless of size or scope.",
  },
  {
    icon: <Award size={24} />,
    title: "Trusted by Standard.",
    desc: "Our reputation is built on the discipline of doing things properly. Every time.",
  },
];

export default function WhyOdify() {
  return (
    <section className="section-padding bg-brand-black text-white relative">
      {/* Side background glow contained to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-full bg-brand-red/[0.02] blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left sticky column */}
          <div className="lg:sticky lg:top-32 self-start">
            <ScrollReveal>
                <div className="py-2">
                  <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">
                    The Core Difference
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1] tracking-tighter uppercase">
                    ONE STANDARD. <br />
                    <span className="text-brand-red">NO EXCEPTIONS.</span>
                  </h2>
                  <p className="mt-8 text-brand-accent/40 text-lg max-w-md font-medium leading-relaxed">
                    Precision isn't a goal. It's our baseline. We operate with a level of discipline that sets the benchmark in corporate advisory.
                  </p>
                  
                  <div className="mt-12 flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-brand-red" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Built for Excellence</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          {/* Right values */}
          <div className="space-y-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="group flex gap-8 p-8 bg-brand-dark/30 border border-white/5 hover:border-brand-red/20 transition-all duration-500 hover:bg-brand-red/[0.02]">
                  <div className="shrink-0 w-14 h-14 border border-brand-red/20 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all duration-500 rotate-45 group-hover:rotate-0">
                    <div className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 uppercase tracking-widest text-white group-hover:text-brand-red transition-colors">{value.title}</h3>
                    <p className="text-brand-accent/40 text-sm leading-relaxed font-medium">{value.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

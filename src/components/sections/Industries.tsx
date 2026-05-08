"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Building2, Briefcase, HardHat, UtensilsCrossed, Monitor, Factory, Landmark } from "lucide-react";

const industries = [
  { icon: <Building2 size={24} />, name: "Trading & Distribution" },
  { icon: <Briefcase size={24} />, name: "Professional Services" },
  { icon: <HardHat size={24} />, name: "Real Estate & Construction" },
  { icon: <UtensilsCrossed size={24} />, name: "Hospitality & F&B" },
  { icon: <Monitor size={24} />, name: "Technology & E-Commerce" },
  { icon: <Factory size={24} />, name: "Manufacturing" },
  { icon: <Landmark size={24} />, name: "Holding & Investment" },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-brand-dark relative">
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">Strategic Sectors</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase">
              Sectors We Understand.
            </h2>
            <p className="mt-8 text-brand-accent/50 text-xl font-medium">
              Odify works across a diverse range of industries. Whatever the sector, the standard remains the same.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 0.08} className="h-full">
              <div className="group bg-brand-black p-10 text-center transition-all duration-500 hover:bg-brand-red/[0.02] h-full flex flex-col items-center justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-brand-red/10 text-brand-red mb-6 group-hover:scale-110 group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                  {ind.icon}
                </div>
                <p className="text-[11px] font-black text-white uppercase tracking-[0.2em] leading-relaxed group-hover:text-brand-red transition-colors">{ind.name}</p>
              </div>
            </ScrollReveal>
          ))}
          
          <ScrollReveal delay={0.6} className="h-full">
            <div className="group bg-brand-black p-10 text-center flex flex-col items-center justify-center border-l border-white/5 transition-all duration-500 hover:bg-brand-red/[0.05] h-full">
              <p className="text-[11px] font-black text-brand-red uppercase tracking-[0.2em]">And Beyond</p>
              <div className="mt-4 w-8 h-[1px] bg-brand-red" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

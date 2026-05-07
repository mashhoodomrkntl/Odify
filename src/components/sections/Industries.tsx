"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Building2, Briefcase, HardHat, UtensilsCrossed, Monitor, Factory, Landmark } from "lucide-react";

const industries = [
  { icon: <Building2 size={22} />, name: "Trading & Distribution" },
  { icon: <Briefcase size={22} />, name: "Professional Services" },
  { icon: <HardHat size={22} />, name: "Real Estate & Construction" },
  { icon: <UtensilsCrossed size={22} />, name: "Hospitality & F&B" },
  { icon: <Monitor size={22} />, name: "Technology & E-Commerce" },
  { icon: <Factory size={22} />, name: "Manufacturing" },
  { icon: <Landmark size={22} />, name: "Holding Companies & Investment Vehicles" },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-surface-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase mb-4">Industries We Serve</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black leading-tight">
              Sectors We <span className="text-gradient">Understand.</span>
            </h2>
            <p className="mt-6 text-gray-500 text-lg">
              Odify works across a diverse range of industries. Whatever the sector, the standard remains the same.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 0.08}>
              <div className="group bg-white border border-gray-100 rounded-lg p-6 text-center hover:border-brand-red/30 hover:shadow-lg transition-all duration-300 cursor-default">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-red/5 text-brand-red mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  {ind.icon}
                </div>
                <p className="text-sm font-semibold text-brand-black">{ind.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

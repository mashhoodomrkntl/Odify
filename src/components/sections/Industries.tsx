"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Building2, Briefcase, HardHat, UtensilsCrossed, Monitor, Factory, Landmark } from "lucide-react";
import { useTranslations } from "next-intl";

const industries = [
  { icon: <Building2 size={24} />, key: "ind1" },
  { icon: <Briefcase size={24} />, key: "ind2" },
  { icon: <HardHat size={24} />, key: "ind3" },
  { icon: <UtensilsCrossed size={24} />, key: "ind4" },
  { icon: <Monitor size={24} />, key: "ind5" },
  { icon: <Factory size={24} />, key: "ind6" },
  { icon: <Landmark size={24} />, key: "ind7" },
];

export default function Industries() {
  const t = useTranslations("Industries");

  return (
    <section id="industries" className="section-padding bg-brand-dark relative">
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">{t("subtitle")}</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase">
              {t("title")}
            </h2>
            <p className="mt-8 text-brand-accent/50 text-xl font-medium">
              {t("desc")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.key} delay={i * 0.08} className="h-full">
              <div className="group bg-brand-black p-10 text-center transition-all duration-500 hover:bg-brand-red/[0.02] h-full flex flex-col items-center justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-brand-red/10 text-brand-red mb-6 group-hover:scale-110 group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                  {ind.icon}
                </div>
                <p className="text-[11px] font-black text-white uppercase tracking-[0.2em] leading-relaxed group-hover:text-brand-red transition-colors">{t(ind.key)}</p>
              </div>
            </ScrollReveal>
          ))}
          
          <ScrollReveal delay={0.6} className="h-full">
            <div className="group bg-brand-black p-10 text-center flex flex-col items-center justify-center border-l border-white/5 rtl:border-l-0 rtl:border-r transition-all duration-500 hover:bg-brand-red/[0.05] h-full">
              <p className="text-[11px] font-black text-brand-red uppercase tracking-[0.2em]">{t("beyond")}</p>
              <div className="mt-4 w-8 h-[1px] bg-brand-red" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

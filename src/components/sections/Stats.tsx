"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { useTranslations } from "next-intl";

const stats = [
  { key: "stat1", value: "430+" },
  { key: "stat2", value: "6+" },
  { key: "stat3", value: "13+" },
  { key: "stat4", value: "100%" },
];

export default function Stats() {
  const t = useTranslations("Stats");

  return (
    <section className="py-16 bg-brand-black text-white relative border-y border-white/5">
      <div className="container-custom px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.key} delay={i * 0.1}>
              <div className="text-center group">
                <div dir="ltr" className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center gap-1">
                  <CountUp>{stat.value.replace(/[^0-9]/g, '')}</CountUp>
                  <span className="text-brand-red text-3xl md:text-5xl">{stat.value.replace(/[0-9]/g, '')}</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-[2px] bg-brand-red transition-all duration-500 group-hover:w-16" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent/40 group-hover:text-brand-red transition-colors">
                    {t(stat.key)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const stats = [
  { label: "Engagements Delivered", value: "430+" },
  { label: "Years of Experience", value: "6+" },
  { label: "Industries Served", value: "13+" },
  { label: "Standards Upheld", value: "100%" },
];

export default function Stats() {
  return (
    <section className="py-32 bg-brand-black text-white relative border-y border-white/5">
      <div className="container-custom px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 transition-transform duration-500 group-hover:scale-110">
                  <CountUp>{stat.value}</CountUp>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-[2px] bg-brand-red transition-all duration-500 group-hover:w-16" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent/40 group-hover:text-brand-red transition-colors">
                    {stat.label}
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

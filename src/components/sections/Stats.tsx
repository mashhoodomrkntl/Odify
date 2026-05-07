"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const stats = [
  { label: "Engagements Delivered", value: "500+" },
  { label: "Years of Experience", value: "15+" },
  { label: "Industries Served", value: "12+" },
  { label: "Standards Upheld", value: "100%" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-brand-red text-white">
      <div className="container-custom px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-2">
                  <CountUp>{stat.value}</CountUp>
                </p>
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] opacity-80">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

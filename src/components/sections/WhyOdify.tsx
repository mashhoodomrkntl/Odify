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
    desc: "Every file is handled by qualified professionals with real-world experience. No outsourcing of judgement. No shortcuts.",
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
    <section className="section-padding bg-brand-black text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left sticky */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase mb-4">
                Why Odify
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                One Standard.{" "}
                <span className="text-brand-red">No Exceptions.</span>
              </h2>
              <div className="mt-8 w-20 h-1 bg-brand-red" />
            </div>
          </ScrollReveal>

          {/* Right values */}
          <div className="space-y-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="group flex gap-6 p-6 rounded-lg border border-white/5 hover:border-brand-red/20 hover:bg-white/5 transition-all duration-300">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
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

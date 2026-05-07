"use client";

import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "Understand", desc: "We begin by understanding your business, your obligations, and your expectations. No assumptions." },
  { num: "02", title: "Structure", desc: "We build a tailored engagement plan covering scope, timelines, deliverables, and review checkpoints." },
  { num: "03", title: "Execute", desc: "Our team delivers with discipline — every file documented, every step reviewed, every standard upheld." },
  { num: "04", title: "Report", desc: "You receive clear, audit-ready outputs and ongoing communication. No surprises. No delays." },
  { num: "05", title: "Improve", desc: "We don't just deliver — we identify opportunities to strengthen your financial operations going forward." },
];

export default function Approach() {
  return (
    <section id="approach" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase mb-4">Our Approach</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black leading-tight">
              Trust the Process. <span className="text-gradient">Trust Odify.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div className={`md:flex items-center gap-12 md:mb-16 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`bg-surface-50 border border-gray-100 p-8 rounded-lg hover:border-brand-red/20 hover:shadow-lg transition-all duration-500 ${i % 2 === 0 ? "md:ml-auto md:mr-12" : "md:mr-auto md:ml-12"} max-w-md`}>
                      <span className="text-brand-red font-bold text-xs tracking-[0.2em]">STEP {step.num}</span>
                      <h3 className="text-2xl font-bold text-brand-black mt-2 mb-3">{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-brand-red text-white font-bold text-sm shrink-0 shadow-lg shadow-brand-red/20 z-10">
                    {step.num}
                  </div>

                  <div className="flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-black relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-dark/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <ScrollReveal>
            <div className="relative">
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">
                The Odify Philosophy
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase">
                Built on Standards. <br />
                Driven by Performance.
              </h2>
              
              <div className="mt-12 h-[1px] w-24 bg-brand-red" />
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8 text-brand-accent/70 text-lg leading-relaxed font-medium">
              <p>
                Odify is a corporate advisory firm specialising in accounting, taxation, audit, and compliance. We work with businesses that take financial discipline seriously — and expect their partners to do the same.
              </p>
              <p>
                Our practice is built on three principles: international standards, operational precision, and consistent delivery. Every engagement is led by experienced practitioners and reviewed against the benchmarks that matter.
              </p>
              <div className="pt-4">
                <p className="text-white font-bold text-xl leading-snug border-l-2 border-brand-red pl-8 py-2 bg-brand-dark/30">
                  "We don&apos;t promise more than we can deliver. <br />
                  <span className="text-brand-red">We deliver more than most promise.</span>"
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

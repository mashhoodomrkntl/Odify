"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <ScrollReveal>
            <p className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black leading-tight">
              Built on Standards.{" "}
              <span className="text-gradient">Driven by Performance.</span>
            </h2>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Odify is a corporate advisory firm specialising in accounting, taxation, audit, and compliance. We work with businesses that take financial discipline seriously — and expect their partners to do the same.
              </p>
              <p>
                Our practice is built on three principles: international standards, operational precision, and consistent delivery. Every engagement is led by experienced practitioners and reviewed against the benchmarks that matter.
              </p>
              <p className="text-brand-black font-semibold text-lg border-l-4 border-brand-red pl-6">
                We don&apos;t promise more than we can deliver. We deliver more than most promise.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

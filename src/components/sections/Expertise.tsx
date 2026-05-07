"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function Expertise() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase mb-4">The School of Practice</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black leading-tight">
              Where Standards Become{" "}
              <span className="text-gradient">Second Nature.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Our team is built around practitioners — not theorists. Every engagement is led by professionals with hands-on experience in real-world accounting, audit, and compliance work.
              </p>
              <p>
                We invest continuously in our team&apos;s expertise across IFRS, VAT, Corporate Tax, and international audit standards. The result: a team that knows the standards because they apply them every day.
              </p>
              <p className="text-brand-black font-semibold text-lg border-l-4 border-brand-red pl-6">
                Practice is the proof.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

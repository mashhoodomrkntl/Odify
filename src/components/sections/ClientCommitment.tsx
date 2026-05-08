"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ClientCommitment() {
  return (
    <section className="section-padding bg-brand-dark text-white relative">
      {/* Background graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,4,41,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">Exclusivity by Design</span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-12">
              NOT FOR <br />
              <span className="text-brand-red">EVERYONE.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8 text-brand-accent/50 leading-relaxed text-xl font-medium max-w-2xl mx-auto">
              <p>
                We work with businesses that take compliance seriously — and expect their partners to do the same.
              </p>
              <p>
                If you&apos;re looking for a firm that treats financial discipline as a checkbox, we&apos;re not the right fit. If you&apos;re looking for a partner that treats every file like it matters, we should talk.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 flex flex-col items-center gap-12">
              <p className="text-[12px] font-black uppercase tracking-[0.4em] text-white">
                Selective by design. <span className="text-brand-red">Trusted by standard.</span>
              </p>
              <Link href="#contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

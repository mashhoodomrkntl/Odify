"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ClientCommitment() {
  return (
    <section className="section-padding bg-brand-black text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase mb-4">Client Commitment</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Not For <span className="text-brand-red">Everyone.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-10 space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                We work with businesses that take compliance seriously — and expect their partners to do the same.
              </p>
              <p>
                If you&apos;re looking for a firm that treats financial discipline as a checkbox, we&apos;re not the right fit. If you&apos;re looking for a partner that treats every file like it matters, we should talk.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mt-10 text-xl font-bold text-white">
              Selective by design. Trusted by standard.
            </p>
            <div className="mt-10">
              <Link href="#contact" className="btn-primary">
                Let&apos;s Talk
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

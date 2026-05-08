"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function Expertise() {
  return (
    <section className="section-padding bg-brand-black relative">
      {/* Background graphic */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <div className="relative">
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">The School of Practice</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-8">
                Where Standards <br />
                Become <br />
                <span className="text-brand-red">Second Nature.</span>
              </h2>

              <div className="w-16 h-[2px] bg-brand-red" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-8 text-brand-accent/60 text-lg leading-relaxed font-medium">
              <p>
                Our team is built around practitioners — not theorists. Every engagement is led by professionals with hands-on experience in real-world accounting, audit, and compliance work.
              </p>
              <p>
                We invest continuously in our team&apos;s expertise across IFRS, VAT, Corporate Tax, and international audit standards. The result: a team that knows the standards because they apply them every day.
              </p>
              <div className="pt-4">
                <p className="text-white font-black text-lg uppercase tracking-widest border-l-2 border-brand-red pl-8 py-4 bg-brand-dark/50">
                  Practice is <br />
                  the proof.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/10 to-transparent" />
    </section>
  );
}

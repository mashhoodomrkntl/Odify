"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <section id="about" className="section-padding bg-brand-black relative">
      {/* Decorative background element contained to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-dark/50 -skew-x-12 translate-x-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <ScrollReveal>
            <div className="relative">
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">
                {t("subtitle")}
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase">
                {t("title1")} <br />
                {t("title2")}
              </h2>

              <div className="mt-12 h-[1px] w-24 bg-brand-red" />
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8 text-brand-accent/70 text-lg leading-relaxed font-medium">
              <p>
                {t("desc1")}
              </p>
              <p>
                {t("desc2")}
              </p>
              <div className="pt-4">
                <p className="text-white font-bold text-xl leading-snug border-l-2 border-brand-red pl-8 py-2 bg-brand-dark/30 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-8">
                  "{t("quote1")} <br />
                  <span className="text-brand-red">{t("quote2")}</span>"
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

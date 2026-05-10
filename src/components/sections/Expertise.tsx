"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { useTranslations } from "next-intl";

export default function Expertise() {
  const t = useTranslations("Expertise");
  return (
    <section className="section-padding bg-brand-black relative">
      {/* Background graphic */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <div className="relative">
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">{t("subtitle")}</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-8">
                {t("title1")} <br />
                {t("title2")} <br />
                <span className="text-brand-red">{t("title3")}</span>
              </h2>

              <div className="w-16 h-[2px] bg-brand-red" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-8 text-brand-accent/60 text-lg leading-relaxed font-medium">
              <p>
                {t("desc1")}
              </p>
              <p>
                {t("desc2")}
              </p>
              <div className="pt-4">
                <p className="text-white font-black text-lg uppercase tracking-widest border-l-2 border-brand-red pl-8 py-4 bg-brand-dark/50 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-8">
                  {t("quote1")} <br />
                  {t("quote2")}
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

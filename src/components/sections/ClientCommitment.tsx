"use client";

import { Link } from "@/i18n/routing";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslations } from "next-intl";

export default function ClientCommitment() {
  const t = useTranslations("ClientCommitment");
  return (
    <section className="section-padding bg-brand-dark text-white relative">
      {/* Background graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,4,41,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">{t("subtitle")}</span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-12">
              {t("title1")} <br />
              <span className="text-brand-red">{t("title2")}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8 text-brand-accent/50 leading-relaxed text-xl font-medium max-w-2xl mx-auto">
              <p>
                {t("desc1")}
              </p>
              <p>
                {t("desc2")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 flex flex-col items-center gap-12">
              <p className="text-[12px] font-black uppercase tracking-[0.4em] text-white">
                {t("slogan1")} <span className="text-brand-red">{t("slogan2")}</span>
              </p>
              <Link href="#contact" className="btn-primary">
                {t("button")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Link } from "@/i18n/routing";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Calculator, FileCheck, BarChart3, Shield, Zap, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const services = [
  {
    icon: <Calculator size={32} />,
    titleKey: "srv1_title",
    descKey: "srv1_desc",
    href: "/services/accounting-bookkeeping",
  },
  {
    icon: <BookOpen size={32} />,
    titleKey: "srv2_title",
    descKey: "srv2_desc",
    href: "/services/taxation-advisory",
  },
  {
    icon: <FileCheck size={32} />,
    titleKey: "srv3_title",
    descKey: "srv3_desc",
    href: "/services/audit-management",
  },
  {
    icon: <BarChart3 size={32} />,
    titleKey: "srv4_title",
    descKey: "srv4_desc",
    href: "/services/financial-statements",
  },
  {
    icon: <Shield size={32} />,
    titleKey: "srv5_title",
    descKey: "srv5_desc",
    href: "/services/compliance-advisory",
  },
  {
    icon: <Zap size={32} />,
    titleKey: "srv6_title",
    descKey: "srv6_desc",
    href: "/services/e-invoicing",
  },
];

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="section-padding bg-brand-dark relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,4,41,0.02)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(217,4,41,0.02)_1.5px,transparent_1.5px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-24">
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">
              {t("subtitle")}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase">
              {t("title1")} <br />
              <span className="text-brand-red">{t("title2")}</span>
            </h2>
            <p className="mt-8 text-brand-accent/50 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              {t("desc")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, i) => (
            <ScrollReveal key={service.titleKey} delay={i * 0.1} className="h-full">
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full bg-brand-black/40 backdrop-blur-sm border border-white/5 p-8 transition-all duration-500 hover:bg-brand-red/[0.03] hover:border-brand-red/20 overflow-hidden">
                  {/* Hover effect corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-brand-red opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-8 group-hover:h-8 rtl:right-auto rtl:left-0 rtl:border-r-0 rtl:border-l-2" />

                  <div className="text-brand-red mb-10 transition-transform group-hover:scale-110 duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-red transition-colors uppercase tracking-widest">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-brand-accent/40 text-sm leading-relaxed mb-10 font-medium">
                    {t(service.descKey)}
                  </p>

                  <div className="flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 group-hover:gap-5 group-hover:text-brand-red">
                    {t("explore")} <ArrowRight size={14} className="rtl:rotate-180" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

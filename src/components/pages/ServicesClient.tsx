"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight, Calculator, FileText, BarChart3, ShieldCheck, ClipboardCheck, Receipt } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslations } from "next-intl";

const services = [
  {
    titleKey: "accounting_title",
    descKey: "accounting_desc",
    icon: Calculator,
    href: "/services/accounting-bookkeeping"
  },
  {
    titleKey: "taxation_title",
    descKey: "taxation_desc",
    icon: FileText,
    href: "/services/taxation-advisory"
  },
  {
    titleKey: "audit_title",
    descKey: "audit_desc",
    icon: ShieldCheck,
    href: "/services/audit-management"
  },
  {
    titleKey: "financial_title",
    descKey: "financial_desc",
    icon: BarChart3,
    href: "/services/financial-statements"
  },
  {
    titleKey: "compliance_title",
    descKey: "compliance_desc",
    icon: ClipboardCheck,
    href: "/services/compliance-advisory"
  },
  {
    titleKey: "einvoicing_title",
    descKey: "einvoicing_desc",
    icon: Receipt,
    href: "/services/e-invoicing"
  }
];

export default function ServicesClient() {
  const t = useTranslations("ServicesPage");
  return (
    <main className="bg-brand-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,4,41,0.05)_0%,transparent_50%)]" />
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)'
          }}
        />
        <div className="container-custom relative z-10 px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">{t("hero.subtitle")}</span>
            <h1 className="text-3xl md:text-6xl font-black text-white leading-tight uppercase mb-8 tracking-tighter">
              {t("hero.title1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/50">{t("hero.title2")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-accent/60 max-w-3xl mx-auto leading-relaxed font-medium">
              {t("hero.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.titleKey} delay={i * 0.1}>
                <div className="group relative bg-brand-dark/30 border border-white/5 p-12 hover:border-brand-red/30 transition-all duration-700 h-full flex flex-col">
                  <div className="mb-10 text-brand-red transform group-hover:scale-110 transition-transform duration-500 origin-left">
                    <service.icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase mb-6 tracking-tight leading-tight group-hover:text-brand-red transition-colors duration-500">
                    {t(`services.${service.titleKey}`)}
                  </h3>
                  <p className="text-brand-accent/40 text-base leading-relaxed font-medium mb-12 flex-grow">
                    {t(`services.${service.descKey}`)}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-brand-red transition-colors"
                  >
                    {t("protocol_btn")} <ArrowRight size={14} className="rtl:rotate-180 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform" />
                  </Link>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-brand-red group-hover:w-full transition-all duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Banner */}
      <section className="py-32 bg-brand-dark/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-fixed bg-center opacity-[0.03] grayscale" />
        <div className="container-custom px-6 md:px-12 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-10 leading-tight">
              {t("standards.title1")} <br />
              <span className="text-brand-red">{t("standards.title2")}</span>
            </h2>
            <p className="text-brand-accent/50 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              {t("standards.desc")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom px-6 md:px-12 text-center">
          <ScrollReveal>
            <span className="text-brand-red font-black text-[10px] tracking-[0.5em] uppercase mb-8 block">{t("cta.subtitle")}</span>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase mb-12">{t("cta.title")}</h2>
            <Link href="/contact" className="btn-primary !px-16 !py-6 inline-block">
              <span className="flex items-center gap-4">
                {t("cta.btn")} <ArrowRight size={20} className="rtl:rotate-180" />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

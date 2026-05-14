"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Globe, Gavel, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslations } from "next-intl";

export default function TaxationClient() {
  const t = useTranslations("Taxation");
  return (
    <main className="bg-brand-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-20 overflow-hidden border-b border-white/5 text-center">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/90 z-10" />
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1920&q=80')] bg-cover bg-center grayscale opacity-20"
          />
        </div>

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 z-10 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, #f7a8a8 1px, transparent 1px), linear-gradient(to bottom, #f7a8a8 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        <div className="container-custom relative z-20 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center mb-8">
              <span className="text-brand-red font-bold text-[10px] tracking-[0.6em] uppercase mb-4">{t("hero.subtitle")}</span>
              <div className="w-12 h-[1px] bg-brand-red/50" />
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] mb-8 tracking-tighter">
              {t("hero.title1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">{t("hero.title2")}</span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-accent/60 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              {t("hero.desc_p1")} <span className="text-white">{t("hero.desc_highlight")}</span>{t("hero.desc_p2")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-10 opacity-30">
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-white tracking-tighter uppercase">{t("hero.stat1_title")}</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-brand-red">{t("hero.stat1_sub")}</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-white tracking-tighter uppercase">{t("hero.stat2_title")}</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-brand-red">{t("hero.stat2_sub")}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Technical Line */}
        <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-white/5 bg-brand-black/50 backdrop-blur-xl z-30 flex items-center">
          <div className="container-custom flex items-center justify-between px-6 md:px-12 opacity-30">
            <div className="flex gap-12">
              <div className="text-[8px] font-bold text-white uppercase tracking-[0.4em]">{t("hero.tag1")}</div>
              <div className="text-[8px] font-bold text-white uppercase tracking-[0.4em]">{t("hero.tag2")}</div>
            </div>
            <div className="text-[8px] font-mono text-brand-red uppercase tracking-widest">{t("hero.tag3")}</div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[1px] bg-brand-red" />
                  <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase">{t("scope.subtitle")}</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-10 tracking-tighter leading-[0.9]">
                  {t("scope.title1")} <br />
                  <span className="text-brand-red">{t("scope.title2")}</span>
                </h2>
                
                <p className="text-brand-accent/70 text-xl leading-relaxed font-medium mb-12 max-w-2xl border-l-2 border-brand-red/20 pl-8 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-8">
                  {t("scope.desc")}
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-8 bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all">
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-brand-red group-hover:h-full transition-all duration-500 rtl:left-auto rtl:right-0" />
                    <FileText className="text-brand-red mb-6" size={28} />
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">{t("scope.feat1_title")}</h4>
                    <p className="text-xs text-brand-accent/50 leading-relaxed">{t("scope.feat1_desc")}</p>
                  </div>
                  <div className="p-8 bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all">
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-brand-red group-hover:h-full transition-all duration-500 rtl:left-auto rtl:right-0" />
                    <Globe className="text-brand-red mb-6" size={28} />
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">{t("scope.feat2_title")}</h4>
                    <p className="text-xs text-brand-accent/50 leading-relaxed">{t("scope.feat2_desc")}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="hidden lg:block lg:col-span-5 pt-20">
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-[4/5] bg-brand-dark overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
                  <div className="absolute inset-0 border border-white/10 z-20 group-hover:border-brand-red/30 transition-colors" />
                  <Image
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
                    alt="Taxation Compliance"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-black to-transparent z-10" />
                  <div className="absolute bottom-10 left-10 z-20 rtl:left-auto rtl:right-10">
                    <div className="text-brand-red font-black text-4xl tracking-tighter uppercase" dir="ltr">02</div>
                    <div className="text-white/40 text-[9px] font-bold uppercase tracking-widest">{t("scope.tag")}</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="section-padding bg-brand-dark/30">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block text-center">{t("deliver.subtitle")}</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-16">{t("deliver.title1")} <br />{t("deliver.title2")}</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} className="h-full">
              <div className="bg-brand-black border border-white/5 p-12 hover:border-brand-red/30 transition-all group h-full">
                <Gavel className="text-brand-red mx-auto mb-8" size={40} />
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">{t("deliver.feat1_title")}</h3>
                <p className="text-brand-accent/50 text-sm leading-relaxed">
                  {t("deliver.feat1_desc")}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="h-full">
              <div className="bg-brand-black border border-white/5 p-12 hover:border-brand-red/30 transition-all group h-full">
                <ShieldCheck className="text-brand-red mx-auto mb-8" size={40} />
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">{t("deliver.feat2_title")}</h3>
                <p className="text-brand-accent/50 text-sm leading-relaxed">
                  {t("deliver.feat2_desc")}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="h-full">
              <div className="bg-brand-black border border-white/5 p-12 hover:border-brand-red/30 transition-all group h-full">
                <FileText className="text-brand-red mx-auto mb-8" size={40} />
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">{t("deliver.feat3_title")}</h3>
                <p className="text-brand-accent/50 text-sm leading-relaxed">
                  {t("deliver.feat3_desc")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">{t("receive.subtitle")}</span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase">{t("receive.title")}</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {[
                "li1",
                "li2",
                "li3",
                "li4",
                "li5"
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex items-center gap-6 p-8 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                    <CheckCircle2 className="text-brand-red shrink-0" size={24} />
                    <span className="text-white text-lg font-medium">{t(`receive.${item}`)}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Odify */}
      <section className="py-32 bg-brand-dark/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">{t("why.subtitle")}</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase max-w-4xl mx-auto leading-tight mb-8">
              {t("why.title")}
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="text-brand-red font-black text-[10px] tracking-[0.5em] uppercase mb-8 block">{t("cta.subtitle")}</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-12 tracking-tighter">
              {t("cta.title1")} <br />{t("cta.title2")}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="btn-primary !px-12 !py-5">
                <span className="flex items-center gap-3">
                  {t("cta.btn1")} <ArrowRight size={18} className="rtl:rotate-180" />
                </span>
              </Link>
              <Link href="/services" className="btn-secondary !px-12 !py-5">
                {t("cta.btn2")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

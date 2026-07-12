"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, CheckCircle2, Shield, Target, Users, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslations } from "next-intl";

const principles = [
  {
    titleKey: "p1_title",
    descKey: "p1_desc",
    icon: Shield
  },
  {
    titleKey: "p2_title",
    descKey: "p2_desc",
    icon: Target
  },
  {
    titleKey: "p3_title",
    descKey: "p3_desc",
    icon: CheckCircle2
  },
  {
    titleKey: "p4_title",
    descKey: "p4_desc",
    icon: Users
  },
  {
    titleKey: "p5_title",
    descKey: "p5_desc",
    icon: Zap
  }
];

export default function AboutClient() {
  const t = useTranslations("AboutPage");
  return (
    <main className="bg-brand-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-40 pb-32 overflow-hidden border-b border-white/5">
        {/* Background Architectural Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/75 z-10" />
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center grayscale opacity-20"
          />
        </div>

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 z-10 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(247, 168, 168, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(247, 168, 168, 0.47) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Decorative Red Accents */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-20 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-[1px] bg-brand-red" />
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase">{t("hero.subtitle")}</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] uppercase mb-8 tracking-tighter">
              {t("hero.title1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/50">{t("hero.title2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-accent/50 max-w-2xl leading-relaxed font-medium mb-12">
              {t("hero.desc")}
            </p>

            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter">{t("hero.stat1")}</span>
                <span className="text-[8px] text-brand-red font-bold uppercase tracking-widest mt-1">{t("hero.stat1_sub")}</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span dir="ltr" className="text-2xl font-black text-white tracking-tighter">{t("hero.stat2")}</span>
                <span className="text-[8px] text-brand-red font-bold uppercase tracking-widest mt-1">{t("hero.stat2_sub")}</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter">{t("hero.stat3")}</span>
                <span className="text-[8px] text-brand-red font-bold uppercase tracking-widest mt-1">{t("hero.stat3_sub")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding border-t border-white/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">{t("story.subtitle")}</span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">{t("story.title")}</h2>
                <div className="space-y-6 text-brand-accent/70 text-lg leading-relaxed font-medium">
                  <p>
                    {t("story.p1")}
                  </p>
                  <p className="text-white border-l-2 border-brand-red pl-6 italic bg-white/[0.02] py-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-6">
                    {t("story.quote")}
                  </p>
                  <p>
                    {t("story.p2")}
                  </p>
                  <p>
                    {t("story.p3")}
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-red/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-square bg-brand-dark border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80')] bg-cover bg-center opacity-20 grayscale transition-transform duration-700 group-hover:scale-110" />
                  <div className="relative z-10 text-center p-12">
                    <div className="text-6xl font-black text-brand-red mb-4">{t("story.badge_value")}</div>
                    <div className="text-white font-bold uppercase tracking-widest text-sm">{t("story.badge_text")}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-brand-dark/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">{t("beliefs.subtitle")}</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase">{t("beliefs.title")}</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <ScrollReveal key={p.titleKey} delay={i * 0.1}>
                <div className="bg-brand-black border border-white/5 p-10 h-full group hover:border-brand-red/30 transition-all duration-500">
                  <p.icon className="text-brand-red mb-8" size={32} />
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{t(`principles.${p.titleKey}`)}</h3>
                  <p className="text-brand-accent/50 leading-relaxed text-sm font-medium">{t(`principles.${p.descKey}`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">{t("approach.subtitle")}</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">{t("approach.title")}</h2>
              <div className="space-y-8 text-brand-accent/70 text-lg leading-relaxed font-medium">
                <p>
                  {t("approach.p1")}
                </p>
                <p>
                  {t("approach.p2")}
                </p>
                <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
                  <div>
                    <div className="text-brand-red font-black text-2xl mb-2">{t("approach.step1_num")}</div>
                    <div className="text-white font-bold uppercase tracking-widest text-sm mb-4">{t("approach.step1_title")}</div>
                    <p className="text-sm">{t("approach.step1_desc")}</p>
                  </div>
                  <div>
                    <div className="text-brand-red font-black text-2xl mb-2">{t("approach.step2_num")}</div>
                    <div className="text-white font-bold uppercase tracking-widest text-sm mb-4">{t("approach.step2_title")}</div>
                    <p className="text-sm">{t("approach.step2_desc")}</p>
                  </div>
                  <div>
                    <div className="text-brand-red font-black text-2xl mb-2">{t("approach.step3_num")}</div>
                    <div className="text-white font-bold uppercase tracking-widest text-sm mb-4">{t("approach.step3_title")}</div>
                    <p className="text-sm">{t("approach.step3_desc")}</p>
                  </div>
                </div>
                <p>
                  {t("approach.p3")}
                </p>
                <p className="pt-8 text-white/40">{t("approach.p4")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-brand-dark/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-16">
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">{t("team.subtitle")}</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase">{t("team.title")}</h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <p className="text-brand-accent/70 text-lg leading-relaxed font-medium">
                {t("team.p1")}
              </p>
              <p className="mt-6 text-brand-accent/70 text-lg leading-relaxed font-medium">
                {t("team.p2")}
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Team Member 1 */}
              <ScrollReveal delay={0.2}>
                <div className="bg-brand-black border border-white/5 p-8 group hover:border-brand-red/30 transition-all duration-500">
                  <div className="aspect-square bg-brand-dark mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <div className="absolute inset-0 bg-brand-red/10 z-10" />
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                      alt="Jalib Juman"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-widest mb-1">{t("team.m1_name")}</h4>
                  <p className="text-brand-red text-[10px] font-black uppercase tracking-[0.3em]">{t("team.m1_role")}</p>
                </div>
              </ScrollReveal>
              {/* Team Member 2 */}
              <ScrollReveal delay={0.3}>
                <div className="bg-brand-black border border-white/5 p-8 group hover:border-brand-red/30 transition-all duration-500">
                  <div className="aspect-square bg-brand-dark mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <div className="absolute inset-0 bg-brand-red/10 z-10" />
                    <Image
                      src="https://images.unsplash.com/photo-1678483456295-6f8e206f5bf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="James John"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-widest mb-1">{t("team.m2_name")}</h4>
                  <p className="text-brand-red text-[10px] font-black uppercase tracking-[0.3em]">{t("team.m2_role")}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-18 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-[0.03] blur-[100px] pointer-events-none" />
            <ScrollReveal>
              <div className="max-w-3xl">
                <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">{t("clients.subtitle")}</span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">{t("clients.title")}</h2>
                <p className="text-brand-accent/70 text-lg mb-10 leading-relaxed font-medium">
                  {t("clients.desc")}
                </p>
                <div className="grid sm:grid-cols-2 gap-6 text-sm text-white/80 mb-12">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    <span>{t("clients.li1")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    <span>{t("clients.li2")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    <span>{t("clients.li3")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    <span>{t("clients.li4")}</span>
                  </div>
                </div>
                <p className="text-brand-red font-black uppercase tracking-[0.3em] text-sm">{t("clients.slogan")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-24 bg-brand-red">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="text-white/60 font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">{t("promise.subtitle")}</span>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase mb-6 tracking-tight px-6">
              {t("promise.title")}
            </h2>
            <p className="text-white/80 font-bold uppercase tracking-[0.5em] text-[9px]">{t("promise.tagline")}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-12">{t("cta.title")}</h2>
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

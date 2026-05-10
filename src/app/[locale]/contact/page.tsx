"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
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
            className="max-w-4xl mx-auto"
          >
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">{t("hero.subtitle")}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase mb-8 tracking-tighter">
              {t("hero.title1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/50">{t("hero.title2")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-accent/60 leading-relaxed font-medium mx-auto">
              {t("hero.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="container-custom px-6 md:px-0">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Left: Contact Form */}
            <ScrollReveal>
              <div className="bg-brand-dark/30 backdrop-blur-xl border border-white/5 p-8 md:p-8 relative group">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-red opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <h2 className="text-3xl font-black text-white uppercase mb-12 tracking-tight">{t("form.title")}</h2>

                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">{t("form.name_label")}</label>
                      <input
                        type="text"
                        className="w-full bg-brand-black/40 border border-white/5 border-b-white/10 px-4 py-4 text-white focus:border-brand-red transition-all outline-hidden text-sm tracking-widest font-bold placeholder:text-white/20"
                        placeholder={t("form.name_placeholder")}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black tracking-widest text-brand-accent/30">{t("form.email_label")}</label>
                      <input
                        type="email"
                        className="w-full bg-brand-black/40 border border-white/5 border-b-white/10 px-4 py-4 text-white focus:border-brand-red transition-all outline-hidden text-sm uppercase tracking-widest font-bold placeholder:text-white/20"
                        placeholder={t("form.email_placeholder")}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">{t("form.subject_label")}</label>
                    <select className="w-full bg-brand-black/40 border border-white/5 border-b-white/10 px-4 py-4 text-white focus:border-brand-red transition-all outline-hidden text-sm uppercase tracking-widest font-bold appearance-none">
                      <option>{t("form.opt1")}</option>
                      <option>{t("form.opt2")}</option>
                      <option>{t("form.opt3")}</option>
                      <option>{t("form.opt4")}</option>
                      <option>{t("form.opt5")}</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">{t("form.message_label")}</label>
                    <textarea
                      rows={4}
                      className="w-full bg-brand-black/40 border border-white/5 border-b-white/10 px-4 py-4 text-white focus:border-brand-red transition-all outline-hidden text-sm tracking-widest font-bold resize-none placeholder:text-white/20"
                      placeholder={t("form.message_placeholder")}
                    ></textarea>
                  </div>

                  <button className="btn-primary w-full group !py-6">
                    <span className="flex items-center justify-center gap-4">
                      {t("form.submit")} <Send size={18} className="rtl:rotate-180 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Right: Contact Info & Map */}
            <div className="space-y-16">
              <ScrollReveal delay={0.2}>
                <div className="grid gap-12 sm:grid-cols-2">
                  <div className="space-y-4">
                    <span className="text-brand-red font-black text-[10px] tracking-[0.4em] uppercase">{t("info.email_label")}</span>
                    <a href="mailto:hello@odify.com" className="block text-2xl font-bold text-white hover:text-brand-red transition-colors tracking-tight rtl:text-right text-left" dir="ltr">
                      hello@odify.com
                    </a>
                  </div>
                  <div className="space-y-4">
                    <span className="text-brand-red font-black text-[10px] tracking-[0.4em] uppercase">{t("info.phone_label")}</span>
                    <a href="tel:+919048010605" className="block text-2xl font-bold text-white hover:text-brand-red transition-colors tracking-tight rtl:text-right text-left" dir="ltr">
                      +91 90480 10605
                    </a>
                  </div>
                  <div className="sm:col-span-2 space-y-4">
                    <span className="text-brand-red font-black text-[10px] tracking-[0.4em] uppercase">{t("info.office_label")}</span>
                    <p className="text-2xl font-bold text-white leading-tight tracking-tight">
                      {t("info.office_value1")} <br />
                      {t("info.office_value2")}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Google Map View */}
              <ScrollReveal delay={0.4}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-brand-red/10 blur-xl " />
                  <div className="relative aspect-video bg-brand-dark border border-white/5  duration-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4634587602777!2d75.99996417504512!3d11.003812189159133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5006cffe6c7%3A0x67ad494f13a11d61!2sOdify!5e0!3m2!1sen!2sin!4v1778271358450!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"

                    ></iframe>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Selective Partner Section */}
      <section className="section-padding border-t border-white/5 bg-brand-dark/20">
        <div className="container-custom px-6 md:px-12 text-center">
          <ScrollReveal>
            <span className="text-brand-red font-black text-[10px] tracking-[0.5em] uppercase mb-8 block">{t("standard.subtitle")}</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">{t("standard.title")}</h2>
            <p className="text-brand-accent/40 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              {t("standard.desc")}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

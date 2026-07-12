"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-28 pb-20 overflow-hidden bg-brand-black">
      {/* Background with Ambient Red Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-dark to-brand-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Texture/Grid Overlay */}
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

      {/* Animated Red Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent z-20"
      />

      <div className="relative z-10 container-custom px-4 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block text-brand-red font-bold text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase mb-8 border-b border-brand-red/30 pb-2">
            {t("subtitle")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8"
        >
          {t("title1")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/50 uppercase">{t("title2")}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-6 px-4 md:px-8 py-3 border border-white/5 bg-white/[0.02] backdrop-blur-sm mb-10 mx-auto"
        >
          <span className="text-brand-red font-bold text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap">{t("feature1")}</span>
          <div className="hidden md:block w-[1px] h-4 bg-white/10" />
          <span className="text-white font-bold text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap">{t("feature2")}</span>
          <div className="hidden md:block w-[1px] h-4 bg-white/10" />
          <span className="text-brand-red font-bold text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap">{t("feature3")}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base md:text-xl text-brand-accent/60 max-w-2xl mx-auto leading-relaxed mb-12 md:mb-16 font-medium"
        >
          <span className="text-white">{t("tagline")}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"
        >
          <Link href="/services" className="btn-primary group !px-8 md:!px-10 !py-3 md:!py-4 text-xs md:text-sm">
            <span className="flex items-center gap-3">
              {t("explore")} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="btn-secondary !px-8 md:!px-10 !py-3 md:!py-4 text-xs md:text-sm"
          >
            {t("contact")}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden sm:flex"
      >
        {/* <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Scroll</span> */}
        <div className="w-[1px] h-8 md:h-12 bg-linear-to-b from-brand-red to-transparent" />
      </motion.div>

      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-brand-accent/20 hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-brand-accent/20 hidden lg:block" />
    </section>
  );
}

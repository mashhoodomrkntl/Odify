"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

import Image from "next/image";

const navLinks = [
  { key: "about", href: "/about" },
  { key: "services", href: "/services", hasDropdown: true },
  { key: "approach", href: "/#approach" },
  { key: "industries", href: "/#industries" },
  { key: "contact", href: "/contact" },
];

const services = [
  { nameKey: "accounting", href: "/services/accounting-bookkeeping" },
  { nameKey: "taxation", href: "/services/taxation-advisory" },
  { nameKey: "audit", href: "/services/audit-management" },
  { nameKey: "compliance", href: "/services/compliance-advisory" },
  { nameKey: "financial", href: "/services/financial-statements" },
  { nameKey: "einvoicing", href: "/services/e-invoicing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Navbar");

  const switchLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-brand-black/80 backdrop-blur-xl border-b border-brand-dark/50 shadow-2xl"
          : "bg-transparent"
          }`}
      >
        <nav className="container-custom flex items-center justify-between px-6 md:px-12 h-20" aria-label="Main navigation">
          <Link href="/" className="relative z-10 flex items-center gap-1" aria-label="Odify Home">
            <Image
              src="/Odify logo-01.png"
              alt="Odify Logo"
              width={120}
              height={48}
              className="h-10 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.key}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isActive(link.href) ? "text-brand-red" : "text-white/80 hover:text-brand-red"}`}
                  >
                    {t(link.key)}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-brand-red" : ""}`} />
                  </Link>
                  {isActive(link.href) && (
                    <motion.div layoutId="nav-active" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-red" />
                  )}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-brand-black/95 backdrop-blur-2xl rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-red/20 overflow-hidden"
                      >
                        <div className="p-2">
                          {services.map((service) => (
                            <Link
                              key={service.nameKey}
                              href={service.href}
                              className="block px-4 py-3 text-[11px] uppercase tracking-wider text-white/70 hover:bg-brand-red/10 hover:text-brand-red transition-all font-bold"
                              onClick={() => setServicesOpen(false)}
                            >
                              {t(`services_dropdown.${service.nameKey}`)}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div key={link.key} className="relative group">
                  <Link
                    href={link.href}
                    className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isActive(link.href) ? "text-brand-red" : "text-white/80 hover:text-brand-red"}`}
                  >
                    {t(link.key)}
                  </Link>
                  {isActive(link.href) && (
                    <motion.div layoutId="nav-active" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-red" />
                  )}
                </div>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={switchLanguage}
              className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 text-white/80 hover:text-brand-red"
              aria-label="Toggle language"
            >
              <Globe size={14} className="text-brand-red/80" />
              <span className="min-w-[60px] text-center">{locale === 'en' ? t('switch_ar') : t('switch_en')}</span>
            </button>
            <Link
              href="/contact"
              className="btn-primary"
            >
              {t('consult')}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-black"
          >
            <div className="flex flex-col justify-center items-center h-full gap-6 px-8">
              {navLinks.map((link, i) =>
                link.hasDropdown ? (
                  <div key={link.key} className="text-center">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`text-2xl font-bold flex items-center gap-2 uppercase tracking-widest ${isActive(link.href) ? "text-brand-red" : "text-white"}`}
                    >
                      {t(link.key)} <ChevronDown size={20} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </motion.button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-3 space-y-2 overflow-hidden"
                        >
                          {services.map((s) => (
                            <Link
                              key={s.nameKey}
                              href={s.href}
                              className="block text-sm text-white/60 hover:text-brand-red transition-colors uppercase tracking-wider"
                              onClick={() => setMobileOpen(false)}
                            >
                              {t(`services_dropdown.${s.nameKey}`)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-2xl font-bold transition-colors uppercase tracking-widest ${isActive(link.href) ? "text-brand-red" : "text-white hover:text-brand-red"}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {t(link.key)}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex flex-col items-center gap-6"
              >
                <button
                  onClick={switchLanguage}
                  className="flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase transition-colors text-white hover:text-brand-red"
                >
                  <Globe size={18} className="text-brand-red" />
                  <span>{locale === 'en' ? t('switch_ar') : t('switch_en')}</span>
                </button>
                <Link href="/contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
                  {t('consult')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

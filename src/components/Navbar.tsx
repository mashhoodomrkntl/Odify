"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
  { name: "Taxation Advisory & Filing", href: "/services/taxation-advisory" },
  { name: "Audit Management", href: "/services/audit-management" },
  { name: "Financial Statement Preparation", href: "/services/financial-statements" },
  { name: "Compliance & Advisory", href: "/services/compliance-advisory" },
  { name: "E-Invoicing & Reporting", href: "/services/e-invoicing" },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Approach", href: "#approach" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom flex items-center justify-between px-6 md:px-12 h-20" aria-label="Main navigation">
          <Link href="/" className="relative z-10 flex items-center gap-1" aria-label="Odify Home">
            <Image
              src="/Odify White.png"
              alt="Odify Logo"
              width={120}
              height={48}
              className={`h-10 w-auto object-contain transition-all duration-300 ${scrolled ? "hidden" : "block"}`}
              priority
            />
            <Image
              src="/Odify Red-Photoroom.png"
              alt="Odify Logo"
              width={120}
              height={48}
              className={`h-10 w-auto object-contain transition-all duration-300 ${scrolled ? "block" : "hidden"}`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-semibold tracking-wide uppercase transition-colors ${
                      scrolled ? "text-brand-black hover:text-brand-red" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        <div className="p-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-3 text-sm text-brand-black hover:bg-brand-red/5 hover:text-brand-red rounded-md transition-colors font-medium"
                              onClick={() => setServicesOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors ${
                    scrolled ? "text-brand-black hover:text-brand-red" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact"
              className={`btn-primary ${!scrolled ? "!bg-white !text-brand-red hover:!bg-gray-100" : ""}`}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative z-10 p-2 ${scrolled || mobileOpen ? "text-brand-black" : "text-white"}`}
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
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="flex flex-col justify-center items-center h-full gap-6 px-8">
              {navLinks.map((link, i) =>
                link.hasDropdown ? (
                  <div key={link.name} className="text-center">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="text-2xl font-bold text-brand-black flex items-center gap-2"
                    >
                      Services <ChevronDown size={20} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
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
                              key={s.name}
                              href={s.href}
                              className="block text-sm text-gray-600 hover:text-brand-red transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {s.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-bold text-brand-black hover:text-brand-red transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link href="#contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

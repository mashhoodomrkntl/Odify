"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, Layout, LineChart, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AccountingPage() {
  return (
    <main className="bg-brand-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-20 overflow-hidden border-b border-white/5 text-center">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/90 z-10" />
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165833767-027ffea7025c?w=1920&q=80')] bg-cover bg-center grayscale opacity-20"
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
              <span className="text-brand-red font-bold text-[10px] tracking-[0.6em] uppercase mb-4">Accounting & Bookkeeping</span>
              <div className="w-12 h-[1px] bg-brand-red/50" />
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] mb-8 tracking-tighter">
              Accounting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">That Holds Up.</span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-accent/60 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              Clean books. Clear numbers. <span className="text-white">Consistent reporting</span>. We maintain the discipline that makes every financial decision possible.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-10 opacity-30">
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-white tracking-tighter uppercase">Daily</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-brand-red">Reconciliation</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-white tracking-tighter uppercase">Real-Time</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-brand-red">Visibility</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Technical Line */}
        <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-white/5 bg-brand-black/50 backdrop-blur-xl z-30 flex items-center">
          <div className="container-custom flex items-center justify-between px-6 md:px-12 opacity-30">
            <div className="flex gap-12">
              <div className="text-[8px] font-bold text-white uppercase tracking-[0.4em]">Accounting Discipline // Alpha Unit</div>
              <div className="text-[8px] font-bold text-white uppercase tracking-[0.4em]">Ledger Integrity: Verified</div>
            </div>
            <div className="text-[8px] font-mono text-brand-red uppercase tracking-widest">Est. 2024 // Advisory Protocol Alpha</div>
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
                  <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase">The Scope of Work</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-10 tracking-tighter leading-[0.9]">
                  Foundation of <br />
                  <span className="text-brand-red">Financial Discipline.</span>
                </h2>
                
                <p className="text-brand-accent/70 text-xl leading-relaxed font-medium mb-12 max-w-2xl border-l-2 border-brand-red/20 pl-8">
                  We manage the day-to-day financial recording, reconciliation, and reporting that keeps your business running cleanly. From transaction entry to month-end close, we maintain the discipline that makes every other financial decision possible.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-8 bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all">
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-brand-red group-hover:h-full transition-all duration-500" />
                    <Database className="text-brand-red mb-6" size={28} />
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Meticulous Recording</h4>
                    <p className="text-xs text-brand-accent/50 leading-relaxed">Systematic entry and categorization of every business transaction, ensuring zero data leakage.</p>
                  </div>
                  <div className="p-8 bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all">
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-brand-red group-hover:h-full transition-all duration-500" />
                    <ShieldCheck className="text-brand-red mb-6" size={28} />
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Ledger Reconciliation</h4>
                    <p className="text-xs text-brand-accent/50 leading-relaxed">Rigorous cross-verification of bank, vendor, and internal accounts to ensure books reflect reality.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="hidden lg:block lg:col-span-5 pt-20">
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-[4/5] bg-brand-dark overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
                  <div className="absolute inset-0 border border-white/10 z-20 group-hover:border-brand-red/30 transition-colors" />
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                    alt="Accounting Discipline"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-black to-transparent z-10" />
                  <div className="absolute bottom-10 left-10 z-20">
                    <div className="text-brand-red font-black text-4xl tracking-tighter uppercase">01</div>
                    <div className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Protocol Reference</div>
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
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block text-center">How We Deliver</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-16">Platform Agnostic. <br />Process Driven.</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} className="h-full">
              <div className="bg-brand-black border border-white/5 p-12 hover:border-brand-red/30 transition-all group h-full">
                <Layout className="text-brand-red mx-auto mb-8" size={40} />
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">Tech Integrated</h3>
                <p className="text-brand-accent/50 text-sm leading-relaxed">
                  We work on QuickBooks, Zoho Books, Tally, and other leading platforms — adapting to your existing systems.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="h-full">
              <div className="bg-brand-black border border-white/5 p-12 hover:border-brand-red/30 transition-all group h-full">
                <ShieldCheck className="text-brand-red mx-auto mb-8" size={40} />
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">Structured Workflows</h3>
                <p className="text-brand-accent/50 text-sm leading-relaxed">
                  Every engagement includes clear documentation and rigorous, repeatable review cycles.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="h-full">
              <div className="bg-brand-black border border-white/5 p-12 hover:border-brand-red/30 transition-all group h-full">
                <LineChart className="text-brand-red mx-auto mb-8" size={40} />
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">Regular Reporting</h3>
                <p className="text-brand-accent/50 text-sm leading-relaxed">
                  Daily, weekly, or monthly updates that keep you informed without the noise.
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
                <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">What You Receive</span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase">The Deliverables.</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {[
                "Accurate, audit-ready books maintained on a daily, weekly, or monthly basis",
                "Bank, vendor, and intercompany reconciliations",
                "Management reports that actually inform decisions",
                "Year-end accounts, ready for audit or filing",
                "A single point of contact who knows your business"
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex items-center gap-6 p-8 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                    <CheckCircle2 className="text-brand-red shrink-0" size={24} />
                    <span className="text-white text-lg font-medium">{item}</span>
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
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">Why Odify</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase max-w-4xl mx-auto leading-tight mb-8">
              Because clean books aren&apos;t just compliance. They&apos;re the foundation of every confident decision a business makes.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="text-brand-red font-black text-[10px] tracking-[0.5em] uppercase mb-8 block">Ready to start?</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-12 tracking-tighter">
              Accounting Built <br />For Ambition.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="btn-primary !px-12 !py-5">
                <span className="flex items-center gap-3">
                  Talk to Our Accounting Team <ArrowRight size={18} />
                </span>
              </Link>
              <Link href="/services" className="btn-secondary !px-12 !py-5">
                All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

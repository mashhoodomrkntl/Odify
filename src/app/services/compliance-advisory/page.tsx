"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck, Radar, ShieldAlert, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CompliancePage() {
  return (
    <main className="bg-brand-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-20 overflow-hidden border-b border-white/5 text-center">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/90 z-10" />
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')] bg-cover bg-center grayscale opacity-20"
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
              <span className="text-brand-red font-bold text-[10px] tracking-[0.6em] uppercase mb-4">Compliance Advisory</span>
              <div className="w-12 h-[1px] bg-brand-red/50" />
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] mb-8 tracking-tighter">
              Governance. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">Without Complexity.</span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-accent/60 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              Regulatory support, <span className="text-white">internal controls</span>, and ongoing advisory.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-10 opacity-30">
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-white tracking-tighter uppercase">IFRS</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-brand-red">Global Framework</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-white tracking-tighter uppercase">100%</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-brand-red">Governance Scaling</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Technical Line */}
        <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-white/5 bg-brand-black/50 backdrop-blur-xl z-30 flex items-center">
          <div className="container-custom flex items-center justify-between px-6 md:px-12 opacity-30">
            <div className="flex gap-12">
              <div className="text-[8px] font-bold text-white uppercase tracking-[0.4em]">Compliance Advisory // Epsilon Unit</div>
              <div className="text-[8px] font-bold text-white uppercase tracking-[0.4em]">Regulatory Sync: Optimal</div>
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
                  Built-In <br />
                  <span className="text-brand-red">Compliance Assurance.</span>
                </h2>
                
                <p className="text-brand-accent/70 text-xl leading-relaxed font-medium mb-12 max-w-2xl border-l-2 border-brand-red/20 pl-8">
                  We help businesses build and maintain compliance frameworks that hold up under scrutiny. From regulatory filings to internal control reviews, we identify gaps before they become problems and structure solutions that scale with your business.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-8 bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all">
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-brand-red group-hover:h-full transition-all duration-500" />
                    <Radar className="text-brand-red mb-6" size={28} />
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Gap Analysis</h4>
                    <p className="text-xs text-brand-accent/50 leading-relaxed">Identifying regulatory and operational gaps before they become liabilities, ensuring preemptive compliance.</p>
                  </div>
                  <div className="p-8 bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all">
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-brand-red group-hover:h-full transition-all duration-500" />
                    <ShieldAlert className="text-brand-red mb-6" size={28} />
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Internal Controls</h4>
                    <p className="text-xs text-brand-accent/50 leading-relaxed">Designing and reviewing internal governance protocols to strengthen financial integrity and reporting accuracy.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="hidden lg:block lg:col-span-5 pt-20">
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-[4/5] bg-brand-dark overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
                  <div className="absolute inset-0 border border-white/10 z-20 group-hover:border-brand-red/30 transition-colors" />
                  <Image
                    src="https://images.unsplash.com/photo-1521791136364-798a7bc0d262?w=800&q=80"
                    alt="Compliance Framework"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-black to-transparent z-10" />
                  <div className="absolute bottom-10 left-10 z-20">
                    <div className="text-brand-red font-black text-4xl tracking-tighter uppercase">05</div>
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
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-16">Embedded. <br />Independent.</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} className="h-full">
              <div className="bg-brand-black border border-white/5 p-12 hover:border-brand-red/30 transition-all group h-full">
                <TrendingUp className="text-brand-red mx-auto mb-8" size={40} />
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">Embedded Extension</h3>
                <p className="text-brand-accent/50 text-sm leading-relaxed">
                  We work as an extension of your finance function — embedded enough to understand your operations.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="h-full">
              <div className="bg-brand-black border border-white/5 p-12 hover:border-brand-red/30 transition-all group h-full">
                <ShieldAlert className="text-brand-red mx-auto mb-8" size={40} />
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">Critical Challenge</h3>
                <p className="text-brand-accent/50 text-sm leading-relaxed">
                  Independent enough to challenge your operations when needed to protect the integrity of your business.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="h-full">
              <div className="bg-brand-black border border-white/5 p-12 hover:border-brand-red/30 transition-all group h-full">
                <FileCheck className="text-brand-red mx-auto mb-8" size={40} />
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">Scalable Solutions</h3>
                <p className="text-brand-accent/50 text-sm leading-relaxed">
                  We structure solutions that grow with your business, ensuring compliance never lags behind ambition.
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
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Deliverables.</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {[
                "Regulatory compliance reviews and filings",
                "Internal control assessments and recommendations",
                "Policy and procedure documentation",
                "Ongoing advisory on governance, risk, and reporting",
                "Custom compliance dashboards and reporting"
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
              Because good compliance isn&apos;t reactive. It&apos;s built in.
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
              Governance <br />Without Complexity.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="btn-primary !px-12 !py-5">
                <span className="flex items-center gap-3">
                  Strengthen Your Compliance <ArrowRight size={18} />
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

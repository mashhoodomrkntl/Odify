"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Target, Users, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const principles = [
  {
    title: "Standards Are Non-Negotiable",
    desc: "International benchmarks exist for a reason. We meet them on every engagement — without exception, without excuses.",
    icon: Shield
  },
  {
    title: "Practice Beats Theory",
    desc: "Every file is led by experienced practitioners. We hire people who know the standards because they apply them every day, not because they read about them.",
    icon: Target
  },
  {
    title: "Quality Is Not a Variable",
    desc: "A small client gets the same scrutiny as a large one. The standard is the standard.",
    icon: CheckCircle2
  },
  {
    title: "Selective by Design",
    desc: "We choose our clients as carefully as our clients choose us. This is how we protect the quality of every engagement.",
    icon: Users
  },
  {
    title: "Consistency Is the Real Promise",
    desc: "Excellence isn't a one-off. It's what we deliver, every file, every cycle, every time.",
    icon: Zap
  }
];

export default function AboutPage() {
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
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase">Built for Performance</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] uppercase mb-8 tracking-tighter">
              Built on Standards. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/50">Driven by Performance.</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-accent/50 max-w-2xl leading-relaxed font-medium mb-12">
              A corporate advisory firm built for businesses that take finance seriously.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter">IFRS</span>
                <span className="text-[8px] text-brand-red font-bold uppercase tracking-widest mt-1">Global Standard</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter">100%</span>
                <span className="text-[8px] text-brand-red font-bold uppercase tracking-widest mt-1">Precision Rate</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter">GCC</span>
                <span className="text-[8px] text-brand-red font-bold uppercase tracking-widest mt-1">UAE, KSA, Oman</span>
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
                <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">Why Odify Exists.</h2>
                <div className="space-y-6 text-brand-accent/70 text-lg leading-relaxed font-medium">
                  <p>
                    Most businesses don't fail because they lack ambition. They fail because their numbers don't tell the truth, their compliance lags behind, or their financial operations can't keep up with their growth.
                  </p>
                  <p className="text-white border-l-2 border-brand-red pl-6 italic bg-white/[0.02] py-4">
                    Odify was built to fix that.
                  </p>
                  <p>
                    We are a corporate advisory firm specialising in accounting, taxation, audit, and compliance — designed for businesses that need precision, accountability, and consistency at every stage of their financial operations.
                  </p>
                  <p>
                    We don't sell shortcuts. We don't promise miracles. We deliver the discipline that good businesses are built on.
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
                    <div className="text-6xl font-black text-brand-red mb-4">0%</div>
                    <div className="text-white font-bold uppercase tracking-widest text-sm">Compromise on Standards</div>
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
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">What We Believe</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Our Principles.</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="bg-brand-black border border-white/5 p-10 h-full group hover:border-brand-red/30 transition-all duration-500">
                  <p.icon className="text-brand-red mb-8" size={32} />
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{p.title}</h3>
                  <p className="text-brand-accent/50 leading-relaxed text-sm font-medium">{p.desc}</p>
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
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">Trust the Process.</h2>
              <div className="space-y-8 text-brand-accent/70 text-lg leading-relaxed font-medium">
                <p>
                  We don't believe in mystery. The way we work is straightforward, structured, and transparent — by design.
                </p>
                <p>
                  Every engagement begins with understanding. We learn your business, your obligations, and your expectations before we recommend anything. From there, we build a tailored plan: clear scope, defined timelines, agreed deliverables, and structured review checkpoints.
                </p>
                <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
                  <div>
                    <div className="text-brand-red font-black text-2xl mb-2">01.</div>
                    <div className="text-white font-bold uppercase tracking-widest text-sm mb-4">Understand</div>
                    <p className="text-sm">We learn your business, your obligations, and your expectations before we recommend anything.</p>
                  </div>
                  <div>
                    <div className="text-brand-red font-black text-2xl mb-2">02.</div>
                    <div className="text-white font-bold uppercase tracking-widest text-sm mb-4">Structure</div>
                    <p className="text-sm">We build a tailored plan: clear scope, defined timelines, and agreed deliverables.</p>
                  </div>
                  <div>
                    <div className="text-brand-red font-black text-2xl mb-2">03.</div>
                    <div className="text-white font-bold uppercase tracking-widest text-sm mb-4">Execute</div>
                    <p className="text-sm">We deliver quietly, precisely, and on time. You receive clean outputs and total confidence.</p>
                  </div>
                </div>
                <p>
                  Then we execute — quietly, precisely, and on time. You receive clean outputs, regular communication, and the confidence that your numbers are in disciplined hands.
                </p>
                <p className="pt-8 text-white/40">That's it. No theatre. No noise. Just standards, applied consistently.</p>
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
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">Our Team</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase">The People Behind the Practice.</h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <p className="text-brand-accent/70 text-lg leading-relaxed font-medium">
                Odify is built around a team of qualified professionals with deep, hands-on expertise across IFRS, VAT, Corporate Tax, audit, and compliance. Our practitioners come from diverse backgrounds in accounting, audit, and advisory — but share a common discipline: getting the work right.
              </p>
              <p className="mt-6 text-brand-accent/70 text-lg leading-relaxed font-medium">
                We invest continuously in our team's technical knowledge, professional development, and exposure to international standards. Because the people who handle your numbers should be as serious about the craft as you are about your business.
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
                  <h4 className="text-white font-bold uppercase tracking-widest mb-1">Jalib Juman</h4>
                  <p className="text-brand-red text-[10px] font-black uppercase tracking-[0.3em]">Management</p>
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
                  <h4 className="text-white font-bold uppercase tracking-widest mb-1">James John</h4>
                  <p className="text-brand-red text-[10px] font-black uppercase tracking-[0.3em]">Advisory</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white/[0.02] border border-white/5 p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-[0.03] blur-[100px] pointer-events-none" />
            <ScrollReveal>
              <div className="max-w-3xl">
                <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">Who We Work With</span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">Not For Everyone.</h2>
                <p className="text-brand-accent/70 text-lg mb-10 leading-relaxed font-medium">
                  We are intentionally selective about the clients we partner with. We work with businesses that:
                </p>
                <div className="grid sm:grid-cols-2 gap-6 text-sm text-white/80 mb-12">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    <span>Treat compliance as a foundation, not a formality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    <span>Value clarity, accountability, and timely delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    <span>Want a partner who pushes for quality, not just billable hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    <span>Operate with ambition and need a finance function to match</span>
                  </div>
                </div>
                <p className="text-brand-red font-black uppercase tracking-[0.3em] text-sm">Selective by design. Trusted by standard.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-24 bg-brand-red">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="text-white/60 font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">What You Can Expect</span>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase mb-6 tracking-tight px-6">
              Every file reviewed. Every report verified. Every client served with consistency.
            </h2>
            <p className="text-white/80 font-bold uppercase tracking-[0.5em] text-[9px]">That&apos;s not a tagline. That&apos;s our operating standard.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-12">Let&apos;s Build Something Disciplined.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="btn-primary !px-12 !py-5">
                <span className="flex items-center gap-3">
                  Schedule a Consultation <ArrowRight size={18} />
                </span>
              </Link>
              <Link href="/services" className="btn-secondary !px-12 !py-5">
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

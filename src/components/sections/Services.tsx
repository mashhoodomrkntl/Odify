"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Calculator, FileCheck, BarChart3, Shield, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Calculator size={32} />,
    title: "Accounting & Bookkeeping",
    desc: "Day-to-day financial recording, reconciliation, and management reporting — done right, the first time.",
    href: "/services/accounting-bookkeeping",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Taxation Advisory & Filing",
    desc: "VAT and Corporate Tax advisory, registration, and filing support. Aligned with current regulations, every quarter, every cycle.",
    href: "/services/taxation-advisory",
  },
  {
    icon: <FileCheck size={32} />,
    title: "Audit Management",
    desc: "End-to-end audit support including working papers, financial statements, and full-cycle audit management under IFRS standards.",
    href: "/services/audit-management",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Financial Statement Preparation",
    desc: "Clean, compliant, and audit-ready statements that reflect the true position of your business.",
    href: "/services/financial-statements",
  },
  {
    icon: <Shield size={32} />,
    title: "Compliance & Advisory",
    desc: "Regulatory compliance support, internal control reviews, and ongoing advisory for businesses that want to stay ahead.",
    href: "/services/compliance-advisory",
  },
  {
    icon: <Zap size={32} />,
    title: "E-Invoicing & Reporting",
    desc: "Modern compliance solutions aligned with international e-invoicing standards.",
    href: "/services/e-invoicing",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-brand-dark relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,4,41,0.02)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(217,4,41,0.02)_1.5px,transparent_1.5px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-24">
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">
              Core Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase">
              Beyond Bookkeeping. <br />
              <span className="text-brand-red">End-to-End Financial Operations.</span>
            </h2>
            <p className="mt-8 text-brand-accent/50 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              We provide a complete spectrum of financial services, designed for businesses that need accuracy, compliance, and clarity at every stage.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1} className="h-full">
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full bg-brand-black/40 backdrop-blur-sm border border-white/5 p-8 transition-all duration-500 hover:bg-brand-red/[0.03] hover:border-brand-red/20 overflow-hidden">
                  {/* Hover effect corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-brand-red opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-8 group-hover:h-8" />

                  <div className="text-brand-red mb-10 transition-transform group-hover:scale-110 duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-red transition-colors uppercase tracking-widest">
                    {service.title}
                  </h3>
                  <p className="text-brand-accent/40 text-sm leading-relaxed mb-10 font-medium">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 group-hover:gap-5 group-hover:text-brand-red">
                    Explore Details <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

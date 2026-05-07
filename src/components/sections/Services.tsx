"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Calculator, FileCheck, BarChart3, Shield, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Calculator size={28} />,
    title: "Accounting & Bookkeeping",
    desc: "Day-to-day financial recording, reconciliation, and management reporting — done right, the first time.",
    href: "/services/accounting-bookkeeping",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Taxation Advisory & Filing",
    desc: "VAT and Corporate Tax advisory, registration, and filing support. Aligned with current regulations, every quarter, every cycle.",
    href: "/services/taxation-advisory",
  },
  {
    icon: <FileCheck size={28} />,
    title: "Audit Management",
    desc: "End-to-end audit support including working papers, financial statements, and full-cycle audit management under IFRS standards.",
    href: "/services/audit-management",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Financial Statement Preparation",
    desc: "Clean, compliant, and audit-ready statements that reflect the true position of your business.",
    href: "/services/financial-statements",
  },
  {
    icon: <Shield size={28} />,
    title: "Compliance & Advisory",
    desc: "Regulatory compliance support, internal control reviews, and ongoing advisory for businesses that want to stay ahead.",
    href: "/services/compliance-advisory",
  },
  {
    icon: <Zap size={28} />,
    title: "E-Invoicing & Reporting",
    desc: "Modern compliance solutions aligned with international e-invoicing standards.",
    href: "/services/e-invoicing",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black leading-tight">
              Beyond Bookkeeping.{" "}
              <span className="text-gradient">End-to-End Financial Operations.</span>
            </h2>
            <p className="mt-6 text-gray-500 text-lg leading-relaxed">
              We provide a complete spectrum of financial services, designed for businesses that need accuracy, compliance, and clarity at every stage.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full bg-white border border-gray-100 p-8 rounded-lg transition-all duration-500 hover:border-brand-red/30 hover:shadow-xl hover:shadow-brand-red/5 overflow-hidden">
                  {/* Red top accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <div className="text-brand-red mb-6 transition-transform group-hover:scale-110 duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-brand-red text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Learn More <ArrowRight size={14} />
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

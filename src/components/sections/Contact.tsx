"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-brand-black relative">
      {/* Background patterns contained to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/[0.01] skew-x-12 translate-x-1/4" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Info */}
          <ScrollReveal>
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">Connect with Odify</span>
            <h2 className="text-5xl sm:text-6xl font-black text-white leading-[1] tracking-tighter uppercase mb-12">
              Ready to Work <br />
              <span className="text-brand-red">With Odify?</span>
            </h2>
            <p className="text-brand-accent/50 text-xl font-medium mb-16 max-w-md leading-relaxed">
              Whether you need full-cycle audit support, tax advisory, or end-to-end accounting management — we&apos;re built to deliver.
            </p>

            <div className="space-y-12">
              {[
                { icon: <Mail size={24} />, label: "Email Us", value: "hello@odify.com", href: "mailto:hello@odify.com" },
                { icon: <Phone size={24} />, label: "Call Us", value: "+91 90480 10605", href: "tel:+91 90480 10605" },
                { icon: <MapPin size={24} />, label: "Visit Us", value: "Odify Corporate Office, Keralam, India", href: "#" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-8 group">
                  <div className="shrink-0 w-14 h-14 border border-white/5 flex items-center justify-center text-brand-red transition-all duration-500 group-hover:bg-brand-red group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-brand-accent/30 uppercase tracking-[0.3em] mb-2">{item.label}</p>
                    {item.href !== "#" ? (
                      <a href={item.href} className="text-lg font-bold text-white hover:text-brand-red transition-colors tracking-tight">{item.value}</a>
                    ) : (
                      <p className="text-lg font-bold text-white tracking-tight">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-brand-dark/30 backdrop-blur-xl border border-white/5 p-8 md:p-12 relative group">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-red opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">Full Name</label>
                    <input type="text" className="w-full bg-brand-black/50 border border-white/5 px-6 py-4 text-white focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm placeholder:text-white/10 uppercase tracking-widest font-bold" placeholder="Your Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">Email Address</label>
                    <input type="email" className="w-full bg-brand-black/50 border border-white/5 px-6 py-4 text-white focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm placeholder:text-white/10 uppercase tracking-widest font-bold" placeholder="email@domain.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">Service Required</label>
                  <select className="w-full bg-brand-black/50 border border-white/5 px-6 py-4 text-white focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm bg-brand-black uppercase tracking-widest font-bold">
                    <option>Accounting & Bookkeeping</option>
                    <option>Taxation Advisory</option>
                    <option>Audit</option>
                    <option>Compliance & Advisory</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">Message</label>
                  <textarea rows={4} className="w-full bg-brand-black/50 border border-white/5 px-6 py-4 text-white focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm resize-none placeholder:text-white/10 uppercase tracking-widest font-bold" placeholder="Describe your requirements..."></textarea>
                </div>

                <button type="submit" className="btn-primary w-full group">
                  <span className="flex items-center justify-center gap-4">
                    Schedule a Consultation <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

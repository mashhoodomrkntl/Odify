"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-surface-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <ScrollReveal>
            <p className="text-brand-red font-semibold text-xs tracking-[0.3em] uppercase mb-4">Contact Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-8">
              Ready to Work <span className="text-gradient">With Odify?</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-md">
              Whether you need full-cycle audit support, tax advisory, or end-to-end accounting management — we&apos;re built to deliver.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-sm bg-white border border-gray-100 flex items-center justify-center text-brand-red shadow-sm group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:hello@odify.com" className="text-xl font-bold text-brand-black hover:text-brand-red transition-colors">hello@odify.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-sm bg-white border border-gray-100 flex items-center justify-center text-brand-red shadow-sm group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:+919995686838" className="text-xl font-bold text-brand-black hover:text-brand-red transition-colors">+91 9995 68 68 38</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-sm bg-white border border-gray-100 flex items-center justify-center text-brand-red shadow-sm group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-lg font-bold text-brand-black">Odify Corporate Office, Mumbai, India</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl shadow-gray-200/50 border border-gray-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm bg-white">
                    <option>Accounting & Bookkeeping</option>
                    <option>Taxation Advisory</option>
                    <option>Audit Management</option>
                    <option>Compliance & Advisory</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

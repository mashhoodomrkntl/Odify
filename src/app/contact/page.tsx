"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="bg-brand-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,4,41,0.05)_0%,transparent_50%)]" />
        <div className="container-custom relative z-10 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">Contact Odify</span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase mb-8 tracking-tighter">
              Let&apos;s Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/50">Something Disciplined.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-accent/60 leading-relaxed font-medium">
              Ready to take your financial operations seriously? Reach out to our advisory team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="container-custom px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Left: Contact Form */}
            <ScrollReveal>
              <div className="bg-brand-dark/30 backdrop-blur-xl border border-white/5 p-8 md:p-16 relative group">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-red opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <h2 className="text-3xl font-black text-white uppercase mb-12 tracking-tight">Schedule a Consultation</h2>

                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">Your Name</label>
                      <input
                        type="text"
                        className="w-full bg-brand-black/50 border-b border-white/10 px-0 py-4 text-white focus:border-brand-red transition-all outline-hidden text-sm uppercase tracking-widest font-bold placeholder:text-white/5"
                        placeholder="ENTER NAME"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">Email Address</label>
                      <input
                        type="email"
                        className="w-full bg-brand-black/50 border-b border-white/10 px-0 py-4 text-white focus:border-brand-red transition-all outline-hidden text-sm uppercase tracking-widest font-bold placeholder:text-white/5"
                        placeholder="EMAIL@DOMAIN.COM"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">Subject of Inquiry</label>
                    <select className="w-full bg-brand-black/50 border-b border-white/10 px-0 py-4 text-white focus:border-brand-red transition-all outline-hidden text-sm uppercase tracking-widest font-bold appearance-none">
                      <option>ACCOUNTING & BOOKKEEPING</option>
                      <option>TAXATION ADVISORY</option>
                      <option>AUDIT</option>
                      <option>COMPLIANCE CONSULTANCY</option>
                      <option>OTHER INQUIRY</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">Your Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-brand-black/50 border-b border-white/10 px-0 py-4 text-white focus:border-brand-red transition-all outline-hidden text-sm uppercase tracking-widest font-bold resize-none placeholder:text-white/5"
                      placeholder="DESCRIBE YOUR REQUIREMENTS..."
                    ></textarea>
                  </div>

                  <button className="btn-primary w-full group !py-6">
                    <span className="flex items-center justify-center gap-4">
                      SUBMIT REQUEST <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Right: Contact Info & Map */}
            <div className="space-y-16">
              <ScrollReveal delay={0.2}>
                <div className="grid gap-12 sm:grid-cols-2">
                  <div className="space-y-4">
                    <span className="text-brand-red font-black text-[10px] tracking-[0.4em] uppercase">Email Presence</span>
                    <a href="mailto:hello@odify.com" className="block text-2xl font-bold text-white hover:text-brand-red transition-colors tracking-tight">
                      hello@odify.com
                    </a>
                  </div>
                  <div className="space-y-4">
                    <span className="text-brand-red font-black text-[10px] tracking-[0.4em] uppercase">Direct Line</span>
                    <a href="tel:+919048010605" className="block text-2xl font-bold text-white hover:text-brand-red transition-colors tracking-tight">
                      +91 90480 10605
                    </a>
                  </div>
                  <div className="sm:col-span-2 space-y-4">
                    <span className="text-brand-red font-black text-[10px] tracking-[0.4em] uppercase">Corporate Office</span>
                    <p className="text-2xl font-bold text-white leading-tight tracking-tight">
                      Odify Corporate Office, <br />
                      Keralam, India
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Google Map View */}
              <ScrollReveal delay={0.4}>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-brand-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative aspect-video bg-brand-dark border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4634587602777!2d75.99996417504512!3d11.003812189159133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5006cffe6c7%3A0x67ad494f13a11d61!2sOdify!5e0!3m2!1sen!2sin!4v1778271358450!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                    ></iframe>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Selective Partner Section */}
      <section className="section-padding border-t border-white/5 bg-brand-dark/20">
        <div className="container-custom px-6 md:px-12 text-center">
          <ScrollReveal>
            <span className="text-brand-red font-black text-[10px] tracking-[0.5em] uppercase mb-8 block">Our Operating Standard</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">Selective by choice. Trusted by design.</h2>
            <p className="text-brand-accent/40 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              We work with businesses that treat financial discipline as a foundation for growth. If you value precision, we are your partner.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "82a6c098-0442-4db7-9b36-4a908aedb9ce");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
            <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">{t("subtitle")}</span>
            <h2 className="text-5xl sm:text-6xl font-black text-white leading-[1] tracking-tighter uppercase mb-12">
              {t("title1")} <br />
              <span className="text-brand-red">{t("title2")}</span>
            </h2>
            <p className="text-brand-accent/50 text-xl font-medium mb-16 max-w-md leading-relaxed">
              {t("desc")}
            </p>

            <div className="space-y-12">
              {[
                { icon: <Mail size={24} />, labelKey: "email_label", value: "hello@odifyindia.com", href: "hello@odifyindia.com" },
                { icon: <Phone size={24} />, labelKey: "call_label", value: "+91 90480 10605", href: "tel:+91 90480 10605" },
                { icon: <MapPin size={24} />, labelKey: "visit_label", valueKey: "visit_value", href: "#" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-8 group">
                  <div className="shrink-0 w-14 h-14 border border-white/5 flex items-center justify-center text-brand-red transition-all duration-500 group-hover:bg-brand-red group-hover:text-[#ffffff]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-brand-accent/30 uppercase tracking-[0.3em] mb-2">{t(item.labelKey)}</p>
                    {item.href !== "#" ? (
                      <a href={item.href} className="text-lg font-bold text-white hover:text-brand-red transition-colors tracking-tight rtl:text-right text-left" dir="ltr">{item.value}</a>
                    ) : (
                      <p className="text-lg font-bold text-white tracking-tight">{item.valueKey ? t(item.valueKey) : item.value}</p>
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

              <form className="space-y-8" onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">{t("form_name")}</label>
                    <input name="name" required type="text" className="w-full bg-brand-black/50 border border-white/5 px-6 py-4 text-white focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm placeholder:text-white/10 uppercase tracking-widest font-bold" placeholder={t("placeholder_name")} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">{t("form_email")}</label>
                    <input name="email" required type="email" className="w-full bg-brand-black/50 border border-white/5 px-6 py-4 text-white focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm placeholder:text-white/10 uppercase tracking-widest font-bold" placeholder="email@domain.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">{t("form_service")}</label>
                  <select name="service" className="w-full bg-brand-black/50 border border-white/5 px-6 py-4 text-white focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm bg-brand-black uppercase tracking-widest font-bold">
                    <option value={t("opt1")}>{t("opt1")}</option>
                    <option value={t("opt2")}>{t("opt2")}</option>
                    <option value={t("opt3")}>{t("opt3")}</option>
                    <option value={t("opt4")}>{t("opt4")}</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-accent/30">{t("form_message")}</label>
                  <textarea name="message" required rows={4} className="w-full bg-brand-black/50 border border-white/5 px-6 py-4 text-white focus:border-brand-red focus:ring-0 transition-all outline-hidden text-sm resize-none placeholder:text-white/10 uppercase tracking-widest font-bold" placeholder={t("placeholder_message")}></textarea>
                </div>

                <button type="submit" className="btn-primary w-full group">
                  <span className="flex items-center justify-center gap-4">
                    {t("submit")} <Send size={18} className="rtl:rotate-180 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </span>
                </button>
                {result && (
                  <div className="text-brand-red font-bold text-center text-sm mt-4">
                    {result}
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

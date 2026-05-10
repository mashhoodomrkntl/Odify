import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const quickLinks = [
  { key: "nav_about", href: "/about" },
  { key: "nav_services", href: "/services" },
  { key: "nav_approach", href: "/#approach" },
  { key: "nav_industries", href: "/#industries" },
  { key: "nav_contact", href: "/contact" },
];

const serviceLinks = [
  { key: "exp_accounting", href: "/services/accounting-bookkeeping" },
  { key: "exp_taxation", href: "/services/taxation-advisory" },
  { key: "exp_audit", href: "/services/audit-management" },
  { key: "exp_compliance", href: "/services/compliance-advisory" },
  { key: "exp_advisory", href: "/services/financial-statements" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  
  return (
    <footer className="bg-brand-black text-white relative border-t border-white/5" role="contentinfo">
      {/* Decorative background pulse */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />

      {/* Main Footer */}
      <div className="container-custom px-6 md:px-12 pt-24 pb-16">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/Odify White.png"
              alt="Odify"
              width={140}
              height={56}
              className="h-26 w-auto object-contain mb-8"
            />
            <p className="text-[10px] text-brand-red font-black uppercase tracking-[0.4em] mb-4">
              {t('tagline')}
            </p>
            <p className="text-sm text-brand-accent/40 font-medium leading-relaxed max-w-xs">
              {t('desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8 border-b border-brand-red/20 pb-2 inline-block">
              {t('nav_title')}
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-accent/40 hover:text-brand-red transition-all font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-brand-red mr-0 group-hover:mr-2 rtl:ml-0 rtl:group-hover:ml-2 rtl:mr-0 transition-all duration-300" />
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8 border-b border-brand-red/20 pb-2 inline-block">
              {t('exp_title')}
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-accent/40 hover:text-brand-red transition-all font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-brand-red mr-0 group-hover:mr-2 rtl:ml-0 rtl:group-hover:ml-2 rtl:mr-0 transition-all duration-300" />
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8 border-b border-brand-red/20 pb-2 inline-block">
              {t('connect_title')}
            </h4>
            <ul className="space-y-6">
              <li>
                <a
                  href="mailto:hello@odify.com"
                  className="flex items-center gap-4 text-sm text-brand-accent/40 hover:text-brand-red transition-colors group font-medium"
                >
                  <Mail size={18} className="text-brand-red/60 group-hover:text-brand-red" />
                  hello@odify.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+91 90480 10605"
                  className="flex items-center gap-4 text-sm text-brand-accent/40 hover:text-brand-red transition-colors group font-medium"
                >
                  <Phone size={18} className="text-brand-red/60 group-hover:text-brand-red" />
                  <span dir="ltr">+91 90480 10605</span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                {/* <div className="flex items-start gap-4 text-sm text-brand-accent/40 font-medium leading-relaxed">
                  <MapPin size={18} className="text-brand-red/60 mt-0.5 shrink-0" />
                  <span>Odify Corporate Office, <br />UAE, India</span>
                </div> */}
                <MapPin size={18} className="text-brand-red/60 mt-0.5 shrink-0" />
                <div className="flex items-center gap-4 text-sm text-brand-accent/40 font-medium leading-relaxed bg-primary/18 p-3 rounded-xl text-white">
                  🇦🇪 UAE  |  🇮🇳 India
                </div>
              </li>
              <li className="pt-4 border-t border-white/5 space-y-4">
                <a
                  href="https://www.linkedin.com/company/odifyconsultants/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-brand-red transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} className="text-brand-red" />
                  <span>{t('linkedin')}</span>
                </a>
                <a
                  href="https://www.instagram.com/odify_india?utm_source=qr&igsh=MXNzdnA4YWtuYXIzNA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-brand-red transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={20} className="text-brand-red" />
                  <span>{t('instagram')}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brand-dark/50 border-t border-white/5">
        <div className="container-custom px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold text-brand-accent/20 uppercase tracking-[0.2em]">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-[10px] font-bold text-brand-accent/20 uppercase tracking-[0.2em] hover:text-brand-red transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/terms" className="text-[10px] font-bold text-brand-accent/20 uppercase tracking-[0.2em] hover:text-brand-red transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

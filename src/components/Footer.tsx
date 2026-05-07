import Link from "next/link";
import Image from "next/image";
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

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "#services" },
  { name: "Approach", href: "#approach" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

const serviceLinks = [
  { name: "Accounting", href: "/services/accounting-bookkeeping" },
  { name: "Taxation", href: "/services/taxation-advisory" },
  { name: "Audit", href: "/services/audit-management" },
  { name: "Compliance", href: "/services/compliance-advisory" },
  { name: "Advisory", href: "/services/financial-statements" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom px-6 md:px-12 pt-20 pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/Odify White.png"
              alt="Odify"
              width={140}
              height={56}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-sm text-gray-400 font-tagline mt-2 tracking-wide">
              Your Edge to Lead.
            </p>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-xs">
              A corporate advisory firm built on standards, driven by performance, and trusted by design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@odify.com"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand-red transition-colors group"
                >
                  <Mail size={16} className="text-brand-red/60 group-hover:text-brand-red" />
                  hello@odify.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919995686838"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand-red transition-colors group"
                >
                  <Phone size={16} className="text-brand-red/60 group-hover:text-brand-red" />
                  +91 9995 68 68 38
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin size={16} className="text-brand-red/60 mt-0.5 shrink-0" />
                  <span>Odify Corporate Office</span>
                </div>
              </li>
              <li className="pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-red transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Odify. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

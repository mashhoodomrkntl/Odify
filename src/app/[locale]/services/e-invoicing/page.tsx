import { Metadata } from "next";
import EInvoicingClient from "@/components/pages/EInvoicingClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "E-Invoicing Solutions | Odify Kerala",
    ar: "حلول الفواتير الإلكترونية | أوديفاي كيرالا"
  };

  const descriptions = {
    en: "Transition to digital with Odify's e-invoicing solutions in Kerala, UAE, and China. Secure, compliant, and efficient electronic invoicing systems.",
    ar: "انتقل إلى العمل الرقمي مع حلول الفواتير الإلكترونية من أوديفاي في كيرالا والإمارات والصين. أنظمة فواتير إلكترونية آمنة ومتوافقة وفعالة."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    }
  };
}

export default function EInvoicingPage() {
  return <EInvoicingClient />;
}

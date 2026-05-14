import { Metadata } from "next";
import AuditClient from "@/components/pages/AuditClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "Audit Management Services | Odify Kerala",
    ar: "إدارة التدقيق | أوديفاي كيرالا"
  };

  const descriptions = {
    en: "Comprehensive audit management services in Kerala, UAE, and China. Professional auditing under IFRS standards by Odify.",
    ar: "خدمات إدارة التدقيق الشاملة في كيرالا والإمارات والصين. تدقيق مهني بموجب معايير IFRS من أوديفاي."
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

export default function AuditPage() {
  return <AuditClient />;
}

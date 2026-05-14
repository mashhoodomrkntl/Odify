import { Metadata } from "next";
import AccountingClient from "@/components/pages/AccountingClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "Accounting & Bookkeeping Services | Odify Kerala",
    ar: "خدمات المحاسبة ومسك الدفاتر | أوديفاي كيرالا"
  };

  const descriptions = {
    en: "Professional accounting and bookkeeping services in Kerala, UAE, and China. Ensure financial discipline with Odify's expert corporate advisory.",
    ar: "خدمات المحاسبة ومسك الدفاتر المهنية في كيرالا والإمارات والصين. اضمن الانضباط المالي مع استشارات أوديفاي المتخصصة."
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

export default function AccountingPage() {
  return <AccountingClient />;
}

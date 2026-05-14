import { Metadata } from "next";
import FinancialClient from "@/components/pages/FinancialClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "Financial Statements Services | Odify Kerala",
    ar: "القوائم المالية | أوديفاي كيرالا"
  };

  const descriptions = {
    en: "Expert preparation and analysis of financial statements in Kerala, UAE, and China. Transparent and accurate financial reporting by Odify.",
    ar: "إعداد وتحليل القوائم المالية من قبل الخبراء في كيرالا والإمارات والصين. تقارير مالية شفافة ودقيقة من أوديفاي."
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

export default function FinancialStatementsPage() {
  return <FinancialClient />;
}

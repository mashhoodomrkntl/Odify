import { Metadata } from "next";
import TaxationClient from "@/components/pages/TaxationClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "Taxation Advisory Services | Odify Kerala",
    ar: "الاستشارات الضريبية | أوديفاي كيرالا"
  };

  const descriptions = {
    en: "Expert taxation advisory services in Kerala, UAE, and China. Navigate tax regulations and optimize your tax strategy with Odify.",
    ar: "خدمات الاستشارات الضريبية المتخصصة في كيرالا والإمارات والصين. تصفح اللوائح الضريبية وحسّن استراتيجيتك الضريبية مع أوديفاي."
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

export default function TaxationPage() {
  return <TaxationClient />;
}

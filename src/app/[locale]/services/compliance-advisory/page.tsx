import { Metadata } from "next";
import ComplianceClient from "@/components/pages/ComplianceClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "Compliance Advisory Services | Odify Kerala",
    ar: "الاستشارات الامتثالية | أوديفاي كيرالا"
  };

  const descriptions = {
    en: "Stay ahead of regulatory requirements with Odify's compliance advisory services in Kerala, UAE, and China. Expert guidance on statutory compliance.",
    ar: "ابق على اطلاع بالمتطلبات التنظيمية مع خدمات استشارات الامتثال من أوديفاي في كيرالا والإمارات والصين. توجيه خبير بشأن الامتثال القانوني."
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

export default function CompliancePage() {
  return <ComplianceClient />;
}

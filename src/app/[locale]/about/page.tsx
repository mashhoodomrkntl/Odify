import { Metadata } from "next";
import AboutClient from "@/components/pages/AboutClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "About Odify | Premier Auditing & Advisory in Kerala",
    ar: "عن أوديفاي | التدقيق والاستشارات المتميزة في كيرالا"
  };

  const descriptions = {
    en: "Learn about Odify, a leading corporate advisory firm specializing in auditing, taxation, and compliance in Kerala (Malappuram, Kottakkal), UAE, and China.",
    ar: "تعرف على أوديفاي، وهي شركة استشارات مؤسسية رائدة متخصصة في التدقيق والضرائب والامتثال في كيرالا (مالابورام، كوتاكال) والإمارات العربية المتحدة والصين."
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

export default function AboutPage() {
  return <AboutClient />;
}

import { Metadata } from "next";
import ContactClient from "@/components/pages/ContactClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "Contact Odify | Professional Advisory in Kerala & UAE",
    ar: "اتصل بأوديفاي | استشارات مهنية في كيرالا والإمارات"
  };

  const descriptions = {
    en: "Get in touch with Odify for expert auditing, taxation, and advisory services in Kerala (Malappuram, Kottakkal), UAE, and China.",
    ar: "تواصل مع أوديفاي للحصول على خدمات التدقيق والضرائب والاستشارات الخبيرة في كيرالا (مالابورام، كوتاكال) والإمارات العربية المتحدة والصين."
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

export default function ContactPage() {
  return <ContactClient />;
}

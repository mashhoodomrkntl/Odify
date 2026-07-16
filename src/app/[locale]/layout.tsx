import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: "Odify |  Auditing & Advisory in Kerala,Malappuram, UAE & China",
    ar: "أوديفاي | التدقيق والاستشارات المتميزة في كيرالا والإمارات والصين"
  };

  const descriptions = {
    en: "Odify is a leading corporate advisory firm in Kerala (Malappuram, Kottakkal), UAE, and China. Specializing in auditing, taxation, accounting, and compliance services.",
    ar: "أوديفاي هي شركة استشارات مؤسسية رائدة في كيرالا (مالابورام، كوتاكال) والإمارات العربية المتحدة والصين. متخصصة في خدمات التدقيق والضرائب والمحاسبة والامتثال."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: ["Auditing Kerala", "Auditing Malappuram", "Auditing Kottakkal", "UAE Auditing", "China Auditing", "Taxation", "Accounting", "Compliance", "Financial Advisory", "IFRS", "VAT Filing", "Corporate Tax"],
    authors: [{ name: "Odify" }],
    alternates: {
      canonical: `https://odifyindia.com/${locale}`,
      languages: {
        'en-US': 'https://odifyindia.com/en',
        'ar-SA': 'https://odifyindia.com/ar',
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: "website",
      url: `https://odifyindia.com/${locale}`,
      siteName: "Odify",
    },
    icons: {
      icon: "/Odify White.jpeg",
      shortcut: "/Odify White.jpeg",
      apple: "/Odify White.jpeg",
    },
    verification: {
      google: "y8B4gk8hT3_WY1PJa0CaGDCpBMOV827K9Jdkzk482bw",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Odify",
  "image": "https://odifyindia.com/Odify%20White.jpeg",
  "@id": "https://odifyindia.com",
  "url": "https://odifyindia.com",
  "telephone": "+919048010605",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kottakkal",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.0022,
    "longitude": 75.9918
  },
  "areaServed": [
    { "@type": "State", "name": "Kerala" },
    { "@type": "City", "name": "Malappuram" },
    { "@type": "City", "name": "Kottakkal" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "China" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${montserrat.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-brand-black transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

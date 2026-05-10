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

export const metadata: Metadata = {
  title: "Odify | Not Just Numbers. We Build Confidence.",
  description: "Odify is a corporate advisory firm specialising in accounting, taxation, audit, and compliance. Professional auditing services with clarity and control.",
  keywords: ["Auditing", "Taxation", "Accounting", "Compliance", "Financial Advisory", "IFRS", "VAT Filing", "Corporate Tax"],
  authors: [{ name: "Odify" }],
  openGraph: {
    title: "Odify | Professional Auditing & Advisory",
    description: "Built on Standards. Driven by Performance. Your Edge to Lead.",
    type: "website",
  },
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
  params: { locale: string };
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${montserrat.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-brand-black transition-colors duration-300">
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

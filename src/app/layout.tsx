import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-brand-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

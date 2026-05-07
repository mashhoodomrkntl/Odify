import type { Metadata } from "next";
import { Raleway, Righteous, PT_Sans_Caption } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const righteous = Righteous({
  weight: "400",
  variable: "--font-righteous",
  subsets: ["latin"],
});

const ptSansCaption = PT_Sans_Caption({
  weight: ["400", "700"],
  variable: "--font-pt-sans-caption",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${righteous.variable} ${ptSansCaption.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

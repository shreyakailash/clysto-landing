import type { Metadata } from "next";
import { Montserrat, Newsreader } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clysto — Growth Studio for Early-Stage Startups",
  description:
    "Clysto is a growth studio for early-stage startups. We find what's actually holding you back — then fix it. Positioning, go-to-market, product experience, content.",
  keywords: ["growth studio", "startups", "positioning", "go-to-market", "product experience"],
  openGraph: {
    title: "Clysto — Growth Studio for Early-Stage Startups",
    description:
      "We find what's actually holding you back — then fix it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${newsreader.variable}`}>
      <body className="bg-brand-cream antialiased">{children}</body>
    </html>
  );
}

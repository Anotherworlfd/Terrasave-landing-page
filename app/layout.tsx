import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TerraSave - Commercial Green Energy Consulting & Audit Services",
  description:
    "TerraSave delivers commercial green energy consulting and B2B energy audit services that cut operational costs and keep enterprises ahead of environmental regulation.",
  keywords: [
    "Commercial Green Energy Consulting",
    "B2B Energy Audit Services",
    "Enterprise Sustainability",
    "ESG Roadmap",
    "Renewable Energy Transition",
  ],
  openGraph: {
    title: "TerraSave - Commercial Green Energy Consulting & Audit Services",
    description:
      "Expert green energy consulting and comprehensive audits that optimize efficiency and reduce operational costs at enterprise scale.",
    type: "website",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakarta.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import { Archivo, DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgressRail } from "@/components/ScrollProgressRail";
import { FloatingCall } from "@/components/FloatingCall";
import { business } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drainsolutionplus.com"),
  title: {
    default: "Drain And Sewer Cleaning & Repair Service Company, North NJ | Drain Solutions Plus",
    template: "%s | Drain Solutions Plus",
  },
  description:
    "Drain Solutions Plus — committed to solving your toughest clogged drains problems. If water runs through it we do it! 24/7 drain and sewer service across Bergen, Essex, Hudson and Passaic County, Northern NJ.",
  keywords: [
    "drain cleaning Northern NJ",
    "sewer repair and cleaning",
    "main line video sewer inspection",
    "clog cleaning",
    "drain lines",
    "toilet repairs",
    "faucet and leak repairs",
    "residential drain repairs",
    "Hawthorne NJ",
  ],
  openGraph: {
    title: "Drain And Sewer Cleaning & Repair Service Company, North NJ",
    description:
      "Committed to solving your toughest clogged drains problems. Same day service, emergency fast response, insured & bonded.",
    url: "https://drainsolutionplus.com",
    siteName: "Drain Solutions Plus",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/dsp/hero-banner.jpg", width: 2000, height: 1300, alt: "Drain Solutions Plus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain And Sewer Cleaning & Repair — North NJ",
    description: "If water runs through it we do it! 24/7 drain and sewer service in Northern NJ.",
  },
  icons: { icon: "/images/dsp/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#014485",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${dmSans.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-navy focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgressRail />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCall href={business.phoneHref} label={`Call ${business.phone}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Drain Solutions Plus",
              telephone: business.phone,
              email: business.email,
              address: {
                "@type": "PostalAddress",
                postOfficeBoxNumber: "P.O. Box 353",
                addressLocality: "Hawthorne",
                addressRegion: "NJ",
                postalCode: "07507",
                addressCountry: "US",
              },
              areaServed: ["Bergen County, NJ", "Essex County, NJ", "Hudson County, NJ", "Passaic County, NJ"],
              openingHours: "Mo-Su 00:00-23:59",
              aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "4" },
            }),
          }}
        />
      </body>
    </html>
  );
}

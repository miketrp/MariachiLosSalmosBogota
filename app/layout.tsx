import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialButtons from "@/components/SocialButtons";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mariachis Los Salmos - Música Tradicional Mexicana en Bogotá",
  description: "Mariachis profesionales en Bogotá para eventos especiales. Servicios de música tradicional mexicana para fiestas, cumpleaños, bodas, serenatas y más. Disponibles 24/7. ¡Contáctanos al 313 236 6760!",
  keywords: "mariachis bogota, música mexicana, fiestas, cumpleaños, bodas, eventos, serenatas, mariachis colombia, mariachi bogota, música tradicional mexicana, mariachis para eventos, mariachis en bogota",
  authors: [{ name: "Mariachis Los Salmos" }],
  openGraph: {
    title: "Mariachis Los Salmos - Música Tradicional Mexicana en Bogotá",
    description: "Mariachis profesionales en Bogotá para eventos especiales. Servicios de música tradicional mexicana para fiestas, cumpleaños, bodas y más. Disponibles 24/7.",
    url: "https://mariachislossalmosbogota.vercel.app",
    siteName: "Mariachis Los Salmos de Bogotá",
    images: [
      {
        url: "/images/gallery/2026-03-12 20.09.41.jpg",
        width: 1200,
        height: 630,
        alt: "Mariachis Los Salmos - Música Tradicional Mexicana en Bogotá",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariachis Los Salmos - Música Tradicional Mexicana en Bogotá",
    description: "Mariachis profesionales en Bogotá para eventos especiales. Servicios de música tradicional mexicana para fiestas, cumpleaños, bodas y más.",
    images: ["/images/gallery/2026-03-12 20.09.41.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A192F" />
        
        {/* Schema.org markup for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mariachis Los Salmos",
              "description": "Mariachis profesionales en Bogotá para eventos especiales",
              "url": "https://mariachislossalmos.com",
              "telephone": "+57-313-236-6760",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bogotá",
                "addressCountry": "CO",
                "addressRegion": "Cundinamarca"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "priceRange": "$$",
              "serviceType": "Mariachi Music Services"
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <SocialButtons />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="573132366760" />
        <Analytics />
      </body>
    </html>
  );
}
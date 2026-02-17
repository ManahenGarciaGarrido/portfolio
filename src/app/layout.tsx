import type { Metadata } from "next";
import "./globals.css";
import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";
import JsonLd from "@/components/JsonLd";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://manahengarcia.dev';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Manahen García Garrido | Desarrollador Web Freelance",
    template: "%s | Manahen García Garrido",
  },
  description:
    "Desarrollador web freelance en España. Diseño webs profesionales que convierten visitas en clientes: tiendas online, restaurantes, startups, agencias y más. Presupuesto gratis.",
  keywords: [
    "desarrollador web freelance",
    "diseño web profesional",
    "páginas web para empresas",
    "crear web para negocio",
    "web para restaurante",
    "web para tienda online",
    "Next.js developer",
    "desarrollo web España",
    "portfolio desarrollador web",
    "presupuesto web gratis",
  ],
  authors: [{ name: "Manahen García Garrido", url: BASE_URL }],
  creator: "Manahen García Garrido",
  publisher: "Manahen García Garrido",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Manahen García Garrido | Desarrollador Web Freelance",
    description:
      "Diseño webs profesionales que convierten visitas en clientes. Tiendas online, restaurantes, startups, agencias y más. Presupuesto gratis.",
    url: BASE_URL,
    siteName: "Manahen García Garrido — Desarrollador Web",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manahen García Garrido — Desarrollador Web Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manahen García Garrido | Desarrollador Web Freelance",
    description:
      "Diseño webs profesionales que convierten visitas en clientes. Presupuesto gratis.",
    images: ["/og-image.png"],
    creator: "@manahengarcia10",
  },
  verification: {
    google: "0cPQrESxHXNZoY5hEKgW6uhH8VUNPlMO4yp_QEeWm-8",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <JsonLd />
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}

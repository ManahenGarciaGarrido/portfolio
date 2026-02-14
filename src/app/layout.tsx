import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manahen García Garrido | Desarrollador Web",
  description: "Diseño webs que convierten visitas en clientes. Portfolio de desarrollo web profesional — tiendas online, restaurantes, startups, agencias y más.",
  keywords: ["desarrollador web", "diseño web", "freelance", "Next.js", "portfolio", "España"],
  authors: [{ name: "Manahen García Garrido" }],
  openGraph: {
    title: "Manahen García Garrido | Desarrollador Web",
    description: "Diseño webs que convierten visitas en clientes.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}

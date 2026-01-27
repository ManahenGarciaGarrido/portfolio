import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkForge - Tu Pagina de Links Profesional",
  description: "Crea tu pagina de links personalizada en segundos. Comparte todos tus enlaces importantes en un solo lugar. Gratis para empezar, Pro para crecer.",
  keywords: ["link in bio", "linktree alternativa", "pagina de links", "redes sociales", "creadores"],
  authors: [{ name: "LinkForge" }],
  openGraph: {
    title: "LinkForge - Tu Pagina de Links Profesional",
    description: "Crea tu pagina de links personalizada en segundos.",
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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

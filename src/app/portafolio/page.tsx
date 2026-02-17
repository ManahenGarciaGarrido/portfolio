import type { Metadata } from 'next';
import PortafolioClient from './PortafolioClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://manahengarcia.dev';

export const metadata: Metadata = {
  title: 'Portfolio · Proyectos Demo | Manahen García Garrido',
  description: '25 webs demo únicas: restaurantes, tiendas, clínicas, startups, hoteles y más. Cada una con diseño propio, animaciones y código real. Mira los ejemplos y pide presupuesto.',
  alternates: { canonical: `${BASE_URL}/portafolio` },
  openGraph: {
    title: 'Portfolio de proyectos demo · Manahen García Garrido',
    description: '25 webs demo con diseño e identidad visual propia, listas para adaptar a cualquier cliente.',
    url: `${BASE_URL}/portafolio`,
  },
};

export default function PortafolioPage() {
  return <PortafolioClient />;
}

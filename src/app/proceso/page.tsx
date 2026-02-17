import type { Metadata } from 'next';
import ProcesoClient from './ProcesoClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://manahengarcia.dev';

export const metadata: Metadata = {
  title: 'Cómo Trabajamos · Proceso y Garantías | Manahen García Garrido',
  description: 'Descubre el proceso de trabajo: consulta gratis, propuesta en 24h, diseño previo al código, revisiones incluidas y entrega con código 100% tuyo. Sin sorpresas.',
  alternates: { canonical: `${BASE_URL}/proceso` },
  openGraph: {
    title: 'Proceso de trabajo y garantías · Manahen García Garrido',
    description: '6 pasos claros, sin sorpresas. Sabes exactamente qué va a pasar desde el primer mensaje hasta la entrega.',
    url: `${BASE_URL}/proceso`,
  },
};

export default function ProcesoPage() {
  return <ProcesoClient />;
}

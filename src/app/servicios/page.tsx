import type { Metadata } from 'next';
import ServiciosClient from './ServiciosClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://manahengarcia.dev';

export const metadata: Metadata = {
  title: 'Servicios y Precios | Manahen García Garrido',
  description: 'Servicios de desarrollo web freelance: diseño, frontend, backend, bases de datos y despliegue. Precios claros y sin letra pequeña. Consulta gratuita.',
  alternates: { canonical: `${BASE_URL}/servicios` },
  openGraph: {
    title: 'Servicios y precios · Manahen García Garrido',
    description: 'Desarrollo web profesional con precios transparentes. Sin letra pequeña ni sorpresas.',
    url: `${BASE_URL}/servicios`,
  },
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}

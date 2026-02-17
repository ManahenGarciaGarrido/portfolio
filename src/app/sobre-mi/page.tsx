import type { Metadata } from 'next';
import SobreMiClient from './SobreMiClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://manahengarcia.dev';

export const metadata: Metadata = {
  title: 'Sobre mí · Quién soy | Manahen García Garrido',
  description: 'Desarrollador web freelance en España. Apasionado por el diseño, el código limpio y los proyectos con propósito. Conoce mi historia, mis herramientas y mi forma de trabajar.',
  alternates: { canonical: `${BASE_URL}/sobre-mi` },
  openGraph: {
    title: 'Sobre mí · Manahen García Garrido',
    description: 'Desarrollador web freelance. Apasionado por el diseño y el código limpio.',
    url: `${BASE_URL}/sobre-mi`,
  },
};

export default function SobreMiPage() {
  return <SobreMiClient />;
}

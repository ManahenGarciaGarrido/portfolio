import type { Metadata } from 'next';
import ContactoClient from './ContactoClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://manahengarcia.dev';

export const metadata: Metadata = {
  title: 'Contacto · Hablemos de tu proyecto | Manahen García Garrido',
  description: 'Cuéntame tu proyecto y te respondo en menos de 24 horas. WhatsApp, email o formulario. Primera consulta siempre gratuita y sin compromiso.',
  alternates: { canonical: `${BASE_URL}/contacto` },
  openGraph: {
    title: 'Contacto · Manahen García Garrido',
    description: 'Primera consulta gratis. Te respondo en menos de 24h.',
    url: `${BASE_URL}/contacto`,
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}

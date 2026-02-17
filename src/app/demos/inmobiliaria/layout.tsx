import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Agencia Inmobiliaria',
  description:
    'Ejemplo de diseño web para inmobiliaria: propiedades en venta, equipo, blog y contacto. Así quedaría la web de tu agencia inmobiliaria.',
  keywords: ['web para inmobiliaria', 'página web agencia inmobiliaria', 'diseño web agencia pisos'],
};

export default function InmobiliariaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="Arco Inmobiliaria"
        basePath="/demos/inmobiliaria"
        links={[
          { href: '/demos/inmobiliaria', label: 'Inicio' },
          { href: '/demos/inmobiliaria/propiedades', label: 'Propiedades' },
          { href: '/demos/inmobiliaria/nosotros', label: 'Nosotros' },
          { href: '/demos/inmobiliaria/blog', label: 'Blog' },
          { href: '/demos/inmobiliaria/contacto', label: 'Contacto' },
        ]}
        accentColor="#c9a227"
        bgColor="#ffffff"
        textColor="#001a4d"
        sector="agencia inmobiliaria"
      />
      {children}
    </>
  )
}

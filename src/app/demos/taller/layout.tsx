import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Taller Mecánico',
  description:
    'Ejemplo de diseño web para taller mecánico: servicios, diagnóstico, equipo y contacto. Así quedaría la web de tu taller de coches.',
  keywords: ['web para taller mecánico', 'página web taller coches', 'diseño web mecánico'],
};;

export default function TallerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      <DemoNav
        brand="MOTORWORK"
        basePath="/demos/taller"
        accentColor="#ff6600"
        bgColor="#0d0d0d"
        textColor="#f0f0f0"
        sector="taller mecánico"
        links={[
          { href: '/demos/taller', label: 'Inicio' },
          { href: '/demos/taller/servicios', label: 'Servicios' },
          { href: '/demos/taller/diagnostico', label: 'Diagnóstico' },
          { href: '/demos/taller/equipo', label: 'Equipo' },
          { href: '/demos/taller/contacto', label: 'Contacto' },
        ]}
      />
      <main>{children}</main>
    </div>
  );
}

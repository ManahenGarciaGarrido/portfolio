import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Barbería',
  description:
    'Ejemplo de diseño web para barbería: servicios, galería, equipo y reservas online. Así quedaría la web de tu barbería.',
  keywords: ['web para barbería', 'página web barbería', 'diseño web peluquería masculina'],
};

export default function BarberiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="BLADE & CO."
        basePath="/demos/barberia"
        links={[
          { href: '/demos/barberia', label: 'Inicio' },
          { href: '/demos/barberia/servicios', label: 'Servicios' },
          { href: '/demos/barberia/galeria', label: 'Galería' },
          { href: '/demos/barberia/equipo', label: 'Equipo' },
          { href: '/demos/barberia/reservar', label: 'Reservar' },
        ]}
        accentColor="#ff4444"
        bgColor="#1a0000"
        textColor="#f0e0e0"
        sector="barbería"
      />
      {children}
    </>
  )
}

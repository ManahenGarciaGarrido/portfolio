import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Spa y Centro de Belleza',
  description:
    'Ejemplo de diseño web para spa: tratamientos, galería, equipo y reservas. Así quedaría la web de tu spa o centro de estética.',
  keywords: ['web para spa', 'página web spa belleza', 'diseño web centro estética'],
};;

export default function SpaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff9f0', minHeight: '100vh' }}>
      <DemoNav
        brand="Celestial Spa"
        basePath="/demos/spa"
        links={[
          { href: '/demos/spa', label: 'Inicio' },
          { href: '/demos/spa/tratamientos', label: 'Tratamientos' },
          { href: '/demos/spa/galeria', label: 'Galería' },
          { href: '/demos/spa/equipo', label: 'Equipo' },
          { href: '/demos/spa/reservar', label: 'Reservar' },
        ]}
        accentColor="#c9a0c9"
        bgColor="#fff9f0"
        textColor="#8b5a8b"
        sector="spa y centro de belleza"
      />
      {children}
    </div>
  );
}

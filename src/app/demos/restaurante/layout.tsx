import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Restaurante',
  description:
    'Ejemplo de diseño web para restaurante: carta, galería, historia del chef y reservas online. Así quedaría la web de tu restaurante.',
  keywords: ['web para restaurante', 'página web restaurante', 'diseño web restauración'],
};;

export default function RestauranteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#1a0a00', minHeight: '100vh' }}>
      <DemoNav
        brand="Arcos"
        basePath="/demos/restaurante"
        accentColor="#d4a017"
        bgColor="#1a0a00"
        textColor="#fff5e6"
        sector="restaurante de alta cocina"
        links={[
          { href: '/demos/restaurante', label: 'Inicio' },
          { href: '/demos/restaurante/carta', label: 'Carta' },
          { href: '/demos/restaurante/galeria', label: 'Galería' },
          { href: '/demos/restaurante/historia', label: 'Historia' },
          { href: '/demos/restaurante/reservar', label: 'Reservar' },
        ]}
      />
      <main>{children}</main>
    </div>
  );
}

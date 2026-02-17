import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Hotel Boutique',
  description:
    'Ejemplo de diseño web para hotel: habitaciones, restaurante, galería y reservas online. Así quedaría la web de tu hotel o alojamiento.',
  keywords: ['web para hotel', 'página web hotel boutique', 'diseño web alojamiento rural'],
};

export default function HotelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#0a0805', minHeight: '100vh' }}>
      <DemoNav
        brand="PALACIO VERDE"
        basePath="/demos/hotel"
        links={[
          { href: '/demos/hotel', label: 'Inicio' },
          { href: '/demos/hotel/habitaciones', label: 'Habitaciones' },
          { href: '/demos/hotel/restaurante-hotel', label: 'Restaurante' },
          { href: '/demos/hotel/galeria', label: 'Galería' },
          { href: '/demos/hotel/reservar', label: 'Reservar' },
        ]}
        accentColor="#c8a96e"
        bgColor="#0a0805"
        textColor="#f5ece0"
        sector="hotel boutique"
      />
      {children}
    </div>
  )
}

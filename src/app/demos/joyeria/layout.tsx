import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Joyería de Lujo',
  description:
    'Ejemplo de diseño web para joyería: colecciones, joyería bespoke, historia y contacto. Así quedaría la web de tu joyería o taller de orfebrería.',
  keywords: ['web para joyería', 'página web joyería lujo', 'diseño web joyero'],
};;

export default function JoyeriaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <DemoNav
        brand="AURUM"
        basePath="/demos/joyeria"
        accentColor="#d4af37"
        bgColor="#000000"
        textColor="#f0e8d0"
        sector="joyería de lujo"
        links={[
          { href: '/demos/joyeria', label: 'Inicio' },
          { href: '/demos/joyeria/colecciones', label: 'Colecciones' },
          { href: '/demos/joyeria/bespoke', label: 'Bespoke' },
          { href: '/demos/joyeria/sobre-nosotros', label: 'Sobre Nosotros' },
          { href: '/demos/joyeria/contacto', label: 'Contacto' },
        ]}
      />
      <main>{children}</main>
    </div>
  );
}

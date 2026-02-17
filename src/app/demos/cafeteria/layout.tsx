import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Cafetería',
  description:
    'Ejemplo de diseño web para cafetería artesanal: carta, historia, programa de fidelidad y localización. Así quedaría la web de tu cafetería.',
  keywords: ['web para cafetería', 'página web café', 'diseño web cafetería artesanal'],
};

export default function CafeteriaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#fdf5e6', minHeight: '100vh' }}>
      <DemoNav
        brand="Café Artesano"
        basePath="/demos/cafeteria"
        links={[
          { href: '/demos/cafeteria', label: 'Inicio' },
          { href: '/demos/cafeteria/carta', label: 'Carta' },
          { href: '/demos/cafeteria/historia', label: 'Historia' },
          { href: '/demos/cafeteria/fidelidad', label: 'Fidelidad' },
          { href: '/demos/cafeteria/contacto', label: 'Visítanos' },
        ]}
        accentColor="#c8956c"
        bgColor="#fdf5e6"
        textColor="#3d1c02"
        sector="cafetería artesanal"
      />
      {children}
    </div>
  )
}

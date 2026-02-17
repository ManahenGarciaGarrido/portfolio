import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Bar de Cócteles',
  description:
    'Ejemplo de diseño web para bar de cócteles: carta de bebidas, reservas, eventos y contacto. Así quedaría la web de tu cocktail bar.',
  keywords: ['web para bar cócteles', 'página web bar', 'diseño web coctelería'],
};

export default function CocktailBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#05001a', minHeight: '100vh' }}>
      <DemoNav
        brand="NOIR BAR"
        basePath="/demos/cocktailbar"
        links={[
          { href: '/demos/cocktailbar', label: 'Inicio' },
          { href: '/demos/cocktailbar/carta', label: 'Carta' },
          { href: '/demos/cocktailbar/eventos', label: 'Eventos' },
          { href: '/demos/cocktailbar/reservar', label: 'Reservar' },
          { href: '/demos/cocktailbar/contacto', label: 'Contacto' },
        ]}
        accentColor="#b44ef0"
        bgColor="#05001a"
        textColor="#e8d5ff"
        sector="bar de cócteles"
      />
      {children}
    </div>
  )
}

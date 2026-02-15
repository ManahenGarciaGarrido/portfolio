import DemoNav from '@/components/demos/DemoNav'

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

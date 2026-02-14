import DemoNav from '@/components/demos/DemoNav'

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

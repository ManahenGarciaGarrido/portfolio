import DemoNav from '@/components/demos/DemoNav'

export default function ViajesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#001a35', minHeight: '100vh', color: '#e8f4ff' }}>
      <DemoNav
        brand="WANDERLUST"
        basePath="/demos/viajes"
        links={[
          { label: 'Inicio', href: '/demos/viajes' },
          { label: 'Destinos', href: '/demos/viajes/destinos' },
          { label: 'Paquetes', href: '/demos/viajes/paquetes' },
          { label: 'Nosotros', href: '/demos/viajes/nosotros' },
          { label: 'Contacto', href: '/demos/viajes/contacto' },
        ]}
        accentColor="#ff8c00"
        bgColor="#001a35"
        textColor="#e8f4ff"
        sector="agencia de viajes"
      />
      <main>{children}</main>
    </div>
  )
}

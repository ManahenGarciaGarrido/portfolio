import DemoNav from '@/components/demos/DemoNav'

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

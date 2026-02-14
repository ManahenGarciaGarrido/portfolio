import DemoNav from '@/components/demos/DemoNav'

export default function GymLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="INFERNO GYM"
        basePath="/demos/gym"
        links={[
          { href: '/demos/gym', label: 'Inicio' },
          { href: '/demos/gym/clases', label: 'Clases' },
          { href: '/demos/gym/planes', label: 'Planes' },
          { href: '/demos/gym/entrenadores', label: 'Entrenadores' },
          { href: '/demos/gym/contacto', label: 'Contacto' },
        ]}
        accentColor="#ff3300"
        bgColor="#0a0a0a"
        textColor="#ffffff"
        sector="gimnasio y centro de fitness"
      />
      {children}
    </>
  )
}

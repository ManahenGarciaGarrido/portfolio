import DemoNav from '@/components/demos/DemoNav'

export default function ArquitectoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="ARCO STUDIO"
        basePath="/demos/arquitecto"
        links={[
          { href: '/demos/arquitecto', label: 'Inicio' },
          { href: '/demos/arquitecto/proyectos', label: 'Proyectos' },
          { href: '/demos/arquitecto/proceso', label: 'Proceso' },
          { href: '/demos/arquitecto/equipo', label: 'Equipo' },
          { href: '/demos/arquitecto/contacto', label: 'Contacto' },
        ]}
        accentColor="#111111"
        bgColor="#f4f4f0"
        textColor="#1a1a1a"
        sector="estudio de arquitectura"
      />
      {children}
    </>
  )
}

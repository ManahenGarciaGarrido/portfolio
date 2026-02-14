import DemoNav from '@/components/demos/DemoNav'

export default function AbogadosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="Mendoza & Asociados"
        basePath="/demos/abogados"
        links={[
          { href: '/demos/abogados', label: 'Inicio' },
          { href: '/demos/abogados/areas', label: 'Áreas' },
          { href: '/demos/abogados/equipo', label: 'Equipo' },
          { href: '/demos/abogados/blog', label: 'Blog' },
          { href: '/demos/abogados/consulta', label: 'Consulta' },
        ]}
        accentColor="#c9a227"
        bgColor="#0d1b2a"
        textColor="#e8e8e8"
        sector="despacho de abogados"
      />
      <main style={{ background: '#0d1b2a', minHeight: '100vh', color: '#e8e8e8' }}>
        {children}
      </main>
    </>
  )
}

import DemoNav from '@/components/demos/DemoNav'

export default function FloristaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#fdf6f0', minHeight: '100vh', color: '#2d1a0e' }}>
      <DemoNav
        brand="PETAL & CO."
        basePath="/demos/florista"
        links={[
          { label: 'Inicio', href: '/demos/florista' },
          { label: 'Catálogo', href: '/demos/florista/catalogo' },
          { label: 'Bodas', href: '/demos/florista/bodas' },
          { label: 'Contacto', href: '/demos/florista/contacto' },
          { label: 'Blog', href: '/demos/florista/blog' },
        ]}
        accentColor="#2d6a4f"
        bgColor="#fdf6f0"
        textColor="#2d1a0e"
        sector="floristería"
      />
      <main>{children}</main>
    </div>
  )
}

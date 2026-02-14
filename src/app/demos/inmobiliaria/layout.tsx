import DemoNav from '@/components/demos/DemoNav'

export default function InmobiliariaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="Arco Inmobiliaria"
        basePath="/demos/inmobiliaria"
        links={[
          { href: '/demos/inmobiliaria', label: 'Inicio' },
          { href: '/demos/inmobiliaria/propiedades', label: 'Propiedades' },
          { href: '/demos/inmobiliaria/nosotros', label: 'Nosotros' },
          { href: '/demos/inmobiliaria/blog', label: 'Blog' },
          { href: '/demos/inmobiliaria/contacto', label: 'Contacto' },
        ]}
        accentColor="#c9a227"
        bgColor="#ffffff"
        textColor="#001a4d"
        sector="agencia inmobiliaria"
      />
      {children}
    </>
  )
}

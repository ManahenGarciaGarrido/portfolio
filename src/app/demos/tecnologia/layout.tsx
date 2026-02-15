import DemoNav from '@/components/demos/DemoNav'

export default function TecnologiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="ZENTECH"
        basePath="/demos/tecnologia"
        links={[
          { href: '/demos/tecnologia', label: 'Inicio' },
          { href: '/demos/tecnologia/productos', label: 'Productos' },
          { href: '/demos/tecnologia/comparador', label: 'Comparador' },
          { href: '/demos/tecnologia/garantia', label: 'Garantía' },
          { href: '/demos/tecnologia/contacto', label: 'Contacto' },
        ]}
        accentColor="#0066ff"
        bgColor="#fafafa"
        textColor="#1a1a1a"
        sector="tienda de tecnología"
      />
      {children}
    </>
  )
}

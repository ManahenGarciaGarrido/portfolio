import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Tienda de Tecnología',
  description:
    'Ejemplo de diseño web para tienda de tecnología: catálogo de productos, comparador, garantía y contacto. Así quedaría la web de tu tienda tech.',
  keywords: ['web para tienda tecnología', 'página web tienda informática', 'diseño web ecommerce tech'],
};

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

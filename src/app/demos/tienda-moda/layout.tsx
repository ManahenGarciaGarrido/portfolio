import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Tienda de Moda',
  description:
    'Ejemplo de diseño web para tienda de moda: catálogo de productos, lookbook y página de marca. Así quedaría la web de tu tienda de ropa.',
  keywords: ['web para tienda moda', 'página web tienda ropa', 'diseño web ecommerce moda'],
};;

export default function TiendaModa({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <DemoNav
        brand="NOIR"
        basePath="/demos/tienda-moda"
        accentColor="#FFE600"
        bgColor="#000000"
        textColor="#ffffff"
        sector="tienda de moda"
        links={[
          { href: '/demos/tienda-moda', label: 'Inicio' },
          { href: '/demos/tienda-moda/productos', label: 'Productos' },
          { href: '/demos/tienda-moda/lookbook', label: 'Lookbook' },
          { href: '/demos/tienda-moda/nosotros', label: 'Nosotros' },
        ]}
      />
      <main>{children}</main>
    </div>
  );
}

import DemoNav from '@/components/demos/DemoNav';

export default function RestauranteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#1a0a00', minHeight: '100vh' }}>
      <DemoNav
        brand="Arcos"
        basePath="/demos/restaurante"
        accentColor="#d4a017"
        bgColor="#1a0a00"
        textColor="#fff5e6"
        sector="restaurante de alta cocina"
        links={[
          { href: '/demos/restaurante', label: 'Inicio' },
          { href: '/demos/restaurante/carta', label: 'Carta' },
          { href: '/demos/restaurante/galeria', label: 'Galería' },
          { href: '/demos/restaurante/historia', label: 'Historia' },
          { href: '/demos/restaurante/reservar', label: 'Reservar' },
        ]}
      />
      <main>{children}</main>
    </div>
  );
}

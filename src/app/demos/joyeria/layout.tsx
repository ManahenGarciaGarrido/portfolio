import DemoNav from '@/components/demos/DemoNav';

export default function JoyeriaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <DemoNav
        brand="AURUM"
        basePath="/demos/joyeria"
        accentColor="#d4af37"
        bgColor="#000000"
        textColor="#f0e8d0"
        sector="joyería de lujo"
        links={[
          { href: '/demos/joyeria', label: 'Inicio' },
          { href: '/demos/joyeria/colecciones', label: 'Colecciones' },
          { href: '/demos/joyeria/bespoke', label: 'Bespoke' },
          { href: '/demos/joyeria/sobre-nosotros', label: 'Sobre Nosotros' },
          { href: '/demos/joyeria/contacto', label: 'Contacto' },
        ]}
      />
      <main>{children}</main>
    </div>
  );
}

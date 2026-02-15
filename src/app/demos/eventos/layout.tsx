import DemoNav from '@/components/demos/DemoNav';

export default function EventosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      <DemoNav
        brand="ÉLITE EVENTOS"
        basePath="/demos/eventos"
        accentColor="#d4af37"
        bgColor="#0d0d0d"
        textColor="#f5f0e0"
        sector="organización de eventos y bodas"
        links={[
          { href: '/demos/eventos', label: 'Inicio' },
          { href: '/demos/eventos/servicios', label: 'Servicios' },
          { href: '/demos/eventos/galeria', label: 'Galería' },
          { href: '/demos/eventos/paquetes', label: 'Paquetes' },
          { href: '/demos/eventos/contacto', label: 'Contacto' },
        ]}
      />
      <main>{children}</main>
    </div>
  );
}

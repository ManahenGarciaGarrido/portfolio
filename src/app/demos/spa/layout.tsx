import DemoNav from '@/components/demos/DemoNav';

export default function SpaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff9f0', minHeight: '100vh' }}>
      <DemoNav
        brand="Celestial Spa"
        basePath="/demos/spa"
        links={[
          { href: '/demos/spa', label: 'Inicio' },
          { href: '/demos/spa/tratamientos', label: 'Tratamientos' },
          { href: '/demos/spa/galeria', label: 'Galería' },
          { href: '/demos/spa/equipo', label: 'Equipo' },
          { href: '/demos/spa/reservar', label: 'Reservar' },
        ]}
        accentColor="#c9a0c9"
        bgColor="#fff9f0"
        textColor="#8b5a8b"
        sector="spa y centro de belleza"
      />
      {children}
    </div>
  );
}

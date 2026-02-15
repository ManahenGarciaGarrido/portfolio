import DemoNav from '@/components/demos/DemoNav';

export default function ClinicaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#f0f7ff', minHeight: '100vh' }}>
      <DemoNav
        brand="Salud+"
        basePath="/demos/clinica"
        accentColor="#0055cc"
        bgColor="#f0f7ff"
        textColor="#1a2a3a"
        sector="clínica médica"
        links={[
          { href: '/demos/clinica', label: 'Inicio' },
          { href: '/demos/clinica/especialidades', label: 'Especialidades' },
          { href: '/demos/clinica/equipo', label: 'Equipo' },
          { href: '/demos/clinica/cita', label: 'Cita Previa' },
          { href: '/demos/clinica/blog', label: 'Blog' },
        ]}
      />
      <main>{children}</main>
    </div>
  );
}

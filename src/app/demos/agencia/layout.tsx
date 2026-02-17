import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Agencia de Marketing Digital',
  description:
    'Ejemplo de diseño web para agencia de marketing digital: servicios, casos de éxito, equipo y contacto. Así quedaría la web de tu agencia.',
  keywords: ['web para agencia marketing', 'página web agencia digital', 'diseño web agencia publicidad'],
};

export default function AgenciaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#000000', minHeight: '100vh' }}>
      <DemoNav
        brand="DIGITAL+"
        basePath="/demos/agencia"
        links={[
          { href: '/demos/agencia', label: 'Inicio' },
          { href: '/demos/agencia/servicios', label: 'Servicios' },
          { href: '/demos/agencia/casos', label: 'Casos' },
          { href: '/demos/agencia/nosotros', label: 'Nosotros' },
          { href: '/demos/agencia/contacto', label: 'Contacto' },
        ]}
        accentColor="#00ff88"
        bgColor="#000000"
        textColor="#ffffff"
        sector="agencia de marketing digital"
      />
      {children}
    </div>
  )
}

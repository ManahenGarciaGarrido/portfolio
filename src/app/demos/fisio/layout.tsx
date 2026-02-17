import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Clínica de Fisioterapia',
  description:
    'Ejemplo de diseño web para clínica de fisioterapia: tratamientos, equipo, reservas y blog. Así quedaría la web de tu clínica de fisio.',
  keywords: ['web para fisioterapia', 'página web clínica fisio', 'diseño web fisioterapeuta'],
};

export default function FisioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="KINESIO SPORT"
        basePath="/demos/fisio"
        links={[
          { href: '/demos/fisio', label: 'Inicio' },
          { href: '/demos/fisio/tratamientos', label: 'Tratamientos' },
          { href: '/demos/fisio/equipo', label: 'Equipo' },
          { href: '/demos/fisio/reservar', label: 'Reservar' },
          { href: '/demos/fisio/blog', label: 'Blog' },
        ]}
        accentColor="#00c896"
        bgColor="#001f3f"
        textColor="#e8f8f4"
        sector="clínica de fisioterapia"
      />
      {children}
    </>
  )
}

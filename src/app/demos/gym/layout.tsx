import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Gimnasio y Centro de Fitness',
  description:
    'Ejemplo de diseño web para gimnasio: clases grupales, planes de membresía, entrenadores y contacto. Así quedaría la web de tu gym.',
  keywords: ['web para gimnasio', 'página web gym fitness', 'diseño web centro deportivo'],
};

export default function GymLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="INFERNO GYM"
        basePath="/demos/gym"
        links={[
          { href: '/demos/gym', label: 'Inicio' },
          { href: '/demos/gym/clases', label: 'Clases' },
          { href: '/demos/gym/planes', label: 'Planes' },
          { href: '/demos/gym/entrenadores', label: 'Entrenadores' },
          { href: '/demos/gym/contacto', label: 'Contacto' },
        ]}
        accentColor="#ff3300"
        bgColor="#0a0a0a"
        textColor="#ffffff"
        sector="gimnasio y centro de fitness"
      />
      {children}
    </>
  )
}

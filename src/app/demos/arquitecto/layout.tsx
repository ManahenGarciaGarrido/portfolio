import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Estudio de Arquitectura',
  description:
    'Ejemplo de diseño web para estudio de arquitectura: proyectos, proceso de diseño, equipo y contacto. Así quedaría la web de tu estudio.',
  keywords: ['web para arquitecto', 'página web estudio arquitectura', 'diseño web arquitectura'],
};

export default function ArquitectoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="ARCO STUDIO"
        basePath="/demos/arquitecto"
        links={[
          { href: '/demos/arquitecto', label: 'Inicio' },
          { href: '/demos/arquitecto/proyectos', label: 'Proyectos' },
          { href: '/demos/arquitecto/proceso', label: 'Proceso' },
          { href: '/demos/arquitecto/equipo', label: 'Equipo' },
          { href: '/demos/arquitecto/contacto', label: 'Contacto' },
        ]}
        accentColor="#111111"
        bgColor="#f4f4f0"
        textColor="#1a1a1a"
        sector="estudio de arquitectura"
      />
      {children}
    </>
  )
}

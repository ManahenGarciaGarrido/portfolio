import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Bufete de Abogados',
  description:
    'Ejemplo de diseño web para despacho de abogados: áreas de práctica, equipo jurídico, blog legal y formulario de consulta. Así quedaría la web de tu bufete.',
  keywords: ['web para abogados', 'página web despacho jurídico', 'diseño web bufete'],
};

export default function AbogadosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="Mendoza & Asociados"
        basePath="/demos/abogados"
        links={[
          { href: '/demos/abogados', label: 'Inicio' },
          { href: '/demos/abogados/areas', label: 'Áreas' },
          { href: '/demos/abogados/equipo', label: 'Equipo' },
          { href: '/demos/abogados/blog', label: 'Blog' },
          { href: '/demos/abogados/consulta', label: 'Consulta' },
        ]}
        accentColor="#c9a227"
        bgColor="#0d1b2a"
        textColor="#e8e8e8"
        sector="despacho de abogados"
      />
      <main style={{ background: '#0d1b2a', minHeight: '100vh', color: '#e8e8e8' }}>
        {children}
      </main>
    </>
  )
}

import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Academia de Formación Online',
  description:
    'Ejemplo de diseño web para academia online: cursos, instructores, precios y contacto. Así quedaría la web de tu academia o escuela de formación.',
  keywords: ['web para academia', 'página web escuela online', 'diseño web formación cursos'],
};

export default function AcademiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="LEARNX"
        basePath="/demos/academia"
        links={[
          { href: '/demos/academia', label: 'Inicio' },
          { href: '/demos/academia/cursos', label: 'Cursos' },
          { href: '/demos/academia/instructores', label: 'Instructores' },
          { href: '/demos/academia/precios', label: 'Precios' },
          { href: '/demos/academia/contacto', label: 'Contacto' },
        ]}
        accentColor="#4fc3f7"
        bgColor="#0a0a2e"
        textColor="#e8f4ff"
        sector="academia de formación online"
      />
      {children}
    </>
  )
}

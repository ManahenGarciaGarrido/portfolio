import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Fotógrafo Profesional',
  description:
    'Ejemplo de diseño web para fotógrafo profesional: galería de trabajos, servicios, blog y contacto. Así quedaría la web de tu estudio fotográfico.',
  keywords: ['web para fotógrafo', 'página web fotografía profesional', 'diseño web fotógrafo'],
};;

export default function FotografoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#000000', minHeight: '100vh' }}>
      <DemoNav
        brand="AV Fotografía"
        basePath="/demos/fotografo"
        links={[
          { href: '/demos/fotografo', label: 'Inicio' },
          { href: '/demos/fotografo/galeria', label: 'Galería' },
          { href: '/demos/fotografo/servicios', label: 'Servicios' },
          { href: '/demos/fotografo/blog', label: 'Blog' },
          { href: '/demos/fotografo/contacto', label: 'Contacto' },
        ]}
        accentColor="#b8860b"
        bgColor="#000000"
        textColor="#ffffff"
        sector="fotógrafo profesional"
      />
      {children}
    </div>
  );
}

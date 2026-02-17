import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Centro de Yoga y Meditación',
  description:
    'Ejemplo de diseño web para centro de yoga: clases, horarios, instructores y contacto. Así quedaría la web de tu estudio de yoga o meditación.',
  keywords: ['web para yoga', 'página web centro yoga', 'diseño web estudio yoga meditación'],
};;

export default function YogaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#f7f0e8', minHeight: '100vh' }}>
      <DemoNav
        brand="ZEN FLOW"
        basePath="/demos/yoga"
        accentColor="#c05c1a"
        bgColor="#f7f0e8"
        textColor="#3d2b1f"
        sector="centro de yoga y meditación"
        links={[
          { href: '/demos/yoga', label: 'Inicio' },
          { href: '/demos/yoga/clases', label: 'Clases' },
          { href: '/demos/yoga/instructores', label: 'Instructores' },
          { href: '/demos/yoga/horarios', label: 'Horarios' },
          { href: '/demos/yoga/contacto', label: 'Contacto' },
        ]}
      />
      <main>{children}</main>
    </div>
  );
}

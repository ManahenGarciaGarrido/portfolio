import type { Metadata } from 'next';
import DemoNav from '@/components/demos/DemoNav'

export const metadata: Metadata = {
  title: 'Demo Web para Startup y SaaS',
  description:
    'Ejemplo de diseño web para startup tecnológica: funciones del producto, precios, clientes y contacto. Así quedaría la web de tu startup o SaaS.',
  keywords: ['web para startup', 'página web SaaS', 'diseño web empresa tecnológica'],
};

export default function StartupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="NexusAI"
        basePath="/demos/startup"
        links={[
          { href: '/demos/startup', label: 'Inicio' },
          { href: '/demos/startup/funciones', label: 'Funciones' },
          { href: '/demos/startup/precios', label: 'Precios' },
          { href: '/demos/startup/clientes', label: 'Clientes' },
          { href: '/demos/startup/contacto', label: 'Contacto' },
        ]}
        accentColor="#6c00ff"
        bgColor="#0f0020"
        textColor="#ffffff"
        sector="startup tecnológica"
      />
      <main style={{ background: '#0f0020', minHeight: '100vh', color: '#ffffff' }}>
        {children}
      </main>
    </>
  )
}

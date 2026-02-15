import DemoNav from '@/components/demos/DemoNav'

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

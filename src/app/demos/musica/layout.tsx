import DemoNav from '@/components/demos/DemoNav'

export default function MusicaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoNav
        brand="BASSLINE"
        basePath="/demos/musica"
        links={[
          { href: '/demos/musica', label: 'Inicio' },
          { href: '/demos/musica/mixes', label: 'Mixes' },
          { href: '/demos/musica/eventos', label: 'Eventos' },
          { href: '/demos/musica/booking', label: 'Booking' },
          { href: '/demos/musica/bio', label: 'Bio' },
        ]}
        accentColor="#ff00cc"
        bgColor="#080010"
        textColor="#ffffff"
        sector="DJ y producción musical"
      />
      {children}
    </>
  )
}

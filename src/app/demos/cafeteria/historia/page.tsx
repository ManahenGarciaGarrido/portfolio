'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const bg = '#fdf5e6'
const accent = '#c8956c'
const dark = '#3d1c02'

const timeline = [
  {
    year: '2018',
    title: 'Abrimos las puertas',
    desc: 'Laura y Marcos, dos apasionados del café que se conocieron en una cata en Ámsterdam, inauguraron el primer Café Artesano en el barrio de Malasaña. 40 metros cuadrados, una máquina La Marzocco y una misión clara: hacer el mejor espresso de Madrid.',
    seed: 'story1',
  },
  {
    year: '2020',
    title: 'Primer Premio Nacional',
    desc: 'En un año difícil para todos, recibimos el Premio al Mejor Café de Especialidad de la Comunidad de Madrid. Este reconocimiento nos dio fuerzas para seguir adelante y reforzó nuestra apuesta por la calidad sin compromisos.',
    seed: 'story2',
  },
  {
    year: '2022',
    title: 'Segunda Ubicación',
    desc: 'Abrimos nuestro segundo local en el barrio de Chamberí, con el doble de espacio, zona de coworking y eventos mensuales de cata. También instalamos nuestra primera tostadora profesional Giesen W6.',
    seed: 'story3',
  },
  {
    year: '2024',
    title: 'Tostadería Online',
    desc: 'Lanzamos nuestra tienda online de café en grano y molido. Ahora podemos enviar nuestro café a toda España en 24-48 horas. Las suscripciones mensuales nos han permitido conectar con amantes del café de toda la península.',
    seed: 'story4',
  },
]

const values = [
  { icon: '🌱', title: 'Origen Directo', desc: 'Trabajamos directamente con agricultores en Etiopía, Colombia y Guatemala. Sin intermediarios. Precio justo para el productor, calidad superior para ti.' },
  { icon: '🔥', title: 'Tostado Artesanal', desc: 'Cada lote lo tostamos en nuestra propia Giesen W6. Controlamos temperatura, tiempo y flujo de aire para extraer el perfil de sabor ideal de cada origen.' },
  { icon: '💚', title: 'Sostenibilidad', desc: 'Residuo cero en nuestros locales. Los posos de café se compostan o donan a vecinos horticultores. Todos nuestros envases son compostables o reutilizables.' },
]

const team = [
  { seed: 'barista1', name: 'Laura Méndez', role: 'Fundadora & Head Roaster' },
  { seed: 'barista2', name: 'Marcos Gil', role: 'Cofundador & Q-Grader' },
  { seed: 'barista3', name: 'Sofía Ruiz', role: 'Head Barista Malasaña' },
  { seed: 'barista4', name: 'Pablo Torres', role: 'Head Barista Chamberí' },
]

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr min-content 1fr', gap: '1rem', alignItems: 'center', marginBottom: '4rem', position: 'relative' }}>
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ gridColumn: isEven ? 1 : 3, gridRow: 1 }}
      >
        {isEven ? (
          <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 30px rgba(61,28,2,0.1)' }}>
            <img src={`https://picsum.photos/seed/${item.seed}/600/400`} alt={item.title} style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: dark, fontSize: '1.3rem', margin: '0 0 0.75rem', fontWeight: 600 }}>{item.title}</h3>
              <p style={{ color: '#5a3a1a', fontSize: '0.9rem', lineHeight: 1.7, margin: 0, fontFamily: 'sans-serif' }}>{item.desc}</p>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'right', padding: '1rem' }}>
            <h3 style={{ color: dark, fontSize: '1.3rem', margin: '0 0 0.75rem', fontWeight: 600 }}>{item.title}</h3>
            <p style={{ color: '#5a3a1a', fontSize: '0.9rem', lineHeight: 1.7, margin: 0, fontFamily: 'sans-serif' }}>{item.desc}</p>
          </div>
        )}
      </motion.div>

      {/* CENTER YEAR */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          gridColumn: 2,
          gridRow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 1,
        }}
      >
        <div style={{ width: 3, height: 40, background: `rgba(200,149,108,0.3)`, borderRadius: 2 }} />
        <div style={{
          background: accent,
          color: '#fff',
          borderRadius: 12,
          padding: '0.5rem 0.75rem',
          fontWeight: 700,
          fontSize: '1rem',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          boxShadow: `0 4px 20px rgba(200,149,108,0.4)`,
        }}>
          {item.year}
        </div>
        <div style={{ width: 3, height: 40, background: `rgba(200,149,108,0.3)`, borderRadius: 2 }} />
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ gridColumn: isEven ? 3 : 1, gridRow: 1 }}
      >
        {!isEven ? (
          <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 30px rgba(61,28,2,0.1)' }}>
            <img src={`https://picsum.photos/seed/${item.seed}/600/400`} alt={item.title} style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: dark, fontSize: '1.3rem', margin: '0 0 0.75rem', fontWeight: 600 }}>{item.title}</h3>
              <p style={{ color: '#5a3a1a', fontSize: '0.9rem', lineHeight: 1.7, margin: 0, fontFamily: 'sans-serif' }}>{item.desc}</p>
            </div>
          </div>
        ) : (
          <div style={{ padding: '1rem' }}>
            <h3 style={{ color: dark, fontSize: '1.3rem', margin: '0 0 0.75rem', fontWeight: 600 }}>{item.title}</h3>
            <p style={{ color: '#5a3a1a', fontSize: '0.9rem', lineHeight: 1.7, margin: 0, fontFamily: 'sans-serif' }}>{item.desc}</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default function HistoriaPage() {
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true })
  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true })

  return (
    <main style={{ background: bg, fontFamily: 'Georgia, serif', minHeight: '100vh' }}>
      {/* HERO */}
      <div style={{ position: 'relative', height: 480, overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/coffee-story/1200/600"
          alt="Nuestra historia"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.45)' }}
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ color: accent, letterSpacing: '0.3em', fontSize: '0.85rem', textTransform: 'uppercase', fontFamily: 'sans-serif', display: 'block', marginBottom: '1rem' }}>
              ✦ Nuestra Historia ✦
            </span>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, margin: '0 0 1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Del grano a la taza,<br />con amor
            </h1>
            <p style={{ color: '#f0d5b5', fontStyle: 'italic', fontSize: '1.1rem', margin: 0 }}>
              Seis años persiguiendo la taza perfecta
            </p>
          </motion.div>
        </div>
      </div>

      {/* INTRO */}
      <div style={{ maxWidth: 700, margin: '4rem auto', padding: '0 2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#5a3a1a', fontStyle: 'italic' }}>
          "El café no es solo una bebida. Es el ritual que da forma a tu mañana, el pretexto para una conversación que cambia algo, el puente entre dos personas. En Café Artesano, creemos que cada taza merece ser extraordinaria."
        </p>
        <div style={{ color: accent, marginTop: '1rem', fontFamily: 'sans-serif', fontWeight: 600 }}>— Laura Méndez, Fundadora</div>
      </div>

      {/* TIMELINE */}
      <section style={{ padding: '2rem 2rem 4rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: dark, fontSize: '2rem', fontWeight: 400, margin: '0 0 0.5rem' }}>Nuestra Trayectoria</h2>
          <div style={{ width: 60, height: 3, background: accent, margin: '0 auto', borderRadius: 2 }} />
        </div>
        {timeline.map((item, i) => <TimelineItem key={item.year} item={item} index={i} />)}
      </section>

      {/* FILOSOFÍA */}
      <section ref={valuesRef} style={{ background: dark, padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: accent, letterSpacing: '0.3em', fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'sans-serif', display: 'block', marginBottom: '0.75rem' }}>
              Lo que nos mueve
            </span>
            <h2 style={{ color: '#fdf5e6', fontSize: '2rem', fontWeight: 400, margin: 0 }}>Nuestra Filosofía</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(200,149,108,0.3)', borderRadius: 16, padding: '2rem', textAlign: 'center' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{val.icon}</div>
                <h3 style={{ color: accent, fontSize: '1.15rem', margin: '0 0 0.75rem', fontWeight: 600 }}>{val.title}</h3>
                <p style={{ color: '#c8a882', fontSize: '0.9rem', lineHeight: 1.7, margin: 0, fontFamily: 'sans-serif' }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section ref={teamRef} style={{ padding: '5rem 2rem', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: accent, letterSpacing: '0.3em', fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'sans-serif', display: 'block', marginBottom: '0.75rem' }}>
            Las personas detrás del café
          </span>
          <h2 style={{ color: dark, fontSize: '2rem', fontWeight: 400, margin: 0 }}>Nuestro Equipo</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
          {team.map((member, i) => (
            <motion.div
              key={member.seed}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={teamInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ borderRadius: '50%', overflow: 'hidden', width: 140, height: 140, margin: '0 auto 1rem', border: `4px solid ${accent}` }}>
                <img src={`https://picsum.photos/seed/${member.seed}/300/300`} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <h3 style={{ color: dark, fontSize: '1rem', margin: '0 0 0.25rem', fontWeight: 600 }}>{member.name}</h3>
              <p style={{ color: accent, fontSize: '0.85rem', margin: 0, fontFamily: 'sans-serif' }}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: accent, padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 400, margin: '0 0 1.5rem' }}>¿Quieres conocernos en persona?</h2>
        <motion.a
          href="/demos/cafeteria/contacto"
          whileHover={{ scale: 1.05 }}
          style={{ display: 'inline-block', background: dark, color: '#fdf5e6', padding: '0.9rem 2.5rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontFamily: 'sans-serif' }}
        >
          Visítanos
        </motion.a>
      </div>
    </main>
  )
}

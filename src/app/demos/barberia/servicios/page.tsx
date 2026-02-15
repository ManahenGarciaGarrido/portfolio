'use client'

import { motion } from 'framer-motion'

const BG = '#1a0000'
const ACCENT = '#ff4444'
const TEXT = '#f0e0e0'
const CARD_BG = '#2a0a0a'
const DARK_CARD = '#220505'

export default function BarberiaServicios() {
  const services = [
    {
      seed: 'barber-service1',
      name: 'Corte Clásico',
      desc: 'El corte de toda la vida, ejecutado con maestría. Incluye lavado, corte con tijera y máquina, secado y peinado con producto. El estilo atemporal que nunca pasa de moda.',
      duration: '45 min',
      price: '25€',
      tag: 'Popular',
    },
    {
      seed: 'barber-service2',
      name: 'Corte Moderno',
      desc: 'Para el hombre que busca tendencia. Fade, undercut, texturizados — ejecutamos los cortes más demandados con técnica y precisión.',
      duration: '50 min',
      price: '30€',
      tag: 'Tendencia',
    },
    {
      seed: 'barber-service3',
      name: 'Afeitado a Navaja',
      desc: 'La experiencia definitiva del barbero clásico. Toalla caliente, crema de afeitar premium, navaja recta y loción aftershave. Una tradición que merece la pena vivir.',
      duration: '35 min',
      price: '30€',
      tag: 'Exclusivo',
    },
    {
      seed: 'barber-service4',
      name: 'Arreglo de Barba',
      desc: 'Perfilado y definición de barba con tijera y maquinilla. Incluye aplicación de aceite de barba y cera para un acabado perfecto y duradero.',
      duration: '30 min',
      price: '20€',
      tag: null,
    },
    {
      seed: 'barber-service5',
      name: 'Diseño de Barba',
      desc: 'Transformación completa del perfil facial. Diseñamos la forma de tu barba en función de tu morfología facial para lograr el look perfecto para ti.',
      duration: '45 min',
      price: '35€',
      tag: 'Especialidad',
    },
    {
      seed: 'barber-service6',
      name: 'Pack Novio',
      desc: 'Preparación completa para el gran día. Corte, arreglo de barba, afeitado, cejas y hidratación facial. Incluye consulta previa y prueba una semana antes.',
      duration: '120 min',
      price: '80€',
      tag: 'Premium',
    },
  ]

  const brands = [
    { name: 'American Crew', desc: 'Ceras, pomadas y fijadores de alta calidad' },
    { name: 'Proraso', desc: 'Cremas de afeitar y products para barba desde 1948' },
    { name: 'Layrite', desc: 'Pomadas de agua para el estilo vintage' },
    { name: 'The Bluebeards Revenge', desc: 'Especialistas en el cuidado de la barba' },
    { name: 'Reuzel', desc: 'Pomadas y grasas para el rockabilly y el clásico' },
    { name: 'Captain Fawcett', desc: 'Aceites y bálsamos artesanales para barba' },
  ]

  const packs = [
    { name: 'Pack Completo', includes: ['Corte Clásico', 'Arreglo de Barba', 'Afeitado a Navaja'], price: '55€', saving: 'Ahorra 20€', highlight: true },
    { name: 'Pack Express', includes: ['Corte Moderno', 'Arreglo de Barba'], price: '45€', saving: 'Ahorra 5€', highlight: false },
    { name: 'Pack Mantenimiento', includes: ['Recorte de puntas', 'Perfilado de barba', 'Cejas'], price: '30€', saving: 'Ahorra 10€', highlight: false },
  ]

  return (
    <div style={{ background: BG, color: TEXT, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* PAGE HEADER */}
      <section style={{ background: DARK_CARD, padding: '6rem 0 3rem', borderBottom: `1px solid ${ACCENT}33` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '1rem' }}>
              Lo que ofrecemos
            </p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: TEXT, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Servicios
            </h1>
            <p style={{ color: '#a08080', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontStyle: 'italic' }}>
              Cada servicio es una experiencia. Cada visita, un ritual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div className="r-grid-3">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: `0 16px 40px rgba(255,68,68,0.2)` }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${ACCENT}22`,
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={`https://picsum.photos/seed/${s.seed}/400/300`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    alt={s.name}
                  />
                  {s.tag && (
                    <div style={{
                      position: 'absolute', top: '1rem', right: '1rem',
                      background: ACCENT, color: '#fff',
                      padding: '0.25rem 0.75rem', fontSize: '0.75rem',
                      fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>
                      {s.tag}
                    </div>
                  )}
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: TEXT, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {s.name}
                  </h3>
                  <p style={{ color: '#a08080', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {s.desc}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${ACCENT}22`, paddingTop: '1rem' }}>
                    <span style={{ color: '#806060', fontSize: '0.85rem' }}>⏱ {s.duration}</span>
                    <span style={{ fontSize: '1.75rem', fontWeight: 900, color: ACCENT }}>{s.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section className="r-section" style={{ background: DARK_CARD }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Ahorra más</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT, textTransform: 'uppercase' }}>Packs Combinados</h2>
          </motion.div>
          <div className="r-grid-3">
            {packs.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{
                  background: p.highlight ? ACCENT : CARD_BG,
                  border: `2px solid ${p.highlight ? ACCENT : ACCENT + '33'}`,
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {p.highlight && (
                  <div style={{
                    position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                    background: '#fff', color: ACCENT, padding: '0.2rem 1rem',
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
                  }}>
                    Más Popular
                  </div>
                )}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: p.highlight ? '#fff' : TEXT, marginBottom: '1.5rem', textTransform: 'uppercase' }}>{p.name}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', textAlign: 'left' }}>
                  {p.includes.map(item => (
                    <li key={item} style={{ color: p.highlight ? 'rgba(255,255,255,0.9)' : '#c0a0a0', padding: '0.4rem 0', fontSize: '0.9rem', borderBottom: `1px solid ${p.highlight ? 'rgba(255,255,255,0.2)' : ACCENT + '22'}` }}>
                      ✓ {item}
                    </li>
                  ))}
                </ul>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: p.highlight ? '#fff' : ACCENT, marginBottom: '0.5rem' }}>{p.price}</div>
                <div style={{ fontSize: '0.85rem', color: p.highlight ? 'rgba(255,255,255,0.8)' : ACCENT, fontWeight: 600 }}>{p.saving}</div>
                <a
                  href="/demos/barberia/reservar"
                  style={{
                    display: 'block', marginTop: '1.5rem',
                    background: p.highlight ? '#fff' : ACCENT,
                    color: p.highlight ? ACCENT : '#fff',
                    padding: '0.85rem', textDecoration: 'none',
                    fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem',
                  }}
                >
                  Reservar
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Solo lo mejor</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT, textTransform: 'uppercase' }}>Productos que Usamos</h2>
          </motion.div>
          <div className="r-grid-3">
            {brands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: CARD_BG, padding: '1.5rem',
                  border: `1px solid ${ACCENT}22`,
                  display: 'flex', flexDirection: 'column', gap: '0.5rem',
                }}
              >
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: TEXT }}>{b.name}</h4>
                <p style={{ color: '#806060', fontSize: '0.85rem', lineHeight: 1.6 }}>{b.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              marginTop: '3rem',
              background: CARD_BG,
              border: `2px solid ${ACCENT}`,
              padding: '2.5rem',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: ACCENT, marginBottom: '0.75rem' }}>
              🃏 Tarjeta de Fidelidad
            </h3>
            <p style={{ color: TEXT, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
              ¡Tu <strong style={{ color: ACCENT }}>10ª visita es gratis!</strong>
            </p>
            <p style={{ color: '#a08080', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              Recoge tu tarjeta de fidelidad en tu primera visita. Válida para todos los servicios excepto packs especiales y pack novio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="r-section-sm" style={{ background: DARK_CARD, textAlign: 'center', borderTop: `1px solid ${ACCENT}33` }}>
        <div className="r-container">
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: TEXT, marginBottom: '1.5rem' }}>
            ¿Tienes preguntas sobre algún servicio?
          </h3>
          <a
            href="/demos/barberia/reservar"
            style={{
              display: 'inline-block', background: ACCENT, color: '#fff',
              padding: '1rem 3rem', textDecoration: 'none',
              fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem',
            }}
          >
            Consulta sin compromiso
          </a>
        </div>
      </section>

    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const BG = '#1a0000'
const ACCENT = '#ff4444'
const TEXT = '#f0e0e0'
const CARD_BG = '#2a0a0a'
const DARK_CARD = '#220505'

export default function BarberiaEquipo() {
  const [applyOpen, setApplyOpen] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', experiencia: '', mensaje: '' })

  const team = [
    {
      seed: 'barber-team1',
      name: 'Marco Ruiz',
      role: 'Master Barber & Co-Fundador',
      specialties: ['Cortes Clásicos', 'Pompadour', 'Fade'],
      years: 18,
      motto: '"El detalle es lo que separa un buen corte de una obra de arte."',
      ig: '@marco.blade',
      bio: 'Formado en las mejores barberías de Sevilla y Nueva York. Marco trae la tradición barbera española con un toque de modernidad neoyorquina. Campeón regional de barbería 2019.',
    },
    {
      seed: 'barber-team2',
      name: 'Diego Vega',
      role: 'Especialista en Barbas',
      specialties: ['Diseño de Barba', 'Barbas Largas', 'Perfilado'],
      years: 10,
      motto: '"Una barba bien cuidada dice más que mil palabras."',
      ig: '@diego.blade',
      bio: 'Diego es el artista de las barbas del equipo. Especializado en diseño facial y morfología, convierte cualquier barba en una declaración de estilo personal.',
    },
    {
      seed: 'barber-team3',
      name: 'Carlos Medina',
      role: 'Especialista en Afeitado Clásico',
      specialties: ['Afeitado a Navaja', 'Toalla Caliente', 'Tratamientos'],
      years: 15,
      motto: '"La navaja recta es el pincel del barbero."',
      ig: '@carlos.blade',
      bio: 'Carlos aprendió el arte del afeitado a navaja de su abuelo barbero en Córdoba. Cada afeitado suyo es un ritual que lleva al cliente a otra época.',
    },
    {
      seed: 'barber-team4',
      name: 'Álvaro Torres',
      role: 'Barbero de Tendencias',
      specialties: ['Undercuts', 'Fade Moderno', 'Diseño Creativo'],
      years: 6,
      motto: '"El estilo no envejece, evoluciona."',
      ig: '@alvaro.blade',
      bio: 'El más joven del equipo pero con talento innato para las tendencias actuales. Álvaro trae la energía de las últimas tendencias internacionales al sillón de Blade & Co.',
    },
  ]

  const values = [
    { icon: '✂️', title: 'Artesanía', desc: 'Cada corte ejecutado con precisión milimétrica y amor al oficio.' },
    { icon: '📚', title: 'Formación continua', desc: 'Asistimos a congresos y talleres para estar siempre a la vanguardia.' },
    { icon: '🤝', title: 'Relación de confianza', desc: 'Nos convertimos en el barbero de confianza de nuestros clientes.' },
    { icon: '🏆', title: 'Premios y reconocimiento', desc: 'Múltiples galardones del sector barbero nacional e internacional.' },
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
              Los artesanos
            </p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: TEXT, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Nuestro Equipo
            </h1>
            <p style={{ color: '#a08080', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontStyle: 'italic' }}>
              Cuatro artesanos. Una filosofía. El estilo tomado en serio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM CARDS */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '3rem',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    order: i % 2 === 1 ? 2 : 0,
                    overflow: 'hidden',
                    position: 'relative',
                    maxWidth: '380px',
                    margin: i % 2 === 1 ? '0 0 0 auto' : '0',
                  }}
                >
                  <div style={{ height: '480px', overflow: 'hidden' }}>
                    <img
                      src={`https://picsum.photos/seed/${member.seed}/350/450`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      alt={member.name}
                    />
                  </div>
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: `linear-gradient(to top, ${BG} 0%, transparent 100%)`,
                    padding: '2rem 1.5rem 1.5rem',
                  }}>
                    <p style={{ color: ACCENT, fontSize: '0.85rem', fontWeight: 600 }}>{member.ig}</p>
                  </div>
                </div>
                <div style={{ order: i % 2 === 1 ? 0 : 2, padding: '1rem 0' }}>
                  <p style={{ color: ACCENT, letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                    {member.years} años de experiencia
                  </p>
                  <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: TEXT, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    {member.name}
                  </h2>
                  <p style={{ color: ACCENT, fontSize: '0.95rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 600 }}>
                    {member.role}
                  </p>
                  <p style={{ color: '#c0a0a0', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                    {member.bio}
                  </p>
                  <blockquote style={{
                    borderLeft: `3px solid ${ACCENT}`,
                    paddingLeft: '1.25rem',
                    marginBottom: '1.75rem',
                    color: '#a08080',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                  }}>
                    {member.motto}
                  </blockquote>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {member.specialties.map(spec => (
                      <span key={spec} style={{
                        background: CARD_BG,
                        border: `1px solid ${ACCENT}44`,
                        color: TEXT,
                        padding: '0.35rem 0.85rem',
                        fontSize: '0.8rem',
                        letterSpacing: '0.05em',
                      }}>
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="r-section" style={{ background: DARK_CARD }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Quiénes somos</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT, textTransform: 'uppercase' }}>Nuestros Valores</h2>
          </motion.div>
          <div className="r-grid-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{
                  background: CARD_BG, padding: '2rem',
                  border: `1px solid ${ACCENT}22`,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: TEXT, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{v.title}</h3>
                <p style={{ color: '#a08080', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN THE TEAM */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>¿Eres el próximo?</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT, textTransform: 'uppercase', marginBottom: '1rem' }}>
              Únete al Equipo
            </h2>
            <p style={{ color: '#a08080', lineHeight: 1.8, marginBottom: '2rem' }}>
              Buscamos barberos apasionados con ganas de crecer en un entorno profesional de primer nivel. Si compartes nuestra filosofía y quieres ser parte de Blade & Co., queremos conocerte.
            </p>
            <button
              onClick={() => setApplyOpen(!applyOpen)}
              style={{
                background: ACCENT, color: '#fff', border: 'none',
                padding: '1rem 3rem', cursor: 'pointer',
                fontFamily: 'Georgia, serif', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem',
              }}
            >
              {applyOpen ? 'Cerrar Formulario' : 'Enviar Candidatura'}
            </button>
          </motion.div>

          {applyOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.4 }}
              style={{ background: CARD_BG, padding: '2.5rem', border: `1px solid ${ACCENT}33` }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: TEXT, marginBottom: '2rem', textTransform: 'uppercase' }}>
                Formulario de Candidatura
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Nombre completo', key: 'nombre', type: 'text' },
                  { label: 'Email', key: 'email', type: 'email' },
                  { label: 'Teléfono', key: 'telefono', type: 'tel' },
                  { label: 'Años de experiencia', key: 'experiencia', type: 'text' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ display: 'block', color: ACCENT, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      style={{
                        width: '100%', background: DARK_CARD, border: `1px solid ${ACCENT}33`,
                        color: TEXT, padding: '0.85rem 1rem', fontFamily: 'Georgia, serif',
                        fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box',
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', color: ACCENT, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Cuéntanos sobre ti
                  </label>
                  <textarea
                    value={form.mensaje}
                    onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    rows={4}
                    style={{
                      width: '100%', background: DARK_CARD, border: `1px solid ${ACCENT}33`,
                      color: TEXT, padding: '0.85rem 1rem', fontFamily: 'Georgia, serif',
                      fontSize: '0.95rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                    }}
                  />
                </div>
                <button
                  style={{
                    background: ACCENT, color: '#fff', border: 'none',
                    padding: '1rem', cursor: 'pointer',
                    fontFamily: 'Georgia, serif', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem',
                  }}
                >
                  Enviar Candidatura
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  )
}

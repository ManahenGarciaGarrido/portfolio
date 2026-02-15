'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const BG = '#0a0a2e'
const ACCENT = '#4fc3f7'
const TEXT = '#e8f4ff'
const CARD_BG = '#0f0f3a'
const DARK_CARD = '#080820'

const instructors = [
  {
    seed: 'instructor1',
    name: 'Ana Martínez',
    specialty: 'Desarrollo Full Stack',
    bio: 'Ex-ingeniera en Google. 10 años de experiencia construyendo aplicaciones a escala. Ahora forma a la próxima generación de desarrolladores.',
    courses: 8,
    students: 12400,
    rating: 4.9,
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
  },
  {
    seed: 'instructor2',
    name: 'Carlos López',
    specialty: 'Data Science & Machine Learning',
    bio: 'PhD en Matemáticas, científico de datos en startups y grandes corporaciones. Hace accesible lo complejo con ejemplos del mundo real.',
    courses: 5,
    students: 8900,
    rating: 4.8,
    tags: ['Python', 'TensorFlow', 'SQL', 'Pandas'],
  },
  {
    seed: 'instructor3',
    name: 'Laura Sánchez',
    specialty: 'Marketing Digital & SEO',
    bio: 'Directora de Marketing Digital durante 8 años. Ha gestionado presupuestos de más de 2M€ en publicidad digital para marcas internacionales.',
    courses: 6,
    students: 15200,
    rating: 4.7,
    tags: ['SEO', 'Google Ads', 'Meta Ads', 'Email Marketing'],
  },
  {
    seed: 'instructor4',
    name: 'María Torres',
    specialty: 'UI/UX Design',
    bio: 'Diseñadora senior con experiencia en agencias premiadas de Madrid y Berlín. Especialista en sistemas de diseño y accesibilidad web.',
    courses: 4,
    students: 6700,
    rating: 4.8,
    tags: ['Figma', 'Design Systems', 'Prototyping', 'UX Research'],
  },
  {
    seed: 'instructor5',
    name: 'Javier Ruiz',
    specialty: 'Emprendimiento & Negocios',
    bio: 'Serial entrepreneur con 3 exits. Mentor de startups en Wayra y Lanzadera. Comparte el conocimiento real del mundo empresarial.',
    courses: 3,
    students: 4300,
    rating: 4.6,
    tags: ['Lean Startup', 'Fundraising', 'Go-to-Market', 'OKRs'],
  },
  {
    seed: 'instructor6',
    name: 'Roberto Gómez',
    specialty: 'Programación para Principiantes',
    bio: 'Profesor universitario apasionado por la educación. Su método progresivo ha llevado a más de 6.500 alumnos a dar sus primeros pasos en programación.',
    courses: 4,
    students: 18500,
    rating: 4.9,
    tags: ['Python', 'Algoritmos', 'Bases de Datos', 'Git'],
  },
]

export default function AcademiaInstructores() {
  const [applyOpen, setApplyOpen] = useState(false)
  const [applyForm, setApplyForm] = useState({ nombre: '', email: '', especialidad: '', linkedin: '', mensaje: '' })

  return (
    <div style={{ background: BG, color: TEXT, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* HEADER */}
      <section style={{ background: DARK_CARD, padding: '6rem 0 3rem', borderBottom: `1px solid ${ACCENT}22` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Aprende de los mejores
            </p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: TEXT, marginBottom: '1rem' }}>
              Nuestros Instructores
            </h1>
            <p style={{ color: '#a0c4e8', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              Profesionales en activo con experiencia real en la industria. No solo saben: también enseñan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INSTRUCTORS GRID */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div className="r-grid-3">
            {instructors.map((inst, i) => (
              <motion.div
                key={inst.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: `0 20px 50px ${ACCENT}22` }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${ACCENT}22`,
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={`https://picsum.photos/seed/${inst.seed}/300/350`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    alt={inst.name}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: `linear-gradient(to top, ${BG} 0%, transparent 100%)`,
                    height: '60%',
                  }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: TEXT, marginBottom: '0.25rem' }}>{inst.name}</h3>
                  <p style={{ color: ACCENT, fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.05em' }}>{inst.specialty}</p>
                  <p style={{ color: '#a0c4e8', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{inst.bio}</p>
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem', borderTop: `1px solid ${ACCENT}22`, paddingTop: '1rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: ACCENT }}>{inst.courses}</div>
                      <div style={{ fontSize: '0.7rem', color: '#a0c4e8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cursos</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: ACCENT }}>{(inst.students / 1000).toFixed(1)}k</div>
                      <div style={{ fontSize: '0.7rem', color: '#a0c4e8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Alumnos</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffd700' }}>★ {inst.rating}</div>
                      <div style={{ fontSize: '0.7rem', color: '#a0c4e8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Rating</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {inst.tags.map(tag => (
                      <span key={tag} style={{
                        background: `${ACCENT}15`, color: ACCENT,
                        padding: '0.2rem 0.6rem', borderRadius: '3px',
                        fontSize: '0.72rem', fontWeight: 600,
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BECOME AN INSTRUCTOR */}
      <section className="r-section" style={{ background: DARK_CARD }}>
        <div className="r-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Comparte tu conocimiento
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT, marginBottom: '1rem' }}>
              Conviértete en Instructor
            </h2>
            <p style={{ color: '#a0c4e8', lineHeight: 1.8, marginBottom: '1rem' }}>
              ¿Tienes conocimientos en algún área que pueda beneficiar a miles de personas? En LearnX te damos la plataforma, las herramientas y el soporte para crear cursos de alta calidad.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {[
                { icon: '💰', label: 'Ingresos pasivos recurrentes' },
                { icon: '🌍', label: 'Alcanza a miles de alumnos' },
                { icon: '🛠️', label: 'Herramientas de creación pro' },
                { icon: '📊', label: 'Dashboard de analíticas' },
              ].map(b => (
                <div key={b.label} style={{ textAlign: 'center', maxWidth: '140px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{b.icon}</div>
                  <div style={{ color: '#a0c4e8', fontSize: '0.85rem', lineHeight: 1.4 }}>{b.label}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setApplyOpen(!applyOpen)}
              style={{
                background: ACCENT, color: BG, border: 'none',
                padding: '1rem 3rem', cursor: 'pointer',
                fontFamily: 'system-ui, sans-serif', fontWeight: 700,
                fontSize: '0.95rem', borderRadius: '4px',
              }}
            >
              {applyOpen ? 'Cerrar formulario' : 'Solicitar ser instructor'}
            </button>
          </motion.div>

          {applyOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.4 }}
              style={{ background: CARD_BG, padding: '2.5rem', borderRadius: '8px', border: `1px solid ${ACCENT}33` }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: TEXT, marginBottom: '2rem' }}>
                Formulario de Solicitud
              </h3>
              <div style={{ display: 'grid', gap: '1.25rem' }}>
                {[
                  { label: 'Nombre completo', key: 'nombre', type: 'text', placeholder: 'Tu nombre' },
                  { label: 'Email profesional', key: 'email', type: 'email', placeholder: 'tu@email.com' },
                  { label: 'Área de especialidad', key: 'especialidad', type: 'text', placeholder: 'Ej: Desarrollo Web, Data Science...' },
                  { label: 'Perfil de LinkedIn', key: 'linkedin', type: 'url', placeholder: 'https://linkedin.com/in/...' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ display: 'block', color: ACCENT, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={applyForm[field.key as keyof typeof applyForm]}
                      onChange={e => setApplyForm({ ...applyForm, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      style={{
                        width: '100%', background: DARK_CARD, border: `1px solid ${ACCENT}33`,
                        color: TEXT, padding: '0.85rem 1rem', fontFamily: 'system-ui, sans-serif',
                        fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', borderRadius: '4px',
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', color: ACCENT, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    ¿Por qué quieres ser instructor?
                  </label>
                  <textarea
                    value={applyForm.mensaje}
                    onChange={e => setApplyForm({ ...applyForm, mensaje: e.target.value })}
                    rows={4}
                    placeholder="Cuéntanos tu experiencia y qué cursos podrías crear..."
                    style={{
                      width: '100%', background: DARK_CARD, border: `1px solid ${ACCENT}33`,
                      color: TEXT, padding: '0.85rem 1rem', fontFamily: 'system-ui, sans-serif',
                      fontSize: '0.95rem', outline: 'none', resize: 'vertical',
                      boxSizing: 'border-box', borderRadius: '4px',
                    }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: ACCENT, color: BG, border: 'none',
                    padding: '1rem', cursor: 'pointer',
                    fontFamily: 'system-ui, sans-serif', fontWeight: 700,
                    fontSize: '0.95rem', borderRadius: '4px',
                  }}
                >
                  Enviar Solicitud
                </motion.button>
                <p style={{ color: '#a0c4e8', fontSize: '0.8rem', textAlign: 'center' }}>
                  Respondemos en menos de 48 horas · Proceso de selección con entrevista
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* STATS */}
      <section className="r-section-sm" style={{ background: BG, textAlign: 'center', borderTop: `1px solid ${ACCENT}22` }}>
        <div className="r-container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            {[
              { num: '6', label: 'Instructores expertos' },
              { num: '85', label: 'Cursos disponibles' },
              { num: '66k+', label: 'Alumnos formados' },
              { num: '4.8', label: 'Rating medio' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: ACCENT }}>{s.num}</div>
                <div style={{ color: '#a0c4e8', fontSize: '0.85rem', marginTop: '0.25rem' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

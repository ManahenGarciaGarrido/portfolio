'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const BG = '#0a0a2e'
const ACCENT = '#4fc3f7'
const TEXT = '#e8f4ff'
const CARD_BG = '#0f0f3a'
const DARK_CARD = '#080820'

const categories = ['Todo', 'Programación', 'Marketing', 'Diseño', 'Datos', 'Negocios']

const courses = [
  {
    seed: 'course1',
    cat: 'Programación',
    title: 'Full Stack Developer: React + Node.js + MongoDB',
    desc: 'Aprende a construir aplicaciones web completas desde cero. Cubre frontend con React, backend con Node.js y base de datos con MongoDB.',
    instructor: { name: 'Ana Martínez', seed: 'instructor1' },
    duration: '85h',
    level: 'Intermedio',
    students: 3420,
    rating: 4.9,
    price: '149€',
    badge: null,
  },
  {
    seed: 'course2',
    cat: 'Datos',
    title: 'Python para Data Science & Machine Learning',
    desc: 'Desde los fundamentos de Python hasta modelos de ML avanzados. Pandas, NumPy, Scikit-learn y TensorFlow incluidos.',
    instructor: { name: 'Carlos López', seed: 'instructor2' },
    duration: '90h',
    level: 'Intermedio',
    students: 2850,
    rating: 4.8,
    price: '169€',
    badge: null,
  },
  {
    seed: 'course3',
    cat: 'Marketing',
    title: 'Marketing Digital Completo con Inteligencia Artificial',
    desc: 'SEO, SEM, redes sociales, email marketing y estrategias con IA. El curso más completo de marketing digital en español.',
    instructor: { name: 'Laura Sánchez', seed: 'instructor3' },
    duration: '60h',
    level: 'Básico',
    students: 4100,
    rating: 4.7,
    price: '99€',
    badge: 'Bestseller',
  },
  {
    seed: 'course4',
    cat: 'Diseño',
    title: 'UI/UX Design con Figma: De Cero a Profesional',
    desc: 'Diseño de interfaces modernas, prototipado, sistemas de diseño y portfolio profesional con las últimas tendencias.',
    instructor: { name: 'María Torres', seed: 'instructor4' },
    duration: '70h',
    level: 'Básico',
    students: 2200,
    rating: 4.8,
    price: '129€',
    badge: null,
  },
  {
    seed: 'course5',
    cat: 'Negocios',
    title: 'Emprendimiento Digital: Lanza tu Startup',
    desc: 'Valida tu idea de negocio, construye tu MVP, consigue financiación y escala tu startup con metodologías probadas.',
    instructor: { name: 'Javier Ruiz', seed: 'instructor5' },
    duration: '45h',
    level: 'Básico',
    students: 1850,
    rating: 4.6,
    price: '79€',
    badge: null,
  },
  {
    seed: 'course6',
    cat: 'Programación',
    title: 'Introducción a la Programación con Python',
    desc: 'Tu primer paso en el mundo de la programación. Aprende la lógica, variables, bucles y funciones sin conocimientos previos.',
    instructor: { name: 'Roberto Gómez', seed: 'instructor6' },
    duration: '30h',
    level: 'Básico',
    students: 6500,
    rating: 4.9,
    price: 'GRATIS',
    badge: 'Gratis',
  },
  {
    seed: 'course7',
    cat: 'Datos',
    title: 'SQL para Análisis de Datos: Nivel Avanzado',
    desc: 'Queries complejas, optimización, window functions y análisis estadístico con SQL. Para profesionales de datos.',
    instructor: { name: 'Elena Morales', seed: 'instructor2' },
    duration: '40h',
    level: 'Avanzado',
    students: 1200,
    rating: 4.7,
    price: '89€',
    badge: null,
  },
  {
    seed: 'course8',
    cat: 'Marketing',
    title: 'Google Ads y Meta Ads: Publicidad de Pago Rentable',
    desc: 'Crea campañas publicitarias que generen resultados. ROI positivo desde la primera semana con estrategias probadas.',
    instructor: { name: 'David Navarro', seed: 'instructor4' },
    duration: '35h',
    level: 'Intermedio',
    students: 2750,
    rating: 4.8,
    price: 'GRATIS',
    badge: 'Gratis',
  },
]

const paths = [
  {
    name: 'Full Stack Developer',
    desc: 'De cero a desarrollador completo en 6 meses',
    courses: ['Intro a Programación', 'JavaScript Avanzado', 'React Frontend', 'Node.js Backend', 'MongoDB & SQL'],
    duration: '6 meses',
    price: '299€',
    color: '#7c4dff',
  },
  {
    name: 'Marketing Digital',
    desc: 'Especialista en marketing digital en 4 meses',
    courses: ['Marketing Digital Completo', 'SEO Avanzado', 'Google & Meta Ads', 'Email Marketing', 'Analytics'],
    duration: '4 meses',
    price: '249€',
    color: ACCENT,
  },
  {
    name: 'Data Analyst',
    desc: 'Analista de datos certificado en 5 meses',
    courses: ['Python para Datos', 'SQL Avanzado', 'Visualización con Tableau', 'Estadística', 'Machine Learning'],
    duration: '5 meses',
    price: '279€',
    color: '#4caf50',
  },
]

export default function AcademiaCursos() {
  const [activeCategory, setActiveCategory] = useState('Todo')

  const filtered = activeCategory === 'Todo'
    ? courses
    : courses.filter(c => c.cat === activeCategory)

  const levelColor = (level: string) => {
    if (level === 'Básico') return '#4caf50'
    if (level === 'Intermedio') return '#ff9800'
    return '#f44336'
  }

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
              Formación de calidad
            </p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: TEXT, marginBottom: '1rem' }}>
              Todos los Cursos
            </h1>
            <p style={{ color: '#a0c4e8', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              85 cursos diseñados por expertos de la industria, actualizados constantemente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section style={{ background: BG, padding: '2rem 0 0', position: 'sticky', top: '70px', zIndex: 10, borderBottom: `1px solid ${ACCENT}22` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: '0', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? ACCENT : 'transparent',
                  color: activeCategory === cat ? BG : '#a0c4e8',
                  border: 'none',
                  padding: '0.85rem 1.5rem',
                  cursor: 'pointer',
                  fontFamily: 'system-ui, sans-serif',
                  fontWeight: activeCategory === cat ? 700 : 400,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s',
                  borderBottom: activeCategory === cat ? `2px solid ${ACCENT}` : '2px solid transparent',
                  borderRadius: activeCategory === cat ? '4px 4px 0 0' : '0',
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div layout className="r-grid-2" style={{ gap: '1.5rem' }}>
            <AnimatePresence>
              {filtered.map((c, i) => (
                <motion.div
                  key={c.seed}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  whileHover={{ y: -4, boxShadow: `0 16px 40px ${ACCENT}22` }}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${ACCENT}22`,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    display: 'flex',
                  }}
                >
                  <div style={{ width: '200px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={`https://picsum.photos/seed/${c.seed}/600/380`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      alt={c.title}
                    />
                    {c.badge && (
                      <div style={{
                        position: 'absolute', top: '0.75rem', left: '0.75rem',
                        background: c.badge === 'Gratis' ? '#4caf50' : '#ff9800',
                        color: '#fff', padding: '0.2rem 0.6rem',
                        borderRadius: '3px', fontSize: '0.7rem', fontWeight: 700,
                      }}>
                        {c.badge}
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span style={{
                        background: `${ACCENT}22`, color: ACCENT,
                        padding: '0.2rem 0.6rem', borderRadius: '3px',
                        fontSize: '0.7rem', fontWeight: 700,
                      }}>{c.cat}</span>
                      <span style={{
                        background: levelColor(c.level) + '22', color: levelColor(c.level),
                        padding: '0.2rem 0.6rem', borderRadius: '3px',
                        fontSize: '0.7rem', fontWeight: 700,
                      }}>{c.level}</span>
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: TEXT, marginBottom: '0.5rem', lineHeight: 1.4 }}>{c.title}</h3>
                    <p style={{ color: '#a0c4e8', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '0.75rem', flex: 1 }}>{c.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <img
                        src={`https://picsum.photos/seed/${c.instructor.seed}/80/80`}
                        style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                        alt={c.instructor.name}
                      />
                      <span style={{ color: '#a0c4e8', fontSize: '0.8rem' }}>{c.instructor.name}</span>
                      <span style={{ marginLeft: 'auto', color: '#ffd700', fontSize: '0.8rem' }}>★ {c.rating}</span>
                      <span style={{ color: '#a0c4e8', fontSize: '0.75rem' }}>({c.students.toLocaleString('es-ES')})</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${ACCENT}22`, paddingTop: '0.75rem' }}>
                      <span style={{ color: '#a0c4e8', fontSize: '0.8rem' }}>⏱ {c.duration}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{
                          fontSize: '1.25rem', fontWeight: 900,
                          color: c.price === 'GRATIS' ? '#4caf50' : ACCENT,
                        }}>{c.price}</span>
                        <a href="/demos/academia/precios" style={{
                          background: ACCENT, color: BG,
                          padding: '0.5rem 1rem', textDecoration: 'none',
                          fontWeight: 700, fontSize: '0.8rem', borderRadius: '4px',
                        }}>Ver curso</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LEARNING PATHS */}
      <section className="r-section" style={{ background: DARK_CARD }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              Formación estructurada
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT, marginBottom: '1rem' }}>
              Rutas de Aprendizaje
            </h2>
            <p style={{ color: '#a0c4e8', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              Cursos curados en el orden correcto para alcanzar tus objetivos profesionales.
            </p>
          </motion.div>
          <div className="r-grid-3">
            {paths.map((path, i) => (
              <motion.div
                key={path.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${path.color}44`,
                  borderTop: `3px solid ${path.color}`,
                  borderRadius: '8px',
                  padding: '2rem',
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: TEXT, marginBottom: '0.5rem' }}>
                  {path.name}
                </h3>
                <p style={{ color: '#a0c4e8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{path.desc}</p>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ color: '#a0c4e8', fontSize: '0.85rem' }}>📅 {path.duration}</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: path.color }}>{path.price}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem' }}>
                  {path.courses.map((c, ci) => (
                    <li key={c} style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.5rem 0', borderBottom: `1px solid ${path.color}22`,
                      color: '#a0c4e8', fontSize: '0.85rem',
                    }}>
                      <span style={{
                        width: '20px', height: '20px', borderRadius: '50%',
                        background: path.color + '33', color: path.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.7rem', fontWeight: 800, flexShrink: 0,
                      }}>{ci + 1}</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <a href="/demos/academia/precios" style={{
                  display: 'block', textAlign: 'center',
                  background: path.color, color: '#fff',
                  padding: '0.85rem', textDecoration: 'none',
                  fontWeight: 700, fontSize: '0.9rem', borderRadius: '4px',
                }}>
                  Ver ruta completa →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="r-section-sm" style={{ background: BG, textAlign: 'center', borderTop: `1px solid ${ACCENT}22` }}>
        <div className="r-container">
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: TEXT, marginBottom: '1rem' }}>
            ¿No encuentras lo que buscas?
          </h3>
          <p style={{ color: '#a0c4e8', marginBottom: '1.5rem' }}>
            Contáctanos y te ayudamos a encontrar el curso perfecto para tus objetivos.
          </p>
          <a href="/demos/academia/contacto" style={{
            display: 'inline-block', background: 'transparent', color: ACCENT,
            padding: '0.9rem 2.5rem', textDecoration: 'none',
            fontWeight: 700, border: `2px solid ${ACCENT}`, borderRadius: '4px',
          }}>
            Habla con un asesor
          </a>
        </div>
      </section>

    </div>
  )
}

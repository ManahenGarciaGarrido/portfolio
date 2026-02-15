'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const dark = '#111111'
const text = '#1a1a1a'
const bg = '#f4f4f0'
const mid = '#888'

const featuredProjects = [
  { seed: 'arch-project1', name: 'Casa Alicante', location: 'Alicante, España', year: '2024', category: 'Residencial', desc: 'Vivienda unifamiliar sobre acantilado con vistas al Mediterráneo. Integración total del interior y el paisaje.' },
  { seed: 'arch-project2', name: 'Oficinas Vértice', location: 'Madrid, España', year: '2023', category: 'Comercial', desc: 'Espacio de trabajo flexible para 200 personas. Estructura abierta con patios de luz y materiales naturales.' },
  { seed: 'arch-project3', name: 'Centro Cívico Gràcia', location: 'Barcelona, España', year: '2022', category: 'Cultural', desc: 'Rehabilitación de edificio histórico del s.XIX. Nueva vida preservando la memoria arquitectónica del barrio.' },
]

const awards = [
  { year: '2024', award: 'Premio FAD de Arquitectura', org: 'Foment de les Arts i del Disseny, Barcelona' },
  { year: '2023', award: 'Architizer A+ Award — Residencial', org: 'Architizer, Nueva York' },
  { year: '2022', award: 'COAM — Mejor Proyecto de Rehabilitación', org: 'Colegio de Arquitectos de Madrid' },
  { year: '2021', award: 'European Prize for Architecture', org: 'Chicago Athenaeum Museum' },
  { year: '2019', award: 'AR House Awards — Shortlist', org: 'The Architectural Review, Londres' },
]

export default function ArquitectoHome() {
  const awardsRef = useRef(null)

  return (
    <main style={{ background: bg, minHeight: '100vh', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: text }}>

      {/* HERO FULLSCREEN */}
      <section style={{ position: 'relative', minHeight: 'max(100svh, 600px)', overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/architecture-hero/1400/900"
          alt="Arquitectura"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Very subtle dark gradient at bottom for text readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.35) 100%)' }} />

        {/* Hero text — bottom left */}
        <div style={{ position: 'absolute', bottom: 'clamp(24px, 6vw, 60px)', left: 'clamp(20px, 6vw, 60px)', zIndex: 2, maxWidth: '90vw' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 200,
              color: '#fff',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              lineHeight: 1,
              marginBottom: '0.75rem',
            }}
          >
            ARCO STUDIO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '0.5rem' }}
          >
            Arquitectura con propósito
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 400 }}
          >
            Madrid · Barcelona · 2008—2026
          </motion.p>
        </div>
      </section>

      {/* STATEMENT */}
      <section style={{ padding: '7rem 1.5rem', textAlign: 'center', background: bg, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
              fontWeight: 200,
              color: text,
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              fontStyle: 'italic',
            }}
          >
            "Diseñamos espacios que cambian<br />la forma en que vives."
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ height: '1px', background: dark, margin: '3rem auto 0' }}
          />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem', fontWeight: 500 }}>Proyectos Destacados</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, color: text, letterSpacing: '-0.02em', lineHeight: 1 }}>
              Trabajo Reciente
            </h2>
          </div>
          <Link href="/demos/arquitecto/proyectos" style={{ color: text, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid', paddingBottom: '2px' }}>
            Ver todos →
          </Link>
        </div>
        <div className="r-grid-3" style={{ gap: '2rem' }}>
          {featuredProjects.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '1.25rem' }}>
                <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }}>
                  <img
                    src={`https://picsum.photos/seed/${proj.seed}/700/500`}
                    alt={proj.name}
                    style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(255,255,255,0.9)', padding: '0.3rem 0.75rem', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: text }}>
                  {proj.category}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: 500, fontSize: '1.15rem', color: text, marginBottom: '0.3rem', letterSpacing: '-0.01em' }}>{proj.name}</div>
                  <div style={{ fontSize: '0.82rem', color: mid, marginBottom: '0.75rem' }}>{proj.location}</div>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, maxWidth: '280px' }}>{proj.desc}</p>
                </div>
                <div style={{ fontSize: '0.78rem', color: mid, flexShrink: 0, marginLeft: '1rem', fontWeight: 300 }}>{proj.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: '5rem 1.5rem', background: '#eeede8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="r-two-col" style={{ gap: '5rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 500 }}>Nuestra Filosofía</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, color: text, lineHeight: 1.2, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
                Arquitectura<br />sin compromiso
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ color: '#555', lineHeight: 1.85, fontSize: '0.97rem' }}>
                  En Arco Studio creemos que la arquitectura no es una disciplina aislada. Cada proyecto nace de un diálogo profundo con el cliente, el lugar, el clima y la historia. No diseñamos edificios: diseñamos experiencias habitables que perduran en el tiempo.
                </p>
                <p style={{ color: '#555', lineHeight: 1.85, fontSize: '0.97rem' }}>
                  Nuestro enfoque combina el rigor técnico con una sensibilidad estética que evita los excesos. Menos es más: cada elemento tiene una razón de ser, cada detalle ha sido pensado para servir tanto al habitante como al espacio que lo rodea.
                </p>
                <p style={{ color: '#555', lineHeight: 1.85, fontSize: '0.97rem' }}>
                  Utilizamos materiales locales siempre que es posible, integramos sistemas bioclimáticos pasivos y colaboramos con artesanos que dominan técnicas tradicionales. El resultado son edificios que respetan el entorno y ahorran energía sin renunciar a la excelencia formal.
                </p>
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/demos/arquitecto/proceso" style={{ color: text, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid', paddingBottom: '2px' }}>
                  Nuestro proceso →
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src="https://picsum.photos/seed/architect-drawing/600/500" alt="Proceso de diseño" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section ref={awardsRef} style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem', fontWeight: 500 }}>Reconocimientos</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, color: text, letterSpacing: '-0.02em', lineHeight: 1 }}>
              Premios
            </h2>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                display: 'flex', gap: '2.5rem', padding: '1.5rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                alignItems: 'center', flexWrap: 'wrap',
              }}
            >
              <div style={{ fontSize: '0.85rem', color: mid, fontWeight: 300, minWidth: '45px' }}>{award.year}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: '1rem', color: text, marginBottom: '0.2rem' }}>{award.award}</div>
                <div style={{ fontSize: '0.82rem', color: mid, fontWeight: 300 }}>{award.org}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section style={{ padding: '6rem 1.5rem', background: dark, color: '#f4f4f0', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '0.7rem', color: 'rgba(244,244,240,0.35)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontWeight: 500 }}>¿Hablamos?</div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 200, lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#f4f4f0' }}>
              ¿Tienes un proyecto<br />en mente?
            </h2>
            <p style={{ color: 'rgba(244,244,240,0.5)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '3rem' }}>
              Primera consulta sin compromiso. Cuéntanos qué tienes en mente y exploramos juntos las posibilidades.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="mailto:hola@arcostudio.es" style={{ color: '#f4f4f0', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 300, letterSpacing: '0.05em', borderBottom: '1px solid rgba(244,244,240,0.3)', paddingBottom: '2px' }}>
                hola@arcostudio.es
              </a>
              <Link href="/demos/arquitecto/contacto" style={{ background: '#f4f4f0', color: dark, fontWeight: 600, fontSize: '0.85rem', padding: '0.9rem 2.5rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Hablemos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0a0a0a', padding: '2rem 1.5rem', textAlign: 'center' }}>
        <div style={{ color: 'rgba(244,244,240,0.2)', fontSize: '0.78rem', letterSpacing: '0.2em' }}>
          ARCO STUDIO · Madrid · Barcelona · 2008—2026
        </div>
      </footer>
    </main>
  )
}

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const BG = '#1a0000'
const ACCENT = '#ff4444'
const TEXT = '#f0e0e0'
const CARD_BG = '#2a0a0a'
const DARK_CARD = '#220505'

const categories = ['Todo', 'Cortes', 'Barbas', 'Afeitados']

const photos = [
  { seed: 'haircut1', cat: 'Cortes', label: 'Fade Clásico', desc: 'Degradado alto con textura' },
  { seed: 'haircut2', cat: 'Barbas', label: 'Barba Full', desc: 'Diseño y perfilado completo' },
  { seed: 'haircut3', cat: 'Afeitados', label: 'Afeitado Navaja', desc: 'Afeitado a navaja tradicional' },
  { seed: 'haircut4', cat: 'Cortes', label: 'Undercut Moderno', desc: 'Undercut texturizado' },
  { seed: 'haircut5', cat: 'Barbas', label: 'Barba Corta', desc: 'Perfilado y definición' },
  { seed: 'haircut6', cat: 'Cortes', label: 'Pompadour', desc: 'Clásico con volumen' },
  { seed: 'haircut7', cat: 'Afeitados', label: 'Afeitado Húmedo', desc: 'Con crema premium Proraso' },
  { seed: 'haircut8', cat: 'Barbas', label: 'Barba Vikinga', desc: 'Larga y bien cuidada' },
  { seed: 'haircut9', cat: 'Cortes', label: 'Crew Cut', desc: 'Corto y masculino' },
  { seed: 'haircut10', cat: 'Cortes', label: 'Quiff Moderno', desc: 'Tendencia actual' },
  { seed: 'haircut11', cat: 'Barbas', label: 'Diseño Geométrico', desc: 'Líneas precisas' },
  { seed: 'haircut12', cat: 'Afeitados', label: 'Toalla Caliente', desc: 'Ritual completo' },
]

export default function BarberiaGaleria() {
  const [activeCategory, setActiveCategory] = useState('Todo')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = activeCategory === 'Todo'
    ? photos
    : photos.filter(p => p.cat === activeCategory)

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
              Nuestra obra
            </p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: TEXT, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              NUESTROS TRABAJOS
            </h1>
            <p style={{ color: '#a08080', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontStyle: 'italic' }}>
              Cada corte es una obra de arte. Aquí mostramos lo que nos apasiona.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section style={{ background: BG, padding: '2.5rem 0 0', position: 'sticky', top: '70px', zIndex: 10, borderBottom: `1px solid ${ACCENT}22` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', gap: '0', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? ACCENT : 'transparent',
                  color: activeCategory === cat ? '#fff' : '#a08080',
                  border: 'none',
                  padding: '0.85rem 2rem',
                  cursor: 'pointer',
                  fontFamily: 'Georgia, serif',
                  fontWeight: activeCategory === cat ? 700 : 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s',
                  borderBottom: activeCategory === cat ? `2px solid ${ACCENT}` : '2px solid transparent',
                }}
              >
                {cat}
                <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', opacity: 0.7 }}>
                  ({cat === 'Todo' ? photos.length : photos.filter(p => p.cat === cat).length})
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div layout className="r-grid-4" style={{ gap: '0.75rem' }}>
            <AnimatePresence>
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.seed}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  onClick={() => setLightbox(photos.indexOf(photo))}
                  style={{
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    background: CARD_BG,
                    aspectRatio: '1',
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={`https://picsum.photos/seed/${photo.seed}/300/300`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    alt={photo.label}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(26,0,0,0.95) 0%, transparent 60%)',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                      padding: '1rem',
                    }}
                  >
                    <span style={{
                      fontSize: '0.65rem', color: ACCENT, letterSpacing: '0.2em',
                      textTransform: 'uppercase', marginBottom: '0.25rem',
                    }}>{photo.cat}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: TEXT }}>{photo.label}</span>
                    <span style={{ fontSize: '0.75rem', color: '#a08080' }}>{photo.desc}</span>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(0,0,0,0.93)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: '700px', width: '100%' }}
            >
              <img
                src={`https://picsum.photos/seed/${photos[lightbox].seed}/700/700`}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
                alt={photos[lightbox].label}
              />
              <div style={{ background: DARK_CARD, padding: '1.25rem' }}>
                <p style={{ color: ACCENT, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  {photos[lightbox].cat}
                </p>
                <p style={{ color: TEXT, fontSize: '1.1rem', fontWeight: 700 }}>{photos[lightbox].label}</p>
                <p style={{ color: '#a08080', fontSize: '0.9rem' }}>{photos[lightbox].desc}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: ACCENT, color: '#fff', border: 'none',
                  width: '2.5rem', height: '2.5rem', cursor: 'pointer',
                  fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                ×
              </button>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
                <button
                  onClick={() => setLightbox(Math.max(0, lightbox - 1))}
                  disabled={lightbox === 0}
                  style={{
                    background: lightbox === 0 ? '#333' : ACCENT, color: '#fff', border: 'none',
                    padding: '0.6rem 1.5rem', cursor: lightbox === 0 ? 'not-allowed' : 'pointer',
                    fontFamily: 'Georgia, serif', fontSize: '0.9rem',
                  }}
                >
                  ← Anterior
                </button>
                <button
                  onClick={() => setLightbox(Math.min(photos.length - 1, lightbox + 1))}
                  disabled={lightbox === photos.length - 1}
                  style={{
                    background: lightbox === photos.length - 1 ? '#333' : ACCENT, color: '#fff', border: 'none',
                    padding: '0.6rem 1.5rem', cursor: lightbox === photos.length - 1 ? 'not-allowed' : 'pointer',
                    fontFamily: 'Georgia, serif', fontSize: '0.9rem',
                  }}
                >
                  Siguiente →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INSTAGRAM CTA */}
      <section className="r-section-sm" style={{ background: DARK_CARD, borderTop: `1px solid ${ACCENT}33` }}>
        <div className="r-container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, color: TEXT, marginBottom: '0.75rem' }}>
              Síguenos en Instagram
            </h2>
            <p style={{ color: ACCENT, fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              @bladeandco
            </p>
            <p style={{ color: '#a08080', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
              Cada semana publicamos los mejores trabajos del equipo. ¡Síguenos para inspiración diaria!
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                color: '#fff', padding: '1rem 2.5rem', textDecoration: 'none',
                fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem',
              }}
            >
              Ver en Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="r-section-sm" style={{ background: ACCENT, textAlign: 'center' }}>
        <div className="r-container">
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            ¿Te gusta lo que ves?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem' }}>
            Reserva tu cita y consigue el look que siempre quisiste.
          </p>
          <a
            href="/demos/barberia/reservar"
            style={{
              display: 'inline-block', background: '#fff', color: ACCENT,
              padding: '1rem 3rem', textDecoration: 'none',
              fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem',
            }}
          >
            Reservar Cita
          </a>
        </div>
      </section>

    </div>
  )
}

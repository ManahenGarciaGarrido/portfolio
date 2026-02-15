'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const dark = '#111111'
const text = '#1a1a1a'
const bg = '#f4f4f0'
const mid = '#888'

const categories = ['Todos', 'Residencial', 'Comercial', 'Cultural', 'Reforma']

const projects = [
  {
    id: 1, seed: 'architecture1', name: 'Casa Alicante',
    location: 'Alicante, España', year: '2024', category: 'Residencial',
    area: '420 m²', status: 'Completado',
    desc: 'Vivienda unifamiliar suspendida sobre un acantilado con vistas directas al Mediterráneo. La planta se organiza en bandas horizontales que maximizan la relación visual con el mar mientras protegen la privacidad.'
  },
  {
    id: 2, seed: 'architecture2', name: 'Oficinas Vértice',
    location: 'Madrid, España', year: '2023', category: 'Comercial',
    area: '2.800 m²', status: 'Completado',
    desc: 'Espacio de trabajo flexible de nueva generación para 200 personas. Eliminación de despachos fijos, red de patios de luz interiores y sistema de fachada ventilada con cerámica artesanal local.'
  },
  {
    id: 3, seed: 'architecture3', name: 'Centro Cívico Gràcia',
    location: 'Barcelona, España', year: '2022', category: 'Cultural',
    area: '1.200 m²', status: 'Completado',
    desc: 'Rehabilitación integral de un edificio industrial del siglo XIX en el barrio de Gràcia. Preservación de la estructura original de acero y ladrillo con intervención contemporánea en cubierta y planta baja.'
  },
  {
    id: 4, seed: 'architecture4', name: 'Piso Malasaña',
    location: 'Madrid, España', year: '2024', category: 'Reforma',
    area: '95 m²', status: 'Completado',
    desc: 'Reforma integral de piso del siglo XVIII en el centro histórico de Madrid. Rescate de suelos hidráulicos originales, recuperación de techos de madera y apertura de espacios sin alterar la estructura portante.'
  },
  {
    id: 5, seed: 'architecture5', name: 'Hotel Botánico',
    location: 'Málaga, España', year: '2023', category: 'Comercial',
    area: '4.500 m²', status: 'Completado',
    desc: 'Boutique hotel de 28 habitaciones en antigua hacienda del s.XVII. Jardín botánico integrado en el proyecto, sistema de captación de agua de lluvia y climatización geotérmica.'
  },
  {
    id: 6, seed: 'architecture6', name: 'Biblioteca Municipal Sagunto',
    location: 'Sagunto, España', year: '2021', category: 'Cultural',
    area: '800 m²', status: 'Completado',
    desc: 'Nueva biblioteca pública insertada entre las murallas romanas de Sagunto. El edificio dialoga con el yacimiento arqueológico mediante una arquitectura mineral de hormigón blanco y piedra local.'
  },
  {
    id: 7, seed: 'architecture7', name: 'Torre Residencial Nou Barris',
    location: 'Barcelona, España', year: '2025', category: 'Residencial',
    area: '8.200 m²', status: 'En construcción',
    desc: 'Edificio de 45 viviendas de protección oficial con sistema de fachada vegetal pasiva. Diseño ganador de concurso público. Certificación BREEAM Outstanding prevista para su entrega.'
  },
  {
    id: 8, seed: 'architecture8', name: 'Casa del Olivo',
    location: 'Jaén, España', year: '2024', category: 'Residencial',
    area: '280 m²', status: 'Completado',
    desc: 'Vivienda rural integrada en un olivar centenario de la Sierra de Jaén. Arquitectura de tierra y cal que reproduce las técnicas constructivas vernáculas con programa completamente contemporáneo.'
  },
]

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filtered = activeCategory === 'Todos' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <main style={{ background: bg, minHeight: '100vh', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: text }}>

      {/* PAGE HEADER */}
      <section style={{ padding: '5rem 1.5rem 3rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 500 }}>Portafolio</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 200, color: text, lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Proyectos
            </h1>
            <p style={{ color: mid, fontSize: '1rem', fontWeight: 300, maxWidth: '480px', lineHeight: 1.7 }}>
              Dieciséis años de arquitectura comprometida con la calidad, el entorno y la experiencia del habitante.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section style={{ padding: '2.5rem 1.5rem 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: 'none', border: 'none',
                color: activeCategory === cat ? text : mid,
                fontSize: '0.82rem', fontWeight: activeCategory === cat ? 600 : 400,
                padding: '0.85rem 1.5rem', cursor: 'pointer',
                textTransform: 'uppercase', letterSpacing: '0.1em',
                borderBottom: activeCategory === cat ? `2px solid ${dark}` : '2px solid transparent',
                marginBottom: '-1px', transition: 'all 0.2s',
                fontFamily: 'inherit',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section style={{ padding: '3rem 1.5rem 5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="r-grid-2" style={{ gap: '3rem' }}>
          {filtered.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              onMouseEnter={() => setHoveredId(proj.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <motion.img
                  src={`https://picsum.photos/seed/${proj.seed}/800/500`}
                  alt={proj.name}
                  animate={{ scale: hoveredId === proj.id ? 1.04 : 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block' }}
                />
                <motion.div
                  animate={{ opacity: hoveredId === proj.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)' }}
                />
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', background: 'rgba(255,255,255,0.92)', padding: '0.35rem 0.9rem', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: text }}>
                  {proj.category}
                </div>
                <div style={{
                  position: 'absolute', top: '1.25rem', right: '1.25rem',
                  background: proj.status === 'En construcción' ? dark : 'rgba(255,255,255,0.92)',
                  color: proj.status === 'En construcción' ? '#fff' : mid,
                  padding: '0.35rem 0.9rem', fontSize: '0.68rem', fontWeight: 500,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                }}>
                  {proj.status}
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 400, color: text, letterSpacing: '-0.01em' }}>{proj.name}</h3>
                  <span style={{ fontSize: '0.82rem', color: mid, fontWeight: 300, flexShrink: 0, marginLeft: '1rem', paddingTop: '0.2rem' }}>{proj.year}</span>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.78rem', color: mid }}>{proj.location}</span>
                  <span style={{ fontSize: '0.78rem', color: mid }}>·</span>
                  <span style={{ fontSize: '0.78rem', color: mid }}>{proj.area}</span>
                </div>
                <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.75, margin: '0 0 1.25rem' }}>{proj.desc}</p>
                <button style={{ background: 'none', border: 'none', color: text, fontSize: '0.8rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontFamily: 'inherit' }}>
                  Ver proyecto →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem', background: dark, textAlign: 'center' }}>
        <div style={{ maxWidth: '550px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '0.7rem', color: 'rgba(244,244,240,0.3)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>¿Tu próximo proyecto?</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 200, color: '#f4f4f0', lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Primera consulta sin compromiso
            </h2>
            <Link href="/demos/arquitecto/contacto" style={{ display: 'inline-block', background: '#f4f4f0', color: dark, fontWeight: 600, fontSize: '0.85rem', padding: '1rem 2.5rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '0.5rem' }}>
              Hablemos
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

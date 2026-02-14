'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const gold = '#c9a227'
const navy = '#001a4d'

const allProperties = [
  { id: 1, seed: 'home1', badge: 'NUEVO', title: 'Ático de lujo en Salamanca', type: 'Ático', zone: 'Centro', beds: 4, baths: 3, sqm: 210, floor: '6ª', price: '1.850.000 €', priceNum: 1850000 },
  { id: 2, seed: 'home2', badge: 'PRECIO REDUCIDO', title: 'Piso reformado en Goya', type: 'Piso', zone: 'Norte', beds: 3, baths: 2, sqm: 145, floor: '3ª', price: '680.000 €', priceNum: 680000 },
  { id: 3, seed: 'home3', badge: 'NUEVO', title: 'Casa unifamiliar con piscina', type: 'Casa', zone: 'Sur', beds: 5, baths: 4, sqm: 480, floor: 'Baja', price: '2.400.000 €', priceNum: 2400000 },
  { id: 4, seed: 'home4', badge: 'PRECIO REDUCIDO', title: 'Local comercial en Gran Vía', type: 'Local', zone: 'Centro', beds: 0, baths: 1, sqm: 180, floor: 'Baja', price: '890.000 €', priceNum: 890000 },
  { id: 5, seed: 'home5', badge: 'NUEVO', title: 'Piso con vistas al mar', type: 'Piso', zone: 'Este', beds: 2, baths: 2, sqm: 110, floor: '8ª', price: '520.000 €', priceNum: 520000 },
  { id: 6, seed: 'home6', badge: 'PRECIO REDUCIDO', title: 'Chalet adosado en Pozuelo', type: 'Casa', zone: 'Norte', beds: 4, baths: 3, sqm: 320, floor: 'Baja', price: '1.100.000 €', priceNum: 1100000 },
  { id: 7, seed: 'home7', badge: 'NUEVO', title: 'Ático dúplex con terraza', type: 'Ático', zone: 'Centro', beds: 3, baths: 2, sqm: 195, floor: '7ª-8ª', price: '1.420.000 €', priceNum: 1420000 },
  { id: 8, seed: 'home8', badge: 'PRECIO REDUCIDO', title: 'Piso luminoso en Chamberí', type: 'Piso', zone: 'Sur', beds: 3, baths: 1, sqm: 98, floor: '2ª', price: '480.000 €', priceNum: 480000 },
]

export default function PropiedadesPage() {
  const [typeFilter, setTypeFilter] = useState('Todos')
  const [zoneFilter, setZoneFilter] = useState('Todas')
  const [priceFilter, setPriceFilter] = useState('Cualquiera')
  const [bedsFilter, setBedsFilter] = useState('Cualquiera')
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = allProperties.filter(p => {
    if (typeFilter !== 'Todos' && p.type !== typeFilter) return false
    if (zoneFilter !== 'Todas' && p.zone !== zoneFilter) return false
    if (priceFilter === 'Hasta 500.000 €' && p.priceNum > 500000) return false
    if (priceFilter === 'Hasta 1.000.000 €' && p.priceNum > 1000000) return false
    if (priceFilter === 'Hasta 2.000.000 €' && p.priceNum > 2000000) return false
    if (bedsFilter === '1-2' && !(p.beds >= 1 && p.beds <= 2)) return false
    if (bedsFilter === '3' && p.beds !== 3) return false
    if (bedsFilter === '4+' && p.beds < 4) return false
    return true
  })

  const selectStyle = {
    border: `1.5px solid ${navy}22`,
    borderRadius: '8px',
    padding: '0.65rem 1rem',
    fontSize: '0.875rem',
    color: navy,
    background: '#fff',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: 'Georgia, serif',
  }

  return (
    <main style={{ background: '#f9f7f2', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* PAGE HEADER */}
      <div style={{ background: navy, padding: '3.5rem 1.5rem 2.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase' }}
          >
            Catálogo de <span style={{ color: gold }}>Propiedades</span>
          </motion.h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem', fontStyle: 'italic' }}>
            {filtered.length} propiedades disponibles · Encuentra la que buscas
          </p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div style={{ background: '#fff', borderBottom: `1px solid ${navy}15`, boxShadow: '0 2px 12px rgba(0,26,77,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontWeight: 800, color: navy, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Filtrar:</span>
          <select value={typeFilter} onChange={e => { setTypeFilter(e.target.value); setCurrentPage(1) }} style={selectStyle}>
            <option value="Todos">Tipo: Todos</option>
            <option>Piso</option>
            <option>Casa</option>
            <option>Ático</option>
            <option>Local</option>
          </select>
          <select value={zoneFilter} onChange={e => { setZoneFilter(e.target.value); setCurrentPage(1) }} style={selectStyle}>
            <option value="Todas">Zona: Todas</option>
            <option>Centro</option>
            <option>Norte</option>
            <option>Sur</option>
            <option>Este</option>
          </select>
          <select value={priceFilter} onChange={e => { setPriceFilter(e.target.value); setCurrentPage(1) }} style={selectStyle}>
            <option value="Cualquiera">Precio: Cualquiera</option>
            <option>Hasta 500.000 €</option>
            <option>Hasta 1.000.000 €</option>
            <option>Hasta 2.000.000 €</option>
          </select>
          <select value={bedsFilter} onChange={e => { setBedsFilter(e.target.value); setCurrentPage(1) }} style={selectStyle}>
            <option value="Cualquiera">Hab.: Cualquiera</option>
            <option value="1-2">1-2 habitaciones</option>
            <option value="3">3 habitaciones</option>
            <option value="4+">4+ habitaciones</option>
          </select>
          {(typeFilter !== 'Todos' || zoneFilter !== 'Todas' || priceFilter !== 'Cualquiera' || bedsFilter !== 'Cualquiera') && (
            <button
              onClick={() => { setTypeFilter('Todos'); setZoneFilter('Todas'); setPriceFilter('Cualquiera'); setBedsFilter('Cualquiera') }}
              style={{ fontSize: '0.8rem', color: gold, fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {/* GRID */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: navy + '88' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p style={{ fontSize: '1.1rem' }}>No hay propiedades con esos filtros. Prueba con otros criterios.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))', gap: '2rem' }}>
            {filtered.map((prop, i) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,26,77,0.08)',
                  transition: 'box-shadow 0.3s',
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={`https://picsum.photos/seed/${prop.seed}/800/500`}
                    alt={prop.title}
                    style={{ objectFit: 'cover', height: '220px', width: '100%', display: 'block' }}
                  />
                  <span style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    background: prop.badge === 'NUEVO' ? gold : '#e53e3e',
                    color: '#fff', fontSize: '0.7rem', fontWeight: 800,
                    padding: '0.3rem 0.75rem', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>{prop.badge}</span>
                  <span style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: `rgba(0,26,77,0.88)`, color: '#fff', fontSize: '0.75rem', fontWeight: 700,
                    padding: '0.3rem 0.75rem', borderRadius: '20px',
                  }}>{prop.type} · {prop.zone}</span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: navy, marginBottom: '0.75rem' }}>{prop.title}</h3>
                  <div style={{ display: 'flex', gap: '1.25rem', color: navy + 'aa', fontSize: '0.85rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    {prop.beds > 0 && <span>🛏 {prop.beds} hab.</span>}
                    <span>🚿 {prop.baths} baños</span>
                    <span>📐 {prop.sqm} m²</span>
                    <span>🏢 Planta {prop.floor}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem' }}>
                    <span style={{ fontSize: '1.6rem', fontWeight: 900, color: navy }}>{prop.price}</span>
                    <Link
                      href={`/demos/inmobiliaria/propiedades/${prop.id}`}
                      style={{
                        background: gold, color: '#fff', fontSize: '0.78rem', fontWeight: 800,
                        padding: '0.65rem 1.5rem', borderRadius: '6px', textDecoration: 'none',
                        textTransform: 'uppercase', letterSpacing: '0.08em',
                      }}
                    >
                      SOLICITAR INFO
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '3rem' }}>
          {[1, 2, 3].map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={{
                width: '42px', height: '42px', borderRadius: '8px', border: 'none',
                background: currentPage === page ? gold : '#fff',
                color: currentPage === page ? '#fff' : navy,
                fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,26,77,0.1)',
                fontFamily: 'Georgia, serif',
              }}
            >
              {page}
            </button>
          ))}
          <button style={{
            height: '42px', padding: '0 1rem', borderRadius: '8px', border: 'none',
            background: '#fff', color: navy, fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,26,77,0.1)', fontFamily: 'Georgia, serif',
          }}>
            Siguiente →
          </button>
        </div>
      </div>
    </main>
  )
}

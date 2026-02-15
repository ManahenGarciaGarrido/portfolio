'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

const BG = '#001a35'
const ACCENT = '#ff8c00'
const TEXT = '#e8f4ff'
const CARD_BG = '#002952'
const CARD_BORDER = '#003d7a'

const packageTypes = ['Todo incluido', 'A medida', 'Aventura', 'Lujo', 'Grupo', 'Familia']

const packages = [
  {
    id: 1, type: 'Todo incluido', name: 'Esencia de Japón', destination: 'Japón',
    duration: '12 días', groupSize: '2–20 personas', price: '2.490',
    includes: ['Vuelo ida y vuelta', 'Hotel 4★ céntrico', 'Desayunos incluidos', 'Guía local en español', 'Traslados aeropuerto', '5 actividades culturales'],
    img: 'tour1',
    tag: '⭐ MÁS VENDIDO',
  },
  {
    id: 2, type: 'Lujo', name: 'Safari Premium Kenia', destination: 'Kenia',
    duration: '10 días', groupSize: '2–8 personas', price: '4.990',
    includes: ['Vuelo Business class', 'Lodge 5★ en el Maasai Mara', 'Pensión completa', 'Guía naturalista experto', 'Jeep privado', 'Traslados helicóptero'],
    img: 'tour2',
    tag: '🏆 PREMIUM',
  },
  {
    id: 3, type: 'Aventura', name: 'Trekking Machu Picchu', destination: 'Perú',
    duration: '14 días', groupSize: '4–16 personas', price: '1.890',
    includes: ['Vuelo incluido', 'Hostales y lodges', 'Media pensión', 'Guía de trekking', 'Equipo de montaña', 'Entrada Machu Picchu'],
    img: 'tour3',
    tag: '🥾 AVENTURA',
  },
  {
    id: 4, type: 'Todo incluido', name: 'Maldivas All Inclusive', destination: 'Maldivas',
    duration: '8 días', groupSize: '2 personas', price: '3.790',
    includes: ['Vuelo directo', 'Water bungalow', 'Pensión completa', 'Excursión snorkel', 'Spa 1 sesión', 'Transfer en lancha'],
    img: 'tour4',
  },
  {
    id: 5, type: 'Familia', name: 'Aventura en Costa Rica', destination: 'Costa Rica',
    duration: '10 días', groupSize: 'Familiar (max 8)', price: '2.290',
    includes: ['Vuelo incluido', 'Lodges ecológicos', 'Desayunos', 'Guía bilingüe', 'Zipline', 'Avistamiento fauna'],
    img: 'tour5',
    tag: '👨‍👩‍👧 FAMILIAS',
  },
  {
    id: 6, type: 'Grupo', name: 'Ruta Islandia en Grupo', destination: 'Islandia',
    duration: '8 días', groupSize: '10–25 personas', price: '1.790',
    includes: ['Vuelo incluido', 'Hotel 3★', 'Desayunos', 'Bus privado', 'Auroras boreales tour', 'Baño en aguas termales'],
    img: 'tour6',
  },
  {
    id: 7, type: 'A medida', name: 'Ruta Personalizada Europa', destination: 'Europa',
    duration: 'Flexible', groupSize: 'Cualquier tamaño', price: '1.299',
    includes: ['Vuelos internos', 'Hoteles a elegir', 'Itinerario propio', 'Asistencia local 24/7', 'App viajero', 'Seguro premium'],
    img: 'tour7',
    tag: '✏️ PERSONALIZABLE',
  },
  {
    id: 8, type: 'Lujo', name: 'Orient Express Europa', destination: 'Europa Central',
    duration: '7 días', groupSize: '2 personas', price: '5.990',
    includes: ['Tren de lujo', 'Suite privada', 'Cenas de gourmet', 'Champán bienvenida', 'Guía personal', 'Excursiones VIP'],
    img: 'tour8',
    tag: '👑 ULTRA LUJO',
  },
]

export default function PaquetesPage() {
  const [activeType, setActiveType] = useState<string | null>(null)
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({ destino: '', fecha: '', personas: '2', presupuesto: '', tipo: '' })

  const filtered = activeType ? packages.filter(p => p.type === activeType) : packages

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: 'system-ui, sans-serif' }}>

      {/* HEADER */}
      <section style={{ paddingTop: 100, paddingBottom: 60, background: CARD_BG, borderBottom: `1px solid ${CARD_BORDER}` }}>
        <div className="r-container">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            PAQUETES DE VIAJE
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', margin: '0 0 20px' }}>
            Nuestros Paquetes Especiales
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ fontSize: 17, opacity: 0.75, maxWidth: 560, lineHeight: 1.6 }}>
            Desde aventuras en grupo hasta escapadas de lujo. Encuentra el paquete perfecto para ti.
          </motion.p>

          {/* Package types filter */}
          <div style={{ display: 'flex', gap: 10, marginTop: 36, flexWrap: 'wrap' }}>
            <button onClick={() => setActiveType(null)}
              style={{
                background: !activeType ? ACCENT : 'transparent',
                color: !activeType ? '#fff' : TEXT,
                border: `1px solid ${!activeType ? ACCENT : CARD_BORDER}`,
                borderRadius: 50, padding: '9px 22px', fontWeight: 600, fontSize: 14, cursor: 'pointer',
              }}>Todos</button>
            {packageTypes.map(t => (
              <button key={t} onClick={() => setActiveType(t)}
                style={{
                  background: activeType === t ? ACCENT : 'transparent',
                  color: activeType === t ? '#fff' : TEXT,
                  border: `1px solid ${activeType === t ? ACCENT : CARD_BORDER}`,
                  borderRadius: 50, padding: '9px 22px', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                }}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div className="r-grid-2">
            {filtered.map((pkg, i) => (
              <motion.div key={pkg.id}
                layout
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  background: CARD_BG, borderRadius: 20, overflow: 'hidden',
                  border: `1px solid ${CARD_BORDER}`, display: 'flex', flexDirection: 'column',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${pkg.img}/700/450`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={pkg.name} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,26,53,0.9) 0%, transparent 50%)' }} />
                  {pkg.tag && (
                    <div style={{ position: 'absolute', top: 20, left: 20, background: ACCENT, color: '#fff', padding: '6px 16px', borderRadius: 50, fontWeight: 700, fontSize: 13 }}>
                      {pkg.tag}
                    </div>
                  )}
                  <div style={{ position: 'absolute', top: 20, right: 20, background: CARD_BG, color: TEXT, padding: '6px 14px', borderRadius: 50, fontSize: 12, fontWeight: 600, border: `1px solid ${CARD_BORDER}` }}>
                    {pkg.type}
                  </div>
                  <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                    <p style={{ color: ACCENT, fontWeight: 700, fontSize: 12, margin: '0 0 4px', letterSpacing: 2, textTransform: 'uppercase' }}>{pkg.destination}</p>
                    <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 26, margin: 0 }}>{pkg.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
                    <div>
                      <p style={{ color: ACCENT, fontWeight: 700, fontSize: 11, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: 1 }}>Duración</p>
                      <p style={{ color: TEXT, fontSize: 15, margin: 0 }}>⏱ {pkg.duration}</p>
                    </div>
                    <div>
                      <p style={{ color: ACCENT, fontWeight: 700, fontSize: 11, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: 1 }}>Grupo</p>
                      <p style={{ color: TEXT, fontSize: 15, margin: 0 }}>👥 {pkg.groupSize}</p>
                    </div>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <p style={{ color: ACCENT, fontWeight: 700, fontSize: 11, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>Incluye</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {pkg.includes.map(inc => (
                        <span key={inc} style={{ background: BG, color: TEXT, opacity: 0.85, padding: '5px 14px', borderRadius: 50, fontSize: 13, border: `1px solid ${CARD_BORDER}` }}>
                          ✓ {inc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: 16, borderTop: `1px solid ${CARD_BORDER}` }}>
                    <div>
                      <p style={{ color: TEXT, opacity: 0.5, fontSize: 12, margin: '0 0 2px' }}>Desde por persona</p>
                      <p style={{ color: ACCENT, fontWeight: 900, fontSize: 28, margin: 0 }}>€{pkg.price}</p>
                    </div>
                    <Link href="/demos/viajes/contacto" style={{
                      background: ACCENT, color: '#fff', padding: '12px 24px',
                      borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none',
                    }}>Reservar →</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM TRIP FORM */}
      <section className="r-section" style={{ background: CARD_BG, borderTop: `1px solid ${CARD_BORDER}` }}>
        <div className="r-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 64, alignItems: 'center' }}>
            <div style={{ flex: '1 1 360px' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 16 }}>VIAJE PERSONALIZADO</p>
                <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: '0 0 20px' }}>
                  Crea Tu Viaje Perfecto
                </h2>
                <p style={{ color: TEXT, opacity: 0.75, fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                  Nuestros expertos diseñan un itinerario único basado exactamente en tus sueños, presupuesto y fechas. Sin límites, sin compromisos.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {['Itinerario 100% personalizado', 'Selección de los mejores hoteles', 'Guía local en tu idioma', 'Soporte durante todo el viaje'].map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ color: ACCENT, fontSize: 20 }}>✓</span>
                      <span style={{ color: TEXT, fontSize: 16 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ flex: '1 1 400px', background: BG, borderRadius: 20, padding: 40, border: `1px solid ${CARD_BORDER}` }}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 22, marginBottom: 28 }}>Diseña Tu Viaje</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { label: 'Destino soñado', key: 'destino', placeholder: '¿A dónde quieres ir?', type: 'text' },
                  { label: 'Fecha aproximada de salida', key: 'fecha', placeholder: '', type: 'date' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: 'block', color: ACCENT, fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      value={formData[f.key as keyof typeof formData]}
                      onChange={e => setFormData(prev => ({ ...prev, [f.key]: e.target.value }))}
                      style={{ width: '100%', background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: '12px 16px', color: TEXT, fontSize: 15, outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', color: ACCENT, fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Número de personas</label>
                  <select value={formData.personas} onChange={e => setFormData(prev => ({ ...prev, personas: e.target.value }))}
                    style={{ width: '100%', background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: '12px 16px', color: TEXT, fontSize: 15, outline: 'none' }}>
                    {[1,2,3,4,5,6,8,10,15,20].map(n => <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', color: ACCENT, fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Presupuesto por persona</label>
                  <select value={formData.presupuesto} onChange={e => setFormData(prev => ({ ...prev, presupuesto: e.target.value }))}
                    style={{ width: '100%', background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: '12px 16px', color: TEXT, fontSize: 15, outline: 'none' }}>
                    <option value="">Selecciona rango</option>
                    <option value="500-1000">€500 – €1.000</option>
                    <option value="1000-2000">€1.000 – €2.000</option>
                    <option value="2000-4000">€2.000 – €4.000</option>
                    <option value="4000+">€4.000+</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', color: ACCENT, fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Tipo de viaje</label>
                  <select style={{ width: '100%', background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: '12px 16px', color: TEXT, fontSize: 15, outline: 'none' }}>
                    <option value="">¿Qué tipo de viaje buscas?</option>
                    {packageTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <button style={{
                  background: ACCENT, color: '#fff', border: 'none', borderRadius: 8,
                  padding: '16px', fontWeight: 800, fontSize: 16, cursor: 'pointer', width: '100%',
                  textTransform: 'uppercase', letterSpacing: 1, marginTop: 8,
                }}>Solicitar Propuesta Gratuita</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={{ background: BG, padding: '32px 0', borderTop: `1px solid ${CARD_BORDER}` }}>
        <div className="r-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
            {[
              { icon: '🛡️', text: 'Precio garantizado o devolvemos la diferencia' },
              { icon: '🔒', text: 'Pago 100% seguro y encriptado' },
              { icon: '📋', text: 'Cancelación flexible hasta 30 días antes' },
              { icon: '⭐', text: '4.9/5 basado en 3.800+ opiniones' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: TEXT, opacity: 0.75 }}>
                <span style={{ fontSize: 22 }}>{b.icon}</span>
                <span style={{ fontSize: 14, maxWidth: 200 }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

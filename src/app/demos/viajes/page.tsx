'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

const BG = '#001a35'
const ACCENT = '#ff8c00'
const TEXT = '#e8f4ff'
const CARD_BG = '#002952'
const CARD_BORDER = '#003d7a'

const destinations = [
  { id: 1, name: 'Japón', price: '1.899', img: 'destination1', desc: 'Templos, cerezos y tecnología' },
  { id: 2, name: 'Marruecos', price: '899', img: 'destination2', desc: 'Zoco, desierto y medinas' },
  { id: 3, name: 'Islandia', price: '1.499', img: 'destination3', desc: 'Auroras boreales y volcanes' },
  { id: 4, name: 'Maldivas', price: '2.799', img: 'destination4', desc: 'Aguas cristalinas y bungalows' },
  { id: 5, name: 'Perú', price: '1.299', img: 'destination5', desc: 'Machu Picchu y el Amazonas' },
  { id: 6, name: 'Safari Kenia', price: '3.199', img: 'destination6', desc: 'La gran migración africana' },
]

const features = [
  { icon: '🏅', title: '25 Años de Experiencia', desc: 'Desde 1999 organizando viajes inolvidables por todo el mundo.' },
  { icon: '🧭', title: 'Guías Expertos Locales', desc: 'Conocedores nativos de cada destino para una experiencia auténtica.' },
  { icon: '💰', title: 'Precio Garantizado', desc: 'Encontramos mejor precio o te devolvemos la diferencia.' },
  { icon: '📞', title: 'Soporte 24/7', desc: 'Estamos disponibles en todo momento durante tu viaje.' },
]

const stats = [
  { value: '50.000+', label: 'Viajeros felices' },
  { value: '120', label: 'Destinos disponibles' },
  { value: '25', label: 'Años de experiencia' },
  { value: '4.9★', label: 'Valoración media' },
]

const categories = [
  { name: 'Aventura', img: 'adventure1', color: '#1a472a' },
  { name: 'Lujo', img: 'luxury1', color: '#4a2800' },
  { name: 'Cultural', img: 'cultural1', color: '#1a1a4a' },
  { name: 'Playa', img: 'beach1', color: '#003d5b' },
  { name: 'Cruceros', img: 'cruise1', color: '#1a3a4a' },
  { name: 'Deportes', img: 'sports1', color: '#2a1a00' },
]

const testimonials = [
  { name: 'María González', dest: 'Japón', rating: 5, text: 'Una experiencia absolutamente increíble. El equipo de Wanderlust organizó cada detalle a la perfección. El guía local nos llevó a lugares que jamás hubiéramos encontrado solos. ¡Repetiremos sin duda!', img: 'traveler1' },
  { name: 'Carlos Martínez', dest: 'Safari Kenia', rating: 5, text: 'Ver la gran migración en vivo fue algo que me cambió la vida. Wanderlust eligió el mejor lodge y los momentos mágicos no pararon. El servicio fue impecable de principio a fin.', img: 'traveler2' },
  { name: 'Ana Rodríguez', dest: 'Islandia', rating: 5, text: 'Las auroras boreales desde nuestra cabaña de cristal... sin palabras. Todo perfectamente coordinado, traslados puntuales y un guía que sabía exactamente dónde estar cada noche.', img: 'traveler3' },
]

function DestCard({ dest, index }: { dest: typeof destinations[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 12,
        overflow: 'hidden',
        aspectRatio: '4/3',
        cursor: 'pointer',
        boxShadow: hovered ? `0 20px 60px rgba(255,140,0,0.3)` : '0 4px 20px rgba(0,0,0,0.4)',
        transition: 'box-shadow 0.3s',
      }}
    >
      <img
        src={`https://picsum.photos/seed/${dest.img}/600/450`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s', transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        alt={dest.name}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered ? 'rgba(0,10,25,0.7)' : 'linear-gradient(to top, rgba(0,10,25,0.9) 0%, transparent 60%)',
        transition: 'background 0.3s',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 24,
      }}>
        <p style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 4px' }}>DESDE</p>
        <h3 style={{ color: '#fff', fontSize: 26, fontWeight: 800, margin: '0 0 4px' }}>{dest.name}</h3>
        <p style={{ color: TEXT, fontSize: 14, margin: '0 0 8px', opacity: 0.8 }}>{dest.desc}</p>
        <p style={{ color: ACCENT, fontWeight: 800, fontSize: 20, margin: '0 0 16px' }}>€{dest.price} <span style={{ fontSize: 13, fontWeight: 400, color: TEXT, opacity: 0.7 }}>por persona</span></p>
        {hovered && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/demos/viajes/destinos" style={{
              display: 'inline-block', background: ACCENT, color: '#fff', padding: '10px 24px',
              borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: 'none',
            }}>Ver Viaje →</Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function ViajesHome() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })
  const [destino, setDestino] = useState('')
  const [personas, setPersonas] = useState('2')

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: 'system-ui, sans-serif' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 'max(100svh, 600px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://picsum.photos/seed/travel-landscape/1400/900" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Paisaje" />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,10,25,0.6)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,26,53,0.9) 100%)' }} />
        </div>
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 20px', maxWidth: 900 }}>
          <motion.p
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ color: ACCENT, fontWeight: 700, letterSpacing: 5, fontSize: 13, textTransform: 'uppercase', marginBottom: 16 }}
          >WANDERLUST · AGENCIA DE VIAJES</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 1, margin: '0 0 20px', textTransform: 'uppercase', letterSpacing: -2 }}
          >
            <span style={{ color: '#fff' }}>EL MUNDO TE </span>
            <span style={{ color: ACCENT }}>ESPERA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontSize: 18, color: TEXT, opacity: 0.9, marginBottom: 40, letterSpacing: 2 }}
          >Viajes a medida · Grupos · Lujo · Aventura</motion.p>

          {/* Search Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              background: 'rgba(0,26,53,0.95)', backdropFilter: 'blur(10px)',
              borderRadius: 16, padding: 28, display: 'flex', gap: 16, flexWrap: 'wrap',
              border: `1px solid ${CARD_BORDER}`, boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: 'uppercase' }}>Destino</label>
              <input
                value={destino} onChange={e => setDestino(e.target.value)}
                placeholder="¿A dónde quieres ir?"
                style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: '10px 14px', color: TEXT, fontSize: 15, outline: 'none' }}
              />
            </div>
            <div style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: 'uppercase' }}>Fecha ida</label>
              <input type="date" style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: '10px 14px', color: TEXT, fontSize: 15, outline: 'none' }} />
            </div>
            <div style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: 'uppercase' }}>Fecha vuelta</label>
              <input type="date" style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: '10px 14px', color: TEXT, fontSize: 15, outline: 'none' }} />
            </div>
            <div style={{ flex: '1 1 120px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: 'uppercase' }}>Personas</label>
              <select value={personas} onChange={e => setPersonas(e.target.value)}
                style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: '10px 14px', color: TEXT, fontSize: 15, outline: 'none' }}>
                {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>)}
              </select>
            </div>
            <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'flex-end' }}>
              <button style={{
                background: ACCENT, color: '#fff', border: 'none', borderRadius: 8,
                padding: '11px 28px', fontWeight: 800, fontSize: 15, cursor: 'pointer',
                letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap',
              }}>Buscar Viaje</button>
            </div>
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)' }}>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ color: TEXT, opacity: 0.5, fontSize: 28 }}>↓</motion.div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>DESTINOS DESTACADOS</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#fff', margin: 0 }}>Nuestros Viajes Más Populares</h2>
            <p style={{ color: TEXT, opacity: 0.7, marginTop: 16, fontSize: 17, maxWidth: 600, margin: '16px auto 0' }}>
              Seleccionados por nuestros expertos entre más de 120 destinos
            </p>
          </motion.div>
          <div className="r-grid-3">
            {destinations.map((d, i) => <DestCard key={d.id} dest={d} index={i} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/demos/viajes/destinos" style={{
              display: 'inline-block', border: `2px solid ${ACCENT}`, color: ACCENT,
              padding: '14px 40px', borderRadius: 8, fontWeight: 700, fontSize: 16,
              textDecoration: 'none', letterSpacing: 1,
            }}>Ver todos los destinos →</Link>
          </div>
        </div>
      </section>

      {/* WHY WANDERLUST */}
      <section className="r-section" style={{ background: CARD_BG, borderTop: `1px solid ${CARD_BORDER}`, borderBottom: `1px solid ${CARD_BORDER}` }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>POR QUÉ ELEGIRNOS</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', margin: 0 }}>La Diferencia Wanderlust</h2>
          </motion.div>
          <div className="r-grid-4">
            {features.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                style={{ background: BG, borderRadius: 12, padding: 32, border: `1px solid ${CARD_BORDER}`, textAlign: 'center' }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 18, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ color: TEXT, opacity: 0.7, fontSize: 15, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="r-stats" style={{ background: ACCENT }}>
        <div className="r-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'center' }}>
            {stats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.8 }} animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ flex: '1 1 200px', textAlign: 'center', padding: '48px 24px' }}
              >
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, marginTop: 8, fontWeight: 500 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVENTURE CATEGORIES */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>TIPOS DE VIAJE</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', margin: 0 }}>Tu Estilo de Viaje</h2>
          </motion.div>
          <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8 }}>
            {categories.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                style={{ flex: '0 0 200px', borderRadius: 12, overflow: 'hidden', position: 'relative', aspectRatio: '3/4', cursor: 'pointer' }}
              >
                <img src={`https://picsum.photos/seed/${c.img}/300/400`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={c.name} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${c.color} 0%, transparent 60%)` }} />
                <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, textAlign: 'center' }}>
                  <p style={{ color: '#fff', fontWeight: 800, fontSize: 18, margin: 0, textTransform: 'uppercase', letterSpacing: 2 }}>{c.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="r-section" style={{ background: CARD_BG }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>TESTIMONIOS</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', margin: 0 }}>Historias de Nuestros Viajeros</h2>
          </motion.div>
          <div className="r-grid-3">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                style={{ background: BG, borderRadius: 16, padding: 32, border: `1px solid ${CARD_BORDER}` }}
              >
                <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                  {[...Array(t.rating)].map((_, s) => <span key={s} style={{ color: ACCENT, fontSize: 20 }}>★</span>)}
                </div>
                <p style={{ color: TEXT, opacity: 0.85, fontSize: 15, lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <img src={`https://picsum.photos/seed/${t.img}/70/70`} style={{ width: 56, height: 56, objectFit: 'cover', display: 'block', borderRadius: '50%', border: `2px solid ${ACCENT}` }} alt={t.name} />
                  <div>
                    <p style={{ color: '#fff', fontWeight: 700, margin: 0, fontSize: 16 }}>{t.name}</p>
                    <p style={{ color: ACCENT, margin: 0, fontSize: 14 }}>Viajó a {t.dest}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="r-section" style={{ background: BG, borderTop: `1px solid ${CARD_BORDER}` }}>
        <div className="r-container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>NEWSLETTER</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Recibe Ofertas Exclusivas</h2>
            <p style={{ color: TEXT, opacity: 0.7, fontSize: 17, lineHeight: 1.6, marginBottom: 40 }}>
              Destinos que nunca soñaste, ofertas flash y consejos de viaje directamente en tu bandeja de entrada.
            </p>
            <div style={{ display: 'flex', gap: 12, maxWidth: 500, margin: '0 auto', flexWrap: 'wrap' }}>
              <input placeholder="tu@email.com" style={{
                flex: '1 1 260px', background: CARD_BG, border: `1px solid ${CARD_BORDER}`,
                borderRadius: 8, padding: '14px 20px', color: TEXT, fontSize: 16, outline: 'none',
              }} />
              <button style={{
                flex: '0 0 auto', background: ACCENT, color: '#fff', border: 'none',
                borderRadius: 8, padding: '14px 28px', fontWeight: 800, fontSize: 15, cursor: 'pointer',
              }}>Suscribirme</button>
            </div>
            <p style={{ color: TEXT, opacity: 0.4, fontSize: 13, marginTop: 16 }}>Sin spam. Cancela cuando quieras.</p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ background: '#00101f', borderTop: `1px solid ${CARD_BORDER}` }}>
        <div className="r-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, paddingBottom: 48 }}>
            <div style={{ flex: '1 1 280px' }}>
              <h3 style={{ color: ACCENT, fontWeight: 900, fontSize: 24, letterSpacing: 2, marginBottom: 16 }}>WANDERLUST</h3>
              <p style={{ color: TEXT, opacity: 0.6, lineHeight: 1.7, fontSize: 15, maxWidth: 280 }}>
                Agencia de viajes especializada en experiencias únicas e inolvidables desde 1999. Miembro de IATA y AEVAV.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                <span style={{ background: ACCENT, color: '#fff', padding: '4px 12px', borderRadius: 4, fontSize: 12, fontWeight: 700 }}>IATA</span>
                <span style={{ background: CARD_BG, color: TEXT, padding: '4px 12px', borderRadius: 4, fontSize: 12, fontWeight: 700, border: `1px solid ${CARD_BORDER}` }}>AEVAV</span>
              </div>
            </div>
            <div style={{ flex: '1 1 160px' }}>
              <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16 }}>Nuestras Oficinas</h4>
              {[
                { city: 'Madrid', addr: 'C/ Gran Vía 45, 28013', phone: '+34 91 555 0100' },
                { city: 'Barcelona', addr: 'Pg. de Gràcia 78, 08008', phone: '+34 93 555 0200' },
                { city: 'Sevilla', addr: 'C/ Sierpes 12, 41004', phone: '+34 95 555 0300' },
              ].map(o => (
                <div key={o.city} style={{ marginBottom: 20 }}>
                  <p style={{ color: ACCENT, fontWeight: 700, margin: '0 0 4px', fontSize: 14 }}>{o.city}</p>
                  <p style={{ color: TEXT, opacity: 0.6, margin: 0, fontSize: 13 }}>{o.addr}</p>
                  <p style={{ color: TEXT, opacity: 0.6, margin: 0, fontSize: 13 }}>{o.phone}</p>
                </div>
              ))}
            </div>
            <div style={{ flex: '1 1 160px' }}>
              <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16 }}>Línea de Emergencias</h4>
              <p style={{ color: ACCENT, fontWeight: 800, fontSize: 22, margin: '0 0 8px' }}>+34 900 100 200</p>
              <p style={{ color: TEXT, opacity: 0.6, fontSize: 14 }}>Disponible 24 horas, 7 días a la semana durante tu viaje.</p>
              <h4 style={{ color: '#fff', fontWeight: 700, marginTop: 24, marginBottom: 12 }}>Horario Oficinas</h4>
              <p style={{ color: TEXT, opacity: 0.6, fontSize: 14, margin: 0 }}>Lun–Vie: 9:00–20:00</p>
              <p style={{ color: TEXT, opacity: 0.6, fontSize: 14, margin: 0 }}>Sáb: 10:00–14:00</p>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${CARD_BORDER}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ color: TEXT, opacity: 0.4, fontSize: 13, margin: 0 }}>© 2024 Wanderlust Agencia de Viajes. Todos los derechos reservados.</p>
            <p style={{ color: TEXT, opacity: 0.4, fontSize: 13, margin: 0 }}>Licencia IATA · Seguro de viaje incluido · Precio transparente</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

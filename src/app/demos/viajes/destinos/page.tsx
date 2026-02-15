'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

const BG = '#001a35'
const ACCENT = '#ff8c00'
const TEXT = '#e8f4ff'
const CARD_BG = '#002952'
const CARD_BORDER = '#003d7a'

const regions = ['Todos', 'Europa', 'Asia', 'América', 'África', 'Oceanía', 'Cruceros']

const allDestinations = [
  { id: 1, name: 'Japón', region: 'Asia', img: 'travel1', desc: 'Desde los templos Zen de Kioto hasta el bullicio neón de Tokio. Una experiencia que fusiona tradición milenaria y modernidad futurista de manera única.', bestTime: 'Marzo–Mayo (cerezos)', duration: '10–14 días', price: '1.899', featured: true },
  { id: 2, name: 'Italia', region: 'Europa', img: 'travel2', desc: 'Arte, historia, gastronomía y dolce vita. De Roma a la Toscana, pasando por Venecia, cada rincón es una obra maestra al aire libre.', bestTime: 'Abril–Junio / Sep–Oct', duration: '7–10 días', price: '899' },
  { id: 3, name: 'Marruecos', region: 'África', img: 'travel3', desc: 'El laberinto de las medinas, el silencio dorado del Sahara y la hospitalidad bereber. Un destino que deja huella en todos los sentidos.', bestTime: 'Oct–Abril', duration: '7–10 días', price: '799' },
  { id: 4, name: 'Islandia', region: 'Europa', img: 'travel4', desc: 'Auroras boreales, géisers, cascadas y fiordos. La naturaleza en estado puro en una isla que parece de otro planeta.', bestTime: 'Dic–Feb (auroras) / Jun–Ago (sol)', duration: '7–10 días', price: '1.499' },
  { id: 5, name: 'Maldivas', region: 'Asia', img: 'travel5', desc: 'Bungalows sobre el agua turquesa, arrecifes de coral y el lujo del silencio. El paraíso tropical por excelencia.', bestTime: 'Nov–Abril', duration: '7–10 días', price: '2.799' },
  { id: 6, name: 'Perú', region: 'América', img: 'travel6', desc: 'La majestuosidad de Machu Picchu, los colores del Valle Sagrado y la profundidad de la cultura inca. Historia viva en cada piedra.', bestTime: 'Mayo–Oct (seco)', duration: '10–14 días', price: '1.299' },
  { id: 7, name: 'Safari Kenia', region: 'África', img: 'travel7', desc: 'La gran migración del Maasai Mara, leones al amanecer y elefantes junto al Kilimanjaro. África en su esencia más pura.', bestTime: 'Jul–Oct (migración)', duration: '7–12 días', price: '3.199' },
  { id: 8, name: 'Tailandia', region: 'Asia', img: 'travel8', desc: 'Templos dorados, playas de ensueño, mercados flotantes y la mejor gastronomía callejera del mundo. Un país que enamora.', bestTime: 'Nov–Feb', duration: '10–14 días', price: '1.199' },
  { id: 9, name: 'Nueva Zelanda', region: 'Oceanía', img: 'travel9', desc: 'Las verdes montañas de los fiordos, el país de los hobbits, la cultura Maorí y los paisajes más cinematográficos del mundo.', bestTime: 'Dic–Mar (verano NZ)', duration: '14–21 días', price: '2.499' },
  { id: 10, name: 'México', region: 'América', img: 'travel10', desc: 'Pirámides mayas, playas del Caribe, cenotes turquesa y una gastronomía que es Patrimonio de la Humanidad. Tierra de contrastes.', bestTime: 'Nov–Abril', duration: '10–14 días', price: '1.099' },
  { id: 11, name: 'Noruega', region: 'Europa', img: 'travel11', desc: 'Fiordos legendarios, aldeas de cuento y auroras boreales que pintan el cielo. Escandinavia en todo su esplendor natural.', bestTime: 'Jun–Ago (sol de medianoche) / Dic–Feb (auroras)', duration: '7–10 días', price: '1.699' },
  { id: 12, name: 'Crucero Mediterráneo', region: 'Cruceros', img: 'travel12', desc: 'Atraca en Barcelona, Marsella, Roma, Santorini y Dubrovnik. El Mediterráneo desde cubierta con todo el lujo a bordo.', bestTime: 'Mayo–Oct', duration: '7–14 días', price: '1.599' },
]

const destinoDelMes = allDestinations[0]

export default function DestinosPage() {
  const [activeRegion, setActiveRegion] = useState('Todos')
  const [hovered, setHovered] = useState<number | null>(null)
  const heroRef = useRef(null)

  const filtered = activeRegion === 'Todos' ? allDestinations : allDestinations.filter(d => d.region === activeRegion)

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: 'system-ui, sans-serif' }}>

      {/* PAGE HEADER */}
      <section style={{ position: 'relative', paddingTop: 120, paddingBottom: 80, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://picsum.photos/seed/world-map/1400/600" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.15 }} alt="" />
        </div>
        <div className="r-container" style={{ position: 'relative' }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            NUESTROS DESTINOS
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
            Explora el Mundo con <span style={{ color: ACCENT }}>Wanderlust</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ fontSize: 18, opacity: 0.75, maxWidth: 600 }}>
            Más de 120 destinos cuidadosamente seleccionados por nuestros expertos viajeros
          </motion.p>
        </div>
      </section>

      {/* DESTINO DEL MES */}
      <section className="r-section" style={{ background: CARD_BG, paddingTop: 0 }}>
        <div className="r-container">
          <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 24 }}>DESTINO DEL MES</p>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ borderRadius: 20, overflow: 'hidden', display: 'flex', flexWrap: 'wrap', border: `1px solid ${CARD_BORDER}` }}
          >
            <div style={{ flex: '1 1 500px', position: 'relative', minHeight: 400 }}>
              <img src={`https://picsum.photos/seed/${destinoDelMes.img}/900/600`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={destinoDelMes.name} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, rgba(0,41,82,0.95) 100%)' }} />
              <div style={{ position: 'absolute', top: 24, left: 24, background: ACCENT, color: '#fff', padding: '8px 20px', borderRadius: 50, fontWeight: 700, fontSize: 14 }}>
                ⭐ Destino del Mes
              </div>
            </div>
            <div style={{ flex: '1 1 320px', padding: 48, background: CARD_BG, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 3, fontSize: 12, textTransform: 'uppercase', margin: '0 0 12px' }}>{destinoDelMes.region.toUpperCase()}</p>
              <h2 style={{ color: '#fff', fontSize: 42, fontWeight: 900, margin: '0 0 20px' }}>{destinoDelMes.name}</h2>
              <p style={{ color: TEXT, opacity: 0.8, fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>{destinoDelMes.desc}</p>
              <div style={{ display: 'flex', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
                <div>
                  <p style={{ color: ACCENT, fontWeight: 700, fontSize: 12, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: 2 }}>Mejor Época</p>
                  <p style={{ color: TEXT, fontSize: 15, margin: 0 }}>{destinoDelMes.bestTime}</p>
                </div>
                <div>
                  <p style={{ color: ACCENT, fontWeight: 700, fontSize: 12, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: 2 }}>Duración</p>
                  <p style={{ color: TEXT, fontSize: 15, margin: 0 }}>{destinoDelMes.duration}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div>
                  <p style={{ color: TEXT, opacity: 0.6, fontSize: 13, margin: '0 0 2px' }}>Desde</p>
                  <p style={{ color: ACCENT, fontWeight: 900, fontSize: 32, margin: 0 }}>€{destinoDelMes.price}<span style={{ fontSize: 16, fontWeight: 400, color: TEXT, opacity: 0.6 }}>/persona</span></p>
                </div>
                <Link href="/demos/viajes/paquetes" style={{
                  display: 'inline-block', background: ACCENT, color: '#fff',
                  padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15,
                  textDecoration: 'none', whiteSpace: 'nowrap',
                }}>Ver Paquetes →</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
            {regions.map(r => (
              <button key={r} onClick={() => setActiveRegion(r)}
                style={{
                  background: activeRegion === r ? ACCENT : CARD_BG,
                  color: activeRegion === r ? '#fff' : TEXT,
                  border: `1px solid ${activeRegion === r ? ACCENT : CARD_BORDER}`,
                  borderRadius: 50, padding: '10px 24px', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                {r}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p style={{ color: TEXT, opacity: 0.5, marginBottom: 32, fontSize: 14 }}>
            Mostrando {filtered.length} destino{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Grid */}
          <div className="r-grid-3">
            {filtered.map((d, i) => (
              <motion.div key={d.id}
                layout
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onMouseEnter={() => setHovered(d.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: CARD_BG, borderRadius: 16, overflow: 'hidden',
                  border: `1px solid ${hovered === d.id ? ACCENT : CARD_BORDER}`,
                  boxShadow: hovered === d.id ? `0 12px 40px rgba(255,140,0,0.2)` : 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s', cursor: 'pointer',
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${d.img}/500/350`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s', transform: hovered === d.id ? 'scale(1.06)' : 'scale(1)' }} alt={d.name} />
                  <div style={{ position: 'absolute', top: 16, left: 16, background: CARD_BG, color: TEXT, padding: '4px 12px', borderRadius: 50, fontSize: 12, fontWeight: 700, opacity: 0.9 }}>
                    {d.region}
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 800, margin: '0 0 10px' }}>{d.name}</h3>
                  <p style={{ color: TEXT, opacity: 0.7, fontSize: 14, lineHeight: 1.6, margin: '0 0 20px' }}>{d.desc}</p>
                  <div style={{ display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
                    <div>
                      <p style={{ color: ACCENT, fontSize: 11, fontWeight: 700, margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: 1 }}>Mejor época</p>
                      <p style={{ color: TEXT, fontSize: 13, margin: 0, opacity: 0.8 }}>{d.bestTime}</p>
                    </div>
                    <div>
                      <p style={{ color: ACCENT, fontSize: 11, fontWeight: 700, margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: 1 }}>Duración</p>
                      <p style={{ color: TEXT, fontSize: 13, margin: 0, opacity: 0.8 }}>{d.duration}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ color: TEXT, opacity: 0.5, fontSize: 12 }}>Desde </span>
                      <span style={{ color: ACCENT, fontWeight: 800, fontSize: 22 }}>€{d.price}</span>
                      <span style={{ color: TEXT, opacity: 0.5, fontSize: 12 }}>/p.</span>
                    </div>
                    <Link href="/demos/viajes/paquetes" style={{
                      background: ACCENT, color: '#fff', padding: '9px 20px',
                      borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none',
                    }}>Ver viaje</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="r-section" style={{ background: ACCENT }}>
        <div className="r-container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: '0 0 16px' }}>
              ¿No encuentras tu destino soñado?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, marginBottom: 36 }}>
              Nuestros expertos pueden diseñar un viaje completamente a tu medida a cualquier rincón del planeta
            </p>
            <Link href="/demos/viajes/contacto" style={{
              display: 'inline-block', background: '#fff', color: ACCENT,
              padding: '16px 40px', borderRadius: 8, fontWeight: 800, fontSize: 16,
              textDecoration: 'none', letterSpacing: 1,
            }}>Diseñar Mi Viaje Personalizado</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

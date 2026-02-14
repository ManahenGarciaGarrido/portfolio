'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const bg = '#fdf5e6'
const accent = '#c8956c'
const dark = '#3d1c02'

const hours = [
  { day: 'Lunes', open: '07:30', close: '20:00' },
  { day: 'Martes', open: '07:30', close: '20:00' },
  { day: 'Miércoles', open: '07:30', close: '20:00' },
  { day: 'Jueves', open: '07:30', close: '21:00' },
  { day: 'Viernes', open: '07:30', close: '21:30' },
  { day: 'Sábado', open: '08:30', close: '21:30' },
  { day: 'Domingo', open: '09:00', close: '19:00' },
]

const transport = [
  { icon: '🚇', method: 'Metro', detail: 'Línea 2 · Noviciado (5 min) · Línea 1 · Gran Vía (8 min)' },
  { icon: '🚌', method: 'Autobús', detail: 'Líneas 44, 133, 202 · Parada Malasaña-Café Artesano' },
  { icon: '🚲', method: 'BiciMAD', detail: 'Estación 54 a 80 metros del local' },
  { icon: '🅿️', method: 'Parking', detail: 'Parking Barceló a 3 minutos a pie. Precio 2€/hora' },
]

export default function ContactoPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const infoRef = useRef(null)
  const infoInView = useInView(infoRef, { once: true })
  const transportRef = useRef(null)
  const transportInView = useInView(transportRef, { once: true })

  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long' })
  const todayCapital = today.charAt(0).toUpperCase() + today.slice(1)

  return (
    <main style={{ background: bg, fontFamily: 'Georgia, serif', minHeight: '100vh' }}>
      {/* HEADER */}
      <div style={{ background: dark, padding: '4rem 2rem 3rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span style={{ color: accent, letterSpacing: '0.3em', fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'sans-serif', display: 'block', marginBottom: '0.75rem' }}>
            Estamos en Malasaña, Madrid
          </span>
          <h1 style={{ color: '#fdf5e6', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300, margin: '0 0 1rem', letterSpacing: '-0.01em' }}>
            Encuéntranos
          </h1>
          <p style={{ color: '#c8a882', fontFamily: 'sans-serif', fontSize: '1rem', maxWidth: 460, margin: '0 auto' }}>
            Dos locales en Madrid para servirte el mejor café de especialidad
          </p>
        </motion.div>
      </div>

      {/* MAIN SPLIT SECTION */}
      <section ref={infoRef} style={{ padding: '4rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
          {/* LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 60px rgba(61,28,2,0.15)' }}
          >
            <img
              src="https://picsum.photos/seed/cafe-exterior/700/600"
              alt="Exterior Café Artesano"
              style={{ width: '100%', height: 450, objectFit: 'cover', display: 'block' }}
            />
          </motion.div>

          {/* RIGHT: INFO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Location */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: dark, fontSize: '1.4rem', margin: '0 0 0.5rem', fontWeight: 600 }}>📍 Dirección Principal</h2>
              <p style={{ color: '#5a3a1a', fontFamily: 'sans-serif', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                Calle del Espíritu Santo, 12<br />
                28004 Malasaña, Madrid
              </p>
            </div>

            {/* Hours */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: dark, fontSize: '1.4rem', margin: '0 0 0.75rem', fontWeight: 600 }}>🕐 Horario</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {hours.map(h => {
                  const isToday = h.day === todayCapital
                  return (
                    <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0.75rem', borderRadius: 8, background: isToday ? accent : 'transparent', color: isToday ? '#fff' : '#5a3a1a', fontFamily: 'sans-serif', fontSize: '0.9rem' }}>
                      <span style={{ fontWeight: isToday ? 700 : 400 }}>{h.day} {isToday && '(hoy)'}</span>
                      <span>{h.open} – {h.close}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { icon: '📞', label: 'Teléfono', value: '+34 910 12 34 56' },
                { icon: '✉️', label: 'Email', value: 'hola@cafeartesano.es' },
                { icon: '📸', label: 'Instagram', value: '@CafeArtesano' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.1rem' }}>{c.icon}</span>
                  <div style={{ fontFamily: 'sans-serif' }}>
                    <div style={{ color: accent, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{c.label}</div>
                    <div style={{ color: dark, fontSize: '0.95rem' }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section style={{ padding: '0 2rem 4rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          borderRadius: 16,
          overflow: 'hidden',
          height: 340,
          background: '#e8dcc8',
          position: 'relative',
          boxShadow: '0 8px 30px rgba(61,28,2,0.1)',
        }}>
          {/* Stylized CSS Map */}
          <div style={{ position: 'absolute', inset: 0 }}>
            {/* Road grid */}
            {[80, 160, 240].map(y => (
              <div key={y} style={{ position: 'absolute', left: 0, right: 0, top: y, height: 20, background: 'rgba(255,255,255,0.7)' }} />
            ))}
            {[120, 240, 360, 480, 600].map(x => (
              <div key={x} style={{ position: 'absolute', top: 0, bottom: 0, left: x, width: 14, background: 'rgba(255,255,255,0.7)' }} />
            ))}
            {/* Blocks */}
            {[
              { x: 20, y: 20, w: 80, h: 50 }, { x: 130, y: 20, w: 100, h: 50 }, { x: 260, y: 20, w: 90, h: 50 },
              { x: 20, y: 90, w: 80, h: 60 }, { x: 130, y: 90, w: 100, h: 60 }, { x: 260, y: 90, w: 90, h: 60 },
              { x: 20, y: 170, w: 80, h: 60 }, { x: 260, y: 170, w: 90, h: 60 },
            ].map((b, i) => (
              <div key={i} style={{ position: 'absolute', left: b.x, top: b.y, width: b.w, height: b.h, background: 'rgba(200,149,108,0.25)', borderRadius: 4 }} />
            ))}
          </div>
          {/* Pin */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)', zIndex: 2, textAlign: 'center' }}>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <div style={{ background: accent, color: '#fff', borderRadius: '50% 50% 50% 0', width: 44, height: 44, transform: 'rotate(-45deg)', margin: '0 auto', boxShadow: '0 4px 16px rgba(200,149,108,0.5)' }} />
            </motion.div>
            <div style={{ background: dark, color: '#fdf5e6', padding: '0.4rem 0.75rem', borderRadius: 8, fontFamily: 'sans-serif', fontSize: '0.8rem', fontWeight: 600, marginTop: '0.5rem', whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              Café Artesano
            </div>
          </div>
          {/* Overlay label */}
          <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(61,28,2,0.85)', color: '#fdf5e6', padding: '0.5rem 0.75rem', borderRadius: 8, fontFamily: 'sans-serif', fontSize: '0.8rem' }}>
            Malasaña, Madrid
          </div>
        </div>
      </section>

      {/* HOW TO GET HERE */}
      <section ref={transportRef} style={{ background: '#f0e6d0', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ color: dark, fontSize: '1.8rem', fontWeight: 400, margin: '0 0 0.5rem' }}>¿Cómo Llegar?</h2>
            <div style={{ width: 60, height: 3, background: accent, margin: '0 auto', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {transport.map((t, i) => (
              <motion.div
                key={t.method}
                initial={{ opacity: 0, y: 20 }}
                animate={transportInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 8px rgba(61,28,2,0.06)' }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{t.icon}</div>
                <h3 style={{ color: dark, fontSize: '1rem', margin: '0 0 0.4rem', fontWeight: 700 }}>{t.method}</h3>
                <p style={{ color: '#7a5c3a', fontSize: '0.85rem', lineHeight: 1.5, margin: 0, fontFamily: 'sans-serif' }}>{t.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: dark, padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          <h2 style={{ color: '#fdf5e6', fontSize: '1.6rem', fontWeight: 400, margin: '0 0 0.75rem' }}>Recibe Novedades</h2>
          <p style={{ color: '#c8a882', fontFamily: 'sans-serif', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 2rem' }}>
            Nuevos orígenes, eventos de cata y ofertas exclusivas directamente en tu bandeja de entrada.
          </p>
          {subscribed ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: accent, fontFamily: 'sans-serif', fontSize: '1rem' }}>
              ✓ ¡Apuntado! Gracias por unirte a nuestra comunidad cafetera.
            </motion.div>
          ) : (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ flex: 1, minWidth: 220, padding: '0.85rem 1rem', borderRadius: 8, border: '1px solid rgba(200,149,108,0.3)', background: 'rgba(255,255,255,0.08)', color: '#fdf5e6', fontFamily: 'sans-serif', fontSize: '0.95rem', outline: 'none' }}
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => email && setSubscribed(true)}
                style={{ background: accent, color: '#fff', border: 'none', padding: '0.85rem 1.5rem', borderRadius: 8, cursor: 'pointer', fontFamily: 'sans-serif', fontWeight: 600, fontSize: '0.95rem' }}
              >
                Suscribirse
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

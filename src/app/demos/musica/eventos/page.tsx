'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const pink = '#ff00cc'
const cyan = '#00d4ff'
const bg = '#080010'

const upcomingEvents = [
  { venue: 'Club Mondo', city: 'Madrid', country: 'España', date: '14 MAR 2026', time: '01:00 — 06:00h', price: '€18 / €25 puerta', genre: 'Techno / Dark House', lineup: 'Bassline + Invitados', status: 'disponible' },
  { venue: 'Sala Apolo', city: 'Barcelona', country: 'España', date: '28 MAR 2026', time: '00:30 — 05:30h', price: '€15 / €20 puerta', genre: 'Electronic / Dark', lineup: 'Bassline b2b Kryxx', status: 'disponible' },
  { venue: 'Amnesia Ibiza', city: 'Ibiza', country: 'España', date: '15 ABR 2026', time: '02:00 — 08:00h', price: '€25 / €35 puerta', genre: 'House / Progressive', lineup: 'Bassline', status: 'agotado' },
  { venue: 'Tresor', city: 'Berlín', country: 'Alemania', date: '02 MAY 2026', time: '00:00 — 08:00h', price: '€15', genre: 'Techno', lineup: 'Bassline + Residentes', status: 'disponible' },
  { venue: 'Fabric', city: 'Londres', country: 'Reino Unido', date: '20 MAY 2026', time: '23:00 — 06:00h', price: '£20 / £25 puerta', genre: 'Underground House', lineup: 'Bassline', status: 'disponible' },
  { venue: 'Berghain', city: 'Berlín', country: 'Alemania', date: '06 JUN 2026', time: '00:00 — Domingo', price: '€15', genre: 'Techno', lineup: 'Bassline', status: 'agotado' },
  { venue: 'Sonar Festival', city: 'Barcelona', country: 'España', date: '18 JUN 2026', time: '22:00 — 00:30h', price: 'Entrada festival', genre: 'Electronic / Experimental', lineup: 'Bassline Live AV Set', status: 'disponible' },
  { venue: 'ADE Amsterdam', city: 'Ámsterdam', country: 'Países Bajos', date: '15 OCT 2026', time: '23:00 — 07:00h', price: '€20', genre: 'Techno / House', lineup: 'Bassline + Special Guest', status: 'próximamente' },
]

const pastShows = [
  { seed: 'past-show1', venue: 'Loveland Festival', city: 'Ámsterdam' },
  { seed: 'past-show2', venue: 'Club Razzmatazz', city: 'Barcelona' },
  { seed: 'past-show3', venue: 'OFF Sonar', city: 'Barcelona' },
  { seed: 'past-show4', venue: 'Shelter Amsterdam', city: 'Ámsterdam' },
  { seed: 'past-show5', venue: 'Metropolis Fest', city: 'Madrid' },
  { seed: 'past-show6', venue: 'DC10', city: 'Ibiza' },
]

const tourCities = [
  { city: 'Madrid', x: '28%', y: '58%', shows: 12 },
  { city: 'Barcelona', x: '38%', y: '48%', shows: 8 },
  { city: 'Ibiza', x: '40%', y: '56%', shows: 5 },
  { city: 'Berlín', x: '58%', y: '28%', shows: 7 },
  { city: 'Amsterdam', x: '52%', y: '24%', shows: 4 },
  { city: 'Londres', x: '44%', y: '20%', shows: 6 },
]

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  disponible: { label: 'Entradas', color: pink, bg: 'transparent' },
  agotado: { label: 'Agotado', color: '#666', bg: 'transparent' },
  próximamente: { label: 'Próx.', color: cyan, bg: 'transparent' },
}

export default function EventosPage() {
  return (
    <main style={{ background: bg, minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif", color: '#fff' }}>

      {/* PAGE HEADER */}
      <section style={{ padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(255,0,204,0.15)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(0,212,255,0.06) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ height: '2px', background: pink, width: '40px', marginBottom: '1.2rem' }} />
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: 1, marginBottom: '1rem' }}>
              PRÓXIMAS <span style={{ color: pink }}>ACTUACIONES</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '500px' }}>
              Fechas confirmadas para 2026. Algunos eventos tienen aforo limitado — asegura tu entrada con antelación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {upcomingEvents.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{
                display: 'flex', alignItems: 'center',
                gap: '2rem',
                padding: '1.75rem 1.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
                transition: 'background 0.2s',
                flexWrap: 'wrap',
              }}
              whileHover={{ backgroundColor: 'rgba(255,0,204,0.04)' }}
            >
              {/* Date column */}
              <div style={{ minWidth: '90px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: pink, lineHeight: 1 }}>{ev.date.split(' ')[0]}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{ev.date.split(' ').slice(1).join(' ')}</div>
              </div>
              {/* Divider */}
              <div style={{ width: '1px', height: '50px', background: 'rgba(255,0,204,0.2)', flexShrink: 0 }} />
              {/* Venue info */}
              <div style={{ flex: '1 1 180px' }}>
                <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#fff', marginBottom: '0.25rem' }}>{ev.venue}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>{ev.city}, {ev.country}</div>
              </div>
              {/* Details */}
              <div style={{ flex: '1 1 160px' }}>
                <div style={{ fontSize: '0.78rem', color: cyan, fontWeight: 700, marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{ev.genre}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>{ev.time}</div>
              </div>
              {/* Price */}
              <div style={{ flex: '0 0 120px' }}>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>{ev.price}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>{ev.lineup}</div>
              </div>
              {/* Button */}
              <div>
                <button
                  disabled={ev.status === 'agotado'}
                  style={{
                    background: ev.status === 'agotado' ? 'rgba(255,255,255,0.05)' : ev.status === 'próximamente' ? 'transparent' : pink,
                    color: ev.status === 'agotado' ? 'rgba(255,255,255,0.25)' : ev.status === 'próximamente' ? cyan : '#fff',
                    border: `1px solid ${ev.status === 'agotado' ? 'rgba(255,255,255,0.1)' : ev.status === 'próximamente' ? cyan : pink}`,
                    fontWeight: 800, fontSize: '0.78rem',
                    padding: '0.6rem 1.5rem', borderRadius: '3px',
                    cursor: ev.status === 'agotado' ? 'not-allowed' : 'pointer',
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    boxShadow: ev.status === 'disponible' ? `0 0 20px rgba(255,0,204,0.3)` : 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {statusConfig[ev.status].label}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOUR MAP */}
      <section style={{ padding: '4rem 1.5rem', background: 'rgba(255,0,204,0.03)', borderTop: '1px solid rgba(255,0,204,0.1)', borderBottom: '1px solid rgba(255,0,204,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ height: '2px', background: pink, width: '40px', margin: '0 auto 1.2rem' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', color: '#fff' }}>
              TOUR <span style={{ color: pink }}>2026</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginTop: '0.5rem' }}>España y Europa</p>
          </div>
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', background: 'rgba(255,0,204,0.05)', border: '1px solid rgba(255,0,204,0.2)', borderRadius: '8px', padding: '3rem 2rem', minHeight: '300px', overflow: 'hidden' }}>
            {/* Abstract map background */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,0,204,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,204,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Fechas confirmadas 2026</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                {tourCities.map((c) => (
                  <motion.div
                    key={c.city}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      background: 'rgba(255,0,204,0.1)',
                      border: `1px solid rgba(255,0,204,0.4)`,
                      borderRadius: '50px',
                      padding: '0.6rem 1.5rem',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fff' }}>{c.city}</div>
                    <div style={{ fontSize: '0.68rem', color: pink, marginTop: '0.1rem' }}>{c.shows} shows</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAST EVENTS GALLERY */}
      <section style={{ padding: '4rem 1.5rem 5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ height: '2px', background: pink, width: '40px', margin: '0 auto 1.2rem' }} />
          <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', color: '#fff' }}>
            SHOWS <span style={{ color: pink }}>ANTERIORES</span>
          </h2>
        </div>
        <div className="r-grid-3" style={{ gap: '1rem' }}>
          {pastShows.map((show, i) => (
            <motion.div
              key={show.seed}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', aspectRatio: '4/3' }}
            >
              <img src={`https://picsum.photos/seed/${show.seed}/400/300`} alt={show.venue} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.7) saturate(1.3)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(8,0,16,0.9) 100%)' }} />
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#fff' }}>{show.venue}</div>
                <div style={{ fontSize: '0.72rem', color: pink, fontWeight: 600 }}>{show.city}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section style={{ padding: '4rem 1.5rem', background: 'rgba(255,0,204,0.06)', borderTop: '1px solid rgba(255,0,204,0.2)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', color: '#fff', marginBottom: '0.75rem' }}>
            ¿CONTRATAR PARA <span style={{ color: pink }}>TU EVENTO?</span>
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Clubs, festivales, eventos corporativos y privados. Consulta disponibilidad con el equipo.
          </p>
          <Link href="/demos/musica/booking" style={{ background: pink, color: '#fff', fontWeight: 800, fontSize: '0.9rem', padding: '1rem 2.5rem', borderRadius: '3px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em', boxShadow: `0 0 40px rgba(255,0,204,0.4)` }}>
            Solicitar Booking
          </Link>
        </div>
      </section>
    </main>
  )
}

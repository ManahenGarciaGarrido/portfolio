'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const pink = '#ff00cc'
const cyan = '#00d4ff'
const bg = '#080010'

const allMixes = [
  { id: 1, seed: 'mix1', title: 'Dark Matter Vol.1', genre: 'Techno', duration: '1h 22min', year: '2026', bpm: '138 BPM', streams: '124K' },
  { id: 2, seed: 'mix2', title: 'Neon Drift', genre: 'House', duration: '58min', year: '2025', bpm: '125 BPM', streams: '98K' },
  { id: 3, seed: 'mix3', title: 'Deep Space Sessions', genre: 'Deep House', duration: '1h 05min', year: '2025', bpm: '122 BPM', streams: '210K' },
  { id: 4, seed: 'mix4', title: 'Frequency Modulation', genre: 'Progressive', duration: '1h 15min', year: '2025', bpm: '130 BPM', streams: '87K' },
  { id: 5, seed: 'mix5', title: 'Subterranean Forces', genre: 'Techno', duration: '1h 30min', year: '2024', bpm: '140 BPM', streams: '305K' },
  { id: 6, seed: 'mix6', title: 'Aurora Rave', genre: 'Melodic', duration: '1h 10min', year: '2024', bpm: '128 BPM', streams: '176K' },
  { id: 7, seed: 'mix7', title: 'Acid Rituals', genre: 'Techno', duration: '1h 45min', year: '2024', bpm: '142 BPM', streams: '445K' },
  { id: 8, seed: 'mix8', title: 'Afterhours Ibiza', genre: 'House', duration: '2h 10min', year: '2023', bpm: '126 BPM', streams: '632K' },
]

const genres = ['Todos', 'Techno', 'House', 'Deep House', 'Progressive', 'Melodic']

const latestRelease = {
  seed: 'mix-latest',
  title: 'VOID EP',
  subtitle: 'Último lanzamiento — Enero 2026',
  label: 'Bassline Records',
  tracks: ['01. Void (Original Mix) — 7:42', '02. Collapse (Club Mix) — 6:18', '03. Signal Lost (Dub Version) — 8:55', '04. Resonance (Peak Hour Edit) — 5:30'],
}

export default function MixesPage() {
  const [activeGenre, setActiveGenre] = useState('Todos')
  const [playingId, setPlayingId] = useState<number | null>(null)

  const filtered = activeGenre === 'Todos' ? allMixes : allMixes.filter(m => m.genre === activeGenre)

  return (
    <main style={{ background: bg, minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif", color: '#fff' }}>

      <style>{`
        @keyframes sound-wave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(2.5); }
        }
        .bar { display: inline-block; width: 3px; height: 14px; background: #ff00cc; border-radius: 2px; margin: 0 1px; }
        .bar:nth-child(1) { animation: sound-wave 0.6s ease-in-out infinite; }
        .bar:nth-child(2) { animation: sound-wave 0.6s ease-in-out 0.1s infinite; }
        .bar:nth-child(3) { animation: sound-wave 0.6s ease-in-out 0.2s infinite; }
        .bar:nth-child(4) { animation: sound-wave 0.6s ease-in-out 0.15s infinite; }
      `}</style>

      {/* PAGE HEADER */}
      <section style={{ padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(255,0,204,0.15)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top left, rgba(255,0,204,0.08) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ height: '2px', background: pink, width: '40px', marginBottom: '1.2rem' }} />
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: 1, marginBottom: '1rem' }}>
              MIXES &amp; <span style={{ color: pink }}>SETS</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '500px' }}>
              Explora el universo sonoro de Bassline. Cada mix es un viaje completo, grabado en los mejores clubs y sesiones de estudio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LATEST RELEASE */}
      <section style={{ padding: '4rem 1.5rem', background: 'rgba(255,0,204,0.04)', borderBottom: '1px solid rgba(255,0,204,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.72rem', color: cyan, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>★ Último Lanzamiento</div>
          <div className="r-two-col" style={{ gap: '3rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10px', left: '-10px', right: '10px', bottom: '10px', border: `1px solid rgba(255,0,204,0.4)`, borderRadius: '4px' }} />
              <img src={`https://picsum.photos/seed/${latestRelease.seed}/600/600`} alt={latestRelease.title} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block', borderRadius: '4px', position: 'relative', zIndex: 1 }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>{latestRelease.subtitle}</div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '0.5rem', textShadow: `0 0 30px rgba(255,0,204,0.3)` }}>{latestRelease.title}</h2>
              <div style={{ color: pink, fontWeight: 700, fontSize: '0.9rem', marginBottom: '2rem' }}>{latestRelease.label}</div>
              <div style={{ marginBottom: '2.5rem' }}>
                {latestRelease.tracks.map((track, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer' }}
                    onMouseEnter={e => (e.currentTarget.style.color = pink)}
                    onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                  >
                    <span style={{ fontSize: '0.9rem', color: 'inherit', transition: 'color 0.2s' }}>{track}</span>
                    <span style={{ color: pink, fontSize: '1rem', opacity: 0.6 }}>▶</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button style={{ background: pink, color: '#fff', border: 'none', fontWeight: 800, fontSize: '0.85rem', padding: '0.9rem 2rem', borderRadius: '3px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em', boxShadow: `0 0 30px rgba(255,0,204,0.4)` }}>
                  ▶ Escuchar en Spotify
                </button>
                <button style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', fontWeight: 700, fontSize: '0.85rem', padding: '0.9rem 2rem', borderRadius: '3px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  SoundCloud
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SPOTIFY EMBED PLACEHOLDER */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: 'rgba(255,0,204,0.06)', border: '1px solid rgba(255,0,204,0.2)', borderRadius: '12px', padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: `linear-gradient(135deg, ${pink}, ${cyan})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>♪</div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#fff', marginBottom: '0.3rem' }}>Bassline en Spotify</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '1rem' }}>Sigue el perfil para acceso a todos los mixes y playlists curadas</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', marginLeft: '0.5rem' }}>Reproduciendo ahora: Dark Matter Vol.1</span>
            </div>
          </div>
          <button style={{ background: '#1DB954', color: '#fff', border: 'none', fontWeight: 800, fontSize: '0.85rem', padding: '0.9rem 2rem', borderRadius: '50px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.08em', flexShrink: 0 }}>
            Abrir en Spotify
          </button>
        </div>
      </section>

      {/* GENRE FILTER + GRID */}
      <section style={{ padding: '1rem 1.5rem 5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {genres.map(g => (
            <button
              key={g}
              onClick={() => setActiveGenre(g)}
              style={{
                background: activeGenre === g ? pink : 'transparent',
                color: activeGenre === g ? '#fff' : 'rgba(255,255,255,0.5)',
                border: `1px solid ${activeGenre === g ? pink : 'rgba(255,255,255,0.2)'}`,
                padding: '0.55rem 1.5rem', borderRadius: '3px',
                fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer',
                textTransform: 'uppercase', letterSpacing: '0.1em',
                transition: 'all 0.2s',
                boxShadow: activeGenre === g ? `0 0 20px rgba(255,0,204,0.35)` : 'none',
              }}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="r-grid-4" style={{ gap: '1.5rem' }}>
          {filtered.map((mix, i) => (
            <motion.div
              key={mix.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{ cursor: 'pointer' }}
            >
              <div
                style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', marginBottom: '1rem', background: '#0d001a' }}
                onClick={() => setPlayingId(playingId === mix.id ? null : mix.id)}
              >
                <img src={`https://picsum.photos/seed/${mix.seed}/300/300`} alt={mix.title} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block', filter: playingId === mix.id ? 'brightness(0.5)' : 'brightness(0.85)', transition: 'filter 0.3s' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: playingId === mix.id ? 'rgba(255,0,204,0.15)' : 'rgba(0,0,0,0)' }}>
                  {playingId === mix.id ? (
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
                      {[14, 20, 16, 22, 12].map((h, k) => (
                        <div key={k} style={{ width: '4px', background: pink, borderRadius: '2px', animation: `sound-wave 0.5s ease-in-out ${k * 0.1}s infinite`, height: `${h}px` }} />
                      ))}
                    </div>
                  ) : (
                    <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(255,0,204,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', opacity: 0, transition: 'opacity 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                    >▶</div>
                  )}
                </div>
                <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', background: 'rgba(0,0,0,0.7)', color: 'rgba(255,255,255,0.8)', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '3px' }}>{mix.duration}</div>
              </div>
              <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#fff', marginBottom: '0.25rem' }}>{mix.title}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: pink, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{mix.genre}</span>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>{mix.streams} plays</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.3rem' }}>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>{mix.bpm}</span>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>{mix.year}</span>
              </div>
              <button
                onClick={() => setPlayingId(playingId === mix.id ? null : mix.id)}
                style={{
                  marginTop: '0.85rem', width: '100%',
                  background: playingId === mix.id ? pink : 'transparent',
                  color: playingId === mix.id ? '#fff' : pink,
                  border: `1px solid ${pink}`,
                  fontWeight: 700, fontSize: '0.75rem',
                  padding: '0.5rem', borderRadius: '3px',
                  cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em',
                  transition: 'all 0.2s',
                }}
              >
                {playingId === mix.id ? '■ Pausar' : '▶ Escuchar'}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1.5rem', background: `linear-gradient(135deg, rgba(255,0,204,0.12) 0%, rgba(0,212,255,0.08) 100%)`, borderTop: '1px solid rgba(255,0,204,0.2)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', color: '#fff', marginBottom: '1rem' }}>
            ¿QUIERES A <span style={{ color: pink }}>BASSLINE</span> EN TU EVENTO?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2rem' }}>Clubs, festivales, eventos privados y residencias. Contacta con el equipo de booking.</p>
          <Link href="/demos/musica/booking" style={{ background: pink, color: '#fff', fontWeight: 800, fontSize: '0.9rem', padding: '1rem 2.5rem', borderRadius: '3px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em', boxShadow: `0 0 40px rgba(255,0,204,0.4)` }}>
            Solicitar Booking
          </Link>
        </div>
      </section>
    </main>
  )
}

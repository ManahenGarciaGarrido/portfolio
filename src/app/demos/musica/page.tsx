'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const pink = '#ff00cc'
const cyan = '#00d4ff'
const bg = '#080010'

const upcomingEvents = [
  { seed: 'concert1', venue: 'Club Mondo', city: 'Madrid', date: '14 MAR 2026', time: '01:00h', genre: 'Techno / House' },
  { seed: 'concert2', venue: 'Sala Apolo', city: 'Barcelona', date: '28 MAR 2026', time: '00:30h', genre: 'Electronic / Dark' },
  { seed: 'concert3', venue: 'Amnesia Ibiza', city: 'Ibiza', date: '15 ABR 2026', time: '02:00h', genre: 'House / Progressive' },
]

const mixes = [
  { seed: 'mix-cover1', title: 'Dark Matter Vol.1', genre: 'Techno' },
  { seed: 'mix-cover2', title: 'Neon Drift', genre: 'House' },
  { seed: 'mix-cover3', title: 'Deep Space', genre: 'Deep House' },
  { seed: 'mix-cover4', title: 'Frequency', genre: 'Progressive' },
  { seed: 'mix-cover5', title: 'Subterranean', genre: 'Dark Techno' },
  { seed: 'mix-cover6', title: 'Aurora Rave', genre: 'Melodic' },
]

const stats = [
  { number: '250+', label: 'Shows en Vivo' },
  { number: '15', label: 'Países' },
  { number: '2M+', label: 'Streams' },
  { number: '10', label: 'Años en la Escena' },
]

const quotes = [
  { text: '"Bassline redefine la electrónica española. Un set que va de lo sublime al caos absoluto, siempre con clase."', pub: 'DJ Mag España' },
  { text: '"Su habilidad para leer una pista y llevar al público a otro nivel es simplemente incomparable. Uno de los mejores de su generación."', pub: 'Mixmag' },
  { text: '"Cada track que selecciona cuenta una historia. En Bassline, la música electrónica encuentra su verdadera voz artística."', pub: 'Resident Advisor' },
]

export default function MusicaHome() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  return (
    <main style={{ background: bg, minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif", color: '#fff', overflowX: 'hidden' }}>

      <style>{`
        @keyframes neon-pulse {
          0%, 100% { text-shadow: 0 0 30px #ff00cc, 0 0 60px #ff00cc, 0 0 120px #ff00cc; }
          50% { text-shadow: 0 0 15px #ff00cc, 0 0 30px #ff00cc; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .neon-text { animation: neon-pulse 2.5s ease-in-out infinite; }
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      {/* HERO FULLSCREEN */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/dj-stage/1400/900"
          alt="DJ Stage"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.25 }}
        />
        {/* Dark overlay gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,0,16,0.4) 0%, rgba(8,0,16,0.1) 50%, rgba(8,0,16,0.9) 100%)' }} />
        {/* Pink radial glow */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,0,204,0.12) 0%, transparent 65%)' }} />
        {/* Grid lines */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,0,204,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,204,0.05) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem', maxWidth: '900px' }}>
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ duration: 1 }}
            style={{ fontSize: '0.8rem', color: cyan, textTransform: 'uppercase', letterSpacing: '0.35em', fontWeight: 700, marginBottom: '1rem' }}
          >
            DJ & Producer • Electronic Music
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="neon-text"
            style={{
              fontSize: 'clamp(5rem, 16vw, 12rem)',
              fontWeight: 900,
              color: pink,
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            BASSLINE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2.5rem' }}
          >
            Tours 2026: Madrid · Barcelona · Ibiza · Amsterdam · Berlín
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/demos/musica/booking" style={{
              background: pink, color: '#fff', fontWeight: 800,
              fontSize: '0.9rem', padding: '1rem 2.5rem',
              borderRadius: '3px', textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.12em', boxShadow: `0 0 40px rgba(255,0,204,0.5)`,
              border: '2px solid transparent',
            }}>
              Booking
            </Link>
            <Link href="/demos/musica/mixes" style={{
              background: 'transparent', color: '#fff', fontWeight: 800,
              fontSize: '0.9rem', padding: '1rem 2.5rem',
              borderRadius: '3px', textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.12em', border: `2px solid rgba(255,0,204,0.5)`,
              boxShadow: `inset 0 0 20px rgba(255,0,204,0.05)`,
            }}>
              Ver Mixes
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', color: pink, fontSize: '1.5rem', opacity: 0.6 }}
        >
          ↓
        </motion.div>
      </section>

      {/* UPCOMING EVENTS */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.div initial={{ width: 0 }} whileInView={{ width: '60px' }} viewport={{ once: true }} style={{ height: '2px', background: pink, margin: '0 auto 1.2rem' }} />
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#fff' }}>
            PRÓXIMOS <span style={{ color: pink }}>EVENTOS</span>
          </h2>
        </div>
        <div className="r-grid-3" style={{ gap: '1.5rem' }}>
          {upcomingEvents.map((ev, i) => (
            <motion.div
              key={ev.venue}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: pink }}
              style={{
                background: 'rgba(255,0,204,0.04)',
                border: `1px solid rgba(255,0,204,0.3)`,
                borderRadius: '6px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.3s',
              }}
            >
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src={`https://picsum.photos/seed/${ev.seed}/600/380`} alt={ev.venue} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.7) saturate(1.2)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(8,0,16,0.85) 100%)' }} />
                <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: pink, color: '#fff', fontSize: '0.65rem', fontWeight: 800, padding: '0.3rem 0.8rem', borderRadius: '2px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{ev.genre}</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{ev.venue}</div>
                <div style={{ color: cyan, fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>{ev.city}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '1.25rem' }}>{ev.date} · {ev.time}</div>
                <Link href="/demos/musica/eventos" style={{
                  display: 'inline-block', background: 'transparent',
                  color: pink, fontWeight: 800, fontSize: '0.8rem',
                  padding: '0.55rem 1.5rem', borderRadius: '3px',
                  textDecoration: 'none', textTransform: 'uppercase',
                  letterSpacing: '0.1em', border: `1px solid ${pink}`,
                }}>Entradas</Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/demos/musica/eventos" style={{ color: pink, fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: `1px solid ${pink}`, paddingBottom: '2px' }}>
            Ver todos los eventos →
          </Link>
        </div>
      </section>

      {/* MIXES TEASER */}
      <section style={{ padding: '4rem 0', background: 'rgba(255,0,204,0.03)', borderTop: '1px solid rgba(255,0,204,0.1)', borderBottom: '1px solid rgba(255,0,204,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 2rem' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ height: '2px', background: pink, width: '40px', marginBottom: '1rem' }} />
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', margin: 0 }}>
                ÚLTIMOS <span style={{ color: pink }}>MIXES</span>
              </h2>
            </div>
            <Link href="/demos/musica/mixes" style={{ color: pink, fontWeight: 700, textDecoration: 'none', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: `1px solid ${pink}`, paddingBottom: '2px' }}>
              Ver todos →
            </Link>
          </motion.div>
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', overflowX: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '1rem', scrollbarWidth: 'none' }}>
          {mixes.map((mix, i) => (
            <motion.div
              key={mix.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              style={{ flex: '0 0 200px', cursor: 'pointer' }}
            >
              <div style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.75rem' }}>
                <img src={`https://picsum.photos/seed/${mix.seed}/200/200`} alt={mix.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,0,16,0.3)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0')}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: pink, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>▶</div>
                </div>
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>{mix.title}</div>
              <div style={{ fontSize: '0.72rem', color: pink, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{mix.genre}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} style={{ background: '#0d001a', borderTop: `3px solid ${pink}`, borderBottom: '1px solid rgba(255,0,204,0.15)' }}>
        <div className="r-grid-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,0,204,0.15)' : 'none',
              }}
            >
              <div style={{ fontSize: '3rem', fontWeight: 900, color: pink, lineHeight: 1, marginBottom: '0.5rem', textShadow: `0 0 20px ${pink}55` }}>{s.number}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BIO TEASER */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="r-two-col" style={{ gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '-15px', left: '-15px', right: '15px', bottom: '15px', border: `1px solid rgba(255,0,204,0.3)`, borderRadius: '4px', zIndex: 0 }} />
            <img src="https://picsum.photos/seed/dj-portrait/600/700" alt="DJ Portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '4px', position: 'relative', zIndex: 1, filter: 'brightness(0.9)' }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 2, background: pink, padding: '0.75rem 1.5rem', borderRadius: '3px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fff', opacity: 0.8 }}>Residente en</div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: '#fff' }}>Club XL Madrid</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ height: '2px', background: pink, width: '40px', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', marginBottom: '1.5rem', lineHeight: 1 }}>
              SOBRE <span style={{ color: pink }}>BASSLINE</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
              Desde los sótanos underground de Madrid hasta los festivales más grandes de Europa, Bassline ha construido un universo sonoro único que fusiona el techno oscuro con melodías hipnóticas y bajos que sacuden los cimientos de cualquier sala.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
              Influenciado por la escena berlinesa, el acid house de Chicago y la electrónica experimental, cada set es un viaje emocional que va desde lo introspectivo hasta lo eufórico.
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Influencias</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Aphex Twin', 'Nina Kraviz', 'Marcel Dettmann', 'Ricardo Villalobos'].map(inf => (
                  <span key={inf} style={{ background: 'rgba(255,0,204,0.1)', border: '1px solid rgba(255,0,204,0.3)', color: pink, padding: '0.3rem 0.8rem', borderRadius: '2px', fontSize: '0.78rem', fontWeight: 600 }}>{inf}</span>
                ))}
              </div>
            </div>
            <Link href="/demos/musica/bio" style={{
              display: 'inline-block', background: pink, color: '#fff',
              fontWeight: 800, fontSize: '0.85rem', padding: '0.85rem 2rem',
              borderRadius: '3px', textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.12em', boxShadow: `0 0 30px rgba(255,0,204,0.35)`,
            }}>
              Leer Biografía Completa
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PRESS QUOTES */}
      <section style={{ padding: '5rem 1.5rem', background: '#0a0018' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ height: '2px', background: pink, width: '40px', margin: '0 auto 1.2rem' }} />
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, textTransform: 'uppercase', color: '#fff' }}>
              PRENSA & <span style={{ color: pink }}>CRÍTICA</span>
            </h2>
          </div>
          <div className="r-grid-3" style={{ gap: '2rem' }}>
            {quotes.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{
                  background: 'rgba(255,0,204,0.04)',
                  border: '1px solid rgba(255,0,204,0.15)',
                  borderRadius: '6px',
                  padding: '2.5rem 2rem',
                  position: 'relative',
                }}
              >
                <div style={{ color: pink, fontSize: '4rem', lineHeight: 0.8, marginBottom: '1rem', opacity: 0.35, fontFamily: 'Georgia, serif' }}>"</div>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '0.92rem' }}>{q.text}</p>
                <div style={{ borderTop: '1px solid rgba(255,0,204,0.2)', paddingTop: '1rem' }}>
                  <span style={{ color: pink, fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{q.pub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#04000d', borderTop: `1px solid rgba(255,0,204,0.2)`, padding: '3rem 1.5rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: pink, textTransform: 'uppercase', letterSpacing: '0.1em', textShadow: `0 0 20px ${pink}55`, marginBottom: '1.5rem' }}>BASSLINE</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {['Spotify', 'SoundCloud', 'Instagram', 'YouTube'].map(s => (
              <a key={s} href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = pink)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >{s}</a>
            ))}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem' }}>
            booking@bassline.es · +34 600 000 000
          </div>
          <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', marginTop: '1rem' }}>
            © 2026 Bassline. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  )
}

'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const accent = '#00ff88'
const bg = '#000'
const text = '#fff'

const morphWords = ['MARKETING', 'SEO', 'ADS', 'BRANDING', 'WEB']

const services = [
  { icon: '🔍', title: 'SEO', desc: 'Posicionamiento orgánico que dura. Tu marca en la cima de Google.' },
  { icon: '📢', title: 'Paid Media', desc: 'Anuncios que convierten. Google, Meta, TikTok y más.' },
  { icon: '🎨', title: 'Web Design', desc: 'Sitios que venden. UX, conversión y velocidad.' },
  { icon: '📊', title: 'Estrategia', desc: 'Datos, insights y un plan claro para escalar tu negocio.' },
]

const counters = [
  { label: 'Clientes', value: 150, prefix: '+', suffix: '' },
  { label: 'ROI Medio', value: 500, prefix: '+', suffix: '%' },
  { label: 'Años', value: 8, prefix: '+', suffix: '' },
  { label: 'Satisfacción', value: 97, prefix: '', suffix: '%' },
]

const cases = [
  { seed: 'case1', client: 'E-Commerce de Moda', industry: 'Retail Online', result: '+340% ventas en 6 meses', kpi: 'ROAS 8.4x' },
  { seed: 'case2', client: 'SaaS B2B', industry: 'Tecnología', result: '-60% CPL en 90 días', kpi: '2.4M€ pipeline' },
]

function CounterNumber({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 25)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}{count}{suffix}
    </span>
  )
}

function MorphWord() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % morphWords.length), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ height: '1.2em', overflow: 'hidden', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={morphWords[idx]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ display: 'block', color: accent }}
        >
          {morphWords[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function DotsGrid() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.5) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
      }} />
    </div>
  )
}

export default function AgenciaHome() {
  const countersRef = useRef(null)
  const countersInView = useInView(countersRef, { once: true })
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true })
  const casesRef = useRef(null)
  const casesInView = useInView(casesRef, { once: true })

  return (
    <main style={{ background: bg, color: text, fontFamily: "'Inter', 'Helvetica Neue', sans-serif", minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* LEFT half */}
        <div style={{ background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 3rem 6rem', position: 'relative', zIndex: 2 }}>
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <div style={{ color: 'rgba(0,255,136,0.6)', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
                // AGENCIA DIGITAL
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 300, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                Especialistas en
              </div>
              <div style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                <MorphWord />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', fontWeight: 900, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.85)' }}>
                HACEMOS CRECER TU NEGOCIO
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 380, marginBottom: '2.5rem' }}>
                Estrategias de marketing digital que generan resultados reales y medibles. Sin humo, solo ROI.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <motion.a
                  href="/demos/agencia/contacto"
                  whileHover={{ scale: 1.05, background: '#00cc6e' }}
                  style={{ background: accent, color: bg, padding: '0.9rem 2rem', borderRadius: 4, textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'inline-block', transition: 'background 0.2s' }}
                >
                  Hablar con un Experto
                </motion.a>
                <motion.a
                  href="/demos/agencia/casos"
                  whileHover={{ scale: 1.05 }}
                  style={{ border: `1px solid rgba(255,255,255,0.25)`, color: text, padding: '0.9rem 2rem', borderRadius: 4, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.08em', display: 'inline-block' }}
                >
                  Ver Casos de Éxito
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT half */}
        <div style={{ background: accent, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <DotsGrid />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}
          >
            <div style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: '1rem' }}>
              Agencia Premium
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['Google Partner', 'Meta Partner', 'HubSpot Certified', 'ISO 27001'].map(badge => (
                <div key={badge} style={{ background: 'rgba(0,0,0,0.12)', borderRadius: 8, padding: '0.75rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>✦</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(0,0,0,0.7)', letterSpacing: '0.05em' }}>{badge}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', background: 'rgba(0,0,0,0.12)', borderRadius: 12, padding: '1.5rem' }}>
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'rgba(0,0,0,0.7)', textAlign: 'left', lineHeight: 1.8 }}>
                <div>$ growth.start()</div>
                <div style={{ color: 'rgba(0,0,0,0.5)' }}>→ Analizando mercado...</div>
                <div style={{ color: 'rgba(0,0,0,0.5)' }}>→ Optimizando campañas...</div>
                <div style={{ color: 'rgba(0,0,0,0.9)', fontWeight: 700 }}>✓ ROI incrementado +340%</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Center overlap DIGITAL text */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #fff 50%, #000 50%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              userSelect: 'none',
            }}
          >
            DIGITAL
          </motion.div>
        </div>
      </section>

      {/* COUNTERS */}
      <section ref={countersRef} style={{ background: '#111', padding: '4rem 2rem', borderTop: `1px solid rgba(0,255,136,0.1)` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={countersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: accent, letterSpacing: '-0.02em' }}>
                <CounterNumber target={c.value} prefix={c.prefix} suffix={c.suffix} />
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section ref={servicesRef} style={{ padding: '5rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Lo que hacemos
          </div>
          <h2 style={{ color: text, fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            Servicios
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ background: accent, color: bg, borderColor: accent }}
              style={{
                border: `1px solid rgba(0,255,136,0.3)`,
                borderRadius: 8,
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.25s',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{svc.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 900, letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 0.5rem' }}>{svc.title}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1.5rem', opacity: 0.7 }}>{svc.desc}</p>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>
                Ver servicio →
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section ref={casesRef} style={{ padding: '2rem 2rem 5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Resultados reales
          </div>
          <h2 style={{ color: text, fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            Casos Destacados
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {cases.map((c, i) => (
            <motion.div
              key={c.seed}
              initial={{ opacity: 0, y: 30 }}
              animate={casesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, overflow: 'hidden' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <motion.img
                  src={`https://picsum.photos/seed/${c.seed}/700/450`}
                  alt={c.client}
                  whileHover={{ filter: 'grayscale(0%) brightness(0.7)' }}
                  style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block', filter: 'grayscale(80%) brightness(0.6)', transition: 'filter 0.4s' }}
                />
                <div style={{ position: 'absolute', top: 16, left: 16, background: accent, color: bg, padding: '0.3rem 0.75rem', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {c.industry}
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: text, fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{c.client}</h3>
                <div style={{ color: accent, fontSize: '1.3rem', fontWeight: 900, margin: '0 0 0.5rem' }}>{c.result}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>{c.kpi}</div>
                <motion.a
                  href="/demos/agencia/casos"
                  whileHover={{ x: 4 }}
                  style={{ color: accent, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  Ver caso completo →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: accent, padding: '5rem 2rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 style={{ color: bg, fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, margin: '0 0 1rem', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
            ¿Listo para Crecer?
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.65)', fontSize: '1.1rem', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Primera consulta gratuita. Sin compromiso. Solo resultados.
          </p>
          <motion.a
            href="/demos/agencia/contacto"
            whileHover={{ scale: 1.06, background: '#111' }}
            style={{ display: 'inline-block', background: bg, color: accent, padding: '1rem 2.5rem', borderRadius: 4, textDecoration: 'none', fontWeight: 900, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.2s' }}
          >
            Empezar Ahora
          </motion.a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#080808', padding: '2.5rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ color: accent, fontWeight: 900, fontSize: '1.2rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>DIGITAL+</div>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', margin: 0, fontFamily: 'monospace' }}>© 2024 Digital+ · Agencia de Marketing Digital · Madrid</p>
      </footer>
    </main>
  )
}

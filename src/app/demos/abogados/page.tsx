'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

const BG = '#0d1b2a'
const ACCENT = '#c9a227'
const TEXT = '#e8e8e8'
const DARK = '#071220'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])
  return <span ref={ref}>{count.toLocaleString('es-ES')}{suffix}</span>
}

const areasPractica = [
  { icon: '⚖️', name: 'Derecho Civil', desc: 'Contratos, responsabilidad civil, herencias y familia. Protegemos tus derechos en toda disputa civil.' },
  { icon: '🏢', name: 'Derecho Mercantil', desc: 'Constitución de sociedades, fusiones, contratos comerciales y resolución de conflictos empresariales.' },
  { icon: '🔒', name: 'Derecho Penal', desc: 'Defensa penal integral en todas las instancias. Protección de tus derechos fundamentales.' },
  { icon: '👷', name: 'Derecho Laboral', desc: 'Despidos, negociación colectiva, accidentes laborales. Tu empleo y derechos protegidos.' },
  { icon: '📋', name: 'Derecho Fiscal', desc: 'Planificación tributaria, inspecciones de Hacienda, recursos fiscales y optimización legal.' },
  { icon: '🏠', name: 'Derecho Inmobiliario', desc: 'Compraventas, arrendamientos, comunidades de propietarios y reclamaciones hipotecarias.' },
]

export default function AbogadosHome() {
  return (
    <div style={{ background: BG, color: TEXT, overflowX: 'hidden' }}>

      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', textAlign: 'center', overflow: 'hidden' }}>
        {/* Background image */}
        <img
          src="https://picsum.photos/seed/law-office/1400/900"
          alt="Despacho de abogados"
          style={{ objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%', filter: 'brightness(0.25)' }}
        />
        {/* Grid pattern overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${ACCENT}08 1px, transparent 1px), linear-gradient(90deg, ${ACCENT}08 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        {/* Bottom gradient */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: `linear-gradient(transparent, ${BG})` }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 36, border: `1px solid ${ACCENT}50`, borderRadius: 2, padding: '8px 20px', fontSize: 12, letterSpacing: 3, color: ACCENT, textTransform: 'uppercase', fontWeight: 600 }}
          >
            <span style={{ fontSize: 16 }}>⚖</span>
            Fundado en 1999 · Madrid, España
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(38px, 7vw, 88px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-1px', marginBottom: 0, fontFamily: 'Georgia, serif', textTransform: 'uppercase' }}
          >
            DEFENDEMOS
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 'clamp(38px, 7vw, 88px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-1px', marginBottom: 32, fontFamily: 'Georgia, serif', textTransform: 'uppercase', color: ACCENT }}
          >
            TUS DERECHOS
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}
          >
            <div style={{ height: 1, width: 100, background: `linear-gradient(90deg, transparent, ${ACCENT})` }} />
            <span style={{ color: ACCENT, fontSize: 24 }}>⚖</span>
            <div style={{ height: 1, width: 100, background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{ fontSize: 18, color: '#ffffffb0', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.8 }}
          >
            Más de 25 años defendiendo personas y empresas en toda España. Experiencia, rigor y compromiso absoluto con tu caso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Link href="/demos/abogados/consulta" style={{ background: ACCENT, color: '#0d1b2a', padding: '16px 36px', fontWeight: 800, fontSize: 15, textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase', display: 'inline-block' }}>
              Consulta Gratuita
            </Link>
            <Link href="/demos/abogados/areas" style={{ background: 'transparent', border: `1px solid ${ACCENT}80`, color: TEXT, padding: '16px 36px', fontWeight: 600, fontSize: 15, textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase', display: 'inline-block' }}>
              Nuestras Áreas
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRACTICE AREAS PREVIEW ═══ */}
      <section className="r-section" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <p style={{ color: ACCENT, letterSpacing: 3, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', marginBottom: 16 }}>Especialidades</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, fontFamily: 'Georgia, serif', marginBottom: 16 }}>Áreas de práctica</h2>
          <div style={{ width: 60, height: 2, background: ACCENT, margin: '0 auto' }} />
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 0 }}>
          {areasPractica.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ borderLeftColor: ACCENT, borderLeftWidth: 4 }}
              style={{ padding: '32px 28px', border: `1px solid ${ACCENT}15`, borderLeft: '3px solid transparent', cursor: 'pointer', transition: 'all 0.3s', background: 'rgba(201,162,39,0.03)' }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{area.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12, fontFamily: 'Georgia, serif' }}>{area.name}</h3>
              <p style={{ color: `${TEXT}80`, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{area.desc}</p>
              <Link href="/demos/abogados/areas" style={{ color: ACCENT, fontSize: 13, fontWeight: 700, textDecoration: 'none', letterSpacing: 1 }}>
                Saber más →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="r-section" style={{ background: DARK, borderTop: `1px solid ${ACCENT}20`, borderBottom: `1px solid ${ACCENT}20` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          {[
            { target: 25, suffix: '+', label: 'Años de experiencia' },
            { target: 1500, suffix: '+', label: 'Casos resueltos' },
            { target: 98, suffix: '%', label: 'Tasa de éxito' },
            { target: 3, suffix: '', label: 'Sedes en España' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: 'clamp(42px, 6vw, 64px)', fontWeight: 900, color: ACCENT, lineHeight: 1, fontFamily: 'Georgia, serif' }}>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: 14, color: `${TEXT}80`, marginTop: 8, letterSpacing: 1 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED ATTORNEYS ═══ */}
      <section className="r-section" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <p style={{ color: ACCENT, letterSpacing: 3, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', marginBottom: 16 }}>El equipo</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, fontFamily: 'Georgia, serif', marginBottom: 16 }}>Nuestros socios directores</h2>
          <div style={{ width: 60, height: 2, background: ACCENT, margin: '0 auto' }} />
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {[
            { name: 'Ricardo Mendoza Álvarez', role: 'Socio Director', specialty: 'Derecho Mercantil & Civil', bar: 'Col. Nº 28.456 ICAM', seed: 'lawyer1' },
            { name: 'Isabel Castro Ferrer', role: 'Socia Directora', specialty: 'Derecho Penal & Laboral', bar: 'Col. Nº 28.891 ICAM', seed: 'lawyer2' },
            { name: 'Fernando Ruiz Montoya', role: 'Socio Senior', specialty: 'Derecho Fiscal & Tributario', bar: 'Col. Nº 28.234 ICAM', seed: 'lawyer3' },
          ].map((atty) => (
            <motion.div
              key={atty.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              style={{ background: '#0a1520', border: `1px solid ${ACCENT}20`, overflow: 'hidden' }}
            >
              <div style={{ overflow: 'hidden', position: 'relative' }}>
                <img
                  src={`https://picsum.photos/seed/${atty.seed}/400/500`}
                  alt={atty.name}
                  style={{ objectFit: 'cover', aspectRatio: '4/5', width: '100%', display: 'block', filter: 'grayscale(20%)' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(transparent, #0a1520)' }} />
              </div>
              <div style={{ padding: '24px 24px 28px' }}>
                <div style={{ width: 40, height: 2, background: ACCENT, marginBottom: 16 }} />
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6, fontFamily: 'Georgia, serif' }}>{atty.name}</h3>
                <p style={{ color: ACCENT, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{atty.role}</p>
                <p style={{ color: `${TEXT}80`, fontSize: 13, marginBottom: 12 }}>{atty.specialty}</p>
                <p style={{ color: `${TEXT}40`, fontSize: 11, letterSpacing: 1 }}>{atty.bar}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link href="/demos/abogados/equipo" style={{ display: 'inline-block', border: `1px solid ${ACCENT}`, color: ACCENT, padding: '12px 36px', fontWeight: 700, textDecoration: 'none', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
            Ver todo el equipo
          </Link>
        </div>
      </section>

      {/* ═══ LATEST NEWS ═══ */}
      <section className="r-section" style={{ background: DARK }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 50 }}
          >
            <p style={{ color: ACCENT, letterSpacing: 3, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', marginBottom: 16 }}>Blog jurídico</p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, fontFamily: 'Georgia, serif' }}>Actualidad legal</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { title: 'Nuevos cambios en el Estatuto de los Trabajadores 2026', cat: 'LABORAL', date: '12 Feb 2026', seed: 'legal1' },
              { title: 'Reforma fiscal para autónomos: claves para el ejercicio actual', cat: 'FISCAL', date: '8 Feb 2026', seed: 'legal2' },
              { title: 'Guía completa sobre herencias y testamentos en España', cat: 'CIVIL', date: '3 Feb 2026', seed: 'legal3' },
            ].map((post) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={{ background: BG, border: `1px solid ${ACCENT}15`, overflow: 'hidden', cursor: 'pointer' }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${post.seed}/600/380`} alt={post.title} style={{ width: '100%', display: 'block', transition: 'transform 0.4s' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <span style={{ background: ACCENT, color: '#0d1b2a', fontSize: 10, fontWeight: 800, letterSpacing: 2, padding: '3px 10px' }}>{post.cat}</span>
                    <span style={{ color: `${TEXT}50`, fontSize: 12 }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.5, marginBottom: 16, fontFamily: 'Georgia, serif' }}>{post.title}</h3>
                  <Link href="/demos/abogados/blog" style={{ color: ACCENT, fontSize: 12, fontWeight: 700, textDecoration: 'none', letterSpacing: 1 }}>
                    Leer artículo →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONSULTATION CTA ═══ */}
      <section className="r-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 860, margin: '0 auto', background: `linear-gradient(135deg, #0a1520, #12202e)`, border: `1px solid ${ACCENT}40`, padding: 'clamp(32px,6vw,60px) clamp(20px,5vw,48px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }} />
          <div style={{ fontSize: 40, marginBottom: 20 }}>⚖</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, fontFamily: 'Georgia, serif', marginBottom: 16, color: TEXT }}>
            CONSULTA <span style={{ color: ACCENT }}>GRATUITA</span>
          </h2>
          <p style={{ color: `${TEXT}70`, fontSize: 16, lineHeight: 1.8, maxWidth: 540, margin: '0 auto 36px' }}>
            Primera consulta sin coste ni compromiso. Analizamos tu caso y te informamos sobre tus opciones legales con total confidencialidad.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/demos/abogados/consulta" style={{ background: ACCENT, color: '#0d1b2a', padding: '16px 40px', fontWeight: 800, fontSize: 15, textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase', display: 'inline-block' }}>
              Solicitar consulta
            </Link>
            <div style={{ color: `${TEXT}60`, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>📞</span>
              <span>+34 91 555 00 00</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${ACCENT}20`, padding: '40px 24px', textAlign: 'center', color: `${TEXT}40`, fontSize: 13 }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, color: ACCENT, marginBottom: 12 }}>Mendoza & Asociados</div>
        <p>© 2026 Mendoza & Asociados S.L. · Calle de Velázquez 28, 28001 Madrid · Todos los derechos reservados</p>
        <p style={{ marginTop: 8, fontSize: 11, color: `${TEXT}20` }}>Demo creado por Manahen · Esta es una web de demostración</p>
      </footer>
    </div>
  )
}

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const BG = '#0a0a2e'
const ACCENT = '#4fc3f7'
const TEXT = '#e8f4ff'
const CARD_BG = '#0f0f3a'
const DARK_CARD = '#080820'
const ACCENT2 = '#7c4dff'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
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

export default function AcademiaHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { label: 'Alumnos', value: 15000, suffix: '+' },
    { label: 'Cursos', value: 85, suffix: '' },
    { label: 'Valoración', value: 4.8, suffix: '★' },
    { label: 'Empleo', value: 92, suffix: '%' },
  ]

  const courses = [
    {
      seed: 'course-thumb1',
      cat: 'Programación',
      name: 'Full Stack con React y Node.js',
      instructor: 'Ana Martínez',
      rating: 4.9,
      students: 3420,
      duration: '85h',
      price: '149€',
    },
    {
      seed: 'course-thumb2',
      cat: 'Data Science',
      name: 'Python para Data Science y Machine Learning',
      instructor: 'Carlos López',
      rating: 4.8,
      students: 2850,
      duration: '90h',
      price: '169€',
    },
    {
      seed: 'course-thumb3',
      cat: 'Marketing Digital',
      name: 'Marketing Digital Completo con IA',
      instructor: 'Laura Sánchez',
      rating: 4.7,
      students: 4100,
      duration: '60h',
      price: '99€',
    },
  ]

  const features = [
    { icon: '🕐', title: 'Aprende a tu ritmo', desc: 'Acceso 24/7 a todos los contenidos. Pausa y retoma cuando quieras.' },
    { icon: '🎓', title: 'Certificados reconocidos', desc: 'Certificados avalados por empresas líderes del sector.' },
    { icon: '👥', title: 'Comunidad activa', desc: 'Más de 15.000 alumnos compartiendo conocimiento cada día.' },
    { icon: '💬', title: 'Soporte 24/7', desc: 'Tutores expertos listos para resolver tus dudas en cualquier momento.' },
  ]

  const testimonials = [
    {
      seed: 'graduate1',
      name: 'Miguel Fernández',
      before: 'Administrativo',
      after: 'Desarrollador Frontend en Google',
      quote: 'Gracias a LearnX pasé de administrativo a desarrollador en solo 8 meses. El soporte del equipo fue fundamental.',
      stars: 5,
    },
    {
      seed: 'graduate2',
      name: 'Sara Jiménez',
      before: 'Camarera',
      after: 'Data Analyst en Santander',
      quote: 'No sabía nada de datos. Ahora analizo millones de registros cada día. LearnX cambió mi vida profesional completamente.',
      stars: 5,
    },
    {
      seed: 'graduate3',
      name: 'Rubén Castro',
      before: 'Estudiante de Derecho',
      after: 'SEO Manager en startup',
      quote: 'Los cursos de marketing son brutales. Muy prácticos, actualizados y con proyectos reales que puedes añadir a tu portfolio.',
      stars: 5,
    },
  ]

  const partners = ['Google', 'Microsoft', 'Salesforce', 'IBM', 'Amazon Web Services', 'Meta']

  const faqs = [
    { q: '¿Necesito conocimientos previos?', a: 'La mayoría de nuestros cursos empiezan desde cero. Cada curso indica su nivel (Básico, Intermedio, Avanzado) para que elijas el adecuado.' },
    { q: '¿Los certificados tienen validez oficial?', a: 'Nuestros certificados están avalados por empresas del sector. No son títulos universitarios oficiales, pero son ampliamente reconocidos en la industria.' },
    { q: '¿Puedo acceder al contenido desde el móvil?', a: 'Sí, nuestra plataforma es 100% responsive y tenemos app para iOS y Android. Aprende donde y cuando quieras.' },
    { q: '¿Hay mentorías personalizadas?', a: 'Los planes Pro y Empresas incluyen sesiones de mentoría 1:1 con instructores. El plan gratuito tiene soporte de comunidad.' },
    { q: '¿Qué pasa si no me gusta un curso?', a: 'Ofrecemos garantía de devolución de 30 días sin preguntas. Si el curso no cumple tus expectativas, te devolvemos el dinero.' },
  ]

  return (
    <div style={{ background: BG, color: TEXT, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* HERO */}
      <section className="r-hero-split" style={{ minHeight: '100vh', background: BG }}>
        <div style={{ background: BG, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-block',
                background: `${ACCENT}22`,
                border: `1px solid ${ACCENT}55`,
                padding: '0.4rem 1.1rem',
                borderRadius: '2rem',
                fontSize: '0.8rem',
                color: ACCENT,
                marginBottom: '2rem',
                letterSpacing: '0.05em',
              }}
            >
              🚀 Plataforma #1 de formación online en español
            </motion.div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '1.5rem' }}>
              <span style={{ color: TEXT }}>APRENDE LO QUE</span><br />
              <span style={{ color: ACCENT }}>EL MUNDO NECESITA</span>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: '#a0c4e8', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
              Cursos 100% online, certificados y con soporte de expertos. Transforma tu carrera desde casa.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.a
                href="/demos/academia/cursos"
                whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${ACCENT}66` }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: ACCENT, color: BG,
                  padding: '1rem 2.5rem', textDecoration: 'none',
                  fontWeight: 800, letterSpacing: '0.05em',
                  fontSize: '0.95rem', display: 'inline-block', borderRadius: '4px',
                }}
              >
                Empezar Gratis
              </motion.a>
              <motion.a
                href="/demos/academia/cursos"
                whileHover={{ scale: 1.05, borderColor: TEXT }}
                style={{
                  background: 'transparent', color: TEXT,
                  padding: '1rem 2.5rem', textDecoration: 'none',
                  fontWeight: 700, fontSize: '0.95rem',
                  border: `2px solid ${ACCENT}55`,
                  display: 'inline-block', borderRadius: '4px',
                }}
              >
                Ver Cursos →
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{ overflow: 'hidden', minHeight: '100vh', position: 'relative' }}
        >
          <img
            src="https://picsum.photos/seed/student-learning/700/800"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            alt="Estudiante aprendiendo con LearnX"
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${BG} 0%, transparent 20%)` }} />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="r-section-sm" style={{ background: DARK_CARD, borderTop: `1px solid ${ACCENT}22`, borderBottom: `1px solid ${ACCENT}22` }}>
        <div className="r-container">
          <div className="r-stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '1rem' }}
              >
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: ACCENT, lineHeight: 1 }}>
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div style={{ color: '#a0c4e8', fontSize: '0.9rem', marginTop: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              Lo más popular
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT }}>
              Cursos Destacados
            </h2>
          </motion.div>
          <div className="r-grid-3">
            {courses.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, boxShadow: `0 20px 60px ${ACCENT}22` }}
                style={{ background: CARD_BG, border: `1px solid ${ACCENT}22`, borderRadius: '8px', overflow: 'hidden' }}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={`https://picsum.photos/seed/${c.seed}/600/380`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    alt={c.name}
                  />
                  <div style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    background: ACCENT, color: BG,
                    padding: '0.25rem 0.75rem', borderRadius: '2rem',
                    fontSize: '0.75rem', fontWeight: 700,
                  }}>
                    {c.cat}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: TEXT, marginBottom: '0.5rem', lineHeight: 1.4 }}>{c.name}</h3>
                  <p style={{ color: '#a0c4e8', fontSize: '0.85rem', marginBottom: '1rem' }}>por {c.instructor}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#ffd700', fontSize: '0.9rem' }}>{'★'.repeat(Math.floor(c.rating))}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: '0.9rem' }}>{c.rating}</span>
                    <span style={{ color: '#a0c4e8', fontSize: '0.8rem' }}>({c.students.toLocaleString('es-ES')} alumnos)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${ACCENT}22`, paddingTop: '1rem' }}>
                    <span style={{ color: '#a0c4e8', fontSize: '0.85rem' }}>⏱ {c.duration}</span>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: ACCENT }}>{c.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/demos/academia/cursos" style={{
              display: 'inline-block', background: 'transparent', color: ACCENT,
              padding: '1rem 3rem', textDecoration: 'none',
              fontWeight: 700, fontSize: '0.95rem',
              border: `2px solid ${ACCENT}`,
              borderRadius: '4px',
            }}>
              Ver todos los cursos →
            </a>
          </div>
        </div>
      </section>

      {/* WHY LEARNX */}
      <section className="r-section" style={{ background: DARK_CARD }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Por qué elegirnos</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT }}>¿Por qué LearnX?</h2>
          </motion.div>
          <div className="r-grid-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6, boxShadow: `0 12px 40px ${ACCENT}22` }}
                style={{
                  background: CARD_BG, padding: '2rem',
                  border: `1px solid ${ACCENT}22`, borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: TEXT, marginBottom: '0.75rem' }}>{f.title}</h3>
                <p style={{ color: '#a0c4e8', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Historias de éxito</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT }}>Lo que Dicen Nuestros Alumnos</h2>
          </motion.div>
          <div className="r-grid-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{
                  background: CARD_BG, padding: '2rem',
                  border: `1px solid ${ACCENT}22`, borderRadius: '8px',
                  borderTop: `3px solid ${ACCENT}`,
                }}
              >
                <div style={{ color: '#ffd700', fontSize: '1rem', marginBottom: '1rem' }}>{'★'.repeat(t.stars)}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic', fontSize: '0.95rem' }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: `1px solid ${ACCENT}22`, paddingTop: '1.25rem' }}>
                  <img
                    src={`https://picsum.photos/seed/${t.seed}/80/80`}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', display: 'block', flexShrink: 0 }}
                    alt={t.name}
                  />
                  <div>
                    <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9rem' }}>{t.name}</p>
                    <p style={{ color: '#604080', fontSize: '0.78rem' }}>Antes: {t.before}</p>
                    <p style={{ color: ACCENT, fontSize: '0.78rem', fontWeight: 600 }}>Ahora: {t.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="r-section-sm" style={{ background: DARK_CARD, borderTop: `1px solid ${ACCENT}22`, borderBottom: `1px solid ${ACCENT}22` }}>
        <div className="r-container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p style={{ color: '#a0c4e8', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '2rem' }}>
              Empresas que contratan a nuestros graduados
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem 4rem', alignItems: 'center' }}>
              {partners.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    fontSize: '1.1rem', fontWeight: 800,
                    color: '#a0c4e8',
                    letterSpacing: '0.05em',
                  }}
                >
                  {p}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT }}>Preguntas Frecuentes</h2>
          </motion.div>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ borderBottom: `1px solid ${ACCENT}22` }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  color: TEXT, padding: '1.5rem 0', textAlign: 'left',
                  cursor: 'pointer', display: 'flex',
                  justifyContent: 'space-between', alignItems: 'center',
                  fontSize: '1rem', fontWeight: 600, fontFamily: 'system-ui, sans-serif',
                }}
              >
                <span>{faq.q}</span>
                <span style={{ color: ACCENT, fontSize: '1.5rem', lineHeight: 1 }}>
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{ color: '#a0c4e8', lineHeight: 1.8, paddingBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="r-section" style={{ background: `linear-gradient(135deg, #0d0d40 0%, #0a1a3a 100%)`, textAlign: 'center', borderTop: `1px solid ${ACCENT}33` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: TEXT, marginBottom: '1rem', lineHeight: 1.15 }}>
              Comienza hoy.<br />
              <span style={{ color: ACCENT }}>Tu futuro no puede esperar.</span>
            </h2>
            <p style={{ color: '#a0c4e8', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              Únete a más de 15.000 alumnos que ya están transformando su carrera con LearnX.
            </p>
            <a
              href="/demos/academia/precios"
              style={{
                display: 'inline-block', background: ACCENT, color: BG,
                padding: '1.2rem 3.5rem', textDecoration: 'none',
                fontWeight: 800, fontSize: '1.1rem', borderRadius: '4px',
                letterSpacing: '0.03em',
              }}
            >
              Prueba 14 días gratis
            </a>
            <p style={{ color: '#604080', fontSize: '0.85rem', marginTop: '1rem' }}>Sin tarjeta de crédito · Cancela cuando quieras</p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ background: DARK_CARD, borderTop: `1px solid ${ACCENT}22` }}>
        <div className="r-container">
          <div className="r-grid-4" style={{ gap: '2rem', paddingBottom: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: ACCENT, marginBottom: '1rem' }}>LEARNX</h3>
              <p style={{ color: '#a0c4e8', lineHeight: 1.8, fontSize: '0.9rem' }}>
                La plataforma de formación online que transforma carreras. Aprende, certifícate y trabaja.
              </p>
            </div>
            <div>
              <h4 style={{ color: ACCENT, fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Plataforma</h4>
              <p style={{ color: '#a0c4e8', fontSize: '0.9rem', lineHeight: 2 }}>
                Cursos<br />Rutas de Aprendizaje<br />Instructores<br />Certificados
              </p>
            </div>
            <div>
              <h4 style={{ color: ACCENT, fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Empresa</h4>
              <p style={{ color: '#a0c4e8', fontSize: '0.9rem', lineHeight: 2 }}>
                Sobre Nosotros<br />Blog<br />Trabaja con Nosotros<br />Afiliados
              </p>
            </div>
            <div>
              <h4 style={{ color: ACCENT, fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Newsletter</h4>
              <p style={{ color: '#a0c4e8', fontSize: '0.85rem', marginBottom: '1rem' }}>Recibe novedades y cursos gratuitos cada semana.</p>
              <div style={{ display: 'flex', gap: '0' }}>
                <input type="email" placeholder="tu@email.com" style={{ flex: 1, background: CARD_BG, border: `1px solid ${ACCENT}33`, color: TEXT, padding: '0.75rem', fontSize: '0.9rem', outline: 'none' }} />
                <button style={{ background: ACCENT, color: BG, border: 'none', padding: '0 1.25rem', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem' }}>→</button>
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${ACCENT}22`, paddingTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ color: '#304050', fontSize: '0.8rem' }}>© 2024 LearnX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const BG = '#001f3f'
const ACCENT = '#00c896'
const TEXT = '#e8f8f4'
const CARD = '#002a52'
const CARD2 = '#003366'

const tratamientos = [
  { icon: '⚡', titulo: 'Fisioterapia Deportiva', desc: 'Tratamiento especializado para lesiones derivadas de la práctica deportiva. Recuperación rápida y efectiva.' },
  { icon: '🔄', titulo: 'Rehabilitación Postoperatoria', desc: 'Acompañamiento profesional en tu proceso de recuperación tras una intervención quirúrgica.' },
  { icon: '🤲', titulo: 'Masaje Terapéutico', desc: 'Técnicas manuales avanzadas para aliviar contracturas, tensiones y dolor muscular crónico.' },
  { icon: '⚙️', titulo: 'Electroterapia', desc: 'Tecnología de última generación para la estimulación muscular y alivio del dolor agudo.' },
  { icon: '🦴', titulo: 'Osteopatía', desc: 'Tratamiento global del sistema músculo-esquelético con técnicas de manipulación osteopática.' },
  { icon: '🧘', titulo: 'Pilates Clínico', desc: 'Ejercicios terapéuticos de control motor para la rehabilitación y prevención de lesiones.' },
]

const testimonios = [
  {
    nombre: 'Carlos Rodríguez',
    deporte: 'Triatleta',
    texto: 'Después de una lesión en el tendón de Aquiles que parecía acabar con mi temporada, el equipo de Kinesio Sport me devolvió a la competición en tiempo récord. Su metodología es excepcional.',
    seed: 'athlete1',
  },
  {
    nombre: 'Laura Martínez',
    deporte: 'Jugadora de Pádel',
    texto: 'Llevaba meses con dolor lumbar que me impedía jugar. Tras el tratamiento no solo desapareció el dolor, sino que mejoré mi rendimiento. Totalmente recomendado.',
    seed: 'athlete2',
  },
  {
    nombre: 'Marcos Vidal',
    deporte: 'Ciclista Amateur',
    texto: 'La fisioterapia preventiva que realizo cada mes me ha permitido evitar lesiones durante toda la temporada. Kinesio Sport es mi equipo de apoyo indispensable.',
    seed: 'athlete3',
  },
]

const mutuas = ['ADESLAS', 'MAPFRE', 'SANITAS', 'ASISA', 'DKV', 'GENERALI']

export default function FisioHome() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })
  const treatRef = useRef(null)
  const treatInView = useInView(treatRef, { once: true })
  const methRef = useRef(null)
  const methInView = useInView(methRef, { once: true })
  const testRef = useRef(null)
  const testInView = useInView(testRef, { once: true })

  return (
    <main style={{ background: BG, color: TEXT, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* HERO */}
      <section className="r-hero-split" style={{ background: BG, minHeight: 'max(90svh, 560px)' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(2rem, 6vw, 4rem) clamp(1.5rem, 5vw, 3rem)', gap: '1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Clínica de Fisioterapia Deportiva
            </p>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, color: '#ffffff', margin: 0 }}>
              RECUPERA TU<br />
              <span style={{ color: ACCENT }}>RENDIMIENTO</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: '1.1rem', lineHeight: 1.7, color: TEXT, opacity: 0.85, maxWidth: 480 }}
          >
            Fisioterapia deportiva y rehabilitación especializada para profesionales y amantes del deporte. Más de 15 años devolviendo atletas a su máximo nivel.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link href="/demos/fisio/reservar">
              <button style={{ background: ACCENT, color: '#001f3f', border: 'none', padding: '0.9rem 2.2rem', borderRadius: 8, fontSize: '1rem', fontWeight: 700, cursor: 'pointer', transition: 'transform 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Reservar Cita
              </button>
            </Link>
            <Link href="/demos/fisio/tratamientos">
              <button style={{ background: 'transparent', color: ACCENT, border: `2px solid ${ACCENT}`, padding: '0.9rem 2.2rem', borderRadius: 8, fontSize: '1rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.color = '#001f3f' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = ACCENT }}
              >
                Ver Tratamientos
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ flex: 1, minHeight: 500, overflow: 'hidden' }}
        >
          <img src="https://picsum.photos/seed/physio-athlete/700/800" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Atleta en fisioterapia" />
        </motion.div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="r-stats" style={{ background: ACCENT, padding: '3rem 2rem' }}>
        {[
          { num: '5.000+', label: 'Pacientes Tratados' },
          { num: '15', label: 'Años de Experiencia' },
          { num: '98%', label: 'Satisfacción' },
          { num: '3', label: 'Centros en Madrid' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ textAlign: 'center', padding: '1rem' }}
          >
            <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#001f3f' }}>{stat.num}</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#001f3f', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
          </motion.div>
        ))}
      </section>

      {/* TREATMENTS PREVIEW */}
      <section ref={treatRef} className="r-section" style={{ background: BG, padding: '5rem 2rem' }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={treatInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase' }}>Nuestros Servicios</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#ffffff', marginTop: '0.5rem' }}>Tratamientos Especializados</h2>
            <p style={{ color: TEXT, opacity: 0.7, maxWidth: 560, margin: '1rem auto 0' }}>Ofrecemos una amplia gama de tratamientos adaptados a cada tipo de lesión y a cada nivel deportivo.</p>
          </motion.div>
          <div className="r-grid-3">
            {tratamientos.map((t, i) => (
              <motion.div
                key={t.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={treatInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: CARD, borderRadius: 12, padding: '2rem', borderLeft: `4px solid ${ACCENT}`, transition: 'transform 0.2s, box-shadow 0.2s' }}
                whileHover={{ y: -6 }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.icon}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>{t.titulo}</h3>
                <p style={{ color: TEXT, opacity: 0.75, lineHeight: 1.6, fontSize: '0.95rem' }}>{t.desc}</p>
                <Link href="/demos/fisio/tratamientos">
                  <span style={{ color: ACCENT, fontWeight: 600, fontSize: '0.9rem', marginTop: '1rem', display: 'inline-block', cursor: 'pointer' }}>Saber más →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section ref={methRef} className="r-two-col" style={{ background: CARD, padding: '5rem 2rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={methInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ flex: 1, padding: '2rem' }}
        >
          <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase' }}>Nuestra Metodología</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#ffffff', margin: '0.75rem 0 1.5rem' }}>Un Enfoque Integral y Personalizado</h2>
          <p style={{ color: TEXT, opacity: 0.8, lineHeight: 1.8, marginBottom: '1rem' }}>
            En Kinesio Sport no tratamos lesiones, tratamos personas. Cada paciente recibe una evaluación exhaustiva que nos permite diseñar un plan de tratamiento completamente individualizado, adaptado a su historial clínico, objetivos deportivos y ritmo de recuperación.
          </p>
          <p style={{ color: TEXT, opacity: 0.8, lineHeight: 1.8, marginBottom: '2rem' }}>
            Combinamos las técnicas más avanzadas de fisioterapia con tecnología de última generación y un seguimiento continuo, garantizando que cada sesión te acerque un paso más a tu pleno rendimiento.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['Evaluación biomecánica completa', 'Plan de tratamiento personalizado', 'Seguimiento y ajuste continuo', 'Programa de prevención de recaídas'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: TEXT }}>
                <span style={{ color: ACCENT, fontWeight: 700, fontSize: '1.2rem' }}>✓</span>
                <span style={{ opacity: 0.85 }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={methInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ flex: 1, minHeight: 400, borderRadius: 12, overflow: 'hidden' }}
        >
          <img src="https://picsum.photos/seed/physio-session/700/500" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Sesión de fisioterapia" />
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testRef} className="r-section" style={{ background: BG, padding: '5rem 2rem' }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testInView ? { opacity: 1, y: 0 } : {}}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase' }}>Testimonios</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#ffffff', marginTop: '0.5rem' }}>Lo Que Dicen Nuestros Atletas</h2>
          </motion.div>
          <div className="r-grid-3">
            {testimonios.map((t, i) => (
              <motion.div
                key={t.nombre}
                initial={{ opacity: 0, y: 30 }}
                animate={testInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ background: CARD2, borderRadius: 12, padding: '2rem' }}
              >
                <div style={{ color: ACCENT, fontSize: '1.8rem', marginBottom: '1rem' }}>"</div>
                <p style={{ color: TEXT, opacity: 0.85, lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>{t.texto}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 50, height: 50, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                    <img src={`https://picsum.photos/seed/${t.seed}/80/80`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={t.nombre} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{t.nombre}</div>
                    <div style={{ color: ACCENT, fontSize: '0.85rem' }}>{t.deporte}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section style={{ background: CARD, padding: '3.5rem 2rem' }}>
        <div className="r-container" style={{ textAlign: 'center' }}>
          <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Convenios</p>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '2rem' }}>Trabajamos con tu Mutua</h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            {mutuas.map(m => (
              <div key={m} style={{ background: BG, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: '0.75rem 1.5rem', color: TEXT, fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.05em' }}>
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section style={{ background: ACCENT, padding: '4rem 2rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#001f3f', marginBottom: '1rem' }}>
            ¿Listo para Recuperarte?
          </h2>
          <p style={{ color: '#001f3f', opacity: 0.8, fontSize: '1.1rem', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Reserva tu primera consulta online de forma rápida y sencilla. Primera visita con evaluación completa incluida.
          </p>
          <Link href="/demos/fisio/reservar">
            <button style={{ background: '#001f3f', color: ACCENT, border: 'none', padding: '1rem 3rem', borderRadius: 8, fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', transition: 'transform 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Reservar Cita Online
            </button>
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ background: '#000f1f', padding: '3rem 2rem' }}>
        <div className="r-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: ACCENT, marginBottom: '1rem' }}>KINESIO SPORT</div>
              <p style={{ color: TEXT, opacity: 0.65, lineHeight: 1.7, fontSize: '0.9rem' }}>Clínica de fisioterapia deportiva y rehabilitación especializada con presencia en Madrid.</p>
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '1rem' }}>Centros</h4>
              <div style={{ color: TEXT, opacity: 0.65, lineHeight: 2, fontSize: '0.9rem' }}>
                <div>📍 C/ Goya 45, Madrid</div>
                <div>📍 Av. Brasil 17, Madrid</div>
                <div>📍 C/ Serrano 102, Madrid</div>
              </div>
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '1rem' }}>Horario</h4>
              <div style={{ color: TEXT, opacity: 0.65, lineHeight: 2, fontSize: '0.9rem' }}>
                <div>Lun–Vie: 8:00–21:00</div>
                <div>Sábados: 9:00–15:00</div>
                <div>Domingos: Urgencias</div>
              </div>
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '1rem' }}>Contacto</h4>
              <div style={{ color: TEXT, opacity: 0.65, lineHeight: 2, fontSize: '0.9rem' }}>
                <div>📞 +34 91 234 5678</div>
                <div>🆘 Urgencias: 612 345 678</div>
                <div>✉️ info@kinesiosport.es</div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${ACCENT}30`, paddingTop: '1.5rem', textAlign: 'center', color: TEXT, opacity: 0.4, fontSize: '0.85rem' }}>
            © 2024 Kinesio Sport. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  )
}

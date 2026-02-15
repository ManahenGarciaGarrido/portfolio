'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const BG = '#1a0000'
const ACCENT = '#ff4444'
const TEXT = '#f0e0e0'
const CARD_BG = '#2a0a0a'
const DARK_CARD = '#220505'

export default function BarberiaHome() {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const services = [
    { name: 'Corte Clásico', price: '25€', desc: 'Corte tradicional con tijera y máquina', icon: '✂️' },
    { name: 'Arreglo Barba', price: '20€', desc: 'Perfilado y definición de tu barba', icon: '🪒' },
    { name: 'Afeitado Navaja', price: '30€', desc: 'Experiencia tradicional con navaja', icon: '⚔️' },
    { name: 'Pack Completo', price: '55€', desc: 'Corte + barba + afeitado completo', icon: '👑' },
  ]

  const barbers = [
    { name: 'Marco Ruiz', specialty: 'Cortes Clásicos', years: 12, seed: 'barber1' },
    { name: 'Diego Vega', specialty: 'Barbas y Diseño', years: 8, seed: 'barber2' },
    { name: 'Carlos Medina', specialty: 'Afeitados Premium', years: 15, seed: 'barber3' },
  ]

  const press = [
    { name: 'Men\'s Grooming España', issue: 'Mejor barbería Madrid 2023' },
    { name: 'El País Estilo', issue: 'Los 10 mejores barberos del país' },
    { name: 'Mensual Magazine', issue: 'Tendencias en barbería clásica' },
    { name: 'GQ España', issue: 'Espacios de referencia masculina' },
    { name: 'Time Out Madrid', issue: 'Must-visit grooming spots' },
  ]

  const faqs = [
    { q: '¿Necesito reserva previa?', a: 'Recomendamos reservar con antelación, aunque aceptamos clientes sin cita según disponibilidad. Los fines de semana es especialmente recomendable reservar.' },
    { q: '¿Cuánto dura un corte de pelo?', a: 'Un corte clásico dura aproximadamente 45 minutos. El pack completo puede durar hasta 90 minutos para garantizar la máxima atención al detalle.' },
    { q: '¿Qué productos utilizáis?', a: 'Trabajamos exclusivamente con marcas premium como American Crew, Proraso y Layrite. Todos nuestros productos están disponibles para la venta en la barbería.' },
    { q: '¿Ofrecéis servicio a domicilio o para eventos?', a: 'Sí, disponemos de un servicio especial para bodas, eventos corporativos y sesiones fotográficas. Contacta con nosotros para presupuesto personalizado.' },
    { q: '¿Cómo funciona la política de cancelación?', a: 'Las cancelaciones deben realizarse con al menos 24 horas de antelación. Las cancelaciones tardías o no-shows pueden conllevar un cargo del 50% del servicio.' },
  ]

  return (
    <div style={{ background: BG, color: TEXT, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* HERO */}
      <section className="r-hero-split" style={{ minHeight: 'max(100svh, 600px)', background: BG }}>
        <div style={{ background: BG, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(2rem, 6vw, 4rem) clamp(1.5rem, 5vw, 3rem)' }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div style={{
              display: 'inline-block',
              border: `1px solid ${ACCENT}`,
              padding: '0.35rem 1rem',
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              color: ACCENT,
              marginBottom: '2rem',
              textTransform: 'uppercase',
            }}>
              Desde 1998 · Madrid
            </div>
            <h1 style={{
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              fontWeight: 900,
              letterSpacing: '0.08em',
              lineHeight: 1,
              color: TEXT,
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              BLADE<br />
              <span style={{ color: ACCENT }}>&</span><br />
              CO.
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: '#c0a0a0',
              marginBottom: '2.5rem',
              maxWidth: '420px',
              lineHeight: 1.7,
              fontStyle: 'italic',
            }}>
              Donde el estilo se toma en serio.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.a
                href="/demos/barberia/reservar"
                whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${ACCENT}66` }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: ACCENT,
                  color: '#fff',
                  padding: '1rem 2.5rem',
                  textDecoration: 'none',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  display: 'inline-block',
                }}
              >
                Reservar Ahora
              </motion.a>
              <motion.a
                href="/demos/barberia/servicios"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'transparent',
                  color: TEXT,
                  padding: '1rem 2.5rem',
                  textDecoration: 'none',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  border: `1px solid ${TEXT}44`,
                  display: 'inline-block',
                }}
              >
                Ver Servicios
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{ overflow: 'hidden', minHeight: '100vh', maxHeight: '100vh' }}
        >
          <img
            src="https://picsum.photos/seed/barber-hero/700/900"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            alt="Blade & Co. Barbería"
          />
        </motion.div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="r-section" style={{ background: DARK_CARD }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              Lo que hacemos
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Nuestros Servicios
            </h2>
          </motion.div>
          <div className="r-grid-4">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8, boxShadow: `0 12px 40px ${ACCENT}33` }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${ACCENT}44`,
                  borderTop: `3px solid ${ACCENT}`,
                  padding: '2rem 1.5rem',
                  cursor: 'default',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: TEXT, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.name}</h3>
                <p style={{ color: '#a08080', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{s.desc}</p>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: ACCENT }}>{s.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSPHERE */}
      <section style={{ position: 'relative', overflow: 'hidden', height: '500px' }}>
        <img
          src="https://picsum.photos/seed/barber-interior/1400/600"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          alt="Interior Blade & Co."
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(26,0,0,0.85) 0%, rgba(26,0,0,0.4) 100%)',
          display: 'flex', alignItems: 'center', padding: '0 10%',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Ambiente & Experiencia
            </p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: TEXT, lineHeight: 1.1, textTransform: 'uppercase', maxWidth: '600px' }}>
              La experiencia<br />
              <span style={{ color: ACCENT }}>que mereces</span>
            </h2>
            <p style={{ color: '#c0a0a0', marginTop: '1.5rem', maxWidth: '450px', lineHeight: 1.7, fontSize: '1.05rem', fontStyle: 'italic' }}>
              Un espacio diseñado para el hombre moderno que valora la tradición y el detalle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BARBERS PREVIEW */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              Los artesanos
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Nuestro Equipo
            </h2>
          </motion.div>
          <div className="r-grid-3">
            {barbers.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                style={{ background: CARD_BG, overflow: 'hidden', border: `1px solid ${ACCENT}22` }}
              >
                <div style={{ height: '320px', overflow: 'hidden' }}>
                  <img
                    src={`https://picsum.photos/seed/${b.seed}/400/500`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    alt={b.name}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: TEXT, marginBottom: '0.25rem' }}>{b.name}</h3>
                  <p style={{ color: ACCENT, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>{b.specialty}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#a08080' }}>{b.years} años de experiencia</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/demos/barberia/equipo" style={{ color: ACCENT, textDecoration: 'none', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', borderBottom: `1px solid ${ACCENT}` }}>
              Conocer a todo el equipo →
            </a>
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="r-section-sm" style={{ background: DARK_CARD, borderTop: `1px solid ${ACCENT}22`, borderBottom: `1px solid ${ACCENT}22` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ color: '#a08080', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '2rem' }}>
              Como aparecimos en
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem 3rem', alignItems: 'center' }}>
              {press.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: TEXT, letterSpacing: '0.05em' }}>{p.name}</div>
                  <div style={{ fontSize: '0.75rem', color: ACCENT, marginTop: '0.25rem', fontStyle: 'italic' }}>{p.issue}</div>
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
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              Preguntas frecuentes
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT, textTransform: 'uppercase' }}>
              FAQ
            </h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ borderBottom: `1px solid ${ACCENT}22` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    color: TEXT,
                    padding: '1.5rem 0',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1rem',
                    fontWeight: 600,
                    fontFamily: 'Georgia, serif',
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
                  <p style={{ color: '#c0a0a0', lineHeight: 1.8, paddingBottom: '1.5rem', fontSize: '0.95rem' }}>
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="r-section" style={{ background: ACCENT, textAlign: 'center' }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              ¿Listo para<br />el cambio?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              Reserva tu cita online o llámanos. Estamos aquí de martes a domingo.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a
                href="/demos/barberia/reservar"
                whileHover={{ scale: 1.05, background: '#fff' }}
                style={{
                  background: '#fff',
                  color: ACCENT,
                  padding: '1.1rem 3rem',
                  textDecoration: 'none',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  display: 'inline-block',
                }}
              >
                Reservar Online
              </motion.a>
              <motion.a
                href="tel:+34910000000"
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  padding: '1.1rem 3rem',
                  textDecoration: 'none',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  border: '2px solid #fff',
                  display: 'inline-block',
                }}
              >
                📞 +34 910 000 000
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ background: '#0d0000', borderTop: `1px solid ${ACCENT}33` }}>
        <div className="r-container">
          <div className="r-grid-3" style={{ gap: '2rem', paddingBottom: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: TEXT, letterSpacing: '0.1em', marginBottom: '1rem' }}>BLADE & CO.</h3>
              <p style={{ color: '#a08080', lineHeight: 1.8, fontSize: '0.9rem' }}>
                Barbería de tradición en el corazón de Madrid. Arte, estilo y precisión desde 1998.
              </p>
            </div>
            <div>
              <h4 style={{ color: ACCENT, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>Horario</h4>
              <p style={{ color: '#a08080', fontSize: '0.9rem', lineHeight: 2 }}>
                Mar — Dom: 10:00 — 20:00<br />
                <span style={{ color: ACCENT }}>Lunes: Cerrado</span>
              </p>
            </div>
            <div>
              <h4 style={{ color: ACCENT, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>Dirección</h4>
              <p style={{ color: '#a08080', fontSize: '0.9rem', lineHeight: 2 }}>
                Calle Gran Vía, 42<br />
                28013 Madrid<br />
                Metro: Gran Vía (L1, L5)
              </p>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${ACCENT}22`, paddingTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ color: '#604040', fontSize: '0.8rem' }}>
              © 2024 Blade & Co. Todos los derechos reservados. · <a href="#" style={{ color: '#604040' }}>Privacidad</a> · <a href="#" style={{ color: '#604040' }}>Aviso Legal</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

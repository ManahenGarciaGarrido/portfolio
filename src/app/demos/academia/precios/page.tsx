'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const BG = '#0a0a2e'
const ACCENT = '#4fc3f7'
const TEXT = '#e8f4ff'
const CARD_BG = '#0f0f3a'
const DARK_CARD = '#080820'

export default function AcademiaPrecios() {
  const [billing, setBilling] = useState<'mensual' | 'anual'>('mensual')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const proMonthly = 29
  const proAnnual = Math.round(proMonthly * 12 * 0.7)
  const proAnnualMonthly = Math.round(proMonthly * 0.7)

  const plans = [
    {
      name: 'Gratuito',
      price: '€0',
      priceDesc: 'Para siempre',
      color: '#a0c4e8',
      features: [
        { text: '3 cursos gratuitos completos', included: true },
        { text: 'Acceso a la comunidad', included: true },
        { text: 'Certificados básicos', included: true },
        { text: 'Soporte por email', included: true },
        { text: 'Cursos premium', included: false },
        { text: 'Descargar para offline', included: false },
        { text: 'Mentorías 1:1', included: false },
        { text: 'Acceso empresarial', included: false },
      ],
      cta: 'Empezar Gratis',
      highlight: false,
    },
    {
      name: 'Pro',
      price: billing === 'mensual' ? `€${proMonthly}` : `€${proAnnualMonthly}`,
      priceDesc: billing === 'mensual' ? '/mes' : `/mes (€${proAnnual}/año)`,
      color: ACCENT,
      features: [
        { text: 'Todos los cursos disponibles', included: true },
        { text: 'Acceso a la comunidad', included: true },
        { text: 'Certificados oficiales LearnX', included: true },
        { text: 'Soporte prioritario 24/7', included: true },
        { text: 'Descargar para offline', included: true },
        { text: '2 mentorías/mes incluidas', included: true },
        { text: 'Rutas de aprendizaje guiadas', included: true },
        { text: 'Acceso empresarial', included: false },
      ],
      cta: 'Empezar Pro',
      highlight: true,
    },
    {
      name: 'Empresas',
      price: 'A medida',
      priceDesc: 'Contacta para presupuesto',
      color: '#7c4dff',
      features: [
        { text: 'Todo el catálogo de cursos', included: true },
        { text: 'Gestión de equipos y grupos', included: true },
        { text: 'Certificados personalizados', included: true },
        { text: 'Soporte dedicado', included: true },
        { text: 'Descargar para offline', included: true },
        { text: 'Mentorías ilimitadas', included: true },
        { text: 'Dashboard de progreso del equipo', included: true },
        { text: 'Integraciones HRIS / LMS', included: true },
      ],
      cta: 'Contactar ventas',
      highlight: false,
    },
  ]

  const faqs = [
    {
      q: '¿Puedo cambiar de plan en cualquier momento?',
      a: 'Sí, puedes hacer upgrade o downgrade en cualquier momento. Los cambios se aplican inmediatamente y ajustamos el cobro de forma proporcional.',
    },
    {
      q: '¿Qué incluye la prueba gratuita de 14 días?',
      a: 'La prueba gratuita del plan Pro incluye acceso a todos los cursos, certificados y soporte. No se requiere tarjeta de crédito y puedes cancelar en cualquier momento.',
    },
    {
      q: '¿Los precios incluyen IVA?',
      a: 'Los precios mostrados son sin IVA. Para usuarios de España se aplicará el 21% de IVA. Para empresas dentro de la UE con número VAT, aplicamos reverse charge.',
    },
    {
      q: '¿Cómo funciona la facturación anual?',
      a: 'Con el plan anual pagas por adelantado 12 meses con un 30% de descuento. Recibirás una factura única al inicio del período.',
    },
    {
      q: '¿Qué pasa si cancelo mi suscripción?',
      a: 'Mantienes acceso hasta el final del período pagado. Los certificados ya obtenidos son permanentes. Los cursos en progreso se guardan durante 90 días.',
    },
  ]

  const comparison = [
    { feature: 'Cursos gratuitos', free: '3', pro: 'Todos', empresa: 'Todos' },
    { feature: 'Nuevos cursos cada mes', free: '—', pro: '✓', empresa: '✓' },
    { feature: 'Certificados', free: 'Básico', pro: 'Oficial', empresa: 'Personalizado' },
    { feature: 'Descarga offline', free: '—', pro: '✓', empresa: '✓' },
    { feature: 'Soporte', free: 'Email', pro: '24/7 Prioritario', empresa: 'Dedicado' },
    { feature: 'Mentorías', free: '—', pro: '2/mes', empresa: 'Ilimitadas' },
    { feature: 'Usuarios', free: '1', pro: '1', empresa: 'Ilimitados' },
    { feature: 'Dashboard de equipo', free: '—', pro: '—', empresa: '✓' },
    { feature: 'Integraciones HRIS', free: '—', pro: '—', empresa: '✓' },
    { feature: 'Factura empresa', free: '—', pro: '✓', empresa: '✓' },
  ]

  return (
    <div style={{ background: BG, color: TEXT, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* HEADER */}
      <section style={{ background: DARK_CARD, padding: '6rem 0 3rem', borderBottom: `1px solid ${ACCENT}22` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Inversión en tu futuro
            </p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: TEXT, marginBottom: '1rem' }}>
              Planes y Precios
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                display: 'inline-flex',
                background: DARK_CARD,
                border: `2px solid ${ACCENT}44`,
                borderRadius: '2rem',
                padding: '0.25rem',
                marginTop: '1.5rem',
              }}
            >
              <button
                onClick={() => setBilling('mensual')}
                style={{
                  background: billing === 'mensual' ? ACCENT : 'transparent',
                  color: billing === 'mensual' ? BG : '#a0c4e8',
                  border: 'none', padding: '0.6rem 1.5rem',
                  cursor: 'pointer', borderRadius: '2rem',
                  fontFamily: 'system-ui, sans-serif',
                  fontWeight: billing === 'mensual' ? 700 : 400, fontSize: '0.9rem',
                  transition: 'all 0.2s',
                }}
              >
                Mensual
              </button>
              <button
                onClick={() => setBilling('anual')}
                style={{
                  background: billing === 'anual' ? ACCENT : 'transparent',
                  color: billing === 'anual' ? BG : '#a0c4e8',
                  border: 'none', padding: '0.6rem 1.5rem',
                  cursor: 'pointer', borderRadius: '2rem',
                  fontFamily: 'system-ui, sans-serif',
                  fontWeight: billing === 'anual' ? 700 : 400, fontSize: '0.9rem',
                  transition: 'all 0.2s',
                }}
              >
                Anual <span style={{ fontSize: '0.75rem', color: billing === 'anual' ? BG : '#4caf50', fontWeight: 700 }}>−30%</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRIAL BADGE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          background: `linear-gradient(90deg, ${ACCENT}22, #7c4dff22)`,
          border: `1px solid ${ACCENT}44`,
          textAlign: 'center', padding: '1rem',
        }}
      >
        <span style={{ color: ACCENT, fontWeight: 700, fontSize: '0.95rem' }}>
          🎁 Prueba 14 días gratis sin tarjeta de crédito · Cancela cuando quieras
        </span>
      </motion.div>

      {/* PRICING CARDS */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div className="r-grid-3" style={{ alignItems: 'start' }}>
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{
                  background: plan.highlight ? `linear-gradient(160deg, #0f2040 0%, #0a1830 100%)` : CARD_BG,
                  border: `2px solid ${plan.highlight ? plan.color : plan.color + '33'}`,
                  borderRadius: '12px',
                  padding: '2.5rem 2rem',
                  position: 'relative',
                  transform: plan.highlight ? 'scale(1.03)' : 'scale(1)',
                }}
              >
                {plan.highlight && (
                  <div style={{
                    position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                    background: ACCENT, color: BG,
                    padding: '0.3rem 1.5rem', borderRadius: '0 0 8px 8px',
                    fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>
                    Más Popular
                  </div>
                )}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: plan.color, marginBottom: '0.5rem' }}>{plan.name}</h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={billing + plan.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{ fontSize: '3rem', fontWeight: 900, color: TEXT, lineHeight: 1.1, marginBottom: '0.25rem' }}>
                      {plan.price}
                    </div>
                    <div style={{ color: '#a0c4e8', fontSize: '0.85rem', marginBottom: '2rem' }}>{plan.priceDesc}</div>
                  </motion.div>
                </AnimatePresence>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem' }}>
                  {plan.features.map(f => (
                    <li key={f.text} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                      padding: '0.6rem 0', borderBottom: `1px solid ${plan.color}11`,
                      color: f.included ? TEXT : '#304050',
                      fontSize: '0.88rem',
                    }}>
                      <span style={{ color: f.included ? '#4caf50' : '#304050', fontWeight: 800, flexShrink: 0 }}>
                        {f.included ? '✓' : '✗'}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={plan.name === 'Empresas' ? '/demos/academia/contacto' : '/demos/academia/cursos'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'block', textAlign: 'center',
                    background: plan.highlight ? plan.color : 'transparent',
                    color: plan.highlight ? BG : plan.color,
                    padding: '1rem', textDecoration: 'none',
                    fontWeight: 800, fontSize: '0.95rem',
                    border: `2px solid ${plan.color}`,
                    borderRadius: '6px',
                  }}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="r-section" style={{ background: DARK_CARD }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: TEXT }}>
              Comparativa Detallada
            </h2>
          </motion.div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '1rem', color: '#a0c4e8', fontWeight: 600, fontSize: '0.85rem', borderBottom: `2px solid ${ACCENT}33` }}>
                    Característica
                  </th>
                  {['Gratuito', 'Pro', 'Empresas'].map(name => (
                    <th key={name} style={{
                      textAlign: 'center', padding: '1rem',
                      color: name === 'Pro' ? ACCENT : TEXT,
                      fontWeight: 800, fontSize: '0.95rem',
                      borderBottom: `2px solid ${name === 'Pro' ? ACCENT : ACCENT + '33'}`,
                    }}>
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    style={{ borderBottom: `1px solid ${ACCENT}11` }}
                  >
                    <td style={{ padding: '0.85rem 1rem', color: '#a0c4e8', fontSize: '0.88rem' }}>{row.feature}</td>
                    <td style={{ textAlign: 'center', padding: '0.85rem', color: '#a0c4e8', fontSize: '0.88rem' }}>{row.free}</td>
                    <td style={{ textAlign: 'center', padding: '0.85rem', color: ACCENT, fontSize: '0.88rem', fontWeight: row.pro === '✓' ? 700 : 400 }}>{row.pro}</td>
                    <td style={{ textAlign: 'center', padding: '0.85rem', color: '#7c4dff', fontSize: '0.88rem', fontWeight: row.empresa === '✓' ? 700 : 400 }}>{row.empresa}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
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
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: TEXT }}>
              Preguntas sobre Precios
            </h2>
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
                <span style={{ color: ACCENT, fontSize: '1.5rem', lineHeight: 1, marginLeft: '1rem', flexShrink: 0 }}>
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
      <section className="r-section-sm" style={{ background: `linear-gradient(135deg, #0d0d40 0%, #0a1a3a 100%)`, textAlign: 'center', borderTop: `1px solid ${ACCENT}33` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, color: TEXT, marginBottom: '1rem' }}>
              ¿Aún con dudas? Empieza <span style={{ color: ACCENT }}>gratis</span>.
            </h2>
            <p style={{ color: '#a0c4e8', marginBottom: '2rem', maxWidth: '450px', margin: '0 auto 2rem' }}>
              Sin riesgos. Sin tarjeta. Solo aprendizaje.
            </p>
            <a href="/demos/academia/cursos" style={{
              display: 'inline-block', background: ACCENT, color: BG,
              padding: '1.1rem 3.5rem', textDecoration: 'none',
              fontWeight: 800, fontSize: '1rem', borderRadius: '6px',
            }}>
              Prueba 14 días gratis →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

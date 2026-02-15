'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const ACCENT = '#6c00ff'
const SECONDARY = '#00d4ff'
const BG = '#0f0020'

const allFeatures = [
  'Usuarios incluidos',
  'Automatizaciones activas',
  'Registros en CRM',
  'Almacenamiento',
  'Analíticas en tiempo real',
  'Analíticas predictivas IA',
  'Integraciones nativas',
  'API acceso completo',
  'Soporte por email',
  'Soporte 24/7 chat',
  'Manager de cuenta dedicado',
  'SLA garantizado',
]

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    annualPrice: 0,
    desc: 'Para equipos que empiezan a automatizar',
    features: ['Hasta 5 usuarios', '10 automatizaciones', '5.000 registros', '5 GB', '✓', '✗', '20 integraciones', '✗', '✓', '✗', '✗', 'No incluido'],
    cta: 'Empezar gratis',
    ctaHref: '/demos/startup/contacto',
    highlight: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    annualPrice: 23,
    desc: 'Para equipos que quieren escalar',
    features: ['Usuarios ilimitados', 'Ilimitadas', 'Ilimitados', '100 GB', '✓', '✓', '+400 integraciones', '✓', '✓', '✓', '✗', '99,95%'],
    cta: 'Empezar con Pro',
    ctaHref: '/demos/startup/contacto',
    highlight: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    desc: 'Para organizaciones con necesidades específicas',
    features: ['Ilimitados', 'Ilimitadas', 'Ilimitados', 'Personalizable', '✓', '✓', '+400 integraciones', '✓', '✓', '✓', '✓', '99,99%'],
    cta: 'Contactar ventas',
    ctaHref: '/demos/startup/contacto',
    highlight: false,
  },
]

const faqPricing = [
  { q: '¿Puedo cambiar de plan en cualquier momento?', a: 'Sí, puedes hacer upgrade o downgrade en cualquier momento desde tu panel de control. Los cambios de upgrade son inmediatos y los downgrade efectivos al final del período de facturación.' },
  { q: '¿Qué métodos de pago aceptáis?', a: 'Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, Amex), transferencia bancaria SEPA para Enterprise, y PayPal. Facturas disponibles para empresas con CIF/NIF.' },
  { q: '¿Existe período de prueba gratuito?', a: 'El plan Starter es completamente gratuito sin límite de tiempo. Los planes Pro y Enterprise incluyen 14 días de prueba gratuita sin tarjeta de crédito requerida.' },
  { q: '¿Qué descuento hay en la facturación anual?', a: 'La facturación anual tiene un descuento del 20% sobre el precio mensual. El importe se cobra en un único pago al inicio del período y es reembolsable en los primeros 30 días.' },
  { q: '¿Hay costes ocultos o sorpresas?', a: 'Nunca. El precio que ves es lo que pagas. No hay costes por usuario adicional en Pro y Enterprise, no hay límites de uso ocultos ni cargos por exceso. Solo pagas tu plan mensual o anual.' },
]

export default function PreciosPage() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: BG, color: '#fff', overflowX: 'hidden' }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(40px, 8vw, 80px) 24px clamp(30px, 6vw, 60px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${ACCENT}20, transparent)`, pointerEvents: 'none' }} />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ color: SECONDARY, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', fontSize: 13, marginBottom: 20 }}
        >
          Precios
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 16 }}
        >
          Simple, transparente,{' '}
          <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${SECONDARY})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            sin sorpresas
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ color: '#ffffff70', fontSize: 18, marginBottom: 40 }}
        >
          Empieza gratis, escala cuando lo necesites
        </motion.p>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: '#1a003a', border: `1px solid ${ACCENT}30`, borderRadius: 999, padding: '6px 8px' }}
        >
          <button
            onClick={() => setAnnual(false)}
            style={{ padding: '8px 20px', borderRadius: 999, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 14, background: !annual ? ACCENT : 'transparent', color: !annual ? '#fff' : '#ffffff60', transition: 'all 0.3s', minHeight: '44px' }}
          >
            Mensual
          </button>
          <button
            onClick={() => setAnnual(true)}
            style={{ padding: '8px 20px', borderRadius: 999, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 14, background: annual ? ACCENT : 'transparent', color: annual ? '#fff' : '#ffffff60', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: 8, minHeight: '44px' }}
          >
            Anual
            <span style={{ background: `${SECONDARY}20`, border: `1px solid ${SECONDARY}50`, borderRadius: 999, padding: '2px 8px', fontSize: 11, color: SECONDARY }}>-20%</span>
          </button>
        </motion.div>
      </section>

      {/* Plan cards */}
      <section className="r-section-sm" style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {plans.map((plan) => {
            const price = plan.monthlyPrice === null ? null : annual ? plan.annualPrice : plan.monthlyPrice
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                style={{
                  position: 'relative',
                  borderRadius: 24,
                  padding: '36px 28px',
                  background: plan.highlight ? `linear-gradient(135deg, ${ACCENT}35, #1a003a)` : '#1a003a',
                  border: plan.highlight ? `2px solid transparent` : `1px solid #ffffff15`,
                  backgroundClip: plan.highlight ? undefined : 'padding-box',
                  boxShadow: plan.highlight ? `0 0 80px ${ACCENT}35` : 'none',
                  outline: plan.highlight ? `2px solid ${ACCENT}` : 'none',
                  outlineOffset: plan.highlight ? 0 : 0,
                }}
              >
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: `linear-gradient(135deg, ${ACCENT}, ${SECONDARY})`, borderRadius: 999, padding: '5px 20px', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, whiteSpace: 'nowrap' }}>
                    MÁS POPULAR
                  </div>
                )}
                <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{plan.name}</div>
                <div style={{ marginBottom: 8 }}>
                  {price === null ? (
                    <span style={{ fontSize: 42, fontWeight: 900 }}>Custom</span>
                  ) : price === 0 ? (
                    <span style={{ fontSize: 42, fontWeight: 900 }}>Gratis</span>
                  ) : (
                    <>
                      <span style={{ fontSize: 42, fontWeight: 900 }}>€{price}</span>
                      <span style={{ color: '#ffffff60', fontSize: 14, marginLeft: 4 }}>/mes por usuario</span>
                    </>
                  )}
                </div>
                <p style={{ color: '#ffffff60', fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>{plan.desc}</p>
                <Link
                  href={plan.ctaHref}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: plan.highlight ? `linear-gradient(135deg, ${ACCENT}, #9b00ff)` : `${ACCENT}25`, color: '#fff', padding: '14px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15, border: plan.highlight ? 'none' : `1px solid ${ACCENT}40`, marginBottom: 28, boxShadow: plan.highlight ? `0 0 30px ${ACCENT}40` : 'none', minHeight: '44px' }}
                >
                  {plan.cta}
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {allFeatures.map((feature, fi) => {
                    const val = plan.features[fi]
                    const isCheck = val === '✓'
                    const isCross = val === '✗'
                    return (
                      <div key={feature} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, paddingBottom: 12, borderBottom: '1px solid #ffffff08' }}>
                        <span style={{ color: '#ffffff80' }}>{feature}</span>
                        <span style={{ color: isCheck ? SECONDARY : isCross ? '#ffffff25' : '#fff', fontWeight: isCheck || isCross ? 700 : 600, fontSize: isCheck || isCross ? 16 : 13 }}>{val}</span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Comparison table */}
      <section className="r-section-sm" style={{ maxWidth: 1000, margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, marginBottom: 40, textAlign: 'center' }}
        >
          Comparativa detallada
        </motion.h2>
        <div style={{ overflowX: 'auto', borderRadius: 20, border: `1px solid ${ACCENT}25` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: '#1a003a' }}>
                <th style={{ padding: '20px 24px', textAlign: 'left', color: '#ffffff60', fontWeight: 600, borderBottom: `1px solid ${ACCENT}20` }}>Característica</th>
                {plans.map(p => (
                  <th key={p.name} style={{ padding: '20px 24px', textAlign: 'center', fontWeight: 800, color: p.highlight ? SECONDARY : '#fff', borderBottom: `1px solid ${ACCENT}20`, borderLeft: `1px solid ${ACCENT}15` }}>
                    {p.name}
                    {p.highlight && <div style={{ fontSize: 10, color: ACCENT, marginTop: 2 }}>★ MÁS POPULAR</div>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, fi) => (
                <tr key={feature} style={{ background: fi % 2 === 0 ? '#0f0020' : '#12002a' }}>
                  <td style={{ padding: '16px 24px', color: '#ffffff80', borderBottom: `1px solid #ffffff08` }}>{feature}</td>
                  {plans.map(p => {
                    const val = p.features[fi]
                    const isCheck = val === '✓'
                    const isCross = val === '✗'
                    return (
                      <td key={p.name} style={{ padding: '16px 24px', textAlign: 'center', borderBottom: `1px solid #ffffff08`, borderLeft: `1px solid ${ACCENT}10` }}>
                        <span style={{ color: isCheck ? SECONDARY : isCross ? '#ffffff20' : '#fff', fontWeight: 600, fontSize: isCheck || isCross ? 18 : 13 }}>
                          {val}
                        </span>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Pricing */}
      <section className="r-section-sm" style={{ maxWidth: 780, margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, marginBottom: 40, textAlign: 'center' }}
        >
          Preguntas frecuentes sobre precios
        </motion.h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqPricing.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{ background: '#1a003a', border: `1px solid ${openFaq === i ? ACCENT : '#ffffff12'}`, borderRadius: 14, overflow: 'hidden' }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', textAlign: 'left', fontSize: 15, fontWeight: 600 }}
              >
                {item.q}
                <span style={{ color: ACCENT, fontSize: 22, flexShrink: 0, marginLeft: 16, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s', display: 'inline-block' }}>+</span>
              </button>
              {openFaq === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ padding: '0 24px 20px', color: '#ffffff70', lineHeight: 1.8, fontSize: 14 }}
                >
                  {item.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="r-section" style={{ textAlign: 'center', background: `linear-gradient(180deg, transparent, ${ACCENT}12)` }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(24px, 4vw, 44px)', fontWeight: 900, marginBottom: 16 }}
        >
          ¿Necesitas algo personalizado?
        </motion.h2>
        <p style={{ color: '#ffffff60', marginBottom: 36, fontSize: 16 }}>Nuestro equipo de ventas está listo para diseñar el plan perfecto para tu empresa</p>
        <Link href="/demos/startup/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: `linear-gradient(135deg, ${ACCENT}, #9b00ff)`, color: '#fff', padding: '16px 40px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: `0 0 40px ${ACCENT}40`, minHeight: '44px' }}>
          Hablar con ventas
        </Link>
      </section>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const red = '#ff3300'
const orange = '#ff8800'
const dark = '#0a0a0a'

const plans = [
  {
    name: 'BASICO',
    price: '29',
    color: '#4a9eff',
    front: {
      tagline: 'Para empezar tu camino',
      features: ['Acceso a sala de pesas', 'Vestuarios con taquillas', '2 clases grupales/semana', 'App de seguimiento', 'Evaluacion inicial'],
    },
    back: {
      includes: ['Acceso de 7:00 a 22:00', '2 clases a elegir', 'Asesor de nutricion (1 sesion)', 'Acceso a zona cardio', 'Cancelacion con 15 dias'],
      notIncludes: ['Clases ilimitadas', 'Personal trainer', 'Acceso 24/7', 'Spa y sauna'],
    },
  },
  {
    name: 'PRO',
    price: '49',
    color: orange,
    popular: true,
    front: {
      tagline: 'El preferido por nuestros miembros',
      features: ['Todo lo del plan BASICO', 'Clases grupales ilimitadas', 'Acceso 24/7', '1 sesion PT/mes', 'Zona de recuperacion'],
    },
    back: {
      includes: ['Acceso 24 horas los 7 dias', 'TODAS las clases incluidas', 'Sesion PT mensual', 'Plan nutricional basico', 'Cancelacion con 7 dias', 'Invitado 1 vez/mes'],
      notIncludes: ['PT dedicado', 'Spa y sauna ilimitados'],
    },
  },
  {
    name: 'ELITE',
    price: '79',
    color: red,
    front: {
      tagline: 'La experiencia total sin limites',
      features: ['Todo lo del plan PRO', '4 sesiones PT/mes', 'Spa y sauna ilimitados', 'Plan nutricional premium', 'Armario personal'],
    },
    back: {
      includes: ['Acceso 24/7 VIP', 'PT dedicado (4 sesiones)', 'Spa, sauna y jacuzzi', 'Nutricionista personal', 'Armario permanente', 'Invitados ilimitados (2/semana)', 'Cancelacion en cualquier momento'],
      notIncludes: [],
    },
  },
]

const comparison = [
  { feature: 'Acceso 24/7', basic: false, pro: true, elite: true },
  { feature: 'Sala de pesas', basic: true, pro: true, elite: true },
  { feature: 'Clases grupales', basic: '2/semana', pro: 'Ilimitadas', elite: 'Ilimitadas' },
  { feature: 'Personal trainer', basic: false, pro: '1 sesion/mes', elite: '4 sesiones/mes' },
  { feature: 'Plan nutricional', basic: false, pro: 'Basico', elite: 'Premium' },
  { feature: 'Spa y sauna', basic: false, pro: false, elite: true },
  { feature: 'Armario personal', basic: false, pro: false, elite: true },
  { feature: 'Invitados', basic: false, pro: '1/mes', elite: '2/semana' },
  { feature: 'Evaluacion inicial', basic: true, pro: true, elite: true },
  { feature: 'App de seguimiento', basic: true, pro: true, elite: true },
]

const faqs = [
  { q: 'Puedo cancelar mi membresia en cualquier momento?', a: 'El plan ELITE permite cancelacion en cualquier momento. Los planes BASICO y PRO requieren un aviso previo de 15 dias y 7 dias respectivamente. No hay penalizacion por cancelacion.' },
  { q: 'Hay contrato de permanencia minima?', a: 'No exigimos permanencia minima en ningun plan. Puedes darte de alta y baja cuando quieras. Solo pedimos el aviso previo indicado en las condiciones de cada plan.' },
  { q: 'Puedo cambiar de plan despues de inscribirme?', a: 'Si, puedes cambiar de plan en cualquier momento desde la app o en recepcion. El cambio se aplica en el siguiente periodo de facturacion sin coste adicional.' },
  { q: 'La primera semana es realmente gratis?', a: 'Si, absolutamente. Tienes 7 dias de acceso completo a todas las instalaciones sin necesidad de facilitar datos de pago. Al final de la semana decides si te quedas o no.' },
]

function FlipCard({ plan }: { plan: typeof plans[0] }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="flip-card"
      style={{ perspective: '1000px', height: '500px', cursor: 'pointer', position: 'relative' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="flip-card-inner"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d', position: 'relative' }}
      >
        {/* FRONT */}
        <div
          className="flip-card-front"
          style={{
            position: 'absolute', width: '100%', height: '100%',
            backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            background: '#111',
            border: `2px solid ${plan.popular ? plan.color : '#222'}`,
            borderRadius: '12px',
            padding: '2.5rem 2rem',
            display: 'flex', flexDirection: 'column',
            boxShadow: plan.popular ? `0 0 40px ${plan.color}40` : 'none',
          }}
        >
          {plan.popular && (
            <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: plan.color, color: '#fff', fontSize: '0.65rem', fontWeight: 900, padding: '0.3rem 1.5rem', borderRadius: '0 0 8px 8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>MAS POPULAR</div>
          )}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: plan.color, marginBottom: '0.75rem' }}>{plan.name}</h3>
            <div style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>
              <span style={{ fontSize: '1.5rem', verticalAlign: 'top', marginTop: '0.8rem', display: 'inline-block', color: 'rgba(255,255,255,0.6)' }}>€</span>
              {plan.price}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', marginTop: '0.25rem' }}>por mes</div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', marginTop: '0.75rem', fontStyle: 'italic' }}>{plan.front.tagline}</p>
          </div>
          <div style={{ flex: 1 }}>
            {plan.front.features.map(f => (
              <div key={f} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.7rem' }}>
                <span style={{ color: plan.color, flexShrink: 0, fontWeight: 900 }}>✓</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{f}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem' }}>Pasa el cursor para ver detalles →</div>
        </div>

        {/* BACK */}
        <div
          className="flip-card-back"
          style={{
            position: 'absolute', width: '100%', height: '100%',
            backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, ${plan.color}22 0%, #111 100%)`,
            border: `2px solid ${plan.color}`,
            borderRadius: '12px',
            padding: '2rem',
            display: 'flex', flexDirection: 'column',
          }}
        >
          <h3 style={{ fontWeight: 900, color: plan.color, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', fontSize: '0.9rem' }}>INCLUYE</h3>
          <div style={{ flex: 1 }}>
            {plan.back.includes.map(f => (
              <div key={f} style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', marginBottom: '0.55rem' }}>
                <span style={{ color: plan.color, fontSize: '0.9rem', flexShrink: 0 }}>✓</span>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem' }}>{f}</span>
              </div>
            ))}
            {plan.back.notIncludes.length > 0 && (
              <>
                <div style={{ height: '1px', background: '#333', margin: '0.75rem 0' }} />
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>No incluye</p>
                {plan.back.notIncludes.map(f => (
                  <div key={f} style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', marginBottom: '0.45rem' }}>
                    <span style={{ color: '#555', fontSize: '0.85rem', flexShrink: 0 }}>✗</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', textDecoration: 'line-through' }}>{f}</span>
                  </div>
                ))}
              </>
            )}
          </div>
          <Link href="/demos/gym/contacto" style={{
            display: 'block', textAlign: 'center', background: plan.color, color: '#fff',
            fontWeight: 900, fontSize: '0.9rem', padding: '0.85rem',
            borderRadius: '6px', textDecoration: 'none', textTransform: 'uppercase',
            letterSpacing: '0.1em', marginTop: '1rem', minHeight: '44px',
          }}>
            ELEGIR {plan.name}
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

const renderCell = (val: boolean | string) => {
  if (val === true) return <span style={{ color: '#22c55e', fontSize: '1.1rem' }}>✓</span>
  if (val === false) return <span style={{ color: '#444', fontSize: '1rem' }}>—</span>
  return <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>{val}</span>
}

export default function PlanesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main style={{ background: dark, minHeight: 'max(100svh, 500px)', color: '#fff', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* HEADER */}
      <div style={{ background: '#0d0d0d', borderBottom: `3px solid ${red}`, padding: 'clamp(2rem, 6vw, 4rem) 1.5rem clamp(1.5rem, 4vw, 3rem)', textAlign: 'center' }}>
        <motion.div initial={{ width: 0 }} animate={{ width: '60px' }} transition={{ duration: 0.7 }} style={{ height: '3px', background: red, margin: '0 auto 1.25rem' }} />
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          ELIGE TU <span style={{ color: red }}>PLAN</span>
        </motion.h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem', fontSize: '1rem' }}>Sin permanencia · Sin sorpresas · Primera semana gratis</p>
      </div>

      {/* FLIP CARDS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div className="r-grid-3" style={{ gap: '2rem' }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <FlipCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '2rem', textAlign: 'center' }}>
          COMPARACION DE <span style={{ color: red }}>PLANES</span>
        </h2>
        <div style={{ background: '#111', borderRadius: '12px', overflow: 'auto', border: '1px solid #222' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
            <thead>
              <tr style={{ background: '#1a1a1a' }}>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Caracteristica</th>
                {['BASICO', 'PRO', 'ELITE'].map((p, i) => (
                  <th key={p} style={{ padding: '1rem', textAlign: 'center', color: [plans[0].color, plans[1].color, plans[2].color][i], fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.feature} style={{ borderTop: '1px solid #1a1a1a', background: i % 2 === 0 ? 'transparent' : '#0d0d0d' }}>
                  <td style={{ padding: '0.9rem 1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{row.feature}</td>
                  <td style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>{renderCell(row.basic)}</td>
                  <td style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>{renderCell(row.pro)}</td>
                  <td style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>{renderCell(row.elite)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: '750px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '2rem', textAlign: 'center' }}>
          PREGUNTAS <span style={{ color: red }}>FRECUENTES</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: '#111', borderRadius: '8px',
                border: `1px solid ${openFaq === i ? red + '55' : '#222'}`,
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer',
                  color: '#fff', textAlign: 'left', gap: '1rem',
                }}
              >
                <span style={{ fontWeight: 700, fontSize: '0.92rem', lineHeight: 1.4 }}>{faq.q}</span>
                <span style={{ color: red, fontSize: '1.25rem', fontWeight: 900, flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ padding: '0 1.5rem 1.25rem' }}
                >
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.75 }}>{faq.a}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PROMO CTA */}
      <div style={{ background: `linear-gradient(135deg, ${red} 0%, ${orange} 100%)`, padding: 'clamp(2rem, 6vw, 4rem) 1.5rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1.1 }}>
            PRIMERA SEMANA GRATIS
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '450px', margin: '0 auto 2rem' }}>
            7 dias de acceso completo. Sin pago, sin compromiso. Solo tienes que aparecer.
          </p>
          <Link href="/demos/gym/contacto" style={{
            display: 'inline-block', background: dark, color: '#fff',
            fontWeight: 900, fontSize: '1.05rem', padding: '1rem 3rem',
            borderRadius: '4px', textDecoration: 'none', textTransform: 'uppercase',
            letterSpacing: '0.1em', minHeight: '44px',
          }}>
            QUIERO MI SEMANA GRATIS
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

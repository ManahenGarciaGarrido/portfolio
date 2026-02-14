'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const bg = '#fdf5e6'
const accent = '#c8956c'
const dark = '#3d1c02'

const steps = [
  { icon: '☕', step: '01', title: 'Compra', desc: 'Cada café, té o batido que pidas cuenta para tu tarjeta. Sin mínimo de gasto.' },
  { icon: '🎯', step: '02', title: 'Acumula', desc: 'Colecciona sellos digitales con cada consumición. Válidos en nuestros dos locales.' },
  { icon: '🎁', step: '03', title: 'Canjea', desc: 'Al completar los sellos necesarios, elige tu recompensa favorita. Sin caducidad.' },
]

const rewards = [
  { stamps: 5, icon: '🥐', title: 'Dulce Gratis', desc: 'Cualquier pieza de bollería o pastel del día completamente invitado por Café Artesano.', color: '#e8d4c0' },
  { stamps: 10, icon: '☕', title: 'Café Gratis', desc: 'Cualquier bebida caliente o fría de nuestra carta, sin restricciones de precio.', color: '#d4b896' },
  { stamps: 20, icon: '⭐', title: 'Experiencia VIP', desc: 'Cata privada de espresso con nuestro head barista + saco de café en grano a elegir.', color: '#c8956c' },
]

const benefits = [
  'Acceso anticipado a cafés de temporada y ediciones limitadas',
  'Descuento del 10% en nuestra tienda online de café en grano',
  'Invitaciones exclusivas a eventos de cata y masterclasses',
  'Bebida de cumpleaños completamente gratis',
  'Prioridad en la cola del desayuno los fines de semana',
  'Newsletter mensual con recetas y noticias del mundo del café',
]

function LoyaltyCard({ stampsEarned = 6 }: { stampsEarned?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -15 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        background: `linear-gradient(135deg, ${dark} 0%, #5a2d0c 50%, #3d1c02 100%)`,
        borderRadius: 20,
        padding: '2rem',
        maxWidth: 460,
        margin: '0 auto',
        boxShadow: '0 20px 60px rgba(61,28,2,0.4)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* decorative circles */}
      <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', border: '1px solid rgba(200,149,108,0.2)' }} />
      <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', border: '1px solid rgba(200,149,108,0.15)' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ color: accent, fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'sans-serif', marginBottom: '0.25rem' }}>
            Programa Fidelidad
          </div>
          <div style={{ color: '#fdf5e6', fontSize: '1.4rem', fontFamily: 'Georgia, serif' }}>Café Artesano</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: accent, fontSize: '1.5rem' }}>☕</div>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ color: 'rgba(253,245,230,0.6)', fontSize: '0.75rem', fontFamily: 'sans-serif', marginBottom: '0.75rem' }}>
          {stampsEarned} / 10 sellos
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.6rem' }}>
          {Array.from({ length: 10 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
              style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: '50%',
                border: `2px solid ${i < stampsEarned ? accent : 'rgba(200,149,108,0.3)'}`,
                background: i < stampsEarned ? accent : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
              }}
            >
              {i < stampsEarned && '✓'}
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(200,149,108,0.2)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ color: 'rgba(253,245,230,0.5)', fontSize: '0.7rem', fontFamily: 'sans-serif' }}>Miembro desde</div>
          <div style={{ color: '#fdf5e6', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Enero 2024</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: 'rgba(253,245,230,0.5)', fontSize: '0.7rem', fontFamily: 'sans-serif' }}>Próxima recompensa</div>
          <div style={{ color: accent, fontSize: '0.9rem', fontFamily: 'sans-serif', fontWeight: 600 }}>4 sellos más</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FidelidadPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const rewardsRef = useRef(null)
  const rewardsInView = useInView(rewardsRef, { once: true })
  const benefitsRef = useRef(null)
  const benefitsInView = useInView(benefitsRef, { once: true })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ background: bg, fontFamily: 'Georgia, serif', minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{ background: dark, padding: '5rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(200,149,108,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(200,149,108,0.1) 0%, transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span style={{ color: accent, letterSpacing: '0.3em', fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'sans-serif', display: 'block', marginBottom: '0.75rem' }}>
              Exclusivo para nuestros clientes
            </span>
            <h1 style={{ color: '#fdf5e6', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Programa Fidelidad
            </h1>
            <p style={{ color: '#c8a882', fontSize: '1.1rem', fontStyle: 'italic', maxWidth: 500, margin: '0 auto 3rem', fontFamily: 'sans-serif', lineHeight: 1.7 }}>
              Porque beber buen café debería tener recompensa. Acumula sellos y disfruta de ventajas exclusivas.
            </p>
          </motion.div>
          <LoyaltyCard stampsEarned={6} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: dark, fontSize: '2rem', fontWeight: 400, margin: '0 0 0.5rem' }}>¿Cómo funciona?</h2>
          <div style={{ width: 60, height: 3, background: accent, margin: '0 auto', borderRadius: 2 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ textAlign: 'center', padding: '2rem', background: '#fff', borderRadius: 16, boxShadow: '0 4px 20px rgba(61,28,2,0.07)', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: accent, color: '#fff', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>
                {step.step}
              </div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: '0.5rem' }}>{step.icon}</div>
              <h3 style={{ color: dark, fontSize: '1.15rem', margin: '0 0 0.75rem', fontWeight: 700 }}>{step.title}</h3>
              <p style={{ color: '#7a5c3a', fontSize: '0.9rem', lineHeight: 1.6, margin: 0, fontFamily: 'sans-serif' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REWARDS */}
      <section ref={rewardsRef} style={{ background: '#f0e6d0', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: accent, letterSpacing: '0.3em', fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'sans-serif', display: 'block', marginBottom: '0.75rem' }}>
              Lo que te espera
            </span>
            <h2 style={{ color: dark, fontSize: '2rem', fontWeight: 400, margin: 0 }}>Tus Recompensas</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {rewards.map((reward, i) => (
              <motion.div
                key={reward.stamps}
                initial={{ opacity: 0, y: 30 }}
                animate={rewardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ background: '#fff', borderRadius: 16, padding: '2rem', textAlign: 'center', boxShadow: '0 4px 20px rgba(61,28,2,0.08)', borderTop: `4px solid ${accent}` }}
              >
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: reward.color, margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>
                  {reward.icon}
                </div>
                <div style={{ background: accent, color: '#fff', borderRadius: 100, padding: '0.25rem 0.75rem', fontSize: '0.8rem', fontFamily: 'sans-serif', fontWeight: 700, display: 'inline-block', marginBottom: '0.75rem' }}>
                  {reward.stamps} sellos
                </div>
                <h3 style={{ color: dark, fontSize: '1.1rem', margin: '0 0 0.5rem', fontWeight: 700 }}>{reward.title}</h3>
                <p style={{ color: '#7a5c3a', fontSize: '0.875rem', lineHeight: 1.6, margin: 0, fontFamily: 'sans-serif' }}>{reward.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section ref={benefitsRef} style={{ padding: '5rem 2rem', maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: dark, fontSize: '2rem', fontWeight: 400, margin: '0 0 0.5rem' }}>Beneficios del Club</h2>
          <div style={{ width: 60, height: 3, background: accent, margin: '0 auto', borderRadius: 2 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', padding: '1rem 1.25rem', borderRadius: 10, boxShadow: '0 2px 8px rgba(61,28,2,0.06)' }}
            >
              <span style={{ color: accent, fontSize: '1.25rem', flexShrink: 0 }}>✓</span>
              <span style={{ color: dark, fontSize: '0.95rem', fontFamily: 'sans-serif' }}>{benefit}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SIGN-UP FORM */}
      <section style={{ background: dark, padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fdf5e6', fontSize: '2rem', fontWeight: 400, margin: '0 0 0.75rem' }}>Únete al Club</h2>
            <p style={{ color: '#c8a882', fontFamily: 'sans-serif', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Regístrate gratis y empieza a acumular sellos desde tu próxima visita.
            </p>
          </div>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ background: accent, borderRadius: 16, padding: '2.5rem', textAlign: 'center' }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☕</div>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', margin: '0 0 0.5rem' }}>¡Bienvenido al Club!</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'sans-serif', margin: 0 }}>
                Te hemos enviado un email con tu tarjeta digital. ¡Muéstrala en caja para empezar a acumular!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Nombre completo', key: 'name', type: 'text', placeholder: 'María García' },
                { label: 'Email', key: 'email', type: 'email', placeholder: 'maria@ejemplo.com' },
                { label: 'Teléfono', key: 'phone', type: 'tel', placeholder: '+34 600 000 000' },
              ].map(field => (
                <div key={field.key}>
                  <label style={{ color: '#c8a882', fontSize: '0.85rem', fontFamily: 'sans-serif', display: 'block', marginBottom: '0.4rem' }}>{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                    required
                    style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 8, border: '1px solid rgba(200,149,108,0.3)', background: 'rgba(255,255,255,0.07)', color: '#fdf5e6', fontFamily: 'sans-serif', fontSize: '1rem', boxSizing: 'border-box', outline: 'none' }}
                  />
                </div>
              ))}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ background: accent, color: '#fff', border: 'none', padding: '1rem', borderRadius: 8, fontFamily: 'sans-serif', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '0.5rem', letterSpacing: '0.05em' }}
              >
                Quiero mi Tarjeta Fidelidad
              </motion.button>
              <p style={{ color: 'rgba(200,168,130,0.6)', fontSize: '0.75rem', fontFamily: 'sans-serif', textAlign: 'center', margin: 0 }}>
                Al registrarte aceptas nuestra política de privacidad. Sin spam, lo prometemos.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

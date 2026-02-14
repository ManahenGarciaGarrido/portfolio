'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const red = '#ff3300'
const orange = '#ff8800'
const dark = '#0a0a0a'

export default function GymContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', interes: 'Membresia', mensaje: '' })
  const [sent, setSent] = useState(false)

  const inputStyle = {
    width: '100%',
    background: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '6px',
    padding: '0.85rem 1rem',
    fontSize: '0.9rem',
    color: '#fff',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  }

  const labelStyle = {
    fontSize: '0.72rem',
    fontWeight: 700 as const,
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    display: 'block',
    marginBottom: '0.4rem',
  }

  return (
    <main style={{ background: dark, minHeight: '100vh', color: '#fff', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* HERO */}
      <section style={{ position: 'relative', height: '380px', overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/gym-interior/1200/500"
          alt="Interior Inferno Gym"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.3)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,51,0,0.2) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <motion.div initial={{ width: 0 }} animate={{ width: '60px' }} transition={{ duration: 0.7 }} style={{ height: '3px', background: red, margin: '0 auto 1.25rem' }} />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}
            >
              CONTACTA <span style={{ color: red }}>CON NOSOTROS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem', fontSize: '1rem' }}
            >
              Estamos aqui para ayudarte a comenzar tu transformacion
            </motion.p>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <div className="r-two-col" style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem', gap: '3rem', alignItems: 'start' }}>

        {/* LEFT — FORM */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: '#111', borderRadius: '12px', padding: '2.5rem', border: '1px solid #222' }}
        >
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.75rem', borderBottom: `2px solid ${red}`, paddingBottom: '0.75rem' }}>
            Enviar Mensaje
          </h2>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '3rem 1.5rem' }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔥</div>
              <h3 style={{ fontWeight: 900, fontSize: '1.3rem', color: red, marginBottom: '0.75rem', textTransform: 'uppercase' }}>Mensaje Recibido!</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                Nos pondremos en contacto contigo en menos de 24 horas. Prepara tu ropa de entreno.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Nombre completo</label>
                <input type="text" placeholder="Tu nombre" value={form.nombre} onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))} style={inputStyle} required />
              </div>
              <div>
                <label style={labelStyle}>Correo electronico</label>
                <input type="email" placeholder="tu@email.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inputStyle} required />
              </div>
              <div>
                <label style={labelStyle}>Me interesa</label>
                <select value={form.interes} onChange={e => setForm(p => ({ ...p, interes: e.target.value }))} style={{ ...inputStyle, appearance: 'none' as const }}>
                  <option>Membresia</option>
                  <option>Clase de prueba</option>
                  <option>Personal Trainer</option>
                  <option>Informacion de precios</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Mensaje</label>
                <textarea
                  rows={5}
                  placeholder="Cuentanos tu objetivo, nivel actual, horarios disponibles..."
                  value={form.mensaje}
                  onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  required
                />
              </div>
              <button type="submit" style={{
                background: `linear-gradient(135deg, ${red} 0%, ${orange} 100%)`,
                color: '#fff', fontWeight: 900, fontSize: '1rem',
                padding: '1rem', borderRadius: '6px', border: 'none', cursor: 'pointer',
                textTransform: 'uppercase', letterSpacing: '0.12em',
                boxShadow: `0 8px 30px rgba(255,51,0,0.35)`,
              }}>
                ENVIAR MENSAJE
              </button>
            </form>
          )}
        </motion.div>

        {/* RIGHT — INFO */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {/* Gym info */}
          <div style={{ background: '#111', borderRadius: '12px', padding: '2rem', border: '1px solid #222' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: red, marginBottom: '1.25rem' }}>
              INFERNO GYM MADRID
            </h3>
            {[
              { icon: '📍', label: 'Direccion', value: 'Calle Alcala 200, 28028 Madrid' },
              { icon: '⏰', label: 'Horario', value: '24 horas al dia, 7 dias a la semana' },
              { icon: '📞', label: 'Telefono', value: '+34 91 888 99 00' },
              { icon: '📧', label: 'Email', value: 'hola@infernogym.es' },
              { icon: '📱', label: 'WhatsApp', value: '+34 600 111 222' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</div>
                  <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600, marginTop: '0.15rem' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div style={{
            background: '#111', height: '200px', borderRadius: '12px',
            border: '1px solid #222', display: 'flex', alignItems: 'center',
            justifyContent: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.08,
              backgroundImage: 'linear-gradient(rgba(255,51,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,51,0,0.6) 1px, transparent 1px)',
              backgroundSize: '25px 25px',
            }} />
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📍</div>
              <div style={{ color: red, fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase' }}>Calle Alcala 200</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', marginTop: '0.25rem' }}>Madrid · Espana</div>
            </div>
          </div>

          {/* Social links */}
          <div style={{ background: '#111', borderRadius: '12px', padding: '1.75rem', border: '1px solid #222' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>SIGUENOS</h3>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['Instagram', 'TikTok', 'YouTube', 'Facebook'].map(social => (
                <a key={social} href="#" style={{
                  background: '#1a1a1a', border: '1px solid #333', color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.8rem', fontWeight: 700, padding: '0.5rem 1rem', borderRadius: '6px',
                  textDecoration: 'none',
                }}>{social}</a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* PRIMERA VEZ SECTION */}
      <section style={{ background: '#0d0d0d', borderTop: `3px solid ${red}`, padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ height: '3px', background: red, width: '50px', margin: '0 auto 1.25rem' }} />
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, textTransform: 'uppercase' }}>
              ES TU <span style={{ color: red }}>PRIMERA VEZ?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.75rem' }}>Lo que necesitas saber antes de tu primera visita a Inferno</p>
          </div>
          <div className="r-grid-4" style={{ gap: '1.5rem' }}>
            {[
              { step: '01', icon: '🏋️', title: 'Registro gratuito', desc: 'Tu primera semana es completamente gratis. Solo necesitas ropa comoda y ganas de entrenar. Sin papeleos ni compromisos.' },
              { step: '02', icon: '👤', title: 'Evaluacion inicial', desc: 'Un entrenador evaluara tu nivel fisico, te mostrara las instalaciones y disenar un plan de entrenamiento personalizado.' },
              { step: '03', icon: '💪', title: 'Primera clase', desc: 'Te acompanamos en tu primera sesion. No importa tu nivel: nuestros instructores adaptaran el entrenamiento a ti.' },
              { step: '04', icon: '🔥', title: 'Unete a la familia', desc: 'Tras tu semana gratis, elige el plan que mejor se adapte. Mas de 3.200 miembros ya forman parte de Inferno.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: '#111', borderRadius: '10px', padding: '2rem 1.5rem',
                  border: '1px solid #222', position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '2rem', fontWeight: 900, color: '#222', lineHeight: 1 }}>{item.step}</div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase', color: '#fff', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/demos/gym/planes" style={{
              display: 'inline-block',
              background: `linear-gradient(135deg, ${red} 0%, ${orange} 100%)`,
              color: '#fff', fontWeight: 900, fontSize: '1.05rem',
              padding: '1rem 3rem', borderRadius: '4px', textDecoration: 'none',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              boxShadow: `0 10px 40px rgba(255,51,0,0.4)`,
            }}>
              EMPEZAR SEMANA GRATIS
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

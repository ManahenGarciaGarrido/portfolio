'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const ACCENT = '#6c00ff'
const SECONDARY = '#00d4ff'
const BG = '#0f0020'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    empresa: '',
    rol: '',
    tamano: '',
    reto: '',
    email: '',
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const options = {
    tamano: ['1-10 empleados', '11-50 empleados', '51-200 empleados', '201-1.000 empleados', '+1.000 empleados'],
    reto: ['Automatización de procesos', 'Analíticas y reportes', 'Gestión de clientes (CRM)', 'Colaboración entre equipos', 'Seguridad y cumplimiento', 'Integraciones con herramientas actuales', 'Otro'],
  }

  return (
    <div style={{ background: BG, color: '#fff', overflowX: 'hidden' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${ACCENT}20, transparent)`, pointerEvents: 'none' }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${SECONDARY}15`, border: `1px solid ${SECONDARY}40`, borderRadius: 999, padding: '6px 16px', marginBottom: 24, fontSize: 13, fontWeight: 600, color: SECONDARY }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: SECONDARY, display: 'inline-block' }} />
          Sin tarjeta de crédito necesaria
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', maxWidth: 800, margin: '0 auto 20px' }}
        >
          EMPIEZA{' '}
          <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${SECONDARY})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            HOY
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: '#ffffff70', fontSize: 18, maxWidth: 520, margin: '0 auto' }}
        >
          Cuéntanos sobre tu empresa y te mostramos cómo NexusAI puede transformar tus operaciones
        </motion.p>
      </section>

      {/* Contact options */}
      <section className="r-section-sm" style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {[
            { icon: '🎥', title: 'Demo en vivo', desc: 'Reserva una demostración personalizada con nuestro equipo. 30 minutos, sin compromiso.', action: 'Reservar demo', color: ACCENT },
            { icon: '💼', title: 'Hablar con ventas', desc: 'Nuestro equipo de ventas analizará tus necesidades y diseñará el plan perfecto.', action: 'Contactar ventas', color: SECONDARY },
            { icon: '🛠️', title: 'Soporte técnico', desc: '¿Ya eres cliente y tienes una duda técnica? Nuestro equipo responde en menos de 2 horas.', action: 'Abrir ticket', color: '#9b00ff' },
          ].map((opt) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: opt.color }}
              style={{ background: '#1a003a', border: `1px solid ${ACCENT}25`, borderRadius: 20, padding: 28, cursor: 'pointer', transition: 'border-color 0.2s' }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{opt.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>{opt.title}</h3>
              <p style={{ color: '#ffffff60', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{opt.desc}</p>
              <button style={{ background: `${opt.color}20`, border: `1px solid ${opt.color}50`, color: opt.color, borderRadius: 8, padding: '8px 16px', fontSize: 13, fontWeight: 700, cursor: 'pointer', width: '100%' }}>
                {opt.action} →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main form + sidebar */}
      <section className="r-grid-2 r-section-sm" style={{ maxWidth: 1000, margin: '0 auto', gap: 40 }}>
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>Cuéntanos sobre ti</h2>
          <p style={{ color: '#ffffff60', marginBottom: 32, fontSize: 14 }}>Te responderemos en menos de 24 horas laborables</p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ background: `${SECONDARY}15`, border: `1px solid ${SECONDARY}40`, borderRadius: 20, padding: 40, textAlign: 'center' }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12, color: SECONDARY }}>¡Mensaje recibido!</h3>
              <p style={{ color: '#ffffff80', lineHeight: 1.7 }}>Nuestro equipo te contactará en menos de 24 horas. Mientras tanto, puedes explorar nuestra documentación o ver los tutoriales.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { key: 'empresa', label: 'Nombre de la empresa', type: 'text', placeholder: 'Ej: Acme Corp S.L.' },
                { key: 'rol', label: 'Tu rol en la empresa', type: 'text', placeholder: 'Ej: Director de Operaciones' },
                { key: 'email', label: 'Email corporativo', type: 'email', placeholder: 'tuemail@empresa.com' },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#ffffff90' }}>{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    style={{ width: '100%', background: '#1a003a', border: `1px solid ${ACCENT}40`, borderRadius: 10, padding: '12px 16px', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              ))}

              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#ffffff90' }}>Tamaño del equipo</label>
                <select
                  value={formData.tamano}
                  onChange={(e) => setFormData({ ...formData, tamano: e.target.value })}
                  style={{ width: '100%', background: '#1a003a', border: `1px solid ${ACCENT}40`, borderRadius: 10, padding: '12px 16px', color: formData.tamano ? '#fff' : '#ffffff50', fontSize: 14, outline: 'none', cursor: 'pointer' }}
                >
                  <option value="">Seleccionar tamaño...</option>
                  {options.tamano.map(o => <option key={o} value={o} style={{ background: '#1a003a' }}>{o}</option>)}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#ffffff90' }}>Principal reto que quieres resolver</label>
                <select
                  value={formData.reto}
                  onChange={(e) => setFormData({ ...formData, reto: e.target.value })}
                  style={{ width: '100%', background: '#1a003a', border: `1px solid ${ACCENT}40`, borderRadius: 10, padding: '12px 16px', color: formData.reto ? '#fff' : '#ffffff50', fontSize: 14, outline: 'none', cursor: 'pointer' }}
                >
                  <option value="">Seleccionar reto...</option>
                  {options.reto.map(o => <option key={o} value={o} style={{ background: '#1a003a' }}>{o}</option>)}
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{ background: `linear-gradient(135deg, ${ACCENT}, #9b00ff)`, color: '#fff', border: 'none', padding: '16px', borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: `0 0 40px ${ACCENT}40` }}
              >
                Solicitar información →
              </motion.button>
              <p style={{ fontSize: 12, color: '#ffffff40', textAlign: 'center' }}>Al enviar, aceptas nuestra política de privacidad. Sin spam, prometido.</p>
            </form>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
        >
          {/* Live chat widget */}
          <div style={{ background: '#1a003a', border: `1px solid ${SECONDARY}30`, borderRadius: 20, padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 8px #00ff88', flexShrink: 0 }} />
              <span style={{ fontWeight: 700, fontSize: 16 }}>Chat en vivo disponible</span>
            </div>
            <p style={{ color: '#ffffff60', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>Nuestro equipo está en línea ahora mismo. Tiempo de respuesta medio: &lt;2 minutos.</p>
            <button style={{ width: '100%', background: SECONDARY, color: '#0f0020', border: 'none', padding: '12px', borderRadius: 10, fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>
              💬 Abrir chat
            </button>
          </div>

          {/* Office */}
          <div style={{ background: '#1a003a', border: `1px solid ${ACCENT}25`, borderRadius: 20, padding: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Oficina central</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '📍', text: 'Calle Serrano 41, 28001 Madrid, España' },
                { icon: '📞', text: '+34 900 123 456 (Gratuito)' },
                { icon: '✉️', text: 'hola@nexusai.com' },
                { icon: '🕐', text: 'Lunes–Viernes, 9:00–18:00 CET' },
              ].map((item) => (
                <div key={item.icon} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, color: '#ffffff80' }}>
                  <span style={{ flexShrink: 0 }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social proof */}
          <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 20, padding: 28 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, textAlign: 'center' }}>
              {[{ val: '< 24h', label: 'Tiempo de respuesta' }, { val: '4.9★', label: 'Valoración media' }, { val: '98%', label: 'Clientes satisfechos' }, { val: '5 min', label: 'Tiempo de setup' }].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: SECONDARY }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: '#ffffff60', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

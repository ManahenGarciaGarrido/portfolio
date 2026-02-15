'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const BG = '#fdf6f0'
const ACCENT = '#2d6a4f'
const SECONDARY = '#e8a0a0'
const TEXT = '#2d1a0e'
const CARD_BG = '#fff8f3'
const BORDER = '#e8d5c4'
const LIGHT_GREEN = '#f0f7f4'

const arrangementTypes = [
  'Ramo estándar', 'Ramo de novia', 'Centro de mesa', 'Planta o suculenta',
  'Corona fúnebre', 'Decoración evento', 'Suscripción floral', 'Otro',
]

const occasions = [
  'Cumpleaños', 'Boda', 'Aniversario', 'Funeral', 'San Valentín',
  'Día de la Madre', 'Empresa / Corporativo', 'Sin ocasión especial',
]

export default function FloristaContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '', email: '', telefono: '', tipoArreglo: '',
    ocasion: '', fecha: '', presupuesto: '', descripcion: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    padding: '12px 16px',
    color: TEXT,
    fontSize: 15,
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'system-ui, sans-serif',
  }

  const labelStyle = {
    display: 'block' as const,
    color: ACCENT,
    fontWeight: 700 as const,
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase' as const,
    marginBottom: 8,
    fontFamily: 'system-ui, sans-serif',
  }

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: 'system-ui, sans-serif' }}>

      {/* PAGE HEADER */}
      <section style={{ background: LIGHT_GREEN, paddingTop: 100, paddingBottom: 64 }}>
        <div className="r-container">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: SECONDARY, fontWeight: 600, letterSpacing: 5, fontSize: 12, textTransform: 'uppercase', marginBottom: 12 }}>
            CONTÁCTANOS
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 800, color: TEXT, margin: '0 0 16px', fontFamily: 'Georgia, serif' }}>
            Hablemos de Flores
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ fontSize: 17, opacity: 0.7, maxWidth: 520, lineHeight: 1.6 }}>
            Ya sea para un pedido especial, una boda o simplemente para alegrar el día de alguien.
          </motion.p>
        </div>
      </section>

      {/* QUICK CONTACT METHODS */}
      <section style={{ background: ACCENT, padding: '0' }}>
        <div className="r-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
            {[
              { icon: '📞', label: 'Llámanos', value: '+34 91 234 5678', sub: 'Lun–Sáb 9:00–20:00' },
              { icon: '💬', label: 'WhatsApp', value: '+34 611 234 567', sub: 'Respuesta en minutos' },
              { icon: '📧', label: 'Email', value: 'hola@petalyco.com', sub: 'Respondemos en 2h' },
            ].map((m, i) => (
              <div key={i} style={{ flex: '1 1 220px', padding: '36px 32px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none', textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{m.icon}</div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 6px' }}>{m.label}</p>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: '0 0 4px' }}>{m.value}</p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, margin: 0 }}>{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 64 }}>

            {/* CONTACT FORM */}
            <div style={{ flex: '1 1 480px' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 12, textTransform: 'uppercase', marginBottom: 12 }}>FORMULARIO DE PEDIDO</p>
                <h2 style={{ color: TEXT, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, margin: '0 0 32px', fontFamily: 'Georgia, serif' }}>
                  Solicitar un Arreglo
                </h2>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ background: LIGHT_GREEN, borderRadius: 20, padding: 48, textAlign: 'center', border: `1px solid ${ACCENT}` }}>
                    <div style={{ fontSize: 56, marginBottom: 20 }}>🌸</div>
                    <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: 24, margin: '0 0 12px', fontFamily: 'Georgia, serif' }}>¡Mensaje recibido!</h3>
                    <p style={{ color: TEXT, opacity: 0.75, fontSize: 16, lineHeight: 1.7 }}>
                      Gracias por contactarnos. Te responderemos en menos de 2 horas con todos los detalles de tu pedido.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ background: CARD_BG, borderRadius: 20, padding: 40, border: `1px solid ${BORDER}` }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div>
                        <label style={labelStyle}>Nombre</label>
                        <input type="text" placeholder="Tu nombre" value={formData.nombre}
                          onChange={e => handleChange('nombre', e.target.value)} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Email</label>
                        <input type="email" placeholder="tu@email.com" value={formData.email}
                          onChange={e => handleChange('email', e.target.value)} style={inputStyle} />
                      </div>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle}>Teléfono</label>
                      <input type="tel" placeholder="+34 6XX XXX XXX" value={formData.telefono}
                        onChange={e => handleChange('telefono', e.target.value)} style={inputStyle} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div>
                        <label style={labelStyle}>Tipo de arreglo</label>
                        <select value={formData.tipoArreglo} onChange={e => handleChange('tipoArreglo', e.target.value)} style={inputStyle}>
                          <option value="">Selecciona tipo</option>
                          {arrangementTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Ocasión</label>
                        <select value={formData.ocasion} onChange={e => handleChange('ocasion', e.target.value)} style={inputStyle}>
                          <option value="">Selecciona ocasión</option>
                          {occasions.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div>
                        <label style={labelStyle}>Fecha de entrega</label>
                        <input type="date" value={formData.fecha}
                          onChange={e => handleChange('fecha', e.target.value)} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Presupuesto</label>
                        <select value={formData.presupuesto} onChange={e => handleChange('presupuesto', e.target.value)} style={inputStyle}>
                          <option value="">¿Cuánto quieres gastar?</option>
                          <option>Hasta €30</option>
                          <option>€30 – €60</option>
                          <option>€60 – €100</option>
                          <option>€100 – €200</option>
                          <option>Más de €200</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: 28 }}>
                      <label style={labelStyle}>Descripción o mensaje personalizado</label>
                      <textarea placeholder="Cuéntanos qué necesitas: colores preferidos, flores favoritas, mensaje para la tarjeta..."
                        value={formData.descripcion}
                        onChange={e => handleChange('descripcion', e.target.value)}
                        style={{ ...inputStyle, minHeight: 130, resize: 'vertical' }} />
                    </div>
                    <button type="submit" style={{
                      background: ACCENT, color: '#fff', border: 'none', borderRadius: 50,
                      padding: '16px', fontWeight: 800, fontSize: 16, cursor: 'pointer',
                      width: '100%', letterSpacing: 0.5,
                    }}>Enviar Solicitud de Pedido</button>
                    <p style={{ color: TEXT, opacity: 0.5, fontSize: 13, textAlign: 'center', marginTop: 12 }}>
                      Respondemos en menos de 2 horas en horario de tienda
                    </p>
                  </form>
                )}
              </motion.div>
            </div>

            {/* INFO SIDEBAR */}
            <div style={{ flex: '1 1 280px' }}>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>

                {/* Store Info */}
                <div style={{ background: CARD_BG, borderRadius: 20, padding: 36, border: `1px solid ${BORDER}`, marginBottom: 24 }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 20, margin: '0 0 24px', fontFamily: 'Georgia, serif' }}>La Tienda</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'flex', gap: 12 }}>
                      <span style={{ color: ACCENT, fontSize: 20 }}>📍</span>
                      <div>
                        <p style={{ color: TEXT, fontWeight: 600, margin: '0 0 2px', fontSize: 15 }}>C/ de las Flores 12</p>
                        <p style={{ color: TEXT, opacity: 0.65, margin: 0, fontSize: 14 }}>Barrio de Salamanca, Madrid</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 12 }}>
                      <span style={{ color: ACCENT, fontSize: 20 }}>🕐</span>
                      <div>
                        <p style={{ color: TEXT, fontWeight: 600, margin: '0 0 2px', fontSize: 15 }}>Lunes – Sábado</p>
                        <p style={{ color: TEXT, opacity: 0.65, margin: '0 0 8px', fontSize: 14 }}>9:00 – 20:00</p>
                        <p style={{ color: TEXT, fontWeight: 600, margin: '0 0 2px', fontSize: 15 }}>Domingo</p>
                        <p style={{ color: TEXT, opacity: 0.65, margin: 0, fontSize: 14 }}>10:00 – 14:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div style={{ background: LIGHT_GREEN, borderRadius: 20, padding: 36, border: `1px solid ${BORDER}`, marginBottom: 24 }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 20, margin: '0 0 20px', fontFamily: 'Georgia, serif' }}>Información de Entrega</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {[
                      { icon: '🚚', text: 'Envío gratuito en pedidos superiores a €50' },
                      { icon: '⚡', text: 'Entrega el mismo día si pides antes de las 12:00h' },
                      { icon: '📦', text: 'Embalaje ecológico que mantiene las flores frescas' },
                      { icon: '🌿', text: 'Flores frescas del mercado garantizadas' },
                      { icon: '📍', text: 'Entregamos en toda la Comunidad de Madrid' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 18 }}>{item.icon}</span>
                        <span style={{ color: TEXT, opacity: 0.8, fontSize: 14, lineHeight: 1.5 }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{ background: '#25d366', borderRadius: 20, padding: 28, textAlign: 'center' }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>💬</div>
                  <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: '0 0 8px' }}>Pide por WhatsApp</p>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, margin: '0 0 16px' }}>Foto + descripción y te preparamos tu arreglo en el mismo día</p>
                  <a href="https://wa.me/34611234567" style={{
                    display: 'inline-block', background: '#fff', color: '#25d366',
                    padding: '12px 28px', borderRadius: 50, fontWeight: 800, fontSize: 15, textDecoration: 'none',
                  }}>+34 611 234 567</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

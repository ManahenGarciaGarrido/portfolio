'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const BG = '#fafafa'
const ACCENT = '#0066ff'
const TEXT = '#1a1a1a'
const GRAY = '#f0f0f0'
const GRAY2 = '#e5e5e5'

const inputStyle = {
  background: '#ffffff',
  border: `1px solid ${GRAY2}`,
  color: TEXT,
  padding: '0.75rem 1rem',
  borderRadius: 8,
  fontSize: '0.95rem',
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box' as const,
  transition: 'border-color 0.2s',
}

const labelStyle = {
  display: 'block',
  color: TEXT,
  fontSize: '0.85rem',
  fontWeight: 600,
  marginBottom: '0.5rem',
}

const horarios = [
  { dia: 'Lunes – Viernes', hora: '10:00 – 21:00' },
  { dia: 'Sábados', hora: '10:00 – 21:00' },
  { dia: 'Domingos y festivos', hora: '11:00 – 20:00' },
]

const motivosContacto = ['Consulta sobre producto', 'Estado del pedido', 'Devolución', 'Garantía', 'Soporte técnico', 'Reparación', 'Otro']
const dispositivosReparacion = ['Smartphone', 'Portátil / MacBook', 'Tablet', 'Smartwatch', 'Auriculares', 'Otro dispositivo']

export default function TecnologiaContacto() {
  const [contactForm, setContactForm] = useState({ nombre: '', email: '', telefono: '', motivo: motivosContacto[0], mensaje: '' })
  const [repairForm, setRepairForm] = useState({ nombre: '', email: '', telefono: '', dispositivo: dispositivosReparacion[0], marca: '', modelo: '', descripcion: '', garantia: 'no_se' as 'si' | 'no' | 'no_se' })
  const [contactSent, setContactSent] = useState(false)
  const [repairSent, setRepairSent] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'contacto' | 'reparacion'>('contacto')
  const [chatMessages, setChatMessages] = useState<{ from: 'user' | 'agent'; text: string }[]>([
    { from: 'agent', text: '¡Hola! Soy tu asistente técnico de ZENTECH. ¿En qué puedo ayudarte hoy?' }
  ])
  const [chatInput, setChatInput] = useState('')

  const sendChat = () => {
    if (!chatInput.trim()) return
    const newMsg = chatInput.trim()
    setChatMessages(m => [...m, { from: 'user', text: newMsg }])
    setChatInput('')
    setTimeout(() => {
      setChatMessages(m => [...m, {
        from: 'agent',
        text: 'Gracias por tu mensaje. Nuestro equipo técnico te responderá en breve. Para cuestiones urgentes llama al 900 123 456.',
      }])
    }, 1200)
  }

  return (
    <main style={{ background: BG, color: TEXT, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* LIVE CHAT WIDGET */}
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            style={{ width: 320, height: 420, background: '#ffffff', borderRadius: 16, boxShadow: '0 8px 40px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', overflow: 'hidden', marginBottom: '0.75rem', border: `1px solid ${GRAY2}` }}
          >
            <div style={{ background: ACCENT, padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>💬 Chat ZENTECH</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.75rem' }}>Soporte Técnico</div>
              </div>
              <div style={{ width: 8, height: 8, background: '#00e676', borderRadius: '50%', border: '2px solid white' }} />
            </div>
            <div style={{ flex: 1, padding: '1rem', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {chatMessages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '80%',
                    background: msg.from === 'user' ? ACCENT : GRAY,
                    color: msg.from === 'user' ? '#fff' : TEXT,
                    padding: '0.6rem 0.9rem',
                    borderRadius: msg.from === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                    fontSize: '0.82rem',
                    lineHeight: 1.5,
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '0.75rem', borderTop: `1px solid ${GRAY2}`, display: 'flex', gap: '0.5rem' }}>
              <input
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendChat()}
                placeholder="Escribe tu mensaje..."
                style={{ flex: 1, border: `1px solid ${GRAY2}`, borderRadius: 8, padding: '0.55rem 0.9rem', fontSize: '0.85rem', outline: 'none' }}
              />
              <button onClick={sendChat} style={{ background: ACCENT, color: '#fff', border: 'none', borderRadius: 8, padding: '0.55rem 1rem', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem' }}>→</button>
            </div>
          </motion.div>
        )}
        <button
          onClick={() => setChatOpen(o => !o)}
          style={{ background: ACCENT, color: '#fff', border: 'none', width: 56, height: 56, borderRadius: '50%', fontSize: '1.4rem', cursor: 'pointer', boxShadow: `0 4px 20px ${ACCENT}55`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {chatOpen ? '✕' : '💬'}
        </button>
      </div>

      {/* HEADER */}
      <section style={{ background: '#ffffff', padding: '4rem 2rem', borderBottom: `1px solid ${GRAY2}` }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Estamos Aquí</p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: TEXT, marginBottom: '1rem' }}>
              Contacto y Soporte
            </h1>
            <p style={{ color: '#666', maxWidth: 560, fontSize: '1.05rem', lineHeight: 1.7 }}>
              ¿Tienes alguna pregunta sobre un producto, un pedido o necesitas asistencia técnica? Estamos disponibles a través de múltiples canales para ayudarte.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="r-container" style={{ padding: '3rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>

          {/* LEFT: STORE INFO + CONTACT DETAILS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* STORE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ background: '#ffffff', borderRadius: 12, overflow: 'hidden', border: `1px solid ${GRAY2}`, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
            >
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src="https://picsum.photos/seed/tech-store/600/300" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Tienda ZENTECH Madrid" />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: TEXT, marginBottom: '1rem' }}>ZENTECH Madrid Gran Vía</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: '#555' }}>
                    <span>📍</span> C/ Gran Vía 22, 28013 Madrid
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: '#555' }}>
                    <span>📞</span> +34 91 555 0123
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: '#555' }}>
                    <span>✉️</span> hola@zentech.es
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: '#555' }}>
                    <span>🔧</span> Soporte: 900 123 456 (gratuito)
                  </div>
                </div>
              </div>
            </motion.div>

            {/* HORARIOS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ background: '#ffffff', borderRadius: 12, padding: '1.5rem', border: `1px solid ${GRAY2}` }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: TEXT, marginBottom: '1rem' }}>Horario de Tienda</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {horarios.map(h => (
                  <div key={h.dia} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                    <span style={{ color: '#555' }}>{h.dia}</span>
                    <span style={{ fontWeight: 600, color: TEXT }}>{h.hora}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1rem', padding: '0.75rem', background: `${ACCENT}10`, borderRadius: 8, fontSize: '0.825rem', color: ACCENT, fontWeight: 600 }}>
                📞 Soporte técnico telefónico: Todos los días 8:00–22:00
              </div>
            </motion.div>

            {/* LÍNEA DE SOPORTE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ background: `linear-gradient(135deg, #001a4d, ${ACCENT})`, borderRadius: 12, padding: '1.5rem', color: '#ffffff' }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>📞</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.25rem' }}>Línea Directa de Soporte</h3>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.5rem' }}>900 123 456</div>
              <p style={{ opacity: 0.8, fontSize: '0.85rem', lineHeight: 1.5 }}>Llamada gratuita desde cualquier operador en España. Técnicos certificados disponibles todos los días de 8:00 a 22:00.</p>
            </motion.div>
          </div>

          {/* RIGHT: FORMS */}
          <div>
            {/* TABS */}
            <div style={{ display: 'flex', gap: '0', marginBottom: '1.5rem', background: GRAY, borderRadius: 10, padding: '0.3rem' }}>
              {(['contacto', 'reparacion'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    borderRadius: 8,
                    border: 'none',
                    background: activeTab === tab ? '#ffffff' : 'transparent',
                    color: activeTab === tab ? TEXT : '#777',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    boxShadow: activeTab === tab ? '0 1px 6px rgba(0,0,0,0.1)' : 'none',
                    transition: 'all 0.2s',
                    textTransform: 'capitalize',
                  }}
                >
                  {tab === 'contacto' ? '✉️ Formulario de Contacto' : '🔧 Servicio de Reparación'}
                </button>
              ))}
            </div>

            {/* CONTACT FORM */}
            {activeTab === 'contacto' && (
              !contactSent ? (
                <motion.form
                  key="contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={e => { e.preventDefault(); setContactSent(true) }}
                  style={{ background: '#ffffff', borderRadius: 12, padding: '2rem', border: `1px solid ${GRAY2}`, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Nombre *</label>
                      <input type="text" required value={contactForm.nombre} onChange={e => setContactForm(f => ({ ...f, nombre: e.target.value }))} placeholder="Tu nombre" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Teléfono</label>
                      <input type="tel" value={contactForm.telefono} onChange={e => setContactForm(f => ({ ...f, telefono: e.target.value }))} placeholder="+34 600 000 000" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" required value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))} placeholder="tu@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Motivo de Contacto</label>
                    <select value={contactForm.motivo} onChange={e => setContactForm(f => ({ ...f, motivo: e.target.value }))} style={{ ...inputStyle, cursor: 'pointer' }}>
                      {motivosContacto.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Mensaje *</label>
                    <textarea
                      required
                      value={contactForm.mensaje}
                      onChange={e => setContactForm(f => ({ ...f, mensaje: e.target.value }))}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                    />
                  </div>
                  <button type="submit" style={{ background: ACCENT, color: '#fff', border: 'none', padding: '0.95rem', borderRadius: 10, fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
                    Enviar Mensaje →
                  </button>
                  <p style={{ color: '#999', fontSize: '0.78rem', lineHeight: 1.5 }}>Te responderemos en menos de 24 horas en días laborables. Para urgencias usa nuestro teléfono 900 123 456.</p>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ background: '#ffffff', borderRadius: 12, padding: '3rem 2rem', textAlign: 'center', border: `1px solid ${GRAY2}` }}
                >
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: TEXT, marginBottom: '1rem' }}>Mensaje Enviado</h3>
                  <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>Hemos recibido tu consulta. Te responderemos en las próximas 24 horas en <strong>{contactForm.email}</strong>.</p>
                  <button onClick={() => setContactSent(false)} style={{ background: ACCENT, color: '#fff', border: 'none', padding: '0.9rem 2rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>
                    Nuevo Mensaje
                  </button>
                </motion.div>
              )
            )}

            {/* REPAIR FORM */}
            {activeTab === 'reparacion' && (
              !repairSent ? (
                <motion.form
                  key="repair"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={e => { e.preventDefault(); setRepairSent(true) }}
                  style={{ background: '#ffffff', borderRadius: 12, padding: '2rem', border: `1px solid ${GRAY2}`, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  <div style={{ background: `${ACCENT}08`, borderRadius: 8, padding: '1rem', fontSize: '0.85rem', color: '#555', lineHeight: 1.6 }}>
                    ℹ️ Servicio de reparación disponible para dispositivos comprados en ZENTECH. Diagnóstico gratuito en tienda (cita previa recomendada).
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Nombre *</label>
                      <input type="text" required value={repairForm.nombre} onChange={e => setRepairForm(f => ({ ...f, nombre: e.target.value }))} placeholder="Tu nombre" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Teléfono *</label>
                      <input type="tel" required value={repairForm.telefono} onChange={e => setRepairForm(f => ({ ...f, telefono: e.target.value }))} placeholder="+34 600 000 000" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" required value={repairForm.email} onChange={e => setRepairForm(f => ({ ...f, email: e.target.value }))} placeholder="tu@email.com" style={inputStyle} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Tipo de Dispositivo *</label>
                      <select required value={repairForm.dispositivo} onChange={e => setRepairForm(f => ({ ...f, dispositivo: e.target.value }))} style={{ ...inputStyle, cursor: 'pointer' }}>
                        {dispositivosReparacion.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Marca</label>
                      <input type="text" value={repairForm.marca} onChange={e => setRepairForm(f => ({ ...f, marca: e.target.value }))} placeholder="Apple, Samsung..." style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Modelo del Dispositivo</label>
                    <input type="text" value={repairForm.modelo} onChange={e => setRepairForm(f => ({ ...f, modelo: e.target.value }))} placeholder="iPhone 15 Pro, Galaxy S24..." style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>¿Está en garantía?</label>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      {([['si', '✅ Sí'], ['no', '❌ No'], ['no_se', '🤷 No lo sé']] as const).map(([val, label]) => (
                        <label key={val} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.875rem', color: repairForm.garantia === val ? ACCENT : '#555', fontWeight: repairForm.garantia === val ? 600 : 400 }}>
                          <input type="radio" name="garantia" checked={repairForm.garantia === val} onChange={() => setRepairForm(f => ({ ...f, garantia: val }))} style={{ accentColor: ACCENT }} />
                          {label}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Descripción del Problema *</label>
                    <textarea
                      required
                      value={repairForm.descripcion}
                      onChange={e => setRepairForm(f => ({ ...f, descripcion: e.target.value }))}
                      placeholder="Describe el problema con el mayor detalle posible: qué ocurre, desde cuándo, si hay algún error visible..."
                      rows={4}
                      style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                    />
                  </div>
                  <button type="submit" style={{ background: ACCENT, color: '#fff', border: 'none', padding: '0.95rem', borderRadius: 10, fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
                    Solicitar Reparación →
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="repair-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ background: '#ffffff', borderRadius: 12, padding: '3rem 2rem', textAlign: 'center', border: `1px solid ${GRAY2}` }}
                >
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🔧</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: TEXT, marginBottom: '1rem' }}>Solicitud de Reparación Recibida</h3>
                  <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
                    Nuestro equipo técnico revisará tu solicitud y te contactará en menos de 24 horas para concertar el servicio de recogida o cita en tienda.
                  </p>
                  <p style={{ color: ACCENT, fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Código de seguimiento: <strong>REP-{Math.random().toString(36).substr(2, 8).toUpperCase()}</strong>
                  </p>
                  <button onClick={() => setRepairSent(false)} style={{ background: ACCENT, color: '#fff', border: 'none', padding: '0.9rem 2rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>
                    Nueva Solicitud
                  </button>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>

      {/* MAP PLACEHOLDER */}
      <section style={{ padding: '0 2rem 4rem' }}>
        <div className="r-container">
          <div style={{ borderRadius: 16, overflow: 'hidden', height: 300, background: GRAY, position: 'relative' }}>
            <img src="https://picsum.photos/seed/madrid-map/1200/400" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Mapa ubicación ZENTECH" />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
              <div style={{ background: '#ffffff', borderRadius: 12, padding: '1.25rem 2rem', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: TEXT, marginBottom: '0.25rem' }}>ZENTECH Madrid Gran Vía</div>
                <div style={{ color: '#666', fontSize: '0.875rem' }}>C/ Gran Vía 22, 28013 Madrid</div>
                <button style={{ background: ACCENT, color: '#fff', border: 'none', padding: '0.5rem 1.25rem', borderRadius: 6, fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer', marginTop: '0.75rem' }}>
                  Ver en Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

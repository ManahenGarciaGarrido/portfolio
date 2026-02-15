'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const BG = '#001a35'
const ACCENT = '#ff8c00'
const TEXT = '#e8f4ff'
const CARD_BG = '#002952'
const CARD_BORDER = '#003d7a'

const tripTypes = [
  'Viaje individual', 'Pareja', 'Familia con niños', 'Grupo de amigos',
  'Viaje de novios', 'Grupo corporativo', 'Luna de miel', 'Viaje solo',
]

export default function ViajesContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '', email: '', destino: '', fechaIda: '', fechaVuelta: '',
    viajeros: '2', presupuesto: '', tipoViaje: '', descripcion: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeOffice, setActiveOffice] = useState<string | null>(null)

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    background: CARD_BG,
    border: `1px solid ${CARD_BORDER}`,
    borderRadius: 8,
    padding: '13px 16px',
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

  const offices = [
    {
      city: 'Madrid', flagship: true,
      addr: 'C/ Gran Vía 45, 28013 Madrid',
      phone: '+34 91 555 0100',
      email: 'madrid@wanderlust.es',
      hours: 'Lun–Vie: 9:00–20:00 | Sáb: 10:00–14:00',
      metro: 'Metro: Gran Vía (L1/L5)',
    },
    {
      city: 'Barcelona',
      addr: 'Passeig de Gràcia 78, 08008',
      phone: '+34 93 555 0200',
      email: 'barcelona@wanderlust.es',
      hours: 'Lun–Vie: 9:00–20:00 | Sáb: 10:00–14:00',
      metro: 'Metro: Passeig de Gràcia (L2/L3)',
    },
    {
      city: 'Sevilla',
      addr: 'C/ Sierpes 12, 41004 Sevilla',
      phone: '+34 95 555 0300',
      email: 'sevilla@wanderlust.es',
      hours: 'Lun–Vie: 9:00–20:00 | Sáb: 10:00–14:00',
      metro: 'Tranvía: Archivo de Indias',
    },
  ]

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: 'system-ui, sans-serif' }}>

      {/* HEADER */}
      <section style={{ paddingTop: 100, paddingBottom: 64, background: CARD_BG, borderBottom: `1px solid ${CARD_BORDER}` }}>
        <div className="r-container">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            CONTACTO
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', margin: '0 0 20px' }}>
            Hablemos de Tu Próximo Viaje
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ fontSize: 17, opacity: 0.75, maxWidth: 560, lineHeight: 1.6 }}>
            Nuestros expertos están listos para diseñar el viaje perfecto para ti. Sin compromiso, sin costes adicionales.
          </motion.p>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section style={{ background: ACCENT, padding: '0' }}>
        <div className="r-container">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {[
              { icon: '📞', label: 'Llama ahora', value: '+34 900 100 200', sub: 'Gratuito · 9:00–21:00' },
              { icon: '💬', label: 'WhatsApp', value: '+34 611 100 200', sub: 'Respuesta inmediata' },
              { icon: '📧', label: 'Email', value: 'hola@wanderlust.es', sub: 'Respondemos en 1h' },
              { icon: '🚨', label: 'Emergencias viaje', value: '+34 900 100 200', sub: 'Disponible 24h/7d' },
            ].map((m, i) => (
              <div key={i} style={{ flex: '1 1 180px', padding: '32px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{m.icon}</div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 6px' }}>{m.label}</p>
                <p style={{ color: '#fff', fontWeight: 800, fontSize: 16, margin: '0 0 4px' }}>{m.value}</p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12, margin: 0 }}>{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN FORM + SIDEBAR */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56 }}>

            {/* FORM */}
            <div style={{ flex: '1 1 500px' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>CONSULTA GRATUITA</p>
                <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, margin: '0 0 32px' }}>
                  Cuéntanos Tu Viaje Soñado
                </h2>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ background: CARD_BG, borderRadius: 20, padding: 56, textAlign: 'center', border: `1px solid ${CARD_BORDER}` }}>
                    <div style={{ fontSize: 64, marginBottom: 20 }}>✈️</div>
                    <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: 26, margin: '0 0 16px' }}>¡Solicitud enviada!</h3>
                    <p style={{ color: TEXT, opacity: 0.75, fontSize: 17, lineHeight: 1.7 }}>
                      Un experto viajero de nuestro equipo se pondrá en contacto contigo en menos de 1 hora para diseñar juntos tu viaje perfecto.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ background: CARD_BG, borderRadius: 20, padding: 40, border: `1px solid ${CARD_BORDER}` }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div>
                        <label style={labelStyle}>Nombre completo</label>
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
                      <label style={labelStyle}>Destino deseado</label>
                      <input type="text" placeholder="¿A dónde quieres viajar? (Japón, Islandia...)" value={formData.destino}
                        onChange={e => handleChange('destino', e.target.value)} style={inputStyle} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div>
                        <label style={labelStyle}>Fecha de ida</label>
                        <input type="date" value={formData.fechaIda}
                          onChange={e => handleChange('fechaIda', e.target.value)} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Fecha de vuelta</label>
                        <input type="date" value={formData.fechaVuelta}
                          onChange={e => handleChange('fechaVuelta', e.target.value)} style={inputStyle} />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div>
                        <label style={labelStyle}>Número de viajeros</label>
                        <select value={formData.viajeros} onChange={e => handleChange('viajeros', e.target.value)} style={inputStyle}>
                          {[1,2,3,4,5,6,8,10,12,15,20,25].map(n => (
                            <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Presupuesto total</label>
                        <select value={formData.presupuesto} onChange={e => handleChange('presupuesto', e.target.value)} style={inputStyle}>
                          <option value="">Selecciona rango</option>
                          <option>Menos de €1.000</option>
                          <option>€1.000 – €2.000</option>
                          <option>€2.000 – €5.000</option>
                          <option>€5.000 – €10.000</option>
                          <option>Más de €10.000</option>
                          <option>Sin límite de presupuesto</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle}>Tipo de viaje</label>
                      <select value={formData.tipoViaje} onChange={e => handleChange('tipoViaje', e.target.value)} style={inputStyle}>
                        <option value="">¿Qué tipo de viajero eres?</option>
                        {tripTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div style={{ marginBottom: 28 }}>
                      <label style={labelStyle}>Descripción de tu viaje ideal</label>
                      <textarea placeholder="Cuéntanos qué tipo de experiencias buscas, si tienes algún destino en mente, preferencias de alojamiento, actividades que te gustan..."
                        value={formData.descripcion}
                        onChange={e => handleChange('descripcion', e.target.value)}
                        style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }} />
                    </div>

                    <button type="submit" style={{
                      background: ACCENT, color: '#fff', border: 'none', borderRadius: 8,
                      padding: '16px', fontWeight: 800, fontSize: 16, cursor: 'pointer',
                      width: '100%', textTransform: 'uppercase', letterSpacing: 1,
                    }}>Solicitar Propuesta de Viaje Gratis</button>
                    <p style={{ color: TEXT, opacity: 0.4, fontSize: 12, textAlign: 'center', marginTop: 12 }}>
                      Sin compromiso · Respuesta en menos de 1 hora
                    </p>
                  </form>
                )}
              </motion.div>
            </div>

            {/* SIDEBAR */}
            <div style={{ flex: '1 1 280px' }}>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 16 }}>TAMBIÉN PUEDES</p>
                <div style={{ background: CARD_BG, borderRadius: 16, padding: 28, border: `1px solid ${CARD_BORDER}`, marginBottom: 20 }}>
                  <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 17, margin: '0 0 16px' }}>O habla con un experto ahora</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <a href="tel:+34900100200" style={{ display: 'flex', alignItems: 'center', gap: 12, background: ACCENT, color: '#fff', padding: '12px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
                      <span>📞</span> Llamar ahora
                    </a>
                    <a href="https://wa.me/34611100200" style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#25d366', color: '#fff', padding: '12px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
                      <span>💬</span> WhatsApp
                    </a>
                  </div>
                </div>

                <div style={{ background: CARD_BG, borderRadius: 16, padding: 28, border: `1px solid ${CARD_BORDER}`, marginBottom: 20 }}>
                  <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 17, margin: '0 0 16px' }}>Horario de atención</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      { day: 'Lunes – Viernes', hours: '9:00 – 21:00' },
                      { day: 'Sábados', hours: '10:00 – 18:00' },
                      { day: 'Domingos', hours: '11:00 – 15:00' },
                      { day: 'Emergencias (viaje activo)', hours: '24h / 7 días' },
                    ].map(h => (
                      <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: TEXT, opacity: 0.7, fontSize: 14 }}>{h.day}</span>
                        <span style={{ color: ACCENT, fontWeight: 600, fontSize: 14 }}>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#ff8c0015', borderRadius: 16, padding: 28, border: `1px solid ${ACCENT}33` }}>
                  <h4 style={{ color: ACCENT, fontWeight: 700, fontSize: 17, margin: '0 0 12px' }}>¿Por qué Wanderlust?</h4>
                  {[
                    'Propuesta gratuita sin compromiso',
                    'Expertos que conocen cada destino',
                    'Precio transparente, sin sorpresas',
                    'Soporte durante todo tu viaje',
                    'Más de 50.000 viajeros satisfechos',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                      <span style={{ color: ACCENT, fontSize: 16 }}>✓</span>
                      <span style={{ color: TEXT, fontSize: 14, opacity: 0.85 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE ADDRESSES */}
      <section className="r-section" style={{ background: CARD_BG, borderTop: `1px solid ${CARD_BORDER}` }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>NUESTRAS OFICINAS</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: 0 }}>Visítanos en Persona</h2>
          </motion.div>
          <div className="r-grid-3">
            {offices.map((o, i) => (
              <motion.div key={o.city}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                onClick={() => setActiveOffice(activeOffice === o.city ? null : o.city)}
                style={{
                  background: BG, borderRadius: 16, padding: 32,
                  border: `1px solid ${activeOffice === o.city ? ACCENT : CARD_BORDER}`,
                  cursor: 'pointer', transition: 'border-color 0.3s',
                  boxShadow: activeOffice === o.city ? `0 8px 30px rgba(255,140,0,0.2)` : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 22, margin: 0 }}>{o.city}</h3>
                  {o.flagship && <span style={{ background: ACCENT, color: '#fff', padding: '3px 10px', borderRadius: 50, fontSize: 11, fontWeight: 700 }}>Sede Principal</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { icon: '📍', text: o.addr },
                    { icon: '📞', text: o.phone },
                    { icon: '📧', text: o.email },
                    { icon: '🕐', text: o.hours },
                    { icon: '🚇', text: o.metro },
                  ].map(item => (
                    <div key={item.icon} style={{ display: 'flex', gap: 10 }}>
                      <span style={{ color: ACCENT, fontSize: 16 }}>{item.icon}</span>
                      <span style={{ color: TEXT, opacity: 0.75, fontSize: 14 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

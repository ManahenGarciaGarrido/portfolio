'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const pink = '#ff00cc'
const cyan = '#00d4ff'
const bg = '#080010'

const eventTypes = [
  { id: 'club', label: 'Club / Festival', icon: '🎛️', desc: 'Salas de conciertos, festivales de música electrónica y noches especiales.' },
  { id: 'corporate', label: 'Corporativo', icon: '🏢', desc: 'Eventos de empresa, lanzamientos de producto y galas corporativas.' },
  { id: 'private', label: 'Evento Privado', icon: '🔐', desc: 'Fiestas privadas, celebraciones exclusivas y eventos VIP.' },
  { id: 'residency', label: 'Residencia', icon: '🏠', desc: 'Residencias mensuales en clubs y espacios de larga duración.' },
]

const riderItems = [
  { category: 'Sistema de Sonido', items: ['Sistema PA profesional (mínimo 20KW)', '2x Subwoofer de potencia mínima 3KW', 'Monitor de cabina / sistema de referencia', 'Ecualizador 31 bandas en salida principal'] },
  { category: 'Equipo de DJ', items: ['2x CDJ-3000 o Pioneer XDJ-XZ', '1x DJM-900NXS2 o superior', 'Auriculares DT 1990 Pro o HD 25', 'Mesa de mezclas con efectos integrados'] },
  { category: 'Cabina', items: ['Iluminación propia de cabina (no estrobos directos)', 'Monitor de retorno en cabina', 'Acceso directo desde backstage', 'Rider de catering (bebidas, snacks)'] },
  { category: 'Técnico', items: ['Técnico de sonido dedicado durante todo el set', 'Prueba de sonido 2h antes del show', 'Coordinación previa con promotor', 'Canal de comunicación directa el día del evento'] },
]

export default function BookingPage() {
  const [formData, setFormData] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    tipoEvento: '', fecha: '', presupuesto: '', descripcion: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [selectedType, setSelectedType] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ background: bg, minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif", color: '#fff' }}>

      {/* PAGE HEADER */}
      <section style={{ padding: '4rem 1.5rem 3rem', borderBottom: '1px solid rgba(255,0,204,0.15)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at bottom left, rgba(255,0,204,0.1) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ height: '2px', background: pink, width: '40px', marginBottom: '1.2rem' }} />
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: 1, marginBottom: '1rem' }}>
              BOOKING &amp; <span style={{ color: pink }}>CONTRATACIÓN</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '550px' }}>
              ¿Quieres llevar a Bassline a tu evento? Completa el formulario y nuestro equipo se pondrá en contacto en menos de 48 horas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EVENT TYPE SELECTOR */}
      <section style={{ padding: '4rem 1.5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff', marginBottom: '0.5rem' }}>Tipo de Evento</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Selecciona el tipo que mejor describe tu evento</p>
        </div>
        <div className="r-grid-4" style={{ gap: '1rem', marginBottom: '3rem' }}>
          {eventTypes.map((type, i) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelectedType(type.id)}
              style={{
                background: selectedType === type.id ? 'rgba(255,0,204,0.15)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${selectedType === type.id ? pink : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '6px', padding: '1.5rem',
                cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: selectedType === type.id ? `0 0 30px rgba(255,0,204,0.2)` : 'none',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{type.icon}</div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: selectedType === type.id ? pink : '#fff', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{type.label}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{type.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* BOOKING FORM */}
        <div className="r-two-col" style={{ gap: '4rem', alignItems: 'flex-start' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fff', marginBottom: '2rem' }}>
              <span style={{ color: pink }}>—</span> Formulario de Contacto
            </h2>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'rgba(255,0,204,0.1)', border: `1px solid ${pink}`, borderRadius: '8px', padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: pink, marginBottom: '0.75rem', textTransform: 'uppercase' }}>¡Mensaje Recibido!</div>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Nuestro equipo de booking revisará tu solicitud y se pondrá en contacto en menos de 48 horas. Gracias por tu interés en contratar a Bassline.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="r-grid-2" style={{ gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem', fontWeight: 600 }}>Nombre *</label>
                    <input
                      required type="text" placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', padding: '0.85rem 1rem', color: '#fff', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                      onFocus={e => (e.target.style.borderColor = pink)}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem', fontWeight: 600 }}>Empresa / Venue</label>
                    <input
                      type="text" placeholder="Nombre del local o empresa"
                      value={formData.empresa}
                      onChange={e => setFormData({ ...formData, empresa: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', padding: '0.85rem 1rem', color: '#fff', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                      onFocus={e => (e.target.style.borderColor = pink)}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                    />
                  </div>
                </div>
                <div className="r-grid-2" style={{ gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem', fontWeight: 600 }}>Email *</label>
                    <input
                      required type="email" placeholder="email@empresa.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', padding: '0.85rem 1rem', color: '#fff', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                      onFocus={e => (e.target.style.borderColor = pink)}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem', fontWeight: 600 }}>Teléfono</label>
                    <input
                      type="tel" placeholder="+34 600 000 000"
                      value={formData.telefono}
                      onChange={e => setFormData({ ...formData, telefono: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', padding: '0.85rem 1rem', color: '#fff', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                      onFocus={e => (e.target.style.borderColor = pink)}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                    />
                  </div>
                </div>
                <div className="r-grid-2" style={{ gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem', fontWeight: 600 }}>Fecha del Evento *</label>
                    <input
                      required type="date"
                      value={formData.fecha}
                      onChange={e => setFormData({ ...formData, fecha: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', padding: '0.85rem 1rem', color: '#fff', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box', colorScheme: 'dark' }}
                      onFocus={e => (e.target.style.borderColor = pink)}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem', fontWeight: 600 }}>Presupuesto Aprox.</label>
                    <select
                      value={formData.presupuesto}
                      onChange={e => setFormData({ ...formData, presupuesto: e.target.value })}
                      style={{ width: '100%', background: '#0d001a', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', padding: '0.85rem 1rem', color: formData.presupuesto ? '#fff' : 'rgba(255,255,255,0.3)', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                    >
                      <option value="" style={{ background: '#0d001a' }}>Seleccionar rango</option>
                      <option value="bajo" style={{ background: '#0d001a' }}>€500 - €1.500</option>
                      <option value="medio" style={{ background: '#0d001a' }}>€1.500 - €3.500</option>
                      <option value="alto" style={{ background: '#0d001a' }}>€3.500 - €7.000</option>
                      <option value="premium" style={{ background: '#0d001a' }}>€7.000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem', fontWeight: 600 }}>Descripción del Evento *</label>
                  <textarea
                    required placeholder="Cuéntanos sobre tu evento: tipo de espacio, aforo previsto, horario, lineup completo, contexto musical..."
                    rows={5}
                    value={formData.descripcion}
                    onChange={e => setFormData({ ...formData, descripcion: e.target.value })}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', padding: '0.85rem 1rem', color: '#fff', fontSize: '0.9rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}
                    onFocus={e => (e.target.style.borderColor = pink)}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                  />
                </div>
                <button type="submit" style={{ background: pink, color: '#fff', border: 'none', fontWeight: 900, fontSize: '1rem', padding: '1.1rem 2.5rem', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.12em', boxShadow: `0 0 40px rgba(255,0,204,0.4)`, transition: 'transform 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  Enviar Solicitud de Booking
                </button>
              </form>
            )}
          </motion.div>

          {/* SIDEBAR */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Manager contact */}
            <div style={{ background: 'rgba(255,0,204,0.06)', border: '1px solid rgba(255,0,204,0.2)', borderRadius: '8px', padding: '2rem' }}>
              <div style={{ fontSize: '0.72rem', color: pink, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.2rem' }}>Contacto Directo</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <img src="https://picsum.photos/seed/booking-manager/80/80" alt="Manager" style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${pink}` }} />
                <div>
                  <div style={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem' }}>Carlos Vega</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>Booking Manager</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="mailto:booking@bassline.es" style={{ color: cyan, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>booking@bassline.es</a>
                <a href="tel:+34600000000" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem' }}>+34 600 000 000</a>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>Respuesta en 24-48h laborables</div>
              </div>
            </div>
            {/* Technical rider summary */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '2rem' }}>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Technical Rider (Resumen)</div>
              {riderItems.map((section) => (
                <div key={section.category} style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: pink, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>{section.category}</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {section.items.map((item, k) => (
                      <li key={k} style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', padding: '0.3rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', lineHeight: 1.5 }}>
                        <span style={{ color: 'rgba(255,0,204,0.5)', marginRight: '0.5rem' }}>·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                El rider técnico completo se envía tras confirmar la fecha.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ height: '4rem' }} />
    </main>
  )
}

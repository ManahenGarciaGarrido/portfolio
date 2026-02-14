'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const accent = '#00ff88'
const bg = '#000'
const text = '#fff'

const services = [
  'SEO & Contenido',
  'Paid Media (Google/Meta)',
  'Social Media',
  'Web & Landing Pages',
  'Email Marketing',
  'Analítica & Datos',
  'Estrategia Completa',
]

const budgets = [
  'Menos de 1.000€/mes',
  '1.000€ – 3.000€/mes',
  '3.000€ – 8.000€/mes',
  '8.000€ – 20.000€/mes',
  'Más de 20.000€/mes',
]

const timeSlots = [
  { day: 'Lunes 19 Feb', slots: ['09:00', '10:00', '11:30', '16:00'] },
  { day: 'Martes 20 Feb', slots: ['09:00', '12:00', '15:00', '17:00'] },
  { day: 'Miércoles 21 Feb', slots: ['10:00', '11:00', '16:30', '18:00'] },
]

export default function AgenciaContactoPage() {
  const [form, setForm] = useState({
    company: '', name: '', email: '', service: '', budget: '', message: '',
  })
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [callBooked, setCallBooked] = useState(false)

  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true })
  const callRef = useRef(null)
  const callInView = useInView(callRef, { once: true })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ background: bg, color: text, fontFamily: "'Inter', 'Helvetica Neue', sans-serif", minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Animated grid background */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Primera consulta gratuita
            </div>
            <h1 style={{
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              fontWeight: 900,
              margin: '0 0 1.5rem',
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              lineHeight: 0.9,
              color: accent,
              textShadow: `0 0 80px rgba(0,255,136,0.3)`,
            }}>
              Hablemos
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              Cuéntanos tu reto. En 24 horas te damos una propuesta personalizada con las estrategias exactas que necesita tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM */}
      <section ref={formRef} style={{ padding: '2rem 2rem 5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '0 0 2rem', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
              Cuéntanos tu Proyecto
            </h2>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ border: `1px solid ${accent}`, borderRadius: 8, padding: '3rem', textAlign: 'center' }}
                >
                  <div style={{ color: accent, fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                  <h3 style={{ color: accent, fontSize: '1.3rem', fontWeight: 700, margin: '0 0 0.75rem', textTransform: 'uppercase' }}>
                    Mensaje Recibido
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                    Un estratega te contactará en menos de 24 horas hábiles. Mientras tanto, echa un vistazo a nuestros casos de éxito.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { label: 'Empresa / Marca *', key: 'company', type: 'text', placeholder: 'Mi Empresa S.L.' },
                    { label: 'Tu nombre *', key: 'name', type: 'text', placeholder: 'Carlos García' },
                    { label: 'Email corporativo *', key: 'email', type: 'email', placeholder: 'carlos@miempresa.com' },
                  ].map(field => (
                    <div key={field.key}>
                      <label style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                        required
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: 4,
                          border: '1px solid rgba(255,255,255,0.1)',
                          background: 'rgba(255,255,255,0.04)',
                          color: text,
                          fontFamily: 'sans-serif',
                          fontSize: '0.95rem',
                          boxSizing: 'border-box',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={e => (e.target.style.borderColor = accent)}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                  ))}

                  {/* Service select */}
                  <div>
                    <label style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                      Servicio de interés *
                    </label>
                    <select
                      value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)', background: '#111', color: form.service ? text : 'rgba(255,255,255,0.35)', fontFamily: 'sans-serif', fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none', cursor: 'pointer' }}
                    >
                      <option value="">Selecciona un servicio...</option>
                      {services.map(s => <option key={s} value={s} style={{ color: text, background: '#111' }}>{s}</option>)}
                    </select>
                  </div>

                  {/* Budget select */}
                  <div>
                    <label style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                      Presupuesto mensual *
                    </label>
                    <select
                      value={form.budget}
                      onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)', background: '#111', color: form.budget ? text : 'rgba(255,255,255,0.35)', fontFamily: 'sans-serif', fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none', cursor: 'pointer' }}
                    >
                      <option value="">Rango de inversión...</option>
                      {budgets.map(b => <option key={b} value={b} style={{ color: text, background: '#111' }}>{b}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                      Tu reto o pregunta *
                    </label>
                    <textarea
                      placeholder="Cuéntanos qué quieres conseguir, cuál es tu situación actual y cualquier detalle que creas relevante..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 4,
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'rgba(255,255,255,0.04)',
                        color: text,
                        fontFamily: 'sans-serif',
                        fontSize: '0.95rem',
                        boxSizing: 'border-box',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => (e.target.style.borderColor = accent)}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03, background: '#00cc6e' }}
                    whileTap={{ scale: 0.97 }}
                    style={{ background: accent, color: bg, border: 'none', padding: '1rem 2rem', borderRadius: 4, cursor: 'pointer', fontFamily: 'sans-serif', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background 0.2s' }}
                  >
                    Enviar Propuesta →
                  </motion.button>

                  <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', margin: 0 }}>
                    Respuesta garantizada en menos de 24h laborables. Sin spam.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* OFFICE INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '0 0 2rem', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
              Oficinas
            </h2>

            <div style={{ border: '1px solid rgba(0,255,136,0.15)', borderRadius: 8, padding: '2rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: accent }} />
              <div style={{ color: accent, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Madrid HQ</div>
              <div style={{ color: text, fontWeight: 600, marginBottom: '0.25rem' }}>Calle de Eloy Gonzalo, 27</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '1rem' }}>28010 Madrid, España</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  ['📞', '+34 910 99 88 77'],
                  ['✉️', 'hola@digitalplus.es'],
                  ['⏱️', 'Lun–Vie 9:00–19:00'],
                ].map(([icon, val]) => (
                  <div key={val} style={{ display: 'flex', gap: '0.75rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem' }}>
                    <span>{icon}</span><span>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="r-grid-2" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                { val: '< 24h', label: 'Tiempo de respuesta' },
                { val: '100%', label: 'Clientes que repiten' },
                { val: 'Gratis', label: '1ª consulta estratégica' },
                { val: 'Sin contrato', label: 'Permanencia mínima' },
              ].map(item => (
                <div key={item.label} style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '1rem', textAlign: 'center' }}>
                  <div style={{ color: accent, fontWeight: 900, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.val}</div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>{item.label}</div>
                </div>
              ))}
            </div>

            {/* Decorative terminal */}
            <div style={{ background: '#0a0a0a', borderRadius: 8, padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem' }}>// Estado actual del equipo</div>
              <div style={{ color: accent }}>→ Aceptando nuevos clientes ✓</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>→ Q1 2025: 2 plazas disponibles</div>
              <div style={{ color: 'rgba(255,255,255,0.25)', marginTop: '0.25rem' }}>→ Próxima auditoría: hoy</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOOK A CALL */}
      <section ref={callRef} style={{ background: '#080808', padding: '5rem 2rem', borderTop: '1px solid rgba(0,255,136,0.08)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={callInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Sin esperas
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, margin: '0 0 0.75rem', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                Reserva una Llamada
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', maxWidth: 460, margin: '0 auto' }}>
                45 minutos con un estratega senior. Gratis. Sin compromiso.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {callBooked ? (
                <motion.div
                  key="booked"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ border: `1px solid ${accent}`, borderRadius: 8, padding: '3rem', textAlign: 'center', maxWidth: 500, margin: '0 auto' }}
                >
                  <div style={{ color: accent, fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
                  <h3 style={{ color: accent, fontWeight: 700, margin: '0 0 0.5rem', textTransform: 'uppercase' }}>¡Llamada Reservada!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                    Recibirás un email de confirmación con el enlace de videollamada. Hasta pronto.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="slots">
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                    {timeSlots.map(day => (
                      <div key={day.day} style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '1.5rem' }}>
                        <div style={{ color: text, fontWeight: 700, marginBottom: '1rem', fontSize: '0.9rem' }}>{day.day}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {day.slots.map(slot => {
                            const key = `${day.day}-${slot}`
                            const isSelected = selectedSlot === key
                            return (
                              <motion.button
                                key={slot}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setSelectedSlot(key)}
                                style={{
                                  padding: '0.6rem 1rem',
                                  borderRadius: 4,
                                  border: isSelected ? `1px solid ${accent}` : '1px solid rgba(255,255,255,0.12)',
                                  background: isSelected ? accent : 'transparent',
                                  color: isSelected ? bg : 'rgba(255,255,255,0.6)',
                                  cursor: 'pointer',
                                  fontFamily: 'sans-serif',
                                  fontWeight: isSelected ? 700 : 400,
                                  fontSize: '0.9rem',
                                  transition: 'all 0.15s',
                                  textAlign: 'center',
                                }}
                              >
                                {slot}
                              </motion.button>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedSlot && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ textAlign: 'center', marginTop: '2rem' }}
                    >
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Horario seleccionado: <strong style={{ color: accent }}>{selectedSlot.replace('-', ' · ')}</strong>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setCallBooked(true)}
                        style={{ background: accent, color: bg, border: 'none', padding: '1rem 2.5rem', borderRadius: 4, cursor: 'pointer', fontFamily: 'sans-serif', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                      >
                        Confirmar Llamada →
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

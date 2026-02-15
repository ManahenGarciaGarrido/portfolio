'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const BG = '#1a0000'
const ACCENT = '#ff4444'
const TEXT = '#f0e0e0'
const CARD_BG = '#2a0a0a'
const DARK_CARD = '#220505'

const inputStyle = {
  width: '100%',
  background: DARK_CARD,
  border: `1px solid #ff444433`,
  color: TEXT,
  padding: '0.9rem 1.1rem',
  fontFamily: 'Georgia, serif',
  fontSize: '0.95rem',
  outline: 'none',
  boxSizing: 'border-box' as const,
}

const labelStyle = {
  display: 'block' as const,
  color: ACCENT,
  fontSize: '0.75rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  marginBottom: '0.5rem',
  fontFamily: 'Georgia, serif',
}

export default function BarberiaReservar() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    barbero: '',
    servicio: '',
    fecha: '',
    hora: '',
    notas: '',
  })

  const barbers = ['Sin preferencia', 'Marco Ruiz', 'Diego Vega', 'Carlos Medina', 'Álvaro Torres']
  const services = [
    'Corte Clásico — 25€',
    'Corte Moderno — 30€',
    'Afeitado a Navaja — 30€',
    'Arreglo de Barba — 20€',
    'Diseño de Barba — 35€',
    'Pack Completo — 55€',
    'Pack Novio — 80€',
  ]
  const slots = ['10:00', '10:45', '11:30', '12:15', '13:00', '16:00', '16:45', '17:30', '18:15', '19:00', '19:45']

  const update = (k: string, v: string) => setForm({ ...form, [k]: v })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ background: BG, color: TEXT, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* PAGE HEADER */}
      <section style={{ background: DARK_CARD, padding: '6rem 0 3rem', borderBottom: `1px solid ${ACCENT}33` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '1rem' }}>
              Tu próxima cita
            </p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: TEXT, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Reservar Cita
            </h1>
            <p style={{ color: '#a08080', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              Reserva en menos de 2 minutos. Confirmación inmediata por email o SMS.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* FORM */}
            <div style={{ gridColumn: 'span 2' }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: CARD_BG, border: `2px solid ${ACCENT}`,
                    padding: '4rem', textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✂️</div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: TEXT, marginBottom: '1rem', textTransform: 'uppercase' }}>
                    ¡Cita Reservada!
                  </h2>
                  <p style={{ color: '#a08080', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                    Hemos enviado la confirmación a <strong style={{ color: TEXT }}>{form.email || 'tu email'}</strong>
                  </p>
                  <p style={{ color: '#a08080', lineHeight: 1.8, marginBottom: '2rem' }}>
                    {form.fecha && form.hora ? `Tu cita es el ${form.fecha} a las ${form.hora}.` : 'Te confirmaremos los detalles pronto.'}
                  </p>
                  <p style={{ color: ACCENT, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Recuerda: cancelación con 24h de antelación
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setStep(1); setForm({ nombre: '', telefono: '', email: '', barbero: '', servicio: '', fecha: '', hora: '', notas: '' }) }}
                    style={{
                      marginTop: '2rem', background: 'transparent', color: ACCENT,
                      border: `1px solid ${ACCENT}`, padding: '0.85rem 2rem',
                      cursor: 'pointer', fontFamily: 'Georgia, serif',
                      fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}
                  >
                    Nueva reserva
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  style={{ background: CARD_BG, padding: '2.5rem', border: `1px solid ${ACCENT}22` }}
                >
                  {/* STEP INDICATOR */}
                  <div style={{ display: 'flex', marginBottom: '2.5rem', gap: '0' }}>
                    {[1, 2, 3].map(s => (
                      <div key={s} style={{ flex: 1, textAlign: 'center' }}>
                        <div style={{
                          width: '2rem', height: '2rem', borderRadius: '50%',
                          background: step >= s ? ACCENT : DARK_CARD,
                          border: `2px solid ${step >= s ? ACCENT : '#604040'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          margin: '0 auto 0.5rem',
                          color: step >= s ? '#fff' : '#604040',
                          fontSize: '0.85rem', fontWeight: 700,
                        }}>{s}</div>
                        <div style={{ fontSize: '0.7rem', color: step >= s ? TEXT : '#604040', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                          {s === 1 ? 'Tus datos' : s === 2 ? 'El servicio' : 'Fecha y hora'}
                        </div>
                        {s < 3 && <div style={{ height: '2px', background: step > s ? ACCENT : '#2a1010', marginTop: '-1.5rem', position: 'relative', zIndex: -1 }} />}
                      </div>
                    ))}
                  </div>

                  {/* STEP 1 */}
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: TEXT, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Tus Datos de Contacto
                      </h3>
                      <div style={{ display: 'grid', gap: '1.25rem' }}>
                        <div>
                          <label style={labelStyle}>Nombre completo *</label>
                          <input type="text" required value={form.nombre} onChange={e => update('nombre', e.target.value)} style={inputStyle} placeholder="Ej: Juan García" />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                          <div>
                            <label style={labelStyle}>Teléfono *</label>
                            <input type="tel" required value={form.telefono} onChange={e => update('telefono', e.target.value)} style={inputStyle} placeholder="+34 600 000 000" />
                          </div>
                          <div>
                            <label style={labelStyle}>Email</label>
                            <input type="email" value={form.email} onChange={e => update('email', e.target.value)} style={inputStyle} placeholder="correo@ejemplo.com" />
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => form.nombre && form.telefono && setStep(2)}
                        style={{
                          marginTop: '2rem', background: ACCENT, color: '#fff', border: 'none',
                          padding: '1rem 2.5rem', cursor: 'pointer',
                          fontFamily: 'Georgia, serif', fontWeight: 700,
                          letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem',
                          opacity: (!form.nombre || !form.telefono) ? 0.5 : 1,
                        }}
                      >
                        Continuar →
                      </button>
                    </motion.div>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: TEXT, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Elige Servicio y Barbero
                      </h3>
                      <div style={{ display: 'grid', gap: '1.25rem' }}>
                        <div>
                          <label style={labelStyle}>Servicio *</label>
                          <select required value={form.servicio} onChange={e => update('servicio', e.target.value)}
                            style={{ ...inputStyle, appearance: 'none' as const }}>
                            <option value="">Seleccionar servicio...</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={labelStyle}>Barbero preferido</label>
                          <select value={form.barbero} onChange={e => update('barbero', e.target.value)}
                            style={{ ...inputStyle, appearance: 'none' as const }}>
                            {barbers.map(b => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={labelStyle}>Notas especiales</label>
                          <textarea
                            value={form.notas} onChange={e => update('notas', e.target.value)}
                            rows={3}
                            placeholder="Alergias, preferencias, referencias de corte..."
                            style={{ ...inputStyle, resize: 'vertical' as const }}
                          />
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        <button type="button" onClick={() => setStep(1)}
                          style={{ background: 'transparent', color: TEXT, border: `1px solid ${ACCENT}33`, padding: '1rem 2rem', cursor: 'pointer', fontFamily: 'Georgia, serif', fontSize: '0.9rem' }}>
                          ← Atrás
                        </button>
                        <button type="button" onClick={() => form.servicio && setStep(3)}
                          style={{ background: ACCENT, color: '#fff', border: 'none', padding: '1rem 2.5rem', cursor: 'pointer', fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem', opacity: !form.servicio ? 0.5 : 1 }}>
                          Continuar →
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 */}
                  {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: TEXT, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Selecciona Fecha y Hora
                      </h3>
                      <div style={{ display: 'grid', gap: '1.25rem' }}>
                        <div>
                          <label style={labelStyle}>Fecha *</label>
                          <input type="date" required value={form.fecha} onChange={e => update('fecha', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle}>Hora disponible *</label>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '0.5rem' }}>
                            {slots.map(slot => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => update('hora', slot)}
                                style={{
                                  background: form.hora === slot ? ACCENT : DARK_CARD,
                                  color: form.hora === slot ? '#fff' : TEXT,
                                  border: `1px solid ${form.hora === slot ? ACCENT : ACCENT + '33'}`,
                                  padding: '0.6rem',
                                  cursor: 'pointer',
                                  fontFamily: 'Georgia, serif',
                                  fontSize: '0.9rem',
                                  fontWeight: form.hora === slot ? 700 : 400,
                                }}
                              >{slot}</button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div style={{ margin: '2rem 0', padding: '1.25rem', background: DARK_CARD, border: `1px solid ${ACCENT}22` }}>
                        <p style={{ color: ACCENT, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Resumen de tu reserva</p>
                        <p style={{ color: TEXT, fontSize: '0.9rem', lineHeight: 2 }}>
                          👤 {form.nombre}<br />
                          ✂️ {form.servicio || '—'}<br />
                          💇 {form.barbero || '—'}<br />
                          📅 {form.fecha || '—'} a las {form.hora || '—'}
                        </p>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <button type="button" onClick={() => setStep(2)}
                          style={{ background: 'transparent', color: TEXT, border: `1px solid ${ACCENT}33`, padding: '1rem 2rem', cursor: 'pointer', fontFamily: 'Georgia, serif', fontSize: '0.9rem' }}>
                          ← Atrás
                        </button>
                        <button type="submit"
                          style={{ flex: 1, background: ACCENT, color: '#fff', border: 'none', padding: '1rem 2.5rem', cursor: 'pointer', fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                          Confirmar Reserva
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.form>
              )}
            </div>

            {/* SIDEBAR INFO */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                style={{ background: CARD_BG, padding: '2rem', border: `1px solid ${ACCENT}22` }}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  📞 Llámanos
                </h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 800, color: TEXT, marginBottom: '0.5rem' }}>+34 910 000 000</p>
                <p style={{ color: '#a08080', fontSize: '0.85rem', lineHeight: 1.7 }}>
                  Mar — Dom: 10:00 — 20:00<br />
                  Lunes: Cerrado
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                style={{ background: CARD_BG, padding: '2rem', border: `1px solid ${ACCENT}22` }}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  🚶 Walk-ins Bienvenidos
                </h3>
                <p style={{ color: '#a08080', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Aceptamos clientes sin cita según disponibilidad. Recomendamos evitar horas punta (12h-14h y 17h-19h) los fines de semana.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                style={{ background: CARD_BG, padding: '2rem', border: `1px solid ${ACCENT}22` }}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  ⚠️ Política de Cancelación
                </h3>
                <p style={{ color: '#a08080', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Las cancelaciones deben realizarse con al menos <strong style={{ color: TEXT }}>24 horas</strong> de antelación. Cancelaciones tardías o no-shows conllevan un cargo del 50% del servicio reservado.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                style={{ background: CARD_BG, padding: '2rem', border: `1px solid ${ACCENT}22` }}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  📍 Cómo Llegar
                </h3>
                <p style={{ color: '#a08080', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Calle Gran Vía, 42<br />
                  28013 Madrid<br /><br />
                  Metro: Gran Vía (L1, L5)<br />
                  Bus: 44, 75, 133, 149
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

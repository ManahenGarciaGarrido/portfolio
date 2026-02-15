'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const BG = '#001f3f'
const ACCENT = '#00c896'
const TEXT = '#e8f8f4'
const CARD = '#002a52'
const CARD2 = '#003366'
const INPUT_BG = '#003366'

const centros = ['Centro Goya (C/ Goya 45)', 'Centro Brasil (Av. Brasil 17)', 'Centro Serrano (C/ Serrano 102)']
const fisioterapeutas = ['Sin preferencia', 'Dr. Alejandro Torres', 'Dra. Carmen Sánchez', 'Pablo Fernández', 'Dra. Lucía Herrero', 'Miguel Ortega', 'Ana Ramírez']
const tratamientos = ['Fisioterapia Deportiva', 'Rehabilitación Postoperatoria', 'Masaje Terapéutico', 'Electroterapia', 'Osteopatía', 'Pilates Clínico', 'Evaluación Inicial (No sé qué necesito)']
const horas = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30']
const duraciones = ['Menos de 1 semana', '1–2 semanas', '2–4 semanas', '1–3 meses', '3–6 meses', 'Más de 6 meses', 'Recaída / lesión recurrente']

const inputStyle = {
  background: INPUT_BG,
  border: `1px solid ${ACCENT}25`,
  color: TEXT,
  padding: '0.75rem 1rem',
  borderRadius: 8,
  fontSize: '0.95rem',
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box' as const,
}

const labelStyle = {
  display: 'block',
  color: TEXT,
  fontSize: '0.85rem',
  fontWeight: 600,
  marginBottom: '0.5rem',
  opacity: 0.85,
}

export default function FisioReservar() {
  const [modalidad, setModalidad] = useState<'presencial' | 'online'>('presencial')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '', telefono: '', email: '',
    centro: centros[0], fisio: fisioterapeutas[0],
    tratamiento: tratamientos[0], fecha: '', hora: horas[0],
    motivo: '', duracion: duraciones[0],
  })

  const handleChange = (field: string, value: string) => setFormData(p => ({ ...p, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ background: BG, color: TEXT, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* HEADER */}
      <section style={{ background: CARD, padding: '4rem 2rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Cita Online</p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: '1rem' }}>
            Reserva tu Cita
          </h1>
          <p style={{ color: TEXT, opacity: 0.75, maxWidth: 520, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Rellena el formulario en menos de 2 minutos. Te confirmamos la cita por email y SMS en menos de 1 hora.
          </p>
        </motion.div>
      </section>

      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>

          {/* TIPO DE CONSULTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ background: CARD, borderRadius: 16, padding: '2rem' }}
          >
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem' }}>Tipo de Consulta</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {(['presencial', 'online'] as const).map(m => (
                <button
                  key={m}
                  onClick={() => setModalidad(m)}
                  style={{
                    flex: 1,
                    padding: '1.2rem',
                    borderRadius: 10,
                    border: `2px solid ${modalidad === m ? ACCENT : `${ACCENT}30`}`,
                    background: modalidad === m ? `${ACCENT}15` : 'transparent',
                    color: modalidad === m ? ACCENT : TEXT,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    transition: 'all 0.2s',
                  }}
                >
                  {m === 'presencial' ? '🏥 Consulta Presencial' : '💻 Consulta Online (Videollamada)'}
                </button>
              ))}
            </div>
            {modalidad === 'online' && (
              <p style={{ color: TEXT, opacity: 0.65, fontSize: '0.875rem', marginTop: '1rem', padding: '0.75rem', background: CARD2, borderRadius: 8 }}>
                Las consultas online son ideales para valoraciones iniciales, seguimiento de tratamientos y resolución de dudas. Te enviaremos el enlace de videollamada por email.
              </p>
            )}
          </motion.div>

          {/* FORMULARIO */}
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              style={{ background: CARD, borderRadius: 16, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>Datos Personales</h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Nombre y Apellidos *</label>
                  <input type="text" required value={formData.nombre} onChange={e => handleChange('nombre', e.target.value)} placeholder="Ej: María García López" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Teléfono *</label>
                  <input type="tel" required value={formData.telefono} onChange={e => handleChange('telefono', e.target.value)} placeholder="+34 600 000 000" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Correo Electrónico *</label>
                <input type="email" required value={formData.email} onChange={e => handleChange('email', e.target.value)} placeholder="tu@email.com" style={inputStyle} />
              </div>

              <div style={{ borderTop: `1px solid ${ACCENT}20`, paddingTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>Detalles de la Cita</h3>
              </div>

              {modalidad === 'presencial' && (
                <div>
                  <label style={labelStyle}>Centro *</label>
                  <select value={formData.centro} onChange={e => handleChange('centro', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                    {centros.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              )}

              <div>
                <label style={labelStyle}>Fisioterapeuta</label>
                <select value={formData.fisio} onChange={e => handleChange('fisio', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                  {fisioterapeutas.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Tratamiento Solicitado *</label>
                <select required value={formData.tratamiento} onChange={e => handleChange('tratamiento', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                  {tratamientos.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Fecha Preferida *</label>
                  <input type="date" required value={formData.fecha} onChange={e => handleChange('fecha', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Hora Preferida *</label>
                  <select required value={formData.hora} onChange={e => handleChange('hora', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                    {horas.map(h => <option key={h} value={h}>{h}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ borderTop: `1px solid ${ACCENT}20`, paddingTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>Sobre tu Dolencia</h3>
              </div>

              <div>
                <label style={labelStyle}>Describe tu Motivo de Consulta / Dolencia *</label>
                <textarea
                  required
                  value={formData.motivo}
                  onChange={e => handleChange('motivo', e.target.value)}
                  placeholder="Describe brevemente el dolor o lesión que padeces, en qué zona, si tienes diagnóstico previo, etc."
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                />
              </div>

              <div>
                <label style={labelStyle}>¿Cuánto tiempo llevas con esta dolencia?</label>
                <select value={formData.duracion} onChange={e => handleChange('duracion', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                  {duraciones.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <p style={{ color: TEXT, opacity: 0.5, fontSize: '0.8rem', lineHeight: 1.6 }}>
                * Campos obligatorios. Tus datos se tratan conforme a nuestra política de privacidad. Recibirás confirmación en menos de 1 hora en horario de atención (Lun–Vie 8:00–21:00, Sáb 9:00–15:00).
              </p>

              <button
                type="submit"
                style={{ background: ACCENT, color: '#001f3f', border: 'none', padding: '1rem', borderRadius: 10, fontSize: '1.05rem', fontWeight: 800, cursor: 'pointer', marginTop: '0.5rem' }}
              >
                Confirmar Solicitud de Cita →
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ background: CARD, borderRadius: 16, padding: '3rem', textAlign: 'center' }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>Solicitud Enviada</h2>
              <p style={{ color: TEXT, opacity: 0.75, lineHeight: 1.7, fontSize: '1rem' }}>
                Hemos recibido tu solicitud para <strong style={{ color: ACCENT }}>{formData.nombre}</strong>. Te confirmaremos la cita en menos de 1 hora por email y SMS.
              </p>
              <button onClick={() => setSubmitted(false)} style={{ background: ACCENT, color: '#001f3f', border: 'none', padding: '0.9rem 2rem', borderRadius: 8, fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', marginTop: '2rem' }}>
                Nueva Solicitud
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* PRIMERA VISITA INFO */}
      <section style={{ background: CARD2, padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Primera Visita</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff' }}>¿Qué Esperar en tu Primera Consulta?</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: CARD, borderRadius: 12, padding: '2rem', borderTop: `4px solid ${ACCENT}` }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📋</div>
              <h3 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.75rem' }}>Qué traer</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['DNI o tarjeta sanitaria', 'Informes médicos previos si los tienes', 'Pruebas diagnósticas (RX, RM, ecografías)', 'Lista de medicación actual', 'Ropa cómoda y deportiva'].map(item => (
                  <li key={item} style={{ color: TEXT, opacity: 0.75, fontSize: '0.875rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: ACCENT }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ background: CARD, borderRadius: 12, padding: '2rem', borderTop: `4px solid ${ACCENT}` }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.75rem' }}>Qué ocurrirá</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Entrevista clínica detallada (15 min)', 'Exploración física y evaluación postural', 'Análisis biomecánico del movimiento', 'Diagnóstico fisioterapéutico', 'Diseño del plan de tratamiento personalizado'].map(item => (
                  <li key={item} style={{ color: TEXT, opacity: 0.75, fontSize: '0.875rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: ACCENT }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ background: CARD, borderRadius: 12, padding: '2rem', borderTop: `4px solid ${ACCENT}` }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💰</div>
              <h3 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.75rem' }}>Precio y cobertura</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Primera consulta: 60€ (incluida en packs)', 'Sesión individual: 65–85€ según tratamiento', 'Mutuas: ADESLAS, MAPFRE, SANITAS, ASISA', 'Posibilidad de domiciliación bancaria', 'Factura para declaración IRPF disponible'].map(item => (
                  <li key={item} style={{ color: TEXT, opacity: 0.75, fontSize: '0.875rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: ACCENT }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

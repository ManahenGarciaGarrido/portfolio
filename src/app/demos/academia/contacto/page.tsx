'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const BG = '#0a0a2e'
const ACCENT = '#4fc3f7'
const TEXT = '#e8f4ff'
const CARD_BG = '#0f0f3a'
const DARK_CARD = '#080820'

const inputStyle = {
  width: '100%',
  background: DARK_CARD,
  border: `1px solid #4fc3f733`,
  color: TEXT,
  padding: '0.9rem 1.1rem',
  fontFamily: 'system-ui, sans-serif',
  fontSize: '0.95rem',
  outline: 'none',
  boxSizing: 'border-box' as const,
  borderRadius: '4px',
}

const labelStyle = {
  display: 'block' as const,
  color: ACCENT,
  fontSize: '0.75rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  marginBottom: '0.5rem',
}

export default function AcademiaContacto() {
  const [inquiryType, setInquiryType] = useState<'soporte' | 'empresas' | 'instructor'>('soporte')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    empresa: '',
    asunto: '',
    mensaje: '',
  })
  const [chatOpen, setChatOpen] = useState(false)

  const update = (k: string, v: string) => setForm({ ...form, [k]: v })

  const quickFaqs = [
    { q: '¿Cómo accedo a mis cursos?', a: 'Ve a Mi Cuenta → Mis Cursos en el panel de control. Están disponibles desde cualquier dispositivo.' },
    { q: '¿Puedo pausar mi suscripción?', a: 'Sí, puedes pausar hasta 3 meses. Ve a Configuración → Suscripción → Pausar.' },
    { q: '¿Los certificados tienen fecha de caducidad?', a: 'No, los certificados de LearnX son permanentes y no caducan.' },
    { q: '¿Cómo cancelo mi cuenta?', a: 'Ve a Configuración → Suscripción → Cancelar. Mantendrás el acceso hasta el fin del período.' },
    { q: '¿Hay descuentos para estudiantes?', a: 'Sí, ofrecemos 50% de descuento para estudiantes universitarios con email .edu o carnet de estudiante.' },
  ]

  const inquiryTypes = [
    { id: 'soporte', label: 'Soporte al alumno', icon: '🎓', desc: 'Problemas técnicos, acceso a cursos, certificados' },
    { id: 'empresas', label: 'Soluciones para empresas', icon: '🏢', desc: 'Formación de equipos, facturación, planes corporativos' },
    { id: 'instructor', label: 'Candidatura de instructor', icon: '📚', desc: 'Quiero crear cursos en LearnX' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ background: BG, color: TEXT, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* HEADER */}
      <section style={{ background: DARK_CARD, padding: '6rem 0 3rem', borderBottom: `1px solid ${ACCENT}22` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ color: ACCENT, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Estamos aquí
            </p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: TEXT, marginBottom: '1rem' }}>
              Contacto
            </h1>
            <p style={{ color: '#a0c4e8', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              Respondemos en menos de 24 horas. Nuestro equipo está disponible de lunes a viernes.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                display: 'inline-block',
                marginTop: '1.5rem',
                background: `#4caf5022`,
                border: `1px solid #4caf5044`,
                padding: '0.5rem 1.5rem',
                borderRadius: '2rem',
                color: '#4caf50', fontSize: '0.9rem', fontWeight: 600,
              }}
            >
              ⏱ Respondemos en menos de 24h
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* FORM */}
            <div style={{ gridColumn: 'span 2' }}>

              {/* INQUIRY TYPE SELECTOR */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ marginBottom: '2rem' }}
              >
                <p style={labelStyle}>Tipo de consulta</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  {inquiryTypes.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setInquiryType(type.id as typeof inquiryType)}
                      style={{
                        background: inquiryType === type.id ? `${ACCENT}22` : CARD_BG,
                        border: `2px solid ${inquiryType === type.id ? ACCENT : ACCENT + '22'}`,
                        color: TEXT, padding: '1rem',
                        cursor: 'pointer', textAlign: 'left',
                        borderRadius: '8px', transition: 'all 0.2s',
                        fontFamily: 'system-ui, sans-serif',
                      }}
                    >
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{type.icon}</div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: inquiryType === type.id ? ACCENT : TEXT, marginBottom: '0.25rem' }}>
                        {type.label}
                      </div>
                      <div style={{ color: '#a0c4e8', fontSize: '0.75rem', lineHeight: 1.4 }}>{type.desc}</div>
                    </button>
                  ))}
                </div>
              </motion.div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: CARD_BG, border: `2px solid ${ACCENT}`,
                    padding: '4rem', textAlign: 'center', borderRadius: '8px',
                  }}
                >
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✉️</div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: TEXT, marginBottom: '1rem' }}>
                    ¡Mensaje enviado!
                  </h2>
                  <p style={{ color: '#a0c4e8', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                    Hemos recibido tu consulta de <strong style={{ color: TEXT }}>{inquiryTypes.find(t => t.id === inquiryType)?.label}</strong>.
                  </p>
                  <p style={{ color: '#a0c4e8', lineHeight: 1.8, marginBottom: '2rem' }}>
                    Te responderemos en <strong style={{ color: ACCENT }}>menos de 24 horas</strong> en <strong style={{ color: TEXT }}>{form.email || 'tu email'}</strong>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ nombre: '', email: '', empresa: '', asunto: '', mensaje: '' }) }}
                    style={{
                      background: 'transparent', color: ACCENT,
                      border: `2px solid ${ACCENT}`, padding: '0.85rem 2rem',
                      cursor: 'pointer', fontFamily: 'system-ui, sans-serif',
                      fontSize: '0.9rem', borderRadius: '6px',
                    }}
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onSubmit={handleSubmit}
                  style={{ background: CARD_BG, padding: '2.5rem', borderRadius: '8px', border: `1px solid ${ACCENT}22` }}
                >
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: TEXT, marginBottom: '2rem' }}>
                    {inquiryType === 'soporte' && '🎓 Soporte al Alumno'}
                    {inquiryType === 'empresas' && '🏢 Consulta Empresarial'}
                    {inquiryType === 'instructor' && '📚 Ser Instructor en LearnX'}
                  </h3>
                  <div style={{ display: 'grid', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>Nombre *</label>
                        <input type="text" required value={form.nombre} onChange={e => update('nombre', e.target.value)} style={inputStyle} placeholder="Tu nombre" />
                      </div>
                      <div>
                        <label style={labelStyle}>Email *</label>
                        <input type="email" required value={form.email} onChange={e => update('email', e.target.value)} style={inputStyle} placeholder="tu@email.com" />
                      </div>
                    </div>
                    {inquiryType === 'empresas' && (
                      <div>
                        <label style={labelStyle}>Empresa</label>
                        <input type="text" value={form.empresa} onChange={e => update('empresa', e.target.value)} style={inputStyle} placeholder="Nombre de tu empresa" />
                      </div>
                    )}
                    <div>
                      <label style={labelStyle}>Asunto *</label>
                      <input type="text" required value={form.asunto} onChange={e => update('asunto', e.target.value)} style={inputStyle}
                        placeholder={
                          inquiryType === 'soporte' ? 'Ej: Problema con acceso al curso...' :
                          inquiryType === 'empresas' ? 'Ej: Formación para equipo de 50 personas...' :
                          'Ej: Me especializo en Marketing Digital...'
                        }
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Mensaje *</label>
                      <textarea
                        required
                        value={form.mensaje}
                        onChange={e => update('mensaje', e.target.value)}
                        rows={5}
                        placeholder={
                          inquiryType === 'soporte' ? 'Descríbenos tu problema con el mayor detalle posible...' :
                          inquiryType === 'empresas' ? 'Cuéntanos tu caso: número de empleados, áreas de formación, presupuesto aproximado...' :
                          'Tu experiencia, área de especialidad y qué cursos te gustaría crear...'
                        }
                        style={{ ...inputStyle, resize: 'vertical' as const }}
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: `0 0 20px ${ACCENT}44` }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      style={{
                        background: ACCENT, color: BG, border: 'none',
                        padding: '1rem', cursor: 'pointer',
                        fontFamily: 'system-ui, sans-serif', fontWeight: 700,
                        fontSize: '1rem', borderRadius: '6px',
                      }}
                    >
                      Enviar Mensaje
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </div>

            {/* SIDEBAR */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                style={{ background: CARD_BG, padding: '2rem', border: `1px solid ${ACCENT}22`, borderRadius: '8px' }}
              >
                <h3 style={{ color: ACCENT, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  📧 Email Directo
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <p style={{ color: TEXT, fontSize: '0.85rem', fontWeight: 600 }}>Soporte alumnos</p>
                    <p style={{ color: ACCENT, fontSize: '0.85rem' }}>soporte@learnx.es</p>
                  </div>
                  <div>
                    <p style={{ color: TEXT, fontSize: '0.85rem', fontWeight: 600 }}>Ventas empresas</p>
                    <p style={{ color: ACCENT, fontSize: '0.85rem' }}>empresas@learnx.es</p>
                  </div>
                  <div>
                    <p style={{ color: TEXT, fontSize: '0.85rem', fontWeight: 600 }}>Instructores</p>
                    <p style={{ color: ACCENT, fontSize: '0.85rem' }}>instructores@learnx.es</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                style={{ background: CARD_BG, padding: '2rem', border: `1px solid ${ACCENT}22`, borderRadius: '8px' }}
              >
                <h3 style={{ color: ACCENT, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  🕐 Horario de Atención
                </h3>
                <p style={{ color: '#a0c4e8', fontSize: '0.9rem', lineHeight: 2 }}>
                  Lun — Vie: 9:00 — 20:00<br />
                  Sáb: 10:00 — 14:00<br />
                  <span style={{ color: '#604080' }}>Dom: Cerrado</span>
                </p>
                <div style={{
                  marginTop: '1rem', background: `#4caf5015`, border: `1px solid #4caf5033`,
                  padding: '0.75rem', borderRadius: '4px',
                }}>
                  <p style={{ color: '#4caf50', fontSize: '0.85rem', fontWeight: 600 }}>
                    ⚡ Ahora: Equipo disponible
                  </p>
                  <p style={{ color: '#a0c4e8', fontSize: '0.78rem', marginTop: '0.25rem' }}>
                    Tiempo de respuesta estimado: 2h
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                style={{ background: CARD_BG, padding: '2rem', border: `1px solid ${ACCENT}22`, borderRadius: '8px' }}
              >
                <h3 style={{ color: ACCENT, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  💬 Chat en Vivo
                </h3>
                <p style={{ color: '#a0c4e8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  ¿Tienes una pregunta rápida? Usa nuestro chat para respuestas inmediatas.
                </p>
                <button
                  onClick={() => setChatOpen(!chatOpen)}
                  style={{
                    width: '100%', background: chatOpen ? '#2a2a5a' : `${ACCENT}22`,
                    border: `2px solid ${ACCENT}44`, color: ACCENT,
                    padding: '0.85rem', cursor: 'pointer',
                    fontFamily: 'system-ui, sans-serif', fontWeight: 700,
                    fontSize: '0.9rem', borderRadius: '6px',
                  }}
                >
                  {chatOpen ? '✕ Cerrar chat' : '💬 Iniciar chat'}
                </button>
                {chatOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginTop: '1rem', background: DARK_CARD, borderRadius: '4px', padding: '1rem' }}
                  >
                    <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <p style={{ color: '#a0c4e8', fontSize: '0.85rem', textAlign: 'center' }}>
                        Conectando con un agente...<br />
                        <span style={{ color: '#4caf50' }}>Tiempo de espera: ~1 min</span>
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="Escribe tu mensaje..."
                      style={{ ...inputStyle, fontSize: '0.85rem' }}
                    />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FAQS */}
      <section className="r-section" style={{ background: DARK_CARD }}>
        <div className="r-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: TEXT }}>
              Respuestas Rápidas
            </h2>
            <p style={{ color: '#a0c4e8', marginTop: '0.75rem' }}>Las preguntas más frecuentes de nuestros alumnos.</p>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {quickFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${ACCENT}22`,
                  borderRadius: '8px',
                  padding: '1.5rem',
                  borderLeft: `3px solid ${ACCENT}`,
                }}
              >
                <h4 style={{ color: TEXT, fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{faq.q}</h4>
                <p style={{ color: '#a0c4e8', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: '#a0c4e8', fontSize: '0.9rem' }}>
              ¿No encontraste lo que buscas? {' '}
              <a href="#" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600 }}>
                Visita nuestro Centro de Ayuda →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="r-section-sm" style={{ background: BG, textAlign: 'center', borderTop: `1px solid ${ACCENT}22` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: TEXT, marginBottom: '1.5rem' }}>
              Síguenos en redes sociales
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { name: 'Twitter / X', handle: '@LearnX_ES', color: '#1da1f2' },
                { name: 'LinkedIn', handle: '/company/learnx', color: '#0077b5' },
                { name: 'YouTube', handle: 'LearnX Español', color: '#ff0000' },
                { name: 'Instagram', handle: '@learnx.es', color: '#e1306c' },
              ].map(s => (
                <div key={s.name} style={{
                  background: CARD_BG, padding: '1rem 1.5rem',
                  border: `1px solid ${s.color}33`, borderRadius: '8px',
                  minWidth: '160px', textAlign: 'center',
                }}>
                  <p style={{ color: s.color, fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{s.name}</p>
                  <p style={{ color: '#a0c4e8', fontSize: '0.8rem' }}>{s.handle}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

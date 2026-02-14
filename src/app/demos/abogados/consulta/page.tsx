'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const BG = '#0d1b2a'
const ACCENT = '#c9a227'
const TEXT = '#e8e8e8'
const DARK = '#071220'

export default function ConsultaPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    area: '',
    descripcion: '',
    urgencia: '',
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const areasLegales = [
    'Derecho Civil',
    'Derecho Mercantil',
    'Derecho Penal',
    'Derecho Laboral',
    'Derecho Fiscal',
    'Derecho Inmobiliario',
    'Otro / No sé con seguridad',
  ]

  const urgencias = [
    'Urgente (necesito ayuda en menos de 48 horas)',
    'En los próximos 7 días',
    'En el próximo mes',
    'Solo quiero información de momento',
  ]

  const included = [
    { icon: '⏱', text: '30 minutos de consulta personalizada con un abogado especializado' },
    { icon: '📋', text: 'Análisis inicial de su caso y evaluación de viabilidad legal' },
    { icon: '🗺', text: 'Hoja de ruta con los pasos legales recomendados a seguir' },
    { icon: '💰', text: 'Presupuesto orientativo para la representación completa' },
    { icon: '🔒', text: 'Absoluta confidencialidad garantizada (secreto profesional)' },
    { icon: '📞', text: 'Sin compromiso de contratación posterior' },
  ]

  return (
    <div style={{ background: BG, color: TEXT, overflowX: 'hidden' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${ACCENT}12, transparent)`, pointerEvents: 'none' }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: `1px solid ${ACCENT}50`, padding: '8px 20px', marginBottom: 28, fontSize: 12, letterSpacing: 2, color: ACCENT, textTransform: 'uppercase', fontWeight: 700 }}
        >
          <span style={{ fontSize: 16 }}>🔒</span>
          Confidencialidad garantizada · Secreto profesional
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 'clamp(28px, 6vw, 70px)', fontWeight: 900, fontFamily: 'Georgia, serif', lineHeight: 1.05, maxWidth: 800, margin: '0 auto 20px' }}
        >
          TU PRIMERA CONSULTA ES{' '}
          <span style={{ color: ACCENT }}>GRATUITA</span>
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3 }} style={{ width: 60, height: 2, background: ACCENT, margin: '0 auto 24px' }} />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: `${TEXT}70`, fontSize: 18, maxWidth: 560, margin: '0 auto' }}
        >
          Sin coste. Sin compromiso. Con la garantía de 25 años de experiencia legal.
        </motion.p>
      </section>

      {/* Main content: 2 columns */}
      <section style={{ padding: '20px 24px 80px', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 52, alignItems: 'start' }}>
        {/* Left: image + what's included */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ position: 'relative', marginBottom: 36, overflow: 'hidden' }}>
            <img
              src="https://picsum.photos/seed/consultation/700/800"
              alt="Consulta con abogado"
              style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: 420, filter: 'brightness(0.8) saturate(0.8)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(transparent 60%, ${BG})` }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#00cc66', flexShrink: 0, boxShadow: '0 0 8px #00cc66' }} />
                <span style={{ fontSize: 14, fontWeight: 700 }}>Disponible hoy · Respuesta en &lt; 2 horas</span>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: 20, fontWeight: 900, fontFamily: 'Georgia, serif', marginBottom: 24, color: ACCENT }}>Qué incluye la consulta gratuita</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
            {included.map((item) => (
              <div key={item.text} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 22, flexShrink: 0, lineHeight: 1.4 }}>{item.icon}</span>
                <p style={{ color: `${TEXT}80`, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Confidentiality badge */}
          <div style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <span style={{ fontSize: 32, flexShrink: 0 }}>🔒</span>
            <div>
              <p style={{ fontWeight: 800, fontSize: 14, color: ACCENT, marginBottom: 4, letterSpacing: 1, textTransform: 'uppercase' }}>Confidencialidad garantizada</p>
              <p style={{ color: `${TEXT}60`, fontSize: 12, lineHeight: 1.6, margin: 0 }}>Todo lo que nos cuente está protegido por el secreto profesional del abogado. Nunca compartiremos información de su caso.</p>
            </div>
          </div>

          {/* Alternative contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ color: `${TEXT}50`, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>¿Prefiere contactar directamente?</p>
            <a
              href="https://wa.me/34640038508"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#25D366', padding: '14px 20px', textDecoration: 'none', color: '#fff', fontWeight: 700, fontSize: 14 }}
            >
              <span style={{ fontSize: 24 }}>💬</span>
              WhatsApp: +34 640 038 508
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#0a1520', border: `1px solid ${ACCENT}20`, padding: '14px 20px' }}>
              <span style={{ fontSize: 20 }}>📞</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: 14, margin: 0 }}>+34 91 555 00 00</p>
                <p style={{ color: `${TEXT}50`, fontSize: 11, margin: 0 }}>Lunes–Viernes 9:00–18:00 CET</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ background: '#0a1520', border: `1px solid ${ACCENT}25`, padding: '40px 32px' }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '40px 20px' }}
            >
              <div style={{ fontSize: 56, marginBottom: 20 }}>⚖️</div>
              <h3 style={{ fontSize: 24, fontWeight: 900, fontFamily: 'Georgia, serif', color: ACCENT, marginBottom: 16 }}>Solicitud recibida</h3>
              <p style={{ color: `${TEXT}70`, lineHeight: 1.8, fontSize: 15 }}>
                Hemos recibido su solicitud. Un abogado especializado en su área se pondrá en contacto con usted en menos de 2 horas laborables.
              </p>
              <div style={{ marginTop: 28, padding: '16px 20px', background: `${ACCENT}10`, border: `1px solid ${ACCENT}30` }}>
                <p style={{ fontSize: 13, color: `${TEXT}60`, margin: 0 }}>Recuerde que puede contactarnos también por WhatsApp o teléfono si su caso es urgente.</p>
              </div>
            </motion.div>
          ) : (
            <>
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 22, fontWeight: 900, fontFamily: 'Georgia, serif', marginBottom: 8 }}>Solicitar consulta gratuita</h2>
                <p style={{ color: `${TEXT}60`, fontSize: 14, lineHeight: 1.6 }}>Complete el formulario y nos pondremos en contacto en menos de 2 horas</p>
                <div style={{ width: 40, height: 2, background: ACCENT, marginTop: 16 }} />
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { key: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Juan García López', full: false },
                    { key: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'juan@email.com', full: false },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ display: 'block', fontSize: 11, fontWeight: 700, marginBottom: 8, color: `${TEXT}70`, textTransform: 'uppercase', letterSpacing: 1 }}>{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        style={{ width: '100%', background: BG, border: `1px solid ${ACCENT}30`, padding: '12px 14px', color: TEXT, fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, marginBottom: 8, color: `${TEXT}70`, textTransform: 'uppercase', letterSpacing: 1 }}>Teléfono</label>
                  <input
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    style={{ width: '100%', background: BG, border: `1px solid ${ACCENT}30`, padding: '12px 14px', color: TEXT, fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, marginBottom: 8, color: `${TEXT}70`, textTransform: 'uppercase', letterSpacing: 1 }}>Área legal</label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    style={{ width: '100%', background: BG, border: `1px solid ${ACCENT}30`, padding: '12px 14px', color: formData.area ? TEXT : `${TEXT}40`, fontSize: 14, outline: 'none', cursor: 'pointer', boxSizing: 'border-box' }}
                  >
                    <option value="">Seleccione el área de su consulta...</option>
                    {areasLegales.map(a => <option key={a} value={a} style={{ background: BG }}>{a}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, marginBottom: 8, color: `${TEXT}70`, textTransform: 'uppercase', letterSpacing: 1 }}>Describa su situación</label>
                  <textarea
                    placeholder="Describa brevemente su caso o la consulta que necesita... (no incluya información especialmente sensible en este formulario)"
                    value={formData.descripcion}
                    onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                    rows={5}
                    style={{ width: '100%', background: BG, border: `1px solid ${ACCENT}30`, padding: '12px 14px', color: TEXT, fontSize: 14, outline: 'none', resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.6, boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, marginBottom: 8, color: `${TEXT}70`, textTransform: 'uppercase', letterSpacing: 1 }}>Nivel de urgencia</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {urgencias.map((urg) => (
                      <label key={urg} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer', padding: '10px 14px', border: `1px solid ${formData.urgencia === urg ? ACCENT : `${ACCENT}20`}`, background: formData.urgencia === urg ? `${ACCENT}10` : 'transparent', transition: 'all 0.2s' }}>
                        <input
                          type="radio"
                          name="urgencia"
                          value={urg}
                          checked={formData.urgencia === urg}
                          onChange={(e) => setFormData({ ...formData, urgencia: e.target.value })}
                          style={{ accentColor: ACCENT, marginTop: 2, flexShrink: 0 }}
                        />
                        <span style={{ fontSize: 13, color: `${TEXT}80`, lineHeight: 1.4 }}>{urg}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  style={{ background: ACCENT, color: '#0d1b2a', border: 'none', padding: '18px', fontWeight: 800, fontSize: 15, cursor: 'pointer', letterSpacing: 2, textTransform: 'uppercase', fontFamily: 'inherit' }}
                >
                  Solicitar consulta gratuita →
                </motion.button>

                <p style={{ fontSize: 11, color: `${TEXT}40`, textAlign: 'center', lineHeight: 1.6 }}>
                  Al enviar este formulario acepta nuestra política de privacidad. Sus datos serán tratados con absoluta confidencialidad y nunca serán cedidos a terceros.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </section>

      {/* Trust indicators */}
      <section style={{ padding: '60px 24px 80px', background: DARK, borderTop: `1px solid ${ACCENT}15` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, textAlign: 'center' }}>
          {[
            { icon: '⚖️', val: '25+', label: 'Años de experiencia', sub: 'Fundado en 1999' },
            { icon: '👥', val: '1.500+', label: 'Clientes atendidos', sub: 'En toda España' },
            { icon: '🏆', val: '98%', label: 'Tasa de resolución', sub: 'Favorable al cliente' },
            { icon: '⏱', val: '< 2h', label: 'Tiempo de respuesta', sub: 'En días laborables' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{stat.icon}</div>
              <div style={{ fontSize: 40, fontWeight: 900, color: ACCENT, fontFamily: 'Georgia, serif', lineHeight: 1 }}>{stat.val}</div>
              <div style={{ fontSize: 14, fontWeight: 700, marginTop: 8, color: TEXT }}>{stat.label}</div>
              <div style={{ fontSize: 12, color: `${TEXT}40`, marginTop: 4 }}>{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

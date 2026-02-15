'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const dark = '#111111'
const text = '#1a1a1a'
const bg = '#f4f4f0'
const mid = '#888'

const projectTypes = [
  'Nueva construcción — Vivienda unifamiliar',
  'Nueva construcción — Edificio plurifamiliar',
  'Nueva construcción — Edificio comercial o mixto',
  'Reforma integral de vivienda',
  'Reforma de local o espacio comercial',
  'Rehabilitación de edificio',
  'Consultoría y planificación',
  'Interiorismo y diseño de espacios',
  'Otro',
]

const budgetRanges = [
  'Menos de €50.000',
  '€50.000 — €150.000',
  '€150.000 — €350.000',
  '€350.000 — €700.000',
  '€700.000 — €2.000.000',
  'Más de €2.000.000',
  'Por determinar / consultar',
]

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '',
    tipoProyecto: '', presupuesto: '', descripcion: '', planos: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const inputStyle = (field: string) => ({
    width: '100%', background: 'none',
    border: 'none', borderBottom: `1px solid ${focused === field ? dark : 'rgba(0,0,0,0.2)'}`,
    padding: '0.75rem 0', color: text, fontSize: '0.95rem',
    outline: 'none', boxSizing: 'border-box' as const,
    fontFamily: 'inherit', transition: 'border-color 0.2s',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ background: bg, minHeight: '100vh', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: text }}>

      {/* PAGE HEADER */}
      <section style={{ padding: '5rem 1.5rem 3rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 500 }}>Empecemos</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 200, color: text, lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Contacto
            </h1>
            <div style={{ display: 'inline-block', background: dark, color: '#f4f4f0', fontSize: '0.78rem', fontWeight: 500, padding: '0.6rem 1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Primera consulta sin compromiso
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="r-two-col" style={{ gap: '6rem', alignItems: 'flex-start' }}>

          {/* FORM */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ padding: '4rem 0' }}>
                <div style={{ width: '60px', height: '1px', background: dark, marginBottom: '2.5rem' }} />
                <h2 style={{ fontSize: '2.5rem', fontWeight: 200, color: text, letterSpacing: '-0.02em', marginBottom: '1.25rem', lineHeight: 1.1 }}>
                  Mensaje recibido.
                </h2>
                <p style={{ color: mid, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  Gracias por contactar con Arco Studio. Revisaremos tu consulta y nos pondremos en contacto en un plazo máximo de 48 horas laborables.
                </p>
                <p style={{ color: '#999', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  Si tienes urgencia, puedes escribirnos directamente a{' '}
                  <a href="mailto:hola@arcostudio.es" style={{ color: text, textDecoration: 'underline' }}>hola@arcostudio.es</a>
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 300, color: text, marginBottom: '2rem', letterSpacing: '-0.01em' }}>
                    ¿Sobre qué nos escribes?
                  </div>
                  <div className="r-grid-2" style={{ gap: '2rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', fontWeight: 500 }}>Nombre completo *</label>
                      <input
                        required type="text" placeholder="Tu nombre"
                        value={form.nombre}
                        onChange={e => setForm({ ...form, nombre: e.target.value })}
                        onFocus={() => setFocused('nombre')}
                        onBlur={() => setFocused(null)}
                        style={inputStyle('nombre')}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', fontWeight: 500 }}>Email *</label>
                      <input
                        required type="email" placeholder="tu@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        style={inputStyle('email')}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', fontWeight: 500 }}>Teléfono</label>
                  <input
                    type="tel" placeholder="+34 600 000 000"
                    value={form.telefono}
                    onChange={e => setForm({ ...form, telefono: e.target.value })}
                    onFocus={() => setFocused('telefono')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('telefono')}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem', fontWeight: 500 }}>Tipo de proyecto *</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {projectTypes.map(type => (
                      <label
                        key={type}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer', padding: '0.25rem 0', fontSize: '0.88rem', color: form.tipoProyecto === type ? text : '#666' }}
                      >
                        <div
                          onClick={() => setForm({ ...form, tipoProyecto: type })}
                          style={{
                            width: '16px', height: '16px', borderRadius: '50%',
                            border: `1px solid ${form.tipoProyecto === type ? dark : 'rgba(0,0,0,0.3)'}`,
                            background: form.tipoProyecto === type ? dark : 'transparent',
                            flexShrink: 0, cursor: 'pointer', transition: 'all 0.2s',
                          }}
                        />
                        <span onClick={() => setForm({ ...form, tipoProyecto: type })}>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', fontWeight: 500 }}>Presupuesto aproximado</label>
                  <select
                    value={form.presupuesto}
                    onChange={e => setForm({ ...form, presupuesto: e.target.value })}
                    onFocus={() => setFocused('presupuesto')}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle('presupuesto'), appearance: 'none', background: 'transparent', cursor: 'pointer' }}
                  >
                    <option value="">Seleccionar rango</option>
                    {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', fontWeight: 500 }}>Descripción del proyecto *</label>
                  <textarea
                    required rows={5} placeholder="Cuéntanos sobre tu proyecto: localización, estado actual, qué necesitas, plazos deseados..."
                    value={form.descripcion}
                    onChange={e => setForm({ ...form, descripcion: e.target.value })}
                    onFocus={() => setFocused('descripcion')}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle('descripcion'), resize: 'vertical', lineHeight: 1.7 }}
                  />
                </div>
                <div>
                  <label
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', padding: '1.25rem', background: form.planos ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.1)', transition: 'all 0.2s' }}
                  >
                    <div
                      onClick={() => setForm({ ...form, planos: !form.planos })}
                      style={{
                        width: '20px', height: '20px', border: `1px solid ${form.planos ? dark : 'rgba(0,0,0,0.3)'}`,
                        background: form.planos ? dark : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, cursor: 'pointer', transition: 'all 0.2s',
                      }}
                    >
                      {form.planos && <span style={{ color: '#f4f4f0', fontSize: '0.75rem', fontWeight: 900 }}>✓</span>}
                    </div>
                    <div onClick={() => setForm({ ...form, planos: !form.planos })}>
                      <div style={{ fontSize: '0.88rem', color: text, marginBottom: '0.2rem' }}>Adjuntar planos o documentación</div>
                      <div style={{ fontSize: '0.75rem', color: mid }}>Nuestro equipo se pondrá en contacto para solicitarlos de forma segura</div>
                    </div>
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    style={{ background: dark, color: '#f4f4f0', border: 'none', fontWeight: 600, fontSize: '0.9rem', padding: '1.25rem 3.5rem', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'inherit', transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#333')}
                    onMouseLeave={e => (e.currentTarget.style.background = dark)}
                  >
                    Enviar consulta
                  </button>
                  <div style={{ fontSize: '0.75rem', color: mid, marginTop: '1rem' }}>
                    Respondemos en menos de 48 horas laborables. Sin compromiso.
                  </div>
                </div>
              </form>
            )}
          </motion.div>

          {/* SIDEBAR */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            {/* Badge */}
            <div style={{ background: dark, color: '#f4f4f0', padding: '2rem', marginBottom: '3rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✓</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 200, lineHeight: 1.4, marginBottom: '0.5rem' }}>Primera consulta sin compromiso</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(244,244,240,0.5)', fontWeight: 300, lineHeight: 1.6 }}>
                Dedicamos hasta 2 horas a escuchar tu proyecto, analizar la viabilidad y presentar un primer enfoque conceptual. Sin coste y sin presión.
              </div>
            </div>

            {/* Office */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.25rem', fontWeight: 500 }}>Oficinas</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div style={{ fontWeight: 500, fontSize: '0.9rem', color: text, marginBottom: '0.4rem' }}>Madrid</div>
                  <div style={{ fontSize: '0.85rem', color: mid, lineHeight: 1.7, fontWeight: 300 }}>
                    Calle Velázquez, 48 · 2ª planta<br />
                    28001 Madrid<br />
                    <a href="tel:+34914000000" style={{ color: text, textDecoration: 'none', fontWeight: 400 }}>+34 914 000 000</a>
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 500, fontSize: '0.9rem', color: text, marginBottom: '0.4rem' }}>Barcelona</div>
                  <div style={{ fontSize: '0.85rem', color: mid, lineHeight: 1.7, fontWeight: 300 }}>
                    Passeig de Gràcia, 92 · 4ª planta<br />
                    08008 Barcelona<br />
                    <a href="tel:+34933000000" style={{ color: text, textDecoration: 'none', fontWeight: 400 }}>+34 933 000 000</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.25rem', fontWeight: 500 }}>Horario</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { day: 'Lunes — Jueves', hours: '9:00 — 18:30' },
                  { day: 'Viernes', hours: '9:00 — 15:00' },
                  { day: 'Sábado — Domingo', hours: 'Cerrado' },
                ].map(item => (
                  <div key={item.day} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: mid, fontWeight: 300 }}>{item.day}</span>
                    <span style={{ color: text, fontWeight: 400 }}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 500 }}>Email</div>
              <a href="mailto:hola@arcostudio.es" style={{ fontSize: '1.1rem', color: text, textDecoration: 'none', fontWeight: 300, borderBottom: '1px solid', paddingBottom: '2px' }}>
                hola@arcostudio.es
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#eeede8', borderTop: '1px solid rgba(0,0,0,0.06)', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ color: mid, fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          ARCO STUDIO · Madrid · Barcelona · 2008—2026
        </div>
      </footer>
    </main>
  )
}

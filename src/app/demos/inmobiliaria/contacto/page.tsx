'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const gold = '#c9a227'
const navy = '#001a4d'

const agents = [
  { seed: 'agent1', name: 'Isabel Herrero', role: 'Directora', phone: '+34 91 234 56 78', whatsapp: '34912345678' },
  { seed: 'agent2', name: 'Carlos Mendoza', role: 'Agente Senior', phone: '+34 91 234 56 79', whatsapp: '34912345679' },
  { seed: 'agent3', name: 'Maria Vega', role: 'Agente Senior', phone: '+34 91 234 56 80', whatsapp: '34912345680' },
]

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const inputStyle = {
    width: '100%',
    border: `1.5px solid ${navy}22`,
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    color: navy,
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'Georgia, serif',
    background: '#fff',
  }

  const labelStyle = {
    fontSize: '0.78rem',
    fontWeight: 700 as const,
    color: navy + 'aa',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    display: 'block',
    marginBottom: '0.4rem',
  }

  return (
    <main style={{ background: '#f9f7f2', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* PAGE HEADER */}
      <div style={{ background: navy, padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ duration: 0.7 }}
            style={{ height: '3px', background: gold, margin: '0 auto 1.5rem' }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '2.8rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase' }}
          >
            CONTACTA CON UN <span style={{ color: gold }}>EXPERTO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', marginTop: '0.75rem', fontStyle: 'italic' }}
          >
            Nuestro equipo te atendera en menos de 24 horas
          </motion.p>
        </div>
      </div>

      {/* MAIN 2-COLUMN SECTION */}
      <div className="r-two-col" style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem 1.5rem', gap: '3rem', alignItems: 'start' }}>

        {/* LEFT — FORM */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: '#fff', borderRadius: '14px', padding: '2.5rem', boxShadow: '0 4px 30px rgba(0,26,77,0.08)' }}
        >
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: navy, marginBottom: '1.75rem', textTransform: 'uppercase', borderBottom: `2px solid ${gold}`, paddingBottom: '0.75rem' }}>
            Enviar Consulta
          </h2>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '3rem 1.5rem' }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ fontWeight: 800, color: navy, fontSize: '1.2rem', marginBottom: '0.75rem' }}>Mensaje Enviado</h3>
              <p style={{ color: navy + '99', lineHeight: 1.7 }}>Gracias por contactar con Arco Inmobiliaria. Un agente se pondra en contacto contigo en menos de 24 horas.</p>
            </motion.div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Nombre y Apellidos</label>
                <input type="text" placeholder="Tu nombre completo" value={form.nombre} onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))} style={inputStyle} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Correo Electronico</label>
                  <input type="email" placeholder="tu@email.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inputStyle} required />
                </div>
                <div>
                  <label style={labelStyle}>Telefono</label>
                  <input type="tel" placeholder="+34 600 000 000" value={form.telefono} onChange={e => setForm(p => ({ ...p, telefono: e.target.value }))} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Tipo de Consulta</label>
                <select style={{ ...inputStyle, appearance: 'none' as const }}>
                  <option>Compra de propiedad</option>
                  <option>Venta de propiedad</option>
                  <option>Alquiler</option>
                  <option>Tasacion gratuita</option>
                  <option>Inversion inmobiliaria</option>
                  <option>Otra consulta</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Mensaje</label>
                <textarea
                  rows={5}
                  placeholder="Cuentanos como podemos ayudarte..."
                  value={form.mensaje}
                  onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  background: gold, color: '#fff', fontWeight: 800, fontSize: '0.95rem',
                  padding: '1rem', borderRadius: '8px', border: 'none', cursor: 'pointer',
                  textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Georgia, serif',
                }}
              >
                Enviar Mensaje
              </button>
              <p style={{ fontSize: '0.72rem', color: navy + '55', textAlign: 'center' }}>
                Al enviar aceptas nuestra politica de privacidad. Sin spam, sin cesion a terceros.
              </p>
            </form>
          )}
        </motion.div>

        {/* RIGHT — OFFICE INFO */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {/* Office card */}
          <div style={{ background: '#fff', borderRadius: '14px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,26,77,0.07)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: navy, marginBottom: '1.25rem', textTransform: 'uppercase', borderBottom: `2px solid ${gold}`, paddingBottom: '0.6rem' }}>
              Oficina Central
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '📍', label: 'Direccion', value: 'Calle Velazquez 45, 28001 Madrid' },
                { icon: '📞', label: 'Telefono', value: '+34 91 234 56 78' },
                { icon: '📧', label: 'Email', value: 'info@arcoinmobiliaria.es' },
                { icon: '🕐', label: 'Horario', value: 'Lun-Vie: 9:00-20:00 · Sab: 10:00-14:00' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: navy + '88', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', color: navy, fontWeight: 600, marginTop: '0.15rem' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div style={{
            background: navy, height: '200px', borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.15,
              backgroundImage: 'linear-gradient(rgba(201,162,39,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📍</div>
              <div style={{ color: gold, fontWeight: 800 }}>Calle Velazquez 45</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>Barrio de Salamanca · Madrid</div>
            </div>
          </div>

          {/* Other offices */}
          <div style={{ background: '#fff', borderRadius: '14px', padding: '1.75rem', boxShadow: '0 4px 20px rgba(0,26,77,0.07)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: navy, marginBottom: '1rem', textTransform: 'uppercase' }}>Otras Oficinas</h3>
            {[
              { city: 'Barcelona', address: 'Paseo de Gracia 64, Eixample' },
              { city: 'Marbella', address: 'Avda. Ricardo Soriano 22' },
              { city: 'Ibiza', address: 'Calle Bisbe Torres 5, Ciudad' },
            ].map(office => (
              <div key={office.city} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', marginBottom: '0.75rem', borderBottom: `1px solid ${navy}10` }}>
                <span style={{ fontWeight: 800, color: navy, fontSize: '0.9rem' }}>{office.city}</span>
                <span style={{ color: navy + '88', fontSize: '0.82rem' }}>{office.address}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AGENTS SECTION */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: navy, marginBottom: '1.75rem', textTransform: 'uppercase', textAlign: 'center' }}>
          Nuestros Agentes
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '1.75rem',
                boxShadow: '0 4px 16px rgba(0,26,77,0.07)',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'center',
              }}
            >
              <img
                src={`https://picsum.photos/seed/${agent.seed}/200/200`}
                alt={agent.name}
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${gold}`, flexShrink: 0 }}
              />
              <div>
                <h3 style={{ fontWeight: 800, color: navy, fontSize: '1rem', marginBottom: '0.2rem' }}>{agent.name}</h3>
                <p style={{ color: navy + '77', fontSize: '0.8rem', marginBottom: '0.6rem' }}>{agent.role}</p>
                <a href={`tel:${agent.phone}`} style={{ color: gold, fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', display: 'block', marginBottom: '0.4rem' }}>{agent.phone}</a>
                <a
                  href={`https://wa.me/${agent.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block', background: '#25D366', color: '#fff',
                    fontSize: '0.72rem', fontWeight: 800, padding: '0.3rem 0.85rem',
                    borderRadius: '20px', textDecoration: 'none',
                  }}
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

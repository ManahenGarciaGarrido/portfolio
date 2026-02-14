'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const GOLD = '#b8860b';
const WHITE = '#ffffff';
const BLACK = '#000000';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#111',
    border: `1px solid ${GOLD}33`,
    color: WHITE,
    padding: '0.9rem 1.1rem',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.68rem',
    letterSpacing: '0.2em',
    color: GOLD,
    fontWeight: 700,
    marginBottom: '0.5rem',
  };

  return (
    <main style={{ background: BLACK, color: WHITE, minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ padding: '4rem 4rem 2rem', borderBottom: `1px solid ${GOLD}22` }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: GOLD, marginBottom: '0.75rem', fontWeight: 700 }}>PONTE EN CONTACTO</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Reserva Tu Sesión
          </h1>
        </motion.div>
      </section>

      {/* Main Layout */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 200px)' }}>

        {/* LEFT — Photo + Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', overflow: 'hidden', minHeight: '600px' }}
        >
          <img
            src="https://picsum.photos/seed/contact-dark/700/900"
            alt="Contacto Alejandro Vega"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.7) 100%)' }} />

          <div style={{ position: 'relative', zIndex: 2, padding: '4rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: `${GOLD}22`, border: `1px solid ${GOLD}55`,
              padding: '0.5rem 1rem', marginBottom: '3rem', alignSelf: 'flex-start',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '0.72rem', color: GOLD, fontWeight: 700, letterSpacing: '0.1em' }}>Respuesta en 24 horas</span>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: GOLD, fontWeight: 700, marginBottom: '0.3rem' }}>ESTUDIO EN MADRID</div>
              <div style={{ fontSize: '1rem', color: '#ccc', marginBottom: '0.2rem' }}>Calle Gran Vía, 28, 2ºA</div>
              <div style={{ fontSize: '0.85rem', color: '#666' }}>28013 Madrid, España</div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: GOLD, fontWeight: 700, marginBottom: '0.3rem' }}>TELÉFONO</div>
              <a href="tel:+34911234567" style={{ fontSize: '1.1rem', color: WHITE, textDecoration: 'none', fontWeight: 600 }}>+34 911 234 567</a>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: GOLD, fontWeight: 700, marginBottom: '0.3rem' }}>EMAIL</div>
              <a href="mailto:hola@alejandrovega.es" style={{ fontSize: '1rem', color: '#ccc', textDecoration: 'none' }}>hola@alejandrovega.es</a>
            </div>

            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: GOLD, fontWeight: 700, marginBottom: '0.3rem' }}>HORARIO DE ESTUDIO</div>
              <div style={{ fontSize: '0.85rem', color: '#888' }}>Lun–Vie: 10:00–20:00</div>
              <div style={{ fontSize: '0.85rem', color: '#888' }}>Sáb: 10:00–15:00</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ padding: '4rem', background: '#060606', overflowY: 'auto' }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>Cuéntame tu proyecto</h2>
              <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '2.5rem' }}>Rellena el formulario y te respondo en menos de 24 horas.</p>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>NOMBRE COMPLETO</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>CORREO ELECTRÓNICO</label>
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>TIPO DE SESIÓN</label>
                <select
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                  required
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="" disabled>Selecciona un servicio</option>
                  <option value="retrato">Sesión Retrato — €200</option>
                  <option value="boda">Boda Completa — €900</option>
                  <option value="corporativo">Fotografía Corporativa — €400</option>
                  <option value="otro">Otro / Personalizado</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>FECHA PREFERIDA</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  style={{ ...inputStyle, colorScheme: 'dark' }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={labelStyle}>MENSAJE</label>
                <textarea
                  placeholder="Cuéntame qué tienes en mente, la ubicación, el número de personas..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                style={{
                  width: '100%', background: GOLD, color: BLACK,
                  border: 'none', padding: '1.1rem',
                  fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.2em',
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                ENVIAR CONSULTA
              </motion.button>

              {/* WhatsApp */}
              <div style={{ margin: '2rem 0 1rem', textAlign: 'center', color: '#444', fontSize: '0.8rem' }}>— ¿PREFIERES WHATSAPP? —</div>
              <a
                href="https://wa.me/34911234567?text=Hola%20Alejandro%2C%20me%20interesa%20una%20sesi%C3%B3n%20fotogr%C3%A1fica."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                  width: '100%', background: '#25D366', color: WHITE, border: 'none',
                  padding: '1rem', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em',
                  textDecoration: 'none', cursor: 'pointer',
                  boxSizing: 'border-box',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                ESCRÍBEME POR WHATSAPP
              </a>

              <p style={{ color: '#444', fontSize: '0.72rem', textAlign: 'center', marginTop: '1.5rem', lineHeight: 1.6 }}>
                Al enviar este formulario aceptas la política de privacidad. Tus datos solo se utilizan para gestionar tu consulta.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '2rem' }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: GOLD, fontWeight: 700, marginBottom: '0.75rem' }}>MENSAJE RECIBIDO</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>¡Gracias, {formData.name || 'amigo/a'}!</h2>
              <p style={{ color: '#888', lineHeight: 1.7, maxWidth: '400px', marginBottom: '2rem' }}>
                He recibido tu consulta y te responderé en menos de 24 horas. Mientras tanto, no dudes en explorar mi galería.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{ border: `1px solid ${GOLD}`, background: 'transparent', color: GOLD, padding: '0.8rem 2rem', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                NUEVA CONSULTA
              </button>
            </motion.div>
          )}
        </motion.div>
      </section>
    </main>
  );
}

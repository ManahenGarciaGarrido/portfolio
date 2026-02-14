'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const CREAM = '#fff9f0';
const LAVENDER = '#c9a0c9';
const DEEP = '#8b5a8b';
const LIGHT_LAVENDER = '#f0e6f0';

const TREATMENTS_OPTIONS = [
  'Masaje Balinés Tradicional (60 min — €75)',
  'Masaje con Piedras Calientes (75 min — €90)',
  'Masaje Deportivo y Recuperación (45 min — €60)',
  'Facial Regenerador con Vitamina C (60 min — €85)',
  'Facial Diamante Premium (75 min — €120)',
  'Facial Hidratante Intensivo (45 min — €65)',
  'Envoltura Detox de Arcilla (60 min — €80)',
  'Scrub de Azúcar y Aceites (45 min — €55)',
  'Vendas Frías Reductoras (75 min — €95)',
  'Ritual de Luna Llena (120 min — €180)',
  'Ritual para Parejas (90 min — €240)',
  'Consulta personalizada',
];

const TIME_SLOTS = [
  '10:00', '11:00', '12:00', '13:00',
  '15:00', '16:00', '17:00', '18:00', '19:00',
];

export default function ReservarPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    treatment: '', date: '', time: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#fff',
    border: `1.5px solid ${LAVENDER}44`,
    color: DEEP,
    padding: '0.85rem 1rem',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
    borderRadius: '2px',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.68rem',
    letterSpacing: '0.18em',
    color: LAVENDER,
    fontWeight: 700,
    marginBottom: '0.5rem',
  };

  return (
    <main style={{ background: CREAM, color: DEEP, minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ padding: '4rem 4rem 2rem', borderBottom: `1px solid ${LAVENDER}33`, textAlign: 'center', background: `linear-gradient(180deg, ${LIGHT_LAVENDER} 0%, ${CREAM} 100%)` }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: LAVENDER, marginBottom: '0.75rem', fontWeight: 700 }}>AGENDA TU VISITA</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300, fontStyle: 'italic', color: DEEP }}>
            Reserva Tu Momento
          </h1>
          <div style={{ width: '40px', height: '1px', background: LAVENDER, margin: '1rem auto 0' }} />
        </motion.div>
      </section>

      {/* Main Layout */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 200px)' }}>

        {/* LEFT — Spa Image + Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', overflow: 'hidden', minHeight: '600px' }}
        >
          <img
            src="https://picsum.photos/seed/spa-booking/600/800"
            alt="Celestial Spa"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(139,90,139,0.75) 0%, rgba(201,160,201,0.5) 60%, rgba(255,249,240,0.2) 100%)' }} />

          <div style={{ position: 'relative', zIndex: 2, padding: '3.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>

            <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', padding: '2rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h2 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 300, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                Por qué reservar con nosotras
              </h2>

              {[
                { icon: '🌸', text: 'Cancelación gratuita hasta 24h antes' },
                { icon: '📞', text: 'Confirmación inmediata por email y SMS' },
                { icon: '🎁', text: 'Regalo de bienvenida en tu primera visita' },
                { icon: '💆', text: 'Consulta previa con la especialista incluida' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem' }}>{item.text}</span>
                </div>
              ))}

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '1.5rem', paddingTop: '1.5rem' }}>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', letterSpacing: '0.15em', marginBottom: '0.5rem', fontWeight: 700 }}>HORARIO DE ATENCIÓN</div>
                <div style={{ color: '#fff', fontSize: '0.85rem' }}>Lun–Vie: 10:00–20:00</div>
                <div style={{ color: '#fff', fontSize: '0.85rem' }}>Sáb–Dom: 10:00–18:00</div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '1.25rem', paddingTop: '1.25rem' }}>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', letterSpacing: '0.15em', marginBottom: '0.5rem', fontWeight: 700 }}>DIRECCIÓN</div>
                <div style={{ color: '#fff', fontSize: '0.85rem' }}>Calle Serrano, 45, 1ºA</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>28001 Madrid — Metro Serrano</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Booking Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ padding: '3.5rem', background: '#fff', overflowY: 'auto' }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 300, fontStyle: 'italic', color: DEEP, marginBottom: '0.5rem' }}>
                Completa tu reserva
              </h2>
              <p style={{ color: '#b090b0', fontSize: '0.82rem', marginBottom: '2rem', lineHeight: 1.5 }}>
                Rellena el formulario y recibirás confirmación en minutos.
              </p>

              {/* Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.1rem' }}>
                <div>
                  <label style={labelStyle}>NOMBRE</label>
                  <input type="text" placeholder="Tu nombre" value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })} required style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>EMAIL</label>
                  <input type="email" placeholder="tu@email.com" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} required style={inputStyle} />
                </div>
              </div>

              {/* Phone */}
              <div style={{ marginBottom: '1.1rem' }}>
                <label style={labelStyle}>TELÉFONO</label>
                <input type="tel" placeholder="+34 600 000 000" value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
              </div>

              {/* Treatment */}
              <div style={{ marginBottom: '1.1rem' }}>
                <label style={labelStyle}>TRATAMIENTO</label>
                <select value={form.treatment} onChange={e => setForm({ ...form, treatment: e.target.value })} required
                  style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option value="" disabled>Selecciona un tratamiento</option>
                  {TREATMENTS_OPTIONS.map((t, i) => <option key={i} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Date & Time */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.1rem' }}>
                <div>
                  <label style={labelStyle}>FECHA</label>
                  <input type="date" value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>HORA</label>
                  <select value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="" disabled>Seleccionar hora</option>
                    {TIME_SLOTS.map(t => <option key={t} value={t}>{t} h</option>)}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={labelStyle}>NOTAS ESPECIALES</label>
                <textarea
                  placeholder="Alergias, preferencias, ocasión especial..."
                  value={form.notes}
                  onChange={e => setForm({ ...form, notes: e.target.value })}
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                style={{
                  width: '100%', background: DEEP, color: '#fff',
                  border: 'none', padding: '1.1rem',
                  fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.2em',
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                CONFIRMAR RESERVA
              </motion.button>

              {/* Separator */}
              <div style={{ margin: '2rem 0 1rem', textAlign: 'center', color: '#ccc', fontSize: '0.78rem' }}>
                — O CONTÁCTANOS DIRECTAMENTE —
              </div>

              {/* Direct contact */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <a href="tel:+34911234567" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.85rem', border: `1.5px solid ${LAVENDER}55`, color: DEEP,
                  textDecoration: 'none', fontSize: '0.78rem', fontWeight: 600,
                }}>
                  📞 +34 911 234 567
                </a>
                <a href="https://wa.me/34911234567?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20un%20tratamiento%20en%20Celestial%20Spa."
                  target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.85rem', background: '#25D366', color: '#fff',
                    textDecoration: 'none', fontSize: '0.78rem', fontWeight: 700,
                  }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>

              {/* Cancellation policy */}
              <div style={{ background: LIGHT_LAVENDER, padding: '1rem 1.25rem', border: `1px solid ${LAVENDER}33` }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: LAVENDER, letterSpacing: '0.1em', marginBottom: '0.4rem' }}>POLÍTICA DE CANCELACIÓN</div>
                <p style={{ fontSize: '0.75rem', color: '#b090b0', lineHeight: 1.6, margin: 0 }}>
                  Cancelación gratuita hasta 24 horas antes de la cita. Cancelaciones posteriores o no presentaciones conllevan un cargo del 50% del servicio reservado.
                </p>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '2rem' }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🌸</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: LAVENDER, fontWeight: 700, marginBottom: '0.75rem' }}>RESERVA RECIBIDA</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 300, fontStyle: 'italic', color: DEEP, marginBottom: '1rem' }}>
                ¡Hasta pronto, {form.name || 'querida clienta'}!
              </h2>
              <p style={{ color: '#b090b0', lineHeight: 1.7, maxWidth: '380px', marginBottom: '2rem', fontSize: '0.9rem' }}>
                Hemos recibido tu solicitud de reserva. Recibirás un email de confirmación en los próximos minutos con todos los detalles de tu visita.
              </p>
              <div style={{ background: LIGHT_LAVENDER, padding: '1.25rem 2rem', border: `1px solid ${LAVENDER}33`, marginBottom: '2rem', width: '100%', maxWidth: '360px' }}>
                <div style={{ fontSize: '0.75rem', color: DEEP, fontWeight: 600, marginBottom: '0.5rem' }}>Tu cita en resumen</div>
                <div style={{ fontSize: '0.82rem', color: '#b090b0', lineHeight: 1.8 }}>
                  {form.treatment && <div>{form.treatment.split('(')[0].trim()}</div>}
                  {form.date && <div>{form.date} · {form.time}h</div>}
                  <div>Calle Serrano, 45 — Madrid</div>
                </div>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  border: `1.5px solid ${LAVENDER}`, background: 'transparent',
                  color: DEEP, padding: '0.8rem 2rem', fontWeight: 600,
                  fontSize: '0.75rem', letterSpacing: '0.15em', cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                NUEVA RESERVA
              </button>
            </motion.div>
          )}
        </motion.div>
      </section>
    </main>
  );
}

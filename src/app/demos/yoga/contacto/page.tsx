'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const bg = '#f7f0e8';
const accent = '#c05c1a';
const textColor = '#3d2b1f';

export default function YogaContacto() {
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const trialRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: '-60px' });
  const trialInView = useInView(trialRef, { once: true, margin: '-60px' });

  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', clase: '', mensaje: '' });
  const [trial, setTrial] = useState({ nombre: '', email: '', telefono: '', clase: '', fecha: '' });
  const [newsletter, setNewsletter] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [trialSent, setTrialSent] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);

  const inputStyle = {
    backgroundColor: '#ede4d8',
    border: `1px solid ${accent}44`,
    color: textColor,
    padding: '14px 18px',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = { color: '#9a7a68', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '7px' };

  return (
    <div style={{ backgroundColor: bg, color: textColor }}>

      {/* HEADER */}
      <section
        ref={headerRef}
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 100px) 60px', backgroundColor: '#ede4d8' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '16px' }}
        >
          ZEN FLOW · CONTACTO
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 20px', lineHeight: 1.1 }}
        >
          Hablemos,<br /><span style={{ color: accent }}>estamos aquí</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ color: '#7a5a48', fontSize: '17px', lineHeight: 1.7, maxWidth: '500px' }}
        >
          Resolvemos todas tus dudas sobre clases, horarios y bonos. Respuesta garantizada en menos de 24 horas.
        </motion.p>
      </section>

      {/* MAIN CONTENT */}
      <section ref={formRef} className="r-section">
        <div className="r-two-col" style={{ maxWidth: '1100px', margin: '0 auto', gap: '50px' }}>

          {/* LEFT: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Address */}
            <div style={{ padding: '32px', backgroundColor: '#ede4d8', marginBottom: '20px', border: `1px solid ${accent}22` }}>
              <h3 style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '14px' }}>DÓNDE ENCONTRARNOS</h3>
              <p style={{ color: textColor, fontWeight: 700, fontSize: '16px', margin: '0 0 6px' }}>Calle del Bienestar 7, bajo</p>
              <p style={{ color: '#7a5a48', fontSize: '15px', margin: '0 0 4px' }}>41003 Sevilla (Barrio de Santa Cruz)</p>
              <p style={{ color: '#9a7a68', fontSize: '13px', margin: '0 0 16px' }}>A 2 min a pie de la Catedral</p>
              <p style={{ color: '#9a7a68', fontSize: '13px' }}>Metro: San Bernardo (L1) · Bus: C5, 21, 26</p>
            </div>
            {/* Phone */}
            <div style={{ padding: '28px', backgroundColor: '#ede4d8', marginBottom: '20px', border: `1px solid ${accent}22` }}>
              <h3 style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '14px' }}>CONTACTO DIRECTO</h3>
              <p style={{ color: textColor, fontWeight: 600, fontSize: '15px', margin: '0 0 6px' }}>📞 +34 954 000 333</p>
              <p style={{ color: textColor, fontWeight: 600, fontSize: '15px', margin: '0 0 6px' }}>✉️ hola@zenflow.es</p>
              <p style={{ color: textColor, fontWeight: 600, fontSize: '15px', margin: 0 }}>💬 WhatsApp: +34 654 000 333</p>
            </div>
            {/* Hours */}
            <div style={{ padding: '28px', backgroundColor: '#ede4d8', border: `1px solid ${accent}22` }}>
              <h3 style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '14px' }}>HORARIO DE ATENCIÓN</h3>
              {[
                { d: 'Lunes a Viernes', h: '8:00 – 21:00' },
                { d: 'Sábados', h: '9:00 – 15:00' },
                { d: 'Domingos', h: '9:00 – 13:00' },
              ].map(row => (
                <div key={row.d} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${accent}22` }}>
                  <span style={{ color: textColor, fontSize: '14px' }}>{row.d}</span>
                  <span style={{ color: accent, fontWeight: 700, fontSize: '14px' }}>{row.h}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div style={{ backgroundColor: '#ede4d8', padding: '40px', border: `1px solid ${accent}22` }}>
              <h2 style={{ color: textColor, fontSize: '22px', fontWeight: 800, margin: '0 0 8px' }}>Escríbenos</h2>
              <p style={{ color: '#9a7a68', fontSize: '14px', marginBottom: '28px' }}>¿Tienes dudas? Cuéntanos y te ayudamos a encontrar la clase perfecta.</p>
              {formSent ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌿</div>
                  <h3 style={{ color: accent, fontWeight: 700, fontSize: '20px', margin: '0 0 8px' }}>¡Mensaje recibido!</h3>
                  <p style={{ color: '#7a5a48', fontSize: '15px' }}>Te escribiremos en las próximas 24 horas.</p>
                </motion.div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setFormSent(true); }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={labelStyle}>NOMBRE</label>
                      <input type="text" required value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} placeholder="Tu nombre" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>TELÉFONO</label>
                      <input type="tel" value={form.telefono} onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))} placeholder="600 000 333" style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>EMAIL</label>
                    <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="tu@email.com" style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>¿QUÉ CLASE TE INTERESA?</label>
                    <select value={form.clase} onChange={e => setForm(f => ({ ...f, clase: e.target.value }))} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Selecciona una clase...</option>
                      {['Hatha Yoga', 'Vinyasa Flow', 'Yin Yoga', 'Meditación', 'Yoga Restaurativo', 'Ashtanga', 'Yoga Nidra', 'No lo sé aún'].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>MENSAJE</label>
                    <textarea rows={4} value={form.mensaje} onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))} placeholder="Cuéntanos qué buscas..." style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>
                  <button type="submit" style={{ backgroundColor: accent, color: '#fff', border: 'none', padding: '16px', width: '100%', fontWeight: 800, fontSize: '14px', cursor: 'pointer' }}>
                    ENVIAR MENSAJE
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRIAL CLASS QUICK SIGNUP */}
      <section ref={trialRef} className="r-section" style={{ backgroundColor: '#ede4d8' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={trialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>TU REGALO</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 12px' }}>
              Primera clase gratuita
            </h2>
            <p style={{ color: '#7a5a48', fontSize: '16px', marginBottom: '32px', lineHeight: 1.6 }}>
              Reserva tu clase de prueba aquí. No necesitas experiencia previa ni equipamiento especial. Solo trae ganas.
            </p>
            {trialSent ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ backgroundColor: bg, padding: '32px', border: `2px solid ${accent}` }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>🧘</div>
                <h3 style={{ color: accent, fontWeight: 700, fontSize: '18px', margin: '0 0 8px' }}>¡Plaza reservada!</h3>
                <p style={{ color: '#7a5a48', fontSize: '15px', margin: 0 }}>Te confirmamos por email. ¡Nos vemos en el tapete!</p>
              </motion.div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setTrialSent(true); }} style={{ backgroundColor: bg, padding: '32px', border: `1px solid ${accent}33` }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={labelStyle}>NOMBRE</label>
                    <input type="text" required value={trial.nombre} onChange={e => setTrial(t => ({ ...t, nombre: e.target.value }))} placeholder="Tu nombre" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>EMAIL</label>
                    <input type="email" required value={trial.email} onChange={e => setTrial(t => ({ ...t, email: e.target.value }))} placeholder="tu@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>CLASE PREFERIDA</label>
                    <select value={trial.clase} onChange={e => setTrial(t => ({ ...t, clase: e.target.value }))} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Cualquiera</option>
                      {['Hatha Yoga', 'Vinyasa Flow', 'Yin Yoga', 'Meditación'].map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>FECHA PREFERIDA</label>
                    <input type="date" value={trial.fecha} onChange={e => setTrial(t => ({ ...t, fecha: e.target.value }))} style={inputStyle} />
                  </div>
                </div>
                <button type="submit" style={{ backgroundColor: accent, color: '#fff', border: 'none', padding: '16px', width: '100%', fontWeight: 800, fontSize: '14px', cursor: 'pointer' }}>
                  RESERVAR MI CLASE GRATUITA
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ backgroundColor: bg, padding: 'clamp(50px, 8vw, 80px) 40px', textAlign: 'center', borderTop: `1px solid ${accent}22` }}>
        <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>COMUNIDAD</p>
        <h2 style={{ color: textColor, fontSize: 'clamp(22px, 3.5vw, 40px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, margin: '0 0 12px' }}>
          Suscríbete a nuestra newsletter
        </h2>
        <p style={{ color: '#9a7a68', fontSize: '15px', margin: '0 auto 28px', maxWidth: '460px' }}>
          Talleres, eventos especiales, consejos de práctica y descuentos exclusivos para la comunidad ZEN FLOW.
        </p>
        {newsletterSent ? (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: accent, fontWeight: 700, fontSize: '16px' }}>
            ¡Suscripción confirmada! Bienvenida a la familia ZEN FLOW. 🌿
          </motion.p>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setNewsletterSent(true); }} style={{ display: 'flex', gap: '12px', justifyContent: 'center', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              required
              value={newsletter}
              onChange={e => setNewsletter(e.target.value)}
              placeholder="tu@email.com"
              style={{ ...inputStyle, flex: '1', minWidth: '220px', backgroundColor: '#ede4d8' }}
            />
            <button type="submit" style={{ backgroundColor: accent, color: '#fff', border: 'none', padding: '14px 28px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              SUSCRIBIRSE
            </button>
          </form>
        )}
      </section>

    </div>
  );
}

'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const bg = '#0d0d0d';
const accent = '#ff6600';
const text = '#f0f0f0';
const dark = '#1a1a1a';

const schedule = [
  { day: 'Lunes', hours: '8:00 – 20:00', open: true },
  { day: 'Martes', hours: '8:00 – 20:00', open: true },
  { day: 'Miércoles', hours: '8:00 – 20:00', open: true },
  { day: 'Jueves', hours: '8:00 – 20:00', open: true },
  { day: 'Viernes', hours: '8:00 – 20:00', open: true },
  { day: 'Sábado', hours: '9:00 – 14:00', open: true },
  { day: 'Domingo', hours: 'Cerrado', open: false },
];

export default function TallerContacto() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const emergencyRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' });
  const emergencyInView = useInView(emergencyRef, { once: true, margin: '-60px' });

  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const update = (f: string, v: string) => setForm(prev => ({ ...prev, [f]: v }));

  const inputStyle = {
    backgroundColor: '#111',
    border: `1px solid #2a2a2a`,
    color: text,
    padding: '14px 18px',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
  };

  return (
    <div style={{ backgroundColor: bg, color: text }}>

      {/* HEADER */}
      <section
        ref={headerRef}
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 100px) 60px', background: 'linear-gradient(135deg, #1a0800 0%, #0d0d0d 70%)' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '16px' }}
        >
          MOTORWORK · CONTACTO
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, color: text, margin: '0 0 20px', lineHeight: 1 }}
        >
          Estamos aquí<br /><span style={{ color: accent }}>para ayudarte</span>
        </motion.h1>
      </section>

      {/* CONTACT CONTENT */}
      <section ref={contentRef} className="r-section">
        <div className="r-two-col" style={{ maxWidth: '1200px', margin: '0 auto', gap: '50px' }}>

          {/* LEFT: Contact info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Address */}
            <div style={{ backgroundColor: dark, border: `1px solid #2a2a2a`, padding: '32px', marginBottom: '24px' }}>
              <h3 style={{ color: accent, fontSize: '13px', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '16px' }}>DIRECCIÓN</h3>
              <p style={{ color: text, fontSize: '17px', fontWeight: 600, margin: '0 0 6px' }}>Polígono Industrial Las Marismas</p>
              <p style={{ color: '#888', fontSize: '15px', margin: '0 0 4px' }}>Nave 12, Carretera N-IV km 540</p>
              <p style={{ color: '#888', fontSize: '15px', margin: 0 }}>41010 Sevilla, España</p>
            </div>

            {/* Phone */}
            <div style={{ backgroundColor: dark, border: `1px solid #2a2a2a`, padding: '32px', marginBottom: '24px' }}>
              <h3 style={{ color: accent, fontSize: '13px', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '16px' }}>TELÉFONOS</h3>
              <div style={{ marginBottom: '12px' }}>
                <p style={{ color: '#666', fontSize: '12px', margin: '0 0 4px' }}>TALLER PRINCIPAL</p>
                <a href="tel:+34955000111" style={{ color: text, fontSize: '20px', fontWeight: 800, textDecoration: 'none' }}>+34 955 000 111</a>
              </div>
              <div>
                <p style={{ color: '#666', fontSize: '12px', margin: '0 0 4px' }}>LÍNEA DE EMERGENCIAS 24/7</p>
                <a href="tel:+34600000222" style={{ color: accent, fontSize: '20px', fontWeight: 800, textDecoration: 'none' }}>+34 600 000 222</a>
              </div>
            </div>

            {/* Schedule */}
            <div style={{ backgroundColor: dark, border: `1px solid #2a2a2a`, padding: '32px', marginBottom: '24px' }}>
              <h3 style={{ color: accent, fontSize: '13px', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '20px' }}>HORARIO</h3>
              {schedule.map(s => (
                <div key={s.day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid #1a1a1a` }}>
                  <span style={{ color: text, fontSize: '14px', fontWeight: 600 }}>{s.day}</span>
                  <span style={{ color: s.open ? accent : '#444', fontSize: '14px', fontWeight: s.open ? 700 : 400 }}>{s.hours}</span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{ backgroundColor: '#111', border: `1px solid #2a2a2a`, height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <img src="https://picsum.photos/seed/map-aerial/700/300" alt="Ubicación" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.4 }} />
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>📍</div>
                <p style={{ color: text, fontWeight: 700, fontSize: '14px', margin: 0 }}>Polígono Industrial Las Marismas, Nave 12</p>
                <p style={{ color: accent, fontSize: '12px', margin: '4px 0 0', fontWeight: 600 }}>Ver en Google Maps →</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div style={{ backgroundColor: dark, border: `1px solid #2a2a2a`, padding: '40px' }}>
              <h2 style={{ color: text, fontSize: '24px', fontWeight: 800, margin: '0 0 8px' }}>Escríbenos</h2>
              <p style={{ color: '#777', fontSize: '14px', marginBottom: '32px' }}>Te respondemos en menos de 2 horas en horario de taller.</p>
              {sent ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: '50px', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ color: accent, fontWeight: 800, fontSize: '20px', margin: '0 0 8px' }}>¡Mensaje enviado!</h3>
                  <p style={{ color: '#aaa', fontSize: '15px' }}>Nos pondremos en contacto contigo muy pronto.</p>
                </motion.div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ color: '#666', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '6px' }}>NOMBRE</label>
                      <input type="text" required value={form.nombre} onChange={e => update('nombre', e.target.value)} placeholder="Tu nombre" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ color: '#666', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '6px' }}>TELÉFONO</label>
                      <input type="tel" value={form.telefono} onChange={e => update('telefono', e.target.value)} placeholder="600 000 111" style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ color: '#666', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '6px' }}>EMAIL</label>
                    <input type="email" required value={form.email} onChange={e => update('email', e.target.value)} placeholder="tu@email.com" style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ color: '#666', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '6px' }}>ASUNTO</label>
                    <input type="text" value={form.asunto} onChange={e => update('asunto', e.target.value)} placeholder="Presupuesto, consulta, incidencia..." style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ color: '#666', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '6px' }}>MENSAJE</label>
                    <textarea rows={5} required value={form.mensaje} onChange={e => update('mensaje', e.target.value)} placeholder="Cuéntanos en qué podemos ayudarte..." style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
                  </div>
                  <button type="submit" style={{ backgroundColor: accent, color: '#000', border: 'none', padding: '16px', width: '100%', fontWeight: 800, fontSize: '14px', letterSpacing: '0.1em', cursor: 'pointer' }}>
                    ENVIAR MENSAJE
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRUA EMERGENCY */}
      <motion.section
        ref={emergencyRef}
        initial={{ opacity: 0, y: 40 }}
        animate={emergencyInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ backgroundColor: '#111', borderTop: `1px solid #2a2a2a`, padding: 'clamp(50px, 8vw, 80px) clamp(24px, 6vw, 80px)' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '12px' }}>SERVICIO 24 HORAS</p>
            <h2 style={{ color: text, fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 900, margin: '0 0 12px' }}>¿Necesitas grúa?</h2>
            <p style={{ color: '#888', fontSize: '16px', lineHeight: 1.6, margin: 0, maxWidth: '500px' }}>
              Servicio de grúa disponible las 24 horas del día, los 365 días del año. Cobertura en toda la provincia de Sevilla y zonas limítrofes.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#666', fontSize: '13px', margin: '0 0 8px' }}>LÍNEA DE EMERGENCIAS</p>
            <a href="tel:+34600000222" style={{ color: accent, fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 900, textDecoration: 'none', display: 'block', marginBottom: '12px' }}>
              +34 600 000 222
            </a>
            <a href="tel:+34600000222">
              <button style={{ backgroundColor: accent, color: '#000', border: 'none', padding: '14px 36px', fontWeight: 800, fontSize: '14px', cursor: 'pointer', letterSpacing: '0.1em' }}>
                LLAMAR AHORA
              </button>
            </a>
          </div>
        </div>
      </motion.section>

    </div>
  );
}

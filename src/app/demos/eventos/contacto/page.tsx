'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const bg = '#0d0d0d';
const gold = '#d4af37';
const textColor = '#f5f0e0';
const dark = '#161616';

const eventTypes = ['Boda', 'Evento Corporativo', 'Fiesta Privada', 'Bautizo', 'Comunión', 'Otro'];
const guestRanges = ['Menos de 50', '50 – 100', '100 – 200', '200 – 400', 'Más de 400'];
const budgetRanges = ['Menos de 2.000€', '2.000€ – 5.000€', '5.000€ – 10.000€', '10.000€ – 20.000€', 'Más de 20.000€', 'A consultar'];

export default function EventosContacto() {
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: '-60px' });
  const infoInView = useInView(infoRef, { once: true, margin: '-60px' });

  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', tipoEvento: '', fecha: '',
    invitados: '', presupuesto: '', descripcion: ''
  });
  const [sent, setSent] = useState(false);

  const update = (f: string, v: string) => setForm(prev => ({ ...prev, [f]: v }));

  const inputStyle = {
    backgroundColor: dark,
    border: `1px solid ${gold}22`,
    color: textColor,
    padding: '14px 18px',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = {
    color: '#666',
    fontSize: '11px',
    letterSpacing: '0.15em',
    fontWeight: 700,
    display: 'block',
    marginBottom: '8px',
  };

  return (
    <div style={{ backgroundColor: bg, color: textColor }}>

      {/* HEADER */}
      <section
        ref={headerRef}
        style={{ position: 'relative', padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 100px) 60px', overflow: 'hidden', textAlign: 'center' }}
      >
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at top center, ${gold}06 0%, transparent 60%)` }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: gold, fontSize: '11px', letterSpacing: '0.5em', fontWeight: 700, marginBottom: '16px' }}
          >
            ÉLITE EVENTOS · CONTACTO
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ fontSize: 'clamp(40px, 7vw, 100px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 20px', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            CUÉNTANOS<br /><span style={{ color: gold }}>TU SUEÑO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ color: '#999', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Primera consulta completamente gratuita y sin compromiso. Queremos escucharte.
          </motion.p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section ref={formRef} className="r-section">
        <div className="r-two-col" style={{ maxWidth: '1200px', margin: '0 auto', gap: '50px' }}>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div style={{ backgroundColor: dark, border: `1px solid ${gold}22`, padding: 'clamp(32px, 5vw, 50px)' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: gold, marginBottom: '24px' }} />
              <h2 style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '26px', fontWeight: 400, color: textColor, margin: '0 0 8px' }}>
                Cuéntanos los detalles
              </h2>
              <p style={{ color: '#777', fontSize: '14px', marginBottom: '36px' }}>
                Cuanta más información nos des, mejor podremos preparar tu propuesta personalizada.
              </p>

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '50px 20px' }}>
                  <div style={{ fontSize: '60px', marginBottom: '20px' }}>✨</div>
                  <h3 style={{ color: gold, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '24px', fontWeight: 700, margin: '0 0 12px' }}>
                    ¡Mensaje recibido!
                  </h3>
                  <p style={{ color: '#aaa', fontSize: '16px', lineHeight: 1.6 }}>
                    Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo en las próximas 24 horas para organizar tu consulta gratuita.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={labelStyle}>NOMBRE Y APELLIDOS *</label>
                      <input type="text" required value={form.nombre} onChange={e => update('nombre', e.target.value)} placeholder="Tu nombre completo" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>EMAIL *</label>
                      <input type="email" required value={form.email} onChange={e => update('email', e.target.value)} placeholder="tu@email.com" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>TELÉFONO</label>
                      <input type="tel" value={form.telefono} onChange={e => update('telefono', e.target.value)} placeholder="+34 600 000 200" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>TIPO DE EVENTO *</label>
                      <select required value={form.tipoEvento} onChange={e => update('tipoEvento', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Seleccionar...</option>
                        {eventTypes.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>FECHA DESEADA</label>
                      <input type="date" value={form.fecha} onChange={e => update('fecha', e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>NÚMERO DE INVITADOS</label>
                      <select value={form.invitados} onChange={e => update('invitados', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Seleccionar...</option>
                        {guestRanges.map(r => <option key={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>PRESUPUESTO APROXIMADO</label>
                    <select value={form.presupuesto} onChange={e => update('presupuesto', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Seleccionar rango...</option>
                      {budgetRanges.map(r => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: '28px' }}>
                    <label style={labelStyle}>DESCRIPCIÓN DEL EVENTO *</label>
                    <textarea
                      required rows={6}
                      value={form.descripcion}
                      onChange={e => update('descripcion', e.target.value)}
                      placeholder="Cuéntanos tu visión: el estilo que te inspira, los momentos más importantes, qué quieres que sienta la gente al recordar este día..."
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" style={{ backgroundColor: gold, color: '#0d0d0d', border: 'none', padding: '18px', width: '100%', fontWeight: 800, fontSize: '14px', letterSpacing: '0.15em', cursor: 'pointer' }}>
                    ENVIAR SOLICITUD
                  </button>
                  <p style={{ color: '#444', fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>
                    Primera consulta completamente gratuita y sin compromiso.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* WhatsApp */}
            <div style={{ backgroundColor: dark, border: `1px solid ${gold}22`, padding: '28px' }}>
              <h3 style={{ color: gold, fontSize: '12px', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '12px' }}>WHATSAPP DIRECTO</h3>
              <a href="https://wa.me/34640038508" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ backgroundColor: '#25D366', color: '#fff', border: 'none', padding: '14px 28px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', width: '100%' }}>
                  💬 Chatear por WhatsApp
                </button>
              </a>
            </div>

            {/* Phone */}
            <div style={{ backgroundColor: dark, border: `1px solid ${gold}22`, padding: '28px' }}>
              <h3 style={{ color: gold, fontSize: '12px', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '14px' }}>TELÉFONO</h3>
              <a href="tel:+34954100200" style={{ color: textColor, fontSize: '24px', fontFamily: 'Georgia, serif', fontWeight: 700, textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                +34 954 100 200
              </a>
              <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>Lunes a Viernes, 10:00 – 20:00</p>
            </div>

            {/* Office */}
            <div style={{ backgroundColor: dark, border: `1px solid ${gold}22`, padding: '28px' }}>
              <h3 style={{ color: gold, fontSize: '12px', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '14px' }}>OFICINA</h3>
              <p style={{ color: textColor, fontWeight: 600, fontSize: '16px', margin: '0 0 6px' }}>Avda. de la Constitución 45</p>
              <p style={{ color: '#888', fontSize: '14px', margin: '0 0 4px' }}>Planta 3ª, Oficina 12</p>
              <p style={{ color: '#888', fontSize: '14px', margin: '0 0 16px' }}>41004 Sevilla</p>
              <p style={{ color: '#666', fontSize: '12px' }}>Visitas con cita previa exclusivamente</p>
            </div>

            {/* First consultation highlight */}
            <div style={{ backgroundColor: `${gold}11`, border: `1px solid ${gold}44`, padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>✨</div>
              <h3 style={{ color: gold, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '18px', fontWeight: 700, margin: '0 0 8px' }}>
                Primera consulta gratuita
              </h3>
              <p style={{ color: '#999', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                Sin compromiso. Nos reunimos (presencial o por videollamada) para conocer tu proyecto y presentarte nuestra propuesta inicial.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

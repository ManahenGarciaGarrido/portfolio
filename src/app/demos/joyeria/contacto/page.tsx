'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const bg = '#000000';
const gold = '#d4af37';
const cream = '#f0e8d0';
const charcoal = '#111111';

const hours = [
  { day: 'Lunes', time: '10:00 – 20:00', open: true },
  { day: 'Martes', time: '10:00 – 20:00', open: true },
  { day: 'Miércoles', time: '10:00 – 20:00', open: true },
  { day: 'Jueves', time: '10:00 – 20:00', open: true },
  { day: 'Viernes', time: '10:00 – 20:00', open: true },
  { day: 'Sábado', time: '10:00 – 14:00 · 16:00 – 20:00', open: true },
  { day: 'Domingo', time: 'Cerrado', open: false },
];

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '', tipo: '' });
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-60px' });

  const inputStyle = {
    width: '100%',
    backgroundColor: '#0a0a0a',
    border: `1px solid ${gold}33`,
    color: cream,
    padding: '14px 16px',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
  };

  const labelStyle = {
    color: gold,
    fontSize: '10px',
    letterSpacing: '0.2em',
    display: 'block' as const,
    marginBottom: '8px',
  };

  return (
    <div style={{ backgroundColor: bg, color: cream, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>

      {/* HEADER */}
      <section style={{ padding: '100px 24px 60px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', display: 'block', marginBottom: '20px' }}>
            AURUM · CONTACTO
          </span>
          <h1 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, marginBottom: '24px' }}>
            Estamos a Tu Disposición
          </h1>
          <div style={{ width: '60px', height: '1px', backgroundColor: gold, margin: '0 auto 24px' }} />
          <p style={{ color: cream + 'aa', fontSize: '16px', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>
            Cada consulta es bienvenida. Ya sea para conocer nuestras colecciones, iniciar un encargo bespoke o simplemente visitar nuestra boutique, estamos aquí para atenderte.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="r-section" style={{ backgroundColor: charcoal }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '80px', alignItems: 'start' }}>

            {/* LEFT: Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              {/* Address */}
              <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: `1px solid ${gold}22` }}>
                <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.25em', marginBottom: '16px' }}>BOUTIQUE MADRID</p>
                <p style={{ color: cream + '99', fontSize: '15px', lineHeight: 2 }}>
                  Calle Serrano, 42<br />
                  Barrio de Salamanca<br />
                  28001 Madrid, España
                </p>
              </div>

              {/* Contact methods */}
              <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: `1px solid ${gold}22` }}>
                <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.25em', marginBottom: '20px' }}>CONTACTO DIRECTO</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a
                    href="tel:+34910000000"
                    style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}
                  >
                    <span style={{ color: gold, fontSize: '18px' }}>✆</span>
                    <div>
                      <p style={{ color: cream + '55', fontSize: '10px', letterSpacing: '0.15em', margin: '0 0 2px' }}>TELÉFONO</p>
                      <p style={{ color: cream, fontSize: '15px', margin: 0 }}>+34 91 000 00 00</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/34910000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}
                  >
                    <span style={{ color: '#25D366', fontSize: '18px' }}>◉</span>
                    <div>
                      <p style={{ color: cream + '55', fontSize: '10px', letterSpacing: '0.15em', margin: '0 0 2px' }}>WHATSAPP</p>
                      <p style={{ color: cream, fontSize: '15px', margin: 0 }}>+34 91 000 00 00</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@aurum-joyeria.es"
                    style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}
                  >
                    <span style={{ color: gold, fontSize: '18px' }}>✉</span>
                    <div>
                      <p style={{ color: cream + '55', fontSize: '10px', letterSpacing: '0.15em', margin: '0 0 2px' }}>EMAIL</p>
                      <p style={{ color: cream, fontSize: '15px', margin: 0 }}>info@aurum-joyeria.es</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: `1px solid ${gold}22` }}>
                <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.25em', marginBottom: '20px' }}>HORARIO DE ATENCIÓN</p>
                {hours.map((h) => (
                  <div key={h.day} style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '10px 0',
                    borderBottom: `1px solid ${gold}11`,
                  }}>
                    <span style={{ color: cream + '88', fontSize: '13px' }}>{h.day}</span>
                    <span style={{ color: h.open ? cream : cream + '44', fontSize: '13px', fontWeight: h.open ? 400 : 300 }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Appointment note */}
              <div style={{ backgroundColor: bg, border: `1px solid ${gold}22`, padding: '20px 22px' }}>
                <p style={{ color: gold, fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  ★ VISITA CON CITA PREVIA
                </p>
                <p style={{ color: cream + '77', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>
                  Por favor, contacta antes de visitarnos para asegurarte una atención privada y personalizada. Cada cita incluye una consulta sin compromiso con nuestra directora creativa.
                </p>
              </div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.25em', marginBottom: '8px' }}>ESCRÍBENOS</p>
              <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, marginBottom: '32px' }}>
                Cuéntanos en qué<br />podemos ayudarte
              </h2>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: bg, border: `1px solid ${gold}33` }}
                >
                  <p style={{ color: gold, fontSize: '40px', marginBottom: '16px' }}>◆</p>
                  <h3 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 400, marginBottom: '12px' }}>
                    Mensaje enviado
                  </h3>
                  <p style={{ color: cream + '77', fontSize: '14px', lineHeight: 1.8 }}>
                    Gracias por contactar con AURUM. Te responderemos en un plazo máximo de 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <div>
                    <label style={labelStyle}>NOMBRE COMPLETO *</label>
                    <input
                      type="text" required value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Tu nombre" style={inputStyle}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={labelStyle}>EMAIL *</label>
                      <input
                        type="email" required value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="tu@email.com" style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>TELÉFONO</label>
                      <input
                        type="tel" value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                        placeholder="+34 600 000 000" style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>MOTIVO DE CONSULTA</label>
                    <select
                      value={form.tipo}
                      onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer', color: form.tipo ? cream : cream + '55' }}
                    >
                      <option value="">Selecciona motivo</option>
                      <option value="colecciones">Información sobre colecciones</option>
                      <option value="bespoke">Encargo bespoke</option>
                      <option value="cita">Concertar cita en boutique</option>
                      <option value="reparacion">Reparación o restauración</option>
                      <option value="tasacion">Tasación de joya</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>MENSAJE *</label>
                    <textarea
                      required rows={5} value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: gold, color: '#000', padding: '16px 40px',
                      fontSize: '12px', letterSpacing: '0.2em', fontWeight: 700,
                      border: 'none', cursor: 'pointer', alignSelf: 'flex-start',
                    }}
                  >
                    ENVIAR MENSAJE
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section style={{ height: '320px', overflow: 'hidden', position: 'relative' }}>
        <img
          src="https://picsum.photos/seed/madrid-map/1400/400"
          alt="Ubicación boutique"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(0.3) brightness(0.4)' }}
        />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ textAlign: 'center', backgroundColor: bg + 'cc', padding: '24px 32px', border: `1px solid ${gold}44` }}>
            <p style={{ color: gold, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '8px' }}>AURUM BOUTIQUE</p>
            <p style={{ color: cream, fontSize: '16px', fontFamily: 'Georgia, serif', margin: 0 }}>
              Calle Serrano, 42 · Madrid
            </p>
            <p style={{ color: cream + '66', fontSize: '12px', marginTop: '8px', letterSpacing: '0.1em' }}>
              Metro: Serrano (Línea 4)
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

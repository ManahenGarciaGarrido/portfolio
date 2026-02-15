'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#05001a';
const accent = '#b44ef0';
const text = '#e8d5ff';
const textMuted = '#9a7fc0';
const cardBg = '#0c0526';
const cardBorder = '#1e0a4a';

const horarios = ['20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00', '00:30', '1:00', '1:30', '2:00', '2:30', '3:00'];
const ocasiones = ['Cumpleaños', 'Aniversario', 'Despedida de soltero/a', 'Noche de negocios', 'Primera cita', 'Celebración', 'Otra ocasión'];

export default function CocktailBarReservarPage() {
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '',
    fecha: '', hora: '21:00', personas: '2',
    ocasion: '', peticion: '', privado: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: '-40px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ background: bg, color: text, minHeight: '100vh' }}>
      {/* HEADER */}
      <section style={{ padding: '80px 0 56px', textAlign: 'center', borderBottom: `1px solid ${accent}22` }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: accent, fontSize: '12px', letterSpacing: '0.3em', marginBottom: '16px', fontWeight: 600 }}>
            NOIR BAR
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 900, color: text, letterSpacing: '0.05em', marginBottom: '16px', textShadow: `0 0 40px ${accent}44` }}
          >
            RESERVA TU MESA
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
            style={{ width: '60px', height: '2px', background: accent, margin: '0 auto 20px', boxShadow: `0 0 10px ${accent}` }}
          />
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ color: textMuted, fontSize: '15px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}
          >
            Asegura tu experiencia en Noir Bar. Las reservas se confirman por WhatsApp en menos de 2 horas.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: '80px 0' }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '64px', alignItems: 'flex-start' }}>
            {/* FORM */}
            <div>
              <div style={{ background: cardBg, border: `1px solid ${cardBorder}`, padding: '40px' }}>
                <h2 style={{ color: text, fontSize: '20px', fontWeight: 700, marginBottom: '32px', letterSpacing: '0.05em' }}>Datos de la Reserva</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '40px 20px' }}
                  >
                    <div style={{ fontSize: '48px', marginBottom: '20px' }}>✓</div>
                    <h3 style={{ color: accent, fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>¡Solicitud Enviada!</h3>
                    <p style={{ color: textMuted, fontSize: '14px', lineHeight: 1.7 }}>
                      Hemos recibido tu solicitud de reserva. Te confirmaremos por WhatsApp en menos de 2 horas con todos los detalles.
                    </p>
                    <p style={{ color: accent, fontSize: '13px', marginTop: '16px', fontWeight: 600 }}>
                      Mira tu WhatsApp: +34 600 xxx xxx
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                          <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>NOMBRE *</label>
                          <input
                            required type="text" placeholder="Tu nombre"
                            value={form.nombre}
                            onChange={(e) => setForm(p => ({ ...p, nombre: e.target.value }))}
                            style={{ width: '100%', padding: '11px 14px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>TELÉFONO *</label>
                          <input
                            required type="tel" placeholder="+34 600 000 000"
                            value={form.telefono}
                            onChange={(e) => setForm(p => ({ ...p, telefono: e.target.value }))}
                            style={{ width: '100%', padding: '11px 14px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>EMAIL</label>
                        <input
                          type="email" placeholder="tu@email.com"
                          value={form.email}
                          onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                          style={{ width: '100%', padding: '11px 14px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>FECHA *</label>
                          <input
                            required type="date"
                            value={form.fecha}
                            onChange={(e) => setForm(p => ({ ...p, fecha: e.target.value }))}
                            style={{ width: '100%', padding: '11px 14px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>HORA *</label>
                          <select
                            required value={form.hora}
                            onChange={(e) => setForm(p => ({ ...p, hora: e.target.value }))}
                            style={{ width: '100%', padding: '11px 14px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '14px', outline: 'none' }}
                          >
                            {horarios.map(h => <option key={h}>{h}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>PERSONAS *</label>
                          <select
                            required value={form.personas}
                            onChange={(e) => setForm(p => ({ ...p, personas: e.target.value }))}
                            style={{ width: '100%', padding: '11px 14px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '14px', outline: 'none' }}
                          >
                            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n}>{n}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>OCASIÓN</label>
                        <select
                          value={form.ocasion}
                          onChange={(e) => setForm(p => ({ ...p, ocasion: e.target.value }))}
                          style={{ width: '100%', padding: '11px 14px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '14px', outline: 'none' }}
                        >
                          <option value="">Seleccionar ocasión</option>
                          {ocasiones.map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>PETICIÓN ESPECIAL</label>
                        <textarea
                          placeholder="Menciona cualquier petición: cumpleaños, zona preferida, intolerancias..."
                          value={form.peticion}
                          onChange={(e) => setForm(p => ({ ...p, peticion: e.target.value }))}
                          rows={3}
                          style={{ width: '100%', padding: '11px 14px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                        />
                      </div>
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={form.privado}
                          onChange={(e) => setForm(p => ({ ...p, privado: e.target.checked }))}
                          style={{ marginTop: '2px', accentColor: accent }}
                        />
                        <span style={{ color: textMuted, fontSize: '13px', lineHeight: 1.5 }}>
                          Me interesa información sobre reservas privadas del espacio completo para eventos.
                        </span>
                      </label>
                      <button
                        type="submit"
                        style={{
                          background: accent, color: '#fff',
                          padding: '16px', fontSize: '14px', fontWeight: 700,
                          letterSpacing: '0.12em', border: 'none', cursor: 'pointer',
                          boxShadow: `0 0 30px ${accent}44`,
                        }}
                      >
                        SOLICITAR RESERVA
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* INFO */}
            <div ref={infoRef} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                style={{ background: cardBg, border: `1px solid ${cardBorder}`, padding: '28px' }}
              >
                <h3 style={{ color: accent, fontSize: '14px', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '16px' }}>CONDICIONES DE RESERVA</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Mesa mínima 2 personas',
                    'Consumición mínima 20€ por persona',
                    'Mesa reservada durante 2.5 horas',
                    'Confirmación por WhatsApp en 2h',
                    'Cancelación gratuita hasta 4h antes',
                  ].map((item) => (
                    <li key={item} style={{ color: textMuted, fontSize: '13px', padding: '8px 0', borderBottom: `1px solid ${cardBorder}`, display: 'flex', gap: '10px' }}>
                      <span style={{ color: accent }}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                style={{ background: cardBg, border: `1px solid ${cardBorder}`, padding: '28px' }}
              >
                <h3 style={{ color: accent, fontSize: '14px', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '16px' }}>HORARIO</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    ['Lunes — Miércoles', '20:00 — 2:00'],
                    ['Jueves', '20:00 — 3:00'],
                    ['Viernes — Sábado', '20:00 — 4:00'],
                    ['Domingo', '20:00 — 1:00'],
                  ].map(([day, time]) => (
                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${cardBorder}` }}>
                      <span style={{ color: textMuted, fontSize: '13px' }}>{day}</span>
                      <span style={{ color: text, fontSize: '13px', fontWeight: 600 }}>{time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                style={{ background: `${accent}11`, border: `1px solid ${accent}44`, padding: '28px' }}
              >
                <h3 style={{ color: accent, fontSize: '14px', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '12px' }}>RESERVAS PRIVADAS</h3>
                <p style={{ color: textMuted, fontSize: '13px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Para eventos privados con espacio completo del bar, DJ privado o celebraciones especiales, contáctanos directamente.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link
                    href="/demos/cocktailbar/eventos"
                    style={{ color: accent, fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textDecoration: 'none', borderBottom: `1px solid ${accent}` }}
                  >
                    VER EVENTOS PRIVADOS →
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}
              >
                <img
                  src="https://picsum.photos/seed/bar-reserve/600/340"
                  alt="Zona de reservas Noir Bar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(5,0,26,0.7), transparent)` }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px' }}>
                  <p style={{ color: text, fontSize: '13px', fontStyle: 'italic' }}>Zona VIP reservada — Noir Bar</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

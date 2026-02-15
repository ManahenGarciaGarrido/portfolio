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

const socialLinks = [
  { name: 'Instagram', handle: '@noirbar.madrid', url: '#', icon: '📸', desc: 'Detrás de las cámaras, eventos y cócteles del día' },
  { name: 'TikTok', handle: '@noirbar', url: '#', icon: '🎵', desc: 'Videos de nuestros bartenders y noches especiales' },
  { name: 'Twitter/X', handle: '@NoirBarMadrid', url: '#', icon: '🐦', desc: 'Anuncios de eventos, reservas y novedades' },
];

export default function ContactoPage() {
  const [pressForm, setPressForm] = useState({ nombre: '', medio: '', email: '', asunto: '', mensaje: '' });
  const [eventForm, setEventForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '' });
  const [pressSubmitted, setPressSubmitted] = useState(false);
  const [eventSubmitted, setEventSubmitted] = useState(false);

  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true, margin: '-60px' });
  const pressRef = useRef(null);
  const pressInView = useInView(pressRef, { once: true, margin: '-60px' });

  return (
    <main style={{ background: bg, color: text, minHeight: '100vh' }}>
      {/* HEADER */}
      <section style={{ padding: '80px 0 56px', textAlign: 'center', borderBottom: `1px solid ${accent}22` }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: accent, fontSize: '12px', letterSpacing: '0.3em', marginBottom: '16px', fontWeight: 600 }}>
            NOIR BAR — MADRID
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 900, color: text, letterSpacing: '0.05em', marginBottom: '16px', textShadow: `0 0 40px ${accent}44` }}
          >
            CONTACTO
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
            style={{ width: '60px', height: '2px', background: accent, margin: '0 auto 20px', boxShadow: `0 0 10px ${accent}` }}
          />
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section style={{ padding: '60px 0' }}>
        <div className="r-container">
          <div className="r-grid-3" style={{ gap: '16px' }}>
            {[
              {
                icon: '📍', title: 'Dirección',
                lines: ['Calle Fuencarral 88', '28004 Madrid', 'Barrio de Chueca'],
                action: null, actionLabel: null,
              },
              {
                icon: '📞', title: 'Teléfono & WhatsApp',
                lines: ['+34 91 234 5678', 'Lunes a Domingo', '18:00 — 5:00'],
                action: 'tel:+34912345678', actionLabel: 'Llamar ahora',
              },
              {
                icon: '✉️', title: 'Email',
                lines: ['hola@noirbar.es', 'reservas@noirbar.es', 'prensa@noirbar.es'],
                action: 'mailto:hola@noirbar.es', actionLabel: 'Enviar email',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{ background: cardBg, border: `1px solid ${cardBorder}`, padding: '32px 28px' }}
              >
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{card.icon}</div>
                <h3 style={{ color: accent, fontSize: '14px', letterSpacing: '0.12em', fontWeight: 700, marginBottom: '14px' }}>{card.title.toUpperCase()}</h3>
                {card.lines.map((line) => (
                  <div key={line} style={{ color: textMuted, fontSize: '14px', lineHeight: 2 }}>{line}</div>
                ))}
                {card.action && (
                  <a
                    href={card.action}
                    style={{
                      display: 'inline-block', marginTop: '16px',
                      color: accent, fontSize: '12px', fontWeight: 700,
                      letterSpacing: '0.1em', textDecoration: 'none',
                      borderBottom: `1px solid ${accent}`,
                    }}
                  >
                    {card.actionLabel} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP + HOURS */}
      <section ref={mapRef} style={{ padding: '60px 0', background: cardBg }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '48px', alignItems: 'stretch' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={mapInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '20px', fontWeight: 600 }}>CÓMO LLEGAR</div>
              <div style={{
                background: bg, border: `1px solid ${cardBorder}`,
                height: '300px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: '20px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 50% 50%, ${accent}08 0%, transparent 70%)`,
                }} />
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>🗺️</div>
                  <div style={{ color: text, fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>Calle Fuencarral 88</div>
                  <div style={{ color: textMuted, fontSize: '13px' }}>28004 Madrid — Chueca</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { modo: '🚇 Metro', detalle: 'Chueca (Línea 5) — 2 min a pie' },
                  { modo: '🚌 Bus', detalle: 'Líneas 3, 40, 149 — Parada Fuencarral' },
                  { modo: '🚗 Coche', detalle: 'Parking: C/ Hortaleza 70 (300m)' },
                  { modo: '🚲 Bici', detalle: 'BiciMAD disponible a 50m' },
                ].map((item) => (
                  <div key={item.modo} style={{ display: 'flex', gap: '12px', padding: '10px 0', borderBottom: `1px solid ${cardBorder}` }}>
                    <span style={{ fontSize: '16px', flexShrink: 0 }}>{item.modo}</span>
                    <span style={{ color: textMuted, fontSize: '13px' }}>{item.detalle}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={mapInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '20px', fontWeight: 600 }}>HORARIO</div>
              <div style={{ background: bg, border: `1px solid ${cardBorder}`, padding: '28px', marginBottom: '24px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      ['Lunes', '20:00 — 2:00'],
                      ['Martes', '20:00 — 2:00'],
                      ['Miércoles', '20:00 — 2:00'],
                      ['Jueves', '20:00 — 3:00'],
                      ['Viernes', '20:00 — 4:00'],
                      ['Sábado', '20:00 — 4:00'],
                      ['Domingo', '20:00 — 1:00'],
                    ].map(([day, hours], i) => (
                      <tr key={day} style={{ borderBottom: `1px solid ${cardBorder}` }}>
                        <td style={{ padding: '11px 0', color: i >= 4 ? accent : textMuted, fontSize: '14px', fontWeight: i >= 4 ? 600 : 400 }}>{day}</td>
                        <td style={{ padding: '11px 0', color: text, fontSize: '14px', fontWeight: 600, textAlign: 'right' }}>{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ background: `${accent}11`, border: `1px solid ${accent}33`, padding: '20px' }}>
                <h4 style={{ color: accent, fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '10px' }}>NOCHES ESPECIALES</h4>
                <p style={{ color: textMuted, fontSize: '13px', lineHeight: 1.7 }}>
                  Los viernes y sábados contamos con DJ en directo desde las 23:00. Consulta nuestra programación en Instagram para conocer los artistas de cada semana.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REDES SOCIALES */}
      <section style={{ padding: '60px 0', background: bg }}>
        <div className="r-container">
          <div style={{ marginBottom: '40px' }}>
            <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '10px', fontWeight: 600 }}>SÍGUENOS</div>
            <h2 style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 700, color: text }}>Redes Sociales</h2>
          </div>
          <div className="r-grid-3" style={{ gap: '16px' }}>
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: cardBg, border: `1px solid ${cardBorder}`,
                  padding: '28px', textDecoration: 'none',
                  display: 'block', transition: 'border-color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = accent)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = cardBorder)}
              >
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{s.icon}</div>
                <h3 style={{ color: text, fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>{s.name}</h3>
                <div style={{ color: accent, fontSize: '13px', fontWeight: 600, marginBottom: '10px' }}>{s.handle}</div>
                <p style={{ color: textMuted, fontSize: '12px', lineHeight: 1.6 }}>{s.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS INQUIRIES */}
      <section ref={pressRef} style={{ padding: '60px 0', background: cardBg }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '64px', alignItems: 'flex-start' }}>
            <div>
              <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '14px', fontWeight: 600 }}>PRENSA</div>
              <h2 style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 700, color: text, marginBottom: '20px' }}>
                Contacto para Medios
              </h2>
              <p style={{ color: textMuted, fontSize: '14px', lineHeight: 1.8, marginBottom: '20px' }}>
                Para solicitudes de prensa, entrevistas, colaboraciones editoriales o fotografías para publicación, contacta directamente con nuestro departamento de comunicación.
              </p>
              <p style={{ color: textMuted, fontSize: '14px', lineHeight: 1.8, marginBottom: '28px' }}>
                Disponemos de kit de prensa completo con imágenes en alta resolución, notas de prensa y datos del bar disponibles para medios acreditados.
              </p>
              <div style={{ padding: '20px', background: bg, border: `1px solid ${cardBorder}` }}>
                <div style={{ color: accent, fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>Responsable de Comunicación</div>
                <div style={{ color: text, fontSize: '14px', marginBottom: '4px' }}>Laura Sánchez Vega</div>
                <div style={{ color: textMuted, fontSize: '13px' }}>prensa@noirbar.es</div>
                <div style={{ color: textMuted, fontSize: '13px' }}>+34 91 234 5679</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={pressInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div style={{ background: bg, border: `1px solid ${cardBorder}`, padding: '32px' }}>
                <h3 style={{ color: text, fontSize: '16px', fontWeight: 700, marginBottom: '24px', letterSpacing: '0.05em' }}>
                  Formulario de Prensa
                </h3>
                {pressSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <div style={{ color: accent, fontSize: '32px', marginBottom: '12px' }}>✓</div>
                    <p style={{ color: textMuted, fontSize: '14px' }}>Solicitud recibida. Te contactaremos en menos de 48 horas.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setPressSubmitted(true); }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {[
                        { key: 'nombre', label: 'NOMBRE Y APELLIDOS', placeholder: 'Tu nombre', type: 'text' },
                        { key: 'medio', label: 'MEDIO / PUBLICACIÓN', placeholder: 'Nombre del medio', type: 'text' },
                        { key: 'email', label: 'EMAIL PROFESIONAL', placeholder: 'tu@medio.es', type: 'email' },
                        { key: 'asunto', label: 'ASUNTO', placeholder: 'Ej: Solicitud entrevista para reportaje', type: 'text' },
                      ].map((f) => (
                        <div key={f.key}>
                          <label style={{ display: 'block', color: textMuted, fontSize: '10px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>{f.label}</label>
                          <input
                            required type={f.type} placeholder={f.placeholder}
                            value={pressForm[f.key as keyof typeof pressForm]}
                            onChange={(e) => setPressForm(p => ({ ...p, [f.key]: e.target.value }))}
                            style={{ width: '100%', padding: '10px 13px', background: cardBg, border: `1px solid ${cardBorder}`, color: text, fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      ))}
                      <div>
                        <label style={{ display: 'block', color: textMuted, fontSize: '10px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>MENSAJE</label>
                        <textarea
                          placeholder="Describe tu solicitud con el máximo detalle posible..."
                          value={pressForm.mensaje}
                          onChange={(e) => setPressForm(p => ({ ...p, mensaje: e.target.value }))}
                          rows={3}
                          style={{ width: '100%', padding: '10px 13px', background: cardBg, border: `1px solid ${cardBorder}`, color: text, fontSize: '13px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                        />
                      </div>
                      <button
                        type="submit"
                        style={{ background: accent, color: '#fff', padding: '13px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', border: 'none', cursor: 'pointer', boxShadow: `0 0 20px ${accent}44` }}
                      >
                        ENVIAR SOLICITUD
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EVENTOS PRIVADOS CONTACT */}
      <section style={{ padding: '60px 0', background: bg }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: cardBg,
              border: `2px solid ${accent}44`,
              padding: 'clamp(32px, 5vw, 56px)',
              display: 'flex', flexDirection: 'column' as const, gap: '24px',
              boxShadow: `0 0 60px ${accent}11`,
            }}
          >
            <div className="r-two-col" style={{ gap: '48px', alignItems: 'center' }}>
              <div>
                <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '14px', fontWeight: 600 }}>EVENTOS PRIVADOS</div>
                <h2 style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 700, color: text, marginBottom: '16px' }}>
                  Para reservas privadas y eventos
                </h2>
                <p style={{ color: textMuted, fontSize: '14px', lineHeight: 1.8, marginBottom: '20px' }}>
                  ¿Quieres celebrar algo especial en Noir Bar con el bar exclusivamente para ti? Cumpleaños, despedidas, eventos corporativos, bodas o presentaciones de producto.
                </p>
                <p style={{ color: textMuted, fontSize: '14px', lineHeight: 1.8 }}>
                  Nuestro equipo de eventos te ayudará a crear la noche perfecta. Desde 15 hasta 120 personas. Paquetes personalizados sin límite.
                </p>
              </div>
              <div>
                {eventSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '32px' }}>
                    <div style={{ color: accent, fontSize: '40px', marginBottom: '12px' }}>✓</div>
                    <p style={{ color: text, fontSize: '15px', marginBottom: '8px', fontWeight: 700 }}>¡Mensaje recibido!</p>
                    <p style={{ color: textMuted, fontSize: '13px' }}>Te contactamos en menos de 24 horas.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setEventSubmitted(true); }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[
                        { key: 'nombre', label: 'NOMBRE', placeholder: 'Tu nombre', type: 'text' },
                        { key: 'empresa', label: 'EMPRESA (OPCIONAL)', placeholder: 'Nombre de empresa', type: 'text' },
                        { key: 'email', label: 'EMAIL', placeholder: 'tu@email.com', type: 'email' },
                        { key: 'telefono', label: 'TELÉFONO', placeholder: '+34 600 000 000', type: 'tel' },
                      ].map((f) => (
                        <div key={f.key}>
                          <label style={{ display: 'block', color: textMuted, fontSize: '10px', letterSpacing: '0.12em', marginBottom: '6px', fontWeight: 600 }}>{f.label}</label>
                          <input
                            type={f.type} placeholder={f.placeholder}
                            value={eventForm[f.key as keyof typeof eventForm]}
                            onChange={(e) => setEventForm(p => ({ ...p, [f.key]: e.target.value }))}
                            style={{ width: '100%', padding: '10px 13px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      ))}
                      <div>
                        <label style={{ display: 'block', color: textMuted, fontSize: '10px', letterSpacing: '0.12em', marginBottom: '6px', fontWeight: 600 }}>CUÉNTANOS TU EVENTO</label>
                        <textarea
                          placeholder="Tipo de evento, fecha aproximada, número de personas, presupuesto..."
                          value={eventForm.mensaje}
                          onChange={(e) => setEventForm(p => ({ ...p, mensaje: e.target.value }))}
                          rows={3}
                          style={{ width: '100%', padding: '10px 13px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '13px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                        />
                      </div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                          type="submit"
                          style={{ flex: 1, background: accent, color: '#fff', padding: '13px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', border: 'none', cursor: 'pointer', boxShadow: `0 0 20px ${accent}44` }}
                        >
                          ENVIAR
                        </button>
                        <Link
                          href="/demos/cocktailbar/eventos"
                          style={{
                            flex: 1, border: `1px solid ${accent}`, color: accent,
                            padding: '13px', fontSize: '13px', fontWeight: 700,
                            letterSpacing: '0.08em', textDecoration: 'none',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}
                        >
                          VER EVENTOS
                        </Link>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer style={{ padding: '32px 0', borderTop: `1px solid ${cardBorder}`, background: '#020008' }}>
        <div className="r-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <p style={{ color: textMuted, fontSize: '12px' }}>© 2024 Noir Bar Madrid. Prohibida la venta de alcohol a menores de 18 años.</p>
            <p style={{ color: textMuted + '66', fontSize: '11px' }}>Demo creado por Manahen — manahen.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#0a0805';
const accent = '#c8a96e';
const text = '#f5ece0';
const textMuted = '#b8a898';
const cardBg = '#130f0a';

const roomTypes = [
  { value: 'deluxe', label: 'Habitación Deluxe — Desde 320€/noche' },
  { value: 'junior', label: 'Suite Junior — Desde 480€/noche' },
  { value: 'superior', label: 'Suite Superior — Desde 680€/noche' },
  { value: 'atico', label: 'Suite Ático — Desde 780€/noche' },
  { value: 'villa', label: 'Villa Jardín — Desde 1.200€/noche' },
  { value: 'presidencial', label: 'Suite Presidencial — Desde 2.500€/noche' },
];

const includedItems = [
  { icon: '☕', title: 'Desayuno Premium', desc: 'Desayuno servido en habitación o en El Naranjo. Menú a la carta incluido.' },
  { icon: '🚗', title: 'Transfer Aeropuerto', desc: 'Recogida y vuelta en vehículo privado de lujo. Reserva con anticipación.' },
  { icon: '🧖', title: 'Acceso Spa', desc: 'Acceso ilimitado al spa y piscina durante toda la estancia.' },
  { icon: '🍾', title: 'Bienvenida de Lujo', desc: 'Botella de cava y fruta fresca de temporada en habitación al llegar.' },
  { icon: '🎭', title: 'Concierge Personal', desc: 'Tu concierge personal disponible las 24h para cualquier petición.' },
  { icon: '🅿️', title: 'Parking Privado', desc: 'Plaza de parking cubierta y vigilada incluida en el precio.' },
];

export default function HotelReservarPage() {
  const [form, setForm] = useState({
    nombre: '', apellidos: '', email: '', telefono: '',
    checkin: '', checkout: '', adultos: '2', ninos: '0',
    tipoHabitacion: '', peticiones: '', promo: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeGuarantee, setActiveGuarantee] = useState(0);

  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: '-40px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const guarantees = [
    { title: 'Mejor Precio Garantizado', desc: 'Si encuentras el mismo alojamiento a menor precio en otra web, igualamos el precio y te ofrecemos un 10% de descuento adicional.' },
    { title: 'Cancelación Flexible', desc: 'Cancela gratuitamente hasta 72 horas antes de tu llegada. Sin preguntas, sin penalizaciones.' },
    { title: 'Pago Seguro', desc: 'Tus datos bancarios están protegidos con cifrado SSL de 256 bits. Solo realizamos el cargo el día del check-in.' },
  ];

  return (
    <main style={{ background: bg, color: text, minHeight: '100vh' }}>
      {/* HEADER */}
      <section style={{ padding: '80px 0 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://picsum.photos/seed/hotel-pool/1200/300"
            alt="Palacio Verde piscina"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.12 }}
          />
        </div>
        <div className="r-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: accent, fontSize: '12px', letterSpacing: '0.25em', marginBottom: '16px', fontWeight: 600 }}>
            PALACIO VERDE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px, 6vw, 56px)', color: text, fontWeight: 400, letterSpacing: '0.08em', marginBottom: '16px' }}
          >
            RESERVAR TU ESTANCIA
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
            style={{ width: '80px', height: '2px', background: accent, margin: '0 auto 20px' }}
          />
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ color: textMuted, fontSize: '16px', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}
          >
            Reserva directamente con nosotros y obtén el mejor precio garantizado, más ventajas exclusivas que no encontrarás en ninguna otra plataforma.
          </motion.p>
        </div>
      </section>

      {/* BEST PRICE BADGE */}
      <section style={{ padding: '0 0 60px' }}>
        <div className="r-container">
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['✓ Mejor precio garantizado', '✓ Sin comisiones intermediarios', '✓ Check-in express', '✓ Upgrades sujetos a disponibilidad'].map((badge) => (
              <span key={badge} style={{ background: `${accent}18`, border: `1px solid ${accent}44`, color: accent, fontSize: '12px', fontWeight: 600, padding: '8px 16px', letterSpacing: '0.06em' }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '56px', alignItems: 'flex-start' }}>
            {/* LEFT: IMAGE + INCLUDED */}
            <div ref={infoRef}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                style={{ position: 'relative', overflow: 'hidden', aspectRatio: '7/6', marginBottom: '40px' }}
              >
                <img
                  src="https://picsum.photos/seed/hotel-pool/700/600"
                  alt="Palacio Verde piscina y jardín"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(10,8,5,0.9), transparent)',
                  padding: '32px 24px 24px',
                }}>
                  <div style={{ color: accent, fontSize: '11px', letterSpacing: '0.15em', fontWeight: 600, marginBottom: '4px' }}>PALACIO VERDE SEVILLA</div>
                  <div style={{ color: text, fontFamily: 'Georgia,serif', fontSize: '18px' }}>Piscina exterior y jardín histórico</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <h3 style={{ color: accent, fontFamily: 'Georgia,serif', fontSize: '20px', fontWeight: 400, marginBottom: '24px', letterSpacing: '0.05em' }}>
                  Todo incluido en tu reserva
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  {includedItems.map((item) => (
                    <div key={item.title} style={{ background: cardBg, padding: '16px', border: `1px solid ${accent}22` }}>
                      <div style={{ fontSize: '20px', marginBottom: '8px' }}>{item.icon}</div>
                      <div style={{ color: text, fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>{item.title}</div>
                      <div style={{ color: textMuted, fontSize: '11px', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* GUARANTEES */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={infoInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                style={{ marginTop: '32px', border: `1px solid ${accent}33`, background: cardBg }}
              >
                <div style={{ display: 'flex', borderBottom: `1px solid ${accent}22` }}>
                  {guarantees.map((g, i) => (
                    <button
                      key={g.title}
                      onClick={() => setActiveGuarantee(i)}
                      style={{
                        flex: 1, background: 'transparent',
                        border: 'none', borderBottom: activeGuarantee === i ? `2px solid ${accent}` : '2px solid transparent',
                        color: activeGuarantee === i ? accent : textMuted,
                        padding: '12px 8px', fontSize: '10px', fontWeight: 700,
                        letterSpacing: '0.06em', cursor: 'pointer',
                        transition: 'all 0.2s', marginBottom: '-1px',
                        textAlign: 'center',
                      }}
                    >
                      {g.title.split(' ')[0].toUpperCase()}
                    </button>
                  ))}
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ color: accent, fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>{guarantees[activeGuarantee].title}</h4>
                  <p style={{ color: textMuted, fontSize: '13px', lineHeight: 1.6 }}>{guarantees[activeGuarantee].desc}</p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: RESERVATION FORM */}
            <div>
              <div style={{ background: cardBg, border: `1px solid ${accent}33`, padding: '40px' }}>
                <h2 style={{ fontFamily: 'Georgia,serif', color: text, fontSize: '22px', fontWeight: 400, marginBottom: '32px', letterSpacing: '0.05em' }}>
                  Formulario de Reserva
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '48px 20px' }}
                  >
                    <div style={{ color: accent, fontSize: '56px', fontFamily: 'Georgia,serif', marginBottom: '16px' }}>✦</div>
                    <h3 style={{ color: accent, fontFamily: 'Georgia,serif', fontSize: '22px', fontWeight: 400, marginBottom: '12px' }}>
                      Solicitud Recibida
                    </h3>
                    <p style={{ color: textMuted, fontSize: '14px', lineHeight: 1.8 }}>
                      Hemos recibido tu solicitud de reserva. Nuestro equipo se pondrá en contacto contigo en menos de 2 horas para confirmar la disponibilidad y los detalles de pago.
                    </p>
                    <div style={{ marginTop: '28px', padding: '16px', background: bg, border: `1px solid ${accent}33` }}>
                      <p style={{ color: accent, fontSize: '13px', fontWeight: 600 }}>📞 ¿Prefieres llamarnos? +34 955 123 456</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>NOMBRE *</label>
                          <input required type="text" placeholder="Nombre"
                            value={form.nombre} onChange={(e) => setForm(p => ({ ...p, nombre: e.target.value }))}
                            style={{ width: '100%', padding: '11px 13px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>APELLIDOS *</label>
                          <input required type="text" placeholder="Apellidos"
                            value={form.apellidos} onChange={(e) => setForm(p => ({ ...p, apellidos: e.target.value }))}
                            style={{ width: '100%', padding: '11px 13px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>EMAIL *</label>
                        <input required type="email" placeholder="email@ejemplo.com"
                          value={form.email} onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                          style={{ width: '100%', padding: '11px 13px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>TELÉFONO</label>
                        <input type="tel" placeholder="+34 600 000 000"
                          value={form.telefono} onChange={(e) => setForm(p => ({ ...p, telefono: e.target.value }))}
                          style={{ width: '100%', padding: '11px 13px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>FECHA ENTRADA *</label>
                          <input required type="date"
                            value={form.checkin} onChange={(e) => setForm(p => ({ ...p, checkin: e.target.value }))}
                            style={{ width: '100%', padding: '11px 13px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>FECHA SALIDA *</label>
                          <input required type="date"
                            value={form.checkout} onChange={(e) => setForm(p => ({ ...p, checkout: e.target.value }))}
                            style={{ width: '100%', padding: '11px 13px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>ADULTOS</label>
                          <select value={form.adultos} onChange={(e) => setForm(p => ({ ...p, adultos: e.target.value }))}
                            style={{ width: '100%', padding: '11px 13px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none' }}
                          >
                            {[1, 2, 3, 4].map(n => <option key={n}>{n}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>NIÑOS</label>
                          <select value={form.ninos} onChange={(e) => setForm(p => ({ ...p, ninos: e.target.value }))}
                            style={{ width: '100%', padding: '11px 13px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none' }}
                          >
                            {[0, 1, 2, 3].map(n => <option key={n}>{n}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>TIPO DE HABITACIÓN</label>
                        <select value={form.tipoHabitacion} onChange={(e) => setForm(p => ({ ...p, tipoHabitacion: e.target.value }))}
                          style={{ width: '100%', padding: '11px 13px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none' }}
                        >
                          <option value="">Seleccionar (opcional)</option>
                          {roomTypes.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>CÓDIGO PROMOCIONAL</label>
                        <input type="text" placeholder="Introduce tu código si tienes"
                          value={form.promo} onChange={(e) => setForm(p => ({ ...p, promo: e.target.value }))}
                          style={{ width: '100%', padding: '11px 13px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '7px', fontWeight: 600 }}>PETICIONES ESPECIALES</label>
                        <textarea
                          placeholder="Aniversario, luna de miel, alergias, hora de llegada estimada, decoración especial..."
                          value={form.peticiones} onChange={(e) => setForm(p => ({ ...p, peticiones: e.target.value }))}
                          rows={4}
                          style={{ width: '100%', padding: '11px 13px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                        />
                      </div>
                      <button
                        type="submit"
                        style={{
                          background: accent, color: bg,
                          padding: '16px', fontSize: '14px', fontWeight: 700,
                          letterSpacing: '0.12em', border: 'none', cursor: 'pointer',
                          fontFamily: 'inherit',
                        }}
                      >
                        SOLICITAR RESERVA
                      </button>
                      <p style={{ color: textMuted, fontSize: '11px', textAlign: 'center', lineHeight: 1.6 }}>
                        Al enviar este formulario aceptas nuestra política de privacidad. No realizamos ningún cargo hasta confirmar la disponibilidad.
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* CANCELLATION POLICY */}
              <div style={{ marginTop: '20px', padding: '20px 24px', background: cardBg, border: `1px solid #2a1f15` }}>
                <h4 style={{ color: accent, fontSize: '13px', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '12px' }}>POLÍTICA DE CANCELACIÓN</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Cancelación gratuita hasta 72h antes del check-in',
                    'Entre 72h y 24h: cargo de 1 noche',
                    'Menos de 24h o no-show: cargo de 100%',
                    'Tarifas no reembolsables: sin devolución en ningún caso',
                  ].map((item) => (
                    <li key={item} style={{ color: textMuted, fontSize: '12px', padding: '6px 0', display: 'flex', gap: '10px', borderBottom: `1px solid ${accent}10` }}>
                      <span style={{ color: accent, flexShrink: 0 }}>—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section style={{ padding: '60px 24px', textAlign: 'center', background: cardBg, borderTop: `1px solid ${accent}22` }}>
        <h3 style={{ fontFamily: 'Georgia,serif', color: text, fontSize: '22px', fontWeight: 400, marginBottom: '12px' }}>
          ¿Prefieres reservar por teléfono?
        </h3>
        <p style={{ color: textMuted, fontSize: '14px', marginBottom: '24px' }}>
          Nuestro equipo de reservas estará encantado de atenderte personalmente.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+34955123456" style={{ color: accent, fontSize: '18px', fontWeight: 700, textDecoration: 'none', fontFamily: 'Georgia,serif' }}>
            +34 955 123 456
          </a>
          <span style={{ color: textMuted }}>|</span>
          <a href="mailto:reservas@palacioverde.es" style={{ color: textMuted, fontSize: '15px', textDecoration: 'none' }}>
            reservas@palacioverde.es
          </a>
        </div>
      </section>
    </main>
  );
}

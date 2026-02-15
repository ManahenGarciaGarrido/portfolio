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

const eventTypes = [
  {
    id: 1, seed: 'event-type1', icon: '🎂',
    name: 'Cumpleaños Exclusivos',
    desc: 'Haz de tu cumpleaños una noche que nadie olvidará. Reserva el bar privado para ti y hasta 40 invitados con cócteles personalizados con tu nombre.',
    includes: ['Sección VIP reservada', 'Cócteles personalizados', 'Pastel artístico incluido', 'Fotógrafo profesional 2h', 'Decoración temática'],
  },
  {
    id: 2, seed: 'event-type2', icon: '🥂',
    name: 'Despedidas de Soltera/o',
    desc: 'El ritual pre-boda que mereces. Una noche de cócteles, risas y recuerdos en el ambiente más exclusivo de Madrid.',
    includes: ['Ruta de cócteles especial', 'Sash & tiara incluidos', 'Pack fotografías', 'Juegos exclusivos del bar', 'Botella de champagne'],
  },
  {
    id: 3, seed: 'event-type3', icon: '💼',
    name: 'Eventos Corporativos',
    desc: 'Reuniones, lanzamientos de producto, team building o celebraciones de empresa. Impresiona a tus clientes y equipo en un entorno único.',
    includes: ['AV profesional disponible', 'Menú corporativo a medida', 'Branding del evento', 'Servicio de camareros dedicado', 'Factura corporativa'],
  },
  {
    id: 4, seed: 'event-type4', icon: '💍',
    name: 'Celebraciones de Boda',
    desc: 'Cocktail party pre o post boda, afterparty o celebración íntima de boda civil. Creamos el ambiente perfecto para el día más especial.',
    includes: ['Barra libre premium 4h', 'Cóctel de bienvenida', 'Decoración floral', 'Servicio de hostess', 'Zona foto personalizada'],
  },
];

const pastEvents = [
  { id: 1, seed: 'past-event1', caption: 'Cumpleaños Privado — Marzo 2024' },
  { id: 2, seed: 'past-event2', caption: 'Lanzamiento Perfume Chanel — Abril 2024' },
  { id: 3, seed: 'past-event3', caption: 'Afterparty Fashion Week — Febrero 2024' },
  { id: 4, seed: 'past-event4', caption: 'Cena Corporativa BMW — Mayo 2024' },
  { id: 5, seed: 'past-event5', caption: 'Despedida de Soltera VIP — Junio 2024' },
  { id: 6, seed: 'past-event6', caption: 'DJ Night Privado — Julio 2024' },
  { id: 7, seed: 'past-event7', caption: 'Boda Privada — Agosto 2024' },
  { id: 8, seed: 'past-event8', caption: 'Cata Privada Whisky — Septiembre 2024' },
];

const packages = [
  {
    name: 'Básico',
    price: '45€ /persona',
    minPersons: 'Mínimo 15 personas',
    color: `${accent}44`,
    borderColor: `${accent}66`,
    features: [
      'Bienvenida con cóctel',
      'Barra libre 3 horas (selección básica)',
      'Snacks de bienvenida',
      'Servicio de camareros',
      'Decoración estándar Noir Bar',
      'Música ambiente',
    ],
    notIncluded: ['Zona exclusiva', 'Fotógrafo', 'Cócteles personalizados'],
  },
  {
    name: 'Premium',
    price: '75€ /persona',
    minPersons: 'Mínimo 20 personas',
    color: accent,
    borderColor: accent,
    popular: true,
    features: [
      'Zona VIP reservada exclusivamente',
      'Barra libre 4 horas (selección completa)',
      'Menú de snacks gourmet',
      'Cóctel de autor personalizado',
      'Fotógrafo 3 horas incluido',
      'Decoración personalizada',
      'Música en directo (2h)',
      'Host personal dedicado',
    ],
    notIncluded: ['DJ profesional', 'Show en vivo'],
  },
  {
    name: 'VIP',
    price: 'Desde 3.500€',
    minPersons: 'Máximo 40 personas',
    color: '#ffd700',
    borderColor: '#ffd700',
    features: [
      'Bar completo exclusivo (todo el espacio)',
      'Barra libre ilimitada sin restricciones',
      'Menú cena de alta cocina completo',
      'Carta de cócteles de autor exclusiva',
      'DJ profesional toda la noche',
      'Fotógrafo y videógrafo completos',
      'Decoración de lujo personalizada total',
      'Seguridad privada incluida',
      'Prensa y RR.PP. bajo petición',
    ],
    notIncluded: [],
  },
];

function EventTypeCard({ e, delay }: { e: typeof eventTypes[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: cardBg,
        border: `1px solid ${hovered ? accent : cardBorder}`,
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: hovered ? `0 0 25px ${accent}22` : 'none',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
        <img
          src={`https://picsum.photos/seed/${e.seed}/600/400`}
          alt={e.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(5,0,26,0.8), transparent 50%)` }} />
        <div style={{ position: 'absolute', top: 16, left: 16, fontSize: '28px' }}>{e.icon}</div>
      </div>
      <div style={{ padding: '24px' }}>
        <h3 style={{ color: text, fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{e.name}</h3>
        <p style={{ color: textMuted, fontSize: '13px', lineHeight: 1.7, marginBottom: '20px' }}>{e.desc}</p>
        <div style={{ borderTop: `1px solid ${cardBorder}`, paddingTop: '16px' }}>
          <div style={{ color: accent, fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '10px' }}>INCLUYE:</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {e.includes.map((item) => (
              <li key={item} style={{ color: textMuted, fontSize: '12px', padding: '4px 0', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: accent, fontSize: '10px' }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventosPage() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', tipo: '', fecha: '', personas: '', mensaje: '' });
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' });

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
            style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 900, color: text, marginBottom: '16px', letterSpacing: '0.05em', textShadow: `0 0 40px ${accent}44` }}
          >
            EVENTOS PRIVADOS
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
            style={{ width: '60px', height: '2px', background: accent, margin: '0 auto 20px', boxShadow: `0 0 10px ${accent}` }}
          />
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ color: textMuted, fontSize: '16px', maxWidth: '580px', margin: '0 auto 32px', lineHeight: 1.7 }}
          >
            Convierte Noir Bar en el escenario exclusivo de tu celebración. Desde cumpleaños íntimos hasta grandes eventos corporativos.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            onClick={scrollToForm}
            style={{
              background: accent, color: '#fff',
              padding: '14px 40px', fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.12em', border: 'none', cursor: 'pointer',
              boxShadow: `0 0 30px ${accent}66`,
            }}
          >
            SOLICITAR PRESUPUESTO
          </motion.button>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section style={{ padding: '80px 0', background: bg }}>
        <div className="r-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 700, color: text, marginBottom: '12px' }}>¿Qué tipo de evento organizamos?</h2>
            <p style={{ color: textMuted, fontSize: '15px', maxWidth: '500px', margin: '0 auto' }}>Especialistas en eventos únicos desde 2019. Más de 400 eventos privados celebrados.</p>
          </div>
          <div className="r-grid-2" style={{ gap: '20px' }}>
            {eventTypes.map((e, i) => (
              <EventTypeCard key={e.id} e={e} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS GALLERY */}
      <section style={{ padding: '80px 0', background: cardBg }}>
        <div className="r-container">
          <div style={{ marginBottom: '40px' }}>
            <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '10px', fontWeight: 600 }}>GALERÍA</div>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 700, color: text }}>Eventos Anteriores</h2>
          </div>
          <div className="r-grid-4" style={{ gap: '8px' }}>
            {pastEvents.map((e, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-30px' });
              const [hovered, setHovered] = useState(false);
              return (
                <motion.div
                  key={e.id}
                  ref={ref}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer' }}
                >
                  <img
                    src={`https://picsum.photos/seed/${e.seed}/400/300`}
                    alt={e.caption}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      transform: hovered ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  {hovered && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(5,0,26,0.8)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px',
                    }}>
                      <p style={{ color: text, fontSize: '11px', textAlign: 'center', fontStyle: 'italic' }}>{e.caption}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section style={{ padding: '80px 0', background: bg }}>
        <div className="r-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '10px', fontWeight: 600 }}>PAQUETES</div>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 700, color: text }}>Elige tu Experiencia</h2>
          </div>
          <div className="r-grid-3" style={{ gap: '20px' }}>
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{
                  background: cardBg,
                  border: `2px solid ${pkg.borderColor}`,
                  padding: '32px 24px',
                  position: 'relative',
                  boxShadow: pkg.popular ? `0 0 40px ${accent}33` : 'none',
                }}
              >
                {pkg.popular && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: accent, color: '#fff', fontSize: '10px', fontWeight: 700,
                    letterSpacing: '0.12em', padding: '4px 16px',
                  }}>
                    MÁS POPULAR
                  </div>
                )}
                <h3 style={{ color: pkg.color, fontSize: '22px', fontWeight: 900, letterSpacing: '0.05em', marginBottom: '8px' }}>{pkg.name.toUpperCase()}</h3>
                <div style={{ color: text, fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>{pkg.price}</div>
                <div style={{ color: textMuted, fontSize: '12px', marginBottom: '24px' }}>{pkg.minPersons}</div>
                <div style={{ borderTop: `1px solid ${cardBorder}`, paddingTop: '20px', marginBottom: '24px' }}>
                  {pkg.features.map((f) => (
                    <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ color: pkg.color, flexShrink: 0, marginTop: '2px' }}>✓</span>
                      <span style={{ color: textMuted, fontSize: '13px', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                  {pkg.notIncluded.length > 0 && pkg.notIncluded.map((f) => (
                    <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px', opacity: 0.4 }}>
                      <span style={{ color: textMuted, flexShrink: 0, marginTop: '2px' }}>✗</span>
                      <span style={{ color: textMuted, fontSize: '13px', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={scrollToForm}
                  style={{
                    background: pkg.popular ? accent : 'transparent',
                    border: `1px solid ${pkg.borderColor}`,
                    color: pkg.popular ? '#fff' : pkg.color,
                    width: '100%', padding: '12px',
                    fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em',
                    cursor: 'pointer',
                    boxShadow: pkg.popular ? `0 0 20px ${accent}44` : 'none',
                  }}
                >
                  SELECCIONAR
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST FORM */}
      <section ref={formRef} style={{ padding: '80px 0', background: cardBg }}>
        <div className="r-container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '10px', fontWeight: 600 }}>CONTACTO</div>
              <h2 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 700, color: text, marginBottom: '12px' }}>Solicitar Presupuesto</h2>
              <p style={{ color: textMuted, fontSize: '14px' }}>Cuéntanos tu evento. Te respondemos en menos de 24 horas.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { key: 'nombre', label: 'Nombre completo', placeholder: 'Tu nombre', type: 'text', col: 1 },
                { key: 'email', label: 'Email', placeholder: 'tu@email.com', type: 'email', col: 1 },
                { key: 'telefono', label: 'Teléfono', placeholder: '+34 600 000 000', type: 'tel', col: 1 },
                { key: 'personas', label: 'Número de personas', placeholder: 'Ej: 30', type: 'number', col: 1 },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{ display: 'block', color: textMuted, fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px', fontWeight: 600 }}>
                    {field.label.toUpperCase()}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: bg, border: `1px solid ${cardBorder}`,
                      color: text, fontSize: '14px',
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                </div>
              ))}
              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'block', color: textMuted, fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px', fontWeight: 600 }}>TIPO DE EVENTO</label>
                <select
                  value={form.tipo}
                  onChange={(e) => setForm(prev => ({ ...prev, tipo: e.target.value }))}
                  style={{ width: '100%', padding: '12px 16px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '14px', outline: 'none' }}
                >
                  <option value="">Seleccionar tipo</option>
                  <option>Cumpleaños</option>
                  <option>Despedida de Soltera/o</option>
                  <option>Evento Corporativo</option>
                  <option>Boda / Celebración</option>
                  <option>Otro</option>
                </select>
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'block', color: textMuted, fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px', fontWeight: 600 }}>FECHA PREVISTA</label>
                <input
                  type="date"
                  value={form.fecha}
                  onChange={(e) => setForm(prev => ({ ...prev, fecha: e.target.value }))}
                  style={{ width: '100%', padding: '12px 16px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'block', color: textMuted, fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px', fontWeight: 600 }}>CUÉNTANOS MÁS</label>
                <textarea
                  placeholder="Describe tu evento: tema, ocasión especial, peticiones concretas..."
                  value={form.mensaje}
                  onChange={(e) => setForm(prev => ({ ...prev, mensaje: e.target.value }))}
                  rows={4}
                  style={{ width: '100%', padding: '12px 16px', background: bg, border: `1px solid ${cardBorder}`, color: text, fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <button
                  type="submit"
                  style={{
                    background: accent, color: '#fff',
                    width: '100%', padding: '16px',
                    fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em',
                    border: 'none', cursor: 'pointer',
                    boxShadow: `0 0 30px ${accent}44`,
                  }}
                >
                  ENVIAR SOLICITUD
                </button>
              </div>
            </div>
            <p style={{ color: textMuted, fontSize: '12px', textAlign: 'center', marginTop: '16px' }}>
              También puedes contactarnos directamente por WhatsApp: +34 91 234 5678
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

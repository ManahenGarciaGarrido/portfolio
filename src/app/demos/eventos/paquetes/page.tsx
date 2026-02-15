'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#0d0d0d';
const gold = '#d4af37';
const textColor = '#f5f0e0';
const dark = '#161616';

const packages = [
  {
    name: 'Esencial',
    price: '3.500€',
    subtitle: 'Para celebraciones íntimas y sin complicaciones',
    highlight: false,
    features: [
      { label: 'Coordinación el día del evento', included: true },
      { label: 'Asesoramiento inicial (2 reuniones)', included: true },
      { label: 'Gestión de hasta 5 proveedores', included: true },
      { label: 'Plan de timings y protocolo', included: true },
      { label: 'Asistente de coordinación', included: true },
      { label: 'Decoración floral básica', included: true },
      { label: 'Diseño personalizado de evento', included: false },
      { label: 'Coordinación de ensayo', included: false },
      { label: 'Gestión de proveedores ilimitada', included: false },
      { label: 'Diseñador de interiores', included: false },
      { label: 'Fotógrafo y videógrafo', included: false },
      { label: 'Atención 24h el día del evento', included: false },
    ],
    addons: ['Fotografía (+800€)', 'DJ profesional (+600€)', 'Floristería premium (+400€)'],
    cta: 'Reservar Esencial',
  },
  {
    name: 'Premium',
    price: '6.500€',
    subtitle: 'La experiencia completa para el evento de tus sueños',
    highlight: true,
    features: [
      { label: 'Coordinación el día del evento', included: true },
      { label: 'Asesoramiento completo (sin límite)', included: true },
      { label: 'Gestión de proveedores ilimitada', included: true },
      { label: 'Plan de timings y protocolo', included: true },
      { label: '2 asistentes de coordinación', included: true },
      { label: 'Decoración floral completa', included: true },
      { label: 'Diseño personalizado de evento', included: true },
      { label: 'Coordinación de ensayo', included: true },
      { label: 'Diseñador de interiores', included: true },
      { label: 'Fotógrafo profesional', included: true },
      { label: 'Videógrafo + corto cinematográfico', included: true },
      { label: 'Atención 24h el día del evento', included: true },
    ],
    addons: ['Helicóptero o limusina (+desde 600€)', 'Mesa dulce artesanal (+300€)', 'Actuación en vivo (+desde 800€)'],
    cta: 'Reservar Premium',
  },
  {
    name: 'Élite',
    price: 'Consultar',
    subtitle: 'Lujo sin límites. Experiencias únicas a tu medida',
    highlight: false,
    features: [
      { label: 'Coordinación el día del evento', included: true },
      { label: 'Asesoramiento completo (sin límite)', included: true },
      { label: 'Gestión de proveedores ilimitada', included: true },
      { label: 'Equipo completo de coordinación', included: true },
      { label: 'Decoración de alto nivel', included: true },
      { label: 'Diseñador de interiores exclusivo', included: true },
      { label: 'Fotógrafo y equipo de vídeo', included: true },
      { label: 'Catering y chef privado incluidos', included: true },
      { label: 'DJ o banda en vivo', included: true },
      { label: 'Traslados y alojamiento VIP', included: true },
      { label: 'Sorpresas personalizadas', included: true },
      { label: 'Sin límites, sin compromisos', included: true },
    ],
    addons: ['Fuegos artificiales', 'Concierto privado', 'Cualquier experiencia que imagines'],
    cta: 'Solicitar propuesta',
  },
];

const addons = [
  { name: 'Fotografía', desc: 'Reportaje completo por fotógrafo profesional. Álbum digital y físico incluido.', price: 'desde 800€' },
  { name: 'Catering Premium', desc: 'Menú degustación de 5 platos. Chef en sala, vajilla de porcelana y cristal Riedel.', price: 'desde 65€/pax' },
  { name: 'DJ o Banda', desc: 'DJ con equipo de sonido profesional o banda en directo según tu estilo musical.', price: 'desde 600€' },
  { name: 'Flores y Decoración', desc: 'Composiciones florales artesanales y ambientación completa del espacio.', price: 'desde 400€' },
  { name: 'Vídeo Cinematográfico', desc: 'Corto de 3–5 minutos con edición cinematográfica, color grading y música original.', price: 'desde 900€' },
  { name: 'Fotomatón o Magic Mirror', desc: 'Diversión garantizada para los invitados. Impresión instantánea de fotos.', price: 'desde 350€' },
];

export default function EventosPaquetes() {
  const headerRef = useRef(null);
  const packagesRef = useRef(null);
  const addonsRef = useRef(null);
  const customRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const packagesInView = useInView(packagesRef, { once: true, margin: '-60px' });
  const addonsInView = useInView(addonsRef, { once: true, margin: '-60px' });
  const customInView = useInView(customRef, { once: true, margin: '-60px' });

  const [customForm, setCustomForm] = useState({ nombre: '', evento: '', presupuesto: '', mensaje: '' });
  const [customSent, setCustomSent] = useState(false);

  return (
    <div style={{ backgroundColor: bg, color: textColor }}>

      {/* HEADER */}
      <section
        ref={headerRef}
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 100px) 60px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at top center, ${gold}07 0%, transparent 60%)` }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '16px' }}
          >
            ÉLITE EVENTOS · PAQUETES
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: 'clamp(36px, 6vw, 80px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 20px', lineHeight: 1 }}
          >
            Elige tu<br /><span style={{ color: gold }}>experiencia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ color: '#999', fontSize: '16px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Tres niveles de servicio para que cada evento sea exactamente lo que imaginas, dentro de tu presupuesto.
          </motion.p>
        </div>
      </section>

      {/* PACKAGES */}
      <section ref={packagesRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="r-grid-3" style={{ alignItems: 'stretch' }}>
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                animate={packagesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                style={{
                  backgroundColor: dark,
                  border: pkg.highlight ? `2px solid ${gold}` : `1px solid ${gold}22`,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {pkg.highlight && (
                  <div style={{ backgroundColor: gold, textAlign: 'center', padding: '8px', position: 'absolute', top: 0, left: 0, right: 0 }}>
                    <p style={{ color: '#0d0d0d', fontWeight: 800, fontSize: '11px', letterSpacing: '0.2em', margin: 0 }}>MÁS POPULAR</p>
                  </div>
                )}
                <div style={{ padding: `${pkg.highlight ? '52px' : '32px'} 28px 28px` }}>
                  <h3 style={{ color: gold, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '28px', fontWeight: 700, margin: '0 0 8px' }}>{pkg.name}</h3>
                  <p style={{ color: '#777', fontSize: '13px', lineHeight: 1.5, margin: '0 0 24px' }}>{pkg.subtitle}</p>
                  <div style={{ marginBottom: '28px' }}>
                    <span style={{ color: textColor, fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700 }}>{pkg.price}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', flex: 1 }}>
                    {pkg.features.map(f => (
                      <li key={f.label} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '7px 0', borderBottom: `1px solid ${gold}11` }}>
                        <span style={{ color: f.included ? gold : '#333', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>
                          {f.included ? '✓' : '✗'}
                        </span>
                        <span style={{ color: f.included ? '#ccc' : '#444', fontSize: '13px', lineHeight: 1.4 }}>{f.label}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginBottom: '24px' }}>
                    <p style={{ color: '#666', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '8px' }}>COMPLEMENTOS DISPONIBLES:</p>
                    {pkg.addons.map(a => (
                      <p key={a} style={{ color: '#888', fontSize: '12px', lineHeight: 1.6, margin: '0 0 3px' }}>+ {a}</p>
                    ))}
                  </div>
                  <Link href="/demos/eventos/contacto">
                    <button style={{
                      backgroundColor: pkg.highlight ? gold : 'transparent',
                      color: pkg.highlight ? '#0d0d0d' : gold,
                      border: `1px solid ${gold}`,
                      padding: '14px', width: '100%',
                      fontWeight: 800, fontSize: '13px',
                      letterSpacing: '0.15em', cursor: 'pointer',
                    }}>
                      {pkg.cta.toUpperCase()}
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDONS */}
      <section ref={addonsRef} className="r-section" style={{ backgroundColor: dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>COMPLEMENTOS</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 52px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>
              Personaliza tu evento
            </h2>
          </motion.div>
          <div className="r-grid-3">
            {addons.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 30 }}
                animate={addonsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ padding: '28px', border: `1px solid ${gold}22`, backgroundColor: bg }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <h3 style={{ color: gold, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '18px', fontWeight: 700, margin: 0 }}>{a.name}</h3>
                  <span style={{ color: gold, fontWeight: 800, fontSize: '14px', whiteSpace: 'nowrap', marginLeft: '12px' }}>{a.price}</span>
                </div>
                <p style={{ color: '#999', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM PACKAGE FORM */}
      <section ref={customRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={customInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>PROPUESTA A MEDIDA</p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 12px' }}>
              ¿No encuentras lo que buscas?
            </h2>
            <p style={{ color: '#999', fontSize: '15px', lineHeight: 1.6 }}>
              Cuéntanos tu visión y diseñamos un paquete completamente personalizado para ti.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={customInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ backgroundColor: dark, border: `1px solid ${gold}22`, padding: '40px' }}
          >
            {customSent ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '50px', marginBottom: '16px' }}>✨</div>
                <h3 style={{ color: gold, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '22px', fontWeight: 700, margin: '0 0 8px' }}>¡Solicitud recibida!</h3>
                <p style={{ color: '#aaa', fontSize: '15px' }}>Prepararemos una propuesta personalizada en 48 horas.</p>
              </motion.div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setCustomSent(true); }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ color: '#666', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '7px' }}>NOMBRE</label>
                    <input
                      type="text" required value={customForm.nombre}
                      onChange={e => setCustomForm(f => ({ ...f, nombre: e.target.value }))}
                      placeholder="Tu nombre"
                      style={{ backgroundColor: '#0d0d0d', border: `1px solid ${gold}33`, color: textColor, padding: '13px 16px', fontSize: '14px', outline: 'none', width: '100%', boxSizing: 'border-box' as const }}
                    />
                  </div>
                  <div>
                    <label style={{ color: '#666', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '7px' }}>TIPO DE EVENTO</label>
                    <select
                      value={customForm.evento}
                      onChange={e => setCustomForm(f => ({ ...f, evento: e.target.value }))}
                      style={{ backgroundColor: '#0d0d0d', border: `1px solid ${gold}33`, color: textColor, padding: '13px 16px', fontSize: '14px', outline: 'none', width: '100%', cursor: 'pointer', boxSizing: 'border-box' as const }}
                    >
                      <option value="">Seleccionar...</option>
                      {['Boda', 'Evento corporativo', 'Fiesta privada', 'Comunión/Bautizo', 'Otro'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: '#666', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '7px' }}>PRESUPUESTO APROXIMADO</label>
                  <select
                    value={customForm.presupuesto}
                    onChange={e => setCustomForm(f => ({ ...f, presupuesto: e.target.value }))}
                    style={{ backgroundColor: '#0d0d0d', border: `1px solid ${gold}33`, color: textColor, padding: '13px 16px', fontSize: '14px', outline: 'none', width: '100%', cursor: 'pointer', boxSizing: 'border-box' as const }}
                  >
                    <option value="">Seleccionar rango...</option>
                    {['Menos de 2.000€', '2.000€ – 5.000€', '5.000€ – 10.000€', '10.000€ – 20.000€', 'Más de 20.000€'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ color: '#666', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '7px' }}>CUÉNTANOS TU SUEÑO</label>
                  <textarea
                    rows={5} required value={customForm.mensaje}
                    onChange={e => setCustomForm(f => ({ ...f, mensaje: e.target.value }))}
                    placeholder="Descríbenos qué tienes en mente para tu evento especial..."
                    style={{ backgroundColor: '#0d0d0d', border: `1px solid ${gold}33`, color: textColor, padding: '13px 16px', fontSize: '14px', outline: 'none', width: '100%', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' as const }}
                  />
                </div>
                <button type="submit" style={{ backgroundColor: gold, color: '#0d0d0d', border: 'none', padding: '16px', width: '100%', fontWeight: 800, fontSize: '14px', letterSpacing: '0.15em', cursor: 'pointer' }}>
                  SOLICITAR PROPUESTA PERSONALIZADA
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

    </div>
  );
}

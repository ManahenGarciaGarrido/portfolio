'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#0d0d0d';
const accent = '#ff6600';
const text = '#f0f0f0';
const dark = '#1a1a1a';

const services = [
  { icon: '⚙', name: 'Motor' },
  { icon: '🛑', name: 'Frenos' },
  { icon: '❄', name: 'Climatización' },
  { icon: '✅', name: 'ITV' },
  { icon: '⭕', name: 'Neumáticos' },
  { icon: '⚡', name: 'Electricidad' },
  { icon: '🔧', name: 'Suspensión' },
  { icon: '💨', name: 'Escapes' },
];

const reasons = [
  { stat: '30', unit: 'AÑOS', label: 'de experiencia', desc: 'Desde 1992 en el sector, con miles de vehículos reparados con éxito.' },
  { stat: '100%', unit: '', label: 'diagnóstico digital gratuito', desc: 'Escáner OBD de última generación sin coste en la primera visita.' },
  { stat: '12', unit: 'MESES', label: 'de garantía en todos los trabajos', desc: 'Garantizamos cada reparación con piezas de primera calidad.' },
];

const mechanics = [
  { name: 'Antonio García', specialty: 'Motor', seed: 'mechanic1' },
  { name: 'Pedro Martínez', specialty: 'Electricidad', seed: 'mechanic2' },
  { name: 'Rafael López', specialty: 'Carrocería', seed: 'mechanic3' },
  { name: 'Juan Romero', specialty: 'General', seed: 'mechanic4' },
];

const reviews = [
  { name: 'Carmen S.', text: 'Llevan mi coche hace 10 años. Siempre honestos con el presupuesto y el trabajo es de primera. No cambio de taller por nada.' },
  { name: 'Marcos F.', text: 'Rápidos, eficientes y transparentes. Me explicaron exactamente qué necesitaba y no me cobraron nada extra. Muy recomendables.' },
  { name: 'Laura M.', text: 'Tuve una avería en la autopista y vinieron en menos de 30 minutos. Al día siguiente ya tenía el coche listo. Increíble servicio.' },
];

function ServiceCard({ s, delay }: { s: typeof services[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: dark,
        border: `1px solid ${hovered ? accent : '#2a2a2a'}`,
        padding: '28px 20px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}
    >
      <div style={{ fontSize: '32px', marginBottom: '12px' }}>{s.icon}</div>
      <p style={{ color: hovered ? accent : text, fontWeight: 700, fontSize: '15px', margin: 0, transition: 'color 0.3s' }}>{s.name}</p>
    </motion.div>
  );
}

export default function TallerHome() {
  const servicesRef = useRef(null);
  const reasonsRef = useRef(null);
  const tourRef = useRef(null);
  const teamRef = useRef(null);
  const reviewsRef = useRef(null);
  const emergencyRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, margin: '-60px' });
  const reasonsInView = useInView(reasonsRef, { once: true, margin: '-60px' });
  const tourInView = useInView(tourRef, { once: true, margin: '-60px' });
  const teamInView = useInView(teamRef, { once: true, margin: '-60px' });
  const reviewsInView = useInView(reviewsRef, { once: true, margin: '-60px' });
  const emergencyInView = useInView(emergencyRef, { once: true, margin: '-60px' });

  return (
    <div style={{ backgroundColor: bg, color: text }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 'max(100svh, 600px)', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <img
          src="https://picsum.photos/seed/garage-workshop/1400/800"
          alt="MOTORWORK Taller"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.3 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.3))' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 clamp(24px, 6vw, 100px)', maxWidth: '700px' }}>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: accent, fontSize: '12px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '20px' }}
          >
            TALLER MECÁNICO OFICIAL · DESDE 1992
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 'clamp(56px, 10vw, 130px)', fontWeight: 900, color: accent, margin: '0 0 16px', lineHeight: 0.9, letterSpacing: '-0.03em' }}
          >
            MOTOR<br />WORK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', color: '#ccc', marginBottom: '40px', lineHeight: 1.5 }}
          >
            Tu coche en las mejores manos desde 1992
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <Link href="/demos/taller/diagnostico">
              <button style={{ backgroundColor: accent, color: '#000', border: 'none', padding: '16px 36px', fontWeight: 800, fontSize: '14px', letterSpacing: '0.1em', cursor: 'pointer' }}>
                PEDIR PRESUPUESTO
              </button>
            </Link>
            <Link href="/demos/taller/servicios">
              <button style={{ backgroundColor: 'transparent', color: text, border: `2px solid ${text}40`, padding: '16px 36px', fontWeight: 700, fontSize: '14px', letterSpacing: '0.1em', cursor: 'pointer' }}>
                VER SERVICIOS
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section ref={servicesRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: '50px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>NUESTROS SERVICIOS</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: text, margin: 0 }}>Todo lo que necesita tu vehículo</h2>
          </motion.div>
          <div className="r-grid-4">
            {services.map((s, i) => (
              <ServiceCard key={s.name} s={s} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section ref={reasonsRef} className="r-section" style={{ backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>¿POR QUÉ ELEGIRNOS?</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: text, margin: 0 }}>Confianza que se demuestra con hechos</h2>
          </motion.div>
          <div className="r-grid-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 40 }}
                animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                style={{ textAlign: 'center', padding: '40px 30px', backgroundColor: dark, border: `1px solid #2a2a2a` }}
              >
                <div style={{ fontSize: 'clamp(52px, 7vw, 80px)', fontWeight: 900, color: accent, lineHeight: 1, marginBottom: '4px' }}>
                  {r.stat}
                </div>
                <div style={{ fontSize: '13px', color: accent, letterSpacing: '0.2em', fontWeight: 700, marginBottom: '12px' }}>{r.unit}</div>
                <p style={{ color: text, fontWeight: 700, fontSize: '16px', margin: '0 0 10px' }}>{r.label}</p>
                <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP TOUR */}
      <section ref={tourRef} className="r-section" style={{ backgroundColor: bg }}>
        <div className="r-two-col" style={{ maxWidth: '1200px', margin: '0 auto', gap: '60px' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={tourInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="https://picsum.photos/seed/mechanic-work/700/500"
              alt="Taller MOTORWORK"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={tourInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '16px' }}>NUESTRAS INSTALACIONES</p>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, color: text, margin: '0 0 20px', lineHeight: 1.2 }}>
              Taller equipado con tecnología de última generación
            </h2>
            <p style={{ color: '#888', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
              Contamos con más de 1.200 m² de instalaciones completamente equipadas para dar respuesta a cualquier avería o mantenimiento de tu vehículo.
            </p>
            <ul style={{ color: '#aaa', fontSize: '15px', lineHeight: 2, paddingLeft: '20px', marginBottom: '28px' }}>
              <li>Escáner de diagnóstico OBD multimarca</li>
              <li>Banco de neumáticos y equilibrado computarizado</li>
              <li>Cabina de pintura profesional</li>
              <li>Puentes elevadores hidráulicos de 4 columnas</li>
              <li>Sistema de recarga de climatización R134a/R1234yf</li>
            </ul>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: dark, padding: '16px 24px', border: `1px solid #2a2a2a` }}>
              <span style={{ color: accent, fontSize: '24px', fontWeight: 900 }}>★</span>
              <div>
                <p style={{ color: text, fontWeight: 700, fontSize: '14px', margin: 0 }}>Bosch Car Service</p>
                <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>Taller certificado y homologado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section ref={teamRef} className="r-section" style={{ backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>NUESTROS PROFESIONALES</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: text, margin: 0 }}>El equipo detrás del motor</h2>
          </motion.div>
          <div className="r-grid-4">
            {mechanics.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 40 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                style={{ backgroundColor: dark, overflow: 'hidden', border: `1px solid #2a2a2a` }}
              >
                <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${m.seed}/300/350`} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ color: text, fontWeight: 700, fontSize: '16px', margin: '0 0 4px' }}>{m.name}</p>
                  <p style={{ color: accent, fontSize: '13px', fontWeight: 600, margin: 0 }}>{m.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section ref={reviewsRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>OPINIONES DE CLIENTES</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: text, margin: 0 }}>Lo que dicen nuestros clientes</h2>
          </motion.div>
          <div className="r-grid-3">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                style={{ backgroundColor: dark, padding: '32px', border: `1px solid #2a2a2a` }}
              >
                <div style={{ color: accent, fontSize: '20px', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
                <p style={{ color: '#ccc', fontSize: '15px', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 20px' }}>"{r.text}"</p>
                <p style={{ color: accent, fontWeight: 700, fontSize: '14px', margin: 0 }}>— {r.name}</p>
                <p style={{ color: '#555', fontSize: '12px', margin: '4px 0 0' }}>Cliente verificado en Google</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <motion.section
        ref={emergencyRef}
        initial={{ opacity: 0 }}
        animate={emergencyInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{ backgroundColor: accent, padding: '40px 40px', textAlign: 'center' }}
      >
        <p style={{ color: '#000', fontSize: '13px', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '10px' }}>ASISTENCIA EN CARRETERA</p>
        <h2 style={{ color: '#000', fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 900, margin: '0 0 12px' }}>
          Servicio de asistencia en carretera 24/7
        </h2>
        <p style={{ color: '#000', fontSize: '18px', fontWeight: 600, margin: '0 0 24px' }}>Llámanos ahora: <strong>+34 955 000 111</strong></p>
        <Link href="/demos/taller/contacto">
          <button style={{ backgroundColor: '#000', color: accent, border: 'none', padding: '14px 40px', fontWeight: 800, fontSize: '14px', letterSpacing: '0.15em', cursor: 'pointer' }}>
            CONTACTAR
          </button>
        </Link>
      </motion.section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ borderTop: `1px solid #2a2a2a`, backgroundColor: '#0a0a0a' }}>
        <span style={{ fontWeight: 900, fontSize: '22px', color: accent, letterSpacing: '-0.02em' }}>MOTORWORK</span>
        <div style={{ textAlign: 'center', color: '#555', fontSize: '13px' }}>
          <p style={{ margin: '0 0 4px' }}>Polígono Industrial Las Marismas, Nave 12 · Sevilla</p>
          <p style={{ margin: '0 0 4px' }}>Lunes–Viernes 8:00–20:00 · Sábados 9:00–14:00</p>
          <p style={{ margin: 0 }}>© 2025 MOTORWORK. Todos los derechos reservados.</p>
        </div>
        <div style={{ textAlign: 'right', color: '#555', fontSize: '13px' }}>
          <p style={{ margin: '0 0 4px', color: accent, fontWeight: 700 }}>+34 955 000 111</p>
          <p style={{ margin: 0 }}>motorwork@taller.es</p>
        </div>
      </footer>
    </div>
  );
}

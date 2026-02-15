'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#0d0d0d';
const accent = '#ff6600';
const text = '#f0f0f0';
const dark = '#1a1a1a';

const services = [
  {
    name: 'Mecánica de Motor',
    seed: 'service1',
    desc: 'Reparación y mantenimiento completo del motor: juntas, distribución, culata, bomba de aceite y todo lo que necesite.',
    included: ['Cambio de distribución', 'Reparación de culata', 'Sustitución de juntas', 'Cambio de aceite y filtros', 'Puesta a punto'],
    time: '1–3 días',
    price: 'Desde 80€',
  },
  {
    name: 'Sistema de Frenos',
    seed: 'service2',
    desc: 'Revisión, reparación y sustitución de todo el sistema de frenado para garantizar tu seguridad en carretera.',
    included: ['Pastillas y discos', 'Líquido de frenos', 'Revisión del ABS', 'Freno de mano', 'Test en banco de frenada'],
    time: '2–4 horas',
    price: 'Desde 60€',
  },
  {
    name: 'Climatización',
    seed: 'service3',
    desc: 'Carga y reparación del aire acondicionado y calefacción. Compatible con gases R134a y R1234yf.',
    included: ['Recarga de gas', 'Revisión del compresor', 'Sustitución de filtro de habitáculo', 'Desinfección del sistema', 'Test de presión'],
    time: '1–2 horas',
    price: 'Desde 55€',
  },
  {
    name: 'Pre-Revisión ITV',
    seed: 'service4',
    desc: 'Preparamos tu vehículo para superar la ITV a la primera. Revisamos todos los puntos de inspección.',
    included: ['Revisión de luces', 'Comprobación de emisiones', 'Control de frenos', 'Revisión visual completa', 'Informe previo detallado'],
    time: '1 hora',
    price: 'Desde 30€',
  },
  {
    name: 'Neumáticos',
    seed: 'service5',
    desc: 'Venta, montaje y equilibrado de neumáticos de todas las marcas. Stock permanente de las gamas más demandadas.',
    included: ['Montaje y desmontaje', 'Equilibrado computarizado', 'Alineación de dirección', 'Revisión de presión TPMS', 'Guardado de temporada'],
    time: '1 hora',
    price: 'Desde 15€/ud.',
  },
  {
    name: 'Electricidad',
    seed: 'service6',
    desc: 'Diagnóstico y reparación de todos los sistemas eléctricos y electrónicos del vehículo.',
    included: ['Diagnóstico OBD', 'Reparación de alternador', 'Cambio de batería', 'Reparación de sensores', 'Actualización de software'],
    time: '2–8 horas',
    price: 'Desde 45€',
  },
  {
    name: 'Suspensión y Dirección',
    seed: 'service7',
    desc: 'Revisión y reparación de amortiguadores, muelles, rótulas y todo el tren delantero y trasero.',
    included: ['Amortiguadores', 'Muelles y silent-blocks', 'Rótulas y trapecios', 'Alineación de 4 ruedas', 'Test en banco'],
    time: '2–6 horas',
    price: 'Desde 70€',
  },
  {
    name: 'Escapes',
    seed: 'service8',
    desc: 'Reparación y sustitución de todo el sistema de escape. Catalizadores, silenciadores y tubería.',
    included: ['Soldadura de escape', 'Catalizador', 'Silenciador trasero', 'Sondas lambda', 'FAP/DPF (filtro partículas)'],
    time: '1–4 horas',
    price: 'Desde 40€',
  },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: dark,
        border: `1px solid ${hovered ? accent : '#2a2a2a'}`,
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
      }}
    >
      <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
        <img
          src={`https://picsum.photos/seed/${s.seed}/600/350`}
          alt={s.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>
      <div style={{ padding: '28px' }}>
        <h3 style={{ color: accent, fontSize: '20px', fontWeight: 800, margin: '0 0 12px' }}>{s.name}</h3>
        <p style={{ color: '#aaa', fontSize: '14px', lineHeight: 1.7, margin: '0 0 20px' }}>{s.desc}</p>
        <p style={{ color: text, fontWeight: 700, fontSize: '13px', marginBottom: '10px', letterSpacing: '0.05em' }}>INCLUYE:</p>
        <ul style={{ paddingLeft: '18px', margin: '0 0 20px' }}>
          {s.included.map((item) => (
            <li key={item} style={{ color: '#888', fontSize: '13px', lineHeight: 1.9 }}>{item}</li>
          ))}
        </ul>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid #2a2a2a`, paddingTop: '16px' }}>
          <div>
            <span style={{ color: '#555', fontSize: '12px' }}>Tiempo estimado: </span>
            <span style={{ color: text, fontSize: '13px', fontWeight: 600 }}>{s.time}</span>
          </div>
          <span style={{ color: accent, fontWeight: 800, fontSize: '18px' }}>{s.price}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TallerServicios() {
  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <div style={{ backgroundColor: bg, color: text }}>

      {/* PAGE HEADER */}
      <section
        ref={headerRef}
        style={{ position: 'relative', padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 100px) 80px', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a0800 0%, #0d0d0d 60%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '16px' }}
          >
            MOTORWORK · SERVICIOS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, color: text, margin: '0 0 20px', lineHeight: 1 }}
          >
            Todos nuestros<br /><span style={{ color: accent }}>servicios</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: '#888', fontSize: '18px', lineHeight: 1.6, maxWidth: '600px' }}
          >
            Desde el mantenimiento rutinario hasta reparaciones complejas, nuestro equipo de profesionales tiene la solución para tu vehículo.
          </motion.p>
        </div>
      </section>

      {/* ITV HIGHLIGHT */}
      <div style={{ backgroundColor: accent, padding: '20px 40px', textAlign: 'center' }}>
        <p style={{ color: '#000', fontWeight: 800, fontSize: 'clamp(14px, 2vw, 18px)', margin: 0 }}>
          🔍 OFERTA ESPECIAL: Pre-revisión ITV incluida gratis con cualquier servicio de más de 200€
        </p>
      </div>

      {/* SERVICES GRID */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="r-grid-2">
            {services.map((s, i) => (
              <ServiceCard key={s.name} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA PRESUPUESTO */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ backgroundColor: '#111', padding: 'clamp(60px, 8vw, 100px) 40px', textAlign: 'center' }}
      >
        <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '16px' }}>SIN COMPROMISO</p>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: 800, color: text, margin: '0 0 16px' }}>
          Presupuesto sin compromiso en 24h
        </h2>
        <p style={{ color: '#888', fontSize: '17px', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 36px' }}>
          Cuéntanos qué le pasa a tu vehículo y te enviamos un presupuesto detallado sin ningún coste ni compromiso.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/demos/taller/diagnostico">
            <button style={{ backgroundColor: accent, color: '#000', border: 'none', padding: '16px 44px', fontWeight: 800, fontSize: '14px', letterSpacing: '0.1em', cursor: 'pointer' }}>
              SOLICITAR PRESUPUESTO
            </button>
          </Link>
          <a href="tel:+34955000111">
            <button style={{ backgroundColor: 'transparent', color: text, border: `2px solid #333`, padding: '16px 44px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
              LLAMAR AHORA
            </button>
          </a>
        </div>
      </motion.section>

    </div>
  );
}

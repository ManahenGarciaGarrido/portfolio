'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const bg = '#0d0d0d';
const accent = '#ff6600';
const text = '#f0f0f0';
const dark = '#1a1a1a';

const mechanics = [
  {
    name: 'Antonio García Ruiz',
    role: 'Jefe de Taller',
    specialty: 'Motor y mecánica general',
    years: '22 años',
    seed: 'mechanic-team1',
    certs: ['Bosch Car Service Master', 'Técnico Oficial Ford', 'Certificado ASEPA'],
    bio: 'Antonio lleva más de dos décadas al frente del taller. Su pasión por los motores comenzó con su primer Seat 600 y nunca ha parado desde entonces.',
  },
  {
    name: 'Pedro Martínez Díaz',
    role: 'Técnico Electricista Senior',
    specialty: 'Electricidad y electrónica',
    years: '16 años',
    seed: 'mechanic-team2',
    certs: ['Especialista en Diagnóstico OBD', 'Técnico Oficial Volkswagen Group', 'Certificado IDAE Vehículo Eléctrico'],
    bio: 'Pedro es nuestro experto en sistemas electrónicos avanzados, desde módulos de control hasta redes CAN. El primero en el taller en certificarse en vehículos eléctricos.',
  },
  {
    name: 'Rafael López Moreno',
    role: 'Chapista y Pintor',
    specialty: 'Carrocería y pintura',
    years: '19 años',
    seed: 'mechanic-team3',
    certs: ['Certificado ANECPLA Pintura', 'Técnico en Sistemas de Asistencia ADAS', 'Calibrador de Cámaras y Radares'],
    bio: 'Rafael convierte abolladuras y arañazos en metal nuevo. Su meticulosidad en los acabados de pintura ha convertido a muchos clientes en fans de por vida.',
  },
  {
    name: 'Juan Romero Vega',
    role: 'Técnico de Neumáticos y Suspensión',
    specialty: 'Neumáticos, frenos y suspensión',
    years: '11 años',
    seed: 'mechanic-team4',
    certs: ['Técnico Michelin Cert.', 'Alineación y Geometría Avanzada', 'Técnico de Inspección de Frenos'],
    bio: 'Juan tiene un don especial para diagnosticar problemas de rodadura y suspensión solo por el ruido. Su precisión en geometría es la más valorada por nuestros clientes.',
  },
  {
    name: 'Miguel Fernández Soto',
    role: 'Técnico de Climatización',
    specialty: 'Aire acondicionado y calefacción',
    years: '9 años',
    seed: 'mechanic-team5',
    certs: ['Certificado Manipulador Gases Fluorados', 'Técnico R1234yf Certified', 'Especialista en Climatización Eléctrica'],
    bio: 'Miguel se especializó en climatización en un momento en que pocos talleres la tomaban en serio. Hoy es imprescindible con la llegada de los sistemas híbridos y eléctricos.',
  },
  {
    name: 'Carlos Sánchez Giménez',
    role: 'Técnico de Mantenimiento',
    specialty: 'Mantenimiento y revisiones periódicas',
    years: '7 años',
    seed: 'mechanic-team6',
    certs: ['Técnico Certificado Renault Group', 'Especialista Pre-ITV', 'Certificado de Calidad ISO 9001'],
    bio: 'Carlos es la primera línea de atención del taller. Su rigor en las revisiones preventivas evita que muchos de nuestros clientes tengan averías inesperadas.',
  },
];

const workshopPhotos = [
  { seed: 'workshop1', caption: 'Zona de diagnóstico electrónico' },
  { seed: 'workshop2', caption: 'Cabina de pintura profesional' },
  { seed: 'workshop3', caption: 'Área de mecánica general' },
];

export default function TallerEquipo() {
  const headerRef = useRef(null);
  const teamRef = useRef(null);
  const workshopRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const teamInView = useInView(teamRef, { once: true, margin: '-60px' });
  const workshopInView = useInView(workshopRef, { once: true, margin: '-60px' });

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
          MOTORWORK · EQUIPO
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, color: text, margin: '0 0 20px', lineHeight: 1 }}
        >
          Las manos que<br /><span style={{ color: accent }}>cuidan tu coche</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ color: '#888', fontSize: '18px', lineHeight: 1.6, maxWidth: '600px' }}
        >
          Nuestros profesionales acumulan más de 80 años de experiencia combinada en el sector de la automoción.
        </motion.p>
      </section>

      {/* TEAM GRID */}
      <section ref={teamRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="r-grid-3">
            {mechanics.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 40 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{ backgroundColor: dark, border: `1px solid #2a2a2a`, overflow: 'hidden' }}
              >
                <div style={{ aspectRatio: '7/8', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={`https://picsum.photos/seed/${m.seed}/350/400`}
                    alt={m.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', padding: '20px 20px 16px' }}>
                    <span style={{ color: accent, fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em' }}>{m.years} DE EXPERIENCIA</span>
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ color: text, fontSize: '18px', fontWeight: 800, margin: '0 0 4px' }}>{m.name}</h3>
                  <p style={{ color: accent, fontSize: '13px', fontWeight: 700, margin: '0 0 8px', letterSpacing: '0.05em' }}>{m.role}</p>
                  <p style={{ color: '#666', fontSize: '12px', margin: '0 0 14px' }}>{m.specialty}</p>
                  <p style={{ color: '#999', fontSize: '13px', lineHeight: 1.6, margin: '0 0 16px' }}>{m.bio}</p>
                  <div style={{ borderTop: `1px solid #2a2a2a`, paddingTop: '14px' }}>
                    <p style={{ color: '#555', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '8px' }}>CERTIFICACIONES:</p>
                    {m.certs.map(c => (
                      <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ color: accent, fontSize: '10px' }}>✓</span>
                        <span style={{ color: '#777', fontSize: '12px' }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP PHOTOS */}
      <section ref={workshopRef} className="r-section" style={{ backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={workshopInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>NUESTRAS INSTALACIONES</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: text, margin: 0 }}>El taller por dentro</h2>
          </motion.div>
          <div className="r-grid-3">
            {workshopPhotos.map((w, i) => (
              <motion.div
                key={w.seed}
                initial={{ opacity: 0, y: 30 }}
                animate={workshopInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                style={{ overflow: 'hidden', position: 'relative' }}
              >
                <img
                  src={`https://picsum.photos/seed/${w.seed}/600/400`}
                  alt={w.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', aspectRatio: '3/2' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '20px 20px 16px' }}>
                  <p style={{ color: text, fontWeight: 600, fontSize: '14px', margin: 0 }}>{w.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#0d0d0d';
const gold = '#d4af37';
const textColor = '#f5f0e0';
const dark = '#161616';

const services = [
  {
    name: 'Bodas Completas',
    seed: 'service-event1',
    desc: 'Coordinamos cada aspecto de tu boda desde la primera reunión hasta el último vals. Nuestro equipo se encarga de todo para que tú solo tengas que vivir el momento.',
    included: [
      'Coordinación completa el día de la boda',
      'Gestión de todos los proveedores',
      'Diseño de decoración y ambientación',
      'Organización de protocolo y timings',
      'Catering y diseño del menú',
      'Pista de baile e iluminación',
      'Coordinación de acceso de invitados',
      'Plan B ante imprevistos meteorológicos',
    ],
    price: 'Desde 3.500€',
  },
  {
    name: 'Eventos Corporativos',
    seed: 'service-event2',
    desc: 'Galas de empresa, presentaciones de producto, convenciones y team buildings. Creamos experiencias corporativas que fortalecen tu imagen y motivan a tu equipo.',
    included: [
      'Producción audiovisual y escenografía',
      'Gestión de ponentes y agenda',
      'Catering adaptado a la imagen corporativa',
      'Branding del evento',
      'Fotografía y vídeo corporativo',
      'Traducción e interpretación simultánea',
      'Gestión de invitados VIP',
      'Reporting post-evento',
    ],
    price: 'Presupuesto a medida',
  },
  {
    name: 'Fiestas Privadas',
    seed: 'service-event3',
    desc: 'Cumpleaños de ensueño, aniversarios únicos, fiestas temáticas o simplemente una reunión especial que quieres que sea perfecta. Creamos experiencias íntimas y lujosas.',
    included: [
      'Diseño del concepto y temática',
      'Decoración artesanal personalizada',
      'Selección y gestión del espacio',
      'Catering y barra de cócteles',
      'Entretenimiento y animación',
      'Invitaciones personalizadas',
      'Fotografía del evento',
      'Recuerdos para invitados',
    ],
    price: 'Desde 1.200€',
  },
  {
    name: 'Comuniones y Bautizos',
    seed: 'service-event4',
    desc: 'Celebraciones familiares que marcan el inicio de un camino. Las organizamos con la ternura y el rigor que merecen, creando momentos que la familia recordará siempre.',
    included: [
      'Decoración floral y temática',
      'Menú adaptado a todos los públicos',
      'Entretenimiento infantil',
      'Mesa dulce y tarta personalizada',
      'Reportaje fotográfico',
      'Detalles para invitados',
      'Coordinación de la celebración religiosa',
      'Lista de regalos online',
    ],
    price: 'Desde 900€',
  },
];

const philosophy = [
  { title: 'Escuchamos antes de proponer', desc: 'Cada evento empieza con una conversación. Queremos entender quién eres, qué sueñas y qué te importa.' },
  { title: 'Los detalles marcan la diferencia', desc: 'Somos perfeccionistas por naturaleza. Los pequeños detalles son los que hacen que un evento pase de bueno a inolvidable.' },
  { title: 'Transparencia total', desc: 'Sin sorpresas en la factura. Desde el primer presupuesto, sabes exactamente en qué se invierte cada euro.' },
];

const awards = [
  { title: 'Mejor Wedding Planner 2024', org: 'Bodas.net Awards' },
  { title: 'Top 10 Event Planners Spain', org: 'Eventex Awards 2023' },
  { title: 'Premio Innovación en Bodas', org: 'Revista Novias Sevilla' },
  { title: 'Certificado de Excelencia', org: 'Zankyou Weddings' },
];

export default function EventosServicios() {
  const headerRef = useRef(null);
  const philosophyRef = useRef(null);
  const awardsRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const philosophyInView = useInView(philosophyRef, { once: true, margin: '-60px' });
  const awardsInView = useInView(awardsRef, { once: true, margin: '-60px' });

  return (
    <div style={{ backgroundColor: bg, color: textColor }}>

      {/* HEADER */}
      <section
        ref={headerRef}
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 100px) 60px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at top left, ${gold}06 0%, transparent 60%)` }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '16px' }}
          >
            ÉLITE EVENTOS · SERVICIOS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: 'clamp(36px, 6vw, 80px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 20px', lineHeight: 1 }}
          >
            Cada evento es<br /><span style={{ color: gold }}>único</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: '#999', fontSize: '17px', lineHeight: 1.6 }}
          >
            No hacemos plantillas. Diseñamos cada celebración desde cero, adaptándonos a tus deseos, personalidad y presupuesto.
          </motion.p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="r-grid-2">
            {services.map((s, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-60px' });
              return (
                <motion.div
                  key={s.name}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
                  style={{ backgroundColor: dark, border: `1px solid ${gold}22`, overflow: 'hidden' }}
                >
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img src={`https://picsum.photos/seed/${s.seed}/700/450`} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '32px' }}>
                    <h3 style={{ color: gold, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '24px', fontWeight: 700, margin: '0 0 12px' }}>{s.name}</h3>
                    <p style={{ color: '#aaa', fontSize: '14px', lineHeight: 1.7, margin: '0 0 24px' }}>{s.desc}</p>
                    <p style={{ color: textColor, fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', marginBottom: '12px' }}>INCLUYE:</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginBottom: '24px' }}>
                      {s.included.map(item => (
                        <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                          <span style={{ color: gold, fontSize: '10px', marginTop: '3px', flexShrink: 0 }}>◆</span>
                          <span style={{ color: '#888', fontSize: '12px', lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${gold}22`, paddingTop: '20px' }}>
                      <span style={{ color: gold, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', fontWeight: 700 }}>{s.price}</span>
                      <Link href="/demos/eventos/contacto">
                        <button style={{ backgroundColor: gold, color: '#0d0d0d', border: 'none', padding: '10px 24px', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', cursor: 'pointer' }}>
                          CONSULTAR
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section ref={philosophyRef} className="r-section" style={{ backgroundColor: dark }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>NUESTRA FILOSOFÍA</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 52px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>
              Por qué somos diferentes
            </h2>
          </motion.div>
          <div className="r-grid-3">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                style={{ padding: '36px', border: `1px solid ${gold}22`, textAlign: 'center' }}
              >
                <div style={{ width: '48px', height: '1px', backgroundColor: gold, margin: '0 auto 20px' }} />
                <h3 style={{ color: gold, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '18px', fontWeight: 700, margin: '0 0 14px' }}>{p.title}</h3>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section ref={awardsRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={awardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>RECONOCIMIENTOS</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 52px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>
              Premios y menciones
            </h2>
          </motion.div>
          <div className="r-grid-2">
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={awardsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '24px', backgroundColor: dark, border: `1px solid ${gold}22` }}
              >
                <span style={{ color: gold, fontSize: '28px', flexShrink: 0 }}>★</span>
                <div>
                  <h3 style={{ color: textColor, fontWeight: 700, fontSize: '16px', margin: '0 0 4px' }}>{a.title}</h3>
                  <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>{a.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

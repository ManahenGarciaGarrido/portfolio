'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#0d0d0d';
const gold = '#d4af37';
const textColor = '#f5f0e0';
const dark = '#161616';
const darkGold = '#1a1500';

const serviceTypes = [
  { name: 'Bodas', seed: 'event-type1', desc: 'Desde la pedida hasta el último baile. Organizamos tu boda soñada con cada detalle perfecto.' },
  { name: 'Eventos Corporativos', seed: 'event-type2', desc: 'Presentaciones, galas, convenciones y team buildings que refuerzan tu imagen de marca.' },
  { name: 'Celebraciones Privadas', seed: 'event-type3', desc: 'Cumpleaños, aniversarios, fiestas temáticas. Momentos íntimos con producción de alto nivel.' },
  { name: 'Bautizos & Comuniones', seed: 'event-type4', desc: 'Celebraciones familiares que se convierten en recuerdos que duran toda una vida.' },
];

const gallerySeeds = ['event-gallery1', 'event-gallery2', 'event-gallery3', 'event-gallery4', 'event-gallery5', 'event-gallery6'];

const stats = [
  { num: '500+', label: 'Bodas celebradas' },
  { num: '20', label: 'Años de experiencia' },
  { num: '50+', label: 'Proveedores premium' },
  { num: '98%', label: 'Satisfacción' },
];

const process = [
  { step: '01', title: 'Consulta gratuita', desc: 'Nos reunimos para conocer tus deseos, presupuesto y visión. Sin compromiso.' },
  { step: '02', title: 'Diseño del evento', desc: 'Creamos una propuesta personalizada con todos los detalles: espacio, decoración, catering y más.' },
  { step: '03', title: 'Coordinación', desc: 'Gestionamos todos los proveedores, logística y ensayos para que solo tengas que disfrutar.' },
  { step: '04', title: 'El gran día', desc: 'Presentes de principio a fin, asegurando que cada momento se desarrolle tal y como lo soñaste.' },
];

const testimonials = [
  { name: 'Lucía y Carlos', date: 'Junio 2024', seed: 'couple1', text: 'Fue el día más feliz de nuestras vidas. El equipo de ÉLITE EVENTOS hizo que todo fuera mágico y sin ningún estrés para nosotros.' },
  { name: 'Ana y Roberto', date: 'Septiembre 2024', seed: 'couple2', text: 'Contratamos el paquete Premium y superó todas nuestras expectativas. Cada detalle estaba pensado. Los invitados siguen hablando de ello.' },
  { name: 'María y Javier', date: 'Marzo 2024', seed: 'couple3', text: 'Desde el primer momento transmitieron profesionalidad y cariño. Nos escucharon y crearon exactamente la boda que queríamos.' },
];

const venues = ['Hacienda Benazuza', 'Cortijo de la Condesa', 'Finca El Pinar', 'Palacio de los Carteles'];

export default function EventosHome() {
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  const venuesRef = useRef(null);
  const ctaRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, margin: '-60px' });
  const galleryInView = useInView(galleryRef, { once: true, margin: '-60px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });
  const processInView = useInView(processRef, { once: true, margin: '-60px' });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-60px' });
  const venuesInView = useInView(venuesRef, { once: true, margin: '-60px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <div style={{ backgroundColor: bg, color: textColor }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 'max(100svh, 600px)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="https://picsum.photos/seed/wedding-venue/1400/900"
          alt="ÉLITE EVENTOS"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.25 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: gold, fontSize: '11px', letterSpacing: '0.6em', fontWeight: 700, marginBottom: '24px' }}
          >
            ORGANIZACIÓN DE EVENTOS Y BODAS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(48px, 9vw, 120px)',
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              color: gold,
              margin: '0 0 20px',
              letterSpacing: '0.15em',
              lineHeight: 0.95,
            }}
          >
            ÉLITE<br />EVENTOS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ color: textColor, fontSize: 'clamp(15px, 2vw, 20px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '12px', lineHeight: 1.5 }}
          >
            Donde los momentos se convierten en recuerdos eternos
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{ color: `${gold}99`, fontSize: '12px', letterSpacing: '0.3em', fontWeight: 600, marginBottom: '44px' }}
          >
            BODAS · EVENTOS CORPORATIVOS · CELEBRACIONES PRIVADAS
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <Link href="/demos/eventos/contacto">
              <button style={{
                backgroundColor: gold, color: '#0d0d0d', border: 'none',
                padding: '18px 52px', fontWeight: 800, fontSize: '13px',
                letterSpacing: '0.2em', cursor: 'pointer', fontFamily: 'inherit'
              }}>
                CONSULTA GRATUITA
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <div style={{ width: '1px', height: '50px', backgroundColor: gold, margin: '0 auto' }} />
        </motion.div>
      </section>

      {/* SERVICE TYPES */}
      <section ref={servicesRef} className="r-section" style={{ backgroundColor: dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>— LO QUE HACEMOS</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 56px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>
              Cada celebración, única
            </h2>
          </motion.div>
          <div className="r-grid-4">
            {serviceTypes.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{ border: `1px solid ${gold}44`, overflow: 'hidden', backgroundColor: bg }}
              >
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${s.seed}/400/300`} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ color: gold, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '18px', fontWeight: 700, margin: '0 0 8px' }}>{s.name}</h3>
                  <p style={{ color: '#aaa', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section ref={galleryRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>— GALERÍA</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 56px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>
              Momentos que perduran
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: '12px' }}>
            {gallerySeeds.map((seed, i) => {
              const heights = ['350px', '250px', '300px', '280px', '320px', '260px'];
              return (
                <motion.div
                  key={seed}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  style={{ overflow: 'hidden', height: heights[i] }}
                >
                  <img
                    src={`https://picsum.photos/seed/${seed}/600/400`}
                    alt={`Evento ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/demos/eventos/galeria">
              <button style={{ backgroundColor: 'transparent', color: gold, border: `1px solid ${gold}`, padding: '14px 44px', fontWeight: 600, fontSize: '13px', letterSpacing: '0.2em', cursor: 'pointer' }}>
                VER GALERÍA COMPLETA
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="r-stats" style={{ backgroundColor: darkGold, borderTop: `1px solid ${gold}22`, borderBottom: `1px solid ${gold}22` }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{ textAlign: 'center', padding: 'clamp(12px, 3vw, 0px) clamp(12px, 3vw, 20px)' }}
          >
            <div style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontFamily: 'Georgia, serif', color: gold, fontWeight: 700, lineHeight: 1 }}>{s.num}</div>
            <p style={{ color: textColor, fontSize: '14px', letterSpacing: '0.1em', margin: '8px 0 0', fontWeight: 500 }}>{s.label}</p>
          </motion.div>
        ))}
      </section>

      {/* PROCESS */}
      <section ref={processRef} className="r-section" style={{ backgroundColor: dark }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '70px' }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>— NUESTRO MÉTODO</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 56px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>
              Del sueño a la realidad
            </h2>
          </motion.div>
          <div className="r-grid-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                style={{ textAlign: 'center', padding: '32px 20px', position: 'relative' }}
              >
                <div style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontFamily: 'Georgia, serif', color: `${gold}33`, fontWeight: 700, lineHeight: 1, marginBottom: '20px' }}>
                  {p.step}
                </div>
                <div style={{ width: '40px', height: '1px', backgroundColor: gold, margin: '0 auto 20px' }} />
                <h3 style={{ color: gold, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', fontWeight: 700, margin: '0 0 12px' }}>{p.title}</h3>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialsRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>— ELLOS YA VIVIERON SU DÍA</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 56px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>
              Sus palabras, nuestro orgullo
            </h2>
          </motion.div>
          <div className="r-grid-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                style={{ backgroundColor: dark, padding: '36px', border: `1px solid ${gold}22` }}
              >
                <p style={{ color: gold, fontSize: '40px', fontFamily: 'Georgia, serif', margin: '0 0 16px', lineHeight: 1, opacity: 0.7 }}>"</p>
                <p style={{ color: '#ccc', fontSize: '15px', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 28px' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', border: `2px solid ${gold}44` }}>
                    <img src={`https://picsum.photos/seed/${t.seed}/80/80`} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div>
                    <p style={{ color: gold, fontWeight: 700, fontSize: '15px', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 2px' }}>{t.name}</p>
                    <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>{t.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUE PARTNERS */}
      <section ref={venuesRef} className="r-section" style={{ backgroundColor: darkGold, borderTop: `1px solid ${gold}22` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={venuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>ESPACIOS DE LUJO</p>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 36px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 40px' }}>
              Trabajamos con los mejores espacios de Andalucía
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px 48px' }}>
              {venues.map((v, i) => (
                <motion.span
                  key={v}
                  initial={{ opacity: 0 }}
                  animate={venuesInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ color: `${gold}cc`, fontSize: 'clamp(16px, 2.5vw, 22px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.03em' }}
                >
                  {v}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 40px', overflow: 'hidden', textAlign: 'center', backgroundColor: dark }}
      >
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, ${gold}08 0%, transparent 70%)` }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.5em', fontWeight: 700, marginBottom: '16px' }}>— TU DÍA PERFECTO</p>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 64px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 16px', lineHeight: 1.2 }}>
            Empieza a soñar con<br />tu día perfecto
          </h2>
          <p style={{ color: '#aaa', fontSize: '17px', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Primera consulta completamente gratuita y sin compromiso. Cuéntanos tu sueño y lo convertiremos en realidad.
          </p>
          <Link href="/demos/eventos/contacto">
            <button style={{ backgroundColor: gold, color: '#0d0d0d', border: 'none', padding: '18px 56px', fontWeight: 800, fontSize: '14px', letterSpacing: '0.15em', cursor: 'pointer' }}>
              CONSULTA GRATUITA
            </button>
          </Link>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ borderTop: `1px solid ${gold}22`, backgroundColor: '#0a0a0a' }}>
        <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '22px', color: gold, letterSpacing: '0.08em' }}>Élite Eventos</span>
        <div style={{ textAlign: 'center', color: '#5a5040', fontSize: '13px' }}>
          <p style={{ margin: '0 0 4px' }}>Avda. de la Constitución 45, Sevilla</p>
          <p style={{ margin: '0 0 4px' }}>Lunes–Viernes 10:00–20:00 · Sábados con cita previa</p>
          <p style={{ margin: 0 }}>© 2025 ÉLITE EVENTOS. Todos los derechos reservados.</p>
        </div>
        <div style={{ textAlign: 'right', color: '#5a5040', fontSize: '13px' }}>
          <p style={{ margin: '0 0 4px', color: gold, fontWeight: 700 }}>+34 954 100 200</p>
          <p style={{ margin: 0 }}>info@eliteeventos.es</p>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const CREAM = '#fff9f0';
const LAVENDER = '#c9a0c9';
const DEEP = '#8b5a8b';
const LIGHT_LAVENDER = '#f0e6f0';

const TREATMENTS = [
  {
    name: 'Ritual de Rosas',
    image: 'https://picsum.photos/seed/spa1/600/400',
    duration: '90 min',
    price: '€95',
    desc: 'Una experiencia sensorial completa con aceite de rosa búlgara que regenera la piel y serena la mente.',
  },
  {
    name: 'Masaje Balinés',
    image: 'https://picsum.photos/seed/spa2/600/400',
    duration: '60 min',
    price: '€75',
    desc: 'Técnica milenaria de Indonesia que combina aromaterapia y presión profunda para liberar tensiones acumuladas.',
  },
  {
    name: 'Facial Diamante',
    image: 'https://picsum.photos/seed/spa3/600/400',
    duration: '75 min',
    price: '€120',
    desc: 'Microexfoliación de última generación con partículas de diamante para una piel radiante y rejuvenecida.',
  },
];

const BENEFITS = [
  { icon: '🌿', title: 'Aceites Esenciales', desc: 'Formulaciones 100% naturales y certificadas para el máximo bienestar.' },
  { icon: '🎓', title: 'Expertos Certificados', desc: 'Todo nuestro equipo cuenta con certificaciones internacionales en bienestar.' },
  { icon: '✨', title: 'Ambiente Exclusivo', desc: 'Espacios diseñados para la máxima relajación con materiales de primera calidad.' },
  { icon: '💎', title: 'Resultados Visibles', desc: 'Notarás la diferencia desde la primera sesión. Garantizamos tu satisfacción.' },
];

const TESTIMONIALS = [
  {
    avatar: 'https://picsum.photos/seed/spa-client1/80/80',
    name: 'Claudia Martín',
    role: 'Clienta fiel desde 2021',
    quote: 'Celestial Spa ha cambiado completamente mi relación con el bienestar. Cada visita es un viaje de transformación que me recarga de energía por semanas enteras.',
    stars: 5,
  },
  {
    avatar: 'https://picsum.photos/seed/spa-client2/80/80',
    name: 'Rebeca Torres',
    role: 'Regalo de cumpleaños',
    quote: 'Mi marido me regaló una tarde en Celestial Spa y fue la mejor experiencia de mi vida. El ambiente, el trato, los tratamientos... todo es absolutamente perfecto.',
    stars: 5,
  },
];

const AMBIANCE = [
  'https://picsum.photos/seed/spa-room1/600/400',
  'https://picsum.photos/seed/spa-room2/600/400',
  'https://picsum.photos/seed/spa-room3/600/400',
  'https://picsum.photos/seed/spa-room4/600/400',
];

function TreatmentCard({ t, index }: { t: typeof TREATMENTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      style={{ background: '#fff', overflow: 'hidden', boxShadow: '0 4px 30px rgba(139,90,139,0.08)', border: `1px solid ${LIGHT_LAVENDER}` }}
    >
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }} />
      </div>
      <div style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: DEEP }}>{t.name}</h3>
          <span style={{ background: LIGHT_LAVENDER, color: DEEP, fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.6rem', whiteSpace: 'nowrap' }}>{t.duration}</span>
        </div>
        <p style={{ color: '#999', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{t.desc}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, color: LAVENDER }}>{t.price}</span>
          <Link href="/demos/spa/reservar" style={{
            background: LAVENDER, color: '#fff', padding: '0.6rem 1.4rem',
            fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em',
            textDecoration: 'none', display: 'inline-block',
          }}>
            RESERVAR
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function SpaHome() {
  return (
    <main style={{ background: CREAM, color: DEEP, overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', minHeight: '600px' }}>
        <img
          src="https://picsum.photos/seed/spa-hero/1400/900"
          alt="Celestial Spa"
          style={{ objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(201,160,201,0.55) 0%, rgba(139,90,139,0.6) 50%, rgba(255,249,240,0.3) 100%)' }} />

        {/* Floating petals CSS */}
        <style>{`
          @keyframes petalFall {
            0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 0; }
            10% { opacity: 0.7; }
            90% { opacity: 0.5; }
            100% { transform: translateY(110vh) translateX(60px) rotate(720deg); opacity: 0; }
          }
          .petal {
            position: absolute;
            width: 10px;
            height: 14px;
            background: rgba(255,200,220,0.6);
            border-radius: 50% 0 50% 0;
            animation: petalFall linear infinite;
            pointer-events: none;
          }
        `}</style>

        {/* Petals */}
        {[
          { left: '10%', delay: '0s', duration: '8s' },
          { left: '25%', delay: '2s', duration: '11s' },
          { left: '40%', delay: '5s', duration: '9s' },
          { left: '60%', delay: '1s', duration: '12s' },
          { left: '75%', delay: '3.5s', duration: '10s' },
          { left: '88%', delay: '6s', duration: '8.5s' },
          { left: '55%', delay: '4s', duration: '13s' },
        ].map((p, i) => (
          <div
            key={i}
            className="petal"
            style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration, top: '-20px', zIndex: 1 }}
          />
        ))}

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '0.75rem', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', fontWeight: 600 }}
          >
            BIENESTAR · BELLEZA · ARMONÍA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 300, color: '#fff', letterSpacing: '0.05em', lineHeight: 1.1, marginBottom: '1rem', fontStyle: 'italic' }}
          >
            Celestial Spa
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ height: '1px', background: 'rgba(255,255,255,0.6)', margin: '0 auto 1.5rem' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'rgba(255,255,255,0.9)', fontWeight: 300, letterSpacing: '0.15em', marginBottom: '2.5rem', fontStyle: 'italic' }}
          >
            Renueva tu esencia
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <Link href="/demos/spa/reservar" style={{
              background: LAVENDER, color: '#fff', padding: '1rem 3rem',
              fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.25em',
              textDecoration: 'none', display: 'inline-block',
              boxShadow: '0 8px 30px rgba(201,160,201,0.4)',
            }}>
              RESERVAR AHORA
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
        >
          <div style={{ width: '24px', height: '40px', border: '2px solid rgba(255,255,255,0.4)', borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
            <div style={{ width: '4px', height: '8px', background: 'rgba(255,255,255,0.7)', borderRadius: '2px' }} />
          </div>
        </motion.div>
      </section>

      {/* SIGNATURE TREATMENTS */}
      <section style={{ padding: 'clamp(2.5rem,6vw,5rem) clamp(1rem,4vw,4rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: LAVENDER, marginBottom: '0.75rem', fontWeight: 700 }}>NUESTROS FAVORITOS</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: DEEP }}>Tratamientos Signature</h2>
          <div style={{ width: '50px', height: '1px', background: LAVENDER, margin: '1.5rem auto 0' }} />
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
          {TREATMENTS.map((t, i) => <TreatmentCard key={i} t={t} index={i} />)}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <Link href="/demos/spa/tratamientos" style={{
            border: `1.5px solid ${LAVENDER}`, color: DEEP, padding: '0.85rem 2.5rem',
            fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.15em',
            textDecoration: 'none', display: 'inline-block',
          }}>
            VER TODOS LOS TRATAMIENTOS
          </Link>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: 'clamp(2rem,5vw,4rem) clamp(1rem,4vw,4rem)', background: LIGHT_LAVENDER }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: LAVENDER, marginBottom: '0.75rem', fontWeight: 700 }}>POR QUÉ ELEGIRNOS</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: DEEP }}>La Experiencia Celestial</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {BENEFITS.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              style={{ textAlign: 'center', padding: '2rem 1rem' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{b.icon}</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: DEEP, marginBottom: '0.5rem' }}>{b.title}</h3>
              <p style={{ color: '#b090b0', fontSize: '0.85rem', lineHeight: 1.6 }}>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: 'clamp(2.5rem,6vw,5rem) clamp(1rem,4vw,4rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: LAVENDER, marginBottom: '0.75rem', fontWeight: 700 }}>EXPERIENCIAS REALES</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: DEEP }}>Lo Que Sienten Nuestras Clientas</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              style={{ background: '#fff', padding: '2.5rem', boxShadow: '0 4px 30px rgba(139,90,139,0.06)', border: `1px solid ${LIGHT_LAVENDER}`, position: 'relative' }}
            >
              <div style={{ fontSize: '4rem', color: LIGHT_LAVENDER, position: 'absolute', top: '1rem', left: '1.5rem', lineHeight: 1, fontFamily: 'Georgia, serif' }}>"</div>
              <div style={{ color: LAVENDER, marginBottom: '1rem', paddingTop: '1.5rem' }}>{'★'.repeat(t.stars)}</div>
              <p style={{ color: '#888', lineHeight: 1.8, fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>"{t.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src={t.avatar} alt={t.name} style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${LAVENDER}55` }} />
                <div>
                  <div style={{ fontWeight: 700, color: DEEP, fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: '#bbb', fontSize: '0.75rem' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AMBIANCE GALLERY */}
      <section style={{ padding: '0 clamp(1rem,4vw,4rem) clamp(2.5rem,5vw,5rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: LAVENDER, marginBottom: '0.75rem', fontWeight: 700 }}>NUESTRO ESPACIO</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: DEEP }}>Un Refugio de Paz</h2>
        </motion.div>
        <div className="r-grid-2" style={{ gap: '0.75rem', maxWidth: '900px', margin: '0 auto' }}>
          {AMBIANCE.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ overflow: 'hidden', height: '260px' }}
            >
              <img src={src} alt={`Espacio ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: 'clamp(2rem,5vw,4rem) clamp(1rem,4vw,4rem)', background: `linear-gradient(135deg, ${LAVENDER}22 0%, ${DEEP}11 100%)`, borderTop: `1px solid ${LAVENDER}33`, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌸</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, fontStyle: 'italic', color: DEEP, marginBottom: '0.75rem' }}>
            Tu momento de paz te espera
          </h2>
          <p style={{ color: '#b090b0', marginBottom: '2rem', fontSize: '0.95rem' }}>Regálate la experiencia que mereces</p>
          <Link href="/demos/spa/reservar" style={{
            background: DEEP, color: '#fff', padding: '1rem 3rem',
            fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.2em',
            textDecoration: 'none', display: 'inline-block',
          }}>
            RESERVAR MI VISITA
          </Link>
        </motion.div>
      </section>

    </main>
  );
}

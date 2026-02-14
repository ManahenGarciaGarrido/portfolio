'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const GOLD = '#b8860b';
const WHITE = '#ffffff';
const BLACK = '#000000';

function LetterByLetter({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.04, duration: 0.4 }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

function StatCounter({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3.5rem', fontWeight: 900, color: GOLD, lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ color: '#aaa', marginTop: '0.5rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>
        {label}
      </div>
    </div>
  );
}

const galleryItems = [
  { seed: 'photo1', w: 800, h: 900, category: 'RETRATO', gridRow: 'span 2', gridCol: 'span 1' },
  { seed: 'photo2', w: 500, h: 400, category: 'BODA', gridRow: 'span 1', gridCol: 'span 1' },
  { seed: 'photo3', w: 500, h: 400, category: 'MODA', gridRow: 'span 1', gridCol: 'span 1' },
  { seed: 'photo4', w: 900, h: 450, category: 'CORPORATIVO', gridRow: 'span 1', gridCol: 'span 2' },
  { seed: 'photo5', w: 450, h: 450, category: 'NATURALEZA', gridRow: 'span 1', gridCol: 'span 1' },
  { seed: 'photo6', w: 450, h: 600, category: 'RETRATO', gridRow: 'span 1', gridCol: 'span 1' },
];

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        gridRow: item.gridRow,
        gridColumn: item.gridCol,
        border: hovered ? `2px solid ${GOLD}` : '2px solid transparent',
        transition: 'border 0.3s ease',
      }}
    >
      <img
        src={`https://picsum.photos/seed/${item.seed}/${item.w}/${item.h}`}
        alt={item.category}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered ? 'rgba(0,0,0,0.6)' : 'transparent',
        transition: 'background 0.3s ease',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}>
        {hovered && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} style={{ textAlign: 'center' }}>
            <div style={{ color: GOLD, fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '0.5rem' }}>{item.category}</div>
            <div style={{ color: WHITE, fontSize: '1.5rem', fontWeight: 900 }}>VER +</div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function FotografoHome() {
  const statsRef = useRef(null);
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true });

  return (
    <main style={{ background: BLACK, color: WHITE, overflowX: 'hidden' }}>

      {/* HERO - Fullscreen Split */}
      <section style={{ height: '100vh', display: 'flex', minHeight: '600px' }}>
        {/* LEFT 40% */}
        <div style={{
          width: '40%', background: BLACK,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 3rem 0 4rem', position: 'relative', zIndex: 2,
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: GOLD, marginBottom: '1.5rem', fontWeight: 700 }}
          >
            FOTOGRAFÍA PROFESIONAL · MADRID
          </motion.div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.0, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            <LetterByLetter text="ALEJANDRO" delay={0.3} />
            <br />
            <LetterByLetter text="VEGA" delay={0.8} />
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            style={{ fontSize: '0.75rem', letterSpacing: '0.25em', color: '#888', marginBottom: '1.5rem', fontWeight: 600 }}
          >
            FOTÓGRAFO PROFESIONAL
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ delay: 1.8, duration: 0.6 }}
            style={{ height: '2px', background: GOLD, marginBottom: '1.5rem' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            style={{ color: '#aaa', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '2.5rem', maxWidth: '320px' }}
          >
            Capturo momentos que perduran para siempre. Más de 15 años inmortalizando bodas, retratos y proyectos corporativos con una visión única y personal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link href="/demos/fotografo/galeria" style={{
              background: GOLD, color: BLACK, padding: '0.85rem 1.8rem',
              fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.15em',
              textDecoration: 'none', display: 'inline-block',
            }}>
              VER GALERÍA
            </Link>
            <Link href="/demos/fotografo/contacto" style={{
              border: `1px solid ${GOLD}`, color: GOLD, padding: '0.85rem 1.8rem',
              fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.15em',
              textDecoration: 'none', display: 'inline-block',
            }}>
              CONTRATAR
            </Link>
          </motion.div>
        </div>

        {/* RIGHT 60% */}
        <div style={{ width: '60%', position: 'relative', overflow: 'hidden' }}>
          <HeroImageHover />
        </div>
      </section>

      {/* CATEGORIES BAR */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ borderTop: `1px solid ${GOLD}33`, borderBottom: `1px solid ${GOLD}33`, overflow: 'hidden' }}
      >
        <motion.div
          animate={{ x: [0, -800] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap', padding: '1rem 0' }}
        >
          {['BODA', 'RETRATO', 'CORPORATIVO', 'NATURALEZA', 'MODA', 'BODA', 'RETRATO', 'CORPORATIVO', 'NATURALEZA', 'MODA'].map((cat, i) => (
            <span key={i} style={{ padding: '0 2.5rem', fontSize: '0.75rem', letterSpacing: '0.3em', fontWeight: 700, color: i % 2 === 0 ? GOLD : '#555' }}>
              {cat} {i < 9 && <span style={{ color: GOLD, marginLeft: '2.5rem' }}>·</span>}
            </span>
          ))}
        </motion.div>
      </motion.section>

      {/* GALLERY PREVIEW */}
      <section ref={galleryRef} style={{ padding: '5rem 4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: GOLD, marginBottom: '0.75rem', fontWeight: 700 }}>TRABAJOS RECIENTES</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>Últimas Obras</h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '0.75rem',
          height: '700px',
        }}>
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.seed} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <Link href="/demos/fotografo/galeria" style={{
            border: `1px solid ${GOLD}`, color: GOLD, padding: '1rem 3rem',
            fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.2em',
            textDecoration: 'none', display: 'inline-block',
          }}>
            VER GALERÍA COMPLETA
          </Link>
        </motion.div>
      </section>

      {/* STATS */}
      <section style={{ padding: '4rem', borderTop: `1px solid ${GOLD}22`, borderBottom: `1px solid ${GOLD}22` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '700px', margin: '0 auto' }}>
          <StatCounter end={850} label="SESIONES REALIZADAS" suffix="+" />
          <StatCounter end={15} label="AÑOS DE EXPERIENCIA" suffix="" />
          <StatCounter end={49} label="VALORACIÓN MEDIA" suffix="" />
        </div>
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <span style={{ color: GOLD, fontSize: '2rem', fontWeight: 900 }}>4.9★</span>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', height: '400px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="https://picsum.photos/seed/photographer-cta/1400/400"
          alt="Trabaja con nosotros"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.75)' }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: GOLD, marginBottom: '1rem', fontWeight: 700 }}>LISTO PARA EMPEZAR</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            TRABAJEMOS JUNTOS
          </h2>
          <Link href="/demos/fotografo/contacto" style={{
            background: GOLD, color: BLACK, padding: '1rem 3rem',
            fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.2em',
            textDecoration: 'none', display: 'inline-block',
          }}>
            SOLICITAR PRESUPUESTO
          </Link>
        </motion.div>
      </section>

    </main>
  );
}

function HeroImageHover() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
    >
      <img
        src="https://picsum.photos/seed/photographer-hero/800/1000"
        alt="Fotografía profesional"
        style={{ objectFit: 'cover', width: '100%', height: '100%', transition: 'transform 0.8s ease', transform: hovered ? 'scale(1.03)' : 'scale(1)' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered ? `rgba(184,134,11,0.15)` : 'rgba(0,0,0,0.1)',
        transition: 'background 0.5s ease',
      }} />
    </div>
  );
}

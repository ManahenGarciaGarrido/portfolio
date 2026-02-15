'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

function ParallaxImage({
  src,
  alt,
  height = '600px',
  fullWidth = false,
}: {
  src: string;
  alt: string;
  height?: string;
  fullWidth?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        height,
        width: '100%',
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '116%',
          objectFit: 'cover',
          display: 'block',
          y,
        }}
      />
    </motion.div>
  );
}

const editorialImages = [
  { type: 'full', seed: 'look1', w: 1200, h: 700, caption: 'La oscuridad como lienzo' },
  { type: 'half', seed: 'look2', w: 600, h: 800, caption: 'Volumen y silueta' },
  { type: 'half', seed: 'look3', w: 600, h: 800, caption: 'Contraste radical' },
  { type: 'full', seed: 'look4', w: 1200, h: 700, caption: 'Movimiento en negro' },
  { type: 'half', seed: 'look5', w: 600, h: 800, caption: 'Detalles que definen' },
  { type: 'half', seed: 'look6', w: 600, h: 800, caption: 'Luz y sombra' },
];

function EditorialCaption({ text }: { text: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{
        position: 'absolute', bottom: '20px', left: '24px',
        color: '#fff', fontSize: '13px', fontStyle: 'italic',
        letterSpacing: '0.05em', margin: 0,
        textShadow: '0 1px 8px rgba(0,0,0,0.6)',
        zIndex: 2,
      }}
    >
      {text}
    </motion.p>
  );
}

export default function LookbookPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });

  const fullImages = editorialImages.filter(i => i.type === 'full');
  const halfImages = editorialImages.filter(i => i.type === 'half');

  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }}>

      {/* HERO FULLSCREEN */}
      <section
        ref={heroRef}
        style={{ position: 'relative', minHeight: 'max(100svh, 500px)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <motion.img
          src="https://picsum.photos/seed/lookbook-hero/1400/800"
          alt="Lookbook SS25"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '116%',
            objectFit: 'cover', objectPosition: 'center',
            y: heroY,
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 100%)'
        }} />
        <motion.div
          style={{ position: 'relative', zIndex: 1, textAlign: 'center', opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ color: '#FFE600', fontSize: '12px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '20px' }}
          >
            SPRING / SUMMER 2025
          </motion.p>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{
                fontSize: 'clamp(48px, 10vw, 140px)', fontWeight: 900,
                lineHeight: 0.9, margin: '0 0 12px', letterSpacing: '-0.03em'
              }}
            >
              SS25
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{
                fontSize: 'clamp(20px, 3.5vw, 48px)', fontWeight: 300, margin: 0,
                letterSpacing: '0.15em', color: '#ddd', fontStyle: 'italic'
              }}
            >
              Oscuridad y Luz
            </motion.h2>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}
        >
          <span style={{ color: '#fff', fontSize: '11px', letterSpacing: '0.2em' }}>DESPLAZA</span>
          <div style={{ width: '1px', height: '48px', backgroundColor: '#FFE600' }} />
        </motion.div>
      </section>

      {/* INTRO TEXT */}
      <motion.section
        ref={introRef}
        initial={{ opacity: 0, y: 40 }}
        animate={introInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="r-section" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '24px' }}>
          — NOTA EDITORIAL
        </p>
        <p style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 300, lineHeight: 1.7, color: '#ccc', fontStyle: 'italic' }}>
          "La colección SS25 explora la dualidad entre lo oscuro y lo luminoso. Cada look es un viaje entre la sombra y la revelación, entre la estructura y la fluidez."
        </p>
        <p style={{ color: '#555', fontSize: '13px', letterSpacing: '0.1em', marginTop: '24px' }}>
          — NOIR Studio, Dirección Creativa
        </p>
      </motion.section>

      {/* EDITORIAL GRID */}
      <section style={{ padding: '0 0 100px' }}>

        {/* FULL WIDTH: look1 */}
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <ParallaxImage src="https://picsum.photos/seed/look1/1200/700" alt="Look 1" height="70vh" fullWidth />
          <EditorialCaption text="La oscuridad como lienzo — Look 01" />
        </div>

        {/* 2 COL: look2 + look3 */}
        <div className="r-two-col" style={{ gap: '4px', marginBottom: '4px' }}>
          <div style={{ position: 'relative' }}>
            <ParallaxImage src="https://picsum.photos/seed/look2/600/800" alt="Look 2" height="80vh" />
            <EditorialCaption text="Volumen y silueta — Look 02" />
          </div>
          <div style={{ position: 'relative' }}>
            <ParallaxImage src="https://picsum.photos/seed/look3/600/800" alt="Look 3" height="80vh" />
            <EditorialCaption text="Contraste radical — Look 03" />
          </div>
        </div>

        {/* FULL WIDTH: look4 */}
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <ParallaxImage src="https://picsum.photos/seed/look4/1200/700" alt="Look 4" height="70vh" fullWidth />
          <EditorialCaption text="Movimiento en negro — Look 04" />
          {/* Overlay text */}
          <div style={{
            position: 'absolute', top: '50%', right: '60px', transform: 'translateY(-50%)',
            textAlign: 'right', zIndex: 2
          }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', fontWeight: 700, margin: '0 0 8px' }}>LOOK 04</p>
              <p style={{ color: '#fff', fontSize: '24px', fontWeight: 300, fontStyle: 'italic', margin: 0, lineHeight: 1.3 }}>
                "Moverse entre<br />sombras"
              </p>
            </motion.div>
          </div>
        </div>

        {/* 2 COL: look5 + look6 */}
        <div className="r-two-col" style={{ gap: '4px' }}>
          <div style={{ position: 'relative' }}>
            <ParallaxImage src="https://picsum.photos/seed/look5/600/800" alt="Look 5" height="80vh" />
            <EditorialCaption text="Detalles que definen — Look 05" />
          </div>
          <div style={{ position: 'relative' }}>
            <ParallaxImage src="https://picsum.photos/seed/look6/600/800" alt="Look 6" height="80vh" />
            <EditorialCaption text="Luz y sombra — Look 06" />
          </div>
        </div>
      </section>

      {/* SHOP THE LOOK CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="r-section" style={{
          textAlign: 'center',
          borderTop: '1px solid #1a1a1a'
        }}
      >
        <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '20px' }}>
          — SHOP THE LOOK
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 64px)', fontWeight: 900, margin: '0 0 32px', lineHeight: 1 }}>
          CONSIGUE EL LOOK
        </h2>
        <a href="/demos/tienda-moda/productos">
          <button style={{
            backgroundColor: '#FFE600', color: '#000', border: 'none',
            padding: '18px 52px', fontWeight: 900, fontSize: '13px',
            letterSpacing: '0.2em', cursor: 'pointer'
          }}>
            EXPLORAR COLECCIÓN
          </button>
        </a>
      </motion.section>
    </div>
  );
}

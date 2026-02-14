'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const gold = '#d4a017';
const cream = '#fff5e6';
const darkBrown = '#0d0500';
const bg = '#1a0a00';

type GalleryItem = {
  seed: string;
  width: number;
  height: number;
  imgW: number;
  imgH: number;
  caption: string;
  span?: number;
};

const galleryItems: GalleryItem[] = [
  { seed: 'restaurant1', width: 800, height: 600, imgW: 800, imgH: 600, caption: 'Salón principal' },
  { seed: 'restaurant2', width: 600, height: 800, imgW: 600, imgH: 800, caption: 'Detalle de mesa' },
  { seed: 'restaurant3', width: 600, height: 800, imgW: 600, imgH: 800, caption: 'La barra' },
  { seed: 'restaurant4', width: 1200, height: 600, imgW: 1200, imgH: 600, caption: 'Vista panorámica del comedor', span: 2 },
  { seed: 'restaurant5', width: 600, height: 800, imgW: 600, imgH: 800, caption: 'Bodega' },
  { seed: 'restaurant6', width: 800, height: 600, imgW: 800, imgH: 600, caption: 'La cocina en acción' },
  { seed: 'restaurant7', width: 600, height: 800, imgW: 600, imgH: 800, caption: 'Maridaje perfecto' },
  { seed: 'restaurant8', width: 1200, height: 600, imgW: 1200, imgH: 600, caption: 'Terraza de verano', span: 2 },
  { seed: 'restaurant9', width: 800, height: 600, imgW: 800, imgH: 600, caption: 'Mise en place' },
  { seed: 'restaurant10', width: 600, height: 800, imgW: 600, imgH: 800, caption: 'Postres del día' },
  { seed: 'restaurant11', width: 600, height: 800, imgW: 600, imgH: 800, caption: 'El chef Carlos' },
  { seed: 'restaurant12', width: 800, height: 600, imgW: 800, imgH: 600, caption: 'Atardecer en Arcos' },
];

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  const isLandscape = item.imgW > item.imgH;
  const isTall = item.imgH > item.imgW;
  const aspectRatio = item.span === 2
    ? '21/9'
    : isLandscape ? '4/3' : isTall ? '3/4' : '1/1';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        gridColumn: item.span === 2 ? 'span 2' : undefined,
        aspectRatio,
      }}
    >
      <img
        src={`https://picsum.photos/seed/${item.seed}/${item.imgW}/${item.imgH}`}
        alt={item.caption}
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transition: 'transform 0.7s ease',
          transform: hovered ? 'scale(1.06)' : 'scale(1)'
        }}
      />
      {/* Gold border overlay on hover */}
      <motion.div
        initial={false}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute', inset: '12px',
          border: `2px solid ${gold}`,
          pointerEvents: 'none',
        }}
      />
      {/* Dark overlay with caption */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)',
          display: 'flex', alignItems: 'flex-end', padding: '24px',
        }}
      >
        <div>
          <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.2em', fontWeight: 600, margin: '0 0 4px' }}>
            ARCOS
          </p>
          <p style={{ color: cream, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '16px', margin: 0 }}>
            {item.caption}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GaleriaPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' });

  return (
    <div style={{ backgroundColor: bg, color: cream, minHeight: '100vh' }}>

      {/* HEADER */}
      <section ref={headerRef} className="r-section-sm" style={{ textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 600, marginBottom: '16px' }}
        >
          — IMÁGENES
        </motion.p>
        <div style={{ overflow: 'hidden', marginBottom: '24px' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={headerInView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(52px, 10vw, 120px)',
              fontFamily: 'Georgia, serif', fontStyle: 'italic',
              fontWeight: 400, margin: 0, color: cream, lineHeight: 0.95,
              letterSpacing: '-0.02em'
            }}
          >
            Galería
          </motion.h1>
        </div>
        <div style={{ width: '60px', height: '1px', backgroundColor: gold, margin: '0 auto 24px' }} />
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ color: '#9a7a5a', fontSize: '15px', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}
        >
          Una mirada íntima a los espacios, los platos y las personas que hacen de Arcos un lugar único en el panorama gastronómico español.
        </motion.p>
      </section>

      {/* GALLERY GRID */}
      <section style={{ padding: '0 clamp(16px,3vw,40px) clamp(40px,6vw,80px)' }}>
        <div className="r-two-col" style={{
          gap: '12px',
          maxWidth: '1300px',
          margin: '0 auto'
        }}>
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.seed} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="r-section-sm" style={{
          textAlign: 'center',
          borderTop: `1px solid #2a1800`, backgroundColor: darkBrown
        }}
      >
        <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 600, marginBottom: '20px' }}>
          — CONTACTO
        </p>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 56px)',
          fontFamily: 'Georgia, serif', fontStyle: 'italic',
          fontWeight: 400, margin: '0 0 16px', color: cream, lineHeight: 1.2
        }}>
          Para reservas y consultas
        </h2>
        <p style={{ color: '#9a7a5a', fontSize: '16px', maxWidth: '500px', margin: '0 auto 12px', lineHeight: 1.7 }}>
          Estaremos encantados de atenderle y ayudarle a planificar su visita o evento privado.
        </p>
        <p style={{ color: gold, fontSize: '20px', fontFamily: 'Georgia, serif', marginBottom: '32px' }}>
          +34 91 234 56 78
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/demos/restaurante/reservar">
            <button style={{
              backgroundColor: gold, color: darkBrown,
              border: 'none', padding: '16px 44px',
              fontWeight: 700, fontSize: '13px', letterSpacing: '0.2em', cursor: 'pointer'
            }}>
              RESERVAR MESA
            </button>
          </a>
          <a href="/demos/restaurante/carta">
            <button style={{
              backgroundColor: 'transparent', color: cream,
              border: `1px solid #3a2010`, padding: '16px 44px',
              fontWeight: 600, fontSize: '13px', letterSpacing: '0.2em', cursor: 'pointer'
            }}>
              VER CARTA
            </button>
          </a>
        </div>
      </motion.section>
    </div>
  );
}

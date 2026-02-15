'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#0d0d0d';
const gold = '#d4af37';
const textColor = '#f5f0e0';
const dark = '#161616';

type FilterType = 'Todos' | 'Bodas' | 'Corporativo' | 'Celebraciones' | 'Decoración';

const photos: Array<{ seed: string; category: FilterType; title: string }> = [
  { seed: 'event1', category: 'Bodas', title: 'Boda en Hacienda Benazuza' },
  { seed: 'event2', category: 'Corporativo', title: 'Gala Anual Empresa' },
  { seed: 'event3', category: 'Bodas', title: 'Ceremonia en jardines' },
  { seed: 'event4', category: 'Celebraciones', title: 'Cumpleaños de lujo' },
  { seed: 'event5', category: 'Decoración', title: 'Mesa de novios' },
  { seed: 'event6', category: 'Bodas', title: 'Boda íntima' },
  { seed: 'event7', category: 'Corporativo', title: 'Presentación de producto' },
  { seed: 'event8', category: 'Decoración', title: 'Floral design' },
  { seed: 'event9', category: 'Celebraciones', title: 'Comunión exclusiva' },
  { seed: 'event10', category: 'Bodas', title: 'Vals nupcial' },
  { seed: 'event11', category: 'Decoración', title: 'Centros de mesa' },
  { seed: 'event12', category: 'Corporativo', title: 'Team building al aire libre' },
];

const filters: FilterType[] = ['Todos', 'Bodas', 'Corporativo', 'Celebraciones', 'Decoración'];

export default function EventosGaleria() {
  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  const videoRef = useRef(null);
  const ctaRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const galleryInView = useInView(galleryRef, { once: true, margin: '-60px' });
  const videoInView = useInView(videoRef, { once: true, margin: '-60px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  const [activeFilter, setActiveFilter] = useState<FilterType>('Todos');

  const filtered = activeFilter === 'Todos' ? photos : photos.filter(p => p.category === activeFilter);

  return (
    <div style={{ backgroundColor: bg, color: textColor }}>

      {/* HEADER */}
      <section
        ref={headerRef}
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 100px) 60px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at top right, ${gold}06 0%, transparent 60%)` }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: gold, fontSize: '11px', letterSpacing: '0.6em', fontWeight: 700, marginBottom: '16px' }}
          >
            ÉLITE EVENTOS · GALERÍA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: 'clamp(40px, 7vw, 100px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: gold, margin: '0 0 20px', lineHeight: 1, letterSpacing: '0.05em' }}
          >
            MOMENTOS<br />ETERNOS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: '#999', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Una selección de los eventos que hemos tenido el honor de organizar. Cada imagen cuenta una historia.
          </motion.p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <div style={{ backgroundColor: dark, borderTop: `1px solid ${gold}22`, borderBottom: `1px solid ${gold}22`, padding: '20px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                backgroundColor: activeFilter === f ? gold : 'transparent',
                color: activeFilter === f ? '#0d0d0d' : `${gold}99`,
                border: `1px solid ${gold}44`,
                padding: '10px 24px',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.15em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <section ref={galleryRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <motion.div
            layout
            className="r-grid-4"
            style={{ gap: '12px' }}
          >
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.seed}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', aspectRatio: '1/1', backgroundColor: dark }}
              >
                <img
                  src={`https://picsum.photos/seed/${photo.seed}/400/350`}
                  alt={photo.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)`,
                  display: 'flex', alignItems: 'flex-end', padding: '16px'
                }}>
                  <div>
                    <p style={{ color: textColor, fontWeight: 600, fontSize: '13px', margin: '0 0 4px' }}>{photo.title}</p>
                    <span style={{ backgroundColor: `${gold}33`, color: gold, fontSize: '10px', fontWeight: 700, padding: '2px 8px', letterSpacing: '0.1em' }}>
                      {photo.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px', color: '#666' }}>
              <p>No hay imágenes en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* VIDEO TESTIMONIAL PLACEHOLDER */}
      <section ref={videoRef} className="r-section" style={{ backgroundColor: dark }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>SUS PALABRAS</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 52px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>
              Video testimonios
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={videoInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', aspectRatio: '16/9', backgroundColor: '#0a0a0a', border: `1px solid ${gold}22`, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img
              src="https://picsum.photos/seed/wedding-video/900/500"
              alt="Video testimonial"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.3 }}
            />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: `2px solid ${gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', cursor: 'pointer', backgroundColor: `${gold}22` }}>
                <span style={{ color: gold, fontSize: '30px', marginLeft: '4px' }}>▶</span>
              </div>
              <p style={{ color: textColor, fontWeight: 700, fontSize: '16px', margin: '0 0 6px', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                "La boda que siempre soñé"
              </p>
              <p style={{ color: '#888', fontSize: '13px' }}>Lucía & Carlos — Hacienda Benazuza, Junio 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0 }}
        animate={ctaInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9 }}
        style={{ backgroundColor: bg, padding: 'clamp(60px, 8vw, 100px) 40px', textAlign: 'center', borderTop: `1px solid ${gold}22` }}
      >
        <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.5em', fontWeight: 700, marginBottom: '16px' }}>TU MOMENTO</p>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 56px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 16px' }}>
          Tu evento podría estar aquí
        </h2>
        <p style={{ color: '#aaa', fontSize: '16px', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.6 }}>
          Únete a las cientos de parejas y empresas que confían en nosotros para crear momentos únicos.
        </p>
        <Link href="/demos/eventos/contacto">
          <button style={{ backgroundColor: gold, color: '#0d0d0d', border: 'none', padding: '18px 52px', fontWeight: 800, fontSize: '14px', letterSpacing: '0.15em', cursor: 'pointer' }}>
            CONSULTA GRATUITA
          </button>
        </Link>
      </motion.section>

    </div>
  );
}

'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const GOLD = '#b8860b';
const WHITE = '#ffffff';
const BLACK = '#000000';

const CATEGORIES = ['TODOS', 'BODA', 'RETRATO', 'CORPORATIVO', 'MODA', 'NATURALEZA'];

const PHOTOS = [
  { id: 1, seed: 'gallery1', w: 400, h: 600, category: 'RETRATO' },
  { id: 2, seed: 'gallery2', w: 600, h: 400, category: 'BODA' },
  { id: 3, seed: 'gallery3', w: 500, h: 500, category: 'MODA' },
  { id: 4, seed: 'gallery4', w: 600, h: 400, category: 'CORPORATIVO' },
  { id: 5, seed: 'gallery5', w: 400, h: 600, category: 'NATURALEZA' },
  { id: 6, seed: 'gallery6', w: 500, h: 500, category: 'BODA' },
  { id: 7, seed: 'gallery7', w: 600, h: 400, category: 'RETRATO' },
  { id: 8, seed: 'gallery8', w: 400, h: 600, category: 'MODA' },
  { id: 9, seed: 'gallery9', w: 600, h: 400, category: 'CORPORATIVO' },
  { id: 10, seed: 'gallery10', w: 500, h: 500, category: 'NATURALEZA' },
  { id: 11, seed: 'gallery11', w: 400, h: 600, category: 'BODA' },
  { id: 12, seed: 'gallery12', w: 600, h: 400, category: 'RETRATO' },
  { id: 13, seed: 'gallery13', w: 500, h: 500, category: 'MODA' },
  { id: 14, seed: 'gallery14', w: 400, h: 600, category: 'NATURALEZA' },
  { id: 15, seed: 'gallery15', w: 600, h: 400, category: 'CORPORATIVO' },
];

function PhotoCard({ photo, index, onClick }: { photo: typeof PHOTOS[0]; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: (index % 5) * 0.08, duration: 0.5 }}
      layout
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        border: hovered ? `2px solid ${GOLD}` : '2px solid transparent',
        transition: 'border 0.3s ease',
        breakInside: 'avoid', marginBottom: '0.75rem',
      }}
    >
      <img
        src={`https://picsum.photos/seed/${photo.seed}/${photo.w}/${photo.h}`}
        alt={photo.category}
        style={{ width: '100%', display: 'block', objectFit: 'cover', transition: 'transform 0.5s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered ? 'rgba(0,0,0,0.55)' : 'transparent',
        transition: 'background 0.3s ease',
        display: 'flex', alignItems: 'flex-end', padding: '1rem',
      }}>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{ background: GOLD, color: BLACK, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', padding: '0.3rem 0.75rem' }}
          >
            {photo.category}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}

export default function GaleriaPage() {
  const [active, setActive] = useState('TODOS');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'TODOS' ? PHOTOS : PHOTOS.filter(p => p.category === active);
  const currentIdx = lightbox !== null ? filtered.findIndex(p => p.id === lightbox) : -1;

  function prevPhoto() {
    if (currentIdx > 0) setLightbox(filtered[currentIdx - 1].id);
  }
  function nextPhoto() {
    if (currentIdx < filtered.length - 1) setLightbox(filtered[currentIdx + 1].id);
  }

  const currentPhoto = lightbox !== null ? filtered.find(p => p.id === lightbox) : null;

  return (
    <main style={{ background: BLACK, color: WHITE, minHeight: '100vh' }}>
      <style>{`.foto-masonry { columns: 3; column-gap: 0.75rem; } @media (max-width: 900px) { .foto-masonry { columns: 2; } } @media (max-width: 560px) { .foto-masonry { columns: 1; } }`}</style>

      {/* Header */}
      <section style={{ padding: 'clamp(2rem,5vw,4rem) clamp(1rem,4vw,4rem) 2rem', borderBottom: `1px solid ${GOLD}22` }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: GOLD, marginBottom: '0.75rem', fontWeight: 700 }}>PORTAFOLIO COMPLETO</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '1rem' }}>Galería de Trabajos</h1>
          <p style={{ color: '#888', maxWidth: '500px', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Una selección de mis mejores trabajos a lo largo de 15 años de carrera profesional.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: '2rem clamp(1rem,4vw,4rem)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {CATEGORIES.map(cat => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActive(cat)}
            style={{
              padding: '0.6rem 1.4rem',
              background: active === cat ? GOLD : 'transparent',
              color: active === cat ? BLACK : '#888',
              border: `1px solid ${active === cat ? GOLD : '#333'}`,
              fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.15em',
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
          >
            {cat}
          </motion.button>
        ))}
        <span style={{ marginLeft: 'auto', color: '#555', fontSize: '0.8rem', alignSelf: 'center' }}>
          {filtered.length} fotos
        </span>
      </section>

      {/* Masonry Grid */}
      <section style={{ padding: '0 clamp(1rem,4vw,4rem) clamp(2.5rem,5vw,5rem)' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="foto-masonry"
          >
            {filtered.map((photo, i) => (
              <PhotoCard key={photo.id} photo={photo} index={i} onClick={() => setLightbox(photo.id)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(0,0,0,0.95)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                background: 'transparent', border: `1px solid ${GOLD}`, color: GOLD,
                width: '44px', height: '44px', fontSize: '1.2rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10,
              }}
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              disabled={currentIdx === 0}
              style={{
                position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                background: 'transparent', border: `1px solid ${GOLD}55`, color: GOLD,
                width: '50px', height: '50px', fontSize: '1.5rem', cursor: currentIdx === 0 ? 'not-allowed' : 'pointer',
                opacity: currentIdx === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10,
              }}
            >
              ‹
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '85vw', maxHeight: '85vh', position: 'relative' }}
            >
              <img
                src={`https://picsum.photos/seed/${currentPhoto.seed}/${currentPhoto.w}/${currentPhoto.h}`}
                alt={currentPhoto.category}
                style={{ maxWidth: '85vw', maxHeight: '85vh', objectFit: 'contain', display: 'block', border: `1px solid ${GOLD}33` }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'rgba(0,0,0,0.7)', padding: '0.75rem 1rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ color: GOLD, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em' }}>{currentPhoto.category}</span>
                <span style={{ color: '#555', fontSize: '0.7rem' }}>{currentIdx + 1} / {filtered.length}</span>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              disabled={currentIdx === filtered.length - 1}
              style={{
                position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                background: 'transparent', border: `1px solid ${GOLD}55`, color: GOLD,
                width: '50px', height: '50px', fontSize: '1.5rem', cursor: currentIdx === filtered.length - 1 ? 'not-allowed' : 'pointer',
                opacity: currentIdx === filtered.length - 1 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10,
              }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CREAM = '#fff9f0';
const LAVENDER = '#c9a0c9';
const DEEP = '#8b5a8b';
const LIGHT_LAVENDER = '#f0e6f0';

const GALLERY_PHOTOS = [
  { seed: 'spa-gallery1', h: 400, label: 'Sala de Masajes' },
  { seed: 'spa-gallery2', h: 600, label: 'Área de Relajación' },
  { seed: 'spa-gallery3', h: 400, label: 'Facial Suite' },
  { seed: 'spa-gallery4', h: 600, label: 'Baño Termal' },
  { seed: 'spa-gallery5', h: 400, label: 'Jardín Zen' },
  { seed: 'spa-gallery6', h: 600, label: 'Sala VIP' },
  { seed: 'spa-gallery7', h: 400, label: 'Zona de Aguas' },
  { seed: 'spa-gallery8', h: 600, label: 'Recepción' },
  { seed: 'spa-gallery9', h: 400, label: 'Terraza Exterior' },
  { seed: 'spa-gallery10', h: 400, label: 'Sala de Rituales' },
];

const IG_PHOTOS = [
  'spa-ig1', 'spa-ig2', 'spa-ig3',
  'spa-ig4', 'spa-ig5', 'spa-ig6',
];

function GalleryPhoto({ photo, index }: { photo: typeof GALLERY_PHOTOS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 4) * 0.1, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        breakInside: 'avoid', marginBottom: '0.75rem',
      }}
    >
      <img
        src={`https://picsum.photos/seed/${photo.seed}/600/${photo.h}`}
        alt={photo.label}
        style={{
          width: '100%', display: 'block', objectFit: 'cover',
          transition: 'transform 0.6s ease',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered ? 'linear-gradient(135deg, rgba(201,160,201,0.6) 0%, rgba(139,90,139,0.5) 100%)' : 'transparent',
        transition: 'background 0.4s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ width: '40px', height: '1px', background: '#fff', margin: '0 auto 0.75rem' }} />
            <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.05em' }}>{photo.label}</div>
            <div style={{ width: '40px', height: '1px', background: '#fff', margin: '0.75rem auto 0' }} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function GaleriaPage() {
  return (
    <main style={{ background: CREAM, color: DEEP, minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ padding: '5rem 4rem 3rem', textAlign: 'center', background: `linear-gradient(135deg, ${LIGHT_LAVENDER} 0%, ${CREAM} 100%)`, borderBottom: `1px solid ${LAVENDER}33` }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.35em', color: LAVENDER, marginBottom: '0.75rem', fontWeight: 700 }}>VISITA VIRTUAL</div>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 300, fontStyle: 'italic', color: DEEP, marginBottom: '1rem', lineHeight: 1.1 }}>
            Nuestro Espacio
          </h1>
          <div style={{ width: '50px', height: '1px', background: LAVENDER, margin: '0 auto 1.5rem' }} />
          <p style={{ color: '#b090b0', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Cada rincón de Celestial Spa ha sido cuidadosamente diseñado para invitarte a desconectar del mundo y reconectar contigo misma.
          </p>
        </motion.div>
      </section>

      {/* Masonry Gallery */}
      <section style={{ padding: '3rem 4rem' }}>
        <div style={{ columns: '3', columnGap: '0.75rem' }}>
          {GALLERY_PHOTOS.map((photo, i) => (
            <GalleryPhoto key={photo.seed} photo={photo} index={i} />
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section style={{ padding: '3rem 4rem 5rem', background: LIGHT_LAVENDER }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: LAVENDER, marginBottom: '0.75rem', fontWeight: 700 }}>REDES SOCIALES</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, fontStyle: 'italic', color: DEEP, marginBottom: '0.5rem' }}>
            Síguenos en Instagram
          </h2>
          <a href="#" style={{ color: LAVENDER, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
            @celestialspa_madrid
          </a>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {IG_PHOTOS.map((seed, i) => (
            <motion.div
              key={seed}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              style={{ aspectRatio: '1', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
            >
              <img
                src={`https://picsum.photos/seed/${seed}/300/300`}
                alt={`Instagram ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = `rgba(201,160,201,0.5)`)}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ opacity: 0 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '2rem' }}
        >
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            border: `1.5px solid ${LAVENDER}`, color: DEEP, padding: '0.75rem 2rem',
            fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.12em',
            textDecoration: 'none',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            SEGUIR EN INSTAGRAM
          </a>
        </motion.div>
      </section>

    </main>
  );
}

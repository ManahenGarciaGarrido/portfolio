'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const bg = '#0a0805';
const accent = '#c8a96e';
const text = '#f5ece0';
const textMuted = '#b8a898';
const cardBg = '#130f0a';

type GalleryCategory = 'Todo' | 'Habitaciones' | 'Restaurante' | 'Spa' | 'Jardín';

const images = [
  { id: 1, seed: 'hotel-gallery1', w: 600, h: 400, category: 'Habitaciones' as GalleryCategory, caption: 'Suite Presidencial — Vista panorámica', span: 2 },
  { id: 2, seed: 'hotel-room-gallery1', w: 400, h: 600, category: 'Habitaciones' as GalleryCategory, caption: 'Suite Deluxe — Bañera de mármol', span: 1 },
  { id: 3, seed: 'hotel-gallery2', w: 600, h: 400, category: 'Restaurante' as GalleryCategory, caption: 'El Naranjo — Sala principal', span: 1 },
  { id: 4, seed: 'hotel-gallery3', w: 600, h: 400, category: 'Jardín' as GalleryCategory, caption: 'Jardín histórico — Naranjos centenarios', span: 1 },
  { id: 5, seed: 'hotel-room-gallery2', w: 400, h: 600, category: 'Habitaciones' as GalleryCategory, caption: 'Suite Ático — Terraza privada', span: 1 },
  { id: 6, seed: 'hotel-gallery4', w: 600, h: 400, category: 'Spa' as GalleryCategory, caption: 'Spa Premium — Sala de aguas', span: 2 },
  { id: 7, seed: 'hotel-gallery5', w: 600, h: 400, category: 'Restaurante' as GalleryCategory, caption: 'El Naranjo — Menú degustación', span: 1 },
  { id: 8, seed: 'hotel-gallery6', w: 600, h: 400, category: 'Jardín' as GalleryCategory, caption: 'Piscina exterior — Vista al jardín', span: 1 },
  { id: 9, seed: 'hotel-room-gallery3', w: 400, h: 600, category: 'Habitaciones' as GalleryCategory, caption: 'Villa Jardín — Acceso privado', span: 1 },
  { id: 10, seed: 'hotel-gallery7', w: 600, h: 400, category: 'Spa' as GalleryCategory, caption: 'Cabina de tratamientos individuales', span: 1 },
  { id: 11, seed: 'hotel-room-gallery4', w: 400, h: 600, category: 'Habitaciones' as GalleryCategory, caption: 'Suite Junior — Salón privado', span: 1 },
  { id: 12, seed: 'hotel-gallery8', w: 600, h: 400, category: 'Jardín' as GalleryCategory, caption: 'Terraza exterior — Puesta de sol', span: 1 },
];

const categories: GalleryCategory[] = ['Todo', 'Habitaciones', 'Restaurante', 'Spa', 'Jardín'];

function GalleryImage({ img, delay }: { img: typeof images[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        gridColumn: `span ${img.span}`,
        aspectRatio: img.w > img.h ? '3/2' : '2/3',
        background: cardBg,
      }}
    >
      <img
        src={`https://picsum.photos/seed/${img.seed}/${img.w}/${img.h}`}
        alt={img.caption}
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.7s ease',
        }}
      />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(10,8,5,0.75)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '24px',
            }}
          >
            <div style={{ width: '32px', height: '1px', background: accent, marginBottom: '14px' }} />
            <p style={{ color: text, fontSize: '14px', textAlign: 'center', fontFamily: 'Georgia,serif', fontStyle: 'italic', lineHeight: 1.5 }}>
              {img.caption}
            </p>
            <div style={{ width: '32px', height: '1px', background: accent, marginTop: '14px' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Todo');

  const filtered = activeCategory === 'Todo'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <main style={{ background: bg, color: text, minHeight: 'max(100svh, 500px)' }}>
      {/* HEADER */}
      <section style={{ padding: 'clamp(40px, 8vw, 80px) 0 clamp(28px, 5vw, 56px)', textAlign: 'center', borderBottom: `1px solid ${accent}22` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: accent, fontSize: '12px', letterSpacing: '0.25em', marginBottom: '16px', fontWeight: 600 }}
          >
            PALACIO VERDE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px, 6vw, 60px)', color: text, fontWeight: 400, marginBottom: '16px', letterSpacing: '0.1em' }}
          >
            GALERÍA
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ width: '80px', height: '2px', background: accent, margin: '0 auto 24px' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ color: textMuted, fontSize: '16px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}
          >
            Un viaje visual por los rincones más especiales del Palacio Verde. Cada imagen cuenta una historia de 150 años.
          </motion.p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section style={{ padding: '48px 0 0' }}>
        <div className="r-container">
          <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? accent : 'transparent',
                  color: activeCategory === cat ? bg : textMuted,
                  border: `1px solid ${activeCategory === cat ? accent : '#3a2a1a'}`,
                  padding: '10px 22px', fontSize: '12px', fontWeight: 600,
                  letterSpacing: '0.1em', cursor: 'pointer',
                  transition: 'all 0.2s', minHeight: '44px',
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* MASONRY GRID */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                gridAutoFlow: 'dense',
              }}
            >
              {filtered.map((img, i) => (
                <GalleryImage key={img.id} img={img} delay={i * 0.06} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FEATURED IMAGE - FULL WIDTH */}
      <section style={{ padding: '80px 0' }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/6' }}
          >
            <img
              src="https://picsum.photos/seed/hotel-gallery9/1200/450"
              alt="Vista aérea del Palacio Verde"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(10,8,5,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column',
            }}>
              <div style={{ width: '60px', height: '1px', background: accent, marginBottom: '16px' }} />
              <p style={{ color: text, fontFamily: 'Georgia,serif', fontSize: 'clamp(16px, 3vw, 28px)', fontStyle: 'italic', textAlign: 'center', padding: '0 24px' }}>
                "Un palacio que el tiempo ha sabido conservar con una elegancia incomparable"
              </p>
              <div style={{ color: textMuted, fontSize: '13px', marginTop: '12px' }}>— Condé Nast Traveller España, 2024</div>
              <div style={{ width: '60px', height: '1px', background: accent, marginTop: '16px' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHOTOGRAPHY CREDITS */}
      <section style={{ padding: '60px 0', background: cardBg }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Georgia,serif', color: accent, fontSize: '26px', fontWeight: 400, marginBottom: '16px' }}>
                Fotografía de Hotel
              </h2>
              <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
                Las imágenes de este hotel han sido realizadas por el reconocido fotógrafo de arquitectura e interiores Carlos de la Torre, ganador del premio ADI 2023.
              </p>
              <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.8 }}>
                Cada sesión fotográfica se planifica meticulosamente para capturar la luz natural del sur de España en su estado más puro, revelando la esencia del Palacio Verde en cada disparo.
              </p>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src="https://picsum.photos/seed/hotel-gallery10/600/450"
                alt="Detalle arquitectónico"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section style={{ padding: '60px 0', background: bg }}>
        <div className="r-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Georgia,serif', color: text, fontSize: '26px', fontWeight: 400 }}>Reconocimientos</h2>
          </div>
          <div className="r-grid-4">
            {[
              { award: 'Mejor Hotel Boutique', year: '2024', by: 'National Geographic Traveller' },
              { award: '5 Estrellas GL', year: '2023', by: 'Guía Michelin Hoteles' },
              { award: 'Leading Hotels', year: '2024', by: 'The Leading Hotels of the World' },
              { award: 'Patrimonio Histórico', year: '2021', by: 'Junta de Andalucía' },
            ].map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  textAlign: 'center', padding: '28px 20px',
                  border: `1px solid ${accent}33`,
                  background: cardBg,
                }}
              >
                <div style={{ color: accent, fontSize: '28px', marginBottom: '12px' }}>✦</div>
                <div style={{ color: text, fontSize: '14px', fontWeight: 700, marginBottom: '6px', lineHeight: 1.3 }}>{a.award}</div>
                <div style={{ color: accent, fontSize: '16px', fontWeight: 700, marginBottom: '6px' }}>{a.year}</div>
                <div style={{ color: textMuted, fontSize: '11px', lineHeight: 1.5 }}>{a.by}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

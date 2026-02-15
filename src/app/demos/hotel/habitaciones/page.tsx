'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#0a0805';
const accent = '#c8a96e';
const text = '#f5ece0';
const textMuted = '#b8a898';
const cardBg = '#130f0a';

type RoomCategory = 'Todas' | 'Estándar' | 'Suites' | 'Villas';

const rooms = [
  {
    id: 1, seed: 'hotelroom1', name: 'Habitación Deluxe', category: 'Estándar' as RoomCategory,
    size: '40m²', price: '320', priceWeekend: '380',
    features: ['Cama king size', 'Vistas al jardín', 'Bañera de mármol', 'Terraza privada 8m²', 'WiFi 1Gbps', 'Minibar premium'],
    desc: 'La experiencia Palacio Verde en su forma más pura. Espaciosa y elegante, con todos los detalles que merecen una noche perfecta.',
  },
  {
    id: 2, seed: 'hotelroom2', name: 'Suite Junior', category: 'Suites' as RoomCategory,
    size: '60m²', price: '480', priceWeekend: '580',
    features: ['Salón privado', 'Cama king size', 'Bañera exenta', 'Terraza 15m²', 'Butler personal', 'Desayuno incluido'],
    desc: 'Un oasis de serenidad con salón independiente. La suite ideal para parejas que buscan espacio y privacidad absoluta.',
  },
  {
    id: 3, seed: 'hotelroom3', name: 'Suite Superior', category: 'Suites' as RoomCategory,
    size: '80m²', price: '680', priceWeekend: '820',
    features: ['Dos salones', 'Bañera + ducha lluvia', 'Comedor privado', 'Bodega personal', 'Traslado aeropuerto', 'Servicio de mayordomo'],
    desc: 'Para quienes no conciben el lujo sin espacio. Dos salones independientes, una terraza panorámica y vistas únicas a la Giralda.',
  },
  {
    id: 4, seed: 'hotelroom4', name: 'Suite Ático', category: 'Suites' as RoomCategory,
    size: '95m²', price: '780', priceWeekend: '940',
    features: ['Vista 360° Sevilla', 'Piscina privada exterior', 'Cocina equipada', 'Acceso privado', 'Mayordomo 24h', 'Cena privada'],
    desc: 'En lo más alto del palacio, con vistas de 360° sobre los tejados históricos de Sevilla y una pequeña piscina privada.',
  },
  {
    id: 5, seed: 'hotelroom5', name: 'Villa Jardín', category: 'Villas' as RoomCategory,
    size: '140m²', price: '1.200', priceWeekend: '1.500',
    features: ['Villa independiente', 'Jardín privado 200m²', 'Piscina privada', 'Cocina gourmet', 'Staff exclusivo', 'Acceso 24h spa'],
    desc: 'Una villa independiente integrada en los jardines históricos. El secreto mejor guardado del Palacio Verde: privacidad total y jardín propio.',
  },
  {
    id: 6, seed: 'hotelroom6', name: 'Suite Presidencial', category: 'Suites' as RoomCategory,
    size: '200m²', price: '2.500', priceWeekend: '3.200',
    features: ['Salón de gala privado', 'Dos dormitorios suite', 'Sala de reuniones', 'Chef privado bajo petición', 'Seguridad privada', 'Helipad acceso'],
    desc: 'La joya de la corona. Doscientos metros cuadrados de historia, arte y lujo absoluto. Tres estancias, dos baños completos y el salón privado más impresionante de Sevilla.',
  },
];

const categories: RoomCategory[] = ['Todas', 'Estándar', 'Suites', 'Villas'];

function RoomCard({ room, delay }: { room: typeof rooms[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: cardBg,
        border: `1px solid ${hovered ? accent : '#2a1f15'}`,
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '7/4.8' }}>
        <img
          src={`https://picsum.photos/seed/${room.seed}/700/480`}
          alt={room.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.7s ease',
          }}
        />
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: accent, color: bg,
          fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
          padding: '4px 10px',
        }}>
          {room.category.toUpperCase()}
        </div>
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: 'rgba(10,8,5,0.8)', color: accent,
          fontSize: '12px', fontWeight: 600,
          padding: '4px 10px', border: `1px solid ${accent}44`,
        }}>
          {room.size}
        </div>
      </div>
      <div style={{ padding: '28px' }}>
        <h3 style={{ fontFamily: 'Georgia,serif', color: accent, fontSize: '20px', marginBottom: '10px' }}>{room.name}</h3>
        <p style={{ color: textMuted, fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>{room.desc}</p>

        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: accent, fontSize: '12px', letterSpacing: '0.1em', fontWeight: 600,
              padding: 0, display: 'flex', alignItems: 'center', gap: '6px',
            }}
          >
            {expanded ? '▲' : '▼'} {expanded ? 'OCULTAR' : 'VER'} CARACTERÍSTICAS
          </button>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              style={{ marginTop: '14px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {room.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: accent, fontSize: '10px' }}>✓</span>
                    <span style={{ color: textMuted, fontSize: '12px' }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ color: textMuted, fontSize: '11px', display: 'block' }}>Desde</span>
            <span style={{ color: accent, fontSize: '26px', fontWeight: 700, fontFamily: 'Georgia,serif' }}>{room.price}€</span>
            <span style={{ color: textMuted, fontSize: '12px' }}>/noche</span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link
              href="/demos/hotel/reservar"
              style={{
                background: accent, color: bg,
                padding: '10px 22px', fontSize: '12px',
                fontWeight: 700, letterSpacing: '0.08em', textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              RESERVAR
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HabitacionesPage() {
  const [activeCategory, setActiveCategory] = useState<RoomCategory>('Todas');

  const filtered = activeCategory === 'Todas'
    ? rooms
    : rooms.filter(r => r.category === activeCategory);

  return (
    <main style={{ background: bg, color: text, minHeight: '100vh' }}>
      {/* HEADER */}
      <section style={{ padding: '80px 0 60px', textAlign: 'center', borderBottom: `1px solid ${accent}22` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ color: accent, fontSize: '12px', letterSpacing: '0.25em', marginBottom: '16px', fontWeight: 600 }}
          >
            PALACIO VERDE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px, 6vw, 60px)', color: text, fontWeight: 400, marginBottom: '16px', letterSpacing: '0.08em' }}
          >
            NUESTRAS HABITACIONES
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ width: '80px', height: '2px', background: accent, margin: '0 auto 24px' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ color: textMuted, fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}
          >
            Doce suites únicas, cada una decorada con piezas originales del siglo XIX. Descubre tu espacio perfecto en el corazón de Sevilla.
          </motion.p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: cardBg, padding: '40px 0', borderBottom: `1px solid ${accent}22` }}>
        <div className="r-container">
          <div className="r-stats">
            {[
              { value: '12', label: 'Suites Únicas' },
              { value: '150', label: 'Años de Historia' },
              { value: '4.9★', label: 'Valoración Media' },
              { value: '24h', label: 'Servicio Exclusivo' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '0 16px' }}
              >
                <div style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(28px, 5vw, 44px)', color: accent, fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: textMuted, fontSize: '13px', marginTop: '8px', letterSpacing: '0.05em' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section style={{ padding: '48px 0 0' }}>
        <div className="r-container">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '48px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? accent : 'transparent',
                  color: activeCategory === cat ? bg : textMuted,
                  border: `1px solid ${activeCategory === cat ? accent : '#3a2a1a'}`,
                  padding: '10px 24px', fontSize: '13px', fontWeight: 600,
                  letterSpacing: '0.08em', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="r-grid-2"
          >
            {filtered.map((room, i) => (
              <RoomCard key={room.id} room={room} delay={i * 0.08} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* POLICIES */}
      <section style={{ padding: '80px 0', background: cardBg, marginTop: '80px' }}>
        <div className="r-container">
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Georgia,serif', color: accent, fontSize: '28px', fontWeight: 400, marginBottom: '16px' }}>Información y Políticas</h2>
            <div style={{ width: '50px', height: '1px', background: accent }} />
          </div>
          <div className="r-grid-3" style={{ gap: '24px' }}>
            {[
              {
                title: 'Check-in / Check-out',
                items: ['Check-in: 15:00 — 22:00', 'Check-out: hasta las 12:00', 'Late check-out hasta 14:00 (+50€)', 'Express check-out disponible'],
              },
              {
                title: 'Desayuno & Servicios',
                items: ['Desayuno continental 7:00-11:00', 'Room service las 24 horas', 'Lavandería express', 'Conserjería personal 24h'],
              },
              {
                title: 'Cancelación',
                items: ['Gratuita hasta 72h antes', 'Con penalización 1 noche (-72h)', 'No reembolsable en ofertas', 'Modificaciones sin cargo'],
              },
            ].map((p) => (
              <div key={p.title} style={{ background: bg, padding: '28px', border: `1px solid #2a1f15` }}>
                <h3 style={{ color: accent, fontSize: '15px', letterSpacing: '0.08em', marginBottom: '16px', fontWeight: 600 }}>{p.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {p.items.map((item) => (
                    <li key={item} style={{ color: textMuted, fontSize: '13px', padding: '6px 0', borderBottom: `1px solid #1a1208`, display: 'flex', gap: '10px' }}>
                      <span style={{ color: accent }}>—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: bg }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia,serif', color: text, fontSize: '28px', fontWeight: 400, marginBottom: '16px' }}>
            ¿Necesitas ayuda para elegir?
          </h2>
          <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.7, marginBottom: '32px' }}>
            Nuestro equipo de hospitalidad te ayudará a encontrar la suite perfecta para tu ocasión especial. Disponibles por teléfono, email o WhatsApp.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/34955123456"
              style={{
                background: '#25D366', color: '#fff',
                padding: '14px 32px', fontSize: '13px',
                fontWeight: 700, letterSpacing: '0.08em', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}
            >
              💬 ESCRIBIR POR WHATSAPP
            </a>
            <Link
              href="/demos/hotel/reservar"
              style={{
                background: accent, color: bg,
                padding: '14px 32px', fontSize: '13px',
                fontWeight: 700, letterSpacing: '0.08em', textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              RESERVAR AHORA
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

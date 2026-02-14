'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';

const CREAM = '#fff9f0';
const LAVENDER = '#c9a0c9';
const DEEP = '#8b5a8b';
const LIGHT_LAVENDER = '#f0e6f0';

const CATEGORIES_NAV = [
  { id: 'todos', label: 'Todos' },
  { id: 'masajes', label: 'Masajes' },
  { id: 'faciales', label: 'Faciales' },
  { id: 'corporales', label: 'Corporales' },
  { id: 'rituales', label: 'Rituales' },
];

const ALL_TREATMENTS = [
  {
    id: 1, cat: 'masajes', seed: 'treatment1',
    name: 'Masaje Balinés Tradicional', duration: '60 min', price: '€75',
    desc: 'Técnica milenaria originaria de Bali que combina presiones largas y rítmicas, estiramientos suaves y aromaterapia con aceites de ylang-ylang y jazmín. Perfecta para liberar el estrés acumulado y recuperar la vitalidad.',
  },
  {
    id: 2, cat: 'masajes', seed: 'treatment2',
    name: 'Masaje con Piedras Calientes', duration: '75 min', price: '€90',
    desc: 'Piedras volcánicas de basalto calentadas a la temperatura ideal que se colocan sobre puntos energéticos. El calor penetra en la musculatura profunda disolviendo nudos y tensiones crónicas de forma incomparable.',
  },
  {
    id: 3, cat: 'masajes', seed: 'treatment3',
    name: 'Masaje Deportivo y Recuperación', duration: '45 min', price: '€60',
    desc: 'Diseñado para deportistas y personas activas. Trabaja grupos musculares específicos con técnicas de fricción profunda, percusión y estiramientos asistidos para acelerar la recuperación y prevenir lesiones.',
  },
  {
    id: 4, cat: 'faciales', seed: 'treatment4',
    name: 'Facial Regenerador con Vitamina C', duration: '60 min', price: '€85',
    desc: 'Tratamiento intensivo de luminosidad con exfoliación enzimática, sérum de vitamina C al 20% y mascarilla iluminadora para una piel visiblemente más joven y radiante desde la primera sesión.',
  },
  {
    id: 5, cat: 'faciales', seed: 'treatment5',
    name: 'Facial Diamante Premium', duration: '75 min', price: '€120',
    desc: 'Microdermoabrasión con punta de diamante que elimina células muertas, estimula el colágeno y mejora la textura. Incluye mesoterapia facial con ácido hialurónico y péptidos reafirmantes.',
  },
  {
    id: 6, cat: 'faciales', seed: 'treatment6',
    name: 'Facial Hidratante Intensivo', duration: '45 min', price: '€65',
    desc: 'Protocolo de hidratación profunda con aloe vera, manteca de karité y ácido hialurónico. Ideal para pieles secas, deshidratadas o que han perdido luminosidad con el tiempo.',
  },
  {
    id: 7, cat: 'corporales', seed: 'treatment7',
    name: 'Envoltura Detox de Arcilla', duration: '60 min', price: '€80',
    desc: 'Tratamiento purificante con arcilla verde atlántica enriquecida con algas y extractos de té verde. Elimina toxinas, reduce la retención de líquidos y suaviza la piel visiblemente.',
  },
  {
    id: 8, cat: 'corporales', seed: 'treatment8',
    name: 'Scrub de Azúcar y Aceites', duration: '45 min', price: '€55',
    desc: 'Exfoliación corporal completa con cristales de azúcar de caña, aceites de argán y macadamia. Elimina células muertas y nutre la piel en profundidad, dejándola suave como la seda.',
  },
  {
    id: 9, cat: 'corporales', seed: 'treatment9',
    name: 'Vendas Frías Reductoras', duration: '75 min', price: '€95',
    desc: 'Tratamiento de remodelación corporal con vendas impregnadas en activos reductores y drenantes. Moldea la silueta, reduce la celulitis y mejora la circulación linfática notablemente.',
  },
  {
    id: 10, cat: 'rituales', seed: 'treatment10',
    name: 'Ritual de Luna Llena', duration: '120 min', price: '€180',
    desc: 'Nuestra experiencia más transformadora. Incluye baño de sales en tina de flores, exfoliación corporal, masaje relajante de 60 minutos, facial express y copa de cava. Una experiencia total de renovación.',
  },
  {
    id: 11, cat: 'rituales', seed: 'treatment11',
    name: 'Ritual para Parejas', duration: '90 min', price: '€240',
    desc: 'Experiencia íntima en sala privada con flores y velas, baño conjunto de espumas aromáticas y masaje simultáneo para dos. Incluye fruta fresca y bebida de bienvenida.',
  },
];

function TreatmentCard({ item, index }: { item: typeof ALL_TREATMENTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.6 }}
      layout
      className="trat-card"
      style={{
        background: '#fff', overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(139,90,139,0.07)',
        border: `1px solid ${LIGHT_LAVENDER}`,
      }}
    >
      <div className="trat-card-img">
        <img
          src={`https://picsum.photos/seed/${item.seed}/500/350`}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{ padding: '1.5rem', flex: 1 }}>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ background: LIGHT_LAVENDER, color: DEEP, fontSize: '0.66rem', fontWeight: 700, padding: '0.2rem 0.55rem' }}>⏱ {item.duration}</span>
          <span style={{ background: `${LAVENDER}22`, color: LAVENDER, fontSize: '0.66rem', fontWeight: 700, padding: '0.2rem 0.55rem' }}>{item.price}</span>
        </div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: DEEP, marginBottom: '0.5rem' }}>{item.name}</h3>
        <p style={{ color: '#999', fontSize: '0.83rem', lineHeight: 1.65, marginBottom: '1.1rem' }}>{item.desc}</p>
        <Link href="/demos/spa/reservar" style={{
          background: LAVENDER, color: '#fff', padding: '0.55rem 1.3rem',
          fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em',
          textDecoration: 'none', display: 'inline-block',
        }}>
          RESERVAR AHORA
        </Link>
      </div>
    </motion.div>
  );
}

export default function TratamientosPage() {
  const [active, setActive] = useState('todos');

  const filtered = active === 'todos' ? ALL_TREATMENTS : ALL_TREATMENTS.filter(t => t.cat === active);

  const sectionTitles: Record<string, { title: string; subtitle: string }> = {
    todos: { title: 'TODOS LOS TRATAMIENTOS', subtitle: 'Explora nuestra carta completa de bienestar' },
    masajes: { title: 'MASAJES', subtitle: 'Libera tensiones y recupera el equilibrio' },
    faciales: { title: 'FACIALES', subtitle: 'Revela el esplendor natural de tu piel' },
    corporales: { title: 'CORPORALES', subtitle: 'Cuida y transforma tu piel de pies a cabeza' },
    rituales: { title: 'RITUALES ESPECIALES', subtitle: 'Experiencias únicas para ocasiones especiales' },
  };

  const current = sectionTitles[active];

  return (
    <main style={{ background: CREAM, color: DEEP, minHeight: '100vh' }}>
      <style>{`.trat-layout { display: grid; grid-template-columns: 220px 1fr; align-items: start; } .trat-sidebar { position: sticky; top: 5rem; padding: 2rem 1.5rem; border-right: 1px solid rgba(201,160,201,0.22); min-height: 400px; } .trat-content { padding: clamp(1.5rem,4vw,3rem); } .trat-card { display: flex; overflow: hidden; } .trat-card-img { width: 180px; flex-shrink: 0; overflow: hidden; } @media (max-width: 768px) { .trat-layout { grid-template-columns: 1fr; } .trat-sidebar { position: static; border-right: none; border-bottom: 1px solid rgba(201,160,201,0.22); padding: 1.5rem clamp(1rem,4vw,4rem); display: flex; gap: 0.5rem; flex-wrap: wrap; min-height: auto; } .trat-card-img { width: 120px; } } @media (max-width: 480px) { .trat-card { flex-direction: column; } .trat-card-img { width: 100%; height: 180px; } }`}</style>

      {/* Header */}
      <section style={{ padding: 'clamp(2rem,5vw,4rem) clamp(1rem,4vw,4rem) 2rem', borderBottom: `1px solid ${LAVENDER}33` }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: LAVENDER, marginBottom: '0.75rem', fontWeight: 700 }}>MENÚ DE TRATAMIENTOS</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, fontStyle: 'italic', marginBottom: '1rem', color: DEEP }}>
            Nuestros Tratamientos
          </h1>
          <p style={{ color: '#b090b0', maxWidth: '550px', lineHeight: 1.7 }}>
            Cada tratamiento está diseñado con cuidado para ofrecer la máxima eficacia y el más profundo bienestar.
          </p>
        </motion.div>
      </section>

      {/* Layout with sticky sidebar */}
      <div className="trat-layout">

        {/* Sticky Sidebar */}
        <aside className="trat-sidebar">
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: LAVENDER, fontWeight: 700, marginBottom: '1rem' }}>CATEGORÍAS</div>
          {CATEGORIES_NAV.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '0.75rem 1rem', marginBottom: '0.2rem',
                background: active === cat.id ? `${LAVENDER}22` : 'transparent',
                border: active === cat.id ? `1px solid ${LAVENDER}55` : '1px solid transparent',
                borderLeft: active === cat.id ? `3px solid ${LAVENDER}` : '3px solid transparent',
                color: active === cat.id ? DEEP : '#b090b0',
                fontWeight: active === cat.id ? 700 : 400,
                fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
          <div style={{ marginTop: '2rem', padding: '1.25rem', background: `${LAVENDER}11`, border: `1px solid ${LAVENDER}33` }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: DEEP, marginBottom: '0.5rem' }}>Consulta Gratuita</div>
            <p style={{ fontSize: '0.75rem', color: '#b090b0', lineHeight: 1.5, marginBottom: '0.75rem' }}>¿No sabes qué elegir? Nuestras especialistas te asesoran sin compromiso.</p>
            <Link href="/demos/spa/reservar" style={{ fontSize: '0.72rem', color: LAVENDER, fontWeight: 700, textDecoration: 'none' }}>
              Contactar →
            </Link>
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: `${DEEP}11`, border: `1px solid ${DEEP}22` }}>
            <div style={{ fontSize: '0.7rem', color: DEEP, fontWeight: 700, marginBottom: '0.4rem' }}>Bono Regalo</div>
            <p style={{ fontSize: '0.73rem', color: '#b090b0', lineHeight: 1.5 }}>Regala una experiencia única a quien más quieres.</p>
          </div>
        </aside>

        {/* Main Content */}
        <div className="trat-content">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{ marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: `1px solid ${LAVENDER}33` }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.05em', color: DEEP, marginBottom: '0.4rem' }}>
                {current.title}
              </h2>
              <p style={{ color: '#b090b0', fontSize: '0.85rem' }}>{current.subtitle} · {filtered.length} tratamientos</p>
            </div>

            <AnimatePresence mode="popLayout">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {filtered.map((item, i) => (
                  <TreatmentCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

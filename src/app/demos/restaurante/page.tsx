'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const bg = '#1a0a00';
const gold = '#d4a017';
const cream = '#fff5e6';
const darkBrown = '#0d0500';

const featuredDishes = [
  { id: 1, name: 'Vieira con Espuma de Mar', price: '32€', category: 'Entrante', seed: 'dish1', desc: 'Vieira gallega, espuma de alga nori, tierra de aceitunas negras' },
  { id: 2, name: 'Pichón Asado a la Brasa', price: '48€', category: 'Principal', seed: 'dish2', desc: 'Pichón de Bresse, trufa de temporada, consomé de aves al Jerez' },
  { id: 3, name: 'Chocolate & Café', price: '18€', category: 'Postre', seed: 'dish3', desc: 'Cremoso de cacao 72%, helado de café de especialidad, crumble de avellana' },
];

const highlights = [
  { icon: '★', label: 'Estrella Michelin 2024', sub: 'Reconocimiento a la excelencia' },
  { icon: '◆', label: 'Más de 25 Años', sub: 'Tradición y vanguardia' },
  { icon: '✦', label: 'Chef Destacado', sub: 'TOP 50 Best Restaurants España' },
];

function DishCard({ dish, delay = 0 }: { dish: typeof featuredDishes[0]; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#0d0500',
        overflow: 'hidden',
        border: `1px solid ${hovered ? gold : '#2a1800'}`,
        transition: 'border-color 0.4s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{ overflow: 'hidden', aspectRatio: '3/2' }}>
        <img
          src={`https://picsum.photos/seed/${dish.seed}/600/400`}
          alt={dish.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transition: 'transform 0.7s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>
      <div style={{ padding: '28px 28px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.2em', fontWeight: 600 }}>
            {dish.category.toUpperCase()}
          </span>
          <span style={{ color: gold, fontWeight: 700, fontSize: '18px', fontFamily: 'Georgia, serif' }}>
            {dish.price}
          </span>
        </div>
        <h3 style={{ color: cream, fontSize: '20px', fontWeight: 600, fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 10px' }}>
          {dish.name}
        </h3>
        <p style={{ color: '#9a7a5a', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{dish.desc}</p>
      </div>
    </motion.div>
  );
}

export default function RestauranteHome() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const highlightsRef = useRef(null);
  const dishesRef = useRef(null);
  const chefRef = useRef(null);
  const reservaRef = useRef(null);
  const highlightsInView = useInView(highlightsRef, { once: true, margin: '-60px' });
  const dishesInView = useInView(dishesRef, { once: true, margin: '-80px' });
  const chefInView = useInView(chefRef, { once: true, margin: '-80px' });
  const reservaInView = useInView(reservaRef, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', date: '', guests: '2' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ backgroundColor: bg, color: cream }}>

      {/* HERO FULLSCREEN */}
      <section
        ref={heroRef}
        style={{ position: 'relative', minHeight: 'max(100svh, 600px)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <motion.img
          src="https://picsum.photos/seed/restaurant-hero/1400/900"
          alt="Restaurante Arcos"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '116%',
            objectFit: 'cover', objectPosition: 'center',
            y: heroY,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        <motion.div
          style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 clamp(20px, 5vw, 40px)', opacity: heroOpacity, width: '100%', maxWidth: '900px' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: gold, fontSize: '12px', letterSpacing: '0.5em', fontWeight: 600, marginBottom: '24px' }}
          >
            ALTA COCINA · MADRID
          </motion.p>
          <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{
                fontSize: 'clamp(56px, 14vw, 180px)',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 400,
                color: gold,
                margin: 0,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
              }}
            >
              Arcos
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ color: '#ddd', fontSize: 'clamp(14px, 2vw, 18px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: 'clamp(28px, 5vw, 48px)', letterSpacing: '0.05em' }}
          >
            Donde la tradición se convierte en vanguardia
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/demos/restaurante/reservar">
              <button style={{
                backgroundColor: gold, color: darkBrown,
                border: 'none', padding: '14px clamp(20px, 5vw, 44px)',
                fontWeight: 700, fontSize: '13px', letterSpacing: '0.2em', cursor: 'pointer',
                fontFamily: 'inherit', minHeight: '48px'
              }}>
                RESERVAR MESA
              </button>
            </Link>
            <Link href="/demos/restaurante/carta">
              <button style={{
                backgroundColor: 'transparent', color: cream,
                border: `1px solid ${cream}`, padding: '14px clamp(20px, 5vw, 44px)',
                fontWeight: 600, fontSize: '13px', letterSpacing: '0.2em', cursor: 'pointer',
                fontFamily: 'inherit', minHeight: '48px'
              }}>
                VER CARTA
              </button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}
        >
          <div style={{ width: '1px', height: '50px', backgroundColor: gold, margin: '0 auto' }} />
        </motion.div>
      </section>

      {/* HIGHLIGHTS STRIP */}
      <motion.section
        ref={highlightsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="r-grid-3 r-section-sm" style={{
          backgroundColor: darkBrown,
          borderBottom: `1px solid #2a1800`,
        }}
      >
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={{ textAlign: 'center', padding: 'clamp(8px, 2vw, 0px) clamp(12px, 3vw, 20px)' }}
          >
            <div style={{ fontSize: '28px', color: gold, marginBottom: '12px' }}>{h.icon}</div>
            <p style={{ color: cream, fontWeight: 700, fontSize: '16px', margin: '0 0 6px', fontFamily: 'Georgia, serif' }}>{h.label}</p>
            <p style={{ color: '#9a7a5a', fontSize: '13px', margin: 0, letterSpacing: '0.05em' }}>{h.sub}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* FEATURED DISHES */}
      <section ref={dishesRef} className="r-section" style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={dishesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(36px, 6vw, 70px)' }}
        >
          <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 600, marginBottom: '16px' }}>
            — NUESTRA CARTA
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontFamily: 'Georgia, serif', fontStyle: 'italic',
            fontWeight: 400, margin: '0 0 20px', color: cream
          }}>
            Creaciones de temporada
          </h2>
          <div style={{ width: '60px', height: '1px', backgroundColor: gold, margin: '0 auto' }} />
        </motion.div>
        <div className="r-grid-3">
          {featuredDishes.map((d, i) => <DishCard key={d.id} dish={d} delay={i * 0.12} />)}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={dishesInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <Link href="/demos/restaurante/carta">
            <button style={{
              backgroundColor: 'transparent', color: gold,
              border: `1px solid ${gold}`, padding: '14px 44px',
              fontWeight: 600, fontSize: '13px', letterSpacing: '0.2em', cursor: 'pointer'
            }}>
              VER CARTA COMPLETA
            </button>
          </Link>
        </motion.div>
      </section>

      {/* CHEF SECTION */}
      <section ref={chefRef} className="r-section" style={{ backgroundColor: darkBrown }}>
        <div className="r-two-col" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={chefInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
          >
            <img
              src="https://picsum.photos/seed/chef/600/700"
              alt="Chef Arcos"
              style={{ width: '100%', aspectRatio: '6/7', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-20px',
              backgroundColor: gold, padding: '20px 28px'
            }}>
              <p style={{ color: darkBrown, fontWeight: 900, fontSize: '14px', letterSpacing: '0.1em', margin: 0 }}>
                CHEF EJECUTIVO
              </p>
              <p style={{ color: darkBrown, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', margin: '4px 0 0', fontWeight: 600 }}>
                Carlos de Arcos
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={chefInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 600, marginBottom: '20px' }}>
              — EL ARTISTA
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 52px)', fontFamily: 'Georgia, serif',
              fontStyle: 'italic', fontWeight: 400, margin: '0 0 28px', color: cream, lineHeight: 1.2
            }}>
              Una vida dedicada<br />al sabor
            </h2>
            <div style={{ width: '50px', height: '1px', backgroundColor: gold, marginBottom: '28px' }} />
            <p style={{ color: '#b8956a', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
              Carlos de Arcos comenzó su andadura culinaria a los 14 años en la cocina de su abuela en La Rioja. Formado en el Basque Culinary Center y con experiencia en restaurantes con tres estrellas Michelin en Francia y Japón, regresó a España con una visión clara: honrar el producto autóctono con técnicas de vanguardia.
            </p>
            <p style={{ color: '#b8956a', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
              Su filosofía se resume en tres palabras: producto, honestidad y emoción. Cada plato que sale de su cocina cuenta una historia, evoca un recuerdo, transforma un ingrediente humilde en una experiencia sublime.
            </p>
            <Link href="/demos/restaurante/historia">
              <button style={{
                backgroundColor: 'transparent', color: gold,
                border: `1px solid ${gold}`, padding: '14px 36px',
                fontWeight: 600, fontSize: '12px', letterSpacing: '0.2em', cursor: 'pointer'
              }}>
                NUESTRA HISTORIA
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <motion.section
        ref={reservaRef}
        initial={{ opacity: 0, y: 40 }}
        animate={reservaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="r-section" style={{
          textAlign: 'center',
          background: `linear-gradient(135deg, ${darkBrown} 0%, #2a1400 100%)`
        }}
      >
        <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 600, marginBottom: '20px' }}>
          — RESERVAS
        </p>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 70px)', fontFamily: 'Georgia, serif',
          fontStyle: 'italic', fontWeight: 400, margin: '0 0 16px', color: cream, lineHeight: 1.1
        }}>
          Reserve su mesa hoy
        </h2>
        <p style={{ color: '#b8956a', fontSize: '16px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 40px' }}>
          Disponemos de un comedor principal, una sala privada y una terraza de temporada. Le recomendamos hacer su reserva con al menos 48 horas de antelación.
        </p>
        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <p style={{ color: gold, fontSize: '20px', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Gracias. Le confirmaremos su reserva por correo electrónico.
            </p>
          </motion.div>
        ) : (
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '700px', margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
              style={{
                backgroundColor: '#0d0500', border: `1px solid #3a2010`,
                color: cream, padding: '14px 20px', fontSize: '14px',
                outline: 'none', flex: '1', minWidth: '180px'
              }}
            />
            <input
              type="date"
              value={formData.date}
              onChange={e => setFormData(f => ({ ...f, date: e.target.value }))}
              style={{
                backgroundColor: '#0d0500', border: `1px solid #3a2010`,
                color: cream, padding: '14px 20px', fontSize: '14px',
                outline: 'none', flex: '1', minWidth: '160px'
              }}
            />
            <select
              value={formData.guests}
              onChange={e => setFormData(f => ({ ...f, guests: e.target.value }))}
              style={{
                backgroundColor: '#0d0500', border: `1px solid #3a2010`,
                color: cream, padding: '14px 20px', fontSize: '14px',
                outline: 'none', cursor: 'pointer'
              }}
            >
              {[1,2,3,4,5,6,7,8].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
              ))}
            </select>
            <button
              onClick={() => formData.name && formData.date && setSubmitted(true)}
              style={{
                backgroundColor: gold, color: darkBrown,
                border: 'none', padding: '14px 32px',
                fontWeight: 700, fontSize: '13px', letterSpacing: '0.15em', cursor: 'pointer'
              }}
            >
              RESERVAR
            </button>
          </div>
        )}
        <p style={{ color: '#5a3a20', fontSize: '13px', marginTop: '20px' }}>
          También puede reservar llamando al +34 91 234 56 78
        </p>
      </motion.section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ borderTop: `1px solid #2a1800` }}>
        <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '24px', color: gold }}>Arcos</span>
        <div style={{ textAlign: 'center', color: '#5a3a20', fontSize: '13px' }}>
          <p style={{ margin: '0 0 4px' }}>Calle del Prado 28, Madrid · Martes a Domingo, 13:30–15:30 y 20:30–23:00</p>
          <p style={{ margin: 0 }}>© 2025 Restaurante Arcos. Todos los derechos reservados.</p>
        </div>
        <span style={{ color: '#5a3a20', fontSize: '13px' }}>+34 91 234 56 78</span>
      </footer>
    </div>
  );
}

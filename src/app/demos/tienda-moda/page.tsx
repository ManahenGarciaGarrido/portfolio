'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Chaqueta Oversized', price: '189€', seed: 'fashion1' },
  { id: 2, name: 'Vestido Asimétrico', price: '145€', seed: 'fashion2' },
  { id: 3, name: 'Pantalón Wide Leg', price: '98€', seed: 'fashion3' },
  { id: 4, name: 'Blazer Estructurado', price: '220€', seed: 'fashion4' },
  { id: 5, name: 'Top Minimal', price: '65€', seed: 'fashion5' },
  { id: 6, name: 'Falda Plisada', price: '112€', seed: 'fashion6' },
];

const categories = ['CHAQUETAS', 'VESTIDOS', 'PANTALONES', 'TOPS', 'ZAPATOS', 'ACCESORIOS', 'NUEVOS', 'OFERTAS'];

function Countdown() {
  const [time, setTime] = useState({ hours: 47, minutes: 59, seconds: 59 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', justifyContent: 'center', marginTop: '24px' }}>
      {[['HORAS', time.hours], ['MIN', time.minutes], ['SEG', time.seconds]].map(([label, val]) => (
        <div key={label as string} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', fontWeight: 900, color: '#000', lineHeight: 1 }}>{pad(val as number)}</div>
          <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#000', fontWeight: 700 }}>{label as string}</div>
        </div>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', cursor: 'pointer' }}
    >
      <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: '#111' }}>
        <img
          src={`https://picsum.photos/seed/${product.seed}/500/700`}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end',
                justifyContent: 'center', paddingBottom: '24px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
              }}
            >
              <button style={{
                backgroundColor: '#FFE600', color: '#000', border: 'none', padding: '12px 28px',
                fontWeight: 800, fontSize: '12px', letterSpacing: '0.15em', cursor: 'pointer'
              }}>
                AÑADIR AL CARRITO
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div style={{ paddingTop: '14px' }}>
        <p style={{ color: '#fff', fontWeight: 600, fontSize: '14px', letterSpacing: '0.05em', margin: 0 }}>{product.name}</p>
        <p style={{ color: '#FFE600', fontWeight: 800, fontSize: '16px', marginTop: '4px' }}>{product.price}</p>
      </div>
    </motion.div>
  );
}

export default function TiendaModaHome() {
  const heroWords = ['MODA', 'QUE', 'IMPACTA'];
  const stripRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef(null);
  const promoRef = useRef(null);
  const newsletterRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: '-100px' });
  const promoInView = useInView(promoRef, { once: true, margin: '-80px' });
  const newsletterInView = useInView(newsletterRef, { once: true, margin: '-80px' });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', overflow: 'hidden' }}>

      {/* HERO */}
      <section className="r-hero-split" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 'clamp(48px,8vw,80px) clamp(24px,5vw,60px)', zIndex: 1
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '16px' }}
          >
            <span style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', fontWeight: 700 }}>
              — NUEVA COLECCIÓN SS25
            </span>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', marginBottom: '32px' }}>
            {heroWords.map((word, i) => (
              <div key={word} style={{ overflow: 'hidden' }}>
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontSize: 'clamp(56px, 8vw, 110px)', fontWeight: 900, lineHeight: 0.9,
                    color: i === 1 ? '#FFE600' : '#fff', margin: 0, letterSpacing: '-0.02em'
                  }}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ color: '#aaa', fontSize: '16px', lineHeight: 1.7, maxWidth: '380px', marginBottom: '40px' }}
          >
            Diseño sin concesiones. Cada pieza es una declaración. Descubre la colección que redefine los límites de la moda contemporánea.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <Link href="/demos/tienda-moda/productos">
              <button style={{
                backgroundColor: '#FFE600', color: '#000', border: 'none',
                padding: '16px 36px', fontWeight: 900, fontSize: '13px',
                letterSpacing: '0.15em', cursor: 'pointer'
              }}>
                VER COLECCIÓN
              </button>
            </Link>
            <Link href="/demos/tienda-moda/lookbook">
              <button style={{
                backgroundColor: 'transparent', color: '#fff',
                border: '2px solid #fff', padding: '16px 36px',
                fontWeight: 700, fontSize: '13px', letterSpacing: '0.15em', cursor: 'pointer'
              }}>
                LOOKBOOK SS25
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <img
            src="https://picsum.photos/seed/fashion-model/700/900"
            alt="Model"
            style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block' }}
          />
          <div style={{
            position: 'absolute', bottom: '40px', right: '40px', textAlign: 'right'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              style={{
                backgroundColor: '#FFE600', color: '#000',
                padding: '12px 20px', display: 'inline-block'
              }}
            >
              <p style={{ margin: 0, fontWeight: 900, fontSize: '13px', letterSpacing: '0.1em' }}>DESDE 65€</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* TRENDING STRIP */}
      <div style={{ backgroundColor: '#FFE600', padding: '18px 0', overflow: 'hidden' }}>
        <div ref={stripRef} style={{ display: 'flex', gap: '60px', whiteSpace: 'nowrap' }}>
          {[...categories, ...categories].map((cat, i) => (
            <motion.span
              key={i}
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                display: 'inline-block', fontSize: '13px', fontWeight: 900,
                letterSpacing: '0.25em', color: '#000'
              }}
            >
              {cat} ★
            </motion.span>
          ))}
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <section ref={featuredRef} className="r-section" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={featuredInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="r-flex-between" style={{ marginBottom: '60px' }}
        >
          <div>
            <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', margin: '0 0 8px', fontWeight: 700 }}>— DESTACADOS</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 900, margin: 0, lineHeight: 1 }}>PIEZAS CLAVE</h2>
          </div>
          <Link href="/demos/tienda-moda/productos">
            <span style={{ color: '#FFE600', fontSize: '13px', fontWeight: 700, letterSpacing: '0.15em', borderBottom: '2px solid #FFE600', paddingBottom: '4px', cursor: 'pointer' }}>
              VER TODO →
            </span>
          </Link>
        </motion.div>
        <div className="r-grid-3">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* PROMO BANNER */}
      <motion.section
        ref={promoRef}
        initial={{ opacity: 0 }}
        animate={promoInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="r-section" style={{ backgroundColor: '#FFE600', textAlign: 'center' }}
      >
        <p style={{ color: '#000', fontSize: '11px', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '12px' }}>OFERTA LIMITADA</p>
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 72px)', fontWeight: 900, color: '#000',
          lineHeight: 1.1, margin: '0 0 8px', letterSpacing: '-0.02em'
        }}>
          HASTA -50%
        </h2>
        <p style={{ fontSize: '18px', fontWeight: 700, color: '#000', letterSpacing: '0.05em', marginBottom: '8px' }}>
          EN TODA LA NUEVA COLECCIÓN
        </p>
        <p style={{ color: '#333', fontSize: '14px', marginBottom: '0' }}>La oferta termina en:</p>
        <Countdown />
        <button style={{
          marginTop: '40px', backgroundColor: '#000', color: '#FFE600',
          border: 'none', padding: '18px 48px', fontWeight: 900,
          fontSize: '14px', letterSpacing: '0.2em', cursor: 'pointer'
        }}>
          COMPRAR AHORA
        </button>
      </motion.section>

      {/* NEWSLETTER */}
      <motion.section
        ref={newsletterRef}
        initial={{ opacity: 0, y: 40 }}
        animate={newsletterInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="r-section" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
      >
        <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', marginBottom: '16px', fontWeight: 700 }}>— ÚNETE A NOIR</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1 }}>
          SÉ EL PRIMERO EN SABERLO
        </h2>
        <p style={{ color: '#888', fontSize: '16px', lineHeight: 1.7, marginBottom: '40px' }}>
          Acceso anticipado a nuevas colecciones, ofertas exclusivas y contenido editorial solo para suscriptores.
        </p>
        {subscribed ? (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ color: '#FFE600', fontWeight: 700, fontSize: '16px' }}>
            ¡Bienvenido/a a NOIR! Revisa tu correo.
          </motion.p>
        ) : (
          <div style={{ display: 'flex', gap: '0', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1, backgroundColor: '#111', border: '2px solid #333', color: '#fff',
                padding: '16px 20px', fontSize: '14px', outline: 'none'
              }}
            />
            <button
              onClick={() => email && setSubscribed(true)}
              style={{
                backgroundColor: '#FFE600', color: '#000', border: 'none',
                padding: '16px 28px', fontWeight: 900, fontSize: '13px',
                letterSpacing: '0.1em', cursor: 'pointer', whiteSpace: 'nowrap'
              }}
            >
              SUSCRIBIRSE
            </button>
          </div>
        )}
      </motion.section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ borderTop: '1px solid #222' }}>
        <span style={{ fontWeight: 900, fontSize: '20px', letterSpacing: '0.1em', color: '#FFE600' }}>NOIR</span>
        <span style={{ color: '#555', fontSize: '13px' }}>© 2025 NOIR Studio. Todos los derechos reservados.</span>
      </footer>
    </div>
  );
}

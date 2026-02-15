'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#000000';
const gold = '#d4af37';
const cream = '#f0e8d0';
const charcoal = '#111111';
const darkCharcoal = '#0a0a0a';

const categories = ['Todos', 'Anillos', 'Collares', 'Pendientes', 'Pulseras', 'Relojes'];

const pieces = [
  { id: 1, seed: 'jewel1', name: 'Solitario Brillante', category: 'Anillos', material: 'Oro amarillo 18k · Diamante 1ct GIA', price: 'Desde 4.800€', tag: 'BESTSELLER' },
  { id: 2, seed: 'jewel2', name: 'Trilogy Eternity', category: 'Anillos', material: 'Platino 950 · Tres diamantes', price: 'Desde 7.200€', tag: null },
  { id: 3, seed: 'jewel3', name: 'Collar Rivière', category: 'Collares', material: 'Oro blanco 18k · 21 brillantes', price: 'Desde 12.500€', tag: 'EXCLUSIVO' },
  { id: 4, seed: 'jewel4', name: 'Pendientes Goutte', category: 'Pendientes', material: 'Oro amarillo 18k · Zafiros Ceylon', price: 'Desde 2.900€', tag: null },
  { id: 5, seed: 'jewel5', name: 'Brazalete Eternity', category: 'Pulseras', material: 'Oro blanco 18k · Diamantes talla baguette', price: 'Desde 8.400€', tag: null },
  { id: 6, seed: 'jewel6', name: 'Anillo Signet Oval', category: 'Anillos', material: 'Oro amarillo 18k · Esmeralda colombiana', price: 'Desde 3.600€', tag: null },
  { id: 7, seed: 'jewel7', name: 'Collar Sautoir', category: 'Collares', material: 'Oro amarillo 18k · Perlas Akoya', price: 'Desde 5.500€', tag: 'NUEVA COLECCIÓN' },
  { id: 8, seed: 'jewel8', name: 'Pendientes Chandelier', category: 'Pendientes', material: 'Platino 950 · Diamantes y rubíes', price: 'Desde 9.800€', tag: 'ALTA JOYERÍA' },
  { id: 9, seed: 'jewel9', name: 'Pulsera Tennis', category: 'Pulseras', material: 'Oro blanco 18k · 3ct diamantes', price: 'Desde 15.200€', tag: 'ICÓNICA' },
];

const signaturePieces = [
  {
    id: 1,
    seed: 'jewel-signature1',
    name: 'La Grande Parure',
    subtitle: 'Conjunto de Alta Joyería · Colección Eternal',
    desc: 'Nuestra pieza más emblemática. Un conjunto completo de collar, pendientes, anillo y pulsera en oro blanco 18k engastados con 48 diamantes de talla brillante seleccionados por su excepcional pureza VS1 y color D. Una obra de arte que trasciende el tiempo.',
    detail: 'Bajo pedido · Entrega en 90 días · Certificado GIA individual',
    price: 'Precio a consultar',
  },
  {
    id: 2,
    seed: 'jewel-signature2',
    name: 'El Anillo Imperial',
    subtitle: 'Alta Joyería · Edición Limitada 12 unidades',
    desc: 'Un diamante central de talla pera de 3 quilates, flanqueado por dos esmeraldas colombianas de 0,8 ct cada una, todo engastado en platino 950. Cada uno de los doce anillos de esta edición limitada lleva un número de serie grabado en el interior.',
    detail: 'Edición limitada · 4 unidades disponibles · Certificado Gübelin',
    price: 'Desde 48.000€',
  },
];

function PieceCard({ piece, delay }: { piece: typeof pieces[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
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
        backgroundColor: charcoal,
        border: `1px solid ${hovered ? gold : '#1e1e1e'}`,
        overflow: 'hidden',
        transition: 'border-color 0.4s ease',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {piece.tag && (
        <div style={{
          position: 'absolute', top: '16px', left: '16px', zIndex: 2,
          backgroundColor: gold, color: '#000', fontSize: '9px',
          letterSpacing: '0.15em', fontWeight: 700, padding: '4px 10px',
        }}>
          {piece.tag}
        </div>
      )}
      <div style={{ overflow: 'hidden', aspectRatio: '1/1' }}>
        <img
          src={`https://picsum.photos/seed/${piece.seed}/400/400`}
          alt={piece.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.7s ease',
          }}
        />
      </div>
      <div style={{ padding: '22px 22px 26px' }}>
        <h3 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 400, margin: '0 0 8px' }}>
          {piece.name}
        </h3>
        <p style={{ color: gold + '88', fontSize: '12px', letterSpacing: '0.05em', margin: '0 0 12px', lineHeight: 1.6 }}>
          {piece.material}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: gold, fontSize: '14px', fontWeight: 600 }}>{piece.price}</span>
          <button
            style={{
              backgroundColor: 'transparent', border: `1px solid ${gold}44`,
              color: gold, fontSize: '10px', letterSpacing: '0.15em', padding: '6px 14px',
              cursor: 'pointer', fontWeight: 600,
            }}
          >
            DETALLES
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ColeccionesPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? pieces
    : pieces.filter((p) => p.category === activeCategory);

  return (
    <div style={{ backgroundColor: bg, color: cream, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>

      {/* PAGE HEADER */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', borderBottom: `1px solid ${gold}11` }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
            AURUM · CATÁLOGO
          </span>
          <h1 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 400, marginBottom: '20px' }}>
            Nuestras Colecciones
          </h1>
          <div style={{ width: '60px', height: '1px', backgroundColor: gold, margin: '0 auto 20px' }} />
          <p style={{ color: cream + '88', fontSize: '16px', maxWidth: '540px', margin: '0 auto', lineHeight: 1.8 }}>
            Cada pieza que sale de nuestro taller lleva consigo décadas de saber hacer artesanal. Descubra la colección completa AURUM.
          </p>
        </motion.div>
      </section>

      {/* CATEGORY TABS */}
      <section style={{ backgroundColor: charcoal, padding: '0 24px', borderBottom: `1px solid ${gold}11` }}>
        <div className="r-container">
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: activeCategory === cat ? `2px solid ${gold}` : '2px solid transparent',
                  color: activeCategory === cat ? gold : cream + '66',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  fontWeight: 600,
                  padding: '20px 24px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease',
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PIECES GRID */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div className="r-container">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ color: cream + '55', fontSize: '12px', letterSpacing: '0.15em', marginBottom: '40px' }}>
              {filtered.length} PIEZAS ENCONTRADAS
            </p>
            <div className="r-grid-3">
              {filtered.map((piece, i) => (
                <PieceCard key={piece.id} piece={piece} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PIEZAS DE ALTA JOYERÍA */}
      <section className="r-section" style={{ backgroundColor: '#0a0900' }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
              ALTA JOYERÍA
            </span>
            <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, margin: 0 }}>
              Piezas de Alta Joyería
            </h2>
            <p style={{ color: cream + '66', fontSize: '15px', marginTop: '16px' }}>
              Para ocasiones que merecen lo extraordinario
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '2px' }}>
            {signaturePieces.map((sp, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-60px' });
              return (
                <motion.div
                  key={sp.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  style={{ backgroundColor: charcoal, overflow: 'hidden' }}
                >
                  <div style={{ height: '380px', overflow: 'hidden' }}>
                    <img
                      src={`https://picsum.photos/seed/${sp.seed}/800/600`}
                      alt={sp.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '36px 40px 40px' }}>
                    <span style={{ color: gold, fontSize: '10px', letterSpacing: '0.2em' }}>{sp.subtitle}</span>
                    <h3 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: 400, margin: '12px 0 16px' }}>
                      {sp.name}
                    </h3>
                    <p style={{ color: cream + '99', fontSize: '14px', lineHeight: 1.9, marginBottom: '20px' }}>
                      {sp.desc}
                    </p>
                    <p style={{ color: gold + '77', fontSize: '12px', marginBottom: '28px', fontStyle: 'italic' }}>
                      {sp.detail}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${gold}22`, paddingTop: '20px' }}>
                      <span style={{ color: gold, fontSize: '18px', fontFamily: 'Georgia, serif' }}>{sp.price}</span>
                      <Link
                        href="/demos/joyeria/bespoke"
                        style={{
                          backgroundColor: gold, color: '#000', padding: '12px 28px',
                          fontSize: '11px', letterSpacing: '0.15em', fontWeight: 700, textDecoration: 'none',
                        }}
                      >
                        CONSULTAR
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BESPOKE CTA */}
      <section style={{ backgroundColor: darkCharcoal, padding: '80px 24px', borderTop: `1px solid ${gold}11` }}>
        <div className="r-container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 400, marginBottom: '20px' }}>
              ¿Buscas algo especial?
            </h2>
            <p style={{ color: cream + '88', fontSize: '15px', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 36px' }}>
              Si ninguna de nuestras piezas captura exactamente lo que tienes en mente, nuestro servicio Bespoke está diseñado para ti. Cuéntanos tu visión y la convertiremos en realidad.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/demos/joyeria/bespoke"
                style={{
                  backgroundColor: gold, color: '#000', padding: '14px 40px',
                  fontSize: '12px', letterSpacing: '0.2em', fontWeight: 700, textDecoration: 'none',
                }}
              >
                DISEÑO A MEDIDA
              </Link>
              <Link
                href="/demos/joyeria/contacto"
                style={{
                  backgroundColor: 'transparent', color: gold, padding: '14px 40px',
                  fontSize: '12px', letterSpacing: '0.2em', fontWeight: 700, textDecoration: 'none',
                  border: `1px solid ${gold}44`,
                }}
              >
                CONTACTAR
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

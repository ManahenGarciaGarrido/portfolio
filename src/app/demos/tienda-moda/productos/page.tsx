'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const allProducts = [
  { id: 1, name: 'Chaqueta Oversized Negra', price: '189€', category: 'Chaquetas', seed: 'product1' },
  { id: 2, name: 'Vestido Asimétrico Largo', price: '145€', category: 'Camisetas', seed: 'product2' },
  { id: 3, name: 'Pantalón Wide Leg Gris', price: '98€', category: 'Pantalones', seed: 'product3' },
  { id: 4, name: 'Zapatillas Low-Top Blancas', price: '155€', category: 'Zapatillas', seed: 'product4' },
  { id: 5, name: 'Bolso Estructurado', price: '220€', category: 'Accesorios', seed: 'product5' },
  { id: 6, name: 'Top Bandeau Minimalista', price: '65€', category: 'Camisetas', seed: 'product6' },
  { id: 7, name: 'Chaqueta Biker Cuero', price: '340€', category: 'Chaquetas', seed: 'product7' },
  { id: 8, name: 'Pantalón Cargo Técnico', price: '132€', category: 'Pantalones', seed: 'product8' },
  { id: 9, name: 'Sneakers Plataforma', price: '198€', category: 'Zapatillas', seed: 'product9' },
  { id: 10, name: 'Collar Geométrico', price: '78€', category: 'Accesorios', seed: 'product10' },
  { id: 11, name: 'Blazer Oversized Rayas', price: '210€', category: 'Chaquetas', seed: 'product11' },
  { id: 12, name: 'Camiseta Graphic Art', price: '55€', category: 'Camisetas', seed: 'product12' },
];

const filters = ['Todos', 'Chaquetas', 'Camisetas', 'Pantalones', 'Zapatillas', 'Accesorios'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function ProductCard({ product }: { product: typeof allProducts[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: '#111' }}>
        <img
          src={`https://picsum.photos/seed/${product.seed}/400/560`}
          alt={product.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.6s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)'
          }}
        />
        <div style={{
          position: 'absolute', top: '12px', left: '12px',
          backgroundColor: '#FFE600', color: '#000',
          padding: '4px 10px', fontSize: '10px', fontWeight: 800, letterSpacing: '0.1em'
        }}>
          {product.category.toUpperCase()}
        </div>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.22 }}
              style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 70%)',
                padding: '40px 20px 20px', display: 'flex', justifyContent: 'center'
              }}
            >
              <button style={{
                backgroundColor: '#FFE600', color: '#000', border: 'none',
                padding: '10px 22px', fontWeight: 900, fontSize: '11px',
                letterSpacing: '0.12em', cursor: 'pointer', minHeight: '44px'
              }}>
                AÑADIR AL CARRITO
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div style={{ paddingTop: '12px' }}>
        <p style={{ color: '#fff', fontWeight: 600, fontSize: '13px', letterSpacing: '0.03em', margin: '0 0 4px' }}>
          {product.name}
        </p>
        <p style={{ color: '#FFE600', fontWeight: 900, fontSize: '15px', margin: 0 }}>{product.price}</p>
      </div>
    </motion.div>
  );
}

export default function ProductosPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [visibleCount, setVisibleCount] = useState(12);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered = activeFilter === 'Todos'
    ? allProducts
    : allProducts.filter(p => p.category === activeFilter);
  const visible = filtered.slice(0, visibleCount);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: 'max(100svh, 500px)' }}>

      {/* PAGE HEADER */}
      <section ref={headerRef} className="r-section-sm" style={{ paddingBottom: '40px', borderBottom: '1px solid #1a1a1a' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', margin: '0 0 10px', fontWeight: 700 }}>
            — SS25
          </p>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 96px)', fontWeight: 900, margin: '0 0 32px', letterSpacing: '-0.02em', lineHeight: 1 }}>
            COLECCIÓN<br />COMPLETA
          </h1>
        </motion.div>

        {/* FILTER BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); setVisibleCount(12); }}
              style={{
                backgroundColor: activeFilter === f ? '#FFE600' : 'transparent',
                color: activeFilter === f ? '#000' : '#fff',
                border: `2px solid ${activeFilter === f ? '#FFE600' : '#333'}`,
                padding: '10px 22px', fontWeight: 800, fontSize: '12px',
                letterSpacing: '0.12em', cursor: 'pointer',
                transition: 'all 0.2s ease', minHeight: '44px'
              }}
            >
              {f.toUpperCase()}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', color: '#555', fontSize: '13px', alignSelf: 'center' }}>
            {filtered.length} productos
          </span>
        </motion.div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="r-section-sm" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '40px 28px'
            }}
          >
            {visible.map(p => <ProductCard key={p.id} product={p} />)}
          </motion.div>
        </AnimatePresence>

        {/* LOAD MORE */}
        {visible.length < filtered.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ textAlign: 'center', marginTop: '80px' }}
          >
            <button
              onClick={() => setVisibleCount(v => v + 8)}
              style={{
                backgroundColor: 'transparent', color: '#fff',
                border: '2px solid #FFE600', padding: '18px 60px',
                fontWeight: 900, fontSize: '13px', letterSpacing: '0.2em', cursor: 'pointer', minHeight: '44px'
              }}
            >
              CARGAR MÁS ({filtered.length - visible.length} restantes)
            </button>
          </motion.div>
        )}

        {visible.length >= filtered.length && filtered.length > 0 && (
          <p style={{ textAlign: 'center', color: '#444', fontSize: '13px', marginTop: '80px', letterSpacing: '0.1em' }}>
            — FIN DE LA COLECCIÓN —
          </p>
        )}
      </section>
    </div>
  );
}

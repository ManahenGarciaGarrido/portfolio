'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';
import DemoNavBar from '@/components/demos/DemoNavBar';
import { staggerContainer, fadeUp } from '@/lib/animations';

const products = [
  { name: 'BOMBER JACKET', price: '€129', category: 'CHAQUETAS', grad: 'linear-gradient(160deg, #1a1a00, #3a3a00)' },
  { name: 'CARGO PANTS', price: '€89', category: 'PANTALONES', grad: 'linear-gradient(160deg, #111, #222)' },
  { name: 'CROP TEE', price: '€45', category: 'CAMISETAS', grad: 'linear-gradient(160deg, #1a1a00, #444400)' },
  { name: 'HIGH-TOP SNEAKERS', price: '€159', category: 'ZAPATILLAS', grad: 'linear-gradient(160deg, #0d0d0d, #2a2a00)' },
  { name: 'BIKER JACKET', price: '€199', category: 'CHAQUETAS', grad: 'linear-gradient(160deg, #1c1c00, #3d3d00)' },
  { name: 'WIDE-LEG PANTS', price: '€95', category: 'PANTALONES', grad: 'linear-gradient(160deg, #111, #333)' },
];

const categories = ['CAMISETAS', 'PANTALONES', 'CHAQUETAS', 'ACCESORIOS', 'ZAPATILLAS', 'SUDADERAS'];

export default function TiendaModaPage() {
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const productsInView = useInView(productsRef, { once: true, margin: '-80px' });

  return (
    <div style={{ background: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      <DemoNavBar siteName="NOIR — Moda" sector="tienda de moda y ropa" />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12"
        style={{ background: '#000' }}
      >
        {/* Background diagonal lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #FFE600 0px, #FFE600 1px, transparent 1px, transparent 40px)',
          }}
        />

        <motion.div
          style={{ y: heroTextY }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 0.8 }}
            className="uppercase text-sm mb-6 font-bold"
            style={{ color: '#FFE600' }}
          >
            NUEVA COLECCIÓN SS25
          </motion.p>

          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="font-black leading-none mb-6"
            style={{ fontSize: 'clamp(4rem, 13vw, 12rem)' }}
          >
            {'MODA'.split('').map((l, i) => (
              <motion.span
                key={`m-${i}`}
                variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.12 } } }}
                className="inline-block text-white"
              >
                {l}
              </motion.span>
            ))}
            <br />
            {'QUE'.split('').map((l, i) => (
              <motion.span
                key={`q-${i}`}
                variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: (4 + i) * 0.12 } } }}
                className="inline-block"
                style={{ color: '#FFE600' }}
              >
                {l}
              </motion.span>
            ))}
            {' '}
            {'IMPACTA'.split('').map((l, i) => (
              <motion.span
                key={`i-${i}`}
                variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: (7 + i) * 0.12 } } }}
                className="inline-block text-white"
              >
                {l}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#productos"
              className="flex items-center justify-center gap-2 px-10 py-4 font-black text-black hover:scale-105 transition-transform"
              style={{ background: '#FFE600' }}
            >
              COMPRAR AHORA
              <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-10 py-4 font-bold text-white border-2 border-[#FFE600] hover:bg-[#FFE600] hover:text-black transition-all"
            >
              VER LOOKBOOK
            </a>
          </motion.div>
        </motion.div>

        {/* Floating cart */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          style={{ background: '#FFE600' }}
        >
          <ShoppingBag size={22} className="text-black" />
        </motion.div>
      </section>

      {/* ── CATEGORIES MARQUEE ── */}
      <div className="overflow-hidden py-4 border-t border-b border-[#FFE600]/30" style={{ background: '#0a0a00' }}>
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...categories, ...categories].map((cat, i) => (
            <span key={i} className="font-black text-sm uppercase tracking-widest" style={{ color: i % 2 === 0 ? '#FFE600' : '#fff' }}>
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <section id="productos" className="py-24 px-6" style={{ background: '#000' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black text-4xl md:text-5xl text-white"
            >
              NUEVOS ARRIVALS
            </motion.h2>
            <a href="#" className="text-[#FFE600] font-bold text-sm hover:underline hidden sm:block">
              VER TODO →
            </a>
          </div>
          <motion.div
            ref={productsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={productsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {products.map((product) => (
              <motion.div
                key={product.name}
                variants={fadeUp}
                className="group relative cursor-pointer"
              >
                {/* Product image area */}
                <div
                  className="aspect-[3/4] rounded-xl overflow-hidden relative mb-3"
                  style={{ background: product.grad }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end pb-6"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}
                  >
                    <span
                      className="px-6 py-3 font-black text-black text-sm transition-transform group-hover:translate-y-0 translate-y-4"
                      style={{ background: '#FFE600' }}
                    >
                      AÑADIR AL CARRITO
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded"
                      style={{ background: '#FFE60022', color: '#FFE600', border: '1px solid #FFE60040' }}
                    >
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-black text-white text-sm">{product.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#FFE600" color="#FFE600" />)}
                    </div>
                  </div>
                  <span className="font-black text-[#FFE600] text-lg">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <section className="py-16 px-6 overflow-hidden relative" style={{ background: '#FFE600' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-black leading-none text-black" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
              HASTA 50%
            </p>
            <p className="font-black text-2xl text-black/60 mt-1">EN REBAJAS DE TEMPORADA</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-bold text-black/60 uppercase tracking-widest text-sm mb-2">La oferta termina en</p>
            <div className="flex gap-3">
              {['02', '14', '36', '08'].map((v, i) => (
                <div key={i} className="text-center">
                  <p className="font-black text-4xl text-black bg-black/10 px-3 py-2 rounded">{v}</p>
                  <p className="text-xs text-black/60 mt-1">
                    {['DÍAS', 'HRS', 'MIN', 'SEG'][i]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-20 px-6 text-center" style={{ background: '#050500' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-black text-3xl md:text-4xl text-white mb-4"
        >
          ÚNETE AL CLUB <span style={{ color: '#FFE600' }}>NOIR</span>
        </motion.h2>
        <p className="text-white/40 mb-8">Descuentos exclusivos, lanzamientos anticipados.</p>
        <div className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 bg-transparent border-2 border-[#FFE600]/60 px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FFE600]"
          />
          <button
            className="px-8 py-4 font-black text-black hover:opacity-90 transition-opacity"
            style={{ background: '#FFE600' }}
          >
            SUSCRIBIRSE
          </button>
        </div>
      </section>

      <footer className="py-8 px-6 text-center border-t border-white/10 text-white/30 text-sm">
        © {new Date().getFullYear()} NOIR Moda — Demo por Manahen García Garrido
      </footer>
    </div>
  );
}

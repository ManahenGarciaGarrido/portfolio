'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const BG = '#fafafa'
const ACCENT = '#0066ff'
const TEXT = '#1a1a1a'
const GRAY = '#f0f0f0'
const GRAY2 = '#e5e5e5'

const featuredProducts = [
  { nombre: 'Smartphone X15', tagline: 'El poder en tu bolsillo', precio: '899€', seed: 'gadget1' },
  { nombre: 'Laptop UltraSlim', tagline: 'Potencia sin compromiso', precio: '1.299€', seed: 'gadget2' },
  { nombre: 'Tablet Pro', tagline: 'Creatividad sin límites', precio: '749€', seed: 'gadget3' },
  { nombre: 'Smart Watch S3', tagline: 'Tu vida en la muñeca', precio: '349€', seed: 'gadget4' },
]

const categorias = [
  { icon: '📱', nombre: 'Smartphones' },
  { icon: '💻', nombre: 'Portátiles' },
  { icon: '📟', nombre: 'Tablets' },
  { icon: '🎧', nombre: 'Audio' },
  { icon: '⌚', nombre: 'Smartwatches' },
  { icon: '🎮', nombre: 'Gaming' },
]

const marcas = ['Apple', 'Samsung', 'Sony', 'LG', 'Lenovo', 'Dell']

const confianza = [
  { icon: '🚚', titulo: 'Envío Gratis', desc: 'En pedidos superiores a 500€' },
  { icon: '🛡️', titulo: 'Garantía 2 Años', desc: 'En todos los productos' },
  { icon: '↩️', titulo: 'Devolución 30 Días', desc: 'Sin preguntas' },
  { icon: '🔧', titulo: 'Soporte Técnico', desc: 'Especialistas a tu disposición' },
]

const heroSpecs = [
  {
    nombre: 'Smartphone X15',
    descripcion: 'El buque insignia de la gama móvil. Cámara de 200MP con inteligencia artificial, pantalla AMOLED de 6.8" y batería de 5.000mAh que aguanta toda la jornada y más.',
    specs: ['Pantalla 6.8" AMOLED 120Hz', 'Procesador Snapdragon 8 Gen 3', 'Cámara 200MP + IA', 'Batería 5.000mAh', '12GB RAM / 256GB almacenamiento'],
    precio: '899€',
    seed: 'gadget1',
  },
  {
    nombre: 'Laptop UltraSlim',
    descripcion: 'Diseñado para los profesionales que no se conforman. Apenas 14mm de grosor, 1.1kg de peso y una autonomía de 18 horas. El portátil perfecto para trabajar desde cualquier lugar.',
    specs: ['Pantalla 14" IPS 2K', 'Intel Core Ultra 7', '16GB RAM LPDDR5', 'SSD 512GB NVMe', 'Autonomía 18 horas'],
    precio: '1.299€',
    seed: 'gadget2',
  },
]

export default function TecnologiaHome() {
  const productsRef = useRef(null)
  const productsInView = useInView(productsRef, { once: true })
  const trustRef = useRef(null)
  const trustInView = useInView(trustRef, { once: true })

  return (
    <main style={{ background: BG, color: TEXT, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://picsum.photos/seed/tech-hero/1400/700" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Hero tecnología" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,30,0.55) 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2rem', maxWidth: 800 }}>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.3em', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}
          >
            ZENTECH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.15, marginBottom: '1.5rem' }}
          >
            El futuro de la tecnología,<br />ahora en tus manos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}
          >
            Los dispositivos más innovadores del mercado, con asesoramiento experto y la mejor garantía del sector.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/demos/tecnologia/productos">
              <button style={{ background: ACCENT, color: '#ffffff', border: 'none', padding: '0.9rem 2.5rem', borderRadius: 8, fontSize: '1rem', fontWeight: 700, cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: `0 4px 20px ${ACCENT}55` }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Ver Productos
              </button>
            </Link>
            <Link href="/demos/tecnologia/comparador">
              <button style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '2px solid rgba(255,255,255,0.5)', padding: '0.9rem 2.5rem', borderRadius: 8, fontSize: '1rem', fontWeight: 700, cursor: 'pointer', backdropFilter: 'blur(4px)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
              >
                Comparar
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section ref={productsRef} style={{ background: '#ffffff', padding: '5rem 2rem' }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase' }}>Productos Destacados</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: TEXT, marginTop: '0.5rem' }}>Nuestra Selección Premium</h2>
          </motion.div>
          <div className="r-grid-4">
            {featuredProducts.map((p, i) => (
              <motion.div
                key={p.nombre}
                initial={{ opacity: 0, y: 30 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: BG, borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 20px rgba(0,0,0,0.08)', border: `1px solid ${GRAY2}`, transition: 'transform 0.2s, box-shadow 0.2s' }}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
              >
                <div style={{ height: 220, overflow: 'hidden', background: GRAY }}>
                  <img src={`https://picsum.photos/seed/${p.seed}/400/400`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={p.nombre} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: TEXT, marginBottom: '0.25rem' }}>{p.nombre}</h3>
                  <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1rem' }}>{p.tagline}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 900, color: TEXT }}>{p.precio}</span>
                    <Link href="/demos/tecnologia/productos">
                      <button style={{ background: ACCENT, color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: 6, fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
                        Comprar
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      <section style={{ background: GRAY, padding: '3rem 2rem' }}>
        <div className="r-container">
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, color: TEXT, marginBottom: '2rem' }}>Explora por Categoría</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {categorias.map((cat, i) => (
              <motion.div
                key={cat.nombre}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.05 }}
                style={{ background: '#ffffff', border: `2px solid ${GRAY2}`, borderRadius: 12, padding: '1.2rem 1.5rem', textAlign: 'center', cursor: 'pointer', minWidth: 110, transition: 'border-color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = ACCENT }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = GRAY2 }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{cat.icon}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: TEXT }}>{cat.nombre}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HERO PRODUCT FEATURES */}
      {heroSpecs.map((prod, i) => (
        <section key={prod.nombre} className="r-two-col" style={{ background: i % 2 === 0 ? '#ffffff' : BG, padding: '5rem 2rem', alignItems: 'center' }}>
          {i % 2 === 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ flex: 1, padding: '2rem', minHeight: 400, borderRadius: 16, overflow: 'hidden' }}
              >
                <img src={`https://picsum.photos/seed/${prod.seed}/700/500`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 12 }} alt={prod.nombre} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{ flex: 1, padding: '2rem' }}
              >
                <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Destacado</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: TEXT, marginBottom: '1rem' }}>{prod.nombre}</h2>
                <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.5rem' }}>{prod.descripcion}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {prod.specs.map(s => (
                    <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: TEXT, fontSize: '0.95rem' }}>
                      <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span> {s}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: TEXT }}>{prod.precio}</span>
                  <Link href="/demos/tecnologia/productos">
                    <button style={{ background: ACCENT, color: '#fff', border: 'none', padding: '0.8rem 2rem', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>Comprar Ahora</button>
                  </Link>
                </div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ flex: 1, padding: '2rem' }}
              >
                <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Destacado</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: TEXT, marginBottom: '1rem' }}>{prod.nombre}</h2>
                <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.5rem' }}>{prod.descripcion}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {prod.specs.map(s => (
                    <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: TEXT, fontSize: '0.95rem' }}>
                      <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span> {s}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: TEXT }}>{prod.precio}</span>
                  <Link href="/demos/tecnologia/productos">
                    <button style={{ background: ACCENT, color: '#fff', border: 'none', padding: '0.8rem 2rem', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>Comprar Ahora</button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{ flex: 1, minHeight: 400, borderRadius: 16, overflow: 'hidden' }}
              >
                <img src={`https://picsum.photos/seed/${prod.seed}/700/500`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 12 }} alt={prod.nombre} />
              </motion.div>
            </>
          )}
        </section>
      ))}

      {/* BRANDS */}
      <section style={{ background: GRAY, padding: '3rem 2rem', textAlign: 'center' }}>
        <div className="r-container">
          <p style={{ color: '#888', fontWeight: 600, letterSpacing: '0.15em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Marcas que Distribuimos</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {marcas.map(m => (
              <div key={m} style={{ fontSize: '1.1rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.05em' }}>{m}</div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section ref={trustRef} style={{ background: '#ffffff', padding: '3.5rem 2rem' }}>
        <div className="r-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {confianza.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={trustInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '1rem' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: TEXT, marginBottom: '0.25rem' }}>{item.titulo}</h3>
                <p style={{ color: '#777', fontSize: '0.875rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: ACCENT, padding: '4rem 2rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            Descuentos Exclusivos para Suscriptores
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1rem' }}>
            Sé el primero en conocer nuestras ofertas, nuevos lanzamientos y promociones especiales.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0', maxWidth: 480, margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="tu@email.com"
              style={{ flex: 1, padding: '0.9rem 1.5rem', borderRadius: '8px 0 0 8px', border: 'none', fontSize: '1rem', outline: 'none', minWidth: 200 }}
            />
            <button style={{ background: '#001a4d', color: '#ffffff', border: 'none', padding: '0.9rem 1.8rem', borderRadius: '0 8px 8px 0', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer' }}>
              Suscribirme
            </button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ background: '#111111', color: '#ffffff', padding: '3.5rem 2rem' }}>
        <div className="r-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: ACCENT, marginBottom: '1rem' }}>ZENTECH</div>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontSize: '0.9rem' }}>Tu tienda de tecnología de confianza. Los mejores dispositivos con el mejor servicio postventa.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', fontWeight: 700 }}>Categorías</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {categorias.map(c => (
                  <span key={c.nombre} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', cursor: 'pointer' }}>{c.nombre}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', fontWeight: 700 }}>Información</h4>
              <div style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 2.2, fontSize: '0.9rem' }}>
                <div>Sobre Nosotros</div>
                <div>Política de Privacidad</div>
                <div>Términos y Condiciones</div>
                <div>Política de Cookies</div>
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', fontWeight: 700 }}>Contacto</h4>
              <div style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 2, fontSize: '0.9rem' }}>
                <div>📍 C/ Gran Vía 22, Madrid</div>
                <div>📞 +34 91 555 0123</div>
                <div>✉️ hola@zentech.es</div>
                <div>Lun–Sáb: 10:00–21:00</div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>
            © 2024 ZENTECH. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  )
}

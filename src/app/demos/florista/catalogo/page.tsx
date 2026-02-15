'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

const BG = '#fdf6f0'
const ACCENT = '#2d6a4f'
const SECONDARY = '#e8a0a0'
const TEXT = '#2d1a0e'
const CARD_BG = '#fff8f3'
const BORDER = '#e8d5c4'
const LIGHT_GREEN = '#f0f7f4'

const filters = ['Todo', 'Ramos', 'Centros', 'Plantas', 'Coronas', 'Ocasiones']

const allArrangements = [
  { id: 1, type: 'Ramos', name: 'Primavera Eterna', desc: 'Mezcla exuberante de peonías rosas, rosas pastel y lilas fragantes con follaje verde suave. Perfecto para cualquier celebración especial.', sizes: ['S', 'M', 'L'], priceFrom: 38, priceTo: 75, img: 'floral1' },
  { id: 2, type: 'Ramos', name: 'Romance Rojo', desc: 'Rosas rojas premium de tallo largo, símbolo eterno del amor. Disponible con follaje clásico o con eucalipto aromático.', sizes: ['M', 'L', 'XL'], priceFrom: 55, priceTo: 120, img: 'floral2' },
  { id: 3, type: 'Centros', name: 'Jardín Provenzal', desc: 'Centro de mesa bajo en tonos lavanda, crema y verde musgo. Perfecto para decorar comidas familiares o eventos especiales.', sizes: ['S', 'M', 'L'], priceFrom: 45, priceTo: 90, img: 'floral3' },
  { id: 4, type: 'Centros', name: 'Elegancia Minimalista', desc: 'Centro con un único tipo de flor en jarrón de cristal. Disponible en orquídea, anthurium o girasol. La sobriedad hecha arte.', sizes: ['Único'], priceFrom: 42, priceTo: 42, img: 'floral4' },
  { id: 5, type: 'Plantas', name: 'Jardín Suculento', desc: 'Composición de suculentas en maceta de cerámica artesanal. Duradera, fácil de cuidar y perfecta como regalo duradero.', sizes: ['S', 'M'], priceFrom: 28, priceTo: 52, img: 'floral5' },
  { id: 6, type: 'Plantas', name: 'Orquídea Majestuosa', desc: 'Orquídea Phalaenopsis de primera calidad en maceta esmaltada. Florece durante meses y transforma cualquier espacio.', sizes: ['1 vara', '2 varas', '3 varas'], priceFrom: 35, priceTo: 85, img: 'floral6' },
  { id: 7, type: 'Coronas', name: 'Corona Blanca Serenidad', desc: 'Corona fúnebre en tonos blancos y crema con rosas, liliums y crisantemos. Símbolo de respeto, amor y paz eterna.', sizes: ['M', 'L'], priceFrom: 65, priceTo: 130, img: 'floral7' },
  { id: 8, type: 'Coronas', name: 'Corona Colorida Homenaje', desc: 'Corona floral con flores de temporada en colores vivos para celebrar una vida llena de alegría y color.', sizes: ['M', 'L'], priceFrom: 70, priceTo: 140, img: 'floral8' },
  { id: 9, type: 'Ramos', name: 'Silvestre & Libre', desc: 'Ramo de estilo boho con flores silvestres, ramas secas y hierbas aromáticas. Rustico, natural y lleno de personalidad.', sizes: ['S', 'M', 'L'], priceFrom: 32, priceTo: 65, img: 'floral9' },
  { id: 10, type: 'Ocasiones', name: 'Cumpleaños Alegre', desc: 'Composición colorida y festiva con girasoles, gerberas y flores de temporada. Incluye cinta y tarjeta personalizada.', sizes: ['M', 'L'], priceFrom: 40, priceTo: 80, img: 'floral10' },
  { id: 11, type: 'Ocasiones', name: 'San Valentín Intenso', desc: 'Caja elegante con 24 rosas rojas premium, pétalos sueltos y chocolates artesanales. La declaración más perfecta.', sizes: ['12 rosas', '24 rosas', '50 rosas'], priceFrom: 45, priceTo: 180, img: 'floral11' },
  { id: 12, type: 'Centros', name: 'Tropical Paradise', desc: 'Centro con aves del paraíso, heliconias y hojas de monstera. Transforma cualquier mesa en un paraíso exótico.', sizes: ['M', 'L'], priceFrom: 58, priceTo: 110, img: 'floral12' },
]

export default function CatalogoPage() {
  const [activeFilter, setActiveFilter] = useState('Todo')
  const [cart, setCart] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const filtered = activeFilter === 'Todo' ? allArrangements : allArrangements.filter(a => a.type === activeFilter)

  const addToCart = (id: number) => {
    setCart(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: 'system-ui, sans-serif' }}>

      {/* PAGE HEADER */}
      <section style={{ background: LIGHT_GREEN, paddingTop: 100, paddingBottom: 64 }}>
        <div className="r-container">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: SECONDARY, fontWeight: 600, letterSpacing: 5, fontSize: 12, textTransform: 'uppercase', marginBottom: 12 }}>
            NUESTRAS FLORES
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, color: TEXT, margin: '0 0 16px', fontFamily: 'Georgia, serif' }}>
            Catálogo Floral
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ fontSize: 17, opacity: 0.7, maxWidth: 560, lineHeight: 1.6 }}>
            Cada arreglo está creado a mano con flores frescas del mercado. Personalización disponible en todos los artículos.
          </motion.p>
          {cart.length > 0 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 12,
                background: ACCENT, color: '#fff', padding: '12px 24px', borderRadius: 50, fontSize: 15, fontWeight: 700 }}>
              🛒 {cart.length} artículo{cart.length > 1 ? 's' : ''} en tu pedido
            </motion.div>
          )}
        </div>
      </section>

      {/* FILTER TABS */}
      <section style={{ background: BG, padding: '32px 0', borderBottom: `1px solid ${BORDER}`, position: 'sticky', top: 0, zIndex: 10, backdropFilter: 'blur(8px)' }}>
        <div className="r-container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ color: TEXT, opacity: 0.5, fontSize: 14, marginRight: 8 }}>Filtrar:</span>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                style={{
                  background: activeFilter === f ? ACCENT : 'transparent',
                  color: activeFilter === f ? '#fff' : TEXT,
                  border: `2px solid ${activeFilter === f ? ACCENT : BORDER}`,
                  borderRadius: 50, padding: '8px 22px', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                {f}
              </button>
            ))}
            <span style={{ marginLeft: 'auto', color: TEXT, opacity: 0.5, fontSize: 14 }}>
              {filtered.length} artículo{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div className="r-grid-3">
            {filtered.map((a, i) => (
              <motion.div key={a.id}
                layout
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onMouseEnter={() => setHoveredCard(a.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: CARD_BG, borderRadius: 20, overflow: 'hidden',
                  border: `1px solid ${hoveredCard === a.id ? ACCENT : BORDER}`,
                  boxShadow: hoveredCard === a.id ? `0 12px 40px rgba(45,106,79,0.15)` : '0 2px 8px rgba(45,26,14,0.06)',
                  transition: 'all 0.3s', cursor: 'pointer',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${a.img}/350/420`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      transition: 'transform 0.5s', transform: hoveredCard === a.id ? 'scale(1.06)' : 'scale(1)' }}
                    alt={a.name} />
                  <div style={{ position: 'absolute', top: 14, left: 14, background: '#fff', color: ACCENT,
                    padding: '4px 14px', borderRadius: 50, fontSize: 12, fontWeight: 700, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    {a.type}
                  </div>
                  {cart.includes(a.id) && (
                    <div style={{ position: 'absolute', top: 14, right: 14, background: ACCENT,
                      color: '#fff', width: 36, height: 36, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>✓</div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: '20px 22px 24px' }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 20, margin: '0 0 8px', fontFamily: 'Georgia, serif' }}>{a.name}</h3>
                  <p style={{ color: TEXT, opacity: 0.65, fontSize: 14, lineHeight: 1.6, margin: '0 0 16px' }}>{a.desc}</p>

                  {/* Sizes */}
                  <div style={{ marginBottom: 18 }}>
                    <p style={{ color: TEXT, opacity: 0.5, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, margin: '0 0 8px', fontWeight: 600 }}>Tamaños disponibles</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {a.sizes.map(s => (
                        <span key={s} style={{ background: LIGHT_GREEN, color: ACCENT, padding: '4px 12px',
                          borderRadius: 50, fontSize: 13, fontWeight: 600, border: `1px solid ${BORDER}` }}>{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      {a.priceFrom === a.priceTo ? (
                        <p style={{ color: ACCENT, fontWeight: 800, fontSize: 22, margin: 0 }}>€{a.priceFrom}</p>
                      ) : (
                        <p style={{ color: ACCENT, fontWeight: 800, fontSize: 20, margin: 0 }}>€{a.priceFrom} – €{a.priceTo}</p>
                      )}
                    </div>
                    <button onClick={() => addToCart(a.id)}
                      style={{
                        background: cart.includes(a.id) ? SECONDARY : ACCENT,
                        color: '#fff', border: 'none', borderRadius: 50,
                        padding: '10px 22px', fontWeight: 700, fontSize: 14, cursor: 'pointer',
                        transition: 'background 0.2s',
                      }}>
                      {cart.includes(a.id) ? '✓ En pedido' : '+ Añadir'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM ORDER CTA */}
      <section className="r-section" style={{ background: LIGHT_GREEN, borderTop: `1px solid ${BORDER}` }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center',
              background: CARD_BG, borderRadius: 24, padding: 48, border: `1px solid ${BORDER}` }}
          >
            <div style={{ flex: '1 1 300px' }}>
              <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 12, textTransform: 'uppercase', marginBottom: 12 }}>ENCARGO A MEDIDA</p>
              <h2 style={{ color: TEXT, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, margin: '0 0 16px', fontFamily: 'Georgia, serif' }}>
                ¿No encuentras lo que buscas?
              </h2>
              <p style={{ color: TEXT, opacity: 0.7, fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                Diseñamos arreglos completamente personalizados según tus colores, flores favoritas y presupuesto. Cuéntanos tu idea y lo hacemos realidad.
              </p>
            </div>
            <div style={{ flex: '0 0 auto', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/demos/florista/contacto" style={{
                display: 'inline-block', background: ACCENT, color: '#fff',
                padding: '16px 36px', borderRadius: 50, fontWeight: 700, fontSize: 16,
                textDecoration: 'none',
              }}>Solicitar Encargo</Link>
              <a href="https://wa.me/34912345678" style={{
                display: 'inline-block', background: '#25d366', color: '#fff',
                padding: '16px 28px', borderRadius: 50, fontWeight: 700, fontSize: 16,
                textDecoration: 'none',
              }}>WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DELIVERY INFO BAR */}
      <section style={{ background: ACCENT, padding: '24px 0' }}>
        <div className="r-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center', textAlign: 'center' }}>
            {[
              { icon: '🚚', text: 'Envío gratis en pedidos +€50' },
              { icon: '📅', text: 'Entrega el mismo día antes de 12:00h' },
              { icon: '🌸', text: 'Flores frescas garantizadas' },
              { icon: '💚', text: 'Embalaje 100% ecológico' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

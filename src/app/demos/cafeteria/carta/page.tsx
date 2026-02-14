'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const bg = '#fdf5e6'
const accent = '#c8956c'
const dark = '#3d1c02'

const categories = [
  {
    id: 'cafes',
    label: 'Cafés',
    seed: 'menu-cafes',
    items: [
      { seed: 'item1', name: 'Espresso', desc: 'Blend 100% arábica de tueste oscuro. Intenso y cremoso con crema dorada perfecta.', allergens: ['Leche'], price: '1,80 €' },
      { seed: 'item2', name: 'Americano', desc: 'Espresso allongé con agua caliente. Suave y equilibrado, ideal para los amantes del café largo.', allergens: [], price: '2,10 €' },
      { seed: 'item3', name: 'Cappuccino Artesano', desc: 'Espresso doble con leche vaporizada y espuma densa. Arte latte incluido.', allergens: ['Leche'], price: '3,40 €' },
      { seed: 'item4', name: 'Flat White', desc: 'Doble ristretto con microespuma sedosa. Originario de Australia, intenso y cremoso.', allergens: ['Leche'], price: '3,20 €' },
      { seed: 'item5', name: 'Pour Over V60', desc: 'Filtrado manual en V60, extracción precisa. Disponible en distintos orígenes de temporada.', allergens: [], price: '4,50 €' },
    ],
  },
  {
    id: 'tes',
    label: 'Tés & Infusiones',
    seed: 'menu-tes',
    items: [
      { seed: 'item6', name: 'Chai Latte', desc: 'Mezcla de especias (canela, cardamomo, jengibre) con leche vaporizada. Dulce y aromático.', allergens: ['Leche'], price: '3,60 €' },
      { seed: 'item7', name: 'Matcha Latte', desc: 'Matcha ceremonial japonés batido con leche vegetal de avena. Potente y suave a la vez.', allergens: ['Leche', 'Gluten'], price: '4,10 €' },
      { seed: 'item8', name: 'Earl Grey Premium', desc: 'Té negro bergamota de primera hoja. Servido en tetera individual con temporizador.', allergens: [], price: '2,80 €' },
      { seed: 'item9', name: 'Rooibos Vainilla', desc: 'Infusión rooibos sudafricano con vainilla natural. Sin cafeína, perfecta por la tarde.', allergens: [], price: '2,60 €' },
    ],
  },
  {
    id: 'batidos',
    label: 'Batidos & Smoothies',
    seed: 'menu-batidos',
    items: [
      { seed: 'item10', name: 'Smoothie Verde', desc: 'Espinacas, plátano, manzana verde, jengibre y leche de coco. Energizante y nutritivo.', allergens: ['Frutos secos'], price: '5,20 €' },
      { seed: 'item11', name: 'Frappé de Café', desc: 'Cold brew, leche, hielo y sirope de vainilla. Batido y servido con nata vegana.', allergens: ['Leche'], price: '4,80 €' },
      { seed: 'item12', name: 'Batido de Fresa', desc: 'Fresas frescas de temporada, yogur griego y miel de acacia. 100% natural, sin azúcares añadidos.', allergens: ['Leche'], price: '4,50 €' },
    ],
  },
  {
    id: 'desayunos',
    label: 'Desayunos',
    seed: 'menu-desayunos',
    items: [
      { seed: 'item13', name: 'Tostada Artesana', desc: 'Pan de masa madre con AOVE, tomate natural rallado y jamón ibérico 100% bellota.', allergens: ['Gluten', 'Cerdo'], price: '5,90 €' },
      { seed: 'item14', name: 'Bol de Açaí', desc: 'Açaí orgánico, granola artesanal, fruta fresca de temporada y miel. Superalimento en tazón.', allergens: ['Gluten', 'Frutos secos'], price: '8,50 €' },
      { seed: 'item15', name: 'Huevos Benedictinos', desc: 'Huevos pochados sobre muffin inglés, bacon ahumado y salsa holandesa casera.', allergens: ['Gluten', 'Huevo', 'Leche'], price: '9,80 €' },
      { seed: 'item16', name: 'Porridge de Avena', desc: 'Avena cocinada lentamente con leche de almendra, toppings de frutas y semillas variadas.', allergens: ['Gluten', 'Frutos secos', 'Leche'], price: '6,20 €' },
    ],
  },
  {
    id: 'dulces',
    label: 'Dulces & Pasteles',
    seed: 'menu-dulces',
    items: [
      { seed: 'item17', name: 'Croissant de Mantequilla', desc: 'Horneado diariamente con mantequilla AOP de Normandía. 48 horas de fermentación en frío.', allergens: ['Gluten', 'Leche', 'Huevo'], price: '2,90 €' },
      { seed: 'item18', name: 'Tarta de Zanahoria', desc: 'Bizcocho húmedo de zanahoria, nueces y canela. Cobertura de queso crema con naranja.', allergens: ['Gluten', 'Huevo', 'Leche', 'Frutos secos'], price: '4,20 €' },
      { seed: 'item19', name: 'Brownie de Espresso', desc: 'Intenso brownie de chocolate negro 70% con espresso incorporado. Sin harina, sin gluten.', allergens: ['Huevo', 'Leche'], price: '3,80 €' },
      { seed: 'item20', name: 'Cinnamon Roll', desc: 'Bollo de canela sueco (Kanelbulle) con glaseado de queso crema. Receta original de Estocolmo.', allergens: ['Gluten', 'Leche', 'Huevo'], price: '3,50 €' },
      { seed: 'item21', name: 'Pain au Chocolat', desc: 'Croissant hojaldrado relleno de dos barras de chocolate Valrhona 66%. Irresistible.', allergens: ['Gluten', 'Leche', 'Huevo'], price: '3,20 €' },
    ],
  },
]

function AllergenBadge({ label }: { label: string }) {
  const colors: Record<string, string> = {
    Gluten: '#e8976c',
    Leche: '#6cb4e8',
    Huevo: '#e8d46c',
    'Frutos secos': '#a8e86c',
    Cerdo: '#e86c9a',
  }
  return (
    <span style={{
      background: colors[label] ?? '#ccc',
      color: '#fff',
      fontSize: '0.65rem',
      padding: '0.2rem 0.5rem',
      borderRadius: 100,
      fontFamily: 'sans-serif',
      fontWeight: 600,
      letterSpacing: '0.05em',
    }}>
      {label}
    </span>
  )
}

function MenuItem({ item, index }: { item: typeof categories[0]['items'][0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      style={{
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
        borderRadius: 12,
        background: '#fff',
        boxShadow: '0 2px 8px rgba(61,28,2,0.06)',
        alignItems: 'flex-start',
      }}
    >
      <img
        src={`https://picsum.photos/seed/${item.seed}/150/150`}
        alt={item.name}
        style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 10, flexShrink: 0 }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ color: dark, fontWeight: 700, fontSize: '1rem' }}>{item.name}</span>
          <span style={{ color: accent, fontWeight: 700, fontSize: '1rem', whiteSpace: 'nowrap', marginLeft: 8 }}>{item.price}</span>
        </div>
        <p style={{ color: '#7a5c3a', fontSize: '0.875rem', margin: '0 0 0.5rem', lineHeight: 1.5, fontFamily: 'sans-serif' }}>{item.desc}</p>
        {item.allergens.length > 0 && (
          <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
            {item.allergens.map(a => <AllergenBadge key={a} label={a} />)}
          </div>
        )}
      </div>
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        style={{
          background: accent,
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: 8,
          cursor: 'pointer',
          fontFamily: 'sans-serif',
          fontWeight: 600,
          fontSize: '0.8rem',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        Pide aquí
      </motion.button>
    </motion.div>
  )
}

export default function CartaPage() {
  const [active, setActive] = useState('cafes')

  return (
    <main style={{ background: bg, fontFamily: 'Georgia, serif', minHeight: '100vh' }}>
      {/* PAGE HEADER */}
      <div style={{ background: dark, color: '#fdf5e6', padding: '4rem 2rem 3rem', textAlign: 'center' }}>
        <span style={{ color: accent, letterSpacing: '0.3em', fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'sans-serif', display: 'block', marginBottom: '0.75rem' }}>
          Todo lo que ofrecemos
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300, margin: 0, letterSpacing: '-0.02em' }}>Nuestra Carta</h1>
        <div style={{ width: 60, height: 3, background: accent, margin: '1.5rem auto 1.5rem', borderRadius: 2 }} />
        <p style={{ color: '#c8a882', fontSize: '1rem', fontFamily: 'sans-serif', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
          Elaborado con ingredientes de primera calidad. Todos nuestros productos son frescos y de temporada.
        </p>
      </div>

      {/* STICKY CATEGORY NAV */}
      <div style={{ position: 'sticky', top: 64, zIndex: 40, background: '#fff', borderBottom: `3px solid ${accent}`, boxShadow: '0 2px 12px rgba(61,28,2,0.08)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', overflowX: 'auto', gap: 0 }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActive(cat.id)
                document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              style={{
                padding: '1rem 1.5rem',
                border: 'none',
                background: active === cat.id ? accent : 'transparent',
                color: active === cat.id ? '#fff' : dark,
                cursor: 'pointer',
                fontFamily: 'sans-serif',
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        {categories.map(cat => (
          <section key={cat.id} id={cat.id} style={{ marginBottom: '4rem', scrollMarginTop: 120 }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: '1.5rem', position: 'relative' }}>
              <img
                src={`https://picsum.photos/seed/${cat.seed}/900/300`}
                alt={cat.label}
                style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', filter: 'brightness(0.6)' }}
              />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 300, margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {cat.label}
                </h2>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {cat.items.map((item, i) => <MenuItem key={item.seed} item={item} index={i} />)}
            </div>
          </section>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div style={{ background: dark, color: '#c8a882', padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif', fontSize: '0.875rem' }}>
        <p style={{ margin: '0 0 0.5rem' }}>⚠️ Infórmanos de tus alergias o intolerancias antes de pedir.</p>
        <p style={{ margin: 0, opacity: 0.7 }}>Los precios incluyen IVA. Carta sujeta a disponibilidad estacional.</p>
      </div>
    </main>
  )
}

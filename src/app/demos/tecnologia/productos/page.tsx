'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const BG = '#fafafa'
const ACCENT = '#0066ff'
const TEXT = '#1a1a1a'
const GRAY = '#f0f0f0'
const GRAY2 = '#e5e5e5'
const CARD_BG = '#ffffff'

type Category = 'Todo' | 'Smartphones' | 'Portátiles' | 'Tablets' | 'Audio' | 'Smartwatches'
type SortOption = 'relevancia' | 'precio-asc' | 'precio-desc' | 'novedades'

const productos = [
  {
    id: 1, nombre: 'Smartphone X15', marca: 'ZENTECH', categoria: 'Smartphones' as Category,
    precio: 899, rating: 4.8, reseñas: 324,
    specs: ['6.8" AMOLED 120Hz', 'Snapdragon 8 Gen 3', '12GB RAM', '256GB'],
    seed: 'product1', nuevo: true,
  },
  {
    id: 2, nombre: 'Galaxy Ultra S24+', marca: 'Samsung', categoria: 'Smartphones' as Category,
    precio: 1099, rating: 4.7, reseñas: 512,
    specs: ['6.9" Dynamic AMOLED', 'Exynos 2400', '12GB RAM', '512GB'],
    seed: 'product2', nuevo: false,
  },
  {
    id: 3, nombre: 'Laptop UltraSlim Pro', marca: 'ZENTECH', categoria: 'Portátiles' as Category,
    precio: 1299, rating: 4.9, reseñas: 187,
    specs: ['14" IPS 2K', 'Core Ultra 7', '16GB RAM', '512GB SSD'],
    seed: 'product3', nuevo: true,
  },
  {
    id: 4, nombre: 'ThinkPad X1 Carbon', marca: 'Lenovo', categoria: 'Portátiles' as Category,
    precio: 1549, rating: 4.6, reseñas: 298,
    specs: ['14" IPS FHD', 'Core i7-1365U', '16GB RAM', '1TB SSD'],
    seed: 'product4', nuevo: false,
  },
  {
    id: 5, nombre: 'Tablet Pro 12.9"', marca: 'ZENTECH', categoria: 'Tablets' as Category,
    precio: 749, rating: 4.7, reseñas: 143,
    specs: ['12.9" Liquid Retina', 'Chip M2', '8GB RAM', '256GB'],
    seed: 'product5', nuevo: true,
  },
  {
    id: 6, nombre: 'WH-1000XM5', marca: 'Sony', categoria: 'Audio' as Category,
    precio: 349, rating: 4.9, reseñas: 876,
    specs: ['ANC premium', '30h batería', 'Hi-Res Audio', 'Bluetooth 5.2'],
    seed: 'product6', nuevo: false,
  },
  {
    id: 7, nombre: 'Smart Watch S3', marca: 'ZENTECH', categoria: 'Smartwatches' as Category,
    precio: 299, rating: 4.5, reseñas: 234,
    specs: ['AMOLED 1.8"', 'GPS integrado', '7 días batería', 'Resistente al agua 5ATM'],
    seed: 'product7', nuevo: true,
  },
  {
    id: 8, nombre: 'Galaxy Watch 6 Ultra', marca: 'Samsung', categoria: 'Smartwatches' as Category,
    precio: 649, rating: 4.6, reseñas: 189,
    specs: ['Super AMOLED 1.47"', 'BioActive Sensor', '3 días batería', 'Titanio'],
    seed: 'product8', nuevo: false,
  },
]

const categorias: Category[] = ['Todo', 'Smartphones', 'Portátiles', 'Tablets', 'Audio', 'Smartwatches']
const marcas = ['Todas', 'ZENTECH', 'Samsung', 'Sony', 'Lenovo']

const stars = (rating: number) => '★'.repeat(Math.floor(rating)) + (rating % 1 ? '½' : '') + '☆'.repeat(5 - Math.ceil(rating))

export default function TecnologiaProductos() {
  const [categoriaActiva, setCategoriaActiva] = useState<Category>('Todo')
  const [sortOption, setSortOption] = useState<SortOption>('relevancia')
  const [marcaFiltro, setMarcaFiltro] = useState('Todas')
  const [precioMax, setPrecioMax] = useState(2000)
  const [cartNotif, setCartNotif] = useState<string | null>(null)

  const addToCart = (nombre: string) => {
    setCartNotif(nombre)
    setTimeout(() => setCartNotif(null), 2500)
  }

  let productosFiltrados = productos
    .filter(p => categoriaActiva === 'Todo' || p.categoria === categoriaActiva)
    .filter(p => marcaFiltro === 'Todas' || p.marca === marcaFiltro)
    .filter(p => p.precio <= precioMax)

  if (sortOption === 'precio-asc') productosFiltrados = [...productosFiltrados].sort((a, b) => a.precio - b.precio)
  else if (sortOption === 'precio-desc') productosFiltrados = [...productosFiltrados].sort((a, b) => b.precio - a.precio)
  else if (sortOption === 'novedades') productosFiltrados = [...productosFiltrados].sort((a, b) => Number(b.nuevo) - Number(a.nuevo))

  return (
    <main style={{ background: BG, color: TEXT, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* CART NOTIFICATION */}
      {cartNotif && (
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed', top: 80, right: 24, zIndex: 1000,
            background: '#1a1a1a', color: '#fff', padding: '1rem 1.5rem',
            borderRadius: 10, boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
            fontSize: '0.9rem', fontWeight: 600,
            borderLeft: `4px solid ${ACCENT}`,
          }}
        >
          🛒 <strong>{cartNotif}</strong> añadido al carrito
        </motion.div>
      )}

      {/* HEADER */}
      <section style={{ background: '#ffffff', padding: '3.5rem 2rem 2rem', borderBottom: `1px solid ${GRAY2}` }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: TEXT, marginBottom: '0.5rem' }}>Todos los Productos</h1>
            <p style={{ color: '#777', fontSize: '1rem' }}>{productosFiltrados.length} productos encontrados</p>
          </motion.div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: 20,
                  border: `2px solid ${categoriaActiva === cat ? ACCENT : GRAY2}`,
                  background: categoriaActiva === cat ? ACCENT : 'white',
                  color: categoriaActiva === cat ? '#ffffff' : TEXT,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div style={{ display: 'flex', gap: '0', maxWidth: 1400, margin: '0 auto', padding: '2rem', alignItems: 'flex-start' }}>

        {/* SIDEBAR FILTERS */}
        <aside style={{ width: 240, flexShrink: 0, background: CARD_BG, borderRadius: 12, padding: '1.5rem', border: `1px solid ${GRAY2}`, marginRight: '2rem', position: 'sticky', top: 80 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: TEXT, marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: `1px solid ${GRAY2}` }}>Filtros</h3>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: TEXT, display: 'block', marginBottom: '0.75rem' }}>Marca</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {marcas.map(m => (
                <label key={m} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', color: marcaFiltro === m ? ACCENT : '#555' }}>
                  <input type="radio" name="marca" checked={marcaFiltro === m} onChange={() => setMarcaFiltro(m)} style={{ accentColor: ACCENT }} />
                  {m}
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: TEXT, display: 'block', marginBottom: '0.75rem' }}>
              Precio máx: <span style={{ color: ACCENT }}>{precioMax}€</span>
            </label>
            <input
              type="range" min={100} max={2000} step={50}
              value={precioMax}
              onChange={e => setPrecioMax(Number(e.target.value))}
              style={{ width: '100%', accentColor: ACCENT }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#999', marginTop: '0.25rem' }}>
              <span>100€</span><span>2.000€</span>
            </div>
          </div>

          <button
            onClick={() => { setMarcaFiltro('Todas'); setPrecioMax(2000); setCategoriaActiva('Todo') }}
            style={{ width: '100%', background: 'transparent', color: '#999', border: `1px solid ${GRAY2}`, padding: '0.5rem', borderRadius: 6, fontSize: '0.8rem', cursor: 'pointer' }}
          >
            Limpiar filtros
          </button>
        </aside>

        {/* PRODUCTS MAIN */}
        <div style={{ flex: 1 }}>
          {/* SORT BAR */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ color: '#777', fontSize: '0.9rem' }}>{productosFiltrados.length} productos</span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {([['relevancia', 'Más Vendidos'], ['precio-asc', 'Precio ↑'], ['precio-desc', 'Precio ↓'], ['novedades', 'Novedades']] as [SortOption, string][]).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setSortOption(val)}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: 6,
                    border: `1px solid ${sortOption === val ? ACCENT : GRAY2}`,
                    background: sortOption === val ? `${ACCENT}12` : 'white',
                    color: sortOption === val ? ACCENT : '#555',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCTS GRID */}
          <div className="r-grid-4" style={{ gap: '1.25rem' }}>
            {productosFiltrados.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{ background: CARD_BG, borderRadius: 12, overflow: 'hidden', border: `1px solid ${GRAY2}`, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'relative', height: 200, background: GRAY, overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${p.seed}/350/350`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={p.nombre} />
                  <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{ background: '#1a1a1a', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 4 }}>{p.marca}</span>
                    {p.nuevo && <span style={{ background: ACCENT, color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 4 }}>NUEVO</span>}
                  </div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: TEXT, marginBottom: '0.3rem', lineHeight: 1.3 }}>{p.nombre}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#f59e0b', fontSize: '0.8rem' }}>{stars(p.rating)}</span>
                    <span style={{ color: '#999', fontSize: '0.75rem' }}>({p.reseñas})</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.2rem', marginBottom: '1rem' }}>
                    {p.specs.map(s => (
                      <li key={s} style={{ fontSize: '0.75rem', color: '#666', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ color: ACCENT, fontSize: '0.6rem' }}>•</span> {s}
                      </li>
                    ))}
                  </ul>
                  <div style={{ fontSize: '1.3rem', fontWeight: 900, color: TEXT, marginBottom: '1rem' }}>{p.precio.toLocaleString('es-ES')}€</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <button
                      onClick={() => addToCart(p.nombre)}
                      style={{ background: 'transparent', color: ACCENT, border: `2px solid ${ACCENT}`, padding: '0.55rem', borderRadius: 7, fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${ACCENT}12` }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                    >
                      + Añadir al Carrito
                    </button>
                    <Link href="/demos/tecnologia/comparador">
                      <button style={{ background: ACCENT, color: '#fff', border: 'none', padding: '0.55rem', borderRadius: 7, fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', width: '100%' }}>
                        Comprar Ahora
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {productosFiltrados.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#999' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <p>No hay productos con estos filtros. Prueba a ampliar la búsqueda.</p>
            </div>
          )}
        </div>
      </div>

      {/* PROMO BANNER */}
      <section style={{ background: `linear-gradient(135deg, #001a4d 0%, #0066ff 100%)`, padding: '3.5rem 2rem', textAlign: 'center', margin: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Oferta especial</p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            Hasta 20% de descuento en packs
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Combina smartphone + auriculares o tablet + smartwatch y ahorra.
          </p>
          <button style={{ background: '#ffffff', color: ACCENT, border: 'none', padding: '0.85rem 2.5rem', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
            Ver Packs Combinados
          </button>
        </motion.div>
      </section>
    </main>
  )
}

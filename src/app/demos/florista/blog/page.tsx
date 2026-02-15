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

const categories = [
  { name: 'Todos', color: ACCENT },
  { name: 'Cuidados', color: '#4a7c59' },
  { name: 'Tendencias', color: '#b56576' },
  { name: 'Bodas', color: '#8b6b4a' },
  { name: 'Decoración', color: '#4a7070' },
]

const articles = [
  {
    id: 1, category: 'CUIDADOS', categoryColor: '#4a7c59',
    title: 'Cómo Mantener Tus Rosas Frescas Durante Más Tiempo',
    excerpt: 'Descubre los secretos que usan los floristas profesionales para mantener los ramos vivos y fragantes durante semanas. Desde el corte perfecto hasta el cambio de agua, cada detalle importa.',
    img: 'plant-blog1', author: 'María Flor', date: '12 enero 2024', readTime: '5 min',
    tag: 'Guía práctica',
  },
  {
    id: 2, category: 'TENDENCIAS', categoryColor: '#b56576',
    title: 'Flores Silvestres: La Tendencia Floral que Domina 2024',
    excerpt: 'Las flores silvestres y los arreglos de estilo boho están arrasando en bodas, eventos y decoración del hogar. Te contamos cómo incorporar esta tendencia natural y auténtica en tu vida.',
    img: 'plant-blog2', author: 'Ana Verde', date: '8 enero 2024', readTime: '4 min',
    tag: 'Tendencia',
  },
  {
    id: 3, category: 'BODAS', categoryColor: '#8b6b4a',
    title: 'Los Ramos de Novia Más Bonitos del Año: Nuestra Selección',
    excerpt: 'Hemos recopilado los 15 ramos de novia más increíbles que hemos creado este año. Desde composiciones minimalistas hasta arreglos exuberantes llenos de peonías y rosas.',
    img: 'plant-blog3', author: 'Sofía Ramos', date: '3 enero 2024', readTime: '6 min',
    tag: 'Inspiración',
  },
  {
    id: 4, category: 'DECORACIÓN', categoryColor: '#4a7070',
    title: 'Decora Tu Hogar con Flores: 10 Ideas para Cada Habitación',
    excerpt: 'Las flores transforman cualquier espacio. Te mostramos cómo elegir el arreglo perfecto para el salón, dormitorio, cocina y baño según la luz, el estilo y el tamaño de cada estancia.',
    img: 'plant-blog4', author: 'Carmen Jardín', date: '27 dic 2023', readTime: '7 min',
    tag: 'Decoración',
  },
  {
    id: 5, category: 'CUIDADOS', categoryColor: '#4a7c59',
    title: 'Guía Completa de Plantas de Interior para Principiantes',
    excerpt: 'No tienes pulgar verde? No importa. Te presentamos las 8 plantas más resistentes y hermosas que sobreviven incluso al más despistado de los cuidadores. Con instrucciones detalladas.',
    img: 'plant-blog5', author: 'María Flor', date: '20 dic 2023', readTime: '8 min',
    tag: 'Guía completa',
  },
  {
    id: 6, category: 'TENDENCIAS', categoryColor: '#b56576',
    title: 'Flores Secas y Pampas Grass: El Auge de la Decoración Duradera',
    excerpt: 'La decoración con flores secas ha pasado de ser tendencia a convertirse en un clásico. Descubre las mejores combinaciones, cómo crear tus propios arreglos y dónde colocarlos en casa.',
    img: 'plant-blog6', author: 'Ana Verde', date: '15 dic 2023', readTime: '5 min',
    tag: 'Tendencia',
  },
]

const featuredArticle = articles[0]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [email, setEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const heroRef = useRef(null)

  const filtered = activeCategory === 'Todos'
    ? articles
    : articles.filter(a => a.category === activeCategory.toUpperCase())

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: 'system-ui, sans-serif' }}>

      {/* PAGE HEADER */}
      <section style={{ background: LIGHT_GREEN, paddingTop: 100, paddingBottom: 64 }}>
        <div className="r-container">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: SECONDARY, fontWeight: 600, letterSpacing: 5, fontSize: 12, textTransform: 'uppercase', marginBottom: 12 }}>
            NUESTRO BLOG
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, color: TEXT, margin: '0 0 16px', fontFamily: 'Georgia, serif' }}>
            El Jardín de Ideas
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ fontSize: 17, opacity: 0.7, maxWidth: 560, lineHeight: 1.6 }}>
            Consejos de floristería, tendencias, cuidado de plantas y toda la inspiración floral que necesitas.
          </motion.p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="r-section" style={{ background: BG, paddingTop: 0 }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ borderRadius: 24, overflow: 'hidden', display: 'flex', flexWrap: 'wrap', border: `1px solid ${BORDER}`, background: CARD_BG }}
          >
            <div style={{ flex: '1 1 460px', overflow: 'hidden', minHeight: 360 }}>
              <img src={`https://picsum.photos/seed/${featuredArticle.img}/600/400`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={featuredArticle.title} />
            </div>
            <div style={{ flex: '1 1 320px', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20 }}>
                <span style={{ background: LIGHT_GREEN, color: featuredArticle.categoryColor, padding: '5px 14px', borderRadius: 50, fontSize: 12, fontWeight: 700 }}>
                  {featuredArticle.category}
                </span>
                <span style={{ background: SECONDARY + '30', color: SECONDARY, padding: '5px 14px', borderRadius: 50, fontSize: 12, fontWeight: 700 }}>
                  ✨ DESTACADO
                </span>
              </div>
              <h2 style={{ color: TEXT, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, margin: '0 0 16px', lineHeight: 1.3, fontFamily: 'Georgia, serif' }}>
                {featuredArticle.title}
              </h2>
              <p style={{ color: TEXT, opacity: 0.7, fontSize: 16, lineHeight: 1.7, margin: '0 0 24px' }}>
                {featuredArticle.excerpt}
              </p>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 28 }}>
                <span style={{ color: TEXT, opacity: 0.6, fontSize: 14 }}>✍️ {featuredArticle.author}</span>
                <span style={{ color: TEXT, opacity: 0.4, fontSize: 14 }}>·</span>
                <span style={{ color: TEXT, opacity: 0.6, fontSize: 14 }}>📅 {featuredArticle.date}</span>
                <span style={{ color: TEXT, opacity: 0.4, fontSize: 14 }}>·</span>
                <span style={{ color: TEXT, opacity: 0.6, fontSize: 14 }}>⏱ {featuredArticle.readTime}</span>
              </div>
              <button style={{
                background: ACCENT, color: '#fff', border: 'none', borderRadius: 50,
                padding: '14px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer',
                alignSelf: 'flex-start',
              }}>Leer artículo →</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section style={{ background: BG, padding: '0 0 40px', borderBottom: `1px solid ${BORDER}` }}>
        <div className="r-container">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ color: TEXT, opacity: 0.5, fontSize: 14, marginRight: 8 }}>Categorías:</span>
            {categories.map(c => (
              <button key={c.name} onClick={() => setActiveCategory(c.name)}
                style={{
                  background: activeCategory === c.name ? c.color : 'transparent',
                  color: activeCategory === c.name ? '#fff' : TEXT,
                  border: `2px solid ${activeCategory === c.name ? c.color : BORDER}`,
                  borderRadius: 50, padding: '8px 22px', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div className="r-grid-3">
            {filtered.map((article, i) => (
              <motion.article key={article.id}
                layout
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ background: CARD_BG, borderRadius: 20, overflow: 'hidden', border: `1px solid ${BORDER}`, cursor: 'pointer' }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${article.img}/600/400`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    alt={article.title} />
                  <div style={{ position: 'absolute', top: 14, left: 14, background: '#fff', color: article.categoryColor, padding: '5px 14px', borderRadius: 50, fontSize: 12, fontWeight: 700, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px 24px 28px' }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
                    <span style={{ background: LIGHT_GREEN, color: ACCENT, padding: '3px 10px', borderRadius: 50, fontSize: 12, fontWeight: 600 }}>
                      {article.tag}
                    </span>
                    <span style={{ color: TEXT, opacity: 0.5, fontSize: 12, display: 'flex', alignItems: 'center' }}>
                      ⏱ {article.readTime} de lectura
                    </span>
                  </div>
                  <h2 style={{ color: TEXT, fontWeight: 700, fontSize: 18, margin: '0 0 12px', lineHeight: 1.4, fontFamily: 'Georgia, serif' }}>
                    {article.title}
                  </h2>
                  <p style={{ color: TEXT, opacity: 0.65, fontSize: 14, lineHeight: 1.7, margin: '0 0 20px' }}>
                    {article.excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: `1px solid ${BORDER}` }}>
                    <div>
                      <p style={{ color: TEXT, fontWeight: 600, margin: 0, fontSize: 14 }}>{article.author}</p>
                      <p style={{ color: TEXT, opacity: 0.5, margin: 0, fontSize: 13 }}>{article.date}</p>
                    </div>
                    <button style={{
                      background: 'transparent', border: `1px solid ${ACCENT}`, color: ACCENT,
                      borderRadius: 50, padding: '8px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer',
                    }}>Leer →</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES BANNER */}
      <section className="r-section" style={{ background: LIGHT_GREEN }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ color: TEXT, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, margin: '0 0 12px', fontFamily: 'Georgia, serif' }}>
              Explora por Temática
            </h2>
            <p style={{ color: TEXT, opacity: 0.65, fontSize: 16 }}>Todo el conocimiento floral organizado para ti</p>
          </motion.div>
          <div className="r-grid-3">
            {[
              {
                title: 'Cuidado de Plantas', icon: '🌿', count: '24 artículos',
                desc: 'Guías prácticas para mantener tus plantas y flores siempre perfectas.',
                color: '#4a7c59',
              },
              {
                title: 'Tendencias Florales', icon: '✨', count: '18 artículos',
                desc: 'Las últimas modas en floristería, decoración y arreglos para estar siempre a la última.',
                color: '#b56576',
              },
              {
                title: 'Bodas e Inspiración', icon: '💐', count: '15 artículos',
                desc: 'Inspiración y consejos para la decoración floral del día más especial de tu vida.',
                color: '#8b6b4a',
              },
            ].map((cat, i) => (
              <motion.div key={cat.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                whileHover={{ y: -6 }}
                style={{ background: CARD_BG, borderRadius: 20, padding: 32, border: `1px solid ${BORDER}`, cursor: 'pointer', textAlign: 'center' }}
              >
                <div style={{ fontSize: 44, marginBottom: 16 }}>{cat.icon}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 20, margin: '0 0 8px', fontFamily: 'Georgia, serif' }}>{cat.title}</h3>
                <p style={{ color: cat.color, fontWeight: 600, fontSize: 13, margin: '0 0 12px' }}>{cat.count}</p>
                <p style={{ color: TEXT, opacity: 0.65, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="r-section" style={{ background: ACCENT }}>
        <div className="r-container" style={{ maxWidth: 680, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>🌸</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>NEWSLETTER</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, margin: '0 0 16px', fontFamily: 'Georgia, serif' }}>
              Tips de Floristería Cada Semana
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
              Únete a más de 3.000 amantes de las flores. Recibe consejos de cuidado, tendencias y ofertas exclusivas directamente en tu bandeja de entrada, cada martes.
            </p>

            {newsletterSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 16, padding: 28 }}>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: 20, margin: 0 }}>¡Bienvenida/o al jardín! 🌺</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: '8px 0 0', fontSize: 15 }}>Revisa tu email para confirmar la suscripción.</p>
              </motion.div>
            ) : (
              <div style={{ display: 'flex', gap: 12, maxWidth: 520, margin: '0 auto', flexWrap: 'wrap' }}>
                <input placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)}
                  style={{
                    flex: '1 1 260px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 50, padding: '14px 24px', color: '#fff', fontSize: 16, outline: 'none',
                    fontFamily: 'system-ui, sans-serif',
                  }} />
                <button onClick={() => email && setNewsletterSubmitted(true)}
                  style={{
                    flex: '0 0 auto', background: '#fff', color: ACCENT,
                    border: 'none', borderRadius: 50, padding: '14px 28px', fontWeight: 800,
                    fontSize: 15, cursor: 'pointer',
                  }}>Suscribirme</button>
              </div>
            )}
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 16 }}>
              Sin spam. Cancela cuando quieras con un solo clic.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

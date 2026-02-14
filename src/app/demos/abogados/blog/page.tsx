'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const BG = '#0d1b2a'
const ACCENT = '#c9a227'
const TEXT = '#e8e8e8'
const DARK = '#071220'

const articles = [
  {
    seed: 'law-blog1',
    category: 'LABORAL',
    title: 'Nuevos cambios en el Estatuto de los Trabajadores 2026: Todo lo que debes saber',
    excerpt: 'La última reforma laboral introduce cambios significativos en la regulación del despido objetivo, la jornada de trabajo y los derechos de conciliación familiar. Analizamos en detalle las implicaciones para empresas y trabajadores.',
    author: 'Isabel Castro Ferrer',
    authorRole: 'Socia Directora',
    date: '12 febrero 2026',
    readTime: '8 min',
    featured: false,
  },
  {
    seed: 'law-blog2',
    category: 'FISCAL',
    title: 'Reforma fiscal para autónomos 2026: claves para optimizar tu carga tributaria',
    excerpt: 'El nuevo sistema de cotización de autónomos por ingresos reales lleva consigo oportunidades de planificación fiscal que muchos desconocen. Te explicamos cómo aprovecharlas legalmente.',
    author: 'Fernando Ruiz Montoya',
    authorRole: 'Socio Senior',
    date: '8 febrero 2026',
    readTime: '6 min',
    featured: false,
  },
  {
    seed: 'law-blog3',
    category: 'CIVIL',
    title: 'Guía completa sobre herencias y testamentos en España 2026',
    excerpt: 'La planificación sucesoria es clave para proteger el patrimonio familiar y evitar conflictos entre herederos. Te guiamos por todos los tipos de testamentos, legítimas y la tributación del impuesto de sucesiones.',
    author: 'Ricardo Mendoza Álvarez',
    authorRole: 'Socio Director',
    date: '3 febrero 2026',
    readTime: '12 min',
    featured: false,
  },
  {
    seed: 'law-blog4',
    category: 'MERCANTIL',
    title: 'Responsabilidad de los administradores societarios: cuando el límite es la cárcel',
    excerpt: 'Los administradores de sociedades se enfrentan a un régimen de responsabilidad civil y penal cada vez más exigente. Conoce los límites legales y cómo protegerte adecuadamente.',
    author: 'Carmen Vega Morales',
    authorRole: 'Abogada Penal',
    date: '28 enero 2026',
    readTime: '10 min',
    featured: false,
  },
  {
    seed: 'law-blog5',
    category: 'INMOBILIARIO',
    title: 'Cláusulas abusivas en hipotecas: cómo reclamar lo que te corresponde',
    excerpt: 'Tras las sentencias del Tribunal Supremo y el TJUE, miles de hipotecados pueden reclamar cantidades cobradas indebidamente. Analizamos el procedimiento actualizado y los plazos de prescripción.',
    author: 'Lucía Herrero Vidal',
    authorRole: 'Abogada Inmobiliaria',
    date: '22 enero 2026',
    readTime: '7 min',
    featured: false,
  },
  {
    seed: 'law-blog6',
    category: 'PENAL',
    title: 'El delito de administración desleal: análisis tras la última reforma del Código Penal',
    excerpt: 'La reforma del Código Penal ha ampliado el ámbito de aplicación del delito de administración desleal. Explicamos qué conductas quedan ahora tipificadas y cómo afecta a directivos y gestores empresariales.',
    author: 'Isabel Castro Ferrer',
    authorRole: 'Socia Directora',
    date: '15 enero 2026',
    readTime: '9 min',
    featured: false,
  },
]

const categories = ['Todos', 'CIVIL', 'LABORAL', 'FISCAL', 'PENAL', 'MERCANTIL', 'INMOBILIARIO']

const categoryColors: Record<string, string> = {
  CIVIL: '#6b7c93',
  LABORAL: '#5c8a6e',
  FISCAL: '#8a6e5c',
  PENAL: '#8a5c5c',
  MERCANTIL: '#5c6a8a',
  INMOBILIARIO: '#7a6e5c',
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filtered = activeCategory === 'Todos' ? articles : articles.filter(a => a.category === activeCategory)

  return (
    <div style={{ background: BG, color: TEXT, overflowX: 'hidden' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${ACCENT}10, transparent)`, pointerEvents: 'none' }} />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: ACCENT, letterSpacing: 3, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', marginBottom: 20 }}>Actualidad legal</motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 900, fontFamily: 'Georgia, serif', marginBottom: 20 }}
        >
          BLOG JURÍDICO
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3 }} style={{ width: 60, height: 2, background: ACCENT, margin: '0 auto 24px' }} />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ color: `${TEXT}70`, fontSize: 17, maxWidth: 520, margin: '0 auto' }}>
          Análisis jurídico riguroso redactado por nuestros especialistas para mantenerle informado
        </motion.p>
      </section>

      {/* Featured article */}
      <section className="r-section-sm" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ border: `1px solid ${ACCENT}25`, background: '#0a1520', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          <div style={{ overflow: 'hidden', maxHeight: 400 }}>
            <img src="https://picsum.photos/seed/law-featured/900/500" alt="Artículo destacado" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.85)' }} />
          </div>
          <div style={{ padding: 'clamp(24px,5vw,40px) clamp(16px,4vw,36px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
              <span style={{ background: ACCENT, color: '#0d1b2a', fontSize: 10, fontWeight: 800, letterSpacing: 2, padding: '4px 12px' }}>DESTACADO</span>
              <span style={{ background: '#5c8a6e', fontSize: 10, fontWeight: 800, letterSpacing: 2, padding: '4px 10px', color: '#fff' }}>LABORAL</span>
            </div>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 900, fontFamily: 'Georgia, serif', lineHeight: 1.35, marginBottom: 16 }}>
              El nuevo marco legal del teletrabajo: obligaciones de empresa y derechos del trabajador en 2026
            </h2>
            <p style={{ color: `${TEXT}70`, fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
              La consolidación del trabajo remoto ha generado un nuevo corpus legislativo que afecta a miles de empresas españolas. Analizamos en profundidad el reglamento actualizado y sus implicaciones prácticas para la gestión de recursos humanos.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>Isabel Castro Ferrer</div>
                <div style={{ color: `${TEXT}50`, fontSize: 12 }}>Socia Directora · 20 febrero 2026 · 15 min lectura</div>
              </div>
            </div>
            <Link href="/demos/abogados/blog" style={{ display: 'inline-block', background: ACCENT, color: '#0d1b2a', padding: '12px 28px', fontWeight: 800, textDecoration: 'none', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', alignSelf: 'flex-start' }}>
              Leer artículo completo →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Main content + sidebar */}
      <section className="r-section-sm" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 48 }}>
        {/* Articles */}
        <div>
          {/* Category filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{ padding: '7px 16px', border: `1px solid ${activeCategory === cat ? ACCENT : `${ACCENT}30`}`, background: activeCategory === cat ? ACCENT : 'transparent', color: activeCategory === cat ? '#0d1b2a' : `${TEXT}70`, fontWeight: 700, fontSize: 12, letterSpacing: 1, cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {filtered.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                style={{ background: '#0a1520', border: `1px solid ${ACCENT}15`, overflow: 'hidden', cursor: 'pointer' }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${article.seed}/600/380`} alt={article.title} style={{ width: '100%', display: 'block', transition: 'transform 0.4s', filter: 'brightness(0.9)' }} />
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                    <span style={{ background: categoryColors[article.category] || ACCENT, fontSize: 9, fontWeight: 800, letterSpacing: 2, padding: '3px 8px', color: '#fff' }}>{article.category}</span>
                    <span style={{ color: `${TEXT}40`, fontSize: 11 }}>{article.readTime} lectura</span>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.5, marginBottom: 12, fontFamily: 'Georgia, serif' }}>{article.title}</h3>
                  <p style={{ color: `${TEXT}60`, fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>{article.excerpt.slice(0, 120)}...</p>
                  <div style={{ borderTop: `1px solid ${ACCENT}15`, paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600 }}>{article.author}</div>
                      <div style={{ fontSize: 10, color: `${TEXT}40` }}>{article.date}</div>
                    </div>
                    <Link href="/demos/abogados/blog" style={{ color: ACCENT, fontSize: 11, fontWeight: 700, textDecoration: 'none', letterSpacing: 1 }}>Leer →</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Categories */}
          <div style={{ background: '#0a1520', border: `1px solid ${ACCENT}20`, padding: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: ACCENT, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Georgia, serif' }}>Categorías</h3>
            {categories.filter(c => c !== 'Todos').map((cat) => {
              const count = articles.filter(a => a.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `1px solid ${ACCENT}10`, color: activeCategory === cat ? ACCENT : `${TEXT}70`, cursor: 'pointer', fontSize: 13, fontWeight: activeCategory === cat ? 700 : 400 }}
                >
                  <span>{cat}</span>
                  <span style={{ background: `${ACCENT}15`, borderRadius: 999, padding: '2px 8px', fontSize: 11 }}>{count}</span>
                </button>
              )
            })}
          </div>

          {/* Recent posts */}
          <div style={{ background: '#0a1520', border: `1px solid ${ACCENT}20`, padding: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: ACCENT, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Georgia, serif' }}>Artículos recientes</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {articles.slice(0, 4).map((article) => (
                <div key={article.title} style={{ display: 'flex', gap: 12, paddingBottom: 16, borderBottom: `1px solid ${ACCENT}10` }}>
                  <img src={`https://picsum.photos/seed/${article.seed}/80/80`} alt="" style={{ width: 52, height: 52, objectFit: 'cover', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 12, lineHeight: 1.4, fontWeight: 600, marginBottom: 4, fontFamily: 'Georgia, serif' }}>{article.title.slice(0, 60)}...</p>
                    <span style={{ fontSize: 10, color: `${TEXT}40` }}>{article.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, padding: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: ACCENT, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12, fontFamily: 'Georgia, serif' }}>Newsletter jurídico</h3>
            <p style={{ color: `${TEXT}70`, fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>Recibe análisis jurídicos de actualidad directamente en tu correo. Sin spam.</p>
            {subscribed ? (
              <p style={{ color: ACCENT, fontWeight: 700, fontSize: 13, textAlign: 'center', padding: '10px' }}>✓ Suscrito correctamente</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ background: BG, border: `1px solid ${ACCENT}40`, padding: '10px 14px', color: TEXT, fontSize: 13, outline: 'none' }}
                />
                <button type="submit" style={{ background: ACCENT, color: '#0d1b2a', border: 'none', padding: '10px', fontWeight: 800, fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer' }}>
                  Suscribirse
                </button>
              </form>
            )}
          </div>

          {/* Contact CTA */}
          <div style={{ background: '#0a1520', border: `1px solid ${ACCENT}20`, padding: 24, textAlign: 'center' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⚖️</div>
            <h3 style={{ fontSize: 15, fontWeight: 800, fontFamily: 'Georgia, serif', marginBottom: 10 }}>¿Necesita asesoramiento?</h3>
            <p style={{ color: `${TEXT}60`, fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>Primera consulta gratuita con uno de nuestros especialistas</p>
            <Link href="/demos/abogados/consulta" style={{ display: 'block', background: ACCENT, color: '#0d1b2a', padding: '12px', fontWeight: 800, textDecoration: 'none', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' }}>
              Consulta gratuita
            </Link>
          </div>
        </aside>
      </section>
    </div>
  )
}

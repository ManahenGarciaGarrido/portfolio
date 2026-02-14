'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const gold = '#c9a227'
const navy = '#001a4d'

const posts = [
  {
    id: 1, seed: 'blog-realty1', category: 'Mercado', date: '12 Ene 2025',
    title: 'El mercado inmobiliario de lujo en 2025: tendencias y oportunidades',
    excerpt: 'El segmento de lujo continua mostrando una resiliencia extraordinaria. Analizamos las claves del mercado y donde estan las mejores oportunidades de inversion este ano.',
    readTime: '6 min',
  },
  {
    id: 2, seed: 'blog-realty2', category: 'Consejos', date: '8 Ene 2025',
    title: 'Como preparar tu vivienda para venderla al mejor precio',
    excerpt: 'El home staging y la fotografia profesional pueden incrementar el precio de venta hasta un 15%. Te contamos todos los secretos de la puesta en escena inmobiliaria.',
    readTime: '8 min',
  },
  {
    id: 3, seed: 'blog-realty3', category: 'Inversion', date: '3 Ene 2025',
    title: 'Invertir en inmuebles en 2025: rentabilidades y fiscalidad',
    excerpt: 'La inversion inmobiliaria sigue siendo una de las mas seguras. Repasamos las rentabilidades por zonas, la fiscalidad del alquiler y las zonas de mayor potencial.',
    readTime: '10 min',
  },
  {
    id: 4, seed: 'blog-realty4', category: 'Legal', date: '28 Dic 2024',
    title: 'Ley de Vivienda 2024: todo lo que debes saber como propietario',
    excerpt: 'Los cambios legislativos de la Ley de Vivienda afectan a propietarios e inquilinos. Explicamos con claridad que cambia y como te afecta si tienes un piso en alquiler.',
    readTime: '12 min',
  },
  {
    id: 5, seed: 'blog-realty5', category: 'Barrios', date: '20 Dic 2024',
    title: 'Los 5 barrios mas exclusivos de Madrid para invertir en 2025',
    excerpt: 'Salamanca, Jeronimos, Almagro, Chamberí y Retiro concentran la mayor demanda de vivienda de alto standing. Analizamos precio por metro cuadrado y perspectivas.',
    readTime: '7 min',
  },
  {
    id: 6, seed: 'blog-realty6', category: 'Financiacion', date: '15 Dic 2024',
    title: 'Hipotecas en 2025: fija vs variable, que te conviene mas',
    excerpt: 'Con el Euribor en proceso de bajada, la eleccion entre hipoteca fija y variable vuelve a ser una decision clave. Analizamos los escenarios y te ayudamos a decidir.',
    readTime: '9 min',
  },
]

const categoryColors: Record<string, string> = {
  Mercado: '#3b82f6',
  Consejos: '#10b981',
  Inversion: gold,
  Legal: '#8b5cf6',
  Barrios: '#ef4444',
  Financiacion: '#f97316',
}

export default function BlogPage() {
  return (
    <main style={{ background: '#f9f7f2', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* HEADER */}
      <div style={{ background: navy, padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial={{ width: 0 }} animate={{ width: '60px' }} transition={{ duration: 0.7 }} style={{ height: '3px', background: gold, marginBottom: '1.5rem' }} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontSize: '2.8rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase' }}>
            Blog <span style={{ color: gold }}>Inmobiliario</span>
          </motion.h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem', fontStyle: 'italic' }}>
            Analisis, consejos y noticias del sector inmobiliario de lujo
          </p>
        </div>
      </div>

      {/* FEATURED POST */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="r-two-col" style={{ background: '#fff', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,26,77,0.1)', alignItems: 'stretch' }}
        >
          <img src={`https://picsum.photos/seed/${posts[0].seed}/700/450`} alt={posts[0].title} style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }} />
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ background: categoryColors[posts[0].category], color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '0.3rem 0.9rem', borderRadius: '20px', textTransform: 'uppercase' }}>{posts[0].category}</span>
              <span style={{ color: navy + '77', fontSize: '0.8rem' }}>DESTACADO</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: navy, lineHeight: 1.3, marginBottom: '1rem' }}>{posts[0].title}</h2>
            <p style={{ color: navy + 'bb', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>{posts[0].excerpt}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: navy + '77', fontSize: '0.8rem' }}>{posts[0].date} · {posts[0].readTime} lectura</span>
              <Link href="#" style={{ color: gold, fontWeight: 800, fontSize: '0.85rem', textDecoration: 'none' }}>Leer articulo →</Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* POST GRID */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1.5rem 1.5rem 4rem' }}>
        <div className="r-grid-3" style={{ gap: '1.75rem' }}>
          {posts.slice(1).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,26,77,0.07)' }}
            >
              <div style={{ position: 'relative' }}>
                <img src={`https://picsum.photos/seed/${post.seed}/600/360`} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
                <span style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  background: categoryColors[post.category] || gold,
                  color: '#fff', fontSize: '0.68rem', fontWeight: 800,
                  padding: '0.25rem 0.75rem', borderRadius: '20px', textTransform: 'uppercase',
                }}>{post.category}</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: navy + '77', fontSize: '0.75rem', marginBottom: '0.6rem' }}>{post.date} · {post.readTime} lectura</p>
                <h3 style={{ fontWeight: 800, color: navy, fontSize: '1.05rem', lineHeight: 1.35, marginBottom: '0.75rem' }}>{post.title}</h3>
                <p style={{ color: navy + 'aa', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{post.excerpt}</p>
                <Link href="#" style={{ color: gold, fontWeight: 800, fontSize: '0.82rem', textDecoration: 'none' }}>Seguir leyendo →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

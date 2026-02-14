'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const GOLD = '#b8860b';
const WHITE = '#ffffff';
const BLACK = '#000000';

const POSTS = [
  {
    id: 1,
    seed: 'blog1',
    category: 'TÉCNICA',
    title: 'La regla de los tercios: el secreto del encuadre perfecto',
    excerpt: 'Dominar la composición fotográfica es el primer paso hacia imágenes que emocionan. La regla de los tercios es una herramienta fundamental que todo fotógrafo debe interiorizar hasta aplicarla de forma instintiva.',
    date: '12 Enero 2025',
    readTime: '5 min',
    author: 'Alejandro Vega',
  },
  {
    id: 2,
    seed: 'blog2',
    category: 'INSPIRACIÓN',
    title: 'Luz dorada: cómo fotografiar durante la hora mágica',
    excerpt: 'La hora dorada —los primeros y últimos 60 minutos de luz solar— transforma cualquier fotografía ordinaria en algo extraordinario. Aprende a planificar tus sesiones para aprovechar esta luz irrepetible.',
    date: '28 Enero 2025',
    readTime: '7 min',
    author: 'Alejandro Vega',
  },
  {
    id: 3,
    seed: 'blog3',
    category: 'BEHIND THE SCENES',
    title: 'Detrás de las cámaras: la boda de Carlos y María',
    excerpt: 'Acompáñame en el making of de una de las bodas más especiales de mi carrera. Desde los preparativos hasta el baile de cierre, te cuento cómo capturamos cada momento único de este día.',
    date: '5 Febrero 2025',
    readTime: '8 min',
    author: 'Alejandro Vega',
  },
  {
    id: 4,
    seed: 'blog4',
    category: 'TÉCNICA',
    title: 'Guía completa de iluminación artificial para retratos',
    excerpt: 'Controlar la luz artificial abre un mundo de posibilidades creativas ilimitadas. En esta guía explico los modificadores de luz esenciales, las configuraciones más comunes y cómo lograr retratos de estudio profesional.',
    date: '14 Febrero 2025',
    readTime: '10 min',
    author: 'Alejandro Vega',
  },
  {
    id: 5,
    seed: 'blog5',
    category: 'INSPIRACIÓN',
    title: 'Los 10 fotógrafos que han cambiado mi forma de ver',
    excerpt: 'Desde Henri Cartier-Bresson hasta Annie Leibovitz, ciertos fotógrafos tienen el poder de redefinir por completo tu visión. Estos son los artistas que más han influido en mi trabajo y por qué.',
    date: '22 Febrero 2025',
    readTime: '6 min',
    author: 'Alejandro Vega',
  },
  {
    id: 6,
    seed: 'blog6',
    category: 'BEHIND THE SCENES',
    title: 'Mi equipo fotográfico para 2025: qué uso y por qué',
    excerpt: 'Después de años de pruebas y revisiones, he llegado a un equipo que me funciona perfectamente para todos los tipos de trabajo que hago. Te cuento todo sobre las cámaras, objetivos y accesorios que llevan conmigo a cada sesión.',
    date: '1 Marzo 2025',
    readTime: '9 min',
    author: 'Alejandro Vega',
  },
];

const RECENT_POSTS = POSTS.slice(0, 3);
const CATEGORIES_SIDEBAR = [
  { name: 'Técnica', count: 12 },
  { name: 'Inspiración', count: 8 },
  { name: 'Behind the Scenes', count: 6 },
  { name: 'Gear & Equipo', count: 5 },
  { name: 'Bodas', count: 9 },
];

function PostCard({ post, index, featured = false }: { post: typeof POSTS[0]; index: number; featured?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ border: `1px solid ${hovered ? GOLD : GOLD + '22'}`, transition: 'border 0.3s', overflow: 'hidden', background: '#0a0a0a' }}
    >
      <div style={{ overflow: 'hidden', height: featured ? '400px' : '220px', position: 'relative' }}>
        <img
          src={`https://picsum.photos/seed/${post.seed}/600/400`}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
          <span style={{ background: GOLD, color: BLACK, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', padding: '0.3rem 0.75rem' }}>
            {post.category}
          </span>
        </div>
      </div>
      <div style={{ padding: featured ? '2.5rem' : '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.72rem', color: '#555', marginBottom: '0.75rem' }}>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} lectura</span>
        </div>
        <h2 style={{ fontSize: featured ? '1.6rem' : '1.05rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.75rem', color: WHITE }}>
          {post.title}
        </h2>
        <p style={{
          color: '#888', lineHeight: 1.7, fontSize: '0.875rem', marginBottom: '1.5rem',
          display: '-webkit-box', WebkitLineClamp: featured ? 4 : 2,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {post.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, color: BLACK }}>AV</div>
            <span style={{ fontSize: '0.75rem', color: '#666' }}>{post.author}</span>
          </div>
          <button style={{
            background: 'transparent', border: `1px solid ${GOLD}55`,
            color: GOLD, padding: '0.4rem 1rem', fontSize: '0.7rem',
            fontWeight: 700, letterSpacing: '0.1em', cursor: 'pointer',
          }}>
            LEER MÁS →
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const featuredPost = POSTS[0];
  const remainingPosts = POSTS.slice(1);

  return (
    <main style={{ background: BLACK, color: WHITE, minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ padding: '4rem 4rem 2rem', borderBottom: `1px solid ${GOLD}22` }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: GOLD, marginBottom: '0.75rem', fontWeight: 700 }}>BLOG DE FOTOGRAFÍA</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Reflexiones & Técnica
          </h1>
          <p style={{ color: '#888', maxWidth: '500px', lineHeight: 1.7 }}>
            Artículos sobre fotografía, técnica, inspiración y todo lo que ocurre detrás de las cámaras.
          </p>
        </motion.div>
      </section>

      {/* Content with Sidebar */}
      <section style={{ padding: '3rem 4rem', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem', alignItems: 'start' }}>

        {/* Main Content */}
        <div>
          {/* Featured Post */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#555', marginBottom: '1rem', fontWeight: 700 }}>ARTÍCULO DESTACADO</div>
            <PostCard post={featuredPost} index={0} featured />
          </div>

          {/* Divider */}
          <div style={{ borderTop: `1px solid ${GOLD}22`, marginBottom: '2rem', paddingTop: '1.5rem' }}>
            <span style={{ color: '#444', fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: 700 }}>MÁS ARTÍCULOS</span>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {remainingPosts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i + 1} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside style={{ position: 'sticky', top: '6rem' }}>

          {/* Categories */}
          <div style={{ background: '#0a0a0a', border: `1px solid ${GOLD}22`, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: GOLD, fontWeight: 800, marginBottom: '1.25rem' }}>CATEGORÍAS</h3>
            {CATEGORIES_SIDEBAR.map((cat, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0.6rem 0', borderBottom: `1px solid #111`, cursor: 'pointer',
              }}>
                <span style={{ fontSize: '0.85rem', color: '#bbb' }}>{cat.name}</span>
                <span style={{ fontSize: '0.72rem', color: GOLD, fontWeight: 700 }}>({cat.count})</span>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <div style={{ background: '#0a0a0a', border: `1px solid ${GOLD}22`, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: GOLD, fontWeight: 800, marginBottom: '1.25rem' }}>POSTS RECIENTES</h3>
            {RECENT_POSTS.map((post, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: i < RECENT_POSTS.length - 1 ? `1px solid #111` : 'none' }}>
                <img
                  src={`https://picsum.photos/seed/${post.seed}/80/80`}
                  alt={post.title}
                  style={{ width: '52px', height: '52px', objectFit: 'cover', flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, lineHeight: 1.3, color: WHITE, marginBottom: '0.25rem' }}>{post.title}</div>
                  <div style={{ fontSize: '0.68rem', color: '#555' }}>{post.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram */}
          <div style={{ background: '#0a0a0a', border: `1px solid ${GOLD}22`, padding: '1.5rem' }}>
            <h3 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: GOLD, fontWeight: 800, marginBottom: '1.25rem' }}>SÍGUEME EN INSTAGRAM</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.25rem', marginBottom: '1rem' }}>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <div key={n} style={{ aspectRatio: '1', overflow: 'hidden' }}>
                  <img
                    src={`https://picsum.photos/seed/ig-foto${n}/200/200`}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
            </div>
            <a href="#" style={{ display: 'block', textAlign: 'center', color: GOLD, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none' }}>
              @alejandrovega_foto →
            </a>
          </div>

        </aside>
      </section>
    </main>
  );
}

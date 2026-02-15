'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import DemoNav from '@/components/demos/DemoNav'

const bg = '#fdf5e6'
const accent = '#c8956c'
const dark = '#3d1c02'

const menuItems = [
  { seed: 'coffee1', name: 'Espresso Clásico', desc: 'Blend 100% arábica, tostado oscuro con notas de chocolate y caramelo', price: '1,80 €' },
  { seed: 'coffee2', name: 'Flat White', desc: 'Doble ristretto con leche texturizada en microespuma sedosa', price: '3,20 €' },
  { seed: 'coffee3', name: 'Pour Over Etiopía', desc: 'Filtrado en V60, origen Yirgacheffe, notas florales y cítricos', price: '4,50 €' },
  { seed: 'coffee4', name: 'Cortado de Avena', desc: 'Espresso suavizado con leche de avena oat barista, cremoso y dulce', price: '2,90 €' },
  { seed: 'coffee5', name: 'Cold Brew 24h', desc: 'Maceración en frío 24 horas, suave y naturalmente dulce', price: '3,80 €' },
  { seed: 'coffee6', name: 'Latte de Temporada', desc: 'Latte artístico con sirope especial de la temporada actual', price: '3,60 €' },
]

const igPhotos = ['cafe-ig1', 'cafe-ig2', 'cafe-ig3', 'cafe-ig4', 'cafe-ig5', 'cafe-ig6']

function CoffeeCupSVG() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
      <div style={{ position: 'relative', display: 'flex', gap: '8px', marginBottom: '8px' }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{
              width: 4,
              height: 20,
              background: accent,
              borderRadius: 2,
              originY: 1,
            }}
            animate={{ scaleY: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
        <rect x="10" y="10" width="50" height="40" rx="6" fill="#c8956c" opacity="0.9" />
        <rect x="14" y="14" width="42" height="32" rx="4" fill="#a0714a" />
        <path d="M60 22 Q72 22 72 32 Q72 42 60 42" stroke="#c8956c" strokeWidth="4" fill="none" strokeLinecap="round" />
        <rect x="5" y="50" width="60" height="6" rx="3" fill="#c8956c" />
        <rect x="20" y="56" width="30" height="4" rx="2" fill="#a0714a" />
      </svg>
    </div>
  )
}

function MenuCard({ item, index }: { item: typeof menuItems[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: `0 20px 40px rgba(200,149,108,0.3)` }}
      style={{
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(61,28,2,0.08)',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div style={{ overflow: 'hidden', height: 200 }}>
        <motion.img
          src={`https://picsum.photos/seed/${item.seed}/500/350`}
          alt={item.name}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.4 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
          <h3 style={{ color: dark, fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>{item.name}</h3>
          <span style={{ color: accent, fontWeight: 700, fontSize: '1.1rem', whiteSpace: 'nowrap', marginLeft: 8 }}>{item.price}</span>
        </div>
        <p style={{ color: '#7a5c3a', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function CafeteriaHome() {
  const highlightsRef = useRef(null)
  const highlightsInView = useInView(highlightsRef, { once: true })
  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-80px' })

  return (
    <main style={{ background: bg, fontFamily: "'Georgia', serif" }}>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 'max(100svh, 600px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/coffee-shop/1400/800"
          alt="Café Artesano interior"
          style={{ objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%', filter: 'brightness(0.5)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(61,28,2,0.3) 0%, rgba(61,28,2,0.7) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ color: accent, letterSpacing: '0.3em', fontSize: '0.85rem', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
              ✦ Especialidad · Artesanía · Pasión ✦
            </span>
            <h1 style={{ color: '#fff', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 300, letterSpacing: '-0.02em', margin: '0 0 1rem', lineHeight: 1.1 }}>
              Café Artesano
            </h1>
            <p style={{ color: '#f0d5b5', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontStyle: 'italic', marginBottom: '2.5rem', fontWeight: 300 }}>
              Donde cada taza cuenta una historia
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="/demos/cafeteria/carta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: accent,
                color: '#fff',
                padding: '0.9rem 2.2rem',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                fontFamily: 'sans-serif',
              }}
            >
              Ver la Carta
            </motion.a>
            <motion.a
              href="/demos/cafeteria/historia"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255,255,255,0.7)',
                padding: '0.9rem 2.2rem',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                fontFamily: 'sans-serif',
              }}
            >
              Nuestra Historia
            </motion.a>
          </motion.div>
          <CoffeeCupSVG />
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '1.5rem' }}
        >
          ↓
        </motion.div>
      </section>

      {/* HIGHLIGHTS */}
      <section ref={highlightsRef} style={{ background: dark, padding: '1.5rem 2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {['Café de Especialidad', 'Tostado Propio', 'Desde 2018'].map((pill, i) => (
          <motion.span
            key={pill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={highlightsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            style={{
              background: accent,
              color: '#fff',
              padding: '0.5rem 1.5rem',
              borderRadius: 100,
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
            }}
          >
            {pill}
          </motion.span>
        ))}
      </section>

      {/* FEATURED MENU */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: accent, letterSpacing: '0.3em', fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'sans-serif', display: 'block', marginBottom: '0.75rem' }}>
            Nuestros Imprescindibles
          </span>
          <h2 style={{ color: dark, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, margin: 0 }}>La Carta Destacada</h2>
          <div style={{ width: 60, height: 3, background: accent, margin: '1rem auto 0', borderRadius: 2 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {menuItems.map((item, i) => <MenuCard key={item.seed} item={item} index={i} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <motion.a
            href="/demos/cafeteria/carta"
            whileHover={{ scale: 1.04 }}
            style={{
              display: 'inline-block',
              border: `2px solid ${accent}`,
              color: accent,
              padding: '0.9rem 2.5rem',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontFamily: 'sans-serif',
              letterSpacing: '0.05em',
            }}
          >
            Ver Carta Completa
          </motion.a>
        </div>
      </section>

      {/* OUR STORY TEASER */}
      <section ref={storyRef} style={{ background: '#f5ead3', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 60px rgba(61,28,2,0.15)' }}
          >
            <img src="https://picsum.photos/seed/barista/600/700" alt="Nuestro barista" style={{ width: '100%', height: 500, objectFit: 'cover', display: 'block' }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span style={{ color: accent, letterSpacing: '0.3em', fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'sans-serif', display: 'block', marginBottom: '1rem' }}>
              Nuestra Historia
            </span>
            <h2 style={{ color: dark, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 400, margin: '0 0 1.5rem', lineHeight: 1.2 }}>
              Seis años cultivando<br />el amor por el café
            </h2>
            <p style={{ color: '#5a3a1a', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              En 2018, abrimos las puertas de Café Artesano con una sola misión: ofrecer el mejor café de especialidad de la ciudad. Seleccionamos nuestros granos directamente de productores en Etiopía, Colombia y Guatemala.
            </p>
            <p style={{ color: '#5a3a1a', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Cada lote lo tostamos en nuestra propia tostadería, controlando el perfil de tueste al grado. Porque creemos que el gran café empieza mucho antes de que entre en la taza.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {[['6', 'Años'], ['4', 'Orígenes'], ['1', 'Premio']].map(([num, label]) => (
                <div key={label} style={{ background: accent, borderRadius: 12, padding: '1rem 1.5rem', textAlign: 'center', flex: 1, minWidth: 80 }}>
                  <div style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 700 }}>{num}</div>
                  <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8rem', fontFamily: 'sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>
            <motion.a
              href="/demos/cafeteria/historia"
              whileHover={{ scale: 1.04 }}
              style={{ display: 'inline-block', background: dark, color: '#fff', padding: '0.9rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontFamily: 'sans-serif' }}
            >
              Leer Nuestra Historia
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section style={{ padding: '4rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: accent, letterSpacing: '0.3em', fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'sans-serif', display: 'block', marginBottom: '0.5rem' }}>
            Síguenos
          </span>
          <h2 style={{ color: dark, fontSize: '1.8rem', fontWeight: 400, margin: 0 }}>@CafeArtesano en Instagram</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.5rem' }}>
          {igPhotos.map((seed, i) => (
            <motion.div
              key={seed}
              whileHover={{ scale: 1.04, zIndex: 2 }}
              style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: 8, cursor: 'pointer', position: 'relative' }}
            >
              <img src={`https://picsum.photos/seed/${seed}/300/300`} alt="Instagram" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{ position: 'absolute', inset: 0, background: `rgba(200,149,108,0.6)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span style={{ color: '#fff', fontSize: '1.5rem' }}>♥</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: dark, color: '#c8a882', padding: '3rem 2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <div style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', color: '#fdf5e6', marginBottom: '0.5rem' }}>Café Artesano</div>
        <p style={{ fontSize: '0.875rem', margin: '0 0 1rem' }}>Calle del Café, 12 · Madrid · Lun–Dom 7:30–21:00</p>
        <p style={{ fontSize: '0.75rem', opacity: 0.6, margin: 0 }}>© 2024 Café Artesano · Todos los derechos reservados</p>
      </footer>
    </main>
  )
}

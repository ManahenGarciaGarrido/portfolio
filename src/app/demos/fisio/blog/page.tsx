'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const BG = '#001f3f'
const ACCENT = '#00c896'
const TEXT = '#e8f8f4'
const CARD = '#002a52'
const CARD2 = '#003366'

type Category = 'Todos' | 'Lesiones Deportivas' | 'Rehabilitación' | 'Prevención' | 'Nutrición'

const articulos = [
  {
    seed: 'physio-blog1',
    categoria: 'Lesiones Deportivas' as Category,
    titulo: 'Cómo prevenir y tratar la tendinitis del corredor',
    extracto: 'La tendinitis del tendón de Aquiles es una de las lesiones más frecuentes entre los corredores. Descubre las claves para prevenirla y qué hacer si ya la padeces.',
    fecha: '12 Noviembre 2024',
    autor: 'Dr. Alejandro Torres',
    lectura: '5 min',
  },
  {
    seed: 'physio-blog2',
    categoria: 'Rehabilitación' as Category,
    titulo: 'Vuelta al deporte tras una lesión de ligamento cruzado: guía completa',
    extracto: 'La rotura del ligamento cruzado anterior es una de las lesiones más temidas. Te explicamos paso a paso el proceso de recuperación hasta volver a la competición.',
    fecha: '28 Octubre 2024',
    autor: 'Pablo Fernández',
    lectura: '8 min',
  },
  {
    seed: 'physio-blog3',
    categoria: 'Prevención' as Category,
    titulo: '10 ejercicios de calentamiento que deberías hacer antes de cualquier actividad',
    extracto: 'Un buen calentamiento reduce el riesgo de lesiones hasta un 60%. Te enseñamos la rutina que aplican nuestros atletas de élite antes de cada entrenamiento.',
    fecha: '15 Octubre 2024',
    autor: 'Ana Ramírez',
    lectura: '6 min',
  },
  {
    seed: 'physio-blog4',
    categoria: 'Nutrición' as Category,
    titulo: 'Alimentación para la recuperación deportiva: qué comer y cuándo',
    extracto: 'La nutrición es parte fundamental del proceso de recuperación. Conoce los nutrientes clave que aceleran la regeneración muscular y articular.',
    fecha: '3 Octubre 2024',
    autor: 'Dra. Carmen Sánchez',
    lectura: '7 min',
  },
  {
    seed: 'physio-blog5',
    categoria: 'Lesiones Deportivas' as Category,
    titulo: 'Epicondilitis (codo de tenista): causas, síntomas y tratamiento',
    extracto: 'No solo los tenistas sufren epicondilitis. Esta lesión afecta también a trabajadores de oficina. Aprende a identificarla y tratarla correctamente.',
    fecha: '19 Septiembre 2024',
    autor: 'Miguel Ortega',
    lectura: '5 min',
  },
  {
    seed: 'physio-blog6',
    categoria: 'Prevención' as Category,
    titulo: 'Ergonomía en la oficina: cómo evitar el dolor de espalda en el trabajo',
    extracto: 'El sedentarismo laboral es una epidemia silenciosa. Te damos las claves para configurar tu puesto de trabajo y los ejercicios que puedes hacer sin levantarte.',
    fecha: '5 Septiembre 2024',
    autor: 'Dra. Lucía Herrero',
    lectura: '6 min',
  },
]

const categorias: Category[] = ['Todos', 'Lesiones Deportivas', 'Rehabilitación', 'Prevención', 'Nutrición']

const categoryColors: Record<string, string> = {
  'Lesiones Deportivas': '#ff6b6b',
  'Rehabilitación': '#00c896',
  'Prevención': '#ffd166',
  'Nutrición': '#a78bfa',
}

export default function FisioBlog() {
  const [categoriaActiva, setCategoriaActiva] = useState<Category>('Todos')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const articulosFiltrados = categoriaActiva === 'Todos'
    ? articulos
    : articulos.filter(a => a.categoria === categoriaActiva)

  return (
    <main style={{ background: BG, color: TEXT, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* HEADER */}
      <section style={{ background: CARD, padding: '4rem 2rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nuestro Blog</p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: '1rem' }}>
            Conocimiento al Servicio de tu Salud
          </h1>
          <p style={{ color: TEXT, opacity: 0.75, maxWidth: 560, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Artículos escritos por nuestros fisioterapeutas especializados para ayudarte a entender tu cuerpo, prevenir lesiones y optimizar tu rendimiento.
          </p>
        </motion.div>
      </section>

      {/* CATEGORY FILTER */}
      <section style={{ padding: '2.5rem 2rem 0', background: BG }}>
        <div className="r-container">
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: 25,
                  border: `2px solid ${categoriaActiva === cat ? ACCENT : `${ACCENT}30`}`,
                  background: categoriaActiva === cat ? ACCENT : 'transparent',
                  color: categoriaActiva === cat ? '#001f3f' : TEXT,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  opacity: categoriaActiva === cat ? 1 : 0.75,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section style={{ padding: '3rem 2rem 5rem' }}>
        <div className="r-container">
          <motion.div
            layout
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}
          >
            {articulosFiltrados.map((art, i) => (
              <motion.article
                key={art.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ background: CARD, borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <img src={`https://picsum.photos/seed/${art.seed}/600/400`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={art.titulo} />
                  <div style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    background: categoryColors[art.categoria] || ACCENT,
                    color: '#001f3f',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.8rem',
                    borderRadius: 20,
                  }}>
                    {art.categoria}
                  </div>
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.4, marginBottom: '0.75rem' }}>{art.titulo}</h2>
                  <p style={{ color: TEXT, opacity: 0.7, fontSize: '0.875rem', lineHeight: 1.65, flex: 1, marginBottom: '1.5rem' }}>{art.extracto}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${ACCENT}20`, paddingTop: '1rem' }}>
                    <div>
                      <div style={{ color: ACCENT, fontSize: '0.8rem', fontWeight: 600 }}>{art.autor}</div>
                      <div style={{ color: TEXT, opacity: 0.5, fontSize: '0.75rem', marginTop: '0.1rem' }}>{art.fecha}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ color: TEXT, opacity: 0.5, fontSize: '0.75rem' }}>📖 {art.lectura}</span>
                      <button style={{ background: 'transparent', color: ACCENT, border: `1px solid ${ACCENT}`, padding: '0.35rem 0.9rem', borderRadius: 6, fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>
                        Leer
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {articulosFiltrados.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: TEXT, opacity: 0.5 }}>
              No hay artículos en esta categoría todavía.
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: ACCENT, padding: '5rem 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#001f3f', marginBottom: '0.75rem' }}>
            No Te Pierdas Ningún Artículo
          </h2>
          <p style={{ color: '#001f3f', opacity: 0.75, marginBottom: '2rem', lineHeight: 1.6 }}>
            Suscríbete a nuestro newsletter y recibe cada semana los últimos artículos sobre fisioterapia, prevención de lesiones y rendimiento deportivo.
          </p>
          {!subscribed ? (
            <div style={{ display: 'flex', gap: '0', maxWidth: 440, margin: '0 auto', flexWrap: 'wrap' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="tu@email.com"
                style={{ flex: 1, padding: '0.9rem 1.5rem', borderRadius: '8px 0 0 8px', border: 'none', fontSize: '1rem', outline: 'none', minWidth: 200 }}
              />
              <button
                onClick={() => email && setSubscribed(true)}
                style={{ background: '#001f3f', color: ACCENT, border: 'none', padding: '0.9rem 1.5rem', borderRadius: '0 8px 8px 0', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}
              >
                Suscribirme
              </button>
            </div>
          ) : (
            <div style={{ background: '#001f3f', color: ACCENT, padding: '1.2rem 2rem', borderRadius: 10, fontWeight: 700, fontSize: '1rem' }}>
              ✅ ¡Suscripción confirmada! Bienvenido a nuestra comunidad.
            </div>
          )}
          <p style={{ color: '#001f3f', opacity: 0.5, fontSize: '0.8rem', marginTop: '1rem' }}>Sin spam. Puedes darte de baja cuando quieras.</p>
        </motion.div>
      </section>

      {/* POPULAR TOPICS */}
      <section style={{ background: CARD2, padding: '4rem 2rem' }}>
        <div className="r-container">
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '2rem' }}>Temas Más Consultados</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {[
              'Dolor lumbar', 'Rodilla del corredor', 'Cervicalgia', 'Fascitis plantar',
              'Hombro doloroso', 'Ciática', 'Epicondilitis', 'Esguince de tobillo',
              'Hernia discal', 'Contracturas cervicales', 'Tendinitis', 'Rehabilitación post-covid',
            ].map(tag => (
              <span
                key={tag}
                style={{ background: CARD, color: TEXT, opacity: 0.8, padding: '0.5rem 1.2rem', borderRadius: 20, fontSize: '0.875rem', cursor: 'pointer', border: `1px solid ${ACCENT}25`, transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.borderColor = ACCENT; (e.currentTarget as HTMLSpanElement).style.color = ACCENT }}
                onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.borderColor = `${ACCENT}25`; (e.currentTarget as HTMLSpanElement).style.color = TEXT }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BG, padding: '4rem 2rem', textAlign: 'center', borderTop: `1px solid ${ACCENT}15` }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
          ¿Tienes una Lesión o Dolor?
        </h2>
        <p style={{ color: TEXT, opacity: 0.65, marginBottom: '2rem' }}>No esperes a que se cronifique. Nuestros especialistas están listos para ayudarte.</p>
        <Link href="/demos/fisio/reservar">
          <button style={{ background: ACCENT, color: '#001f3f', border: 'none', padding: '1rem 3rem', borderRadius: 8, fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}>
            Reservar Cita Online
          </button>
        </Link>
      </section>
    </main>
  )
}

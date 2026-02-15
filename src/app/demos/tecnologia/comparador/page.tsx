'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const BG = '#fafafa'
const ACCENT = '#0066ff'
const TEXT = '#1a1a1a'
const GRAY = '#f0f0f0'
const GRAY2 = '#e5e5e5'

const productos = [
  {
    nombre: 'iPhone 15 Pro',
    marca: 'Apple',
    precio: '1.199€',
    imagen: 'https://picsum.photos/seed/iphone15/400/400',
    especificaciones: {
      Pantalla: '6.1" Super Retina XDR OLED, 2556×1179px, 460ppi',
      Procesador: 'Apple A17 Pro (3nm), 6 núcleos CPU, 6 núcleos GPU',
      RAM: '8GB LPDDR5',
      Almacenamiento: '128GB / 256GB / 512GB / 1TB',
      Cámara: '48MP (principal) + 12MP (ultra) + 12MP (teleobjetivo 3x)',
      Batería: '3.274mAh, hasta 23h reproducción video',
      'S.O.': 'iOS 17',
      '5G': '✅ Sí',
      'Carga inalámbrica': '✅ MagSafe 15W / Qi2 15W',
      'Resistencia al agua': '✅ IP68 (6m / 30min)',
      'Face ID': '✅ Sí',
      Peso: '187g',
      Material: 'Titanio grado 5',
      NFC: '✅ Sí',
    },
    pros: ['Mejor ecosistema integrado', 'Rendimiento excepcional', 'Cámara profesional con modo cine', 'Actualizaciones largas (6+ años)', 'Mejor privacidad'],
    contras: ['Precio muy elevado', 'Sin carga rápida >27W', 'Sin USB 3.0 en versión básica', 'Personalización limitada vs Android'],
    puntuacion: 9.2,
    mejor_para: 'Usuarios del ecosistema Apple, creadores de contenido, usuarios que priorizan privacidad',
  },
  {
    nombre: 'Samsung Galaxy S24 Ultra',
    marca: 'Samsung',
    precio: '1.349€',
    imagen: 'https://picsum.photos/seed/samsung-s24/400/400',
    especificaciones: {
      Pantalla: '6.8" Dynamic AMOLED 2X, 3088×1440px, 501ppi, 120Hz',
      Procesador: 'Snapdragon 8 Gen 3 (4nm), 8 núcleos',
      RAM: '12GB LPDDR5X',
      Almacenamiento: '256GB / 512GB / 1TB',
      Cámara: '200MP (principal) + 12MP (ultra) + 10MP (3x) + 50MP (5x)',
      Batería: '5.000mAh, hasta 27h uso mixto',
      'S.O.': 'Android 14, One UI 6.1',
      '5G': '✅ Sí',
      'Carga inalámbrica': '✅ 15W + carga invertida',
      'Resistencia al agua': '✅ IP68 (1,5m / 30min)',
      'Face ID': '✅ Reconocimiento facial + huella bajo pantalla',
      Peso: '232g',
      Material: 'Titanio armored',
      NFC: '✅ Sí',
    },
    pros: ['Mejor sistema de cámaras del mercado', 'S Pen integrado', 'Pantalla espectacular', 'Carga rápida 45W', 'IA Galaxy para productividad'],
    contras: ['Precio muy elevado', 'Peso considerable (232g)', 'UI puede resultar recargada', 'Rendimiento térmico ajustado'],
    puntuacion: 9.4,
    mejor_para: 'Power users, fotógrafos móviles, profesionales que necesitan S Pen',
  },
  {
    nombre: 'Google Pixel 8 Pro',
    marca: 'Google',
    precio: '1.099€',
    imagen: 'https://picsum.photos/seed/pixel8/400/400',
    especificaciones: {
      Pantalla: '6.7" LTPO OLED, 2992×1344px, 489ppi, 1–120Hz adaptativo',
      Procesador: 'Google Tensor G3 (4nm), 9 núcleos',
      RAM: '12GB LPDDR5',
      Almacenamiento: '128GB / 256GB / 1TB',
      Cámara: '50MP (principal) + 48MP (ultra) + 48MP (teleobjetivo 5x)',
      Batería: '5.050mAh, hasta 24h uso',
      'S.O.': 'Android 14 puro (7 años actualizaciones)',
      '5G': '✅ Sí',
      'Carga inalámbrica': '✅ 23W Qi',
      'Resistencia al agua': '✅ IP68 (1,5m / 30min)',
      'Face ID': '✅ Desbloqueo facial + huella bajo pantalla',
      Peso: '213g',
      Material: 'Aluminio mate + cristal Corning Gorilla Glass Victus 2',
      NFC: '✅ Sí',
    },
    pros: ['Android más puro y fluido', '7 años de actualizaciones garantizadas', 'IA de Google integrada nativamente', 'Mejor relación calidad/precio en gama alta', 'Cámara computacional líder'],
    contras: ['Procesador Tensor menos potente en gaming', 'Ecosistema menos desarrollado que Apple', 'Disponibilidad limitada vs Samsung', 'Temperatura bajo carga elevada'],
    puntuacion: 8.9,
    mejor_para: 'Desarrolladores, usuarios de Android puro, quienes quieren IA sin restricciones',
  },
]

const especKeys = Object.keys(productos[0].especificaciones)

const verdaderos = ['✅ Sí', '✅ MagSafe 15W / Qi2 15W', '✅ IP68 (6m / 30min)', '✅ Sí', '✅ 15W + carga invertida', '✅ IP68 (1,5m / 30min)', '✅ 23W Qi', '✅ Reconocimiento facial + huella bajo pantalla', '✅ Desbloqueo facial + huella bajo pantalla']

export default function TecnologiaComparador() {
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null)
  const [recommendation, setRecommendation] = useState<string | null>(null)

  const quizPreguntas = [
    {
      pregunta: '¿Qué sistema operativo prefieres?',
      opciones: ['iOS (Apple)', 'Android', 'No tengo preferencia'],
      keys: ['apple', 'android', 'neutral'],
    },
    {
      pregunta: '¿Cuál es tu prioridad principal?',
      opciones: ['Fotografía y vídeo', 'Productividad y trabajo', 'Rendimiento y juegos'],
      keys: ['foto', 'trabajo', 'gaming'],
    },
    {
      pregunta: '¿Cuánto quieres invertir?',
      opciones: ['Hasta 1.100€', 'Hasta 1.250€', 'Sin límite de presupuesto'],
      keys: ['bajo', 'medio', 'alto'],
    },
  ]

  const recMap: Record<string, string> = {
    'apple': 'iPhone 15 Pro — El ecosistema Apple es incomparable si ya tienes Mac o iPad.',
    'foto': 'Samsung Galaxy S24 Ultra — Cuatro cámaras incluyendo 200MP hacen de este el mejor smartphone para fotografía.',
    'gaming': 'Samsung Galaxy S24 Ultra — El Snapdragon 8 Gen 3 es el chip Android más potente del momento.',
    'android': 'Google Pixel 8 Pro — Android puro con 7 años de actualizaciones garantizadas.',
    'neutral': 'Samsung Galaxy S24 Ultra — La combinación más completa del mercado en 2024.',
    'trabajo': 'Google Pixel 8 Pro — La IA de Google integrada nativamente te ahorra horas de trabajo cada semana.',
    'bajo': 'Google Pixel 8 Pro — A 1.099€ ofrece el mejor rendimiento dentro de este rango.',
    'medio': 'iPhone 15 Pro — A 1.199€ ofrece el mejor ecosistema y la mejor cámara de su segmento.',
    'alto': 'Samsung Galaxy S24 Ultra — Sin compromiso de presupuesto, el S24 Ultra es simplemente el mejor Android disponible.',
  }

  const handleQuizAnswer = (key: string) => {
    setQuizAnswer(key)
    if (recMap[key]) {
      setRecommendation(recMap[key])
      setQuizStep(3)
    } else {
      setQuizStep(s => s + 1)
    }
  }

  return (
    <main style={{ background: BG, color: TEXT, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* HEADER */}
      <section style={{ background: '#ffffff', padding: '4rem 2rem 3rem', textAlign: 'center', borderBottom: `1px solid ${GRAY2}` }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Herramienta</p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: TEXT, marginBottom: '1rem' }}>
            COMPARA PRODUCTOS
          </h1>
          <p style={{ color: '#666', maxWidth: 540, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Análisis en profundidad de los smartphones más populares del mercado. Especificaciones, pros, contras y recomendación personalizada.
          </p>
        </motion.div>
      </section>

      {/* PRODUCT HEADER ROW */}
      <section style={{ padding: '2.5rem 2rem 0', overflowX: 'auto' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr 1fr', gap: '1rem', minWidth: 800 }}>
            <div />
            {productos.map((p, i) => (
              <motion.div
                key={p.nombre}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{ background: '#ffffff', borderRadius: 16, padding: '2rem 1.5rem', textAlign: 'center', border: `2px solid ${i === 1 ? ACCENT : GRAY2}`, boxShadow: i === 1 ? `0 4px 30px ${ACCENT}20` : 'none' }}
              >
                {i === 1 && <div style={{ background: ACCENT, color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.75rem', borderRadius: 20, display: 'inline-block', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>EDITOR'S CHOICE</div>}
                <div style={{ width: 80, height: 80, borderRadius: 12, overflow: 'hidden', margin: '0 auto 1rem' }}>
                  <img src={p.imagen} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={p.nombre} />
                </div>
                <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 600, marginBottom: '0.3rem' }}>{p.marca}</div>
                <h2 style={{ fontSize: '1rem', fontWeight: 800, color: TEXT, marginBottom: '0.5rem' }}>{p.nombre}</h2>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: TEXT, marginBottom: '0.75rem' }}>{p.precio}</div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                  <span style={{ background: ACCENT, color: '#fff', fontWeight: 800, fontSize: '0.85rem', padding: '0.3rem 0.6rem', borderRadius: 6 }}>{p.puntuacion}</span>
                  <span style={{ color: '#999', fontSize: '0.8rem' }}>/ 10</span>
                </div>
                <button style={{ background: ACCENT, color: '#fff', border: 'none', padding: '0.65rem 1.5rem', borderRadius: 7, fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', width: '100%' }}>
                  Comprar
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: '2.5rem 2rem', overflowX: 'auto' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: TEXT, marginBottom: '1.5rem' }}>Especificaciones Técnicas</h2>
          <div style={{ background: '#ffffff', borderRadius: 16, overflow: 'hidden', border: `1px solid ${GRAY2}`, minWidth: 800 }}>
            {especKeys.map((key, i) => (
              <div
                key={key}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr 1fr 1fr',
                  gap: '0',
                  background: i % 2 === 0 ? '#ffffff' : '#f8f8f8',
                  borderBottom: `1px solid ${GRAY2}`,
                }}
              >
                <div style={{ padding: '1rem 1.25rem', fontWeight: 700, fontSize: '0.85rem', color: '#444', borderRight: `1px solid ${GRAY2}` }}>{key}</div>
                {productos.map(p => {
                  const val = p.especificaciones[key as keyof typeof p.especificaciones]
                  const isTrue = verdaderos.includes(val)
                  const isFalse = val === '❌ No'
                  return (
                    <div key={p.nombre} style={{ padding: '1rem 1.25rem', fontSize: '0.82rem', color: isTrue ? '#16a34a' : isFalse ? '#dc2626' : '#555', borderRight: `1px solid ${GRAY2}`, lineHeight: 1.4 }}>
                      {val}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROS Y CONTRAS */}
      <section style={{ padding: '2rem 2rem 3rem', overflowX: 'auto' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: TEXT, marginBottom: '1.5rem' }}>Pros y Contras</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', minWidth: 700 }}>
            {productos.map(p => (
              <div key={p.nombre} style={{ background: '#ffffff', borderRadius: 12, padding: '1.5rem', border: `1px solid ${GRAY2}` }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: TEXT, marginBottom: '1.25rem' }}>{p.nombre}</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>✅ A favor</div>
                  {p.pros.map(pro => (
                    <div key={pro} style={{ fontSize: '0.82rem', color: '#555', marginBottom: '0.4rem', paddingLeft: '0.75rem', borderLeft: '2px solid #16a34a', lineHeight: 1.4 }}>{pro}</div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>❌ En contra</div>
                  {p.contras.map(con => (
                    <div key={con} style={{ fontSize: '0.82rem', color: '#555', marginBottom: '0.4rem', paddingLeft: '0.75rem', borderLeft: '2px solid #dc2626', lineHeight: 1.4 }}>{con}</div>
                  ))}
                </div>
                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: `1px solid ${GRAY2}` }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: ACCENT, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Ideal para</div>
                  <div style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.5 }}>{p.mejor_para}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ */}
      <section style={{ background: `linear-gradient(135deg, #f0f4ff 0%, #e8efff 100%)`, padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Quiz</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: TEXT, marginBottom: '0.75rem' }}>¿Cuál es el Mejor para Ti?</h2>
            <p style={{ color: '#555', marginBottom: '2.5rem', lineHeight: 1.6 }}>Responde 3 preguntas y te recomendamos el smartphone perfecto para tu estilo de vida.</p>
          </motion.div>

          {quizStep < 3 && (
            <motion.div
              key={quizStep}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ background: '#ffffff', borderRadius: 16, padding: '2.5rem', boxShadow: '0 4px 30px rgba(0,0,0,0.1)' }}
            >
              <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: '1rem' }}>Pregunta {quizStep + 1} de 3</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: TEXT, marginBottom: '1.5rem' }}>{quizPreguntas[quizStep].pregunta}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {quizPreguntas[quizStep].opciones.map((op, j) => (
                  <button
                    key={op}
                    onClick={() => handleQuizAnswer(quizPreguntas[quizStep].keys[j])}
                    style={{ background: 'transparent', border: `2px solid ${GRAY2}`, borderRadius: 10, padding: '1rem 1.5rem', textAlign: 'left', fontWeight: 600, fontSize: '0.95rem', color: TEXT, cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = GRAY2; e.currentTarget.style.color = TEXT }}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {quizStep === 3 && recommendation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ background: '#ffffff', borderRadius: 16, padding: '2.5rem', boxShadow: '0 4px 30px rgba(0,0,0,0.1)' }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: TEXT, marginBottom: '1rem' }}>Nuestra Recomendación</h3>
              <p style={{ color: ACCENT, fontWeight: 700, fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{recommendation}</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link href="/demos/tecnologia/productos">
                  <button style={{ background: ACCENT, color: '#fff', border: 'none', padding: '0.85rem 2rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>Ver Producto</button>
                </Link>
                <button onClick={() => { setQuizStep(0); setRecommendation(null); setQuizAnswer(null) }} style={{ background: 'transparent', color: ACCENT, border: `2px solid ${ACCENT}`, padding: '0.85rem 2rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>
                  Repetir Quiz
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}

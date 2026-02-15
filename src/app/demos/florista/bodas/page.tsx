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

const weddingServices = [
  {
    id: 1, name: 'Ramo de Novia', desc: 'El ramo de novia es la pieza más personal de tu boda. Trabajamos contigo para crear un arreglo que refleje tu personalidad: romántico, minimalista, silvestre o tropical. Flores de temporada o tus favoritas de siempre.',
    img: 'wedding-flowers1', icon: '💐',
  },
  {
    id: 2, name: 'Centros de Mesa', desc: 'Desde elegantes centros con rosas y velas hasta composiciones silvestres en jarras rústicas. Diseñamos centros que complementan la decoración de tu sala y crean la atmósfera perfecta para tu banquete.',
    img: 'wedding-flowers2', icon: '🌿',
  },
  {
    id: 3, name: 'Decoración del Altar', desc: 'Transformamos el altar en un espacio mágico con flores frescas, guirnaldas de follaje y elementos decorativos que enmarcan perfectamente el momento más importante del día.',
    img: 'wedding-flowers3', icon: '⛪',
  },
  {
    id: 4, name: 'Arcos Florales', desc: 'Nuestros arcos florales son el telón de fondo perfecto para vuestros votos. Disponibles en arco semicircular, media luna, asimétrico y geométrico. Llenos de flores frescas o combinados con elementos secos.',
    img: 'wedding-flowers4', icon: '🌸',
  },
  {
    id: 5, name: 'Boutonnière & Corsage', desc: 'El detalle floral para el novio y los padrinos. Pequeñas obras de arte que coordinan perfectamente con el ramo de novia y la decoración general de la boda.',
    img: 'wedding-flowers5', icon: '🌹',
  },
]

const weddingGallery = [1, 2, 3, 4, 5, 6, 7, 8]

const packages = [
  {
    name: 'Esencial',
    color: BORDER,
    textColor: TEXT,
    price: '890',
    ideal: 'Hasta 80 invitados',
    includes: [
      'Ramo de novia (M)',
      '8 centros de mesa',
      'Decoración altar básica',
      '2 boutonnières',
      'Entrega e instalación',
    ],
    cta: 'Elegir Esencial',
  },
  {
    name: 'Romántico',
    color: ACCENT,
    textColor: '#fff',
    price: '1.690',
    ideal: 'Hasta 150 invitados',
    includes: [
      'Ramo de novia (L)',
      '15 centros de mesa',
      'Arco floral semicircular',
      'Decoración altar completa',
      '4 boutonnières + corsage',
      'Entrega e instalación',
      'Consulta de diseño',
    ],
    cta: 'Elegir Romántico',
    featured: true,
  },
  {
    name: 'Élite',
    color: '#2d1a0e',
    textColor: '#fff',
    price: '3.490',
    ideal: 'Hasta 300 invitados',
    includes: [
      'Ramo novia premium (XL)',
      'Ramos damas de honor',
      '30 centros de mesa',
      'Arco floral diseño a medida',
      'Decoración completa sede',
      'Pétalos camino nupcial',
      'Todo el equipo + coordinador',
      'Visita previa a la sede',
      'Servicio post-boda',
    ],
    cta: 'Elegir Élite',
  },
]

const process = [
  { step: '01', title: 'Consulta Inicial', desc: 'Nos reunimos (presencialmente o por videoconferencia) para conocer vuestra visión, estética y presupuesto. Sin ningún compromiso.' },
  { step: '02', title: 'Propuesta de Diseño', desc: 'Creamos un moodboard y propuesta floral personalizada con paleta de colores, flores y referencias visuales para vuestra aprobación.' },
  { step: '03', title: 'Confirmación & Reserva', desc: 'Una vez aprobada la propuesta, confirmamos con un pequeño anticipo que asegura vuestra fecha en nuestra agenda.' },
  { step: '04', title: 'Tu Día Perfecto', desc: 'El día de la boda llegamos antes que nadie para instalar cada detalle floral. Vosotros solo tenéis que disfrutar.' },
]

export default function BodasPage() {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', fecha: '', sede: '', invitados: '', presupuesto: '', descripcion: '' })
  const [submitted, setSubmitted] = useState(false)
  const galleryRef = useRef(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: 'system-ui, sans-serif' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://picsum.photos/seed/wedding-hero/1400/900" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Boda" />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(253,246,240,0.75)' }} />
        </div>
        <div className="r-container" style={{ position: 'relative', textAlign: 'center' }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: SECONDARY, letterSpacing: 6, fontSize: 13, textTransform: 'uppercase', marginBottom: 20, fontFamily: 'system-ui, sans-serif' }}>
            FLORISTERÍA DE BODAS
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 900, color: TEXT, margin: '0 0 20px', lineHeight: 1, fontFamily: 'Georgia, serif', letterSpacing: -2 }}>
            FLORES PARA<br /><span style={{ color: ACCENT }}>TU DÍA ESPECIAL</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ fontSize: 19, color: TEXT, opacity: 0.8, maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.6, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Cada flor elegida con amor. Cada detalle pensado para vosotros.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#consulta" style={{ display: 'inline-block', background: ACCENT, color: '#fff', padding: '16px 36px', borderRadius: 50, fontWeight: 700, fontSize: 17, textDecoration: 'none' }}>
              Consulta Gratuita
            </a>
            <a href="#galeria" style={{ display: 'inline-block', border: `2px solid ${ACCENT}`, color: ACCENT, padding: '16px 36px', borderRadius: 50, fontWeight: 700, fontSize: 17, textDecoration: 'none', background: 'rgba(255,255,255,0.7)' }}>
              Ver Galería
            </a>
          </motion.div>
        </div>
      </section>

      {/* WEDDING SERVICES */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>NUESTROS SERVICIOS</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: TEXT, margin: 0, fontFamily: 'Georgia, serif' }}>
              Todo lo que Necesitas para Tu Boda
            </h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {weddingServices.map((s, i) => (
              <motion.div key={s.id}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' as any }}
              >
                <div style={{ flex: '1 1 420px', borderRadius: 20, overflow: 'hidden', aspectRatio: '14/10' }}>
                  <img src={`https://picsum.photos/seed/${s.img}/700/500`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={s.name} />
                </div>
                <div style={{ flex: '1 1 320px' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ color: TEXT, fontSize: 32, fontWeight: 700, margin: '0 0 16px', fontFamily: 'Georgia, serif' }}>{s.name}</h3>
                  <p style={{ color: TEXT, opacity: 0.75, fontSize: 16, lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="r-section" ref={galleryRef} style={{ background: LIGHT_GREEN }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>GALERÍA</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: TEXT, margin: 0, fontFamily: 'Georgia, serif' }}>Bodas que Hemos Decorado</h2>
          </motion.div>
          <div className="r-grid-4" style={{ gap: 16 }}>
            {weddingGallery.map((n, i) => (
              <motion.div key={n}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer' }}
              >
                <img src={`https://picsum.photos/seed/wedding${n}/400/300`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={`Boda ${n}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>NUESTRO PROCESO</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: TEXT, margin: 0, fontFamily: 'Georgia, serif' }}>¿Cómo Trabajamos?</h2>
          </motion.div>
          <div className="r-grid-4">
            {process.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                style={{ background: CARD_BG, borderRadius: 20, padding: 32, border: `1px solid ${BORDER}`, textAlign: 'center' }}
              >
                <div style={{ width: 64, height: 64, background: LIGHT_GREEN, borderRadius: '50%', border: `2px solid ${ACCENT}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 22, fontWeight: 900, color: ACCENT }}>
                  {p.step}
                </div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 18, margin: '0 0 12px', fontFamily: 'Georgia, serif' }}>{p.title}</h3>
                <p style={{ color: TEXT, opacity: 0.65, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="r-section" style={{ background: LIGHT_GREEN }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>PAQUETES NUPCIALES</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: TEXT, margin: 0, fontFamily: 'Georgia, serif' }}>Elige Tu Paquete</h2>
            <p style={{ color: TEXT, opacity: 0.65, marginTop: 16, fontSize: 17 }}>Todos los paquetes incluyen consulta inicial gratuita y coordinador el día de la boda</p>
          </motion.div>
          <div className="r-grid-3">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                style={{
                  background: pkg.featured ? ACCENT : CARD_BG,
                  borderRadius: 24, padding: 40, border: pkg.featured ? 'none' : `1px solid ${BORDER}`,
                  boxShadow: pkg.featured ? '0 20px 60px rgba(45,106,79,0.3)' : 'none',
                  transform: pkg.featured ? 'scale(1.04)' : 'scale(1)',
                  position: 'relative',
                }}
              >
                {pkg.featured && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                    background: SECONDARY, color: '#fff', padding: '6px 20px', borderRadius: 50, fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap' }}>
                    ✨ MÁS POPULAR
                  </div>
                )}
                <h3 style={{ color: pkg.textColor, fontWeight: 700, fontSize: 26, margin: '0 0 4px', fontFamily: 'Georgia, serif' }}>{pkg.name}</h3>
                <p style={{ color: pkg.textColor, opacity: 0.7, fontSize: 14, margin: '0 0 28px' }}>{pkg.ideal}</p>
                <p style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: pkg.textColor, margin: '0 0 28px', lineHeight: 1 }}>
                  €{pkg.price}<span style={{ fontSize: 16, fontWeight: 400, opacity: 0.7 }}> total</span>
                </p>
                <div style={{ marginBottom: 32 }}>
                  {pkg.includes.map(inc => (
                    <div key={inc} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: `1px solid ${pkg.featured ? 'rgba(255,255,255,0.15)' : BORDER}` }}>
                      <span style={{ color: pkg.featured ? '#a8d5c2' : ACCENT, fontSize: 16 }}>✓</span>
                      <span style={{ color: pkg.textColor, opacity: 0.85, fontSize: 15 }}>{inc}</span>
                    </div>
                  ))}
                </div>
                <a href="#consulta" style={{
                  display: 'block', textAlign: 'center', textDecoration: 'none',
                  background: pkg.featured ? '#fff' : ACCENT, color: pkg.featured ? ACCENT : '#fff',
                  padding: '14px', borderRadius: 50, fontWeight: 700, fontSize: 16,
                }}>{pkg.cta}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRIDAL CONSULTATION FORM */}
      <section id="consulta" className="r-section" style={{ background: BG }}>
        <div className="r-container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>CONSULTA SIN COMPROMISO</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: TEXT, margin: 0, fontFamily: 'Georgia, serif' }}>
              Cuéntanos Sobre Tu Boda
            </h2>
            <p style={{ color: TEXT, opacity: 0.65, marginTop: 16, fontSize: 16 }}>Responderemos en menos de 24 horas con una propuesta inicial gratuita</p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              style={{ background: LIGHT_GREEN, borderRadius: 24, padding: 56, textAlign: 'center', border: `1px solid ${ACCENT}` }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>💐</div>
              <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: 28, margin: '0 0 12px', fontFamily: 'Georgia, serif' }}>¡Recibido con amor!</h3>
              <p style={{ color: TEXT, opacity: 0.75, fontSize: 17 }}>Nos pondremos en contacto en menos de 24 horas para comenzar a diseñar las flores de vuestro día especial.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: CARD_BG, borderRadius: 24, padding: 48, border: `1px solid ${BORDER}` }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[
                  { label: 'Nombre completo', key: 'nombre', type: 'text', placeholder: 'Tu nombre' },
                  { label: 'Email', key: 'email', type: 'email', placeholder: 'tu@email.com' },
                  { label: 'Teléfono', key: 'telefono', type: 'tel', placeholder: '+34 6XX XXX XXX' },
                  { label: 'Fecha de la boda', key: 'fecha', type: 'date', placeholder: '' },
                  { label: 'Sede / lugar celebración', key: 'sede', type: 'text', placeholder: 'Nombre del espacio' },
                  { label: 'Número de invitados', key: 'invitados', type: 'number', placeholder: 'Aprox.' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: 'block', color: ACCENT, fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      value={formData[f.key as keyof typeof formData]}
                      onChange={e => setFormData(prev => ({ ...prev, [f.key]: e.target.value }))}
                      style={{ width: '100%', background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 16px', color: TEXT, fontSize: 15, outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={{ display: 'block', color: ACCENT, fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Presupuesto aproximado</label>
                <select style={{ width: '100%', background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 16px', color: TEXT, fontSize: 15, outline: 'none' }}>
                  <option value="">¿Cuál es tu presupuesto?</option>
                  <option>Hasta €900 (Paquete Esencial)</option>
                  <option>€900 – €1.700 (Paquete Romántico)</option>
                  <option>€1.700 – €3.500 (Paquete Élite)</option>
                  <option>Más de €3.500 (Sin límite)</option>
                </select>
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={{ display: 'block', color: ACCENT, fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Cuéntanos tu visión</label>
                <textarea placeholder="¿Cuál es la estética que buscáis? ¿Colores, flores favoritas, inspiración...?"
                  style={{ width: '100%', background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: '14px 16px', color: TEXT, fontSize: 15, outline: 'none', minHeight: 140, resize: 'vertical', boxSizing: 'border-box', fontFamily: 'system-ui, sans-serif' }} />
              </div>
              <button type="submit" style={{
                background: ACCENT, color: '#fff', border: 'none', borderRadius: 50,
                padding: '18px', fontWeight: 800, fontSize: 17, cursor: 'pointer',
                width: '100%', marginTop: 24, letterSpacing: 0.5,
              }}>Solicitar Consulta Gratuita</button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

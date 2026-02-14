'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const gold = '#c9a227'
const navy = '#001a4d'

const thumbnails = [
  'https://picsum.photos/seed/prop-thumb1/300/200',
  'https://picsum.photos/seed/prop-thumb2/300/200',
  'https://picsum.photos/seed/prop-thumb3/300/200',
  'https://picsum.photos/seed/prop-thumb4/300/200',
]

const features = [
  { icon: '🛏', label: 'Habitaciones', value: '4' },
  { icon: '🚿', label: 'Baños', value: '3' },
  { icon: '📐', label: 'Superficie', value: '210 m²' },
  { icon: '🏢', label: 'Planta', value: '6ª con ascensor' },
  { icon: '🚗', label: 'Garaje', value: '2 plazas' },
  { icon: '🛗', label: 'Ascensor', value: 'Sí' },
  { icon: '🌿', label: 'Terraza', value: '45 m²' },
  { icon: '🔆', label: 'Orientación', value: 'Sur-Este' },
]

const similarProperties = [
  { id: 2, seed: 'similar1', title: 'Piso en Goya, 145 m²', price: '680.000 €', beds: 3, baths: 2 },
  { id: 3, seed: 'similar2', title: 'Casa en La Moraleja', price: '2.100.000 €', beds: 5, baths: 4 },
  { id: 7, seed: 'similar3', title: 'Ático dúplex con terraza', price: '1.420.000 €', beds: 3, baths: 2 },
]

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [activeThumb, setActiveThumb] = useState(0)
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const mainImages = [
    'https://picsum.photos/seed/property-detail/1200/600',
    ...thumbnails,
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main style={{ background: '#f9f7f2', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* BREADCRUMB */}
      <div style={{ background: navy, padding: '1rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/demos/inmobiliaria" style={{ color: gold, textDecoration: 'none' }}>Inicio</Link>
          <span>›</span>
          <Link href="/demos/inmobiliaria/propiedades" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Propiedades</Link>
          <span>›</span>
          <span style={{ color: '#fff' }}>Ático de lujo en Salamanca · Ref. #{params.id}</span>
        </div>
      </div>

      {/* IMAGE GALLERY */}
      <div style={{ background: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0' }}>
          <motion.img
            key={activeThumb}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={mainImages[activeThumb]}
            alt="Propiedad"
            style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem', background: '#111' }}>
            {thumbnails.map((thumb, i) => (
              <button
                key={i}
                onClick={() => setActiveThumb(i + 1)}
                style={{
                  border: activeThumb === i + 1 ? `3px solid ${gold}` : '3px solid transparent',
                  borderRadius: '6px', overflow: 'hidden', cursor: 'pointer', padding: 0,
                  flex: 1,
                }}
              >
                <img src={thumb} alt="" style={{ width: '100%', height: '80px', objectFit: 'cover', display: 'block' }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2.5rem' }}>

        {/* LEFT COLUMN */}
        <div>
          {/* Title + Price */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', boxShadow: '0 4px 20px rgba(0,26,77,0.07)' }}>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: gold, color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '0.3rem 0.75rem', borderRadius: '20px', textTransform: 'uppercase' }}>EXCLUSIVA</span>
              <span style={{ background: `rgba(0,26,77,0.1)`, color: navy, fontSize: '0.7rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '20px' }}>Ref. #{params.id}</span>
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: navy, marginBottom: '0.5rem' }}>
              Ático de Lujo en Salamanca
            </h1>
            <p style={{ color: navy + '88', fontSize: '0.95rem', marginBottom: '1.5rem' }}>📍 Calle Serrano 42, 6ª planta · Madrid, Salamanca</p>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: gold }}>1.850.000 €</div>
            <p style={{ color: navy + '77', fontSize: '0.85rem' }}>8.809 €/m²</p>
          </div>

          {/* Description */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', boxShadow: '0 4px 20px rgba(0,26,77,0.07)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: navy, marginBottom: '1.25rem', borderBottom: `2px solid ${gold}`, paddingBottom: '0.75rem' }}>Descripción</h2>
            <p style={{ color: navy + 'cc', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.95rem' }}>
              Espectacular ático de diseño en la exclusiva calle Serrano, en pleno barrio de Salamanca. Esta excepcional propiedad ofrece una experiencia de vida única con sus 210 m² construidos y una impresionante terraza de 45 m² con vistas panorámicas a los tejados de Madrid y a la Sierra de Guadarrama.
            </p>
            <p style={{ color: navy + 'cc', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.95rem' }}>
              La distribución interior es obra del reconocido arquitecto Pablo Ferrer, combinando espacios diáfanos con acabados de lujo. El salón-comedor de 65 m² cuenta con techos de 3,2 metros, suelos de mármol travertino y una cocina de diseño completamente equipada con electrodomésticos Gaggenau. Los cuatro dormitorios tienen baño en suite con materiales de primera calidad.
            </p>
            <p style={{ color: navy + 'cc', lineHeight: 1.85, fontSize: '0.95rem' }}>
              El edificio, de principios del siglo XX, fue completamente rehabilitado en 2019 respetando su arquitectura clásica e incorporando las últimas tecnologías en domótica, climatización por suelo radiante, y sistemas de seguridad 24 horas. Incluye dos plazas de garaje en el sótano del edificio y un trastero de 12 m².
            </p>
          </div>

          {/* Features grid */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', boxShadow: '0 4px 20px rgba(0,26,77,0.07)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: navy, marginBottom: '1.25rem', borderBottom: `2px solid ${gold}`, paddingBottom: '0.75rem' }}>Características</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
              {features.map(f => (
                <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem', background: '#f9f7f2', borderRadius: '8px' }}>
                  <span style={{ fontSize: '1.5rem' }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: navy + '88', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{f.label}</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 800, color: navy }}>{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', boxShadow: '0 4px 20px rgba(0,26,77,0.07)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: navy, marginBottom: '1.25rem', borderBottom: `2px solid ${gold}`, paddingBottom: '0.75rem' }}>Ubicación</h2>
            <div style={{
              background: navy,
              height: '250px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,162,39,0.12) 0%, transparent 60%)', backgroundSize: '40px 40px' }} />
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📍</div>
                <div style={{ color: gold, fontWeight: 800, fontSize: '1rem' }}>Calle Serrano 42</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Salamanca · Madrid · España</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — CONTACT AGENT */}
        <div>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 30px rgba(0,26,77,0.1)', position: 'sticky', top: '5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <img src="https://picsum.photos/seed/agent1/80/80" alt="Agente" style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${gold}` }} />
              <div>
                <div style={{ fontWeight: 800, color: navy, fontSize: '0.95rem' }}>Isabel Herrero</div>
                <div style={{ color: navy + '77', fontSize: '0.8rem' }}>Agente Senior · Salamanca</div>
                <div style={{ color: gold, fontSize: '0.8rem', fontWeight: 700 }}>+34 91 234 56 78</div>
              </div>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: navy, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
              Solicitar Información
            </h3>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '2rem', background: '#f0f9f4', borderRadius: '10px', border: '1px solid #c6e6d5' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✅</div>
                <div style={{ fontWeight: 800, color: '#1a7a45', marginBottom: '0.5rem' }}>¡Solicitud enviada!</div>
                <div style={{ color: '#2d8653', fontSize: '0.88rem' }}>Isabel te contactará en menos de 24 horas.</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  { key: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre' },
                  { key: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'tu@email.com' },
                  { key: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+34 600 000 000' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: navy + 'aa', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem' }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={e => setFormData(p => ({ ...p, [field.key]: e.target.value }))}
                      style={{ width: '100%', border: `1.5px solid ${navy}22`, borderRadius: '7px', padding: '0.65rem 0.85rem', fontSize: '0.875rem', color: navy, outline: 'none', boxSizing: 'border-box', fontFamily: 'Georgia, serif' }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: navy + 'aa', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem' }}>Mensaje</label>
                  <textarea
                    rows={3}
                    placeholder="Estoy interesado/a en esta propiedad..."
                    value={formData.mensaje}
                    onChange={e => setFormData(p => ({ ...p, mensaje: e.target.value }))}
                    style={{ width: '100%', border: `1.5px solid ${navy}22`, borderRadius: '7px', padding: '0.65rem 0.85rem', fontSize: '0.875rem', color: navy, outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'Georgia, serif' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ background: gold, color: '#fff', fontWeight: 800, fontSize: '0.9rem', padding: '0.9rem', borderRadius: '8px', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Georgia, serif', marginTop: '0.25rem' }}
                >
                  Enviar Solicitud
                </button>
                <p style={{ fontSize: '0.72rem', color: navy + '66', textAlign: 'center' }}>Al enviar aceptas nuestra política de privacidad</p>
              </form>
            )}
            <div style={{ marginTop: '1.25rem', padding: '1rem', background: '#f9f7f2', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.8rem', color: navy + '99', marginBottom: '0.5rem' }}>¿Prefiers llamar directamente?</p>
              <a href="tel:+34912345678" style={{ color: gold, fontWeight: 800, fontSize: '1.1rem', textDecoration: 'none' }}>+34 91 234 56 78</a>
            </div>
          </div>
        </div>
      </div>

      {/* SIMILAR PROPERTIES */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: navy, marginBottom: '1.75rem', textTransform: 'uppercase' }}>
          Propiedades Similares
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {similarProperties.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,26,77,0.08)' }}
            >
              <img src={`https://picsum.photos/seed/${p.seed}/600/400`} alt={p.title} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 800, color: navy, fontSize: '1rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <div style={{ color: navy + '99', fontSize: '0.82rem', marginBottom: '0.75rem' }}>🛏 {p.beds} · 🚿 {p.baths}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 900, color: navy }}>{p.price}</span>
                  <Link href={`/demos/inmobiliaria/propiedades/${p.id}`} style={{ color: gold, fontWeight: 800, fontSize: '0.8rem', textDecoration: 'none' }}>Ver →</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

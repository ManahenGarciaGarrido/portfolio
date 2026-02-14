'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

const gold = '#c9a227'
const navy = '#001a4d'

function StatCard({ number, label }: { number: string; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', padding: '2rem' }}
    >
      <div style={{ fontSize: '3.5rem', fontWeight: 900, color: gold, lineHeight: 1 }}>{number}</div>
      <div style={{ fontSize: '1.1rem', color: navy, fontWeight: 600, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
    </motion.div>
  )
}

const properties = [
  { id: 1, seed: 'property1', type: 'Ático', address: 'Calle Serrano 42, Salamanca', beds: 3, baths: 2, sqm: 180, price: '1.250.000 €', badge: 'EXCLUSIVA' },
  { id: 2, seed: 'property2', type: 'Piso', address: 'Paseo de Gracia 88, Eixample', beds: 4, baths: 3, sqm: 220, price: '980.000 €', badge: 'NUEVO' },
  { id: 3, seed: 'property3', type: 'Casa', address: 'Urb. La Moraleja, Alcobendas', beds: 5, baths: 4, sqm: 450, price: '2.100.000 €', badge: 'PRECIO REDUCIDO' },
  { id: 4, seed: 'property4', type: 'Piso', address: 'Gran Vía 60, Madrid Centro', beds: 2, baths: 1, sqm: 95, price: '420.000 €', badge: 'OPORTUNIDAD' },
]

function PropertyCard({ prop, index }: { prop: typeof properties[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: hovered ? '0 20px 60px rgba(0,26,77,0.18)' : '0 4px 20px rgba(0,26,77,0.08)',
        transition: 'box-shadow 0.3s',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.img
          src={`https://picsum.photos/seed/${prop.seed}/700/480`}
          alt={prop.address}
          style={{ objectFit: 'cover', height: '240px', width: '100%', display: 'block' }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <span style={{
          position: 'absolute', top: '1rem', left: '1rem',
          background: gold, color: '#fff', fontSize: '0.7rem', fontWeight: 800,
          padding: '0.3rem 0.75rem', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em',
        }}>{prop.badge}</span>
        <span style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'rgba(0,26,77,0.85)', color: '#fff', fontSize: '0.75rem', fontWeight: 700,
          padding: '0.3rem 0.75rem', borderRadius: '20px',
        }}>{prop.type}</span>
      </div>
      <div style={{ padding: '1.5rem' }}>
        <p style={{ color: navy + '88', fontSize: '0.8rem', marginBottom: '0.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{prop.address}</p>
        <div style={{ display: 'flex', gap: '1.5rem', margin: '0.75rem 0', color: navy + 'aa', fontSize: '0.85rem' }}>
          <span>🛏 {prop.beds} hab.</span>
          <span>🚿 {prop.baths} baños</span>
          <span>📐 {prop.sqm} m²</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 900, color: navy }}>{prop.price}</span>
          <motion.div animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }} transition={{ duration: 0.2 }}>
            <Link href={`/demos/inmobiliaria/propiedades/${prop.id}`} style={{
              background: gold, color: '#fff', fontSize: '0.75rem', fontWeight: 800,
              padding: '0.6rem 1.25rem', borderRadius: '6px', textDecoration: 'none',
              textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block',
            }}>VER PROPIEDAD</Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const services = [
  { icon: '🏠', title: 'Compra', desc: 'Te acompañamos en cada paso de la compra de tu vivienda. Asesoramiento legal, financiero y técnico personalizado para que tomes la mejor decisión.' },
  { icon: '💰', title: 'Venta', desc: 'Maximizamos el valor de tu propiedad con estrategias de marketing digital, fotografía profesional y una red de compradores cualificados.' },
  { icon: '🔑', title: 'Alquiler', desc: 'Gestión integral de alquileres: selección de inquilinos, contratos, seguros de impago y mantenimiento. Tu tranquilidad, garantizada.' },
]

const testimonials = [
  {
    name: 'Carmen Rodríguez',
    role: 'Compradora, Madrid',
    avatar: 'https://picsum.photos/seed/client-realty1/80/80',
    text: 'El equipo de Arco nos ayudó a encontrar el piso de nuestros sueños en Salamanca. Su profesionalidad y dedicación fueron excepcionales. ¡Muy recomendables!',
    rating: 5,
  },
  {
    name: 'Javier Morales',
    role: 'Vendedor, Barcelona',
    avatar: 'https://picsum.photos/seed/client-realty2/80/80',
    text: 'Vendí mi apartamento en tiempo récord y por encima del precio de mercado. La estrategia de marketing que implementaron fue impresionante. Resultados que hablan solos.',
    rating: 5,
  },
]

export default function InmobiliariaHome() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="https://picsum.photos/seed/luxury-home/1400/800"
          alt="Luxury home"
          style={{ objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,26,77,0.65) 0%, rgba(0,26,77,0.5) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem', maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'inline-block', background: gold, color: '#fff', fontSize: '0.75rem', fontWeight: 800, padding: '0.4rem 1.25rem', borderRadius: '20px', marginBottom: '1.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
          >
            Desde 2002 · Agencia Premium
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.05, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '-0.02em' }}
          >
            ENCUENTRA TU<br /><span style={{ color: gold }}>HOGAR IDEAL</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', marginBottom: '2.5rem', fontStyle: 'italic' }}
          >
            Más de 500 propiedades exclusivas en las mejores ubicaciones de España
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{
              background: 'rgba(255,255,255,0.97)',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              alignItems: 'center',
              boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            }}
          >
            <input
              type="text"
              placeholder="📍 Localización, barrio o ciudad..."
              style={{ flex: 2, minWidth: '180px', border: '1.5px solid #e5e7eb', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.9rem', color: navy, outline: 'none', fontFamily: 'Georgia, serif' }}
            />
            <select style={{ flex: 1, minWidth: '130px', border: '1.5px solid #e5e7eb', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.9rem', color: navy, outline: 'none', background: '#fff' }}>
              <option>Tipo de propiedad</option>
              <option>Piso</option>
              <option>Casa / Chalet</option>
              <option>Ático</option>
              <option>Local Comercial</option>
            </select>
            <select style={{ flex: 1, minWidth: '130px', border: '1.5px solid #e5e7eb', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.9rem', color: navy, outline: 'none', background: '#fff' }}>
              <option>Precio máximo</option>
              <option>Hasta 200.000 €</option>
              <option>Hasta 500.000 €</option>
              <option>Hasta 1.000.000 €</option>
              <option>Sin límite</option>
            </select>
            <button style={{
              background: gold, color: '#fff', fontWeight: 800, fontSize: '0.9rem',
              padding: '0.75rem 2rem', borderRadius: '8px', border: 'none', cursor: 'pointer',
              textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap',
              fontFamily: 'Georgia, serif',
            }}>
              BUSCAR
            </button>
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.5rem' }}>↓</motion.div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#f9f7f2', borderTop: `4px solid ${gold}`, borderBottom: `1px solid #e8e0d0` }}>
        <div className="r-grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <StatCard number="500+" label="Propiedades" />
          <div style={{ borderLeft: `1px solid #e8e0d0`, borderRight: `1px solid #e8e0d0` }}>
            <StatCard number="20 Años" label="de Experiencia" />
          </div>
          <StatCard number="98%" label="Satisfacción" />
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            style={{ height: '3px', background: gold, margin: '0 auto 1rem' }}
          />
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: navy, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>Propiedades Destacadas</h2>
          <p style={{ color: navy + '88', marginTop: '0.75rem', fontSize: '1.05rem', fontStyle: 'italic' }}>Selección exclusiva de nuestras mejores propiedades</p>
        </div>
        <div className="r-grid-2" style={{ gap: '2rem' }}>
          {properties.map((prop, i) => <PropertyCard key={prop.id} prop={prop} index={i} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/demos/inmobiliaria/propiedades" style={{
            display: 'inline-block', border: `2px solid ${gold}`, color: gold,
            fontWeight: 800, fontSize: '0.9rem', padding: '0.9rem 2.5rem',
            borderRadius: '8px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em',
            transition: 'all 0.2s',
          }}>
            Ver Todas las Propiedades →
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: navy, padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ height: '3px', background: gold, width: '60px', margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>Nuestros Servicios</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.75rem', fontStyle: 'italic' }}>Todo lo que necesitas para tu operación inmobiliaria</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: `1px solid rgba(201,162,39,0.3)`,
                  borderRadius: '12px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{s.icon}</div>
                <div style={{ height: '2px', background: gold, width: '40px', margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '5rem 1.5rem', background: '#f9f7f2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ height: '3px', background: gold, width: '60px', margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: navy, textTransform: 'uppercase' }}>Lo Que Dicen Nuestros Clientes</h2>
          </div>
          <div className="r-grid-2" style={{ gap: '2rem' }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{
                  background: '#fff', borderRadius: '12px', padding: '2rem',
                  boxShadow: '0 4px 30px rgba(0,26,77,0.08)',
                  borderLeft: `4px solid ${gold}`,
                }}
              >
                <div style={{ color: gold, fontSize: '1.2rem', marginBottom: '1rem' }}>{'★'.repeat(t.rating)}</div>
                <p style={{ color: navy + 'cc', lineHeight: 1.8, fontSize: '1rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src={t.avatar} alt={t.name} style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${gold}` }} />
                  <div>
                    <div style={{ fontWeight: 800, color: navy, fontSize: '0.95rem' }}>{t.name}</div>
                    <div style={{ color: navy + '88', fontSize: '0.8rem' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: navy, color: 'rgba(255,255,255,0.6)', textAlign: 'center', padding: '2rem', fontSize: '0.85rem' }}>
        <span style={{ color: gold, fontWeight: 800 }}>ARCO INMOBILIARIA</span> · Desde 2002 · Todos los derechos reservados
      </footer>
    </main>
  )
}

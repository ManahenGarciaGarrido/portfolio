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

const occasions = [
  { id: 1, name: 'Cumpleaños', img: 'occasion1', emoji: '🎂' },
  { id: 2, name: 'Bodas', img: 'occasion2', emoji: '💍' },
  { id: 3, name: 'Funeral', img: 'occasion3', emoji: '🕊️' },
  { id: 4, name: 'Empresa', img: 'occasion4', emoji: '🏢' },
  { id: 5, name: 'San Valentín', img: 'occasion5', emoji: '❤️' },
  { id: 6, name: 'Sin Ocasión', img: 'occasion6', emoji: '🌸' },
]

const arrangements = [
  { id: 1, name: 'Primavera Eterna', desc: 'Mezcla de peonías, rosas y lilas en tonos pastel', price: '45', img: 'arrangement1' },
  { id: 2, name: 'Romance Rojo', desc: 'Rosas rojas premium con follaje verde intenso', price: '65', img: 'arrangement2' },
  { id: 3, name: 'Jardín Silvestre', desc: 'Flores silvestres de temporada en tono rústico', price: '38', img: 'arrangement3' },
  { id: 4, name: 'Elegancia Blanca', desc: 'Liliums, gardenias y rosas blancas puras', price: '72', img: 'arrangement4' },
  { id: 5, name: 'Tropical Sunset', desc: 'Aves del paraíso, orquídeas y heliconias', price: '89', img: 'arrangement5' },
  { id: 6, name: 'Mini Jardín', desc: 'Pequeño centro con suculentas y flores secas', price: '29', img: 'arrangement6' },
]

const services = [
  { icon: '🚚', title: 'Entrega a Domicilio', desc: 'Enviamos tus flores en el mismo día si el pedido es antes de las 12:00h. Envío gratuito en pedidos superiores a €50.' },
  { icon: '📅', title: 'Suscripción Floral', desc: 'Recibe un ramo fresco cada semana o cada mes. Personaliza tu preferencia floral y sorprende siempre.' },
  { icon: '💐', title: 'Arreglos de Boda', desc: 'Decoramos tu gran día desde el ramo de novia hasta los centros de mesa. Consulta sin compromiso.' },
  { icon: '🎪', title: 'Decoración Eventos', desc: 'Transformamos cualquier espacio con flores frescas para bodas, bautizos, comuniones y eventos corporativos.' },
]

const instaPics = [1, 2, 3, 4, 5, 6]

const testimonials = [
  { name: 'Lucía Fernández', occasion: 'Ramo de boda', text: 'El ramo de mi boda fue exactamente como lo soñé. María entendió perfectamente la estética que quería y lo superó con creces. Todas las invitadas preguntaron por la floristería.', img: 'floral-customer1' },
  { name: 'Pedro Sánchez', occasion: 'Aniversario', text: 'Pedí flores para sorprender a mi mujer en nuestro aniversario. Llegaron puntualísimas, frescas y con una presentación preciosa. El ramo duró más de dos semanas.', img: 'floral-customer2' },
  { name: 'Carmen López', occasion: 'Decoración evento', text: 'Contratamos a Petal & Co. para decorar nuestra cena corporativa. El resultado fue espectacular. Profesionales, puntuales y con un gusto exquisito.', img: 'floral-customer3' },
]

export default function FloristaHome() {
  const [cart, setCart] = useState<number[]>([])
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true })

  const addToCart = (id: number) => setCart(prev => [...prev, id])

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: '"Georgia", serif' }}>

      {/* HERO — Split Layout */}
      <section className="r-hero-split" style={{ minHeight: 'max(100svh, 600px)' }}>
        {/* Left */}
        <div style={{ flex: '1 1 480px', background: BG, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(48px, 8vw, 96px)' }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            style={{ color: SECONDARY, fontWeight: 400, letterSpacing: 6, fontSize: 13, textTransform: 'uppercase', marginBottom: 24, fontFamily: 'system-ui, sans-serif' }}
          >Floristería artesanal · Desde 2010</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)', fontWeight: 900, color: ACCENT, lineHeight: 1, margin: '0 0 20px', letterSpacing: -2, fontFamily: 'Georgia, serif' }}
          >PETAL<br /><span style={{ color: TEXT }}>&amp; CO.</span></motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: 22, color: ACCENT, fontStyle: 'italic', marginBottom: 12, fontFamily: 'Georgia, serif' }}
          >Flores que cuentan historias</motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontSize: 17, color: TEXT, opacity: 0.75, lineHeight: 1.7, marginBottom: 40, maxWidth: 440, fontFamily: 'system-ui, sans-serif' }}
          >Arreglos florales artesanales para cada momento especial. Diseñados con amor, entregados con cuidado.</motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <Link href="/demos/florista/catalogo" style={{
              display: 'inline-block', background: ACCENT, color: '#fff',
              padding: '14px 32px', borderRadius: 50, fontWeight: 700, fontSize: 16,
              textDecoration: 'none', fontFamily: 'system-ui, sans-serif', letterSpacing: 0.5,
            }}>Hacer un Pedido</Link>
            <Link href="/demos/florista/catalogo" style={{
              display: 'inline-block', border: `2px solid ${ACCENT}`, color: ACCENT,
              padding: '14px 32px', borderRadius: 50, fontWeight: 700, fontSize: 16,
              textDecoration: 'none', fontFamily: 'system-ui, sans-serif',
            }}>Ver Catálogo</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            style={{ display: 'flex', gap: 40, marginTop: 56, flexWrap: 'wrap' }}
          >
            {[['500+', 'Arreglos únicos'], ['14 años', 'De experiencia'], ['4.9★', 'Valoración media']].map(([v, l]) => (
              <div key={l}>
                <p style={{ color: ACCENT, fontWeight: 900, fontSize: 22, margin: 0, fontFamily: 'system-ui, sans-serif' }}>{v}</p>
                <p style={{ color: TEXT, opacity: 0.6, fontSize: 13, margin: 0, fontFamily: 'system-ui, sans-serif' }}>{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Right — Image */}
        <div style={{ flex: '1 1 400px', position: 'relative', minHeight: 500 }}>
          <img src="https://picsum.photos/seed/flowers-bouquet/700/900" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Ramo" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(253,246,240,0.3) 0%, transparent 30%)' }} />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}
            style={{
              position: 'absolute', bottom: 40, right: 40,
              background: '#fff', borderRadius: 16, padding: '20px 28px',
              boxShadow: '0 10px 40px rgba(45,26,14,0.15)',
            }}
          >
            <p style={{ color: TEXT, opacity: 0.6, fontSize: 12, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: 2, fontFamily: 'system-ui, sans-serif' }}>Envío hoy disponible</p>
            <p style={{ color: ACCENT, fontWeight: 800, fontSize: 20, margin: 0, fontFamily: 'system-ui, sans-serif' }}>Pedidos antes 12:00h</p>
          </motion.div>
        </div>
      </section>

      {/* OCCASION CATEGORIES */}
      <section className="r-section" style={{ background: LIGHT_GREEN }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>PARA CADA MOMENTO</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: TEXT, margin: 0 }}>¿Cuál es la Ocasión?</h2>
          </motion.div>
          <div style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {occasions.map((o, i) => (
              <motion.div key={o.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                whileHover={{ y: -6 }}
                style={{ flex: '0 0 160px', cursor: 'pointer', textAlign: 'center' }}
              >
                <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '6/5', marginBottom: 12 }}>
                  <img src={`https://picsum.photos/seed/${o.img}/300/250`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={o.name} />
                </div>
                <p style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: 0, fontFamily: 'system-ui, sans-serif' }}>{o.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARRANGEMENTS */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>NUESTROS ARREGLOS</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: TEXT, margin: 0 }}>Arreglos Destacados</h2>
            <p style={{ color: TEXT, opacity: 0.6, marginTop: 16, fontSize: 17, fontFamily: 'system-ui, sans-serif' }}>
              Cada arreglo es creado a mano con flores frescas de temporada
            </p>
          </motion.div>
          <div className="r-grid-3">
            {arrangements.map((a, i) => (
              <motion.div key={a.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                style={{ background: CARD_BG, borderRadius: 16, overflow: 'hidden', border: `1px solid ${BORDER}` }}
              >
                <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${a.img}/400/500`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    alt={a.name} />
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 19, margin: '0 0 8px', fontFamily: 'Georgia, serif' }}>{a.name}</h3>
                  <p style={{ color: TEXT, opacity: 0.65, fontSize: 14, lineHeight: 1.6, margin: '0 0 20px', fontFamily: 'system-ui, sans-serif' }}>{a.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: ACCENT, fontWeight: 800, fontSize: 22, margin: 0, fontFamily: 'system-ui, sans-serif' }}>€{a.price}</p>
                    <button
                      onClick={() => addToCart(a.id)}
                      style={{
                        background: cart.includes(a.id) ? SECONDARY : ACCENT,
                        color: '#fff', border: 'none', borderRadius: 50,
                        padding: '10px 22px', fontWeight: 700, fontSize: 14, cursor: 'pointer',
                        fontFamily: 'system-ui, sans-serif', transition: 'background 0.2s',
                      }}
                    >{cart.includes(a.id) ? '✓ Añadido' : 'Añadir'}</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/demos/florista/catalogo" style={{
              display: 'inline-block', border: `2px solid ${ACCENT}`, color: ACCENT,
              padding: '14px 40px', borderRadius: 50, fontWeight: 700, fontSize: 16,
              textDecoration: 'none', fontFamily: 'system-ui, sans-serif',
            }}>Ver catálogo completo →</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servicesRef} className="r-section" style={{ background: ACCENT }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>LO QUE OFRECEMOS</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', margin: 0 }}>Nuestros Servicios</h2>
          </motion.div>
          <div className="r-grid-4">
            {services.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: 32, backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}
              >
                <div style={{ fontSize: 44, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 18, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, lineHeight: 1.7, margin: 0, fontFamily: 'system-ui, sans-serif' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>ASÍ DE SENCILLO</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: TEXT, margin: 0 }}>¿Cómo Funciona?</h2>
          </motion.div>
          <div style={{ display: 'flex', gap: 0, justifyContent: 'center', position: 'relative', flexWrap: 'wrap' }}>
            {[
              { step: '01', title: 'Elige', desc: 'Explora nuestro catálogo y selecciona el arreglo que más te guste, o cuéntanos tu idea.' },
              { step: '02', title: 'Personaliza', desc: 'Añade un mensaje personalizado, elige el tamaño y escoge la fecha y hora de entrega.' },
              { step: '03', title: 'Recibe', desc: 'Entregamos tus flores frescas con cuidado y presentación impecable en la puerta de tu casa.' },
            ].map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }} viewport={{ once: true }}
                style={{ flex: '1 1 260px', textAlign: 'center', padding: '0 40px', position: 'relative' }}
              >
                <div style={{
                  width: 80, height: 80, background: LIGHT_GREEN, border: `3px solid ${ACCENT}`,
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px', fontSize: 28, fontWeight: 900, color: ACCENT, fontFamily: 'system-ui, sans-serif',
                }}>{p.step}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 24, margin: '0 0 12px', fontFamily: 'Georgia, serif' }}>{p.title}</h3>
                <p style={{ color: TEXT, opacity: 0.65, fontSize: 15, lineHeight: 1.7, margin: 0, fontFamily: 'system-ui, sans-serif' }}>{p.desc}</p>
                {i < 2 && <div style={{ position: 'absolute', top: 40, right: -10, fontSize: 24, color: SECONDARY, display: 'none' }}>→</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="r-section" style={{ background: LIGHT_GREEN }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>TESTIMONIOS</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: TEXT, margin: 0 }}>Lo Que Dicen Nuestros Clientes</h2>
          </motion.div>
          <div className="r-grid-3">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                style={{ background: CARD_BG, borderRadius: 20, padding: 32, border: `1px solid ${BORDER}` }}
              >
                <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                  {[...Array(5)].map((_, s) => <span key={s} style={{ color: SECONDARY, fontSize: 18 }}>★</span>)}
                </div>
                <p style={{ color: TEXT, opacity: 0.8, fontSize: 15, lineHeight: 1.8, marginBottom: 24, fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <img src={`https://picsum.photos/seed/${t.img}/70/70`} style={{ width: 52, height: 52, objectFit: 'cover', display: 'block', borderRadius: '50%', border: `2px solid ${SECONDARY}` }} alt={t.name} />
                  <div>
                    <p style={{ color: TEXT, fontWeight: 700, margin: 0, fontSize: 15, fontFamily: 'system-ui, sans-serif' }}>{t.name}</p>
                    <p style={{ color: ACCENT, margin: 0, fontSize: 13, fontFamily: 'system-ui, sans-serif' }}>{t.occasion}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ color: SECONDARY, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>INSTAGRAM</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: TEXT, margin: 0 }}>Síguenos en @petalyco</h2>
          </motion.div>
          <div className="r-grid-4" style={{ gap: 12 }}>
            {instaPics.map((n, i) => (
              <motion.div key={n}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                style={{ aspectRatio: '1', borderRadius: 12, overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
              >
                <img src={`https://picsum.photos/seed/floral-insta${n}/200/200`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={`Instagram ${n}`} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(45,106,79,0)', transition: 'background 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(45,106,79,0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(45,106,79,0)')}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ background: '#1a3a2a', color: '#fff' }}>
        <div className="r-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, paddingBottom: 48 }}>
            <div style={{ flex: '1 1 280px' }}>
              <h3 style={{ color: SECONDARY, fontWeight: 900, fontSize: 26, letterSpacing: 1, marginBottom: 16, fontFamily: 'Georgia, serif' }}>PETAL &amp; CO.</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: 15, maxWidth: 280, fontFamily: 'system-ui, sans-serif' }}>
                Floristería artesanal en el corazón de Madrid. Flores frescas, arreglos únicos y amor en cada creación desde 2010.
              </p>
            </div>
            <div style={{ flex: '1 1 180px' }}>
              <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>Zona de Entrega</h4>
              {['Madrid centro', 'Barrio de Salamanca', 'Chamberí', 'Retiro', 'Malasaña / Chueca', 'Toda la Comunidad de Madrid (+3€)'].map(z => (
                <p key={z} style={{ color: 'rgba(255,255,255,0.6)', margin: '0 0 6px', fontSize: 14, fontFamily: 'system-ui, sans-serif' }}>✓ {z}</p>
              ))}
            </div>
            <div style={{ flex: '1 1 180px' }}>
              <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>Horario</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, margin: '0 0 6px', fontFamily: 'system-ui, sans-serif' }}>Lun–Sáb: 9:00–20:00</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, margin: '0 0 6px', fontFamily: 'system-ui, sans-serif' }}>Dom: 10:00–14:00</p>
              <h4 style={{ color: '#fff', fontWeight: 700, marginTop: 24, marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>Contacto</h4>
              <p style={{ color: SECONDARY, fontWeight: 700, fontSize: 17, margin: '0 0 4px', fontFamily: 'system-ui, sans-serif' }}>+34 91 234 5678</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, margin: 0, fontFamily: 'system-ui, sans-serif' }}>hola@petalyco.com</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, margin: 0, fontFamily: 'system-ui, sans-serif' }}>C/ de las Flores 12, Madrid</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: 0, fontFamily: 'system-ui, sans-serif' }}>© 2024 Petal &amp; Co. Todos los derechos reservados.</p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: 0, fontFamily: 'system-ui, sans-serif' }}>Flores frescas · Entrega el mismo día · Arreglos a medida</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

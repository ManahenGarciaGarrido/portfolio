'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const BG = '#001a35'
const ACCENT = '#ff8c00'
const TEXT = '#e8f4ff'
const CARD_BG = '#002952'
const CARD_BORDER = '#003d7a'

const teamMembers = [
  { name: 'Carmen Villalobos', role: 'Directora y Fundadora', specialty: 'Asia, Oceanía, Oriente Medio', img: 'agent1', experience: '25 años', langs: 'ES / EN / JP' },
  { name: 'Roberto Santana', role: 'Especialista Aventura', specialty: 'América del Sur, África', img: 'agent2', experience: '18 años', langs: 'ES / EN / PT' },
  { name: 'Elena Fuentes', role: 'Especialista Lujo', specialty: 'Europa, Maldivas, Caribe', img: 'agent3', experience: '12 años', langs: 'ES / EN / FR' },
  { name: 'Miguel Torres', role: 'Especialista Grupos', specialty: 'Marruecos, Turquía, Grecia', img: 'agent4', experience: '15 años', langs: 'ES / EN / AR' },
  { name: 'Sofía Morales', role: 'Especialista Familiar', specialty: 'Europa, Costa Rica, EE.UU.', img: 'agent5', experience: '10 años', langs: 'ES / EN / DE' },
  { name: 'Javier Ruiz', role: 'Especialista Cultural', specialty: 'India, Irán, Perú', img: 'agent6', experience: '14 años', langs: 'ES / EN / HI' },
]

const milestones = [
  { year: '1999', title: 'Fundación en Madrid', desc: 'Carmen Villalobos abre la primera oficina de Wanderlust en la Gran Vía de Madrid con un equipo de 3 personas.' },
  { year: '2003', title: 'Primera expansión', desc: 'Apertura de la oficina de Barcelona. Más de 5.000 viajeros satisfechos en nuestro primer lustro.' },
  { year: '2008', title: 'Certificación IATA', desc: 'Obtenemos la certificación IATA, consolidándonos como agencia de referencia en el sector.' },
  { year: '2012', title: 'Departamento de Lujo', desc: 'Lanzamos Wanderlust Élite, nuestra división especializada en viajes de alta gama y experiencias exclusivas.' },
  { year: '2016', title: 'Apertura Sevilla', desc: 'Tercera oficina en Sevilla para dar cobertura al sur de España. Superamos los 30.000 clientes.' },
  { year: '2024', title: 'Presente', desc: 'Más de 50.000 viajeros, 120 destinos y 25 años de pasión por el viaje. El mundo nos sigue esperando.' },
]

const certifications = [
  { name: 'IATA', desc: 'Asociación Internacional de Transporte Aéreo', color: '#003d7a' },
  { name: 'AEVAV', desc: 'Asociación Empresarial de Viajes de Valencia', color: '#002952' },
  { name: 'ACAVE', desc: 'Asociación Corporativa de Agencias de Viajes', color: '#00101f' },
  { name: 'ISO 9001', desc: 'Sistema de Gestión de Calidad Certificado', color: '#001a35' },
]

export default function NosotrosPage() {
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true })

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: 'system-ui, sans-serif' }}>

      {/* HERO */}
      <section style={{ position: 'relative', paddingTop: 120, paddingBottom: 80, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://picsum.photos/seed/travel-team/1400/600" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.2 }} alt="" />
        </div>
        <div className="r-container" style={{ position: 'relative' }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            NUESTRA HISTORIA
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
            25 Años Haciendo<br /><span style={{ color: ACCENT }}>Sueños Realidad</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ fontSize: 18, opacity: 0.75, maxWidth: 580, lineHeight: 1.7 }}>
            Desde 1999 organizamos viajes únicos para exploradores, soñadores y aventureros. Somos una familia apasionada por el mundo.
          </motion.p>
        </div>
      </section>

      {/* COMPANY PHOTO */}
      <section className="r-section" style={{ background: CARD_BG, paddingTop: 0 }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', aspectRatio: '21/9' }}>
            <img src="https://picsum.photos/seed/travel-team/900/500" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Equipo Wanderlust" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,26,53,0.8) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 32, left: 40, right: 40 }}>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: 22, margin: 0 }}>El Equipo Wanderlust — Madrid, 2024</p>
              <p style={{ color: TEXT, opacity: 0.7, fontSize: 15, margin: '4px 0 0' }}>25 expertos viajeros comprometidos con tu experiencia</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY + VALUES */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <div className="r-two-col" style={{ display: 'flex', flexWrap: 'wrap', gap: 64 }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ flex: '1 1 380px' }}>
              <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 16 }}>QUIÉNES SOMOS</p>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, margin: '0 0 24px' }}>
                Más que una Agencia, una Familia de Viajeros
              </h2>
              <p style={{ color: TEXT, opacity: 0.8, fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                Wanderlust nació en 1999 del sueño de Carmen Villalobos: crear una agencia donde cada viaje fuese tan único como la persona que lo hace. No vendemos paquetes estándar, construimos experiencias a medida.
              </p>
              <p style={{ color: TEXT, opacity: 0.8, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                Nuestro equipo ha viajado a cada destino que ofrecemos. Conocemos los mejores restaurantes locales, los hoteles que de verdad merecen sus estrellas y los rincones que no aparecen en ninguna guía turística.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/demos/viajes/contacto" style={{
                  display: 'inline-block', background: ACCENT, color: '#fff',
                  padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none',
                }}>Contactar con nosotros</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ flex: '1 1 320px' }}>
              <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 20 }}>NUESTROS VALORES</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: '❤️', title: 'Pasión por el viaje', desc: 'Cada persona de nuestro equipo es, antes que nada, un viajero apasionado.' },
                  { icon: '🎯', title: 'Atención personalizada', desc: 'Sin guiones. Escuchamos, entendemos y diseñamos el viaje perfecto para ti.' },
                  { icon: '🌍', title: 'Turismo responsable', desc: 'Colaboramos con proveedores locales y promovemos el turismo sostenible.' },
                  { icon: '💎', title: 'Transparencia total', desc: 'Sin letra pequeña. El precio que ves es el precio que pagas.' },
                ].map(v => (
                  <div key={v.title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 32, flex: '0 0 40px' }}>{v.icon}</div>
                    <div>
                      <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 17, margin: '0 0 6px' }}>{v.title}</h3>
                      <p style={{ color: TEXT, opacity: 0.7, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="r-section" style={{ background: CARD_BG }} ref={timelineRef}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>NUESTRA HISTORIA</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', margin: 0 }}>25 Años de Aventuras</h2>
          </motion.div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: CARD_BORDER, transform: 'translateX(-50%)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              {milestones.map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', position: 'relative' }}
                >
                  <div style={{ width: '44%', background: BG, borderRadius: 16, padding: 28, border: `1px solid ${CARD_BORDER}` }}>
                    <p style={{ color: ACCENT, fontWeight: 900, fontSize: 28, margin: '0 0 8px' }}>{m.year}</p>
                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: '0 0 10px' }}>{m.title}</h3>
                    <p style={{ color: TEXT, opacity: 0.75, fontSize: 15, lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                  </div>
                  <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 20, height: 20, background: ACCENT, borderRadius: '50%', border: '4px solid #001a35', zIndex: 2 }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>EL EQUIPO</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', margin: 0 }}>Nuestros Especialistas de Viaje</h2>
            <p style={{ color: TEXT, opacity: 0.65, marginTop: 16, fontSize: 16 }}>Cada uno con más de 10 años de experiencia y conocimiento profundo de sus destinos</p>
          </motion.div>
          <div className="r-grid-3">
            {teamMembers.map((m, i) => (
              <motion.div key={m.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                style={{ background: CARD_BG, borderRadius: 20, overflow: 'hidden', border: `1px solid ${CARD_BORDER}` }}
              >
                <div style={{ aspectRatio: '5/6', overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${m.img}/250/300`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={m.name} />
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 19, margin: '0 0 4px' }}>{m.name}</h3>
                  <p style={{ color: ACCENT, fontWeight: 600, fontSize: 14, margin: '0 0 12px' }}>{m.role}</p>
                  <p style={{ color: TEXT, opacity: 0.65, fontSize: 14, margin: '0 0 12px' }}>🗺️ {m.specialty}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ background: BG, color: TEXT, opacity: 0.85, padding: '4px 12px', borderRadius: 50, fontSize: 12, border: `1px solid ${CARD_BORDER}` }}>
                      {m.experience}
                    </span>
                    <span style={{ background: BG, color: ACCENT, padding: '4px 12px', borderRadius: 50, fontSize: 12, border: `1px solid ${CARD_BORDER}` }}>
                      {m.langs}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="r-section" style={{ background: CARD_BG, borderTop: `1px solid ${CARD_BORDER}` }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>CERTIFICACIONES</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: 0 }}>Avalados por los Mejores Organismos</h2>
          </motion.div>
          <div className="r-grid-4">
            {certifications.map((c, i) => (
              <motion.div key={c.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                style={{ background: c.color, borderRadius: 16, padding: 32, textAlign: 'center', border: `1px solid ${CARD_BORDER}` }}
              >
                <div style={{ fontSize: 36, fontWeight: 900, color: ACCENT, marginBottom: 12 }}>{c.name}</div>
                <p style={{ color: TEXT, opacity: 0.8, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="r-section" style={{ background: BG }}>
        <div className="r-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>NUESTRAS OFICINAS</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: 0 }}>Estamos Cerca de Ti</h2>
          </motion.div>
          <div className="r-grid-3">
            {[
              { city: 'Madrid', addr: 'C/ Gran Vía 45, 28013 Madrid', phone: '+34 91 555 0100', hours: 'Lun–Vie 9–20h · Sáb 10–14h', year: '1999' },
              { city: 'Barcelona', addr: 'Passeig de Gràcia 78, 08008', phone: '+34 93 555 0200', hours: 'Lun–Vie 9–20h · Sáb 10–14h', year: '2003' },
              { city: 'Sevilla', addr: 'C/ Sierpes 12, 41004 Sevilla', phone: '+34 95 555 0300', hours: 'Lun–Vie 9–20h · Sáb 10–14h', year: '2016' },
            ].map(o => (
              <motion.div key={o.city}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                style={{ background: CARD_BG, borderRadius: 20, padding: 36, border: `1px solid ${CARD_BORDER}` }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <h3 style={{ color: '#fff', fontSize: 26, fontWeight: 800, margin: 0 }}>{o.city}</h3>
                  <span style={{ background: ACCENT, color: '#fff', padding: '4px 12px', borderRadius: 50, fontSize: 12, fontWeight: 700 }}>Desde {o.year}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{ color: ACCENT }}>📍</span>
                    <span style={{ color: TEXT, opacity: 0.8, fontSize: 15 }}>{o.addr}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{ color: ACCENT }}>📞</span>
                    <span style={{ color: TEXT, opacity: 0.8, fontSize: 15 }}>{o.phone}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{ color: ACCENT }}>🕐</span>
                    <span style={{ color: TEXT, opacity: 0.8, fontSize: 15 }}>{o.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

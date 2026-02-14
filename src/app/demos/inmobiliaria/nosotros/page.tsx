'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const gold = '#c9a227'
const navy = '#001a4d'

const team = [
  { seed: 'agent1', name: 'Isabel Herrero García', role: 'Directora & Fundadora', specialty: 'Lujo y Grandes Patrimonios', phone: '+34 91 234 56 78', email: 'isabel@arcoinmobiliaria.es' },
  { seed: 'agent2', name: 'Carlos Mendoza López', role: 'Agente Senior', specialty: 'Residencial Madrid Centro', phone: '+34 91 234 56 79', email: 'carlos@arcoinmobiliaria.es' },
  { seed: 'agent3', name: 'María Vega Ruiz', role: 'Agente Senior', specialty: 'Costa y Segunda Residencia', phone: '+34 91 234 56 80', email: 'maria@arcoinmobiliaria.es' },
  { seed: 'agent4', name: 'Roberto Salinas', role: 'Asesor Patrimonial', specialty: 'Inversión y Obra Nueva', phone: '+34 91 234 56 81', email: 'roberto@arcoinmobiliaria.es' },
]

const values = [
  { icon: '🏆', title: 'Excelencia', desc: 'Cada detalle importa. Ofrecemos un servicio de máximo nivel con atención personalizada y resultados superiores.' },
  { icon: '🤝', title: 'Confianza', desc: 'Más de 20 años de trayectoria avalan nuestra seriedad y compromiso con cada cliente y cada operación.' },
  { icon: '🔍', title: 'Transparencia', desc: 'Informamos de todo con claridad y honestidad. Sin sorpresas, sin letra pequeña. Tu confianza es nuestro mayor activo.' },
  { icon: '💡', title: 'Innovación', desc: 'Incorporamos las últimas tecnologías en marketing digital, home staging y visitas virtuales para maximizar resultados.' },
]

const timeline = [
  { year: '2002', event: 'Fundación de Arco Inmobiliaria', detail: 'Isabel Herrero funda la agencia con un equipo de 3 profesionales y una oficina en Salamanca, Madrid.' },
  { year: '2008', event: 'Expansión a Barcelona', detail: 'Apertura de la segunda oficina en el Eixample barcelonés, ampliando el mercado a Cataluña.' },
  { year: '2010', event: '100ª Propiedad Vendida', detail: 'Un hito histórico: vendemos nuestra propiedad número 100, consolidando nuestra reputación en el mercado de lujo.' },
  { year: '2018', event: 'Nueva Sede Central', detail: 'Inauguramos nuestras nuevas instalaciones en calle Velázquez 45, con showroom, salas de reuniones y tecnología punta.' },
  { year: '2024', event: '500 Propiedades Gestionadas', detail: 'Alcanzamos el hito de las 500 propiedades con más de 1.200 clientes satisfechos y presencia en 8 ciudades.' },
]

const certifications = [
  'API Colegiada · Nº 3421', 'FIABCI España', 'ISO 9001:2015', 'Leading RE', 'Luxury Portfolio Int.', 'Forbes Real Estate'
]

export default function NosotrosPage() {
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true })

  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      <style>{`
        @media (max-width: 640px) {
          .timeline-item { justify-content: flex-start !important; }
          .timeline-card { width: 90% !important; }
          .timeline-dot { left: 5% !important; }
          .timeline-line { display: none; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/realty-office/1200/500"
          alt="Oficina Arco Inmobiliaria"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,26,77,0.85) 0%, rgba(0,26,77,0.4) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60px' }}
              transition={{ duration: 0.8 }}
              style={{ height: '3px', background: gold, marginBottom: '1.5rem' }}
            />
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', lineHeight: 1.1 }}
            >
              QUIENES <span style={{ color: gold }}>SOMOS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '500px', fontStyle: 'italic' }}
            >
              Mas de dos decadas creando historias de exito en el mercado inmobiliario de lujo
            </motion.p>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="r-two-col" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 1.5rem', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ height: '3px', background: gold, width: '50px', marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: navy, marginBottom: '1.5rem', textTransform: 'uppercase' }}>Nuestra Historia</h2>
          <p style={{ color: navy + 'cc', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.97rem' }}>
            Arco Inmobiliaria nacio en 2002 con una vision clara: ofrecer un servicio inmobiliario verdaderamente personalizado en el segmento de lujo y alta gama. Isabel Herrero, fundadora y directora, aposto desde el primer dia por un modelo basado en la confianza, la excelencia y el conocimiento profundo de cada mercado.
          </p>
          <p style={{ color: navy + 'cc', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.97rem' }}>
            Hoy somos una agencia de referencia con presencia en Madrid, Barcelona, Marbella, Ibiza y las principales ciudades espanolas. Nuestro equipo de 18 profesionales especializados gestiona cada ano mas de 80 operaciones en el segmento premium, con un volumen total superior a 200 millones de euros.
          </p>
          <p style={{ color: navy + 'cc', lineHeight: 1.9, fontSize: '0.97rem' }}>
            El secreto de nuestro exito es sencillo: tratamos cada propiedad como unica, cada cliente como prioritario, y cada operacion como si fuera la mas importante de nuestra historia. Porque para nuestros clientes, lo es.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative' }}
        >
          <img
            src="https://picsum.photos/seed/realty-team/600/750"
            alt="Equipo"
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,26,77,0.15)', display: 'block' }}
          />
          <div style={{
            position: 'absolute', bottom: '-1.5rem', left: '-1.5rem',
            background: gold, color: '#fff', padding: '1.5rem 2rem',
            borderRadius: '10px', fontWeight: 900,
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>98%</div>
            <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Clientes satisfechos</div>
          </div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section style={{ background: '#f9f7f2', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ height: '3px', background: gold, width: '50px', margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: navy, textTransform: 'uppercase' }}>Nuestros Valores</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: '#fff', borderRadius: '10px', padding: '2rem 1.5rem', boxShadow: '0 4px 16px rgba(0,26,77,0.07)' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontWeight: 800, color: navy, fontSize: '1.1rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>{v.title}</h3>
                <p style={{ color: navy + 'aa', fontSize: '0.88rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ height: '3px', background: gold, width: '50px', margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: navy, textTransform: 'uppercase' }}>Nuestro Equipo</h2>
          <p style={{ color: navy + '77', marginTop: '0.75rem', fontStyle: 'italic' }}>Profesionales apasionados por el mundo inmobiliario</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
          {team.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.25rem' }}>
                <img
                  src={`https://picsum.photos/seed/${agent.seed}/300/350`}
                  alt={agent.name}
                  style={{ width: '200px', height: '240px', objectFit: 'cover', borderRadius: '10px', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: '-0.75rem', left: '50%', transform: 'translateX(-50%)',
                  background: gold, color: '#fff', fontSize: '0.65rem', fontWeight: 800,
                  padding: '0.3rem 0.85rem', borderRadius: '20px', whiteSpace: 'nowrap', textTransform: 'uppercase',
                }}>{agent.specialty}</div>
              </div>
              <h3 style={{ fontWeight: 800, color: navy, fontSize: '1rem', marginTop: '1rem', marginBottom: '0.25rem' }}>{agent.name}</h3>
              <p style={{ color: navy + '77', fontSize: '0.82rem', marginBottom: '0.75rem' }}>{agent.role}</p>
              <div style={{ fontSize: '0.82rem', color: gold, fontWeight: 700 }}>{agent.phone}</div>
              <div style={{ fontSize: '0.78rem', color: navy + '88', marginTop: '0.25rem' }}>{agent.email}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: navy, padding: '5rem 1.5rem' }} ref={timelineRef}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ height: '3px', background: gold, width: '50px', margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase' }}>Nuestra Trayectoria</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'rgba(201,162,39,0.3)', transform: 'translateX(-50%)' }} />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="timeline-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                style={{
                  display: 'flex',
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: '2.5rem',
                  position: 'relative',
                }}
              >
                <div className="timeline-card" style={{
                  width: '44%',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(201,162,39,0.2)',
                  borderRadius: '10px',
                  padding: '1.25rem 1.5rem',
                }}>
                  <div style={{ color: gold, fontWeight: 900, fontSize: '1.5rem', marginBottom: '0.3rem' }}>{item.year}</div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{item.event}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.detail}</div>
                </div>
                <div className="timeline-dot" style={{
                  position: 'absolute', left: '50%', top: '1.25rem',
                  width: '14px', height: '14px', borderRadius: '50%',
                  background: gold, transform: 'translateX(-50%)',
                  boxShadow: '0 0 0 4px rgba(201,162,39,0.3)',
                }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ background: '#f9f7f2', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: navy + '77', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.5rem', fontWeight: 700 }}>CERTIFICACIONES Y MEMBRESIAS</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {certifications.map(cert => (
              <span key={cert} style={{
                background: '#fff', border: `1px solid ${navy}22`,
                color: navy, fontSize: '0.8rem', fontWeight: 700,
                padding: '0.6rem 1.25rem', borderRadius: '6px',
                boxShadow: '0 2px 8px rgba(0,26,77,0.06)',
              }}>{cert}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

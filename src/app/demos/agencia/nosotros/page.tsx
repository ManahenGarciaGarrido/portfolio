'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const accent = '#00ff88'
const bg = '#000'
const text = '#fff'

const team = [
  { seed: 'team-member1', name: 'Claudia Vega', role: 'CEO & Estrategia', linkedin: '#', bio: 'Ex-Google. 12 años en marketing digital. Especialista en growth hacking y estrategia de marca para scale-ups.' },
  { seed: 'team-member2', name: 'Rodrigo Blanco', role: 'Director de Paid Media', linkedin: '#', bio: '8 años gestionando +50M€ en inversión publicitaria. Google Ads Champion 2022. ROAS promedio de clientes: 6.2x.' },
  { seed: 'team-member3', name: 'Noa Ferrer', role: 'Head of SEO & Content', linkedin: '#', bio: 'Lingüista y SEO técnica. Ha posicionado más de 200 dominios en page one de Google. Autora del blog de referencia "SEO en Español".' },
  { seed: 'team-member4', name: 'David Kim', role: 'Lead Developer', linkedin: '#', bio: 'Full-stack con especialización en web performance. Construye sitios con 100/100 en PageSpeed. Ex-startup Silicon Valley.' },
  { seed: 'team-member5', name: 'Ana Lorente', role: 'Creative Director', linkedin: '#', bio: 'Diseñadora con 10 años en agencias de publicidad internacionales. Cree que el buen diseño sin conversión no sirve de nada.' },
]

const values = [
  { icon: '📊', title: 'Datos Primero', desc: 'Ninguna decisión sin datos. Medimos todo lo que movemos y usamos los números para optimizar sin descanso.' },
  { icon: '🚀', title: 'Resultados, No Excusas', desc: 'Los KPIs son sagrados. Si una estrategia no funciona, la cambiamos. Nuestro compromiso es con el resultado final.' },
  { icon: '🤝', title: 'Socios, No Proveedores', desc: 'Tratamos cada cuenta como si fuera nuestra empresa. Tu crecimiento es nuestro crecimiento.' },
]

const clients = [
  'Grupo Inditex', 'Santander Digital', 'El Corte Inglés Online', 'Cabify Business',
  'Housfy', 'Wallapop', 'Glovo España', 'Vinted España',
  'Mango Online', 'Bankinter', 'Adevinta', 'Idealista Pro',
]

export default function NosotrosPage() {
  const manifestoRef = useRef(null)
  const manifestoInView = useInView(manifestoRef, { once: true })
  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true })
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true })
  const clientsRef = useRef(null)
  const clientsInView = useInView(clientsRef, { once: true })

  return (
    <main style={{ background: bg, color: text, fontFamily: "'Inter', 'Helvetica Neue', sans-serif", minHeight: '100vh' }}>
      {/* TEAM PHOTO HERO */}
      <div style={{ position: 'relative', height: 480, overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/agency-team/1200/500"
          alt="Equipo Digital+"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.35) grayscale(40%)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,1) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3rem 2rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Quiénes somos
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.03em', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Un equipo que<br />vive el marketing
            </h1>
          </motion.div>
        </div>
      </div>

      {/* STORY & MANIFESTO */}
      <section ref={manifestoRef} style={{ padding: '5rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={manifestoInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div style={{ color: accent, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Nuestra Historia</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: '0 0 1.5rem', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Digital+</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              Digital+ nació en 2016 cuando Claudia y Rodrigo, hartos de las agencias que prometían y no entregaban, decidieron construir la agencia que ellos hubieran querido como clientes: obsesionada con los datos, transparente al 100% y con skin in the game.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              Empezamos con 3 clientes y un despacho alquilado en Leganitos. Hoy gestionamos más de 2 millones de euros mensuales en inversión publicitaria y hemos ayudado a más de 150 empresas a crecer de manera sostenible y medible.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              No somos la agencia más grande de Madrid. Somos la que mejores resultados da a sus clientes. Y eso es lo único que nos importa.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={manifestoInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            <div style={{ color: accent, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Nuestro Manifiesto</div>
            <div style={{ border: `1px solid rgba(0,255,136,0.2)`, borderRadius: 8, padding: '2rem' }}>
              {[
                'Creemos que el marketing sin datos es ruido.',
                'Creemos que cada euro invertido debe tener un retorno medible.',
                'Creemos que la transparencia no es opcional, es el contrato.',
                'Creemos que el mejor cliente es el que crece contigo.',
                'Creemos que si no podemos mejorar tu situación actual, te lo decimos.',
                'Creemos que el marketing digital, hecho bien, es el mejor activo de un negocio.',
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={manifestoInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}
                >
                  <span style={{ color: accent, fontWeight: 900, flexShrink: 0, marginTop: 2 }}>→</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.5 }}>{line}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section ref={teamRef} style={{ padding: '2rem 2rem 5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ color: accent, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Las personas</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Nuestro Equipo</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
          {team.map((member, i) => (
            <motion.div
              key={member.seed}
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, overflow: 'hidden', transition: 'border-color 0.2s' }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={`https://picsum.photos/seed/${member.seed}/300/300`}
                  alt={member.name}
                  style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block', filter: 'grayscale(30%)' }}
                />
                <div style={{ position: 'absolute', top: 8, right: 8, background: accent, borderRadius: 4, padding: '0.25rem 0.5rem', fontSize: '0.65rem', fontWeight: 700, color: bg, letterSpacing: '0.1em' }}>
                  in
                </div>
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{ color: text, fontSize: '0.95rem', fontWeight: 700, margin: '0 0 0.25rem' }}>{member.name}</h3>
                <div style={{ color: accent, fontSize: '0.75rem', marginBottom: '0.5rem', fontWeight: 600 }}>{member.role}</div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', lineHeight: 1.5, margin: 0 }}>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section ref={valuesRef} style={{ background: '#0a0a0a', padding: '5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: accent, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Lo que nos define</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Nuestros Valores</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ border: '1px solid rgba(0,255,136,0.15)', borderRadius: 8, padding: '2rem' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{val.icon}</div>
                <h3 style={{ color: accent, fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{val.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section ref={clientsRef} style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: accent, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Confían en nosotros</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Clientes</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                animate={clientsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ borderColor: accent, color: text }}
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  padding: '1rem',
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  cursor: 'default',
                  transition: 'all 0.2s',
                }}
              >
                {client}
              </motion.div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem', marginTop: '1.5rem', fontStyle: 'italic' }}>
            * Clientes representativos. NDA en vigor para casos específicos.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: accent, padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: bg, fontSize: '2rem', fontWeight: 900, margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          Únete a los que crecen
        </h2>
        <motion.a
          href="/demos/agencia/contacto"
          whileHover={{ scale: 1.05 }}
          style={{ display: 'inline-block', background: bg, color: accent, padding: '1rem 2.5rem', borderRadius: 4, textDecoration: 'none', fontWeight: 900, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Contactar Ahora
        </motion.a>
      </div>
    </main>
  )
}

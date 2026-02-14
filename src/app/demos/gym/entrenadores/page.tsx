'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const red = '#ff3300'
const orange = '#ff8800'
const dark = '#0a0a0a'

const trainers = [
  {
    seed: 'trainer1',
    name: 'Diego Ramirez',
    specialty: 'Musculacion & Powerlifting',
    certs: ['NSCA-CSCS', 'CrossFit L2', 'FNS Nutricion'],
    years: 9,
    bio: 'Campeon regional de powerlifting con 9 anos de experiencia formando atletas de elite y aficionados. Su metodologia combina ciencia del entrenamiento con motivacion real.',
    insta: '@diegoram_fit',
    linkedin: 'diego-ramirez-fit',
    specialties: ['Hipertrofia', 'Fuerza', 'Composicion corporal'],
  },
  {
    seed: 'trainer2',
    name: 'Ana Martinez',
    specialty: 'HIIT & Cardio Funcional',
    certs: ['ACE CPT', 'HIIT Certified', 'TRX Instructor'],
    years: 7,
    bio: 'Exatleta de atletismo reconvertida en experta en entrenamiento de alta intensidad. Sus clases de HIIT son legendarias en Inferno por su dinamismo y resultados.',
    insta: '@anafitness_madrid',
    linkedin: 'ana-martinez-trainer',
    specialties: ['HIIT', 'Fat Loss', 'Resistencia'],
  },
  {
    seed: 'trainer3',
    name: 'Pablo Vega',
    specialty: 'CrossFit & Entrenamiento Funcional',
    certs: ['CrossFit L3', 'Olympic Lifting', 'Mobility Coach'],
    years: 11,
    bio: 'Fundador del primer box CrossFit de Madrid y ahora lider de los programas funcionales de Inferno. 11 anos transformando cuerpos y mentes a traves del movimiento.',
    insta: '@pablovega_crossfit',
    linkedin: 'pablo-vega-crossfit',
    specialties: ['CrossFit', 'Weightlifting', 'Movilidad'],
  },
  {
    seed: 'trainer4',
    name: 'Maria Palacios',
    specialty: 'Yoga & Mindfulness',
    certs: ['RYT-500 Yoga Alliance', 'Pilates Reformer', 'Meditation Teacher'],
    years: 12,
    bio: 'Con mas de 12 anos de practica y ensenanza, Maria integra el yoga tradicional con tecnicas modernas de mindfulness. Sus sesiones son una experiencia transformadora.',
    insta: '@mariayoga_inferno',
    linkedin: 'maria-palacios-yoga',
    specialties: ['Yoga', 'Mindfulness', 'Flexibilidad'],
  },
  {
    seed: 'trainer5',
    name: 'Sergio Molina',
    specialty: 'Kickboxing & Artes Marciales',
    certs: ['WKF Coach', 'Muay Thai Trainer', 'Self-Defense Instructor'],
    years: 14,
    bio: 'Excompetidor profesional de kickboxing con 14 anos de experiencia en artes marciales. Formado en Tailandia y Japon, trae lo mejor de las artes marciales orientales.',
    insta: '@sergiomolina_fight',
    linkedin: 'sergio-molina-fight',
    specialties: ['Kickboxing', 'Muay Thai', 'Defensa personal'],
  },
  {
    seed: 'trainer6',
    name: 'Laura Garcia',
    specialty: 'Spinning & Cardio Indoor',
    certs: ['Spinning Certified', 'Les Mills Instructor', 'BodyPump'],
    years: 6,
    bio: 'Instructora con mas energia que el propio sol. Laura convierte cada sesion de spinning en un concierto sobre ruedas. Sus clases tienen lista de espera permanente.',
    insta: '@lauragarcia_spin',
    linkedin: 'laura-garcia-spin',
    specialties: ['Spinning', 'Cardio', 'Motivacion'],
  },
]

export default function EntrenadoresPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <main style={{ background: dark, minHeight: '100vh', color: '#fff', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* HEADER */}
      <div style={{ background: '#0d0d0d', borderBottom: `3px solid ${red}`, padding: '4rem 1.5rem 3rem', textAlign: 'center' }}>
        <motion.div initial={{ width: 0 }} animate={{ width: '60px' }} transition={{ duration: 0.7 }} style={{ height: '3px', background: red, margin: '0 auto 1.25rem' }} />
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          NUESTROS <span style={{ color: red }}>ENTRENADORES</span>
        </motion.h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem', fontSize: '1rem' }}>
          Profesionales de elite · Certificados · Apasionados por tu progreso
        </p>
      </div>

      {/* TRAINER GRID */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredId(i)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: '#111',
                borderRadius: '10px',
                overflow: 'hidden',
                border: hoveredId === i ? `2px solid ${red}` : '2px solid #1a1a1a',
                boxShadow: hoveredId === i ? `0 0 30px rgba(255,51,0,0.25), 0 20px 60px rgba(0,0,0,0.4)` : '0 4px 20px rgba(0,0,0,0.3)',
                transform: hoveredId === i ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={`https://picsum.photos/seed/${trainer.seed}/400/500`}
                  alt={trainer.name}
                  style={{ objectFit: 'cover', width: '100%', aspectRatio: '3/4', display: 'block',
                    filter: hoveredId === i ? 'brightness(0.9)' : 'brightness(0.75)',
                    transition: 'filter 0.3s',
                  }}
                />
                {/* Specialty pills overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                  padding: '1.5rem 1rem 1rem',
                }}>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {trainer.specialties.map(s => (
                      <span key={s} style={{
                        background: 'rgba(255,51,0,0.8)', color: '#fff',
                        fontSize: '0.62rem', fontWeight: 800, padding: '0.2rem 0.6rem',
                        borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.05em',
                      }}>{s}</span>
                    ))}
                  </div>
                </div>
                {/* Social icons */}
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  display: 'flex', flexDirection: 'column', gap: '0.4rem',
                  opacity: hoveredId === i ? 1 : 0,
                  transition: 'opacity 0.3s',
                }}>
                  <a href={`https://instagram.com/${trainer.insta.replace('@', '')}`} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', fontSize: '1rem', textDecoration: 'none' }}>📸</a>
                  <a href={`https://linkedin.com/in/${trainer.linkedin}`} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', fontSize: '1rem', textDecoration: 'none' }}>💼</a>
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <div style={{ color: red, fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{trainer.specialty}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff' }}>{trainer.name}</h3>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '1rem' }}>{trainer.bio}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  {trainer.certs.map(c => (
                    <span key={c} style={{
                      background: '#1a1a1a', border: '1px solid #333',
                      color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontWeight: 700,
                      padding: '0.2rem 0.6rem', borderRadius: '4px',
                    }}>{c}</span>
                  ))}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', fontWeight: 600 }}>
                  {trainer.years} anos de experiencia · {trainer.insta}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div style={{ background: '#0d0d0d', borderTop: '1px solid #1a1a1a', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1.1 }}>
            QUIERES ENTRENAR<br /><span style={{ color: red }}>CON NOSOTROS?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Nuestros entrenadores estan listos para llevarte mas alla de tus limites. Solicita una sesion de prueba gratuita con cualquiera de ellos.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/demos/gym/contacto" style={{
              display: 'inline-block', background: red, color: '#fff',
              fontWeight: 900, fontSize: '1rem', padding: '1rem 2.5rem',
              borderRadius: '4px', textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.1em', boxShadow: `0 0 30px rgba(255,51,0,0.4)`,
            }}>
              SOLICITAR SESION DE PRUEBA
            </Link>
            <Link href="/demos/gym/planes" style={{
              display: 'inline-block', background: 'transparent', color: '#fff',
              fontWeight: 900, fontSize: '1rem', padding: '1rem 2.5rem',
              borderRadius: '4px', textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.1em', border: '2px solid #333',
            }}>
              VER PLANES
            </Link>
          </div>

          {/* Also hiring section */}
          <div style={{ marginTop: '4rem', padding: '2.5rem', background: '#111', borderRadius: '12px', maxWidth: '600px', margin: '4rem auto 0', border: '1px solid #222' }}>
            <h3 style={{ fontWeight: 800, color: '#fff', fontSize: '1.1rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Trabajas como entrenador?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Estamos buscando instructores apasionados y certificados para unirse al equipo de Inferno Gym. Envianos tu candidatura.
            </p>
            <a href="mailto:jobs@infernogym.es" style={{
              display: 'inline-block', color: red, fontWeight: 800, fontSize: '0.9rem',
              border: `1px solid ${red}`, padding: '0.7rem 2rem', borderRadius: '4px',
              textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>
              ENVIAR CV
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

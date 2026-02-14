'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

const red = '#ff3300'
const orange = '#ff8800'
const dark = '#0a0a0a'

const stats = [
  { number: '3200+', label: 'Miembros Activos' },
  { number: '15', label: 'Instructores Elite' },
  { number: '8 Anos', label: 'de Trayectoria' },
  { number: '24/7', label: 'Siempre Abierto' },
]

const programs = [
  { seed: 'training1', name: 'Musculacion', intensity: 'ALTA', desc: 'Pesas libres, maquinas y guia personalizada para hipertrofia y fuerza.' },
  { seed: 'training2', name: 'HIIT', intensity: 'MAXIMA', desc: 'Intervalos de alta intensidad que queman grasa y mejoran la resistencia cardiovascular.' },
  { seed: 'training3', name: 'Crossfit', intensity: 'EXTREMA', desc: 'Entrenamiento funcional de alta intensidad que combina fuerza, velocidad y resistencia.' },
  { seed: 'training4', name: 'Spinning', intensity: 'ALTA', desc: 'Ciclismo indoor dinamico con musica energetica y rutinas variadas.' },
  { seed: 'training5', name: 'Kickboxing', intensity: 'MUY ALTA', desc: 'Artes marciales combinadas con cardio intenso. Defensa personal y forma fisica.' },
  { seed: 'training6', name: 'Yoga Power', intensity: 'MEDIA', desc: 'Yoga dinamico que combina fuerza, flexibilidad y mindfulness en cada sesion.' },
]

const testimonials = [
  { seed: 'gym-member1', name: 'Alejandro Ruiz', months: '14 meses', text: 'En Inferno encontre el ambiente que necesitaba para romper mis limites. Perdi 22kg y gane una fuerza que nunca pense posible. Los instructores son simplemente brutales.' },
  { seed: 'gym-member2', name: 'Sofia Navarro', months: '8 meses', text: 'Vine buscando perder peso y me quede por la comunidad. Las clases de HIIT son adictivas. En 8 meses estoy en la mejor forma de mi vida a los 38 anos.' },
  { seed: 'gym-member3', name: 'Miguel Tomas', months: '2 anos', text: 'Llevo 2 anos siendo miembro ELITE y no cambio Inferno por nada. El equipamiento es de primer nivel y los instructores siempre estan para motivarte.' },
]

const intensityColor: Record<string, string> = {
  'MEDIA': '#22c55e',
  'ALTA': orange,
  'MUY ALTA': '#f97316',
  'MAXIMA': red,
  'EXTREMA': '#dc2626',
}

export default function GymHome() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  return (
    <main style={{ background: dark, minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif", color: '#fff' }}>

      {/* FLICKER ANIMATION */}
      <style>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { 
            text-shadow: 0 0 20px #ff3300, 0 0 40px #ff3300, 0 0 80px #ff3300;
            opacity: 1;
          }
          20%, 24%, 55% { 
            text-shadow: none;
            opacity: 0.8;
          }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-flicker { animation: flicker 4s infinite; }
      `}</style>

      {/* HERO FULLSCREEN */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '650px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/gym-hero/1400/900"
          alt="Gym"
          style={{ objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%', filter: 'brightness(0.35)' }}
        />
        {/* Red radial overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,51,0,0.15) 0%, transparent 65%)' }} />

        {/* Pulsing red rings */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              position: 'absolute', top: '50%', left: '50%',
              width: '400px', height: '400px',
              marginTop: '-200px', marginLeft: '-200px',
              border: '1px solid rgba(255,51,0,0.4)',
              borderRadius: '50%',
              animation: `pulse-ring 3s ease-out ${i * 1}s infinite`,
            }} />
          ))}
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem', maxWidth: '800px' }}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="animate-flicker"
            style={{
              fontSize: 'clamp(4rem, 12vw, 9rem)',
              fontWeight: 900,
              color: red,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            INFERNO
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}
          >
            GYM
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase', letterSpacing: '0.2em', margin: '1.5rem 0 2.5rem', fontWeight: 600 }}
          >
            FORJA TU MEJOR VERSION
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/demos/gym/planes" style={{
              background: red, color: '#fff', fontWeight: 900,
              fontSize: '1rem', padding: '1rem 2.5rem',
              borderRadius: '4px', textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.1em', border: '2px solid transparent',
              boxShadow: `0 0 30px rgba(255,51,0,0.5)`,
            }}>
              UNIRSE AHORA
            </Link>
            <Link href="/demos/gym/clases" style={{
              background: 'transparent', color: '#fff', fontWeight: 900,
              fontSize: '1rem', padding: '1rem 2.5rem',
              borderRadius: '4px', textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.1em', border: '2px solid rgba(255,255,255,0.4)',
            }}>
              VER CLASES
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ color: red, fontSize: '1.25rem', opacity: 0.7 }}>↓</motion.div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section ref={statsRef} style={{ background: '#111', borderTop: `3px solid ${red}`, borderBottom: '1px solid #222' }}>
        <div className="r-grid-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                textAlign: 'center',
                padding: '2.5rem 1rem',
                borderRight: i < stats.length - 1 ? '1px solid #222' : 'none',
              }}
            >
              <div style={{ fontSize: '2.8rem', fontWeight: 900, color: red, lineHeight: 1, marginBottom: '0.4rem' }}>{s.number}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            style={{ height: '3px', background: red, margin: '0 auto 1rem' }}
          />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            NUESTROS <span style={{ color: red }}>PROGRAMAS</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.75rem' }}>Entrena con los mejores en el entorno mas exigente</p>
        </div>
        <div className="r-grid-3" style={{ gap: '1.5rem' }}>
          {programs.map((prog, i) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              style={{
                background: '#111',
                border: '1px solid #222',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={`https://picsum.photos/seed/${prog.seed}/500/350`}
                  alt={prog.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', filter: 'brightness(0.8)' }}
                />
                <span style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: intensityColor[prog.intensity] || red,
                  color: '#fff', fontSize: '0.65rem', fontWeight: 900,
                  padding: '0.3rem 0.8rem', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.1em',
                }}>{prog.intensity}</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', marginBottom: '0.5rem' }}>{prog.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>{prog.desc}</p>
                <Link href="/demos/gym/clases" style={{
                  display: 'inline-block', background: red, color: '#fff',
                  fontWeight: 800, fontSize: '0.78rem', padding: '0.55rem 1.5rem',
                  borderRadius: '3px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em',
                }}>UNIRSE</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROMO SECTION */}
      <section style={{ background: `linear-gradient(135deg, ${red} 0%, ${orange} 100%)`, padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 0px, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: '1rem' }}>OFERTA LIMITADA</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              PRIMERA SEMANA<br />GRATIS
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              Ven a entrenar sin compromiso durante 7 dias. Acceso completo a todas las instalaciones, clases y entrenadores. Sin tarjeta de credito.
            </p>
            <Link href="/demos/gym/contacto" style={{
              display: 'inline-block', background: dark, color: '#fff',
              fontWeight: 900, fontSize: '1.05rem', padding: '1.1rem 3rem',
              borderRadius: '4px', textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.12em', boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            }}>
              RECLAMAR MI SEMANA GRATIS
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '5rem 1.5rem', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ height: '3px', background: red, width: '60px', margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, textTransform: 'uppercase' }}>
              LO QUE DICEN NUESTROS <span style={{ color: red }}>MIEMBROS</span>
            </h2>
          </div>
          <div className="r-grid-3" style={{ gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{
                  background: '#111',
                  border: '1px solid #222',
                  borderRadius: '8px',
                  padding: '2rem',
                  position: 'relative',
                }}
              >
                <div style={{ color: red, fontSize: '3rem', lineHeight: 1, marginBottom: '1rem', fontWeight: 900, opacity: 0.4 }}>"</div>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, fontSize: '0.92rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src={`https://picsum.photos/seed/${t.seed}/80/80`} alt={t.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${red}` }} />
                  <div>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ color: red, fontSize: '0.75rem', fontWeight: 700 }}>Miembro desde hace {t.months}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#050505', borderTop: `2px solid ${red}22`, padding: '2rem', textAlign: 'center' }}>
        <span style={{ color: red, fontWeight: 900, fontSize: '1.1rem' }}>INFERNO GYM</span>
        <span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: '1rem', fontSize: '0.85rem' }}>Forjando campeones desde 2017 · 24/7 · Madrid</span>
      </footer>
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const dark = '#111111'
const text = '#1a1a1a'
const bg = '#f4f4f0'
const mid = '#888'

const team = [
  {
    seed: 'architect1',
    name: 'Elena Martínez',
    role: 'Fundadora & Directora',
    education: 'ETSA Madrid · Harvard GSD',
    years: '18 años de experiencia',
    specialty: 'Arquitectura residencial y cultural',
    bio: 'Fundó Arco Studio en 2008 tras años de formación en Madrid y Harvard. Su obra refleja una búsqueda constante por la esencia: espacios despojados de lo superfluo, capaces de emocionarnos por su precisión formal y su relación con la luz.',
    awards: ['Premio FAD 2024', 'AR House Award 2022', 'Beca Fulbright 2005'],
  },
  {
    seed: 'architect2',
    name: 'Pablo Ruiz',
    role: 'Socio & Arquitecto Senior',
    education: 'ETSAB Barcelona · ETH Zürich',
    years: '14 años de experiencia',
    specialty: 'Arquitectura comercial y urbana',
    bio: 'Especialista en grandes escales y proyectos urbanos complejos. Lideró el diseño de Oficinas Vértice y la Torre Nou Barris. Su formación suiza aporta rigor técnico y visión sistémica a los proyectos del estudio.',
    awards: ['Architizer A+ 2023', 'COAM Reforma 2022'],
  },
  {
    seed: 'architect3',
    name: 'Sofía Chen',
    role: 'Arquitecta & Responsable de Sostenibilidad',
    education: 'ETSAB · Politécnico de Milán',
    years: '9 años de experiencia',
    specialty: 'Bioclimática y certificaciones verdes',
    bio: 'Ingresó al estudio en 2016 y desde entonces ha sido la impulsora de la agenda de sostenibilidad. Certificada en BREEAM, LEED y Passivhaus, lidera los proyectos con mayor exigencia medioambiental. También coordina el programa de formación interna del equipo.',
    awards: ['BREEAM Outstanding — Hotel Botánico', 'Premio Construmat 2023'],
  },
  {
    seed: 'architect4',
    name: 'Marcos del Valle',
    role: 'Arquitecto Junior & Coordinación de Obra',
    education: 'ETSA Sevilla · IAAC Barcelona',
    years: '5 años de experiencia',
    specialty: 'Rehabilitación y coordinación técnica',
    bio: 'Con raíces en la arquitectura vernácula andaluza, Marcos aporta sensibilidad por los oficios tradicionales y los materiales locales. Especializado en rehabilitación y construcción con tierra, gestiona además la relación con constructores y proveedores durante la fase de obra.',
    awards: ['Premio Arquinfad 2024 (estudiantes)'],
  },
]

const publications = [
  { year: '2024', pub: 'El Croquis', title: 'Arco Studio: La austeridad como disciplina' },
  { year: '2023', pub: 'Architectural Review', title: 'Spanish New Wave: Four studios redefining housing' },
  { year: '2022', pub: 'Diseño Interior', title: 'Casa Alicante — Habitar el acantilado' },
  { year: '2022', pub: 'Domus', title: 'Centro Cívico Gràcia: memoria e innovación' },
  { year: '2021', pub: 'A10 New European Architecture', title: 'Arco Studio featured in European Practice Survey' },
  { year: '2020', pub: 'Arquitectura Viva', title: 'Tres viviendas mínimas, máxima emoción' },
]

export default function EquipoPage() {
  return (
    <main style={{ background: bg, minHeight: '100vh', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: text }}>

      {/* PAGE HEADER */}
      <section style={{ padding: '5rem 1.5rem 3rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 500 }}>Las personas detrás del estudio</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 200, color: text, lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Equipo
            </h1>
            <p style={{ color: mid, fontSize: '1rem', fontWeight: 300, maxWidth: '520px', lineHeight: 1.7 }}>
              Cuatro arquitectos, más de cuarenta años de experiencia acumulada, y una filosofía compartida: la arquitectura como servicio a las personas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="r-grid-2" style={{ gap: '4rem 3rem' }}>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {/* Photo */}
              <div style={{ position: 'relative', marginBottom: '2rem', overflow: 'hidden' }}>
                <img
                  src={`https://picsum.photos/seed/${member.seed}/400/500`}
                  alt={member.name}
                  style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', filter: 'grayscale(20%)' }}
                />
                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.06)', transition: 'opacity 0.3s' }}
                />
              </div>
              {/* Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 400, color: text, letterSpacing: '-0.01em', margin: 0 }}>{member.name}</h2>
              </div>
              <div style={{ fontSize: '0.82rem', color: mid, fontWeight: 300, marginBottom: '1rem', fontStyle: 'italic' }}>{member.role}</div>
              <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>{member.bio}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem' }}>
                  <span style={{ color: mid, minWidth: '80px' }}>Formación:</span>
                  <span style={{ color: text, fontWeight: 400 }}>{member.education}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem' }}>
                  <span style={{ color: mid, minWidth: '80px' }}>Especialidad:</span>
                  <span style={{ color: text, fontWeight: 400 }}>{member.specialty}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem' }}>
                  <span style={{ color: mid, minWidth: '80px' }}>Experiencia:</span>
                  <span style={{ color: text, fontWeight: 400 }}>{member.years}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {member.awards.map((a, k) => (
                  <span key={k} style={{ fontSize: '0.7rem', color: mid, background: 'rgba(0,0,0,0.06)', padding: '0.25rem 0.7rem', fontWeight: 400 }}>{a}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STUDIO CULTURE */}
      <section style={{ padding: '5rem 0', background: '#eeede8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 500 }}>El estudio</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, color: text, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Cultura de trabajo
            </h2>
            <p style={{ color: mid, fontSize: '0.95rem', fontWeight: 300, maxWidth: '550px', lineHeight: 1.75 }}>
              Creemos en equipos pequeños y comprometidos. Cada arquitecto del estudio sigue el proyecto desde el primer boceto hasta la entrega de llaves. No delegamos lo que importa.
            </p>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="https://picsum.photos/seed/architecture-studio/900/500" alt="Estudio" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', maxHeight: '500px' }} />
          </div>
          <div className="r-grid-3" style={{ gap: '3rem', marginTop: '4rem' }}>
            {[
              { title: 'Equipos integrados', desc: 'Cada proyecto tiene un arquitecto responsable de principio a fin. Sin intermediarios ni estructuras jerárquicas que diluyan la responsabilidad.' },
              { title: 'Apertura radical', desc: 'Compartimos el proceso con el cliente en tiempo real: bocetos, dudas, alternativas descartadas. La transparencia genera confianza.' },
              { title: 'Aprendizaje continuo', desc: 'Hacemos viajes de estudio anuales, invitamos a conferenciantes y mantenemos una biblioteca activa. La curiosidad es parte del trabajo.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ borderTop: `1px solid rgba(0,0,0,0.15)`, paddingTop: '1.5rem' }}>
                <div style={{ fontWeight: 500, fontSize: '1rem', color: text, marginBottom: '0.75rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.75 }}>{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 500 }}>Reconocimiento</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, color: text, letterSpacing: '-0.02em' }}>
            Publicaciones
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{ display: 'flex', gap: '2.5rem', padding: '1.25rem 0', borderBottom: '1px solid rgba(0,0,0,0.08)', alignItems: 'center', flexWrap: 'wrap', cursor: 'pointer' }}
              whileHover={{ paddingLeft: '0.5rem' }}
            >
              <span style={{ fontSize: '0.82rem', color: mid, fontWeight: 300, minWidth: '40px' }}>{pub.year}</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: dark, minWidth: '140px' }}>{pub.pub}</span>
              <span style={{ fontSize: '0.88rem', color: '#555', flex: 1 }}>{pub.title}</span>
              <span style={{ fontSize: '0.8rem', color: mid }}>→</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.08)', background: dark }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div style={{ fontSize: '0.7rem', color: 'rgba(244,244,240,0.3)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>¿Nos conocemos?</div>
          <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 200, color: '#f4f4f0', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Cuéntanos tu proyecto
          </h3>
          <p style={{ color: 'rgba(244,244,240,0.45)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>Primera consulta sin compromiso.</p>
          <Link href="/demos/arquitecto/contacto" style={{ display: 'inline-block', background: '#f4f4f0', color: dark, fontWeight: 600, fontSize: '0.85rem', padding: '1rem 3rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Contactar
          </Link>
        </motion.div>
      </section>
    </main>
  )
}

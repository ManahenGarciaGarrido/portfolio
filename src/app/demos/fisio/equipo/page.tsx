'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const BG = '#001f3f'
const ACCENT = '#00c896'
const TEXT = '#e8f8f4'
const CARD = '#002a52'
const CARD2 = '#003366'

const fisioterapeutas = [
  {
    nombre: 'Dr. Alejandro Torres',
    titulo: 'Fisioterapeuta & Director Clínico',
    especialidad: 'Lesiones de Alta Competición',
    educacion: 'Graduado en Fisioterapia (UCM) · Máster en Fisioterapia Deportiva (UCAM) · Doctor en Ciencias del Deporte',
    años: 18,
    deporte: 'Atletismo y deportes de resistencia',
    seed: 'physiotherapist1',
    bio: 'Fundador de Kinesio Sport y referente en la rehabilitación de atletas de élite. Ha trabajado con selecciones nacionales y equipos de primera división.',
  },
  {
    nombre: 'Dra. Carmen Sánchez',
    titulo: 'Fisioterapeuta Especialista en Osteopatía',
    especialidad: 'Osteopatía y Columna Vertebral',
    educacion: 'Graduada en Fisioterapia (UEM) · Diplomada en Osteopatía (EUOSTEON) · Especialista en Fisioterapia Neurológica',
    años: 14,
    deporte: 'Golf y deportes de raqueta',
    seed: 'physiotherapist2',
    bio: 'Experta en el tratamiento global del sistema musculoesquelético mediante osteopatía. Ponente habitual en congresos nacionales de fisioterapia.',
  },
  {
    nombre: 'Pablo Fernández',
    titulo: 'Fisioterapeuta Deportivo',
    especialidad: 'Rodilla y Miembro Inferior',
    educacion: 'Graduado en Fisioterapia (URJC) · Máster en Fisioterapia Ortopédica · Certificado en RPG y Kinesiotaping',
    años: 10,
    deporte: 'Fútbol y deportes de equipo',
    seed: 'physiotherapist3',
    bio: 'Especialista en lesiones de rodilla y tobillo. Ex-fisioterapeuta del Real Madrid B y colaborador de la Federación Española de Fútbol.',
  },
  {
    nombre: 'Dra. Lucía Herrero',
    titulo: 'Fisioterapeuta y Pilates Clínico',
    especialidad: 'Suelo Pélvico y Columna',
    educacion: 'Graduada en Fisioterapia (UAH) · Máster en Fisioterapia del Suelo Pélvico · Instructora certificada de Pilates Clínico',
    años: 9,
    deporte: 'Natación y deportes acuáticos',
    seed: 'physiotherapist4',
    bio: 'Referente en fisioterapia del suelo pélvico y Pilates Clínico. Combina el ejercicio terapéutico con técnicas manuales para resultados duraderos.',
  },
  {
    nombre: 'Miguel Ortega',
    titulo: 'Fisioterapeuta Deportivo Senior',
    especialidad: 'Hombro y Miembro Superior',
    educacion: 'Graduado en Fisioterapia (UCM) · Máster en Fisioterapia Deportiva (UPM) · Especialista en Dry Needling y EPI',
    años: 12,
    deporte: 'Natación y tenis',
    seed: 'physiotherapist5',
    bio: 'Especialista en patología del hombro y tratamientos de última generación como la EPI (electrólisis percutánea intratisular) y el dry needling.',
  },
  {
    nombre: 'Ana Ramírez',
    titulo: 'Fisioterapeuta y Terapeuta Manual',
    especialidad: 'Neurología y Rehabilitación',
    educacion: 'Graduada en Fisioterapia (UVA) · Máster en Fisioterapia Neurológica · Certificada en Bobath y Método McKenzie',
    años: 8,
    deporte: 'Baloncesto y deportes de equipo',
    seed: 'physiotherapist6',
    bio: 'Experta en rehabilitación neurológica y fisioterapia pediátrica. Aplica el concepto Bobath para la rehabilitación de pacientes con lesiones neurológicas.',
  },
]

const valores = [
  { icon: '🎯', titulo: 'Especialización', desc: 'Cada profesional de nuestro equipo tiene formación avanzada en su área de especialización.' },
  { icon: '🔬', titulo: 'Evidencia Científica', desc: 'Aplicamos únicamente técnicas con respaldo científico demostrado en estudios clínicos.' },
  { icon: '🤝', titulo: 'Trato Personalizado', desc: 'Cada paciente recibe atención individualizada y un plan adaptado a sus objetivos.' },
  { icon: '📈', titulo: 'Formación Continua', desc: 'Todo el equipo se actualiza constantemente con los últimos avances de la fisioterapia.' },
]

export default function FisioEquipo() {
  return (
    <main style={{ background: BG, color: TEXT, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* HEADER */}
      <section style={{ background: CARD, padding: '4rem 2rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nuestros Profesionales</p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: '1rem' }}>
            El Equipo Detrás de tu Recuperación
          </h1>
          <p style={{ color: TEXT, opacity: 0.75, maxWidth: 600, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Fisioterapeutas titulados, con años de experiencia y pasión por el deporte. Un equipo multidisciplinar comprometido con tu salud y tu rendimiento.
          </p>
        </motion.div>
      </section>

      {/* TEAM GRID */}
      <section style={{ padding: '5rem 2rem' }}>
        <div className="r-container">
          <div className="r-grid-3">
            {fisioterapeutas.map((f, i) => (
              <motion.div
                key={f.nombre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
                style={{ background: CARD, borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
              >
                <div style={{ height: 300, overflow: 'hidden', position: 'relative' }}>
                  <img src={`https://picsum.photos/seed/${f.seed}/300/380`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={f.nombre} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', padding: '1.5rem 1rem 1rem' }}>
                    <div style={{ background: ACCENT, color: '#001f3f', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, display: 'inline-block' }}>
                      {f.especialidad}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>{f.nombre}</h3>
                  <p style={{ color: ACCENT, fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>{f.titulo}</p>
                  <p style={{ color: TEXT, opacity: 0.75, fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>{f.bio}</p>
                  <div style={{ borderTop: `1px solid ${ACCENT}20`, paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ color: ACCENT, fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>FORMACIÓN</span>
                    </div>
                    <p style={{ color: TEXT, opacity: 0.6, fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>{f.educacion}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                      <div>
                        <div style={{ color: ACCENT, fontSize: '0.75rem', fontWeight: 700 }}>EXPERIENCIA</div>
                        <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem' }}>{f.años} años</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ color: ACCENT, fontSize: '0.75rem', fontWeight: 700 }}>DEPORTE</div>
                        <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem' }}>{f.deporte}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section style={{ background: CARD, padding: '5rem 2rem' }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Por Qué Elegirnos</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff' }}>Nuestros Valores Profesionales</h2>
          </motion.div>
          <div className="r-grid-4">
            {valores.map((v, i) => (
              <motion.div
                key={v.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '2rem 1rem' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>{v.titulo}</h3>
                <p style={{ color: TEXT, opacity: 0.7, lineHeight: 1.6, fontSize: '0.9rem' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINIC PHOTOS */}
      <section style={{ padding: '5rem 2rem', background: BG }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '2.5rem' }}
          >
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Nuestras Instalaciones</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff' }}>Una Clínica de Referencia en Madrid</h2>
            <p style={{ color: TEXT, opacity: 0.7, maxWidth: 560, margin: '1rem auto 0', lineHeight: 1.7 }}>
              Más de 800m² distribuidos en tres centros modernos y completamente equipados con la última tecnología en fisioterapia y rehabilitación.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)', marginBottom: '2rem' }}
          >
            <img src="https://picsum.photos/seed/physio-clinic/900/500" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Instalaciones de Kinesio Sport" />
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '⚕️', feature: 'Salas de tratamiento individuales', desc: 'Privacidad garantizada en cada sesión' },
              { icon: '🏋️', feature: 'Sala de ejercicios terapéuticos', desc: 'Equipada para rehabilitación y Pilates' },
              { icon: '💡', feature: 'Tecnología de última generación', desc: 'Equipos de electroterapia y ondas de choque' },
              { icon: '♿', feature: 'Accesibilidad total', desc: 'Instalaciones adaptadas para todos' },
            ].map(item => (
              <div key={item.feature} style={{ background: CARD2, borderRadius: 12, padding: '1.5rem', display: 'flex', gap: '1rem' }}>
                <div style={{ fontSize: '1.8rem' }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.feature}</div>
                  <div style={{ color: TEXT, opacity: 0.6, fontSize: '0.85rem' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: ACCENT, padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#001f3f', marginBottom: '1rem' }}>
          Conoce a Tu Fisioterapeuta
        </h2>
        <p style={{ color: '#001f3f', opacity: 0.8, fontSize: '1rem', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
          En la primera consulta podrás conocer al profesional que se encargará de tu recuperación y resolver todas tus dudas.
        </p>
        <Link href="/demos/fisio/reservar">
          <button style={{ background: '#001f3f', color: ACCENT, border: 'none', padding: '1rem 3rem', borderRadius: 8, fontSize: '1.05rem', fontWeight: 700, cursor: 'pointer' }}>
            Reservar Primera Consulta
          </button>
        </Link>
      </section>
    </main>
  )
}

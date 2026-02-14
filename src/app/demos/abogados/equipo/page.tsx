'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const BG = '#0d1b2a'
const ACCENT = '#c9a227'
const TEXT = '#e8e8e8'
const DARK = '#071220'

const attorneys = [
  { name: 'Ricardo Mendoza Álvarez', specialty: 'Derecho Mercantil & Civil', years: 28, bar: 'Col. Nº 28.456', edu: 'Universidad Complutense de Madrid', seed: 'attorney1' },
  { name: 'Isabel Castro Ferrer', specialty: 'Derecho Penal & Laboral', years: 24, bar: 'Col. Nº 28.891', edu: 'Universidad de Salamanca', seed: 'attorney2' },
  { name: 'Fernando Ruiz Montoya', specialty: 'Derecho Fiscal & Tributario', years: 21, bar: 'Col. Nº 28.234', edu: 'Universidad de Sevilla', seed: 'attorney3' },
  { name: 'Lucía Herrero Vidal', specialty: 'Derecho Inmobiliario', years: 16, bar: 'Col. Nº 28.672', edu: 'ICADE - Pontificia Comillas', seed: 'attorney4' },
  { name: 'Pablo Jiménez Ros', specialty: 'Derecho Civil & Familia', years: 14, bar: 'Col. Nº 28.908', edu: 'Universidad Autónoma de Madrid', seed: 'attorney5' },
  { name: 'Carmen Vega Morales', specialty: 'Derecho Penal Económico', years: 12, bar: 'Col. Nº 28.445', edu: 'Universidad de Navarra', seed: 'attorney6' },
  { name: 'Alejandro Díaz Parra', specialty: 'Derecho Laboral & RRHH', years: 10, bar: 'Col. Nº 28.331', edu: 'Universidad Carlos III', seed: 'attorney7' },
  { name: 'Natalia Ortega Blanco', specialty: 'Propiedad Intelectual', years: 9, bar: 'Col. Nº 28.789', edu: 'Universidad Autónoma de Madrid', seed: 'attorney8' },
]

const managingPartners = [
  {
    name: 'Ricardo Mendoza Álvarez',
    role: 'Socio Director & Fundador',
    specialty: 'Derecho Mercantil & Civil',
    years: 28,
    bar: 'Col. Nº 28.456 ICAM',
    edu: 'Licenciado en Derecho, UCM. Máster en Derecho Mercantil, IE Business School.',
    seed: 'attorney1',
    bio: 'Ricardo Mendoza fundó el despacho en 1999 tras una carrera en los principales bufetes de Madrid y Nueva York. Con más de 28 años de experiencia, es reconocido como uno de los abogados mercantilistas más destacados de España. Ha liderado operaciones M&A por valor superior a €2.000 millones y ha representado a clientes ante el Tribunal Supremo en más de 40 ocasiones.',
    recognitions: ['Chambers & Partners Top 100', 'Best Lawyers in Spain 2024', 'Legal 500 Leading Individual'],
    languages: ['Español', 'Inglés', 'Francés'],
  },
  {
    name: 'Isabel Castro Ferrer',
    role: 'Socia Directora',
    specialty: 'Derecho Penal & Laboral',
    years: 24,
    bar: 'Col. Nº 28.891 ICAM',
    edu: 'Licenciada en Derecho, Universidad de Salamanca. Máster en Derecho Penal, Universidad Pompeu Fabra.',
    seed: 'attorney2',
    bio: 'Isabel Castro se incorporó al despacho en 2004 y fue nombrada socia directora en 2012. Especialista en defensa penal de alta complejidad y derecho laboral, ha representado a directivos de grandes corporaciones en procedimientos ante la Audiencia Nacional y ha negociado EREs de más de 5.000 trabajadores. Su labor en defensa de víctimas de violencia laboral es referente en el sector.',
    recognitions: ['Chambers Europe - Band 1', 'IFLR1000 Award', 'Top 50 Abogadas España 2025'],
    languages: ['Español', 'Inglés', 'Italiano'],
  },
]

export default function EquipoPage() {
  return (
    <div style={{ background: BG, color: TEXT, overflowX: 'hidden' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${ACCENT}10, transparent)`, pointerEvents: 'none' }} />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: ACCENT, letterSpacing: 3, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', marginBottom: 20 }}>El equipo</motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(32px, 6vw, 70px)', fontWeight: 900, fontFamily: 'Georgia, serif', lineHeight: 1.05, marginBottom: 20 }}
        >
          NUESTROS ABOGADOS
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3 }} style={{ width: 60, height: 2, background: ACCENT, margin: '0 auto 24px' }} />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ color: `${TEXT}70`, fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
          Profesionales de primer nivel comprometidos con la excelencia jurídica y los intereses de nuestros clientes
        </motion.p>
      </section>

      {/* Managing Partners */}
      <section style={{ padding: '40px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
          <p style={{ color: ACCENT, letterSpacing: 3, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', marginBottom: 12 }}>Dirección</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, fontFamily: 'Georgia, serif' }}>Socios Directores</h2>
          <div style={{ width: 40, height: 2, background: ACCENT, marginTop: 12 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: 32 }}>
          {managingPartners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: '#0a1520', border: `1px solid ${ACCENT}30`, display: 'grid', gridTemplateColumns: '180px 1fr', overflow: 'hidden' }}
            >
              <div style={{ overflow: 'hidden', position: 'relative' }}>
                <img
                  src={`https://picsum.photos/seed/${partner.seed}/350/450`}
                  alt={partner.name}
                  style={{ objectFit: 'cover', aspectRatio: '3/4', width: '100%', height: '100%', display: 'block', filter: 'grayscale(15%)' }}
                />
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ width: 30, height: 2, background: ACCENT, marginBottom: 16 }} />
                <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 4, fontFamily: 'Georgia, serif', lineHeight: 1.3 }}>{partner.name}</h3>
                <p style={{ color: ACCENT, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>{partner.role}</p>
                <p style={{ color: `${TEXT}60`, fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>{partner.bio.slice(0, 220)}...</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                  {partner.recognitions.map((r) => (
                    <span key={r} style={{ background: `${ACCENT}12`, border: `1px solid ${ACCENT}30`, borderRadius: 2, padding: '2px 8px', fontSize: 10, color: `${TEXT}70` }}>{r}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {partner.languages.map((lang) => (
                    <span key={lang} style={{ fontSize: 10, color: `${TEXT}50`, background: `${TEXT}08`, borderRadius: 2, padding: '2px 8px' }}>{lang}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All attorneys grid */}
      <section style={{ padding: '40px 24px 80px', background: DARK, maxWidth: '100%', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <p style={{ color: ACCENT, letterSpacing: 3, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', marginBottom: 12 }}>Equipo completo</p>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, fontFamily: 'Georgia, serif' }}>Todos nuestros abogados</h2>
            <div style={{ width: 40, height: 2, background: ACCENT, marginTop: 12 }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
            {attorneys.map((atty, i) => (
              <motion.div
                key={atty.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ borderColor: ACCENT }}
                style={{ background: BG, border: `1px solid ${ACCENT}15`, overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.3s' }}
              >
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={`https://picsum.photos/seed/${atty.seed}/350/450`}
                    alt={atty.name}
                    style={{ objectFit: 'cover', aspectRatio: '3/4', width: '100%', display: 'block', filter: 'grayscale(20%)', transition: 'transform 0.4s, filter 0.4s' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 50%, #0d1b2a)', opacity: 0.8 }} />
                  {/* LinkedIn icon overlay */}
                  <div style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, background: `${ACCENT}90`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 900, borderRadius: 4 }}>
                    in
                  </div>
                </div>
                <div style={{ padding: '16px 16px 20px' }}>
                  <div style={{ width: 24, height: 2, background: ACCENT, marginBottom: 10 }} />
                  <h3 style={{ fontSize: 13, fontWeight: 800, marginBottom: 4, fontFamily: 'Georgia, serif', lineHeight: 1.3 }}>{atty.name}</h3>
                  <p style={{ color: ACCENT, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{atty.specialty}</p>
                  <p style={{ color: `${TEXT}50`, fontSize: 11, marginBottom: 4 }}>{atty.years} años de experiencia</p>
                  <p style={{ color: `${TEXT}35`, fontSize: 10, letterSpacing: 0.5 }}>{atty.bar} · ICAM</p>
                  <p style={{ color: `${TEXT}40`, fontSize: 10, marginTop: 4 }}>{atty.edu}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, fontFamily: 'Georgia, serif', marginBottom: 16 }}>Nuestros valores</h2>
            <div style={{ width: 40, height: 2, background: ACCENT, margin: '0 auto' }} />
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {[
              { icon: '🔒', title: 'Confidencialidad', desc: 'Cada caso se trata con absoluta discreción. Tu privacidad es sagrada para nosotros.' },
              { icon: '⚡', title: 'Eficiencia', desc: 'Resultados rápidos sin sacrificar calidad. Sabemos que el tiempo tiene valor en el derecho.' },
              { icon: '📚', title: 'Especialización', desc: 'Equipos dedicados a cada área del derecho, con formación continua y actualización permanente.' },
              { icon: '🤝', title: 'Compromiso', desc: 'Nos implicamos en cada caso como si fuera propio. Tu causa es la nuestra.' },
            ].map((val) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', padding: '32px 24px', border: `1px solid ${ACCENT}15` }}
              >
                <div style={{ fontSize: 40, marginBottom: 20 }}>{val.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12, fontFamily: 'Georgia, serif', color: ACCENT }}>{val.title}</h3>
                <p style={{ color: `${TEXT}60`, fontSize: 14, lineHeight: 1.7 }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team CTA */}
      <section style={{ padding: '60px 24px 80px', background: DARK, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, fontFamily: 'Georgia, serif', marginBottom: 16 }}>¿Quieres formar parte del equipo?</h2>
          <p style={{ color: `${TEXT}60`, marginBottom: 32, fontSize: 15 }}>Siempre buscamos talento jurídico excepcional para unirse a nuestro despacho</p>
          <Link href="/demos/abogados/consulta" style={{ background: ACCENT, color: '#0d1b2a', padding: '14px 36px', fontWeight: 800, textDecoration: 'none', fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', display: 'inline-block' }}>
            Enviar candidatura
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

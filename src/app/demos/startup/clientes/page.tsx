'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ACCENT = '#6c00ff'
const SECONDARY = '#00d4ff'
const BG = '#0f0020'

const caseStudies = [
  {
    company: 'TechCorp España',
    industry: 'Tecnología B2B',
    img: 'company1',
    logo: 'TC',
    challenge: 'Gestionar 50.000 clientes con un equipo de 12 personas era imposible. Los procesos manuales consumían el 70% del tiempo del equipo.',
    kpis: [{ metric: '+340%', label: 'Productividad del equipo' }, { metric: '-78%', label: 'Tiempo en tareas manuales' }, { metric: '€2.3M', label: 'Ahorro anual' }],
    quote: 'NexusAI transformó completamente cómo operamos. Lo que antes hacían 12 personas, ahora lo hacemos con 4.',
    person: 'Carlos Ruiz, CTO',
  },
  {
    company: 'DataFlow Solutions',
    industry: 'Análisis de datos',
    img: 'company2',
    logo: 'DF',
    challenge: 'Los reportes de clientes tardaban 3 días en generarse. Los clientes pedían datos en tiempo real y no podíamos dárselos.',
    kpis: [{ metric: '< 5min', label: 'Tiempo de generación de reportes' }, { metric: '98%', label: 'Satisfacción cliente' }, { metric: '×4', label: 'Capacidad de clientes' }],
    quote: 'Pasamos de hacer reportes en 3 días a entregarlos en 5 minutos. Nuestros clientes no pueden creerlo.',
    person: 'Ana Gómez, CEO',
  },
  {
    company: 'GrowthCo',
    industry: 'Marketing Digital',
    img: 'company3',
    logo: 'GC',
    challenge: 'Coordinar campañas en 12 canales diferentes manualmente generaba errores costosos y oportunidades perdidas.',
    kpis: [{ metric: '+220%', label: 'ROI en campañas' }, { metric: '0', label: 'Errores de sincronización' }, { metric: '3 días', label: 'Tiempo de onboarding clientes' }],
    quote: 'La coordinación automática entre canales nos dio una ventaja competitiva que nuestros rivales no pueden igualar.',
    person: 'Miguel Torres, Director de Operaciones',
  },
  {
    company: 'ScaleUp Ventures',
    industry: 'Capital Riesgo',
    img: 'company4',
    logo: 'SV',
    challenge: 'Analizar 200+ startups al mes para inversión requería un equipo de analistas enorme y aún así perdíamos oportunidades.',
    kpis: [{ metric: '200+', label: 'Startups analizadas/mes' }, { metric: '×6', label: 'Velocidad de due diligence' }, { metric: '+15%', label: 'Retorno del fondo' }],
    quote: 'La IA de NexusAI procesa datos que a nuestro equipo le llevaría semanas. Es como tener 50 analistas más.',
    person: 'Laura Sánchez, Managing Partner',
  },
]

const videoTestimonials = [
  { name: 'Carlos Ruiz', role: 'CTO de TechCorp', seed: 'video1', duration: '3:24' },
  { name: 'Ana Gómez', role: 'CEO de DataFlow', seed: 'video2', duration: '4:11' },
  { name: 'Miguel Torres', role: 'Dir. Operaciones GrowthCo', seed: 'video3', duration: '2:58' },
]

const allCompanies = ['TechCorp', 'DataFlow', 'GrowthCo', 'ScaleUp', 'Inditex', 'BBVA', 'Telefónica', 'Iberdrola', 'Repsol', 'Mango', 'Vueling', 'Meliá']

export default function ClientesPage() {
  return (
    <div style={{ background: BG, color: '#fff', overflowX: 'hidden' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${ACCENT}20, transparent)`, pointerEvents: 'none' }} />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ color: SECONDARY, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', fontSize: 13, marginBottom: 20 }}
        >
          Clientes
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', maxWidth: 800, margin: '0 auto 20px' }}
        >
          EMPRESAS QUE YA{' '}
          <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${SECONDARY})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            CONFÍAN EN NOSOTROS
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{ color: '#ffffff70', fontSize: 18, maxWidth: 560, margin: '0 auto' }}
        >
          Más de 12.000 empresas han transformado sus operaciones con NexusAI
        </motion.p>
      </section>

      {/* Logos */}
      <section style={{ padding: '20px 24px 60px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', maxWidth: 900, margin: '0 auto' }}>
          {allCompanies.map((c) => (
            <motion.div
              key={c}
              whileHover={{ scale: 1.05, color: '#fff' }}
              style={{ background: '#1a003a', border: `1px solid ${ACCENT}25`, borderRadius: 10, padding: '10px 22px', fontSize: 14, fontWeight: 700, color: '#ffffff50', letterSpacing: 1 }}
            >
              {c}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="r-section-sm" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, marginBottom: 60, textAlign: 'center' }}
        >
          Casos de éxito reales
        </motion.h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'center', direction: i % 2 === 0 ? 'ltr' : 'rtl' }}
            >
              <div style={{ direction: 'ltr', borderRadius: 20, overflow: 'hidden', border: `1px solid ${ACCENT}30`, boxShadow: `0 20px 60px ${ACCENT}20` }}>
                <img src={`https://picsum.photos/seed/${cs.img}/800/450`} alt={cs.company} style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ direction: 'ltr' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, background: `linear-gradient(135deg, ${ACCENT}, ${SECONDARY})`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 14, flexShrink: 0 }}>
                    {cs.logo}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 20 }}>{cs.company}</div>
                    <div style={{ fontSize: 13, color: '#ffffff60' }}>{cs.industry}</div>
                  </div>
                </div>
                <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}25`, borderRadius: 12, padding: '16px 20px', marginBottom: 24 }}>
                  <div style={{ fontSize: 11, color: SECONDARY, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>EL RETO</div>
                  <p style={{ color: '#ffffff80', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{cs.challenge}</p>
                </div>
                <div className="r-grid-3" style={{ gap: 12, marginBottom: 24 }}>
                  {cs.kpis.map((kpi) => (
                    <div key={kpi.label} style={{ textAlign: 'center', background: '#1a003a', borderRadius: 12, padding: '14px 8px', border: `1px solid ${ACCENT}20` }}>
                      <div style={{ fontSize: 22, fontWeight: 900, color: SECONDARY, lineHeight: 1 }}>{kpi.metric}</div>
                      <div style={{ fontSize: 11, color: '#ffffff50', marginTop: 6, lineHeight: 1.4 }}>{kpi.label}</div>
                    </div>
                  ))}
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, margin: 0 }}>
                  <p style={{ color: '#ffffffcc', fontSize: 15, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 8 }}>"{cs.quote}"</p>
                  <cite style={{ fontSize: 13, color: '#ffffff60', fontStyle: 'normal' }}>— {cs.person}</cite>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="r-section" style={{ background: '#12002a' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 50 }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, marginBottom: 12 }}>Testimonios en vídeo</h2>
          <p style={{ color: '#ffffff60', fontSize: 16 }}>Escucha directamente de quienes ya confían en NexusAI</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
          {videoTestimonials.map((vid) => (
            <motion.div
              key={vid.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', cursor: 'pointer', border: `1px solid ${ACCENT}30` }}
            >
              <img src={`https://picsum.photos/seed/${vid.seed}/600/380`} alt={vid.name} style={{ width: '100%', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, #0f002099)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: `${ACCENT}cc`, border: '3px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, backdropFilter: 'blur(4px)' }}>
                  ▶
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{vid.name}</div>
                <div style={{ fontSize: 13, color: '#ffffff80', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
                  <span>{vid.role}</span>
                  <span style={{ background: '#00000060', borderRadius: 4, padding: '2px 8px', fontSize: 12 }}>{vid.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="r-section" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: `linear-gradient(135deg, ${ACCENT}25, ${SECONDARY}10)`, border: `1px solid ${ACCENT}30`, borderRadius: 24, padding: 'clamp(32px,6vw,60px) clamp(20px,5vw,40px)', maxWidth: 700, margin: '0 auto' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, marginBottom: 16 }}>
            Únete a las empresas que ya crecen con NexusAI
          </h2>
          <p style={{ color: '#ffffff70', marginBottom: 36, fontSize: 16 }}>Empieza tu prueba gratuita de 14 días. Sin tarjeta de crédito.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/demos/startup/precios" style={{ background: `linear-gradient(135deg, ${ACCENT}, #9b00ff)`, color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 16, boxShadow: `0 0 40px ${ACCENT}40`, display: 'inline-block' }}>
              EMPEZAR GRATIS
            </Link>
            <Link href="/demos/startup/contacto" style={{ background: 'transparent', border: `1px solid #ffffff30`, color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', fontSize: 16, display: 'inline-block' }}>
              Ver demo en vivo
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

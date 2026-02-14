'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const accent = '#00ff88'
const bg = '#000'
const text = '#fff'

const caseStudies = [
  {
    seed: 'casestudy1',
    client: 'ModaRápida S.L.',
    industry: 'E-Commerce de Moda',
    serviceTag: 'Paid Media',
    challenge: 'Un e-commerce de moda española con buen producto pero incapaz de escalar sus ventas online. ROAS de 1.8x y CAC de 68€, con presupuesto de publicidad disparado sin resultados proporcionales.',
    solution: 'Reestructuramos completamente las campañas de Meta Ads con audiencias de lookalike de compradores reales, creatividades UGC y un embudo de retargeting de 5 fases. Implementamos Klaviyo con flujos automatizados de recuperación de carrito y post-compra.',
    kpis: [
      { label: 'ROAS', before: '1.8x', after: '7.4x', arrow: '↑' },
      { label: 'Ventas Mensuales', before: '28.000€', after: '124.000€', arrow: '↑' },
      { label: 'CAC', before: '68€', after: '19€', arrow: '↓' },
    ],
    duration: '4 meses',
    result: '+340% en ventas mensuales',
    quote: '"Digital+ transformó nuestro negocio. Pasamos de sobrevivir a escalar."',
    quoteAuthor: 'María T., CEO ModaRápida',
  },
  {
    seed: 'casestudy2',
    client: 'LegalTech Pro',
    industry: 'SaaS B2B · Legaltech',
    serviceTag: 'SEO + Paid Media',
    challenge: 'Startup de legaltech con un producto excelente pero sin visibilidad online. CPC de 18€ en Google Ads para keywords competidas, pipeline de ventas escaso y 0 tráfico orgánico.',
    solution: 'Estrategia omnicanal: SEO de largo plazo con contenido de autoridad legal + campañas de LinkedIn Ads segmentadas a directores legales y CFOs + Google Ads con match types exactos y pujas por conversión asistida.',
    kpis: [
      { label: 'Tráfico Orgánico', before: '340/mes', after: '8.400/mes', arrow: '↑' },
      { label: 'CPL', before: '142€', after: '57€', arrow: '↓' },
      { label: 'Pipeline Generado', before: '180k€', after: '2.4M€', arrow: '↑' },
    ],
    duration: '8 meses',
    result: '2.4M€ de pipeline en 8 meses',
    quote: '"Pasamos de mendigos del SEO a referentes del sector en menos de un año."',
    quoteAuthor: 'Alejandro M., CMO LegalTech Pro',
  },
  {
    seed: 'casestudy3',
    client: 'GastroGroup Madrid',
    industry: 'Hostelería · Grupo Restauración',
    serviceTag: 'Social Media + Web',
    challenge: 'Grupo de 3 restaurantes con presencia digital nula. Sin web actualizada, sin redes sociales activas y completamente dependientes de reservas por teléfono y plataformas de terceros que se llevaban el 25% de comisión.',
    solution: 'Diseñamos y desarrollamos una web con motor de reservas propio integrado con TheFork. Lanzamos Instagram y TikTok con contenido de cocina en directo, proceso de elaboración de platos y behind-the-scenes. Campañas de Meta para eventos especiales.',
    kpis: [
      { label: 'Reservas Directas', before: '12%', after: '68%', arrow: '↑' },
      { label: 'Seguidores IG', before: '340', after: '28.400', arrow: '↑' },
      { label: 'Ticket Medio', before: '38€', after: '54€', arrow: '↑' },
    ],
    duration: '6 meses',
    result: '+42% de facturación total',
    quote: '"Nuestros restaurantes tienen lista de espera por primera vez en 12 años."',
    quoteAuthor: 'Roberto S., Director GastroGroup',
  },
  {
    seed: 'casestudy4',
    client: 'ClinicaSalud Plus',
    industry: 'Salud · Clínicas Privadas',
    serviceTag: 'SEO + Email Marketing',
    challenge: 'Red de clínicas privadas con 8 centros en Madrid cuya presencia digital se limitaba a un sitio web anticuado de 2015. Dependientes de pacientes referidos y sin captación digital estructurada.',
    solution: 'SEO local especializado para cada centro con fichas de Google Business optimizadas. Contenido médico de autoridad para keywords de intención de búsqueda alta. CRM médico con Hubspot y flujos de email para seguimiento de pacientes y recordatorios.',
    kpis: [
      { label: 'Pacientes Nuevos/Mes', before: '45', after: '180', arrow: '↑' },
      { label: 'Posición Google', before: '#18', after: '#2', arrow: '↑' },
      { label: 'Tasa de Retención', before: '34%', after: '71%', arrow: '↑' },
    ],
    duration: '10 meses',
    result: '+300% nuevos pacientes mensuales',
    quote: '"El ROI del primer año fue de 14x. Una inversión que se paga sola."',
    quoteAuthor: 'Dr. Pablo V., Director Médico',
  },
]

type CaseStudy = typeof caseStudies[0]

const filters = ['Todos', 'Paid Media', 'SEO + Paid Media', 'Social Media + Web', 'SEO + Email Marketing']

function CaseCard({ c }: { c: CaseStudy }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}
    >
      {/* Cover Image */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={`https://picsum.photos/seed/${c.seed}/900/500`}
          alt={c.client}
          style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block', filter: 'brightness(0.45) grayscale(60%)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.9) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <span style={{ background: accent, color: bg, padding: '0.25rem 0.75rem', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {c.serviceTag}
            </span>
            <span style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)', padding: '0.25rem 0.75rem', borderRadius: 4, fontSize: '0.75rem', letterSpacing: '0.05em' }}>
              {c.industry}
            </span>
          </div>
          <h2 style={{ color: text, fontSize: '1.8rem', fontWeight: 900, margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>{c.client}</h2>
          <div style={{ color: accent, fontSize: '1.3rem', fontWeight: 900 }}>{c.result}</div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        <div>
          <h3 style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 0.75rem' }}>El Reto</h3>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>{c.challenge}</p>
          <h3 style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 0.75rem' }}>La Solución</h3>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{c.solution}</p>
        </div>
        <div>
          <h3 style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 1rem' }}>Resultados en {c.duration}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {c.kpis.map(kpi => (
              <div key={kpi.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.1)', borderRadius: 8 }}>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>{kpi.label}</div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.9rem', textDecoration: 'line-through' }}>{kpi.before}</span>
                    <span style={{ color: accent, fontSize: '1.1rem', fontWeight: 900 }}>{kpi.after}</span>
                  </div>
                </div>
                <span style={{ color: accent, fontSize: '1.4rem', fontWeight: 900 }}>{kpi.arrow}</span>
              </div>
            ))}
          </div>
          <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: '1rem', marginBottom: '1.5rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 0.5rem' }}>{c.quote}</p>
            <div style={{ color: accent, fontSize: '0.8rem', fontWeight: 600 }}>{c.quoteAuthor}</div>
          </div>
          <motion.button
            whileHover={{ scale: 1.04, background: 'rgba(0,255,136,0.15)' }}
            style={{ border: `1px solid ${accent}`, color: accent, background: 'transparent', padding: '0.75rem 1.5rem', borderRadius: 4, cursor: 'pointer', fontFamily: 'sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background 0.2s' }}
          >
            VER CASO COMPLETO →
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function CasosPage() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true })

  const filtered = activeFilter === 'Todos' ? caseStudies : caseStudies.filter(c => c.serviceTag === activeFilter)

  return (
    <main style={{ background: bg, color: text, fontFamily: "'Inter', 'Helvetica Neue', sans-serif", minHeight: '100vh' }}>
      {/* HEADER */}
      <div style={{ padding: '5rem 2rem 3rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Prueba social que importa
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, margin: '0 0 1.5rem', letterSpacing: '-0.03em', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Casos de<br />Éxito
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 550, margin: 0 }}>
              Estos no son casos promedio. Son los resultados que conseguimos cuando la estrategia, la ejecución y los datos se alinean perfectamente.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FILTER */}
      <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', overflowX: 'auto' }}>
        <div style={{ display: 'flex', gap: '0.75rem', maxWidth: 900, margin: '0 auto', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 100,
                border: activeFilter === f ? `1px solid ${accent}` : '1px solid rgba(255,255,255,0.15)',
                background: activeFilter === f ? accent : 'transparent',
                color: activeFilter === f ? bg : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                fontFamily: 'sans-serif',
                fontSize: '0.85rem',
                fontWeight: activeFilter === f ? 700 : 400,
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* CASE STUDIES */}
      <div style={{ padding: '3rem 2rem 5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {filtered.map(c => <CaseCard key={c.seed} c={c} />)}
        </div>
      </div>

      {/* CTA */}
      <div ref={ctaRef} style={{ background: '#111', padding: '5rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(0,255,136,0.1)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            ¿Tu empresa aquí?
          </div>
          <h2 style={{ color: text, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, margin: '0 0 1.5rem', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
            ¿Quieres Resultados Así?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Primera auditoría gratuita de 45 minutos. Te decimos exactamente qué oportunidades estás dejando sobre la mesa.
          </p>
          <motion.a
            href="/demos/agencia/contacto"
            whileHover={{ scale: 1.05 }}
            style={{ display: 'inline-block', background: accent, color: bg, padding: '1rem 2.5rem', borderRadius: 4, textDecoration: 'none', fontWeight: 900, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            Solicitar Auditoría Gratuita
          </motion.a>
        </motion.div>
      </div>
    </main>
  )
}

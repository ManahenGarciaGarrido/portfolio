'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const BG = '#0d1b2a'
const ACCENT = '#c9a227'
const TEXT = '#e8e8e8'
const DARK = '#071220'

const areas = [
  {
    name: 'Derecho Civil',
    icon: '⚖️',
    img: 'legal-area1',
    color: '#b8930f',
    description1: 'El Derecho Civil constituye el núcleo del ordenamiento jurídico privado, regulando las relaciones entre particulares en aspectos tan fundamentales como la familia, la propiedad, los contratos y las sucesiones. En Mendoza & Asociados, contamos con un equipo especializado que ha gestionado más de 500 casos civiles con una tasa de éxito superior al 96%.',
    description2: 'Nuestra experiencia abarca desde la redacción y revisión de contratos complejos hasta la representación en procedimientos de divorcio contencioso, pasando por la gestión de herencias y testamentos, conflictos entre comunidades de propietarios y reclamaciones de daños y perjuicios. Cada caso recibe atención personalizada y estrategia a medida.',
    services: ['Contratos civiles y mercantiles', 'Divorcios y separaciones', 'Herencias y testamentos', 'Reclamación de deudas', 'Responsabilidad civil', 'Arrendamientos urbanos'],
    cases: ['Divorcio contencioso con custodia', 'Reclamación por daños', 'Conflictos hereditarios', 'Incumplimiento contractual'],
  },
  {
    name: 'Derecho Mercantil',
    icon: '🏢',
    img: 'legal-area2',
    color: '#c9a227',
    description1: 'El mundo empresarial requiere de asesoramiento jurídico especializado y ágil. Nuestro departamento mercantil acompaña a empresas en todas las fases de su ciclo de vida: desde la constitución hasta la reestructuración, pasando por la expansión internacional y las operaciones corporativas más complejas.',
    description2: 'Somos expertos en fusiones y adquisiciones, redacción de pactos de socios, contratos de distribución y agencia, propiedad intelectual e industrial, competencia desleal y reclamaciones comerciales. Trabajamos con startups, pymes y grandes corporaciones con el mismo nivel de exigencia y profesionalidad.',
    services: ['Constitución de sociedades', 'Fusiones y adquisiciones', 'Pactos de socios', 'Contratos mercantiles', 'Propiedad intelectual', 'Resolución de conflictos societarios'],
    cases: ['Due diligence en M&A', 'Litigios societarios', 'Defensa en competencia', 'Insolvencia empresarial'],
  },
  {
    name: 'Derecho Penal',
    icon: '🔒',
    img: 'legal-area3',
    color: '#a08020',
    description1: 'La defensa penal exige no solo un profundo conocimiento jurídico, sino también experiencia, rapidez de reacción y una estrategia sólida desde el primer momento. Nuestros penalistas han intervenido en los casos más complejos, incluyendo crimen organizado, delitos económicos y procedimientos ante la Audiencia Nacional.',
    description2: 'Prestamos defensa penal en todas las instancias: instrucción, juicio oral y recursos de apelación y casación ante el Tribunal Supremo. También asesoramos a empresas en materia de compliance penal y responsabilidad de personas jurídicas, protegiendo tanto a la organización como a sus directivos.',
    services: ['Defensa en juicio oral', 'Delitos económicos y fiscales', 'Violencia de género', 'Ciberdelitos', 'Compliance penal empresarial', 'Recursos de casación'],
    cases: ['Delitos societarios', 'Fraude fiscal', 'Defensa en procedimientos especiales', 'Responsabilidad penal corporativa'],
  },
  {
    name: 'Derecho Laboral',
    icon: '👷',
    img: 'legal-area4',
    color: '#c9a227',
    description1: 'Las relaciones laborales generan conflictos que requieren resolución rápida y eficaz. Representamos tanto a trabajadores como a empresas en todos los órdenes jurisdiccionales del orden social, con especial especialización en despidos, reclamaciones salariales y negociación colectiva.',
    description2: 'Nuestro equipo laboral asesora en ERES, ERTES, modificaciones sustanciales de condiciones de trabajo, movilidad geográfica y acoso laboral. Para empresas, diseñamos políticas de Recursos Humanos legalmente sólidas que previenen conflictos y minimizan riesgos legales.',
    services: ['Despidos improcedentes', 'Reclamaciones de cantidad', 'Acoso laboral y mobbing', 'Negociación de convenios', 'EREs y ERTEs', 'Accidentes laborales'],
    cases: ['Despidos colectivos', 'Negociación sindical', 'Incapacidades permanentes', 'Inspecciones de trabajo'],
  },
  {
    name: 'Derecho Fiscal',
    icon: '📋',
    img: 'legal-area5',
    color: '#b8930f',
    description1: 'La complejidad del sistema tributario español requiere de un asesoramiento fiscal continuo y proactivo. Nuestros expertos fiscalistas conocen en profundidad todos los tributos: IRPF, Sociedades, IVA, Patrimonio, Sucesiones y Donaciones, así como la fiscalidad internacional.',
    description2: 'Representamos a particulares y empresas en procedimientos de comprobación e inspección tributaria, en recursos administrativos y económico-administrativos, y en vía contencioso-administrativa. Nuestro objetivo es siempre maximizar el ahorro fiscal dentro del pleno cumplimiento de la ley.',
    services: ['Planificación fiscal integral', 'Inspecciones de Hacienda', 'Recursos tributarios', 'Fiscalidad internacional', 'Impuesto de Sucesiones', 'Regularizaciones voluntarias'],
    cases: ['Comprobaciones de IRPF', 'Inspecciones del IVA', 'Planificación sucesoria', 'Precios de transferencia'],
  },
  {
    name: 'Derecho Inmobiliario',
    icon: '🏠',
    img: 'legal-area6',
    color: '#c9a227',
    description1: 'El mercado inmobiliario español es uno de los más dinámicos de Europa, con una regulación en constante evolución. Nuestro departamento inmobiliario gestiona todo tipo de operaciones: compraventas residenciales y comerciales, inversiones inmobiliarias, promociones y desarrollo urbanístico.',
    description2: 'Asistimos en la negociación y revisión de contratos de compraventa, due diligence inmobiliaria, gestión de arrendamientos y desahucios, reclamaciones a promotores y constructores, y litigios en comunidades de propietarios. También asesoramos en la reclamación de gastos hipotecarios y cláusulas abusivas.',
    services: ['Compraventas inmobiliarias', 'Due diligence inmobiliaria', 'Arrendamientos y desahucios', 'Reclamaciones a promotores', 'Comunidades de propietarios', 'Cláusulas hipotecarias abusivas'],
    cases: ['Rescisión de compraventas', 'Vicios ocultos', 'Desahucios express', 'Reclamación de gastos hipotecarios'],
  },
]

export default function AreasPage() {
  return (
    <div style={{ background: BG, color: TEXT, overflowX: 'hidden' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${ACCENT}12, transparent)`, pointerEvents: 'none' }} />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: ACCENT, letterSpacing: 3, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', marginBottom: 20 }}>Especialidades</motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(32px, 6vw, 70px)', fontWeight: 900, fontFamily: 'Georgia, serif', lineHeight: 1.1, marginBottom: 20 }}
        >
          ÁREAS DE PRÁCTICA
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3 }} style={{ width: 60, height: 2, background: ACCENT, margin: '0 auto 24px' }} />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ color: `${TEXT}70`, fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
          Seis décadas de tradición jurídica combinadas con una visión moderna del derecho
        </motion.p>
      </section>

      {/* Area sections */}
      {areas.map((area, i) => (
        <section key={area.name} style={{ borderTop: `1px solid ${ACCENT}15` }}>
          {/* Header image */}
          <div style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
            <img
              src={`https://picsum.photos/seed/${area.img}/1000/400`}
              alt={area.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3) saturate(0.6)' }}
            />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <span style={{ fontSize: 48, marginBottom: 16 }}>{area.icon}</span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, fontFamily: 'Georgia, serif', color: ACCENT, textAlign: 'center' }}
              >
                {area.name}
              </motion.h2>
              <div style={{ width: 50, height: 2, background: ACCENT, marginTop: 16 }} />
            </div>
          </div>

          {/* Content */}
          <div className="r-grid-2 r-section-sm" style={{ maxWidth: 1100, margin: '0 auto', gap: 48 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p style={{ color: `${TEXT}80`, lineHeight: 1.9, fontSize: 15, marginBottom: 20 }}>{area.description1}</p>
              <p style={{ color: `${TEXT}60`, lineHeight: 1.9, fontSize: 14 }}>{area.description2}</p>

              <div style={{ marginTop: 32, padding: '20px 24px', background: `${ACCENT}08`, border: `1px solid ${ACCENT}25`, borderLeft: `3px solid ${ACCENT}` }}>
                <p style={{ fontSize: 13, color: `${TEXT}60`, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
                  "La experiencia y dedicación del equipo de {area.name.toLowerCase()} de Mendoza & Asociados marcó la diferencia en la resolución de nuestro caso."
                </p>
                <p style={{ fontSize: 11, color: ACCENT, marginTop: 10, fontWeight: 700, letterSpacing: 1 }}>— CLIENTE SATISFECHO</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 700, color: ACCENT, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Georgia, serif' }}>Qué ofrecemos</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {area.services.map((s) => (
                  <li key={s} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 14, color: `${TEXT}80` }}>
                    <span style={{ color: ACCENT, fontSize: 12, flexShrink: 0 }}>◆</span>
                    {s}
                  </li>
                ))}
              </ul>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: ACCENT, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16, fontFamily: 'Georgia, serif' }}>Tipos de casos habituales</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {area.cases.map((c) => (
                  <span key={c} style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, borderRadius: 2, padding: '6px 12px', fontSize: 12, color: `${TEXT}80` }}>{c}</span>
                ))}
              </div>
              <Link href="/demos/abogados/consulta" style={{ display: 'inline-block', background: ACCENT, color: '#0d1b2a', padding: '12px 28px', fontWeight: 800, textDecoration: 'none', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase' }}>
                Consulta gratuita →
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="r-section" style={{ background: DARK, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, fontFamily: 'Georgia, serif', marginBottom: 16, color: TEXT }}>¿No encuentras tu área?</h2>
          <p style={{ color: `${TEXT}60`, marginBottom: 32, fontSize: 16 }}>Contáctenos y analizaremos su caso sin compromiso</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/demos/abogados/consulta" style={{ background: ACCENT, color: '#0d1b2a', padding: '14px 36px', fontWeight: 800, textDecoration: 'none', fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', display: 'inline-block' }}>
              Primera consulta gratuita
            </Link>
            <Link href="/demos/abogados/equipo" style={{ border: `1px solid ${ACCENT}60`, color: TEXT, padding: '14px 36px', fontWeight: 600, textDecoration: 'none', fontSize: 14, letterSpacing: 1, display: 'inline-block' }}>
              Conocer al equipo
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

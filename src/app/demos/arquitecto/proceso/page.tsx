'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const dark = '#111111'
const text = '#1a1a1a'
const bg = '#f4f4f0'
const mid = '#888'

const steps = [
  {
    number: '01',
    title: 'Consulta Inicial',
    subtitle: 'Escucha y diagnóstico',
    duration: '1–2 semanas',
    image: 'arch-process1',
    desc: 'Todo comienza con una conversación. Nos reunimos para entender en profundidad tus necesidades, expectativas, presupuesto y plazos. Visitamos el lugar —ya sea un solar, una vivienda existente o un espacio comercial— y realizamos un diagnóstico técnico completo.',
    includes: ['Reunión inicial de 2 horas (sin coste)', 'Visita al solar o inmueble', 'Análisis urbanístico y normativo', 'Informe de viabilidad preliminar', 'Propuesta de honorarios detallada'],
  },
  {
    number: '02',
    title: 'Concepto y Diseño',
    subtitle: 'La idea toma forma',
    duration: '4–8 semanas',
    image: 'arch-process2',
    desc: 'Una vez establecido el encargo, desarrollamos el concepto arquitectónico: volumetría, distribución de espacios, relación con el entorno, materialidad y estrategia bioclimática. Presentamos alternativas y refinamos la propuesta elegida hasta que refleje perfectamente la visión del cliente.',
    includes: ['Múltiples alternativas de diseño', 'Maquetas físicas y/o renders 3D', 'Estudio de iluminación natural', 'Propuesta de materiales y paleta', 'Presentaciones iterativas con el cliente'],
  },
  {
    number: '03',
    title: 'Documentación Técnica',
    subtitle: 'El proyecto sobre el papel',
    duration: '6–12 semanas',
    image: 'arch-process3',
    desc: 'Desarrollamos la documentación técnica completa necesaria para la obtención de licencias y la ejecución de obra: memoria descriptiva, planos de detalle, pliego de condiciones, mediciones y presupuesto. Coordinamos con los ingenieros especialistas (estructura, instalaciones, eficiencia energética).',
    includes: ['Proyecto básico y ejecutivo completo', 'Coordinación con ingeniería', 'Gestión de licencia de obras', 'Certificación energética', 'Documentación fotovoltaica y bioclimática'],
  },
  {
    number: '04',
    title: 'Obra y Supervisión',
    subtitle: 'Garantía en la ejecución',
    duration: 'Según proyecto',
    image: 'arch-process4',
    desc: 'La calidad del proyecto no termina en el papel. Realizamos visitas periódicas a obra, resolvemos las dudas de los constructores, verificamos que los materiales y acabados respetan las especificaciones del proyecto y gestionamos las incidencias que inevitablemente surgen en cualquier construcción.',
    includes: ['Dirección de obra y dirección de ejecución', 'Visitas semanales a obra', 'Coordinación con constructores', 'Control de calidad de materiales', 'Reportes fotográficos periódicos al cliente'],
  },
  {
    number: '05',
    title: 'Entrega',
    subtitle: 'El espacio, listo para vivir',
    duration: '1–2 semanas',
    image: 'arch-process5',
    desc: 'Realizamos la visita final de obra, elaboramos el listado de repasos y acompañamos al cliente en el proceso de recepción del inmueble. Entregamos la documentación completa del as-built, los manuales de uso y mantenimiento del edificio y el certificado de fin de obra.',
    includes: ['Visita de recepción con el constructor', 'Gestión del certificado de fin de obra', 'Manual de uso y mantenimiento', 'Documentación as-built completa', 'Seguimiento post-entrega (12 meses)'],
  },
]

const faqs = [
  { q: '¿Cuánto tiempo tarda un proyecto desde la idea hasta la entrega?', a: 'Depende del tipo y complejidad del proyecto. Una reforma de piso puede completarse en 6–8 meses. Una vivienda unifamiliar suele requerir entre 18 y 30 meses (incluyendo proyecto, licencia y obra). Proyectos de mayor envergadura pueden extenderse a 3–5 años.' },
  { q: '¿Cuáles son los honorarios del estudio?', a: 'Nuestros honorarios se establecen según el tipo de proyecto y el nivel de servicio requerido. Como referencia, para proyectos residenciales oscilan entre el 6% y el 10% del presupuesto de construcción. La primera consulta es siempre gratuita.' },
  { q: '¿Trabajáis fuera de Madrid y Barcelona?', a: 'Sí. Hemos desarrollado proyectos en toda España y en varios países de Europa. La gestión a distancia para proyectos en otras ciudades es completamente viable, con visitas programadas en los momentos clave.' },
  { q: '¿Podéis encargarse también del interiorismo?', a: 'Sí. Ofrecemos un servicio integral que incluye el diseño de interiores, selección de mobiliario, iluminación y coordinación con proveedores. Este servicio puede contratarse de forma independiente o como extensión del proyecto arquitectónico.' },
  { q: '¿Qué certificaciones de sostenibilidad trabajáis?', a: 'Trabajamos con los sistemas BREEAM, LEED y Passivhaus, así como con el Código Técnico de la Edificación en su variante más exigente. Todos nuestros proyectos incorporan criterios de eficiencia energética, independientemente de si se certifica formalmente.' },
]

const materials = [
  { name: 'Madera local', desc: 'Roble, pino y castaño de producción certificada española (FSC). Estructura, revestimientos y carpintería.' },
  { name: 'Hormigón visto', desc: 'Hormigón con áridos locales y color natural. Sin acabados añadidos. Honestidad material.' },
  { name: 'Piedra natural', desc: 'Caliza, granito y pizarra de canteras regionales. Pavimentos, fachadas y elementos singulares.' },
  { name: 'Cerámica artesanal', desc: 'Colaboración con alfareros y ceramistas locales para revestimientos únicos y exclusivos.' },
  { name: 'Acero corten', desc: 'Estructura y cerrajería vista. Pátina natural que cambia con el tiempo y el clima.' },
  { name: 'Cal y tierra', desc: 'Acabados de cal natural y construcción con tierra compactada en proyectos de arquitectura vernácula contemporánea.' },
]

export default function ProcesoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main style={{ background: bg, minHeight: '100vh', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: text }}>

      {/* PAGE HEADER */}
      <section style={{ padding: '5rem 1.5rem 3rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 500 }}>Cómo trabajamos</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 200, color: text, lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Nuestro Proceso
            </h1>
            <p style={{ color: mid, fontSize: '1rem', fontWeight: 300, maxWidth: '520px', lineHeight: 1.7 }}>
              Cada proyecto es único, pero nuestra metodología de trabajo es siempre la misma: rigor, transparencia y comunicación constante con el cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: '4rem',
              marginBottom: '6rem',
              alignItems: 'center',
            }}
          >
            {/* Image side: alternating left/right */}
            {i % 2 === 0 ? (
              <>
                <div>
                  <div style={{ position: 'relative' }}>
                    <img src={`https://picsum.photos/seed/${step.image}/600/400`} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', top: '-1.5rem', left: '-1.5rem', fontSize: '5rem', fontWeight: 100, color: 'rgba(0,0,0,0.06)', lineHeight: 1, fontFamily: 'Georgia, serif' }}>{step.number}</div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem', fontWeight: 500 }}>Etapa {step.number} · {step.duration}</div>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, color: text, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{step.title}</h2>
                  <div style={{ fontSize: '1rem', color: mid, fontWeight: 300, marginBottom: '1.5rem', fontStyle: 'italic' }}>{step.subtitle}</div>
                  <p style={{ color: '#555', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem' }}>{step.desc}</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {step.includes.map((item, k) => (
                      <li key={k} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', color: '#555' }}>
                        <span style={{ color: dark, fontWeight: 500, flexShrink: 0 }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem', fontWeight: 500 }}>Etapa {step.number} · {step.duration}</div>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, color: text, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{step.title}</h2>
                  <div style={{ fontSize: '1rem', color: mid, fontWeight: 300, marginBottom: '1.5rem', fontStyle: 'italic' }}>{step.subtitle}</div>
                  <p style={{ color: '#555', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem' }}>{step.desc}</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {step.includes.map((item, k) => (
                      <li key={k} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', color: '#555' }}>
                        <span style={{ color: dark, fontWeight: 500, flexShrink: 0 }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div style={{ position: 'relative' }}>
                    <img src={`https://picsum.photos/seed/${step.image}/600/400`} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', top: '-1.5rem', right: '-1.5rem', fontSize: '5rem', fontWeight: 100, color: 'rgba(0,0,0,0.06)', lineHeight: 1, fontFamily: 'Georgia, serif' }}>{step.number}</div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </section>

      {/* MATERIALS */}
      <section style={{ padding: '5rem 1.5rem', background: '#eeede8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 500 }}>Materialidad</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, color: text, letterSpacing: '-0.02em' }}>
              Nuestra filosofía de materiales
            </h2>
            <p style={{ color: mid, fontSize: '0.95rem', fontWeight: 300, maxWidth: '500px', lineHeight: 1.7, marginTop: '1rem' }}>
              Preferimos materiales honestos, locales y duraderos. Nada que no pueda envejecer con dignidad.
            </p>
          </div>
          <div className="r-grid-3" style={{ gap: '2rem' }}>
            {materials.map((mat, i) => (
              <motion.div
                key={mat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ borderTop: `2px solid ${dark}`, paddingTop: '1.5rem' }}
              >
                <div style={{ fontWeight: 600, fontSize: '1rem', color: text, marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{mat.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.7 }}>{mat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.7rem', color: mid, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 500 }}>Preguntas frecuentes</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, color: text, letterSpacing: '-0.02em' }}>
            Dudas habituales
          </h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  textAlign: 'left', padding: '1.75rem 0',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  cursor: 'pointer', gap: '1.5rem', fontFamily: 'inherit',
                }}
              >
                <span style={{ fontSize: '1.05rem', fontWeight: 400, color: text, lineHeight: 1.4 }}>{faq.q}</span>
                <span style={{ fontSize: '1.2rem', color: mid, flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ paddingBottom: '1.75rem' }}>
                  <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 200, color: text, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            ¿Empezamos?
          </h3>
          <p style={{ color: mid, marginBottom: '2.5rem', fontSize: '0.95rem' }}>Primera consulta gratuita y sin compromiso.</p>
          <Link href="/demos/arquitecto/contacto" style={{ display: 'inline-block', background: dark, color: '#f4f4f0', fontWeight: 600, fontSize: '0.85rem', padding: '1rem 3rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Contactar
          </Link>
        </motion.div>
      </section>
    </main>
  )
}

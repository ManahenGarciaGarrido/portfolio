'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const BG = '#001f3f'
const ACCENT = '#00c896'
const TEXT = '#e8f8f4'
const CARD = '#002a52'
const CARD2 = '#003366'

const tratamientos = [
  {
    nombre: 'Fisioterapia Deportiva',
    seed: 'physio-treatment1',
    descripcion1: 'La fisioterapia deportiva es la rama especializada en la prevención, diagnóstico, tratamiento y recuperación de las lesiones que se producen como consecuencia de la actividad física y deportiva. Nuestros especialistas cuentan con formación específica en biomecánica del movimiento y fisiología del ejercicio.',
    descripcion2: 'Trabajamos con deportistas de todos los niveles, desde amateurs hasta profesionales de élite, adaptando cada protocolo de tratamiento a las exigencias específicas de su deporte y a los tiempos de recuperación necesarios para volver a la competición.',
    condiciones: ['Tendinitis y tendinopatías', 'Esguinces y distensiones musculares', 'Síndrome del manguito rotador', 'Fascitis plantar', 'Lesiones de rodilla (LCA, LCP, meniscos)', 'Contracturas musculares por sobrecarga'],
    sesiones: '6–12 sesiones según lesión',
    duracion: '45–60 minutos por sesión',
  },
  {
    nombre: 'Rehabilitación Postoperatoria',
    seed: 'physio-treatment2',
    descripcion1: 'La rehabilitación postoperatoria es un proceso fundamental para garantizar una recuperación completa y funcional tras cualquier intervención quirúrgica. Nuestro equipo trabaja en estrecha colaboración con los cirujanos para diseñar programas de rehabilitación adaptados a cada tipo de cirugía.',
    descripcion2: 'Comenzamos el proceso rehabilitador desde las primeras horas tras la intervención, si la situación del paciente lo permite, controlando el dolor y la inflamación para posteriormente ir progresando en la recuperación de la movilidad, la fuerza muscular y la funcionalidad completa.',
    condiciones: ['Artroplastia de rodilla y cadera', 'Reconstrucción del ligamento cruzado', 'Cirugía de hombro (Bankart, manguito)', 'Artrodesis de columna vertebral', 'Cirugía de pie y tobillo', 'Intervenciones de mano y muñeca'],
    sesiones: '15–30 sesiones en fases',
    duracion: '60–90 minutos por sesión',
  },
  {
    nombre: 'Masaje Terapéutico',
    seed: 'physio-treatment3',
    descripcion1: 'El masaje terapéutico es una de las herramientas más efectivas de la fisioterapia para el tratamiento del dolor musculoesquelético. A diferencia del masaje de relajación, el masaje terapéutico tiene objetivos clínicos específicos y se aplica con técnicas avanzadas adaptadas a cada patología.',
    descripcion2: 'En Kinesio Sport aplicamos diversas técnicas de masaje según las necesidades de cada paciente: masaje de tejido profundo, liberación miofascial, masaje transverso profundo o técnicas de presión en puntos gatillo, siempre bajo la supervisión de fisioterapeutas titulados.',
    condiciones: ['Contracturas musculares crónicas', 'Cervicalgia y cervicalgias tensionales', 'Lumbalgia crónica', 'Fibromialgia', 'Dolor muscular postejercicio', 'Síndromes de dolor miofascial'],
    sesiones: '4–8 sesiones de mantenimiento',
    duracion: '30–60 minutos por sesión',
  },
  {
    nombre: 'Electroterapia',
    seed: 'physio-treatment4',
    descripcion1: 'La electroterapia engloba un conjunto de técnicas terapéuticas basadas en la aplicación de corrientes eléctricas de diferentes características para conseguir efectos analgésicos, antiinflamatorios, tróficos y neuromusculares. Es una herramienta complementaria muy efectiva cuando se combina con otras técnicas de fisioterapia.',
    descripcion2: 'Disponemos de la tecnología más avanzada del mercado, incluyendo equipos de TENS, corrientes interferenciales, ultrasonidos terapéuticos, radiofrecuencia, láser terapéutico y ondas de choque, permitiéndonos adaptar el tratamiento a las necesidades específicas de cada paciente.',
    condiciones: ['Dolor agudo y crónico', 'Inflamaciones articulares', 'Neuropatías periféricas', 'Atrofias musculares', 'Tendinitis calcificante', 'Cicatrices y adherencias'],
    sesiones: '8–15 sesiones combinadas',
    duracion: '20–45 minutos por sesión',
  },
  {
    nombre: 'Osteopatía',
    seed: 'physio-treatment5',
    descripcion1: 'La osteopatía es un sistema de medicina manual que trata al individuo en su globalidad, considerando la interrelación entre la estructura (sistema músculo-esquelético) y la función de todos los sistemas del organismo. El osteópata utiliza sus manos para diagnosticar y tratar las disfunciones que impiden el correcto funcionamiento del cuerpo.',
    descripcion2: 'Nuestros especialistas en osteopatía combinan técnicas estructurales, viscerales y craneales para abordar las causas profundas de los problemas musculoesqueléticos, con un enfoque preventivo y de mantenimiento que busca que el cuerpo funcione con la máxima eficiencia posible.',
    condiciones: ['Dolores de espalda y cuello', 'Cefaleas y migrañas de origen cervical', 'Vértigos y mareos posturales', 'Problemas digestivos funcionales', 'Disfunciones articulares', 'Estrés y tensión postural'],
    sesiones: '3–6 sesiones de tratamiento',
    duracion: '45–60 minutos por sesión',
  },
  {
    nombre: 'Pilates Clínico',
    seed: 'physio-treatment6',
    descripcion1: 'El Pilates Clínico es una metodología de ejercicio terapéutico basada en el método Pilates original, adaptada y supervisada por fisioterapeutas para la rehabilitación y prevención de patologías del aparato locomotor. Es especialmente efectivo para el tratamiento de problemas de espalda y para la mejora de la postura y el control motor.',
    descripcion2: 'A diferencia del Pilates convencional practicado en gimnasios, el Pilates Clínico parte de una evaluación fisioterapéutica previa que permite personalizar completamente el programa de ejercicios, progresando de forma segura y adaptada a las limitaciones y objetivos de cada paciente.',
    condiciones: ['Hernia discal y protrusiones', 'Escoliosis y cifosis', 'Dolor lumbar crónico', 'Incontinencia urinaria de esfuerzo', 'Hiperlordosis y rectificación lumbar', 'Recuperación postparto'],
    sesiones: '10–20 sesiones de programa',
    duracion: '50–60 minutos por sesión',
  },
]

const paquetes = [
  {
    nombre: 'Pack Inicio',
    precio: '180€',
    sesiones: '3 sesiones',
    descripcion: 'Ideal para lesiones agudas recientes o para probar nuestros servicios. Incluye evaluación inicial gratuita.',
    incluye: ['Evaluación inicial completa', '3 sesiones de tratamiento', 'Plan de ejercicios domiciliarios', 'Informe de evolución'],
  },
  {
    nombre: 'Pack Recuperación',
    precio: '450€',
    sesiones: '8 sesiones',
    descripcion: 'El paquete más popular. Perfecto para lesiones de intensidad media que requieren un tratamiento continuado.',
    incluye: ['Evaluación inicial completa', '8 sesiones de tratamiento', 'Sesión de seguimiento', 'Plan de ejercicios personalizado', 'Acceso a app de seguimiento'],
    destacado: true,
  },
  {
    nombre: 'Pack Elite',
    precio: '980€',
    sesiones: '20 sesiones',
    descripcion: 'Programa completo para rehabilitaciones complejas, postoperatorios y deportistas de alto rendimiento.',
    incluye: ['Evaluación biomecánica completa', '20 sesiones de tratamiento', 'Pilates Clínico incluido', 'Programa de prevención', 'Coordinación con médico/entrenador', 'Seguimiento mensual'],
  },
]

export default function FisioTratamientos() {
  return (
    <main style={{ background: BG, color: TEXT, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* HEADER */}
      <section style={{ background: CARD, padding: '4rem 2rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nuestros Servicios</p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: '1rem' }}>
            Tratamientos Especializados
          </h1>
          <p style={{ color: TEXT, opacity: 0.75, maxWidth: 580, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Cada paciente es único. Por eso ofrecemos una amplia cartera de tratamientos que podemos combinar y adaptar a las necesidades específicas de cada persona y cada lesión.
          </p>
        </motion.div>
      </section>

      {/* TRATAMIENTOS GRID */}
      <section style={{ padding: '5rem 2rem' }}>
        <div className="r-container">
          <div className="r-grid-2">
            {tratamientos.map((t, i) => (
              <motion.div
                key={t.nombre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
                style={{ background: CARD, borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
              >
                <div style={{ height: 260, overflow: 'hidden' }}>
                  <img src={`https://picsum.photos/seed/${t.seed}/700/400`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={t.nombre} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', borderLeft: `4px solid ${ACCENT}`, paddingLeft: '0.75rem' }}>
                    {t.nombre}
                  </h2>
                  <p style={{ color: TEXT, opacity: 0.8, lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.95rem' }}>{t.descripcion1}</p>
                  <p style={{ color: TEXT, opacity: 0.7, lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{t.descripcion2}</p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Condiciones que tratamos</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {t.condiciones.map(c => (
                        <span key={c} style={{ background: CARD2, color: TEXT, fontSize: '0.8rem', padding: '0.3rem 0.75rem', borderRadius: 20, opacity: 0.85 }}>{c}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', borderTop: `1px solid ${ACCENT}20`, paddingTop: '1rem' }}>
                    <div>
                      <div style={{ color: ACCENT, fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sesiones estimadas</div>
                      <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.25rem' }}>{t.sesiones}</div>
                    </div>
                    <div>
                      <div style={{ color: ACCENT, fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Duración por sesión</div>
                      <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.25rem' }}>{t.duracion}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ / ORIENTADOR */}
      <section style={{ background: CARD, padding: '5rem 2rem' }}>
        <div className="r-container" style={{ maxWidth: 800 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '2.5rem' }}
          >
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Orientación</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff' }}>¿Cuál es el Tratamiento Adecuado para Ti?</h2>
            <p style={{ color: TEXT, opacity: 0.7, marginTop: '1rem', lineHeight: 1.7 }}>
              Usa esta guía rápida para orientarte, aunque siempre recomendamos una evaluación personalizada con nuestros especialistas.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { situacion: '¿Tienes una lesión reciente practicando deporte?', recomendacion: 'Fisioterapia Deportiva', motivo: 'Actuamos rápido para reducir la inflamación y acelerar la recuperación muscular y articular.' },
              { situacion: '¿Has pasado por una operación recientemente?', recomendacion: 'Rehabilitación Postoperatoria', motivo: 'Protocolo específico para cada tipo de cirugía en coordinación con tu médico.' },
              { situacion: '¿Sufres contracturas o dolor muscular crónico?', recomendacion: 'Masaje Terapéutico + Osteopatía', motivo: 'Combinación ideal para resolver las causas del dolor crónico y prevenir recaídas.' },
              { situacion: '¿Quieres mejorar tu postura y estabilidad central?', recomendacion: 'Pilates Clínico', motivo: 'Programa de ejercicios supervisado que fortalece el core y mejora la alineación postural.' },
              { situacion: '¿Tienes dolor persistente que no mejora con otros tratamientos?', recomendacion: 'Evaluación Global + Electroterapia', motivo: 'Valoración biomecánica completa para encontrar la causa raíz y aplicar tecnología avanzada.' },
            ].map((item, i) => (
              <motion.div
                key={item.situacion}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: CARD2, borderRadius: 12, padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
              >
                <div style={{ background: ACCENT, color: '#001f3f', fontWeight: 800, width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.9rem' }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem', fontSize: '1rem' }}>{item.situacion}</div>
                  <div style={{ color: ACCENT, fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>→ {item.recomendacion}</div>
                  <div style={{ color: TEXT, opacity: 0.7, fontSize: '0.875rem', lineHeight: 1.6 }}>{item.motivo}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ color: TEXT, opacity: 0.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>¿Tienes dudas? Nuestros especialistas te asesoran sin compromiso.</p>
            <Link href="/demos/fisio/reservar">
              <button style={{ background: ACCENT, color: '#001f3f', border: 'none', padding: '0.9rem 2.5rem', borderRadius: 8, fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}>
                Solicitar Evaluación Gratuita
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section style={{ background: BG, padding: '5rem 2rem' }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Tarifas</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff' }}>Paquetes de Tratamiento</h2>
            <p style={{ color: TEXT, opacity: 0.6, marginTop: '1rem' }}>Los paquetes incluyen la evaluación inicial sin coste adicional. IVA no incluido.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: 960, margin: '0 auto' }}>
            {paquetes.map((p, i) => (
              <motion.div
                key={p.nombre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{
                  background: p.destacado ? ACCENT : CARD,
                  borderRadius: 16,
                  padding: '2.5rem 2rem',
                  position: 'relative',
                  border: p.destacado ? 'none' : `1px solid ${ACCENT}25`,
                  boxShadow: p.destacado ? `0 8px 40px ${ACCENT}30` : 'none',
                }}
              >
                {p.destacado && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#001f3f', color: ACCENT, fontWeight: 700, fontSize: '0.75rem', padding: '0.4rem 1.2rem', borderRadius: 20, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Más Popular
                  </div>
                )}
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: p.destacado ? '#001f3f' : '#ffffff', marginBottom: '0.25rem' }}>{p.nombre}</h3>
                <div style={{ fontSize: '0.9rem', color: p.destacado ? '#001f3f' : ACCENT, fontWeight: 600, marginBottom: '1rem' }}>{p.sesiones}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: p.destacado ? '#001f3f' : '#ffffff', marginBottom: '1rem' }}>{p.precio}</div>
                <p style={{ color: p.destacado ? '#001f3f' : TEXT, opacity: p.destacado ? 0.75 : 0.7, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{p.descripcion}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {p.incluye.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: p.destacado ? '#001f3f' : TEXT, fontSize: '0.875rem' }}>
                      <span style={{ fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/demos/fisio/reservar">
                  <button style={{
                    background: p.destacado ? '#001f3f' : ACCENT,
                    color: p.destacado ? ACCENT : '#001f3f',
                    border: 'none',
                    padding: '0.9rem',
                    borderRadius: 8,
                    width: '100%',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                  }}>
                    Reservar Ahora
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: TEXT, opacity: 0.5, marginTop: '2rem', fontSize: '0.85rem' }}>
            También se aceptan mutuas: ADESLAS, MAPFRE, SANITAS, ASISA, DKV y GENERALI. Consulta cobertura.
          </p>
        </div>
      </section>
    </main>
  )
}

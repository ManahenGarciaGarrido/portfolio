'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const BG = '#fafafa'
const ACCENT = '#0066ff'
const TEXT = '#1a1a1a'
const GRAY = '#f0f0f0'
const GRAY2 = '#e5e5e5'

const garantiasOpciones = [
  {
    tipo: 'Garantía Estándar',
    duracion: '2 años',
    precio: 'Incluida',
    descripcion: 'Todos los productos ZENTECH incluyen garantía oficial del fabricante durante 2 años sin coste adicional, conforme a la legislativa europea de defensa del consumidor.',
    incluye: [
      'Fallos de fabricación y hardware',
      'Defectos en materiales de pantalla',
      'Fallos en batería (reducción >20% en 1 año)',
      'Problemas de software relacionados con hardware',
      'Piezas y mano de obra de reparación',
      'Dispositivo de sustitución durante la reparación',
    ],
    noIncluye: [
      'Daños accidentales (caídas, golpes)',
      'Daños por agua o humedad',
      'Rotura de pantalla por impacto',
      'Desgaste normal de batería tras el primer año',
      'Daños por uso inadecuado o modificaciones',
      'Pérdida o robo del dispositivo',
    ],
    color: ACCENT,
  },
  {
    tipo: 'Garantía Extendida ZENTECH+',
    duracion: '5 años',
    precio: 'Desde 149€',
    descripcion: 'Amplía tu cobertura hasta 5 años totales con el plan ZENTECH+. Incluye cobertura adicional ante accidentes y gestión de siniestros totalmente online en menos de 48 horas.',
    incluye: [
      'Todo lo incluido en la garantía estándar',
      'Cobertura de daños accidentales (1 vez al año)',
      'Rotura de pantalla cubierta',
      'Resistencia a la humedad (si el dispositivo es IP67+)',
      'Soporte técnico prioritario 24/7',
      'Recogida y entrega a domicilio',
      'Dispositivo de sustitución premium',
      'Transferible al cambiar de propietario',
    ],
    noIncluye: [
      'Pérdida o robo del dispositivo',
      'Daños cosméticos (arañazos, marcas)',
      'Daños por modificaciones no autorizadas',
      'Daños intencionados',
    ],
    color: '#6c47ff',
    destacado: true,
  },
]

const pasosClaim = [
  {
    paso: 1,
    titulo: 'Inicia el Proceso Online',
    descripcion: 'Accede a tu cuenta en zentech.es o llama al 900 123 456. Proporciona el número de serie del dispositivo y describe el problema con fotos o vídeo si es posible.',
    tiempo: '5 minutos',
    icon: '💻',
  },
  {
    paso: 2,
    titulo: 'Evaluación y Diagnóstico',
    descripcion: 'Nuestro equipo técnico evalúa la incidencia en menos de 24 horas. Si aprobamos la garantía, recibirás una confirmación con el código de reparación y las instrucciones de envío.',
    tiempo: '24 horas',
    icon: '🔍',
  },
  {
    paso: 3,
    titulo: 'Reparación y Devolución',
    descripcion: 'Enviamos recogida a domicilio gratuita o puedes traerlo a nuestra tienda. El dispositivo se repara en nuestro taller certificado. Plazo habitual: 5–7 días laborables.',
    tiempo: '5–7 días',
    icon: '🔧',
  },
]

const soporteOpciones = [
  { canal: 'Chat en Vivo', disponibilidad: 'Lun–Vie 9:00–21:00 / Sáb 10:00–18:00', tiempo: 'Respuesta inmediata', icon: '💬', descripcion: 'Chatea con un técnico especializado desde la web o la app ZENTECH.' },
  { canal: 'Teléfono', disponibilidad: 'Todos los días 8:00–22:00', tiempo: 'Tiempo espera <3 min', icon: '📞', descripcion: 'Línea directa de soporte técnico: 900 123 456 (gratuito desde España).' },
  { canal: 'En Tienda', disponibilidad: 'Lun–Sáb 10:00–21:00', tiempo: 'Cita previa o sin cita', icon: '🏪', descripcion: 'Visita nuestro Genius Bar en C/ Gran Vía 22, Madrid. Diagnóstico gratuito en 30 minutos.' },
  { canal: 'Servicio a Domicilio', disponibilidad: 'Lun–Vie (previa cita)', tiempo: 'Dentro de 48h', icon: '🚗', descripcion: 'Un técnico certificado se desplaza a tu domicilio u oficina. Disponible en Madrid capital.' },
]

export default function TecnologiaGarantia() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <main style={{ background: BG, color: TEXT, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* HEADER */}
      <section style={{ background: '#ffffff', padding: '4rem 2rem', textAlign: 'center', borderBottom: `1px solid ${GRAY2}` }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Protección Total</p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: TEXT, marginBottom: '1rem' }}>
            Garantía y Soporte Técnico
          </h1>
          <p style={{ color: '#666', maxWidth: 560, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Compramos con confianza. Cada dispositivo ZENTECH viene respaldado por la garantía más completa del sector y un servicio postventa de referencia.
          </p>
        </motion.div>
      </section>

      {/* GARANTIAS */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: TEXT }}>Planes de Garantía</h2>
            <p style={{ color: '#666', marginTop: '0.75rem' }}>Elige el nivel de protección que mejor se adapta a tus necesidades.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {garantiasOpciones.map((g, i) => (
              <motion.div
                key={g.tipo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{
                  background: '#ffffff',
                  borderRadius: 16,
                  padding: '2.5rem',
                  border: `2px solid ${g.destacado ? g.color : GRAY2}`,
                  boxShadow: g.destacado ? `0 8px 40px ${g.color}25` : '0 2px 12px rgba(0,0,0,0.06)',
                  position: 'relative',
                }}
              >
                {g.destacado && (
                  <div style={{ position: 'absolute', top: -14, right: 24, background: g.color, color: '#fff', fontWeight: 700, fontSize: '0.75rem', padding: '0.3rem 1rem', borderRadius: 20, letterSpacing: '0.08em' }}>
                    RECOMENDADO
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: TEXT, marginBottom: '0.25rem' }}>{g.tipo}</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: g.color }}>{g.duracion}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.2rem' }}>Precio</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: TEXT }}>{g.precio}</div>
                  </div>
                </div>
                <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1.5rem' }}>{g.descripcion}</p>

                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>✅ Qué cubre</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {g.incluye.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#555' }}>
                        <span style={{ color: '#16a34a', flexShrink: 0, marginTop: '0.1rem' }}>✓</span> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem', paddingTop: '1.25rem', borderTop: `1px solid ${GRAY2}` }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>❌ Qué no cubre</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {g.noIncluye.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#555' }}>
                        <span style={{ color: '#dc2626', flexShrink: 0, marginTop: '0.1rem' }}>✗</span> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <button style={{ background: g.color, color: '#fff', border: 'none', padding: '0.9rem', borderRadius: 10, width: '100%', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
                  {g.destacado ? 'Añadir ZENTECH+' : 'Registrar Producto'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO DE RECLAMACIÓN */}
      <section style={{ background: '#ffffff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Proceso de Reclamación</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: TEXT }}>3 Pasos para Gestionar tu Garantía</h2>
            <p style={{ color: '#666', marginTop: '0.75rem' }}>Proceso 100% online. Sin papeleos innecesarios.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {pasosClaim.map((paso, i) => (
              <motion.div
                key={paso.paso}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ textAlign: 'center', padding: '2rem 1.5rem' }}
              >
                <div style={{ width: 64, height: 64, background: `${ACCENT}12`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.8rem', border: `2px solid ${ACCENT}25` }}>
                  {paso.icon}
                </div>
                <div style={{ background: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.75rem', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-2rem auto 1.25rem', position: 'relative', zIndex: 1 }}>
                  {paso.paso}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: TEXT, marginBottom: '0.75rem' }}>{paso.titulo}</h3>
                <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>{paso.descripcion}</p>
                <div style={{ background: `${ACCENT}10`, color: ACCENT, fontWeight: 600, fontSize: '0.8rem', padding: '0.35rem 0.9rem', borderRadius: 20, display: 'inline-block' }}>
                  ⏱ {paso.tiempo}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOPORTE TÉCNICO */}
      <section style={{ padding: '5rem 2rem', background: BG }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Canales de Soporte</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: TEXT }}>Soporte Técnico Especializado</h2>
            <p style={{ color: '#666', marginTop: '0.75rem', maxWidth: 520, margin: '0.75rem auto 0' }}>Estamos aquí cuando nos necesitas. Elige el canal que mejor se adapte a tu situación.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {soporteOpciones.map((s, i) => (
              <motion.div
                key={s.canal}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: '#ffffff', borderRadius: 12, padding: '2rem', border: `1px solid ${GRAY2}`, transition: 'border-color 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
                whileHover={{ boxShadow: `0 4px 20px ${ACCENT}15`, borderColor: ACCENT }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: TEXT, marginBottom: '0.5rem' }}>{s.canal}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#666' }}>🕐 {s.disponibilidad}</span>
                  <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 600 }}>⚡ {s.tiempo}</span>
                </div>
                <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: 1.6 }}>{s.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ RÁPIDO */}
      <section style={{ background: '#ffffff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: TEXT, textAlign: 'center', marginBottom: '2.5rem' }}>Preguntas Frecuentes sobre Garantía</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { p: '¿Cuánto tiempo tengo para reclamar la garantía?', r: '2 años desde la fecha de compra para la garantía estándar. Con ZENTECH+ la cobertura se extiende a 5 años.' },
              { p: '¿Necesito guardar el ticket de compra?', r: 'Con tu cuenta ZENTECH el historial de compras queda registrado automáticamente. Igualmente te recomendamos conservar el ticket físico o electrónico.' },
              { p: '¿Qué pasa si no hay solución y el producto es irreparable?', r: 'Si no es posible reparar el dispositivo, te ofrecemos la sustitución por un modelo equivalente o la devolución del dinero proporcional al tiempo de uso.' },
              { p: '¿La garantía es válida si compro en nuestra tienda online?', r: 'Sí, la garantía aplica tanto en compras en tienda física como online a través de zentech.es.' },
              { p: '¿Puedo contratar ZENTECH+ después de la compra?', r: 'Sí, puedes contratar la garantía extendida hasta 30 días después de la fecha de compra.' },
            ].map((faq, i) => (
              <div
                key={faq.p}
                style={{ background: BG, borderRadius: 10, padding: '1.5rem', border: `1px solid ${GRAY2}` }}
              >
                <div style={{ fontWeight: 700, color: TEXT, marginBottom: '0.6rem', fontSize: '0.95rem' }}>Q: {faq.p}</div>
                <div style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.7 }}>A: {faq.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, #001a4d 0%, ${ACCENT} 100%)`, padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
          ¿Tienes un Problema con tu Dispositivo?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>Inicia tu reclamación ahora. El proceso es rápido, gratuito y 100% online.</p>
        <Link href="/demos/tecnologia/contacto">
          <button style={{ background: '#ffffff', color: ACCENT, border: 'none', padding: '1rem 3rem', borderRadius: 8, fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}>
            Iniciar Reclamación
          </button>
        </Link>
      </section>
    </main>
  )
}

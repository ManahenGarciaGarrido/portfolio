'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const ACCENT = '#6c00ff'
const SECONDARY = '#00d4ff'
const BG = '#0f0020'

const features = [
  {
    name: 'Motor de Automatización IA',
    icon: '⚡',
    img: 'app-screen1',
    badge: true,
    description1: 'Nuestro motor de automatización utiliza modelos de lenguaje avanzados para entender el contexto de tu negocio y sugerir automatizaciones que nunca habrías pensado. Aprende de tus patrones de trabajo y se adapta continuamente.',
    description2: 'Diseñado para manejar millones de eventos por segundo sin degradación del rendimiento. Con tolerancia a fallos incorporada y reintentos automáticos, garantizamos que ninguna automatización se pierda.',
    bullets: ['Flujos de trabajo visuales drag & drop', 'Condiciones y ramas lógicas avanzadas', 'Webhooks bidireccionales en tiempo real', 'Historial completo de ejecuciones auditado', 'Plantillas pre-construidas por industria'],
  },
  {
    name: 'Analíticas Predictivas',
    icon: '📊',
    img: 'app-screen2',
    badge: true,
    description1: 'Ve más allá de las métricas básicas. Nuestro sistema de analíticas predictivas usa machine learning para anticipar tendencias en tu negocio hasta 90 días antes. Identifica cuellos de botella antes de que se conviertan en problemas.',
    description2: 'Todos los dashboards son completamente personalizables y se pueden compartir con equipos externos mediante links seguros. Exportación a PDF, Excel y Google Sheets con un clic.',
    bullets: ['Dashboards en tiempo real sin límite', 'Modelos predictivos custom entrenados con tus datos', 'Alertas inteligentes con umbrales dinámicos', 'Comparativa temporal automática', 'API de datos para herramientas externas'],
  },
  {
    name: 'CRM Integrado 360°',
    icon: '👥',
    img: 'app-screen3',
    badge: false,
    description1: 'Gestiona toda tu relación con clientes desde un único lugar. Desde el primer contacto hasta la renovación, cada interacción queda registrada y analizada. La IA clasifica automáticamente leads y sugiere el mejor momento para contactar.',
    description2: 'Sincronización bidireccional con más de 80 fuentes de datos: redes sociales, email, telefónica, chat y mucho más. Un perfil de cliente 100% completo sin esfuerzo manual.',
    bullets: ['Puntuación automática de leads con IA', 'Pipeline visual de ventas personalizable', 'Secuencias de email automatizadas', 'Integración con Gmail, Outlook y HubSpot', 'Registro automático de llamadas y reuniones'],
  },
  {
    name: 'Colaboración en Tiempo Real',
    icon: '🔗',
    img: 'app-screen4',
    badge: false,
    description1: 'Elimina los silos de información entre departamentos. Todos trabajan sobre los mismos datos en tiempo real, con comentarios contextuales, asignaciones y notificaciones inteligentes que llegan a quien debe actuar.',
    description2: 'Espacios de trabajo privados, compartidos y públicos para cada necesidad. Control de permisos granular hasta nivel de campo. Compliant con RGPD y SOC2 Type II.',
    bullets: ['Edición colaborativa en tiempo real', 'Menciones y notificaciones contextuales', 'Videoconferencias integradas (sin Zoom extra)', 'Gestión de tareas y proyectos nativa', 'Repositorio de documentos con versiones'],
  },
  {
    name: 'Seguridad Enterprise',
    icon: '🔒',
    img: 'app-screen5',
    badge: true,
    description1: 'Construida desde cero con seguridad como prioridad absoluta. Cifrado AES-256 en reposo y TLS 1.3 en tránsito. Auditorías de seguridad trimestrales por terceros independientes y programa de bug bounty activo.',
    description2: 'Cumplimiento nativo con RGPD, HIPAA, SOC2 Type II y ISO 27001. Residencia de datos configurable en España, UE o cualquier región. Nunca compartimos ni vendemos tus datos.',
    bullets: ['SSO con SAML 2.0 y OIDC', 'MFA obligatorio configurable', 'Logs de auditoría inmutables 7 años', 'Cifrado de extremo a extremo en mensajes', 'Backups automáticos cada 15 minutos'],
  },
  {
    name: 'Integraciones Nativas',
    icon: '🔌',
    img: 'app-screen6',
    badge: false,
    description1: 'Conecta NexusAI con las herramientas que ya usas en minutos. Más de 400 integraciones nativas disponibles en nuestro marketplace, con nuevas incorporaciones cada semana basadas en votos de la comunidad.',
    description2: 'Para necesidades específicas, nuestra API REST con documentación interactiva y SDKs en 8 lenguajes te permite construir integraciones custom en horas, no semanas.',
    bullets: ['Slack, Teams, Discord y más', 'Salesforce, HubSpot, Pipedrive', 'Stripe, Redsys, Braintree', 'AWS, Azure, Google Cloud', 'Zapier y Make como alternativa'],
  },
]

const faqItems = [
  { q: '¿Puedo importar datos de mi herramienta actual?', a: 'Sí. Tenemos importadores nativos para las 50 herramientas más populares y un importador genérico CSV/Excel. Nuestro equipo de onboarding te asistirá sin coste adicional en el proceso de migración.' },
  { q: '¿Cuánto tiempo lleva configurar NexusAI?', a: 'La mayoría de equipos están operativos en menos de 48 horas. Con las plantillas pre-configuradas por industria, puedes tener tus primeras automatizaciones funcionando en menos de 30 minutos.' },
  { q: '¿Funciona sin conocimientos técnicos?', a: 'Absolutamente. NexusAI está diseñado para usuarios de negocio, no para desarrolladores. La interfaz visual drag & drop permite crear automatizaciones complejas sin escribir código.' },
  { q: '¿Qué pasa si necesito una integración que no existe?', a: 'Primero revisa nuestro marketplace con más de 400 integraciones. Si no encuentras la que necesitas, puedes solicitarla y la comunidad vota las prioritarias. También puedes usar nuestra API para crear la tuya.' },
  { q: '¿Las automatizaciones funcionan 24/7?', a: 'Sí. Nuestra infraestructura cloud está activa las 24 horas los 365 días del año con SLA de 99,95% en planes Pro y 99,99% en Enterprise. Monitorización activa con alertas inmediatas ante cualquier incidencia.' },
]

export default function FuncionesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: BG, color: '#fff', overflowX: 'hidden' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${ACCENT}25, transparent)`, pointerEvents: 'none' }} />
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: SECONDARY, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', fontSize: 13, marginBottom: 20 }}
        >
          Producto
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', maxWidth: 800, margin: '0 auto 24px' }}
        >
          FUNCIONES PENSADAS{' '}
          <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${SECONDARY})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            PARA CRECER
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 18, color: '#ffffff70', maxWidth: 560, margin: '0 auto' }}
        >
          Cada funcionalidad está diseñada para eliminar fricciones y multiplicar el rendimiento de tu equipo.
        </motion.p>
      </section>

      {/* Feature sections alternating */}
      <section className="r-section-sm" style={{ maxWidth: 1100, margin: '0 auto' }}>
        {features.map((feature, i) => {
          const isEven = i % 2 === 0
          return (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center', marginBottom: 100, direction: isEven ? 'ltr' : 'rtl' }}
            >
              <div style={{ direction: 'ltr' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 36 }}>{feature.icon}</span>
                  {feature.badge && (
                    <span style={{ background: `${SECONDARY}20`, border: `1px solid ${SECONDARY}50`, borderRadius: 999, padding: '3px 12px', fontSize: 11, fontWeight: 700, color: SECONDARY, letterSpacing: 1 }}>
                      DISPONIBLE EN PLAN PRO
                    </span>
                  )}
                </div>
                <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>{feature.name}</h2>
                <p style={{ color: '#ffffff80', lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>{feature.description1}</p>
                <p style={{ color: '#ffffff60', lineHeight: 1.8, fontSize: 14, marginBottom: 24 }}>{feature.description2}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {feature.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#ffffffcc' }}>
                      <span style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.4, flexShrink: 0 }}>✦</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ direction: 'ltr' }}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${ACCENT}30`, boxShadow: `0 30px 80px ${ACCENT}25` }}
                >
                  <img src={`https://picsum.photos/seed/${feature.img}/800/500`} alt={feature.name} style={{ width: '100%', display: 'block' }} />
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </section>

      {/* Integrations */}
      <section className="r-section" style={{ background: '#12002a', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, marginBottom: 12 }}>+400 integraciones disponibles</h2>
          <p style={{ color: '#ffffff60', fontSize: 16, marginBottom: 48 }}>Conecta con las herramientas que ya usas desde el primer día</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 900, margin: '0 auto' }}>
            {['Slack', 'Notion', 'Salesforce', 'HubSpot', 'Stripe', 'Google Workspace', 'Microsoft 365', 'AWS', 'GitHub', 'Jira', 'Zendesk', 'Shopify'].map((tool) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.08, background: `${ACCENT}30` }}
                style={{ background: '#1a003a', border: `1px solid ${ACCENT}30`, borderRadius: 10, padding: '10px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="r-section" style={{ maxWidth: 780, margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, marginBottom: 48, textAlign: 'center' }}
        >
          ¿Tienes alguna duda?
        </motion.h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{ background: '#1a003a', border: `1px solid ${openFaq === i ? ACCENT : '#ffffff15'}`, borderRadius: 14, overflow: 'hidden' }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', textAlign: 'left', fontSize: 15, fontWeight: 600 }}
              >
                {item.q}
                <span style={{ color: ACCENT, fontSize: 22, flexShrink: 0, marginLeft: 16, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>+</span>
              </button>
              {openFaq === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  style={{ padding: '0 24px 20px', color: '#ffffff70', lineHeight: 1.8, fontSize: 14 }}
                >
                  {item.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="r-section" style={{ textAlign: 'center', background: `linear-gradient(180deg, transparent, ${ACCENT}15)` }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, marginBottom: 16 }}
        >
          Listo para transformar tu empresa
        </motion.h2>
        <p style={{ color: '#ffffff60', marginBottom: 36, fontSize: 16 }}>Empieza gratis, sin tarjeta de crédito</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a
            whileHover={{ scale: 1.04 }}
            href="/demos/startup/precios"
            style={{ background: `linear-gradient(135deg, ${ACCENT}, #9b00ff)`, color: '#fff', padding: '16px 40px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: `0 0 40px ${ACCENT}50`, display: 'inline-block' }}
          >
            EMPEZAR GRATIS
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            href="/demos/startup/contacto"
            style={{ background: 'transparent', border: `1px solid #ffffff30`, color: '#fff', padding: '16px 40px', borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: 'none', display: 'inline-block' }}
          >
            Hablar con ventas
          </motion.a>
        </div>
      </section>
    </div>
  )
}

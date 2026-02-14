'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const accent = '#00ff88'
const bg = '#000'
const text = '#fff'

const services = [
  {
    id: 'seo',
    icon: '🔍',
    seed: 'service1',
    title: 'SEO & Contenido',
    tagline: 'Visibilidad orgánica que dura años',
    desc1: 'El SEO no es magia negra. Es una disciplina técnica, estratégica y creativa que, ejecutada correctamente, convierte tu sitio web en la principal fuente de clientes de tu negocio. Trabajamos el SEO desde sus fundamentos: arquitectura web, velocidad, Core Web Vitals y autoridad de dominio.',
    desc2: 'Nuestro equipo de content marketing produce contenido de alto valor optimizado para rankings. Artículos en profundidad, guías completas, estudios de caso y recursos que atraen links naturalmente y posicionan tu marca como referente del sector.',
    desc3: 'El trabajo de SEO tiene efecto acumulativo: cada mes que pasa, tu posición mejora y el coste por adquisición cae. Nuestros clientes ven resultados sostenibles a partir del tercer mes y picos de tráfico orgánico en 6-12 meses.',
    steps: ['Auditoría técnica completa', 'Investigación de palabras clave', 'Optimización on-page', 'Link Building autorizado', 'Seguimiento y reportes'],
    accordion: ['Auditoría SEO técnica y de contenido', 'Análisis de competencia y gap analysis', 'Optimización de metadatos y estructura', 'Creación de contenido mensual', 'Link building white-hat', 'Informes mensuales de posicionamiento'],
    pricing: [
      { tier: 'Básico', price: '890€/mes', items: ['5 palabras clave', '4 artículos/mes', 'Informe mensual'] },
      { tier: 'Pro', price: '1.890€/mes', items: ['25 palabras clave', '12 artículos/mes', 'Link Building', 'Auditoría técnica'] },
      { tier: 'Enterprise', price: 'A medida', items: ['Keywords ilimitadas', 'Contenido diario', 'Link Building premium', 'Soporte dedicado'] },
    ],
  },
  {
    id: 'paid',
    icon: '📢',
    seed: 'service2',
    title: 'Paid Media',
    tagline: 'Publicidad que convierte, no solo impresiona',
    desc1: 'Gestionamos más de 2 millones de euros en inversión publicitaria al año en plataformas como Google Ads, Meta Ads, TikTok Ads y LinkedIn Ads. Conocemos los algoritmos por dentro y sabemos exactamente cómo optimizar para que cada euro invertido rinda al máximo.',
    desc2: 'Nuestra metodología empieza por entender a tu cliente ideal: sus motivaciones, sus miedos, sus objeciones. Luego construimos embudos de conversión completos: desde el primer impacto hasta el checkout, con retargeting inteligente en cada fase del customer journey.',
    desc3: 'Todos nuestros clientes de Paid Media tienen acceso a un dashboard en tiempo real donde pueden ver exactamente cómo está rindiendo su inversión. Transparencia total, sin letra pequeña.',
    steps: ['Análisis de audiencias', 'Creación de creatividades', 'Setup de campañas', 'Optimización continua', 'Reporting semanal'],
    accordion: ['Setup completo de Google Ads', 'Campañas en Meta (Facebook & Instagram)', 'TikTok Ads y YouTube Ads', 'Remarketing y audiencias personalizadas', 'A/B testing de creatividades', 'Optimización de pujas y presupuesto'],
    pricing: [
      { tier: 'Básico', price: '690€/mes', items: ['1 plataforma', 'Hasta 3.000€ inversión', 'Informe mensual'] },
      { tier: 'Pro', price: '1.490€/mes', items: ['3 plataformas', 'Hasta 15.000€ inversión', 'Dashboard tiempo real'] },
      { tier: 'Enterprise', price: 'A medida', items: ['Plataformas ilimitadas', 'Inversión sin límite', 'Account manager dedicado'] },
    ],
  },
  {
    id: 'social',
    icon: '📱',
    seed: 'service3',
    title: 'Social Media',
    tagline: 'Comunidades que compran y recomiendan',
    desc1: 'Las redes sociales son el nuevo escaparate. Pero no basta con publicar bonito: hay que publicar con estrategia, con consistencia y con un profundo conocimiento de cada plataforma y sus algoritmos. Nuestro equipo de social media managers vive en TikTok, Instagram y LinkedIn.',
    desc2: 'Creamos estrategias de contenido nativas para cada plataforma. No duplicamos contenido: cada red tiene su formato, su tono, su audiencia y sus formatos ganadores. Vídeos verticales para TikTok e Instagram Reels, carruseles informativos para LinkedIn, stories interactivos y mucho más.',
    desc3: 'Gestionamos también la relación con influencers y creadores de contenido para amplificar el alcance de tu marca. Seleccionamos perfiles alineados con tus valores y medimos el impacto real de cada colaboración.',
    steps: ['Estrategia de plataformas', 'Calendario editorial', 'Producción de contenido', 'Community management', 'Análisis de métricas'],
    accordion: ['Estrategia de contenido mensual', 'Gestión de Instagram, TikTok y LinkedIn', 'Diseño de posts y stories', 'Gestión de comentarios y mensajes', 'Campañas con influencers', 'Informes de reach y engagement'],
    pricing: [
      { tier: 'Básico', price: '590€/mes', items: ['2 redes sociales', '12 posts/mes', 'Community management'] },
      { tier: 'Pro', price: '1.290€/mes', items: ['4 redes sociales', '30 posts/mes', 'Reels y TikToks', '1 colaboración influencer'] },
      { tier: 'Enterprise', price: 'A medida', items: ['Todas las redes', 'Contenido diario', 'Producción de vídeo', 'Influencer management'] },
    ],
  },
  {
    id: 'web',
    icon: '🎨',
    seed: 'service4',
    title: 'Web & Landing Pages',
    tagline: 'Sitios que convierten visitas en clientes',
    desc1: 'Un sitio web no es un catálogo digital. Es tu mejor comercial: trabaja 24/7, no cobra salario y puede multiplicar tus ventas si está bien diseñado y optimizado. Diseñamos webs orientadas a la conversión, con una UX pensada para guiar al usuario hasta la compra o el contacto.',
    desc2: 'Utilizamos Next.js para webs ultrarrápidas con excelentes Core Web Vitals, lo que además favorece el SEO. El diseño parte siempre de la estrategia: antes de abrir Figma, entendemos a tus usuarios, tu embudo de ventas y tus objetivos de negocio.',
    desc3: 'También creamos landing pages específicas para campañas de paid media, optimizadas para conversión con copy persuasivo, prueba social y llamadas a la acción claras. Una buena landing page puede doblar el ROAS de tus campañas sin aumentar el presupuesto.',
    steps: ['UX Research y wireframes', 'Diseño UI en Figma', 'Desarrollo Next.js', 'Optimización CRO', 'Tests A/B'],
    accordion: ['Diseño UX/UI personalizado', 'Desarrollo web en Next.js o WordPress', 'Optimización de velocidad (Core Web Vitals)', 'Landing pages para campañas', 'A/B testing de conversión', 'Integración con CRM y herramientas de analytics'],
    pricing: [
      { tier: 'Landing Page', price: 'Desde 1.200€', items: ['Diseño + desarrollo', 'Optimización CRO', 'Integración forms'] },
      { tier: 'Web Corporativa', price: 'Desde 3.500€', items: ['Hasta 10 páginas', 'CMS editable', 'SEO técnico'] },
      { tier: 'E-Commerce', price: 'Desde 6.000€', items: ['Tienda completa', 'Pasarela de pago', 'Dashboard gestión'] },
    ],
  },
  {
    id: 'email',
    icon: '✉️',
    seed: 'service5',
    title: 'Email Marketing',
    tagline: 'El canal con mayor ROI del marketing digital',
    desc1: 'El email marketing tiene un ROI promedio de 42€ por cada euro invertido según el DMA. Es el canal más rentable, más directo y más controlado que existe. Y la mayoría de empresas lo tiene completamente desaprovechado. Nosotros lo convertimos en tu máquina de ventas recurrente.',
    desc2: 'Diseñamos flujos de automatización que nutren a tus leads desde el primer contacto hasta la compra, y más allá: upsells, cross-sells, fidelización y reactivación de clientes dormidos. Cada email tiene un propósito y un KPI asociado.',
    desc3: 'Trabajamos con todas las plataformas de email marketing: Klaviyo para e-commerce, HubSpot para B2B, Mailchimp para pymes y ActiveCampaign para automatizaciones avanzadas. Elegimos la herramienta correcta para cada negocio.',
    steps: ['Auditoría de lista y segmentación', 'Diseño de flujos de automatización', 'Copywriting persuasivo', 'A/B testing de asuntos', 'Optimización de entregabilidad'],
    accordion: ['Setup de plataforma de email marketing', 'Flujos de bienvenida y onboarding', 'Automatizaciones de carrito abandonado', 'Newsletters mensuales', 'Segmentación avanzada de listas', 'Reporting de aperturas, clics y conversiones'],
    pricing: [
      { tier: 'Básico', price: '490€/mes', items: ['Setup de plataforma', '4 newsletters/mes', 'Informe mensual'] },
      { tier: 'Pro', price: '990€/mes', items: ['Automatizaciones', '12 emails/mes', 'A/B testing', 'Segmentación'] },
      { tier: 'Enterprise', price: 'A medida', items: ['Flujos complejos', 'Emails ilimitados', 'Consultoría CRM', 'Soporte dedicado'] },
    ],
  },
  {
    id: 'analitica',
    icon: '📊',
    seed: 'service6',
    title: 'Analítica & Datos',
    tagline: 'Decisiones basadas en datos, no en intuición',
    desc1: 'La analítica es la base de todo lo demás. Sin datos correctos, el marketing es adivinar. Configuramos sistemas de medición robustos que te dan una visión 360° de tu negocio: qué canales funcionan, qué páginas convierten, de dónde viene tu mejor cliente.',
    desc2: 'Implementamos Google Analytics 4, Google Tag Manager, Meta Pixel y todas las integraciones necesarias para tener una trazabilidad completa del customer journey. Luego construimos dashboards en Looker Studio o Power BI que convierten los datos en decisiones.',
    desc3: 'También realizamos análisis de cohortes, atribución multicanal y modelado predictivo para entender el comportamiento de tus clientes a largo plazo y anticipar tendencias antes que tu competencia.',
    steps: ['Auditoría de analítica actual', 'Setup de GA4 y Tag Manager', 'Dashboard personalizado', 'Análisis de embudos', 'Reporting ejecutivo mensual'],
    accordion: ['Implementación de GA4 y conversiones', 'Setup de Google Tag Manager', 'Construcción de dashboards en Looker Studio', 'Análisis de atribución multicanal', 'Configuración de eventos y goals', 'Formación para el equipo interno'],
    pricing: [
      { tier: 'Setup', price: '1.500€ único', items: ['Configuración GA4', 'Tag Manager', 'Dashboard básico'] },
      { tier: 'Pro', price: '790€/mes', items: ['Mantenimiento', 'Dashboard avanzado', 'Análisis mensual'] },
      { tier: 'Enterprise', price: 'A medida', items: ['Data warehouse', 'BI personalizado', 'Consultoría continua'] },
    ],
  },
]

type Service = typeof services[0]

function AccordionItem({ label }: { label: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(0,255,136,0.1)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 0', background: 'transparent', border: 'none', color: text, cursor: 'pointer', fontFamily: 'sans-serif', fontSize: '0.9rem', textAlign: 'left' }}
      >
        <span>{label}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} style={{ color: accent, fontSize: '1.2rem', flexShrink: 0, marginLeft: 8 }}>+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: '0.85rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Incluido en todos los planes Pro y Enterprise. Contacta para más detalles sobre alcance y tiempos de entrega.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ServiceSection({ svc, isRight }: { svc: Service; isRight: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={svc.id} ref={ref} style={{ padding: '5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: isRight ? 40 : -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ order: isRight ? 2 : 1 }}
        >
          <div style={{ color: accent, fontSize: '2rem', marginBottom: '0.75rem' }}>{svc.icon}</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, margin: '0 0 0.5rem', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            {svc.title}
          </h2>
          <div style={{ color: accent, fontSize: '0.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>{svc.tagline}</div>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>{svc.desc1}</p>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>{svc.desc2}</p>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>{svc.desc3}</p>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ color: accent, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Proceso</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {svc.steps.map((step, si) => (
                <div key={si} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ color: accent, fontSize: '0.8rem' }}>{si + 1}.</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>{step}</span>
                  {si < svc.steps.length - 1 && <span style={{ color: 'rgba(255,255,255,0.2)' }}>→</span>}
                </div>
              ))}
            </div>
          </div>

          <div style={{ border: '1px solid rgba(0,255,136,0.15)', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '2rem' }}>
            <div style={{ color: accent, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>¿Qué incluye?</div>
            {svc.accordion.map(item => <AccordionItem key={item} label={item} />)}
          </div>

          <div>
            <div style={{ color: accent, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Planes</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {svc.pricing.map((plan, pi) => (
                <div key={pi} style={{ border: pi === 1 ? `1px solid ${accent}` : '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '1rem', background: pi === 1 ? 'rgba(0,255,136,0.05)' : 'transparent' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: pi === 1 ? accent : 'rgba(255,255,255,0.4)', marginBottom: '0.4rem' }}>{plan.tier}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: text, marginBottom: '0.5rem' }}>{plan.price}</div>
                  {plan.items.map(item => (
                    <div key={item} style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.2rem' }}>✓ {item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: isRight ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ order: isRight ? 1 : 2 }}
        >
          <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,255,136,0.1)' }}>
            <img
              src={`https://picsum.photos/seed/${svc.seed}/700/450`}
              alt={svc.title}
              style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block', filter: 'brightness(0.7) saturate(0.8)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ServiciosPage() {
  return (
    <main style={{ background: bg, color: text, fontFamily: "'Inter', 'Helvetica Neue', sans-serif", minHeight: '100vh' }}>
      {/* HEADER */}
      <div style={{ padding: '5rem 2rem 3rem', borderBottom: '1px solid rgba(0,255,136,0.1)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Todo lo que hacemos
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, margin: '0 0 1.5rem', letterSpacing: '-0.03em', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Nuestros<br />Servicios
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 550, margin: 0 }}>
              Un ecosistema completo de servicios de marketing digital para escalar tu negocio con precisión y sin desperdiciar ni un euro.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SERVICE SECTIONS */}
      {services.map((svc, svcIdx) => (
        <ServiceSection key={svc.id} svc={svc} isRight={svcIdx % 2 !== 0} />
      ))}

      {/* CTA */}
      <div style={{ background: accent, padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: bg, fontSize: '2rem', fontWeight: 900, margin: '0 0 1rem', textTransform: 'uppercase' }}>¿Por Dónde Empezamos?</h2>
        <p style={{ color: 'rgba(0,0,0,0.65)', fontSize: '1rem', marginBottom: '2rem', maxWidth: 420, margin: '0 auto 2rem' }}>
          Dinos tu reto y te proponemos el paquete de servicios exacto que necesitas.
        </p>
        <motion.a
          href="/demos/agencia/contacto"
          whileHover={{ scale: 1.05 }}
          style={{ display: 'inline-block', background: bg, color: accent, padding: '1rem 2.5rem', borderRadius: 4, textDecoration: 'none', fontWeight: 900, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Solicitar Consulta Gratis
        </motion.a>
      </div>
    </main>
  )
}

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

const BG = '#0f0020'
const ACCENT = '#6c00ff'
const SECONDARY = '#00d4ff'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString('es-ES')}{suffix}</span>
}

export default function StartupHome() {
  return (
    <div style={{ background: BG, color: '#fff', overflowX: 'hidden' }}>

      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 60px', textAlign: 'center', overflow: 'hidden' }}>
        {/* Morphing blobs */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, -30, 0], borderRadius: ['50% 40% 60% 50%', '60% 50% 40% 60%', '50% 40% 60% 50%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: '-10%', left: '-10%', width: '55%', height: '65%', background: `radial-gradient(circle, ${ACCENT}55 0%, transparent 70%)`, filter: 'blur(60px)' }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, -50, 0], y: [0, 40, 0], borderRadius: ['40% 60% 50% 50%', '50% 50% 60% 40%', '40% 60% 50% 50%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{ position: 'absolute', top: '20%', right: '-15%', width: '50%', height: '60%', background: `radial-gradient(circle, ${SECONDARY}40 0%, transparent 70%)`, filter: 'blur(70px)' }}
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], borderRadius: ['60% 40% 50% 50%', '40% 60% 50% 50%', '60% 40% 50% 50%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            style={{ position: 'absolute', bottom: '-5%', left: '30%', width: '40%', height: '45%', background: `radial-gradient(circle, ${ACCENT}30 0%, transparent 70%)`, filter: 'blur(80px)' }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${ACCENT}20`, border: `1px solid ${ACCENT}60`, borderRadius: 999, padding: '6px 16px', marginBottom: 32, fontSize: 13, fontWeight: 600 }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: SECONDARY, display: 'inline-block', boxShadow: `0 0 8px ${SECONDARY}` }} />
          Nueva versión 3.0 disponible — IA generativa integrada
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: 'clamp(42px, 8vw, 90px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 24, maxWidth: 900 }}
        >
          La plataforma que{' '}
          <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${SECONDARY})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            CAMBIA TODO
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 20, color: '#ffffff99', maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}
        >
          Automatiza, escala y domina tu mercado con la única plataforma de IA que se adapta a tu negocio en tiempo real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 64 }}
        >
          <Link href="/demos/startup/precios" style={{ background: `linear-gradient(135deg, ${ACCENT}, #9b00ff)`, color: '#fff', padding: '16px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: `0 0 40px ${ACCENT}60` }}>
            EMPEZAR GRATIS
          </Link>
          <button style={{ background: 'transparent', border: `1px solid #ffffff30`, color: '#fff', padding: '16px 36px', borderRadius: 12, fontWeight: 600, fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 32, height: 32, borderRadius: '50%', border: `2px solid ${SECONDARY}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>▶</span>
            VER DEMO
          </button>
        </motion.div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{ width: '100%', maxWidth: 900, borderRadius: 16, overflow: 'hidden', border: `1px solid ${ACCENT}40`, boxShadow: `0 40px 120px ${ACCENT}30`, position: 'relative', zIndex: 1 }}
        >
          {/* Browser chrome */}
          <div style={{ background: '#1a0035', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${ACCENT}30` }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#ff5f57', '#febc2e', '#28c840'].map((c) => <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />)}
            </div>
            <div style={{ flex: 1, background: '#0f0020', borderRadius: 6, height: 28, display: 'flex', alignItems: 'center', paddingLeft: 12, fontSize: 12, color: '#ffffff50' }}>
              app.nexusai.com/dashboard
            </div>
          </div>
          {/* Dashboard */}
          <div className="r-overflow-hidden" style={{ background: '#12002a', padding: 24, display: 'grid', gridTemplateColumns: 'minmax(0,200px) 1fr', gap: 20, minHeight: 380 }}>
            {/* Sidebar */}
            <div style={{ background: '#1a003a', borderRadius: 10, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Dashboard', 'Analíticas', 'Automatizaciones', 'Integraciones', 'Reportes', 'Ajustes'].map((item, i) => (
                <div key={item} style={{ padding: '8px 12px', borderRadius: 8, background: i === 0 ? `${ACCENT}40` : 'transparent', fontSize: 13, color: i === 0 ? '#fff' : '#ffffff60', cursor: 'pointer' }}>{item}</div>
              ))}
            </div>
            {/* Main content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* KPI row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
                {[{ label: 'Ingresos', val: '€48.290', up: true }, { label: 'Usuarios activos', val: '3.847', up: true }, { label: 'Conversión', val: '12,4%', up: false }].map((kpi) => (
                  <div key={kpi.label} style={{ background: '#1a003a', borderRadius: 10, padding: '14px 16px' }}>
                    <div style={{ fontSize: 11, color: '#ffffff50', marginBottom: 6 }}>{kpi.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 700 }}>{kpi.val}</div>
                    <div style={{ fontSize: 11, color: kpi.up ? '#00ff88' : '#ff4466', marginTop: 4 }}>{kpi.up ? '▲' : '▼'} {kpi.up ? '+18%' : '-3%'} vs mes anterior</div>
                  </div>
                ))}
              </div>
              {/* Chart placeholder */}
              <div style={{ background: '#1a003a', borderRadius: 10, padding: 16, flex: 1 }}>
                <div style={{ fontSize: 13, color: '#ffffff70', marginBottom: 12 }}>Crecimiento mensual</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 120 }}>
                  {[40, 55, 48, 70, 62, 80, 75, 95, 88, 100, 92, 110].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '4px 4px 0 0', background: i === 11 ? `linear-gradient(180deg, ${SECONDARY}, ${ACCENT})` : `${ACCENT}50` }} />
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 10, color: '#ffffff30' }}>
                  {['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ LOGOS BAR ═══ */}
      <section style={{ borderTop: `1px solid #ffffff10`, borderBottom: `1px solid #ffffff10`, padding: '32px 24px', overflow: 'hidden' }}>
        <p style={{ textAlign: 'center', fontSize: 12, color: '#ffffff40', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 28 }}>Con la confianza de líderes empresariales</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 40, alignItems: 'center' }}>
          {['Inditex', 'BBVA', 'Telefónica', 'Santander', 'Iberdrola', 'Repsol'].map((name) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05, opacity: 1 }}
              style={{ fontSize: 18, fontWeight: 800, color: '#ffffff25', letterSpacing: 2, textTransform: 'uppercase', cursor: 'default' }}
            >
              {name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="r-section" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, marginBottom: 16 }}>
            Todo lo que necesitas,{' '}
            <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${SECONDARY})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              todo en uno
            </span>
          </h2>
          <p style={{ color: '#ffffff70', fontSize: 18, maxWidth: 500, margin: '0 auto' }}>Tres pilares fundamentales que transforman cómo trabaja tu empresa</p>
        </motion.div>

        {[
          { title: 'Automatización Inteligente', icon: '⚡', desc: 'Elimina tareas repetitivas con flujos de trabajo impulsados por IA. Configura reglas complejas en minutos sin escribir una sola línea de código. Nuestro motor de automatización procesa millones de acciones por segundo.', img: 'feature1' },
          { title: 'Analíticas en Tiempo Real', icon: '📊', desc: 'Visualiza el rendimiento de tu negocio en tiempo real con dashboards personalizables. Detecta tendencias antes que tu competencia y toma decisiones basadas en datos reales, no en intuición.', img: 'feature2' },
          { title: 'Colaboración Unificada', icon: '🔗', desc: 'Une a todos tus equipos en una sola plataforma. Chat, videollamadas, gestión de proyectos y compartición de archivos integrados de forma nativa. Adiós a las herramientas dispersas.', img: 'feature3' },
        ].map((feature, i) => {
          const isEven = i % 2 === 0
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center', marginBottom: 100, direction: isEven ? 'ltr' : 'rtl' }}
            >
              <div style={{ direction: 'ltr' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{feature.icon}</div>
                <h3 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>{feature.title}</h3>
                <p style={{ color: '#ffffff70', lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>{feature.desc}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {['Sin código', 'IA incluida', '5min setup'].map((tag) => (
                    <span key={tag} style={{ background: `${ACCENT}25`, border: `1px solid ${ACCENT}50`, borderRadius: 999, padding: '4px 14px', fontSize: 13, color: SECONDARY }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ direction: 'ltr', borderRadius: 16, overflow: 'hidden', border: `1px solid ${ACCENT}30`, boxShadow: `0 20px 60px ${ACCENT}20` }}>
                <img src={`https://picsum.photos/seed/${feature.img}/700/400`} alt={feature.title} style={{ width: '100%', display: 'block' }} />
              </div>
            </motion.div>
          )
        })}
      </section>

      {/* ═══ STATS ═══ */}
      <section className="r-section" style={{ background: `linear-gradient(135deg, ${ACCENT}20, ${SECONDARY}10)`, border: `1px solid ${ACCENT}20`, borderRadius: 24, maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, textAlign: 'center' }}>
          {[
            { target: 12000, suffix: '+', label: 'Usuarios activos', sublabel: 'empresas que confían' },
            { target: 9999, suffix: '%*', label: 'Uptime garantizado', sublabel: '*SLA Enterprise' },
            { target: 60, suffix: '%', label: 'Menos tiempo', sublabel: 'en tareas manuales' },
            { target: 300, suffix: '%', label: 'Más productividad', sublabel: 'media de clientes' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 900, background: `linear-gradient(135deg, #fff, ${SECONDARY})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                {stat.suffix === '%*' ? (
                  <span>99,99%</span>
                ) : stat.suffix === '%' ? (
                  <><span style={{ WebkitTextFillColor: stat.label.includes('Menos') ? undefined : undefined }}>-</span><AnimatedCounter target={stat.target} />{stat.suffix}</>
                ) : (
                  <><AnimatedCounter target={stat.target} />{stat.suffix}</>
                )}
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 8, color: '#fff' }}>{stat.label}</div>
              <div style={{ fontSize: 12, color: '#ffffff50', marginTop: 4 }}>{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="r-section" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, marginBottom: 12 }}>Lo que dicen nuestros clientes</h2>
          <p style={{ color: '#ffffff60', fontSize: 16 }}>Testimonios reales de equipos que ya trabajan con NexusAI</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {[
            { name: 'Carlos Martínez', role: 'CTO', company: 'TechCorp España', quote: 'NexusAI redujo nuestro tiempo de procesamiento en un 70%. Es increíble lo que hemos podido hacer en solo 3 meses de uso. Totalmente recomendable para cualquier empresa que quiera escalar.', seed: 'cto1', stars: 5 },
            { name: 'Ana García', role: 'CEO', company: 'DataFlow Solutions', quote: 'Probamos 6 plataformas diferentes antes de NexusAI. Ninguna se acercaba ni de lejos en términos de funcionalidades y precio. La automatización nos ha liberado 20 horas semanales por empleado.', seed: 'cto2', stars: 5 },
            { name: 'Miguel Fernández', role: 'Director de Operaciones', company: 'GrowthCo', quote: 'La implementación fue sorprendentemente rápida. En menos de una semana ya teníamos todos nuestros flujos de trabajo automatizados. El soporte técnico es excepcional, siempre disponibles.', seed: 'cto3', stars: 5 },
          ].map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              style={{ background: '#1a003a', border: `1px solid ${ACCENT}30`, borderRadius: 20, padding: 32 }}
            >
              <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                {Array.from({ length: t.stars }).map((_, i) => <span key={i} style={{ color: '#ffd700', fontSize: 18 }}>★</span>)}
              </div>
              <p style={{ color: '#ffffffcc', lineHeight: 1.8, fontSize: 15, marginBottom: 24 }}>"{t.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <img src={`https://picsum.photos/seed/${t.seed}/80/80`} alt={t.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${ACCENT}` }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#ffffff60' }}>{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ PRICING PREVIEW ═══ */}
      <section className="r-section" style={{ textAlign: 'center', background: `linear-gradient(180deg, transparent, ${ACCENT}10)` }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 60 }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, marginBottom: 12 }}>Planes para cada etapa</h2>
          <p style={{ color: '#ffffff60', fontSize: 16 }}>Comienza gratis, escala cuando lo necesites</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 900, margin: '0 auto 40px' }}>
          {[
            { name: 'Starter', price: '€0', desc: 'Para equipos que empiezan', features: ['5 usuarios', '10 automatizaciones', 'Analíticas básicas', 'Email support'], highlight: false },
            { name: 'Pro', price: '€29', desc: '/mes por usuario', features: ['Usuarios ilimitados', 'Automatizaciones ∞', 'Analíticas avanzadas', 'Support 24/7', 'Integraciones premium'], highlight: true },
            { name: 'Enterprise', price: 'Custom', desc: 'Para grandes empresas', features: ['Todo en Pro', 'SLA 99,99%', 'Manager dedicado', 'Implementación custom'], highlight: false },
          ].map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.03 }}
              style={{
                background: plan.highlight ? `linear-gradient(135deg, ${ACCENT}40, #1a003a)` : '#1a003a',
                border: plan.highlight ? `2px solid ${ACCENT}` : `1px solid #ffffff15`,
                borderRadius: 20, padding: '32px 24px', position: 'relative',
                boxShadow: plan.highlight ? `0 0 60px ${ACCENT}40` : 'none',
              }}
            >
              {plan.highlight && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: `linear-gradient(135deg, ${ACCENT}, ${SECONDARY})`, borderRadius: 999, padding: '4px 16px', fontSize: 11, fontWeight: 800, letterSpacing: 1, whiteSpace: 'nowrap' }}>MÁS POPULAR</div>}
              <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{plan.name}</div>
              <div style={{ fontSize: 40, fontWeight: 900, marginBottom: 4 }}>{plan.price}</div>
              <div style={{ fontSize: 13, color: '#ffffff60', marginBottom: 24 }}>{plan.desc}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28, textAlign: 'left' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: '#ffffffcc' }}>
                    <span style={{ color: SECONDARY, fontSize: 16 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <Link href="/demos/startup/precios" style={{ display: 'block', background: plan.highlight ? `linear-gradient(135deg, ${ACCENT}, #9b00ff)` : `${ACCENT}30`, color: '#fff', padding: '12px 24px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14, border: plan.highlight ? 'none' : `1px solid ${ACCENT}50` }}>
                {plan.name === 'Enterprise' ? 'Contactar' : 'Empezar ahora'}
              </Link>
            </motion.div>
          ))}
        </div>
        <Link href="/demos/startup/precios" style={{ color: SECONDARY, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
          Ver comparativa completa →
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid #ffffff10`, padding: '40px 24px', textAlign: 'center', color: '#ffffff40', fontSize: 13 }}>
        <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 12, background: `linear-gradient(135deg, ${ACCENT}, ${SECONDARY})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>NexusAI</div>
        <p>© 2026 NexusAI Technologies S.L. · Madrid, España · Todos los derechos reservados</p>
        <p style={{ marginTop: 8, fontSize: 11, color: '#ffffff20' }}>Demo creado por Manahen · Esta es una web de demostración</p>
      </footer>
    </div>
  )
}

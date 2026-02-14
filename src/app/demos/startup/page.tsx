'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap, Shield, BarChart3, Globe, Users, Check } from 'lucide-react';
import DemoNavBar from '@/components/demos/DemoNavBar';
import { staggerContainer, fadeUp, scaleUp } from '@/lib/animations';

const features = [
  { icon: Zap, title: 'Velocidad Extrema', desc: 'Dashboard en tiempo real con latencia < 50ms.' },
  { icon: Shield, title: 'Seguridad Avanzada', desc: 'Cifrado end-to-end y autenticación multifactor.' },
  { icon: BarChart3, title: 'Analytics 360°', desc: 'Métricas completas de tu negocio en un vistazo.' },
  { icon: Globe, title: 'Multi-región', desc: 'Servidores en 12 países. 99.99% uptime garantizado.' },
  { icon: Users, title: 'Colaboración', desc: 'Equipos ilimitados con permisos granulares.' },
  { icon: ArrowRight, title: 'Integraciones', desc: '+150 integraciones nativas con tus herramientas.' },
];

const plans = [
  { name: 'Starter', price: '0', period: '/mes', features: ['5 usuarios', '10GB almacenamiento', 'Analytics básico', 'Soporte email'], cta: 'EMPEZAR GRATIS', highlight: false },
  { name: 'Pro', price: '29', period: '/mes', features: ['Usuarios ilimitados', '500GB almacenamiento', 'Analytics avanzado', 'API access', 'Soporte 24/7', 'Dominio custom'], cta: 'ELEGIR PRO', highlight: true },
  { name: 'Enterprise', price: 'Custom', period: '', features: ['Todo de Pro', 'SLA 99.99%', 'Onboarding dedicado', 'SAML/SSO', 'Auditoría completa'], cta: 'CONTACTAR', highlight: false },
];

export default function StartupPage() {
  const featRef = useRef(null);
  const pricingRef = useRef(null);
  const featInView = useInView(featRef, { once: true, margin: '-80px' });
  const pricingInView = useInView(pricingRef, { once: true, margin: '-80px' });

  return (
    <div style={{ background: '#0f0020', color: '#fff', fontFamily: 'sans-serif' }}>
      <DemoNavBar siteName="NexusAI Platform" sector="startup tecnológica" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 px-6">
        {/* Animated blobs */}
        {[
          { top: '20%', left: '15%', color: '#6c00ff', size: 400, delay: '0s', blur: 80 },
          { top: '50%', left: '60%', color: '#00d4ff', size: 320, delay: '3s', blur: 100 },
          { top: '70%', left: '30%', color: '#9933ff', size: 250, delay: '5s', blur: 70 },
        ].map((blob, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-blob opacity-30"
            style={{
              top: blob.top,
              left: blob.left,
              width: blob.size,
              height: blob.size,
              background: `radial-gradient(circle, ${blob.color}, transparent)`,
              filter: `blur(${blob.blur}px)`,
              animationDelay: blob.delay,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-8 border"
            style={{ borderColor: '#6c00ff88', background: '#6c00ff22', color: '#c084fc' }}
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            YA DISPONIBLE — Versión 2.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-black leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            La plataforma que{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6c00ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              cambia todo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/50 text-xl max-w-2xl mx-auto mb-10"
          >
            Automatiza tu negocio, analiza en tiempo real y escala sin límites. Todo en un solo lugar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#precios"
              className="flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full text-white hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #6c00ff, #00d4ff)' }}
            >
              EMPEZAR GRATIS
              <ArrowRight size={18} />
            </a>
            <a
              href="#funciones"
              className="flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition-colors"
            >
              VER DEMO
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── BROWSER MOCKUP ── */}
      <section className="py-16 px-6" style={{ background: '#0a0018' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10"
            style={{ boxShadow: '0 0 80px #6c00ff44' }}
          >
            {/* Browser chrome */}
            <div className="px-4 py-3 flex items-center gap-2" style={{ background: '#1a0040' }}>
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 flex-1 rounded bg-white/10 px-3 py-1 text-white/30 text-xs">
                app.nexus.io/dashboard
              </div>
            </div>
            {/* Fake dashboard */}
            <div className="p-6" style={{ background: '#12002e', minHeight: 300 }}>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Ingresos', val: '€48,230', color: '#6c00ff' },
                  { label: 'Usuarios Activos', val: '12,840', color: '#00d4ff' },
                  { label: 'Conversión', val: '4.8%', color: '#c084fc' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl border border-white/10" style={{ background: '#1a0040' }}>
                    <p className="text-white/40 text-xs mb-1">{stat.label}</p>
                    <p className="font-black text-xl" style={{ color: stat.color }}>{stat.val}</p>
                  </div>
                ))}
              </div>
              {/* Fake chart */}
              <div className="rounded-xl p-4 border border-white/10" style={{ background: '#1a0040' }}>
                <p className="text-white/40 text-xs mb-3">Actividad — últimos 7 días</p>
                <div className="flex items-end gap-2 h-20">
                  {[40, 65, 50, 80, 70, 95, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{ height: `${h}%`, background: `linear-gradient(180deg, #6c00ff, #00d4ff)`, opacity: 0.7 + i * 0.04 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <p className="text-center text-white/30 text-sm mt-4">Tu dashboard en tiempo real</p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="funciones" className="py-24 px-6" style={{ background: '#0f0020' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-black text-4xl md:text-5xl text-white mb-4"
          >
            Todo lo que necesitas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/40 mb-16"
          >
            Una plataforma, infinitas posibilidades.
          </motion.p>
          <motion.div
            ref={featRef}
            variants={staggerContainer}
            initial="hidden"
            animate={featInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={scaleUp}
                className="p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all animate-glow-border"
                style={{ background: 'rgba(108,0,255,0.06)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #6c00ff44, #00d4ff44)' }}
                >
                  <f.icon size={20} className="text-purple-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="precios" className="py-24 px-6" style={{ background: '#0a0018' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-black text-4xl md:text-5xl text-white mb-16"
          >
            Planes simples y transparentes
          </motion.h2>
          <motion.div
            ref={pricingRef}
            variants={staggerContainer}
            initial="hidden"
            animate={pricingInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {plans.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className={`relative p-8 rounded-2xl border ${p.highlight ? 'border-purple-500/60' : 'border-white/10'}`}
                style={{
                  background: p.highlight
                    ? 'linear-gradient(160deg, #1a0040, #0a001a)'
                    : 'rgba(255,255,255,0.03)',
                  boxShadow: p.highlight ? '0 0 40px #6c00ff44' : undefined,
                }}
              >
                {p.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold"
                    style={{ background: 'linear-gradient(135deg, #6c00ff, #00d4ff)' }}
                  >
                    MÁS POPULAR
                  </div>
                )}
                <h3 className="text-white font-bold text-xl mb-2">{p.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  {p.price !== 'Custom' && <span className="text-white/40">€</span>}
                  <span className="font-black text-4xl text-white">{p.price}</span>
                  <span className="text-white/40 text-sm pb-1">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-white/60">
                      <Check size={14} className="text-purple-400 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`block w-full py-3 text-center font-bold rounded-xl text-sm transition-all hover:scale-[1.02] ${
                    p.highlight ? 'text-white' : 'text-white border border-white/20 hover:bg-white/10'
                  }`}
                  style={p.highlight ? { background: 'linear-gradient(135deg, #6c00ff, #00d4ff)' } : undefined}
                >
                  {p.cta}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-white/10 text-white/30 text-sm" style={{ background: '#080015' }}>
        © {new Date().getFullYear()} NexusAI — Demo por Manahen García Garrido
      </footer>
    </div>
  );
}

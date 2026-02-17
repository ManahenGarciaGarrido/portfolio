'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Monitor, Server, Database, Globe, HeartHandshake, ChevronRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

interface PricingProps {
  lang: 'es' | 'en';
}

const complexityLevels = {
  es: [
    {
      id: 'basica',
      label: 'Básica',
      emoji: '🌱',
      desc: 'Landing page o web de presentación',
      detail: '1–4 secciones, diseño limpio, sin funcionalidades complejas.',
      examples: 'Tarjeta de presentación, negocio local, carta de menú',
    },
    {
      id: 'media',
      label: 'Media',
      emoji: '🚀',
      desc: 'Web corporativa o tienda pequeña',
      detail: '5–10 páginas, formularios, galería, integraciones sencillas.',
      examples: 'Web de empresa, portfolio profesional, tienda con pocos productos',
    },
    {
      id: 'avanzada',
      label: 'Avanzada',
      emoji: '⚡',
      desc: 'Plataforma o app compleja',
      detail: 'Área privada de usuarios, múltiples integraciones, lógica de negocio.',
      examples: 'SaaS, e-commerce completo, marketplace, panel de administración',
    },
  ],
  en: [
    {
      id: 'basica',
      label: 'Basic',
      emoji: '🌱',
      desc: 'Landing page or presentation site',
      detail: '1–4 sections, clean design, no complex features.',
      examples: 'Business card site, local business, menu page',
    },
    {
      id: 'media',
      label: 'Medium',
      emoji: '🚀',
      desc: 'Corporate website or small store',
      detail: '5–10 pages, forms, gallery, simple integrations.',
      examples: 'Company website, professional portfolio, small product store',
    },
    {
      id: 'avanzada',
      label: 'Advanced',
      emoji: '⚡',
      desc: 'Platform or complex app',
      detail: 'Private user area, multiple integrations, business logic.',
      examples: 'SaaS, full e-commerce, marketplace, admin dashboard',
    },
  ],
};

const plans = {
  es: [
    {
      id: 'frontend',
      icon: Monitor,
      title: 'Solo Frontend',
      subtitle: 'Diseño y maquetación visual',
      description: 'Todo lo visual: estructura, animaciones, diseño responsive. La web queda bonita en todos los dispositivos, pero sin funcionalidades de servidor.',
      features: ['Diseño responsive (móvil, tablet, escritorio)', 'Animaciones y transiciones', 'Optimización de imágenes', 'Código limpio y semántico', 'Accesibilidad básica'],
      prices: { basica: 150, media: 350, avanzada: 650 },
      popular: false,
    },
    {
      id: 'backend',
      icon: Server,
      title: 'Frontend + Backend',
      subtitle: 'Diseño + lógica de servidor',
      description: 'Todo lo visual más la lógica del servidor: formularios que llegan al correo, autenticación de usuarios, APIs propias y conexiones a servicios externos.',
      features: ['Todo lo del plan anterior', 'Formularios funcionales (email real)', 'Autenticación de usuarios', 'API propia (REST o similar)', 'Integraciones externas (Stripe, redes…)'],
      prices: { basica: 280, media: 550, avanzada: 950 },
      popular: false,
    },
    {
      id: 'bd',
      icon: Database,
      title: '+ Base de Datos',
      subtitle: 'Diseño e implementación de BD',
      description: 'Añade el diseño e implementación de tu base de datos: estructura de tablas, relaciones, consultas optimizadas. Necesario para guardar usuarios, productos, pedidos, etc.',
      features: ['Todo lo de los planes anteriores', 'Diseño del esquema de BD', 'PostgreSQL, MongoDB o similar', 'Migraciones y seeds iniciales', 'Consultas optimizadas'],
      prices: { basica: 380, media: 700, avanzada: 1200 },
      popular: true,
    },
    {
      id: 'deploy',
      icon: Globe,
      title: '+ Despliegue',
      subtitle: 'Tu web publicada en internet',
      description: 'Me encargo de publicar la web: configuro el servidor o hosting, conecto el dominio, activo HTTPS y me aseguro de que todo funciona correctamente en producción.',
      features: ['Todo lo de los planes anteriores', 'Publicación en Vercel / VPS / servidor', 'Configuración de dominio y DNS', 'Certificado SSL (HTTPS)', 'Entrega lista para usar'],
      prices: { basica: 430, media: 800, avanzada: 1350 },
      popular: false,
    },
    {
      id: 'mantenimiento',
      icon: HeartHandshake,
      title: '+ Mantenimiento 3 meses',
      subtitle: 'Soporte y actualizaciones',
      description: 'Durante 3 meses después de la entrega, me ocupo de cualquier fallo, ajuste o pequeña mejora que necesites. Sin costes ocultos, sin sustos.',
      features: ['Todo lo de los planes anteriores', 'Corrección de bugs sin coste', 'Pequeñas actualizaciones de contenido', 'Soporte por WhatsApp / email', 'Informe mensual del estado de la web'],
      prices: { basica: 580, media: 1000, avanzada: 1650 },
      popular: false,
    },
  ],
  en: [
    {
      id: 'frontend',
      icon: Monitor,
      title: 'Frontend Only',
      subtitle: 'Visual design & layout',
      description: 'Everything visual: structure, animations, responsive design. Your site looks great on all devices, but without server-side features.',
      features: ['Responsive design (mobile, tablet, desktop)', 'Animations & transitions', 'Image optimization', 'Clean, semantic code', 'Basic accessibility'],
      prices: { basica: 150, media: 350, avanzada: 650 },
      popular: false,
    },
    {
      id: 'backend',
      icon: Server,
      title: 'Frontend + Backend',
      subtitle: 'Design + server logic',
      description: 'All visuals plus server logic: forms that actually send emails, user authentication, custom APIs, and connections to external services.',
      features: ['Everything in the previous plan', 'Functional forms (real email delivery)', 'User authentication', 'Custom API (REST or similar)', 'External integrations (Stripe, social…)'],
      prices: { basica: 280, media: 550, avanzada: 950 },
      popular: false,
    },
    {
      id: 'bd',
      icon: Database,
      title: '+ Database Setup',
      subtitle: 'DB design & implementation',
      description: 'Adds full database design and implementation: table structure, relationships, optimized queries. Needed to store users, products, orders, etc.',
      features: ['Everything in previous plans', 'Database schema design', 'PostgreSQL, MongoDB or similar', 'Initial migrations & seeds', 'Optimized queries'],
      prices: { basica: 380, media: 700, avanzada: 1200 },
      popular: true,
    },
    {
      id: 'deploy',
      icon: Globe,
      title: '+ Deployment',
      subtitle: 'Your site live on the internet',
      description: "I handle publishing the site: set up the server or hosting, connect your domain, enable HTTPS, and make sure everything works correctly in production.",
      features: ['Everything in previous plans', 'Deployment to Vercel / VPS / server', 'Domain & DNS configuration', 'SSL certificate (HTTPS)', 'Ready to use on delivery'],
      prices: { basica: 430, media: 800, avanzada: 1350 },
      popular: false,
    },
    {
      id: 'mantenimiento',
      icon: HeartHandshake,
      title: '+ 3 Months Maintenance',
      subtitle: 'Support & updates',
      description: 'For 3 months after delivery, I handle any bugs, adjustments, or small improvements you need. No hidden costs, no surprises.',
      features: ['Everything in previous plans', 'Bug fixes at no extra cost', 'Small content updates', 'Support via WhatsApp / email', 'Monthly site status report'],
      prices: { basica: 580, media: 1000, avanzada: 1650 },
      popular: false,
    },
  ],
};

const content = {
  es: {
    badge: 'Precios',
    title: '¿Cuánto cuesta tu web?',
    subtitle: 'Sin letra pequeña. Elige qué necesitas y qué presupuesto tienes — te doy un precio claro desde el principio.',
    complexityTitle: '1. ¿Qué tipo de proyecto tienes?',
    planTitle: '2. ¿Qué incluye tu web?',
    popularBadge: 'Más completo',
    from: 'Desde',
    contactCta: 'Cuéntame tu proyecto',
    contactSub: '¿No sabes qué plan necesitas? Escríbeme y te oriento sin compromiso.',
    note: '* Los precios son orientativos y pueden variar según el detalle y el volumen de trabajo real. Siempre te presupuesto antes de empezar.',
    firstClient: '¡Descuento de primer cliente! Al no haber trabajado aún para nadie, ofrezco precios especialmente competitivos para que puedas probarme sin riesgo.',
  },
  en: {
    badge: 'Pricing',
    title: 'How much does your website cost?',
    subtitle: 'No fine print. Choose what you need and your budget — I give you a clear price from the start.',
    complexityTitle: '1. What type of project is it?',
    planTitle: '2. What does your site include?',
    popularBadge: 'Most complete',
    from: 'From',
    contactCta: 'Tell me about your project',
    contactSub: "Not sure which plan you need? Message me and I'll guide you, no commitment.",
    note: '* Prices are approximate and may vary depending on the detail and actual volume of work. I always quote before starting.',
    firstClient: "First client discount! Since I haven't worked for anyone yet, I offer especially competitive prices so you can try me out risk-free.",
  },
};

function PlanCard({
  plan,
  complexity,
  lang,
  index,
}: {
  plan: (typeof plans.es)[0];
  complexity: 'basica' | 'media' | 'avanzada';
  lang: 'es' | 'en';
  index: number;
}) {
  const price = plan.prices[complexity];
  const fromLabel = content[lang].from;
  const Icon = plan.icon;

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="relative rounded-2xl border transition-all duration-300 hover:scale-[1.01]"
      style={{
        background: plan.popular
          ? 'linear-gradient(135deg, rgba(108,0,255,0.12), rgba(0,212,255,0.08))'
          : 'rgba(255,255,255,0.02)',
        borderColor: plan.popular ? 'rgba(108,0,255,0.5)' : 'rgba(255,255,255,0.08)',
        boxShadow: plan.popular ? '0 0 30px rgba(108,0,255,0.15)' : 'none',
      }}
    >
      {plan.popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
          style={{ background: 'linear-gradient(90deg, #6c00ff, #00d4ff)' }}
        >
          {content[lang].popularBadge}
        </div>
      )}

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: plan.popular
                ? 'linear-gradient(135deg, #6c00ff55, #00d4ff44)'
                : 'rgba(255,255,255,0.06)',
            }}
          >
            <Icon size={20} className={plan.popular ? 'text-cyan-300' : 'text-white/50'} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-base sm:text-lg leading-tight">{plan.title}</h3>
            <p className="text-white/40 text-xs sm:text-sm mt-0.5">{plan.subtitle}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-white/30 text-xs mb-0.5">{fromLabel}</div>
            <div
              className="text-2xl sm:text-3xl font-black"
              style={{
                background: 'linear-gradient(90deg, #a366ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {price.toLocaleString()}€
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/45 text-sm leading-relaxed mb-4">{plan.description}</p>

        {/* Features */}
        <ul className="space-y-2">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  background:
                    i === 0 && plan.id !== 'frontend'
                      ? 'rgba(255,255,255,0.08)'
                      : 'linear-gradient(135deg, #6c00ff55, #00d4ff44)',
                }}
              >
                <Check
                  size={10}
                  className={i === 0 && plan.id !== 'frontend' ? 'text-white/30' : 'text-cyan-300'}
                />
              </div>
              <span className={i === 0 && plan.id !== 'frontend' ? 'text-white/30' : 'text-white/70'}>
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Pricing({ lang }: PricingProps) {
  const [complexity, setComplexity] = useState<'basica' | 'media' | 'avanzada'>('media');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const c = content[lang];
  const levels = complexityLevels[lang];
  const planList = plans[lang];
  const selectedLevel = levels.find((l) => l.id === complexity)!;

  return (
    <section
      id="precios"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: '#070014' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white/60 border border-white/10 mb-4"
            style={{ background: 'rgba(108,0,255,0.08)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'linear-gradient(90deg, #6c00ff, #00d4ff)' }}
            />
            {c.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-4"
          >
            {c.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-sm sm:text-lg max-w-xl mx-auto"
          >
            {c.subtitle}
          </motion.p>

          {/* First-client note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-start gap-3 mt-6 px-5 py-3 rounded-2xl border text-left max-w-xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(108,0,255,0.06))',
              borderColor: 'rgba(0,212,255,0.2)',
            }}
          >
            <span className="text-xl flex-shrink-0">🎉</span>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{c.firstClient}</p>
          </motion.div>
        </div>

        {/* Step 1: Complexity selector */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 sm:mb-10"
        >
          <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            {c.complexityTitle}
          </h3>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-3">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setComplexity(level.id as typeof complexity)}
                className="flex-1 rounded-2xl border p-4 text-left transition-all duration-200 hover:border-purple-500/40"
                style={{
                  background:
                    complexity === level.id
                      ? 'linear-gradient(135deg, rgba(108,0,255,0.2), rgba(0,212,255,0.1))'
                      : 'rgba(255,255,255,0.02)',
                  borderColor:
                    complexity === level.id ? 'rgba(108,0,255,0.5)' : 'rgba(255,255,255,0.08)',
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xl">{level.emoji}</span>
                  <span
                    className={`font-bold text-base ${complexity === level.id ? 'text-white' : 'text-white/50'}`}
                  >
                    {level.label}
                  </span>
                  {complexity === level.id && (
                    <span className="ml-auto">
                      <ChevronRight size={14} className="text-cyan-400" />
                    </span>
                  )}
                </div>
                <p
                  className={`text-xs sm:text-sm ${complexity === level.id ? 'text-white/70' : 'text-white/30'}`}
                >
                  {level.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Detail of selected complexity */}
          <motion.div
            key={complexity}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 px-4 py-3 rounded-xl border border-white/5 text-sm text-white/40"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            <span className="text-white/60 font-medium">{selectedLevel.detail}</span>{' '}
            <span className="text-white/30">Ej: {selectedLevel.examples}</span>
          </motion.div>
        </motion.div>

        {/* Step 2: Plan cards */}
        <div className="mb-4">
          <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5 text-center">
            {c.planTitle}
          </h3>
          <motion.div
            ref={ref}
            key={complexity}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
          >
            {planList.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} complexity={complexity} lang={lang} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/25 text-xs text-center mt-6 max-w-2xl mx-auto"
        >
          {c.note}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-white/40 text-sm mb-5">{c.contactSub}</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:scale-105 hover:opacity-90"
            style={{ background: 'linear-gradient(90deg, #6c00ff, #00d4ff)' }}
          >
            {c.contactCta}
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

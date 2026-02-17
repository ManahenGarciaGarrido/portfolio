'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Monitor, Server, Database, Globe, HeartHandshake,
  Check, X, ChevronRight, ShoppingBag, Building2, Image as ImageIcon,
  FileText, Smartphone, Code2, ArrowRight
} from 'lucide-react';
import Navbar from '@/components/portfolio/Navbar';
import SiteFooter from '@/components/portfolio/SiteFooter';
import { useLang } from '@/hooks/useLang';
import { fadeUp, staggerContainer } from '@/lib/animations';

const serviceTypes = {
  es: [
    { icon: Monitor, title: 'Landing Pages', desc: 'Páginas de ventas o presentación con máximo impacto. Diseño orientado a conversión.' },
    { icon: Building2, title: 'Webs Corporativas', desc: 'Sitios de empresa o profesional con múltiples secciones y páginas.' },
    { icon: ShoppingBag, title: 'Tiendas Online', desc: 'E-commerce completo con catálogo de productos, carrito y pasarela de pago.' },
    { icon: ImageIcon, title: 'Portfolios', desc: 'Showcases visuales para fotógrafos, arquitectos, artistas o creativos.' },
    { icon: FileText, title: 'Blogs / Revistas', desc: 'Publicaciones digitales con gestión de contenido, categorías y SEO integrado.' },
    { icon: Code2, title: 'Aplicaciones Web', desc: 'Plataformas SaaS, paneles de administración o apps con lógica compleja.' },
  ],
  en: [
    { icon: Monitor, title: 'Landing Pages', desc: 'Sales or presentation pages with maximum impact. Conversion-oriented design.' },
    { icon: Building2, title: 'Corporate Sites', desc: 'Business or professional sites with multiple sections and pages.' },
    { icon: ShoppingBag, title: 'Online Stores', desc: 'Full e-commerce with product catalog, cart and payment gateway.' },
    { icon: ImageIcon, title: 'Portfolios', desc: 'Visual showcases for photographers, architects, artists or creatives.' },
    { icon: FileText, title: 'Blogs / Magazines', desc: 'Digital publications with content management, categories and integrated SEO.' },
    { icon: Code2, title: 'Web Applications', desc: 'SaaS platforms, admin dashboards or apps with complex business logic.' },
  ],
};

const included = {
  es: [
    'Diseño UI/UX personalizado',
    'Responsive en todos los dispositivos',
    'Animaciones y transiciones fluidas',
    'Código limpio y tipado (TypeScript)',
    'Optimización de rendimiento (Core Web Vitals)',
    'SEO técnico básico (metadatos, sitemap, schema)',
    'Accesibilidad básica',
    'Entrega del código fuente completo',
  ],
  en: [
    'Custom UI/UX design',
    'Responsive on all devices',
    'Smooth animations and transitions',
    'Clean, typed code (TypeScript)',
    'Performance optimization (Core Web Vitals)',
    'Basic technical SEO (meta, sitemap, schema)',
    'Basic accessibility',
    'Full source code delivery',
  ],
};

const notIncluded = {
  es: [
    'Creación de logotipo o identidad corporativa',
    'Redacción de textos y copywriting',
    'Fotografía o creación de imágenes/vídeos',
    'Campañas de SEO/SEM activas',
    'Gestión de redes sociales',
    'Soporte técnico continuado (salvo plan de mantenimiento)',
    'Formación sobre el sistema',
    'Registro o renovación del dominio',
    'Contratación del hosting (sí te asesoro)',
  ],
  en: [
    'Logo creation or brand identity design',
    'Copywriting and text creation',
    'Photography or image/video creation',
    'Active SEO/SEM campaigns',
    'Social media management',
    'Ongoing technical support (unless maintenance plan)',
    'System training or tutorials',
    'Domain registration or renewal',
    'Hosting contracting (I do advise though)',
  ],
};

const techStack = [
  { name: 'Next.js', note: 'Framework principal' },
  { name: 'React', note: 'UI Library' },
  { name: 'TypeScript', note: 'Tipado estático' },
  { name: 'Tailwind CSS', note: 'Estilos' },
  { name: 'Framer Motion', note: 'Animaciones' },
  { name: 'Node.js', note: 'Backend' },
  { name: 'PostgreSQL', note: 'Base de datos' },
  { name: 'MongoDB', note: 'BD NoSQL' },
  { name: 'Prisma', note: 'ORM' },
  { name: 'Stripe', note: 'Pagos' },
  { name: 'Resend', note: 'Email' },
  { name: 'Vercel', note: 'Despliegue' },
];

const complexityLevels = {
  es: [
    { id: 'basica', label: 'Básica', emoji: '🌱', desc: 'Landing page o web de presentación', detail: '1–4 secciones, diseño limpio.', examples: 'Tarjeta de presentación, negocio local, carta de menú' },
    { id: 'media', label: 'Media', emoji: '🚀', desc: 'Web corporativa o tienda pequeña', detail: '5–10 páginas, formularios, galería, integraciones.', examples: 'Web de empresa, portfolio, tienda pequeña' },
    { id: 'avanzada', label: 'Avanzada', emoji: '⚡', desc: 'Plataforma o app compleja', detail: 'Área privada, múltiples integraciones, lógica de negocio.', examples: 'SaaS, e-commerce completo, marketplace, admin panel' },
  ],
  en: [
    { id: 'basica', label: 'Basic', emoji: '🌱', desc: 'Landing page or presentation site', detail: '1–4 sections, clean design.', examples: 'Business card, local business, menu page' },
    { id: 'media', label: 'Medium', emoji: '🚀', desc: 'Corporate website or small store', detail: '5–10 pages, forms, gallery, integrations.', examples: 'Company site, portfolio, small store' },
    { id: 'avanzada', label: 'Advanced', emoji: '⚡', desc: 'Platform or complex app', detail: 'Private area, multiple integrations, business logic.', examples: 'SaaS, full e-commerce, marketplace, admin dashboard' },
  ],
};

const plans = {
  es: [
    { id: 'frontend', icon: Monitor, title: 'Solo Frontend', subtitle: 'Diseño y maquetación', features: ['Diseño responsive', 'Animaciones', 'Optimización de imágenes', 'Código limpio', 'Accesibilidad básica'], prices: { basica: 150, media: 350, avanzada: 650 }, popular: false },
    { id: 'backend', icon: Server, title: '+ Backend', subtitle: 'Lógica de servidor', features: ['Todo lo anterior', 'Formularios con email real', 'Autenticación de usuarios', 'API REST propia', 'Integraciones externas'], prices: { basica: 280, media: 550, avanzada: 950 }, popular: false },
    { id: 'bd', icon: Database, title: '+ Base de Datos', subtitle: 'Persistencia de datos', features: ['Todo lo anterior', 'Diseño del esquema de BD', 'PostgreSQL o MongoDB', 'Migraciones y seeds', 'Consultas optimizadas'], prices: { basica: 380, media: 700, avanzada: 1200 }, popular: true },
    { id: 'deploy', icon: Globe, title: '+ Despliegue', subtitle: 'Tu web publicada', features: ['Todo lo anterior', 'Publicación en Vercel/VPS', 'Configuración de dominio', 'Certificado SSL', 'Entrega lista para usar'], prices: { basica: 430, media: 800, avanzada: 1350 }, popular: false },
    { id: 'mantenimiento', icon: HeartHandshake, title: '+ Mantenimiento 3m', subtitle: 'Soporte post-entrega', features: ['Todo lo anterior', 'Bugs corregidos gratis', 'Actualizaciones menores', 'Soporte WhatsApp/email', 'Informe mensual'], prices: { basica: 580, media: 1000, avanzada: 1650 }, popular: false },
  ],
  en: [
    { id: 'frontend', icon: Monitor, title: 'Frontend Only', subtitle: 'Design & layout', features: ['Responsive design', 'Animations', 'Image optimization', 'Clean code', 'Basic accessibility'], prices: { basica: 150, media: 350, avanzada: 650 }, popular: false },
    { id: 'backend', icon: Server, title: '+ Backend', subtitle: 'Server logic', features: ['Everything above', 'Forms with real email', 'User authentication', 'Custom REST API', 'External integrations'], prices: { basica: 280, media: 550, avanzada: 950 }, popular: false },
    { id: 'bd', icon: Database, title: '+ Database', subtitle: 'Data persistence', features: ['Everything above', 'DB schema design', 'PostgreSQL or MongoDB', 'Migrations & seeds', 'Optimized queries'], prices: { basica: 380, media: 700, avanzada: 1200 }, popular: true },
    { id: 'deploy', icon: Globe, title: '+ Deployment', subtitle: 'Site live on internet', features: ['Everything above', 'Publish on Vercel/VPS', 'Domain configuration', 'SSL certificate', 'Ready to use on delivery'], prices: { basica: 430, media: 800, avanzada: 1350 }, popular: false },
    { id: 'mantenimiento', icon: HeartHandshake, title: '+ Maintenance 3m', subtitle: 'Post-delivery support', features: ['Everything above', 'Bugs fixed for free', 'Minor updates', 'WhatsApp/email support', 'Monthly report'], prices: { basica: 580, media: 1000, avanzada: 1650 }, popular: false },
  ],
};

export default function ServiciosClient() {
  const [lang] = useLang();
  const [complexity, setComplexity] = useState<'basica' | 'media' | 'avanzada'>('media');

  const t = {
    es: {
      title: 'Servicios & Precios',
      sub: 'Qué construyo, con qué tecnologías y cuánto cuesta — todo claro desde el principio.',
      typesTitle: '¿Qué tipo de webs hago?',
      includedTitle: 'Qué incluye siempre',
      notIncludedTitle: 'Qué no está incluido',
      stackTitle: 'Tecnologías que uso',
      pricingTitle: '¿Cuánto cuesta tu web?',
      pricingNote: '* Precios orientativos. Siempre presupuesto antes de empezar.',
      firstClient: 'Al ser mi primer cliente real, ofrezco precios especialmente competitivos para que puedas probarme sin riesgo.',
      complexityTitle: '1. Tipo de proyecto',
      planTitle: '2. Qué incluye',
      from: 'Desde',
      popular: 'Más completo',
      ctaTitle: '¿No sabes qué necesitas?',
      ctaSub: 'Cuéntame tu idea y te oriento sin compromiso.',
      ctaBtn: 'Hablemos',
    },
    en: {
      title: 'Services & Pricing',
      sub: 'What I build, which technologies I use and what it costs — all clear from the start.',
      typesTitle: 'What types of sites do I build?',
      includedTitle: 'Always included',
      notIncludedTitle: 'Not included',
      stackTitle: 'Technologies I use',
      pricingTitle: 'How much does your site cost?',
      pricingNote: '* Approximate prices. I always quote before starting.',
      firstClient: 'Being my first real client, I offer especially competitive prices so you can try me risk-free.',
      complexityTitle: '1. Project type',
      planTitle: '2. What\'s included',
      from: 'From',
      popular: 'Most complete',
      ctaTitle: "Don't know what you need?",
      ctaSub: 'Tell me your idea and I\'ll guide you, no commitment.',
      ctaBtn: "Let's talk",
    },
  }[lang];

  const levels = complexityLevels[lang];
  const planList = plans[lang];
  const selectedLevel = levels.find((l) => l.id === complexity)!;

  return (
    <div style={{ background: '#050010', minHeight: '100vh' }}>
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 text-center" style={{ background: 'linear-gradient(180deg, #0d0030 0%, #050010 100%)' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-6xl font-black text-white mb-4"
        >
          {t.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/50 text-sm sm:text-lg max-w-2xl mx-auto"
        >
          {t.sub}
        </motion.p>
      </section>

      {/* Types of sites */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#070012' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-black text-white mb-8 sm:mb-12 text-center"
          >
            {t.typesTitle}
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {serviceTypes[lang].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="p-5 sm:p-6 rounded-2xl border border-white/8 hover:border-purple-500/30 transition-colors"
                style={{ background: 'rgba(108,0,255,0.04)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #6c00ff33, #00d4ff33)' }}
                >
                  <Icon size={20} className="text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Included / Not included */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#06000f' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl border border-green-500/20"
            style={{ background: 'rgba(0,200,100,0.04)' }}
          >
            <h3 className="text-white font-black text-xl sm:text-2xl mb-6 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check size={14} className="text-green-400" />
              </span>
              {t.includedTitle}
            </h3>
            <ul className="space-y-3">
              {included[lang].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not included */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl border border-red-500/15"
            style={{ background: 'rgba(255,50,50,0.03)' }}
          >
            <h3 className="text-white font-black text-xl sm:text-2xl mb-6 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-red-500/15 flex items-center justify-center">
                <X size={14} className="text-red-400" />
              </span>
              {t.notIncludedTitle}
            </h3>
            <ul className="space-y-3">
              {notIncluded[lang].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <X size={14} className="text-red-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-white/50">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#07001a' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-black text-white mb-8 sm:mb-10 text-center"
          >
            {t.stackTitle}
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {techStack.map(({ name, note }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="px-4 py-2.5 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors text-center"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="text-white font-semibold text-sm">{name}</div>
                <div className="text-white/30 text-xs mt-0.5">{note}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#070014' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-5xl font-black text-white mb-3"
            >
              {t.pricingTitle}
            </motion.h2>
            {/* First client note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-start gap-3 mt-5 px-5 py-3 rounded-2xl border text-left max-w-xl mx-auto"
              style={{ background: 'rgba(0,212,255,0.05)', borderColor: 'rgba(0,212,255,0.15)' }}
            >
              <span className="text-xl flex-shrink-0">🎉</span>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{t.firstClient}</p>
            </motion.div>
          </div>

          {/* Complexity tabs */}
          <div className="mb-8">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4 text-center">{t.complexityTitle}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setComplexity(level.id as typeof complexity)}
                  className="flex-1 rounded-2xl border p-4 text-left transition-all duration-200"
                  style={{
                    background: complexity === level.id ? 'linear-gradient(135deg, rgba(108,0,255,0.2), rgba(0,212,255,0.1))' : 'rgba(255,255,255,0.02)',
                    borderColor: complexity === level.id ? 'rgba(108,0,255,0.5)' : 'rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xl">{level.emoji}</span>
                    <span className={`font-bold text-base ${complexity === level.id ? 'text-white' : 'text-white/50'}`}>{level.label}</span>
                  </div>
                  <p className={`text-xs sm:text-sm ${complexity === level.id ? 'text-white/70' : 'text-white/30'}`}>{level.desc}</p>
                </button>
              ))}
            </div>
            <motion.div
              key={complexity}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 px-4 py-2.5 rounded-xl border border-white/5 text-sm"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <span className="text-white/60 font-medium">{selectedLevel.detail}</span>{' '}
              <span className="text-white/30">Ej: {selectedLevel.examples}</span>
            </motion.div>
          </div>

          {/* Plan cards */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5 text-center">{t.planTitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {planList.map((plan, idx) => {
                const Icon = plan.icon;
                const price = plan.prices[complexity];
                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="relative rounded-2xl border p-5 transition-all hover:scale-[1.01]"
                    style={{
                      background: plan.popular ? 'linear-gradient(135deg, rgba(108,0,255,0.12), rgba(0,212,255,0.08))' : 'rgba(255,255,255,0.02)',
                      borderColor: plan.popular ? 'rgba(108,0,255,0.5)' : 'rgba(255,255,255,0.08)',
                      boxShadow: plan.popular ? '0 0 30px rgba(108,0,255,0.15)' : 'none',
                    }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: 'linear-gradient(90deg, #6c00ff, #00d4ff)' }}>
                        {t.popular}
                      </div>
                    )}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: plan.popular ? 'linear-gradient(135deg, #6c00ff55, #00d4ff44)' : 'rgba(255,255,255,0.06)' }}>
                        <Icon size={18} className={plan.popular ? 'text-cyan-300' : 'text-white/50'} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-base leading-tight">{plan.title}</h3>
                        <p className="text-white/40 text-xs">{plan.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-white/30 text-xs">{t.from}</div>
                        <div className="text-2xl font-black" style={{ background: 'linear-gradient(90deg, #a366ff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                          {price.toLocaleString()}€
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check size={10} className={i === 0 && plan.id !== 'frontend' ? 'text-white/20 mt-1' : 'text-cyan-400 mt-1'} />
                          <span className={i === 0 && plan.id !== 'frontend' ? 'text-white/30' : 'text-white/65'}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
            <p className="text-white/25 text-xs text-center mt-5 max-w-xl mx-auto">{t.pricingNote}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#050010' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto rounded-3xl p-8 sm:p-12 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(108,0,255,0.16), rgba(0,212,255,0.08))', border: '1px solid rgba(108,0,255,0.25)' }}
        >
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">{t.ctaTitle}</h2>
          <p className="text-white/50 text-sm sm:text-base mb-6">{t.ctaSub}</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white hover:scale-105 transition-all"
            style={{ background: 'linear-gradient(135deg, #6c00ff, #00d4ff)' }}
          >
            {t.ctaBtn}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}

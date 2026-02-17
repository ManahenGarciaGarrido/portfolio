'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Code2, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/portfolio/Navbar';
import SiteFooter from '@/components/portfolio/SiteFooter';
import { useLang } from '@/hooks/useLang';
import { staggerContainer, fadeUp } from '@/lib/animations';

const featuredDemos = [
  { slug: 'startup', title: 'Startup Tech', titleEn: 'Tech Startup', sector: 'Tecnología', bg: '#0f0020', accent: '#6c00ff' },
  { slug: 'restaurante', title: 'Restaurante', titleEn: 'Restaurant', sector: 'Hostelería', bg: '#1a0a00', accent: '#d4a017' },
  { slug: 'tienda-moda', title: 'Tienda de Moda', titleEn: 'Fashion Store', sector: 'E-commerce', bg: '#000000', accent: '#FFE600' },
  { slug: 'clinica', title: 'Clínica Médica', titleEn: 'Medical Clinic', sector: 'Salud', bg: '#f0f7ff', accent: '#0055cc' },
  { slug: 'joyeria', title: 'Joyería de Lujo', titleEn: 'Luxury Jeweler', sector: 'Lujo', bg: '#000000', accent: '#d4af37' },
  { slug: 'agencia', title: 'Agencia Digital', titleEn: 'Digital Agency', sector: 'Marketing', bg: '#000000', accent: '#00ff88' },
];

const stats = [
  { value: '25+', labelEs: 'webs demo', labelEn: 'demo sites' },
  { value: '100%', labelEs: 'código tuyo', labelEn: 'your code' },
  { value: '24h', labelEs: 'respuesta', labelEn: 'response' },
  { value: '0€', labelEs: 'si no convence', labelEn: 'if not happy' },
];

const pillars = {
  es: [
    { icon: Zap, title: 'Diseño que impacta', desc: 'Animaciones fluidas, jerarquía visual clara y UI moderna.' },
    { icon: Code2, title: 'Código limpio', desc: 'TypeScript, Next.js y buenas prácticas desde el día uno.' },
    { icon: Smartphone, title: 'Siempre responsive', desc: 'Perfecto en cualquier pantalla: móvil, tablet y escritorio.' },
    { icon: ShieldCheck, title: 'Precio cerrado', desc: 'Presupuesto antes de empezar. Sin sorpresas ni letra pequeña.' },
  ],
  en: [
    { icon: Zap, title: 'Impactful design', desc: 'Smooth animations, clear visual hierarchy and modern UI.' },
    { icon: Code2, title: 'Clean code', desc: 'TypeScript, Next.js and best practices from day one.' },
    { icon: Smartphone, title: 'Always responsive', desc: 'Perfect on any screen: mobile, tablet and desktop.' },
    { icon: ShieldCheck, title: 'Fixed price', desc: 'Quote before starting. No surprises, no hidden fees.' },
  ],
};

export default function HomePage() {
  const [lang] = useLang();

  const t = {
    es: {
      available: 'Disponible para proyectos',
      greeting: 'Hola, soy',
      tagline: 'Diseño webs que convierten visitas en clientes',
      description: 'Desarrollo webs profesionales con diseño impactante, animaciones modernas y código limpio. Mira mis demos y si te gustan, hablamos.',
      ctaPortfolio: 'Ver todos los proyectos',
      ctaContact: 'Contactar',
      featuredTitle: 'Proyectos demo',
      featuredSub: 'Cada web tiene identidad propia, lista para adaptar a cualquier cliente.',
      featuredBtn: 'Ver demo',
      featuredAll: 'Ver los 25 demos',
      pillarsTitle: '¿Por qué elegiría trabajar conmigo?',
      statsTitle: 'En números',
      ctaBannerTitle: '¿Tienes un proyecto en mente?',
      ctaBannerSub: 'Cuéntamelo sin compromiso. En 24h tienes respuesta.',
      ctaBannerBtn: 'Hablemos ahora',
    },
    en: {
      available: 'Available for projects',
      greeting: "Hi, I'm",
      tagline: 'I design websites that turn visitors into clients',
      description: 'I build professional websites with stunning design, modern animations and clean code. Check my demos and if you like them, let\'s talk.',
      ctaPortfolio: 'See all projects',
      ctaContact: 'Contact me',
      featuredTitle: 'Demo projects',
      featuredSub: 'Each site has its own identity, ready to adapt to any client.',
      featuredBtn: 'View demo',
      featuredAll: 'View all 25 demos',
      pillarsTitle: 'Why would you choose to work with me?',
      statsTitle: 'By the numbers',
      ctaBannerTitle: 'Got a project in mind?',
      ctaBannerSub: 'Tell me about it, no strings attached. Reply within 24h.',
      ctaBannerBtn: "Let's talk now",
    },
  }[lang];

  const nameLetters = 'Manahen García'.split('');

  return (
    <div style={{ background: '#050010' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 text-center pt-16"
        style={{ background: 'linear-gradient(135deg, #050010 0%, #0d0030 50%, #050020 100%)' }}
      >
        {/* Blobs */}
        <div
          className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-80 sm:h-80 opacity-20 animate-blob pointer-events-none"
          style={{ background: 'radial-gradient(circle, #6c00ff, transparent)', filter: 'blur(40px)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 opacity-15 animate-blob pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', filter: 'blur(50px)', animationDelay: '3s' }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-green-400 border border-green-400/30 rounded-full px-4 py-1.5 bg-green-400/10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t.available}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={fadeUp} className="text-white/60 text-base sm:text-xl mb-3">
            {t.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1 variants={staggerContainer} className="text-4xl sm:text-7xl md:text-8xl font-black mb-4 sm:mb-6 leading-none">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {letter === ' ' ? '\u00a0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Tagline */}
          <motion.h2 variants={fadeUp} className="text-lg sm:text-2xl md:text-3xl font-semibold text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto">
            {t.tagline}
          </motion.h2>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-white/50 text-sm sm:text-lg max-w-xl mx-auto mb-8 sm:mb-12">
            {t.description}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/portafolio"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              style={{ background: 'linear-gradient(135deg, #6c00ff, #00d4ff)' }}
            >
              {t.ctaPortfolio}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white/90 border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all hover:scale-105 text-sm sm:text-base"
            >
              {t.ctaContact}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 border-y border-white/6" style={{ background: '#07001a' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <div
                className="text-3xl sm:text-4xl font-black mb-1"
                style={{
                  background: 'linear-gradient(90deg, #a78bfa, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </div>
              <div className="text-white/40 text-xs sm:text-sm font-medium">
                {lang === 'es' ? s.labelEs : s.labelEn}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED DEMOS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#070012' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-black text-white mb-3"
            >
              {t.featuredTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-white/50 text-sm sm:text-lg max-w-2xl mx-auto"
            >
              {t.featuredSub}
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8"
          >
            {featuredDemos.map((demo) => {
              const isLight = demo.bg === '#ffffff' || demo.bg === '#f0f7ff';
              return (
                <motion.div key={demo.slug} variants={fadeUp}>
                  <Link href={`/demos/${demo.slug}`} className="block group">
                    <div
                      className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                      style={{ background: demo.bg }}
                    >
                      {/* Mockup */}
                      <div className="h-36 sm:h-48 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: demo.accent }} />
                        <div className="h-full flex flex-col">
                          <div className="h-[13%]" style={{ background: demo.bg }} />
                          <div className="h-[42%]" style={{ background: isLight ? '#e8f0fa' : `${demo.accent}18` }} />
                          <div className="h-[25%]" style={{ background: isLight ? '#f8faff' : `${demo.accent}08` }} />
                          <div className="h-[20%]" style={{ background: demo.bg }} />
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                          <span
                            className="flex items-center gap-2 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                            style={{ background: demo.accent, color: isLight ? '#000' : '#fff' }}
                          >
                            <ExternalLink size={13} />
                            {t.featuredBtn}
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-2.5 sm:p-3" style={{ background: demo.bg }}>
                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: demo.accent }}>
                          {demo.sector}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold" style={{ color: isLight ? '#111' : '#fff' }}>
                          {lang === 'en' ? demo.title : demo.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center">
            <Link
              href="/portafolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all text-sm font-medium"
            >
              {t.featuredAll}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#06000f' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-black text-white mb-10 sm:mb-14 text-center"
          >
            {t.pillarsTitle}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars[lang].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-white/8 hover:border-purple-500/30 transition-colors"
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

      {/* ── CTA BANNER ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#050010' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(108,0,255,0.18) 0%, rgba(0,212,255,0.10) 100%)',
            border: '1px solid rgba(108,0,255,0.3)',
            boxShadow: '0 0 80px rgba(108,0,255,0.12)',
          }}
        >
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 50%, #6c00ff22, transparent 70%)' }}
          />
          <h2 className="relative text-2xl sm:text-4xl font-black text-white mb-3 sm:mb-4">{t.ctaBannerTitle}</h2>
          <p className="relative text-white/50 text-sm sm:text-lg mb-6 sm:mb-8">{t.ctaBannerSub}</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105 hover:shadow-xl text-sm sm:text-base"
            style={{ background: 'linear-gradient(135deg, #6c00ff, #00d4ff)' }}
          >
            {t.ctaBannerBtn}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}

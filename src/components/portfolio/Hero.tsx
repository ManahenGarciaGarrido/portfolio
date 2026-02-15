'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle, ChevronDown } from 'lucide-react';
import { staggerContainer, fadeUp, fadeIn } from '@/lib/animations';

interface HeroProps {
  lang: 'es' | 'en';
}

const content = {
  es: {
    available: 'Disponible para proyectos',
    greeting: 'Hola, soy',
    tagline: 'Diseño webs que convierten visitas en clientes',
    description:
      'Desarrollo webs profesionales con diseño impactante, animaciones modernas y código limpio. Tiendas online, landing pages, portafolios y webs corporativas.',
    ctaProjects: 'Ver Proyectos',
    ctaContact: 'Contactar',
    scroll: 'Scroll',
  },
  en: {
    available: 'Available for projects',
    greeting: "Hi, I'm",
    tagline: 'I design websites that turn visitors into clients',
    description:
      'I build professional websites with stunning design, modern animations, and clean code. Online stores, landing pages, portfolios, and corporate sites.',
    ctaProjects: 'View Projects',
    ctaContact: 'Contact Me',
    scroll: 'Scroll',
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = content[lang];
  const nameLetters = 'Manahen García'.split('');

  return (
    <section
      className="relative min-h-screen r-hero-fullscreen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 text-center"
      style={{ background: 'linear-gradient(135deg, #050010 0%, #0d0030 50%, #050020 100%)' }}
    >
      {/* Background blobs — reducidos en móvil para mejor rendimiento */}
      <div
        className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-80 sm:h-80 opacity-20 animate-blob"
        style={{ background: 'radial-gradient(circle, #6c00ff, transparent)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 opacity-15 animate-blob"
        style={{
          background: 'radial-gradient(circle, #00d4ff, transparent)',
          filter: 'blur(50px)',
          animationDelay: '3s',
        }}
      />

      {/* Content */}
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

        {/* Name — letter by letter */}
        <motion.h1
          variants={staggerContainer}
          className="text-4xl sm:text-7xl md:text-8xl font-black mb-4 sm:mb-6 leading-none"
        >
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
        <motion.h2
          variants={fadeUp}
          className="text-lg sm:text-2xl md:text-3xl font-semibold text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto"
        >
          {t.tagline}
        </motion.h2>

        {/* Description */}
        <motion.p variants={fadeUp} className="text-white/50 text-sm sm:text-lg max-w-xl mx-auto mb-6 sm:mb-10">
          {t.description}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
          <a
            href="#proyectos"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            style={{ background: 'linear-gradient(135deg, #6c00ff, #00d4ff)' }}
          >
            {t.ctaProjects}
          </a>
          <a
            href="#contacto"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white/90 border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all hover:scale-105 text-sm sm:text-base"
          >
            {t.ctaContact}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-5">
          {[
            { icon: Github, href: 'https://github.com/ManahenGarciaGarrido', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/manahen-garcia-garrido-71524b1a0/', label: 'LinkedIn' },
            { icon: Instagram, href: 'https://www.instagram.com/manahengarcia10/', label: 'Instagram' },
            {
              icon: MessageCircle,
              href: 'https://wa.me/34640038508?text=Hola+Manahen%2C+vi+tu+portfolio+y+me+interesa+hablar',
              label: 'WhatsApp',
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/40 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs"
      >
        <span>{t.scroll}</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}

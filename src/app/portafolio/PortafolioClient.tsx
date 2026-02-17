'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Navbar from '@/components/portfolio/Navbar';
import SiteFooter from '@/components/portfolio/SiteFooter';
import { useLang } from '@/hooks/useLang';
import { fadeUp, staggerContainer } from '@/lib/animations';

const allDemos = [
  { slug: 'agencia', title: 'Agencia Digital', sector: 'Marketing', bg: '#000000', accent: '#00ff88' },
  { slug: 'startup', title: 'Startup Tech', sector: 'Tecnología', bg: '#0f0020', accent: '#6c00ff' },
  { slug: 'gym', title: 'Gimnasio', sector: 'Fitness', bg: '#0a0a0a', accent: '#ff3300' },
  { slug: 'fotografo', title: 'Fotógrafo', sector: 'Fotografía', bg: '#000000', accent: '#b8860b' },
  { slug: 'tienda-moda', title: 'Tienda Moda', sector: 'E-commerce', bg: '#000000', accent: '#FFE600' },
  { slug: 'restaurante', title: 'Restaurante', sector: 'Hostelería', bg: '#1a0a00', accent: '#d4a017' },
  { slug: 'inmobiliaria', title: 'Inmobiliaria', sector: 'Inmuebles', bg: '#ffffff', accent: '#001a4d' },
  { slug: 'spa', title: 'Spa & Belleza', sector: 'Bienestar', bg: '#fff9f0', accent: '#c9a0c9' },
  { slug: 'cafeteria', title: 'Cafetería', sector: 'Hostelería', bg: '#fdf5e6', accent: '#3d1c02' },
  { slug: 'abogados', title: 'Despacho Abogados', sector: 'Legal', bg: '#0d1b2a', accent: '#c9a227' },
  { slug: 'hotel', title: 'Hotel Boutique', sector: 'Hostelería', bg: '#0a0805', accent: '#c8a96e' },
  { slug: 'cocktailbar', title: 'Bar de Cócteles', sector: 'Ocio', bg: '#05001a', accent: '#b44ef0' },
  { slug: 'joyeria', title: 'Joyería de Lujo', sector: 'Lujo', bg: '#000000', accent: '#d4af37' },
  { slug: 'clinica', title: 'Clínica Médica', sector: 'Salud', bg: '#f0f7ff', accent: '#0055cc' },
  { slug: 'barberia', title: 'Barbería', sector: 'Belleza', bg: '#1a0000', accent: '#ff4444' },
  { slug: 'academia', title: 'Academia Online', sector: 'Educación', bg: '#0a0a2e', accent: '#4fc3f7' },
  { slug: 'musica', title: 'DJ / Música', sector: 'Entretenimiento', bg: '#080010', accent: '#ff00cc' },
  { slug: 'arquitecto', title: 'Arquitecto', sector: 'Diseño', bg: '#f4f4f0', accent: '#111111' },
  { slug: 'fisio', title: 'Fisioterapia', sector: 'Salud', bg: '#001f3f', accent: '#00c896' },
  { slug: 'tecnologia', title: 'Tienda Tecnología', sector: 'E-commerce', bg: '#fafafa', accent: '#0066ff' },
  { slug: 'viajes', title: 'Agencia de Viajes', sector: 'Turismo', bg: '#001a35', accent: '#ff8c00' },
  { slug: 'florista', title: 'Floristería', sector: 'Comercio', bg: '#fdf6f0', accent: '#2d6a4f' },
  { slug: 'taller', title: 'Taller Mecánico', sector: 'Automoción', bg: '#0d0d0d', accent: '#ff6600' },
  { slug: 'yoga', title: 'Centro de Yoga', sector: 'Bienestar', bg: '#f7f0e8', accent: '#c05c1a' },
  { slug: 'eventos', title: 'Eventos & Bodas', sector: 'Eventos', bg: '#0d0d0d', accent: '#d4af37' },
];

const sectors = ['Todos', ...Array.from(new Set(allDemos.map((d) => d.sector))).sort()];

export default function PortafolioClient() {
  const [lang] = useLang();
  const [activeFilter, setActiveFilter] = useState('Todos');

  const t = {
    es: {
      title: 'Portfolio de proyectos',
      sub: '25 webs demo con identidad visual propia, animaciones y secciones reales. Cada una es un punto de partida para adaptar a tu negocio.',
      filterAll: 'Todos',
      viewDemo: 'Ver demo',
      count: (n: number) => `${n} proyecto${n !== 1 ? 's' : ''}`,
    },
    en: {
      title: 'Project portfolio',
      sub: '25 demo sites with their own visual identity, animations and real sections. Each one is a starting point to adapt to your business.',
      filterAll: 'All',
      viewDemo: 'View demo',
      count: (n: number) => `${n} project${n !== 1 ? 's' : ''}`,
    },
  }[lang];

  const filtered = activeFilter === 'Todos' || activeFilter === 'All'
    ? allDemos
    : allDemos.filter((d) => d.sector === activeFilter);

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

      {/* Filters */}
      <div className="sticky top-16 z-40 px-4 sm:px-6 py-3 border-b border-white/6" style={{ background: 'rgba(5,0,16,0.92)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2">
          {sectors.map((sector) => {
            const label = sector;
            const active = activeFilter === sector;
            return (
              <button
                key={sector}
                onClick={() => setActiveFilter(sector)}
                className="flex-shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200"
                style={{
                  background: active ? 'linear-gradient(135deg, #6c00ff, #00d4ff)' : 'rgba(255,255,255,0.06)',
                  color: active ? '#fff' : 'rgba(255,255,255,0.45)',
                  border: active ? 'none' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {label}
              </button>
            );
          })}
          <span className="ml-auto flex-shrink-0 text-white/25 text-xs">
            {filtered.length} proyectos
          </span>
        </div>
      </div>

      {/* Grid */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4"
            >
              {filtered.map((demo) => {
                const isLight = ['#ffffff', '#fff9f0', '#fdf5e6', '#fdf6f0', '#f0f7ff', '#fafafa', '#f4f4f0', '#f7f0e8'].includes(demo.bg);
                return (
                  <motion.div key={demo.slug} variants={fadeUp} layout>
                    <Link href={`/demos/${demo.slug}`} className="block group">
                      <div
                        className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                        style={{ background: demo.bg }}
                      >
                        {/* CSS Mockup */}
                        <div className="h-32 sm:h-40 relative overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: demo.accent }} />
                          <div className="h-full flex flex-col">
                            <div className="h-[13%]" style={{ background: demo.bg }} />
                            <div className="h-[40%]" style={{ background: isLight ? '#e8f0fa' : `${demo.accent}18` }} />
                            <div className="h-[27%]" style={{ background: isLight ? '#f4f8ff' : `${demo.accent}08` }} />
                            <div className="h-[20%]" style={{ background: demo.bg }} />
                          </div>
                          {/* Hover overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                            <span
                              className="flex items-center gap-2 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full"
                              style={{ background: demo.accent, color: isLight ? '#000' : '#fff' }}
                            >
                              <ExternalLink size={13} />
                              {t.viewDemo}
                            </span>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-2.5 sm:p-3" style={{ background: demo.bg }}>
                          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: demo.accent }}>
                            {demo.sector}
                          </p>
                          <p className="text-xs sm:text-sm font-semibold leading-tight" style={{ color: isLight ? '#111' : '#fff' }}>
                            {demo.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

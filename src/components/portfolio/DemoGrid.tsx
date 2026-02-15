'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/animations';

interface DemoGridProps {
  lang: 'es' | 'en';
}

const demos = [
  {
    slug: 'agencia',
    title: 'Agencia Digital',
    titleEn: 'Digital Agency',
    sector: 'Marketing',
    bg: '#000000',
    accent: '#00ff88',
    preview: [
      { h: '12%', bg: '#000', text: '#00ff88' },
      { h: '30%', bg: '#0a0a0a' },
      { h: '28%', bg: '#000' },
      { h: '30%', bg: '#111' },
    ],
  },
  {
    slug: 'startup',
    title: 'Startup Tech',
    titleEn: 'Tech Startup',
    sector: 'Tecnología',
    bg: '#0f0020',
    accent: '#6c00ff',
    preview: [
      { h: '15%', bg: '#0f0020' },
      { h: '40%', bg: '#1a0040' },
      { h: '25%', bg: '#0f0020' },
      { h: '20%', bg: '#0a001a' },
    ],
  },
  {
    slug: 'gym',
    title: 'Gimnasio',
    titleEn: 'Gym',
    sector: 'Fitness',
    bg: '#0a0a0a',
    accent: '#ff3300',
    preview: [
      { h: '14%', bg: '#0a0a0a' },
      { h: '35%', bg: '#1a0000' },
      { h: '27%', bg: '#0d0d0d' },
      { h: '24%', bg: '#0a0a0a' },
    ],
  },
  {
    slug: 'fotografo',
    title: 'Fotógrafo',
    titleEn: 'Photographer',
    sector: 'Fotografía',
    bg: '#000000',
    accent: '#b8860b',
    preview: [
      { h: '13%', bg: '#000' },
      { h: '50%', bg: '#111' },
      { h: '37%', bg: '#0a0a0a' },
    ],
  },
  {
    slug: 'tienda-moda',
    title: 'Tienda de Moda',
    titleEn: 'Fashion Store',
    sector: 'E-commerce',
    bg: '#000000',
    accent: '#FFE600',
    preview: [
      { h: '12%', bg: '#000' },
      { h: '40%', bg: '#0a0a0a' },
      { h: '28%', bg: '#111' },
      { h: '20%', bg: '#000' },
    ],
  },
  {
    slug: 'restaurante',
    title: 'Restaurante',
    titleEn: 'Restaurant',
    sector: 'Hostelería',
    bg: '#1a0a00',
    accent: '#d4a017',
    preview: [
      { h: '14%', bg: '#1a0a00' },
      { h: '35%', bg: '#2a1500' },
      { h: '27%', bg: '#1a0a00' },
      { h: '24%', bg: '#110800' },
    ],
  },
  {
    slug: 'inmobiliaria',
    title: 'Inmobiliaria',
    titleEn: 'Real Estate',
    sector: 'Inmuebles',
    bg: '#ffffff',
    accent: '#001a4d',
    preview: [
      { h: '14%', bg: '#001a4d' },
      { h: '38%', bg: '#f8f9fa' },
      { h: '25%', bg: '#ffffff' },
      { h: '23%', bg: '#f0f4f8' },
    ],
  },
  {
    slug: 'spa',
    title: 'Spa & Belleza',
    titleEn: 'Spa & Beauty',
    sector: 'Bienestar',
    bg: '#fff9f0',
    accent: '#c9a0c9',
    preview: [
      { h: '13%', bg: '#f8e5ee' },
      { h: '42%', bg: '#fff9f0' },
      { h: '25%', bg: '#f0e8f8' },
      { h: '20%', bg: '#fdf0f8' },
    ],
  },
  {
    slug: 'cafeteria',
    title: 'Cafetería',
    titleEn: 'Coffee Shop',
    sector: 'Hostelería',
    bg: '#fdf5e6',
    accent: '#3d1c02',
    preview: [
      { h: '13%', bg: '#3d1c02' },
      { h: '40%', bg: '#fdf5e6' },
      { h: '27%', bg: '#f5e8cc' },
      { h: '20%', bg: '#ede0c4' },
    ],
  },
  {
    slug: 'abogados',
    title: 'Despacho Abogados',
    titleEn: 'Law Firm',
    sector: 'Legal',
    bg: '#0d1b2a',
    accent: '#c9a227',
    preview: [
      { h: '14%', bg: '#0d1b2a' },
      { h: '36%', bg: '#112238' },
      { h: '26%', bg: '#0d1b2a' },
      { h: '24%', bg: '#091526' },
    ],
  },
  // === 15 NUEVOS DEMOS ===
  {
    slug: 'hotel',
    title: 'Hotel Boutique',
    titleEn: 'Boutique Hotel',
    sector: 'Hostelería',
    bg: '#0a0805',
    accent: '#c8a96e',
    preview: [
      { h: '13%', bg: '#0a0805' },
      { h: '38%', bg: '#1a1208' },
      { h: '27%', bg: '#0f0b05' },
      { h: '22%', bg: '#0a0805' },
    ],
  },
  {
    slug: 'cocktailbar',
    title: 'Bar de Cócteles',
    titleEn: 'Cocktail Bar',
    sector: 'Ocio',
    bg: '#05001a',
    accent: '#b44ef0',
    preview: [
      { h: '13%', bg: '#05001a' },
      { h: '40%', bg: '#0a0030' },
      { h: '25%', bg: '#05001a' },
      { h: '22%', bg: '#03000f' },
    ],
  },
  {
    slug: 'joyeria',
    title: 'Joyería de Lujo',
    titleEn: 'Luxury Jeweler',
    sector: 'Lujo',
    bg: '#000000',
    accent: '#d4af37',
    preview: [
      { h: '13%', bg: '#000' },
      { h: '40%', bg: '#0a0a0a' },
      { h: '25%', bg: '#000' },
      { h: '22%', bg: '#111' },
    ],
  },
  {
    slug: 'clinica',
    title: 'Clínica Médica',
    titleEn: 'Medical Clinic',
    sector: 'Salud',
    bg: '#f0f7ff',
    accent: '#0055cc',
    preview: [
      { h: '13%', bg: '#0055cc' },
      { h: '38%', bg: '#f0f7ff' },
      { h: '27%', bg: '#e8f3ff' },
      { h: '22%', bg: '#fff' },
    ],
  },
  {
    slug: 'barberia',
    title: 'Barbería',
    titleEn: 'Barbershop',
    sector: 'Belleza',
    bg: '#1a0000',
    accent: '#ff4444',
    preview: [
      { h: '13%', bg: '#1a0000' },
      { h: '38%', bg: '#250000' },
      { h: '27%', bg: '#1a0000' },
      { h: '22%', bg: '#110000' },
    ],
  },
  {
    slug: 'academia',
    title: 'Academia Online',
    titleEn: 'Online Academy',
    sector: 'Educación',
    bg: '#0a0a2e',
    accent: '#4fc3f7',
    preview: [
      { h: '13%', bg: '#0a0a2e' },
      { h: '38%', bg: '#141450' },
      { h: '27%', bg: '#0a0a2e' },
      { h: '22%', bg: '#06061a' },
    ],
  },
  {
    slug: 'musica',
    title: 'DJ / Música',
    titleEn: 'DJ / Music',
    sector: 'Entretenimiento',
    bg: '#080010',
    accent: '#ff00cc',
    preview: [
      { h: '13%', bg: '#080010' },
      { h: '40%', bg: '#12001e' },
      { h: '25%', bg: '#080010' },
      { h: '22%', bg: '#04000a' },
    ],
  },
  {
    slug: 'arquitecto',
    title: 'Arquitecto',
    titleEn: 'Architect',
    sector: 'Diseño',
    bg: '#f4f4f0',
    accent: '#111111',
    preview: [
      { h: '13%', bg: '#111' },
      { h: '38%', bg: '#f4f4f0' },
      { h: '27%', bg: '#e8e8e4' },
      { h: '22%', bg: '#f4f4f0' },
    ],
  },
  {
    slug: 'fisio',
    title: 'Fisioterapia',
    titleEn: 'Physiotherapy',
    sector: 'Salud',
    bg: '#001f3f',
    accent: '#00c896',
    preview: [
      { h: '13%', bg: '#001f3f' },
      { h: '38%', bg: '#002e5c' },
      { h: '27%', bg: '#001f3f' },
      { h: '22%', bg: '#001428' },
    ],
  },
  {
    slug: 'tecnologia',
    title: 'Tienda de Tecnología',
    titleEn: 'Tech Store',
    sector: 'E-commerce',
    bg: '#fafafa',
    accent: '#0066ff',
    preview: [
      { h: '13%', bg: '#0066ff' },
      { h: '38%', bg: '#fafafa' },
      { h: '27%', bg: '#f0f0f0' },
      { h: '22%', bg: '#fff' },
    ],
  },
  {
    slug: 'viajes',
    title: 'Agencia de Viajes',
    titleEn: 'Travel Agency',
    sector: 'Turismo',
    bg: '#001a35',
    accent: '#ff8c00',
    preview: [
      { h: '13%', bg: '#001a35' },
      { h: '38%', bg: '#002855' },
      { h: '27%', bg: '#001a35' },
      { h: '22%', bg: '#001020' },
    ],
  },
  {
    slug: 'florista',
    title: 'Floristería',
    titleEn: 'Florist',
    sector: 'Comercio',
    bg: '#fdf6f0',
    accent: '#2d6a4f',
    preview: [
      { h: '13%', bg: '#2d6a4f' },
      { h: '38%', bg: '#fdf6f0' },
      { h: '27%', bg: '#f5ece3' },
      { h: '22%', bg: '#fdf6f0' },
    ],
  },
  {
    slug: 'taller',
    title: 'Taller Mecánico',
    titleEn: 'Auto Workshop',
    sector: 'Automoción',
    bg: '#0d0d0d',
    accent: '#ff6600',
    preview: [
      { h: '13%', bg: '#0d0d0d' },
      { h: '38%', bg: '#1a1a1a' },
      { h: '27%', bg: '#0d0d0d' },
      { h: '22%', bg: '#111' },
    ],
  },
  {
    slug: 'yoga',
    title: 'Centro de Yoga',
    titleEn: 'Yoga Studio',
    sector: 'Bienestar',
    bg: '#f7f0e8',
    accent: '#c05c1a',
    preview: [
      { h: '13%', bg: '#c05c1a' },
      { h: '38%', bg: '#f7f0e8' },
      { h: '27%', bg: '#f0e8da' },
      { h: '22%', bg: '#f7f0e8' },
    ],
  },
  {
    slug: 'eventos',
    title: 'Eventos & Bodas',
    titleEn: 'Events & Weddings',
    sector: 'Eventos',
    bg: '#0d0d0d',
    accent: '#d4af37',
    preview: [
      { h: '13%', bg: '#0d0d0d' },
      { h: '38%', bg: '#1a1a1a' },
      { h: '27%', bg: '#0d0d0d' },
      { h: '22%', bg: '#111' },
    ],
  },
];

export default function DemoGrid({ lang }: DemoGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const heading = lang === 'en' ? 'My Demo Projects' : 'Mis Proyectos Demo';
  const subheading =
    lang === 'en'
      ? 'Each site has a unique visual identity, animations, and real sections ready to adapt for any client.'
      : 'Cada web tiene identidad visual propia, animaciones y secciones reales listas para adaptar a cualquier cliente.';
  const viewDemo = lang === 'en' ? 'View Demo' : 'Ver Demo';

  return (
    <section id="proyectos" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#070012' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-black text-white mb-3 sm:mb-4"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/50 text-sm sm:text-lg max-w-2xl mx-auto"
          >
            {subheading}
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 mx-auto mt-6 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6c00ff, #00d4ff)' }}
          />
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4"
        >
          {demos.map((demo) => (
            <motion.div key={demo.slug} variants={fadeUp}>
              <Link href={`/demos/${demo.slug}`} className="block group">
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                  style={{ background: demo.bg }}
                >
                  {/* CSS Mockup */}
                  <div className="h-32 sm:h-40 flex flex-col overflow-hidden">
                    {demo.preview.map((block, i) => (
                      <div
                        key={i}
                        style={{
                          height: block.h,
                          background: block.bg,
                          borderBottom: i < demo.preview.length - 1 ? `1px solid ${demo.accent}22` : undefined,
                        }}
                      />
                    ))}
                    {/* Accent strip */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: demo.accent }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                      <span
                        className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full"
                        style={{ background: demo.accent, color: demo.bg === '#ffffff' || demo.bg === '#fdf5e6' || demo.bg === '#fff9f0' ? '#000' : '#fff' }}
                      >
                        <ExternalLink size={14} />
                        {viewDemo}
                      </span>
                    </div>
                  </div>

                  {/* Card info */}
                  <div className="p-2 sm:p-3" style={{ background: demo.bg }}>
                    <p
                      className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5"
                      style={{ color: demo.accent }}
                    >
                      {demo.sector}
                    </p>
                    <p
                      className="text-xs sm:text-sm font-semibold leading-tight"
                      style={{ color: demo.bg === '#ffffff' || demo.bg === '#fdf5e6' || demo.bg === '#fff9f0' ? '#111' : '#fff' }}
                    >
                      {lang === 'en' ? demo.titleEn : demo.title}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

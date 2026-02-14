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
    <section id="proyectos" className="py-24 px-6" style={{ background: '#070012' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {demos.map((demo) => (
            <motion.div key={demo.slug} variants={fadeUp}>
              <Link href={`/demos/${demo.slug}`} className="block group">
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                  style={{ background: demo.bg }}
                >
                  {/* CSS Mockup */}
                  <div className="h-40 flex flex-col overflow-hidden">
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
                  <div className="p-3" style={{ background: demo.bg }}>
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-0.5"
                      style={{ color: demo.accent }}
                    >
                      {demo.sector}
                    </p>
                    <p
                      className="text-sm font-semibold leading-tight"
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

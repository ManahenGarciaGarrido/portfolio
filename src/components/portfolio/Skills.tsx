'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Code2, TrendingUp, Smartphone } from 'lucide-react';
import { staggerContainer, fadeUp, slideLeft, slideRight } from '@/lib/animations';

interface SkillsProps {
  lang: 'es' | 'en';
}

const skills = [
  { name: 'Next.js / React', pct: 95 },
  { name: 'TypeScript', pct: 88 },
  { name: 'Tailwind CSS', pct: 96 },
  { name: 'Framer Motion', pct: 90 },
  { name: 'Node.js / APIs', pct: 80 },
  { name: 'Vercel / Deploy', pct: 95 },
];

const offers = {
  es: [
    { icon: Zap, title: 'Diseño Moderno', desc: 'Animaciones, contrastes y UX pensados para impactar.' },
    { icon: Code2, title: 'Código Limpio', desc: 'TypeScript, componentes reutilizables y buenas prácticas.' },
    { icon: TrendingUp, title: 'Conversión', desc: 'Landing pages diseñadas para convertir visitas en ventas.' },
    { icon: Smartphone, title: 'Responsive', desc: 'Perfecto en móvil, tablet y escritorio.' },
  ],
  en: [
    { icon: Zap, title: 'Modern Design', desc: 'Animations, contrast, and UX designed to impress.' },
    { icon: Code2, title: 'Clean Code', desc: 'TypeScript, reusable components, and best practices.' },
    { icon: TrendingUp, title: 'Conversion', desc: 'Landing pages designed to turn visits into sales.' },
    { icon: Smartphone, title: 'Responsive', desc: 'Perfect on mobile, tablet, and desktop.' },
  ],
};

function SkillBar({ name, pct, delay }: { name: string; pct: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-white/80 text-sm font-medium">{name}</span>
        <span className="text-white/40 text-sm">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #6c00ff, #00d4ff)' }}
        />
      </div>
    </div>
  );
}

export default function Skills({ lang }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const heading = lang === 'en' ? 'My Skills' : 'Mis Habilidades';
  const subheading =
    lang === 'en'
      ? 'The technologies I use to build fast, beautiful, high-converting websites.'
      : 'Las tecnologías que uso para construir webs rápidas, bonitas y que convierten.';
  const whatIOffer = lang === 'en' ? 'What I Offer' : 'Qué Ofrezco';
  const offerItems = offers[lang];

  return (
    <section id="habilidades" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#06000f' }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
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
            className="text-white/50 text-sm sm:text-lg max-w-xl mx-auto"
          >
            {subheading}
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Skills bars */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} pct={skill.pct} delay={i * 0.1} />
            ))}
          </motion.div>

          {/* Offer cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <motion.h3
              variants={slideRight}
              className="col-span-full text-lg font-bold text-white/70 mb-2"
            >
              {whatIOffer}
            </motion.h3>
            {offerItems.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="p-5 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-colors"
                style={{ background: 'rgba(108, 0, 255, 0.05)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'linear-gradient(135deg, #6c00ff33, #00d4ff33)' }}
                >
                  <Icon size={18} className="text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">{title}</h4>
                <p className="text-white/50 text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

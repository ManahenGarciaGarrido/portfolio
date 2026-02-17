'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle, ArrowRight, Code2, Zap, Users, Heart } from 'lucide-react';
import Navbar from '@/components/portfolio/Navbar';
import SiteFooter from '@/components/portfolio/SiteFooter';
import { useLang } from '@/hooks/useLang';
import { fadeUp, staggerContainer } from '@/lib/animations';

const skills = [
  { name: 'Next.js / React', pct: 95 },
  { name: 'TypeScript', pct: 88 },
  { name: 'Tailwind CSS', pct: 96 },
  { name: 'Framer Motion', pct: 90 },
  { name: 'Node.js / APIs', pct: 80 },
  { name: 'PostgreSQL / MongoDB', pct: 75 },
  { name: 'Vercel / Deploy', pct: 95 },
];

const tools = [
  'VS Code', 'Figma', 'Git & GitHub', 'Vercel', 'Postman',
  'Prisma', 'Stripe', 'Resend', 'Tailwind CSS', 'pnpm',
];

const values = {
  es: [
    { icon: Code2, title: 'Código limpio por defecto', desc: 'No entrego código que no entendería yo mismo dentro de 6 meses. TypeScript, componentes pequeños y nombres que explican lo que hacen.' },
    { icon: Zap, title: 'Velocidad sin sacrificar calidad', desc: 'Optimizo para que los tiempos de carga sean excelentes. Core Web Vitals, imágenes optimizadas y solo el código que hace falta.' },
    { icon: Users, title: 'Comunicación directa', desc: 'Sin intermediarios, sin burocracia. Me hablas a mí y yo construyo tu web. Sabes en todo momento en qué punto estamos.' },
    { icon: Heart, title: 'Me importa el resultado', desc: 'Cada proyecto es mi carta de presentación. Lo cuido porque de ello depende mi reputación y la satisfacción de cada cliente.' },
  ],
  en: [
    { icon: Code2, title: 'Clean code by default', desc: "I don't deliver code I wouldn't understand myself 6 months from now. TypeScript, small components and names that explain what they do." },
    { icon: Zap, title: 'Speed without sacrificing quality', desc: 'I optimize for excellent load times. Core Web Vitals, optimized images and only the code that\'s needed.' },
    { icon: Users, title: 'Direct communication', desc: "No middlemen, no bureaucracy. You talk to me and I build your site. You know exactly where we are at all times." },
    { icon: Heart, title: 'The result matters to me', desc: "Every project is my calling card. I take care of it because my reputation and each client's satisfaction depend on it." },
  ],
};

function SkillBar({ name, pct, delay }: { name: string; pct: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-white/80 text-sm font-medium">{name}</span>
        <span className="text-white/40 text-sm">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/8 overflow-hidden">
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

export default function SobreMiClient() {
  const [lang] = useLang();

  const t = {
    es: {
      title: 'Sobre mí',
      sub: 'Desarrollador web freelance en España, apasionado por el diseño y el código limpio.',
      bioTitle: 'Quién soy',
      bio: [
        'Soy Manahen García Garrido, desarrollador web freelance. Me dedico a construir webs profesionales que combinan diseño impactante con código de calidad — el tipo de web que hace que un visitante se quede y, sobre todo, que contacte.',
        'Trabajo principalmente con Next.js, React y TypeScript, y me especializo en interfaces que combinan animaciones fluidas, diseño responsive y rendimiento optimizado. Mi objetivo no es solo que la web "funcione", sino que sea la mejor versión posible del negocio online de cada cliente.',
        'Soy honesto sobre lo que sé y lo que no. Cuando algo está fuera de mis capacidades actuales, lo digo. Cuando me comprometo con un proyecto, me comprometo de verdad.',
      ],
      skillsTitle: 'Habilidades técnicas',
      toolsTitle: 'Herramientas que uso a diario',
      valuesTitle: 'Cómo me gusta trabajar',
      ctaTitle: '¿Trabajamos juntos?',
      ctaSub: 'Si lo que lees aquí encaja con lo que buscas, hablemos.',
      ctaBtn: 'Contactar',
      socialTitle: 'Encuéntrame en',
    },
    en: {
      title: 'About me',
      sub: 'Freelance web developer in Spain, passionate about design and clean code.',
      bioTitle: 'Who I am',
      bio: [
        "I'm Manahen García Garrido, a freelance web developer. I build professional websites that combine impactful design with quality code — the kind of site that makes a visitor stay and, most importantly, reach out.",
        'I primarily work with Next.js, React and TypeScript, and I specialize in interfaces that combine smooth animations, responsive design and optimized performance. My goal isn\'t just to make the site "work", but to be the best possible version of each client\'s online business.',
        "I'm honest about what I know and what I don't. When something is beyond my current abilities, I say so. When I commit to a project, I truly commit.",
      ],
      skillsTitle: 'Technical skills',
      toolsTitle: 'Tools I use daily',
      valuesTitle: 'How I like to work',
      ctaTitle: "Shall we work together?",
      ctaSub: "If what you read here matches what you're looking for, let's talk.",
      ctaBtn: 'Contact',
      socialTitle: 'Find me on',
    },
  }[lang];

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

      {/* Bio + Skills */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#070012' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">{t.bioTitle}</h2>
            {t.bio.map((p, i) => (
              <p key={i} className="text-white/55 text-sm sm:text-base leading-relaxed mb-4">
                {p}
              </p>
            ))}

            {/* Social links */}
            <div className="mt-6">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">{t.socialTitle}</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: Github, href: 'https://github.com/ManahenGarciaGarrido', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/manahen-garcia-garrido-71524b1a0/', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://www.instagram.com/manahengarcia10/', label: 'Instagram' },
                  { icon: MessageCircle, href: 'https://wa.me/34640038508', label: 'WhatsApp' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all text-sm"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">{t.skillsTitle}</h2>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} pct={skill.pct} delay={i * 0.08} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#06000f' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-black text-white mb-8 text-center"
          >
            {t.toolsTitle}
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {tools.map((tool) => (
              <motion.span
                key={tool}
                variants={fadeUp}
                className="px-4 py-2 rounded-full border border-white/10 text-white/60 text-sm font-medium hover:border-purple-500/40 hover:text-white/80 transition-colors"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#07001a' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-black text-white mb-10 sm:mb-14 text-center"
          >
            {t.valuesTitle}
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values[lang].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-white/8 hover:border-purple-500/30 transition-colors"
                style={{ background: 'rgba(108,0,255,0.04)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #6c00ff33, #00d4ff33)' }}>
                  <Icon size={20} className="text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
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

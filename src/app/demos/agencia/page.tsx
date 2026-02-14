'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Search, Megaphone, Globe, CheckCircle2 } from 'lucide-react';
import DemoNavBar from '@/components/demos/DemoNavBar';
import CounterNumber from '@/components/demos/CounterNumber';
import { staggerContainer, fadeUp, slideLeft } from '@/lib/animations';

const WORDS = ['MARKETING', 'SEO', 'PAID ADS', 'BRANDING', 'WEB'];

const caseStudies = [
  { industry: 'E-COMMERCE', result: '+340% Tráfico Orgánico', client: 'Tienda de moda', desc: 'De 500 a 2,100 visitas mensuales en 3 meses.' },
  { industry: 'RESTAURACIÓN', result: '+180% Reservas Online', client: 'Cadena de restaurantes', desc: 'Optimización SEO local y Google Ads.' },
  { industry: 'INMOBILIARIA', result: '-60% Coste por Lead', client: 'Agencia inmobiliaria', desc: 'Campañas Meta Ads y landing pages optimizadas.' },
  { industry: 'SALUD & BELLEZA', result: '+500% ROI en Ads', client: 'Clínica estética', desc: 'Estrategia 360° digital con remarketing.' },
];

const services = [
  { num: '01', icon: Search, title: 'SEO & Contenido', desc: 'Posicionamiento orgánico que genera tráfico cualificado mes a mes.' },
  { num: '02', icon: Megaphone, title: 'Paid Media', desc: 'Google Ads, Meta Ads y TikTok Ads con ROI medible desde el día 1.' },
  { num: '03', icon: Globe, title: 'Web & Landing Pages', desc: 'Sitios web rápidos, bonitos y diseñados para convertir.' },
  { num: '04', icon: TrendingUp, title: 'Estrategia Digital', desc: 'Plan de crecimiento integral con métricas y objetivos claros.' },
];

export default function AgenciaPage() {
  const [wordIdx, setWordIdx] = useState(0);
  const heroRef = useRef(null);
  const casesRef = useRef(null);
  const servicesRef = useRef(null);
  const casesInView = useInView(casesRef, { once: true, margin: '-80px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-80px' });

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      <DemoNavBar siteName="Agencia Digital" sector="agencia de marketing digital" />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-12"
      >
        {/* Left half */}
        <div className="relative z-10 w-full md:w-1/2 px-8 md:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[#00ff88] text-sm mb-3 tracking-widest">
              {'>'} AGENCIA DIGITAL
            </p>
            <h1
              className="font-black leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: '#fff' }}
            >
              HACEMOS<br />CRECER TU<br />NEGOCIO
            </h1>
            <div className="flex items-center gap-3 mb-8 h-14">
              <span className="font-mono text-white/40 text-xl">$</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={WORDS[wordIdx]}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="font-black text-3xl md:text-4xl"
                  style={{ color: '#00ff88' }}
                >
                  {WORDS[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
            <a
              href="#casos"
              className="inline-flex items-center gap-3 px-8 py-4 font-bold text-black transition-all hover:scale-105"
              style={{ background: '#00ff88' }}
            >
              VER RESULTADOS
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right half */}
        <motion.div
          className="hidden md:flex w-1/2 min-h-screen items-center justify-center"
          style={{ background: '#00ff88' }}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="text-center p-12">
            <p
              className="font-black leading-none text-black"
              style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
            >
              RESULTADOS<br />REALES
            </p>
            <p className="text-black/70 text-lg mt-4 font-mono">since 2016</p>
          </div>
        </motion.div>

        {/* Big DIGITAL overlay */}
        <div
          className="absolute bottom-4 left-0 right-0 text-center font-black opacity-5 select-none pointer-events-none hidden md:block"
          style={{ fontSize: 'clamp(4rem, 15vw, 14rem)', color: '#00ff88', lineHeight: 1 }}
        >
          DIGITAL
        </div>
      </section>

      {/* ── COUNTERS ── */}
      <section className="py-20 px-6 border-t border-white/10" style={{ background: '#080808' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Clientes', target: 150, prefix: '+' },
            { label: 'ROI Promedio', target: 500, suffix: '%' },
            { label: 'Años Experiencia', target: 8, prefix: '+' },
            { label: 'Satisfacción', target: 97, suffix: '%' },
          ].map(({ label, target, prefix, suffix }) => (
            <div key={label}>
              <p
                className="font-black mb-1"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#00ff88' }}
              >
                <CounterNumber target={target} prefix={prefix} suffix={suffix} />
              </p>
              <p className="text-white/50 uppercase tracking-widest text-xs">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="casos" className="py-24 px-6" style={{ background: '#000' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-6xl text-white mb-16"
          >
            CASOS DE ÉXITO
          </motion.h2>
          <motion.div
            ref={casesRef}
            variants={staggerContainer}
            initial="hidden"
            animate={casesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {caseStudies.map((c) => (
              <motion.div
                key={c.industry}
                variants={fadeUp}
                className="p-8 border border-white/10 cursor-pointer transition-all duration-300 hover:bg-[#00ff88] hover:border-[#00ff88] group"
              >
                <span className="text-xs font-mono tracking-widest group-hover:text-black transition-colors" style={{ color: '#00ff88' }}>
                  {c.industry}
                </span>
                <h3 className="text-2xl md:text-3xl font-black my-3 group-hover:text-black transition-colors">
                  {c.result}
                </h3>
                <p className="text-white/40 text-sm group-hover:text-black/60 transition-colors">{c.client}</p>
                <p className="text-white/60 text-sm mt-2 group-hover:text-black/70 transition-colors">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 border-t border-white/10" style={{ background: '#050505' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-4xl md:text-5xl text-white mb-16 text-center"
          >
            SERVICIOS
          </motion.h2>
          <motion.div
            ref={servicesRef}
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s) => (
              <motion.div key={s.num} variants={slideLeft} className="p-6 border border-white/10 hover:border-[#00ff88]/60 transition-colors">
                <p className="font-mono text-[#00ff88] text-sm mb-4">{s.num}</p>
                <s.icon size={28} className="text-white mb-4" />
                <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: '#00ff88' }}
      >
        <h2 className="font-black text-4xl md:text-6xl text-black mb-6">
          ¿LISTO PARA CRECER?
        </h2>
        <p className="text-black/70 text-lg mb-8">Primera consultoría gratuita. Sin compromiso.</p>
        <a
          href="#"
          className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold text-lg hover:scale-105 transition-transform"
        >
          HABLAR CON UN EXPERTO
          <ArrowRight size={20} />
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-white/10 text-white/30 text-sm">
        © {new Date().getFullYear()} Agencia Digital — Demo por Manahen García Garrido
      </footer>
    </div>
  );
}

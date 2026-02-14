'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Dumbbell, Flame, Heart, Users, Check, Star } from 'lucide-react';
import DemoNavBar from '@/components/demos/DemoNavBar';
import { staggerContainer, fadeUp } from '@/lib/animations';

const plans = [
  {
    name: 'BÁSICO',
    price: '29',
    features: ['Acceso sala fitness', 'Horario estándar', 'Vestuarios', 'App móvil'],
    color: '#ff3300',
    back: 'linear-gradient(135deg, #ff3300, #ff6600)',
  },
  {
    name: 'PRO',
    price: '49',
    features: ['Todo de Básico', 'Clases grupales ilimitadas', 'Acceso 24h', 'Nutricionista', 'Análisis corporal mensual'],
    color: '#ff8800',
    back: 'linear-gradient(135deg, #ff8800, #ffaa00)',
  },
  {
    name: 'ELITE',
    price: '79',
    features: ['Todo de Pro', 'Personal Trainer 4 sesiones/mes', 'Suplementación guiada', 'Área VIP', 'Fisioterapeuta', 'Sauna & spa'],
    color: '#ffcc00',
    back: 'linear-gradient(135deg, #ffcc00, #ff8800)',
  },
];

const programs = [
  { icon: Dumbbell, name: 'Musculación', desc: 'Entrenamiento de fuerza progresivo.' },
  { icon: Flame, name: 'Cardio HIIT', desc: 'Alta intensidad, máxima quema de grasa.' },
  { icon: Heart, name: 'Crossfit', desc: 'Funcional y desafiante para todos los niveles.' },
  { icon: Users, name: 'Clases Grupales', desc: 'Zumba, Yoga, Spinning, Body Pump y más.' },
];

const trainers = [
  { name: 'Carlos Ramos', specialty: 'Musculación & Fuerza', years: 8 },
  { name: 'Laura Vega', specialty: 'HIIT & Cardio', years: 5 },
  { name: 'Marcos Díaz', specialty: 'Crossfit & Funcional', years: 6 },
];

export default function GymPage() {
  const plansRef = useRef(null);
  const programsRef = useRef(null);
  const plansInView = useInView(plansRef, { once: true, margin: '-80px' });
  const programsInView = useInView(programsRef, { once: true, margin: '-80px' });

  const nameLetters = 'INFERNO GYM'.split('');

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', fontFamily: 'sans-serif' }}>
      <DemoNavBar siteName="Inferno Gym" sector="gimnasio y centro de fitness" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 px-6">
        {/* Pulsing rings */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-red-600/20 animate-pulse-ring"
            style={{
              width: `${i * 200 + 200}px`,
              height: `${i * 200 + 200}px`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${2 + i * 0.5}s`,
            }}
          />
        ))}
        {/* Radial glow */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse at center, #1a0000 0%, #0a0a0a 70%)' }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Name letter by letter */}
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="font-black leading-none mb-4 animate-flicker"
            style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}
          >
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.05 } },
                }}
                className="inline-block"
                style={{ color: letter === ' ' ? 'transparent' : '#fff' }}
              >
                {letter === ' ' ? '\u00a0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl font-bold mb-8"
            style={{ color: '#ff8800' }}
          >
            FORJA TU MEJOR VERSIÓN
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 w-32 mx-auto mb-8 rounded-full"
            style={{ background: 'linear-gradient(90deg, #ff3300, #ff8800)' }}
          />

          {/* Members bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full border border-red-600/30"
            style={{ background: 'rgba(255,51,0,0.1)' }}
          >
            <Users size={16} style={{ color: '#ff3300' }} />
            <span className="text-white/80 text-sm font-semibold">3,200+ Miembros activos</span>
            <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: '78%', background: 'linear-gradient(90deg, #ff3300, #ff8800)' }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#planes"
              className="flex items-center justify-center gap-2 px-8 py-4 font-black text-black hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #ff3300, #ff8800)' }}
            >
              ÚNETE AHORA
              <ArrowRight size={18} />
            </a>
            <a
              href="#programas"
              className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-white border border-red-600/50 hover:bg-red-600/20 transition-colors"
            >
              VER PROGRAMAS
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programas" className="py-24 px-6 border-t border-white/5" style={{ background: '#0d0d0d' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-4xl md:text-5xl text-white text-center mb-16"
          >
            NUESTROS PROGRAMAS
          </motion.h2>
          <motion.div
            ref={programsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {programs.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className="p-6 border-l-4 transition-all hover:scale-[1.02]"
                style={{ background: '#111', borderLeftColor: '#ff3300' }}
              >
                <p.icon size={28} style={{ color: '#ff3300' }} className="mb-4" />
                <h3 className="font-black text-white text-lg mb-2">{p.name}</h3>
                <p className="text-white/50 text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PLANS (Flip Cards) ── */}
      <section id="planes" className="py-24 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-4xl md:text-5xl text-white text-center mb-4"
          >
            ELIGE TU PLAN
          </motion.h2>
          <p className="text-center text-white/40 mb-16">Pasa el cursor sobre cada plan para ver los detalles.</p>
          <motion.div
            ref={plansRef}
            variants={staggerContainer}
            initial="hidden"
            animate={plansInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {plans.map((plan) => (
              <motion.div key={plan.name} variants={fadeUp}>
                <div className="flip-card h-80 cursor-pointer">
                  <div className="flip-card-inner w-full h-full relative">
                    {/* Front */}
                    <div
                      className="flip-card-front absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-8 border border-white/10"
                      style={{ background: '#111' }}
                    >
                      <div className="h-1 w-full absolute top-0 left-0 rounded-t-2xl" style={{ background: plan.back }} />
                      <h3 className="font-black text-2xl mb-4" style={{ color: plan.color }}>{plan.name}</h3>
                      <p className="font-black text-5xl text-white">€{plan.price}</p>
                      <p className="text-white/40 text-sm">/mes</p>
                      <p className="text-white/30 text-xs mt-4">Hover para detalles →</p>
                    </div>
                    {/* Back */}
                    <div
                      className="flip-card-back absolute inset-0 rounded-2xl flex flex-col justify-between p-8"
                      style={{ background: plan.back }}
                    >
                      <div>
                        <h3 className="font-black text-xl text-black mb-4">{plan.name}</h3>
                        <ul className="space-y-2">
                          {plan.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-black/80">
                              <Check size={14} className="text-black flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href="#"
                        className="block w-full py-3 text-center font-black text-white bg-black rounded-xl hover:opacity-90 transition-opacity"
                      >
                        INSCRIBIRSE
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TRAINERS ── */}
      <section className="py-24 px-6 border-t border-white/5" style={{ background: '#0d0d0d' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-4xl md:text-5xl text-white text-center mb-16"
          >
            NUESTROS ENTRENADORES
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {trainers.map((trainer, i) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                {/* Avatar */}
                <div
                  className="w-32 h-32 rounded-full mx-auto mb-4 transition-all group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #ff3300, #0a0a0a)',
                    boxShadow: '0 0 0 3px #ff330033',
                  }}
                />
                <div
                  className="transition-all group-hover:shadow-lg p-4 rounded-xl"
                  style={{ '--tw-shadow-color': '#ff3300' } as React.CSSProperties}
                >
                  <h3 className="font-black text-white text-lg">{trainer.name}</h3>
                  <p style={{ color: '#ff8800' }} className="text-sm font-semibold mt-1">{trainer.specialty}</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} fill="#ffcc00" color="#ffcc00" />
                    ))}
                    <span className="text-white/40 text-xs ml-1">{trainer.years} años</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #ff3300, #ff8800)' }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-black text-4xl md:text-6xl text-black mb-4"
        >
          PRIMERA SEMANA GRATIS
        </motion.h2>
        <p className="text-black/70 text-lg mb-8">Sin tarjeta de crédito. Cancela cuando quieras.</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white font-black text-lg hover:scale-105 transition-transform"
        >
          EMPEZAR AHORA
          <ArrowRight size={20} />
        </a>
      </section>

      <footer className="py-8 px-6 text-center border-t border-white/10 text-white/30 text-sm">
        © {new Date().getFullYear()} Inferno Gym — Demo por Manahen García Garrido
      </footer>
    </div>
  );
}

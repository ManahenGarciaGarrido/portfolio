'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, Lock, Tag, UserCheck, Building2, User } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

interface GuaranteesProps {
  lang: 'es' | 'en';
}

const guarantees = {
  es: [
    {
      icon: ShieldCheck,
      title: 'No pagas si el diseño inicial no te convence',
      desc: 'Antes de pasar al desarrollo te muestro cómo va a quedar la web. Si no te gusta la dirección, paramos sin coste.',
    },
    {
      icon: RefreshCw,
      title: 'Revisiones incluidas en todos los planes',
      desc: 'No te cobro aparte por pedir cambios. Las rondas de revisión están dentro del precio cerrado desde el principio.',
    },
    {
      icon: Lock,
      title: 'El código es 100% tuyo',
      desc: 'Recibes el código fuente completo. No dependes de mí para nada futuro. Puedes llevarlo a otro desarrollador si quieres.',
    },
    {
      icon: Tag,
      title: 'Precio cerrado, sin sorpresas',
      desc: 'Te presupuesto antes de empezar y ese precio no sube a mitad del proyecto. Lo que acordamos es lo que pagas.',
    },
    {
      icon: UserCheck,
      title: 'Hablas siempre conmigo, sin intermediarios',
      desc: 'No hay comerciales ni gestores. Hablas directamente con la persona que va a construir tu web, en todo momento.',
    },
  ],
  en: [
    {
      icon: ShieldCheck,
      title: "You don't pay if the initial design doesn't convince you",
      desc: "Before moving to development I show you how the site will look. If you don't like the direction, we stop at no cost.",
    },
    {
      icon: RefreshCw,
      title: 'Revisions included in all plans',
      desc: "I don't charge extra for requesting changes. Revision rounds are included in the fixed price from the start.",
    },
    {
      icon: Lock,
      title: 'The code is 100% yours',
      desc: "You receive the full source code. You don't depend on me for anything in the future. You can take it to another developer if you want.",
    },
    {
      icon: Tag,
      title: 'Fixed price, no surprises',
      desc: "I quote before starting and that price doesn't increase mid-project. What we agree is what you pay.",
    },
    {
      icon: UserCheck,
      title: 'You always talk to me, no middlemen',
      desc: "No sales reps or account managers. You talk directly with the person building your site, at all times.",
    },
  ],
};

const comparison = {
  es: {
    title: 'Freelance junior vs Agencia',
    subtitle: '¿Por qué elegiría alguien a un freelance sin experiencia frente a una agencia? Aquí está la respuesta honesta.',
    rows: [
      { label: 'Precio', freelance: 'Muy asequible', agency: 'Alto' },
      { label: 'Atención', freelance: 'Personal y directa', agency: 'A través de cuenta' },
      { label: 'Comunicación', freelance: 'Conmigo siempre', agency: 'Puede cambiar de manos' },
      { label: 'Flexibilidad', freelance: 'Total, me adapto a ti', agency: 'Procesos rígidos' },
      { label: 'Motivación', freelance: 'Me juego mi reputación', agency: 'Un cliente más' },
    ],
    freelanceLabel: 'Freelance (yo)',
    agencyLabel: 'Agencia',
  },
  en: {
    title: 'Junior freelance vs Agency',
    subtitle: "Why would someone choose an inexperienced freelancer over an agency? Here's the honest answer.",
    rows: [
      { label: 'Price', freelance: 'Very affordable', agency: 'High' },
      { label: 'Attention', freelance: 'Personal & direct', agency: 'Through account manager' },
      { label: 'Communication', freelance: 'Always with me', agency: 'May change hands' },
      { label: 'Flexibility', freelance: 'Total, I adapt to you', agency: 'Rigid processes' },
      { label: 'Motivation', freelance: 'My reputation is on the line', agency: 'Just another client' },
    ],
    freelanceLabel: 'Freelance (me)',
    agencyLabel: 'Agency',
  },
};

const content = {
  es: {
    badge: 'Garantías',
    title: '¿Por qué confiar en mí?',
    subtitle: 'No tengo clientes previos, eso es verdad. Pero tengo algo que muchos no tienen: todas las garantías sobre la mesa desde el primer día.',
  },
  en: {
    badge: 'Guarantees',
    title: 'Why trust me?',
    subtitle: "I don't have previous clients, that's true. But I have something many don't: all guarantees on the table from day one.",
  },
};

export default function Guarantees({ lang }: GuaranteesProps) {
  const c = content[lang];
  const guaranteeList = guarantees[lang];
  const comp = comparison[lang];

  return (
    <section
      id="garantias"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: '#050010' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white/60 border border-white/10 mb-4"
            style={{ background: 'rgba(108,0,255,0.08)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'linear-gradient(90deg, #6c00ff, #00d4ff)' }}
            />
            {c.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-4"
          >
            {c.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-sm sm:text-lg max-w-xl mx-auto"
          >
            {c.subtitle}
          </motion.p>
        </div>

        {/* Guarantee cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14 sm:mb-20"
        >
          {guaranteeList.map((g, i) => {
            const Icon = g.icon;
            const isLast = i === guaranteeList.length - 1;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`p-5 sm:p-6 rounded-2xl border border-white/8 hover:border-purple-500/30 transition-colors${isLast && guaranteeList.length % 2 !== 0 ? ' sm:col-span-2 lg:col-span-1' : ''}`}
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #6c00ff22, #00d4ff22)' }}
                >
                  <Icon size={20} className="text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base mb-2 leading-snug">{g.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{g.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white font-black text-xl sm:text-2xl mb-2 text-center">{comp.title}</h3>
          <p className="text-white/40 text-sm text-center mb-8 max-w-lg mx-auto">{comp.subtitle}</p>

          <div className="rounded-2xl border border-white/8 overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
            {/* Table header */}
            <div className="grid grid-cols-3 border-b border-white/8">
              <div className="p-4" />
              <div
                className="p-4 text-center border-l border-white/8"
                style={{ background: 'linear-gradient(135deg, rgba(108,0,255,0.12), rgba(0,212,255,0.06))' }}
              >
                <div className="flex items-center justify-center gap-1.5 text-white font-bold text-sm">
                  <User size={14} className="text-cyan-400" />
                  {comp.freelanceLabel}
                </div>
              </div>
              <div className="p-4 text-center border-l border-white/8">
                <div className="flex items-center justify-center gap-1.5 text-white/40 font-semibold text-sm">
                  <Building2 size={14} />
                  {comp.agencyLabel}
                </div>
              </div>
            </div>

            {/* Rows */}
            {comp.rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-white/5 last:border-b-0"
              >
                <div className="p-4 text-white/40 text-sm font-medium flex items-center">{row.label}</div>
                <div
                  className="p-4 border-l border-white/8 text-center flex items-center justify-center"
                  style={{ background: 'rgba(108,0,255,0.04)' }}
                >
                  <span className="text-white/80 text-sm font-semibold">{row.freelance}</span>
                </div>
                <div className="p-4 border-l border-white/8 text-center flex items-center justify-center">
                  <span className="text-white/30 text-sm">{row.agency}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

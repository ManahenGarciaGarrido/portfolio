'use client';

import { motion } from 'framer-motion';
import { MessageCircle, FileText, Palette, Code2, SearchCheck, Rocket } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

interface ProcessProps {
  lang: 'es' | 'en';
}

const steps = {
  es: [
    {
      icon: MessageCircle,
      title: 'Consulta gratuita',
      desc: 'Me cuentas tu idea por WhatsApp, email o videollamada. Sin compromiso. Entiendo qué necesitas y si puedo ayudarte.',
      note: 'Gratis · Sin compromiso',
    },
    {
      icon: FileText,
      title: 'Propuesta y presupuesto',
      desc: 'En 24–48h te envío un presupuesto detallado: qué incluye exactamente, cómo va a quedar y cuánto cuesta. Sin letra pequeña.',
      note: '24–48h de respuesta',
    },
    {
      icon: Palette,
      title: 'Diseño inicial',
      desc: 'Antes de escribir una sola línea de código te muestro cómo va a verse la web. Si algo no te convence, lo cambiamos aquí.',
      note: 'No pagas si el diseño no te gusta',
    },
    {
      icon: Code2,
      title: 'Desarrollo',
      desc: 'Con tu aprobación del diseño, construyo la web. Puedes seguir el progreso en todo momento y darme feedback cuando quieras.',
      note: 'Tú ves el avance en tiempo real',
    },
    {
      icon: SearchCheck,
      title: 'Revisiones',
      desc: 'Antes de la entrega final tienes rondas de revisiones incluidas para ajustar cualquier detalle que no encaje del todo.',
      note: 'Revisiones incluidas',
    },
    {
      icon: Rocket,
      title: 'Entrega',
      desc: 'Recibes el proyecto completo y listo para usar. El código es tuyo, el dominio es tuyo. Sin ataduras, sin dependencias.',
      note: 'El código es 100% tuyo',
    },
  ],
  en: [
    {
      icon: MessageCircle,
      title: 'Free consultation',
      desc: 'Tell me about your idea via WhatsApp, email, or video call. No commitment. I listen and figure out how I can help.',
      note: 'Free · No commitment',
    },
    {
      icon: FileText,
      title: 'Proposal & quote',
      desc: 'Within 24–48h I send you a detailed quote: exactly what's included, how it will look, and what it costs. No hidden fees.',
      note: '24–48h response',
    },
    {
      icon: Palette,
      title: 'Initial design',
      desc: 'Before writing a single line of code I show you how the site will look. If something doesn't feel right, we change it here.',
      note: 'You don't pay if the design doesn't convince you',
    },
    {
      icon: Code2,
      title: 'Development',
      desc: 'With your design approval, I build the site. You can follow progress at any time and give feedback whenever you like.',
      note: 'You see progress in real time',
    },
    {
      icon: SearchCheck,
      title: 'Revisions',
      desc: 'Before final delivery you get included revision rounds to fine-tune any detail that doesn't feel quite right.',
      note: 'Revisions included',
    },
    {
      icon: Rocket,
      title: 'Delivery',
      desc: 'You receive the complete, ready-to-use project. The code is yours, the domain is yours. No lock-in, no strings attached.',
      note: 'Code is 100% yours',
    },
  ],
};

const content = {
  es: {
    badge: 'Proceso',
    title: '¿Cómo trabajamos juntos?',
    subtitle: 'Seis pasos claros, sin sorpresas. Sabes exactamente qué va a pasar desde el primer mensaje hasta la entrega.',
  },
  en: {
    badge: 'Process',
    title: 'How do we work together?',
    subtitle: 'Six clear steps, no surprises. You know exactly what will happen from the first message to delivery.',
  },
};

export default function Process({ lang }: ProcessProps) {
  const c = content[lang];
  const stepList = steps[lang];

  return (
    <section
      id="proceso"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: '#06000f' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
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

        {/* Steps grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {stepList.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative p-5 sm:p-6 rounded-2xl border border-white/8 hover:border-purple-500/30 transition-colors"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                {/* Step number */}
                <div
                  className="absolute top-5 right-5 text-xs font-black tabular-nums"
                  style={{
                    background: 'linear-gradient(90deg, #6c00ff55, #00d4ff55)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '2rem',
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #6c00ff22, #00d4ff22)' }}
                >
                  <Icon size={20} className="text-purple-400" />
                </div>

                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">{step.desc}</p>

                {/* Tag */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-cyan-300/80"
                  style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)' }}
                >
                  {step.note}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

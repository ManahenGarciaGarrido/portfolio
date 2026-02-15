'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Mail, Linkedin, CheckCircle2, Send } from 'lucide-react';
import { staggerContainer, fadeUp, slideLeft, slideRight } from '@/lib/animations';

interface ContactProps {
  lang: 'es' | 'en';
}

const content = {
  es: {
    heading: '¿Tienes un proyecto en mente?',
    subheading: 'Hablemos y construyamos algo increíble juntos.',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'tu@email.com',
    typePlaceholder: 'Tipo de proyecto',
    budgetPlaceholder: 'Presupuesto aproximado',
    messagePlaceholder: 'Cuéntame sobre tu proyecto...',
    send: 'Enviar Mensaje',
    sending: 'Enviando...',
    success: '¡Mensaje enviado! Te respondo en menos de 24h.',
    whatsapp: 'Escribir por WhatsApp',
    email: 'Enviar Email',
    linkedin: 'LinkedIn',
    response: 'Respuesta en menos de 24 horas',
    hours: 'Lunes a Viernes · 9:00 – 20:00',
    types: ['Tienda online', 'Landing page', 'Web corporativa', 'Portfolio', 'Otro'],
    budgets: ['< 500€', '500€ – 1.500€', '1.500€ – 3.000€', '> 3.000€'],
  },
  en: {
    heading: 'Got a project in mind?',
    subheading: "Let's talk and build something incredible together.",
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    typePlaceholder: 'Project type',
    budgetPlaceholder: 'Approximate budget',
    messagePlaceholder: 'Tell me about your project...',
    send: 'Send Message',
    sending: 'Sending...',
    success: "Message sent! I'll reply within 24 hours.",
    whatsapp: 'WhatsApp Me',
    email: 'Send Email',
    linkedin: 'LinkedIn',
    response: 'Reply within 24 hours',
    hours: 'Monday to Friday · 9:00 – 20:00',
    types: ['Online store', 'Landing page', 'Corporate site', 'Portfolio', 'Other'],
    budgets: ['< €500', '€500 – €1,500', '€1,500 – €3,000', '> €3,000'],
  },
};

export default function Contact({ lang }: ContactProps) {
  const t = content[lang];
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/60 transition-colors text-sm';

  return (
    <section id="contacto" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#070012' }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-5xl font-black text-white mb-3 sm:mb-4"
          >
            {t.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/50 text-sm sm:text-lg"
          >
            {t.subheading}
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <CheckCircle2 size={56} className="text-green-400" />
                <p className="text-white/80 text-lg">{t.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder={t.namePlaceholder} required className={inputClass} />
                <input type="email" placeholder={t.emailPlaceholder} required className={inputClass} />
                <select required className={inputClass} defaultValue="">
                  <option value="" disabled>{t.typePlaceholder}</option>
                  {t.types.map((type) => (
                    <option key={type} value={type} className="bg-[#0f0020] text-white">{type}</option>
                  ))}
                </select>
                <select required className={inputClass} defaultValue="">
                  <option value="" disabled>{t.budgetPlaceholder}</option>
                  {t.budgets.map((b) => (
                    <option key={b} value={b} className="bg-[#0f0020] text-white">{b}</option>
                  ))}
                </select>
                <textarea
                  placeholder={t.messagePlaceholder}
                  required
                  rows={5}
                  className={inputClass + ' resize-none'}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg, #6c00ff, #00d4ff)' }}
                >
                  <Send size={16} />
                  {loading ? t.sending : t.send}
                </button>
              </form>
            )}
          </motion.div>

          {/* Direct contact */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-5"
          >
            {/* Response badge */}
            <motion.div
              variants={fadeUp}
              className="p-5 rounded-2xl border border-green-500/30 bg-green-500/10"
            >
              <div className="flex items-center gap-2 text-green-400 font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t.response}
              </div>
              <p className="text-white/40 text-sm">{t.hours}</p>
            </motion.div>

            {/* WhatsApp */}
            <motion.a
              variants={fadeUp}
              href="https://wa.me/34640038508?text=Hola+Manahen%2C+vi+tu+portfolio+y+me+interesa+hablar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 hover:border-green-500/40 hover:bg-green-500/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-green-400 transition-colors">
                  {t.whatsapp}
                </p>
                <p className="text-white/40 text-sm">+34 640 038 508</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={fadeUp}
              href="mailto:manahengag@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Mail size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                  {t.email}
                </p>
                <p className="text-white/40 text-sm">manahengag@gmail.com</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              variants={fadeUp}
              href="https://www.linkedin.com/in/manahen-garcia-garrido-71524b1a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 hover:border-blue-400/40 hover:bg-blue-400/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center flex-shrink-0">
                <Linkedin size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                  {t.linkedin}
                </p>
                <p className="text-white/40 text-sm">Manahen García Garrido</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

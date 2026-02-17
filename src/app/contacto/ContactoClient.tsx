'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Linkedin, Github, Instagram, CheckCircle2, Send, Clock, MapPin } from 'lucide-react';
import Navbar from '@/components/portfolio/Navbar';
import SiteFooter from '@/components/portfolio/SiteFooter';
import { useLang } from '@/hooks/useLang';
import { fadeUp, staggerContainer } from '@/lib/animations';

export default function ContactoClient() {
  const [lang] = useLang();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = {
    es: {
      title: 'Hablemos',
      sub: 'Cuéntame tu proyecto sin compromiso. Te respondo en menos de 24 horas.',
      formTitle: 'Cuéntame tu proyecto',
      name: 'Tu nombre',
      email: 'tu@email.com',
      type: 'Tipo de proyecto',
      budget: 'Presupuesto aproximado',
      message: 'Cuéntame sobre tu proyecto, qué necesitas, qué tienes ya...',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje recibido! Te respondo en menos de 24 horas.',
      types: ['Tienda online', 'Landing page', 'Web corporativa', 'Portfolio', 'Aplicación web', 'Otro'],
      budgets: ['< 500€', '500€ – 1.500€', '1.500€ – 3.000€', '> 3.000€', 'No lo sé aún'],
      directTitle: 'Contacto directo',
      availability: 'Disponible para proyectos',
      hours: 'Lunes a Viernes · 9:00 – 20:00',
      location: 'España',
      response: 'Respondo en menos de 24h',
      whatsappMsg: 'Escribir por WhatsApp',
      whatsappSub: '+34 640 038 508',
      emailMsg: 'Enviar email',
      emailSub: 'manahengag@gmail.com',
      linkedinMsg: 'LinkedIn',
      linkedinSub: 'Manahen García Garrido',
      githubMsg: 'GitHub',
      githubSub: 'ManahenGarciaGarrido',
      instagramMsg: 'Instagram',
      instagramSub: '@manahengarcia10',
    },
    en: {
      title: "Let's talk",
      sub: "Tell me about your project, no strings attached. I'll reply within 24 hours.",
      formTitle: 'Tell me about your project',
      name: 'Your name',
      email: 'your@email.com',
      type: 'Project type',
      budget: 'Approximate budget',
      message: "Tell me about your project, what you need, what you already have...",
      send: 'Send message',
      sending: 'Sending...',
      success: "Message received! I'll reply within 24 hours.",
      types: ['Online store', 'Landing page', 'Corporate site', 'Portfolio', 'Web application', 'Other'],
      budgets: ['< €500', '€500 – €1,500', '€1,500 – €3,000', '> €3,000', "Don't know yet"],
      directTitle: 'Direct contact',
      availability: 'Available for projects',
      hours: 'Monday to Friday · 9:00 – 20:00',
      location: 'Spain',
      response: 'Reply within 24h',
      whatsappMsg: 'Write on WhatsApp',
      whatsappSub: '+34 640 038 508',
      emailMsg: 'Send email',
      emailSub: 'manahengag@gmail.com',
      linkedinMsg: 'LinkedIn',
      linkedinSub: 'Manahen García Garrido',
      githubMsg: 'GitHub',
      githubSub: 'ManahenGarciaGarrido',
      instagramMsg: 'Instagram',
      instagramSub: '@manahengarcia10',
    },
  }[lang];

  const inputClass = 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/60 transition-colors text-sm';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  }

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

      {/* Main content */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#070012' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-black text-white mb-6">{t.formTitle}</h2>
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center rounded-2xl border border-white/8" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <CheckCircle2 size={56} className="text-green-400" />
                <p className="text-white/80 text-lg">{t.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder={t.name} required className={inputClass} />
                  <input type="email" placeholder={t.email} required className={inputClass} />
                </div>
                <select required className={inputClass} defaultValue="">
                  <option value="" disabled>{t.type}</option>
                  {t.types.map((type) => (
                    <option key={type} value={type} className="bg-[#0f0020] text-white">{type}</option>
                  ))}
                </select>
                <select required className={inputClass} defaultValue="">
                  <option value="" disabled>{t.budget}</option>
                  {t.budgets.map((b) => (
                    <option key={b} value={b} className="bg-[#0f0020] text-white">{b}</option>
                  ))}
                </select>
                <textarea
                  placeholder={t.message}
                  required
                  rows={6}
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
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-xl sm:text-2xl font-black text-white mb-2">{t.directTitle}</h2>

            {/* Status */}
            <motion.div
              variants={fadeUp}
              className="p-5 rounded-2xl border border-green-500/25 bg-green-500/8"
            >
              <div className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t.availability}
              </div>
              <div className="flex flex-col gap-1.5 text-white/40 text-sm">
                <span className="flex items-center gap-2"><Clock size={13} /> {t.hours}</span>
                <span className="flex items-center gap-2"><MapPin size={13} /> {t.location}</span>
                <span className="flex items-center gap-2"><Send size={13} /> {t.response}</span>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.a
              variants={fadeUp}
              href="https://wa.me/34640038508?text=Hola+Manahen%2C+vi+tu+portfolio+y+me+interesa+hablar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/8 hover:border-green-500/40 hover:bg-green-500/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-green-400 transition-colors">{t.whatsappMsg}</p>
                <p className="text-white/40 text-sm">{t.whatsappSub}</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={fadeUp}
              href="mailto:manahengag@gmail.com"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/8 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Mail size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">{t.emailMsg}</p>
                <p className="text-white/40 text-sm">{t.emailSub}</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              variants={fadeUp}
              href="https://www.linkedin.com/in/manahen-garcia-garrido-71524b1a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/8 hover:border-blue-400/40 hover:bg-blue-400/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center flex-shrink-0">
                <Linkedin size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">{t.linkedinMsg}</p>
                <p className="text-white/40 text-sm">{t.linkedinSub}</p>
              </div>
            </motion.a>

            {/* GitHub & Instagram side by side */}
            <div className="grid grid-cols-2 gap-3">
              <motion.a
                variants={fadeUp}
                href="https://github.com/ManahenGarciaGarrido"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/8 hover:border-white/25 hover:bg-white/5 transition-all text-center"
              >
                <Github size={22} className="text-white/60" />
                <div>
                  <p className="text-white/70 font-semibold text-sm">{t.githubMsg}</p>
                  <p className="text-white/30 text-xs">{t.githubSub}</p>
                </div>
              </motion.a>
              <motion.a
                variants={fadeUp}
                href="https://www.instagram.com/manahengarcia10/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/8 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all text-center"
              >
                <Instagram size={22} className="text-white/60" />
                <div>
                  <p className="text-white/70 font-semibold text-sm">{t.instagramMsg}</p>
                  <p className="text-white/30 text-xs">{t.instagramSub}</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

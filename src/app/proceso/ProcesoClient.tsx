'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, FileText, Palette, Code2, SearchCheck, Rocket,
  ShieldCheck, RefreshCw, Lock, Tag, UserCheck, ChevronDown, ArrowRight
} from 'lucide-react';
import Navbar from '@/components/portfolio/Navbar';
import SiteFooter from '@/components/portfolio/SiteFooter';
import { useLang } from '@/hooks/useLang';
import { fadeUp, staggerContainer } from '@/lib/animations';

const steps = {
  es: [
    { icon: MessageCircle, title: 'Consulta gratuita', desc: 'Me cuentas tu idea por WhatsApp, email o videollamada. Sin compromiso. Entiendo qué necesitas y si puedo ayudarte.', note: 'Gratis · Sin compromiso' },
    { icon: FileText, title: 'Propuesta y presupuesto', desc: 'En 24–48h te envío un presupuesto detallado: qué incluye exactamente, cómo va a quedar y cuánto cuesta. Sin letra pequeña.', note: '24–48h de respuesta' },
    { icon: Palette, title: 'Diseño inicial', desc: 'Antes de escribir una sola línea de código te muestro cómo va a verse la web. Si algo no te convence, lo cambiamos aquí.', note: 'No pagas si el diseño no te gusta' },
    { icon: Code2, title: 'Desarrollo', desc: 'Con tu aprobación del diseño, construyo la web. Puedes seguir el progreso en todo momento y darme feedback cuando quieras.', note: 'Tú ves el avance en tiempo real' },
    { icon: SearchCheck, title: 'Revisiones', desc: 'Antes de la entrega final tienes rondas de revisiones incluidas para ajustar cualquier detalle que no encaje del todo.', note: 'Revisiones incluidas' },
    { icon: Rocket, title: 'Entrega', desc: 'Recibes el proyecto completo y listo para usar. El código es tuyo, el dominio es tuyo. Sin ataduras, sin dependencias.', note: 'El código es 100% tuyo' },
  ],
  en: [
    { icon: MessageCircle, title: 'Free consultation', desc: 'Tell me about your idea via WhatsApp, email, or video call. No commitment. I listen and figure out how I can help.', note: 'Free · No commitment' },
    { icon: FileText, title: 'Proposal & quote', desc: "Within 24–48h I send you a detailed quote: exactly what's included, how it will look, and what it costs. No hidden fees.", note: '24–48h response' },
    { icon: Palette, title: 'Initial design', desc: "Before writing a single line of code I show you how the site will look. If something doesn't feel right, we change it here.", note: "No charge if design doesn't convince you" },
    { icon: Code2, title: 'Development', desc: 'With your design approval, I build the site. You can follow progress at any time and give feedback whenever you like.', note: 'You see progress in real time' },
    { icon: SearchCheck, title: 'Revisions', desc: "Before final delivery you get included revision rounds to fine-tune any detail that doesn't feel quite right.", note: 'Revisions included' },
    { icon: Rocket, title: 'Delivery', desc: 'You receive the complete, ready-to-use project. The code is yours, the domain is yours. No lock-in, no strings attached.', note: 'Code is 100% yours' },
  ],
};

const guarantees = {
  es: [
    { icon: ShieldCheck, title: 'No pagas si el diseño no convence', desc: 'Antes de desarrollar te muestro cómo va a quedar. Si no te gusta la dirección, paramos sin coste.' },
    { icon: RefreshCw, title: 'Revisiones incluidas', desc: 'No cobro extra por pedir cambios. Las rondas de revisión están dentro del precio cerrado.' },
    { icon: Lock, title: 'Código 100% tuyo', desc: 'Recibes el código fuente completo. No dependerás de mí para nada en el futuro.' },
    { icon: Tag, title: 'Precio cerrado sin sorpresas', desc: 'Presupuesto antes de empezar. Ese precio no sube a mitad del proyecto.' },
    { icon: UserCheck, title: 'Hablas siempre conmigo', desc: 'Sin comerciales ni gestores. Directamente con quien construye tu web.' },
  ],
  en: [
    { icon: ShieldCheck, title: "No charge if design doesn't convince", desc: "Before development I show you how it will look. If you don't like the direction, we stop at no cost." },
    { icon: RefreshCw, title: 'Revisions included', desc: "No extra charge for requesting changes. Revision rounds are included in the fixed price." },
    { icon: Lock, title: 'Code is 100% yours', desc: "You receive the full source code. You won't depend on me for anything in the future." },
    { icon: Tag, title: 'Fixed price, no surprises', desc: "Quote before starting. That price doesn't increase mid-project." },
    { icon: UserCheck, title: 'Always talk to me directly', desc: 'No sales reps or account managers. Directly with whoever builds your site.' },
  ],
};

const faqs = {
  es: [
    { q: '¿Necesito tener un dominio o hosting ya contratado?', a: 'No es imprescindible. Puedo orientarte sobre qué dominio y hosting contratar según tu proyecto. Si ya tienes uno, perfecto — lo uso directamente.' },
    { q: '¿Cuánto tarda en estar lista mi web?', a: 'Depende de la complejidad: una landing page puede estar en 1–2 semanas, una web corporativa en 3–4 semanas, y una plataforma compleja en 6–10 semanas. Te indico el plazo en el presupuesto.' },
    { q: '¿Puedo pedir cambios después de la entrega?', a: 'Los cambios dentro del alcance acordado están incluidos en las rondas de revisión. Para cambios posteriores o nuevas funcionalidades, presupuestamos aparte sin problema.' },
    { q: '¿Qué pasa si no me gusta el resultado?', a: 'Antes de desarrollar, muestro el diseño para tu aprobación. Si en ese punto no te convence la dirección, no pagas nada. Una vez aprobado el diseño, el desarrollo sigue ese acuerdo.' },
    { q: '¿Trabajas solo o con equipo?', a: 'Trabajo de forma independiente. Eso significa que hablas siempre conmigo, que soy quien diseña y construye tu web. Sin intermediarios ni cambios de manos.' },
    { q: '¿Puedo contratar solo el diseño y desarrollarlo yo?', a: 'Sí, es posible. Podemos acordar entregar solo los diseños en Figma u otro formato para que los desarrolles tú o con otro equipo.' },
    { q: '¿Qué formas de pago aceptas?', a: 'Transferencia bancaria o Bizum. Habitualmente: 50% al inicio del desarrollo y 50% a la entrega. Hablamos y lo acordamos según el proyecto.' },
    { q: '¿Ofreces mantenimiento después de la entrega?', a: 'Sí, como plan opcional. Durante 3 meses me encargo de bugs, actualizaciones menores y soporte. Para proyectos más largos, podemos hablar de un acuerdo personalizado.' },
  ],
  en: [
    { q: 'Do I need to have a domain or hosting already contracted?', a: "Not necessarily. I can guide you on what domain and hosting to get depending on your project. If you already have one, great — I'll use it directly." },
    { q: 'How long does it take for my site to be ready?', a: 'Depends on complexity: a landing page can be done in 1–2 weeks, a corporate site in 3–4 weeks, and a complex platform in 6–10 weeks. I indicate the timeline in the quote.' },
    { q: 'Can I request changes after delivery?', a: 'Changes within the agreed scope are included in the revision rounds. For later changes or new features, we quote separately without any problem.' },
    { q: "What happens if I don't like the result?", a: "Before development, I show you the design for your approval. If at that point you don't like the direction, you don't pay anything. Once the design is approved, development follows that agreement." },
    { q: 'Do you work alone or with a team?', a: "I work independently. That means you always talk to me, the person who designs and builds your site. No middlemen or handoffs." },
    { q: 'Can I hire only the design and develop it myself?', a: "Yes, that's possible. We can agree to deliver only the designs in Figma or another format for you to develop yourself or with another team." },
    { q: 'What payment methods do you accept?', a: 'Bank transfer or Bizum. Typically: 50% at the start of development and 50% on delivery. We discuss and agree depending on the project.' },
    { q: 'Do you offer maintenance after delivery?', a: "Yes, as an optional plan. For 3 months I handle bugs, minor updates and support. For longer projects, we can discuss a customized agreement." },
  ],
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-white/8 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between py-5 gap-4"
      >
        <span className="text-white/80 font-medium text-sm sm:text-base leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className="text-white/40 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-white/50 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProcesoClient() {
  const [lang] = useLang();

  const t = {
    es: {
      title: 'Cómo trabajamos',
      sub: 'Seis pasos claros, sin sorpresas. Sabes exactamente qué va a pasar desde el primer mensaje hasta la entrega.',
      stepsTitle: 'El proceso paso a paso',
      guaranteesTitle: 'Mis garantías',
      guaranteesSub: 'Todo sobre la mesa desde el primer día.',
      faqTitle: 'Preguntas frecuentes',
      ctaTitle: '¿Listo para empezar?',
      ctaSub: 'La primera consulta es gratis y sin compromiso.',
      ctaBtn: 'Contactar ahora',
    },
    en: {
      title: 'How we work',
      sub: 'Six clear steps, no surprises. You know exactly what will happen from the first message to delivery.',
      stepsTitle: 'The step-by-step process',
      guaranteesTitle: 'My guarantees',
      guaranteesSub: 'Everything on the table from day one.',
      faqTitle: 'Frequently asked questions',
      ctaTitle: 'Ready to get started?',
      ctaSub: 'First consultation is free and no commitment.',
      ctaBtn: 'Contact now',
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

      {/* Steps */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#070012' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-black text-white mb-10 sm:mb-14 text-center"
          >
            {t.stepsTitle}
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {steps[lang].map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative p-5 sm:p-6 rounded-2xl border border-white/8 hover:border-purple-500/30 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div
                    className="absolute top-5 right-5 font-black tabular-nums"
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
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #6c00ff22, #00d4ff22)' }}>
                    <Icon size={20} className="text-purple-400" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-4">{step.desc}</p>
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

      {/* Guarantees */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#06000f' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-4xl font-black text-white mb-3"
            >
              {t.guaranteesTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/40 text-sm sm:text-base"
            >
              {t.guaranteesSub}
            </motion.p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {guarantees[lang].map((g, i) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-5 sm:p-6 rounded-2xl border border-white/8 hover:border-purple-500/30 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #6c00ff22, #00d4ff22)' }}>
                    <Icon size={20} className="text-purple-400" />
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base mb-2 leading-snug">{g.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{g.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#07001a' }}>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-black text-white mb-10 text-center"
          >
            {t.faqTitle}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/8 overflow-hidden divide-y-0"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="px-6">
              {faqs[lang].map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
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

'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Award, Clock, ArrowRight } from 'lucide-react';
import DemoNavBar from '@/components/demos/DemoNavBar';
import { staggerContainer, fadeUp } from '@/lib/animations';

// CSS gradient "photos"
const gallery = [
  { id: 1, span: 'row-span-2', cat: 'Boda', grad: 'linear-gradient(135deg, #1a1a1a, #b8860b)' },
  { id: 2, span: '', cat: 'Retrato', grad: 'linear-gradient(135deg, #0d0d0d, #4a4a4a)' },
  { id: 3, span: '', cat: 'Corporativo', grad: 'linear-gradient(135deg, #1f1f1f, #8b7355)' },
  { id: 4, span: 'col-span-2', cat: 'Boda', grad: 'linear-gradient(135deg, #2a1a00, #b8860b)' },
  { id: 5, span: '', cat: 'Retrato', grad: 'linear-gradient(135deg, #111, #888)' },
  { id: 6, span: 'row-span-2', cat: 'Moda', grad: 'linear-gradient(135deg, #0a0a0a, #c0a060)' },
  { id: 7, span: '', cat: 'Corporativo', grad: 'linear-gradient(135deg, #1a1000, #a07840)' },
  { id: 8, span: '', cat: 'Boda', grad: 'linear-gradient(135deg, #0f0f0f, #b8860b)' },
  { id: 9, span: '', cat: 'Retrato', grad: 'linear-gradient(135deg, #1a1a1a, #666)' },
];

const services = [
  {
    num: '01',
    title: 'Boda',
    price: 'Desde €900',
    items: ['Sesión completa 10h', 'Retoque profesional', '400+ fotos editadas', 'Álbum digital', 'Videoclip 3min'],
  },
  {
    num: '02',
    title: 'Retrato',
    price: 'Desde €200',
    items: ['Sesión 2h', '30 fotos editadas', '5 formatos de entrega', 'Uso personal y profesional'],
  },
  {
    num: '03',
    title: 'Corporativo',
    price: 'Desde €400',
    items: ['Media jornada', 'Producto, equipo o evento', '80+ fotos editadas', 'Licencia comercial'],
  },
];

export default function FotografoPage() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const galleryRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: '-80px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-80px' });

  const nameLetters = 'ALEJANDRO\nVEGA'.split('');

  return (
    <div style={{ background: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      <DemoNavBar siteName="Alejandro Vega Fotografía" sector="fotógrafo profesional" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-12">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #b8860b 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-3xl"
        >
          {/* Name */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
            className="font-black leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', letterSpacing: '0.1em' }}
          >
            {'ALEJANDRO'.split('').map((l, i) => (
              <motion.span
                key={`a-${i}`}
                variants={{ hidden: { opacity: 0, scale: 0.4 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}
                className="inline-block"
              >
                {l}
              </motion.span>
            ))}
            <br />
            {'VEGA'.split('').map((l, i) => (
              <motion.span
                key={`v-${i}`}
                variants={{ hidden: { opacity: 0, scale: 0.4 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}
                className="inline-block"
                style={{ color: '#b8860b' }}
              >
                {l}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[0.4em] text-white/40 text-sm mb-3"
          >
            Fotógrafo Profesional
          </motion.p>

          <motion.div
            variants={{ hidden: { width: 0 }, visible: { width: '100%', transition: { duration: 1, delay: 0.5 } } }}
            className="h-px bg-[#b8860b] mx-auto mb-6"
          />

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-lg italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Capturando momentos que duran para siempre"
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 justify-center mt-10">
            <a
              href="#galeria"
              className="px-8 py-4 font-semibold text-black hover:scale-105 transition-transform"
              style={{ background: '#b8860b' }}
            >
              VER GALERÍA
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 font-semibold border border-white/20 text-white/80 hover:bg-white/10 transition-colors"
            >
              SERVICIOS
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── GALLERY ── */}
      <section id="galeria" className="py-24 px-6" style={{ background: '#050505' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-4xl md:text-5xl text-white mb-16 text-center"
          >
            GALERÍA
          </motion.h2>
          <motion.div
            ref={galleryRef}
            variants={staggerContainer}
            initial="hidden"
            animate={galleryInView ? 'visible' : 'hidden'}
            className="grid grid-cols-3 gap-3 auto-rows-[200px]"
          >
            {gallery.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, filter: 'blur(10px)' },
                  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6, delay: idx * 0.07 } },
                }}
                className={`relative group cursor-zoom-in overflow-hidden rounded-lg ${item.span}`}
                style={{ background: item.grad }}
                onClick={() => setLightboxIdx(idx)}
              >
                {/* Subtle camera icon */}
                <Camera size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10" />
                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-2 py-1"
                    style={{ color: '#b8860b' }}
                  >
                    {item.cat}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.95)' }}
            onClick={() => setLightboxIdx(null)}
          >
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(i => i! > 0 ? i! - 1 : gallery.length - 1); }}
              className="absolute left-6 text-white/40 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(i => i! < gallery.length - 1 ? i! + 1 : 0); }}
              className="absolute right-6 text-white/40 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>
            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="w-[80vw] h-[80vh] max-w-4xl rounded-2xl"
              style={{ background: gallery[lightboxIdx].grad }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full flex flex-col items-center justify-center">
                <Camera size={48} className="text-white/20 mb-4" />
                <p className="text-white/40 text-sm uppercase tracking-widest">{gallery[lightboxIdx].cat}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SERVICES ── */}
      <section id="servicios" className="py-24 px-6" style={{ background: '#000' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-4xl md:text-5xl text-white text-center mb-16"
          >
            SERVICIOS
          </motion.h2>
          <motion.div
            ref={servicesRef}
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="p-8 border border-white/10 hover:border-[#b8860b]/50 transition-colors"
              >
                <p className="text-[#b8860b] font-mono text-sm mb-3">{s.num}</p>
                <h3 className="font-black text-white text-2xl mb-1">{s.title}</h3>
                <p className="text-[#b8860b] font-semibold mb-5">{s.price}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-1 h-1 rounded-full bg-[#b8860b]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 px-6 border-t border-white/5" style={{ background: '#050505' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-3xl text-white text-center mb-12"
          >
            ¿CÓMO FUNCIONA?
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {[
              { step: '1', icon: Camera, title: 'Consulta', desc: 'Hablamos de tu proyecto y necesidades.' },
              { step: '2', icon: Award, title: 'Sesión', desc: 'Fotografiamos en locación o estudio.' },
              { step: '3', icon: Clock, title: 'Edición', desc: 'Retoque profesional de cada imagen.' },
              { step: '4', icon: ArrowRight, title: 'Entrega', desc: 'Galería digital en 7 días.' },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center mx-auto mb-3"
                  style={{ borderColor: '#b8860b' }}
                >
                  <span className="font-black text-[#b8860b]">{step.step}</span>
                </div>
                <h4 className="font-bold text-white mb-1">{step.title}</h4>
                <p className="text-white/40 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-24 px-6 text-center" style={{ background: '#000' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-black text-4xl md:text-6xl text-white mb-4"
          style={{ fontWeight: 100, letterSpacing: '0.05em' }}
        >
          TRABAJEMOS JUNTOS
        </motion.h2>
        <div className="h-px w-24 mx-auto mb-8" style={{ background: '#b8860b' }} />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hola@alejandrovega.es"
            className="px-8 py-4 font-semibold text-black hover:scale-105 transition-transform"
            style={{ background: '#b8860b' }}
          >
            ENVIAR EMAIL
          </a>
          <a
            href="https://wa.me/34640038508"
            className="px-8 py-4 font-semibold border border-white/20 text-white/80 hover:bg-white/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHATSAPP
          </a>
        </div>
      </section>

      <footer className="py-8 px-6 text-center border-t border-white/10 text-white/30 text-sm">
        © {new Date().getFullYear()} Alejandro Vega Fotografía — Demo por Manahen García Garrido
      </footer>
    </div>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Sparkles, Heart, Sun, Star, Clock } from 'lucide-react';
import DemoNavBar from '@/components/demos/DemoNavBar';
import { staggerContainer, fadeUp, scaleUp } from '@/lib/animations';

const ROSE = '#f8e5ee';
const LAVENDER = '#c9a0c9';
const DEEP = '#8b5a8b';
const CREAM = '#fff9f0';

const services = [
  { icon: Leaf, name: 'Masaje Relajante', desc: 'Libera la tensión con aceites esenciales', price: 'Desde €65' },
  { icon: Sparkles, name: 'Tratamiento Facial', desc: 'Hidratación profunda con colágeno marino', price: 'Desde €80' },
  { icon: Heart, name: 'Ritual de Pareja', desc: 'Experiencia sensorial para dos', price: 'Desde €150' },
  { icon: Sun, name: 'Bañera de Sales', desc: 'Baño de inmersión mineral con hidroterapia', price: 'Desde €50' },
  { icon: Leaf, name: 'Envoltura Corporal', desc: 'Exfoliación y nutrición de la piel', price: 'Desde €75' },
  { icon: Sparkles, name: 'Aromaterapia', desc: 'Equilibrio y paz interior con aceites', price: 'Desde €55' },
];

const therapists = [
  { name: 'Elena Martín', specialty: 'Masajes Terapéuticos' },
  { name: 'Sofía Ruiz', specialty: 'Tratamientos Faciales' },
  { name: 'Carmen López', specialty: 'Rituales Holísticos' },
];

// Petal positions for the falling animation
const petals = [
  { left: '10%', animDuration: '6s', animDelay: '0s', size: 12 },
  { left: '25%', animDuration: '8s', animDelay: '1s', size: 10 },
  { left: '40%', animDuration: '7s', animDelay: '2s', size: 14 },
  { left: '55%', animDuration: '9s', animDelay: '0.5s', size: 11 },
  { left: '70%', animDuration: '6.5s', animDelay: '3s', size: 13 },
  { left: '85%', animDuration: '8.5s', animDelay: '1.5s', size: 10 },
];

export default function SpaPage() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: '-80px' });

  return (
    <div style={{ background: CREAM, color: DEEP, fontFamily: "'Playfair Display', Georgia, serif" }}>
      <DemoNavBar siteName="Celestial Spa" sector="spa y centro de belleza" />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-12 px-6 overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${ROSE} 0%, ${CREAM} 50%, #f0e8f8 100%)` }}
      >
        {/* Floating petals */}
        {petals.map((petal, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-petal opacity-70"
            style={{
              left: petal.left,
              top: '-5%',
              width: petal.size,
              height: petal.size,
              background: LAVENDER,
              animationDuration: petal.animDuration,
              animationDelay: petal.animDelay,
            }}
          />
        ))}

        {/* Background blur circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-30"
          style={{ background: `radial-gradient(circle, ${LAVENDER}, transparent)`, filter: 'blur(60px)' }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[0.4em] text-xs mb-4"
            style={{ color: LAVENDER }}
          >
            Spa & Centro de Bienestar
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-black italic leading-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: DEEP }}
          >
            Celestial<br />
            <span style={{ color: LAVENDER }}>Spa</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { width: 0 }, visible: { width: '80px', transition: { duration: 0.8, delay: 0.4 } } }}
            className="h-0.5 mx-auto mb-6"
            style={{ background: LAVENDER }}
          />

          <motion.p
            variants={fadeUp}
            className="text-lg italic mb-10"
            style={{ color: DEEP + 'aa' }}
          >
            "Renueva tu esencia. Reconecta con tu ser."
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#reservar"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-white hover:scale-105 transition-transform shadow-lg"
            style={{ background: LAVENDER, boxShadow: `0 8px 30px ${LAVENDER}88` }}
          >
            RESERVAR TRATAMIENTO
          </motion.a>
        </motion.div>
      </section>

      {/* ── SERVICES ── */}
      <section id="servicios" className="py-24 px-6" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="uppercase tracking-widest text-xs mb-2"
              style={{ color: LAVENDER }}
            >
              Nuestros Rituales
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black italic text-4xl md:text-5xl"
              style={{ color: DEEP }}
            >
              Tratamientos
            </motion.h2>
            <div className="h-0.5 w-16 mx-auto mt-4" style={{ background: LAVENDER }} />
          </div>

          <motion.div
            ref={servicesRef}
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((s) => (
              <motion.div
                key={s.name}
                variants={scaleUp}
                className="p-7 rounded-2xl border group hover:shadow-xl transition-all"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  borderColor: LAVENDER + '44',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                  style={{ background: `${LAVENDER}33` }}
                >
                  <s.icon size={20} style={{ color: LAVENDER }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: DEEP }}>{s.name}</h3>
                <p className="text-sm mb-4" style={{ color: DEEP + '80' }}>{s.desc}</p>
                <p className="font-bold text-sm" style={{ color: LAVENDER }}>{s.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED QUOTE ── */}
      <section className="py-20 px-6" style={{ background: ROSE }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl italic font-bold leading-relaxed"
            style={{ color: DEEP, fontFamily: "'Playfair Display', serif" }}
          >
            "Dedicamos cada tratamiento a tu bienestar total. Mente, cuerpo y espíritu en armonía."
          </motion.p>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={LAVENDER} color={LAVENDER} />
            ))}
          </div>
          <p className="text-sm mt-3" style={{ color: DEEP + '80' }}>Valoración media de nuestros clientes</p>
        </div>
      </section>

      {/* ── THERAPISTS ── */}
      <section className="py-20 px-6" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black italic text-3xl md:text-4xl" style={{ color: DEEP }}>Nuestro Equipo</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {therapists.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div
                  className="w-28 h-28 rounded-full mx-auto mb-4"
                  style={{ background: `linear-gradient(135deg, ${LAVENDER}, ${ROSE})` }}
                />
                <p className="font-bold text-lg" style={{ color: DEEP }}>{t.name}</p>
                <p className="text-sm italic" style={{ color: LAVENDER }}>{t.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="reservar" className="py-24 px-6" style={{ background: `linear-gradient(160deg, #f0e8f8, ${ROSE})` }}>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-black italic text-3xl md:text-4xl" style={{ color: DEEP }}>Reserva tu Tratamiento</h2>
          </div>
          <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border" style={{ borderColor: LAVENDER + '44' }}>
            <div className="space-y-4 mb-4">
              {['Tu nombre', 'Email o teléfono'].map(ph => (
                <input
                  key={ph}
                  type="text"
                  placeholder={ph}
                  className="w-full bg-transparent border-b px-0 py-3 text-sm focus:outline-none"
                  style={{ borderColor: LAVENDER + '60', color: DEEP }}
                />
              ))}
              <select
                className="w-full bg-transparent border-b px-0 py-3 text-sm focus:outline-none"
                style={{ borderColor: LAVENDER + '60', color: DEEP }}
              >
                <option value="">Selecciona un tratamiento</option>
                {services.map(s => <option key={s.name}>{s.name} — {s.price}</option>)}
              </select>
              <input
                type="date"
                className="w-full bg-transparent border-b px-0 py-3 text-sm focus:outline-none"
                style={{ borderColor: LAVENDER + '60', color: DEEP }}
              />
            </div>
            <button
              className="w-full py-4 rounded-full font-bold text-white hover:scale-[1.02] transition-transform shadow-lg"
              style={{ background: LAVENDER, boxShadow: `0 6px 20px ${LAVENDER}66` }}
            >
              RESERVAR AHORA
            </button>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs" style={{ color: DEEP + '60' }}>
              <Clock size={12} />
              Confirmación en menos de 1 hora
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 text-center border-t text-sm" style={{ borderColor: LAVENDER + '33', color: DEEP + '60', background: '#fdf0f8' }}>
        © {new Date().getFullYear()} Celestial Spa — Demo por Manahen García Garrido
      </footer>
    </div>
  );
}

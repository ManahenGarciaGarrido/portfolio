'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scale, Shield, Briefcase, Building2, FileText, Home, Phone, Mail, MapPin } from 'lucide-react';
import DemoNavBar from '@/components/demos/DemoNavBar';
import { staggerContainer, fadeUp, slideLeft, slideRight } from '@/lib/animations';

const NAVY = '#0d1b2a';
const GOLD = '#c9a227';
const LIGHT = '#e8e8e8';

const areas = [
  { icon: Scale, name: 'Derecho Civil', desc: 'Contratos, herencias, responsabilidad civil y reclamaciones patrimoniales.' },
  { icon: Briefcase, name: 'Derecho Mercantil', desc: 'Constitución de sociedades, fusiones, contratos empresariales.' },
  { icon: Shield, name: 'Derecho Penal', desc: 'Defensa penal, delitos económicos y recursos de apelación.' },
  { icon: FileText, name: 'Derecho Laboral', desc: 'Despidos, EREs, negociación colectiva y sanciones laborales.' },
  { icon: Building2, name: 'Derecho Fiscal', desc: 'Planificación fiscal, inspecciones y recursos tributarios.' },
  { icon: Home, name: 'Derecho Inmobiliario', desc: 'Compraventa, arrendamientos, comunidades y urbanismo.' },
];

const attorneys = [
  { name: 'Dr. Carlos Mendoza', specialty: 'Derecho Mercantil & Penal', years: 25, num: 'COM-4821' },
  { name: 'Dra. Laura Vidal', specialty: 'Derecho Civil & Familiar', years: 18, num: 'COM-6134' },
  { name: 'D. Roberto Arce', specialty: 'Derecho Fiscal & Laboral', years: 20, num: 'COM-5290' },
];

export default function AbogadosPage() {
  const areasRef = useRef(null);
  const areasInView = useInView(areasRef, { once: true, margin: '-80px' });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <div style={{ background: NAVY, color: LIGHT, fontFamily: "'Playfair Display', Georgia, serif" }}>
      <DemoNavBar siteName="Mendoza & Asociados" sector="despacho de abogados" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-12 px-6 md:px-16 overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(${LIGHT} 1px, transparent 1px), linear-gradient(90deg, ${LIGHT} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 0.7 }}
            className="uppercase text-xs mb-6"
            style={{ color: GOLD }}
          >
            Expertos en Derecho — Desde 1999
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-black italic leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#fff' }}
          >
            Defendemos tus derechos<br />
            <span style={{ color: GOLD }}>con rigor y dedicación</span>
          </motion.h1>

          {/* Gold divider with scale icon */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%', maxWidth: '320px' }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px flex-1" style={{ background: GOLD }} />
            <Scale size={16} style={{ color: GOLD }} />
            <div className="h-px flex-1" style={{ background: GOLD }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg mb-10"
            style={{ color: LIGHT + '99' }}
          >
            Asesoramiento jurídico integral para personas y empresas. Más de 25 años protegiendo
            sus intereses con transparencia y eficacia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#consulta"
              className="flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-widest text-sm text-black hover:opacity-90 transition-opacity"
              style={{ background: GOLD }}
            >
              CONSULTA GRATUITA
            </a>
            <a
              href="#areas"
              className="flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-widest text-sm border hover:bg-white/10 transition-colors"
              style={{ borderColor: GOLD + '60', color: GOLD }}
            >
              ÁREAS DE PRÁCTICA
            </a>
          </motion.div>
        </div>

        {/* Side decoration */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest"
          style={{ color: GOLD + '60' }}
        >
          <div className="w-px h-24" style={{ background: GOLD + '40' }} />
          <span style={{ writingMode: 'vertical-rl' }}>Mendoza & Asociados</span>
          <div className="w-px h-24" style={{ background: GOLD + '40' }} />
        </motion.div>
      </section>

      {/* ── AREAS ── */}
      <section id="areas" className="py-24 px-6 border-t" style={{ borderColor: GOLD + '22', background: '#112238' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="uppercase tracking-widest text-xs mb-3"
              style={{ color: GOLD }}
            >
              Especialidades
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black italic text-4xl md:text-5xl text-white"
            >
              Áreas de Práctica
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-0.5 mx-auto mt-4"
              style={{ background: GOLD }}
            />
          </div>
          <motion.div
            ref={areasRef}
            variants={staggerContainer}
            initial="hidden"
            animate={areasInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {areas.map((area) => (
              <motion.div
                key={area.name}
                variants={fadeUp}
                className="p-6 border-l-4 transition-all hover:translate-x-1"
                style={{ background: NAVY + 'cc', borderLeftColor: GOLD }}
              >
                <area.icon size={24} style={{ color: GOLD }} className="mb-4" />
                <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'sans-serif' }}>
                  {area.name}
                </h3>
                <p className="text-sm italic" style={{ color: LIGHT + '70' }}>{area.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS & ABOUT ── */}
      <section className="py-24 px-6" style={{ background: NAVY }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={statsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 gap-4"
          >
            {[
              { val: '25+', label: 'Años de experiencia' },
              { val: '1.500+', label: 'Casos resueltos con éxito' },
              { val: '98%', label: 'Tasa de satisfacción del cliente' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="flex items-center gap-6 p-5 border-l-2"
                style={{ borderColor: GOLD }}
              >
                <p className="font-black text-4xl flex-shrink-0" style={{ color: GOLD }}>{stat.val}</p>
                <p className="font-semibold text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-xs mb-3" style={{ color: GOLD }}>Sobre Nosotros</p>
            <h2 className="font-black italic text-3xl text-white mb-4">Un despacho de confianza</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: LIGHT + '99' }}>
              Fundado en 1999, Mendoza & Asociados es un despacho de abogados de referencia en Madrid.
              Nuestro equipo de expertos jurídicos ofrece asesoramiento integral y personalizado.
            </p>
            <p className="text-base leading-relaxed" style={{ color: LIGHT + '80' }}>
              Nos distingue la dedicación, la transparencia y los resultados. Su caso es nuestra prioridad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ATTORNEYS ── */}
      <section className="py-20 px-6 border-t" style={{ background: '#112238', borderColor: GOLD + '22' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black italic text-3xl md:text-4xl text-white">Nuestro Equipo</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {attorneys.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                <div
                  className="w-28 h-28 rounded-full mx-auto mb-4 transition-all group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${NAVY}, #1f3a55)`,
                    border: `2px solid ${GOLD}44`,
                    boxShadow: `0 0 0 0 ${GOLD}`,
                    transition: 'box-shadow 0.3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 0 3px ${GOLD}33`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                />
                <h3 className="font-bold text-white" style={{ fontFamily: 'sans-serif' }}>{a.name}</h3>
                <p className="text-sm mt-1" style={{ color: GOLD }}>{a.specialty}</p>
                <p className="text-xs mt-1" style={{ color: LIGHT + '40' }}>Colegiado {a.num}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTATION FORM ── */}
      <section id="consulta" className="py-24 px-6" style={{ background: NAVY }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-black italic text-3xl text-white mb-2">Consulta Gratuita</h2>
            <p className="text-sm italic" style={{ color: LIGHT + '70' }}>
              Sin compromiso. Respondemos en menos de 24 horas.
            </p>
            <div className="h-0.5 w-16 mx-auto mt-4" style={{ background: GOLD }} />
          </div>
          <div className="p-8 border" style={{ borderColor: GOLD + '33', background: '#112238' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {['Nombre completo', 'Email'].map(ph => (
                <input
                  key={ph}
                  type="text"
                  placeholder={ph}
                  className="bg-transparent border-b px-0 py-3 text-sm focus:outline-none"
                  style={{ borderColor: GOLD + '40', color: LIGHT, caretColor: GOLD }}
                />
              ))}
            </div>
            <select
              className="w-full bg-transparent border-b px-0 py-3 text-sm focus:outline-none mb-4"
              style={{ borderColor: GOLD + '40', color: LIGHT + '80' }}
            >
              <option value="">Área legal de interés</option>
              {areas.map(a => <option key={a.name} style={{ color: '#000' }}>{a.name}</option>)}
            </select>
            <textarea
              placeholder="Descripción breve de su caso..."
              rows={4}
              className="w-full bg-transparent border-b px-0 py-3 text-sm focus:outline-none resize-none mb-6"
              style={{ borderColor: GOLD + '40', color: LIGHT }}
            />
            <button
              className="w-full py-4 font-bold uppercase tracking-widest text-sm text-black hover:opacity-90 transition-opacity"
              style={{ background: GOLD }}
            >
              ENVIAR CONSULTA
            </button>
            <p className="text-xs text-center mt-4" style={{ color: LIGHT + '40' }}>
              Sus datos son tratados con absoluta confidencialidad conforme al RGPD.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t text-center" style={{ borderColor: GOLD + '22', background: '#091526' }}>
        <p className="font-black italic text-xl mb-4" style={{ color: GOLD }}>Mendoza & Asociados</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm mb-6" style={{ color: LIGHT + '60' }}>
          <span className="flex items-center gap-2"><MapPin size={14} style={{ color: GOLD }} /> Paseo de la Castellana 120, Madrid</span>
          <span className="flex items-center gap-2"><Phone size={14} style={{ color: GOLD }} /> +34 91 345 6789</span>
          <span className="flex items-center gap-2"><Mail size={14} style={{ color: GOLD }} /> info@mendozaasociados.es</span>
        </div>
        <p className="text-xs" style={{ color: LIGHT + '30' }}>
          © {new Date().getFullYear()} Mendoza & Asociados — Demo por Manahen García Garrido
        </p>
      </footer>
    </div>
  );
}

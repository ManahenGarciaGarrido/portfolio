'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bed, Bath, Square, MapPin, Search, ArrowRight, Phone } from 'lucide-react';
import DemoNavBar from '@/components/demos/DemoNavBar';
import { staggerContainer, fadeUp } from '@/lib/animations';

const NAVY = '#001a4d';
const GOLD = '#c9a227';

const properties = [
  { type: 'Ático', zone: 'Centro', beds: 3, baths: 2, area: 120, price: '€380.000', badge: 'NUEVO', grad: 'linear-gradient(160deg, #e8edf5, #d0dae8)' },
  { type: 'Piso', zone: 'Salamanca', beds: 4, baths: 3, area: 180, price: '€620.000', badge: 'PRECIO REDUCIDO', grad: 'linear-gradient(160deg, #dde4f0, #c8d4e8)' },
  { type: 'Casa', zone: 'Norte', beds: 5, baths: 4, area: 350, price: '€890.000', badge: 'EXCLUSIVA', grad: 'linear-gradient(160deg, #e4eaf5, #d4dced)' },
  { type: 'Piso', zone: 'Sur', beds: 2, baths: 1, area: 75, price: '€195.000', badge: null, grad: 'linear-gradient(160deg, #eaeef6, #dde4ee)' },
  { type: 'Ático', zone: 'Este', beds: 2, baths: 2, area: 90, price: '€265.000', badge: 'NUEVO', grad: 'linear-gradient(160deg, #e0e8f4, #cdd7e8)' },
  { type: 'Local', zone: 'Centro', beds: 0, baths: 1, area: 200, price: '€450.000', badge: null, grad: 'linear-gradient(160deg, #e8eef6, #d8e0ec)' },
];

const filterTypes = ['Todos', 'Piso', 'Casa', 'Ático', 'Local'];
const filterZones = ['Todas', 'Centro', 'Norte', 'Sur', 'Este', 'Salamanca'];

export default function InmobiliariaPage() {
  const [typeFilter, setTypeFilter] = useState('Todos');
  const [zoneFilter, setZoneFilter] = useState('Todas');
  const propsRef = useRef(null);
  const propsInView = useInView(propsRef, { once: true, margin: '-80px' });

  const filtered = properties.filter(p =>
    (typeFilter === 'Todos' || p.type === typeFilter) &&
    (zoneFilter === 'Todas' || p.zone === zoneFilter)
  );

  return (
    <div style={{ background: '#fff', color: NAVY, fontFamily: 'sans-serif' }}>
      <DemoNavBar siteName="Inmobiliaria Arco" sector="agencia inmobiliaria" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen grid md:grid-cols-5 overflow-hidden pt-12">
        {/* Left: Navy */}
        <div className="md:col-span-3 flex items-center px-8 md:px-16 py-20" style={{ background: NAVY }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-[0.3em] text-xs mb-4" style={{ color: GOLD }}>
              Propiedades Exclusivas
            </p>
            <h1
              className="font-black leading-tight text-white mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              ENCUENTRA<br />TU HOGAR IDEAL
            </h1>
            <p className="text-white/50 text-lg mb-8 max-w-lg">
              Más de 500 propiedades seleccionadas. Expertos locales, resultados excepcionales.
            </p>

            {/* Search bar */}
            <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Ciudad, barrio o dirección..."
                className="flex-1 bg-transparent text-sm px-2 focus:outline-none"
                style={{ color: NAVY }}
              />
              <select
                className="bg-transparent text-sm focus:outline-none border-l border-gray-200 pl-3"
                style={{ color: NAVY }}
              >
                <option>Tipo de propiedad</option>
                <option>Piso</option>
                <option>Casa</option>
                <option>Ático</option>
                <option>Local</option>
              </select>
              <button
                className="flex items-center gap-2 px-6 py-3 font-bold text-sm text-white rounded-lg hover:opacity-90 transition-opacity"
                style={{ background: GOLD }}
              >
                <Search size={16} />
                BUSCAR
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: Property mosaic */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-2 grid grid-cols-2 gap-2 p-4"
          style={{ background: '#f0f4f8' }}
        >
          {properties.slice(0, 4).map((p, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{ background: p.grad, aspectRatio: '1/1' }}
            >
              <div className="h-full p-3 flex flex-col justify-end">
                <p className="text-xs font-bold" style={{ color: NAVY }}>{p.type} · {p.zone}</p>
                <p className="text-sm font-black" style={{ color: NAVY }}>{p.price}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── FILTERS ── */}
      <section className="py-8 px-6 border-b border-gray-100" style={{ background: '#f9fafb' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-semibold text-sm" style={{ color: NAVY }}>Tipo:</span>
            {filterTypes.map(f => (
              <button
                key={f}
                onClick={() => setTypeFilter(f)}
                className="px-4 py-1.5 rounded-full text-xs font-bold border transition-all"
                style={{
                  background: typeFilter === f ? GOLD : 'transparent',
                  color: typeFilter === f ? '#fff' : NAVY,
                  borderColor: typeFilter === f ? GOLD : NAVY + '33',
                }}
              >
                {f}
              </button>
            ))}
            <span className="font-semibold text-sm ml-4" style={{ color: NAVY }}>Zona:</span>
            {filterZones.map(z => (
              <button
                key={z}
                onClick={() => setZoneFilter(z)}
                className="px-4 py-1.5 rounded-full text-xs font-bold border transition-all"
                style={{
                  background: zoneFilter === z ? NAVY : 'transparent',
                  color: zoneFilter === z ? '#fff' : NAVY,
                  borderColor: zoneFilter === z ? NAVY : NAVY + '33',
                }}
              >
                {z}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROPERTIES ── */}
      <section id="propiedades" className="py-20 px-6" style={{ background: '#fff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black text-3xl md:text-4xl"
              style={{ color: NAVY }}
            >
              PROPIEDADES DESTACADAS
            </motion.h2>
            <span className="text-sm" style={{ color: GOLD }}>
              {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
          <motion.div
            ref={propsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={propsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Property image */}
                <div className="relative aspect-[4/3]" style={{ background: p.grad }}>
                  {p.badge && (
                    <span
                      className="absolute top-3 left-3 text-xs font-bold uppercase px-3 py-1 rounded"
                      style={{ background: GOLD, color: '#fff' }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
                    style={{ background: 'linear-gradient(to top, rgba(0,26,77,0.7), transparent)' }}>
                    <span className="text-white font-bold text-sm flex items-center gap-1">
                      VER PROPIEDAD <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={12} style={{ color: GOLD }} />
                    <span className="text-xs" style={{ color: NAVY + '80' }}>{p.type} · {p.zone}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-3 text-xs" style={{ color: NAVY + '80' }}>
                    {p.beds > 0 && <span className="flex items-center gap-1"><Bed size={12} /> {p.beds}</span>}
                    <span className="flex items-center gap-1"><Bath size={12} /> {p.baths}</span>
                    <span className="flex items-center gap-1"><Square size={12} /> {p.area} m²</span>
                  </div>
                  <p className="font-black text-xl" style={{ color: NAVY }}>{p.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="py-16 px-6" style={{ background: NAVY }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 uppercase tracking-widest text-xs mb-3">Zona de búsqueda</p>
          <div
            className="rounded-2xl mx-auto relative overflow-hidden"
            style={{ background: '#001440', height: 200, maxWidth: 600 }}
          >
            {/* Fake map dots */}
            {[
              { top: '40%', left: '30%' },
              { top: '30%', left: '55%' },
              { top: '60%', left: '50%' },
              { top: '50%', left: '70%' },
              { top: '25%', left: '40%' },
            ].map((dot, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"
                style={{ top: dot.top, left: dot.left, background: GOLD, animationDelay: `${i * 0.3}s` }}
              />
            ))}
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
          </div>
          <p className="text-white/60 text-sm mt-4">
            <span className="font-bold" style={{ color: GOLD }}>48 propiedades</span> en esta zona
          </p>
        </div>
      </section>

      {/* ── CONTACT AGENT ── */}
      <section className="py-20 px-6" style={{ background: '#f9fafb' }}>
        <div className="max-w-lg mx-auto">
          <div
            className="p-8 rounded-2xl border-2"
            style={{ borderColor: GOLD }}
          >
            <h3 className="font-black text-2xl mb-2" style={{ color: NAVY }}>Habla con un agente</h3>
            <p className="text-sm mb-6" style={{ color: NAVY + '80' }}>Respuesta garantizada en 2 horas</p>
            <div className="space-y-3 mb-4">
              {['Tu nombre', 'Teléfono de contacto'].map(ph => (
                <input
                  key={ph}
                  type="text"
                  placeholder={ph}
                  className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a227]"
                  style={{ borderColor: NAVY + '22', color: NAVY }}
                />
              ))}
              <select
                className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none"
                style={{ borderColor: NAVY + '22', color: NAVY }}
              >
                <option>¿Qué te interesa?</option>
                <option>Comprar</option>
                <option>Alquilar</option>
                <option>Vender</option>
                <option>Invertir</option>
              </select>
            </div>
            <button
              className="w-full py-4 font-black text-white rounded-xl hover:opacity-90 transition-opacity"
              style={{ background: GOLD }}
            >
              SOLICITAR INFORMACIÓN
            </button>
            <div className="flex items-center gap-2 mt-4 justify-center text-sm" style={{ color: NAVY + '60' }}>
              <Phone size={14} style={{ color: GOLD }} />
              +34 91 456 7890
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center border-t border-gray-100 text-sm" style={{ color: NAVY + '60' }}>
        © {new Date().getFullYear()} Inmobiliaria Arco — Demo por Manahen García Garrido
      </footer>
    </div>
  );
}

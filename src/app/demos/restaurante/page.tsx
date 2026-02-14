'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import DemoNavBar from '@/components/demos/DemoNavBar';
import { staggerContainer, fadeUp, slideLeft, slideRight } from '@/lib/animations';

const GOLD = '#d4a017';
const DARK = '#1a0a00';
const CREAM = '#fff5e6';

const menuItems = {
  Entrantes: [
    { name: 'Croquetas de Ibérico', desc: 'Con alioli de trufa y crujiente de jamón', price: '€14' },
    { name: 'Carpaccio de Buey', desc: 'Con rúcula, parmesano y aceite de oliva virgen', price: '€18' },
    { name: 'Vieiras a la Gallega', desc: 'Con pimentón ahumado y cebolla pochada', price: '€22' },
  ],
  Principales: [
    { name: 'Lubina a la Sal', desc: 'Con patatas panadera y salsa de limón', price: '€32' },
    { name: 'Chuletón de Vaca', desc: 'Madurado 45 días, con patatas y pimientos', price: '€48' },
    { name: 'Risotto de Setas', desc: 'Boletus, trompeta y trufa negra', price: '€26' },
  ],
  Postres: [
    { name: 'Tarta de Queso', desc: 'Cremosa, con coulis de frutos rojos', price: '€9' },
    { name: 'Coulant de Chocolate', desc: 'Con helado de vainilla bourbon', price: '€11' },
    { name: 'Torrija Caramelizada', desc: 'Con helado de canela y miel de azahar', price: '€10' },
  ],
};

export default function RestaurantePage() {
  const [activeTab, setActiveTab] = useState<'Entrantes' | 'Principales' | 'Postres'>('Principales');
  const menuRef = useRef(null);
  const menuInView = useInView(menuRef, { once: true, margin: '-60px' });

  return (
    <div style={{ background: DARK, color: CREAM, fontFamily: "'Playfair Display', Georgia, serif" }}>
      <DemoNavBar siteName="Restaurante Arcos" sector="restaurante de alta cocina" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-12 px-6 overflow-hidden">
        {/* Floating dish circles */}
        {[
          { size: 180, top: '15%', left: '10%', delay: '0s', grad: 'radial-gradient(circle at 40% 40%, #2a1500, #1a0a00)' },
          { size: 140, top: '60%', right: '8%', left: undefined, delay: '1s', grad: 'radial-gradient(circle at 60% 40%, #3a1800, #1a0a00)' },
          { size: 120, top: '30%', right: '20%', left: undefined, delay: '2s', grad: 'radial-gradient(circle at 50% 50%, #2a1a00, #1a0a00)' },
        ].map((circle, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float border opacity-60"
            style={{
              width: circle.size,
              height: circle.size,
              top: circle.top,
              left: circle.left,
              right: (circle as { right?: string }).right,
              background: circle.grad,
              borderColor: GOLD + '33',
              animationDelay: circle.delay,
            }}
          />
        ))}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-3xl"
        >
          {/* Logo */}
          <motion.div variants={fadeUp} className="mb-6">
            <p className="uppercase tracking-[0.4em] text-sm mb-2" style={{ color: GOLD }}>
              Restaurante
            </p>
            <h1
              className="font-black italic leading-tight"
              style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', color: CREAM }}
            >
              Arcos
            </h1>
          </motion.div>

          {/* Gold divider */}
          <motion.div
            variants={{ hidden: { width: 0 }, visible: { width: '200px', transition: { duration: 1, delay: 0.4 } } }}
            className="h-px mx-auto mb-6 relative"
            style={{ background: GOLD }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45"
              style={{ background: GOLD }}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-lg italic mb-10"
            style={{ color: CREAM + 'aa', fontSize: '1.1rem' }}
          >
            Una experiencia culinaria inigualable
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#reservar"
            className="inline-flex items-center gap-3 px-10 py-4 font-bold uppercase tracking-widest text-sm border-2 hover:text-black transition-all"
            style={{ borderColor: GOLD, color: GOLD, ':hover': { background: GOLD } } as React.CSSProperties}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = GOLD; (e.currentTarget as HTMLElement).style.color = '#000'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = GOLD; }}
          >
            RESERVAR MESA
          </motion.a>
        </motion.div>
      </section>

      {/* ── MENU ── */}
      <section id="carta" className="py-24 px-6" style={{ background: '#110800' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.4em] text-xs mb-3"
              style={{ color: GOLD }}
            >
              Gastronomía
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black italic text-4xl md:text-5xl"
              style={{ color: CREAM }}
            >
              Nuestra Carta
            </motion.h2>
            <div className="h-px w-20 mx-auto mt-4" style={{ background: GOLD }} />
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-1 mb-10">
            {(['Entrantes', 'Principales', 'Postres'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-all"
                style={{
                  background: activeTab === tab ? GOLD : 'transparent',
                  color: activeTab === tab ? '#000' : CREAM + '80',
                  border: `1px solid ${activeTab === tab ? GOLD : GOLD + '30'}`,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <motion.div
            ref={menuRef}
            variants={staggerContainer}
            initial="hidden"
            animate={menuInView ? 'visible' : 'hidden'}
          >
            {menuItems[activeTab].map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                className="flex justify-between items-start py-5 border-b"
                style={{ borderColor: GOLD + '22' }}
              >
                <div className="flex-1 pr-6">
                  <p className="font-bold text-lg" style={{ color: CREAM }}>{item.name}</p>
                  <p className="text-sm italic mt-1" style={{ color: CREAM + '80' }}>{item.desc}</p>
                </div>
                <span className="font-black text-xl flex-shrink-0" style={{ color: GOLD }}>{item.price}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 px-6" style={{ background: DARK }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-xs mb-3" style={{ color: GOLD }}>Nuestra Historia</p>
            <h2 className="font-black italic text-3xl md:text-4xl mb-6" style={{ color: CREAM }}>
              Pasión por la cocina desde 1998
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: CREAM + '99' }}>
              Fundado por el chef Antonio Arcos, nuestro restaurante nació de la pasión por los productos
              de temporada y las técnicas tradicionales de la cocina española.
            </p>
            <p className="text-base leading-relaxed" style={{ color: CREAM + '80' }}>
              Cada plato es una historia, cada ingrediente una promesa de calidad.
              Bienvenido a Arcos.
            </p>
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { val: '25+', label: 'Años de experiencia' },
              { val: '★ 4.9', label: 'Valoración media' },
              { val: '3', label: 'Estrellas Michelin' },
              { val: '200+', label: 'Recetas únicas' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 text-center rounded-lg" style={{ background: '#2a1500' }}>
                <p className="font-black text-2xl mb-1" style={{ color: GOLD }}>{stat.val}</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: CREAM + '60' }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RESERVATION ── */}
      <section id="reservar" className="py-24 px-6" style={{ background: '#110800' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-black italic text-4xl" style={{ color: CREAM }}>Hacer una Reserva</h2>
            <div className="h-px w-16 mx-auto mt-4" style={{ background: GOLD }} />
          </div>
          <div className="p-8 rounded-2xl border" style={{ borderColor: GOLD + '33', background: '#1a0a00' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                { placeholder: 'Nombre completo', type: 'text' },
                { placeholder: 'Email', type: 'email' },
                { placeholder: 'Fecha', type: 'date' },
                { placeholder: 'Hora', type: 'time' },
              ].map(({ placeholder, type }) => (
                <input
                  key={placeholder}
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-b px-0 py-3 text-sm focus:outline-none"
                  style={{ borderColor: GOLD + '40', color: CREAM, caretColor: GOLD }}
                />
              ))}
            </div>
            <input
              type="number"
              placeholder="Número de personas"
              min={1}
              max={12}
              className="w-full bg-transparent border-b px-0 py-3 text-sm focus:outline-none mb-6"
              style={{ borderColor: GOLD + '40', color: CREAM }}
            />
            <button
              className="w-full py-4 font-bold uppercase tracking-widest text-sm transition-opacity hover:opacity-90"
              style={{ background: GOLD, color: '#000' }}
            >
              CONFIRMAR RESERVA
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t text-center" style={{ borderColor: GOLD + '22', background: '#0d0600' }}>
        <p className="font-black italic text-2xl mb-4" style={{ color: GOLD }}>Arcos</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm" style={{ color: CREAM + '60' }}>
          <span className="flex items-center gap-2"><MapPin size={14} style={{ color: GOLD }} /> Calle Mayor 14, Madrid</span>
          <span className="flex items-center gap-2"><Phone size={14} style={{ color: GOLD }} /> +34 91 234 5678</span>
          <span className="flex items-center gap-2"><Clock size={14} style={{ color: GOLD }} /> Mar-Dom 13:00 – 23:00</span>
        </div>
        <p className="text-xs mt-6" style={{ color: CREAM + '30' }}>
          © {new Date().getFullYear()} Restaurante Arcos — Demo por Manahen García Garrido
        </p>
      </footer>
    </div>
  );
}

'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Coffee, Leaf, Droplets, Cake, MapPin, Clock, Star } from 'lucide-react';
import DemoNavBar from '@/components/demos/DemoNavBar';
import { staggerContainer, fadeUp } from '@/lib/animations';

const BROWN = '#3d1c02';
const TERRACOTTA = '#c8956c';
const CREAM = '#fdf5e6';
const WARM = '#f5e8cc';

const menuTabs = ['Cafés', 'Tés', 'Smoothies', 'Dulces'] as const;
type MenuTab = typeof menuTabs[number];

const menuData: Record<MenuTab, { icon: React.ElementType; name: string; desc: string; price: string }[]> = {
  Cafés: [
    { icon: Coffee, name: 'Americano', desc: 'Espresso doble con agua caliente', price: '€2.50' },
    { icon: Coffee, name: 'Cappuccino', desc: 'Espresso, leche vaporada y espuma sedosa', price: '€3.20' },
    { icon: Coffee, name: 'Flat White', desc: 'Doble ristretto con leche microespumada', price: '€3.80' },
    { icon: Coffee, name: 'Latte Vainilla', desc: 'Espresso con leche y sirope artesanal', price: '€4.00' },
  ],
  Tés: [
    { icon: Leaf, name: 'Matcha Latte', desc: 'Matcha ceremonial con leche de avena', price: '€4.50' },
    { icon: Leaf, name: 'Chai Especiado', desc: 'Mezcla de especias con leche de coco', price: '€4.00' },
    { icon: Leaf, name: 'Earl Grey', desc: 'Bergamota con leche de almendra', price: '€3.50' },
  ],
  Smoothies: [
    { icon: Droplets, name: 'Tropical Sunrise', desc: 'Mango, piña, maracuyá y cúrcuma', price: '€5.00' },
    { icon: Droplets, name: 'Berry Boost', desc: 'Frutos rojos, plátano y leche de avena', price: '€5.50' },
    { icon: Droplets, name: 'Green Power', desc: 'Espinacas, manzana verde y jengibre', price: '€5.00' },
  ],
  Dulces: [
    { icon: Cake, name: 'Carrot Cake', desc: 'Con frosting de queso crema', price: '€4.50' },
    { icon: Cake, name: 'Croissant Mantequilla', desc: 'Recién horneado cada mañana', price: '€2.80' },
    { icon: Cake, name: 'Brownie de Chocolate', desc: 'Intenso, húmedo y con nueces', price: '€3.50' },
    { icon: Cake, name: 'Cheesecake NY', desc: 'Cremoso con base de galleta', price: '€5.00' },
  ],
};

const loyaltyStamps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function CafeteriaPage() {
  const [activeTab, setActiveTab] = useState<MenuTab>('Cafés');
  const menuRef = useRef(null);
  const loyaltyRef = useRef(null);
  const menuInView = useInView(menuRef, { once: true, margin: '-60px' });

  return (
    <div style={{ background: CREAM, color: BROWN, fontFamily: "Georgia, 'Playfair Display', serif" }}>
      <DemoNavBar siteName="Café Artesano" sector="cafetería y pastelería artesanal" />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-12 px-6 text-center"
        style={{ background: `linear-gradient(160deg, ${CREAM}, ${WARM})` }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.4em] text-xs mb-4"
            style={{ color: TERRACOTTA }}
          >
            Desde 2018
          </motion.p>

          {/* CSS Coffee Cup with Steam */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative inline-block mb-6"
          >
            {/* Cup */}
            <div
              className="w-24 h-20 rounded-b-3xl mx-auto relative"
              style={{ background: BROWN, border: `3px solid ${TERRACOTTA}` }}
            >
              {/* Handle */}
              <div
                className="absolute -right-5 top-3 w-5 h-10 rounded-r-full border-2 border-l-0"
                style={{ borderColor: BROWN }}
              />
              {/* Coffee surface */}
              <div
                className="absolute top-2 left-2 right-2 h-4 rounded-full"
                style={{ background: TERRACOTTA }}
              />
            </div>
            {/* Saucer */}
            <div className="w-32 h-3 rounded-full mx-auto -mt-1" style={{ background: TERRACOTTA }} />
            {/* Steam wisps */}
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="absolute animate-steam"
                style={{
                  bottom: '100%',
                  left: `${30 + i * 20}%`,
                  width: 3,
                  height: 20,
                  background: `linear-gradient(to top, ${BROWN}44, transparent)`,
                  borderRadius: 2,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-black italic leading-tight mb-4"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: BROWN }}
          >
            Café Artesano
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg italic mb-10"
            style={{ color: BROWN + '99' }}
          >
            "Donde cada taza cuenta una historia"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#carta"
              className="px-8 py-4 font-bold text-white hover:scale-105 transition-transform rounded"
              style={{ background: BROWN }}
            >
              VER CARTA
            </a>
            <a
              href="#visita"
              className="px-8 py-4 font-bold border-2 hover:scale-105 transition-transform rounded"
              style={{ borderColor: TERRACOTTA, color: TERRACOTTA }}
            >
              CÓMO LLEGAR
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="carta" className="py-24 px-6" style={{ background: '#faf0dc' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black italic text-4xl md:text-5xl" style={{ color: BROWN }}>Nuestra Carta</h2>
            <div className="h-0.5 w-16 mx-auto mt-4" style={{ background: TERRACOTTA }} />
          </div>

          {/* Tabs */}
          <div className="flex justify-center flex-wrap gap-2 mb-10">
            {menuTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 font-semibold text-sm rounded-full transition-all"
                style={{
                  background: activeTab === tab ? BROWN : 'transparent',
                  color: activeTab === tab ? CREAM : BROWN,
                  border: `2px solid ${activeTab === tab ? BROWN : TERRACOTTA + '60'}`,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div
            ref={menuRef}
            variants={staggerContainer}
            initial="hidden"
            animate={menuInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {menuData[activeTab].map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-2xl border"
                style={{ background: CREAM, borderColor: TERRACOTTA + '33' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: TERRACOTTA + '22' }}
                >
                  <item.icon size={18} style={{ color: TERRACOTTA }} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-bold" style={{ color: BROWN }}>{item.name}</p>
                    <span className="font-black" style={{ color: TERRACOTTA }}>{item.price}</span>
                  </div>
                  <p className="text-sm mt-0.5 italic" style={{ color: BROWN + '80' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-20 px-6" style={{ background: BROWN }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* CSS Cafe Counter */}
          <div className="space-y-3">
            {[80, 60, 90, 50, 70].map((w, i) => (
              <motion.div
                key={i}
                initial={{ width: 0 }}
                whileInView={{ width: `${w}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="h-4 rounded-full"
                style={{ background: i % 2 === 0 ? TERRACOTTA : TERRACOTTA + '88' }}
              />
            ))}
          </div>
          <div>
            <p className="uppercase tracking-widest text-xs mb-3" style={{ color: TERRACOTTA }}>Nuestra historia</p>
            <h2 className="font-black italic text-3xl text-white mb-4">Artesanía en cada sorbo</h2>
            <p className="leading-relaxed mb-6" style={{ color: CREAM + '99' }}>
              Desde 2018 servimos café de especialidad cultivado de forma responsable. Cada grano es
              seleccionado a mano y tostado en nuestro propio obrador.
            </p>
            <div className="flex gap-4 flex-wrap">
              {[{ val: '6 años', label: 'de pasión' }, { val: '200+', label: 'recetas' }, { val: '4.9 ★', label: 'valoración' }].map(stat => (
                <div key={stat.label} className="px-4 py-3 rounded-xl text-center" style={{ background: TERRACOTTA + '33' }}>
                  <p className="font-black text-white text-lg">{stat.val}</p>
                  <p className="text-xs" style={{ color: CREAM + '80' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOYALTY PROGRAM ── */}
      <section className="py-20 px-6" style={{ background: WARM }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black italic text-3xl md:text-4xl mb-3"
            style={{ color: BROWN }}
          >
            PROGRAMA FIDELIDAD
          </motion.h2>
          <p className="italic mb-8" style={{ color: BROWN + '80' }}>Bebe 9, la 10ª GRATIS</p>

          {/* Loyalty card */}
          <motion.div
            ref={loyaltyRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border-2 mx-auto max-w-sm"
            style={{ background: CREAM, borderColor: TERRACOTTA }}
          >
            <p className="font-bold text-sm mb-4" style={{ color: BROWN }}>Café Artesano · Fidelidad</p>
            <div className="grid grid-cols-5 gap-3">
              {loyaltyStamps.map(stamp => (
                <div
                  key={stamp}
                  className="aspect-square rounded-full flex items-center justify-center"
                  style={{
                    background: stamp <= 7 ? BROWN : stamp === 10 ? TERRACOTTA + '44' : TERRACOTTA + '22',
                    border: `2px solid ${stamp <= 7 ? BROWN : TERRACOTTA + '60'}`,
                  }}
                >
                  {stamp <= 7 ? (
                    <Coffee size={14} style={{ color: CREAM }} />
                  ) : stamp === 10 ? (
                    <Star size={14} style={{ color: TERRACOTTA }} />
                  ) : null}
                </div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: BROWN + '60' }}>7/10 — ¡Te faltan 3!</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {['Cafés ilimitados en cumpleaños', 'Prioridad en nuevos productos', 'Descuento del 10% siempre'].map(b => (
              <div key={b} className="flex items-center gap-2 text-sm" style={{ color: BROWN + '80' }}>
                <span style={{ color: TERRACOTTA }}>✓</span> {b}
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block mt-8 px-8 py-4 font-bold rounded text-white hover:scale-105 transition-transform"
            style={{ background: BROWN }}
          >
            REGISTRARSE
          </a>
        </div>
      </section>

      {/* ── VISIT US ── */}
      <section id="visita" className="py-20 px-6" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black italic text-3xl mb-10" style={{ color: BROWN }}>Encuéntranos</h2>
          {/* Map placeholder */}
          <div
            className="rounded-2xl mx-auto mb-8 flex items-center justify-center relative overflow-hidden"
            style={{ background: '#e8d8c0', height: 200, maxWidth: 500 }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'linear-gradient(#c8956c 1px, transparent 1px), linear-gradient(90deg, #c8956c 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <MapPin size={32} style={{ color: BROWN }} />
              <p className="font-bold text-sm" style={{ color: BROWN }}>Calle del Café, 23</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm" style={{ color: BROWN + '80' }}>
            <span className="flex items-center gap-2"><MapPin size={14} style={{ color: TERRACOTTA }} /> Calle del Café 23, Madrid</span>
            <span className="flex items-center gap-2"><Clock size={14} style={{ color: TERRACOTTA }} /> Lun-Dom 8:00 – 20:00</span>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center border-t text-sm" style={{ borderColor: TERRACOTTA + '33', color: BROWN + '60', background: '#f0e4c8' }}>
        © {new Date().getFullYear()} Café Artesano — Demo por Manahen García Garrido
      </footer>
    </div>
  );
}

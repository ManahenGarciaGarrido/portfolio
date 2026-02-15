'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#05001a';
const accent = '#b44ef0';
const text = '#e8d5ff';
const textMuted = '#9a7fc0';
const cardBg = '#0c0526';
const cardBorder = '#1e0a4a';

type DrinkCategory = 'Clásicos' | 'Originales' | 'Sin Alcohol' | 'Champagne';

const cocktails = [
  { id: 1, seed: 'cocktail1', name: 'Negroni Oscuro', category: 'Clásicos' as DrinkCategory, price: '16€', ingredients: 'Gin Tanqueray, Campari, Vermouth Rosso, twist naranja', desc: 'La versión noir de un clásico italiano. Servido sobre hielo esculpido a mano.' },
  { id: 2, seed: 'cocktail2', name: 'Old Fashioned Ahumado', category: 'Clásicos' as DrinkCategory, price: '18€', ingredients: 'Bourbon Buffalo Trace, azúcar demerara, angostura, madera de cerezo', desc: 'Elaborado bajo una campana de cristal llena de humo de cerezo.' },
  { id: 3, seed: 'cocktail3', name: 'Martini Perfecto', category: 'Clásicos' as DrinkCategory, price: '17€', ingredients: 'Vodka Grey Goose, Noilly Prat Dry, aceitunas Castelvetrano', desc: 'La proporción perfecta. Frío hasta el límite, agitado con precisión.' },
  { id: 4, seed: 'cocktail4', name: 'Eclipse Noir', category: 'Originales' as DrinkCategory, price: '22€', ingredients: 'Mezcal Del Maguey, licor de violeta, carbón activado, lima', desc: 'Nuestra creación más emblemática. Negro como la noche con un corazón morado.' },
  { id: 5, seed: 'cocktail5', name: 'Neón Sour', category: 'Originales' as DrinkCategory, price: '19€', ingredients: 'Gin Monkey 47, yuzu, clara de huevo, tinta de calamar', desc: 'Un sour que brilla bajo la luz negra. Espectacular y delicioso.' },
  { id: 6, seed: 'cocktail6', name: 'Dark Matter', category: 'Originales' as DrinkCategory, price: '24€', ingredients: 'Whisky Glenfarclas 18Y, trufa negra, miel de trufa, humo', desc: 'El cóctel más complejo de nuestra carta. Solo para los valientes.' },
  { id: 7, seed: 'cocktail7', name: 'Purple Rain', category: 'Originales' as DrinkCategory, price: '20€', ingredients: 'Gin Hendricks, butterfly pea, limón, tónica premium', desc: 'Un efecto visual único: cambia de azul a rosa al añadir el limón.' },
  { id: 8, seed: 'cocktail8', name: 'Violeta Soda', category: 'Sin Alcohol' as DrinkCategory, price: '12€', ingredients: 'Jarabe de violeta, lima, jengibre, agua con gas, lavanda', desc: 'Floral y refrescante. Un mocktail con la misma complejidad que un cóctel.' },
  { id: 9, seed: 'cocktail9', name: 'Noir Spritz', category: 'Sin Alcohol' as DrinkCategory, price: '11€', ingredients: 'Jugo de uva negra, hibisco, menta, limón, agua con gas', desc: 'Visualmente impresionante con el mismo espíritu festivo de un Aperol Spritz.' },
  { id: 10, seed: 'cocktail10', name: 'Midnight Garden', category: 'Sin Alcohol' as DrinkCategory, price: '13€', ingredients: 'Verjuice, pepino, elderflower, albahaca, tónica', desc: 'Un jardín inglés en un vaso. Sofisticado y cero alcohol.' },
  { id: 11, seed: 'cocktail11', name: 'Dom Pérignon Cocktail', category: 'Champagne' as DrinkCategory, price: '45€', ingredients: 'Dom Pérignon 2015, St-Germain, Cointreau, oro comestible', desc: 'La celebración definitiva. Láminas de oro flotan en una copa de cava francés.' },
  { id: 12, seed: 'cocktail12', name: 'Krug Royale Noir', category: 'Champagne' as DrinkCategory, price: '38€', ingredients: 'Krug Grand Cuvée, cassis negro, licor de violeta, edición limitada', desc: 'Solo disponible los fines de semana. Una experiencia de burbuja irrepetible.' },
];

const seasonal = [
  { id: 1, seed: 'seasonal1', name: 'Otoño en Marte', price: '26€', ingredients: 'Calvados, especias otoñales, manzana asada, caramelo negro', desc: 'Nuestra creación de temporada. La esencia del otoño destilada en un vaso.' },
  { id: 2, seed: 'seasonal2', name: 'Primera Luz', price: '24€', ingredients: 'Sake premium, yuzu, chrysanthemum, sake espumoso', desc: 'Inspirado en el amanecer japonés. Solo disponible hasta fin de temporada.' },
];

const tapas = [
  { id: 1, name: 'Croquetas de Ibérico Trufado', price: '14€', desc: 'Bechamel de trufa negra, jamón ibérico de bellota D.O. Guijuelo' },
  { id: 2, name: 'Ostras con Granita de Champagne', price: '22€', desc: 'Ostras Gillardeau n.3 con granita de Moët & Chandon y mignonette de chalota' },
  { id: 3, name: 'Wagyu con Tuétano', price: '34€', desc: 'Solomillo wagyu A5 japonés, tuétano a la brasa, flor de sal Maldon, crispy' },
  { id: 4, name: 'Caviar Oscietra con Blinis', price: '65€', desc: '30g de caviar Oscietra iraní, blinis calientes, crema fraîche, cebollino' },
  { id: 5, name: 'Burrata con Tomate Negro', price: '18€', desc: 'Burrata de Puglia, tomate negro Kumato, pesto de albahaca tailandesa, AOVE' },
  { id: 6, name: 'Foie Micuit con Brioche Negro', price: '28€', desc: 'Foie micuit maison, brioche de carbón activado, mermelada de higos negros' },
];

const categories: DrinkCategory[] = ['Clásicos', 'Originales', 'Sin Alcohol', 'Champagne'];

function CocktailCard({ c, delay }: { c: typeof cocktails[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: cardBg,
        border: `1px solid ${hovered ? accent : cardBorder}`,
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: hovered ? `0 0 20px ${accent}22` : 'none',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
        <img
          src={`https://picsum.photos/seed/${c.seed}/300/380`}
          alt={c.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered ? `linear-gradient(to top, ${accent}44, transparent 50%)` : `linear-gradient(to top, rgba(5,0,26,0.6), transparent)`,
          transition: 'background 0.3s',
        }} />
        <div style={{
          position: 'absolute', top: 10, right: 10,
          background: accent, color: '#fff',
          fontSize: '14px', fontWeight: 800, padding: '6px 12px',
          boxShadow: hovered ? `0 0 15px ${accent}` : 'none',
          transition: 'box-shadow 0.3s',
        }}>
          {c.price}
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ color: text, fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>{c.name}</h3>
        <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.05em', marginBottom: '8px', fontStyle: 'italic' }}>{c.ingredients}</p>
        <p style={{ color: textMuted, fontSize: '12px', lineHeight: 1.6 }}>{c.desc}</p>
      </div>
    </motion.div>
  );
}

export default function CartaPage() {
  const [activeCategory, setActiveCategory] = useState<DrinkCategory>('Clásicos');
  const filtered = cocktails.filter(c => c.category === activeCategory);
  const tapasRef = useRef(null);
  const tapasInView = useInView(tapasRef, { once: true, margin: '-60px' });

  return (
    <main style={{ background: bg, color: text, minHeight: '100vh' }}>
      {/* HEADER */}
      <section style={{ padding: '80px 0 56px', textAlign: 'center' }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: accent, fontSize: '12px', letterSpacing: '0.3em', marginBottom: '16px', fontWeight: 600 }}
          >
            NOIR BAR
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 900,
              color: text, marginBottom: '16px', letterSpacing: '0.05em',
              textShadow: `0 0 40px ${accent}44`,
            }}
          >
            NUESTRA CARTA
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ width: '60px', height: '2px', background: accent, margin: '0 auto 20px', boxShadow: `0 0 10px ${accent}` }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ color: textMuted, fontSize: '15px', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}
          >
            Cada cóctel es una obra de arte efímera. Creados con ingredientes únicos de los cinco continentes por nuestro equipo de bartenders premiados.
          </motion.p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section style={{ padding: '0 0 48px' }}>
        <div className="r-container">
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', borderBottom: `1px solid ${cardBorder}`, marginBottom: '48px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: 'transparent',
                  color: activeCategory === cat ? accent : textMuted,
                  border: 'none', borderBottom: activeCategory === cat ? `2px solid ${accent}` : '2px solid transparent',
                  padding: '12px 28px', fontSize: '14px', fontWeight: 700,
                  letterSpacing: '0.1em', cursor: 'pointer',
                  transition: 'all 0.2s',
                  marginBottom: '-1px',
                  textShadow: activeCategory === cat ? `0 0 10px ${accent}88` : 'none',
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="r-grid-3">
            {filtered.map((c, i) => (
              <CocktailCard key={c.id} c={c} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL FEATURED */}
      <section style={{ padding: '80px 0', background: cardBg }}>
        <div className="r-container">
          <div style={{ marginBottom: '48px' }}>
            <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>EXCLUSIVOS</div>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: text, marginBottom: '8px' }}>Cócteles de Temporada</h2>
            <p style={{ color: textMuted, fontSize: '14px' }}>Creaciones exclusivas disponibles por tiempo limitado. Cuando se acaben, se acaban.</p>
          </div>
          <div className="r-grid-2" style={{ gap: '24px' }}>
            {seasonal.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{
                  background: bg, border: `1px solid ${accent}44`,
                  overflow: 'hidden', display: 'flex',
                  boxShadow: `0 0 30px ${accent}11`,
                }}
              >
                <div style={{ width: '180px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={`https://picsum.photos/seed/${s.seed}/300/300`}
                    alt={s.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '28px', flex: 1 }}>
                  <div style={{ display: 'inline-block', background: `${accent}22`, color: accent, fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', padding: '3px 10px', marginBottom: '14px' }}>
                    EDICIÓN LIMITADA
                  </div>
                  <h3 style={{ color: text, fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>{s.name}</h3>
                  <p style={{ color: accent, fontSize: '12px', fontStyle: 'italic', marginBottom: '10px' }}>{s.ingredients}</p>
                  <p style={{ color: textMuted, fontSize: '13px', lineHeight: 1.6, marginBottom: '20px' }}>{s.desc}</p>
                  <div style={{ color: accent, fontSize: '22px', fontWeight: 800 }}>{s.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAPAS */}
      <section ref={tapasRef} style={{ padding: '80px 0', background: bg }}>
        <div className="r-container">
          <div style={{ marginBottom: '48px' }}>
            <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>COCINA</div>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: text }}>Bar & Snacks Premium</h2>
            <p style={{ color: textMuted, fontSize: '14px', marginTop: '8px' }}>Alta cocina de bocado para acompañar tu experiencia en Noir Bar.</p>
          </div>
          <div className="r-grid-2" style={{ gap: '2px' }}>
            {tapas.map((tapa, i) => (
              <motion.div
                key={tapa.id}
                initial={{ opacity: 0, x: -20 }}
                animate={tapasInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  padding: '20px 24px', background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  gap: '16px',
                }}
              >
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: text, fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{tapa.name}</h4>
                  <p style={{ color: textMuted, fontSize: '12px', lineHeight: 1.6 }}>{tapa.desc}</p>
                </div>
                <div style={{ color: accent, fontSize: '16px', fontWeight: 700, flexShrink: 0 }}>{tapa.price}</div>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: '24px', padding: '16px 24px', background: `${accent}11`, border: `1px solid ${accent}33` }}>
            <p style={{ color: textMuted, fontSize: '13px' }}>
              ℹ️ Carta sujeta a cambios de temporada. Algunos productos pueden estar sujetos a disponibilidad. Infórmenos de cualquier alergia o intolerancia alimentaria.
            </p>
          </div>
        </div>
      </section>

      {/* RESERVA CTA */}
      <section style={{ padding: '64px 24px', textAlign: 'center', background: cardBg, borderTop: `1px solid ${cardBorder}` }}>
        <h2 style={{ fontSize: '26px', fontWeight: 700, color: text, marginBottom: '12px' }}>¿Listo para vivir la experiencia?</h2>
        <p style={{ color: textMuted, fontSize: '14px', marginBottom: '28px' }}>Reserva tu mesa ahora y asegura tu noche en el mejor bar de Madrid.</p>
        <Link
          href="/demos/cocktailbar/reservar"
          style={{
            background: accent, color: '#fff',
            padding: '15px 44px', fontSize: '13px', fontWeight: 700,
            letterSpacing: '0.12em', textDecoration: 'none', display: 'inline-block',
            boxShadow: `0 0 30px ${accent}66`,
          }}
        >
          RESERVAR MESA
        </Link>
      </section>
    </main>
  );
}

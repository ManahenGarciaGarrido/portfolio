'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const gold = '#d4a017';
const cream = '#fff5e6';
const darkBrown = '#0d0500';
const bg = '#1a0a00';

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  seed: string;
  allergens?: string;
};

const menu: Record<string, MenuItem[]> = {
  Entrantes: [
    { name: 'Ceviche de Lubina al Cítrico', desc: 'Lubina salvaje, leche de tigre, aguacate cremoso, cilantro fresco y chips de yuca crujientes', price: '22€', seed: 'food1', allergens: 'Pescado, Gluten' },
    { name: 'Vieira con Espuma de Mar', desc: 'Vieira gallega, espuma de alga nori, tierra de aceitunas negras, aceite de erizos', price: '32€', seed: 'food2', allergens: 'Moluscos' },
    { name: 'Foie Gras Micuit', desc: 'Foie gras micuit de pato, brioche tostado, chutney de higos, gelatina de Sauternes', price: '28€', seed: 'food3', allergens: 'Gluten, Huevo' },
    { name: 'Tartar de Atún Rojo', desc: 'Atún rojo de almadraba, guacamole, emulsión de soja y jengibre, wakame marinado', price: '26€', seed: 'food4', allergens: 'Pescado, Soja' },
    { name: 'Gazpacho de Remolacha', desc: 'Remolacha asada, vinagre de Jerez, burrata de cabra, aceite de albahaca', price: '18€', seed: 'food5', allergens: 'Lácteos' },
  ],
  Principales: [
    { name: 'Pichón Asado a la Brasa', desc: 'Pichón de Bresse, jugo de trufa, puré de tupinambo, espárragos de Navarra, consomé de aves', price: '48€', seed: 'food6', allergens: 'Ninguno' },
    { name: 'Rodaballo al Vapor de Algas', desc: 'Rodaballo salvaje, emulsión de mantequilla de café, espinacas baby, quinoa crujiente', price: '44€', seed: 'food7', allergens: 'Pescado, Lácteos' },
    { name: 'Lomo de Wagyu A5', desc: 'Entrecot de buey wagyu, tuétano asado, cebolla caramelizada, patata rota, chimichurri de hierbas', price: '68€', seed: 'food8', allergens: 'Lácteos' },
    { name: 'Cochinillo Crujiente', desc: 'Cochinillo de 21 días, manzana Granny Smith, salvia frita, reducción de Pedro Ximénez', price: '42€', seed: 'food9', allergens: 'Ninguno' },
    { name: 'Menestra de Verduras de Temporada', desc: 'Selección de verduras de huerto ecológico, caldo de parmesano, aceite de trufa blanca', price: '28€', seed: 'food10', allergens: 'Lácteos' },
    { name: 'Merluza con Pilpil Negro', desc: 'Merluza del norte, pilpil con tinta de calamar, kokotxas al ajillo, pepitoria de almendras', price: '36€', seed: 'food11', allergens: 'Pescado, Frutos Secos' },
  ],
  Postres: [
    { name: 'Chocolate & Café', desc: 'Cremoso de cacao 72%, helado de café de especialidad Etiopía, crumble de avellana tostada', price: '18€', seed: 'food12', allergens: 'Lácteos, Frutos Secos, Gluten' },
    { name: 'Soufflé de Vainilla Bourbon', desc: 'Soufflé caliente, helado de vainilla de Madagascar, salsa de caramelo y sal de Añana', price: '20€', seed: 'food13', allergens: 'Huevo, Lácteos, Gluten' },
    { name: 'Tarta Tatín de Manzana', desc: 'Manzana Fuji caramelizada, hojaldre de mantequilla, helado de calvados, crema fraîche', price: '16€', seed: 'food14', allergens: 'Gluten, Lácteos, Huevo' },
    { name: 'Arroz con Leche de Azahar', desc: 'Arroz cremoso con agua de azahar, ralladura de limón, natillas ligeras, canela en rama', price: '14€', seed: 'food15', allergens: 'Lácteos' },
  ],
  Vinos: [
    { name: 'Vega Sicilia Único 2015', desc: 'D.O. Ribera del Duero · Tempranillo 94%, Cabernet Sauvignon 6% · Complejo y elegante', price: '280€', seed: 'food16', allergens: 'Sulfitos' },
    { name: 'Pingus 2019', desc: 'D.O. Ribera del Duero · Tempranillo 100% · Potente, mineral, con taninos sedosos', price: '180€', seed: 'food17', allergens: 'Sulfitos' },
    { name: 'Rías Baixas Albariño Reserva', desc: 'D.O. Rías Baixas · Albariño 100% · Fresco, floral, con notas de melocotón y cítricos', price: '48€', seed: 'food18', allergens: 'Sulfitos' },
    { name: 'Cava Gran Reserva Brut Nature', desc: 'D.O. Cava · Xarel·lo, Macabeo, Parellada · Elegante, burbuja fina, largo postgusto', price: '55€', seed: 'food19', allergens: 'Sulfitos' },
    { name: 'Jerez Oloroso 30 Años', desc: 'D.O. Jerez-Xérès-Sherry · Palomino Fino · Notas de nuez, cuero, frutos secos tostados', price: '35€', seed: 'food20', allergens: 'Sulfitos' },
  ],
};

const tabs = Object.keys(menu);

function MenuSection({ items, isActive }: { items: MenuItem[]; isActive: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-40px' });

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          ref={ref}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                padding: '24px 0',
                borderBottom: `1px solid #2a1800`,
              }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '2px', flexShrink: 0 }}>
                <img
                  src={`https://picsum.photos/seed/${item.seed}/200/150`}
                  alt={item.name}
                  style={{ width: '120px', height: '90px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div>
                <h3 style={{ color: cream, fontSize: '18px', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 6px', fontWeight: 400 }}>
                  {item.name}
                </h3>
                <p style={{ color: '#9a7a5a', fontSize: '13px', lineHeight: 1.6, margin: '0 0 6px' }}>{item.desc}</p>
                {item.allergens && (
                  <span style={{ color: '#5a3a20', fontSize: '11px', letterSpacing: '0.08em' }}>
                    Alérgenos: {item.allergens}
                  </span>
                )}
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <span style={{ color: gold, fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 400 }}>
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function CartaPage() {
  const [activeTab, setActiveTab] = useState('Entrantes');
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div style={{ backgroundColor: bg, color: cream, minHeight: '100vh' }}>

      {/* HEADER */}
      <section ref={headerRef} className="r-section-sm" style={{ textAlign: 'center', borderBottom: `1px solid #2a1800` }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 600, marginBottom: '16px' }}
        >
          — MENÚ DE TEMPORADA · PRIMAVERA 2025
        </motion.p>
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={headerInView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(40px, 7vw, 90px)',
              fontFamily: 'Georgia, serif', fontStyle: 'italic',
              fontWeight: 400, margin: '0 0 24px', color: cream, lineHeight: 1
            }}
          >
            Nuestra Carta
          </motion.h1>
        </div>
        <div style={{ width: '60px', height: '1px', backgroundColor: gold, margin: '0 auto 24px' }} />
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ color: '#9a7a5a', fontSize: '15px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}
        >
          Cada plato es el reflejo del mejor producto de temporada, tratado con respeto y transformado con técnica. Los precios incluyen IVA. Informamos de alérgenos bajo petición.
        </motion.p>
      </section>

      {/* TAB NAVIGATION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          display: 'flex', gap: '0', borderBottom: `1px solid #2a1800`,
          backgroundColor: darkBrown, overflowX: 'auto'
        }}
      >
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: '1', minWidth: '120px', padding: '22px 32px',
              backgroundColor: activeTab === tab ? bg : 'transparent',
              color: activeTab === tab ? gold : '#9a7a5a',
              border: 'none',
              borderBottom: activeTab === tab ? `2px solid ${gold}` : '2px solid transparent',
              fontWeight: 700, fontSize: '13px', letterSpacing: '0.2em', cursor: 'pointer',
              transition: 'all 0.25s ease', fontFamily: 'inherit'
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </motion.div>

      {/* MENU CONTENT */}
      <section className="r-section-sm" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {tabs.map(tab => (
          <MenuSection key={tab} items={menu[tab]} isActive={activeTab === tab} />
        ))}
      </section>

      {/* MENU NOTES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="r-grid-3 r-section-sm" style={{
          backgroundColor: darkBrown,
          borderTop: `1px solid #2a1800`,
          maxWidth: '1100px', margin: '0 auto'
        }}
      >
        {[
          { title: 'Menú Degustación', desc: 'Disponible para toda la mesa. 8 pases + maridaje de vinos seleccionados. 145€ por persona (vinos incluidos: 195€).' },
          { title: 'Maridaje de Vinos', desc: 'Nuestro sommelier ha seleccionado vinos ecológicos y biodinámicos de pequeños productores españoles para acompañar cada plato.' },
          { title: 'Alergias e Intolerancias', desc: 'Comuníquenos sus necesidades dietéticas al realizar la reserva y prepararemos alternativas sin comprometer la experiencia gastronómica.' },
        ].map(note => (
          <div key={note.title}>
            <div style={{ width: '30px', height: '1px', backgroundColor: gold, marginBottom: '16px' }} />
            <h3 style={{ color: cream, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '18px', fontWeight: 400, margin: '0 0 10px' }}>
              {note.title}
            </h3>
            <p style={{ color: '#9a7a5a', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{note.desc}</p>
          </div>
        ))}
      </motion.section>

      {/* RESERVATION CTA */}
      <div className="r-section-sm" style={{ textAlign: 'center', borderTop: `1px solid #2a1800` }}>
        <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 600, marginBottom: '20px' }}>
          — ¿LISTO PARA VIVIR LA EXPERIENCIA?
        </p>
        <a href="/demos/restaurante/reservar">
          <button style={{
            backgroundColor: gold, color: darkBrown,
            border: 'none', padding: '16px 52px',
            fontWeight: 700, fontSize: '13px', letterSpacing: '0.2em', cursor: 'pointer'
          }}>
            RESERVAR MESA
          </button>
        </a>
      </div>
    </div>
  );
}

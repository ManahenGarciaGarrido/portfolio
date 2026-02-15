'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#0a0805';
const accent = '#c8a96e';
const text = '#f5ece0';
const textMuted = '#b8a898';
const cardBg = '#130f0a';

type MenuSection = 'Desayuno' | 'Almuerzo' | 'Cena';

const menu: Record<MenuSection, Array<{ id: number; seed: string; name: string; desc: string; price: string; badge?: string }>> = {
  Desayuno: [
    { id: 1, seed: 'food1', name: 'Tostadas con Tomate y Aceite', desc: 'Pan de masa madre, tomate rallado de temporada, aceite de oliva virgen extra Picual', price: '12€' },
    { id: 2, seed: 'food2', name: 'Huevos Benedictinos Trufados', desc: 'Huevos poché, jamón ibérico, salsa holandesa de trufa negra, pan brioche tostado', price: '18€', badge: 'Popular' },
    { id: 3, seed: 'food3', name: 'Frutas Frescas de Temporada', desc: 'Surtido de frutas de mercado con coulis de frutos rojos y menta fresca', price: '14€' },
    { id: 4, seed: 'food4', name: 'Porridge de Avena Premium', desc: 'Avena ecológica, leche de almendra, granola artesanal, miel de azahar y frutos rojos', price: '15€' },
    { id: 5, seed: 'food5', name: 'Desayuno Andaluz Completo', desc: 'Tostadas, zumo natural, café de especialidad, fruta fresca y mini pastelería artesanal', price: '28€', badge: 'Incluido en suite' },
  ],
  Almuerzo: [
    { id: 1, seed: 'food6', name: 'Gazpacho Andaluz de Temporada', desc: 'Tomate de Jaén madurado en mata, pepino, pimiento verde, cebolla morada, AOVE', price: '16€', badge: 'Temporada' },
    { id: 2, seed: 'food7', name: 'Ensalada de Burrata y Tomate Negro', desc: 'Burrata de Puglia, tomate Kumato, rúcula, pesto de albahaca, piñones tostados, AOVE', price: '22€' },
    { id: 3, seed: 'food8', name: 'Pez de San Pedro a la Brasa', desc: 'San Pedro del Atlántico, mantequilla de algas, patata confitada, cítricos de Huelva', price: '34€', badge: 'Recomendado' },
    { id: 4, seed: 'food1', name: 'Cochinillo Ibérico Asado', desc: 'Cochinillo de Segovia, piel crujiente, compota de manzana, jus de asado con Pedro Ximénez', price: '42€' },
    { id: 5, seed: 'food2', name: 'Pasta Fresca con Trufa', desc: 'Tagliatelle artesanales, trufa negra de Teruel, pecorino romano, mantequilla de trufa', price: '38€' },
  ],
  Cena: [
    { id: 1, seed: 'food3', name: 'Vieira con Espuma de Ajo Blanco', desc: 'Vieira de Galicia, ajo blanco malagueño, huevas de trucha, flores de temporada', price: '36€', badge: 'Firma' },
    { id: 2, seed: 'food4', name: 'Pichón de Bresse Asado', desc: 'Pichón con trufa de temporada, consomé de aves al Jerez, remolacha confitada', price: '52€', badge: 'Estrella Michelin' },
    { id: 3, seed: 'food5', name: 'Solomillo Wagyu A5', desc: 'Solomillo de wagyu japonés A5, salsa de tuétano, chalotas confitadas, puré trufado', price: '78€' },
    { id: 4, seed: 'food6', name: 'Corvina Salvaje con Romesco', desc: 'Corvina del Atlántico, romesco de piquillos, espárragos blancos de Navarra, arroz meloso', price: '44€' },
    { id: 5, seed: 'food7', name: 'Menú Degustación El Naranjo', desc: '8 pases seleccionados por el chef, maridaje de vinos incluido, 3h de experiencia gastronómica', price: '195€/persona', badge: 'Experiencia completa' },
  ],
};

function DishCard({ dish, delay }: { dish: { id: number; seed: string; name: string; desc: string; price: string; badge?: string }; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
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
        border: `1px solid ${hovered ? accent : '#2a1f15'}`,
        overflow: 'hidden',
        transition: 'border-color 0.3s',
        display: 'flex',
        gap: '0',
      }}
    >
      <div style={{ width: '130px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
        <img
          src={`https://picsum.photos/seed/${dish.seed}/300/250`}
          alt={dish.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        />
      </div>
      <div style={{ padding: '20px', flex: 1 }}>
        {dish.badge && (
          <span style={{ background: accent, color: bg, fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', padding: '2px 8px', display: 'inline-block', marginBottom: '8px' }}>
            {dish.badge.toUpperCase()}
          </span>
        )}
        <h4 style={{ color: text, fontSize: '15px', fontWeight: 600, marginBottom: '6px', fontFamily: 'Georgia,serif' }}>{dish.name}</h4>
        <p style={{ color: textMuted, fontSize: '12px', lineHeight: 1.6, marginBottom: '12px' }}>{dish.desc}</p>
        <div style={{ color: accent, fontSize: '18px', fontWeight: 700 }}>{dish.price}</div>
      </div>
    </motion.div>
  );
}

export default function RestauranteHotelPage() {
  const [activeSection, setActiveSection] = useState<MenuSection>('Cena');
  const [reservaForm, setReservaForm] = useState({ nombre: '', fecha: '', hora: '20:30', personas: '2', peticion: '' });
  const reservaRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const sections: MenuSection[] = ['Desayuno', 'Almuerzo', 'Cena'];

  return (
    <main style={{ background: bg, color: text, minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '400px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/restaurant-hotel/1200/600"
          alt="El Naranjo restaurante"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,5,0.95) 0%, rgba(10,8,5,0.3) 60%, transparent 100%)' }} />
        <div ref={heroRef} className="r-container" style={{ position: 'relative', paddingBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            style={{ color: accent, fontSize: '12px', letterSpacing: '0.25em', marginBottom: '10px', fontWeight: 600 }}
          >
            PALACIO VERDE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px, 6vw, 64px)', color: text, fontWeight: 400, letterSpacing: '0.05em', marginBottom: '12px' }}
          >
            EL NARANJO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{ color: textMuted, fontSize: '16px', maxWidth: '500px', lineHeight: 1.6, marginBottom: '24px' }}
          >
            Cocina andaluza de autor en el corazón del Palacio. Una estrella Michelin al servicio de la memoria gastronómica de Sevilla.
          </motion.p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {['★ Estrella Michelin 2024', 'Abierto 7:30—23:00', 'Reserva recomendada'].map((badge) => (
              <span key={badge} style={{ color: accent, fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', borderLeft: `2px solid ${accent}`, paddingLeft: '10px' }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section style={{ padding: '80px 0' }}>
        <div className="r-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Georgia,serif', color: text, fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 400, marginBottom: '12px' }}>
              Nuestra Carta
            </h2>
            <p style={{ color: textMuted, fontSize: '14px', marginBottom: '32px' }}>
              Producto local y de temporada. Carta renovada según el mercado.
            </p>
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', borderBottom: `1px solid ${accent}22`, paddingBottom: '0' }}>
              {sections.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSection(s)}
                  style={{
                    background: 'transparent',
                    color: activeSection === s ? accent : textMuted,
                    border: 'none', borderBottom: activeSection === s ? `2px solid ${accent}` : '2px solid transparent',
                    padding: '12px 28px', fontSize: '14px', fontWeight: 700,
                    letterSpacing: '0.1em', cursor: 'pointer',
                    transition: 'all 0.2s',
                    marginBottom: '-1px',
                  }}
                >
                  {s.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', maxWidth: '800px', margin: '0 auto' }}>
            {menu[activeSection].map((dish, i) => (
              <DishCard key={dish.id} dish={dish} delay={i * 0.08} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ color: textMuted, fontSize: '13px', fontStyle: 'italic' }}>
              Carta sujeta a cambios de temporada. Infórmenos de alergias e intolerancias. IVA incluido.
            </p>
          </div>
        </div>
      </section>

      {/* MESA DE TEMPORADA */}
      <section style={{ padding: '80px 0', background: cardBg }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '64px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '14px', fontWeight: 600 }}>EXCLUSIVO</div>
              <h2 style={{ fontFamily: 'Georgia,serif', color: text, fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 400, marginBottom: '20px' }}>
                Mesa de Temporada
              </h2>
              <div style={{ width: '50px', height: '1px', background: accent, marginBottom: '24px' }} />
              <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.8, marginBottom: '18px' }}>
                Una experiencia única reservada exclusivamente para los huéspedes del Palacio Verde. Cuatro veces al año, nuestro chef invita a cuatro comensales a compartir una cena privada en la cocina, contemplando en primera línea la magia de la elaboración.
              </p>
              <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
                El menú, secreto hasta el momento de sentarse, está concebido íntegramente con los productos más exquisitos del mercado de ese día. Sin carta, sin opciones: solo confianza plena en el criterio del chef.
              </p>
              <div style={{ background: bg, padding: '20px 24px', border: `1px solid ${accent}44`, marginBottom: '24px' }}>
                <div style={{ color: accent, fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>Precio por persona: 280€</div>
                <p style={{ color: textMuted, fontSize: '13px', lineHeight: 1.6 }}>Incluye maridaje completo de vinos naturales y aguas de selección. Solo 4 plazas. Reserva con mínimo 48 horas de antelación.</p>
              </div>
              <button
                onClick={() => reservaRef.current?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: accent, color: bg,
                  padding: '13px 32px', fontSize: '13px', fontWeight: 700,
                  letterSpacing: '0.1em', border: 'none', cursor: 'pointer',
                }}
              >
                SOLICITAR PLAZA
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5' }}>
                <img
                  src="https://picsum.photos/seed/kitchen-table/500/625"
                  alt="Mesa de temporada"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BODEGA */}
      <section style={{ padding: '80px 0', background: bg }}>
        <div className="r-container">
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '14px', fontWeight: 600 }}>BODEGA</div>
              <h2 style={{ fontFamily: 'Georgia,serif', color: text, fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 400, marginBottom: '20px' }}>
                Una bodega de 2.000 referencias
              </h2>
              <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.8, marginBottom: '18px' }}>
                Más de 2.000 referencias nacionales e internacionales cuidadosamente seleccionadas por nuestra sumiller, María José Heredia. Especial énfasis en vinos andaluces, jereces y tintos de autor de pequeñas bodegas.
              </p>
              <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.8 }}>
                Ofrecemos maridaje por copa, por botella y servicio de decantación. Posibilidad de visita guiada a la bodega histórica del palacio bajo petición al concierge.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flex: 1, minWidth: '280px' }}>
              {[
                { label: 'Referencias', value: '+2.000' },
                { label: 'Vinos españoles', value: '68%' },
                { label: 'Vinos naturales', value: '280+' },
                { label: 'Añadas únicas', value: '45+' },
              ].map((stat) => (
                <div key={stat.label} style={{ background: cardBg, padding: '24px', textAlign: 'center', border: `1px solid ${accent}22` }}>
                  <div style={{ fontFamily: 'Georgia,serif', color: accent, fontSize: '32px', fontWeight: 700 }}>{stat.value}</div>
                  <div style={{ color: textMuted, fontSize: '13px', marginTop: '6px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESERVA FORM */}
      <section ref={reservaRef} style={{ padding: '80px 0', background: cardBg }}>
        <div className="r-container">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'Georgia,serif', color: text, fontSize: '28px', fontWeight: 400, marginBottom: '12px' }}>
                Reservar Mesa
              </h2>
              <p style={{ color: textMuted, fontSize: '14px' }}>Reservas para el mismo día deben realizarse antes de las 14:00. Para la Mesa de Temporada, mínimo 48 horas.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>NOMBRE</label>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={reservaForm.nombre}
                  onChange={(e) => setReservaForm(prev => ({ ...prev, nombre: e.target.value }))}
                  style={{ width: '100%', padding: '12px 14px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>FECHA</label>
                <input
                  type="date"
                  value={reservaForm.fecha}
                  onChange={(e) => setReservaForm(prev => ({ ...prev, fecha: e.target.value }))}
                  style={{ width: '100%', padding: '12px 14px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>HORA</label>
                <select
                  value={reservaForm.hora}
                  onChange={(e) => setReservaForm(prev => ({ ...prev, hora: e.target.value }))}
                  style={{ width: '100%', padding: '12px 14px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none' }}
                >
                  <option>13:00</option>
                  <option>13:30</option>
                  <option>14:00</option>
                  <option>20:00</option>
                  <option>20:30</option>
                  <option>21:00</option>
                  <option>21:30</option>
                  <option>22:00</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>PERSONAS</label>
                <select
                  value={reservaForm.personas}
                  onChange={(e) => setReservaForm(prev => ({ ...prev, personas: e.target.value }))}
                  style={{ width: '100%', padding: '12px 14px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none' }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n}>{n}</option>)}
                  <option value="grupo">Grupo (+8)</option>
                </select>
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'block', color: textMuted, fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 600 }}>PETICIÓN ESPECIAL</label>
                <textarea
                  placeholder="Alergias, ocasión especial, preferencias de mesa..."
                  value={reservaForm.peticion}
                  onChange={(e) => setReservaForm(prev => ({ ...prev, peticion: e.target.value }))}
                  rows={3}
                  style={{ width: '100%', padding: '12px 14px', background: bg, border: `1px solid #2a1f15`, color: text, fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <button
                  style={{ width: '100%', background: accent, color: bg, padding: '15px', fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', border: 'none', cursor: 'pointer' }}
                >
                  CONFIRMAR RESERVA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

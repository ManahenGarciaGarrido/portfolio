'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#000000';
const gold = '#d4af37';
const cream = '#f0e8d0';
const darkGold = '#b8962e';
const charcoal = '#111111';

const collections = [
  {
    id: 1,
    seed: 'jewelry1',
    name: 'La Eternal',
    desc: 'Piezas atemporales que trascienden las modas. Oro de 18 quilates con diamantes talla brillante cuidadosamente seleccionados. Para quienes entienden que lo verdaderamente bello nunca pasa.',
    tag: 'CLÁSICA',
  },
  {
    id: 2,
    seed: 'jewelry2',
    name: 'La Moderna',
    desc: 'Geometría contemporánea fusionada con la más alta tradición artesanal. Líneas limpias, formas audaces. Para la mujer que escribe su propia historia con decisión y elegancia.',
    tag: 'CONTEMPORÁNEA',
  },
  {
    id: 3,
    seed: 'jewelry3',
    name: 'La Nupcial',
    desc: 'El anillo que sellará el momento más importante de vuestra vida merece ser único. Nuestra colección nupcial combina diamantes certificados con diseños exclusivos para ese día irrepetible.',
    tag: 'NUPCIAL',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sofía Martínez',
    city: 'Madrid',
    seed: 'client1',
    text: 'Mi anillo de compromiso de AURUM es simplemente perfecto. El maestro joyero entendió exactamente lo que buscaba y lo convirtió en algo aún más hermoso de lo que jamás imaginé. Cada vez que lo miro, recuerdo ese momento mágico.',
    piece: 'Anillo de compromiso · La Eternal',
  },
  {
    id: 2,
    name: 'Elena Rodríguez',
    city: 'Barcelona',
    seed: 'client2',
    text: 'Encargué las alianzas de boda para mi marido y para mí. El proceso fue extraordinario: desde la primera consulta hasta el momento en que las sostuve en mis manos. Son el reflejo perfecto de nuestra historia de amor.',
    piece: 'Alianzas de boda · La Nupcial',
  },
  {
    id: 3,
    name: 'Carmen Vidal',
    city: 'Sevilla',
    seed: 'client3',
    text: 'Llevo el collar de AURUM en cada momento especial. La calidad es incomparable y el servicio, exquisito. Desde el equipo de Salamanca hasta el maestro artesano, todos trataron mi encargo con un mimo extraordinario.',
    piece: 'Collar · La Moderna',
  },
];

function CollectionCard({ col, delay }: { col: typeof collections[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: charcoal,
        border: `1px solid ${hovered ? gold : '#1e1e1e'}`,
        transition: 'border-color 0.5s ease',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      <div style={{ overflow: 'hidden', aspectRatio: '1/1' }}>
        <img
          src={`https://picsum.photos/seed/${col.seed}/500/500`}
          alt={col.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.7s ease',
          }}
        />
      </div>
      <div style={{ padding: '28px 28px 32px' }}>
        <span style={{ color: gold, fontSize: '10px', letterSpacing: '0.25em', fontWeight: 700 }}>
          {col.tag}
        </span>
        <h3 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: '22px', margin: '10px 0 14px', fontWeight: 400 }}>
          {col.name}
        </h3>
        <p style={{ color: cream + '99', fontSize: '14px', lineHeight: 1.8, margin: '0 0 20px' }}>
          {col.desc}
        </p>
        <Link
          href="/demos/joyeria/colecciones"
          style={{
            color: gold,
            fontSize: '12px',
            letterSpacing: '0.15em',
            fontWeight: 600,
            textDecoration: 'none',
            borderBottom: `1px solid ${gold}44`,
            paddingBottom: '2px',
          }}
        >
          EXPLORAR COLECCIÓN →
        </Link>
      </div>
    </motion.div>
  );
}

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      style={{
        backgroundColor: charcoal,
        border: `1px solid #1e1e1e`,
        padding: '32px',
      }}
    >
      <p style={{ color: gold, fontSize: '28px', marginBottom: '16px', lineHeight: 1 }}>"</p>
      <p style={{ color: cream + 'cc', fontSize: '15px', lineHeight: 1.9, fontStyle: 'italic', marginBottom: '24px' }}>
        {t.text}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', border: `1px solid ${gold}44`, flexShrink: 0 }}>
          <img
            src={`https://picsum.photos/seed/${t.seed}/60/60`}
            alt={t.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div>
          <p style={{ color: cream, fontSize: '14px', fontWeight: 600, margin: 0 }}>{t.name}</p>
          <p style={{ color: gold + '88', fontSize: '11px', margin: '3px 0 0', letterSpacing: '0.1em' }}>{t.piece}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function JoyeriaHome() {
  const heroRef = useRef(null);
  const craftRef = useRef(null);
  const craftInView = useInView(craftRef, { once: true, margin: '-80px' });

  return (
    <div style={{ backgroundColor: bg, color: cream, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* Background subtle texture */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, #1a1600 0%, #000 70%)', zIndex: 0 }} />

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', zIndex: 1, maxWidth: '700px', width: '100%' }}
        >
          {/* Diamond ring image */}
          <div style={{ marginBottom: '48px' }}>
            <img
              src="https://picsum.photos/seed/diamond-ring/600/600"
              alt="Anillo de diamantes AURUM"
              style={{
                width: '280px',
                height: '280px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: `2px solid ${gold}`,
                margin: '0 auto',
                display: 'block',
              }}
            />
          </div>

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, letterSpacing: '0.8em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
            style={{
              color: gold,
              fontSize: 'clamp(32px, 6vw, 72px)',
              fontFamily: 'Georgia, serif',
              fontWeight: 400,
              letterSpacing: '0.5em',
              marginBottom: '20px',
            }}
          >
            AURUM
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ width: '80px', height: '1px', backgroundColor: gold, margin: '0 auto 24px' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ color: cream + 'cc', fontSize: '14px', letterSpacing: '0.2em', marginBottom: '12px', textTransform: 'uppercase' }}
          >
            Joyería de Alta Gama desde 1987
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ color: cream + '88', fontSize: 'clamp(15px, 2.5vw, 20px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '48px' }}
          >
            Cada pieza, una historia
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              href="/demos/joyeria/colecciones"
              style={{
                backgroundColor: gold,
                color: '#000',
                padding: '14px 36px',
                fontSize: '12px',
                letterSpacing: '0.2em',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              VER COLECCIONES
            </Link>
            <Link
              href="/demos/joyeria/bespoke"
              style={{
                backgroundColor: 'transparent',
                color: gold,
                padding: '14px 36px',
                fontSize: '12px',
                letterSpacing: '0.2em',
                fontWeight: 700,
                textDecoration: 'none',
                border: `1px solid ${gold}66`,
                display: 'inline-block',
              }}
            >
              CREAR MI JOYA
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ width: '1px', height: '50px', backgroundColor: gold + '66', margin: '0 auto' }}
          />
        </motion.div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
              NUESTRAS COLECCIONES
            </span>
            <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, margin: 0 }}>
              El Arte Hecho Joya
            </h2>
          </motion.div>

          <div className="r-grid-3">
            {collections.map((col, i) => (
              <CollectionCard key={col.id} col={col} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP */}
      <section className="r-section" style={{ backgroundColor: '#0a0900' }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '80px', alignItems: 'center' }}>
            <motion.div
              ref={craftRef}
              initial={{ opacity: 0, x: -50 }}
              animate={craftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <img
                src="https://picsum.photos/seed/jeweler-craft/800/600"
                alt="Artesanía joyera"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={craftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
                MAESTRÍA ARTESANAL
              </span>
              <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 400, marginBottom: '28px', lineHeight: 1.3 }}>
                Donde la Tradición<br />Encuentra la Perfección
              </h2>
              <p style={{ color: cream + 'aa', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
                En el corazón de nuestro taller de Salamanca, cada joya nace de las manos de maestros artesanos con décadas de experiencia. Un proceso meticuloso que comienza con el diseño a mano alzada y culmina en el brillo inconfundible de una pieza AURUM.
              </p>
              <p style={{ color: cream + 'aa', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
                Trabajamos exclusivamente con materiales de la más alta calidad: oro de 18 quilates reciclado y certificado, platino de origen ético y diamantes sin conflicto con certificación GIA y HRD. Cada piedra es examinada individualmente por nuestros gemólogos certificados antes de ser engastada.
              </p>
              <p style={{ color: cream + 'aa', fontSize: '15px', lineHeight: 1.9, marginBottom: '36px' }}>
                El proceso de creación de una joya AURUM puede tomar entre dos semanas y tres meses, dependiendo de la complejidad del diseño. No existe la prisa cuando se busca la perfección.
              </p>

              {/* Materials */}
              <div style={{ borderTop: `1px solid ${gold}22`, paddingTop: '28px' }}>
                <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.2em', marginBottom: '16px' }}>MATERIALES EXCLUSIVOS</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['Oro 18k Amarillo', 'Oro 18k Blanco', 'Platino 950', 'Diamantes Sin Conflicto', 'Zafiros Ceylon', 'Esmeraldas Colombianas'].map((m) => (
                    <span
                      key={m}
                      style={{
                        border: `1px solid ${gold}44`,
                        color: cream + 'bb',
                        fontSize: '11px',
                        padding: '6px 14px',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
              HISTORIAS REALES
            </span>
            <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, margin: 0 }}>
              Sus Palabras, Nuestra Mejor Joya
            </h2>
          </motion.div>

          <div className="r-grid-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} t={t} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* BESPOKE TEASER */}
      <section style={{ backgroundColor: '#0a0900', padding: '120px 24px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <div style={{ width: '40px', height: '1px', backgroundColor: gold, margin: '0 auto 32px' }} />
          <h2 style={{
            color: cream,
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '24px',
          }}>
            Tu joya.<br />
            <span style={{ color: gold }}>Tu historia.</span>
          </h2>
          <p style={{ color: cream + 'aa', fontSize: '16px', lineHeight: 1.9, marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
            El servicio Bespoke de AURUM nace para quienes buscan algo único en el mundo. Diseñamos y creamos a medida la joya que siempre soñaste, con los materiales más nobles y la maestría de nuestros artesanos.
          </p>
          <Link
            href="/demos/joyeria/bespoke"
            style={{
              backgroundColor: gold,
              color: '#000',
              padding: '16px 48px',
              fontSize: '12px',
              letterSpacing: '0.25em',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            CREAR MI JOYA
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ backgroundColor: '#050500', borderTop: `1px solid ${gold}22` }}>
        <div className="r-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', padding: '64px 0 48px' }}>
            <div>
              <h3 style={{ color: gold, fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: 400, letterSpacing: '0.3em', marginBottom: '20px' }}>
                AURUM
              </h3>
              <p style={{ color: cream + '66', fontSize: '13px', lineHeight: 1.8 }}>
                Alta joyería artesanal desde 1987.<br />
                Madrid · España
              </p>
            </div>
            <div>
              <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.2em', marginBottom: '16px' }}>VISÍTANOS</p>
              <p style={{ color: cream + '88', fontSize: '13px', lineHeight: 1.9 }}>
                Calle Serrano, 42<br />
                Barrio de Salamanca<br />
                28001 Madrid<br />
                <br />
                Lunes a Sábado: 10h – 20h
              </p>
            </div>
            <div>
              <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.2em', marginBottom: '16px' }}>CONTACTO</p>
              <p style={{ color: cream + '88', fontSize: '13px', lineHeight: 1.9 }}>
                +34 91 XXX XX XX<br />
                info@aurum-joyeria.es<br />
                <br />
                <span style={{ fontSize: '11px', color: cream + '55' }}>
                  Visita con cita previa recomendada
                </span>
              </p>
            </div>
            <div>
              <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.2em', marginBottom: '16px' }}>COLECCIONES</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['La Eternal', 'La Moderna', 'La Nupcial', 'Bespoke', 'Sobre Nosotros'].map((l) => (
                  <Link key={l} href="/demos/joyeria/colecciones" style={{ color: cream + '66', fontSize: '13px', textDecoration: 'none' }}>
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${gold}11`, paddingTop: '24px', paddingBottom: '32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: cream + '33', fontSize: '11px', letterSpacing: '0.1em' }}>
              © 2024 AURUM Joyería. Todos los derechos reservados.
            </p>
            <p style={{ color: cream + '33', fontSize: '11px' }}>
              Miembro de la Asociación Española de Joyeros · Certificación GIA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

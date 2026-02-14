'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const gold = '#d4a017';
const cream = '#fff5e6';
const darkBrown = '#0d0500';
const bg = '#1a0a00';

const milestones = [
  {
    year: '1998',
    title: 'El inicio de un sueño',
    desc: 'Carlos de Arcos abre las puertas de su primer restaurante en un pequeño local de la Calle del Prado de Madrid. Con apenas 30 cubiertos y una cocina diminuta, su propuesta de cocina española de raíz con influencias viajeras llama la atención desde el primer día. Las colas para entrar empiezan a formarse a los tres meses de la apertura.',
    seed: 'history1',
  },
  {
    year: '2010',
    title: 'Primera Estrella Michelin',
    desc: 'Tras doce años de trabajo incansable y una primera gran reforma del local, Arcos recibe su primera estrella Michelin. El galardón reconoce la coherencia, la evolución y la personalidad única de la propuesta de Carlos. Ese año, la lista de espera alcanza las seis semanas. Carlos declara: "La estrella es el comienzo, no el destino."',
    seed: 'history2',
  },
  {
    year: '2020',
    title: 'Renovación y renacimiento',
    desc: 'Aprovechando los meses de cierre forzoso, Arcos acomete una renovación total del espacio con el diseñador Álvaro de la Rosa. El resultado es un comedor más íntimo, más sofisticado, con materiales nobles y una nueva terraza interior. La reapertura supone un hito: en el primer mes se agotan todas las reservas para los siguientes tres meses.',
    seed: 'history3',
  },
];

const values = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9z" />
        <path d="M12 8v4l2 2" />
      </svg>
    ),
    title: 'PRODUCTO',
    desc: 'Trabajamos exclusivamente con proveedores locales de confianza. El producto de temporada, tratado con respeto, es el protagonista absoluto de cada plato.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
        <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
        <path d="M8 15a7 7 0 1 0 8-11.95" />
        <path d="M8 15l-2.5 2.5" />
      </svg>
    ),
    title: 'TÉCNICA',
    desc: 'Dominamos las técnicas más avanzadas de la cocina contemporánea, pero las ponemos al servicio de la emoción, nunca de la exhibición. La técnica es el medio, el sabor es el fin.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'PASIÓN',
    desc: 'Sin pasión no hay cocina digna. Nuestro equipo de 18 personas comparte una vocación genuina por hacer felices a quienes se sientan en nuestra mesa. Eso es lo que nos mueve cada día.',
  },
];

function TimelineMilestone({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 40px minmax(0,1fr)',
        gap: '0',
        alignItems: 'start',
        marginBottom: 'clamp(40px,6vw,80px)',
      }}
    >
      {/* Left side */}
      <div style={{ padding: isLeft ? '0 clamp(16px,3vw,40px) 0 0' : '0', textAlign: isLeft ? 'right' : 'left' }}>
        {isLeft && (
          <>
            <span style={{ display: 'block', color: gold, fontSize: 'clamp(48px, 7vw, 80px)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: '12px' }}>
              {milestone.year}
            </span>
            <h3 style={{ color: cream, fontSize: '22px', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, margin: '0 0 14px' }}>
              {milestone.title}
            </h3>
            <p style={{ color: '#9a7a5a', fontSize: '15px', lineHeight: 1.8, margin: 0 }}>{milestone.desc}</p>
          </>
        )}
        {!isLeft && (
          <div style={{ overflow: 'hidden' }}>
            <img
              src={`https://picsum.photos/seed/${milestone.seed}/800/500`}
              alt={milestone.title}
              style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}
      </div>
      {/* Center line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
        <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: gold, flexShrink: 0 }} />
        <div style={{ width: '1px', flex: 1, backgroundColor: '#2a1800', marginTop: '8px' }} />
      </div>
      {/* Right side */}
      <div style={{ padding: !isLeft ? '0 0 0 clamp(16px,3vw,40px)' : '0' }}>
        {!isLeft && (
          <>
            <span style={{ display: 'block', color: gold, fontSize: 'clamp(48px, 7vw, 80px)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: '12px' }}>
              {milestone.year}
            </span>
            <h3 style={{ color: cream, fontSize: '22px', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, margin: '0 0 14px' }}>
              {milestone.title}
            </h3>
            <p style={{ color: '#9a7a5a', fontSize: '15px', lineHeight: 1.8, margin: 0 }}>{milestone.desc}</p>
          </>
        )}
        {isLeft && (
          <div style={{ overflow: 'hidden' }}>
            <img
              src={`https://picsum.photos/seed/${milestone.seed}/800/500`}
              alt={milestone.title}
              style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function HistoriaPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' });

  const quoteRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: quoteRef, offset: ['start end', 'end start'] });
  const quoteY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div style={{ backgroundColor: bg, color: cream, minHeight: '100vh' }}>

      {/* HEADER */}
      <section ref={headerRef} className="r-section-sm" style={{ textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 600, marginBottom: '16px' }}
        >
          — DESDE 1998
        </motion.p>
        <div style={{ overflow: 'hidden', marginBottom: '24px' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={headerInView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(40px, 7vw, 90px)',
              fontFamily: 'Georgia, serif', fontStyle: 'italic',
              fontWeight: 400, margin: 0, color: cream, lineHeight: 1, letterSpacing: '-0.01em'
            }}
          >
            Una historia de<br />pasión
          </motion.h1>
        </div>
        <div style={{ width: '60px', height: '1px', backgroundColor: gold, margin: '0 auto 24px' }} />
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ color: '#9a7a5a', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}
        >
          Más de veinticinco años buscando la excelencia en cada plato, construyendo relaciones con productores, formando a cocineros y, sobre todo, emocionando a quienes se sientan en nuestra mesa.
        </motion.p>
      </section>

      {/* TIMELINE */}
      <section className="r-section-sm" style={{ paddingBottom: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {milestones.map((m, i) => (
          <TimelineMilestone key={m.year} milestone={m} index={i} />
        ))}
      </section>

      {/* QUOTE / FULL-WIDTH BG */}
      <section
        ref={quoteRef}
        className="r-section" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}
      >
        <motion.img
          src="https://picsum.photos/seed/restaurant-quote/1400/600"
          alt="Background"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '116%',
            objectFit: 'cover', filter: 'brightness(0.25)',
            y: quoteY,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1 }}
          >
            <div style={{ fontSize: '60px', color: gold, lineHeight: 0.7, marginBottom: '24px', fontFamily: 'Georgia, serif' }}>"</div>
            <blockquote style={{
              fontSize: 'clamp(20px, 3vw, 36px)', fontFamily: 'Georgia, serif',
              fontStyle: 'italic', fontWeight: 400, color: cream,
              maxWidth: '800px', margin: '0 auto 24px', lineHeight: 1.5
            }}>
              Cocinar es el acto más generoso que existe. Transformas algo de la tierra en alegría para otra persona.
            </blockquote>
            <p style={{ color: gold, fontSize: '13px', letterSpacing: '0.3em', fontWeight: 600 }}>
              — CARLOS DE ARCOS
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section ref={valuesRef} className="r-section" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 600, marginBottom: '16px' }}>
            — FILOSOFÍA
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontFamily: 'Georgia, serif', fontStyle: 'italic',
            fontWeight: 400, margin: 0, color: cream
          }}>
            Lo que nos define
          </h2>
        </motion.div>
        <div className="r-grid-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{
                padding: '48px 36px',
                border: `1px solid #2a1800`,
                textAlign: 'center'
              }}
            >
              <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>{v.icon}</div>
              <div style={{ width: '30px', height: '1px', backgroundColor: gold, margin: '0 auto 20px' }} />
              <h3 style={{ color: cream, fontSize: '14px', letterSpacing: '0.25em', fontWeight: 700, marginBottom: '16px' }}>
                {v.title}
              </h3>
              <p style={{ color: '#9a7a5a', fontSize: '15px', lineHeight: 1.8, margin: 0 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="r-section-sm" style={{
          textAlign: 'center',
          borderTop: `1px solid #2a1800`, backgroundColor: darkBrown
        }}
      >
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 56px)', fontFamily: 'Georgia, serif',
          fontStyle: 'italic', fontWeight: 400, margin: '0 0 32px', color: cream
        }}>
          Venga a vivir la historia
        </h2>
        <a href="/demos/restaurante/reservar">
          <button style={{
            backgroundColor: gold, color: darkBrown,
            border: 'none', padding: '16px 52px',
            fontWeight: 700, fontSize: '13px', letterSpacing: '0.2em', cursor: 'pointer'
          }}>
            RESERVAR MESA
          </button>
        </a>
      </motion.section>
    </div>
  );
}

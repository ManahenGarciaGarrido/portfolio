'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const values = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFE600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'DISEÑO',
    desc: 'Cada prenda nace de una obsesión por la forma perfecta. Nuestro equipo creativo trabaja con los mejores materiales para dar vida a piezas que trascienden las temporadas.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFE600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'SOSTENIBILIDAD',
    desc: 'Producimos de forma responsable. El 80% de nuestros materiales son de origen sostenible y trabajamos con talleres certificados que garantizan condiciones justas.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFE600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: 'CALIDAD',
    desc: 'Cada pieza pasa por un riguroso control de calidad. No sacrificamos la excelencia por la velocidad. Preferimos hacer menos, pero hacerlo extraordinariamente bien.',
  },
];

const team = [
  { name: 'Sofía Vidal', role: 'Directora Creativa', seed: 'team1' },
  { name: 'Marco Russo', role: 'Director de Diseño', seed: 'team2' },
  { name: 'Aida Mori', role: 'Directora de Sostenibilidad', seed: 'team3' },
];

function FadeSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function NosotrosPage() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }}>

      {/* HERO IMAGE */}
      <section style={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/noir-studio/1200/600"
          alt="Estudio NOIR"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 40px'
        }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '16px' }}
          >
            — FUNDADA EN 2012
          </motion.p>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{ fontSize: 'clamp(48px, 8vw, 100px)', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}
            >
              NUESTRA HISTORIA
            </motion.h1>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section style={{ padding: '100px 60px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
          <FadeSection>
            <div style={{ position: 'sticky', top: '100px' }}>
              <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '16px' }}>
                — QUIÉNES SOMOS
              </p>
              <div style={{ width: '60px', height: '3px', backgroundColor: '#FFE600', marginBottom: '32px' }} />
              <div style={{ fontWeight: 900, fontSize: '80px', lineHeight: 1, color: '#1a1a1a', letterSpacing: '-0.05em' }}>
                NOIR
              </div>
            </div>
          </FadeSection>
          <div>
            <FadeSection delay={0.1}>
              <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#ccc', marginBottom: '32px' }}>
                NOIR nació en 2012 en el corazón de Madrid con una misión clara: crear moda que desafíe las convenciones. Lo que comenzó como un pequeño estudio con tres personas y una mesa de trabajo se ha convertido en una de las marcas más influyentes del panorama fashion independiente español.
              </p>
            </FadeSection>
            <FadeSection delay={0.15}>
              <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#ccc', marginBottom: '32px' }}>
                Nuestra filosofía es simple pero radical: preferimos hacer menos piezas, pero que cada una sea perfecta. Rechazamos el modelo de fast fashion. Cada colección se desarrolla durante meses, cuidando cada detalle, cada costura, cada elección de material. El resultado son prendas que no solo visten, sino que transforman a quien las lleva.
              </p>
            </FadeSection>
            <FadeSection delay={0.2}>
              <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#ccc' }}>
                Hoy, más de 50.000 clientes en 30 países confían en NOIR para construir un guardarropa consciente, atemporal y poderoso. Seguimos siendo un estudio independiente, alejados de grandes grupos corporativos, libres para tomar decisiones que priorizan la calidad y los valores por encima del beneficio inmediato.
              </p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '80px 60px', borderTop: '1px solid #1a1a1a', backgroundColor: '#050505' }}>
        <FadeSection>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '12px' }}>
              — LO QUE NOS MUEVE
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 60px)', fontWeight: 900, margin: 0, lineHeight: 1 }}>
              NUESTROS VALORES
            </h2>
          </div>
        </FadeSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', maxWidth: '1100px', margin: '0 auto' }}>
          {values.map((v, i) => (
            <FadeSection key={v.title} delay={i * 0.12}>
              <div style={{
                padding: '48px 36px',
                border: '1px solid #1a1a1a',
                transition: 'border-color 0.3s',
              }}>
                <div style={{ marginBottom: '24px' }}>{v.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '0.15em', marginBottom: '16px', color: '#fff' }}>
                  {v.title}
                </h3>
                <p style={{ color: '#888', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '100px 60px', maxWidth: '1100px', margin: '0 auto' }}>
        <FadeSection>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '12px' }}>
              — LAS PERSONAS DETRÁS DE NOIR
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 60px)', fontWeight: 900, margin: 0 }}>NUESTRO EQUIPO</h2>
          </div>
        </FadeSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
          {team.map((member, i) => (
            <FadeSection key={member.name} delay={i * 0.1}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '180px', height: '180px', borderRadius: '50%',
                  overflow: 'hidden', margin: '0 auto 24px',
                  border: '3px solid #FFE600'
                }}>
                  <img
                    src={`https://picsum.photos/seed/${member.seed}/300/300`}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 6px', letterSpacing: '0.05em' }}>
                  {member.name}
                </h3>
                <p style={{ color: '#FFE600', fontSize: '12px', letterSpacing: '0.2em', fontWeight: 700, margin: 0 }}>
                  {member.role.toUpperCase()}
                </p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* TALLERES */}
      <section style={{ padding: '80px 60px', borderTop: '1px solid #1a1a1a', backgroundColor: '#050505' }}>
        <FadeSection>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '12px' }}>
              — PRODUCCIÓN RESPONSABLE
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 60px)', fontWeight: 900, margin: '0 0 20px' }}>NUESTROS TALLERES</h2>
            <p style={{ color: '#888', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              Trabajamos exclusivamente con talleres de producción sostenible en España y Portugal, donde cada artesano tiene condiciones de trabajo dignas y bien remuneradas.
            </p>
          </div>
        </FadeSection>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
          <FadeSection delay={0.1}>
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10' }}>
              <img
                src="https://picsum.photos/seed/workshop1/700/440"
                alt="Taller 1"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: '20px', left: '20px',
                backgroundColor: 'rgba(0,0,0,0.7)', padding: '12px 20px'
              }}>
                <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.2em', fontWeight: 700, margin: 0 }}>
                  TALLER BARCELONA — DESDE 2014
                </p>
              </div>
            </div>
          </FadeSection>
          <FadeSection delay={0.15}>
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10' }}>
              <img
                src="https://picsum.photos/seed/workshop2/700/440"
                alt="Taller 2"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: '20px', left: '20px',
                backgroundColor: 'rgba(0,0,0,0.7)', padding: '12px 20px'
              }}>
                <p style={{ color: '#FFE600', fontSize: '11px', letterSpacing: '0.2em', fontWeight: 700, margin: 0 }}>
                  TALLER PORTO — DESDE 2018
                </p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* FOOTER CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        style={{
          padding: '100px 60px', textAlign: 'center',
          borderTop: '1px solid #1a1a1a'
        }}
      >
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 900, margin: '0 0 24px', lineHeight: 1.1 }}>
          ÚNETE AL<br /><span style={{ color: '#FFE600' }}>MOVIMIENTO</span>
        </h2>
        <p style={{ color: '#888', fontSize: '16px', maxWidth: '500px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          Moda que tiene sentido. Estética que no compromete valores. Descubre por qué más de 50.000 personas eligen NOIR.
        </p>
        <a href="/demos/tienda-moda/productos">
          <button style={{
            backgroundColor: '#FFE600', color: '#000', border: 'none',
            padding: '18px 52px', fontWeight: 900, fontSize: '13px',
            letterSpacing: '0.2em', cursor: 'pointer'
          }}>
            EXPLORAR COLECCIÓN
          </button>
        </a>
      </motion.section>
    </div>
  );
}

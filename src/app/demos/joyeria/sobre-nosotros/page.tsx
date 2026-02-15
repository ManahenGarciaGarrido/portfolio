'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#000000';
const gold = '#d4af37';
const cream = '#f0e8d0';
const charcoal = '#111111';

const milestones = [
  { year: '1987', event: 'Fundación', desc: 'Antonio Reyes abre su primer taller en el Barrio de Salamanca, Madrid, con la filosofía de crear joyas únicas para personas únicas.' },
  { year: '1994', event: 'Primera Gran Joya', desc: 'AURUM es seleccionada para crear el collar de bodas de la Condesa de Villaverde. El mundo del lujo empieza a conocer la firma madrileña.' },
  { year: '2001', event: 'Apertura de Boutique', desc: 'Inauguración de la boutique en Calle Serrano, referente del lujo en Madrid. El espacio fue diseñado por el arquitecto Rafael Sánchez con materiales nobles.' },
  { year: '2008', event: 'Reconocimiento Internacional', desc: 'AURUM recibe el Premio a la Excelencia de la Federación Europea de Joyeros. La firma alcanza una dimensión internacional con clientes en toda Europa.' },
  { year: '2015', event: 'Segunda Generación', desc: 'Claudia Reyes, hija del fundador y gemóloga certificada por el GIA en Carlsbad, California, asume la dirección creativa de la firma.' },
  { year: '2024', event: 'Maestría Renovada', desc: 'AURUM celebra 37 años de creación artesanal. Más de 3.000 piezas únicas creadas. Una historia viva de excelencia joyera española.' },
];

const certifications = [
  { name: 'GIA Graduate Gemologist', desc: 'Certificación de la institución gemológica más prestigiosa del mundo' },
  { name: 'Federación Española de Joyeros', desc: 'Miembro activo desde 1989' },
  { name: 'Responsible Jewellery Council', desc: 'Compromiso con la minería ética y el comercio responsable' },
  { name: 'Kimberley Process', desc: 'Garantía de diamantes libres de conflicto' },
  { name: 'ISO 9001:2015', desc: 'Certificación de calidad en procesos artesanales' },
];

export default function SobreNosotrosPage() {
  const jewelRef = useRef(null);
  const jewelInView = useInView(jewelRef, { once: true, margin: '-80px' });

  return (
    <div style={{ backgroundColor: bg, color: cream, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>

      {/* HEADER */}
      <section style={{ padding: '100px 24px 80px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', display: 'block', marginBottom: '20px' }}>
            NUESTRA HISTORIA
          </span>
          <h1 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, marginBottom: '24px' }}>
            Treinta y Siete Años<br />de Maestría
          </h1>
          <div style={{ width: '60px', height: '1px', backgroundColor: gold, margin: '0 auto 28px' }} />
          <p style={{ color: cream + 'aa', fontSize: '17px', lineHeight: 1.9, maxWidth: '580px', margin: '0 auto' }}>
            Desde 1987, AURUM ha sido la firma de referencia para quienes buscan joyas que narren las historias más importantes de sus vidas. Tres décadas y media de dedicación absoluta a la más alta joyería artesanal española.
          </p>
        </motion.div>
      </section>

      {/* WORKSHOP IMAGE */}
      <section style={{ margin: '0 0 80px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{ maxHeight: '500px', overflow: 'hidden' }}
        >
          <img
            src="https://picsum.photos/seed/jewelry-workshop/800/500"
            alt="Taller AURUM"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>
        <p style={{ color: gold + '77', fontSize: '12px', textAlign: 'center', padding: '14px', letterSpacing: '0.1em' }}>
          Nuestro taller en el Barrio de Salamanca, Madrid
        </p>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="r-section" style={{ backgroundColor: charcoal }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '72px' }}
          >
            <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
              CRONOLOGÍA
            </span>
            <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 400, margin: 0 }}>
              Los Momentos que nos Definen
            </h2>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', backgroundColor: gold + '22', transform: 'translateX(-50%)' }} />

            {milestones.map((m, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-50px' });
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  ref={ref}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-end' : 'flex-start',
                    paddingRight: isLeft ? 'calc(50% + 40px)' : '0',
                    paddingLeft: isLeft ? '0' : 'calc(50% + 40px)',
                    marginBottom: '60px',
                    position: 'relative',
                  }}
                >
                  {/* Dot on timeline */}
                  <div style={{
                    position: 'absolute', left: '50%', top: '20px',
                    width: '12px', height: '12px', backgroundColor: gold,
                    borderRadius: '50%', transform: 'translateX(-50%)',
                  }} />

                  <div style={{ backgroundColor: bg, border: `1px solid ${gold}22`, padding: '24px 28px', maxWidth: '380px' }}>
                    <p style={{ color: gold, fontSize: '28px', fontFamily: 'Georgia, serif', fontWeight: 400, margin: '0 0 4px' }}>{m.year}</p>
                    <h3 style={{ color: cream, fontSize: '18px', fontFamily: 'Georgia, serif', fontWeight: 400, margin: '0 0 12px' }}>{m.event}</h3>
                    <p style={{ color: cream + '88', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MASTER JEWELER */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '72px', alignItems: 'center' }}>
            <motion.div
              ref={jewelRef}
              initial={{ opacity: 0, x: -40 }}
              animate={jewelInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              style={{ position: 'relative' }}
            >
              <img
                src="https://picsum.photos/seed/jeweler/400/500"
                alt="Claudia Reyes, Directora Creativa"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: '-1px', left: '-1px', right: '-1px',
                height: '3px', backgroundColor: gold,
              }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={jewelInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
                DIRECTORA CREATIVA
              </span>
              <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, marginBottom: '8px' }}>
                Claudia Reyes
              </h2>
              <p style={{ color: gold + '88', fontSize: '14px', letterSpacing: '0.1em', marginBottom: '28px' }}>
                Graduate Gemologist (GIA) · Segunda Generación
              </p>
              <p style={{ color: cream + '99', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
                Claudia creció entre bocetos de joyas y el olor del taller de su padre. Tras licenciarse en Bellas Artes por la Universidad Complutense, se especializó en Gemología en el GIA de Carlsbad, California, donde obtuvo el título de Graduate Gemologist con máximas calificaciones.
              </p>
              <p style={{ color: cream + '99', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
                Trabajó durante cuatro años en Cartier París y dos en Harry Winston Nueva York antes de regresar a Madrid en 2015 para asumir la dirección creativa de AURUM. Bajo su liderazgo, la firma ha redefinido el concepto de alta joyería española contemporánea sin renunciar a sus raíces artesanales.
              </p>
              <p style={{ color: cream + '99', fontSize: '15px', lineHeight: 1.9, marginBottom: '36px' }}>
                "Cada joya que creamos lleva una historia. Mi trabajo es asegurarme de que esa historia sea contada de la manera más bella posible."
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['GIA Graduate Gemologist', 'Bellas Artes UCM', 'Ex-Cartier Paris', 'Ex-Harry Winston NY'].map((badge) => (
                  <span
                    key={badge}
                    style={{
                      border: `1px solid ${gold}33`, color: cream + '88',
                      fontSize: '11px', padding: '6px 14px', letterSpacing: '0.05em',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="r-section" style={{ backgroundColor: charcoal }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
              GARANTÍA DE CALIDAD
            </span>
            <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, margin: 0 }}>
              Certificaciones y Membresías
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px' }}>
            {certifications.map((cert, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-30px' });
              return (
                <motion.div
                  key={cert.name}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ backgroundColor: bg, padding: '32px', borderLeft: `2px solid ${gold}` }}
                >
                  <h3 style={{ color: cream, fontSize: '16px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '10px' }}>
                    {cert.name}
                  </h3>
                  <p style={{ color: cream + '77', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>
                    {cert.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORE LOCATION */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '60px', alignItems: 'start' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
                VISÍTANOS
              </span>
              <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 400, marginBottom: '28px' }}>
                Nuestra Boutique en<br />el Barrio de Salamanca
              </h2>
              <p style={{ color: cream + '99', fontSize: '15px', lineHeight: 1.9, marginBottom: '28px' }}>
                En el corazón del Barrio de Salamanca, el enclave más exclusivo de Madrid, nuestra boutique es un espacio diseñado para la experiencia. Materiales nobles, luz cuidadosamente diseñada y un equipo dedicado exclusivamente a vosotros.
              </p>
              <p style={{ color: cream + '99', fontSize: '15px', lineHeight: 1.9, marginBottom: '36px' }}>
                Recomendamos concertar cita previa para poder ofreceros la atención personalizada que merecéis. Cada visita es privada. Cada consulta, confidencial.
              </p>
              <div style={{ backgroundColor: charcoal, padding: '28px', borderLeft: `2px solid ${gold}` }}>
                <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.2em', marginBottom: '16px' }}>DIRECCIÓN Y HORARIO</p>
                <p style={{ color: cream + '88', fontSize: '14px', lineHeight: 2, margin: 0 }}>
                  Calle Serrano, 42<br />
                  28001 Madrid — Barrio de Salamanca<br />
                  <br />
                  Lunes a Viernes: 10:00 – 20:00h<br />
                  Sábados: 10:00 – 14:00h y 16:00 – 20:00h<br />
                  Domingos: Cerrado<br />
                  <br />
                  <strong style={{ color: cream }}>Visita con cita previa recomendada</strong>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
                <img
                  src="https://picsum.photos/seed/jewelry-store/700/500"
                  alt="Boutique AURUM"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <Link
                href="/demos/joyeria/contacto"
                style={{
                  display: 'block', textAlign: 'center', backgroundColor: gold,
                  color: '#000', padding: '16px', fontSize: '12px',
                  letterSpacing: '0.2em', fontWeight: 700, textDecoration: 'none',
                }}
              >
                RESERVAR CITA
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

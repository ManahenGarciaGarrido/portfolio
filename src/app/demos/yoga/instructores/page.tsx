'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#f7f0e8';
const accent = '#c05c1a';
const textColor = '#3d2b1f';

const instructors = [
  {
    name: 'Sofía Méndez Alcántara',
    role: 'Directora y Fundadora',
    years: '18 años de práctica',
    seed: 'instructor1',
    styles: ['Hatha Yoga', 'Yin Yoga', 'Yoga Nidra'],
    certs: ['RYT 500 — Yoga Alliance', 'Yin Yoga con Paul Grilley', 'Meditación Vipassana — 10 días silencio'],
    philosophy: '"El yoga no es sobre ser flexible de cuerpo, sino flexible de mente. Cada vez que pisas el tapete, te encuentras con quien eres hoy."',
    bio: 'Sofía descubrió el yoga en una época de crisis personal y eso transformó completamente su vida. Formada en India y España, fundó ZEN FLOW en 2009 con la misión de acercar el yoga auténtico a todos, sin filtros de perfección ni elitismo.',
  },
  {
    name: 'Elena Ruiz Palomino',
    role: 'Instructora Senior',
    years: '12 años de práctica',
    seed: 'instructor2',
    styles: ['Vinyasa Flow', 'Ashtanga', 'Power Yoga'],
    certs: ['RYT 200 — Ashtanga Institute Mysore', 'Vinyasa Teacher Training — Barcelona', 'Anatomía para Yoga — Universidad de Sevilla'],
    philosophy: '"El movimiento es la meditación más antigua del mundo. Cuando fluyes, la mente se calla."',
    bio: 'Elena llegó al yoga desde el mundo de la danza. Su sensibilidad artística y su rigurosa formación en Ashtanga se combinan en clases que son tan exigentes como transformadoras. Especialista en ayudar a alumnos con lesiones previas.',
  },
  {
    name: 'Marta Vidal Sanz',
    role: 'Instructora de Meditación',
    years: '10 años de práctica',
    seed: 'instructor3',
    styles: ['Meditación Mindfulness', 'Pranayama', 'Yoga Restaurativo'],
    certs: ['Instructora MBSR — Mindfulness Based Stress Reduction', 'Pranayama Avanzado — Iyengar Institute', 'Psicología Positiva — UNED'],
    philosophy: '"La meditación no silencia el ruido del mundo, te enseña a encontrar el silencio dentro de ti."',
    bio: 'Marta es psicóloga de formación y meditadora de vocación. Su enfoque integra la psicología moderna con las tradiciones contemplativas orientales. Sus clases de meditación tienen lista de espera desde hace tres años.',
  },
  {
    name: 'Carmen Torres Espejo',
    role: 'Instructora de Yoga en Pareja y Prenatal',
    years: '8 años de práctica',
    seed: 'instructor4',
    styles: ['Yoga Prenatal', 'Yoga en Pareja', 'Hatha suave'],
    certs: ['Yoga Prenatal — Instituto Español de Yoga', 'Partner Yoga Teacher — AcroYoga International', 'RYT 200 — Yoga Alliance'],
    philosophy: '"El yoga une. Une cuerpo y mente, une personas, une generaciones."',
    bio: 'Carmen comenzó a practicar yoga durante su primer embarazo y se enamoró de la modalidad prenatal. Después exploró el partner yoga y descubrió el poder del yoga para crear vínculos genuinos entre las personas.',
  },
];

const guests = [
  { name: 'Ramón Soto', from: 'Barcelona', specialty: 'Yoga Aéreo' },
  { name: 'Andrea Llorente', from: 'Madrid', specialty: 'Kundalini Yoga' },
  { name: 'Prem Das (James Wilson)', from: 'Rishikesh, India', specialty: 'Yoga Clásico Vedántico' },
];

export default function YogaInstructores() {
  const headerRef = useRef(null);
  const guestsRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const guestsInView = useInView(guestsRef, { once: true, margin: '-60px' });

  return (
    <div style={{ backgroundColor: bg, color: textColor }}>

      {/* HEADER */}
      <section
        ref={headerRef}
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 100px) 60px', backgroundColor: '#ede4d8' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '16px' }}
        >
          ZEN FLOW · INSTRUCTORES
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 20px', lineHeight: 1.1 }}
        >
          Las personas que<br /><span style={{ color: accent }}>te guiarán</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ color: '#7a5a48', fontSize: '17px', maxWidth: '600px', lineHeight: 1.7 }}
        >
          Cada instructor de ZEN FLOW comparte una misma filosofía: el yoga es para todos, en cualquier cuerpo, en cualquier momento de la vida.
        </motion.p>
      </section>

      {/* INSTRUCTORS */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {instructors.map((ins, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: '-60px' });
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={ins.name}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9 }}
                className="r-two-col"
                style={{ gap: '50px', flexDirection: isEven ? 'row' : 'row-reverse' } as any}
              >
                {/* Photo */}
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <div style={{ aspectRatio: '4/5', overflow: 'hidden', maxWidth: '400px' }}>
                    <img
                      src={`https://picsum.photos/seed/${ins.seed}/400/500`}
                      alt={ins.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ position: 'absolute', bottom: '-16px', [isEven ? 'right' : 'left']: '-16px', backgroundColor: accent, padding: '14px 22px' }}>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: '12px', margin: 0, letterSpacing: '0.05em' }}>{ins.years}</p>
                  </div>
                </div>
                {/* Text */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '20px' }}>
                  <h2 style={{ color: textColor, fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, margin: '0 0 4px' }}>{ins.name}</h2>
                  <p style={{ color: accent, fontWeight: 700, fontSize: '14px', letterSpacing: '0.05em', margin: '0 0 20px' }}>{ins.role}</p>
                  <p style={{ color: '#7a5a48', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px', fontStyle: 'italic', borderLeft: `3px solid ${accent}`, paddingLeft: '16px' }}>
                    {ins.philosophy}
                  </p>
                  <p style={{ color: '#7a5a48', fontSize: '15px', lineHeight: 1.7, margin: '0 0 24px' }}>{ins.bio}</p>
                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ color: '#9a7a68', fontSize: '11px', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '10px' }}>ESTILOS QUE IMPARTE:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {ins.styles.map(s => (
                        <span key={s} style={{ backgroundColor: `${accent}22`, color: accent, fontSize: '12px', fontWeight: 700, padding: '5px 14px', borderRadius: '20px' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ color: '#9a7a68', fontSize: '11px', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '10px' }}>CERTIFICACIONES:</p>
                    {ins.certs.map(c => (
                      <div key={c} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
                        <span style={{ color: accent, marginTop: '2px' }}>✓</span>
                        <span style={{ color: '#7a5a48', fontSize: '13px', lineHeight: 1.6 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* GUEST INSTRUCTORS */}
      <section ref={guestsRef} className="r-section" style={{ backgroundColor: '#ede4d8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={guestsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>VISITAS ESPECIALES</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>Instructores invitados</h2>
          </motion.div>
          <div className="r-grid-3">
            {guests.map((g, i) => (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, y: 30 }}
                animate={guestsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{ backgroundColor: bg, padding: '28px', textAlign: 'center', border: `1px solid ${accent}22` }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: `${accent}22`, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '32px' }}>🌿</span>
                </div>
                <h3 style={{ color: textColor, fontWeight: 700, fontSize: '16px', margin: '0 0 4px' }}>{g.name}</h3>
                <p style={{ color: '#9a7a68', fontSize: '12px', margin: '0 0 8px' }}>{g.from}</p>
                <span style={{ backgroundColor: `${accent}22`, color: accent, fontSize: '12px', fontWeight: 700, padding: '4px 14px' }}>{g.specialty}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={guestsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            style={{ textAlign: 'center', color: '#9a7a68', fontSize: '14px', marginTop: '32px', fontStyle: 'italic' }}
          >
            Los instructores invitados ofrecen talleres especiales durante el año. Suscríbete a nuestra newsletter para ser la primera en enterarte.
          </motion.p>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/demos/yoga/contacto">
              <button style={{ backgroundColor: accent, color: '#fff', border: 'none', padding: '14px 40px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                APUNTARSE A LA NEWSLETTER
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

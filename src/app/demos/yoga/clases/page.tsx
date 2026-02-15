'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#f7f0e8';
const accent = '#c05c1a';
const textColor = '#3d2b1f';

const classes = [
  {
    name: 'Hatha Yoga',
    seed: 'yoga-pose1',
    level: 'Principiante',
    duration: '60 min',
    desc: 'El Hatha Yoga es la puerta de entrada al mundo del yoga. Con un ritmo pausado y consciente, esta práctica trabaja la alineación postural y la conexión entre cuerpo, mente y respiración.',
    benefits: ['Mejora la flexibilidad y movilidad articular', 'Fortalece la musculatura profunda', 'Reduce el estrés y la ansiedad', 'Mejora la postura y alivia dolores de espalda', 'Ideal para comenzar desde cero'],
  },
  {
    name: 'Vinyasa Flow',
    seed: 'yoga-pose2',
    level: 'Intermedio',
    duration: '75 min',
    desc: 'El Vinyasa conecta cada movimiento con la respiración en una secuencia continua y fluida. Es una práctica más dinámica que el Hatha, ideal para quienes buscan activar el cuerpo y fortalecer desde el movimiento.',
    benefits: ['Tonificación muscular global', 'Mejora cardiovascular', 'Aumento de la energía y vitalidad', 'Desarrolla la concentración', 'Trabaja equilibrio y coordinación'],
  },
  {
    name: 'Yin Yoga',
    seed: 'yoga-pose3',
    level: 'Todos los niveles',
    duration: '75 min',
    desc: 'En el Yin Yoga mantenemos las posturas entre 3 y 5 minutos. Esta lentitud permite trabajar en profundidad el tejido conectivo, las fascias y las articulaciones. Una práctica meditativa y restaurativa.',
    benefits: ['Libera tensiones profundas', 'Estimula la circulación energética', 'Mejora la flexibilidad a largo plazo', 'Profundamente relajante', 'Equilibra el sistema nervioso'],
  },
  {
    name: 'Yoga Restaurativo',
    seed: 'yoga-pose4',
    level: 'Todos los niveles',
    duration: '60 min',
    desc: 'Con el apoyo de props (bloques, mantas, bolsters), el Yoga Restaurativo invita al cuerpo a soltar completamente. Sin esfuerzo, sin tensión: solo descanso activo y regeneración profunda.',
    benefits: ['Activa el sistema nervioso parasimpático', 'Perfecto para el estrés crónico', 'Ayuda en la recuperación de lesiones', 'Mejora la calidad del sueño', 'Profundamente terapéutico'],
  },
  {
    name: 'Yoga Ashtanga',
    seed: 'yoga-pose5',
    level: 'Avanzado',
    duration: '90 min',
    desc: 'El Ashtanga es un sistema de yoga dinámico con una secuencia fija de posturas que se practica siguiendo el método Mysore (autoguiado con asistencia del instructor). Exigente y transformador.',
    benefits: ['Alta exigencia física', 'Desarrolla fuerza y resistencia', 'Disciplina y compromiso personal', 'Progresión gradual y sistemática', 'Transformación integral'],
  },
  {
    name: 'Meditación y Pranayama',
    seed: 'yoga-pose6',
    level: 'Todos los niveles',
    duration: '45 min',
    desc: 'Una práctica dedicada exclusivamente a la respiración consciente (pranayama) y la meditación guiada. Sin posturas físicas, ideal para quienes quieren trabajar la mente y reducir el estrés.',
    benefits: ['Calma y claridad mental', 'Mejora la gestión emocional', 'Técnicas respiratorias para la ansiedad', 'Desarrolla la concentración', 'Accesible para todos'],
  },
  {
    name: 'Yoga Nidra',
    seed: 'yoga-pose7',
    level: 'Todos los niveles',
    duration: '60 min',
    desc: 'El Yoga Nidra o "sueño yóguico" es una técnica de relajación profunda guiada que conduce a un estado entre el sueño y la vigilia. Una hora equivale, dicen, a cuatro horas de sueño convencional.',
    benefits: ['Reducción profunda del estrés', 'Mejora el sueño', 'Integración de experiencias emocionales', 'Se practica tumbado', 'Sin contraindicaciones'],
  },
  {
    name: 'Yoga en Pareja',
    seed: 'yoga-pose8',
    level: 'Principiante',
    duration: '75 min',
    desc: 'El yoga en pareja o partner yoga explora posturas adaptadas para dos personas. Ideal para practicar con pareja, amigo o familiar. Fomenta la confianza, la comunicación y la diversión.',
    benefits: ['Fortalece vínculos', 'Comunicación no verbal', 'Equilibrio y ajuste mutuo', 'Risas garantizadas', 'No se requiere experiencia previa'],
  },
];

const workshops = [
  { title: 'Retiro de Fin de Semana en la Sierra', date: 'Marzo 2025', desc: 'Dos días de práctica intensa, meditación y reconexión con la naturaleza. Plazas muy limitadas.' },
  { title: 'Taller de Inversiones y Brazos', date: 'Febrero 2025', desc: 'Aprende a hacer el pino y otras inversiones de forma segura con la guía de Elena.' },
  { title: 'Meditación Vipassana Intensiva', date: 'Abril 2025', desc: 'Fin de semana de silencio y práctica meditativa profunda. Para alumnos con experiencia.' },
];

function ClassCard({ c, i }: { c: typeof classes[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
      style={{ backgroundColor: '#ede4d8', overflow: 'hidden', border: `1px solid ${accent}22` }}
    >
      <div style={{ overflow: 'hidden', aspectRatio: '3/2' }}>
        <img src={`https://picsum.photos/seed/${c.seed}/600/400`} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
          <h3 style={{ color: textColor, fontSize: '20px', fontWeight: 800, margin: 0 }}>{c.name}</h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ backgroundColor: `${accent}22`, color: accent, fontSize: '11px', fontWeight: 700, padding: '4px 12px' }}>{c.level}</span>
            <span style={{ backgroundColor: '#3d2b1f22', color: textColor, fontSize: '11px', fontWeight: 700, padding: '4px 12px' }}>{c.duration}</span>
          </div>
        </div>
        <p style={{ color: '#7a5a48', fontSize: '14px', lineHeight: 1.7, margin: '0 0 20px' }}>{c.desc}</p>
        <p style={{ color: textColor, fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', marginBottom: '10px' }}>BENEFICIOS:</p>
        <ul style={{ paddingLeft: '18px', margin: 0 }}>
          {c.benefits.map(b => <li key={b} style={{ color: '#7a5a48', fontSize: '13px', lineHeight: 1.8 }}>{b}</li>)}
        </ul>
      </div>
    </motion.div>
  );
}

export default function YogaClases() {
  const headerRef = useRef(null);
  const workshopRef = useRef(null);
  const ctaRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const workshopInView = useInView(workshopRef, { once: true, margin: '-60px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <div style={{ backgroundColor: bg, color: textColor }}>

      {/* HEADER */}
      <section
        ref={headerRef}
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 100px) 60px', backgroundColor: '#ede4d8', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', backgroundColor: `${accent}08` }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '16px' }}
          >
            ZEN FLOW · CLASES
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 20px', lineHeight: 1.1 }}
          >
            Todas nuestras<br /><span style={{ color: accent }}>clases</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: '#7a5a48', fontSize: '17px', lineHeight: 1.7 }}
          >
            Desde el yoga suave hasta las prácticas más desafiantes. Hay una clase perfecta para cada persona y cada momento.
          </motion.p>
        </div>
      </section>

      {/* QUIZ SECTION */}
      <div style={{ backgroundColor: accent, padding: '20px 40px', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: '15px', margin: 0 }}>
          ¿No sabes qué clase es para ti? Escríbenos y te orientamos personalmente —{' '}
          <Link href="/demos/yoga/contacto" style={{ color: '#fff', textDecoration: 'underline' }}>Consejo gratuito</Link>
        </p>
      </div>

      {/* CLASSES GRID */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="r-grid-2">
            {classes.map((c, i) => <ClassCard key={c.name} c={c} i={i} />)}
          </div>
        </div>
      </section>

      {/* WORKSHOPS */}
      <section ref={workshopRef} className="r-section" style={{ backgroundColor: '#ede4d8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={workshopInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>EVENTOS ESPECIALES</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>Talleres y retiros</h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {workshops.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, x: -30 }}
                animate={workshopInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{ backgroundColor: bg, padding: '28px 32px', border: `1px solid ${accent}22`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
              >
                <div>
                  <h3 style={{ color: textColor, fontSize: '18px', fontWeight: 700, margin: '0 0 8px' }}>{w.title}</h3>
                  <p style={{ color: '#7a5a48', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{w.desc}</p>
                </div>
                <div style={{ flexShrink: 0, textAlign: 'center' }}>
                  <span style={{ color: accent, fontWeight: 800, fontSize: '14px', display: 'block', marginBottom: '12px' }}>{w.date}</span>
                  <Link href="/demos/yoga/contacto">
                    <button style={{ backgroundColor: accent, color: '#fff', border: 'none', padding: '10px 24px', fontWeight: 700, fontSize: '13px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                      Más info
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0 }}
        animate={ctaInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9 }}
        style={{ backgroundColor: bg, padding: 'clamp(60px, 8vw, 100px) 40px', textAlign: 'center', borderTop: `1px solid ${accent}22` }}
      >
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 56px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 16px' }}>
          ¿Lista para empezar?
        </h2>
        <p style={{ color: '#7a5a48', fontSize: '17px', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Tu primera clase en ZEN FLOW es gratuita. Sin compromiso. Simplemente ven.
        </p>
        <Link href="/demos/yoga/contacto">
          <button style={{ backgroundColor: accent, color: '#fff', border: 'none', padding: '16px 48px', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
            RESERVAR MI PRIMERA CLASE
          </button>
        </Link>
      </motion.section>

    </div>
  );
}

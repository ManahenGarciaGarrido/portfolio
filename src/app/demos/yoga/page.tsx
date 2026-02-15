'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#f7f0e8';
const accent = '#c05c1a';
const textColor = '#3d2b1f';
const dark = '#2a1a10';

const classTypes = [
  { icon: '🌿', name: 'Hatha Yoga', desc: 'La base de todas las prácticas. Posturas lentas y conscientes para todos los niveles.' },
  { icon: '🌊', name: 'Vinyasa Flow', desc: 'Secuencias dinámicas que coordinan movimiento y respiración. Energizante y fluidamente.' },
  { icon: '☯', name: 'Yin Yoga', desc: 'Posturas mantenidas durante varios minutos. Profunda liberación del tejido conectivo.' },
  { icon: '🧘', name: 'Meditación', desc: 'Técnicas de mindfulness y meditación guiada para calmar la mente y encontrar claridad.' },
];

const reasons = [
  { icon: '👥', title: 'Pequeños grupos', sub: 'Máximo 12 personas', desc: 'La atención personalizada es nuestra seña de identidad. Nunca más de 12 alumnos por clase.' },
  { icon: '🏅', title: '+15 años de experiencia', sub: 'Desde 2009', desc: 'Más de una década formando comunidad, compartiendo práctica y creciendo juntos.' },
  { icon: '💙', title: 'Libre de juicios', sub: 'Tu espacio seguro', desc: 'Cada persona llega con su historia. Aquí no hay competencia, solo presencia.' },
];

const instructors = [
  { name: 'Sofía Mendez', style: 'Hatha & Yin', seed: 'yoga-instructor1' },
  { name: 'Elena Ruiz', style: 'Vinyasa Flow', seed: 'yoga-instructor2' },
  { name: 'Marta Vidal', style: 'Meditación', seed: 'yoga-instructor3' },
];

const schedule = [
  { day: 'Lunes', time: '7:30', clase: 'Hatha Yoga', instructor: 'Sofía', level: 'Todos', spots: 4 },
  { day: 'Lunes', time: '19:00', clase: 'Vinyasa Flow', instructor: 'Elena', level: 'Intermedio', spots: 2 },
  { day: 'Martes', time: '9:00', clase: 'Yin Yoga', instructor: 'Sofía', level: 'Todos', spots: 8 },
  { day: 'Miércoles', time: '7:30', clase: 'Meditación', instructor: 'Marta', level: 'Todos', spots: 6 },
  { day: 'Miércoles', time: '20:00', clase: 'Hatha Yoga', instructor: 'Sofía', level: 'Principiante', spots: 5 },
  { day: 'Jueves', time: '19:00', clase: 'Vinyasa Flow', instructor: 'Elena', level: 'Avanzado', spots: 3 },
  { day: 'Viernes', time: '9:00', clase: 'Yin Yoga', instructor: 'Marta', level: 'Todos', spots: 9 },
];

const testimonials = [
  { name: 'Ana G.', seed: 'yoga-student1', text: 'Llevo tres años en ZEN FLOW y ha cambiado completamente mi relación con mi cuerpo y mi mente. Sofía es una maestra increíble.' },
  { name: 'Clara M.', seed: 'yoga-student2', text: 'Vine sin saber nada de yoga y nunca me sentí fuera de lugar. El ambiente es cálido y sin presión. Me encanta cada clase.' },
  { name: 'Inés V.', seed: 'yoga-student3', text: 'Las clases de Yin han sido terapéuticas para mi espalda. Duermo mejor, me muevo mejor y me siento más tranquila.' },
];

export default function YogaHome() {
  const clasesRef = useRef(null);
  const studioRef = useRef(null);
  const reasonsRef = useRef(null);
  const instructorsRef = useRef(null);
  const scheduleRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const clasesInView = useInView(clasesRef, { once: true, margin: '-60px' });
  const studioInView = useInView(studioRef, { once: true, margin: '-60px' });
  const reasonsInView = useInView(reasonsRef, { once: true, margin: '-60px' });
  const instructorsInView = useInView(instructorsRef, { once: true, margin: '-60px' });
  const scheduleInView = useInView(scheduleRef, { once: true, margin: '-60px' });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-60px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <div style={{ backgroundColor: bg, color: textColor }}>

      {/* HERO - SPLIT */}
      <section className="r-hero-split" style={{ minHeight: '100vh', overflow: 'hidden' }}>
        {/* Left text */}
        <div style={{ backgroundColor: bg, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(60px, 8vw, 120px) clamp(32px, 6vw, 80px)' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: accent, fontSize: '12px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '20px' }}
          >
            CENTRO DE YOGA Y MEDITACIÓN
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ margin: '0 0 8px', lineHeight: 1 }}
          >
            <span style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 400, color: textColor, letterSpacing: '-0.02em', display: 'block', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Encuentra tu
            </span>
            <span style={{ fontSize: 'clamp(52px, 8vw, 108px)', fontWeight: 900, color: accent, letterSpacing: '-0.03em', display: 'block', lineHeight: 0.9 }}>
              EQUILIBRIO
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ color: '#7a5a48', fontSize: 'clamp(15px, 2vw, 18px)', margin: '24px 0 40px', lineHeight: 1.6, maxWidth: '420px' }}
          >
            Centro de yoga y meditación en el corazón de la ciudad. Pequeños grupos, instructores expertos, ambiente tranquilo.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <Link href="/demos/yoga/contacto">
              <button style={{ backgroundColor: accent, color: '#fff', border: 'none', padding: '16px 36px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', borderRadius: '2px' }}>
                CLASE DE PRUEBA GRATUITA
              </button>
            </Link>
            <Link href="/demos/yoga/clases">
              <button style={{ backgroundColor: 'transparent', color: accent, border: `2px solid ${accent}`, padding: '16px 36px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', borderRadius: '2px' }}>
                Ver Clases
              </button>
            </Link>
          </motion.div>
        </div>
        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{ overflow: 'hidden', minHeight: '500px' }}
        >
          <img
            src="https://picsum.photos/seed/yoga-class/700/900"
            alt="ZEN FLOW Yoga"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>
      </section>

      {/* CLASS TYPES */}
      <section ref={clasesRef} className="r-section" style={{ backgroundColor: '#ede4d8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={clasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>NUESTRAS PRÁCTICAS</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 400, color: textColor, margin: 0, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Clases para cada momento</h2>
          </motion.div>
          <div className="r-grid-4">
            {classTypes.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                animate={clasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ backgroundColor: bg, border: `2px solid ${accent}22`, padding: '32px 24px', textAlign: 'center' }}
              >
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{c.icon}</div>
                <h3 style={{ color: textColor, fontWeight: 700, fontSize: '17px', margin: '0 0 10px' }}>{c.name}</h3>
                <p style={{ color: '#7a5a48', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO SPACE FULLWIDTH */}
      <motion.section
        ref={studioRef}
        initial={{ opacity: 0 }}
        animate={studioInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        style={{ position: 'relative', height: 'clamp(300px, 50vw, 600px)', overflow: 'hidden' }}
      >
        <img
          src="https://picsum.photos/seed/yoga-studio/1400/600"
          alt="Nuestro espacio"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={studioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ color: '#e0c8a0', fontSize: '12px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>ZEN FLOW</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(32px, 6vw, 72px)', fontWeight: 400, fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: 0 }}>Nuestro espacio</h2>
          </motion.div>
        </div>
      </motion.section>

      {/* WHY ZEN FLOW */}
      <section ref={reasonsRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="r-grid-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                style={{ textAlign: 'center', padding: '40px 24px', backgroundColor: '#ede4d8', borderRadius: '2px' }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{r.icon}</div>
                <h3 style={{ color: textColor, fontWeight: 800, fontSize: '18px', margin: '0 0 6px' }}>{r.title}</h3>
                <p style={{ color: accent, fontSize: '13px', fontWeight: 700, margin: '0 0 12px', letterSpacing: '0.05em' }}>{r.sub}</p>
                <p style={{ color: '#7a5a48', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section ref={instructorsRef} className="r-section" style={{ backgroundColor: '#ede4d8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={instructorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>QUIÉNES NOS GUÍAN</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>Nuestros instructores</h2>
          </motion.div>
          <div className="r-grid-3">
            {instructors.map((ins, i) => (
              <motion.div
                key={ins.name}
                initial={{ opacity: 0, y: 30 }}
                animate={instructorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ borderRadius: '50%', overflow: 'hidden', width: 'clamp(140px, 20vw, 200px)', height: 'clamp(140px, 20vw, 200px)', margin: '0 auto 20px', border: `3px solid ${accent}44` }}>
                  <img src={`https://picsum.photos/seed/${ins.seed}/300/380`} alt={ins.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <h3 style={{ color: textColor, fontWeight: 700, fontSize: '18px', margin: '0 0 6px' }}>{ins.name}</h3>
                <p style={{ color: accent, fontSize: '13px', fontWeight: 600, margin: 0 }}>{ins.style}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={instructorsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            style={{ textAlign: 'center', marginTop: '40px' }}
          >
            <Link href="/demos/yoga/instructores">
              <button style={{ backgroundColor: 'transparent', color: accent, border: `2px solid ${accent}`, padding: '14px 40px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                CONOCER AL EQUIPO
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SCHEDULE PREVIEW */}
      <section ref={scheduleRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={scheduleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>ESTA SEMANA</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>Horario de clases</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={scheduleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ overflowX: 'auto' }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${accent}` }}>
                  {['DÍA', 'HORA', 'CLASE', 'INSTRUCTOR', 'NIVEL', 'PLAZAS'].map(h => (
                    <th key={h} style={{ color: accent, fontSize: '11px', letterSpacing: '0.15em', fontWeight: 700, padding: '12px 16px', textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((s, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${accent}22`, backgroundColor: i % 2 === 0 ? 'transparent' : '#ede4d8' }}>
                    <td style={{ color: textColor, fontWeight: 700, padding: '14px 16px', fontSize: '14px' }}>{s.day}</td>
                    <td style={{ color: accent, fontWeight: 700, padding: '14px 16px', fontSize: '14px' }}>{s.time}</td>
                    <td style={{ color: textColor, padding: '14px 16px', fontSize: '14px' }}>{s.clase}</td>
                    <td style={{ color: '#7a5a48', padding: '14px 16px', fontSize: '14px' }}>{s.instructor}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ backgroundColor: `${accent}22`, color: accent, fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>{s.level}</span>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ color: s.spots <= 3 ? '#c05c1a' : '#5a8a5a', fontWeight: 700, fontSize: '14px' }}>{s.spots} plazas</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/demos/yoga/horarios">
              <button style={{ backgroundColor: 'transparent', color: accent, border: `2px solid ${accent}`, padding: '14px 40px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                VER HORARIO COMPLETO
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialsRef} className="r-section" style={{ backgroundColor: '#ede4d8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>COMUNIDAD ZEN FLOW</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>Lo que dicen nuestros alumnos</h2>
          </motion.div>
          <div className="r-grid-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                style={{ backgroundColor: bg, padding: '32px', border: `1px solid ${accent}22` }}
              >
                <p style={{ color: accent, fontSize: '32px', fontFamily: 'Georgia, serif', margin: '0 0 16px', lineHeight: 1 }}>"</p>
                <p style={{ color: '#5a4030', fontSize: '15px', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 24px' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                    <img src={`https://picsum.photos/seed/${t.seed}/80/80`} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <p style={{ color: textColor, fontWeight: 700, fontSize: '15px', margin: 0 }}>{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRIAL CTA */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        style={{ backgroundColor: accent, padding: 'clamp(60px, 8vw, 100px) 40px', textAlign: 'center' }}
      >
        <p style={{ color: '#f7e8d8', fontSize: '12px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '16px' }}>BIENVENIDA/O A CASA</p>
        <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 5vw, 60px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, margin: '0 0 16px', lineHeight: 1.2 }}>
          Tu primera clase,<br />nuestra invitación
        </h2>
        <p style={{ color: '#f7e8d8', fontSize: '17px', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto 36px' }}>
          Ven a conocer nuestro espacio y practica con nosotros. La primera clase es completamente gratuita y sin compromiso.
        </p>
        <Link href="/demos/yoga/contacto">
          <button style={{ backgroundColor: '#fff', color: accent, border: 'none', padding: '16px 48px', fontWeight: 800, fontSize: '15px', letterSpacing: '0.1em', cursor: 'pointer' }}>
            RESERVAR MI CLASE GRATIS
          </button>
        </Link>
      </motion.section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ borderTop: `1px solid ${accent}22`, backgroundColor: '#f0e6d8' }}>
        <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '22px', color: accent, fontWeight: 700 }}>ZEN FLOW</span>
        <div style={{ textAlign: 'center', color: '#9a7a68', fontSize: '13px' }}>
          <p style={{ margin: '0 0 4px' }}>Calle del Bienestar 7, bajo · Sevilla</p>
          <p style={{ margin: '0 0 4px' }}>Lunes–Viernes 7:00–21:00 · Sábados 9:00–14:00</p>
          <p style={{ margin: 0 }}>© 2025 ZEN FLOW. Centro de Yoga y Meditación.</p>
        </div>
        <span style={{ color: '#9a7a68', fontSize: '13px' }}>+34 954 000 333</span>
      </footer>
    </div>
  );
}

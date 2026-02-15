'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#f7f0e8';
const accent = '#c05c1a';
const textColor = '#3d2b1f';

type Slot = { clase: string; instructor: string; level: string; spots: number; } | null;

const weekSchedule: Record<string, { morning: Slot; afternoon: Slot; evening: Slot }> = {
  Lunes: {
    morning: { clase: 'Hatha Yoga', instructor: 'Sofía', level: 'Todos', spots: 4 },
    afternoon: { clase: 'Yoga Restaurativo', instructor: 'Carmen', level: 'Todos', spots: 8 },
    evening: { clase: 'Vinyasa Flow', instructor: 'Elena', level: 'Intermedio', spots: 2 },
  },
  Martes: {
    morning: { clase: 'Yin Yoga', instructor: 'Sofía', level: 'Todos', spots: 9 },
    afternoon: null,
    evening: { clase: 'Meditación', instructor: 'Marta', level: 'Todos', spots: 11 },
  },
  Miércoles: {
    morning: { clase: 'Meditación', instructor: 'Marta', level: 'Todos', spots: 7 },
    afternoon: { clase: 'Yoga Prenatal', instructor: 'Carmen', level: 'Embarazadas', spots: 5 },
    evening: { clase: 'Hatha Yoga', instructor: 'Sofía', level: 'Principiante', spots: 3 },
  },
  Jueves: {
    morning: { clase: 'Vinyasa Flow', instructor: 'Elena', level: 'Todos', spots: 6 },
    afternoon: null,
    evening: { clase: 'Ashtanga', instructor: 'Elena', level: 'Avanzado', spots: 1 },
  },
  Viernes: {
    morning: { clase: 'Yin Yoga', instructor: 'Marta', level: 'Todos', spots: 10 },
    afternoon: { clase: 'Hatha Suave', instructor: 'Carmen', level: 'Principiante', spots: 7 },
    evening: { clase: 'Vinyasa Flow', instructor: 'Sofía', level: 'Intermedio', spots: 4 },
  },
  Sábado: {
    morning: { clase: 'Yoga en Pareja', instructor: 'Carmen', level: 'Todos', spots: 6 },
    afternoon: { clase: 'Yoga Nidra', instructor: 'Marta', level: 'Todos', spots: 12 },
    evening: null,
  },
  Domingo: {
    morning: { clase: 'Hatha Yoga', instructor: 'Sofía', level: 'Todos', spots: 8 },
    afternoon: null,
    evening: null,
  },
};

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const slotTimes = {
  morning: '7:30 – 9:00',
  afternoon: '12:00 – 13:30',
  evening: '19:00 – 20:30',
};

const monthlyIntensives = [
  { title: 'Intensivo de Inversiones', date: '15 Feb 2025', time: '10:00–14:00', instructor: 'Elena Ruiz', spots: 8, price: '45€' },
  { title: 'Retiro Yin & Meditación', date: '1–2 Mar 2025', time: 'Todo el día', instructor: 'Sofía Méndez + Marta Vidal', spots: 12, price: '120€' },
  { title: 'Pranayama Avanzado', date: '22 Mar 2025', time: '10:00–13:00', instructor: 'Marta Vidal', spots: 10, price: '35€' },
  { title: 'Yoga & Cacao Ceremony', date: '5 Abr 2025', time: '18:00–21:00', instructor: 'Carmen Torres', spots: 15, price: '40€' },
];

function SlotCell({ slot }: { slot: Slot }) {
  const [hovered, setHovered] = useState(false);
  if (!slot) return <td style={{ padding: '12px 10px', textAlign: 'center', color: '#cbb8aa', fontSize: '12px' }}>—</td>;
  return (
    <td
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '10px',
        backgroundColor: hovered ? `${accent}11` : 'transparent',
        transition: 'background-color 0.2s',
        cursor: 'pointer',
        verticalAlign: 'top',
      }}
    >
      <p style={{ color: textColor, fontWeight: 700, fontSize: '13px', margin: '0 0 3px', lineHeight: 1.3 }}>{slot.clase}</p>
      <p style={{ color: '#9a7a68', fontSize: '11px', margin: '0 0 5px' }}>{slot.instructor}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '6px' }}>
        <span style={{ backgroundColor: `${accent}22`, color: accent, fontSize: '10px', fontWeight: 700, padding: '2px 7px', whiteSpace: 'nowrap' }}>{slot.level}</span>
        <span style={{ color: slot.spots <= 3 ? '#c05c1a' : '#5a8a5a', fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap' }}>{slot.spots} plz</span>
      </div>
    </td>
  );
}

export default function YogaHorarios() {
  const headerRef = useRef(null);
  const tableRef = useRef(null);
  const intensivesRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const tableInView = useInView(tableRef, { once: true, margin: '-60px' });
  const intensivesInView = useInView(intensivesRef, { once: true, margin: '-60px' });

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
          ZEN FLOW · HORARIOS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: '0 0 20px', lineHeight: 1.1 }}
        >
          Encuentra tu<br /><span style={{ color: accent }}>momento</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ color: '#9a7a68', fontSize: '14px', fontStyle: 'italic' }}
        >
          Las clases con 1 plaza o menos se muestran en naranja. Reserva con antelación para garantizar tu lugar.
        </motion.p>
      </section>

      {/* WEEKLY TABLE */}
      <section ref={tableRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ overflowX: 'auto', border: `1px solid ${accent}22` }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
              <thead>
                <tr style={{ backgroundColor: '#ede4d8' }}>
                  <th style={{ color: '#9a7a68', fontSize: '11px', letterSpacing: '0.15em', padding: '16px 12px', textAlign: 'left', fontWeight: 700, borderBottom: `2px solid ${accent}` }}>HORARIO</th>
                  {days.map(d => (
                    <th key={d} style={{ color: accent, fontSize: '12px', letterSpacing: '0.1em', padding: '16px 10px', textAlign: 'center', fontWeight: 700, borderBottom: `2px solid ${accent}` }}>{d.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(['morning', 'afternoon', 'evening'] as const).map((slot, si) => (
                  <tr key={slot} style={{ borderBottom: `1px solid ${accent}22` }}>
                    <td style={{ padding: '12px', backgroundColor: '#ede4d8', verticalAlign: 'top', minWidth: '100px' }}>
                      <p style={{ color: textColor, fontWeight: 700, fontSize: '12px', margin: '0 0 2px' }}>{slot === 'morning' ? 'Mañana' : slot === 'afternoon' ? 'Mediodía' : 'Tarde'}</p>
                      <p style={{ color: '#9a7a68', fontSize: '11px', margin: 0 }}>{slotTimes[slot]}</p>
                    </td>
                    {days.map(d => <SlotCell key={d} slot={weekSchedule[d][slot]} />)}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={tableInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            style={{ textAlign: 'center', marginTop: '32px' }}
          >
            <Link href="/demos/yoga/contacto">
              <button style={{ backgroundColor: accent, color: '#fff', border: 'none', padding: '16px 44px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', marginRight: '16px' }}>
                RESERVAR PLAZA
              </button>
            </Link>
            <Link href="/demos/yoga/contacto">
              <button style={{ backgroundColor: 'transparent', color: accent, border: `2px solid ${accent}`, padding: '16px 44px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                CLASE DE PRUEBA GRATIS
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MONTHLY INTENSIVES */}
      <section ref={intensivesRef} className="r-section" style={{ backgroundColor: '#ede4d8' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={intensivesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>CALENDARIO</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: textColor, margin: 0 }}>Intensivos del mes</h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {monthlyIntensives.map((ev, i) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, x: -20 }}
                animate={intensivesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ backgroundColor: bg, padding: '24px 28px', border: `1px solid ${accent}22`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}
              >
                <div>
                  <h3 style={{ color: textColor, fontWeight: 700, fontSize: '17px', margin: '0 0 6px' }}>{ev.title}</h3>
                  <p style={{ color: '#9a7a68', fontSize: '13px', margin: '0 0 4px' }}>{ev.instructor} · {ev.time}</p>
                  <p style={{ color: '#9a7a68', fontSize: '12px', margin: 0 }}>{ev.spots} plazas disponibles</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ color: accent, fontWeight: 800, fontSize: '18px', margin: '0 0 4px' }}>{ev.price}</p>
                  <p style={{ color: textColor, fontWeight: 700, fontSize: '13px', margin: '0 0 10px' }}>{ev.date}</p>
                  <Link href="/demos/yoga/contacto">
                    <button style={{ backgroundColor: accent, color: '#fff', border: 'none', padding: '8px 20px', fontWeight: 700, fontSize: '12px', cursor: 'pointer' }}>
                      Reservar
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

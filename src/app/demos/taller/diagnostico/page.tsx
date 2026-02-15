'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#0d0d0d';
const accent = '#ff6600';
const text = '#f0f0f0';
const dark = '#1a1a1a';

const problems = [
  {
    icon: '🔴',
    title: 'Luz de motor encendida',
    symptoms: ['La testigo naranja o roja parpadea o permanece encendida', 'Pérdida de potencia o arranque difícil', 'Mayor consumo de combustible'],
    cause: 'Puede indicar desde un sensor defectuoso hasta un problema grave en el sistema de inyección o emisiones.',
    urgency: 'Media-Alta',
  },
  {
    icon: '🔊',
    title: 'Ruidos extraños al frenar',
    symptoms: ['Chirrido metálico al pisar el freno', 'Vibración en el pedal', 'Golpe al frenar en frío'],
    cause: 'Pastillas desgastadas, discos rayados o la presencia de óxido tras varios días sin usar el vehículo.',
    urgency: 'Alta',
  },
  {
    icon: '〰',
    title: 'Vibraciones al conducir',
    symptoms: ['El volante vibra a ciertas velocidades', 'El asiento o carrocería tiembla', 'Vibración al acelerar'],
    cause: 'Desequilibrio en neumáticos, problemas de alineación, cardanes en mal estado o amortiguadores desgastados.',
    urgency: 'Media',
  },
  {
    icon: '💧',
    title: 'Pérdida de líquidos',
    symptoms: ['Manchas bajo el vehículo', 'Olor a quemado sin causa visible', 'Testigo de temperatura al alza'],
    cause: 'Puede ser aceite, refrigerante, líquido de frenos o dirección. Requiere diagnóstico inmediato.',
    urgency: 'Alta',
  },
  {
    icon: '🔋',
    title: 'Problemas eléctricos',
    symptoms: ['Luces parpadeantes o que no funcionan', 'Radio o sistemas que fallan', 'Dificultad para arrancar'],
    cause: 'Batería en mal estado, alternador deficiente o cables en cortocircuito.',
    urgency: 'Media',
  },
  {
    icon: '💨',
    title: 'Humo del escape',
    symptoms: ['Humo blanco, azul o negro por el tubo', 'Olor fuerte a quemado', 'Pérdida de potencia'],
    cause: 'El color del humo indica el tipo de problema: azul = aceite, blanco = refrigerante, negro = combustible.',
    urgency: 'Alta',
  },
];

const urgencyOptions = ['Baja — Sin prisa', 'Media — Esta semana', 'Alta — Lo antes posible', 'Urgente — Hoy mismo'];

export default function TallerDiagnostico() {
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const problemsRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: '-60px' });
  const problemsInView = useInView(problemsRef, { once: true, margin: '-60px' });

  const [form, setForm] = useState({
    nombre: '', telefono: '', matricula: '', marca: '', modelo: '',
    anio: '', kilometraje: '', descripcion: '', urgencia: '', fecha: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, val: string) => setForm(f => ({ ...f, [field]: val }));

  const inputStyle = {
    backgroundColor: dark,
    border: `1px solid #333`,
    color: text,
    padding: '14px 18px',
    fontSize: '15px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
  };

  const labelStyle = { color: '#888', fontSize: '12px', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: '8px' };

  return (
    <div style={{ backgroundColor: bg, color: text }}>

      {/* HEADER */}
      <section
        ref={headerRef}
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 100px) 60px', background: 'linear-gradient(135deg, #1a0800 0%, #0d0d0d 70%)' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '16px' }}
        >
          MOTORWORK · DIAGNÓSTICO ONLINE
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, color: text, margin: '0 0 20px', lineHeight: 1 }}
        >
          DIAGNÓSTICO<br /><span style={{ color: accent }}>ONLINE</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: accent, padding: '12px 24px' }}
        >
          <span style={{ color: '#000', fontSize: '24px', fontWeight: 900 }}>✓</span>
          <p style={{ color: '#000', fontWeight: 800, fontSize: '15px', margin: 0 }}>Diagnóstico digital gratuito en tu primera visita</p>
        </motion.div>
      </section>

      {/* FORM */}
      <section ref={formRef} className="r-section" style={{ backgroundColor: bg }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ backgroundColor: dark, border: `1px solid #2a2a2a`, padding: 'clamp(32px, 5vw, 60px)' }}
          >
            <h2 style={{ color: text, fontSize: '28px', fontWeight: 800, margin: '0 0 8px' }}>Cuéntanos qué le pasa a tu coche</h2>
            <p style={{ color: '#777', fontSize: '15px', marginBottom: '40px' }}>Rellena el formulario y un mecánico experto se pondrá en contacto contigo en menos de 2 horas.</p>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
                <h3 style={{ color: accent, fontSize: '24px', fontWeight: 800, margin: '0 0 12px' }}>¡Solicitud recibida!</h3>
                <p style={{ color: '#aaa', fontSize: '16px', lineHeight: 1.6 }}>
                  Un mecánico experto revisará tu caso y te llamará en menos de 2 horas.<br />
                  Si es urgente, llámanos directamente: <strong style={{ color: accent }}>+34 955 000 111</strong>
                </p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={labelStyle}>NOMBRE Y APELLIDOS *</label>
                    <input type="text" required value={form.nombre} onChange={e => update('nombre', e.target.value)} placeholder="Antonio García López" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>TELÉFONO DE CONTACTO *</label>
                    <input type="tel" required value={form.telefono} onChange={e => update('telefono', e.target.value)} placeholder="622 000 111" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>MATRÍCULA DEL VEHÍCULO *</label>
                    <input type="text" required value={form.matricula} onChange={e => update('matricula', e.target.value)} placeholder="1234 ABC" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>MARCA</label>
                    <input type="text" value={form.marca} onChange={e => update('marca', e.target.value)} placeholder="Volkswagen, Ford, Seat..." style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>MODELO</label>
                    <input type="text" value={form.modelo} onChange={e => update('modelo', e.target.value)} placeholder="Golf, Focus, León..." style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>AÑO DE FABRICACIÓN</label>
                    <input type="number" value={form.anio} onChange={e => update('anio', e.target.value)} placeholder="2018" min="1990" max="2025" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>KILOMETRAJE APROXIMADO</label>
                    <input type="text" value={form.kilometraje} onChange={e => update('kilometraje', e.target.value)} placeholder="85.000 km" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>URGENCIA</label>
                    <select value={form.urgencia} onChange={e => update('urgencia', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Selecciona urgencia...</option>
                      {urgencyOptions.map(u => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>FECHA PREFERIDA DE VISITA</label>
                    <input type="date" value={form.fecha} onChange={e => update('fecha', e.target.value)} style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle}>DESCRIPCIÓN DEL PROBLEMA *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.descripcion}
                    onChange={e => update('descripcion', e.target.value)}
                    placeholder="Describe con el mayor detalle posible lo que le ocurre a tu vehículo: cuándo aparece el problema, qué ruidos o síntomas notas, desde cuándo..."
                    style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: accent, color: '#000', border: 'none', padding: '18px 52px', fontWeight: 800, fontSize: '15px', letterSpacing: '0.1em', cursor: 'pointer', width: '100%' }}
                >
                  ENVIAR SOLICITUD DE DIAGNÓSTICO
                </button>
                <p style={{ color: '#555', fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>
                  * Campos obligatorios. Tus datos no serán cedidos a terceros.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* SYMPTOM CHECKER */}
      <section ref={problemsRef} className="r-section" style={{ backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <p style={{ color: accent, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 700, marginBottom: '12px' }}>COMPROBADOR DE SÍNTOMAS</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: text, margin: 0 }}>Problemas comunes y sus causas</h2>
          </motion.div>
          <div className="r-grid-2">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={problemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                style={{ backgroundColor: dark, border: `1px solid #2a2a2a`, padding: '28px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '32px' }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: text, fontSize: '18px', fontWeight: 700, margin: '0 0 4px' }}>{p.title}</h3>
                    <span style={{
                      backgroundColor: p.urgency === 'Alta' ? `${accent}22` : '#2a2a2a',
                      color: p.urgency === 'Alta' ? accent : '#888',
                      fontSize: '11px', fontWeight: 700, padding: '3px 10px', letterSpacing: '0.1em'
                    }}>
                      URGENCIA: {p.urgency.toUpperCase()}
                    </span>
                  </div>
                </div>
                <p style={{ color: '#aaa', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>SÍNTOMAS:</p>
                <ul style={{ paddingLeft: '18px', margin: '0 0 14px' }}>
                  {p.symptoms.map(s => <li key={s} style={{ color: '#777', fontSize: '13px', lineHeight: 1.8 }}>{s}</li>)}
                </ul>
                <p style={{ color: '#999', fontSize: '13px', lineHeight: 1.6, margin: '0', padding: '12px', backgroundColor: '#141414', borderLeft: `3px solid ${accent}` }}>
                  <strong style={{ color: accent }}>Posible causa: </strong>{p.cause}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={problemsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            style={{ textAlign: 'center', marginTop: '50px' }}
          >
            <Link href="/demos/taller/contacto">
              <button style={{ backgroundColor: accent, color: '#000', border: 'none', padding: '16px 44px', fontWeight: 800, fontSize: '14px', letterSpacing: '0.1em', cursor: 'pointer' }}>
                LLAMAR AL TALLER
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#f0f7ff';
const accent = '#0055cc';
const text = '#1a2a3a';
const white = '#ffffff';
const lightBlue = '#e0eeff';

const specialtiesOptions = [
  'Cardiología',
  'Dermatología',
  'Traumatología',
  'Pediatría',
  'Ginecología',
  'Neurología',
  'Medicina Interna',
  'Urgencias',
  'Análisis Clínicos',
  'Radiología',
];

const doctorsBySpecialty: Record<string, string[]> = {
  'Cardiología': ['Dr. Carlos Mendoza', 'Dra. Carmen Ruiz', 'Dr. Miguel Torres', 'Dr. Arturo Vega'],
  'Dermatología': ['Dra. Ana García', 'Dra. Sofía Blanco', 'Dr. Roberto Jiménez', 'Dra. Marta Ponce'],
  'Traumatología': ['Dr. Pedro Sánchez', 'Dra. Isabel Fernández', 'Dr. Andrés Castro', 'Dr. Luis Molina', 'Dra. Elena Ruiz', 'Dr. Tomás García'],
  'Pediatría': ['Dra. Patricia Molina', 'Dr. Carlos Ruiz', 'Dra. Teresa Llorente', 'Dr. Ignacio Pérez'],
  'Ginecología': ['Dra. Laura Martín', 'Dr. Francisco Navarro', 'Dra. Pilar Sousa', 'Dr. Alejandro Mora', 'Dra. Carmen Torres'],
  'Neurología': ['Dr. Jorge Blanco', 'Dra. Amelia Santos', 'Dr. Víctor Rueda'],
  'Medicina Interna': ['Dr. Javier Morales (Director Médico)'],
  'Urgencias': ['Médico de Guardia (asignación automática)'],
  'Análisis Clínicos': ['Laboratorio Clínico'],
  'Radiología': ['Dr. Pablo Cuesta', 'Dra. Nuria Palacios'],
};

const insurances = [
  'Adeslas', 'Mapfre Salud', 'Sanitas', 'ASISA', 'DKV', 'Cigna',
  'AXA Salud', 'Generali', 'SegurCaixa Adeslas', 'Mutua Madrileña',
  'Fiatc', 'IMQ', 'Sin seguro (pago particular)',
];

const officeHours = [
  { day: 'Lunes – Viernes', hours: '8:00 – 21:00 h' },
  { day: 'Sábados', hours: '9:00 – 15:00 h' },
  { day: 'Domingos y festivos', hours: 'Solo urgencias' },
  { day: 'Urgencias', hours: '24 horas · 365 días' },
];

export default function CitaPage() {
  const [form, setForm] = useState({
    nombre: '', apellidos: '', dni: '', email: '', telefono: '',
    especialidad: '', medico: '', fecha: '', motivo: '', mutua: '',
  });
  const [sent, setSent] = useState(false);
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: '-60px' });

  const availableDoctors = form.especialidad ? doctorsBySpecialty[form.especialidad] || [] : [];

  const inputStyle = {
    width: '100%',
    backgroundColor: white,
    border: '1.5px solid #ddeeff',
    color: text,
    padding: '13px 16px',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box' as const,
    borderRadius: '8px',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    color: text + 'cc',
    fontSize: '13px',
    fontWeight: 600,
    display: 'block' as const,
    marginBottom: '6px',
  };

  return (
    <div style={{ backgroundColor: bg, color: text, fontFamily: '"Inter", "Helvetica Neue", sans-serif' }}>

      {/* HEADER */}
      <section style={{ padding: '72px 24px 52px', textAlign: 'center', backgroundColor: accent }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ color: white, fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginBottom: '16px' }}>
            PEDIR CITA
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>
            Rellena el formulario y te confirmaremos tu cita en menos de 2 horas. También puedes llamarnos al <strong>+34 912 000 000</strong>.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="r-section">
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '48px', alignItems: 'start' }}>

            {/* LEFT: FORM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ color: text, fontSize: '24px', fontWeight: 800, marginBottom: '28px' }}>
                Formulario de Cita
              </h2>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: 'center', padding: '60px 32px',
                    backgroundColor: white, borderRadius: '16px',
                    border: '2px solid #22c55e', boxShadow: '0 4px 24px rgba(34,197,94,0.15)',
                  }}
                >
                  <div style={{ fontSize: '56px', marginBottom: '20px' }}>✅</div>
                  <h3 style={{ color: text, fontSize: '24px', fontWeight: 800, marginBottom: '12px' }}>
                    ¡Solicitud recibida!
                  </h3>
                  <p style={{ color: text + '88', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
                    Hemos recibido tu solicitud de cita. Te confirmaremos por email y SMS en un plazo máximo de 2 horas en horario de atención.
                  </p>
                  <p style={{ color: accent, fontSize: '14px', fontWeight: 700, marginBottom: '24px' }}>
                    Número de referencia: CITA-{Math.random().toString(36).substr(2, 8).toUpperCase()}
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    style={{
                      backgroundColor: accent, color: white,
                      padding: '12px 28px', borderRadius: '8px',
                      fontSize: '14px', fontWeight: 700, border: 'none', cursor: 'pointer',
                    }}
                  >
                    Pedir otra cita
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  style={{
                    backgroundColor: white, borderRadius: '16px', padding: '32px',
                    boxShadow: '0 4px 24px rgba(0,85,204,0.07)', border: '1px solid #ddeeff',
                    display: 'flex', flexDirection: 'column', gap: '20px',
                  }}
                >
                  {/* Personal data */}
                  <div style={{ paddingBottom: '20px', borderBottom: '1px solid #ddeeff' }}>
                    <p style={{ color: accent, fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}>
                      DATOS PERSONALES
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={labelStyle}>Nombre *</label>
                        <input
                          type="text" required
                          value={form.nombre}
                          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                          placeholder="Tu nombre"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Apellidos *</label>
                        <input
                          type="text" required
                          value={form.apellidos}
                          onChange={(e) => setForm({ ...form, apellidos: e.target.value })}
                          placeholder="Tus apellidos"
                          style={inputStyle}
                        />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={labelStyle}>DNI / NIE *</label>
                        <input
                          type="text" required
                          value={form.dni}
                          onChange={(e) => setForm({ ...form, dni: e.target.value })}
                          placeholder="12345678A"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Teléfono *</label>
                        <input
                          type="tel" required
                          value={form.telefono}
                          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                          placeholder="+34 600 000 000"
                          style={inputStyle}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="tu@email.com"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Appointment data */}
                  <div style={{ paddingBottom: '20px', borderBottom: '1px solid #ddeeff' }}>
                    <p style={{ color: accent, fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}>
                      DATOS DE LA CITA
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={labelStyle}>Especialidad *</label>
                        <select
                          required
                          value={form.especialidad}
                          onChange={(e) => setForm({ ...form, especialidad: e.target.value, medico: '' })}
                          style={{ ...inputStyle, cursor: 'pointer' }}
                        >
                          <option value="">Seleccionar...</option>
                          {specialtiesOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Médico</label>
                        <select
                          value={form.medico}
                          onChange={(e) => setForm({ ...form, medico: e.target.value })}
                          disabled={!form.especialidad}
                          style={{ ...inputStyle, cursor: form.especialidad ? 'pointer' : 'not-allowed', opacity: form.especialidad ? 1 : 0.5 }}
                        >
                          <option value="">Sin preferencia</option>
                          {availableDoctors.map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: '14px' }}>
                      <label style={labelStyle}>Fecha Preferida</label>
                      <input
                        type="date"
                        value={form.fecha}
                        onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Motivo de Consulta</label>
                      <textarea
                        rows={3}
                        value={form.motivo}
                        onChange={(e) => setForm({ ...form, motivo: e.target.value })}
                        placeholder="Describe brevemente el motivo de tu consulta para que el médico pueda prepararse..."
                        style={{ ...inputStyle, resize: 'vertical' }}
                      />
                    </div>
                  </div>

                  {/* Insurance */}
                  <div>
                    <label style={labelStyle}>Mutua / Seguro Médico</label>
                    <select
                      value={form.mutua}
                      onChange={(e) => setForm({ ...form, mutua: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="">Seleccionar aseguradora...</option>
                      {insurances.map((ins) => (
                        <option key={ins} value={ins}>{ins}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: accent, color: white,
                      padding: '16px', borderRadius: '10px',
                      fontSize: '16px', fontWeight: 800, border: 'none', cursor: 'pointer',
                      boxShadow: `0 4px 20px ${accent}44`,
                    }}
                  >
                    Solicitar Cita →
                  </button>
                  <p style={{ color: text + '55', fontSize: '12px', textAlign: 'center', margin: '-8px 0 0' }}>
                    Recibirás confirmación en menos de 2 horas (en horario de atención)
                  </p>
                </form>
              )}
            </motion.div>

            {/* RIGHT: INFO */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 40 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              {/* How it works */}
              <div style={{ backgroundColor: white, borderRadius: '12px', padding: '24px', border: '1px solid #ddeeff' }}>
                <h3 style={{ color: text, fontSize: '16px', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: accent }}>ℹ</span> ¿Cómo funciona?
                </h3>
                {[
                  { step: '1', text: 'Rellena el formulario con tus datos y la especialidad deseada.' },
                  { step: '2', text: 'Te confirmamos día y hora por email y SMS en menos de 2 horas.' },
                  { step: '3', text: 'Acude a tu cita o conéctate si optaste por videoconsulta.' },
                ].map((s) => (
                  <div key={s.step} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
                    <span style={{
                      backgroundColor: accent, color: white,
                      width: '24px', height: '24px', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontWeight: 800, flexShrink: 0,
                    }}>
                      {s.step}
                    </span>
                    <p style={{ color: text + '88', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{s.text}</p>
                  </div>
                ))}
              </div>

              {/* Office hours */}
              <div style={{ backgroundColor: white, borderRadius: '12px', padding: '24px', border: '1px solid #ddeeff' }}>
                <h3 style={{ color: text, fontSize: '16px', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: accent }}>🕐</span> Horario de Atención
                </h3>
                {officeHours.map((h) => (
                  <div key={h.day} style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '10px 0',
                    borderBottom: '1px solid #f0f7ff',
                  }}>
                    <span style={{ color: text + '88', fontSize: '13px' }}>{h.day}</span>
                    <span style={{ color: text, fontSize: '13px', fontWeight: 700 }}>{h.hours}</span>
                  </div>
                ))}
              </div>

              {/* Insurance */}
              <div style={{ backgroundColor: white, borderRadius: '12px', padding: '24px', border: '1px solid #ddeeff' }}>
                <h3 style={{ color: text, fontSize: '16px', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: accent }}>🏥</span> Aseguradoras Aceptadas
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {insurances.slice(0, -1).map((ins) => (
                    <span key={ins} style={{
                      backgroundColor: lightBlue, color: accent,
                      fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px',
                    }}>
                      {ins}
                    </span>
                  ))}
                </div>
                <p style={{ color: text + '66', fontSize: '12px', marginTop: '12px' }}>
                  También aceptamos pago particular. Consultar tarifas.
                </p>
              </div>

              {/* Emergency */}
              <div style={{
                backgroundColor: '#dc2626', borderRadius: '12px', padding: '24px',
                border: '2px solid #dc2626',
              }}>
                <h3 style={{ color: white, fontSize: '16px', fontWeight: 800, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  🚨 Cita Urgente Disponible
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Para urgencias médicas o citas en el mismo día, llama directamente a nuestro número de urgencias. Disponible las 24 horas.
                </p>
                <a
                  href="tel:900000000"
                  style={{
                    display: 'inline-block', backgroundColor: white, color: '#dc2626',
                    padding: '10px 24px', borderRadius: '8px',
                    fontSize: '18px', fontWeight: 800, textDecoration: 'none',
                  }}
                >
                  900 XXX XXX
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

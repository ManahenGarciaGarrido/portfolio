'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#f0f7ff';
const accent = '#0055cc';
const text = '#1a2a3a';
const lightBlue = '#e0eeff';
const white = '#ffffff';
const darkBlue = '#003d99';

const stats = [
  { value: '20+', label: 'Años de Experiencia' },
  { value: '45.000+', label: 'Pacientes Atendidos' },
  { value: '25', label: 'Especialistas' },
  { value: '4', label: 'Centros Médicos' },
];

const specialties = [
  { icon: '❤', name: 'Cardiología', desc: 'Diagnóstico y tratamiento completo de enfermedades cardiovasculares. Técnicas de imagen cardíaca avanzadas.', href: '/demos/clinica/especialidades' },
  { icon: '✦', name: 'Dermatología', desc: 'Dermatología médica, estética y oncológica. Tratamiento de enfermedades de la piel, cabello y uñas.', href: '/demos/clinica/especialidades' },
  { icon: '◈', name: 'Traumatología', desc: 'Cirugía ortopédica y traumatológica. Especialistas en rodilla, cadera, hombro y columna vertebral.', href: '/demos/clinica/especialidades' },
  { icon: '★', name: 'Pediatría', desc: 'Atención médica integral para niños y adolescentes desde el nacimiento hasta los 18 años.', href: '/demos/clinica/especialidades' },
  { icon: '◉', name: 'Ginecología', desc: 'Ginecología y obstetricia. Seguimiento del embarazo, salud femenina y diagnóstico prenatal.', href: '/demos/clinica/especialidades' },
  { icon: '◆', name: 'Neurología', desc: 'Diagnóstico y tratamiento de enfermedades del sistema nervioso central y periférico.', href: '/demos/clinica/especialidades' },
];

const steps = [
  { num: '1', title: 'Solicita tu Cita', desc: 'Llámanos, escríbenos o rellena el formulario online. Disponible las 24 horas del día.' },
  { num: '2', title: 'Confirmación Inmediata', desc: 'Te confirmamos día, hora y médico asignado en menos de 2 horas. Recordatorio automático por SMS.' },
  { num: '3', title: 'Consulta con tu Especialista', desc: 'Visita presencial en cualquiera de nuestros 4 centros o videoconsulta desde casa.' },
];

const doctors = [
  { id: 1, seed: 'medical1', name: 'Dr. Carlos Mendoza', specialty: 'Cardiólogo Jefe' },
  { id: 2, seed: 'medical2', name: 'Dra. Ana García', specialty: 'Dermatóloga' },
  { id: 3, seed: 'medical3', name: 'Dr. Pedro Sánchez', specialty: 'Traumatólogo' },
  { id: 4, seed: 'medical4', name: 'Dra. Laura Martín', specialty: 'Ginecóloga' },
];

const insurances = ['ADESLAS', 'MAPFRE', 'SANITAS', 'ASISA', 'DKV', 'CIGNA', 'AXA SALUD', 'GENERALI'];

function SpecialtyCard({ sp, delay }: { sp: typeof specialties[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      style={{
        backgroundColor: white,
        borderRadius: '12px',
        padding: '28px',
        boxShadow: '0 2px 16px rgba(0,85,204,0.06)',
        border: '1px solid #ddeeff',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,85,204,0.12)' }}
    >
      <div style={{
        width: '52px', height: '52px', borderRadius: '12px',
        backgroundColor: lightBlue, display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '22px', marginBottom: '16px',
      }}>
        {sp.icon}
      </div>
      <h3 style={{ color: text, fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>
        {sp.name}
      </h3>
      <p style={{ color: text + '99', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
        {sp.desc}
      </p>
      <Link
        href={sp.href}
        style={{ color: accent, fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
      >
        Más información →
      </Link>
    </motion.div>
  );
}

export default function ClinicaHome() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div style={{ backgroundColor: bg, color: text, fontFamily: '"Inter", "Helvetica Neue", sans-serif' }}>

      {/* HERO */}
      <section className="r-hero-split" style={{ minHeight: 'max(88svh, 500px)', backgroundColor: white }}>
        {/* LEFT */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: 'clamp(40px, 6vw, 80px)',
            backgroundColor: lightBlue,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: accent + '15', borderRadius: '20px',
              padding: '6px 14px', marginBottom: '24px', alignSelf: 'flex-start',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'block' }} />
            <span style={{ color: accent, fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em' }}>
              ACEPTAMOS CITAS ONLINE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              color: text,
              fontSize: 'clamp(30px, 4vw, 54px)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '20px',
            }}
          >
            Tu salud en las<br />
            <span style={{ color: accent }}>mejores manos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ color: text + 'bb', fontSize: 'clamp(14px, 2.5vw, 17px)', lineHeight: 1.8, marginBottom: '28px', maxWidth: '440px' }}
          >
            Atención médica de excelencia con más de 20 años de experiencia. 25 especialistas, 4 centros en Madrid y tecnología diagnóstica de última generación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
          >
            <Link
              href="/demos/clinica/cita"
              style={{
                backgroundColor: accent, color: white,
                padding: '15px 32px', borderRadius: '8px',
                fontSize: '15px', fontWeight: 700, textDecoration: 'none',
                boxShadow: `0 4px 20px ${accent}44`,
              }}
            >
              Pedir Cita
            </Link>
            <Link
              href="/demos/clinica/especialidades"
              style={{
                backgroundColor: 'transparent', color: accent,
                padding: '15px 32px', borderRadius: '8px',
                fontSize: '15px', fontWeight: 600, textDecoration: 'none',
                border: `2px solid ${accent}33`,
              }}
            >
              Ver Especialidades
            </Link>
          </motion.div>

          {/* Mini trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ display: 'flex', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}
          >
            {['ISO 9001 Certificada', 'Acreditación JCI', 'Premio Sanidad 2023'].map((b) => (
              <span key={b} style={{ color: text + '66', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#22c55e' }}>✓</span> {b}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Doctor image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: 'hidden', minHeight: 'clamp(300px, 40vh, 500px)' }}
        >
          <img
            src="https://picsum.photos/seed/doctor-smile/700/800"
            alt="Médico especialista Clínica Salud+"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section style={{ backgroundColor: accent, padding: '0' }}>
        <div className="r-container">
          <div className="r-stats" style={{ padding: '0' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: 'clamp(20px, 4vw, 36px) clamp(12px, 3vw, 24px)' }}
              >
                <p style={{ color: white, fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, margin: '0 0 6px', lineHeight: 1 }}>
                  {s.value}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: 500, margin: 0 }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <span style={{ color: accent, fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
              NUESTRAS ESPECIALIDADES
            </span>
            <h2 style={{ color: text, fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, margin: '0 0 16px' }}>
              Atención Médica Especializada
            </h2>
            <p style={{ color: text + '88', fontSize: '16px', maxWidth: '520px', margin: '0 auto' }}>
              Contamos con especialistas de primer nivel en las áreas médicas más demandadas, con equipamiento diagnóstico de última generación.
            </p>
          </motion.div>

          <div className="r-grid-3">
            {specialties.map((sp, i) => (
              <SpecialtyCard key={sp.name} sp={sp} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="r-section" style={{ backgroundColor: lightBlue }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <span style={{ color: accent, fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
              ¿CÓMO FUNCIONA?
            </span>
            <h2 style={{ color: text, fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, margin: 0 }}>
              Pedir Cita es muy Sencillo
            </h2>
          </motion.div>

          <div className="r-grid-3">
            {steps.map((step, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-40px' });
              return (
                <motion.div
                  key={step.num}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  style={{ textAlign: 'center', padding: '36px 28px', backgroundColor: white, borderRadius: '12px' }}
                >
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    backgroundColor: accent, color: white, fontSize: '22px',
                    fontWeight: 800, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', margin: '0 auto 20px',
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{ color: text, fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: text + '88', fontSize: '14px', lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              href="/demos/clinica/cita"
              style={{
                backgroundColor: accent, color: white, padding: '16px 48px',
                borderRadius: '8px', fontSize: '16px', fontWeight: 700,
                textDecoration: 'none', display: 'inline-block',
                boxShadow: `0 4px 24px ${accent}44`,
              }}
            >
              Pedir Cita Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* DOCTORS PREVIEW */}
      <section className="r-section" style={{ backgroundColor: white }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}
          >
            <div>
              <span style={{ color: accent, fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>
                NUESTRO EQUIPO
              </span>
              <h2 style={{ color: text, fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, margin: 0 }}>
                Especialistas de Referencia
              </h2>
            </div>
            <Link
              href="/demos/clinica/equipo"
              style={{ color: accent, fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}
            >
              Ver todo el equipo →
            </Link>
          </motion.div>

          <div className="r-grid-4">
            {doctors.map((doc, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-40px' });
              return (
                <motion.div
                  key={doc.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: bg, border: '1px solid #ddeeff' }}
                >
                  <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                    <img
                      src={`https://picsum.photos/seed/${doc.seed}/300/400`}
                      alt={doc.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '16px 18px 20px' }}>
                    <h3 style={{ color: text, fontSize: '15px', fontWeight: 700, margin: '0 0 4px' }}>{doc.name}</h3>
                    <p style={{ color: accent, fontSize: '13px', fontWeight: 500, margin: 0 }}>{doc.specialty}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section style={{ backgroundColor: bg, padding: '48px 24px', borderTop: '1px solid #ddeeff', borderBottom: '1px solid #ddeeff' }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '32px' }}
          >
            <p style={{ color: text + '88', fontSize: '14px', fontWeight: 500, letterSpacing: '0.05em' }}>
              TRABAJAMOS CON LAS PRINCIPALES ASEGURADORAS
            </p>
          </motion.div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px 32px' }}>
            {insurances.map((ins, i) => (
              <motion.span
                key={ins}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                style={{
                  color: text + '66',
                  fontSize: '14px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  padding: '10px 20px',
                  border: '1px solid #ddeeff',
                  backgroundColor: white,
                  borderRadius: '6px',
                }}
              >
                {ins}
              </motion.span>
            ))}
          </div>
          <p style={{ color: text + '55', fontSize: '12px', textAlign: 'center', marginTop: '20px' }}>
            ¿No ves tu seguro? Consúltanos — aceptamos muchas más aseguradoras.
          </p>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section style={{ backgroundColor: '#dc2626', padding: '24px' }}>
        <div className="r-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '28px' }}>🚨</span>
              <div>
                <p style={{ color: white, fontSize: 'clamp(16px, 2.5vw, 22px)', fontWeight: 800, margin: 0 }}>
                  Urgencias disponibles 24/7
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', margin: 0 }}>
                  Atención inmediata en cualquiera de nuestros centros
                </p>
              </div>
            </div>
            <a
              href="tel:900000000"
              style={{
                backgroundColor: white, color: '#dc2626',
                padding: '14px 32px', borderRadius: '8px',
                fontSize: '20px', fontWeight: 800, textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              900 XXX XXX
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ backgroundColor: text, color: white }}>
        <div className="r-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', padding: '60px 0 40px' }}>
            <div>
              <h3 style={{ color: white, fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
                Clínica <span style={{ color: accent }}>Salud+</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.8 }}>
                Atención médica de excelencia<br />desde 2004 en Madrid.
              </p>
            </div>
            <div>
              <p style={{ color: accent, fontSize: '12px', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '14px' }}>ESPECIALIDADES</p>
              {['Cardiología', 'Dermatología', 'Traumatología', 'Pediatría', 'Ginecología', 'Neurología'].map((s) => (
                <Link key={s} href="/demos/clinica/especialidades" style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '13px', marginBottom: '6px', textDecoration: 'none' }}>
                  {s}
                </Link>
              ))}
            </div>
            <div>
              <p style={{ color: accent, fontSize: '12px', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '14px' }}>HORARIO</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 2 }}>
                Lun – Vie: 8:00 – 21:00h<br />
                Sábados: 9:00 – 15:00h<br />
                Urgencias: 24 horas
              </p>
            </div>
            <div>
              <p style={{ color: accent, fontSize: '12px', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '14px' }}>CONTACTO</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 2 }}>
                Calle Doctor Esquerdo, 55<br />
                28007 Madrid<br />
                <a href="tel:912000000" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>+34 912 000 000</a><br />
                <span style={{ color: '#dc2626', fontWeight: 700 }}>Urgencias: 900 XXX XXX</span>
              </p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', paddingBottom: '28px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
              © 2024 Clínica Salud+. Todos los derechos reservados.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
              Acreditación JCI · ISO 9001:2015
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

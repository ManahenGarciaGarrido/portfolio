'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#f0f7ff';
const accent = '#0055cc';
const text = '#1a2a3a';
const white = '#ffffff';
const lightBlue = '#e0eeff';

const medicalDirector = {
  name: 'Dr. Javier Morales Vázquez',
  title: 'Director Médico · Clínica Salud+',
  specialty: 'Medicina Interna y Gestión Sanitaria',
  experience: '28 años de experiencia',
  education: [
    'Licenciatura en Medicina y Cirugía — Universidad Complutense de Madrid',
    'Especialidad en Medicina Interna — Hospital Gregorio Marañón',
    'MBA en Gestión Sanitaria — ESADE Business School',
    'Fellow of the European Board of Internal Medicine',
  ],
  languages: ['Español', 'Inglés', 'Francés'],
  bio: 'El Dr. Morales lleva al frente de Clínica Salud+ desde su fundación en 2004. Con una visión centrada en el paciente y la innovación tecnológica, ha transformado la clínica en uno de los referentes de la medicina privada madrileña. Durante su trayectoria ha publicado más de 40 artículos en revistas médicas de impacto y ha sido reconocido como uno de los 100 mejores médicos de España por la revista Médicos y Pacientes en 2022 y 2023.',
  seed: 'doctor-director',
};

const doctors = [
  { id: 1, name: 'Dra. Carmen Ruiz', specialty: 'Cardióloga', years: 18, seed: 'doctor1', education: 'Universidad de Navarra', languages: ['Español', 'Inglés'] },
  { id: 2, name: 'Dr. Miguel Torres', specialty: 'Cardiólogo Intervencionista', years: 14, seed: 'doctor2', education: 'Hospital La Paz, Madrid', languages: ['Español', 'Inglés', 'Italiano'] },
  { id: 3, name: 'Dra. Sofía Blanco', specialty: 'Dermatóloga', years: 12, seed: 'doctor3', education: 'Hospital Ramón y Cajal', languages: ['Español', 'Inglés'] },
  { id: 4, name: 'Dr. Roberto Jiménez', specialty: 'Dermatólogo Oncológico', years: 16, seed: 'doctor4', education: 'MD Anderson Cancer Center (Houston)', languages: ['Español', 'Inglés'] },
  { id: 5, name: 'Dra. Isabel Fernández', specialty: 'Traumatóloga', years: 20, seed: 'doctor5', education: 'Hospital 12 de Octubre', languages: ['Español', 'Inglés', 'Alemán'] },
  { id: 6, name: 'Dr. Andrés Castro', specialty: 'Cirujano Ortopédico', years: 15, seed: 'doctor6', education: 'Hospital Clínic Barcelona', languages: ['Español', 'Inglés'] },
  { id: 7, name: 'Dra. Patricia Molina', specialty: 'Pediatra', years: 11, seed: 'doctor7', education: 'Hospital La Paz, Madrid', languages: ['Español', 'Inglés', 'Francés'] },
  { id: 8, name: 'Dr. Francisco Navarro', specialty: 'Ginecólogo', years: 22, seed: 'doctor8', education: 'Universidad Autónoma de Madrid', languages: ['Español', 'Inglés'] },
];

function DoctorCard({ doc, delay }: { doc: typeof doctors[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      style={{
        backgroundColor: white,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(0,85,204,0.06)',
        border: '1px solid #ddeeff',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={`https://picsum.photos/seed/${doc.seed}/280/350`}
          alt={doc.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(transparent, rgba(26,42,58,0.7))',
          padding: '20px 16px 12px',
        }}>
          <span style={{
            backgroundColor: accent, color: white,
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em',
            padding: '3px 8px', borderRadius: '4px',
          }}>
            {doc.years} años exp.
          </span>
        </div>
      </div>
      <div style={{ padding: '18px 18px 22px' }}>
        <h3 style={{ color: text, fontSize: '15px', fontWeight: 700, margin: '0 0 4px' }}>{doc.name}</h3>
        <p style={{ color: accent, fontSize: '13px', fontWeight: 600, margin: '0 0 10px' }}>{doc.specialty}</p>
        <p style={{ color: text + '88', fontSize: '12px', margin: '0 0 8px' }}>
          📚 {doc.education}
        </p>
        <p style={{ color: text + '77', fontSize: '12px', margin: 0 }}>
          🌐 {doc.languages.join(' · ')}
        </p>
      </div>
    </motion.div>
  );
}

export default function EquipoPage() {
  const dirRef = useRef(null);
  const dirInView = useInView(dirRef, { once: true, margin: '-80px' });

  return (
    <div style={{ backgroundColor: bg, color: text, fontFamily: '"Inter", "Helvetica Neue", sans-serif' }}>

      {/* HEADER */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', backgroundColor: white, borderBottom: '1px solid #ddeeff' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ color: accent, fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
            CLÍNICA SALUD+ · NUESTRO EQUIPO
          </span>
          <h1 style={{ color: text, fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginBottom: '20px' }}>
            Los Mejores Especialistas
          </h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: accent, borderRadius: '2px', margin: '0 auto 20px' }} />
          <p style={{ color: text + '88', fontSize: '17px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
            Nuestro equipo está formado por más de 25 especialistas, todos con formación en los mejores centros nacionales e internacionales y una dedicación inquebrantable a la salud de sus pacientes.
          </p>
        </motion.div>
      </section>

      {/* MEDICAL DIRECTOR FEATURED */}
      <section className="r-section" style={{ backgroundColor: lightBlue }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <span style={{ color: accent, fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em' }}>
              DIRECCIÓN MÉDICA
            </span>
          </motion.div>

          <div
            ref={dirRef}
            style={{
              backgroundColor: white,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,85,204,0.12)',
              border: '1px solid #ddeeff',
            }}
          >
            <div className="r-two-col" style={{ gap: 0 }}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={dirInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
                style={{ overflow: 'hidden', minHeight: '400px', maxHeight: '500px' }}
              >
                <img
                  src={`https://picsum.photos/seed/${medicalDirector.seed}/500/600`}
                  alt={medicalDirector.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={dirInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <span style={{
                  display: 'inline-block', backgroundColor: accent, color: white,
                  fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
                  padding: '5px 14px', borderRadius: '20px', marginBottom: '20px', alignSelf: 'flex-start',
                }}>
                  DIRECTOR MÉDICO
                </span>
                <h2 style={{ color: text, fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, margin: '0 0 6px' }}>
                  {medicalDirector.name}
                </h2>
                <p style={{ color: accent, fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>
                  {medicalDirector.specialty}
                </p>
                <p style={{ color: text + '66', fontSize: '13px', margin: '0 0 20px' }}>
                  {medicalDirector.experience}
                </p>
                <p style={{ color: text + 'aa', fontSize: '14px', lineHeight: 1.9, marginBottom: '24px' }}>
                  {medicalDirector.bio}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <p style={{ color: accent, fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '10px' }}>
                    FORMACIÓN
                  </p>
                  {medicalDirector.education.map((e) => (
                    <p key={e} style={{ color: text + '88', fontSize: '13px', margin: '0 0 4px', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                      <span style={{ color: accent, marginTop: '2px' }}>›</span> {e}
                    </p>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {medicalDirector.languages.map((l) => (
                    <span key={l} style={{
                      backgroundColor: lightBlue, color: accent,
                      fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '12px',
                    }}>
                      {l}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <span style={{ color: accent, fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
              ESPECIALISTAS
            </span>
            <h2 style={{ color: text, fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, margin: 0 }}>
              Nuestro Equipo Médico
            </h2>
          </motion.div>

          <div className="r-grid-4">
            {doctors.map((doc, i) => (
              <DoctorCard key={doc.id} doc={doc} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: white, padding: '60px 24px', borderTop: '1px solid #ddeeff' }}>
        <div className="r-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2px' }}>
            {[
              { value: '25+', label: 'Especialistas', icon: '👩‍⚕️' },
              { value: '6', label: 'Especialidades', icon: '🏥' },
              { value: '45.000+', label: 'Pacientes/año', icon: '❤️' },
              { value: '98%', label: 'Satisfacción', icon: '⭐' },
            ].map((s, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-30px' });
              return (
                <motion.div
                  key={s.label}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ textAlign: 'center', padding: '32px 16px', backgroundColor: lightBlue, borderRadius: '12px' }}
                >
                  <p style={{ fontSize: '32px', margin: '0 0 8px' }}>{s.icon}</p>
                  <p style={{ color: accent, fontSize: '36px', fontWeight: 800, margin: '0 0 4px', lineHeight: 1 }}>{s.value}</p>
                  <p style={{ color: text + '88', fontSize: '13px', fontWeight: 500, margin: 0 }}>{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECRUITMENT */}
      <section style={{ backgroundColor: accent, padding: '72px 24px' }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '60px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ color: white, fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, marginBottom: '20px' }}>
                Únete a nuestro equipo
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.9, marginBottom: '16px' }}>
                En Clínica Salud+ buscamos constantemente a los mejores profesionales de la medicina para seguir ofreciendo a nuestros pacientes la excelencia que nos define. Si eres un especialista comprometido con la calidad asistencial y la innovación, queremos conocerte.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.9, marginBottom: '32px' }}>
                Ofrecemos un entorno de trabajo estimulante, con tecnología de última generación, un equipo multidisciplinar de alto nivel y una cultura centrada en el desarrollo profesional continuo.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="mailto:rrhh@clinicasaludmas.es"
                  style={{
                    backgroundColor: white, color: accent,
                    padding: '14px 32px', borderRadius: '8px',
                    fontSize: '14px', fontWeight: 800, textDecoration: 'none',
                  }}
                >
                  Enviar CV
                </a>
                <Link
                  href="/demos/clinica/cita"
                  style={{
                    backgroundColor: 'transparent', color: white,
                    padding: '14px 32px', borderRadius: '8px',
                    fontSize: '14px', fontWeight: 700, textDecoration: 'none',
                    border: '2px solid rgba(255,255,255,0.4)',
                  }}
                >
                  Ver vacantes
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div style={{ backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '12px', padding: '28px' }}>
                <p style={{ color: white, fontSize: '15px', fontWeight: 700, marginBottom: '20px' }}>
                  ¿Por qué elegir Clínica Salud+?
                </p>
                {[
                  'Contrato estable con retribución competitiva',
                  'Tecnología diagnóstica de última generación',
                  'Formación continua y congresos financiados',
                  'Conciliación laboral y familiar',
                  'Seguro médico privado para el profesional y familia',
                  'Equipo multidisciplinar y ambiente colaborativo',
                ].map((b) => (
                  <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ color: '#22c55e', marginTop: '2px', flexShrink: 0, fontWeight: 700 }}>✓</span>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>{b}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#f0f7ff';
const accent = '#0055cc';
const text = '#1a2a3a';
const white = '#ffffff';
const lightBlue = '#e0eeff';

const specialties = [
  {
    id: 1,
    seed: 'medical-spec1',
    name: 'Cardiología',
    icon: '❤',
    tagline: 'Cuidamos el motor de tu vida',
    desc1: 'Nuestro Servicio de Cardiología cuenta con un equipo de especialistas con más de 15 años de experiencia en diagnóstico y tratamiento de enfermedades cardiovasculares. Disponemos de la más avanzada tecnología en imagen cardíaca, incluyendo ecocardiografía 3D, resonancia magnética cardíaca y tomografía computarizada coronaria.',
    desc2: 'Nuestra unidad de cardiología intervencionista realiza procedimientos de alta complejidad en un moderno laboratorio de hemodinámica. Tratamos tanto patología coronaria como valvular, arritmias y cardiopatías congénitas del adulto.',
    services: ['Ecocardiografía transtorácica y transesofágica', 'Prueba de esfuerzo', 'Holter de 24/48 horas', 'MAPA (monitorización ambulatoria de presión arterial)', 'Cateterismo cardíaco', 'Implante de marcapasos y desfibriladores', 'Ablación de arritmias'],
    doctors: 4,
  },
  {
    id: 2,
    seed: 'medical-spec2',
    name: 'Dermatología',
    icon: '✦',
    tagline: 'Tu piel, nuestro cuidado',
    desc1: 'El Servicio de Dermatología de Clínica Salud+ ofrece atención dermatológica integral: dermatología médica para el diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas; dermatología oncológica con seguimiento de lunares y diagnóstico precoz del melanoma; y dermatología estética con los tratamientos más avanzados.',
    desc2: 'Nuestros dermatólogos utilizan dermatoscopia de alta resolución y sistemas de inteligencia artificial para la detección precoz del cáncer de piel. Realizamos más de 2.000 revisiones de lunares al año con una tasa de detección precoz del 98%.',
    services: ['Revisión integral de lunares (dermatoscopia)', 'Tratamiento de psoriasis y dermatitis atópica', 'Cirugía dermatológica', 'Tratamiento del acné y rosácea', 'Láser CO2 y Nd:YAG', 'Toxina botulínica y ácido hialurónico', 'Peeling químico y mesoterapia'],
    doctors: 5,
  },
  {
    id: 3,
    seed: 'medical-spec3',
    name: 'Traumatología',
    icon: '◈',
    tagline: 'En movimiento, sin dolor',
    desc1: 'El Servicio de Traumatología y Cirugía Ortopédica de Clínica Salud+ abarca el diagnóstico y tratamiento completo de lesiones y enfermedades del aparato locomotor. Contamos con unidades especializadas en patología de rodilla, cadera, hombro y columna vertebral, así como una reconocida Unidad de Pie y Tobillo.',
    desc2: 'Realizamos más de 600 intervenciones quirúrgicas al año, incluyendo cirugía artroscópica mínimamente invasiva, prótesis de rodilla y cadera, y cirugía de columna. La mayoría de nuestros procedimientos se realizan de forma ambulatoria o con estancia máxima de 24 horas.',
    services: ['Artroscopia de rodilla, hombro y cadera', 'Prótesis de rodilla y cadera', 'Cirugía de columna vertebral', 'Tratamiento de lesiones deportivas', 'Infiltraciones eco-guiadas', 'Plasma rico en plaquetas (PRP)', 'Ortopedia pediátrica'],
    doctors: 6,
  },
  {
    id: 4,
    seed: 'medical-spec4',
    name: 'Pediatría',
    icon: '★',
    tagline: 'La salud de los más pequeños',
    desc1: 'Nuestro Servicio de Pediatría ofrece atención médica integral a niños y adolescentes desde el nacimiento hasta los 18 años. Contamos con pediatras generalistas y subespecialistas en neonatología, neurología infantil, cardiología pediátrica, neumología infantil y endocrinología pediátrica.',
    desc2: 'Las consultas de pediatría están diseñadas para crear un ambiente amigable y tranquilizador para los niños. Trabajamos en estrecha colaboración con las familias para ofrecer una atención continuada y de calidad que acompañe el desarrollo del niño en cada etapa.',
    services: ['Revisiones del niño sano (0-18 años)', 'Calendario vacunal y vacunación especial', 'Urgencias pediátricas', 'Diagnóstico precoz de trastornos del desarrollo', 'Nutrición infantil', 'Alergología pediátrica', 'Psicología infantil y adolescente'],
    doctors: 4,
  },
  {
    id: 5,
    seed: 'medical-spec5',
    name: 'Ginecología',
    icon: '◉',
    tagline: 'Salud femenina en todas las etapas',
    desc1: 'El Servicio de Ginecología y Obstetricia de Clínica Salud+ acompaña a la mujer en todas las etapas de su vida, desde la adolescencia hasta la menopausia. Ofrecemos seguimiento del embarazo, diagnóstico prenatal, ginecología oncológica, reproducción asistida y una completa unidad de suelo pélvico.',
    desc2: 'Nuestros ginecólogos utilizan ecografía 4D para el seguimiento del embarazo y disponemos de una Unidad de Diagnóstico Prenatal con amniocentesis, biopsia corial y consulta genética. La Unidad de Patología Mamaria trabaja en coordinación con Radiología y Oncología para el diagnóstico precoz del cáncer de mama.',
    services: ['Seguimiento del embarazo y parto', 'Diagnóstico prenatal 4D', 'Citología y colposcopia', 'Diagnóstico y tratamiento del suelo pélvico', 'Reproducción asistida', 'Menopausia y climaterio', 'Mamografía y ecografía mamaria'],
    doctors: 5,
  },
  {
    id: 6,
    seed: 'medical-spec6',
    name: 'Neurología',
    icon: '◆',
    tagline: 'El sistema nervioso en las mejores manos',
    desc1: 'El Servicio de Neurología de Clínica Salud+ ofrece diagnóstico y tratamiento especializado de enfermedades del sistema nervioso central y periférico. Contamos con unidades dedicadas a cefaleas, epilepsia, enfermedad de Parkinson, esclerosis múltiple, demencias y enfermedades neuromusculares.',
    desc2: 'Disponemos de un completo laboratorio de neurofisiología con electroencefalografía (EEG), electromiografía (EMG), potenciales evocados y prueba de inclinación (tilt-test). Trabajamos en estrecha colaboración con Radiología para el estudio de neuroimagen avanzada.',
    services: ['Estudio de cefaleas y migraña', 'Electroencefalografía (EEG)', 'Electromiografía y velocidad de conducción', 'Diagnóstico y tratamiento de la epilepsia', 'Tratamiento de la enfermedad de Parkinson', 'Consulta de esclerosis múltiple', 'Estudio de trastornos del sueño'],
    doctors: 3,
  },
];

function SpecialtySection({ sp, index }: { sp: typeof specialties[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: white,
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,85,204,0.07)',
        border: '1px solid #ddeeff',
      }}
    >
      <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
        <img
          src={`https://picsum.photos/seed/${sp.seed}/700/400`}
          alt={sp.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(26,42,58,0.8) 100%)',
        }} />
        <div style={{ position: 'absolute', bottom: '24px', left: '28px' }}>
          <span style={{ fontSize: '28px' }}>{sp.icon}</span>
          <h2 style={{ color: white, fontSize: '28px', fontWeight: 800, margin: '4px 0 4px' }}>
            {sp.name}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontStyle: 'italic', margin: 0 }}>
            {sp.tagline}
          </p>
        </div>
        <div style={{
          position: 'absolute', top: '16px', right: '16px',
          backgroundColor: accent, color: white,
          padding: '6px 14px', borderRadius: '20px',
          fontSize: '12px', fontWeight: 700,
        }}>
          {sp.doctors} especialistas
        </div>
      </div>

      <div style={{ padding: '32px 32px 36px' }}>
        <p style={{ color: text + 'aa', fontSize: '15px', lineHeight: 1.9, marginBottom: '16px' }}>
          {sp.desc1}
        </p>
        <p style={{ color: text + 'aa', fontSize: '15px', lineHeight: 1.9, marginBottom: '28px' }}>
          {sp.desc2}
        </p>

        <div style={{ backgroundColor: bg, borderRadius: '10px', padding: '20px 24px', marginBottom: '28px' }}>
          <p style={{ color: accent, fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '14px' }}>
            SERVICIOS INCLUIDOS
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
            {sp.services.map((s) => (
              <li key={s} style={{ color: text + '99', fontSize: '13px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#22c55e', marginTop: '2px', flexShrink: 0 }}>✓</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/demos/clinica/cita"
          style={{
            display: 'inline-block',
            backgroundColor: accent, color: white,
            padding: '13px 28px', borderRadius: '8px',
            fontSize: '14px', fontWeight: 700, textDecoration: 'none',
            boxShadow: `0 4px 16px ${accent}33`,
          }}
        >
          Pedir Cita en {sp.name}
        </Link>
      </div>
    </motion.div>
  );
}

export default function EspecialidadesPage() {
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
            CLÍNICA SALUD+ · ESPECIALIDADES MÉDICAS
          </span>
          <h1 style={{ color: text, fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginBottom: '20px' }}>
            Nuestras Especialidades
          </h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: accent, borderRadius: '2px', margin: '0 auto 20px' }} />
          <p style={{ color: text + '88', fontSize: '17px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
            Contamos con 25 especialistas de primer nivel distribuidos en 6 áreas de excelencia. Todos con formación nacional e internacional y una vocación inquebrantable de servicio al paciente.
          </p>
        </motion.div>

        {/* Quick navigation pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '36px' }}>
          {specialties.map((sp) => (
            <a
              key={sp.id}
              href={`#esp-${sp.id}`}
              style={{
                backgroundColor: lightBlue, color: accent,
                padding: '8px 18px', borderRadius: '20px',
                fontSize: '13px', fontWeight: 600, textDecoration: 'none',
                border: `1px solid ${accent}22`,
              }}
            >
              {sp.icon} {sp.name}
            </a>
          ))}
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="r-section">
        <div className="r-container">
          <div className="r-grid-2" style={{ gap: '32px' }}>
            {specialties.map((sp, i) => (
              <div key={sp.id} id={`esp-${sp.id}`}>
                <SpecialtySection sp={sp} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ backgroundColor: accent, padding: '72px 24px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ color: white, fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 800, marginBottom: '16px' }}>
            ¿No encuentras tu especialidad?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Contáctanos y te orientamos hacia el especialista más adecuado para tu caso. Nuestro equipo de atención al paciente está disponible de lunes a sábado.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/demos/clinica/cita"
              style={{
                backgroundColor: white, color: accent,
                padding: '15px 36px', borderRadius: '8px',
                fontSize: '15px', fontWeight: 800, textDecoration: 'none',
              }}
            >
              Pedir Cita
            </Link>
            <a
              href="tel:912000000"
              style={{
                backgroundColor: 'transparent', color: white,
                padding: '15px 36px', borderRadius: '8px',
                fontSize: '15px', fontWeight: 700, textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.5)',
              }}
            >
              Llamar ahora
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

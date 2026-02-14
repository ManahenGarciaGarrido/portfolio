'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CREAM = '#fff9f0';
const LAVENDER = '#c9a0c9';
const DEEP = '#8b5a8b';
const LIGHT_LAVENDER = '#f0e6f0';

const THERAPISTS = [
  {
    seed: 'therapist1',
    name: 'Elena Montoya',
    specialty: 'Masajes Terapéuticos',
    years: 12,
    bio: 'Especialista en técnicas orientales y masaje ayurvédico. Elena formó su técnica en Bali y Tailandia, y hoy trae esa sabiduría milenaria a cada sesión.',
    instagram: '@elena.celestial',
  },
  {
    seed: 'therapist2',
    name: 'Sofía Reyes',
    specialty: 'Tratamientos Faciales',
    years: 8,
    bio: 'Estética avanzada certificada con especialización en microdermoabrasión y mesoterapia. Sofía ha transformado la piel de más de 2.000 clientas.',
    instagram: '@sofia.skincare',
  },
  {
    seed: 'therapist3',
    name: 'Carmen Vidal',
    specialty: 'Rituales y Envolturas',
    years: 15,
    bio: 'Pionera en rituales holísticos en España. Carmen diseña cada experiencia como un viaje sensorial único, combinando aromaterapia y técnicas corporales.',
    instagram: '@carmen.ritual',
  },
  {
    seed: 'therapist4',
    name: 'Laura Jiménez',
    specialty: 'Piedras y Energía',
    years: 6,
    bio: 'Terapeuta certificada en geotermia y cristaloterapia. Su enfoque energético equilibra cuerpo y mente de una forma que nuestras clientas describen como transformadora.',
    instagram: '@laura.crystals',
  },
  {
    seed: 'therapist5',
    name: 'Ana Castillo',
    specialty: 'Masaje Deportivo',
    years: 10,
    bio: 'Fisioterapeuta y masajista deportiva que trabaja con deportistas de élite y personas activas. Su precisión técnica y conocimiento anatómico la convierten en una referencia.',
    instagram: '@ana.sportsmassage',
  },
  {
    seed: 'therapist6',
    name: 'Isabel Ramos',
    specialty: 'Rituales de Pareja',
    years: 9,
    bio: 'Especialista en crear experiencias memorables para parejas. Isabel es maestra en sincronizar energías y crear momentos únicos de conexión en nuestra sala privada.',
    instagram: '@isabel.couples',
  },
];

function TherapistCard({ therapist, index }: { therapist: typeof THERAPISTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.15, duration: 0.7 }}
      style={{ background: '#fff', overflow: 'hidden', boxShadow: '0 4px 25px rgba(139,90,139,0.07)', border: `1px solid ${LIGHT_LAVENDER}` }}
    >
      {/* Photo */}
      <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={`https://picsum.photos/seed/${therapist.seed}/400/500`}
          alt={therapist.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to top, rgba(139,90,139,0.7) 0%, transparent 100%)',
          padding: '1.5rem 1rem 1rem',
        }}>
          <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.65rem', letterSpacing: '0.15em', fontWeight: 700 }}>
            {therapist.years} AÑOS DE EXPERIENCIA
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ marginBottom: '0.25rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: DEEP, marginBottom: '0.2rem' }}>{therapist.name}</h3>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: LAVENDER, letterSpacing: '0.1em' }}>{therapist.specialty}</div>
        </div>
        <div style={{ width: '30px', height: '1px', background: `${LAVENDER}66`, margin: '0.75rem 0' }} />
        <p style={{ color: '#999', fontSize: '0.83rem', lineHeight: 1.65, marginBottom: '1rem' }}>{therapist.bio}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ color: LAVENDER, fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            {therapist.instagram}
          </a>
          <div style={{ background: LIGHT_LAVENDER, color: DEEP, fontSize: '0.66rem', fontWeight: 700, padding: '0.25rem 0.6rem' }}>
            {therapist.years} años
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EquipoPage() {
  return (
    <main style={{ background: CREAM, color: DEEP, minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ padding: '5rem 4rem 3rem', textAlign: 'center', borderBottom: `1px solid ${LAVENDER}33`, background: `linear-gradient(180deg, ${LIGHT_LAVENDER} 0%, ${CREAM} 100%)` }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.35em', color: LAVENDER, marginBottom: '0.75rem', fontWeight: 700 }}>CONOCE AL EQUIPO</div>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 300, fontStyle: 'italic', color: DEEP, marginBottom: '1rem', lineHeight: 1.1 }}>
            Nuestro Equipo de<br />Especialistas
          </h1>
          <div style={{ width: '50px', height: '1px', background: LAVENDER, margin: '0 auto 1.5rem' }} />
          <p style={{ color: '#b090b0', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Seis profesionales apasionadas por el bienestar, cada una con una especialidad única y una vocación genuina por transformar vidas a través del cuidado consciente.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section style={{ padding: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
          {THERAPISTS.map((therapist, i) => (
            <TherapistCard key={therapist.seed} therapist={therapist} index={i} />
          ))}
        </div>
      </section>

      {/* Certifications Bar */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ padding: '3rem 4rem', background: LIGHT_LAVENDER, borderTop: `1px solid ${LAVENDER}33`, borderBottom: `1px solid ${LAVENDER}33` }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: LAVENDER, marginBottom: '1.5rem', fontWeight: 700 }}>CERTIFICACIONES Y FORMACIÓN</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {[
              'ITEC Internacional',
              'CIDESCO Mundial',
              'CIBTAC Europa',
              'VDÄA Alemania',
              'FHT Reino Unido',
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: `${LAVENDER}22`, border: `1px solid ${LAVENDER}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', fontSize: '1.2rem' }}>🏅</div>
                <div style={{ fontSize: '0.72rem', color: DEEP, fontWeight: 600 }}>{cert}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/spa-team/1200/500"
          alt="Filosofía del equipo"
          style={{ width: '100%', height: '450px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(139,90,139,0.85) 0%, rgba(201,160,201,0.6) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '700px' }}
          >
            <div style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: '0.5rem' }}>"</div>
            <blockquote style={{ color: '#fff', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Creemos que el bienestar verdadero nace de la conexión entre el cuerpo, la mente y el alma. Cada tratamiento que ofrecemos es una oportunidad de transformación profunda.
            </blockquote>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>— EL EQUIPO CELESTIAL SPA</div>
          </motion.div>
        </div>
      </section>

      {/* Join section */}
      <section style={{ padding: '4rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, fontStyle: 'italic', color: DEEP, marginBottom: '0.75rem' }}>
            ¿Quieres formar parte de nuestro equipo?
          </h2>
          <p style={{ color: '#b090b0', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem', lineHeight: 1.6, fontSize: '0.9rem' }}>
            Buscamos profesionales apasionadas por el bienestar con certificaciones reconocidas y vocación de servicio.
          </p>
          <a href="mailto:talento@celestialspa.es" style={{
            border: `1.5px solid ${LAVENDER}`, color: DEEP, padding: '0.85rem 2.5rem',
            fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.15em',
            textDecoration: 'none', display: 'inline-block',
          }}>
            ENVIAR CV
          </a>
        </motion.div>
      </section>

    </main>
  );
}

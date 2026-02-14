'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const GOLD = '#b8860b';
const WHITE = '#ffffff';
const BLACK = '#000000';

const SERVICES = [
  {
    title: 'SESIÓN RETRATO',
    image: 'https://picsum.photos/seed/portrait-session/800/500',
    price: '€200',
    duration: '2 horas',
    description: 'Una sesión íntima y personalizada pensada para capturar tu esencia. Perfecta para fotos de perfil, book personal o regalar a alguien especial.',
    includes: [
      '2 horas de sesión en estudio o exterior',
      '30 fotografías editadas en alta resolución',
      'Galería privada online por 30 días',
      'Selección conjunta de poses y escenarios',
      '5 retoques premium incluidos',
    ],
    popular: false,
  },
  {
    title: 'BODA COMPLETA',
    image: 'https://picsum.photos/seed/wedding-photo/800/500',
    price: '€900',
    duration: '10 horas',
    description: 'Cobertura completa de tu día más especial. Desde los preparativos hasta el baile final, cada momento capturado con sensibilidad y arte.',
    includes: [
      'Cobertura completa de 10 horas',
      'Dos fotógrafos profesionales',
      '500+ fotografías editadas',
      'Álbum físico 30x30 de tapa dura',
      'Galería privada online de por vida',
      'Sesión pre-boda incluida (1 hora)',
      'Entrega en 6 semanas',
    ],
    popular: true,
  },
  {
    title: 'CORPORATIVO',
    image: 'https://picsum.photos/seed/corporate-photo/800/500',
    price: '€400',
    duration: '4 horas',
    description: 'Fotografía corporativa que transmite la identidad y los valores de tu empresa. Retratos de equipo, instalaciones y eventos de empresa.',
    includes: [
      '4 horas de sesión en tus instalaciones',
      '60 fotografías editadas',
      'Retratos individuales de todo el equipo',
      'Fotos de producto o espacio de trabajo',
      'Licencia comercial completa incluida',
    ],
    popular: false,
  },
];

const STEPS = [
  { icon: '📩', title: 'Consulta Inicial', desc: 'Cuéntame tu proyecto y tus necesidades. Respondo en menos de 24 horas con disponibilidad y opciones.' },
  { icon: '📅', title: 'Planificación', desc: 'Acordamos fecha, localizaciones y todos los detalles para que tu sesión sea perfecta.' },
  { icon: '📸', title: 'La Sesión', desc: 'Me encargo de todo para que te sientas cómodo y el resultado supere tus expectativas.' },
  { icon: '✨', title: 'Entrega Final', desc: 'Recibes tu galería privada con todas las imágenes editadas en alta resolución.' },
];

const TESTIMONIALS = [
  {
    name: 'Lucía Fernández',
    role: 'Novia — Boda 2024',
    avatar: 'https://picsum.photos/seed/client1/100/100',
    quote: 'Alejandro captó la magia de nuestro día de una forma que nunca imaginamos. Cada foto es una obra de arte que atesoramos para siempre. Totalmente recomendable.',
    stars: 5,
  },
  {
    name: 'Carlos Méndez',
    role: 'CEO — Empresa Tecnológica',
    avatar: 'https://picsum.photos/seed/client2/100/100',
    quote: 'Las fotos corporativas transformaron completamente la imagen de nuestra empresa. Profesionalidad absoluta y resultados que superaron todas nuestras expectativas.',
    stars: 5,
  },
  {
    name: 'Sara Gómez',
    role: 'Modelo — Book Personal',
    avatar: 'https://picsum.photos/seed/client3/100/100',
    quote: 'Nunca me había sentido tan cómoda delante de una cámara. Alejandro sabe exactamente cómo sacar lo mejor de ti. Mi book quedó espectacular.',
    stars: 5,
  },
];

const FAQS = [
  { q: '¿Cuánto tiempo tardan en entregarse las fotos?', a: 'Los retratos y sesiones corporativas se entregan en 1-2 semanas. Las bodas tienen un plazo de 6 semanas para asegurar el máximo nivel de edición.' },
  { q: '¿Qué pasa si el tiempo no acompaña el día de la sesión?', a: 'Para sesiones en exterior siempre tenemos una fecha alternativa acordada de antemano. No hay coste adicional por reprogramar por causas meteorológicas.' },
  { q: '¿Se pueden ampliar las horas de cobertura?', a: 'Sí, todas las sesiones son ampliables. Las horas adicionales se facturan a €80/hora para sesiones de retrato y €120/hora para bodas.' },
  { q: '¿Las fotos incluyen retoque profesional?', a: 'Todas las fotos entregadas pasan por un proceso de selección y edición profesional. El paquete de boda incluye además 20 retoques premium con eliminación de imperfecciones.' },
  { q: '¿Se puede personalizar algún paquete?', a: 'Por supuesto. Todos los paquetes son completamente adaptables. Escríbeme y diseñamos juntos la sesión perfecta para ti.' },
];

export default function ServiciosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ background: BLACK, color: WHITE, minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ padding: 'clamp(2rem,5vw,4rem) clamp(1rem,4vw,4rem) 2rem', borderBottom: `1px solid ${GOLD}22` }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: GOLD, marginBottom: '0.75rem', fontWeight: 700 }}>TARIFAS Y SERVICIOS</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Paquetes Fotográficos
          </h1>
          <p style={{ color: '#888', maxWidth: '500px', lineHeight: 1.7 }}>
            Cada sesión es única. Estos son mis paquetes más populares, todos personalizables según tus necesidades.
          </p>
        </motion.div>
      </section>

      {/* Service Packages */}
      <section style={{ padding: 'clamp(2rem,5vw,4rem) clamp(1rem,4vw,4rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: 'clamp(2rem,5vw,4rem) clamp(1rem,4vw,4rem)', background: '#0a0a0a', borderTop: `1px solid ${GOLD}22`, borderBottom: `1px solid ${GOLD}22` }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: GOLD, marginBottom: '0.75rem', fontWeight: 700 }}>CÓMO FUNCIONA</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900 }}>Proceso de Trabajo</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{ textAlign: 'center', padding: '2rem 1rem' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{step.icon}</div>
              <div style={{ color: GOLD, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '0.5rem' }}>PASO {i + 1}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.75rem' }}>{step.title}</h3>
              <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.6 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: 'clamp(2rem,5vw,4rem) clamp(1rem,4vw,4rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: GOLD, marginBottom: '0.75rem', fontWeight: 700 }}>OPINIONES</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900 }}>Lo Que Dicen Mis Clientes</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              style={{ border: `1px solid ${GOLD}33`, padding: '2rem', background: '#0a0a0a' }}
            >
              <div style={{ color: GOLD, fontSize: '1.2rem', marginBottom: '1rem' }}>{'★'.repeat(t.stars)}</div>
              <p style={{ color: '#bbb', lineHeight: 1.7, fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>"{t.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src={t.avatar} alt={t.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${GOLD}55` }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{t.name}</div>
                  <div style={{ color: '#666', fontSize: '0.75rem' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(2rem,5vw,4rem) clamp(1rem,4vw,4rem)', background: '#0a0a0a', borderTop: `1px solid ${GOLD}22` }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: GOLD, marginBottom: '0.75rem', fontWeight: 700 }}>DUDAS FRECUENTES</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900 }}>Preguntas Frecuentes</h2>
        </motion.div>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{ borderBottom: `1px solid ${GOLD}22` }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', padding: '1.5rem 0', background: 'transparent', border: 'none',
                  color: WHITE, textAlign: 'left', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontWeight: 600, fontSize: '0.95rem',
                }}
              >
                <span>{faq.q}</span>
                <span style={{ color: GOLD, fontSize: '1.2rem', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{ paddingBottom: '1.5rem', color: '#888', lineHeight: 1.7, fontSize: '0.9rem' }}>{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(2rem,5vw,4rem) clamp(1rem,4vw,4rem)', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, marginBottom: '1rem' }}>¿Listo para crear algo extraordinario?</h2>
          <p style={{ color: '#888', marginBottom: '2rem' }}>Consulta disponibilidad sin compromiso</p>
          <Link href="/demos/fotografo/contacto" style={{
            background: GOLD, color: BLACK, padding: '1rem 3rem',
            fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.2em',
            textDecoration: 'none', display: 'inline-block',
          }}>
            SOLICITAR CONSULTA
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      style={{
        border: service.popular ? `2px solid ${GOLD}` : `1px solid ${GOLD}33`,
        position: 'relative', background: '#0a0a0a', overflow: 'hidden',
      }}
    >
      {service.popular && (
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem', zIndex: 2,
          background: GOLD, color: BLACK, fontSize: '0.65rem', fontWeight: 800,
          letterSpacing: '0.15em', padding: '0.3rem 0.75rem',
        }}>
          MÁS POPULAR
        </div>
      )}
      <div style={{ height: '220px', overflow: 'hidden' }}>
        <img
          src={service.image}
          alt={service.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{ padding: '2rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: GOLD, fontWeight: 700, marginBottom: '0.5rem' }}>{service.duration}</div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{service.title}</h3>
        <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{service.description}</p>
        <ul style={{ marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
          {service.includes.map((item, i) => (
            <li key={i} style={{ padding: '0.4rem 0', fontSize: '0.82rem', color: '#bbb', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', borderBottom: `1px solid #111` }}>
              <span style={{ color: GOLD, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: GOLD }}>{service.price}</div>
          <Link href="/demos/fotografo/contacto" style={{
            background: service.popular ? GOLD : 'transparent',
            border: `1px solid ${GOLD}`,
            color: service.popular ? BLACK : GOLD,
            padding: '0.7rem 1.5rem', fontWeight: 700,
            fontSize: '0.72rem', letterSpacing: '0.12em',
            textDecoration: 'none', display: 'inline-block',
          }}>
            RESERVAR
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import DemoNav from '@/components/demos/DemoNav';

const bg = '#0a0805';
const accent = '#c8a96e';
const text = '#f5ece0';
const textMuted = '#b8a898';
const cardBg = '#130f0a';

const rooms = [
  { id: 1, name: 'Suite Deluxe', price: '320', seed: 'room1', size: '45m²', desc: 'Elegancia clásica con vistas al jardín privado' },
  { id: 2, name: 'Suite Junior', price: '480', seed: 'room2', size: '65m²', desc: 'Amplitud y confort con terraza privada' },
  { id: 3, name: 'Suite Presidencial', price: '890', seed: 'room3', size: '120m²', desc: 'La cúspide del lujo andaluz en una sola estancia' },
];

const features = [
  { icon: '🌿', title: 'Jardín Privado', desc: 'Dos hectáreas de jardines históricos con naranjos centenarios' },
  { icon: '🍷', title: 'Restaurante Gourmet', desc: 'El Naranjo: cocina andaluza de autor con estrella Michelin' },
  { icon: '🛁', title: 'Spa Premium', desc: 'Tratamientos exclusivos con aceite de oliva virgen extra' },
  { icon: '🌟', title: 'Servicio 24h', desc: 'Concierge personal disponible las 24 horas del día' },
];

const testimonials = [
  {
    id: 1, seed: 'guest1', name: 'Isabel Martínez', origin: 'Madrid, España',
    text: 'Una experiencia que trasciende lo ordinario. El Palacio Verde captura la esencia del lujo andaluz de una forma que pocas propiedades del mundo logran. Volveremos sin duda.',
  },
  {
    id: 2, seed: 'guest2', name: 'James Harrington', origin: 'Londres, Reino Unido',
    text: 'Without a doubt the finest boutique hotel in southern Spain. The staff anticipate your every need, the cuisine is extraordinary, and the gardens are simply magical at dawn.',
  },
  {
    id: 3, seed: 'guest3', name: 'Charlotte Dubois', origin: 'París, Francia',
    text: 'Le Palacio Verde est une révélation. L\'architecture, le service, la gastronomie — tout est parfait. Je comprends maintenant pourquoi c\'est le secret le mieux gardé d\'Andalousie.',
  },
];

function RoomCard({ room, delay }: { room: typeof rooms[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: cardBg,
        border: `1px solid ${hovered ? accent : '#2a1f15'}`,
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '7/5' }}>
        <img
          src={`https://picsum.photos/seed/${room.seed}/700/500`}
          alt={room.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.7s ease',
          }}
        />
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: accent, color: bg,
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em',
          padding: '4px 10px',
        }}>
          {room.size}
        </div>
      </div>
      <div style={{ padding: '24px' }}>
        <h3 style={{ fontFamily: 'Georgia,serif', color: accent, fontSize: '20px', marginBottom: '8px' }}>{room.name}</h3>
        <p style={{ color: textMuted, fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>{room.desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ color: textMuted, fontSize: '12px' }}>Desde </span>
            <span style={{ color: accent, fontSize: '22px', fontWeight: 700 }}>{room.price}€</span>
            <span style={{ color: textMuted, fontSize: '12px' }}>/noche</span>
          </div>
          <Link
            href="/demos/hotel/habitaciones"
            style={{
              background: 'transparent', border: `1px solid ${accent}`,
              color: accent, padding: '8px 18px', fontSize: '13px',
              fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.2s',
            }}
          >
            Ver suite
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{
        background: cardBg,
        border: `1px solid #2a1f15`,
        padding: '32px',
      }}
    >
      <div style={{ color: accent, fontSize: '24px', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
      <p style={{ color: text, fontSize: '15px', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '24px' }}>
        "{t.text}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: `1px solid ${accent}44` }}>
          <img
            src={`https://picsum.photos/seed/${t.seed}/80/80`}
            alt={t.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div>
          <div style={{ color: text, fontWeight: 600, fontSize: '14px' }}>{t.name}</div>
          <div style={{ color: textMuted, fontSize: '12px' }}>{t.origin}</div>
        </div>
      </div>
    </motion.div>
  );
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ textAlign: 'center', minWidth: '60px' }}>
      <div style={{
        fontSize: '36px', fontWeight: 700, fontFamily: 'Georgia,serif',
        color: bg, lineHeight: 1,
      }}>{String(value).padStart(2, '0')}</div>
      <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: bg + 'aa', marginTop: '4px' }}>{label}</div>
    </div>
  );
}

export default function HotelHomePage() {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: '-80px' });
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: '-60px' });

  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 14, minutes: 32, seconds: 47 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main style={{ background: bg, color: text }}>
      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            src="https://picsum.photos/seed/hotel-facade/1400/900"
            alt="Palacio Verde fachada"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,5,0.65)' }} />
        </div>
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px', maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.25em' }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            style={{ color: accent, fontSize: '13px', letterSpacing: '0.25em', marginBottom: '24px', fontWeight: 600 }}
          >
            SEVILLA, ANDALUCÍA — DESDE 1874
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              fontFamily: 'Georgia,serif',
              fontSize: 'clamp(52px, 10vw, 96px)',
              fontWeight: 400,
              color: text,
              letterSpacing: '0.08em',
              lineHeight: 1,
              marginBottom: '20px',
            }}
          >
            PALACIO<br />VERDE
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ height: '1px', background: accent, width: '80px', margin: '0 auto 24px' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{
              fontFamily: 'Georgia,serif',
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              color: text + 'cc',
              fontStyle: 'italic',
              marginBottom: '40px',
              lineHeight: 1.5,
            }}
          >
            Lujo íntimo en el corazón de Andalucía
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              href="/demos/hotel/reservar"
              style={{
                background: accent, color: bg, padding: '14px 36px',
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em',
                textDecoration: 'none', display: 'inline-block',
              }}
            >
              RESERVAR AHORA
            </Link>
            <Link
              href="/demos/hotel/habitaciones"
              style={{
                background: 'transparent', border: `1px solid ${text}88`,
                color: text, padding: '14px 36px',
                fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em',
                textDecoration: 'none', display: 'inline-block',
              }}
            >
              VER HABITACIONES
            </Link>
          </motion.div>
        </div>
        <div style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            style={{ width: '1px', height: '40px', background: `linear-gradient(to bottom, transparent, ${accent})` }}
          />
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section ref={featuresRef} style={{ background: cardBg, padding: '60px 0', borderTop: `1px solid ${accent}22`, borderBottom: `1px solid ${accent}22` }}>
        <div className="r-container">
          <div className="r-grid-4" style={{ gap: '0' }}>
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{
                  textAlign: 'center',
                  padding: '32px 24px',
                  borderRight: i < features.length - 1 ? `1px solid ${accent}22` : 'none',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '14px' }}>{f.icon}</div>
                <h3 style={{ color: accent, fontFamily: 'Georgia,serif', fontSize: '16px', marginBottom: '10px', letterSpacing: '0.05em' }}>
                  {f.title}
                </h3>
                <p style={{ color: textMuted, fontSize: '13px', lineHeight: 1.7 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HABITACIONES PREVIEW */}
      <section className="r-section" style={{ background: bg }}>
        <div className="r-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '14px', fontWeight: 600 }}
            >
              ALOJAMIENTO
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(28px, 5vw, 48px)', color: text, fontWeight: 400, marginBottom: '16px' }}
            >
              Nuestras Suites
            </motion.h2>
            <div style={{ width: '60px', height: '1px', background: accent, margin: '0 auto' }} />
          </div>
          <div className="r-grid-3">
            {rooms.map((room, i) => (
              <RoomCard key={room.id} room={room} delay={i * 0.15} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              href="/demos/hotel/habitaciones"
              style={{
                color: accent, border: `1px solid ${accent}`,
                padding: '14px 40px', fontSize: '13px', fontWeight: 600,
                letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-block',
              }}
            >
              VER TODAS LAS HABITACIONES
            </Link>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section ref={storyRef} style={{ padding: '100px 0', background: cardBg }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '64px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9 }}
              style={{ position: 'relative' }}
            >
              <div style={{ aspectRatio: '6/7', overflow: 'hidden' }}>
                <img
                  src="https://picsum.photos/seed/hotel-interior/600/700"
                  alt="Interior del hotel"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{
                position: 'absolute', bottom: '-20px', right: '-20px',
                background: accent, padding: '24px 28px', textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Georgia,serif', fontSize: '36px', color: bg, fontWeight: 700, lineHeight: 1 }}>150</div>
                <div style={{ fontSize: '11px', color: bg + 'aa', letterSpacing: '0.1em', marginTop: '4px' }}>AÑOS DE HISTORIA</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '16px', fontWeight: 600 }}>
                NUESTRA HISTORIA
              </div>
              <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(26px, 4vw, 40px)', color: text, fontWeight: 400, marginBottom: '24px', lineHeight: 1.2 }}>
                Una historia de 150 años de elegancia andaluza
              </h2>
              <div style={{ width: '50px', height: '2px', background: accent, marginBottom: '28px' }} />
              <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.8, marginBottom: '18px' }}>
                Construido en 1874 por el Marqués de Aljarafe, el Palacio Verde ha sido testigo de coronaciones, revoluciones y celebraciones que han forjado la historia de Andalucía. Sus muros de piedra milenaria guardan secretos y memorias de un tiempo en que la hospitalidad era sinónimo de arte.
              </p>
              <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.8, marginBottom: '18px' }}>
                Tras una restauración de cinco años dirigida por el arquitecto Carlos Ferrer — respetando cada artesonado original, cada azulejo mudéjar, cada pieza de forja sevillana — hoy ofrecemos a nuestros huéspedes la experiencia de vivir dentro de una obra de arte viva.
              </p>
              <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.8, marginBottom: '32px' }}>
                Solo doce suites. Solo huéspedes que comprenden que el verdadero lujo no se mide en metros cuadrados, sino en la calidad de los momentos vividos.
              </p>
              <Link
                href="/demos/hotel/habitaciones"
                style={{ color: accent, fontSize: '13px', letterSpacing: '0.12em', fontWeight: 600, textDecoration: 'none', borderBottom: `1px solid ${accent}` }}
              >
                DESCUBRIR MÁS →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="r-section" style={{ background: bg }}>
        <div className="r-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '14px', fontWeight: 600 }}>
              OPINIONES
            </div>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(26px, 4vw, 40px)', color: text, fontWeight: 400 }}>
              Lo que dicen nuestros huéspedes
            </h2>
          </div>
          <div className="r-grid-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} t={t} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: accent, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '12px', letterSpacing: '0.2em', color: bg + 'aa', marginBottom: '12px', fontWeight: 600 }}>
            OFERTA LIMITADA
          </div>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(24px, 4vw, 40px)', color: bg, fontWeight: 400, marginBottom: '12px' }}>
            Reserva con 20% de descuento esta semana
          </h2>
          <p style={{ color: bg + 'bb', fontSize: '15px', marginBottom: '36px', lineHeight: 1.6 }}>
            Incluye desayuno para dos personas, traslado al aeropuerto y acceso ilimitado al spa.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
            <CountdownItem value={timeLeft.days} label="DÍAS" />
            <div style={{ color: bg + '66', fontSize: '32px', fontWeight: 300 }}>:</div>
            <CountdownItem value={timeLeft.hours} label="HORAS" />
            <div style={{ color: bg + '66', fontSize: '32px', fontWeight: 300 }}>:</div>
            <CountdownItem value={timeLeft.minutes} label="MIN" />
            <div style={{ color: bg + '66', fontSize: '32px', fontWeight: 300 }}>:</div>
            <CountdownItem value={timeLeft.seconds} label="SEG" />
          </div>
          <Link
            href="/demos/hotel/reservar"
            style={{
              background: bg, color: accent, padding: '16px 44px',
              fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em',
              textDecoration: 'none', display: 'inline-block',
            }}
          >
            RESERVAR CON DESCUENTO
          </Link>
          <p style={{ color: bg + '77', fontSize: '12px', marginTop: '16px' }}>
            *Oferta válida para estancias entre 2 y 7 noches. No acumulable con otras promociones.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="r-footer" style={{ background: '#060402', borderTop: `1px solid ${accent}22` }}>
        <div className="r-container">
          <div className="r-grid-3" style={{ paddingTop: '64px', paddingBottom: '48px' }}>
            <div>
              <h3 style={{ fontFamily: 'Georgia,serif', color: accent, fontSize: '22px', letterSpacing: '0.1em', marginBottom: '16px' }}>PALACIO VERDE</h3>
              <p style={{ color: textMuted, fontSize: '14px', lineHeight: 1.8 }}>
                Hotel boutique de lujo en el centro histórico de Sevilla. Doce suites únicas. Una experiencia irrepetible.
              </p>
            </div>
            <div>
              <h4 style={{ color: text, fontSize: '13px', letterSpacing: '0.15em', marginBottom: '16px', fontWeight: 600 }}>CONTACTO</h4>
              <div style={{ color: textMuted, fontSize: '14px', lineHeight: 2 }}>
                <div>Calle Sierpes 42, 41001 Sevilla</div>
                <div>+34 955 123 456</div>
                <div>reservas@palacioverde.es</div>
              </div>
            </div>
            <div>
              <h4 style={{ color: text, fontSize: '13px', letterSpacing: '0.15em', marginBottom: '16px', fontWeight: 600 }}>HORARIO RECEPCIÓN</h4>
              <div style={{ color: textMuted, fontSize: '14px', lineHeight: 2 }}>
                <div>Check-in: 15:00 — 22:00</div>
                <div>Check-out: hasta las 12:00</div>
                <div>Conserjería: 24 horas</div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${accent}18`, paddingTop: '24px', paddingBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: textMuted, fontSize: '12px' }}>© 2024 Palacio Verde. Todos los derechos reservados.</p>
            <p style={{ color: textMuted + '88', fontSize: '11px' }}>Demo creado por Manahen — manahen.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

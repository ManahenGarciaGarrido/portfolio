'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#05001a';
const accent = '#b44ef0';
const text = '#e8d5ff';
const textMuted = '#9a7fc0';
const cardBg = '#0c0526';
const cardBorder = '#1e0a4a';

const cocktails = [
  { id: 1, name: 'Eclipse Noir', price: '18€', ingredient: 'Mezcal • Violeta • Carbón', seed: 'cocktail1' },
  { id: 2, name: 'Neón Sour', price: '16€', ingredient: 'Gin • Yuzu • Clara', seed: 'cocktail2' },
  { id: 3, name: 'Dark Matter', price: '22€', ingredient: 'Whisky 18Y • Trufa • Humo', seed: 'cocktail3' },
  { id: 4, name: 'Violeta Nights', price: '17€', ingredient: 'Vodka • Lavanda • Bergamota', seed: 'cocktail4' },
  { id: 5, name: 'Última Hora', price: '20€', ingredient: 'Tequila Añejo • Mole • Mole', seed: 'cocktail5' },
  { id: 6, name: 'Purple Rain', price: '19€', ingredient: 'Gin • Mariposa • Limón', seed: 'cocktail6' },
];

const events = [
  {
    id: 1, seed: 'bar-event1',
    name: 'DJ Blackout Sessions',
    date: 'Viernes 22 Nov — 23:00h',
    desc: 'Una noche de techno oscuro y cócteles de edición limitada. DJ residente Marco Velvet cierra la noche con su famoso set de 3 horas.',
  },
  {
    id: 2, seed: 'bar-event2',
    name: 'Noche Art Déco',
    date: 'Sábado 30 Nov — 21:00h',
    desc: 'Fiesta temática años 20 con jazz en vivo, vestuario obligatorio art déco y menú de cócteles clásicos de la era Prohibition.',
  },
  {
    id: 3, seed: 'bar-event3',
    name: 'Cata Exclusiva: Gin Premium',
    date: 'Jueves 5 Dic — 20:30h',
    desc: 'Tour vertical de 8 gins premium con nuestro bartender jefe. Maridaje con snacks de alta cocina. Plazas limitadas a 20 personas.',
  },
];

const hours = [
  { day: 'Lunes — Miércoles', hours: '20:00 — 2:00' },
  { day: 'Jueves', hours: '20:00 — 3:00' },
  { day: 'Viernes — Sábado', hours: '20:00 — 4:00' },
  { day: 'Domingo', hours: '20:00 — 1:00' },
];

function CocktailCard({ c, delay }: { c: typeof cocktails[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: cardBg,
        border: `1px solid ${hovered ? accent : cardBorder}`,
        overflow: 'hidden',
        flexShrink: 0,
        width: '260px',
        transition: 'border-color 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', height: '320px' }}>
        <img
          src={`https://picsum.photos/seed/${c.seed}/400/500`}
          alt={c.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        />
        {hovered && (
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to top, ${accent}44 0%, transparent 60%)`,
          }} />
        )}
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ color: text, fontSize: '16px', fontWeight: 700, marginBottom: '6px' }}>{c.name}</h3>
        <p style={{ color: textMuted, fontSize: '12px', marginBottom: '14px' }}>{c.ingredient}</p>
        <div style={{ color: accent, fontSize: '18px', fontWeight: 700 }}>{c.price}</div>
      </div>
    </motion.div>
  );
}

function EventCard({ e, delay }: { e: typeof events[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: cardBg,
        border: `1px solid ${hovered ? accent : cardBorder}`,
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
        <img
          src={`https://picsum.photos/seed/${e.seed}/600/400`}
          alt={e.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,0,26,0.4)' }} />
      </div>
      <div style={{ padding: '24px' }}>
        <div style={{ color: accent, fontSize: '11px', letterSpacing: '0.15em', fontWeight: 600, marginBottom: '8px' }}>{e.date}</div>
        <h3 style={{ color: text, fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{e.name}</h3>
        <p style={{ color: textMuted, fontSize: '13px', lineHeight: 1.7, marginBottom: '20px' }}>{e.desc}</p>
        <Link
          href="/demos/cocktailbar/reservar"
          style={{
            display: 'inline-block',
            background: accent, color: '#fff',
            padding: '10px 22px', fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.08em', textDecoration: 'none',
            boxShadow: hovered ? `0 0 20px ${accent}66` : 'none',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          RESERVAR ENTRADA
        </Link>
      </div>
    </motion.div>
  );
}

export default function CocktailBarHomePage() {
  const atmosphereRef = useRef(null);
  const atmosphereInView = useInView(atmosphereRef, { once: true, margin: '-60px' });
  const eventsRef = useRef(null);
  const eventsInView = useInView(eventsRef, { once: true, margin: '-60px' });
  const hoursRef = useRef(null);
  const hoursInView = useInView(hoursRef, { once: true, margin: '-60px' });

  return (
    <main style={{ background: bg, color: text }}>
      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="https://picsum.photos/seed/cocktail-bar-hero/1400/900"
            alt="Noir Bar"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.2 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(5,0,26,0.9) 0%, rgba(5,0,26,0.6) 50%, rgba(180,78,240,0.15) 100%)` }} />
        </div>
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px', maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ color: accent, fontSize: '12px', letterSpacing: '0.3em', marginBottom: '24px', fontWeight: 600 }}
          >
            MADRID • EST. 2019
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{
              fontSize: 'clamp(64px, 14vw, 140px)',
              fontWeight: 900,
              letterSpacing: '0.05em',
              lineHeight: 0.9,
              marginBottom: '20px',
              color: text,
              textShadow: `0 0 30px ${accent}, 0 0 60px ${accent}44`,
            }}
          >
            NOIR<br />BAR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: textMuted, marginBottom: '12px', letterSpacing: '0.05em' }}
          >
            Madrid's Most Exclusive Cocktail Experience
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ fontSize: '14px', color: accent, marginBottom: '40px', letterSpacing: '0.15em', fontWeight: 600 }}
          >
            Abrimos 20:00 — 4:00
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              href="/demos/cocktailbar/reservar"
              style={{
                background: accent, color: '#fff',
                padding: '15px 40px', fontSize: '13px', fontWeight: 700,
                letterSpacing: '0.12em', textDecoration: 'none', display: 'inline-block',
                boxShadow: `0 0 30px ${accent}66`,
              }}
            >
              RESERVAR MESA
            </Link>
            <Link
              href="/demos/cocktailbar/carta"
              style={{
                background: 'transparent',
                border: `1px solid ${accent}66`,
                color: text, padding: '15px 40px',
                fontSize: '13px', fontWeight: 600,
                letterSpacing: '0.12em', textDecoration: 'none', display: 'inline-block',
              }}
            >
              VER CARTA
            </Link>
          </motion.div>
        </div>
        {/* Neon line bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '1px',
          background: `linear-gradient(to right, transparent, ${accent}88, transparent)`,
        }} />
      </section>

      {/* SIGNATURE COCKTAILS HORIZONTAL SCROLL */}
      <section style={{ padding: '80px 0', background: cardBg, borderBottom: `1px solid ${cardBorder}` }}>
        <div className="r-container" style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '10px', fontWeight: 600 }}>FIRMA</div>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: text }}>Cócteles de Autor</h2>
            </div>
            <Link href="/demos/cocktailbar/carta" style={{ color: accent, fontSize: '13px', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.08em' }}>
              VER CARTA COMPLETA →
            </Link>
          </div>
        </div>
        <div style={{
          display: 'flex', gap: '16px', overflowX: 'auto',
          paddingLeft: 'max(24px, calc((100vw - 1280px)/2))',
          paddingRight: '24px',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
        }}>
          {cocktails.map((c, i) => (
            <div key={c.id} style={{ scrollSnapAlign: 'start' }}>
              <CocktailCard c={c} delay={i * 0.1} />
            </div>
          ))}
        </div>
      </section>

      {/* ATMOSPHERE SECTION */}
      <section ref={atmosphereRef} style={{ padding: '100px 0', background: bg }}>
        <div className="r-container">
          <div className="r-two-col" style={{ gap: '64px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={atmosphereInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9 }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                <img
                  src="https://picsum.photos/seed/bar-interior/800/600"
                  alt="Interior Noir Bar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, transparent 60%, ${accent}22 100%)` }} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={atmosphereInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '16px', fontWeight: 600 }}>
                EL ESPACIO
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: text, marginBottom: '24px', lineHeight: 1.2 }}>
                El ambiente<br />lo es todo
              </h2>
              <div style={{ width: '50px', height: '2px', background: accent, marginBottom: '28px', boxShadow: `0 0 10px ${accent}` }} />
              <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.8, marginBottom: '18px' }}>
                Ubicado en un palacete del siglo XIX en el barrio de Chueca, Noir Bar es el resultado de tres años de diseño obsesivo. Cada rincón ha sido concebido para crear la atmósfera perfecta: oscura sin ser opresiva, íntima sin ser incómoda.
              </p>
              <p style={{ color: textMuted, fontSize: '15px', lineHeight: 1.8, marginBottom: '32px' }}>
                La barra principal, tallada en mármol negro de Bélgica, acoge a nuestros bartenders mientras elaboran cócteles que son auténticas obras de arte efímeras. La luz púrpura cenital crea sombras que danzan al ritmo de la música.
              </p>
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                {[
                  { award: 'Mejor Bar Cóctel Madrid 2023', by: 'Guía Cocktails de España' },
                  { award: 'Top 10 Bares España 2024', by: 'Drinks International' },
                ].map((a, i) => (
                  <div key={i} style={{ borderLeft: `2px solid ${accent}`, paddingLeft: '16px' }}>
                    <div style={{ color: text, fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>{a.award}</div>
                    <div style={{ color: textMuted, fontSize: '12px' }}>{a.by}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section ref={eventsRef} style={{ padding: '100px 0', background: cardBg }}>
        <div className="r-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '10px', fontWeight: 600 }}>AGENDA</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, color: text }}>Próximos Eventos</h2>
          </div>
          <div className="r-grid-3">
            {events.map((e, i) => (
              <EventCard key={e.id} e={e} delay={i * 0.15} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              href="/demos/cocktailbar/eventos"
              style={{
                border: `1px solid ${accent}`,
                color: accent, padding: '14px 40px',
                fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em',
                textDecoration: 'none', display: 'inline-block',
              }}
            >
              VER TODOS LOS EVENTOS
            </Link>
          </div>
        </div>
      </section>

      {/* HOURS + LOCATION */}
      <section ref={hoursRef} style={{ padding: '100px 0', background: bg }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hoursInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              background: cardBg,
              border: `1px solid ${accent}44`,
              padding: 'clamp(32px, 5vw, 64px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Neon corner effect */}
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: '120px', height: '120px',
              background: `radial-gradient(circle at 0 0, ${accent}22 0%, transparent 70%)`,
            }} />
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '180px', height: '180px',
              background: `radial-gradient(circle at 100% 100%, ${accent}18 0%, transparent 70%)`,
            }} />
            <div className="r-two-col" style={{ gap: '64px', position: 'relative' }}>
              <div>
                <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '24px', fontWeight: 600 }}>HORARIO</div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {hours.map((h, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${cardBorder}` }}>
                        <td style={{ padding: '14px 0', color: textMuted, fontSize: '14px' }}>{h.day}</td>
                        <td style={{ padding: '14px 0', color: text, fontSize: '14px', fontWeight: 600, textAlign: 'right' }}>{h.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ marginTop: '24px', padding: '16px', background: `${accent}11`, border: `1px solid ${accent}33` }}>
                  <p style={{ color: textMuted, fontSize: '13px' }}>
                    Para eventos privados y reservas de grupo, contacta con nosotros directamente.
                  </p>
                </div>
              </div>
              <div>
                <div style={{ color: accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '24px', fontWeight: 600 }}>UBICACIÓN</div>
                <div style={{ background: `${bg}`, border: `1px solid ${cardBorder}`, height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>📍</div>
                    <div style={{ color: textMuted, fontSize: '13px' }}>Calle Fuencarral 88</div>
                    <div style={{ color: textMuted, fontSize: '13px' }}>28004 Madrid</div>
                  </div>
                </div>
                <div style={{ color: textMuted, fontSize: '14px', lineHeight: 2 }}>
                  <div>Metro: Chueca (L5) — 2 min</div>
                  <div>Parking: C/ Hortaleza 70</div>
                  <div style={{ color: accent, fontWeight: 600 }}>+34 91 234 5678</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#020008', borderTop: `1px solid ${accent}22`, padding: '48px 0 24px' }}>
        <div className="r-container">
          <div className="r-flex-between" style={{ marginBottom: '32px', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '0.1em', color: text, textShadow: `0 0 20px ${accent}88`, marginBottom: '8px' }}>NOIR BAR</h3>
              <p style={{ color: textMuted, fontSize: '13px' }}>Madrid's most exclusive cocktail experience.</p>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              {['Instagram', 'TikTok', 'Twitter'].map((sn) => (
                <a
                  key={sn}
                  href="#"
                  style={{
                    color: textMuted, fontSize: '13px', textDecoration: 'none',
                    fontWeight: 600, letterSpacing: '0.05em',
                    transition: 'color 0.2s',
                  }}
                >
                  {sn}
                </a>
              ))}
            </div>
            <Link
              href="/demos/cocktailbar/reservar"
              style={{
                background: accent, color: '#fff',
                padding: '12px 28px', fontSize: '12px',
                fontWeight: 700, letterSpacing: '0.1em',
                textDecoration: 'none', display: 'inline-block',
                boxShadow: `0 0 20px ${accent}44`,
              }}
            >
              RESERVAR
            </Link>
          </div>
          <div style={{ borderTop: `1px solid ${cardBorder}`, paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <p style={{ color: textMuted, fontSize: '12px' }}>© 2024 Noir Bar. Todos los derechos reservados. Prohibida la venta de alcohol a menores.</p>
            <p style={{ color: textMuted + '66', fontSize: '11px' }}>Demo creado por Manahen — manahen.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

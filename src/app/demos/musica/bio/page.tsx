'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const pink = '#ff00cc'
const cyan = '#00d4ff'
const bg = '#080010'

const timeline = [
  { year: '2014', title: 'Los Comienzos', desc: 'Primeros sets en locales underground de Madrid. Residencia en el desaparecido Club Matrix donde forjó su estilo con sesiones semanales ante audiencias íntimas pero fieles.' },
  { year: '2015', title: 'Primera Gira Nacional', desc: 'Tour por 10 ciudades españolas. Actuaciones en Sala Apolo (Barcelona), Fabrik (Madrid) y Mondo (Madrid) consolidaron su reputación dentro de la escena nacional.' },
  { year: '2016', title: 'Debut Internacional', desc: 'Primera fecha en Alemania (Berghain) y debut en los Países Bajos. El set de 4 horas en Tresor Berlín fue grabado y distribuido digitalmente, alcanzando 500K reproducciones.' },
  { year: '2017', title: 'Lanzamiento del Primer EP', desc: 'Publicación de "Signal" EP en Ostgut Ton. Tres tracks de techno oscuro que definieron el sonido Bassline. Incluido en las "mejores publicaciones del año" por Resident Advisor.' },
  { year: '2018', title: 'Sonar y Grandes Festivales', desc: 'Debut en Sonar Festival Barcelona. Actuaciones en ADE Amsterdam, Loveland Festival y OFF Sonar. Más de 50 shows en 12 países durante este año de explosión.' },
  { year: '2019', title: 'Residencia en Ibiza', desc: 'Residencia de temporada completa en Amnesia Ibiza (domingos). La serie "Bassline presents..." trajo a artistas internacionales como invitados y se convirtió en uno de los eventos más esperados de la isla.' },
  { year: '2020–2021', title: 'Pandemia y Reinvención', desc: 'Durante el cierre de los clubs, Bassline se reinventó con sesiones de streaming que alcanzaron 2M de espectadores en directo. Producción del álbum "Void" en el estudio propio.' },
  { year: '2022', title: 'Álbum "Void"', desc: 'Primer álbum de larga duración. 12 tracks que fusionan techno, experimentación sonora y momentos de belleza cruda. Disco del año en DJ Mag España y Mixmag.' },
  { year: '2023–2024', title: 'World Tour', desc: 'Tour mundial con 80+ fechas en 20 países. Debut en Australia, Japón y Sudamérica. Colaboraciones con artistas como Charlotte de Witte, Amelie Lens y Objekt.' },
  { year: '2025', title: 'Nuevo Capítulo', desc: 'Lanzamiento de "Dark Matter Vol.1" y firma con Drumcode. Productora propia Bassline Records. Inicio de una fase más personal y experimental en la producción.' },
  { year: '2026', title: 'Presente', desc: 'Tour europeo de primavera. Residencia en Club XL Madrid. Trabajo en el segundo álbum "Resonance" previsto para finales de 2026. 250+ shows acumulados en 10 años de carrera.' },
]

const discography = [
  { year: '2017', title: 'Signal EP', label: 'Ostgut Ton', format: 'EP — 3 tracks', tracks: ['Signal', 'Collapse', 'Drift'] },
  { year: '2019', title: 'Ibiza Sessions Vol.1', label: 'Bassline Records', format: 'Compilation — 8 tracks', tracks: ['Opener', 'Deep Frequency', 'Aurora', 'Late Night', 'Foundation', 'Subterranean', 'Closing Ritual', 'Dawn'] },
  { year: '2021', title: 'Isolation Studies', label: 'Drumcode', format: 'EP — 4 tracks', tracks: ['Room 01', 'Room 02', 'Room 03 (feat. Nina)', 'Room 04 (Extended)'] },
  { year: '2022', title: 'VOID', label: 'Bassline Records', format: 'Album — 12 tracks', tracks: ['Intro', 'Void', 'Collapse', 'Signal Lost', 'Resonance', 'Dark Matter', 'Frequency', 'Subterranean', 'Aurora Rave', 'Neon Drift', 'Return', 'Outro'] },
  { year: '2025', title: 'Dark Matter Vol.1', label: 'Drumcode', format: 'EP — 4 tracks', tracks: ['Void (Original Mix)', 'Collapse (Club Mix)', 'Signal Lost (Dub Version)', 'Resonance (Peak Hour Edit)'] },
]

const pressItems = [
  { pub: 'DJ Mag España', title: 'Artista del Año 2022', quote: 'Bassline redefine el techno español con su álbum más personal y brutal.' },
  { pub: 'Resident Advisor', title: 'Recommended Artists 2023', quote: 'Un artista que une el rigor técnico con una sensibilidad musical raramente vista en el techno contemporáneo.' },
  { pub: 'Mixmag', title: 'Top 50 DJs 2024', quote: 'Del subterráneo madrileño al Berghain berlinés: la historia de una ascensión imparable.' },
  { pub: 'Boiler Room', title: 'Entrevista exclusiva 2023', quote: 'Su set de 3 horas en nuestra sesión barcelonesa batió todos los récords de visualizaciones.' },
  { pub: 'FACT Magazine', title: 'Best Albums of 2022', quote: 'VOID es el disco de techno más importante de la última década hecho por un artista español.' },
]

export default function BioPage() {
  return (
    <main style={{ background: bg, minHeight: 'max(100svh, 500px)', fontFamily: "'Segoe UI', system-ui, sans-serif", color: '#fff' }}>

      {/* PAGE HEADER */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'flex-end', padding: '3rem 1.5rem', overflow: 'hidden' }}>
        <img src="https://picsum.photos/seed/dj-full/800/600" alt="Bassline" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.3) saturate(1.2)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 20%, rgba(8,0,16,0.95) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,0,204,0.1) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ height: '2px', background: pink, width: '40px', marginBottom: '1.2rem' }} />
            <h1 style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: 0.9, textShadow: `0 0 60px rgba(255,0,204,0.3)` }}>
              BASS<span style={{ color: pink }}>LINE</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', marginTop: '1rem', letterSpacing: '0.1em' }}>DJ · Producer · Madrid</p>
          </motion.div>
        </div>
      </section>

      {/* BIO TEXT */}
      <section style={{ padding: 'clamp(2.5rem, 6vw, 5rem) 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="r-two-col" style={{ gap: '5rem', alignItems: 'flex-start' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: '#fff', marginBottom: '2rem' }}>
              <span style={{ color: pink }}>—</span> Biografía
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, fontSize: '1rem' }}>
                Bassline nació en los sótanos underground de Madrid en 2014, en una escena tan pequeña como intensa. Desde sus primeras sesiones semanales en el Club Matrix hasta llenar las salas más icónicas de Europa, el artista ha construido un universo sonoro que es inconfundiblemente suyo.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, fontSize: '1rem' }}>
                Influenciado profundamente por la austeridad sonora de Detroit, la brutalidad rítmica de Berlín y la psicodelia electrónica de Chicago, Bassline combina una técnica impecable con una sensibilidad musical que trasciende los géneros. Sus sets son experiencias totales: narrativas de sonido que comienzan en la oscuridad y concluyen en la luz, siempre manteniendo una tensión dramática que mantiene la pista de baile en constante expectativa.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, fontSize: '1rem' }}>
                Como productor, ha publicado en sellos como Ostgut Ton, Drumcode y su propio Bassline Records. Su álbum debut "VOID" (2022) fue recibido como uno de los trabajos más importantes del techno español de la última década, siendo incluido en múltiples listas de los mejores álbumes del año en medios internacionales como Resident Advisor, Mixmag y FACT Magazine.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, fontSize: '1rem' }}>
                Actualmente, Bassline mantiene una residencia mensual en Club XL Madrid, su base de operaciones desde donde lanza propuestas que llevan al límite los formatos del club. Cada residencia es un experimento diferente: a veces con visuales en directo, otras con artistas invitados o formatos extendidos de 8 horas que desafían los límites del cuerpo y la mente.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div style={{ background: 'rgba(255,0,204,0.05)', border: '1px solid rgba(255,0,204,0.2)', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.72rem', color: pink, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Datos del Artista</div>
              {[
                { label: 'Nombre Real', value: 'Confidencial' },
                { label: 'Ciudad', value: 'Madrid, España' },
                { label: 'Géneros', value: 'Techno, House, Deep, Experimental' },
                { label: 'Sello Principal', value: 'Drumcode / Bassline Records' },
                { label: 'Residencia', value: 'Club XL Madrid' },
                { label: 'Tempo Habitual', value: '128–142 BPM' },
                { label: 'Set habitual', value: '3-4 horas' },
                { label: 'Activo desde', value: '2014' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.65rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{item.label}</span>
                  <span style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 600 }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/demos/musica/booking" style={{ background: pink, color: '#fff', fontWeight: 800, fontSize: '0.82rem', padding: '0.75rem 1.75rem', borderRadius: '3px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-flex', alignItems: 'center', minHeight: '44px' }}>
                Booking
              </Link>
              <Link href="/demos/musica/mixes" style={{ background: 'transparent', color: '#fff', fontWeight: 700, fontSize: '0.82rem', padding: '0.75rem 1.75rem', borderRadius: '3px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', border: '1px solid rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', minHeight: '44px' }}>
                Ver Mixes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 1.5rem', background: '#0a0018', borderTop: '1px solid rgba(255,0,204,0.1)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ height: '2px', background: pink, width: '40px', margin: '0 auto 1.2rem' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', color: '#fff' }}>
              CARRERA <span style={{ color: pink }}>2014—2026</span>
            </h2>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '80px', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(180deg, transparent, rgba(255,0,204,0.3) 5%, rgba(255,0,204,0.3) 95%, transparent)', display: 'none' }} />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}
              >
                <div style={{ flexShrink: 0, width: '70px', textAlign: 'right' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 900, color: pink }}>{item.year}</span>
                </div>
                <div style={{ flexShrink: 0, width: '12px', height: '12px', borderRadius: '50%', background: pink, marginTop: '0.4rem', boxShadow: `0 0 10px ${pink}88` }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#fff', marginBottom: '0.4rem' }}>{item.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.75 }}>{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOGRAPHY */}
      <section style={{ padding: 'clamp(2.5rem, 6vw, 5rem) 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ height: '2px', background: pink, width: '40px', margin: '0 auto 1.2rem' }} />
          <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', color: '#fff' }}>
            DISCO<span style={{ color: pink }}>GRAFÍA</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {discography.map((disc, i) => (
            <motion.div
              key={disc.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '1.75rem 2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}
              whileHover={{ borderColor: 'rgba(255,0,204,0.3)', backgroundColor: 'rgba(255,0,204,0.04)' }}
            >
              <div style={{ flexShrink: 0, width: '60px', textAlign: 'center', paddingTop: '0.25rem' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: pink }}>{disc.year}</div>
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#fff', marginBottom: '0.25rem' }}>{disc.title}</div>
                <div style={{ fontSize: '0.78rem', color: cyan, fontWeight: 600, marginBottom: '0.25rem' }}>{disc.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{disc.format}</div>
              </div>
              <div style={{ flex: 2, minWidth: '200px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {disc.tracks.map((t, k) => (
                    <span key={k} style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.7rem', borderRadius: '2px' }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRESS */}
      <section style={{ padding: '4rem 1.5rem 5rem', background: '#0a0018', borderTop: '1px solid rgba(255,0,204,0.1)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ height: '2px', background: pink, width: '40px', margin: '0 auto 1.2rem' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', color: '#fff' }}>
              EN LA <span style={{ color: pink }}>PRENSA</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {pressItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ display: 'flex', gap: '2rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '6px', alignItems: 'flex-start', flexWrap: 'wrap' }}
                whileHover={{ borderColor: 'rgba(255,0,204,0.2)' }}
              >
                <div style={{ flexShrink: 0, width: '140px' }}>
                  <div style={{ fontWeight: 900, fontSize: '0.9rem', color: pink }}>{item.pub}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.25rem' }}>{item.title}</div>
                </div>
                <div style={{ flex: 1, fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', lineHeight: 1.7 }}>{item.quote}</div>
                <div style={{ flexShrink: 0 }}>
                  <button style={{ background: 'transparent', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.4rem 1rem', borderRadius: '3px', cursor: 'pointer', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', minHeight: '44px' }}>
                    Leer →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

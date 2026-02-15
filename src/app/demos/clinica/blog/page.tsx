'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#f0f7ff';
const accent = '#0055cc';
const text = '#1a2a3a';
const white = '#ffffff';
const lightBlue = '#e0eeff';

const categoryColors: Record<string, string> = {
  CARDIOLOGÍA: '#dc2626',
  DERMATOLOGÍA: '#9333ea',
  TRAUMATOLOGÍA: '#ea580c',
  PEDIATRÍA: '#16a34a',
  GINECOLOGÍA: '#db2777',
  NEUROLOGÍA: '#2563eb',
  BIENESTAR: '#0891b2',
  PREVENCIÓN: '#65a30d',
};

const featuredArticle = {
  id: 0,
  seed: 'health-blog-featured',
  category: 'PREVENCIÓN',
  title: 'Los 10 hábitos que transformarán tu salud cardiovascular este año',
  excerpt: 'La enfermedad cardiovascular es la principal causa de muerte en España. Sin embargo, más del 80% de los eventos cardiovasculares podrían prevenirse con cambios en el estilo de vida. Nuestros cardiólogos comparten los hábitos más efectivos respaldados por la evidencia científica más reciente.',
  date: '12 de febrero de 2025',
  author: 'Dr. Carlos Mendoza',
  authorSpecialty: 'Cardiólogo Jefe',
  readTime: '8 min de lectura',
};

const articles = [
  {
    id: 1,
    seed: 'health-blog1',
    category: 'CARDIOLOGÍA',
    title: 'Presión arterial alta: síntomas silenciosos y cómo controlarla',
    excerpt: 'La hipertensión afecta al 43% de los adultos españoles y la mayoría no lo sabe. Te explicamos por qué la llaman "el asesino silencioso" y qué puedes hacer ahora mismo.',
    date: '5 de febrero de 2025',
    author: 'Dra. Carmen Ruiz',
    readTime: '5 min',
  },
  {
    id: 2,
    seed: 'health-blog2',
    category: 'DERMATOLOGÍA',
    title: 'Cómo proteger tu piel del sol: la guía definitiva por tipo de piel',
    excerpt: 'No todos los protectores solares son iguales y no todos los fototipos necesitan la misma protección. Nuestra dermatóloga te explica cómo elegir el fotoprotector adecuado para ti.',
    date: '28 de enero de 2025',
    author: 'Dra. Sofía Blanco',
    readTime: '6 min',
  },
  {
    id: 3,
    seed: 'health-blog3',
    category: 'TRAUMATOLOGÍA',
    title: 'Dolor de rodilla: cuándo es normal y cuándo debes ir al médico',
    excerpt: 'El dolor de rodilla es una de las consultas más frecuentes en traumatología. Aprende a distinguir las causas leves de las que requieren atención especializada urgente.',
    date: '20 de enero de 2025',
    author: 'Dr. Pedro Sánchez',
    readTime: '7 min',
  },
  {
    id: 4,
    seed: 'health-blog4',
    category: 'PEDIATRÍA',
    title: 'Vacunación infantil: el calendario actualizado para 2025',
    excerpt: 'El calendario de vacunación ha incorporado nuevas vacunas este año. La Dra. Molina explica las novedades y por qué la vacunación sistemática sigue siendo uno de los avances médicos más importantes de la historia.',
    date: '15 de enero de 2025',
    author: 'Dra. Patricia Molina',
    readTime: '9 min',
  },
  {
    id: 5,
    seed: 'health-blog5',
    category: 'GINECOLOGÍA',
    title: 'Menopausia: los síntomas que no debes ignorar y cómo tratarlos',
    excerpt: 'La menopausia es una etapa natural, no una enfermedad. Sin embargo, algunos síntomas requieren atención médica. Te contamos cuáles son y qué opciones de tratamiento existen hoy en día.',
    date: '8 de enero de 2025',
    author: 'Dra. Laura Martín',
    readTime: '6 min',
  },
  {
    id: 6,
    seed: 'health-blog6',
    category: 'NEUROLOGÍA',
    title: 'Migraña: nuevos tratamientos que están cambiando la vida de los pacientes',
    excerpt: 'Los anticuerpos monoclonales anti-CGRP han revolucionado el tratamiento preventivo de la migraña crónica. El Dr. Blanco explica cómo funcionan y qué pacientes pueden beneficiarse.',
    date: '2 de enero de 2025',
    author: 'Dr. Jorge Blanco',
    readTime: '8 min',
  },
];

function ArticleCard({ article, delay }: { article: typeof articles[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const catColor = categoryColors[article.category] || accent;

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
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img
          src={`https://picsum.photos/seed/${article.seed}/600/400`}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <span style={{
          position: 'absolute', top: '16px', left: '16px',
          backgroundColor: catColor, color: white,
          fontSize: '10px', fontWeight: 800, letterSpacing: '0.1em',
          padding: '4px 10px', borderRadius: '4px',
        }}>
          {article.category}
        </span>
      </div>
      <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ color: text, fontSize: '16px', fontWeight: 700, marginBottom: '10px', lineHeight: 1.4, flex: 1 }}>
          {article.title}
        </h3>
        <p style={{ color: text + '88', fontSize: '13px', lineHeight: 1.7, marginBottom: '16px' }}>
          {article.excerpt}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #ddeeff', paddingTop: '14px', marginTop: 'auto' }}>
          <div>
            <p style={{ color: text, fontSize: '12px', fontWeight: 600, margin: 0 }}>{article.author}</p>
            <p style={{ color: text + '66', fontSize: '11px', margin: '2px 0 0' }}>{article.date}</p>
          </div>
          <span style={{ color: accent, fontSize: '12px', fontWeight: 600 }}>{article.readTime}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'CARDIOLOGÍA', 'DERMATOLOGÍA', 'TRAUMATOLOGÍA', 'PEDIATRÍA', 'GINECOLOGÍA', 'NEUROLOGÍA'];

  const filteredArticles = activeCategory === 'Todos'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <div style={{ backgroundColor: bg, color: text, fontFamily: '"Inter", "Helvetica Neue", sans-serif' }}>

      {/* HEADER */}
      <section style={{ padding: '72px 24px 52px', textAlign: 'center', backgroundColor: white, borderBottom: '1px solid #ddeeff' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ color: accent, fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
            CLÍNICA SALUD+ · BLOG DE SALUD
          </span>
          <h1 style={{ color: text, fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, marginBottom: '16px' }}>
            Nuestro Blog
          </h1>
          <p style={{ color: text + '88', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
            Artículos escritos por nuestros especialistas para ayudarte a cuidar tu salud con información médica rigurosa y accesible.
          </p>
        </motion.div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="r-section-sm" style={{ backgroundColor: bg }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '16px' }}
          >
            <span style={{ color: accent, fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em' }}>
              ARTÍCULO DESTACADO
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{
              backgroundColor: white, borderRadius: '16px',
              overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,85,204,0.1)',
              border: '1px solid #ddeeff',
            }}
          >
            <div className="r-two-col" style={{ gap: 0 }}>
              <div style={{ overflow: 'hidden', minHeight: '360px' }}>
                <img
                  src={`https://picsum.photos/seed/${featuredArticle.seed}/800/500`}
                  alt={featuredArticle.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{
                  display: 'inline-block', backgroundColor: categoryColors[featuredArticle.category] || accent,
                  color: white, fontSize: '10px', fontWeight: 800, letterSpacing: '0.15em',
                  padding: '5px 12px', borderRadius: '4px', marginBottom: '20px', alignSelf: 'flex-start',
                }}>
                  {featuredArticle.category}
                </span>
                <h2 style={{ color: text, fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.3 }}>
                  {featuredArticle.title}
                </h2>
                <p style={{ color: text + '88', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>
                  {featuredArticle.excerpt}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <p style={{ color: text, fontSize: '13px', fontWeight: 700, margin: 0 }}>{featuredArticle.author}</p>
                    <p style={{ color: text + '66', fontSize: '12px', margin: '2px 0 0' }}>
                      {featuredArticle.authorSpecialty} · {featuredArticle.date}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ color: accent, fontSize: '12px', fontWeight: 700 }}>{featuredArticle.readTime}</span>
                    <button style={{
                      backgroundColor: accent, color: white,
                      padding: '10px 22px', borderRadius: '8px',
                      fontSize: '13px', fontWeight: 700, border: 'none', cursor: 'pointer',
                    }}>
                      Leer artículo →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section style={{ backgroundColor: white, borderBottom: '1px solid #ddeeff', borderTop: '1px solid #ddeeff' }}>
        <div className="r-container">
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {categories.map((cat) => {
              const catColor = cat === 'Todos' ? accent : (categoryColors[cat] || accent);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    backgroundColor: activeCategory === cat ? catColor : 'transparent',
                    border: 'none',
                    color: activeCategory === cat ? white : text + '88',
                    fontSize: '12px', letterSpacing: '0.05em', fontWeight: 700,
                    padding: '16px 20px', cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease',
                    borderRadius: '0',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div className="r-container">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p style={{ color: text + '55', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '36px' }}>
              {filteredArticles.length} ARTÍCULOS
            </p>
            <div className="r-grid-3">
              {filteredArticles.map((article, i) => (
                <ArticleCard key={article.id} article={article} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ backgroundColor: accent, padding: '80px 24px' }}>
        <div className="r-container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: '36px', marginBottom: '16px' }}>📬</p>
            <h2 style={{ color: white, fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, marginBottom: '16px' }}>
              Recibe nuestros artículos en tu email
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.8, marginBottom: '36px' }}>
              Suscríbete a nuestro boletín y recibe una vez a la semana los mejores artículos de salud escritos por nuestros especialistas. Sin spam, solo contenido de valor.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px',
                  padding: '28px', border: '2px solid rgba(255,255,255,0.3)',
                }}
              >
                <p style={{ fontSize: '40px', marginBottom: '12px' }}>✅</p>
                <h3 style={{ color: white, fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  ¡Suscripción confirmada!
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px' }}>
                  Revisa tu bandeja de entrada para confirmar tu email. Te enviaremos el próximo artículo el lunes.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  style={{
                    flex: '1 1 280px', padding: '15px 20px', borderRadius: '10px',
                    border: 'none', fontSize: '15px', outline: 'none',
                    color: text, backgroundColor: white, maxWidth: '360px',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: text, color: white, padding: '15px 28px',
                    borderRadius: '10px', fontSize: '15px', fontWeight: 800,
                    border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
                  }}
                >
                  Suscribirme
                </button>
              </form>
            )}

            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', marginTop: '16px' }}>
              Puedes darte de baja en cualquier momento. Consulta nuestra{' '}
              <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>política de privacidad</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: lightBlue, padding: '60px 24px' }}>
        <div className="r-container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ color: text, fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, marginBottom: '14px' }}>
              ¿Tienes alguna duda sobre tu salud?
            </h2>
            <p style={{ color: text + '88', fontSize: '16px', marginBottom: '28px', maxWidth: '460px', margin: '0 auto 28px', lineHeight: 1.8 }}>
              Nuestros especialistas están disponibles para atenderte. Pide tu cita hoy y recibe orientación médica personalizada.
            </p>
            <Link
              href="/demos/clinica/cita"
              style={{
                display: 'inline-block', backgroundColor: accent, color: white,
                padding: '15px 40px', borderRadius: '8px',
                fontSize: '15px', fontWeight: 800, textDecoration: 'none',
                boxShadow: `0 4px 20px ${accent}44`,
              }}
            >
              Pedir Cita →
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bg = '#000000';
const gold = '#d4af37';
const cream = '#f0e8d0';
const charcoal = '#111111';

const steps = [
  {
    num: '01',
    title: 'Consulta Inicial',
    desc: 'Todo comienza con una conversación. Ya sea de forma presencial en nuestra boutique de Salamanca o de manera privada, escuchamos tu visión, tus deseos y el significado que quieres que tenga tu joya. Sin prisa, con toda la atención que mereces.',
    detail: 'Duración aproximada: 60-90 minutos · Sin coste',
    seed: 'jewel-process1',
  },
  {
    num: '02',
    title: 'Diseño y Boceto',
    desc: 'Nuestro maestro joyero crea bocetos a mano alzada con hasta tres propuestas de diseño distintas. Refinamos cada detalle hasta que la imagen mental se convierte en un dibujo técnico preciso. También ofrecemos renderizado 3D para visualizar el resultado final.',
    detail: 'Plazo: 7-14 días · Revisiones incluidas',
    seed: 'jewel-process2',
  },
  {
    num: '03',
    title: 'Selección de Materiales',
    desc: 'Te presentamos en persona las piedras preciosas y los metales nobles que darán vida a tu joya. Cada diamante, cada zafiro, cada rubí ha sido previamente seleccionado según criterios de pureza, color y corte excepcionales. Tú eliges, nosotros garantizamos.',
    detail: 'Certificación GIA o HRD de cada piedra',
    seed: 'jewel-process3',
  },
  {
    num: '04',
    title: 'Creación Artesanal',
    desc: 'Con el diseño aprobado y los materiales seleccionados, nuestros maestros artesanos comienzan la creación en el taller. Cada etapa está documentada fotográficamente. Al finalizar, realizamos una revisión de calidad exhaustiva antes de la entrega.',
    detail: 'Plazo: 4-12 semanas · Entrega con certificado de autenticidad',
    seed: 'jewel-process4',
  },
];

const faqs = [
  {
    q: '¿Cuánto tiempo tarda una joya bespoke?',
    a: 'El proceso completo, desde la primera consulta hasta la entrega, varía entre 6 y 16 semanas dependiendo de la complejidad del diseño y la disponibilidad de materiales. Para encargos urgentes, consulta con nuestro equipo las opciones disponibles.',
  },
  {
    q: '¿Cuál es el presupuesto mínimo para un encargo bespoke?',
    a: 'Nuestro servicio bespoke está disponible a partir de 2.500€ para piezas sencillas. Sin embargo, la mayoría de los encargos se sitúan entre 5.000€ y 25.000€. Para alta joyería y piezas excepcionales, el precio se determina según los materiales y la complejidad del diseño.',
  },
  {
    q: '¿Puedo traer mis propias piedras o joyas antiguas para retrabajarlas?',
    a: 'Absolutamente. Muchos de nuestros clientes nos traen joyas heredadas o piedras preciosas propias para crear piezas nuevas. Analizamos cada caso de forma individual y te ofrecemos las mejores opciones para dar nueva vida a esos materiales con valor sentimental.',
  },
  {
    q: '¿Cómo se garantiza la calidad de los materiales?',
    a: 'Todos los diamantes y piedras preciosas vienen acompañados de su certificado GIA, HRD o Gübelin, según corresponda. Los metales nobles están verificados y certificados. Además, ofrecemos un certificado de autenticidad AURUM con cada pieza bespoke.',
  },
  {
    q: '¿Es posible hacer modificaciones una vez iniciado el proceso?',
    a: 'Las modificaciones menores son posibles hasta el inicio de la fase de creación artesanal. Una vez que el artesano ha comenzado a trabajar en la pieza, los cambios pueden implicar costes adicionales y retrasos en la entrega. Por eso dedicamos especial atención a la fase de diseño.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ borderBottom: `1px solid ${gold}22` }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', padding: '24px 0',
          backgroundColor: 'transparent', border: 'none', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px',
        }}
      >
        <span style={{ color: cream, fontSize: '16px', fontFamily: 'Georgia, serif', lineHeight: 1.5 }}>
          {faq.q}
        </span>
        <span style={{ color: gold, fontSize: '20px', flexShrink: 0, transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'none' }}>
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{ color: cream + '99', fontSize: '14px', lineHeight: 1.9, paddingBottom: '24px' }}>
          {faq.a}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function BespokePage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoJoya: '',
    material: '',
    presupuesto: '',
    descripcion: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ backgroundColor: bg, color: cream, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>

      {/* HERO */}
      <section style={{ padding: '100px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center top, #1a1500 0%, #000 60%)', zIndex: 0 }} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}
        >
          <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', display: 'block', marginBottom: '20px' }}>
            AURUM · SERVICIO EXCLUSIVO
          </span>
          <h1 style={{
            color: cream,
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 400,
            letterSpacing: '0.1em',
            marginBottom: '24px',
            lineHeight: 1.1,
          }}>
            TU JOYA<br />
            <span style={{ color: gold }}>A MEDIDA</span>
          </h1>
          <div style={{ width: '60px', height: '1px', backgroundColor: gold, margin: '0 auto 24px' }} />
          <p style={{ color: cream + 'aa', fontSize: '17px', lineHeight: 1.9, maxWidth: '520px', margin: '0 auto' }}>
            Cada persona tiene una historia única. Cada amor, un lenguaje propio. Nuestro servicio Bespoke transforma tus ideas más íntimas en una joya irrepetible, creada exclusivamente para ti.
          </p>
        </motion.div>
      </section>

      {/* PROCESS STEPS */}
      <section className="r-section" style={{ backgroundColor: '#050500' }}>
        <div className="r-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '72px' }}
          >
            <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
              EL PROCESO
            </span>
            <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, margin: 0 }}>
              Del Sueño a la Realidad
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {steps.map((step, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-80px' });
              const isEven = i % 2 === 1;
              return (
                <motion.div
                  key={step.num}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="r-two-col"
                  style={{
                    gap: '60px',
                    alignItems: 'center',
                    flexDirection: isEven ? 'row-reverse' as const : 'row' as const,
                  }}
                >
                  <div style={{ overflow: 'hidden', flexShrink: 0 }}>
                    <img
                      src={`https://picsum.photos/seed/${step.seed}/600/400`}
                      alt={step.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div>
                    <p style={{ color: gold + '44', fontSize: '80px', fontFamily: 'Georgia, serif', lineHeight: 1, margin: '0 0 -20px', fontWeight: 400 }}>
                      {step.num}
                    </p>
                    <h3 style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', margin: '0 0 12px', fontWeight: 700 }}>
                      PASO {step.num}
                    </h3>
                    <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, margin: '0 0 20px' }}>
                      {step.title}
                    </h2>
                    <p style={{ color: cream + '99', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
                      {step.desc}
                    </p>
                    <p style={{ color: gold + '88', fontSize: '12px', letterSpacing: '0.05em', fontStyle: 'italic', borderLeft: `2px solid ${gold}33`, paddingLeft: '14px' }}>
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="r-section" style={{ backgroundColor: bg }}>
        <div className="r-container" style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
              PREGUNTAS FRECUENTES
            </span>
            <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, margin: 0 }}>
              Todo lo que Necesitas Saber
            </h2>
          </motion.div>

          <div style={{ borderTop: `1px solid ${gold}22` }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST FORM */}
      <section className="r-section" style={{ backgroundColor: charcoal }}>
        <div className="r-container" style={{ maxWidth: '720px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <span style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', display: 'block', marginBottom: '16px' }}>
              COMENZAR EL PROCESO
            </span>
            <h2 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, margin: 0 }}>
              Cuéntanos Tu Visión
            </h2>
            <p style={{ color: cream + '77', fontSize: '15px', marginTop: '16px' }}>
              Rellena el formulario y nos pondremos en contacto contigo en un plazo de 24 horas para concertar tu consulta inicial gratuita.
            </p>
          </motion.div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '60px 24px', border: `1px solid ${gold}33` }}
            >
              <p style={{ color: gold, fontSize: '40px', marginBottom: '16px' }}>◆</p>
              <h3 style={{ color: cream, fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: 400, marginBottom: '14px' }}>
                Gracias por contactarnos
              </h3>
              <p style={{ color: cream + '88', fontSize: '15px' }}>
                Hemos recibido tu solicitud. Nos pondremos en contacto contigo en las próximas 24 horas.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ color: gold, fontSize: '10px', letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>
                    NOMBRE COMPLETO *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    style={{
                      width: '100%', backgroundColor: bg, border: `1px solid ${gold}33`,
                      color: cream, padding: '14px 16px', fontSize: '14px',
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: gold, fontSize: '10px', letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    style={{
                      width: '100%', backgroundColor: bg, border: `1px solid ${gold}33`,
                      color: cream, padding: '14px 16px', fontSize: '14px',
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ color: gold, fontSize: '10px', letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>
                    TIPO DE JOYA
                  </label>
                  <select
                    value={formData.tipoJoya}
                    onChange={(e) => setFormData({ ...formData, tipoJoya: e.target.value })}
                    style={{
                      width: '100%', backgroundColor: bg, border: `1px solid ${gold}33`,
                      color: formData.tipoJoya ? cream : cream + '55', padding: '14px 16px', fontSize: '14px',
                      outline: 'none', boxSizing: 'border-box', cursor: 'pointer',
                    }}
                  >
                    <option value="">Selecciona tipo</option>
                    <option value="anillo">Anillo de compromiso</option>
                    <option value="alianzas">Alianzas de boda</option>
                    <option value="collar">Collar</option>
                    <option value="pendientes">Pendientes</option>
                    <option value="pulsera">Pulsera</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: gold, fontSize: '10px', letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>
                    MATERIAL PREFERIDO
                  </label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    style={{
                      width: '100%', backgroundColor: bg, border: `1px solid ${gold}33`,
                      color: formData.material ? cream : cream + '55', padding: '14px 16px', fontSize: '14px',
                      outline: 'none', boxSizing: 'border-box', cursor: 'pointer',
                    }}
                  >
                    <option value="">Selecciona material</option>
                    <option value="oro-amarillo">Oro amarillo 18k</option>
                    <option value="oro-blanco">Oro blanco 18k</option>
                    <option value="oro-rosa">Oro rosa 18k</option>
                    <option value="platino">Platino 950</option>
                    <option value="no-se">Aún no lo sé</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ color: gold, fontSize: '10px', letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>
                  PRESUPUESTO APROXIMADO
                </label>
                <select
                  value={formData.presupuesto}
                  onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
                  style={{
                    width: '100%', backgroundColor: bg, border: `1px solid ${gold}33`,
                    color: formData.presupuesto ? cream : cream + '55', padding: '14px 16px', fontSize: '14px',
                    outline: 'none', boxSizing: 'border-box', cursor: 'pointer',
                  }}
                >
                  <option value="">Selecciona rango</option>
                  <option value="2500-5000">2.500€ – 5.000€</option>
                  <option value="5000-10000">5.000€ – 10.000€</option>
                  <option value="10000-25000">10.000€ – 25.000€</option>
                  <option value="25000+">Más de 25.000€</option>
                  <option value="open">Abierto a propuesta</option>
                </select>
              </div>

              <div>
                <label style={{ color: gold, fontSize: '10px', letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>
                  DESCRIPCIÓN DE TU JOYA *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  placeholder="Cuéntanos tu idea, la ocasión, el significado que quieres que tenga tu joya. Cuantos más detalles mejor..."
                  style={{
                    width: '100%', backgroundColor: bg, border: `1px solid ${gold}33`,
                    color: cream, padding: '14px 16px', fontSize: '14px',
                    outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div style={{ textAlign: 'center', paddingTop: '8px' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: gold, color: '#000', padding: '16px 60px',
                    fontSize: '12px', letterSpacing: '0.25em', fontWeight: 700,
                    border: 'none', cursor: 'pointer',
                  }}
                >
                  ENVIAR SOLICITUD
                </button>
                <p style={{ color: cream + '44', fontSize: '12px', marginTop: '16px' }}>
                  La consulta inicial es completamente gratuita y sin compromiso
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}

'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const gold = '#d4a017';
const cream = '#fff5e6';
const darkBrown = '#0d0500';
const bg = '#1a0a00';

const timeSlots = ['13:30', '14:00', '14:30', '15:00', '20:30', '21:00', '21:30', '22:00', '22:30'];

const openingHours = [
  { day: 'Martes — Viernes', lunch: '13:30 – 15:30', dinner: '20:30 – 23:00' },
  { day: 'Sábado', lunch: '13:30 – 16:00', dinner: '20:00 – 23:30' },
  { day: 'Domingo', lunch: '13:30 – 16:00', dinner: 'Cerrado' },
  { day: 'Lunes', lunch: 'Cerrado', dinner: 'Cerrado' },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  requests: string;
};

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  occasion: '',
  requests: '',
};

function InputField({
  label, value, onChange, type = 'text', placeholder, required = false
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; required?: boolean
}) {
  return (
    <div>
      <label style={{ display: 'block', color: gold, fontSize: '11px', letterSpacing: '0.25em', fontWeight: 600, marginBottom: '8px' }}>
        {label.toUpperCase()}{required && ' *'}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%', backgroundColor: '#150800', border: `1px solid #3a2010`,
          color: cream, padding: '14px 16px', fontSize: '15px',
          outline: 'none', transition: 'border-color 0.25s',
          boxSizing: 'border-box', fontFamily: 'inherit'
        }}
        onFocus={e => { e.currentTarget.style.borderColor = gold; }}
        onBlur={e => { e.currentTarget.style.borderColor = '#3a2010'; }}
      />
    </div>
  );
}

function SelectField({
  label, value, onChange, options, required = false
}: {
  label: string; value: string; onChange: (v: string) => void;
  options: { val: string; label: string }[]; required?: boolean
}) {
  return (
    <div>
      <label style={{ display: 'block', color: gold, fontSize: '11px', letterSpacing: '0.25em', fontWeight: 600, marginBottom: '8px' }}>
        {label.toUpperCase()}{required && ' *'}
      </label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        style={{
          width: '100%', backgroundColor: '#150800', border: `1px solid #3a2010`,
          color: cream, padding: '14px 16px', fontSize: '15px',
          outline: 'none', cursor: 'pointer', fontFamily: 'inherit',
          boxSizing: 'border-box'
        }}
        onFocus={e => { e.currentTarget.style.borderColor = gold; }}
        onBlur={e => { e.currentTarget.style.borderColor = '#3a2010'; }}
      >
        {options.map(o => (
          <option key={o.val} value={o.val} style={{ backgroundColor: '#150800' }}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

export default function ReservarPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true });

  const update = (key: keyof FormData) => (val: string) => setForm(f => ({ ...f, [key]: val }));

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name) e.name = 'Campo requerido';
    if (!form.email || !form.email.includes('@')) e.email = 'Email válido requerido';
    if (!form.date) e.date = 'Selecciona una fecha';
    if (!form.time) e.time = 'Selecciona un horario';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: bg, color: cream, minHeight: '100vh' }}>
      <div className="r-hero-split">

        {/* LEFT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        >
          <img
            src="https://picsum.photos/seed/restaurant-interior/700/900"
            alt="Interior Arcos"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%), linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'
          }} />
          {/* Overlay text */}
          <div style={{ position: 'absolute', bottom: '60px', left: '50px', right: '50px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 600, margin: '0 0 8px' }}>
                RESTAURANTE ARCOS
              </p>
              <p style={{ color: cream, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '24px', margin: '0 0 12px', lineHeight: 1.3 }}>
                "Una experiencia que trasciende la gastronomía"
              </p>
              <p style={{ color: '#c8a880', fontSize: '13px', margin: 0 }}>
                ★ Estrella Michelin 2024 · Calle del Prado 28, Madrid
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: FORM */}
        <div
          ref={formRef}
          style={{ padding: 'clamp(40px,6vw,80px) clamp(24px,5vw,60px)', overflowY: 'auto', backgroundColor: darkBrown }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.4em', fontWeight: 600, marginBottom: '12px' }}>
              — MESA PARA
            </p>
            <h1 style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontFamily: 'Georgia, serif', fontStyle: 'italic',
              fontWeight: 400, margin: '0 0 8px', color: cream, lineHeight: 1.1
            }}>
              Reservar mesa
            </h1>
            <div style={{ width: '50px', height: '1px', backgroundColor: gold, marginBottom: '32px' }} />
            <p style={{ color: '#9a7a5a', fontSize: '14px', lineHeight: 1.7, marginBottom: '40px' }}>
              Complete el formulario y recibirá una confirmación por email y teléfono en un plazo máximo de 2 horas. Para eventos privados o grupos de más de 8 personas, contacte directamente con nosotros.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  padding: '48px 40px', border: `1px solid ${gold}`,
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>✦</div>
                <h2 style={{
                  fontFamily: 'Georgia, serif', fontStyle: 'italic',
                  fontSize: '28px', fontWeight: 400, color: cream, margin: '0 0 16px'
                }}>
                  Reserva recibida
                </h2>
                <p style={{ color: '#9a7a5a', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                  Gracias, <strong style={{ color: cream }}>{form.name}</strong>. Hemos recibido su solicitud de reserva para <strong style={{ color: gold }}>{form.guests} persona{+form.guests !== 1 ? 's' : ''}</strong> el <strong style={{ color: gold }}>{form.date}</strong> a las <strong style={{ color: gold }}>{form.time}</strong>.
                </p>
                <p style={{ color: '#9a7a5a', fontSize: '14px', lineHeight: 1.7 }}>
                  Le confirmaremos su reserva a la brevedad posible en el correo <strong style={{ color: cream }}>{form.email}</strong>. Si tiene alguna consulta, llámenos al <strong style={{ color: gold }}>+34 91 234 56 78</strong>.
                </p>
                <div style={{ marginTop: '32px', width: '50px', height: '1px', backgroundColor: gold, margin: '32px auto 0' }} />
                <p style={{ color: gold, fontSize: '13px', letterSpacing: '0.1em', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginTop: '20px' }}>
                  Hasta pronto en Arcos
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                {/* Name + Email */}
                <div className="r-two-col" style={{ gap: '20px' }}>
                  <div>
                    <InputField label="Nombre" value={form.name} onChange={update('name')} placeholder="Su nombre completo" required />
                    {errors.name && <p style={{ color: '#e05050', fontSize: '12px', marginTop: '4px' }}>{errors.name}</p>}
                  </div>
                  <InputField label="Teléfono" value={form.phone} onChange={update('phone')} type="tel" placeholder="+34 600 000 000" />
                </div>
                <div>
                  <InputField label="Correo electrónico" value={form.email} onChange={update('email')} type="email" placeholder="su@email.com" required />
                  {errors.email && <p style={{ color: '#e05050', fontSize: '12px', marginTop: '4px' }}>{errors.email}</p>}
                </div>
                {/* Date + Time */}
                <div className="r-two-col" style={{ gap: '20px' }}>
                  <div>
                    <InputField label="Fecha" value={form.date} onChange={update('date')} type="date" required />
                    {errors.date && <p style={{ color: '#e05050', fontSize: '12px', marginTop: '4px' }}>{errors.date}</p>}
                  </div>
                  <div>
                    <SelectField
                      label="Horario"
                      value={form.time}
                      onChange={update('time')}
                      required
                      options={[
                        { val: '', label: 'Seleccionar hora' },
                        ...timeSlots.map(t => ({ val: t, label: t }))
                      ]}
                    />
                    {errors.time && <p style={{ color: '#e05050', fontSize: '12px', marginTop: '4px' }}>{errors.time}</p>}
                  </div>
                </div>
                {/* Guests + Occasion */}
                <div className="r-two-col" style={{ gap: '20px' }}>
                  <SelectField
                    label="Número de personas"
                    value={form.guests}
                    onChange={update('guests')}
                    options={[1,2,3,4,5,6,7,8].map(n => ({ val: String(n), label: `${n} ${n === 1 ? 'persona' : 'personas'}` }))}
                  />
                  <SelectField
                    label="Ocasión especial"
                    value={form.occasion}
                    onChange={update('occasion')}
                    options={[
                      { val: '', label: 'Sin ocasión especial' },
                      { val: 'cumpleaños', label: 'Cumpleaños' },
                      { val: 'aniversario', label: 'Aniversario' },
                      { val: 'negocios', label: 'Reunión de negocios' },
                      { val: 'peticion', label: 'Pedida de mano' },
                      { val: 'otro', label: 'Otro' },
                    ]}
                  />
                </div>
                {/* Special requests */}
                <div>
                  <label style={{ display: 'block', color: gold, fontSize: '11px', letterSpacing: '0.25em', fontWeight: 600, marginBottom: '8px' }}>
                    PETICIONES ESPECIALES
                  </label>
                  <textarea
                    value={form.requests}
                    onChange={e => update('requests')(e.target.value)}
                    placeholder="Alergias, preferencias de mesa, necesidades especiales..."
                    rows={4}
                    style={{
                      width: '100%', backgroundColor: '#150800', border: `1px solid #3a2010`,
                      color: cream, padding: '14px 16px', fontSize: '15px',
                      outline: 'none', resize: 'vertical', fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = gold; }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#3a2010'; }}
                  />
                </div>
                {/* Note */}
                <p style={{ color: '#5a3a20', fontSize: '13px', lineHeight: 1.7 }}>
                  * Le confirmaremos la reserva por correo electrónico y teléfono en un máximo de 2 horas en horario de apertura. En caso de no recibir confirmación, contacte al +34 91 234 56 78.
                </p>
                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: '#e8b420' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: gold, color: darkBrown,
                    border: 'none', padding: '18px 40px',
                    fontWeight: 700, fontSize: '14px', letterSpacing: '0.2em', cursor: 'pointer',
                    marginTop: '8px', fontFamily: 'inherit'
                  }}
                >
                  CONFIRMAR RESERVA
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* OPENING HOURS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginTop: '60px', paddingTop: '40px', borderTop: `1px solid #2a1800` }}
          >
            <p style={{ color: gold, fontSize: '11px', letterSpacing: '0.3em', fontWeight: 600, marginBottom: '20px' }}>
              — HORARIO DE APERTURA
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {openingHours.map(h => (
                <div key={h.day} style={{
                  display: 'flex', flexWrap: 'wrap',
                  gap: '8px', fontSize: '14px',
                  opacity: h.lunch === 'Cerrado' && h.dinner === 'Cerrado' ? 0.4 : 1
                }}>
                  <span style={{ color: cream, fontWeight: 500 }}>{h.day}</span>
                  <span style={{ color: '#9a7a5a' }}>Comida: {h.lunch}</span>
                  <span style={{ color: '#9a7a5a' }}>Cena: {h.dinner}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '32px', padding: '20px 24px', backgroundColor: '#150800', borderLeft: `3px solid ${gold}` }}>
              <p style={{ color: '#9a7a5a', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>
                Para grupos de más de 8 personas o eventos privados, contacte con nosotros directamente en <strong style={{ color: gold }}>reservas@restaurantearcos.es</strong> o en el teléfono <strong style={{ color: gold }}>+34 91 234 56 78</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

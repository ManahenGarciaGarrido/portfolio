'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const red = '#ff3300'
const orange = '#ff8800'
const dark = '#0a0a0a'

type ClassEntry = {
  name: string
  instructor: string
  duration: string
  difficulty: 1 | 2 | 3 | 4 | 5
  seed: string
  desc: string
} | null

const days = ['Lunes', 'Martes', 'Mierco.', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
const times = ['07:00', '09:00', '11:00', '17:00', '19:00', '21:00']

const schedule: Record<string, Record<string, ClassEntry>> = {
  '07:00': {
    'Lunes':   { name: 'Musculacion', instructor: 'Diego R.', duration: '60 min', difficulty: 3, seed: 'class1', desc: 'Rutina de fuerza y volumen para empezar la semana.' },
    'Martes':  { name: 'HIIT', instructor: 'Ana M.', duration: '45 min', difficulty: 5, seed: 'class2', desc: 'Alta intensidad para quemar calorias desde primera hora.' },
    'Mierco.': { name: 'Spinning', instructor: 'Laura G.', duration: '50 min', difficulty: 4, seed: 'class3', desc: 'Cycling energetico con musica motivadora.' },
    'Jueves':  { name: 'Musculacion', instructor: 'Diego R.', duration: '60 min', difficulty: 3, seed: 'class1', desc: 'Continua con la rutina de fuerza y potencia.' },
    'Viernes': { name: 'HIIT', instructor: 'Ana M.', duration: '45 min', difficulty: 5, seed: 'class2', desc: 'Termina la semana a tope.' },
    'Sabado':  { name: 'Zumba', instructor: 'Sofia T.', duration: '60 min', difficulty: 2, seed: 'class8', desc: 'Cardio bailado para el fin de semana.' },
    'Domingo': null,
  },
  '09:00': {
    'Lunes':   { name: 'Yoga', instructor: 'Maria P.', duration: '75 min', difficulty: 2, seed: 'class6', desc: 'Yoga restaurativo para flexibilidad y calma mental.' },
    'Martes':  { name: 'Crossfit', instructor: 'Pablo V.', duration: '60 min', difficulty: 5, seed: 'class5', desc: 'WOD intenso para todos los niveles.' },
    'Mierco.': { name: 'Pilates', instructor: 'Clara R.', duration: '60 min', difficulty: 2, seed: 'class7', desc: 'Core, postura y equilibrio.' },
    'Jueves':  { name: 'Kickboxing', instructor: 'Sergio M.', duration: '60 min', difficulty: 4, seed: 'class4', desc: 'Golpea y patada mientras te pones en forma.' },
    'Viernes': { name: 'Yoga', instructor: 'Maria P.', duration: '75 min', difficulty: 2, seed: 'class6', desc: 'Sesion de relajacion para cerrar la semana.' },
    'Sabado':  { name: 'Crossfit', instructor: 'Pablo V.', duration: '60 min', difficulty: 5, seed: 'class5', desc: 'El WOD del sabado es el mas intenso de la semana.' },
    'Domingo': { name: 'Yoga', instructor: 'Maria P.', duration: '90 min', difficulty: 1, seed: 'class6', desc: 'Yoga restaurativo dominical de larga duracion.' },
  },
  '11:00': {
    'Lunes':   { name: 'Pilates', instructor: 'Clara R.', duration: '60 min', difficulty: 2, seed: 'class7', desc: 'Tonificacion y core con Pilates clasico.' },
    'Martes':  { name: 'Spinning', instructor: 'Laura G.', duration: '50 min', difficulty: 4, seed: 'class3', desc: 'Sesion de ciclismo indoor de mediodia.' },
    'Mierco.': { name: 'HIIT', instructor: 'Ana M.', duration: '45 min', difficulty: 5, seed: 'class2', desc: 'El HIIT de mediodia para los que pueden.' },
    'Jueves':  { name: 'Zumba', instructor: 'Sofia T.', duration: '60 min', difficulty: 2, seed: 'class8', desc: 'Baila y quema calorias con ritmos latinos.' },
    'Viernes': { name: 'Musculacion', instructor: 'Diego R.', duration: '60 min', difficulty: 3, seed: 'class1', desc: 'Cierre de semana con una buena sesion de pesas.' },
    'Sabado':  { name: 'Kickboxing', instructor: 'Sergio M.', duration: '60 min', difficulty: 4, seed: 'class4', desc: 'Tecnicas de golpeo y resistencia.' },
    'Domingo': { name: 'Pilates', instructor: 'Clara R.', duration: '60 min', difficulty: 2, seed: 'class7', desc: 'Mantente activo el domingo con Pilates suave.' },
  },
  '17:00': {
    'Lunes':   { name: 'Crossfit', instructor: 'Pablo V.', duration: '60 min', difficulty: 5, seed: 'class5', desc: 'WOD de tarde: el mas popular de la semana.' },
    'Martes':  { name: 'Musculacion', instructor: 'Diego R.', duration: '60 min', difficulty: 3, seed: 'class1', desc: 'Rutina de tarde para hipertrofia.' },
    'Mierco.': { name: 'Kickboxing', instructor: 'Sergio M.', duration: '60 min', difficulty: 4, seed: 'class4', desc: 'Defensa personal y cardio explosivo.' },
    'Jueves':  { name: 'Spinning', instructor: 'Laura G.', duration: '50 min', difficulty: 4, seed: 'class3', desc: 'Spinning de tarde con musica electronica.' },
    'Viernes': { name: 'Crossfit', instructor: 'Pablo V.', duration: '60 min', difficulty: 5, seed: 'class5', desc: 'WOD de viernes: cierra la semana fuerte.' },
    'Sabado':  null,
    'Domingo': null,
  },
  '19:00': {
    'Lunes':   { name: 'HIIT', instructor: 'Ana M.', duration: '45 min', difficulty: 5, seed: 'class2', desc: 'La clase de HIIT mas concurrida del gimnasio.' },
    'Martes':  { name: 'Kickboxing', instructor: 'Sergio M.', duration: '60 min', difficulty: 4, seed: 'class4', desc: 'Kickboxing tecnico con guanteo libre.' },
    'Mierco.': { name: 'Crossfit', instructor: 'Pablo V.', duration: '60 min', difficulty: 5, seed: 'class5', desc: 'WOD de miercoles: a mitad de semana.' },
    'Jueves':  { name: 'Zumba', instructor: 'Sofia T.', duration: '60 min', difficulty: 2, seed: 'class8', desc: 'La noche del jueves se baila en Inferno.' },
    'Viernes': { name: 'Spinning', instructor: 'Laura G.', duration: '50 min', difficulty: 4, seed: 'class3', desc: 'Spinning nocturno para desconectar.' },
    'Sabado':  { name: 'HIIT', instructor: 'Ana M.', duration: '45 min', difficulty: 5, seed: 'class2', desc: 'El HIIT del sabado para los mas decididos.' },
    'Domingo': null,
  },
  '21:00': {
    'Lunes':   { name: 'Musculacion', instructor: 'Diego R.', duration: '60 min', difficulty: 3, seed: 'class1', desc: 'Ultima sesion del dia, ambientazo nocturno.' },
    'Martes':  { name: 'Yoga', instructor: 'Maria P.', duration: '75 min', difficulty: 1, seed: 'class6', desc: 'Yoga nocturno para relajar el cuerpo y la mente.' },
    'Mierco.': { name: 'Musculacion', instructor: 'Diego R.', duration: '60 min', difficulty: 3, seed: 'class1', desc: 'Sesion de pesas de noche.' },
    'Jueves':  { name: 'Pilates', instructor: 'Clara R.', duration: '60 min', difficulty: 2, seed: 'class7', desc: 'Pilates nocturno para tonificar.' },
    'Viernes': { name: 'Zumba', instructor: 'Sofia T.', duration: '60 min', difficulty: 2, seed: 'class8', desc: 'Despide el viernes bailando en Inferno.' },
    'Sabado':  null,
    'Domingo': null,
  },
}

const difficultyColor = (d: number) => {
  if (d <= 1) return '#22c55e'
  if (d <= 2) return '#84cc16'
  if (d <= 3) return orange
  if (d <= 4) return '#f97316'
  return red
}

const classesList = [
  { seed: 'class1', name: 'Musculacion', desc: 'Sala de pesas con equipamiento de ultima generacion. Rutinas de fuerza, hipertrofia y potencia para todos los niveles.', difficulty: 3, duration: '60 min' },
  { seed: 'class2', name: 'HIIT', desc: 'High Intensity Interval Training. Quema hasta 800 calorias en 45 minutos de trabajo a maxima intensidad.', difficulty: 5, duration: '45 min' },
  { seed: 'class3', name: 'Spinning', desc: 'Ciclismo indoor en grupo con instructores certificados. Musica electronica, luces y un ambiente unico.', difficulty: 4, duration: '50 min' },
  { seed: 'class4', name: 'Kickboxing', desc: 'Artes marciales y cardio combinados. Aprende tecnicas de defensa personal mientras te pones en forma.', difficulty: 4, duration: '60 min' },
  { seed: 'class5', name: 'Crossfit', desc: 'Entrenamiento funcional de alta intensidad. WODs variados que te pondrán a prueba cada dia.', difficulty: 5, duration: '60 min' },
  { seed: 'class6', name: 'Yoga', desc: 'Flexibilidad, fuerza y mindfulness. Desde yoga restaurativo hasta Power Yoga para todos los niveles.', difficulty: 2, duration: '75 min' },
  { seed: 'class7', name: 'Pilates', desc: 'Fortalece tu core, mejora la postura y gana flexibilidad con metodos Pilates clasicos y modernos.', difficulty: 2, duration: '60 min' },
  { seed: 'class8', name: 'Zumba', desc: 'Cardio bailado con ritmos latinos. La clase mas divertida del gimnasio, para todas las edades.', difficulty: 2, duration: '60 min' },
]

const disciplines = ['Todas', 'Musculacion', 'HIIT', 'Spinning', 'Kickboxing', 'Crossfit', 'Yoga', 'Pilates', 'Zumba']
const dayFilters = ['Todos', ...days]

export default function ClasesPage() {
  const [selectedDay, setSelectedDay] = useState('Todos')
  const [selectedDiscipline, setSelectedDiscipline] = useState('Todas')

  return (
    <main style={{ background: dark, minHeight: '100vh', color: '#fff', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* HEADER */}
      <div style={{ background: '#0d0d0d', borderBottom: `3px solid ${red}`, padding: '3.5rem 1.5rem 2.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ width: 0 }} animate={{ width: '60px' }} transition={{ duration: 0.7 }} style={{ height: '3px', background: red, marginBottom: '1.25rem' }} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ fontSize: '2.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            HORARIO DE <span style={{ color: red }}>CLASES</span>
          </motion.h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>Reserva tu plaza en cualquier clase · Acceso incluido en todos los planes</p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div style={{ background: '#111', borderBottom: '1px solid #222', padding: '1.25rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Filtrar:</span>
          {dayFilters.map(d => (
            <button key={d} onClick={() => setSelectedDay(d)} style={{
              background: selectedDay === d ? red : 'transparent',
              color: selectedDay === d ? '#fff' : 'rgba(255,255,255,0.5)',
              border: `1px solid ${selectedDay === d ? red : '#333'}`,
              borderRadius: '4px', padding: '0.4rem 0.9rem', fontSize: '0.8rem',
              fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase',
            }}>{d}</button>
          ))}
          <span style={{ color: '#333', margin: '0 0.25rem' }}>|</span>
          <select
            value={selectedDiscipline}
            onChange={e => setSelectedDiscipline(e.target.value)}
            style={{ background: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '4px', padding: '0.4rem 0.85rem', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
          >
            {disciplines.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      {/* SCHEDULE TABLE */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1.5rem', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
          <thead>
            <tr>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: red, fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid #222', width: '80px' }}>HORA</th>
              {days.map(day => (
                <th key={day} style={{
                  padding: '0.75rem 0.5rem', textAlign: 'center',
                  color: selectedDay === day || selectedDay === 'Todos' ? '#fff' : 'rgba(255,255,255,0.3)',
                  fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em',
                  borderBottom: selectedDay === day ? `2px solid ${red}` : '1px solid #222',
                }}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time, ti) => (
              <tr key={time} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '0.75rem 1rem', color: red, fontWeight: 900, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{time}</td>
                {days.map(day => {
                  const cls = schedule[time][day]
                  const show = (selectedDay === 'Todos' || selectedDay === day) &&
                               (selectedDiscipline === 'Todas' || cls?.name === selectedDiscipline)
                  return (
                    <td key={day} style={{ padding: '0.5rem', verticalAlign: 'top', minWidth: '130px' }}>
                      {cls && show ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            background: '#141414',
                            border: `1px solid ${difficultyColor(cls.difficulty)}33`,
                            borderLeft: `3px solid ${difficultyColor(cls.difficulty)}`,
                            borderRadius: '6px',
                            padding: '0.65rem 0.75rem',
                            cursor: 'pointer',
                          }}
                        >
                          <div style={{ fontWeight: 800, fontSize: '0.8rem', color: '#fff', marginBottom: '0.2rem' }}>{cls.name}</div>
                          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.3rem' }}>{cls.instructor}</div>
                          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>{cls.duration}</span>
                            <div style={{ display: 'flex', gap: '2px' }}>
                              {Array.from({ length: 5 }).map((_, di) => (
                                <div key={di} style={{ width: '5px', height: '5px', borderRadius: '50%', background: di < cls.difficulty ? difficultyColor(cls.difficulty) : '#333' }} />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CLASS CARDS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '2rem', borderLeft: `4px solid ${red}`, paddingLeft: '1rem' }}>
          NUESTRAS CLASES
        </h2>
        <div className="r-grid-4" style={{ gap: '1.25rem' }}>
          {classesList.filter(c => selectedDiscipline === 'Todas' || c.name === selectedDiscipline).map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{ background: '#111', borderRadius: '8px', overflow: 'hidden', border: '1px solid #222' }}
            >
              <img src={`https://picsum.photos/seed/${cls.seed}/400/250`} alt={cls.name} style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block', filter: 'brightness(0.85)' }} />
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontWeight: 900, fontSize: '1.05rem', textTransform: 'uppercase' }}>{cls.name}</h3>
                  <span style={{ fontSize: '0.65rem', color: difficultyColor(cls.difficulty), fontWeight: 800, whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>
                    {['', 'BASICA', 'SUAVE', 'MEDIA', 'ALTA', 'EXTREMA'][cls.difficulty]}
                  </span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>{cls.desc}</p>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{cls.duration} · Incluida en todos los planes</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

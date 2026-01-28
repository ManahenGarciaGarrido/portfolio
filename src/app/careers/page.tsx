'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Briefcase, MapPin, Clock, ArrowRight, Heart,
  Zap, Users, Globe, Coffee, Laptop, Plane,
  GraduationCap, DollarSign, Shield, Star
} from 'lucide-react';

const positions = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remoto (Europa)',
    type: 'Full-time',
    description: 'Buscamos un ingeniero frontend senior para liderar el desarrollo de nuestra web app.',
  },
  {
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remoto (Global)',
    type: 'Full-time',
    description: 'Únete a nuestro equipo de backend para construir APIs escalables y sistemas robustos.',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Barcelona / Remoto',
    type: 'Full-time',
    description: 'Diseñador de producto para crear experiencias de usuario excepcionales.',
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remoto (Europa)',
    type: 'Full-time',
    description: 'Gestiona nuestra infraestructura cloud y pipelines de CI/CD.',
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Madrid / Remoto',
    type: 'Full-time',
    description: 'Ayuda a nuestros clientes enterprise a sacar el máximo partido de LinkForge.',
  },
  {
    title: 'Content Marketing Specialist',
    department: 'Marketing',
    location: 'Remoto (España)',
    type: 'Full-time',
    description: 'Crea contenido que eduque e inspire a nuestra comunidad de creadores.',
  },
];

const benefits = [
  { icon: Laptop, title: 'Trabajo 100% remoto', desc: 'Trabaja desde donde quieras' },
  { icon: DollarSign, title: 'Salario competitivo', desc: 'Por encima del mercado + equity' },
  { icon: Plane, title: '30 días de vacaciones', desc: 'Descansa y recarga energías' },
  { icon: GraduationCap, title: 'Formación continua', desc: '€2,000/año para cursos y conferencias' },
  { icon: Coffee, title: 'Setup de oficina', desc: '€1,000 para montar tu espacio' },
  { icon: Shield, title: 'Seguro médico', desc: 'Cobertura completa para ti y familia' },
  { icon: Users, title: 'Team retreats', desc: 'Encuentros presenciales 2x al año' },
  { icon: Zap, title: 'Horario flexible', desc: 'Organiza tu tiempo como prefieras' },
];

const values = [
  { title: 'Ownership', desc: 'Tomamos responsabilidad y actuamos como dueños' },
  { title: 'Transparencia', desc: 'Compartimos información abiertamente' },
  { title: 'Impacto', desc: 'Nos enfocamos en lo que realmente importa' },
  { title: 'Crecimiento', desc: 'Aprendemos y mejoramos constantemente' },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Únete al equipo</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Construye el futuro de los
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> links</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Somos un equipo pequeño pero ambicioso. Buscamos personas apasionadas
            que quieran crear productos que millones de personas usen cada día.
          </p>

          <Link
            href="#positions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
          >
            Ver posiciones abiertas
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '25', label: 'Personas en el equipo' },
            { value: '12', label: 'Países representados' },
            { value: '100%', label: 'Trabajo remoto' },
            { value: '4.9/5', label: 'Rating Glassdoor' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Nuestros valores</h2>
            <p className="text-gray-400">Lo que nos guía cada día</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Beneficios</h2>
            <p className="text-gray-400">Cuidamos de nuestro equipo</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <benefit.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Posiciones abiertas</h2>
            <p className="text-gray-400">{positions.length} posiciones disponibles</p>
          </div>

          <div className="space-y-4">
            {positions.map((position, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-purple-400 text-sm">{position.department}</span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{position.description}</p>
                    <div className="flex flex-wrap gap-4 mt-3">
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No position CTA */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto text-center">
          <Heart className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿No encuentras tu posición ideal?
          </h2>
          <p className="text-gray-400 mb-8">
            Envíanos tu CV igualmente. Siempre buscamos talento excepcional.
          </p>
          <Link
            href="mailto:careers@linkforge.io"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
          >
            Enviar candidatura espontánea
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Users,
  Target,
  Heart,
  Globe,
  Rocket,
  Award,
  ArrowRight,
  Linkedin,
  Twitter,
  MapPin,
  Calendar,
} from 'lucide-react';

const stats = [
  { value: '50K+', label: 'Usuarios Activos' },
  { value: '150+', label: 'Países' },
  { value: '10M+', label: 'Clicks Mensuales' },
  { value: '99.9%', label: 'Uptime' },
];

const values = [
  {
    icon: Users,
    title: 'Usuarios Primero',
    description: 'Cada decisión que tomamos empieza con una pregunta: ¿Cómo beneficia esto a nuestros usuarios?',
  },
  {
    icon: Target,
    title: 'Simplicidad',
    description: 'Creemos que las mejores herramientas son las más fáciles de usar. Sin complicaciones innecesarias.',
  },
  {
    icon: Heart,
    title: 'Pasión',
    description: 'Amamos lo que hacemos y se nota en cada detalle de nuestro producto.',
  },
  {
    icon: Globe,
    title: 'Accesibilidad',
    description: 'LinkForge debe ser accesible para todos, independientemente de su presupuesto o habilidades técnicas.',
  },
];

const team = [
  {
    name: 'María García',
    role: 'CEO & Co-fundadora',
    bio: 'Ex-Google, apasionada por democratizar las herramientas digitales.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria-ceo',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'CTO & Co-fundador',
    bio: 'Ingeniero de software con 15 años de experiencia en startups.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos-cto',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Ana Martínez',
    role: 'Head of Design',
    bio: 'Diseñadora UX/UI especializada en productos de consumo.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ana-design',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'David López',
    role: 'Head of Engineering',
    bio: 'Ex-Stripe, experto en sistemas distribuidos y escalabilidad.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david-eng',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Laura Sánchez',
    role: 'Head of Marketing',
    bio: 'Especialista en growth y marketing para creadores.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=laura-mkt',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Pablo Fernández',
    role: 'Head of Customer Success',
    bio: 'Obsesionado con la satisfacción del cliente.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pablo-cs',
    linkedin: '#',
    twitter: '#',
  },
];

const timeline = [
  {
    year: '2022',
    title: 'La idea nace',
    description: 'María y Carlos se frustran con las herramientas de links existentes y deciden crear algo mejor.',
  },
  {
    year: '2023 Q1',
    title: 'Lanzamiento beta',
    description: 'Primeros 1,000 usuarios beta. Feedback invaluable que moldea el producto.',
  },
  {
    year: '2023 Q3',
    title: 'Lanzamiento público',
    description: 'LinkForge sale de beta. 10,000 usuarios en el primer mes.',
  },
  {
    year: '2024 Q1',
    title: 'Serie A',
    description: 'Levantamos $5M para acelerar el crecimiento y expandir el equipo.',
  },
  {
    year: '2024 Q2',
    title: '50K usuarios',
    description: 'Alcanzamos 50,000 usuarios activos y lanzamos LinkForge Pro.',
  },
  {
    year: 'Hoy',
    title: 'Creciendo juntos',
    description: 'Seguimos innovando y escuchando a nuestra comunidad.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestra
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> Historia</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Nacimos con una misión simple: dar a cada creador las herramientas que necesita para compartir su contenido de forma profesional, sin complicaciones y sin costes prohibitivos.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Nuestra Misión</h2>
              <p className="text-gray-400 text-lg mb-6">
                Democratizar las herramientas de presencia online. Creemos que cada persona, sin importar su tamaño o presupuesto, merece tener una presencia profesional en internet.
              </p>
              <p className="text-gray-400">
                Las grandes marcas tienen equipos enteros para gestionar su presencia digital. Nosotros queremos que cualquier creador independiente tenga acceso a las mismas herramientas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30">
              <blockquote className="text-xl text-white italic mb-4">
                &ldquo;Cada creador merece las herramientas para brillar. Sin barreras, sin límites.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=maria-ceo"
                  alt="María García"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-white font-medium">María García</p>
                  <p className="text-gray-400 text-sm">CEO & Co-fundadora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Nuestros Valores</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Nuestro Camino</h2>
            <p className="text-gray-400">De una idea a una comunidad global</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-700 md:left-1/2" />

            {timeline.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 inline-block">
                    <span className="text-purple-400 font-medium">{event.year}</span>
                    <h3 className="text-white font-semibold mt-1">{event.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900" />

                <div className="flex-1 ml-16 md:ml-0 md:hidden">
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <span className="text-purple-400 font-medium">{event.year}</span>
                    <h3 className="text-white font-semibold mt-1">{event.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">{event.description}</p>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Conoce al Equipo</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Las personas apasionadas detrás de LinkForge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-white transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-white transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 aspect-video flex items-center justify-center border border-purple-500/30">
              <MapPin className="w-24 h-24 text-purple-400/50" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Dónde Estamos</h2>
              <p className="text-gray-400 mb-6">
                Nuestro equipo es completamente remoto, con miembros en España, México, Argentina y Estados Unidos. Creemos que el mejor talento no tiene fronteras.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Sede: Madrid, España</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span>Equipo: 100% Remoto</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>20+ personas en 4 países</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30">
            <Award className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Únete a nuestra historia
            </h2>
            <p className="text-gray-300 mb-8">
              Estamos buscando personas apasionadas para unirse a nuestro equipo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition"
              >
                Ver Ofertas de Empleo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition border border-white/20"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

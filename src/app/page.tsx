'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Link2,
  Palette,
  BarChart3,
  Zap,
  Check,
  Star,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Globe,
  Shield,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: Link2,
    title: 'Links Ilimitados',
    description: 'Añade todos los enlaces que necesites a tu página personal.',
    free: '5 links',
    pro: 'Ilimitados',
  },
  {
    icon: Palette,
    title: 'Temas Personalizados',
    description: 'Elige entre +20 temas profesionales para destacar.',
    free: '3 temas',
    pro: '+20 temas',
  },
  {
    icon: BarChart3,
    title: 'Analytics Detallados',
    description: 'Conoce quién visita tu página y qué links funcionan mejor.',
    free: 'Básicos',
    pro: 'Avanzados',
  },
  {
    icon: Zap,
    title: 'Carga Ultra Rápida',
    description: 'Páginas optimizadas que cargan en milisegundos.',
    free: true,
    pro: true,
  },
];

const testimonials = [
  {
    name: 'María García',
    role: 'Influencer de Moda',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria',
    content: 'LinkForge me ayudó a organizar todos mis links de forma profesional. Mis seguidores lo aman.',
    rating: 5,
  },
  {
    name: 'Carlos Ruiz',
    role: 'Músico Independiente',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos',
    content: 'Desde que uso LinkForge, mis fans encuentran mi música mucho más fácil. El plan Pro vale cada euro.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    role: 'Coach de Negocios',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ana',
    content: 'Los analytics me ayudan a entender qué servicios interesan más a mis clientes potenciales.',
    rating: 5,
  },
];

const pricingPlans = [
  {
    name: 'Gratis',
    price: 0,
    description: 'Perfecto para empezar',
    features: [
      '5 links máximo',
      '3 temas básicos',
      'Analytics básicos',
      'Página personalizada',
      'Soporte por email',
    ],
    cta: 'Empezar Gratis',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 4.99,
    description: 'Para creadores serios',
    features: [
      'Links ilimitados',
      '+20 temas premium',
      'Analytics avanzados',
      'Prioridad en carga',
      'Soporte prioritario',
      'Sin marca de agua',
      'Dominio personalizado (pronto)',
    ],
    cta: 'Comenzar Pro',
    highlighted: true,
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">LinkForge</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">
                Características
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">
                Precios
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition">
                Testimonios
              </a>
              <Link
                href="/auth/login"
                className="text-gray-300 hover:text-white transition"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/auth/register"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition"
              >
                Registrarse
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#features"
                className="block text-gray-300 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Características
              </a>
              <a
                href="#pricing"
                className="block text-gray-300 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Precios
              </a>
              <a
                href="#testimonials"
                className="block text-gray-300 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </a>
              <Link
                href="/auth/login"
                className="block text-gray-300 hover:text-white transition"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/auth/register"
                className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium text-center"
              >
                Registrarse
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-200">+10,000 creadores ya confían en nosotros</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Tu Página de Links
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
              Profesional y Única
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Crea tu página de links personalizada en segundos. Comparte todos tus
            enlaces importantes en un solo lugar. Gratis para empezar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition shadow-lg shadow-purple-500/25"
            >
              Crear Mi Página Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition border border-white/20"
            >
              Ver Demo
            </a>
          </div>

          {/* Demo Preview */}
          <div id="demo" className="mt-16 relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 max-w-sm mx-auto border border-white/20">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">TU</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">@tunombre</h3>
              <p className="text-gray-300 text-sm mb-6">Creador de contenido | Emprendedor</p>

              <div className="space-y-3">
                {['Mi Canal de YouTube', 'Tienda Online', 'Instagram', 'Newsletter'].map(
                  (link, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-lg rounded-xl py-3 px-4 text-white font-medium hover:bg-white/20 transition cursor-pointer border border-white/10"
                    >
                      {link}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Usuarios Activos' },
              { value: '50K+', label: 'Páginas Creadas' },
              { value: '2M+', label: 'Clicks Totales' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Todo lo que necesitas para
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                {' '}
                destacar
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Herramientas profesionales para creadores, influencers y emprendedores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Free: {typeof feature.free === 'boolean' ? '✓' : feature.free}</span>
                  <span className="text-purple-400">Pro: {typeof feature.pro === 'boolean' ? '✓' : feature.pro}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Extra features */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Globe, title: 'Acceso Global', desc: 'Disponible en todo el mundo, 24/7' },
              { icon: Shield, title: 'Seguro', desc: 'SSL incluido, tus datos protegidos' },
              { icon: Users, title: 'Para Todos', desc: 'Ideal para creadores de cualquier nicho' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Precios simples y
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                {' '}
                transparentes
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Empieza gratis, actualiza cuando lo necesites. Sin sorpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Más Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    {plan.price === 0 ? 'Gratis' : `€${plan.price}`}
                  </span>
                  {plan.price > 0 && <span className="text-gray-400">/mes</span>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/auth/register"
                  className={`block text-center py-3 rounded-full font-semibold transition ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            Todos los precios son en EUR. Cancela cuando quieras.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Lo que dicen
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                {' '}
                nuestros usuarios
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Miles de creadores ya confían en LinkForge para compartir su contenido.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full bg-gray-700"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Crea tu página de links profesional en menos de 2 minutos.
              Gratis para siempre, sin tarjeta de crédito.
            </p>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition shadow-lg shadow-purple-500/25"
            >
              Crear Mi Página Ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">LinkForge</span>
            </div>

            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition">
                Términos
              </a>
              <a href="#" className="hover:text-white transition">
                Privacidad
              </a>
              <a href="#" className="hover:text-white transition">
                Contacto
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} LinkForge. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

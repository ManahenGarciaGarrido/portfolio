'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Palette, BarChart3, Shield, Sparkles, Globe, Users, Check, QrCode, Calendar, Link2, Code, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    icon: Link2,
    title: 'Enlaces Ilimitados',
    description: 'Añade todos los enlaces que necesites sin restricciones en planes de pago.'
  },
  {
    icon: Palette,
    title: '20+ Temas Premium',
    description: 'Personaliza tu página con temas profesionales que destacan tu marca.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Avanzado',
    description: 'Conoce quién visita tu página, de dónde vienen y qué enlaces prefieren.'
  },
  {
    icon: Shield,
    title: 'Dominio Personalizado',
    description: 'Usa tu propio dominio para una presencia más profesional.'
  },
  {
    icon: QrCode,
    title: 'Códigos QR',
    description: 'Genera QR únicos para cada enlace y compártelos donde quieras.'
  },
  {
    icon: Calendar,
    title: 'Programación',
    description: 'Programa enlaces para que aparezcan y desaparezcan automáticamente.'
  },
  {
    icon: Globe,
    title: 'SEO Optimizado',
    description: 'Mejora tu visibilidad con meta tags personalizados y URLs amigables.'
  },
  {
    icon: Code,
    title: 'API Completa',
    description: 'Integra LinkForge con tus aplicaciones mediante nuestra API REST.'
  }
];

const plans = [
  {
    name: 'Free',
    price: '0',
    period: 'para siempre',
    description: 'Perfecto para empezar',
    features: ['5 enlaces', '3 temas básicos', 'Analytics básico', 'Soporte por email'],
    cta: 'Empezar Gratis',
    popular: false,
    href: '/auth/register'
  },
  {
    name: 'Starter',
    price: '4.99',
    period: '/mes',
    description: 'Para creadores en crecimiento',
    features: ['15 enlaces', '10 temas', 'Analytics avanzado', 'Sin marca de agua', 'Soporte prioritario'],
    cta: 'Comenzar',
    popular: false,
    href: '/auth/register'
  },
  {
    name: 'Pro',
    price: '9.99',
    period: '/mes',
    description: 'Para profesionales',
    features: ['Enlaces ilimitados', '20+ temas premium', 'Analytics completo', 'Dominio personalizado', 'Códigos QR', 'Integraciones', 'Soporte 24/7'],
    cta: 'Elegir Pro',
    popular: true,
    href: '/auth/register'
  },
  {
    name: 'Business',
    price: '29.99',
    period: '/mes',
    description: 'Para equipos y empresas',
    features: ['Todo de Pro', 'Múltiples usuarios', 'API access', 'Webhooks', 'SSO/SAML', 'SLA garantizado', 'Manager dedicado'],
    cta: 'Contactar',
    popular: false,
    href: '/contact'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Soluciones a medida',
    features: ['Todo de Business', 'Implementación dedicada', 'Infraestructura privada', 'Cumplimiento personalizado', 'Formación incluida'],
    cta: 'Hablar con Ventas',
    popular: false,
    href: '/contact'
  }
];

const integrations = [
  'Google Analytics', 'Meta Pixel', 'TikTok Pixel', 'Mailchimp', 'ConvertKit',
  'Shopify', 'Stripe', 'PayPal', 'Zapier', 'Make', 'Notion', 'Slack',
  'YouTube', 'Spotify', 'SoundCloud', 'Twitch'
];

const templates = [
  { name: 'Minimal Light', color: 'from-gray-100 to-white', free: true },
  { name: 'Minimal Dark', color: 'from-gray-900 to-black', free: true },
  { name: 'Gradient Sunset', color: 'from-orange-500 to-pink-500', free: true },
  { name: 'Ocean Blue', color: 'from-blue-600 to-cyan-500', free: false },
  { name: 'Forest Green', color: 'from-green-600 to-emerald-500', free: false },
  { name: 'Neon Purple', color: 'from-purple-600 to-pink-600', free: false }
];


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">La alternativa #1 a Linktree</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Todos tus enlaces
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
              en un solo lugar
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Crea tu página de enlaces personalizada en minutos. Comparte todo tu contenido
            con un solo link. Más funciones, mejor precio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
            >
              Crear mi LinkForge Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/features"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              Ver Características
            </Link>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Todo lo que necesitas para destacar
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Herramientas profesionales para creadores, influencers y empresas que quieren maximizar su presencia online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/features" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              Ver todas las características
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Integrations Preview */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Conecta con tus herramientas favoritas
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              +30 integraciones con las plataformas más populares
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {integrations.map((name, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-default"
              >
                {name}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
            >
              Ver todas las integraciones
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Diseños que enamoran
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Elige entre +20 temas profesionales o crea el tuyo propio
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {templates.map((template, index) => (
              <div key={index} className="group relative">
                <div className={`aspect-[9/16] rounded-xl bg-gradient-to-b ${template.color} border border-white/10 group-hover:scale-105 transition-transform cursor-pointer`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-xl">
                    <span className="text-white text-sm font-medium">{template.name}</span>
                  </div>
                </div>
                {!template.free && (
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs bg-purple-500 text-white">
                    PRO
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
            >
              Explorar todos los temas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Planes para cada necesidad
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Empieza gratis y escala cuando lo necesites. Sin trucos, sin sorpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-purple-900/50 to-pink-900/50 border-purple-500/50 scale-105 shadow-xl shadow-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                    Más Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    {plan.price !== 'Custom' && <span className="text-gray-400">€</span>}
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full py-2.5 rounded-lg font-medium text-center text-sm transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              Comparar planes en detalle
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Compare CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Por qué elegir LinkForge?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Más funciones, mejor precio, soporte real. Compara y decide.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/compare"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Comparar con la competencia
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/developers"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Documentación API
              <Code className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lo que dicen nuestros usuarios
            </h2>
          </div>

          <div className="p-12 rounded-2xl bg-white/5 border border-dashed border-white/10 text-center">
            <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 mb-2">Testimonios de usuarios</p>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Aquí aparecerán las opiniones y testimonios de usuarios reales cuando tengamos feedback de la comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/20">
            <Zap className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Únete a los creadores que usan LinkForge para impulsar su presencia online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="group px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Crear Cuenta Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                Contactar Ventas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

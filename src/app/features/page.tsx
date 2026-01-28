'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Link2,
  Palette,
  BarChart3,
  QrCode,
  Calendar,
  Globe,
  Shield,
  Zap,
  Users,
  Mail,
  Share2,
  Smartphone,
  MousePointer,
  Eye,
  TrendingUp,
  Clock,
  Target,
  Layers,
  Code,
  Settings,
  Bell,
  Lock,
  Sparkles,
  ArrowRight,
  Check,
  Play,
} from 'lucide-react';

const mainFeatures = [
  {
    icon: Link2,
    title: 'Links Ilimitados',
    description: 'Añade todos los enlaces que necesites sin restricciones. Organízalos, reordénalos y personalízalos a tu gusto.',
    features: ['Drag & Drop para reordenar', 'Iconos personalizados', 'Etiquetas y categorías', 'Links temporales'],
    image: '/features/links.png',
  },
  {
    icon: Palette,
    title: '+30 Temas Premium',
    description: 'Elige entre más de 30 temas profesionales diseñados para destacar. Desde minimalistas hasta vibrantes.',
    features: ['Temas claros y oscuros', 'Gradientes animados', 'Glassmorphism', 'Temas personalizados (Pro)'],
    image: '/features/themes.png',
  },
  {
    icon: BarChart3,
    title: 'Analytics Avanzados',
    description: 'Conoce a tu audiencia con métricas detalladas. Entiende qué links funcionan mejor y optimiza tu estrategia.',
    features: ['Visitas en tiempo real', 'Clicks por link', 'Ubicación geográfica', 'Dispositivos y navegadores'],
    image: '/features/analytics.png',
  },
  {
    icon: QrCode,
    title: 'Códigos QR',
    description: 'Genera códigos QR personalizados para tu página. Perfectos para tarjetas de visita, carteles y más.',
    features: ['QR con tu logo', 'Colores personalizados', 'Múltiples formatos', 'Tracking de escaneos'],
    image: '/features/qr.png',
  },
  {
    icon: Calendar,
    title: 'Programación de Links',
    description: 'Programa cuándo aparecen y desaparecen tus links. Ideal para promociones temporales y lanzamientos.',
    features: ['Fecha de inicio/fin', 'Horarios específicos', 'Zonas horarias', 'Links recurrentes'],
    image: '/features/scheduling.png',
  },
  {
    icon: Globe,
    title: 'Dominio Personalizado',
    description: 'Usa tu propio dominio para una presencia más profesional. Configúralo en minutos.',
    features: ['SSL automático', 'Configuración DNS fácil', 'Subdominios', 'Múltiples dominios (Business)'],
    image: '/features/domains.png',
  },
];

const additionalFeatures = [
  { icon: Shield, title: 'SSL Gratuito', description: 'Todas las páginas están protegidas con HTTPS' },
  { icon: Zap, title: 'Carga Ultra Rápida', description: 'CDN global para tiempos de carga mínimos' },
  { icon: Smartphone, title: 'Mobile First', description: 'Diseñado para verse perfecto en móviles' },
  { icon: MousePointer, title: 'Click Tracking', description: 'Rastrea cada click en tus links' },
  { icon: Eye, title: 'Vista Previa', description: 'Ve cómo se ve tu página antes de publicar' },
  { icon: TrendingUp, title: 'SEO Optimizado', description: 'Meta tags y Open Graph automáticos' },
  { icon: Clock, title: 'Historial', description: 'Accede al historial de cambios' },
  { icon: Target, title: 'A/B Testing', description: 'Prueba diferentes versiones (Pro)' },
  { icon: Layers, title: 'Secciones', description: 'Agrupa links en secciones' },
  { icon: Code, title: 'API Access', description: 'Integra con tus herramientas' },
  { icon: Settings, title: 'Personalización', description: 'Ajusta cada detalle' },
  { icon: Bell, title: 'Notificaciones', description: 'Alertas de clicks importantes' },
  { icon: Lock, title: 'Links Privados', description: 'Protege links con contraseña' },
  { icon: Mail, title: 'Captura Emails', description: 'Integración con newsletters' },
  { icon: Share2, title: 'Social Preview', description: 'Personaliza cómo se comparte' },
  { icon: Users, title: 'Colaboración', description: 'Trabaja en equipo (Business)' },
];

const integrations = [
  'Google Analytics', 'Meta Pixel', 'TikTok Pixel', 'Mailchimp',
  'ConvertKit', 'Zapier', 'Notion', 'Spotify', 'YouTube', 'Twitch',
  'Discord', 'Calendly', 'Stripe', 'PayPal', 'Gumroad', 'Shopify',
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Todo lo que necesitas en un solo lugar</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Características que te hacen
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> destacar</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Desde links simples hasta analytics avanzados, tenemos todo lo que necesitas para crear una presencia online profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition"
            >
              Empezar Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition border border-white/20">
              <Play className="w-5 h-5" />
              Ver Demo
            </button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {mainFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 mb-24 last:mb-0`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{feature.title}</h2>
                <p className="text-gray-400 text-lg mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Placeholder */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30 aspect-video flex items-center justify-center">
                  <feature.icon className="w-24 h-24 text-purple-400/50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Y mucho más...</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubre todas las herramientas incluidas en LinkForge
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3 group-hover:bg-purple-500/30 transition">
                  <feature.icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Conecta con tus herramientas favoritas
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              LinkForge se integra con las plataformas más populares
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="bg-gray-800 rounded-xl px-6 py-3 border border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white transition"
              >
                {integration}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/integrations" className="text-purple-400 hover:text-purple-300 font-medium">
              Ver todas las integraciones →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Crea tu página de links profesional en menos de 2 minutos. Gratis para siempre.
            </p>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition"
            >
              Crear Mi Página Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

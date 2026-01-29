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
  Plus,
  GripVertical,
  ExternalLink,
  Sun,
  Moon,
} from 'lucide-react';

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

// Visual mockup component for Links feature
const LinksMockup = () => (
  <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
    <div className="space-y-3">
      {[
        { title: 'Mi Canal de YouTube', active: true },
        { title: 'Instagram', active: true },
        { title: 'Tienda Online', active: true },
        { title: 'Newsletter', active: false },
      ].map((link, i) => (
        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 border border-gray-700">
          <GripVertical className="w-4 h-4 text-gray-600" />
          <div className="flex-1">
            <div className="text-white text-sm font-medium">{link.title}</div>
          </div>
          <div className={`w-8 h-4 rounded-full ${link.active ? 'bg-purple-500' : 'bg-gray-600'} relative`}>
            <div className={`absolute w-3 h-3 rounded-full bg-white top-0.5 ${link.active ? 'right-0.5' : 'left-0.5'}`} />
          </div>
        </div>
      ))}
      <button className="w-full py-2 rounded-lg border border-dashed border-gray-600 text-gray-500 flex items-center justify-center gap-2 hover:border-purple-500 hover:text-purple-400 transition">
        <Plus className="w-4 h-4" />
        Añadir link
      </button>
    </div>
  </div>
);

// Visual mockup component for Themes feature
const ThemesMockup = () => (
  <div className="grid grid-cols-3 gap-3">
    {[
      { bg: 'bg-white', name: 'Light', icon: Sun },
      { bg: 'bg-gray-900', name: 'Dark', icon: Moon },
      { bg: 'bg-gradient-to-br from-purple-500 to-pink-500', name: 'Gradient', icon: Palette },
      { bg: 'bg-gradient-to-br from-green-500 to-cyan-500', name: 'Ocean', icon: Palette },
      { bg: 'bg-gradient-to-br from-orange-500 to-red-500', name: 'Sunset', icon: Palette },
      { bg: 'bg-black', name: 'Neon', icon: Zap },
    ].map((theme, i) => (
      <div key={i} className={`aspect-[3/4] rounded-lg ${theme.bg} p-2 flex flex-col items-center justify-center border ${i === 0 ? 'border-purple-500' : 'border-transparent'} hover:border-purple-500 transition cursor-pointer`}>
        <theme.icon className={`w-4 h-4 ${theme.bg === 'bg-white' ? 'text-gray-900' : 'text-white'} mb-1`} />
        <span className={`text-xs ${theme.bg === 'bg-white' ? 'text-gray-900' : 'text-white'}`}>{theme.name}</span>
      </div>
    ))}
  </div>
);

// Visual mockup component for Analytics feature
const AnalyticsMockup = () => (
  <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
    <div className="flex items-center justify-between mb-4">
      <span className="text-white font-medium">Últimos 7 días</span>
      <span className="text-green-400 text-sm flex items-center gap-1">
        <TrendingUp className="w-3 h-3" />
        +24%
      </span>
    </div>
    <div className="flex items-end gap-1 h-24 mb-4">
      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
        <div key={i} className="flex-1 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t" style={{ height: `${h}%` }} />
      ))}
    </div>
    <div className="grid grid-cols-3 gap-4 text-center">
      <div>
        <div className="text-2xl font-bold text-white">1.2K</div>
        <div className="text-gray-500 text-xs">Visitas</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-white">342</div>
        <div className="text-gray-500 text-xs">Clicks</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-white">28%</div>
        <div className="text-gray-500 text-xs">CTR</div>
      </div>
    </div>
  </div>
);

// Visual mockup component for QR feature
const QRMockup = () => (
  <div className="flex items-center justify-center">
    <div className="bg-white p-4 rounded-xl">
      <div className="w-32 h-32 grid grid-cols-5 gap-1">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className={`${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24].includes(i) ? 'bg-gray-900' : 'bg-white'} rounded-sm`} />
        ))}
      </div>
      <div className="mt-2 text-center">
        <div className="text-gray-900 text-xs font-medium">@tunombre</div>
      </div>
    </div>
  </div>
);

// Visual mockup component for Scheduling feature
const SchedulingMockup = () => (
  <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <div className="text-white text-sm">Oferta Black Friday</div>
            <div className="text-gray-500 text-xs">Activo ahora</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center">
            <Clock className="w-4 h-4 text-orange-400" />
          </div>
          <div>
            <div className="text-white text-sm">Nuevo Curso</div>
            <div className="text-gray-500 text-xs">Empieza 15 Feb</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gray-600/20 flex items-center justify-center">
            <Calendar className="w-4 h-4 text-gray-400" />
          </div>
          <div>
            <div className="text-white text-sm">Promo Verano</div>
            <div className="text-gray-500 text-xs">Jun - Ago 2026</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Visual mockup component for Domains feature
const DomainsMockup = () => (
  <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
    <div className="space-y-4">
      <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/20 border border-purple-500/30">
        <Globe className="w-5 h-5 text-purple-400" />
        <div>
          <div className="text-white text-sm font-medium">tunombre.com</div>
          <div className="text-green-400 text-xs flex items-center gap-1">
            <Check className="w-3 h-3" />
            SSL Activo
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800">
        <ExternalLink className="w-5 h-5 text-gray-400" />
        <div>
          <div className="text-white text-sm">linkforge.app/tunombre</div>
          <div className="text-gray-500 text-xs">Subdomain gratuito</div>
        </div>
      </div>
      <button className="w-full py-2 rounded-lg border border-dashed border-gray-600 text-gray-500 flex items-center justify-center gap-2 hover:border-purple-500 hover:text-purple-400 transition text-sm">
        <Plus className="w-4 h-4" />
        Añadir dominio
      </button>
    </div>
  </div>
);

const mainFeatures = [
  {
    icon: Link2,
    title: 'Links Ilimitados',
    description: 'Añade todos los enlaces que necesites sin restricciones. Organízalos, reordénalos y personalízalos a tu gusto.',
    features: ['Drag & Drop para reordenar', 'Iconos personalizados', 'Etiquetas y categorías', 'Links temporales'],
    MockupComponent: LinksMockup,
  },
  {
    icon: Palette,
    title: '+30 Temas Premium',
    description: 'Elige entre más de 30 temas profesionales diseñados para destacar. Desde minimalistas hasta vibrantes.',
    features: ['Temas claros y oscuros', 'Gradientes animados', 'Glassmorphism', 'Temas personalizados (Pro)'],
    MockupComponent: ThemesMockup,
  },
  {
    icon: BarChart3,
    title: 'Analytics Avanzados',
    description: 'Conoce a tu audiencia con métricas detalladas. Entiende qué links funcionan mejor y optimiza tu estrategia.',
    features: ['Visitas en tiempo real', 'Clicks por link', 'Ubicación geográfica', 'Dispositivos y navegadores'],
    MockupComponent: AnalyticsMockup,
  },
  {
    icon: QrCode,
    title: 'Códigos QR',
    description: 'Genera códigos QR personalizados para tu página. Perfectos para tarjetas de visita, carteles y más.',
    features: ['QR con tu logo', 'Colores personalizados', 'Múltiples formatos', 'Tracking de escaneos'],
    MockupComponent: QRMockup,
  },
  {
    icon: Calendar,
    title: 'Programación de Links',
    description: 'Programa cuándo aparecen y desaparecen tus links. Ideal para promociones temporales y lanzamientos.',
    features: ['Fecha de inicio/fin', 'Horarios específicos', 'Zonas horarias', 'Links recurrentes'],
    MockupComponent: SchedulingMockup,
  },
  {
    icon: Globe,
    title: 'Dominio Personalizado',
    description: 'Usa tu propio dominio para una presencia más profesional. Configúralo en minutos.',
    features: ['SSL automático', 'Configuración DNS fácil', 'Subdominios', 'Múltiples dominios (Business)'],
    MockupComponent: DomainsMockup,
  },
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

              {/* Visual Mockup */}
              <div className="flex-1 w-full max-w-md">
                <feature.MockupComponent />
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

'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  ArrowLeft, Check, Crown, Download, Eye, Star,
  Smartphone, Monitor, Palette, Share2, Heart
} from 'lucide-react';

const templates: Record<string, {
  name: string;
  description: string;
  category: string;
  isPro: boolean;
  colors: { bg: string; text: string; button: string };
  features: string[];
  downloads: number;
  rating: number;
}> = {
  'minimal-light': {
    name: 'Minimal Light',
    description: 'Un diseño limpio y minimalista con fondo claro. Perfecto para perfiles profesionales y portfolios.',
    category: 'Minimalista',
    isPro: false,
    colors: { bg: 'bg-white', text: 'text-gray-900', button: 'bg-gray-900' },
    features: ['Fondo claro', 'Tipografía elegante', 'Botones redondeados', 'Animaciones suaves'],
    downloads: 12500,
    rating: 4.8,
  },
  'minimal-dark': {
    name: 'Minimal Dark',
    description: 'Versión oscura del tema minimal. Ideal para creadores de contenido y artistas.',
    category: 'Minimalista',
    isPro: false,
    colors: { bg: 'bg-gray-900', text: 'text-white', button: 'bg-white' },
    features: ['Modo oscuro', 'Alto contraste', 'Botones invertidos', 'Menos fatiga visual'],
    downloads: 18200,
    rating: 4.9,
  },
  'gradient-sunset': {
    name: 'Gradient Sunset',
    description: 'Gradientes vibrantes de atardecer. Perfecto para influencers y marcas personales.',
    category: 'Gradiente',
    isPro: false,
    colors: { bg: 'bg-gradient-to-br from-orange-500 to-pink-500', text: 'text-white', button: 'bg-white/20' },
    features: ['Gradiente dinámico', 'Colores cálidos', 'Efecto glassmorphism', 'Alto impacto visual'],
    downloads: 9800,
    rating: 4.7,
  },
  'spotify-artist': {
    name: 'Spotify Artist',
    description: 'Inspirado en Spotify. Diseñado para músicos, DJs y productores.',
    category: 'Música',
    isPro: true,
    colors: { bg: 'bg-gradient-to-b from-green-900 to-black', text: 'text-white', button: 'bg-green-500' },
    features: ['Estilo Spotify', 'Verde característico', 'Animaciones de audio', 'Integración con música'],
    downloads: 6700,
    rating: 4.9,
  },
  'minimal-pro': {
    name: 'Minimal Pro',
    description: 'La versión profesional de nuestro tema minimal con características avanzadas. Diseño limpio y profesional para cualquier nicho.',
    category: 'Minimalista',
    isPro: false,
    colors: { bg: 'bg-gradient-to-br from-white to-gray-100', text: 'text-gray-900', button: 'bg-purple-600' },
    features: ['Personalización avanzada', 'Múltiples layouts', 'Efectos hover premium', 'Sin marca de agua'],
    downloads: 12500,
    rating: 4.9,
  },
  'neon-cyberpunk': {
    name: 'Neon Cyberpunk',
    description: 'Estética cyberpunk con neones brillantes. Para gamers y streamers.',
    category: 'Gaming',
    isPro: true,
    colors: { bg: 'bg-black', text: 'text-cyan-400', button: 'bg-pink-500' },
    features: ['Efectos neón', 'Animaciones glitch', 'Colores vibrantes', 'Estilo futurista'],
    downloads: 6800,
    rating: 4.7,
  },
  'neon-nights': {
    name: 'Neon Nights',
    description: 'Estilo cyberpunk con colores vibrantes. Perfecto para creadores de contenido gaming.',
    category: 'Creativo',
    isPro: true,
    colors: { bg: 'bg-gradient-to-br from-purple-900 via-pink-900 to-black', text: 'text-pink-400', button: 'bg-pink-500' },
    features: ['Efectos neón', 'Gradientes oscuros', 'Animaciones glitch', 'Estilo cyberpunk'],
    downloads: 8300,
    rating: 4.8,
  },
  'ocean-blue': {
    name: 'Ocean Blue',
    description: 'Tonos azules relajantes como el océano. Ideal para wellness y coaching.',
    category: 'Naturaleza',
    isPro: true,
    colors: { bg: 'bg-gradient-to-b from-blue-600 to-cyan-500', text: 'text-white', button: 'bg-white/20' },
    features: ['Colores relajantes', 'Efecto olas', 'Transiciones fluidas', 'Sensación premium'],
    downloads: 4300,
    rating: 4.6,
  },
  'forest-green': {
    name: 'Forest Green',
    description: 'Verdes naturales del bosque. Perfecto para marcas eco-friendly.',
    category: 'Naturaleza',
    isPro: true,
    colors: { bg: 'bg-gradient-to-b from-green-700 to-emerald-600', text: 'text-white', button: 'bg-white/20' },
    features: ['Tonos naturales', 'Sensación orgánica', 'Iconos de naturaleza', 'Eco-friendly'],
    downloads: 3100,
    rating: 4.5,
  },
  'corporate-clean': {
    name: 'Corporate Clean',
    description: 'Profesional y elegante para empresas. Perfecto para perfiles corporativos y B2B.',
    category: 'Negocios',
    isPro: true,
    colors: { bg: 'bg-gradient-to-br from-blue-600 to-blue-900', text: 'text-white', button: 'bg-white/20' },
    features: ['Estilo corporativo', 'Colores sobrios', 'Diseño profesional', 'Ideal para LinkedIn'],
    downloads: 5400,
    rating: 4.7,
  },
  'sunset-vibes': {
    name: 'Sunset Vibes',
    description: 'Gradiente cálido para creadores de contenido. Colores vibrantes que destacan.',
    category: 'Creativo',
    isPro: false,
    colors: { bg: 'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600', text: 'text-white', button: 'bg-white/20' },
    features: ['Gradiente multicolor', 'Colores cálidos', 'Alta visibilidad', 'Perfecto para redes'],
    downloads: 9800,
    rating: 4.9,
  },
  'shop-modern': {
    name: 'Shop Modern',
    description: 'Diseñado específicamente para mostrar productos y tiendas online.',
    category: 'E-commerce',
    isPro: true,
    colors: { bg: 'bg-gradient-to-br from-amber-100 to-amber-300', text: 'text-amber-900', button: 'bg-amber-900' },
    features: ['Grid de productos', 'Colores neutros', 'Foco en imágenes', 'Optimizado para ventas'],
    downloads: 4200,
    rating: 4.6,
  },
  'foodie-delight': {
    name: 'Foodie Delight',
    description: 'Ideal para restaurantes, chefs y negocios de comida.',
    category: 'Restaurantes',
    isPro: true,
    colors: { bg: 'bg-gradient-to-br from-red-500 to-orange-500', text: 'text-white', button: 'bg-white/20' },
    features: ['Colores apetitosos', 'Espacio para menú', 'Links de delivery', 'Integración con reservas'],
    downloads: 3100,
    rating: 4.7,
  },
  'fitness-power': {
    name: 'Fitness Power',
    description: 'Energético para entrenadores personales, gyms y coaches de fitness.',
    category: 'Fitness',
    isPro: true,
    colors: { bg: 'bg-gradient-to-br from-lime-400 to-green-600', text: 'text-white', button: 'bg-black/30' },
    features: ['Colores energéticos', 'Estilo dinámico', 'Call to action potentes', 'Integración calendario'],
    downloads: 2800,
    rating: 4.5,
  },
  'edu-smart': {
    name: 'Edu Smart',
    description: 'Para educadores, cursos online y plataformas de aprendizaje.',
    category: 'Educación',
    isPro: true,
    colors: { bg: 'bg-gradient-to-br from-indigo-400 to-purple-600', text: 'text-white', button: 'bg-white/20' },
    features: ['Diseño académico', 'Secciones de cursos', 'Links de inscripción', 'Testimonios de alumnos'],
    downloads: 2400,
    rating: 4.6,
  },
  'dev-dark': {
    name: 'Dev Dark',
    description: 'Estilo terminal para desarrolladores y profesionales tech.',
    category: 'Tech',
    isPro: false,
    colors: { bg: 'bg-gray-900', text: 'text-green-400', button: 'bg-green-500/20' },
    features: ['Estilo código', 'Fuente monospace', 'Efecto terminal', 'Links a GitHub/Portfolio'],
    downloads: 5600,
    rating: 4.8,
  },
  'glassmorphism': {
    name: 'Glassmorphism',
    description: 'Efecto cristal moderno y elegante. El diseño más trending del momento.',
    category: 'Creativo',
    isPro: true,
    colors: { bg: 'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500', text: 'text-white', button: 'bg-white/20' },
    features: ['Efecto vidrio', 'Blur moderno', 'Bordes sutiles', 'Estilo premium'],
    downloads: 7200,
    rating: 4.9,
  },
  'brutalist-bold': {
    name: 'Brutalist Bold',
    description: 'Diseño atrevido y llamativo. Para los que quieren destacar de verdad.',
    category: 'Creativo',
    isPro: true,
    colors: { bg: 'bg-yellow-300', text: 'text-black', button: 'bg-black' },
    features: ['Tipografía bold', 'Colores planos', 'Sin miedo a destacar', 'Estilo único'],
    downloads: 3400,
    rating: 4.4,
  },
};

export default function TemplateDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const template = templates[slug];

  if (!template) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <Header />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Template no encontrado</h1>
          <p className="text-gray-400 mb-8">El template que buscas no existe o ha sido eliminado.</p>
          <Link href="/templates" className="text-purple-400 hover:text-purple-300">
            ← Volver a templates
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/templates" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" />
            Volver a templates
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Preview */}
            <div>
              <div className={`aspect-[9/16] max-w-sm mx-auto rounded-3xl ${template.colors.bg} p-6 relative overflow-hidden`}>
                {template.isPro && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    PRO
                  </div>
                )}

                <div className="flex flex-col items-center pt-8">
                  <div className={`w-20 h-20 rounded-full ${template.colors.button} mb-4`} />
                  <h3 className={`text-xl font-bold ${template.colors.text}`}>@tunombre</h3>
                  <p className={`text-sm opacity-70 ${template.colors.text} mb-6`}>Creador de contenido</p>

                  <div className="w-full space-y-3">
                    {['Mi Canal', 'Instagram', 'Tienda', 'Contacto'].map((link, i) => (
                      <div
                        key={i}
                        className={`w-full py-3 rounded-xl ${template.colors.button} ${template.colors.text === 'text-white' ? 'text-gray-900' : 'text-white'} text-center font-medium`}
                      >
                        {link}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Device Toggle */}
              <div className="flex justify-center gap-4 mt-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg">
                  <Smartphone className="w-4 h-4" />
                  Móvil
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-400 rounded-lg hover:bg-white/10 transition">
                  <Monitor className="w-4 h-4" />
                  Desktop
                </button>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-purple-400 text-sm">{template.category}</span>
                  <h1 className="text-3xl font-bold text-white">{template.name}</h1>
                </div>
                <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-400 mb-6">{template.description}</p>

              {/* Stats */}
              <div className="flex gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-300">{template.downloads.toLocaleString()} descargas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-gray-300">{template.rating}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4">Características</h3>
                <div className="grid grid-cols-2 gap-3">
                  {template.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <Check className="w-4 h-4 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                {template.isPro ? (
                  <>
                    <Link
                      href="/dashboard/upgrade"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition"
                    >
                      <Crown className="w-5 h-5" />
                      Desbloquear con Pro
                    </Link>
                    <p className="text-center text-gray-500 text-sm">
                      Este tema está incluido en el plan Pro (€9.99/mes)
                    </p>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/register"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition"
                    >
                      <Palette className="w-5 h-5" />
                      Usar este tema
                    </Link>
                    <p className="text-center text-gray-500 text-sm">
                      Gratis - Disponible para todos los usuarios
                    </p>
                  </>
                )}

                <button className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 text-white rounded-xl hover:bg-white/10 transition border border-white/10">
                  <Share2 className="w-5 h-5" />
                  Compartir
                </button>
              </div>

              {/* Related */}
              <div className="mt-12">
                <h3 className="text-white font-semibold mb-4">Temas similares</h3>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(templates)
                    .filter(([key]) => key !== slug)
                    .slice(0, 3)
                    .map(([key, t]) => (
                      <Link
                        key={key}
                        href={`/templates/${key}`}
                        className="group"
                      >
                        <div className={`aspect-[9/16] rounded-xl ${t.colors.bg} p-2 group-hover:scale-105 transition-transform`}>
                          <div className="w-full h-full flex items-center justify-center">
                            <span className={`text-xs font-medium ${t.colors.text}`}>{t.name}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Search,
  Filter,
  Star,
  Download,
  Eye,
  Crown,
  Palette,
  Music,
  Camera,
  Briefcase,
  ShoppingBag,
  Utensils,
  Dumbbell,
  BookOpen,
  Code,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos', icon: Sparkles },
  { id: 'minimal', name: 'Minimalistas', icon: Palette },
  { id: 'creative', name: 'Creativos', icon: Camera },
  { id: 'business', name: 'Negocios', icon: Briefcase },
  { id: 'music', name: 'Músicos', icon: Music },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingBag },
  { id: 'food', name: 'Restaurantes', icon: Utensils },
  { id: 'fitness', name: 'Fitness', icon: Dumbbell },
  { id: 'education', name: 'Educación', icon: BookOpen },
  { id: 'tech', name: 'Tech', icon: Code },
];

const templates = [
  {
    id: 'minimal-pro',
    name: 'Minimal Pro',
    category: 'minimal',
    description: 'Diseño limpio y profesional para cualquier nicho.',
    preview: 'bg-gradient-to-br from-white to-gray-100',
    textColor: 'text-gray-900',
    downloads: 12500,
    rating: 4.9,
    isPro: false,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 'neon-nights',
    name: 'Neon Nights',
    category: 'creative',
    description: 'Estilo cyberpunk con colores vibrantes.',
    preview: 'bg-gradient-to-br from-purple-900 via-pink-900 to-black',
    textColor: 'text-pink-400',
    downloads: 8300,
    rating: 4.8,
    isPro: true,
    isNew: true,
    isFeatured: false,
  },
  {
    id: 'spotify-artist',
    name: 'Spotify Artist',
    category: 'music',
    description: 'Perfecto para músicos y artistas.',
    preview: 'bg-gradient-to-br from-green-500 to-green-900',
    textColor: 'text-white',
    downloads: 6700,
    rating: 4.9,
    isPro: true,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 'corporate-clean',
    name: 'Corporate Clean',
    category: 'business',
    description: 'Profesional y elegante para empresas.',
    preview: 'bg-gradient-to-br from-blue-600 to-blue-900',
    textColor: 'text-white',
    downloads: 5400,
    rating: 4.7,
    isPro: true,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 'sunset-vibes',
    name: 'Sunset Vibes',
    category: 'creative',
    description: 'Gradiente cálido para creadores de contenido.',
    preview: 'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600',
    textColor: 'text-white',
    downloads: 9800,
    rating: 4.9,
    isPro: false,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 'shop-modern',
    name: 'Shop Modern',
    category: 'ecommerce',
    description: 'Diseñado para mostrar productos.',
    preview: 'bg-gradient-to-br from-amber-100 to-amber-300',
    textColor: 'text-amber-900',
    downloads: 4200,
    rating: 4.6,
    isPro: true,
    isNew: true,
    isFeatured: false,
  },
  {
    id: 'foodie-delight',
    name: 'Foodie Delight',
    category: 'food',
    description: 'Ideal para restaurantes y chefs.',
    preview: 'bg-gradient-to-br from-red-500 to-orange-500',
    textColor: 'text-white',
    downloads: 3100,
    rating: 4.7,
    isPro: true,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 'fitness-power',
    name: 'Fitness Power',
    category: 'fitness',
    description: 'Energético para entrenadores y gyms.',
    preview: 'bg-gradient-to-br from-lime-400 to-green-600',
    textColor: 'text-white',
    downloads: 2800,
    rating: 4.5,
    isPro: true,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 'edu-smart',
    name: 'Edu Smart',
    category: 'education',
    description: 'Para educadores y cursos online.',
    preview: 'bg-gradient-to-br from-indigo-400 to-purple-600',
    textColor: 'text-white',
    downloads: 2400,
    rating: 4.6,
    isPro: true,
    isNew: true,
    isFeatured: false,
  },
  {
    id: 'dev-dark',
    name: 'Dev Dark',
    category: 'tech',
    description: 'Estilo terminal para desarrolladores.',
    preview: 'bg-gray-900',
    textColor: 'text-green-400',
    downloads: 5600,
    rating: 4.8,
    isPro: false,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    category: 'creative',
    description: 'Efecto cristal moderno y elegante.',
    preview: 'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500',
    textColor: 'text-white',
    downloads: 7200,
    rating: 4.9,
    isPro: true,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 'brutalist-bold',
    name: 'Brutalist Bold',
    category: 'creative',
    description: 'Diseño atrevido y llamativo.',
    preview: 'bg-yellow-300',
    textColor: 'text-black',
    downloads: 3400,
    rating: 4.4,
    isPro: true,
    isNew: false,
    isFeatured: false,
  },
];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showProOnly, setShowProOnly] = useState(false);

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPro = !showProOnly || template.isPro;
    return matchesCategory && matchesSearch && matchesPro;
  });

  const featuredTemplates = templates.filter((t) => t.isFeatured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Templates
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> Profesionales</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Diseños listos para usar. Encuentra el template perfecto para tu marca y destaca desde el primer día.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" />
            Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredTemplates.map((template) => (
              <Link
                key={template.id}
                href={`/templates/${template.id}`}
                className="group relative rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition"
              >
                <div className={`aspect-[4/5] ${template.preview} p-4 flex flex-col`}>
                  {/* Mini preview */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 mb-2" />
                    <div className="w-20 h-3 rounded bg-white/30 mb-1" />
                    <div className="w-16 h-2 rounded bg-white/20" />
                    <div className="mt-4 space-y-2 w-full">
                      <div className="h-8 rounded-lg bg-white/20" />
                      <div className="h-8 rounded-lg bg-white/20" />
                      <div className="h-8 rounded-lg bg-white/20" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <div>
                    <h3 className="text-white font-semibold">{template.name}</h3>
                    <p className="text-gray-300 text-sm">{template.description}</p>
                  </div>
                </div>
                {template.isPro && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    Pro
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-gray-800/30 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setShowProOnly(!showProOnly)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  showProOnly
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <Crown className="w-4 h-4" />
                Solo Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <Link
                key={template.id}
                href={`/templates/${template.id}`}
                className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition"
              >
                {/* Preview */}
                <div className={`aspect-[4/5] ${template.preview} p-4 relative`}>
                  {/* Mini preview content */}
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-14 h-14 rounded-full bg-white/20 mb-3" />
                    <div className="w-24 h-3 rounded bg-white/30 mb-2" />
                    <div className="w-20 h-2 rounded bg-white/20 mb-4" />
                    <div className="space-y-2 w-full max-w-[80%]">
                      <div className="h-10 rounded-xl bg-white/20" />
                      <div className="h-10 rounded-xl bg-white/20" />
                      <div className="h-10 rounded-xl bg-white/20" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {template.isNew && (
                      <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        Nuevo
                      </span>
                    )}
                  </div>
                  {template.isPro && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      Pro
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium">
                      <Eye className="w-4 h-4" />
                      Vista Previa
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1">{template.name}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-1">{template.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Download className="w-4 h-4" />
                      <span>{(template.downloads / 1000).toFixed(1)}k</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No se encontraron templates.</p>
            </div>
          )}
        </div>
      </section>

      {/* Request Template */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas un diseño personalizado?
          </h2>
          <p className="text-gray-400 mb-8">
            Nuestro equipo puede crear un template exclusivo para tu marca.
          </p>
          <Link
            href="/contact?type=custom-template"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition"
          >
            Solicitar Template Personalizado
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Pro Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-purple-500/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full mb-6">
                  <Crown className="w-5 h-5" />
                  <span className="font-medium">LinkForge Pro</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Acceso a todos los templates premium
                </h2>
                <p className="text-gray-300 mb-6">
                  Desbloquea +30 templates exclusivos diseñados por profesionales. Nuevos diseños cada mes.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Todos los templates premium',
                    'Personalización avanzada',
                    'Templates exclusivos mensuales',
                    'Soporte prioritario',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition"
                >
                  Ver Planes Pro
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {templates.filter((t) => t.isPro).slice(0, 4).map((template) => (
                  <div
                    key={template.id}
                    className={`aspect-square rounded-xl ${template.preview} p-3`}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-8 h-8 rounded-full bg-white/20 mb-2" />
                      <div className="w-12 h-2 rounded bg-white/30 mb-1" />
                      <div className="space-y-1 w-full mt-2">
                        <div className="h-4 rounded bg-white/20" />
                        <div className="h-4 rounded bg-white/20" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  BookOpen, ArrowRight, Clock, Star, Search,
  Zap, Palette, BarChart3, Globe, Code, Users,
  ShoppingBag, Shield, Rocket, Target, TrendingUp
} from 'lucide-react';

const categories = [
  { name: 'Todos', value: 'all', count: 24 },
  { name: 'Inicio Rápido', value: 'quickstart', count: 5 },
  { name: 'Personalización', value: 'customization', count: 6 },
  { name: 'Analytics', value: 'analytics', count: 4 },
  { name: 'Integraciones', value: 'integrations', count: 5 },
  { name: 'Avanzado', value: 'advanced', count: 4 },
];

const featuredGuides = [
  {
    title: 'Guía completa para empezar con LinkForge',
    description: 'Todo lo que necesitas saber para crear tu primera página de links profesional en menos de 10 minutos.',
    icon: Rocket,
    category: 'Inicio Rápido',
    readTime: '10 min',
    level: 'Principiante',
    color: 'purple',
  },
  {
    title: 'Maximiza tus conversiones con A/B Testing',
    description: 'Aprende a probar diferentes versiones de tus links y optimizar para obtener más clicks.',
    icon: Target,
    category: 'Avanzado',
    readTime: '15 min',
    level: 'Avanzado',
    color: 'blue',
  },
  {
    title: 'Domina el Analytics de LinkForge',
    description: 'Entiende todas las métricas disponibles y cómo usarlas para tomar mejores decisiones.',
    icon: BarChart3,
    category: 'Analytics',
    readTime: '12 min',
    level: 'Intermedio',
    color: 'green',
  },
];

const guides = [
  { title: 'Cómo añadir tu primer link', icon: Zap, category: 'Inicio Rápido', readTime: '3 min' },
  { title: 'Personaliza tu tema', icon: Palette, category: 'Personalización', readTime: '5 min' },
  { title: 'Configura tu dominio personalizado', icon: Globe, category: 'Avanzado', readTime: '8 min' },
  { title: 'Conecta Google Analytics', icon: BarChart3, category: 'Integraciones', readTime: '5 min' },
  { title: 'Integración con Shopify', icon: ShoppingBag, category: 'Integraciones', readTime: '10 min' },
  { title: 'Usa la API de LinkForge', icon: Code, category: 'Avanzado', readTime: '20 min' },
  { title: 'Gestiona múltiples usuarios', icon: Users, category: 'Avanzado', readTime: '7 min' },
  { title: 'Mejores prácticas de seguridad', icon: Shield, category: 'Avanzado', readTime: '6 min' },
  { title: 'Optimiza para SEO', icon: TrendingUp, category: 'Personalización', readTime: '8 min' },
  { title: 'Crea links programados', icon: Clock, category: 'Personalización', readTime: '4 min' },
  { title: 'Entiende tus métricas de clicks', icon: Target, category: 'Analytics', readTime: '6 min' },
  { title: 'Exporta tus datos', icon: BarChart3, category: 'Analytics', readTime: '4 min' },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Principiante': return 'bg-green-500/20 text-green-400';
    case 'Intermedio': return 'bg-yellow-500/20 text-yellow-400';
    case 'Avanzado': return 'bg-red-500/20 text-red-400';
    default: return 'bg-gray-500/20 text-gray-400';
  }
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Centro de Guías</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Aprende a dominar LinkForge
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Guías paso a paso, tutoriales y mejores prácticas para sacar
            el máximo provecho de tu página de links.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar guías..."
              className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all text-sm flex items-center gap-2"
              >
                {cat.name}
                <span className="text-xs text-gray-500">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Guías destacadas</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredGuides.map((guide, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <guide.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${getLevelColor(guide.level)}`}>
                    {guide.level}
                  </span>
                </div>

                <span className="text-purple-400 text-xs">{guide.category}</span>
                <h3 className="text-lg font-semibold text-white mt-1 mb-2 group-hover:text-purple-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{guide.description}</p>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {guide.readTime}
                  </span>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-12 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Todas las guías</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <guide.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate group-hover:text-purple-400 transition-colors">
                    {guide.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-500">{guide.category}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-500">{guide.readTime}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Prefieres vídeo?
          </h2>
          <p className="text-gray-400 mb-8">
            Tenemos una colección de tutoriales en vídeo en nuestro canal de YouTube.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/30 transition-all"
          >
            <Star className="w-5 h-5" />
            Ver tutoriales en YouTube
          </a>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-400 mb-8">
            Nuestro equipo de soporte está listo para ayudarte.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/help"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
            >
              Centro de Ayuda
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  ArrowLeft, Play, Clock, Eye, Search, Filter,
  BookOpen, Palette, BarChart3, Link2, Settings, Zap
} from 'lucide-react';

const categories = [
  { name: 'Todos', icon: Play, count: 24 },
  { name: 'Primeros pasos', icon: BookOpen, count: 6 },
  { name: 'Links', icon: Link2, count: 5 },
  { name: 'Personalización', icon: Palette, count: 4 },
  { name: 'Analytics', icon: BarChart3, count: 4 },
  { name: 'Configuración', icon: Settings, count: 3 },
  { name: 'Tips Pro', icon: Zap, count: 2 },
];

const videos = [
  {
    id: 1,
    title: 'Cómo crear tu primera página de links',
    description: 'Aprende a configurar tu cuenta y crear tu página en menos de 5 minutos.',
    category: 'Primeros pasos',
    duration: '4:32',
    views: 15420,
    thumbnail: 'from-purple-600 to-pink-600',
    featured: true,
  },
  {
    id: 2,
    title: 'Añadir y organizar tus links',
    description: 'Tutorial completo sobre cómo añadir, editar y reordenar tus enlaces.',
    category: 'Links',
    duration: '6:15',
    views: 12350,
    thumbnail: 'from-blue-600 to-cyan-600',
    featured: true,
  },
  {
    id: 3,
    title: 'Personaliza tu página con temas',
    description: 'Descubre todos los temas disponibles y cómo aplicarlos a tu página.',
    category: 'Personalización',
    duration: '5:48',
    views: 9870,
    thumbnail: 'from-orange-500 to-red-500',
    featured: false,
  },
  {
    id: 4,
    title: 'Entendiendo tus Analytics',
    description: 'Aprende a interpretar las métricas de visitas, clicks y conversiones.',
    category: 'Analytics',
    duration: '8:22',
    views: 7650,
    thumbnail: 'from-green-500 to-emerald-500',
    featured: false,
  },
  {
    id: 5,
    title: 'Configurar tu dominio personalizado',
    description: 'Guía paso a paso para conectar tu propio dominio a tu página.',
    category: 'Configuración',
    duration: '7:15',
    views: 5420,
    thumbnail: 'from-violet-600 to-purple-600',
    featured: false,
  },
  {
    id: 6,
    title: 'Crear tu cuenta en LinkForge',
    description: 'El primer paso: registrarte y verificar tu cuenta.',
    category: 'Primeros pasos',
    duration: '2:45',
    views: 18200,
    thumbnail: 'from-pink-500 to-rose-500',
    featured: false,
  },
  {
    id: 7,
    title: 'Activar el modo Pro',
    description: 'Cómo actualizar tu cuenta y acceder a todas las funciones premium.',
    category: 'Primeros pasos',
    duration: '3:10',
    views: 6780,
    thumbnail: 'from-yellow-500 to-orange-500',
    featured: false,
  },
  {
    id: 8,
    title: 'Programar enlaces temporales',
    description: 'Aprende a programar links que aparecen y desaparecen automáticamente.',
    category: 'Links',
    duration: '4:55',
    views: 4320,
    thumbnail: 'from-cyan-500 to-blue-500',
    featured: false,
  },
  {
    id: 9,
    title: 'Integrar Google Analytics',
    description: 'Conecta tu cuenta de Google Analytics para métricas avanzadas.',
    category: 'Analytics',
    duration: '5:30',
    views: 3890,
    thumbnail: 'from-red-500 to-orange-500',
    featured: false,
  },
  {
    id: 10,
    title: 'Tips para aumentar tus clicks',
    description: 'Estrategias probadas para mejorar el CTR de tu página.',
    category: 'Tips Pro',
    duration: '9:45',
    views: 8920,
    thumbnail: 'from-emerald-500 to-teal-500',
    featured: false,
  },
  {
    id: 11,
    title: 'Crear botones personalizados',
    description: 'Personaliza el estilo de tus botones con CSS avanzado.',
    category: 'Personalización',
    duration: '6:20',
    views: 3450,
    thumbnail: 'from-indigo-500 to-purple-500',
    featured: false,
  },
  {
    id: 12,
    title: 'Exportar tus datos',
    description: 'Cómo descargar tus analytics y datos de la plataforma.',
    category: 'Analytics',
    duration: '3:40',
    views: 2150,
    thumbnail: 'from-slate-500 to-gray-600',
    featured: false,
  },
];

export default function HelpVideosPage() {
  const featuredVideos = videos.filter(v => v.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/help" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition">
            <ArrowLeft className="w-4 h-4" />
            Volver al Centro de Ayuda
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
              <Play className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Video Tutoriales</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Aprende con videos
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tutoriales paso a paso para dominar todas las funciones de LinkForge.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar videos..."
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  i === 0
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
                <span className="text-xs opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Featured Videos */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-6">Videos destacados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredVideos.map((video) => (
                <div
                  key={video.id}
                  className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all cursor-pointer"
                >
                  <div className={`aspect-video bg-gradient-to-br ${video.thumbnail} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-white text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-purple-400 text-xs">{video.category}</span>
                    <h3 className="text-white font-semibold mt-1 group-hover:text-purple-400 transition">
                      {video.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">{video.description}</p>
                    <div className="flex items-center gap-2 mt-3 text-gray-500 text-xs">
                      <Eye className="w-3 h-3" />
                      {video.views.toLocaleString()} visualizaciones
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Videos */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-6">Todos los videos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all cursor-pointer"
                >
                  <div className={`aspect-video bg-gradient-to-br ${video.thumbnail} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 rounded text-white text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-3">
                    <span className="text-purple-400 text-xs">{video.category}</span>
                    <h3 className="text-white font-medium text-sm mt-1 line-clamp-2 group-hover:text-purple-400 transition">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
                      <Eye className="w-3 h-3" />
                      {video.views.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">¿No encuentras lo que buscas?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/help"
                className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition"
              >
                Ver artículos de ayuda
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
              >
                Contactar soporte
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

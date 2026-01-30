'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Search,
  FileText,
  PenLine,
  Clock,
  ArrowRight,
  Bell,
} from 'lucide-react';

const categories = [
  'Todos',
  'Guías',
  'Casos de Éxito',
  'Producto',
  'Marketing',
  'Noticias',
  'Tips',
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Blog de
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> LinkForge</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Guías, tips y noticias para creadores que quieren destacar.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Placeholder */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20 text-center">
            <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
              <PenLine className="w-10 h-10 text-purple-400" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">
              Próximamente: Artículos del Blog
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Estamos preparando contenido de alta calidad para ayudarte a sacar el máximo
              partido de LinkForge. Aquí encontrarás guías detalladas, casos de éxito reales,
              tips de marketing y las últimas novedades del producto.
            </p>

            {/* What's Coming */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left">
              {[
                {
                  icon: FileText,
                  title: 'Guías Completas',
                  description: 'Tutoriales paso a paso para dominar todas las funciones',
                },
                {
                  icon: Clock,
                  title: 'Tips Semanales',
                  description: 'Consejos rápidos para mejorar tu presencia online',
                },
                {
                  icon: ArrowRight,
                  title: 'Casos de Éxito',
                  description: 'Historias reales de creadores que usan LinkForge',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 rounded-xl p-5 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 justify-center mb-4">
                <Bell className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-semibold">Sé el primero en enterarte</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Suscríbete y te avisaremos cuando publiquemos nuevo contenido.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition whitespace-nowrap"
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder Grid - Visual representation of what will appear */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">
            Próximos artículos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Guías', title: 'Cómo monetizar tu audiencia' },
              { category: 'Tips', title: 'Optimiza tu bio de Instagram' },
              { category: 'Producto', title: 'Nuevas funciones de analytics' },
              { category: 'Marketing', title: 'Estrategias de contenido' },
              { category: 'Guías', title: 'Domina los códigos QR' },
              { category: 'Casos de Éxito', title: 'Historia de un creador' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 opacity-60"
              >
                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 aspect-video flex items-center justify-center">
                  <FileText className="w-12 h-12 text-gray-600" />
                </div>
                <div className="p-6">
                  <span className="text-purple-400/60 text-sm">{item.category}</span>
                  <h3 className="text-gray-400 font-medium mt-2 mb-3">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-700" />
                    <span className="text-gray-600 text-sm">Próximamente</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

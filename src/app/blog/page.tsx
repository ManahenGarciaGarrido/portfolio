'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Search,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  TrendingUp,
  Bookmark,
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

const featuredPost = {
  slug: 'como-monetizar-tu-audiencia-2024',
  title: 'Cómo monetizar tu audiencia en 2024: Guía completa',
  excerpt: 'Descubre las mejores estrategias para convertir a tus seguidores en ingresos. Desde suscripciones hasta productos digitales.',
  image: '/blog/monetization.jpg',
  category: 'Guías',
  author: {
    name: 'María García',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria',
  },
  date: '2024-01-15',
  readTime: '12 min',
};

const posts = [
  {
    slug: '10-errores-pagina-links',
    title: '10 errores comunes en tu página de links (y cómo evitarlos)',
    excerpt: 'No cometas estos errores que están costándote clicks y conversiones.',
    category: 'Tips',
    author: { name: 'Carlos Ruiz', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos' },
    date: '2024-01-12',
    readTime: '8 min',
  },
  {
    slug: 'caso-exito-influencer-moda',
    title: 'Cómo Ana triplicó sus ventas con LinkForge',
    excerpt: 'Historia de éxito: De 500 a 15.000 clicks mensuales en 3 meses.',
    category: 'Casos de Éxito',
    author: { name: 'Team LinkForge', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=team' },
    date: '2024-01-10',
    readTime: '6 min',
  },
  {
    slug: 'analytics-que-metricas-importan',
    title: 'Analytics: ¿Qué métricas realmente importan?',
    excerpt: 'Aprende a interpretar los datos de tu página y tomar mejores decisiones.',
    category: 'Marketing',
    author: { name: 'Laura Martín', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=laura' },
    date: '2024-01-08',
    readTime: '10 min',
  },
  {
    slug: 'nuevas-funciones-enero',
    title: 'Nuevas funciones: Enero 2024',
    excerpt: 'Códigos QR personalizados, programación de links y más.',
    category: 'Producto',
    author: { name: 'Team LinkForge', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=team' },
    date: '2024-01-05',
    readTime: '4 min',
  },
  {
    slug: 'optimizar-bio-instagram',
    title: 'Cómo optimizar tu bio de Instagram para más clicks',
    excerpt: 'Tips prácticos para mejorar tu conversión en Instagram.',
    category: 'Tips',
    author: { name: 'Carlos Ruiz', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos' },
    date: '2024-01-03',
    readTime: '7 min',
  },
  {
    slug: 'guia-codigos-qr',
    title: 'Guía completa de códigos QR para creadores',
    excerpt: 'Todo lo que necesitas saber sobre códigos QR y cómo usarlos efectivamente.',
    category: 'Guías',
    author: { name: 'María García', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria' },
    date: '2024-01-01',
    readTime: '15 min',
  },
  {
    slug: 'linkforge-vs-linktree',
    title: 'LinkForge vs Linktree: Comparativa completa 2024',
    excerpt: 'Análisis detallado de las diferencias entre ambas plataformas.',
    category: 'Guías',
    author: { name: 'Team LinkForge', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=team' },
    date: '2023-12-28',
    readTime: '11 min',
  },
  {
    slug: 'tendencias-creadores-2024',
    title: '5 tendencias para creadores de contenido en 2024',
    excerpt: 'Lo que viene este año y cómo prepararte para aprovecharlo.',
    category: 'Noticias',
    author: { name: 'Laura Martín', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=laura' },
    date: '2023-12-25',
    readTime: '9 min',
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

      {/* Featured Post */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition group"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    Destacado
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-white font-medium">{featuredPost.author.name}</p>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl aspect-video flex items-center justify-center">
                <Bookmark className="w-20 h-20 text-purple-400/50" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition group"
              >
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 aspect-video flex items-center justify-center">
                  <Tag className="w-12 h-12 text-gray-600" />
                </div>
                <div className="p-6">
                  <span className="text-purple-400 text-sm">{post.category}</span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-3 group-hover:text-purple-400 transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-gray-500 text-sm">{post.author.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No se encontraron artículos.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              No te pierdas nada
            </h2>
            <p className="text-gray-300 mb-8">
              Suscríbete a nuestra newsletter y recibe los mejores artículos directamente en tu email.
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
      </section>

      <Footer />
    </div>
  );
}

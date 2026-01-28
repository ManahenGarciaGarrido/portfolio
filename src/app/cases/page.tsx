'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  ArrowRight, TrendingUp, Users, BarChart3, Star,
  Quote, Building, Music, ShoppingBag, Camera, Mic, Heart
} from 'lucide-react';

const caseStudies = [
  {
    id: 'fitness-maria',
    category: 'Influencer',
    icon: Heart,
    color: 'pink',
    name: 'María Fitness',
    title: 'Cómo María aumentó su engagement un 45% con LinkForge',
    image: '/cases/fitness.jpg',
    stats: [
      { value: '+45%', label: 'Engagement' },
      { value: '500K', label: 'Seguidores' },
      { value: '+120%', label: 'Clicks' },
    ],
    quote: 'LinkForge me permitió organizar todos mis links de forma profesional. Mis seguidores encuentran todo mucho más fácil.',
    summary: 'María usaba Linktree pero necesitaba más personalización y analytics. Con LinkForge pudo crear una página que refleja su marca fitness y trackear exactamente qué contenido genera más interés.',
  },
  {
    id: 'podcast-techtalks',
    category: 'Podcaster',
    icon: Mic,
    color: 'purple',
    name: 'TechTalks Podcast',
    title: 'TechTalks triplicó sus suscriptores usando una estrategia de links',
    image: '/cases/podcast.jpg',
    stats: [
      { value: '3x', label: 'Suscriptores' },
      { value: '50K', label: 'Oyentes/mes' },
      { value: '+200%', label: 'Descargas' },
    ],
    quote: 'Centralizar todos nuestros episodios en una sola página cambió el juego. Ahora es súper fácil compartir en redes.',
    summary: 'El podcast TechTalks estaba en 5 plataformas diferentes. Con LinkForge crearon un hub central donde los oyentes pueden elegir su plataforma favorita y nunca perderse un episodio.',
  },
  {
    id: 'ecommerce-artesania',
    category: 'E-commerce',
    icon: ShoppingBag,
    color: 'green',
    name: 'Artesanía Local',
    title: 'De Instagram a ventas: cómo una tienda artesanal creció un 300%',
    image: '/cases/artesania.jpg',
    stats: [
      { value: '+300%', label: 'Ventas' },
      { value: '€15K', label: 'Ventas/mes' },
      { value: '2.5%', label: 'Conversión' },
    ],
    quote: 'Antes perdía ventas porque la gente no encontraba mi tienda desde Instagram. Ahora todo está a un click.',
    summary: 'Artesanía Local vendía principalmente por Instagram pero el link único era un cuello de botella. Con LinkForge pueden mostrar categorías de productos, ofertas especiales y su tienda online.',
  },
  {
    id: 'musico-dj',
    category: 'Músico',
    icon: Music,
    color: 'blue',
    name: 'DJ Electra',
    title: 'Cómo un DJ independiente consiguió 100K streams mensuales',
    image: '/cases/dj.jpg',
    stats: [
      { value: '100K', label: 'Streams/mes' },
      { value: '+80%', label: 'Seguidores Spotify' },
      { value: '25K', label: 'Fans en Discord' },
    ],
    quote: 'Mi música está en todas partes. LinkForge me ayuda a que mis fans la encuentren donde prefieran escucharla.',
    summary: 'DJ Electra necesitaba un lugar donde sus fans pudieran encontrar su música en Spotify, SoundCloud, YouTube y comprar entradas para sus shows. LinkForge unificó todo.',
  },
  {
    id: 'fotografo-carlos',
    category: 'Fotógrafo',
    icon: Camera,
    color: 'orange',
    name: 'Carlos Photography',
    title: 'Un portfolio que convierte: de 2 a 15 clientes mensuales',
    image: '/cases/photo.jpg',
    stats: [
      { value: '15', label: 'Clientes/mes' },
      { value: '+650%', label: 'Crecimiento' },
      { value: '€5K', label: 'Ingresos extra' },
    ],
    quote: 'Mi página de LinkForge es mi tarjeta de visita digital. Los clientes ven mi trabajo y reservan directamente.',
    summary: 'Carlos usaba múltiples plataformas para mostrar su trabajo. Ahora tiene una página elegante con su portfolio, precios, calendario de disponibilidad y formulario de contacto.',
  },
  {
    id: 'agencia-digital',
    category: 'Agencia',
    icon: Building,
    color: 'violet',
    name: 'Digital Masters Agency',
    title: 'Cómo una agencia gestiona 40+ clientes desde un dashboard',
    image: '/cases/agency.jpg',
    stats: [
      { value: '40+', label: 'Clientes' },
      { value: '-70%', label: 'Tiempo gestión' },
      { value: '€50K', label: 'Ahorro anual' },
    ],
    quote: 'El plan Agency nos permite ofrecer LinkForge como un servicio propio a nuestros clientes. Es un win-win.',
    summary: 'Digital Masters gestiona las redes sociales de docenas de empresas. Con el plan Agency pueden crear y gestionar páginas de links para todos sus clientes desde una sola cuenta.',
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    pink: { bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500/30' },
    purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
    green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' },
    violet: { bg: 'bg-violet-500/20', text: 'text-violet-400', border: 'border-violet-500/30' },
  };
  return colors[color] || colors.purple;
};

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Casos de Éxito</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Historias de éxito reales
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre cómo creadores, empresas y marcas están usando LinkForge
            para crecer su audiencia y aumentar sus conversiones.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => {
              const colors = getColorClasses(study.color);
              return (
                <div
                  key={study.id}
                  className={`group p-6 rounded-2xl bg-white/5 border border-white/10 hover:${colors.border} transition-all cursor-pointer`}
                >
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <study.icon className={`w-4 h-4 ${colors.text}`} />
                    </div>
                    <span className={`text-sm ${colors.text}`}>{study.category}</span>
                  </div>

                  {/* Image Placeholder */}
                  <div className={`w-full h-40 rounded-xl ${colors.bg} mb-4 flex items-center justify-center`}>
                    <study.icon className={`w-16 h-16 ${colors.text} opacity-50`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {study.title}
                  </h3>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4">
                    {study.stats.slice(0, 2).map((stat, i) => (
                      <div key={i}>
                        <div className={`text-xl font-bold ${colors.text}`}>{stat.value}</div>
                        <div className="text-gray-500 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{study.summary}</p>

                  <span className="text-purple-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer caso completo
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl text-white font-medium mb-6">
            "LinkForge transformó completamente cómo conecto con mi audiencia.
            Los resultados hablan por sí solos."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-medium">María Fitness</div>
              <div className="text-gray-500 text-sm">500K seguidores • Influencer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Resultados que importan
            </h2>
            <p className="text-gray-400">Métricas promedio de nuestros usuarios</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '+85%', label: 'Aumento en clicks', icon: TrendingUp },
              { value: '+60%', label: 'Más engagement', icon: Heart },
              { value: '3x', label: 'ROI promedio', icon: BarChart3 },
              { value: '4.9/5', label: 'Satisfacción', icon: Star },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para ser el próximo caso de éxito?
            </h2>
            <p className="text-gray-400 mb-8">
              Únete a miles de creadores y empresas que ya están creciendo con LinkForge.
            </p>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Empezar gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  ArrowRight, Check, Star, Users, BarChart3, Palette,
  Instagram, Youtube, Music, Mic, Camera, Heart,
  Zap, Globe, Shield, Sparkles, TrendingUp, DollarSign
} from 'lucide-react';

const creatorTypes = [
  { icon: Instagram, name: 'Influencers', desc: 'Conecta todas tus redes en un solo lugar' },
  { icon: Youtube, name: 'YouTubers', desc: 'Promociona tus vídeos y canales' },
  { icon: Music, name: 'Músicos', desc: 'Comparte tu música en todas las plataformas' },
  { icon: Mic, name: 'Podcasters', desc: 'Centraliza todos tus episodios' },
  { icon: Camera, name: 'Fotógrafos', desc: 'Muestra tu portfolio con estilo' },
  { icon: Heart, name: 'Streamers', desc: 'Links a Twitch, Discord y más' },
];

const features = [
  { icon: Palette, title: 'Temas únicos', desc: 'Diseños pensados para destacar tu marca personal' },
  { icon: BarChart3, title: 'Analytics detallado', desc: 'Conoce a tu audiencia: ubicación, dispositivos, horarios' },
  { icon: TrendingUp, title: 'Optimización de clicks', desc: 'Ordena tus links según rendimiento automáticamente' },
  { icon: DollarSign, title: 'Monetización', desc: 'Integra links de afiliados y tienda propia' },
  { icon: Globe, title: 'Dominio propio', desc: 'Usa tu dominio personal para más profesionalidad' },
  { icon: Shield, title: 'Links seguros', desc: 'Protección contra spam y bots incluida' },
];

const testimonials = [
  { name: 'Laura Fitness', role: 'Influencer de salud', followers: '500K', text: 'Mis seguidores encuentran todo mucho más fácil. Mi engagement subió un 35%.' },
  { name: 'DJ Martinez', role: 'Productor musical', followers: '120K', text: 'Tengo todas mis plataformas de música en un solo lugar. Perfecto para promociones.' },
  { name: 'Tech Pablo', role: 'YouTuber de tecnología', followers: '800K', text: 'Los analytics me ayudan a entender qué contenido promocionar más.' },
];

export default function CreatorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <Users className="w-4 h-4 text-pink-400" />
              <span className="text-pink-300 text-sm">Para Creadores de Contenido</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tu audiencia merece
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                encontrarte fácil
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Centraliza todos tus enlaces en una página profesional. Instagram, YouTube,
              TikTok, Spotify, tu tienda... todo accesible con un solo click.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Crear mi página gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/templates" className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/10">
                Ver templates
              </Link>
            </div>
          </div>

          {/* Creator Types */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {creatorTypes.map((type, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:border-pink-500/50 transition-all group">
                <type.icon className="w-8 h-8 text-pink-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-medium text-sm">{type.name}</h3>
                <p className="text-gray-500 text-xs mt-1">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '50K+', label: 'Creadores activos' },
            { value: '200M+', label: 'Clicks mensuales' },
            { value: '4.9/5', label: 'Valoración media' },
            { value: '35%', label: 'Más engagement' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Herramientas pensadas para creadores
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Todo lo que necesitas para crecer tu audiencia y monetizar tu contenido.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all">
                <feature.icon className="w-10 h-10 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Creadores que ya confían en nosotros
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role} • {t.followers} seguidores</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-pink-900/50 to-orange-900/50 border border-pink-500/20">
            <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Empieza gratis hoy
            </h2>
            <p className="text-gray-400 mb-8">
              Únete a miles de creadores que ya usan LinkForge para conectar con su audiencia.
            </p>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Crear cuenta gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

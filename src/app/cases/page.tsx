'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  ArrowRight, TrendingUp, Users, BarChart3,
  Building, Music, ShoppingBag, Camera, Mic, Heart
} from 'lucide-react';

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

      {/* Placeholder for Case Studies */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-2xl bg-white/5 border border-dashed border-white/20 text-center">
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-400" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Mic className="w-6 h-6 text-purple-400" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-green-400" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Music className="w-6 h-6 text-blue-400" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Camera className="w-6 h-6 text-orange-400" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
                <Building className="w-6 h-6 text-violet-400" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              Próximamente: Casos de Éxito
            </h2>

            <p className="text-gray-400 max-w-lg mx-auto mb-6">
              Estamos recopilando historias reales de creadores, influencers, músicos,
              fotógrafos, tiendas online y agencias que usan LinkForge.
              Pronto podrás ver sus resultados y aprender de sus estrategias.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Influencers</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <ShoppingBag className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">E-commerce</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Building className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Agencias</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm">
              ¿Quieres compartir tu historia? Contáctanos en{' '}
              <a href="mailto:cases@linkforge.app" className="text-purple-400 hover:text-purple-300">
                cases@linkforge.app
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Qué encontrarás aquí
            </h2>
            <p className="text-gray-400">Cuando publiquemos los casos de éxito</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <BarChart3 className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Métricas Reales</h3>
              <p className="text-gray-400 text-sm">
                Datos verificados de crecimiento, clicks y conversiones de usuarios reales.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <TrendingUp className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Estrategias</h3>
              <p className="text-gray-400 text-sm">
                Aprende qué funciona: configuraciones, temas y tácticas que generan resultados.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <Users className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Testimonios</h3>
              <p className="text-gray-400 text-sm">
                Opiniones y consejos directos de creadores exitosos usando LinkForge.
              </p>
            </div>
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
              Empieza gratis y crea tu página de links profesional en minutos.
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

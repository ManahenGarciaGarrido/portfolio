'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  ArrowLeft,
  Play,
  Video,
  Bell,
  BookOpen,
  MessageSquare,
} from 'lucide-react';

export default function HelpVideosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
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

          {/* Coming Soon */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20 text-center">
            <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
              <Video className="w-10 h-10 text-purple-400" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              Próximamente: Video Tutoriales
            </h2>

            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Estamos grabando tutoriales en video para ayudarte a sacar el máximo
              partido de LinkForge. Pronto tendrás acceso a guías visuales paso a paso.
            </p>

            {/* What's Coming */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { title: 'Primeros pasos', description: 'Configura tu cuenta y página' },
                { title: 'Personalización', description: 'Temas, colores y estilos' },
                { title: 'Analytics', description: 'Entiende tus métricas' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <div className="w-full aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                    <Play className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-white font-medium text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Notify Me */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 max-w-md mx-auto">
              <div className="flex items-center gap-3 justify-center mb-4">
                <Bell className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-semibold">Avísame cuando estén listos</h3>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-medium transition whitespace-nowrap"
                >
                  Notificarme
                </button>
              </form>
            </div>
          </div>

          {/* Alternative Help */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Mientras tanto, explora otras formas de ayuda:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/help"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition"
              >
                <BookOpen className="w-5 h-5" />
                Artículos de ayuda
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
              >
                <MessageSquare className="w-5 h-5" />
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

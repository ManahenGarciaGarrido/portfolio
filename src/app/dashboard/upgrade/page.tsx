'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Crown,
  Check,
  ArrowLeft,
  Link2,
  Palette,
  BarChart3,
  Zap,
  Shield,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';

const proFeatures = [
  { icon: Link2, title: 'Links ilimitados', description: 'Sin límite de enlaces en tu página' },
  { icon: Palette, title: '+20 temas premium', description: 'Acceso a todos los temas exclusivos' },
  { icon: BarChart3, title: 'Analytics avanzados', description: 'Métricas detalladas de rendimiento' },
  { icon: Zap, title: 'Carga prioritaria', description: 'Tu página carga más rápido' },
  { icon: Shield, title: 'Sin marca de agua', description: 'Elimina "Powered by LinkForge"' },
  { icon: Sparkles, title: 'Soporte prioritario', description: 'Respuesta en menos de 24h' },
];

export default function UpgradePage() {
  const router = useRouter();
  const { user, isAuthenticated, upgradeToPro } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
      </div>
    );
  }

  if (user.isPro) {
    router.push('/dashboard');
    return null;
  }

  const handleUpgrade = async () => {
    setLoading(true);

    // Simulate Stripe checkout
    // In production, you would redirect to Stripe Checkout here
    await new Promise((r) => setTimeout(r, 2000));

    // For demo purposes, upgrade directly
    upgradeToPro();
    router.push('/dashboard');
  };

  const monthlyPrice = 4.99;
  const yearlyPrice = 49.99;
  const yearlyMonthly = (yearlyPrice / 12).toFixed(2);
  const savings = Math.round(((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12)) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 py-12 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Dashboard
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full mb-6">
            <Crown className="w-5 h-5" />
            <span className="font-medium">LinkForge Pro</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Lleva tus links al
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              {' '}
              siguiente nivel
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Desbloquea todas las funcionalidades premium y destaca entre la multitud.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-full font-medium transition ${
              billingCycle === 'monthly'
                ? 'bg-purple-500 text-white'
                : 'bg-white/10 text-gray-400 hover:text-white'
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 rounded-full font-medium transition flex items-center gap-2 ${
              billingCycle === 'yearly'
                ? 'bg-purple-500 text-white'
                : 'bg-white/10 text-gray-400 hover:text-white'
            }`}
          >
            Anual
            <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
              -{savings}%
            </span>
          </button>
        </div>

        {/* Pricing Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 max-w-lg mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-white mb-2">
              €{billingCycle === 'monthly' ? monthlyPrice : yearlyPrice}
              <span className="text-xl text-gray-400 font-normal">
                /{billingCycle === 'monthly' ? 'mes' : 'año'}
              </span>
            </div>
            {billingCycle === 'yearly' && (
              <p className="text-gray-400">
                Solo €{yearlyMonthly}/mes facturado anualmente
              </p>
            )}
          </div>

          <ul className="space-y-4 mb-8">
            {proFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <span className="text-white font-medium">{feature.title}</span>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={handleUpgrade}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Procesando...
              </>
            ) : (
              <>
                <Crown className="w-5 h-5" />
                Actualizar a Pro Ahora
              </>
            )}
          </button>

          <p className="text-gray-500 text-sm text-center mt-4">
            Cancela cuando quieras. Sin compromiso.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {proFeatures.map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              {
                q: '¿Puedo cancelar en cualquier momento?',
                a: 'Sí, puedes cancelar tu suscripción cuando quieras. Seguirás teniendo acceso a Pro hasta el final del período de facturación.',
              },
              {
                q: '¿Qué métodos de pago aceptan?',
                a: 'Aceptamos todas las tarjetas de crédito y débito principales (Visa, MasterCard, American Express) a través de Stripe.',
              },
              {
                q: '¿Qué pasa con mis links si bajo a plan gratuito?',
                a: 'Tus links seguirán activos, pero solo podrás editar los primeros 5. Los temas Pro volverán al tema básico.',
              },
              {
                q: '¿Hay descuento para equipos?',
                a: 'Estamos trabajando en planes para equipos y agencias. Contáctanos para más información.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <h4 className="text-white font-medium mb-2">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-6 py-3 rounded-full">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Garantía de devolución de 14 días</span>
          </div>
          <p className="text-gray-500 mt-2">
            Si no estás satisfecho, te devolvemos tu dinero. Sin preguntas.
          </p>
        </div>
      </div>
    </div>
  );
}

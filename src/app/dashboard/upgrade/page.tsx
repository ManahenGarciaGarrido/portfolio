'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Crown,
  Check,
  X,
  Zap,
  Star,
  Building2,
  Rocket,
  Loader2,
  Shield,
} from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useUserStore } from '@/store/userStore';

const plans = [
  {
    id: 'free',
    name: 'Free',
    description: 'Tu plan actual',
    icon: Zap,
    monthlyPrice: 0,
    yearlyPrice: 0,
    popular: false,
    features: [
      { name: '5 links', included: true },
      { name: '3 temas básicos', included: true },
      { name: 'Analytics 7 días', included: true },
      { name: 'Marca LinkForge', included: true },
      { name: 'Dominio personalizado', included: false },
      { name: 'Códigos QR', included: false },
      { name: 'Programación de links', included: false },
      { name: 'Soporte prioritario', included: false },
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    description: 'Para creadores individuales',
    icon: Star,
    monthlyPrice: 4.99,
    yearlyPrice: 49,
    popular: false,
    features: [
      { name: '25 links', included: true },
      { name: '10 temas premium', included: true },
      { name: 'Analytics 30 días', included: true },
      { name: 'Sin marca LinkForge', included: true },
      { name: 'Dominio personalizado', included: false },
      { name: '5 códigos QR/mes', included: true },
      { name: 'Programación de links', included: false },
      { name: 'Soporte email', included: true },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Para creadores serios',
    icon: Crown,
    monthlyPrice: 9.99,
    yearlyPrice: 99,
    popular: true,
    features: [
      { name: 'Links ilimitados', included: true },
      { name: 'Todos los temas (+30)', included: true },
      { name: 'Analytics 1 año', included: true },
      { name: 'Sin marca LinkForge', included: true },
      { name: '1 dominio personalizado', included: true },
      { name: 'QR ilimitados', included: true },
      { name: 'Programación de links', included: true },
      { name: 'Soporte prioritario 24h', included: true },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Para equipos y agencias',
    icon: Building2,
    monthlyPrice: 29.99,
    yearlyPrice: 299,
    popular: false,
    features: [
      { name: 'Todo de Pro +', included: true },
      { name: 'Temas personalizados', included: true },
      { name: 'Analytics ilimitados', included: true },
      { name: 'White-label completo', included: true },
      { name: '5 dominios', included: true },
      { name: 'API 10,000 req/día', included: true },
      { name: '5 usuarios del equipo', included: true },
      { name: 'Chat 24/7', included: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Para grandes organizaciones',
    icon: Rocket,
    monthlyPrice: null,
    yearlyPrice: null,
    popular: false,
    features: [
      { name: 'Todo ilimitado', included: true },
      { name: 'Branding completo', included: true },
      { name: 'Soporte dedicado + SLA', included: true },
      { name: 'SSO/SAML', included: true },
      { name: 'Dominios ilimitados', included: true },
      { name: 'API sin límites', included: true },
      { name: 'Usuarios ilimitados', included: true },
      { name: 'On-premise disponible', included: true },
    ],
  },
];

export default function UpgradePage() {
  const router = useRouter();
  const { user } = useUserStore();
  const [loading, setLoading] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  if (!user) return null;

  const currentPlanId = user.plan || 'free';

  const handleUpgrade = async (planId: string) => {
    if (planId === 'enterprise') {
      router.push('/contact?type=enterprise');
      return;
    }

    if (planId === currentPlanId || planId === 'free') {
      return;
    }

    setLoading(planId);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId,
          billingCycle
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        // Demo mode - simulate upgrade
        await new Promise(r => setTimeout(r, 1500));
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(null);
    }
  };

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return 'Personalizado';
    if (plan.monthlyPrice === 0) return 'Gratis';
    const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    return `€${price}`;
  };

  const getPeriod = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null || plan.monthlyPrice === 0) return '';
    return billingCycle === 'monthly' ? '/mes' : '/año';
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (!plan.monthlyPrice || !plan.yearlyPrice) return 0;
    const yearlyCost = plan.yearlyPrice;
    const monthlyCost = plan.monthlyPrice * 12;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Actualizar Plan</h1>
          <p className="text-gray-400">
            Elige el plan que mejor se adapte a tus necesidades
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
              -17%
            </span>
          </button>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {plans.map((plan) => {
            const isCurrent = plan.id === currentPlanId;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-5 flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-2 border-purple-500'
                    : isCurrent
                    ? 'bg-green-500/10 border-2 border-green-500/50'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {plan.popular && !isCurrent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    Más Popular
                  </div>
                )}
                {isCurrent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    Plan Actual
                  </div>
                )}

                <div className="mb-4 mt-2">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    plan.popular && !isCurrent ? 'bg-purple-500' : isCurrent ? 'bg-green-500' : 'bg-gray-700'
                  }`}>
                    <plan.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{getPrice(plan)}</span>
                  <span className="text-gray-400 text-sm">{getPeriod(plan)}</span>
                  {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                    <p className="text-green-400 text-xs mt-1">Ahorras {getSavings(plan)}%</p>
                  )}
                </div>

                <ul className="space-y-2 mb-4 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {isCurrent ? (
                  <button
                    disabled
                    className="w-full py-2.5 rounded-xl font-medium bg-green-500/20 text-green-400 border border-green-500/30 cursor-default"
                  >
                    Plan Actual
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={loading !== null}
                    className={`w-full py-2.5 rounded-xl font-medium transition flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {loading === plan.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : plan.monthlyPrice === null ? (
                      'Contactar'
                    ) : (
                      'Elegir Plan'
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust & Guarantee */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Shield, title: 'Garantía 14 días', desc: 'Devolución sin preguntas' },
            { icon: Zap, title: 'Sin permanencia', desc: 'Cancela cuando quieras' },
            { icon: Crown, title: 'Cambio instantáneo', desc: 'Acceso inmediato a features' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
                <item.icon className="w-5 h-5 text-purple-400" />
              </div>
              <h4 className="text-white font-medium text-sm">{item.title}</h4>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Help */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">¿Tienes preguntas sobre los planes?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              Ver comparación detallada
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/contact"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              Contactar con ventas
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

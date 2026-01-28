'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Check,
  X,
  HelpCircle,
  Zap,
  Crown,
  Building2,
  Rocket,
  Users,
  Star,
  ArrowRight,
  Shield,
} from 'lucide-react';

const plans = [
  {
    id: 'free',
    name: 'Free',
    description: 'Para empezar y probar',
    icon: Zap,
    monthlyPrice: 0,
    yearlyPrice: 0,
    popular: false,
    features: [
      { name: 'Links', value: '5', included: true },
      { name: 'Temas', value: '3 básicos', included: true },
      { name: 'Analytics', value: 'Básicos (7 días)', included: true },
      { name: 'Página personalizada', value: true, included: true },
      { name: 'SSL incluido', value: true, included: true },
      { name: 'Marca LinkForge', value: true, included: true },
      { name: 'Dominio personalizado', value: false, included: false },
      { name: 'Códigos QR', value: false, included: false },
      { name: 'Programación de links', value: false, included: false },
      { name: 'Integraciones', value: false, included: false },
      { name: 'Soporte prioritario', value: false, included: false },
      { name: 'API Access', value: false, included: false },
    ],
    cta: 'Empezar Gratis',
    ctaLink: '/auth/register',
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
      { name: 'Links', value: '25', included: true },
      { name: 'Temas', value: '10 premium', included: true },
      { name: 'Analytics', value: '30 días', included: true },
      { name: 'Página personalizada', value: true, included: true },
      { name: 'SSL incluido', value: true, included: true },
      { name: 'Marca LinkForge', value: 'Removible', included: true },
      { name: 'Dominio personalizado', value: false, included: false },
      { name: 'Códigos QR', value: '5/mes', included: true },
      { name: 'Programación de links', value: false, included: false },
      { name: 'Integraciones', value: '3 básicas', included: true },
      { name: 'Soporte prioritario', value: false, included: false },
      { name: 'API Access', value: false, included: false },
    ],
    cta: 'Comenzar',
    ctaLink: '/auth/register?plan=starter',
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
      { name: 'Links', value: 'Ilimitados', included: true },
      { name: 'Temas', value: 'Todos (+30)', included: true },
      { name: 'Analytics', value: 'Avanzados (1 año)', included: true },
      { name: 'Página personalizada', value: true, included: true },
      { name: 'SSL incluido', value: true, included: true },
      { name: 'Marca LinkForge', value: 'Sin marca', included: true },
      { name: 'Dominio personalizado', value: '1 dominio', included: true },
      { name: 'Códigos QR', value: 'Ilimitados', included: true },
      { name: 'Programación de links', value: true, included: true },
      { name: 'Integraciones', value: 'Todas', included: true },
      { name: 'Soporte prioritario', value: 'Email 24h', included: true },
      { name: 'API Access', value: '1,000 req/día', included: true },
    ],
    cta: 'Comenzar Pro',
    ctaLink: '/auth/register?plan=pro',
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
      { name: 'Links', value: 'Ilimitados', included: true },
      { name: 'Temas', value: 'Todos + Custom', included: true },
      { name: 'Analytics', value: 'Avanzados (ilimitado)', included: true },
      { name: 'Página personalizada', value: true, included: true },
      { name: 'SSL incluido', value: true, included: true },
      { name: 'Marca LinkForge', value: 'White-label', included: true },
      { name: 'Dominio personalizado', value: '5 dominios', included: true },
      { name: 'Códigos QR', value: 'Ilimitados + Branding', included: true },
      { name: 'Programación de links', value: true, included: true },
      { name: 'Integraciones', value: 'Todas + Webhooks', included: true },
      { name: 'Soporte prioritario', value: 'Chat 24/7', included: true },
      { name: 'API Access', value: '10,000 req/día', included: true },
      { name: 'Usuarios del equipo', value: '5 miembros', included: true },
      { name: 'Roles y permisos', value: true, included: true },
      { name: 'SSO/SAML', value: false, included: false },
    ],
    cta: 'Comenzar Business',
    ctaLink: '/auth/register?plan=business',
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
      { name: 'Links', value: 'Ilimitados', included: true },
      { name: 'Temas', value: 'Custom branding', included: true },
      { name: 'Analytics', value: 'Enterprise + Export', included: true },
      { name: 'Página personalizada', value: true, included: true },
      { name: 'SSL incluido', value: true, included: true },
      { name: 'Marca LinkForge', value: 'Full white-label', included: true },
      { name: 'Dominio personalizado', value: 'Ilimitados', included: true },
      { name: 'Códigos QR', value: 'Todo ilimitado', included: true },
      { name: 'Programación de links', value: true, included: true },
      { name: 'Integraciones', value: 'Custom + Dedicadas', included: true },
      { name: 'Soporte prioritario', value: 'Dedicado + SLA', included: true },
      { name: 'API Access', value: 'Sin límites', included: true },
      { name: 'Usuarios del equipo', value: 'Ilimitados', included: true },
      { name: 'Roles y permisos', value: 'Avanzados', included: true },
      { name: 'SSO/SAML', value: true, included: true },
      { name: 'On-premise disponible', value: true, included: true },
      { name: 'Contrato personalizado', value: true, included: true },
    ],
    cta: 'Contactar Ventas',
    ctaLink: '/contact?type=enterprise',
  },
];

const faqs = [
  {
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer: 'Sí, puedes actualizar o bajar de plan cuando quieras. Los cambios se aplican inmediatamente y se prorratea el costo.',
  },
  {
    question: '¿Hay período de prueba?',
    answer: 'El plan Free es para siempre gratis. Los planes de pago tienen garantía de devolución de 14 días.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos todas las tarjetas de crédito/débito principales, PayPal, y transferencias bancarias para Enterprise.',
  },
  {
    question: '¿Los precios incluyen IVA?',
    answer: 'Los precios mostrados no incluyen IVA. El impuesto se calculará según tu ubicación al momento del pago.',
  },
  {
    question: '¿Qué pasa con mis links si cancelo?',
    answer: 'Tus links seguirán activos pero se limitarán a las funcionalidades del plan Free. No perdemos tu contenido.',
  },
  {
    question: '¿Ofrecen descuentos para ONGs o educación?',
    answer: 'Sí, ofrecemos 50% de descuento para organizaciones sin fines de lucro y educativas verificadas.',
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Planes para cada
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> necesidad</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Desde creadores individuales hasta grandes empresas. Elige el plan que mejor se adapte a ti.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-gray-800 p-2 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                billingCycle === 'monthly'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-medium transition flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Anual
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">-17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-2 border-purple-500 scale-105 z-10'
                    : 'bg-gray-800/50 border border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Más Popular
                  </div>
                )}

                <div className="mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    plan.popular ? 'bg-purple-500' : 'bg-gray-700'
                  }`}>
                    <plan.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{getPrice(plan)}</span>
                  <span className="text-gray-400">{getPeriod(plan)}</span>
                  {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                    <p className="text-green-400 text-sm mt-1">Ahorras {getSavings(plan)}%</p>
                  )}
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.slice(0, 8).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                        {feature.name}
                        {typeof feature.value === 'string' && feature.included && (
                          <span className="text-purple-400 ml-1">({feature.value})</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink}
                  className={`block text-center py-3 rounded-xl font-medium transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison Table */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Comparación detallada de planes
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Característica</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="text-center py-4 px-4 text-white font-semibold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((_, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-gray-800">
                    <td className="py-4 px-4 text-gray-300">{plans[0].features[featureIndex].name}</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {plan.features[featureIndex] ? (
                          plan.features[featureIndex].included ? (
                            typeof plan.features[featureIndex].value === 'boolean' ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <span className="text-purple-400">{plan.features[featureIndex].value}</span>
                            )
                          ) : (
                            <X className="w-5 h-5 text-gray-600 mx-auto" />
                          )
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Garantía 14 días', desc: 'Devolución sin preguntas' },
              { icon: Zap, title: 'Sin permanencia', desc: 'Cancela cuando quieras' },
              { icon: Users, title: '+50,000 usuarios', desc: 'Confían en nosotros' },
              { icon: Star, title: '4.9/5 estrellas', desc: 'Valoración media' },
            ].map((badge, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                  <badge.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold">{badge.title}</h4>
                <p className="text-gray-400 text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Preguntas Frecuentes</h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="text-white font-semibold mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h4>
                <p className="text-gray-400 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas ayuda para elegir?</h2>
            <p className="text-gray-300 mb-8">
              Nuestro equipo puede ayudarte a encontrar el plan perfecto para tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
              >
                Hablar con Ventas
              </Link>
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition"
              >
                Empezar Gratis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  ArrowRight, Check, Building2, Users, Shield, BarChart3,
  Lock, Globe, Zap, FileText, Settings, Headphones,
  Award, TrendingUp, Clock, Database
} from 'lucide-react';

const features = [
  { icon: Users, title: 'Multi-usuario', desc: 'Gestiona múltiples perfiles desde una sola cuenta de equipo' },
  { icon: Shield, title: 'SSO/SAML', desc: 'Integración con tu proveedor de identidad corporativo' },
  { icon: BarChart3, title: 'Analytics avanzado', desc: 'Reportes detallados exportables y API de datos' },
  { icon: Lock, title: 'Permisos granulares', desc: 'Control total sobre quién puede editar qué' },
  { icon: Globe, title: 'Dominios personalizados', desc: 'Usa tus propios dominios con SSL incluido' },
  { icon: Database, title: 'API empresarial', desc: 'Integra LinkForge con tus sistemas internos' },
];

const benefits = [
  { icon: Clock, title: 'Ahorra tiempo', desc: 'Gestiona todos los links de tu equipo en un solo lugar' },
  { icon: TrendingUp, title: 'Aumenta conversiones', desc: 'Páginas optimizadas para maximizar clicks' },
  { icon: Award, title: 'Marca profesional', desc: 'Diseños corporativos que reflejan tu identidad' },
  { icon: Headphones, title: 'Soporte dedicado', desc: 'Account manager personal para tu empresa' },
];

const plans = [
  {
    name: 'Business',
    price: '29.99',
    features: ['Hasta 10 usuarios', 'Dominios personalizados', 'Analytics avanzado', 'Soporte prioritario', 'API access', 'Webhooks'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Usuarios ilimitados', 'SSO/SAML', 'SLA garantizado', 'Infraestructura dedicada', 'Onboarding personalizado', 'Account manager'],
  },
];

const logos = ['Acme Corp', 'TechStart', 'GlobalMedia', 'InnovateLab', 'DigitalFirst', 'CloudPro'];

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm">Para Empresas</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                La solución enterprise para
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> gestión de enlaces</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8">
                Control centralizado, seguridad empresarial y analytics avanzado
                para equipos de cualquier tamaño.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Contactar ventas
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/pricing" className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/10">
                  Ver precios
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                <div className="relative bg-gray-800/50 backdrop-blur rounded-3xl border border-white/10 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Acme Corporation</div>
                      <div className="text-gray-500 text-sm">12 miembros del equipo</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {['Marketing Team', 'Sales Team', 'Product Team'].map((team, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-gray-300">{team}</span>
                        <span className="text-gray-500 text-sm">{3 + i} perfiles</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-500 mb-8">Empresas que confían en LinkForge</p>
          <div className="flex flex-wrap justify-center gap-8">
            {logos.map((logo, i) => (
              <div key={i} className="px-6 py-3 bg-white/5 rounded-lg text-gray-400 font-medium">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Funcionalidades enterprise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Seguridad, control y escalabilidad para organizaciones exigentes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Por qué las empresas eligen LinkForge
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {plans.map((plan, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-blue-400 mb-4">
                    {plan.price === 'Custom' ? 'Personalizado' : `€${plan.price}/mes`}
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-blue-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para escalar?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Habla con nuestro equipo de ventas para una demo personalizada
              y descubre cómo LinkForge puede ayudar a tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all"
              >
                Solicitar demo
              </Link>
              <Link
                href="/developers"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/10"
              >
                Ver documentación API
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

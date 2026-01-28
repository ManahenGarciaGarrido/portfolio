'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  ArrowRight, Briefcase, Users, Building, BarChart3,
  Palette, Settings, Shield, Globe, Zap, Check,
  Star, Award, Clock, Layers
} from 'lucide-react';

const features = [
  { icon: Users, title: 'Multi-cliente', desc: 'Gestiona todos tus clientes desde un solo dashboard' },
  { icon: Palette, title: 'White-label', desc: 'Elimina nuestra marca y usa la tuya propia' },
  { icon: BarChart3, title: 'Reportes para clientes', desc: 'Genera informes profesionales automáticos' },
  { icon: Settings, title: 'Permisos por cliente', desc: 'Define qué puede ver y editar cada cliente' },
  { icon: Globe, title: 'Dominios ilimitados', desc: 'Configura dominios propios para cada cliente' },
  { icon: Shield, title: 'Facturación centralizada', desc: 'Una sola factura para todos tus clientes' },
];

const benefits = [
  { value: '70%', label: 'Ahorro de tiempo en gestión' },
  { value: '€500+', label: 'Ingresos extra por cliente/año' },
  { value: '100%', label: 'Personalización white-label' },
  { value: '24/7', label: 'Soporte dedicado para agencias' },
];

const pricing = {
  name: 'Agency',
  price: '99',
  features: [
    'Hasta 50 clientes',
    'White-label completo',
    'Reportes automatizados',
    'API access',
    'Dominios ilimitados',
    'Soporte prioritario',
    'Account manager dedicado',
    'Onboarding personalizado',
  ],
};

const testimonials = [
  {
    name: 'Digital Masters',
    person: 'Carlos Ruiz, CEO',
    text: 'Gestionamos 40+ clientes con LinkForge. El white-label nos permite ofrecer el servicio como propio.'
  },
  {
    name: 'Social Pro Agency',
    person: 'Ana García, Directora',
    text: 'Los reportes automáticos nos ahorran horas cada semana. Nuestros clientes están encantados.'
  },
];

export default function AgenciesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Briefcase className="w-4 h-4 text-violet-400" />
                <span className="text-violet-300 text-sm">Para Agencias</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Escala tu agencia con
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400"> LinkForge</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8">
                Gestiona las páginas de links de todos tus clientes desde un solo lugar.
                White-label, reportes automáticos y facturación centralizada.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Hablar con ventas
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/pricing" className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/10">
                  Ver planes
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
                <div className="relative bg-gray-800/50 backdrop-blur rounded-3xl border border-white/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-medium">Tus clientes</h3>
                    <span className="text-violet-400 text-sm">12 activos</span>
                  </div>
                  <div className="space-y-3">
                    {['Restaurante Sol', 'Fitness Pro', 'Tech Store', 'Beauty Salon'].map((client, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                            <Building className="w-4 h-4 text-violet-400" />
                          </div>
                          <span className="text-gray-300">{client}</span>
                        </div>
                        <span className="text-green-400 text-xs">Activo</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {benefits.map((b, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-violet-400">{b.value}</div>
              <div className="text-gray-500 text-sm">{b.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Herramientas para agencias
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Todo lo que necesitas para ofrecer servicios de gestión de enlaces a tus clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all">
                <feature.icon className="w-10 h-10 text-violet-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Plan Agency
              </h2>
              <p className="text-gray-400 mb-6">
                Diseñado específicamente para agencias de marketing y social media
                que gestionan múltiples clientes.
              </p>
              <div className="space-y-4">
                {testimonials.map((t, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-gray-300 text-sm mb-2">"{t.text}"</p>
                    <div className="text-violet-400 text-sm font-medium">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.person}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-violet-900/30 to-purple-900/30 border border-violet-500/30">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pricing.name}</h3>
                <div className="text-4xl font-bold text-white">
                  €{pricing.price}<span className="text-lg text-gray-400">/mes</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {pricing.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-violet-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-xl text-center hover:opacity-90 transition-all"
              >
                Solicitar acceso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-12 h-12 text-violet-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Únete al programa de agencias
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Obtén acceso a herramientas exclusivas, soporte prioritario y
            descuentos especiales para todos tus clientes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all"
          >
            Contactar ahora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

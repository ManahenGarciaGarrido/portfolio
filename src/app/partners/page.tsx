'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Handshake, ArrowRight, Check, Users, DollarSign,
  Zap, HeadphonesIcon, Award, BookOpen, Rocket,
  Building, Code, Megaphone, Globe
} from 'lucide-react';

const partnerTypes = [
  {
    icon: Building,
    title: 'Agencias',
    description: 'Ofrece LinkForge a tus clientes con descuentos exclusivos y soporte prioritario.',
    benefits: ['Descuentos por volumen', 'Dashboard multi-cliente', 'White-label disponible', 'Account manager dedicado'],
    cta: 'Programa de Agencias',
    href: '/solutions/agencies',
  },
  {
    icon: Code,
    title: 'Integradores',
    description: 'Integra LinkForge en tus productos y servicios con nuestra API.',
    benefits: ['API access completo', 'Documentación técnica', 'Sandbox de desarrollo', 'Soporte técnico directo'],
    cta: 'Programa de Integradores',
    href: '/developers',
  },
  {
    icon: Megaphone,
    title: 'Afiliados',
    description: 'Gana comisiones recomendando LinkForge a tu audiencia.',
    benefits: ['30% comisión recurrente', 'Materiales de marketing', 'Dashboard de seguimiento', 'Pagos mensuales'],
    cta: 'Programa de Afiliados',
    href: '#affiliate',
  },
  {
    icon: Globe,
    title: 'Revendedores',
    description: 'Revende LinkForge con tu propia marca y precios.',
    benefits: ['Precios mayoristas', 'Marca blanca completa', 'Facturación directa', 'Formación incluida'],
    cta: 'Programa de Revendedores',
    href: '#reseller',
  },
];

const benefits = [
  { icon: DollarSign, title: 'Ingresos recurrentes', desc: 'Gana hasta un 30% de comisión de por vida' },
  { icon: HeadphonesIcon, title: 'Soporte dedicado', desc: 'Equipo de partners disponible para ayudarte' },
  { icon: BookOpen, title: 'Recursos exclusivos', desc: 'Materiales de marketing y formación' },
  { icon: Rocket, title: 'Early access', desc: 'Acceso anticipado a nuevas funciones' },
];

const stats = [
  { value: '500+', label: 'Partners activos' },
  { value: '€2M+', label: 'Pagado en comisiones' },
  { value: '30%', label: 'Comisión máxima' },
  { value: '24h', label: 'Tiempo de respuesta' },
];

const currentPartners = [
  'Digital Masters', 'Social Pro', 'Marketing Hub', 'Creative Agency',
  'Growth Studio', 'Brand Factory', 'Media Works', 'Content Lab'
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Handshake className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Programa de Partners</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Crece con
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> LinkForge</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Únete a nuestro programa de partners y genera ingresos recurrentes
            mientras ayudas a otros a crear su presencia online.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#programs"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center gap-2"
            >
              Ver programas
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Types */}
      <section id="programs" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Elige tu programa</h2>
            <p className="text-gray-400">Encuentra el programa que mejor se adapte a tu negocio</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnerTypes.map((type, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-purple-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                <p className="text-gray-400 mb-6">{type.description}</p>

                <ul className="space-y-3 mb-8">
                  {type.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-purple-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link
                  href={type.href}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium"
                >
                  {type.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Beneficios para partners</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <benefit.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Partners destacados</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {currentPartners.map((partner, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-400"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Section */}
      <section id="affiliate" className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Programa de Afiliados
              </h2>
              <p className="text-gray-400 mb-6">
                Gana un 30% de comisión recurrente por cada cliente que refieras.
                Sin límites, sin complicaciones.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Comisión del 30% de por vida',
                  'Cookie de 90 días',
                  'Pagos mensuales via PayPal o transferencia',
                  'Dashboard en tiempo real',
                  'Materiales de marketing listos para usar',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition-all"
              >
                Convertirme en afiliado
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">30%</div>
                <div className="text-gray-400 mb-6">comisión recurrente</div>

                <div className="space-y-4 text-left">
                  <div className="flex justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400">1 cliente Pro</span>
                    <span className="text-white font-medium">€3/mes</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400">10 clientes Pro</span>
                    <span className="text-white font-medium">€30/mes</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400">100 clientes Pro</span>
                    <span className="text-green-400 font-medium">€300/mes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Award className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para ser partner?
          </h2>
          <p className="text-gray-400 mb-8">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo en 24-48h.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
          >
            Solicitar acceso
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

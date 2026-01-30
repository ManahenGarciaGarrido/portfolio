'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Check,
  X,
  Minus,
  ArrowRight,
  Crown,
  Zap,
  Shield,
  Star,
} from 'lucide-react';

const competitors = [
  { id: 'linkforge', name: 'LinkForge', highlight: true },
  { id: 'linktree', name: 'Linktree', highlight: false },
  { id: 'beacons', name: 'Beacons', highlight: false },
  { id: 'linkbio', name: 'Link in Bio', highlight: false },
];

const features = [
  {
    category: 'Precios',
    items: [
      {
        name: 'Plan gratuito',
        linkforge: 'Sí - 5 links',
        linktree: 'Sí - Limitado',
        beacons: 'Sí - Con marca',
        linkbio: 'Sí - 3 links',
      },
      {
        name: 'Precio Pro (mensual)',
        linkforge: '€4.99',
        linktree: '€5',
        beacons: '€10',
        linkbio: '€3.99',
      },
      {
        name: 'Precio Business',
        linkforge: '€29.99',
        linktree: '€24',
        beacons: '€25',
        linkbio: 'No disponible',
      },
    ],
  },
  {
    category: 'Links y Contenido',
    items: [
      { name: 'Links ilimitados (Pro)', linkforge: true, linktree: true, beacons: true, linkbio: true },
      { name: 'Programación de links', linkforge: true, linktree: false, beacons: true, linkbio: false },
      { name: 'Links con contraseña', linkforge: true, linktree: true, beacons: false, linkbio: false },
      { name: 'Códigos QR personalizados', linkforge: true, linktree: true, beacons: true, linkbio: false },
      { name: 'Embeds de video', linkforge: true, linktree: true, beacons: true, linkbio: true },
      { name: 'Formularios de email', linkforge: true, linktree: true, beacons: true, linkbio: false },
    ],
  },
  {
    category: 'Personalización',
    items: [
      { name: 'Temas gratuitos', linkforge: '3', linktree: '1', beacons: '5', linkbio: '2' },
      { name: 'Temas premium', linkforge: '30+', linktree: '20+', beacons: '15+', linkbio: '10+' },
      { name: 'CSS personalizado', linkforge: true, linktree: true, beacons: true, linkbio: false },
      { name: 'Eliminar marca', linkforge: 'Starter+', linktree: 'Pro', beacons: 'Pro', linkbio: 'Pro' },
      { name: 'Dominio personalizado', linkforge: 'Pro', linktree: 'Pro Plus', beacons: 'Pro', linkbio: 'No' },
      { name: 'Animaciones', linkforge: true, linktree: true, beacons: false, linkbio: false },
    ],
  },
  {
    category: 'Analytics',
    items: [
      { name: 'Clicks básicos', linkforge: true, linktree: true, beacons: true, linkbio: true },
      { name: 'Retención de datos', linkforge: '1 año', linktree: '28 días Free', beacons: '90 días', linkbio: '30 días' },
      { name: 'Ubicación geográfica', linkforge: 'Pro', linktree: 'Pro', beacons: 'Pro', linkbio: false },
      { name: 'Dispositivos', linkforge: true, linktree: 'Pro', beacons: true, linkbio: false },
      { name: 'UTM tracking', linkforge: true, linktree: 'Pro', beacons: true, linkbio: false },
      { name: 'Export CSV', linkforge: true, linktree: 'Pro', beacons: true, linkbio: false },
    ],
  },
  {
    category: 'Integraciones',
    items: [
      { name: 'Google Analytics', linkforge: true, linktree: true, beacons: true, linkbio: false },
      { name: 'Meta Pixel', linkforge: true, linktree: true, beacons: true, linkbio: false },
      { name: 'TikTok Pixel', linkforge: true, linktree: true, beacons: true, linkbio: false },
      { name: 'Mailchimp', linkforge: true, linktree: true, beacons: true, linkbio: false },
      { name: 'Zapier', linkforge: true, linktree: true, beacons: true, linkbio: false },
      { name: 'API pública', linkforge: 'Pro', linktree: 'Pro Plus', beacons: 'Enterprise', linkbio: false },
      { name: 'Webhooks', linkforge: 'Business', linktree: 'Pro Plus', beacons: 'Enterprise', linkbio: false },
    ],
  },
  {
    category: 'Soporte',
    items: [
      { name: 'Email', linkforge: true, linktree: true, beacons: true, linkbio: true },
      { name: 'Chat en vivo', linkforge: 'Pro+', linktree: 'Pro', beacons: 'Pro', linkbio: false },
      { name: 'Soporte prioritario', linkforge: 'Business', linktree: 'Teams', beacons: 'Enterprise', linkbio: false },
      { name: 'Account manager', linkforge: 'Enterprise', linktree: 'Enterprise', beacons: 'Enterprise', linkbio: false },
      { name: 'SLA garantizado', linkforge: 'Enterprise', linktree: 'Enterprise', beacons: 'Enterprise', linkbio: false },
    ],
  },
];

const renderValue = (value: boolean | string) => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-green-400 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-red-400 mx-auto" />
    );
  }
  if (value === 'No' || value === 'No disponible') {
    return <span className="text-red-400">{value}</span>;
  }
  return <span className="text-gray-300">{value}</span>;
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            LinkForge vs
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> Competidores</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comparativa completa y honesta. Elige la mejor herramienta para tus necesidades.
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Crown,
                title: 'Mejor relación calidad-precio',
                description: 'Más funcionalidades por menos dinero comparado con Linktree Pro.',
              },
              {
                icon: Zap,
                title: 'Más funciones en plan gratuito',
                description: '5 links gratis vs 1-3 en competidores. Sin trucos.',
              },
              {
                icon: Shield,
                title: 'Retención de datos superior',
                description: '1 año de analytics vs 28-90 días en otros servicios.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              {/* Header */}
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium w-1/4">Característica</th>
                  {competitors.map((comp) => (
                    <th
                      key={comp.id}
                      className={`text-center py-4 px-4 ${
                        comp.highlight ? 'bg-purple-500/10' : ''
                      }`}
                    >
                      <span className={`font-semibold ${comp.highlight ? 'text-purple-400' : 'text-white'}`}>
                        {comp.name}
                      </span>
                      {comp.highlight && (
                        <span className="block text-xs text-green-400 mt-1">Recomendado</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {features.map((section) => (
                  <>
                    <tr key={section.category} className="bg-gray-800/50">
                      <td colSpan={5} className="py-3 px-4 text-purple-400 font-semibold">
                        {section.category}
                      </td>
                    </tr>
                    {section.items.map((item, index) => (
                      <tr key={`${section.category}-${index}`} className="border-b border-gray-800">
                        <td className="py-3 px-4 text-gray-300">{item.name}</td>
                        <td className={`py-3 px-4 text-center bg-purple-500/5`}>
                          {renderValue(item.linkforge)}
                        </td>
                        <td className="py-3 px-4 text-center">{renderValue(item.linktree)}</td>
                        <td className="py-3 px-4 text-center">{renderValue(item.beacons)}</td>
                        <td className="py-3 px-4 text-center">{renderValue(item.linkbio)}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-4 text-center">
            * Información actualizada a enero 2024. Los precios y características pueden variar.
          </p>
        </div>
      </section>

      {/* Detailed Comparisons */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Comparativas Detalladas
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'LinkForge vs Linktree',
                pros: [
                  'Precio Pro más económico (€4.99 vs €5)',
                  'Más links gratuitos (5 vs ilimitado pero con limitaciones)',
                  'Retención de analytics de 1 año vs 28 días',
                  'API disponible desde Pro',
                ],
                cons: [
                  'Linktree tiene más reconocimiento de marca',
                  'Linktree tiene más integraciones de pago',
                ],
              },
              {
                title: 'LinkForge vs Beacons',
                pros: [
                  'Precio significativamente más bajo (€4.99 vs €10)',
                  'Más temas premium incluidos',
                  'Programación de links desde Starter',
                  'Webhooks disponibles en Business vs Enterprise',
                ],
                cons: [
                  'Beacons tiene herramientas de monetización integradas',
                  'Beacons ofrece email marketing nativo',
                ],
              },
            ].map((comparison) => (
              <div
                key={comparison.title}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
              >
                <h3 className="text-xl font-bold text-white mb-6">{comparison.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-green-400 font-medium mb-3 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Ventajas de LinkForge
                    </h4>
                    <ul className="space-y-2">
                      {comparison.pros.map((pro, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-amber-400 font-medium mb-3 flex items-center gap-2">
                      <Minus className="w-5 h-5" />
                      Consideraciones
                    </h4>
                    <ul className="space-y-2">
                      {comparison.cons.map((con, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-amber-400 mt-1">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Try It Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 md:p-12 border border-purple-500/30 text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pruébalo tú mismo
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              La mejor forma de comparar es probar. Crea tu cuenta gratuita y descubre
              por qué LinkForge ofrece la mejor relación calidad-precio del mercado.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/auth/register"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition"
              >
                Empezar Gratis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition border border-white/20"
              >
                Ver Precios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para hacer el cambio?
          </h2>
          <p className="text-gray-400 mb-8">
            Importa tus links desde Linktree, Beacons o cualquier otra plataforma en segundos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition"
            >
              Empezar Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/help/migrate"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition border border-white/20"
            >
              Guía de Migración
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Code,
  Book,
  Zap,
  Shield,
  Globe,
  Terminal,
  Webhook,
  Key,
  GitBranch,
  Package,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'API RESTful',
    description: 'API moderna y bien documentada siguiendo las mejores prácticas REST.',
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    description: 'Recibe notificaciones en tiempo real de eventos importantes.',
  },
  {
    icon: Shield,
    title: 'OAuth 2.0',
    description: 'Autenticación segura con tokens de acceso y refresh.',
  },
  {
    icon: Globe,
    title: 'CDN Global',
    description: 'Endpoints distribuidos globalmente para baja latencia.',
  },
];

const sdks = [
  { name: 'JavaScript/TypeScript', icon: '🟨', status: 'Disponible' },
  { name: 'Python', icon: '🐍', status: 'Disponible' },
  { name: 'Ruby', icon: '💎', status: 'Disponible' },
  { name: 'PHP', icon: '🐘', status: 'Próximamente' },
  { name: 'Go', icon: '🔵', status: 'Próximamente' },
  { name: 'Java', icon: '☕', status: 'Próximamente' },
];

const endpoints = [
  { method: 'GET', path: '/v1/links', description: 'Listar todos los links' },
  { method: 'POST', path: '/v1/links', description: 'Crear un nuevo link' },
  { method: 'PUT', path: '/v1/links/:id', description: 'Actualizar un link' },
  { method: 'DELETE', path: '/v1/links/:id', description: 'Eliminar un link' },
  { method: 'GET', path: '/v1/analytics', description: 'Obtener analytics' },
  { method: 'GET', path: '/v1/profile', description: 'Obtener perfil' },
  { method: 'PUT', path: '/v1/profile', description: 'Actualizar perfil' },
  { method: 'GET', path: '/v1/themes', description: 'Listar temas disponibles' },
];

const codeExample = `import LinkForge from '@linkforge/sdk';

const client = new LinkForge({
  apiKey: 'lf_api_xxxxxxxxxxxxx'
});

// Obtener todos los links
const links = await client.links.list();

// Crear un nuevo link
const newLink = await client.links.create({
  title: 'Mi Canal de YouTube',
  url: 'https://youtube.com/@micanal',
  enabled: true
});

// Obtener analytics
const analytics = await client.analytics.get({
  period: '30d'
});`;

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full mb-6">
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium">Para Desarrolladores</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Construye con la
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> API de LinkForge</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8">
                API RESTful potente y flexible para integrar LinkForge en tus aplicaciones. Documentación completa, SDKs y soporte dedicado.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/developers/docs"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition"
                >
                  <Book className="w-5 h-5" />
                  Ver Documentación
                </Link>
                <Link
                  href="/developers/quickstart"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition border border-white/20"
                >
                  <Terminal className="w-5 h-5" />
                  Quickstart
                </Link>
              </div>
            </div>

            {/* Code Preview */}
            <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-400 text-sm ml-2">example.ts</span>
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code className="text-gray-300">
                  {codeExample.split('\n').map((line, i) => (
                    <div key={i} className="leading-relaxed">
                      {line.includes('import') && <span className="text-purple-400">{line}</span>}
                      {line.includes('const') && !line.includes('import') && (
                        <>
                          <span className="text-purple-400">const </span>
                          <span className="text-white">{line.replace('const ', '')}</span>
                        </>
                      )}
                      {line.includes('await') && !line.includes('const') && (
                        <span className="text-green-400">{line}</span>
                      )}
                      {line.includes('//') && <span className="text-gray-500">{line}</span>}
                      {line.includes(':') && !line.includes('const') && !line.includes('//') && (
                        <span className="text-yellow-300">{line}</span>
                      )}
                      {!line.includes('import') && !line.includes('const') && !line.includes('await') && !line.includes('//') && !line.includes(':') && (
                        <span>{line}</span>
                      )}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Todo lo que necesitas para construir
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Herramientas y recursos diseñados para desarrolladores
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Endpoints intuitivos
              </h2>
              <p className="text-gray-400 mb-8">
                API RESTful diseñada siguiendo las mejores prácticas. Respuestas consistentes en JSON y códigos de error claros.
              </p>

              <div className="space-y-3">
                {endpoints.map((endpoint) => (
                  <div
                    key={endpoint.path}
                    className="flex items-center gap-4 bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                  >
                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                      endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <span className="font-mono text-white text-sm">{endpoint.path}</span>
                    <span className="text-gray-500 text-sm ml-auto">{endpoint.description}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/developers/docs/api"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mt-6"
              >
                Ver todos los endpoints
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* SDKs */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                SDKs oficiales
              </h2>
              <p className="text-gray-400 mb-8">
                Librerías oficiales para los lenguajes más populares. Instalación sencilla y tipado completo.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {sdks.map((sdk) => (
                  <div
                    key={sdk.name}
                    className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 flex items-center gap-3"
                  >
                    <span className="text-2xl">{sdk.icon}</span>
                    <div>
                      <p className="text-white font-medium">{sdk.name}</p>
                      <p className={`text-sm ${
                        sdk.status === 'Disponible' ? 'text-green-400' : 'text-gray-500'
                      }`}>
                        {sdk.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gray-800 rounded-xl p-4 border border-gray-700">
                <p className="text-gray-400 text-sm mb-2">Instalación (npm)</p>
                <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
                  <code className="text-green-400 text-sm">npm install @linkforge/sdk</code>
                  <button className="text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="text-gray-500 text-sm mb-4">Webhook Payload</div>
              <pre className="text-sm text-gray-300">
{`{
  "event": "link.clicked",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "link_id": "lnk_123456",
    "title": "Mi Canal",
    "clicks": 42,
    "referrer": "instagram.com",
    "country": "ES",
    "device": "mobile"
  }
}`}
              </pre>
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Webhook className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Webhooks en tiempo real
              </h2>
              <p className="text-gray-400 mb-6">
                Recibe notificaciones instantáneas cuando ocurren eventos importantes en tu cuenta.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Click en un link',
                  'Nuevo visitante',
                  'Link creado/actualizado',
                  'Umbral de clicks alcanzado',
                  'Suscripción actualizada',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/developers/docs/webhooks"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
              >
                Configurar webhooks
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Rate Limits Generosos</h2>
            <p className="text-gray-400">
              Límites diseñados para no frenar tu desarrollo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { plan: 'Pro', requests: '1,000', period: 'día', burst: '100/min' },
              { plan: 'Business', requests: '10,000', period: 'día', burst: '500/min' },
              { plan: 'Enterprise', requests: 'Ilimitadas', period: '', burst: 'Custom' },
            ].map((tier) => (
              <div
                key={tier.plan}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center"
              >
                <h3 className="text-white font-semibold mb-4">{tier.plan}</h3>
                <p className="text-4xl font-bold text-purple-400 mb-2">
                  {tier.requests}
                </p>
                <p className="text-gray-400 mb-4">requests/{tier.period || '∞'}</p>
                <p className="text-gray-500 text-sm">Burst: {tier.burst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30">
            <Key className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Obtén tu API Key
            </h2>
            <p className="text-gray-300 mb-8">
              Regístrate gratis y obtén acceso a la API en minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition"
              >
                Crear Cuenta Gratis
              </Link>
              <Link
                href="/developers/docs"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition border border-white/20"
              >
                <ExternalLink className="w-5 h-5" />
                Explorar Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

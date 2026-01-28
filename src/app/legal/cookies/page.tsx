'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Cookie, ArrowLeft } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/legal/privacy" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver a Privacidad
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Cookie className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Política de Cookies</h1>
          </div>

          <p className="text-gray-400 mb-8">Última actualización: 1 de Enero de 2026</p>

          <div className="prose prose-invert max-w-none">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-8">
              <p className="text-gray-300 m-0">
                Esta Política de Cookies explica qué son las cookies, qué tipos utilizamos,
                y cómo puedes gestionar tus preferencias. Al usar LinkForge, aceptas el uso
                de cookies de acuerdo con esta política.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. ¿Qué son las cookies?</h2>
            <p className="text-gray-400">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
              cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios
              web funcionen de manera más eficiente y proporcionar información a los propietarios
              del sitio.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Tipos de cookies que utilizamos</h2>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">2.1 Cookies esenciales</h3>
            <p className="text-gray-400">
              Estas cookies son necesarias para el funcionamiento del sitio web. Sin ellas,
              no podríamos proporcionar los servicios que has solicitado.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-white/10">
                    <th className="pb-3 pr-4">Cookie</th>
                    <th className="pb-3 pr-4">Propósito</th>
                    <th className="pb-3">Duración</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-mono text-purple-400">session_id</td>
                    <td className="py-3 pr-4">Mantener tu sesión iniciada</td>
                    <td className="py-3">Sesión</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-mono text-purple-400">csrf_token</td>
                    <td className="py-3 pr-4">Protección contra ataques CSRF</td>
                    <td className="py-3">Sesión</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-mono text-purple-400">cookie_consent</td>
                    <td className="py-3 pr-4">Recordar tus preferencias de cookies</td>
                    <td className="py-3">1 año</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">2.2 Cookies de rendimiento</h3>
            <p className="text-gray-400">
              Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro
              sitio web, recopilando información de forma anónima.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-white/10">
                    <th className="pb-3 pr-4">Cookie</th>
                    <th className="pb-3 pr-4">Propósito</th>
                    <th className="pb-3">Duración</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-mono text-purple-400">_ga</td>
                    <td className="py-3 pr-4">Google Analytics - identificación de usuarios</td>
                    <td className="py-3">2 años</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-mono text-purple-400">_gid</td>
                    <td className="py-3 pr-4">Google Analytics - identificación de sesión</td>
                    <td className="py-3">24 horas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">2.3 Cookies funcionales</h3>
            <p className="text-gray-400">
              Estas cookies permiten que el sitio web recuerde las elecciones que haces
              (como tu idioma preferido o la región en la que te encuentras) y proporcionan
              características mejoradas y más personales.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-white/10">
                    <th className="pb-3 pr-4">Cookie</th>
                    <th className="pb-3 pr-4">Propósito</th>
                    <th className="pb-3">Duración</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-mono text-purple-400">language</td>
                    <td className="py-3 pr-4">Recordar tu preferencia de idioma</td>
                    <td className="py-3">1 año</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-mono text-purple-400">theme</td>
                    <td className="py-3 pr-4">Recordar tu preferencia de tema</td>
                    <td className="py-3">1 año</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">2.4 Cookies de marketing</h3>
            <p className="text-gray-400">
              Estas cookies se utilizan para rastrear visitantes en los sitios web con el fin
              de mostrar anuncios relevantes. Solo las usamos con tu consentimiento explícito.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Cómo gestionar las cookies</h2>
            <p className="text-gray-400">
              Puedes gestionar tus preferencias de cookies en cualquier momento:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
              <li>A través de nuestro panel de preferencias de cookies</li>
              <li>Configurando tu navegador para rechazar cookies</li>
              <li>Eliminando las cookies existentes de tu navegador</li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
              <p className="text-yellow-200 text-sm m-0">
                <strong>Nota:</strong> Bloquear algunas cookies puede afectar tu experiencia en el sitio
                y limitar los servicios que podemos ofrecerte.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Cookies de terceros</h2>
            <p className="text-gray-400">
              Algunos de nuestros socios pueden establecer cookies en tu dispositivo.
              Estos terceros incluyen:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
              <li><strong>Google Analytics:</strong> Para análisis de uso del sitio</li>
              <li><strong>Stripe:</strong> Para procesamiento de pagos</li>
              <li><strong>Intercom:</strong> Para soporte al cliente</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Actualizaciones de esta política</h2>
            <p className="text-gray-400">
              Podemos actualizar esta Política de Cookies periódicamente. Te notificaremos
              cualquier cambio material publicando la nueva política en esta página.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Contacto</h2>
            <p className="text-gray-400">
              Si tienes preguntas sobre nuestra Política de Cookies, contáctanos en:
            </p>
            <p className="text-purple-400 mt-2">
              <a href="mailto:privacy@linkforge.io" className="hover:text-purple-300">privacy@linkforge.io</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

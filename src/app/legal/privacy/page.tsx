'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Política de Privacidad</h1>
          <p className="text-gray-400 mb-8">Última actualización: Enero 2024</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introducción</h2>
                <p>
                  En LinkForge (&ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo;), nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando utiliza nuestro servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Información que Recopilamos</h2>
                <h3 className="text-xl font-medium text-white mb-3">2.1 Información proporcionada por el usuario</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Información de registro: nombre, email, contraseña</li>
                  <li>Información de perfil: foto, biografía, enlaces</li>
                  <li>Información de pago: procesada de forma segura por Stripe</li>
                </ul>

                <h3 className="text-xl font-medium text-white mb-3 mt-6">2.2 Información recopilada automáticamente</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Datos de uso: páginas visitadas, clicks, tiempo en el sitio</li>
                  <li>Información del dispositivo: tipo, sistema operativo, navegador</li>
                  <li>Datos de ubicación: país, ciudad (basado en IP)</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Cómo Usamos su Información</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar y mantener nuestro servicio</li>
                  <li>Procesar transacciones y enviar notificaciones relacionadas</li>
                  <li>Personalizar su experiencia</li>
                  <li>Proporcionar analytics sobre el rendimiento de sus links</li>
                  <li>Comunicarnos con usted sobre actualizaciones y ofertas</li>
                  <li>Detectar y prevenir fraude o abuso</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Compartir Información</h2>
                <p className="mb-4">No vendemos su información personal. Podemos compartir información con:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Proveedores de servicios:</strong> Stripe para pagos, Vercel para hosting</li>
                  <li><strong>Analytics:</strong> Datos agregados y anónimos</li>
                  <li><strong>Requerimientos legales:</strong> Cuando sea necesario por ley</li>
                  <li><strong>Con su consentimiento:</strong> Integraciones que usted active</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Retención de Datos</h2>
                <p>
                  Mantenemos su información mientras su cuenta esté activa. Los datos de analytics se retienen según su plan (hasta 1 año para Pro). Puede solicitar la eliminación de su cuenta y datos en cualquier momento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Sus Derechos (GDPR)</h2>
                <p className="mb-4">Si reside en el EEE, tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al procesamiento</li>
                  <li>Portabilidad de datos</li>
                  <li>Retirar el consentimiento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Seguridad</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información, incluyendo encriptación SSL/TLS, hashing de contraseñas, y acceso restringido a datos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies</h2>
                <p>
                  Utilizamos cookies esenciales para el funcionamiento del servicio y cookies opcionales para analytics. Puede configurar sus preferencias en cualquier momento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Cambios en esta Política</h2>
                <p>
                  Podemos actualizar esta política ocasionalmente. Le notificaremos cambios significativos por email o mediante un aviso en nuestro servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Contacto</h2>
                <p>
                  Para preguntas sobre esta política o ejercer sus derechos, contacte a:{' '}
                  <a href="mailto:privacy@linkforge.app" className="text-purple-400 hover:text-purple-300">
                    privacy@linkforge.app
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

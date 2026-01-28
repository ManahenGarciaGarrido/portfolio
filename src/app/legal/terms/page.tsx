'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Términos de Servicio</h1>
          <p className="text-gray-400 mb-8">Última actualización: Enero 2024</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y utilizar LinkForge (&ldquo;el Servicio&rdquo;), usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al Servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Descripción del Servicio</h2>
                <p>
                  LinkForge es una plataforma que permite a los usuarios crear páginas personalizadas con enlaces a sus contenidos y redes sociales. El Servicio incluye funcionalidades gratuitas y de pago.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Cuentas de Usuario</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Debe proporcionar información veraz y completa al registrarse</li>
                  <li>Es responsable de mantener la seguridad de su cuenta</li>
                  <li>Debe notificarnos inmediatamente sobre cualquier uso no autorizado</li>
                  <li>No puede usar nombres de usuario ofensivos o que infrinjan marcas</li>
                  <li>Una persona o entidad solo puede tener una cuenta gratuita</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Uso Aceptable</h2>
                <p className="mb-4">No puede usar el Servicio para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contenido ilegal, difamatorio, obsceno o amenazante</li>
                  <li>Spam, phishing o distribución de malware</li>
                  <li>Infringir derechos de propiedad intelectual</li>
                  <li>Hacerse pasar por otra persona o entidad</li>
                  <li>Interferir con el funcionamiento del Servicio</li>
                  <li>Recopilar datos de otros usuarios sin consentimiento</li>
                  <li>Promover contenido de odio o discriminatorio</li>
                  <li>Vender o revender acceso al Servicio</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Contenido del Usuario</h2>
                <p className="mb-4">
                  Usted mantiene la propiedad de su contenido. Al publicar contenido, nos otorga una licencia mundial, no exclusiva y libre de regalías para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mostrar su contenido en el Servicio</li>
                  <li>Almacenar y hacer copias de seguridad</li>
                  <li>Modificar el formato para compatibilidad técnica</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Planes y Pagos</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Los precios se muestran en EUR y no incluyen impuestos aplicables</li>
                  <li>Las suscripciones se renuevan automáticamente</li>
                  <li>Puede cancelar en cualquier momento desde su dashboard</li>
                  <li>No hay reembolsos por períodos parciales</li>
                  <li>Nos reservamos el derecho de modificar precios con 30 días de aviso</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Garantía de Devolución</h2>
                <p>
                  Ofrecemos garantía de devolución de 14 días para nuevas suscripciones de pago. Para solicitarla, contacte a soporte dentro del período indicado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Propiedad Intelectual</h2>
                <p>
                  El Servicio y su contenido original (excluyendo contenido de usuarios) son propiedad de LinkForge. Nuestra marca, logos y elementos de diseño están protegidos por derechos de autor y marcas registradas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Terminación</h2>
                <p className="mb-4">
                  Podemos suspender o terminar su cuenta si:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Viola estos Términos de Servicio</li>
                  <li>Su uso genera riesgo legal para nosotros</li>
                  <li>Su cuenta ha estado inactiva por más de 12 meses</li>
                </ul>
                <p className="mt-4">
                  Puede eliminar su cuenta en cualquier momento desde Ajustes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Limitación de Responsabilidad</h2>
                <p>
                  El Servicio se proporciona &ldquo;tal cual&rdquo;. No garantizamos que estará libre de errores o disponible en todo momento. En ningún caso seremos responsables por daños indirectos, incidentales o consecuentes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Indemnización</h2>
                <p>
                  Usted acepta indemnizar a LinkForge frente a cualquier reclamación derivada de su uso del Servicio o violación de estos términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Modificaciones</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos. Le notificaremos cambios materiales con al menos 30 días de antelación. El uso continuado constituye aceptación.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">13. Ley Aplicable</h2>
                <p>
                  Estos términos se rigen por las leyes de España. Cualquier disputa se resolverá en los tribunales de Madrid.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">14. Contacto</h2>
                <p>
                  Para preguntas sobre estos términos:{' '}
                  <a href="mailto:legal@linkforge.app" className="text-purple-400 hover:text-purple-300">
                    legal@linkforge.app
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

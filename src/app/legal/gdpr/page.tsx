'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, ArrowLeft, Check, Mail, Download, Trash2, Lock, Eye } from 'lucide-react';

const rights = [
  {
    icon: Eye,
    title: 'Derecho de acceso',
    description: 'Tienes derecho a obtener confirmación de si estamos tratando tus datos personales y, en su caso, acceder a ellos.',
  },
  {
    icon: Check,
    title: 'Derecho de rectificación',
    description: 'Tienes derecho a solicitar la corrección de datos personales inexactos o incompletos.',
  },
  {
    icon: Trash2,
    title: 'Derecho de supresión',
    description: 'Tienes derecho a solicitar la eliminación de tus datos personales en determinadas circunstancias.',
  },
  {
    icon: Lock,
    title: 'Derecho de limitación',
    description: 'Tienes derecho a solicitar la limitación del tratamiento de tus datos en determinados casos.',
  },
  {
    icon: Download,
    title: 'Derecho de portabilidad',
    description: 'Tienes derecho a recibir tus datos en un formato estructurado y de uso común.',
  },
  {
    icon: Shield,
    title: 'Derecho de oposición',
    description: 'Tienes derecho a oponerte al tratamiento de tus datos en determinadas situaciones.',
  },
];

export default function GDPRPage() {
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
            <Shield className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Cumplimiento GDPR</h1>
          </div>

          <p className="text-gray-400 mb-8">Última actualización: 1 de Enero de 2026</p>

          <div className="prose prose-invert max-w-none">
            <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-8">
              <p className="text-gray-300 m-0">
                LinkForge está comprometido con el cumplimiento del Reglamento General de Protección
                de Datos (GDPR) de la Unión Europea. Este documento describe cómo protegemos tus datos
                y tus derechos como usuario.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Responsable del tratamiento</h2>
            <p className="text-gray-400">
              LinkForge Technologies S.L. es el responsable del tratamiento de tus datos personales.
            </p>
            <ul className="list-none text-gray-400 space-y-2 mt-4 p-4 bg-white/5 rounded-xl">
              <li><strong className="text-white">Empresa:</strong> LinkForge Technologies S.L.</li>
              <li><strong className="text-white">CIF:</strong> B12345678</li>
              <li><strong className="text-white">Dirección:</strong> Calle Ejemplo 123, 08001 Barcelona, España</li>
              <li><strong className="text-white">Email DPO:</strong> dpo@linkforge.io</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Base legal del tratamiento</h2>
            <p className="text-gray-400">
              Tratamos tus datos personales bajo las siguientes bases legales:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
              <li><strong>Ejecución de contrato:</strong> Para proporcionar nuestros servicios</li>
              <li><strong>Consentimiento:</strong> Para marketing y cookies no esenciales</li>
              <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y seguridad</li>
              <li><strong>Obligación legal:</strong> Para cumplir con requisitos fiscales y legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Tus derechos bajo el GDPR</h2>
            <p className="text-gray-400 mb-6">
              Como ciudadano de la UE, tienes los siguientes derechos sobre tus datos personales:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {rights.map((right, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <right.icon className="w-5 h-5 text-purple-400" />
                    <h3 className="text-white font-semibold">{right.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{right.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Cómo ejercer tus derechos</h2>
            <p className="text-gray-400">
              Puedes ejercer tus derechos de las siguientes maneras:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
              <li>Desde tu panel de control en <Link href="/dashboard/settings" className="text-purple-400 hover:text-purple-300">Configuración → Privacidad</Link></li>
              <li>Enviando un email a <a href="mailto:privacy@linkforge.io" className="text-purple-400 hover:text-purple-300">privacy@linkforge.io</a></li>
              <li>Mediante correo postal a nuestra dirección</li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-gray-300 text-sm m-0">
                Responderemos a tu solicitud en un plazo máximo de 30 días. Si la solicitud es
                compleja, podemos extender este plazo a 60 días, informándote previamente.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Transferencias internacionales</h2>
            <p className="text-gray-400">
              Algunos de nuestros proveedores pueden estar ubicados fuera del Espacio Económico
              Europeo. En estos casos, garantizamos la protección de tus datos mediante:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
              <li>Cláusulas contractuales tipo aprobadas por la Comisión Europea</li>
              <li>Certificaciones de adecuación (como el Data Privacy Framework)</li>
              <li>Reglas corporativas vinculantes</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Retención de datos</h2>
            <p className="text-gray-400">
              Conservamos tus datos personales durante el tiempo necesario para:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
              <li>Proporcionar nuestros servicios mientras tengas una cuenta activa</li>
              <li>Cumplir con obligaciones legales (facturación: 6 años)</li>
              <li>Resolver disputas y hacer cumplir nuestros acuerdos</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Medidas de seguridad</h2>
            <p className="text-gray-400">
              Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
              <li>Cifrado de datos en tránsito (TLS 1.3) y en reposo (AES-256)</li>
              <li>Controles de acceso basados en roles</li>
              <li>Auditorías de seguridad regulares</li>
              <li>Formación continua del personal en protección de datos</li>
              <li>Procedimientos de respuesta a incidentes</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Brechas de seguridad</h2>
            <p className="text-gray-400">
              En caso de una brecha de seguridad que afecte a tus datos personales:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
              <li>Notificaremos a la autoridad de control competente en 72 horas</li>
              <li>Te informaremos directamente si existe un alto riesgo para tus derechos</li>
              <li>Documentaremos el incidente y las medidas adoptadas</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. Delegado de Protección de Datos</h2>
            <p className="text-gray-400">
              Hemos designado un Delegado de Protección de Datos (DPO) al que puedes contactar para
              cualquier cuestión relacionada con el tratamiento de tus datos:
            </p>
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-gray-300 m-0">
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:dpo@linkforge.io" className="text-purple-400 hover:text-purple-300">dpo@linkforge.io</a>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">10. Derecho a reclamar</h2>
            <p className="text-gray-400">
              Si consideras que el tratamiento de tus datos no cumple con la normativa vigente,
              puedes presentar una reclamación ante la Agencia Española de Protección de Datos
              (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">www.aepd.es</a>.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">11. Contacto</h2>
            <p className="text-gray-400">
              Para cualquier pregunta sobre el cumplimiento GDPR de LinkForge:
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a href="mailto:privacy@linkforge.io" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300">
                <Mail className="w-4 h-4" />
                privacy@linkforge.io
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

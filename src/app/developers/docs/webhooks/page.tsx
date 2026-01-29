'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Webhook,
  Shield,
  Code,
  Settings,
  Zap,
  Clock,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Copy,
  Check,
  ArrowRight,
  ChevronRight,
  Terminal,
  Lock,
  Key,
  Bug,
  TestTube,
  FileJson,
  Link2,
  Eye,
  Trash2,
  Edit,
  MousePointer,
  User,
  FileText,
} from 'lucide-react';

const navigation = [
  { name: 'Introduccion', href: '#intro', icon: Webhook },
  { name: 'Configuracion', href: '#setup', icon: Settings },
  { name: 'Eventos', href: '#events', icon: Zap },
  { name: 'Seguridad', href: '#security', icon: Shield },
  { name: 'Politica de Reintentos', href: '#retry', icon: RefreshCw },
  { name: 'Testing', href: '#testing', icon: TestTube },
  { name: 'Troubleshooting', href: '#troubleshooting', icon: Bug },
];

const webhookEvents = [
  {
    name: 'link.created',
    description: 'Se dispara cuando un usuario crea un nuevo link en su perfil.',
    icon: Link2,
    color: 'bg-green-500/20 text-green-400',
    payload: {
      event: 'link.created',
      timestamp: '2024-01-15T10:30:00Z',
      data: {
        id: 'lnk_abc123xyz',
        title: 'Mi Canal de YouTube',
        url: 'https://youtube.com/@micanal',
        enabled: true,
        position: 1,
        created_at: '2024-01-15T10:30:00Z',
        user_id: 'usr_123456',
      },
    },
  },
  {
    name: 'link.updated',
    description: 'Se dispara cuando un link existente es modificado (titulo, URL, estado, posicion).',
    icon: Edit,
    color: 'bg-yellow-500/20 text-yellow-400',
    payload: {
      event: 'link.updated',
      timestamp: '2024-01-15T14:22:00Z',
      data: {
        id: 'lnk_abc123xyz',
        title: 'Mi Canal de YouTube - Actualizado',
        url: 'https://youtube.com/@micanal',
        enabled: true,
        position: 2,
        updated_at: '2024-01-15T14:22:00Z',
        changes: ['title', 'position'],
        user_id: 'usr_123456',
      },
    },
  },
  {
    name: 'link.deleted',
    description: 'Se dispara cuando un link es eliminado permanentemente del perfil.',
    icon: Trash2,
    color: 'bg-red-500/20 text-red-400',
    payload: {
      event: 'link.deleted',
      timestamp: '2024-01-15T16:45:00Z',
      data: {
        id: 'lnk_abc123xyz',
        title: 'Mi Canal de YouTube',
        deleted_at: '2024-01-15T16:45:00Z',
        user_id: 'usr_123456',
      },
    },
  },
  {
    name: 'link.clicked',
    description: 'Se dispara cada vez que un visitante hace click en uno de tus links.',
    icon: MousePointer,
    color: 'bg-blue-500/20 text-blue-400',
    payload: {
      event: 'link.clicked',
      timestamp: '2024-01-15T18:12:34Z',
      data: {
        link_id: 'lnk_abc123xyz',
        title: 'Mi Canal de YouTube',
        click_id: 'clk_xyz789abc',
        referrer: 'instagram.com',
        country: 'ES',
        city: 'Madrid',
        device: 'mobile',
        browser: 'Safari',
        os: 'iOS',
        user_id: 'usr_123456',
      },
    },
  },
  {
    name: 'profile.updated',
    description: 'Se dispara cuando el perfil del usuario es actualizado (nombre, bio, avatar, tema).',
    icon: User,
    color: 'bg-purple-500/20 text-purple-400',
    payload: {
      event: 'profile.updated',
      timestamp: '2024-01-15T09:00:00Z',
      data: {
        user_id: 'usr_123456',
        username: 'miusuario',
        display_name: 'Mi Nombre',
        bio: 'Nueva bio actualizada',
        avatar_url: 'https://cdn.linkforge.io/avatars/usr_123456.jpg',
        theme: 'dark-purple',
        updated_at: '2024-01-15T09:00:00Z',
        changes: ['bio', 'theme'],
      },
    },
  },
  {
    name: 'page.viewed',
    description: 'Se dispara cuando alguien visita tu pagina de perfil de LinkForge.',
    icon: Eye,
    color: 'bg-cyan-500/20 text-cyan-400',
    payload: {
      event: 'page.viewed',
      timestamp: '2024-01-15T20:05:00Z',
      data: {
        user_id: 'usr_123456',
        username: 'miusuario',
        view_id: 'vw_abc123',
        referrer: 'twitter.com',
        country: 'MX',
        city: 'Ciudad de Mexico',
        device: 'desktop',
        browser: 'Chrome',
        os: 'Windows',
        session_duration: null,
      },
    },
  },
];

const verificationCodeExamples = {
  nodejs: `const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');

  const signatureBuffer = Buffer.from(signature, 'hex');
  const expectedBuffer = Buffer.from(expectedSignature, 'hex');

  // Usar comparacion en tiempo constante para prevenir timing attacks
  return crypto.timingSafeEqual(signatureBuffer, expectedBuffer);
}

// Uso en un endpoint Express
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['x-linkforge-signature'];
  const timestamp = req.headers['x-linkforge-timestamp'];
  const payload = req.body.toString();

  // Verificar que el timestamp no sea muy antiguo (prevenir replay attacks)
  const currentTime = Math.floor(Date.now() / 1000);
  const webhookTime = parseInt(timestamp, 10);
  if (currentTime - webhookTime > 300) { // 5 minutos
    return res.status(400).send('Timestamp too old');
  }

  // Crear el payload firmado (timestamp + payload)
  const signedPayload = \`\${timestamp}.\${payload}\`;

  if (!verifyWebhookSignature(signedPayload, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }

  // Procesar el webhook
  const event = JSON.parse(payload);
  console.log('Webhook verified:', event.event);

  res.status(200).send('OK');
});`,
  python: `import hmac
import hashlib
import time
from flask import Flask, request, abort

app = Flask(__name__)

def verify_webhook_signature(payload: str, signature: str, secret: str) -> bool:
    expected_signature = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()

    # Usar comparacion en tiempo constante
    return hmac.compare_digest(signature, expected_signature)

@app.route('/webhook', methods=['POST'])
def webhook():
    signature = request.headers.get('X-LinkForge-Signature')
    timestamp = request.headers.get('X-LinkForge-Timestamp')
    payload = request.get_data(as_text=True)

    if not signature or not timestamp:
        abort(400, 'Missing headers')

    # Verificar timestamp (prevenir replay attacks)
    current_time = int(time.time())
    webhook_time = int(timestamp)
    if current_time - webhook_time > 300:  # 5 minutos
        abort(400, 'Timestamp too old')

    # Crear el payload firmado
    signed_payload = f"{timestamp}.{payload}"

    if not verify_webhook_signature(signed_payload, signature, WEBHOOK_SECRET):
        abort(401, 'Invalid signature')

    # Procesar el webhook
    event = request.get_json()
    print(f"Webhook verified: {event['event']}")

    return 'OK', 200`,
  php: `<?php

function verifyWebhookSignature(string $payload, string $signature, string $secret): bool {
    $expectedSignature = hash_hmac('sha256', $payload, $secret);

    // Usar comparacion en tiempo constante
    return hash_equals($expectedSignature, $signature);
}

// En tu endpoint de webhook
$signature = $_SERVER['HTTP_X_LINKFORGE_SIGNATURE'] ?? '';
$timestamp = $_SERVER['HTTP_X_LINKFORGE_TIMESTAMP'] ?? '';
$payload = file_get_contents('php://input');

if (empty($signature) || empty($timestamp)) {
    http_response_code(400);
    exit('Missing headers');
}

// Verificar timestamp
$currentTime = time();
$webhookTime = (int) $timestamp;
if ($currentTime - $webhookTime > 300) {
    http_response_code(400);
    exit('Timestamp too old');
}

// Crear el payload firmado
$signedPayload = "{$timestamp}.{$payload}";

if (!verifyWebhookSignature($signedPayload, $signature, WEBHOOK_SECRET)) {
    http_response_code(401);
    exit('Invalid signature');
}

// Procesar el webhook
$event = json_decode($payload, true);
error_log("Webhook verified: " . $event['event']);

http_response_code(200);
echo 'OK';`,
};

const troubleshootingItems = [
  {
    problem: 'No recibo webhooks',
    solutions: [
      'Verifica que la URL del webhook sea accesible publicamente (no localhost)',
      'Asegurate de que tu servidor responda con un codigo 2xx en menos de 30 segundos',
      'Revisa que no haya un firewall bloqueando las peticiones de nuestros servidores',
      'Confirma que el webhook este habilitado en tu dashboard',
    ],
  },
  {
    problem: 'Error de firma invalida',
    solutions: [
      'Verifica que estes usando el secret correcto (disponible en tu dashboard)',
      'Asegurate de incluir el timestamp en el payload firmado',
      'No modifiques el body de la peticion antes de verificar la firma',
      'Usa el raw body, no el body parseado como JSON',
    ],
  },
  {
    problem: 'Webhooks duplicados',
    solutions: [
      'Implementa idempotencia usando el ID del evento en el payload',
      'Almacena los IDs de eventos procesados y verifica antes de procesar',
      'Los reintentos pueden causar duplicados si tu servidor no responde a tiempo',
    ],
  },
  {
    problem: 'Timeout en el webhook',
    solutions: [
      'Tu endpoint debe responder en menos de 30 segundos',
      'Procesa los webhooks de forma asincrona (queue) si requieres mas tiempo',
      'Responde 200 OK inmediatamente y procesa en segundo plano',
    ],
  },
  {
    problem: 'Orden incorrecto de eventos',
    solutions: [
      'Usa el campo timestamp para ordenar eventos si es necesario',
      'Los webhooks pueden llegar fuera de orden debido a reintentos',
      'Implementa logica que maneje eventos fuera de secuencia',
    ],
  },
];

export default function WebhooksDocPage() {
  const [activeCodeTab, setActiveCodeTab] = useState<'nodejs' | 'python' | 'php'>('nodejs');
  const [copiedCode, setCopiedCode] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState<string | null>('link.clicked');

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const copyPayload = (payload: object) => {
    navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      <div className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Webhook className="w-5 h-5 text-purple-400" />
                  <h3 className="text-white font-semibold">Webhooks</h3>
                </div>
                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <Link
                    href="/developers/docs"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Volver a Documentacion
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="pb-20">
              {/* Introduction Section */}
              <section id="intro" className="mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                  <Webhook className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 text-sm">Documentacion de Webhooks</span>
                </div>

                <h1 className="text-4xl font-bold text-white mb-4">
                  Webhooks
                </h1>

                <p className="text-xl text-gray-400 mb-8">
                  Los webhooks te permiten recibir notificaciones HTTP en tiempo real cuando ocurren eventos
                  en tu cuenta de LinkForge. En lugar de hacer polling constante a nuestra API, los webhooks
                  te envian los datos automaticamente cuando algo sucede.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { icon: Zap, title: 'Tiempo Real', desc: 'Recibe eventos instantaneamente' },
                    { icon: Shield, title: 'Seguro', desc: 'Firmado con HMAC-SHA256' },
                    { icon: RefreshCw, title: 'Confiable', desc: 'Reintentos automaticos' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <item.icon className="w-8 h-8 text-purple-400 mb-2" />
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <h4 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
                    <FileJson className="w-4 h-4" />
                    Cuando usar webhooks
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Sincronizar datos con tu base de datos o CRM cuando cambian</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Enviar notificaciones por email o Slack cuando recibas clicks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Actualizar dashboards de analytics en tiempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Disparar automatizaciones basadas en eventos especificos</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Setup Section */}
              <section id="setup" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-purple-400" />
                  Configuracion
                </h2>

                <p className="text-gray-400 mb-6">
                  Configura tu endpoint de webhooks en el dashboard de LinkForge para empezar a recibir eventos.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">
                        1
                      </div>
                      <h4 className="text-white font-medium">Accede a la configuracion de webhooks</h4>
                    </div>
                    <p className="text-gray-400 text-sm ml-11">
                      Ve a <Link href="/dashboard/settings" className="text-purple-400 hover:underline">Dashboard &gt; Settings &gt; Webhooks</Link> en
                      tu cuenta de LinkForge.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">
                        2
                      </div>
                      <h4 className="text-white font-medium">Ingresa tu URL de webhook</h4>
                    </div>
                    <p className="text-gray-400 text-sm ml-11 mb-3">
                      Proporciona la URL de tu endpoint que recibira los eventos. Debe ser una URL HTTPS publica.
                    </p>
                    <div className="ml-11 p-3 rounded-lg bg-gray-800/50 font-mono text-sm">
                      <span className="text-gray-500">URL:</span>{' '}
                      <span className="text-green-400">https://tudominio.com/api/webhooks/linkforge</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">
                        3
                      </div>
                      <h4 className="text-white font-medium">Selecciona los eventos a recibir</h4>
                    </div>
                    <p className="text-gray-400 text-sm ml-11">
                      Elige que eventos deseas recibir. Puedes seleccionar todos o solo los que necesites para
                      optimizar el rendimiento.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">
                        4
                      </div>
                      <h4 className="text-white font-medium">Guarda tu Webhook Secret</h4>
                    </div>
                    <p className="text-gray-400 text-sm ml-11 mb-3">
                      Se generara un secret unico que usaras para verificar la autenticidad de los webhooks.
                      Guardalo en un lugar seguro.
                    </p>
                    <div className="ml-11 p-3 rounded-lg bg-gray-800/50 font-mono text-sm">
                      <span className="text-gray-500">Secret:</span>{' '}
                      <span className="text-yellow-400">whsec_aBcDeFgHiJkLmNoPqRsTuVwXyZ123456</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Events Section */}
              <section id="events" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-400" />
                  Eventos Disponibles
                </h2>

                <p className="text-gray-400 mb-6">
                  LinkForge puede enviar los siguientes tipos de eventos a tu webhook endpoint.
                  Cada evento incluye un payload JSON con informacion relevante.
                </p>

                <div className="space-y-4">
                  {webhookEvents.map((event) => (
                    <div
                      key={event.name}
                      className="rounded-xl bg-white/5 border border-white/10 overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedEvent(expandedEvent === event.name ? null : event.name)}
                        className="w-full p-4 flex items-center gap-4 hover:bg-white/5 transition-all"
                      >
                        <div className={`w-10 h-10 rounded-lg ${event.color.split(' ')[0]} flex items-center justify-center flex-shrink-0`}>
                          <event.icon className={`w-5 h-5 ${event.color.split(' ')[1]}`} />
                        </div>
                        <div className="flex-1 text-left">
                          <code className="text-purple-400 font-mono text-sm">{event.name}</code>
                          <p className="text-gray-500 text-sm mt-1">{event.description}</p>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            expandedEvent === event.name ? 'rotate-90' : ''
                          }`}
                        />
                      </button>

                      {expandedEvent === event.name && (
                        <div className="border-t border-white/10 p-4 bg-gray-800/30">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-gray-400 text-sm">Ejemplo de payload:</span>
                            <button
                              onClick={() => copyPayload(event.payload)}
                              className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
                            >
                              <Copy className="w-3 h-3" />
                              Copiar
                            </button>
                          </div>
                          <pre className="p-4 rounded-lg bg-gray-900/50 overflow-x-auto">
                            <code className="text-sm text-gray-300">
                              {JSON.stringify(event.payload, null, 2)}
                            </code>
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Security Section */}
              <section id="security" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-400" />
                  Seguridad
                </h2>

                <p className="text-gray-400 mb-6">
                  Todos los webhooks de LinkForge estan firmados con HMAC-SHA256 para garantizar su autenticidad
                  e integridad. Es importante que siempre verifiques la firma antes de procesar un webhook.
                </p>

                {/* Signature Verification */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-purple-400" />
                    Verificacion de Firma
                  </h3>

                  <p className="text-gray-400 mb-4">
                    Cada webhook incluye los siguientes headers de seguridad:
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="p-3 rounded-lg bg-gray-800/50">
                      <code className="text-purple-400 font-mono text-sm">X-LinkForge-Signature</code>
                      <p className="text-gray-500 text-sm mt-1">
                        Firma HMAC-SHA256 del payload en formato hexadecimal
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-800/50">
                      <code className="text-purple-400 font-mono text-sm">X-LinkForge-Timestamp</code>
                      <p className="text-gray-500 text-sm mt-1">
                        Unix timestamp del momento en que se envio el webhook
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-800/50">
                      <code className="text-purple-400 font-mono text-sm">X-LinkForge-Event</code>
                      <p className="text-gray-500 text-sm mt-1">
                        Tipo de evento (ej: link.clicked, profile.updated)
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                    <h4 className="text-yellow-400 font-medium mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Importante
                    </h4>
                    <p className="text-gray-300 text-sm">
                      La firma se calcula sobre el string <code className="text-purple-400">timestamp.payload</code>,
                      donde el timestamp y el payload estan separados por un punto. Esto previene ataques de replay
                      al incluir el tiempo en la firma.
                    </p>
                  </div>
                </div>

                {/* HMAC-SHA256 Explanation */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Key className="w-5 h-5 text-purple-400" />
                    HMAC-SHA256
                  </h3>

                  <p className="text-gray-400 mb-4">
                    Usamos HMAC-SHA256 porque proporciona:
                  </p>

                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Autenticidad:</strong> Solo quien conoce el secret puede generar una firma valida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Integridad:</strong> Cualquier modificacion del payload invalida la firma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>No repudio:</strong> La firma prueba que el mensaje proviene de LinkForge</span>
                    </li>
                  </ul>
                </div>

                {/* Verification Code Examples */}
                <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                  <div className="p-4 border-b border-white/10">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-400" />
                      Codigo de Verificacion
                    </h3>
                  </div>

                  {/* Code Tabs */}
                  <div className="flex border-b border-white/10 bg-gray-800/30">
                    {(['nodejs', 'python', 'php'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveCodeTab(tab)}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                          activeCodeTab === tab
                            ? 'text-purple-400 border-b-2 border-purple-400 bg-white/5'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {tab === 'nodejs' ? 'Node.js' : tab === 'python' ? 'Python' : 'PHP'}
                      </button>
                    ))}
                    <button
                      onClick={() => copyCode(verificationCodeExamples[activeCodeTab])}
                      className="ml-auto px-4 py-2 text-gray-400 hover:text-white flex items-center gap-1"
                    >
                      {copiedCode ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      {copiedCode ? 'Copiado' : 'Copiar'}
                    </button>
                  </div>

                  <pre className="p-4 overflow-x-auto max-h-[500px]">
                    <code className="text-sm text-gray-300">{verificationCodeExamples[activeCodeTab]}</code>
                  </pre>
                </div>
              </section>

              {/* Retry Policy Section */}
              <section id="retry" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <RefreshCw className="w-6 h-6 text-purple-400" />
                  Politica de Reintentos
                </h2>

                <p className="text-gray-400 mb-6">
                  Si tu endpoint no responde correctamente, LinkForge reintentara el envio automaticamente
                  usando una estrategia de exponential backoff.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-400" />
                      Exponential Backoff
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Los reintentos siguen un patron de espera exponencial para evitar sobrecargar tu servidor:
                    </p>
                    <div className="space-y-2">
                      {[
                        { attempt: 1, delay: '1 minuto' },
                        { attempt: 2, delay: '5 minutos' },
                        { attempt: 3, delay: '30 minutos' },
                        { attempt: 4, delay: '2 horas' },
                        { attempt: 5, delay: '24 horas' },
                      ].map((item) => (
                        <div key={item.attempt} className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Intento {item.attempt}</span>
                          <span className="text-gray-300">{item.delay}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-purple-400" />
                      Condiciones de Reintento
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Un webhook se considera fallido y se reintenta cuando:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-red-400"></span>
                        Timeout (mas de 30 segundos sin respuesta)
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-red-400"></span>
                        Codigo de respuesta 5xx (error del servidor)
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-red-400"></span>
                        Error de conexion (DNS, TLS, etc.)
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                        Codigo 429 (rate limit) - espera adicional
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Respuesta Exitosa
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Para que un webhook se considere entregado correctamente, tu endpoint debe responder
                    con un codigo <code className="text-purple-400">2xx</code> (200, 201, 202, etc.) en menos
                    de 30 segundos. El contenido de la respuesta es ignorado.
                  </p>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-2">Maximo de Reintentos</h4>
                  <p className="text-gray-400 text-sm">
                    Despues de <strong className="text-white">5 reintentos fallidos</strong>, el webhook
                    se marca como fallido permanentemente. Puedes ver los webhooks fallidos en tu dashboard
                    y reenviarlos manualmente si es necesario.
                  </p>
                </div>
              </section>

              {/* Testing Section */}
              <section id="testing" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <TestTube className="w-6 h-6 text-purple-400" />
                  Testing de Webhooks
                </h2>

                <p className="text-gray-400 mb-6">
                  Antes de ir a produccion, es importante probar que tu endpoint procesa correctamente
                  los webhooks.
                </p>

                <div className="space-y-6">
                  {/* Test Endpoint */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-purple-400" />
                      1. Usa herramientas de testing
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Puedes usar servicios como <span className="text-purple-400">webhook.site</span> o{' '}
                      <span className="text-purple-400">ngrok</span> para probar webhooks localmente:
                    </p>
                    <div className="p-3 rounded-lg bg-gray-800/50 font-mono text-sm">
                      <span className="text-gray-500"># Exponer tu servidor local con ngrok</span><br />
                      <span className="text-green-400">$ ngrok http 3000</span><br /><br />
                      <span className="text-gray-500"># Usa la URL generada en tu dashboard</span><br />
                      <span className="text-gray-300">https://abc123.ngrok.io/api/webhooks</span>
                    </div>
                  </div>

                  {/* Send Test Event */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-400" />
                      2. Envia eventos de prueba
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Desde tu dashboard, puedes enviar eventos de prueba a tu endpoint configurado.
                      Ve a <span className="text-purple-400">Settings &gt; Webhooks &gt; Send Test Event</span>.
                    </p>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm hover:bg-purple-500/30 transition">
                        Enviar link.clicked de prueba
                      </button>
                      <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm hover:bg-purple-500/30 transition">
                        Enviar profile.updated de prueba
                      </button>
                    </div>
                  </div>

                  {/* Verify Logs */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-purple-400" />
                      3. Revisa los logs
                    </h4>
                    <p className="text-gray-400 text-sm">
                      El dashboard muestra un historial de todos los webhooks enviados, incluyendo:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        Tipo de evento y timestamp
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        Codigo de respuesta de tu servidor
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        Payload enviado (clickea para ver completo)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        Numero de intentos y proximo reintento
                      </li>
                    </ul>
                  </div>

                  {/* CLI Testing */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-purple-400" />
                      4. Prueba con cURL
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Simula un webhook manualmente para probar tu endpoint:
                    </p>
                    <pre className="p-3 rounded-lg bg-gray-800/50 font-mono text-sm overflow-x-auto">
                      <code className="text-gray-300">{`curl -X POST https://tudominio.com/api/webhooks \\
  -H "Content-Type: application/json" \\
  -H "X-LinkForge-Signature: tu_firma_calculada" \\
  -H "X-LinkForge-Timestamp: 1705312234" \\
  -H "X-LinkForge-Event: link.clicked" \\
  -d '{"event":"link.clicked","timestamp":"2024-01-15T10:30:00Z","data":{"link_id":"test"}}'`}</code>
                    </pre>
                  </div>
                </div>
              </section>

              {/* Troubleshooting Section */}
              <section id="troubleshooting" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Bug className="w-6 h-6 text-purple-400" />
                  Troubleshooting
                </h2>

                <p className="text-gray-400 mb-6">
                  Soluciones a problemas comunes con webhooks.
                </p>

                <div className="space-y-4">
                  {troubleshootingItems.map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-400" />
                        {item.problem}
                      </h4>
                      <ul className="space-y-2">
                        {item.solutions.map((solution, sIndex) => (
                          <li key={sIndex} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Additional Help */}
                <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <h4 className="text-white font-medium mb-2">Necesitas mas ayuda?</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Si sigues teniendo problemas con tus webhooks, nuestro equipo de soporte esta disponible
                    para ayudarte.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/help"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition"
                    >
                      Centro de Ayuda
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition"
                    >
                      Contactar Soporte
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

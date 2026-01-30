'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  ExternalLink,
  Copy,
  ChevronRight
} from 'lucide-react';

interface ArticleContent {
  title: string;
  category: string;
  description: string;
  sections: {
    title: string;
    content: string;
    type?: 'text' | 'steps' | 'warning' | 'tip' | 'code';
    steps?: string[];
    code?: string;
  }[];
  relatedArticles?: string[];
}

const articles: Record<string, ArticleContent> = {
  'crear-cuenta': {
    title: 'Cómo crear una cuenta',
    category: 'Primeros Pasos',
    description: 'Guía paso a paso para registrarte en LinkForge y comenzar a crear tu página de enlaces.',
    sections: [
      {
        title: 'Requisitos previos',
        content: 'Para crear una cuenta en LinkForge solo necesitas una dirección de correo electrónico válida.',
        type: 'text'
      },
      {
        title: 'Pasos para registrarte',
        content: 'Sigue estos pasos para crear tu cuenta:',
        type: 'steps',
        steps: [
          'Visita linkforge.com y haz clic en "Comenzar gratis"',
          'Introduce tu dirección de correo electrónico',
          'Crea una contraseña segura (mínimo 8 caracteres)',
          'Elige tu nombre de usuario único (será tu URL: linkforge.com/tu-nombre)',
          'Verifica tu correo electrónico haciendo clic en el enlace que te enviamos',
          '¡Listo! Ya puedes empezar a personalizar tu página'
        ]
      },
      {
        title: 'Consejo',
        content: 'Elige un nombre de usuario que sea fácil de recordar y que represente tu marca personal o negocio.',
        type: 'tip'
      }
    ],
    relatedArticles: ['personalizar-perfil', 'agregar-enlaces', 'elegir-tema']
  },
  'personalizar-perfil': {
    title: 'Personalizar tu perfil',
    category: 'Primeros Pasos',
    description: 'Aprende a configurar tu foto de perfil, biografía y otros detalles de tu página.',
    sections: [
      {
        title: 'Acceder a la configuración del perfil',
        content: 'Desde tu dashboard, haz clic en "Editar perfil" o en el icono de configuración junto a tu foto.',
        type: 'text'
      },
      {
        title: 'Elementos que puedes personalizar',
        content: 'Tu perfil incluye varios elementos personalizables:',
        type: 'steps',
        steps: [
          'Foto de perfil: Sube una imagen cuadrada de al menos 400x400 píxeles',
          'Nombre para mostrar: El nombre que verán tus visitantes',
          'Biografía: Una descripción corta (máximo 150 caracteres)',
          'Ubicación: Opcional, muestra tu ciudad o país',
          'Enlaces sociales: Iconos de tus redes sociales principales'
        ]
      },
      {
        title: 'Importante',
        content: 'Los cambios en tu perfil se guardan automáticamente y se reflejan inmediatamente en tu página pública.',
        type: 'warning'
      }
    ],
    relatedArticles: ['crear-cuenta', 'agregar-enlaces', 'elegir-tema']
  },
  'agregar-enlaces': {
    title: 'Agregar y gestionar enlaces',
    category: 'Primeros Pasos',
    description: 'Guía completa para añadir, editar, ordenar y eliminar enlaces en tu página.',
    sections: [
      {
        title: 'Añadir un nuevo enlace',
        content: 'Para añadir un enlace a tu página:',
        type: 'steps',
        steps: [
          'Ve a tu dashboard y haz clic en "Añadir enlace"',
          'Introduce la URL del destino',
          'Añade un título descriptivo para el enlace',
          'Opcionalmente, añade un icono o imagen',
          'Haz clic en "Guardar"'
        ]
      },
      {
        title: 'Ordenar enlaces',
        content: 'Puedes reorganizar tus enlaces arrastrándolos y soltándolos en la posición deseada. El orden que establezcas es el que verán tus visitantes.',
        type: 'text'
      },
      {
        title: 'Activar/Desactivar enlaces',
        content: 'Usa el interruptor junto a cada enlace para activarlo o desactivarlo temporalmente sin eliminarlo.',
        type: 'tip'
      }
    ],
    relatedArticles: ['personalizar-perfil', 'tipos-enlaces', 'programar-enlaces']
  },
  'elegir-tema': {
    title: 'Elegir y personalizar temas',
    category: 'Personalización',
    description: 'Descubre cómo elegir el tema perfecto y personalizarlo para que coincida con tu marca.',
    sections: [
      {
        title: 'Galería de temas',
        content: 'LinkForge ofrece más de 30 temas prediseñados. Accede a la galería desde tu dashboard haciendo clic en "Temas".',
        type: 'text'
      },
      {
        title: 'Categorías de temas',
        content: 'Los temas están organizados en categorías:',
        type: 'steps',
        steps: [
          'Minimalistas: Diseños limpios y elegantes',
          'Creativos: Colores vibrantes y estilos únicos',
          'Profesionales: Perfectos para negocios y portfolios',
          'Temáticos: Diseñados para nichos específicos (música, fitness, etc.)'
        ]
      },
      {
        title: 'Personalización avanzada',
        content: 'Con los planes Pro y Business puedes personalizar colores, fuentes y estilos de botones de cualquier tema.',
        type: 'tip'
      }
    ],
    relatedArticles: ['personalizar-perfil', 'css-personalizado', 'fondos-animados']
  },
  'tipos-enlaces': {
    title: 'Tipos de enlaces disponibles',
    category: 'Enlaces',
    description: 'Conoce todos los tipos de enlaces que puedes añadir a tu página.',
    sections: [
      {
        title: 'Enlaces básicos',
        content: 'Los enlaces básicos te permiten dirigir a tus visitantes a cualquier URL externa.',
        type: 'text'
      },
      {
        title: 'Tipos especiales',
        content: 'LinkForge soporta varios tipos de enlaces especiales:',
        type: 'steps',
        steps: [
          'Enlaces de redes sociales: Iconos automáticos para las principales plataformas',
          'Enlaces de música: Integración con Spotify, Apple Music, SoundCloud',
          'Enlaces de video: Previsualización de YouTube, TikTok, Vimeo',
          'Enlaces de tienda: Botones especiales para productos',
          'Enlaces de contacto: Email, teléfono, WhatsApp',
          'Enlaces de descarga: Para archivos PDF, imágenes, etc.'
        ]
      }
    ],
    relatedArticles: ['agregar-enlaces', 'programar-enlaces', 'enlaces-inteligentes']
  },
  'programar-enlaces': {
    title: 'Programar enlaces',
    category: 'Enlaces',
    description: 'Aprende a programar enlaces para que aparezcan o desaparezcan automáticamente.',
    sections: [
      {
        title: '¿Qué es la programación de enlaces?',
        content: 'Esta función te permite establecer fechas y horas específicas para que un enlace esté visible en tu página.',
        type: 'text'
      },
      {
        title: 'Casos de uso',
        content: 'La programación es útil para:',
        type: 'steps',
        steps: [
          'Promociones por tiempo limitado',
          'Lanzamientos de productos',
          'Eventos en vivo',
          'Contenido de temporada',
          'Campañas de marketing'
        ]
      },
      {
        title: 'Nota',
        content: 'Esta función está disponible en los planes Pro y Business.',
        type: 'warning'
      }
    ],
    relatedArticles: ['tipos-enlaces', 'agregar-enlaces', 'enlaces-inteligentes']
  },
  'enlaces-inteligentes': {
    title: 'Enlaces inteligentes',
    category: 'Enlaces',
    description: 'Configura enlaces que cambien según la ubicación o dispositivo del visitante.',
    sections: [
      {
        title: '¿Qué son los enlaces inteligentes?',
        content: 'Los enlaces inteligentes detectan automáticamente información del visitante y muestran el destino más relevante.',
        type: 'text'
      },
      {
        title: 'Tipos de redirección inteligente',
        content: 'Puedes configurar redirecciones basadas en:',
        type: 'steps',
        steps: [
          'País del visitante: Envía a diferentes tiendas según la ubicación',
          'Dispositivo: iOS vs Android para apps',
          'Idioma del navegador: Contenido localizado',
          'Hora del día: Diferentes enlaces según el horario'
        ]
      },
      {
        title: 'Ejemplo práctico',
        content: 'Si tienes una app, puedes crear un único enlace que dirija automáticamente a App Store para usuarios de iPhone y a Google Play para usuarios de Android.',
        type: 'tip'
      }
    ],
    relatedArticles: ['tipos-enlaces', 'programar-enlaces', 'analytics-basico']
  },
  'analytics-basico': {
    title: 'Analíticas básicas',
    category: 'Analíticas',
    description: 'Introducción al panel de analíticas y métricas principales.',
    sections: [
      {
        title: 'Acceder a las analíticas',
        content: 'Desde tu dashboard, haz clic en "Analíticas" en el menú lateral para ver el panel completo de estadísticas.',
        type: 'text'
      },
      {
        title: 'Métricas disponibles',
        content: 'El panel básico incluye:',
        type: 'steps',
        steps: [
          'Visitas totales a tu página',
          'Clics en cada enlace',
          'Tasa de clics (CTR)',
          'Visitantes únicos',
          'Fuentes de tráfico principales',
          'Dispositivos utilizados'
        ]
      },
      {
        title: 'Período de datos',
        content: 'El plan gratuito muestra datos de los últimos 7 días. Los planes de pago ofrecen históricos más extensos.',
        type: 'warning'
      }
    ],
    relatedArticles: ['analytics-avanzado', 'exportar-datos', 'utm-tracking']
  },
  'analytics-avanzado': {
    title: 'Analíticas avanzadas',
    category: 'Analíticas',
    description: 'Métricas avanzadas y análisis detallado para usuarios Pro y Business.',
    sections: [
      {
        title: 'Funciones avanzadas',
        content: 'Los planes de pago desbloquean analíticas más detalladas:',
        type: 'steps',
        steps: [
          'Datos demográficos de visitantes',
          'Mapas de calor de clics',
          'Análisis por hora del día',
          'Comparativas de rendimiento entre enlaces',
          'Seguimiento de conversiones',
          'Integración con Google Analytics'
        ]
      },
      {
        title: 'Informes personalizados',
        content: 'Crea informes personalizados con las métricas que más te importan y prográmalos para recibirlos por email.',
        type: 'tip'
      }
    ],
    relatedArticles: ['analytics-basico', 'exportar-datos', 'utm-tracking']
  },
  'exportar-datos': {
    title: 'Exportar datos',
    category: 'Analíticas',
    description: 'Cómo descargar tus datos de analíticas en diferentes formatos.',
    sections: [
      {
        title: 'Formatos disponibles',
        content: 'Puedes exportar tus datos en los siguientes formatos:',
        type: 'steps',
        steps: [
          'CSV: Compatible con Excel y Google Sheets',
          'JSON: Para integración con otras herramientas',
          'PDF: Informes visuales listos para presentar'
        ]
      },
      {
        title: 'Pasos para exportar',
        content: 'Ve a Analíticas, selecciona el rango de fechas, haz clic en "Exportar" y elige el formato deseado.',
        type: 'text'
      }
    ],
    relatedArticles: ['analytics-basico', 'analytics-avanzado', 'api-introduccion']
  },
  'utm-tracking': {
    title: 'Seguimiento UTM',
    category: 'Analíticas',
    description: 'Configura parámetros UTM para rastrear el origen de tu tráfico.',
    sections: [
      {
        title: '¿Qué son los parámetros UTM?',
        content: 'Los parámetros UTM son etiquetas que añades a tus URLs para rastrear de dónde viene tu tráfico en herramientas como Google Analytics.',
        type: 'text'
      },
      {
        title: 'Parámetros principales',
        content: 'Los parámetros UTM más comunes son:',
        type: 'steps',
        steps: [
          'utm_source: De dónde viene el tráfico (instagram, newsletter)',
          'utm_medium: Tipo de medio (social, email, cpc)',
          'utm_campaign: Nombre de la campaña',
          'utm_content: Variante del contenido (para A/B testing)'
        ]
      },
      {
        title: 'Configuración en LinkForge',
        content: 'Puedes añadir parámetros UTM automáticos a todos tus enlaces desde la configuración de analíticas.',
        type: 'tip'
      }
    ],
    relatedArticles: ['analytics-avanzado', 'integraciones-analytics', 'exportar-datos']
  },
  'cambiar-plan': {
    title: 'Cambiar de plan',
    category: 'Facturación',
    description: 'Guía para actualizar o cambiar tu plan de suscripción.',
    sections: [
      {
        title: 'Actualizar tu plan',
        content: 'Para cambiar a un plan superior:',
        type: 'steps',
        steps: [
          'Ve a Configuración > Facturación',
          'Haz clic en "Cambiar plan"',
          'Selecciona el nuevo plan',
          'Confirma el método de pago',
          'El cambio se aplica inmediatamente'
        ]
      },
      {
        title: 'Prorrateo',
        content: 'Al actualizar, solo pagas la diferencia proporcional al tiempo restante de tu ciclo de facturación actual.',
        type: 'tip'
      },
      {
        title: 'Degradar plan',
        content: 'Si cambias a un plan inferior, el cambio se aplicará al final de tu período de facturación actual.',
        type: 'warning'
      }
    ],
    relatedArticles: ['metodos-pago', 'cancelar-suscripcion', 'facturacion-empresas']
  },
  'metodos-pago': {
    title: 'Métodos de pago',
    category: 'Facturación',
    description: 'Métodos de pago aceptados y cómo gestionarlos.',
    sections: [
      {
        title: 'Métodos aceptados',
        content: 'LinkForge acepta los siguientes métodos de pago:',
        type: 'steps',
        steps: [
          'Tarjetas de crédito y débito (Visa, Mastercard, American Express)',
          'PayPal',
          'Google Pay',
          'Apple Pay',
          'Transferencia bancaria (solo planes anuales Business y Enterprise)'
        ]
      },
      {
        title: 'Gestionar métodos de pago',
        content: 'Puedes añadir, editar o eliminar métodos de pago desde Configuración > Facturación > Métodos de pago.',
        type: 'text'
      }
    ],
    relatedArticles: ['cambiar-plan', 'cancelar-suscripcion', 'facturas']
  },
  'cancelar-suscripcion': {
    title: 'Cancelar suscripción',
    category: 'Facturación',
    description: 'Cómo cancelar tu suscripción y qué sucede con tus datos.',
    sections: [
      {
        title: 'Proceso de cancelación',
        content: 'Para cancelar tu suscripción:',
        type: 'steps',
        steps: [
          'Ve a Configuración > Facturación',
          'Haz clic en "Cancelar suscripción"',
          'Selecciona el motivo de cancelación (opcional)',
          'Confirma la cancelación'
        ]
      },
      {
        title: '¿Qué pasa con mis datos?',
        content: 'Tu cuenta se degradará al plan gratuito al final del período de facturación. Tus enlaces y datos se conservan, pero perderás acceso a funciones premium.',
        type: 'warning'
      },
      {
        title: 'Reactivar suscripción',
        content: 'Puedes reactivar tu suscripción en cualquier momento desde la página de facturación.',
        type: 'tip'
      }
    ],
    relatedArticles: ['cambiar-plan', 'eliminar-cuenta', 'metodos-pago']
  },
  'facturas': {
    title: 'Facturas y recibos',
    category: 'Facturación',
    description: 'Cómo acceder y descargar tus facturas.',
    sections: [
      {
        title: 'Historial de facturas',
        content: 'Todas tus facturas están disponibles en Configuración > Facturación > Historial de pagos.',
        type: 'text'
      },
      {
        title: 'Descargar facturas',
        content: 'Haz clic en el icono de descarga junto a cada factura para obtener el PDF.',
        type: 'text'
      },
      {
        title: 'Datos fiscales',
        content: 'Para añadir datos fiscales (NIF/CIF, dirección de empresa) a tus facturas, configúralos en Configuración > Facturación > Datos fiscales antes de la próxima facturación.',
        type: 'tip'
      }
    ],
    relatedArticles: ['metodos-pago', 'facturacion-empresas', 'cambiar-plan']
  },
  'facturacion-empresas': {
    title: 'Facturación para empresas',
    category: 'Facturación',
    description: 'Opciones de facturación especiales para equipos y empresas.',
    sections: [
      {
        title: 'Facturación centralizada',
        content: 'El plan Business y Enterprise permite gestionar la facturación de múltiples usuarios desde una única cuenta.',
        type: 'text'
      },
      {
        title: 'Características enterprise',
        content: 'Las opciones de facturación empresarial incluyen:',
        type: 'steps',
        steps: [
          'Facturación anual con descuento',
          'Pago por transferencia bancaria',
          'Facturas personalizadas con datos de empresa',
          'Múltiples centros de coste',
          'Informes de gasto detallados'
        ]
      }
    ],
    relatedArticles: ['facturas', 'cambiar-plan', 'metodos-pago']
  },
  'seguridad-cuenta': {
    title: 'Seguridad de la cuenta',
    category: 'Cuenta',
    description: 'Configuración de seguridad y buenas prácticas.',
    sections: [
      {
        title: 'Autenticación de dos factores (2FA)',
        content: 'Activa 2FA para añadir una capa extra de seguridad:',
        type: 'steps',
        steps: [
          'Ve a Configuración > Seguridad',
          'Haz clic en "Activar 2FA"',
          'Escanea el código QR con tu app de autenticación',
          'Introduce el código de verificación',
          'Guarda los códigos de recuperación en un lugar seguro'
        ]
      },
      {
        title: 'Sesiones activas',
        content: 'Revisa y cierra sesiones activas en otros dispositivos desde Configuración > Seguridad > Sesiones.',
        type: 'tip'
      }
    ],
    relatedArticles: ['cambiar-contrasena', 'eliminar-cuenta', 'recuperar-cuenta']
  },
  'cambiar-contrasena': {
    title: 'Cambiar contraseña',
    category: 'Cuenta',
    description: 'Cómo actualizar tu contraseña de forma segura.',
    sections: [
      {
        title: 'Cambiar contraseña',
        content: 'Para cambiar tu contraseña:',
        type: 'steps',
        steps: [
          'Ve a Configuración > Seguridad',
          'Haz clic en "Cambiar contraseña"',
          'Introduce tu contraseña actual',
          'Introduce la nueva contraseña (mínimo 8 caracteres)',
          'Confirma la nueva contraseña',
          'Haz clic en "Guardar"'
        ]
      },
      {
        title: 'Requisitos de contraseña',
        content: 'Tu contraseña debe tener al menos 8 caracteres. Recomendamos incluir mayúsculas, minúsculas, números y símbolos.',
        type: 'tip'
      }
    ],
    relatedArticles: ['seguridad-cuenta', 'recuperar-cuenta', '2fa-configuracion']
  },
  'recuperar-cuenta': {
    title: 'Recuperar cuenta',
    category: 'Cuenta',
    description: 'Qué hacer si no puedes acceder a tu cuenta.',
    sections: [
      {
        title: 'Olvidé mi contraseña',
        content: 'Si olvidaste tu contraseña:',
        type: 'steps',
        steps: [
          'Ve a la página de inicio de sesión',
          'Haz clic en "¿Olvidaste tu contraseña?"',
          'Introduce tu email',
          'Revisa tu correo y haz clic en el enlace de recuperación',
          'Crea una nueva contraseña'
        ]
      },
      {
        title: 'No tengo acceso a mi email',
        content: 'Si no puedes acceder al email asociado a tu cuenta, contacta con soporte proporcionando información que verifique tu identidad.',
        type: 'warning'
      }
    ],
    relatedArticles: ['cambiar-contrasena', 'seguridad-cuenta', 'contactar-soporte']
  },
  'eliminar-cuenta': {
    title: 'Eliminar cuenta',
    category: 'Cuenta',
    description: 'Cómo eliminar permanentemente tu cuenta de LinkForge.',
    sections: [
      {
        title: 'Antes de eliminar',
        content: 'Ten en cuenta que eliminar tu cuenta es irreversible. Se eliminarán:',
        type: 'warning'
      },
      {
        title: 'Datos que se eliminarán',
        content: 'Al eliminar tu cuenta perderás:',
        type: 'steps',
        steps: [
          'Tu página de enlaces y URL personalizada',
          'Todos tus enlaces guardados',
          'Historial de analíticas',
          'Configuración de temas y personalización',
          'Integraciones conectadas'
        ]
      },
      {
        title: 'Proceso de eliminación',
        content: 'Ve a Configuración > Cuenta > Eliminar cuenta. Deberás confirmar tu contraseña y el proceso. Tu URL quedará disponible para otros usuarios después de 30 días.',
        type: 'text'
      }
    ],
    relatedArticles: ['cancelar-suscripcion', 'exportar-datos', 'seguridad-cuenta']
  },
  'css-personalizado': {
    title: 'CSS personalizado',
    category: 'Personalización',
    description: 'Añade estilos CSS personalizados a tu página.',
    sections: [
      {
        title: 'Acceder al editor CSS',
        content: 'El CSS personalizado está disponible en planes Pro y Business. Accede desde Configuración > Apariencia > CSS personalizado.',
        type: 'text'
      },
      {
        title: 'Ejemplo básico',
        content: 'Aquí tienes un ejemplo de CSS personalizado:',
        type: 'code',
        code: `/* Cambiar color de fondo */
.profile-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Personalizar botones */
.link-button {
  border-radius: 25px;
  font-weight: bold;
  transition: transform 0.2s;
}

.link-button:hover {
  transform: scale(1.05);
}`
      },
      {
        title: 'Limitaciones',
        content: 'Por seguridad, algunas propiedades CSS están restringidas. No se permite JavaScript ni etiquetas HTML en el editor CSS.',
        type: 'warning'
      }
    ],
    relatedArticles: ['elegir-tema', 'fondos-animados', 'personalizar-perfil']
  },
  'fondos-animados': {
    title: 'Fondos animados',
    category: 'Personalización',
    description: 'Configura fondos animados y efectos visuales.',
    sections: [
      {
        title: 'Tipos de fondos',
        content: 'LinkForge ofrece varios tipos de fondos animados:',
        type: 'steps',
        steps: [
          'Gradientes animados: Transiciones suaves entre colores',
          'Partículas: Efectos de partículas flotantes',
          'Ondas: Animaciones de ondas fluidas',
          'Geométricos: Patrones geométricos en movimiento',
          'Video: Fondos de video en loop (Business)'
        ]
      },
      {
        title: 'Rendimiento',
        content: 'Los fondos animados se optimizan automáticamente según el dispositivo del visitante para garantizar una buena experiencia.',
        type: 'tip'
      }
    ],
    relatedArticles: ['elegir-tema', 'css-personalizado', 'personalizar-perfil']
  },
  'dominio-personalizado': {
    title: 'Dominio personalizado',
    category: 'Dominios',
    description: 'Conecta tu propio dominio a tu página de LinkForge.',
    sections: [
      {
        title: 'Requisitos',
        content: 'Para usar un dominio personalizado necesitas un plan Pro o superior y ser propietario del dominio.',
        type: 'text'
      },
      {
        title: 'Configuración',
        content: 'Sigue estos pasos para conectar tu dominio:',
        type: 'steps',
        steps: [
          'Ve a Configuración > Dominios',
          'Haz clic en "Añadir dominio"',
          'Introduce tu dominio (ej: links.tudominio.com)',
          'Copia los registros DNS que te proporcionamos',
          'Añade los registros en tu proveedor de dominio',
          'Espera a que se propague (hasta 48 horas)',
          'Verifica la conexión en LinkForge'
        ]
      },
      {
        title: 'SSL automático',
        content: 'Configuramos automáticamente un certificado SSL gratuito para tu dominio personalizado.',
        type: 'tip'
      }
    ],
    relatedArticles: ['dns-configuracion', 'ssl-certificados', 'subdominios']
  },
  'dns-configuracion': {
    title: 'Configuración DNS',
    category: 'Dominios',
    description: 'Guía detallada para configurar los registros DNS.',
    sections: [
      {
        title: 'Registros necesarios',
        content: 'Dependiendo de tu configuración, necesitarás añadir:',
        type: 'steps',
        steps: [
          'Registro CNAME: Para subdominios (links.tudominio.com)',
          'Registro A: Para dominio raíz (tudominio.com)',
          'Registro TXT: Para verificación de propiedad'
        ]
      },
      {
        title: 'Valores de los registros',
        content: 'Los valores específicos para tus registros se muestran en Configuración > Dominios después de añadir tu dominio.',
        type: 'text'
      },
      {
        title: 'Tiempo de propagación',
        content: 'Los cambios DNS pueden tardar entre 15 minutos y 48 horas en propagarse globalmente.',
        type: 'warning'
      }
    ],
    relatedArticles: ['dominio-personalizado', 'ssl-certificados', 'subdominios']
  },
  'api-introduccion': {
    title: 'Introducción a la API',
    category: 'Desarrolladores',
    description: 'Primeros pasos con la API de LinkForge.',
    sections: [
      {
        title: 'Obtener tu API Key',
        content: 'Para usar la API necesitas una clave de acceso:',
        type: 'steps',
        steps: [
          'Ve a Configuración > API',
          'Haz clic en "Generar API Key"',
          'Copia y guarda tu clave de forma segura',
          'La clave solo se muestra una vez'
        ]
      },
      {
        title: 'Autenticación',
        content: 'Incluye tu API Key en el header de autorización:',
        type: 'code',
        code: `curl -X GET "https://api.linkforge.com/v1/links" \\
  -H "Authorization: Bearer tu_api_key" \\
  -H "Content-Type: application/json"`
      },
      {
        title: 'Límites de uso',
        content: 'El plan gratuito permite 100 llamadas/día. Los planes de pago tienen límites más altos o ilimitados.',
        type: 'warning'
      }
    ],
    relatedArticles: ['api-endpoints', 'webhooks-configurar', 'api-errores']
  },
  'webhooks-configurar': {
    title: 'Configurar Webhooks',
    category: 'Desarrolladores',
    description: 'Recibe notificaciones en tiempo real de eventos.',
    sections: [
      {
        title: '¿Qué son los Webhooks?',
        content: 'Los webhooks envían notificaciones HTTP a tu servidor cuando ocurren eventos en tu cuenta de LinkForge.',
        type: 'text'
      },
      {
        title: 'Eventos disponibles',
        content: 'Puedes suscribirte a los siguientes eventos:',
        type: 'steps',
        steps: [
          'link.clicked: Cuando alguien hace clic en un enlace',
          'link.created: Cuando se crea un nuevo enlace',
          'link.updated: Cuando se modifica un enlace',
          'link.deleted: Cuando se elimina un enlace',
          'profile.viewed: Cuando alguien visita tu página'
        ]
      },
      {
        title: 'Configuración',
        content: 'Añade webhooks desde Configuración > Desarrolladores > Webhooks. Introduce tu URL de endpoint y selecciona los eventos.',
        type: 'text'
      }
    ],
    relatedArticles: ['api-introduccion', 'webhooks-seguridad', 'integraciones-zapier']
  },
  'integraciones-analytics': {
    title: 'Integración con Google Analytics',
    category: 'Integraciones',
    description: 'Conecta Google Analytics para métricas avanzadas.',
    sections: [
      {
        title: 'Conectar Google Analytics',
        content: 'Para integrar Google Analytics:',
        type: 'steps',
        steps: [
          'Ve a Configuración > Integraciones',
          'Busca "Google Analytics" y haz clic en "Conectar"',
          'Introduce tu ID de medición (G-XXXXXXXXXX)',
          'Haz clic en "Guardar"'
        ]
      },
      {
        title: 'Eventos rastreados',
        content: 'Una vez conectado, LinkForge enviará automáticamente eventos de clics en enlaces y vistas de página a tu propiedad de Google Analytics.',
        type: 'tip'
      }
    ],
    relatedArticles: ['analytics-avanzado', 'utm-tracking', 'integraciones-pixel']
  },
  'integraciones-pixel': {
    title: 'Facebook/Meta Pixel',
    category: 'Integraciones',
    description: 'Configura el píxel de Meta para tracking y remarketing.',
    sections: [
      {
        title: 'Añadir el Pixel',
        content: 'Para configurar el Meta Pixel:',
        type: 'steps',
        steps: [
          'Obtén tu ID de Pixel desde Meta Business Suite',
          'Ve a Configuración > Integraciones en LinkForge',
          'Selecciona "Meta Pixel"',
          'Introduce tu Pixel ID',
          'Activa los eventos que deseas rastrear'
        ]
      },
      {
        title: 'Eventos compatibles',
        content: 'LinkForge soporta eventos estándar de Meta como PageView, ViewContent y Lead.',
        type: 'text'
      }
    ],
    relatedArticles: ['integraciones-analytics', 'utm-tracking', 'analytics-avanzado']
  },
  'integraciones-zapier': {
    title: 'Automatizaciones con Zapier',
    category: 'Integraciones',
    description: 'Conecta LinkForge con miles de apps mediante Zapier.',
    sections: [
      {
        title: 'Conectar Zapier',
        content: 'Para crear automatizaciones con Zapier:',
        type: 'steps',
        steps: [
          'Crea una cuenta en zapier.com si no tienes una',
          'Busca "LinkForge" en las apps de Zapier',
          'Conecta tu cuenta de LinkForge usando tu API Key',
          'Crea un nuevo Zap seleccionando un trigger de LinkForge'
        ]
      },
      {
        title: 'Ideas de automatización',
        content: 'Algunas automatizaciones populares incluyen: añadir clics a una hoja de Google Sheets, enviar notificaciones a Slack cuando alguien visita tu página, o crear tareas en Notion.',
        type: 'tip'
      }
    ],
    relatedArticles: ['webhooks-configurar', 'api-introduccion', 'integraciones-analytics']
  },
  'contactar-soporte': {
    title: 'Contactar con soporte',
    category: 'Soporte',
    description: 'Cómo obtener ayuda del equipo de LinkForge.',
    sections: [
      {
        title: 'Canales de soporte',
        content: 'Puedes contactarnos a través de:',
        type: 'steps',
        steps: [
          'Chat en vivo: Disponible desde tu dashboard (planes de pago)',
          'Email: soporte@linkforge.com',
          'Centro de ayuda: help.linkforge.com',
          'Twitter: @linkforge_help'
        ]
      },
      {
        title: 'Tiempos de respuesta',
        content: 'Plan gratuito: 48-72 horas. Plan Pro: 24 horas. Plan Business: 4 horas. Plan Enterprise: soporte prioritario.',
        type: 'text'
      },
      {
        title: 'Información útil',
        content: 'Para acelerar la resolución, incluye tu nombre de usuario, descripción detallada del problema y capturas de pantalla si es posible.',
        type: 'tip'
      }
    ],
    relatedArticles: ['reportar-bug', 'solicitar-funcion', 'estado-servicio']
  },
  'reportar-bug': {
    title: 'Reportar un bug',
    category: 'Soporte',
    description: 'Cómo reportar errores o problemas técnicos.',
    sections: [
      {
        title: 'Cómo reportar',
        content: 'Para reportar un bug de forma efectiva:',
        type: 'steps',
        steps: [
          'Ve a tu dashboard y haz clic en el icono de ayuda',
          'Selecciona "Reportar un problema"',
          'Describe el problema con el mayor detalle posible',
          'Incluye los pasos para reproducir el error',
          'Adjunta capturas de pantalla si es posible',
          'Indica tu navegador y dispositivo'
        ]
      },
      {
        title: 'Información del sistema',
        content: 'Incluir información técnica (navegador, versión, sistema operativo) nos ayuda a investigar más rápido.',
        type: 'tip'
      }
    ],
    relatedArticles: ['contactar-soporte', 'estado-servicio', 'solicitar-funcion']
  },
  'estado-servicio': {
    title: 'Estado del servicio',
    category: 'Soporte',
    description: 'Consulta el estado actual de LinkForge y incidencias.',
    sections: [
      {
        title: 'Página de estado',
        content: 'Consulta el estado actual de todos los servicios en status.linkforge.com',
        type: 'text'
      },
      {
        title: 'Suscribirse a alertas',
        content: 'Puedes suscribirte para recibir notificaciones:',
        type: 'steps',
        steps: [
          'Visita status.linkforge.com',
          'Haz clic en "Suscribirse"',
          'Elige recibir alertas por email o SMS',
          'Confirma tu suscripción'
        ]
      },
      {
        title: 'Historial de incidentes',
        content: 'En la página de estado también puedes ver el historial de incidentes pasados y cómo fueron resueltos.',
        type: 'text'
      }
    ],
    relatedArticles: ['contactar-soporte', 'reportar-bug', 'tiempo-actividad']
  }
};

// Map slugs to article IDs (handling different slug formats)
const slugToArticle: Record<string, string> = {
  // Direct mappings
  ...Object.keys(articles).reduce((acc, key) => ({ ...acc, [key]: key }), {}),
  // Primeros Pasos
  'primera-pagina': 'crear-cuenta',
  'anadir-links': 'agregar-enlaces',
  'compartir-pagina': 'crear-cuenta',
  // Facturación
  'planes': 'cambiar-plan',
  'actualizar-plan': 'cambiar-plan',
  'cancelar': 'cancelar-suscripcion',
  'reembolsos': 'cancelar-suscripcion',
  // Personalización
  'cambiar-tema': 'elegir-tema',
  'colores': 'css-personalizado',
  'foto-perfil': 'personalizar-perfil',
  'bio': 'personalizar-perfil',
  'fondos': 'fondos-animados',
  // Links
  'tipos-links': 'tipos-enlaces',
  'programar-links': 'programar-enlaces',
  'links-privados': 'tipos-enlaces',
  'redirecciones': 'enlaces-inteligentes',
  'deep-links': 'enlaces-inteligentes',
  // Analytics
  'entender-analytics': 'analytics-basico',
  'metricas': 'analytics-basico',
  'exportar': 'exportar-datos',
  'google-analytics': 'integraciones-analytics',
  'conversiones': 'analytics-avanzado',
  // Dominios
  'configurar-dominio': 'dominio-personalizado',
  'dns': 'dns-configuracion',
  'ssl': 'dominio-personalizado',
  'subdominios': 'dominio-personalizado',
  'problemas-dominio': 'dns-configuracion',
  // Integraciones
  'integraciones-disponibles': 'integraciones-zapier',
  'mailchimp': 'integraciones-zapier',
  'stripe': 'integraciones-zapier',
  'webhooks': 'webhooks-configurar',
  'zapier': 'integraciones-zapier',
  // API
  'api-intro': 'api-introduccion',
  'api-auth': 'api-introduccion',
  'api-endpoints': 'api-introduccion',
  'api-limits': 'api-introduccion',
  'api-sdks': 'api-introduccion',
  // Seguridad
  '2fa': 'seguridad-cuenta',
  'cambiar-password': 'cambiar-contrasena',
  'sesiones': 'seguridad-cuenta',
  'privacidad': 'seguridad-cuenta',
  'reportar': 'reportar-bug',
  // Equipos
  'crear-equipo': 'facturacion-empresas',
  'invitar': 'facturacion-empresas',
  'roles': 'facturacion-empresas',
  'facturacion-equipos': 'facturacion-empresas',
  // English alternatives
  'getting-started': 'crear-cuenta',
  'customize-profile': 'personalizar-perfil',
  'add-links': 'agregar-enlaces',
  'choose-theme': 'elegir-tema',
  'link-types': 'tipos-enlaces',
  'schedule-links': 'programar-enlaces',
  'smart-links': 'enlaces-inteligentes',
  'basic-analytics': 'analytics-basico',
  'advanced-analytics': 'analytics-avanzado',
  'export-data': 'exportar-datos',
  'change-plan': 'cambiar-plan',
  'payment-methods': 'metodos-pago',
  'cancel-subscription': 'cancelar-suscripcion',
  'invoices': 'facturas',
  'business-billing': 'facturacion-empresas',
  'account-security': 'seguridad-cuenta',
  'change-password': 'cambiar-contrasena',
  'recover-account': 'recuperar-cuenta',
  'delete-account': 'eliminar-cuenta',
  'custom-css': 'css-personalizado',
  'animated-backgrounds': 'fondos-animados',
  'custom-domain': 'dominio-personalizado',
  'dns-setup': 'dns-configuracion',
  'setup-webhooks': 'webhooks-configurar',
  'meta-pixel': 'integraciones-pixel',
  'contact-support': 'contactar-soporte',
  'report-bug': 'reportar-bug',
  'service-status': 'estado-servicio',
};

export default function HelpArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  const articleId = slugToArticle[slug] || slug;
  const article = articles[articleId];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <Link
            href="/help"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Centro de Ayuda
          </Link>

          <div className="text-center py-16">
            <AlertCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Artículo no encontrado</h1>
            <p className="text-gray-400 mb-8">
              El artículo que buscas no existe o ha sido movido.
            </p>
            <Link
              href="/help"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
            >
              Explorar Centro de Ayuda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const renderSection = (section: ArticleContent['sections'][0], index: number) => {
    switch (section.type) {
      case 'steps':
        return (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-400 mb-4">{section.content}</p>
            {section.steps && (
              <ol className="space-y-3">
                {section.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-sm font-medium">
                      {i + 1}
                    </span>
                    <span className="text-gray-300 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        );

      case 'warning':
        return (
          <div key={index} className="mb-8 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-500 mb-1">{section.title}</h3>
                <p className="text-gray-300">{section.content}</p>
              </div>
            </div>
          </div>
        );

      case 'tip':
        return (
          <div key={index} className="mb-8 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-purple-400 mb-1">{section.title}</h3>
                <p className="text-gray-300">{section.content}</p>
              </div>
            </div>
          </div>
        );

      case 'code':
        return (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-400 mb-4">{section.content}</p>
            {section.code && (
              <div className="relative">
                <pre className="p-4 rounded-lg bg-gray-900 border border-gray-800 overflow-x-auto">
                  <code className="text-sm text-gray-300">{section.code}</code>
                </pre>
                <button
                  onClick={() => navigator.clipboard.writeText(section.code || '')}
                  className="absolute top-3 right-3 p-2 rounded bg-gray-800 hover:bg-gray-700 transition"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            )}
          </div>
        );

      default:
        return (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-400">{section.content}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/help" className="hover:text-white transition">
            Centro de Ayuda
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-purple-400">{article.category}</span>
        </div>

        {/* Back link */}
        <Link
          href="/help"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Centro de Ayuda
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-xl text-gray-400">{article.description}</p>
        </header>

        {/* Article content */}
        <article className="prose prose-invert max-w-none">
          {article.sections.map((section, index) => renderSection(section, index))}
        </article>

        {/* Related articles */}
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Artículos relacionados</h3>
            <div className="grid gap-3">
              {article.relatedArticles.map((relatedSlug) => {
                const relatedArticle = articles[relatedSlug];
                if (!relatedArticle) return null;
                return (
                  <Link
                    key={relatedSlug}
                    href={`/help/article/${relatedSlug}`}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition group"
                  >
                    <div>
                      <p className="font-medium group-hover:text-purple-400 transition">
                        {relatedArticle.title}
                      </p>
                      <p className="text-sm text-gray-500">{relatedArticle.category}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Help CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 text-center">
          <h3 className="text-xl font-bold mb-2">¿No encontraste lo que buscabas?</h3>
          <p className="text-gray-400 mb-6">
            Nuestro equipo de soporte está listo para ayudarte
          </p>
          <Link
            href="/help/article/contactar-soporte"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
          >
            Contactar soporte
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

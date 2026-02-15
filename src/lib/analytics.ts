/**
 * analytics.ts
 * Helpers para tracking de eventos personalizados con GA4 y Microsoft Clarity.
 *
 * Uso desde cualquier Client Component:
 *   import { trackEvent, trackContactClick } from '@/lib/analytics';
 *   trackContactClick('restaurante');
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Envía un evento personalizado a GA4.
 * Seguro de llamar aunque GA4 no esté cargado (usuario rechazó consentimiento).
 */
export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>
): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
}

/**
 * Registra una vista de página manualmente.
 * Útil si navegas entre demos sin recarga completa.
 */
export function trackPageView(url: string): void {
  trackEvent('page_view', { page_path: url });
}

/**
 * Registra un clic en botón de contacto (WhatsApp).
 * Parámetro sector: qué demo generó el contacto.
 */
export function trackContactClick(sector: string): void {
  trackEvent('contact_click', {
    method: 'whatsapp',
    sector,
  });
}

/**
 * Registra que un visitante entró a un demo concreto.
 */
export function trackDemoView(demoName: string): void {
  trackEvent('demo_view', { demo_name: demoName });
}

/**
 * Registra el cambio de idioma en el portfolio.
 */
export function trackLanguageSwitch(lang: 'es' | 'en'): void {
  trackEvent('language_switch', { language: lang });
}

/**
 * Etiqueta la sesión en Microsoft Clarity con clave/valor personalizado.
 * Útil para agrupar grabaciones por demo visitado.
 */
export function clarityTag(key: string, value: string): void {
  if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
    window.clarity('set', key, value);
  }
}

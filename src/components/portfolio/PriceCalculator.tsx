'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor, ShoppingBag, Building2, Image as ImageIcon,
  FileText, Code2, Mail, BookOpen, Lock, CreditCard,
  Package, ShoppingCart, Settings, Plug, Bell, Search,
  Upload, Languages, Server, Globe, HeartHandshake,
  TrendingUp, ArrowRight, ArrowLeft, Check, RotateCcw,
  Shuffle
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────
type WebType = { id: string; icon: React.ElementType; label: string; desc: string; base: number };
type SizeOption = { id: string; label: string; sub: string; multiplier: number };
type Feature = { id: string; icon: React.ElementType; label: string; desc: string; price: number };
type DesignLevel = { id: string; emoji: string; label: string; desc: string; multiplier: number };
type Extra = { id: string; icon: React.ElementType; label: string; price: number };

// ── Step 1: Tipo de web ────────────────────────────────────
const webTypes: WebType[] = [
  { id: 'landing', icon: Monitor, label: 'Landing page', desc: 'Página de ventas o presentación. Foco en conversión.', base: 150 },
  { id: 'corporativa', icon: Building2, label: 'Web corporativa', desc: 'Empresa o profesional con varias secciones y páginas.', base: 350 },
  { id: 'tienda', icon: ShoppingBag, label: 'Tienda online', desc: 'E-commerce con catálogo, carrito y/o pago.', base: 550 },
  { id: 'portfolio', icon: ImageIcon, label: 'Portfolio / showcase', desc: 'Para fotógrafos, creativos, arquitectos o artistas.', base: 200 },
  { id: 'blog', icon: FileText, label: 'Blog o revista', desc: 'Publicación digital con categorías y gestión de contenido.', base: 300 },
  { id: 'app', icon: Code2, label: 'App web / plataforma', desc: 'SaaS, marketplace, panel de administración o lógica compleja.', base: 750 },
];

// ── Step 2: Tamaño ─────────────────────────────────────────
const sizeOptions: SizeOption[] = [
  { id: 'xs', label: 'Muy simple', sub: '1–3 secciones o páginas', multiplier: 1.0 },
  { id: 'sm', label: 'Normal', sub: '4–8 páginas', multiplier: 1.25 },
  { id: 'md', label: 'Amplia', sub: '9–20 páginas', multiplier: 1.65 },
  { id: 'lg', label: 'Grande', sub: '+20 páginas o contenido dinámico', multiplier: 2.2 },
];

// ── Step 3: Funcionalidades ────────────────────────────────
const features: Feature[] = [
  { id: 'form', icon: Mail, label: 'Formulario de contacto', desc: 'Los mensajes llegan a tu email real.', price: 60 },
  { id: 'blog_mgmt', icon: BookOpen, label: 'Blog / noticias gestionable', desc: 'Puedes añadir y editar entradas tú mismo.', price: 150 },
  { id: 'auth', icon: Lock, label: 'Inicio de sesión / área privada', desc: 'Usuarios con registro, login y zona privada.', price: 250 },
  { id: 'payments', icon: CreditCard, label: 'Pasarela de pago (Stripe)', desc: 'Cobros online reales, seguros y automatizados.', price: 300 },
  { id: 'catalog', icon: Package, label: 'Catálogo de productos', desc: 'Fichas de producto sin carrito ni pago.', price: 180 },
  { id: 'cart', icon: ShoppingCart, label: 'Carrito de compra', desc: 'Flujo completo de compra con carrito.', price: 200 },
  { id: 'admin', icon: Settings, label: 'Panel de administración', desc: 'Gestión de contenido, usuarios o pedidos.', price: 350 },
  { id: 'crm', icon: Plug, label: 'Integración externa (CRM, ERP…)', desc: 'Conectar con Hubspot, Salesforce, Notion, etc.', price: 200 },
  { id: 'emails', icon: Bell, label: 'Emails automáticos', desc: 'Confirmaciones, bienvenidas, notificaciones.', price: 80 },
  { id: 'search', icon: Search, label: 'Buscador interno', desc: 'Búsqueda de productos, contenidos o usuarios.', price: 100 },
  { id: 'uploads', icon: Upload, label: 'Subida de archivos', desc: 'Imágenes, documentos u otros ficheros por parte del usuario.', price: 100 },
  { id: 'i18n', icon: Languages, label: 'Multiidioma', desc: 'La web en 2 o más idiomas con selector.', price: 150 },
];

// ── Step 4: Diseño ─────────────────────────────────────────
const designLevels: DesignLevel[] = [
  { id: 'clean', emoji: '🟢', label: 'Profesional y limpio', desc: 'Diseño sólido y efectivo. Claro, sin artificios innecesarios.', multiplier: 1.0 },
  { id: 'modern', emoji: '🔵', label: 'Moderno con animaciones', desc: 'Microinteracciones, transiciones fluidas, más personalidad visual.', multiplier: 1.22 },
  { id: 'premium', emoji: '🟣', label: 'Premium / impactante', desc: 'Identidad visual fuerte, diseño exclusivo que destaca sobre todos.', multiplier: 1.5 },
];

// ── Step 5: Extras ─────────────────────────────────────────
const extras: Extra[] = [
  { id: 'deploy', icon: Server, label: 'Despliegue en servidor / Vercel', price: 80 },
  { id: 'domain', icon: Globe, label: 'Configuración de dominio y SSL', price: 50 },
  { id: 'maint3', icon: HeartHandshake, label: 'Mantenimiento 3 meses', price: 200 },
  { id: 'maint6', icon: HeartHandshake, label: 'Mantenimiento 6 meses', price: 350 },
  { id: 'seo', icon: TrendingUp, label: 'Optimización SEO técnica avanzada', price: 120 },
  { id: 'migration', icon: Shuffle, label: 'Migración / redirecciones desde web anterior', price: 80 },
];

// ── Price calculation ──────────────────────────────────────
function calcPrice(
  webType: string,
  size: string,
  selectedFeatures: string[],
  design: string,
  selectedExtras: string[]
): { total: number; breakdown: { label: string; amount: number }[] } {
  const wt = webTypes.find(w => w.id === webType);
  const sz = sizeOptions.find(s => s.id === size);
  const dl = designLevels.find(d => d.id === design);
  if (!wt || !sz || !dl) return { total: 0, breakdown: [] };

  const base = Math.round(wt.base * sz.multiplier);
  const designExtra = Math.round(base * (dl.multiplier - 1));
  const featureSum = selectedFeatures.reduce((acc, fid) => {
    const f = features.find(f => f.id === fid);
    return acc + (f?.price ?? 0);
  }, 0);
  const extraSum = selectedExtras.reduce((acc, eid) => {
    const e = extras.find(e => e.id === eid);
    return acc + (e?.price ?? 0);
  }, 0);

  const breakdown: { label: string; amount: number }[] = [
    { label: `${wt.label} · ${sz.label}`, amount: base },
  ];
  if (designExtra > 0) breakdown.push({ label: `Diseño ${dl.label.toLowerCase()}`, amount: designExtra });
  selectedFeatures.forEach(fid => {
    const f = features.find(f => f.id === fid);
    if (f) breakdown.push({ label: f.label, amount: f.price });
  });
  selectedExtras.forEach(eid => {
    const e = extras.find(e => e.id === eid);
    if (e) breakdown.push({ label: e.label, amount: e.price });
  });

  return { total: base + designExtra + featureSum + extraSum, breakdown };
}

const TOTAL_STEPS = 5;
const stepLabels = ['Tipo', 'Tamaño', 'Funciones', 'Diseño', 'Extras'];

// ── Component ──────────────────────────────────────────────
export default function PriceCalculator() {
  const [step, setStep] = useState(0);
  const [webType, setWebType] = useState('');
  const [size, setSize] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [design, setDesign] = useState('');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  // Live price (even mid-wizard)
  const livePrice = calcPrice(
    webType || 'landing',
    size || 'xs',
    selectedFeatures,
    design || 'clean',
    selectedExtras
  );

  const { total, breakdown } = calcPrice(webType, size, selectedFeatures, design, selectedExtras);

  function toggleFeature(id: string) {
    setSelectedFeatures(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  }
  function toggleExtra(id: string) {
    setSelectedExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  }

  function canNext() {
    if (step === 0) return !!webType;
    if (step === 1) return !!size;
    if (step === 2) return true; // features optional
    if (step === 3) return !!design;
    return true;
  }

  function next() {
    if (step < TOTAL_STEPS - 1) setStep(s => s + 1);
    else setDone(true);
  }
  function back() {
    if (done) { setDone(false); return; }
    setStep(s => Math.max(0, s - 1));
  }
  function reset() {
    setStep(0); setWebType(''); setSize(''); setSelectedFeatures([]);
    setDesign(''); setSelectedExtras([]); setDone(false);
  }

  const btnBase = 'flex-shrink-0 rounded-xl border p-4 text-left transition-all duration-200 hover:border-purple-500/40 cursor-pointer w-full';
  const btnActive = 'border-purple-500/70 bg-[rgba(108,0,255,0.15)]';
  const btnInactive = 'border-white/8 bg-white/2';

  const slideVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <section id="calculadora" className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#070014' }}>
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white/60 border border-white/10 mb-4"
            style={{ background: 'rgba(108,0,255,0.08)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(90deg, #6c00ff, #00d4ff)' }} />
            Calcula tu precio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl sm:text-4xl font-black text-white mb-3"
          >
            ¿Cuánto cuesta <em className="not-italic" style={{ background: 'linear-gradient(90deg,#a78bfa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>tu web</em>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/45 text-sm sm:text-base max-w-xl mx-auto"
          >
            Selecciona solo lo que necesitas. El precio se calcula en tiempo real.
          </motion.p>
          {/* First-client badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border text-xs text-white/60"
            style={{ background: 'rgba(0,212,255,0.05)', borderColor: 'rgba(0,212,255,0.15)' }}
          >
            🎉 Precios especialmente competitivos al ser mis primeros proyectos reales
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl border border-white/8 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          {/* Progress bar */}
          {!done && (
            <div className="px-6 pt-6 pb-0">
              <div className="flex items-center gap-1 mb-1">
                {stepLabels.map((label, i) => (
                  <div key={label} className="flex items-center gap-1 flex-1">
                    <div className="flex flex-col items-center w-full">
                      <div
                        className="h-1.5 w-full rounded-full transition-all duration-500"
                        style={{
                          background: i < step ? 'linear-gradient(90deg,#6c00ff,#00d4ff)' :
                            i === step ? 'rgba(108,0,255,0.5)' : 'rgba(255,255,255,0.08)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1.5 mb-4">
                {stepLabels.map((label, i) => (
                  <span
                    key={label}
                    className="text-[10px] font-semibold transition-colors"
                    style={{ color: i === step ? '#a78bfa' : i < step ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)' }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Live price chip */}
          {!done && webType && (
            <div className="px-6 pb-3 flex justify-end">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: 'linear-gradient(135deg,rgba(108,0,255,0.2),rgba(0,212,255,0.12))', border: '1px solid rgba(108,0,255,0.3)' }}
              >
                <span className="text-white/50">Estimado</span>
                <span style={{ background: 'linear-gradient(90deg,#a78bfa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {livePrice.total.toLocaleString()}€
                </span>
              </div>
            </div>
          )}

          {/* Step content */}
          <div className="px-4 sm:px-6 pb-6 min-h-[320px]">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={step}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {/* STEP 0 — Tipo de web */}
                  {step === 0 && (
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg mb-4">
                        1. ¿Qué tipo de web quieres hacer?
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {webTypes.map(({ id, icon: Icon, label, desc, base }) => (
                          <button
                            key={id}
                            onClick={() => setWebType(id)}
                            className={`${btnBase} ${webType === id ? btnActive : btnInactive}`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ background: webType === id ? 'linear-gradient(135deg,#6c00ff44,#00d4ff33)' : 'rgba(255,255,255,0.05)' }}
                              >
                                <Icon size={16} className={webType === id ? 'text-purple-300' : 'text-white/40'} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <span className={`font-semibold text-sm ${webType === id ? 'text-white' : 'text-white/60'}`}>{label}</span>
                                  <span className="text-xs font-bold flex-shrink-0" style={{ color: '#a78bfa' }}>desde {base}€</span>
                                </div>
                                <p className="text-white/35 text-xs mt-0.5 leading-snug">{desc}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 1 — Tamaño */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg mb-4">
                        2. ¿Qué tamaño tiene tu proyecto?
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {sizeOptions.map(({ id, label, sub, multiplier }) => {
                          const wt = webTypes.find(w => w.id === webType);
                          const est = wt ? Math.round(wt.base * multiplier) : null;
                          return (
                            <button
                              key={id}
                              onClick={() => setSize(id)}
                              className={`${btnBase} ${size === id ? btnActive : btnInactive}`}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div>
                                  <div className={`font-semibold text-sm ${size === id ? 'text-white' : 'text-white/60'}`}>{label}</div>
                                  <div className="text-white/35 text-xs mt-0.5">{sub}</div>
                                </div>
                                {est !== null && (
                                  <span className="text-xs font-bold flex-shrink-0" style={{ color: '#a78bfa' }}>≈{est}€+</span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 2 — Funcionalidades */}
                  {step === 2 && (
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                        3. ¿Qué funcionalidades necesita?
                      </h3>
                      <p className="text-white/35 text-xs mb-4">Selecciona solo las que realmente uses. Puedes dejar esto vacío si no necesitas nada especial.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {features.map(({ id, icon: Icon, label, desc, price }) => {
                          const active = selectedFeatures.includes(id);
                          return (
                            <button
                              key={id}
                              onClick={() => toggleFeature(id)}
                              className={`${btnBase} relative ${active ? btnActive : btnInactive}`}
                            >
                              {active && (
                                <span className="absolute top-3 right-3 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#6c00ff,#00d4ff)' }}>
                                  <Check size={9} className="text-white" />
                                </span>
                              )}
                              <div className="flex items-start gap-3 pr-4">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: active ? 'rgba(108,0,255,0.2)' : 'rgba(255,255,255,0.05)' }}>
                                  <Icon size={14} className={active ? 'text-purple-300' : 'text-white/35'} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className={`font-semibold text-xs sm:text-sm ${active ? 'text-white' : 'text-white/55'}`}>{label}</span>
                                    <span className="text-xs font-bold ml-auto flex-shrink-0" style={{ color: active ? '#a78bfa' : 'rgba(167,139,250,0.5)' }}>+{price}€</span>
                                  </div>
                                  <p className="text-white/30 text-[11px] mt-0.5 leading-snug">{desc}</p>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 3 — Nivel de diseño */}
                  {step === 3 && (
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg mb-4">
                        4. ¿Qué nivel de diseño buscas?
                      </h3>
                      <div className="flex flex-col gap-3">
                        {designLevels.map(({ id, emoji, label, desc, multiplier }) => {
                          const wt = webTypes.find(w => w.id === webType);
                          const sz = sizeOptions.find(s => s.id === size);
                          const extraCost = wt && sz ? Math.round(wt.base * sz.multiplier * (multiplier - 1)) : null;
                          return (
                            <button
                              key={id}
                              onClick={() => setDesign(id)}
                              className={`${btnBase} ${design === id ? btnActive : btnInactive}`}
                            >
                              <div className="flex items-center gap-4">
                                <span className="text-2xl flex-shrink-0">{emoji}</span>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className={`font-bold text-sm sm:text-base ${design === id ? 'text-white' : 'text-white/55'}`}>{label}</span>
                                    <span className="text-xs font-bold flex-shrink-0" style={{ color: '#a78bfa' }}>
                                      {extraCost !== null && extraCost > 0 ? `+${extraCost}€` : 'incluido'}
                                    </span>
                                  </div>
                                  <p className={`text-xs mt-0.5 leading-snug ${design === id ? 'text-white/55' : 'text-white/30'}`}>{desc}</p>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 4 — Extras */}
                  {step === 4 && (
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                        5. ¿Necesitas algo más?
                      </h3>
                      <p className="text-white/35 text-xs mb-4">Todo opcional. Solo lo que realmente necesites.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {extras.map(({ id, icon: Icon, label, price }) => {
                          const active = selectedExtras.includes(id);
                          return (
                            <button
                              key={id}
                              onClick={() => toggleExtra(id)}
                              className={`${btnBase} relative ${active ? btnActive : btnInactive}`}
                            >
                              {active && (
                                <span className="absolute top-3 right-3 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#6c00ff,#00d4ff)' }}>
                                  <Check size={9} className="text-white" />
                                </span>
                              )}
                              <div className="flex items-center gap-3 pr-5">
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: active ? 'rgba(108,0,255,0.2)' : 'rgba(255,255,255,0.05)' }}>
                                  <Icon size={15} className={active ? 'text-purple-300' : 'text-white/40'} />
                                </div>
                                <div className="flex-1">
                                  <span className={`font-semibold text-sm ${active ? 'text-white' : 'text-white/55'}`}>{label}</span>
                                </div>
                                <span className="text-xs font-bold flex-shrink-0" style={{ color: active ? '#a78bfa' : 'rgba(167,139,250,0.5)' }}>+{price}€</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                /* RESULT */
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="text-center mb-6">
                    <p className="text-white/50 text-sm mb-1">Estimación para tu proyecto</p>
                    <div
                      className="text-5xl sm:text-6xl font-black"
                      style={{ background: 'linear-gradient(135deg,#a78bfa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                      {total.toLocaleString()}€
                    </div>
                    <p className="text-white/30 text-xs mt-2">* Orientativo. Te presupuesto de forma exacta antes de empezar.</p>
                  </div>

                  {/* Breakdown */}
                  <div className="rounded-2xl border border-white/8 overflow-hidden mb-5" style={{ background: 'rgba(255,255,255,0.025)' }}>
                    <div className="px-4 py-3 border-b border-white/6">
                      <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">Desglose</span>
                    </div>
                    {breakdown.map((item, i) => (
                      <div key={i} className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 last:border-b-0">
                        <span className="text-white/65 text-sm">{item.label}</span>
                        <span className="text-white/80 text-sm font-semibold">{item.amount.toLocaleString()}€</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between px-4 py-3 border-t border-white/10" style={{ background: 'rgba(108,0,255,0.06)' }}>
                      <span className="text-white font-bold text-sm">Total estimado</span>
                      <span className="font-black text-lg" style={{ background: 'linear-gradient(90deg,#a78bfa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{total.toLocaleString()}€</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/contacto?ref=calculadora&budget=${total}`}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white hover:scale-105 transition-all text-sm"
                      style={{ background: 'linear-gradient(135deg,#6c00ff,#00d4ff)' }}
                    >
                      Pedir presupuesto exacto
                      <ArrowRight size={15} />
                    </Link>
                    <button
                      onClick={reset}
                      className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/15 text-white/60 hover:text-white hover:border-white/35 transition-all text-sm"
                    >
                      <RotateCcw size={13} />
                      Recalcular
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          {!done && (
            <div className="px-4 sm:px-6 py-4 border-t border-white/6 flex items-center justify-between gap-3" style={{ background: 'rgba(0,0,0,0.15)' }}>
              <button
                onClick={back}
                disabled={step === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/25 transition-all text-sm disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={14} />
                Atrás
              </button>
              <span className="text-white/25 text-xs hidden sm:block">Paso {step + 1} de {TOTAL_STEPS}</span>
              <button
                onClick={next}
                disabled={!canNext()}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl font-semibold text-white transition-all text-sm disabled:opacity-35 disabled:cursor-not-allowed hover:opacity-90 hover:scale-105"
                style={{ background: canNext() ? 'linear-gradient(135deg,#6c00ff,#00d4ff)' : 'rgba(255,255,255,0.08)' }}
              >
                {step === TOTAL_STEPS - 1 ? 'Ver precio' : 'Siguiente'}
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </motion.div>

        <p className="text-white/20 text-xs text-center mt-4">
          El precio final puede variar según el detalle exacto del proyecto. Siempre envío un presupuesto cerrado antes de empezar.
        </p>
      </div>
    </section>
  );
}

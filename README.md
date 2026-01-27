# LinkForge - Tu Pagina de Links Profesional

Una alternativa moderna y gratuita a Linktree, construida con Next.js 15. Permite a creadores, influencers y emprendedores compartir todos sus enlaces importantes en una sola pagina personalizable.

## Caracteristicas

- **Plan Gratuito**: 5 links, 3 temas, analytics basicos
- **Plan Pro** (4.99 EUR/mes): Links ilimitados, +20 temas, analytics avanzados
- **Despliegue 0 EUR/mes**: Funciona completamente gratis en Vercel
- **Sin backend requerido**: Usa localStorage para demo (o integra con tu DB)
- **Temas personalizables**: +20 temas profesionales incluidos
- **Analytics integrados**: Seguimiento de visitas y clicks
- **Stripe listo**: Integracion preparada para pagos

## Despliegue Rapido en Vercel (GRATIS)

### Opcion 1: Deploy con un click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/linkforge)

### Opcion 2: Deploy manual

1. **Fork o clona este repositorio**

2. **Conecta con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Haz click en "New Project"
   - Importa tu repositorio
   - Click en "Deploy"

3. **Listo!** Tu app estara disponible en `tu-proyecto.vercel.app`

## Configuracion de Pagos (Opcional)

Si quieres cobrar suscripciones reales, configura Stripe:

1. Crea una cuenta en [stripe.com](https://stripe.com)

2. En Stripe Dashboard:
   - Crea un producto "LinkForge Pro"
   - Anade un precio mensual (4.99 EUR)
   - Anade un precio anual (49.99 EUR)

3. En Vercel, anade estas variables de entorno:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_SECRET_KEY=sk_live_...
   NEXT_PUBLIC_STRIPE_PRICE_MONTHLY=price_...
   NEXT_PUBLIC_STRIPE_PRICE_YEARLY=price_...
   ```

4. Configura el webhook de Stripe:
   - URL: `https://tu-dominio.vercel.app/api/stripe/webhook`
   - Eventos: checkout.session.completed, customer.subscription.deleted

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── auth/
│   │   ├── login/            # Pagina de login
│   │   └── register/         # Pagina de registro
│   ├── dashboard/
│   │   ├── page.tsx          # Dashboard principal
│   │   └── upgrade/          # Pagina de upgrade a Pro
│   ├── profile/
│   │   └── [username]/       # Pagina publica del perfil
│   └── api/
│       ├── checkout/         # API de Stripe checkout
│       └── stripe/webhook/   # Webhook de Stripe
├── components/               # Componentes reutilizables
├── lib/
│   ├── themes.ts            # Definicion de temas
│   └── stripe.ts            # Utilidades de Stripe
├── store/
│   └── userStore.ts         # Estado global (Zustand)
└── types/
    └── index.ts             # Tipos TypeScript
```

## Personalizacion

### Cambiar precios
Edita los precios en `src/app/page.tsx` y `src/app/dashboard/upgrade/page.tsx`

### Anadir nuevos temas
Anade nuevos temas en `src/lib/themes.ts`

### Cambiar colores
Modifica la paleta de colores en los archivos de componentes o usa variables CSS en `globals.css`

## Modelo de Negocio

Con esta app puedes generar ingresos de varias formas:

1. **Suscripciones Pro**: 4.99 EUR/mes o 49.99 EUR/ano por usuario
2. **Vender la web**: Como proyecto SaaS listo para usar
3. **White-label**: Personaliza y vende a clientes
4. **Afiliados**: Anade productos de afiliados en la landing

### Proyeccion de ingresos

| Usuarios Pro | Mensual    | Anual      |
|-------------|------------|------------|
| 10          | 49.90 EUR  | 598.80 EUR |
| 50          | 249.50 EUR | 2,994 EUR  |
| 100         | 499 EUR    | 5,988 EUR  |
| 500         | 2,495 EUR  | 29,940 EUR |

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Estado**: Zustand
- **Iconos**: Lucide React
- **Pagos**: Stripe
- **Hosting**: Vercel (gratuito)

## Licencia

MIT - Usa este proyecto como quieras.

---

Hecho con amor para emprendedores que quieren monetizar sin gastar en infraestructura.

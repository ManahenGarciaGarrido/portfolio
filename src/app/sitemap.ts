import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://manahengarcia.dev';

// All demo sections with their sub-pages
const demos: Record<string, string[]> = {
  abogados:    ['areas', 'blog', 'consulta', 'equipo'],
  academia:    ['cursos', 'instructores', 'precios', 'contacto'],
  agencia:     ['servicios', 'casos', 'nosotros', 'contacto'],
  arquitecto:  ['proyectos', 'proceso', 'equipo', 'contacto'],
  barberia:    ['servicios', 'equipo', 'galeria', 'reservar'],
  cafeteria:   ['carta', 'historia', 'fidelidad', 'contacto'],
  clinica:     ['especialidades', 'equipo', 'blog', 'cita'],
  cocktailbar: ['carta', 'reservar', 'eventos', 'contacto'],
  eventos:     ['servicios', 'paquetes', 'galeria', 'contacto'],
  fisio:       ['tratamientos', 'equipo', 'blog', 'reservar'],
  florista:    ['catalogo', 'bodas', 'blog', 'contacto'],
  fotografo:   ['galeria', 'servicios', 'blog', 'contacto'],
  gym:         ['clases', 'planes', 'entrenadores', 'contacto'],
  hotel:       ['habitaciones', 'restaurante-hotel', 'galeria', 'reservar'],
  inmobiliaria:['propiedades', 'nosotros', 'blog', 'contacto'],
  joyeria:     ['colecciones', 'bespoke', 'sobre-nosotros', 'contacto'],
  musica:      ['bio', 'eventos', 'mixes', 'booking'],
  restaurante: ['carta', 'galeria', 'historia', 'reservar'],
  spa:         ['tratamientos', 'equipo', 'galeria', 'reservar'],
  startup:     ['funciones', 'precios', 'clientes', 'contacto'],
  taller:      ['servicios', 'diagnostico', 'equipo', 'contacto'],
  tecnologia:  ['productos', 'comparador', 'garantia', 'contacto'],
  'tienda-moda':['productos', 'lookbook', 'nosotros'],
  viajes:      ['destinos', 'paquetes', 'nosotros', 'contacto'],
  yoga:        ['clases', 'horarios', 'instructores', 'contacto'],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/privacidad`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ];

  // Demo index pages
  const demoIndexPages: MetadataRoute.Sitemap = Object.keys(demos).map((slug) => ({
    url: `${BASE_URL}/demos/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Demo sub-pages
  const demoSubPages: MetadataRoute.Sitemap = Object.entries(demos).flatMap(
    ([slug, subpages]) =>
      subpages.map((sub) => ({
        url: `${BASE_URL}/demos/${slug}/${sub}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }))
  );

  return [...staticPages, ...demoIndexPages, ...demoSubPages];
}

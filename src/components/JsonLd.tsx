// JSON-LD structured data for Google rich results (Schema.org)
// Helps Google understand who you are and what services you offer.
// Free SEO boost: enables rich snippets in search results.

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://manahengarcia.dev';

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manahen García Garrido",
    url: BASE_URL,
    sameAs: [
      "https://github.com/ManahenGarciaGarrido",
      "https://www.linkedin.com/in/manahen-garcia-garrido-71524b1a0/",
      "https://www.instagram.com/manahengarcia10/",
    ],
    jobTitle: "Desarrollador Web Freelance",
    description:
      "Desarrollador web freelance especializado en diseño de páginas web profesionales que convierten visitas en clientes.",
    knowsAbout: [
      "Desarrollo Web",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Diseño Web Profesional",
      "Tiendas Online",
      "SEO",
    ],
    nationality: {
      "@type": "Country",
      name: "España",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Manahen García Garrido — Desarrollador Web",
    url: BASE_URL,
    description:
      "Portfolio de desarrollo web profesional. Diseño webs que convierten visitas en clientes.",
    author: {
      "@type": "Person",
      name: "Manahen García Garrido",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Manahen García Garrido — Desarrollador Web Freelance",
    url: BASE_URL,
    description:
      "Servicios de diseño y desarrollo web profesional para empresas en España. Webs para restaurantes, tiendas online, startups, agencias, abogados, clínicas y más.",
    provider: {
      "@type": "Person",
      name: "Manahen García Garrido",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Desarrollo Web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web para Restaurantes",
            description:
              "Diseño de página web profesional para restaurantes con carta online, reservas y galería.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tienda Online",
            description:
              "Desarrollo de tienda online con catálogo de productos y pasarela de pago.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web para Empresas",
            description:
              "Diseño web corporativo profesional para empresas, agencias y startups.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web para Autónomos",
            description:
              "Páginas web para autónomos: fotógrafos, arquitectos, fisioterapeutas, abogados y más.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

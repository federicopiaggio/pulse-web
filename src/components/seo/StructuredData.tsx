import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pulse Bariloche",
    description:
      "Team building musical experiences in Bariloche using Rhythmic Sign Language. Unite your team through rhythm with professional group activities.",
    url: "https://pulsebariloche.com.ar",
    telephone: "+54-xxx-xxx-xxxx", // Agregar tu teléfono real
    email: "federicopiaggio26@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Carlos de Bariloche",
      addressRegion: "Río Negro",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -41.1335,
      longitude: -71.3103,
    },
    serviceArea: {
      "@type": "Place",
      name: "Bariloche and surrounding areas",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "15",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Team Building Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rhythmic Sign Language Team Building",
            description:
              "Interactive musical team building experience using Rhythmic Sign Language created by Santiago Vázquez",
          },
        },
      ],
    },
    founder: {
      "@type": "Person",
      name: "Santiago Vázquez",
      description:
        "Argentinian percussionist and creator of Rhythmic Sign Language",
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

import Script from "next/script";

export const StructuredData = () => {
  const baseUrl = "https://pulsebariloche.com.ar";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Pulse Bariloche",
        inLanguage: "es-AR",
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Pulse Bariloche - Team Building Through Rhythm",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#business`,
        },
        description:
          "Unite your team through rhythm with Pulse Bariloche. Team building musical activities in Bariloche using Rhythmic Sign Language.",
        inLanguage: "es-AR",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#business`,
        name: "Pulse Bariloche",
        description:
          "Team building musical experiences in Bariloche using Rhythmic Sign Language.",
        url: baseUrl,
        image: `${baseUrl}/opengraph-image`,
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
        areaServed: {
          "@type": "Place",
          name: "San Carlos de Bariloche y alrededores",
        },
        priceRange: "$$",
        knowsAbout: [
          "Team building",
          "Rhythmic Sign Language",
          "Experiencias musicales corporativas",
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Experiencia de Team Building con Ritmo",
            description:
              "Actividad grupal musical para empresas y equipos usando Rhythmic Sign Language.",
          },
        },
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      strategy="beforeInteractive"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

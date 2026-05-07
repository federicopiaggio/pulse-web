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
          "Musical team building experiences in Bariloche, Patagonia, using Rhythmic Sign Language. Group experiences for companies, corporate retreats and groups in Argentine Patagonia.",
        url: baseUrl,
        image: `${baseUrl}/opengraph-image?v=4`,
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
        areaServed: [
          {
            "@type": "Place",
            name: "San Carlos de Bariloche",
          },
          {
            "@type": "Place",
            name: "Patagonia, Argentina",
          },
        ],
        priceRange: "$$",
        knowsAbout: [
          "Team building Bariloche",
          "Musical team building",
          "Corporate retreat Bariloche",
          "Rhythmic Sign Language",
          "Corporate musical experiences",
          "Group activities Bariloche",
          "Drum circle",
          "Patagonia corporate retreats",
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Musical Team Building Experience in Bariloche",
            description:
              "Group musical activity for companies and teams in Bariloche using Rhythmic Sign Language. Ideal for corporate retreats and team integration experiences in Patagonia.",
          },
        },
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#facilitator`,
        name: "Matías Pergolani",
        jobTitle: "Percussionist and team building facilitator",
        description:
          "Percussionist and music teacher based in Bariloche with over ten years of experience using Rhythmic Sign Language for team building and group experiences.",
        worksFor: {
          "@id": `${baseUrl}/#business`,
        },
        knowsAbout: [
          "Rhythmic Sign Language",
          "Percussion",
          "Musical team building",
          "Group facilitation",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Pulse team building in Bariloche?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pulse is a musical team building experience in Bariloche, Patagonia. We use Rhythmic Sign Language, created by Argentine percussionist Santiago Vázquez, to guide groups in making live music together. The experience builds leadership, communication, focus and teamwork skills.",
            },
          },
          {
            "@type": "Question",
            name: "How many people can join the team building experience?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pulse is designed for groups of any size, from small teams to large corporate groups. It is perfect for company retreats, team integration days and corporate conventions in Bariloche and Patagonia.",
            },
          },
          {
            "@type": "Question",
            name: "Do participants need musical experience?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No musical knowledge is required. The Pulse team building experience is designed so that anyone, regardless of musical background, can participate fully and enjoy creating live music together with their team.",
            },
          },
          {
            "@type": "Question",
            name: "Where do the team building activities take place?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Activities take place in San Carlos de Bariloche, Patagonia, Argentina. Pulse can adapt to different venues, indoors or outdoors, to suit your group's needs.",
            },
          },
          {
            "@type": "Question",
            name: "How do I book a team building experience in Bariloche?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can reach us through the contact form on our website or via WhatsApp. We will advise you on the best format for your group and put together a tailored proposal for your corporate retreat or team activity in Bariloche.",
            },
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

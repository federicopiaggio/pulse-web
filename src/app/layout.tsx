import type { Metadata } from "next";
import { StructuredData } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pulse Bariloche - Team Building Through Rhythm",
    template: "%s | Pulse Bariloche",
  },
  description:
    "Unite your team through rhythm with Pulse Bariloche. Experience team building musical activities in Bariloche using Rhythmic Sign Language. Perfect for corporate retreats and group experiences.",
  keywords: [
    "team building",
    "Bariloche",
    "corporate retreats",
    "musical experiences",
    "rhythmic sign language",
    "group activities",
    "Argentina",
    "Santiago Vázquez",
  ],
  authors: [{ name: "Pulse Bariloche" }],
  creator: "Pulse Bariloche",
  publisher: "Pulse Bariloche",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://pulsebariloche.com.ar",
    siteName: "Pulse Bariloche",
    title: "Pulse Bariloche - Team Building Through Rhythm",
    description:
      "Unite your team through rhythm with Pulse Bariloche. Experience team building musical activities in Bariloche using Rhythmic Sign Language.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pulse Bariloche - Team building musical experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse Bariloche - Team Building Through Rhythm",
    description:
      "Unite your team through rhythm with Pulse Bariloche. Experience team building musical activities in Bariloche.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/assets/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/assets/icon.svg" }],
  },
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://pulsebariloche.com.ar"
      : "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import Welcome from "../components/Welcome";

export const metadata: Metadata = {
  title: "Team Building in Bariloche | Pulse — Musical Experiences for Companies",
  description:
    "Pulse Bariloche offers unique musical team building experiences for companies and groups in San Carlos de Bariloche, Patagonia. Unite your team through rhythm using Rhythmic Sign Language. Get in touch!",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <Welcome />;
}

import type { Metadata } from "next";
import Welcome from "../components/Welcome";

export const metadata: Metadata = {
  title: "Team Building en Bariloche con Ritmo",
  description:
    "Pulse Bariloche ofrece experiencias de team building musical para empresas y grupos en San Carlos de Bariloche.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <Welcome />;
}

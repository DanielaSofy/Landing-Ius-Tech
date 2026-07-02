import type { Metadata } from "next";
import InHouseLanding from "@/components/landing/inhouse-landing";
import { INHOUSE_FAQ } from "@/components/landing/faq-data";

export const metadata: Metadata = {
  title: "Software para equipos legales in-house en México",
  description:
    "Tareas del equipo, litigios externos, vencimientos de contratos y requerimientos del SAT en un solo panel. Supervisa sin juntas de estatus. Prueba 14 días gratis.",
  alternates: { canonical: "/in-house" },
  openGraph: {
    title: "Software para equipos legales in-house en México | Ius-Tech",
    description:
      "Tareas, litigios externos y vencimientos de contratos en un panel que se actualiza solo.",
    url: "/in-house",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ius-Tech para equipos legales in-house",
  url: "https://ius-tech.com.mx/in-house",
  inLanguage: "es-MX",
  description:
    "Funciones de Ius-Tech para departamentos jurídicos internos en México: gestión de tareas del equipo, vigilancia de litigios externos, control de vencimientos de contratos, requerimientos del SAT y reportes para dirección.",
  isPartOf: { "@type": "WebSite", name: "Ius-Tech", url: "https://ius-tech.com.mx" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: INHOUSE_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <InHouseLanding />
    </>
  );
}

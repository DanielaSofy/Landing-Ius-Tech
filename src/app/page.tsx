import type { Metadata } from "next";
import HomeLanding from "@/components/landing/home-landing";
import { HOME_FAQ } from "@/components/landing/faq-data";
import { PLANS } from "@/components/landing/data";

export const metadata: Metadata = {
  title: "Ius-Tech: software de gestión legal para abogados en México",
  description:
    "Organiza expedientes, calcula plazos SAT y TFJA, da seguimiento al PJF y genera escritos con IA. Plataforma de gestión legal hecha en México. Prueba 14 días gratis.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ius-Tech: software de gestión legal para abogados en México",
    description:
      "Expedientes, plazos, escritos con IA y reportes para clientes en una sola plataforma. Prueba 14 días gratis.",
    url: "/",
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ius-Tech",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://ius-tech.com.mx",
  inLanguage: "es-MX",
  description:
    "Plataforma de gestión legal para abogados en México: expedientes, cálculo de plazos SAT y TFJA, seguimiento del PJF, alertas del DOF, generación de escritos con IA y reportes para clientes.",
  offers: PLANS.map((p) => ({
    "@type": "Offer",
    name: `Plan ${p.name}`,
    price: p.priceMonthly,
    priceCurrency: "USD",
    description: `${p.audience}. Desde ${p.priceAnnual} USD/mes con facturación anual.`,
    url: p.links.monthly,
  })),
  featureList: [
    "Gestión de expedientes y tareas",
    "Cálculo de plazos SAT y TFJA con días inhábiles",
    "Seguimiento automático del PJF",
    "Alertas del Diario Oficial de la Federación",
    "Generación de escritos fiscales con IA",
    "Reportes de estatus para clientes",
    "Importación desde Excel",
  ],
  provider: { "@type": "Organization", name: "Ius-Tech", url: "https://ius-tech.com.mx" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeLanding />
    </>
  );
}

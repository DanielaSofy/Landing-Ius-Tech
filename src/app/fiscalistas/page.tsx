import type { Metadata } from "next";
import FiscalistasLanding from "@/components/landing/fiscalistas-landing";
import { FISCALISTAS_FAQ } from "@/components/landing/faq-data";

export const metadata: Metadata = {
  title: "Software para abogados fiscalistas: plazos SAT/TFJA, PJF y escritos con IA",
  description:
    "Ius-Tech calcula plazos SAT y TFJA con días inhábiles, vigila el PJF y el DOF, y genera recursos de revocación con IA. Hecho por una fiscalista mexicana. Prueba gratis.",
  alternates: { canonical: "/fiscalistas" },
  openGraph: {
    title: "Software para abogados fiscalistas en México | Ius-Tech",
    description:
      "Plazos SAT/TFJA automáticos, seguimiento del PJF, monitor del DOF y escritos de litigio fiscal con IA.",
    url: "/fiscalistas",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ius-Tech para abogados fiscalistas",
  url: "https://ius-tech.com.mx/fiscalistas",
  inLanguage: "es-MX",
  description:
    "Funciones de Ius-Tech para litigio fiscal en México: cálculo de plazos SAT y TFJA con días inhábiles, seguimiento automático del PJF, alertas del DOF, chat del Código Fiscal de la Federación y generación de recursos de revocación con IA.",
  isPartOf: { "@type": "WebSite", name: "Ius-Tech", url: "https://ius-tech.com.mx" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FISCALISTAS_FAQ.map((f) => ({
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
      <FiscalistasLanding />
    </>
  );
}

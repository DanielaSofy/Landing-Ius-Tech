"use client";

import React from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { Hero, TrustBar } from "./hero";
import { EscritoExhibit } from "./exhibits";
import { Section } from "./section";
import {
  PainList,
  FeatureClusters,
  Steps,
  SecurityPanel,
  FounderPanel,
} from "./blocks";
import { PricingSection } from "./pricing";
import { FaqSection } from "./faq";
import { ContactSection } from "./contact";
import { FinalCta } from "./final-cta";
import { FISCALISTAS_FAQ } from "./faq-data";

export default function FiscalistasLanding() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <Nav badge="Fiscalistas" />

      <Hero
        eyebrow="Para abogados fiscalistas"
        title={
          <>
            Deja de contar
            <br className="hidden sm:inline" />{" "}
            días hábiles a mano.
          </>
        }
        subtitle="Ius-Tech calcula plazos SAT y TFJA, vigila el PJF y el DOF, y redacta los borradores de tus escritos. Tú pones la estrategia."
        exhibit={<EscritoExhibit />}
      />

      <TrustBar
        items={[
          "Calendarios de inhábiles SAT y TFJA precargados",
          "Plantillas estructuradas por fiscalistas",
          "14 días de prueba, sin tarjeta",
        ]}
      />

      <Section>
        <PainList
          title="El día de un fiscalista, antes de empezar a litigar"
          subtitle="Nada de esto requiere tu cédula profesional. Todo esto te come el día."
          items={[
            {
              title: "Revisar el PJF expediente por expediente",
              text: "Entrar al portal, buscar cada asunto, verificar si hay acuerdos nuevos. Media hora diaria, con suerte.",
            },
            {
              title: "Contar plazos entre dos calendarios",
              text: "30 días hábiles descontando los inhábiles del SAT, que no son los del TFJA. Un error de un día y el medio de defensa se pierde.",
            },
            {
              title: "Redactar el mismo recurso otra vez",
              text: "Buscar uno parecido, copiar antecedentes, ajustar hechos, verificar fundamento. Dos horas por escrito.",
            },
            {
              title: "Traducir el expediente al cliente",
              text: "Explicar qué significa que 'se tuvo por contestada la ampliación de demanda' en un correo que cualquiera entienda.",
            },
          ]}
        />
      </Section>

      <Section id="funciones" className="border-t border-line">
        <FeatureClusters
          title="Funciones que ningún otro software legal tiene"
          subtitle="Diseñadas para el flujo real del litigio fiscal mexicano, no adaptadas de un sistema genérico."
          clusters={[
            {
              title: "Vigilancia automática",
              text: "El sistema revisa los portales todos los días para que tú no lo hagas.",
              items: [
                "Seguimiento del PJF con notificación de acuerdos nuevos",
                "Monitor diario del DOF con alertas de publicaciones fiscales",
                "Avisos por correo cuando algo requiere tu atención",
              ],
            },
            {
              title: "Plazos con fundamento",
              text: "Cada cálculo cita su base legal y descuenta los inhábiles de la autoridad correcta.",
              items: [
                "Cálculo de plazos SAT y TFJA en segundos",
                "Calendarios de días inhábiles precargados",
                "Panel de vencimientos: hoy, esta semana, este mes",
              ],
            },
            {
              title: "Escritos fiscales con IA",
              text: "Contestas preguntas sobre tu caso; el sistema arma el borrador con la estructura correcta.",
              items: [
                "Recursos de revocación, contestaciones y promociones",
                "Plantillas estructuradas por fiscalistas expertos",
                "Chat del Código Fiscal de la Federación con artículos citados",
              ],
            },
            {
              title: "Expedientes y clientes",
              text: "Del juicio al recurso previo, todo el historial conectado en un solo lugar.",
              items: [
                "Expedientes con seguimientos, documentos y asuntos relacionados",
                "Correos de estatus en lenguaje claro, redactados con IA",
                "Importación de tu cartera actual desde Excel",
              ],
            },
          ]}
        />
      </Section>

      <Section className="border-t border-line">
        <Steps
          title="Del acto impugnado al escrito presentado"
          steps={[
            {
              title: "Registra el asunto",
              text: "Captura el expediente o importa tu cartera desde Excel. Todo queda vinculado al cliente.",
            },
            {
              title: "El sistema vigila",
              text: "PJF, DOF y plazos con inhábiles de SAT y TFJA. Te avisa por correo cuando hay novedad.",
            },
            {
              title: "Genera el borrador",
              text: "Contestas preguntas sobre el caso y la IA arma antecedentes, agravios y petitorios.",
            },
            {
              title: "Revisa y presenta",
              text: "Ajustas el criterio jurídico, descargas el escrito y generas el reporte para tu cliente.",
            },
          ]}
        />
      </Section>

      <Section id="seguridad">
        <SecurityPanel
          title="Información fiscal, tratada como información fiscal"
          text="Los expedientes de tus clientes contienen datos que no pueden andar en cualquier lado. Cada despacho opera en un espacio aislado, cifrado y con respaldos diarios."
          facts={[
            "Aislamiento total por despacho",
            "Cifrado AES-256 en reposo",
            "TLS 1.3 en tránsito",
            "Respaldos automáticos diarios",
            "Infraestructura en AWS",
          ]}
        />
      </Section>

      <Section id="precios" className="border-t border-line">
        <PricingSection
          title="Cuesta menos que una hora de tu tarifa"
          subtitle="Las funciones fiscales (PJF, plazos, DOF, escritos con IA) están incluidas en el plan Team."
        />
      </Section>

      <Section className="border-t border-line">
        <FounderPanel
          kicker="Acceso anticipado"
          title="Hecho por una colega que también contaba días hábiles a mano"
          paragraphs={[
            "La fundadora de Ius-Tech es abogada fiscalista mexicana en ejercicio. La plataforma existe porque las herramientas genéricas de gestión no saben qué es un día inhábil del TFJA ni cómo se estructura un recurso de revocación.",
            "En acceso anticipado trabajas directo con ella: los errores se corrigen rápido y las funciones que pidas se priorizan de verdad.",
          ]}
          benefitsTitle="Beneficios para los primeros fiscalistas:"
          benefits={[
            "30 días de prueba en lugar de 14",
            "Precio congelado de por vida",
            "Línea directa con la fundadora, también fiscalista",
            "Tus sugerencias, al frente del desarrollo",
          ]}
        />
      </Section>

      <Section id="faq" className="border-t border-line">
        <FaqSection title="Preguntas de fiscalistas" items={FISCALISTAS_FAQ} />
      </Section>

      <Section id="contacto" className="border-t border-line">
        <ContactSection
          title="Únete a los primeros fiscalistas"
          subtitle="Cuéntanos de tu práctica y te damos acceso a la beta con acompañamiento directo."
          source="landing-fiscalistas"
          messageLabel="¿Cuántos expedientes fiscales manejas aproximadamente?"
          firmLabel="Nombre del despacho"
        />
      </Section>

      <FinalCta
        title="Recupera 10 horas a la semana"
        subtitle="El seguimiento, los cálculos y los borradores corren por cuenta del sistema. Tú enfócate en ganar casos."
      />

      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { Hero, TrustBar } from "./hero";
import { PlazoExhibit } from "./exhibits";
import { Section } from "./section";
import {
  PracticeRows,
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
import { HOME_FAQ } from "./faq-data";

export default function HomeLanding() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <Nav />

      <Hero
        eyebrow="Acceso anticipado"
        title={
          <>
            Tu despacho en orden.
            <br className="hidden sm:inline" />{" "}
            Tus plazos bajo control.
          </>
        }
        subtitle="Expedientes, plazos, escritos y reportes en una sola plataforma. Tú te quedas con el trabajo que sí requiere criterio."
        exhibit={<PlazoExhibit />}
      />

      <TrustBar
        items={[
          "Hecho en México por una abogada fiscalista",
          "Cifrado AES-256 en infraestructura de AWS",
          "14 días de prueba, sin tarjeta",
        ]}
      />

      <Section>
        <PracticeRows
          title="Una plataforma, tres prácticas"
          subtitle="Funciones generales para cualquier práctica y módulos especializados donde más duele."
          items={[
            {
              title: "Abogados fiscalistas",
              text: "Plazos SAT y TFJA con fundamento, vigilancia del PJF y del DOF, escritos de litigio fiscal con IA.",
              href: "/fiscalistas",
              cta: "Ver funciones fiscales",
            },
            {
              title: "Equipos legales in-house",
              text: "Tareas del equipo, litigios externos y vencimientos de contratos, sin juntas de estatus.",
              href: "/in-house",
              cta: "Ver funciones in-house",
            },
            {
              title: "Despachos y litigantes",
              text: "Expedientes completos, documentos desde tus plantillas y reportes que tus clientes entienden.",
              href: "#funciones",
              cta: "Ver todas las funciones",
            },
          ]}
        />
      </Section>

      <Section className="border-t border-line">
        <PainList
          title="Las horas que nadie te paga"
          subtitle="El trabajo legal que sí cobras empieza cuando termina el trabajo de oficina."
          items={[
            {
              title: "Plazos contados a mano",
              text: "Días hábiles entre los calendarios del SAT y del TFJA. Un error de un día puede costar el caso.",
            },
            {
              title: "Portales que se revisan a diario",
              text: "Entrar al PJF expediente por expediente para ver si hay acuerdos nuevos. Media hora, todos los días.",
            },
            {
              title: "Escritos que empiezan desde cero",
              text: "Buscar uno parecido, copiar, pegar, ajustar nombres y fechas. Y rezar que no se te haya ido nada.",
            },
            {
              title: "Clientes que preguntan cómo va",
              text: "Cada reporte de estatus son 30 minutos de redactar y de traducir jerga procesal a español claro.",
            },
          ]}
        />
      </Section>

      <Section id="funciones" className="border-t border-line">
        <FeatureClusters
          title="Qué hace Ius-Tech por tu práctica"
          subtitle="Captura una vez y todo queda vinculado: cliente, expediente, documentos, plazos y tareas."
          clusters={[
            {
              title: "Expedientes y tareas",
              text: "Deja de buscar información en carpetas, correos y hojas de cálculo.",
              items: [
                "Expedientes con historial y documentos en un solo lugar",
                "Tareas con responsables y recordatorios por correo",
                "Panel de vencimientos: hoy, esta semana, este mes",
                "Importación desde Excel con detección de columnas",
              ],
            },
            {
              title: "Plazos y vigilancia",
              text: "El sistema cuenta los días y revisa los portales para que tú no tengas que hacerlo.",
              items: [
                "Cálculo de plazos SAT y TFJA con fundamento legal",
                "Seguimiento automático de expedientes del PJF",
                "Alertas de publicaciones fiscales en el DOF",
              ],
            },
            {
              title: "Documentos con IA",
              text: "Plantillas estructuradas por abogados. La IA las llena con los datos de tu expediente.",
              items: [
                "Generador de escritos y contratos",
                "Tus propias plantillas, rellenadas automáticamente",
                "Chat del Código Fiscal de la Federación",
              ],
            },
            {
              title: "Clientes y reportes",
              text: "Reportes de estatus en lenguaje claro, listos para enviar.",
              items: [
                "Reportes de estatus con un clic",
                "Correos redactados con IA, tú los apruebas",
                "Clientes y proveedores diferenciados",
              ],
            },
          ]}
        />
      </Section>

      <Section className="border-t border-line">
        <Steps
          title="De cero a productivo en una tarde"
          steps={[
            {
              title: "Importa tu cartera",
              text: "Sube tu Excel de clientes y expedientes. El sistema detecta las columnas automáticamente.",
            },
            {
              title: "Deja que el sistema vigile",
              text: "Calcula plazos, revisa el PJF y el DOF, y manda recordatorios sin que se lo pidas.",
            },
            {
              title: "Decide con todo a la vista",
              text: "Un panel te dice qué vence hoy, qué está pendiente y qué puede esperar.",
            },
            {
              title: "Reporta sin redactar",
              text: "Correos y reportes de estatus en lenguaje claro, generados con IA y aprobados por ti.",
            },
          ]}
        />
      </Section>

      <Section id="seguridad">
        <SecurityPanel
          title="Tu información, aislada y cifrada"
          text="La información de tus clientes es sensible y tratamos cada cuenta como un expediente bajo llave: espacios aislados por despacho, cifrado de nivel bancario y respaldos diarios."
          facts={[
            "Aislamiento total por despacho o empresa",
            "Cifrado AES-256 en reposo",
            "TLS 1.3 en tránsito",
            "Respaldos automáticos diarios",
            "Infraestructura en AWS",
          ]}
        />
      </Section>

      <Section id="precios" className="border-t border-line">
        <PricingSection
          title="Precios sin sorpresas"
          subtitle="Menos de lo que cobras por una hora de tu trabajo. Elige el plan según el tamaño de tu equipo."
        />
      </Section>

      <Section className="border-t border-line">
        <FounderPanel
          kicker="Acceso anticipado"
          title="Construido por una fiscalista, no por una empresa de software que nunca ha litigado"
          paragraphs={[
            "Ius-Tech nació en un despacho real: una abogada fiscalista mexicana cansada de contar días hábiles a mano y de redactar el mismo recurso por décima vez. Cada función existe porque una práctica real la necesitaba.",
            "Por eso los plazos se calculan con su fundamento legal a la vista y los escritos salen con la estructura que un tribunal espera. Estamos en acceso anticipado: los primeros usuarios trabajan directo con la fundadora.",
          ]}
          benefitsTitle="Lo que obtienes como usuario fundador:"
          benefits={[
            "30 días de prueba en lugar de 14",
            "Precio congelado de por vida",
            "Línea directa con la fundadora",
            "Tus sugerencias, al frente del desarrollo",
          ]}
        />
      </Section>

      <Section id="faq" className="border-t border-line">
        <FaqSection title="Preguntas frecuentes" items={HOME_FAQ} />
      </Section>

      <Section id="contacto" className="border-t border-line">
        <ContactSection
          title="¿Quieres verlo antes de decidir?"
          subtitle="Cuéntanos de tu práctica y te contactamos para darte acceso y resolver tus dudas."
          source="landing-general"
          messageLabel="¿Qué tipo de práctica tienes y qué te interesa resolver?"
        />
      </Section>

      <FinalCta
        title="Recupera las horas que se van en lo repetitivo"
        subtitle="Crea tu cuenta hoy y deja los plazos, la vigilancia de portales y los borradores en manos del sistema."
      />

      <Footer />
    </div>
  );
}

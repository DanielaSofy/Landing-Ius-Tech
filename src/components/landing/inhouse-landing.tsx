"use client";

import React from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { Hero, TrustBar } from "./hero";
import { VencimientosExhibit } from "./exhibits";
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
import { INHOUSE_FAQ } from "./faq-data";

export default function InHouseLanding() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <Nav badge="In-house" />

      <Hero
        eyebrow="Para equipos legales in-house"
        title={
          <>
            Tu equipo legal,
            <br className="hidden sm:inline" />{" "}
            sin juntas de estatus.
          </>
        }
        subtitle="Tareas, litigios externos y vencimientos de contratos en un panel que se actualiza solo. Supervisa sin perseguir información."
        exhibit={<VencimientosExhibit />}
      />

      <TrustBar
        items={[
          "Alertas de vencimientos configurables por correo",
          "Litigios externos visibles sin llamar al despacho",
          "14 días de prueba, sin tarjeta",
        ]}
      />

      <Section>
        <PainList
          title="El costo real de no tener un sistema"
          subtitle="El área legal se entera de todo al final. Con Ius-Tech, se entera antes que nadie."
          items={[
            {
              title: "Juntas de estatus los lunes",
              text: "Una hora preguntando en qué va cada quien, para obtener información que un panel mostraría en 10 segundos.",
            },
            {
              title: "Contratos que vencen sin aviso",
              text: "Te enteras de que el contrato clave venció cuando el proveedor ya suspendió el servicio.",
            },
            {
              title: "Llamadas al despacho externo",
              text: "¿Ya contestaron la demanda? ¿Cuándo es la audiencia? Información que deberías tener sin pedirla.",
            },
            {
              title: "Requerimientos del SAT sorpresa",
              text: "Llega el requerimiento y nadie sabe dónde está la documentación ni cuántos días hábiles quedan.",
            },
          ]}
        />
      </Section>

      <Section id="funciones" className="border-t border-line">
        <FeatureClusters
          title="Control del área legal sin micromanagement"
          subtitle="Tu equipo actualiza sus asuntos; el sistema te muestra el panorama y avisa a tiempo."
          clusters={[
            {
              title: "Equipo y tareas",
              text: "Cada asunto tiene responsable, fecha límite y estatus visibles.",
              items: [
                "Panel de carga de trabajo por persona",
                "Tareas con recordatorios automáticos por correo",
                "Vista de qué urge hoy, esta semana y este mes",
              ],
            },
            {
              title: "Contratos y vencimientos",
              text: "Registra una vez y recibe el aviso con la anticipación que tú definas.",
              items: [
                "Control de contratos, poderes y permisos",
                "Alertas configurables: a ti, al responsable o a todo el equipo",
                "Plantillas de documentos corporativos con datos prellenados",
              ],
            },
            {
              title: "Litigios externos",
              text: "El estatus de tus asuntos sin depender de que el despacho conteste el teléfono.",
              items: [
                "Expedientes externos con acontecimientos y plazos",
                "Avisos de audiencias y vencimientos procesales",
                "Historial completo para auditorías internas",
              ],
            },
            {
              title: "Fiscal y reportes",
              text: "Requerimientos bajo control y dirección informada sin trabajo extra.",
              items: [
                "Requerimientos del SAT con plazos en días hábiles",
                "Reportes para dirección con un clic",
                "Clientes internos y proveedores diferenciados",
              ],
            },
          ]}
        />
      </Section>

      <Section className="border-t border-line">
        <Steps
          title="De caos a control en una semana"
          steps={[
            {
              title: "Importa lo que ya tienes",
              text: "Contratos, proveedores y litigios desde Excel. El sistema detecta las columnas.",
            },
            {
              title: "Asigna responsables",
              text: "Tareas con fechas límite y recordatorios automáticos. Nadie tiene que perseguir a nadie.",
            },
            {
              title: "Supervisa desde el panel",
              text: "Qué está pendiente, qué vence esta semana y quién está saturado. Sin preguntar.",
            },
            {
              title: "Reporta a dirección",
              text: "Estatus de litigios, carga del equipo y vencimientos próximos, con un clic.",
            },
          ]}
        />
      </Section>

      <Section id="seguridad">
        <SecurityPanel
          title="Información corporativa bajo estándar corporativo"
          text="Contratos, litigios y datos de proveedores viven en un espacio aislado por empresa, cifrados en tránsito y en reposo, con respaldos diarios."
          facts={[
            "Aislamiento total por empresa",
            "Cifrado AES-256 en reposo",
            "TLS 1.3 en tránsito",
            "Respaldos automáticos diarios",
            "Infraestructura en AWS",
          ]}
        />
      </Section>

      <Section id="precios" className="border-t border-line">
        <PricingSection
          title="Menos de lo que cuesta una junta de estatus"
          subtitle="El plan Team cubre hasta 10 usuarios; Enterprise llega a 30 con onboarding dedicado."
        />
      </Section>

      <Section className="border-t border-line">
        <FounderPanel
          kicker="Acceso anticipado"
          title="Construido por una abogada que conoce ambos lados de la mesa"
          paragraphs={[
            "Ius-Tech lo construyó una abogada fiscalista mexicana que ha trabajado con áreas legales internas y sabe exactamente qué información te piden y cuál nunca llega a tiempo.",
            "En acceso anticipado, tu equipo recibe onboarding personalizado y tus necesidades definen qué se construye después.",
          ]}
          benefitsTitle="Beneficios para los primeros equipos:"
          benefits={[
            "30 días de prueba con todo tu equipo",
            "Precio congelado de por vida",
            "Onboarding personalizado",
            "Tus sugerencias, al frente del desarrollo",
          ]}
        />
      </Section>

      <Section id="faq" className="border-t border-line">
        <FaqSection title="Preguntas de equipos in-house" items={INHOUSE_FAQ} />
      </Section>

      <Section id="contacto" className="border-t border-line">
        <ContactSection
          title="Solicita acceso para tu equipo"
          subtitle="Cuéntanos cómo trabaja tu área legal y te contactamos para configurar la cuenta."
          source="landing-inhouse"
          messageLabel="¿Cuántas personas integran tu equipo legal?"
          firmLabel="Nombre de la empresa"
        />
      </Section>

      <FinalCta
        title="Recupera las horas de juntas de estatus"
        subtitle="Tu equipo actualiza, el sistema reporta y tú supervisas sin interrumpir a nadie."
      />

      <Footer />
    </div>
  );
}

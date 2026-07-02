"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { EASE } from "./motion";

function ExhibitFrame({
  children,
  caption,
  delay = 0.35,
}: {
  children: React.ReactNode;
  caption: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className="w-full max-w-md"
    >
      <div className="rounded-xl border border-line bg-paper-raised p-6 shadow-[0_1px_2px_rgba(22,29,40,0.04),0_12px_32px_-12px_rgba(22,29,40,0.12)] sm:p-7">
        {children}
      </div>
      <figcaption className="mt-3 text-center text-xs text-ink-muted">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

function Row({ label, value, delay }: { label: string; value: React.ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="flex items-baseline justify-between gap-4 py-2.5"
    >
      <dt className="shrink-0 text-xs uppercase tracking-wide text-ink-muted">{label}</dt>
      <dd className="text-right text-sm text-ink">{value}</dd>
    </motion.div>
  );
}

/* Cálculo de plazo: el artefacto central del producto para fiscalistas */
export function PlazoExhibit() {
  const reduce = useReducedMotion();
  return (
    <ExhibitFrame caption="Cálculo generado por Ius-Tech. Ejemplo ilustrativo.">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        Cálculo de plazo
      </p>
      <dl className="mt-3 divide-y divide-line">
        <Row
          delay={0.55}
          label="Acto"
          value={
            <>
              Resolución del SAT
              <span className="tnum block text-xs text-ink-muted">
                notificada el 12 de agosto de 2026
              </span>
            </>
          }
        />
        <Row
          delay={0.65}
          label="Medio de defensa"
          value={
            <>
              Recurso de revocación
              <span className="block text-xs text-ink-muted">Art. 121 del CFF</span>
            </>
          }
        />
        <Row delay={0.75} label="Plazo" value="30 días hábiles" />
      </dl>
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
        className="mt-3 rounded-lg bg-accent-wash px-4 py-3.5"
      >
        <p className="text-xs uppercase tracking-wide text-accent-deep">Vence</p>
        <p className="tnum mt-1 font-serif text-xl font-bold text-ink">
          jueves 24 de septiembre de 2026
        </p>
        <p className="mt-1 text-xs leading-relaxed text-ink-soft">
          Considera sábados, domingos y el 16 de septiembre como inhábiles.
        </p>
      </motion.div>
    </ExhibitFrame>
  );
}

/* Borrador de escrito: comunica la generación de documentos con IA */
export function EscritoExhibit() {
  const reduce = useReducedMotion();
  const sections = [
    "Antecedentes del acto impugnado",
    "Agravios: indebida fundamentación",
    "Pruebas ofrecidas",
    "Puntos petitorios",
  ];
  return (
    <ExhibitFrame caption="Borrador generado con tus datos. Tú revisas y decides. Ejemplo ilustrativo.">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        Borrador de escrito
      </p>
      <p className="mt-3 font-serif text-lg font-bold leading-snug text-ink">
        Recurso de revocación
      </p>
      <p className="tnum text-xs text-ink-muted">
        Expediente 4821/2026 · Administración Desconcentrada Jurídica
      </p>
      <ul className="mt-4 divide-y divide-line">
        {sections.map((s, i) => (
          <motion.li
            key={s}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.12, ease: EASE }}
            className="flex items-center gap-3 py-2.5"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-wash">
              <Check className="h-3 w-3 text-accent-deep" strokeWidth={2.5} />
            </span>
            <span className="text-sm text-ink">{s}</span>
          </motion.li>
        ))}
      </ul>
      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.15, ease: EASE }}
        className="mt-3 rounded-lg bg-paper px-4 py-3 text-xs leading-relaxed text-ink-soft"
      >
        Estructura hecha por fiscalistas. La IA integra los datos de tu
        expediente; el criterio jurídico sigue siendo tuyo.
      </motion.p>
    </ExhibitFrame>
  );
}

/* Vencimientos: el panel que evita las juntas de estatus */
export function VencimientosExhibit() {
  const reduce = useReducedMotion();
  const rows = [
    { asunto: "Requerimiento del SAT", detalle: "Documentación e información", vence: "en 6 días hábiles", urgent: true },
    { asunto: "Contrato de arrendamiento", detalle: "Oficinas corporativas", vence: "vence el 30 de sep", urgent: false },
    { asunto: "Litigio con despacho externo", detalle: "Audiencia programada", vence: "14 de octubre", urgent: false },
  ];
  return (
    <ExhibitFrame caption="Alertas automáticas por correo, sin perseguir a nadie. Ejemplo ilustrativo.">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        Próximos vencimientos
      </p>
      <ul className="mt-3 divide-y divide-line">
        {rows.map((r, i) => (
          <motion.li
            key={r.asunto}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 + i * 0.12, ease: EASE }}
            className="flex items-center justify-between gap-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-ink">{r.asunto}</p>
              <p className="text-xs text-ink-muted">{r.detalle}</p>
            </div>
            <span
              className={`tnum shrink-0 rounded-md px-2 py-1 text-xs font-medium ${
                r.urgent
                  ? "bg-accent-wash text-accent-deep"
                  : "bg-paper text-ink-soft"
              }`}
            >
              {r.vence}
            </span>
          </motion.li>
        ))}
      </ul>
    </ExhibitFrame>
  );
}

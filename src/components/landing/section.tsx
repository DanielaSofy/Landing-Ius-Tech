"use client";

import React from "react";
import { Reveal } from "./motion";

/*
  Encabezado de sección. `kicker` es opcional y se usa con moderación
  (máximo 1 por cada 3 secciones en una página).
*/
export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {kicker}
        </p>
      )}
      <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

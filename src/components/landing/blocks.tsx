"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Lock } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";
import { SectionHeading } from "./section";

/* ============ Directorio de prácticas: filas con hairlines ============ */
export function PracticeRows({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: { title: string; text: string; href: string; cta: string }[];
}) {
  return (
    <>
      <SectionHeading title={title} subtitle={subtitle} />
      <StaggerGroup className="mt-10 border-t border-line">
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <Link
              href={item.href}
              className="group grid gap-2 border-b border-line py-7 transition-colors duration-200 hover:bg-paper-raised sm:grid-cols-[240px_1fr_auto] sm:items-center sm:gap-8 sm:px-2"
            >
              <h3 className="font-serif text-xl font-bold text-ink">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-deep">
                {item.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </>
  );
}

/* ============ Dolores: lista numerada editorial en dos columnas ============ */
export function PainList({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: { title: string; text: string }[];
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <SectionHeading title={title} subtitle={subtitle} />
      <StaggerGroup className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {items.map((item) => (
          <StaggerItem key={item.title} className="border-t border-line-strong pt-4">
            <h3 className="text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.text}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}

/* ============ Funciones agrupadas por capacidad ============ */
export function FeatureClusters({
  kicker,
  title,
  subtitle,
  clusters,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  clusters: { title: string; text: string; items: string[] }[];
}) {
  return (
    <>
      <SectionHeading kicker={kicker} title={title} subtitle={subtitle} />
      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {clusters.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06} className="bg-paper-raised p-7 sm:p-9">
            <h3 className="font-serif text-xl font-bold text-ink">{c.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.text}</p>
            <ul className="mt-5 space-y-2.5">
              {c.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" strokeWidth={2} />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </>
  );
}

/* ============ Cómo funciona: pasos con verbo directo ============ */
export function Steps({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle?: string;
  steps: { title: string; text: string }[];
}) {
  return (
    <>
      <SectionHeading align="center" title={title} subtitle={subtitle} />
      <StaggerGroup className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <StaggerItem key={s.title}>
            <div className="flex items-center gap-3">
              <span className="tnum font-serif text-2xl font-bold text-accent-deep">
                {i + 1}.
              </span>
              <span className="h-px flex-1 bg-line" aria-hidden />
            </div>
            <h3 className="mt-3 text-base font-semibold text-ink">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </>
  );
}

/* ============ Seguridad: panel con ficha técnica ============ */
export function SecurityPanel({
  title,
  text,
  facts,
}: {
  title: string;
  text: string;
  facts: string[];
}) {
  return (
    <Reveal>
      <div className="grid gap-10 overflow-hidden rounded-xl border border-line bg-paper-raised p-7 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            {text}
          </p>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {facts.map((f) => (
            <li key={f} className="flex items-center gap-3 py-3.5 text-[15px] text-ink">
              <Lock className="h-4 w-4 shrink-0 text-accent-deep" strokeWidth={1.5} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/* ============ Fundadora y acceso anticipado: la prueba social ============ */
export function FounderPanel({
  kicker,
  title,
  paragraphs,
  benefitsTitle,
  benefits,
}: {
  kicker?: string;
  title: string;
  paragraphs: string[];
  benefitsTitle: string;
  benefits: string[];
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
      <Reveal>
        {kicker && (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {kicker}
          </p>
        )}
        <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {p}
          </p>
        ))}
      </Reveal>
      <Reveal delay={0.12}>
        <p className="text-sm font-semibold text-ink">{benefitsTitle}</p>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 py-3.5 text-[15px] text-ink">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" strokeWidth={2} />
              {b}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

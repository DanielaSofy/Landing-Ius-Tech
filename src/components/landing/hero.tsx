"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { URLS, CTA_LABEL } from "./data";
import { EASE } from "./motion";

/*
  Hero asimétrico: mensaje a la izquierda, artefacto del producto a la derecha.
  Entrada coordinada: eyebrow → titular → subtítulo → CTAs → exhibit.
*/
export function Hero({
  eyebrow,
  title,
  subtitle,
  exhibit,
  secondaryHref = "#funciones",
  secondaryLabel = "Ver cómo funciona",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  exhibit: React.ReactNode;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <div className="relative overflow-hidden">
      {/* Trama de fondo: retícula tenue de documento, estática */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 95%, rgba(22,29,40,0.035) 95%)",
          backgroundSize: "100% 2.75rem",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-16 sm:px-6 sm:pt-20 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.p
            {...enter(0)}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-accent"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            {...enter(0.08)}
            className="mt-4 font-serif text-4xl leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            {title}
          </motion.h1>
          <motion.p
            {...enter(0.16)}
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {subtitle}
          </motion.p>
          <motion.div {...enter(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={URLS.register}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-base font-medium text-paper transition-[background-color,transform] duration-200 hover:bg-ink-strong active:scale-[0.97]"
            >
              {CTA_LABEL}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
            </a>
            <a
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-lg border border-line-strong bg-paper-raised px-6 py-3.5 text-base font-medium text-ink transition-[border-color,background-color,transform] duration-200 hover:border-ink-muted active:scale-[0.97]"
            >
              {secondaryLabel}
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">{exhibit}</div>
      </div>
    </div>
  );
}

/* Franja de datos duros bajo el hero: la prueba social sin testimonios */
export function TrustBar({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
      className="border-y border-line bg-paper-raised"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-4 py-4 sm:px-6">
        {items.map((item) => (
          <span key={item} className="text-sm text-ink-soft">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

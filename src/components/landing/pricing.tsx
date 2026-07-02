"use client";

import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { PLANS, type Plan } from "./data";
import { EASE, Reveal, StaggerGroup, StaggerItem } from "./motion";
import { SectionHeading } from "./section";

function PriceValue({ value, isAnnual }: { value: number; isAnnual: boolean }) {
  const reduce = useReducedMotion();
  return (
    <span className="relative inline-flex h-12 items-baseline overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={isAnnual ? "a" : "m"}
          initial={reduce ? false : { y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: -14, opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="tnum font-serif text-4xl font-bold text-ink"
        >
          ${value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function PlanCard({ plan, isAnnual }: { plan: Plan; isAnnual: boolean }) {
  return (
    <StaggerItem
      className={`relative flex flex-col rounded-xl border bg-paper-raised p-6 sm:p-7 ${
        plan.popular ? "border-ink shadow-[0_16px_40px_-16px_rgba(22,29,40,0.18)]" : "border-line"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-6 rounded-md bg-ink px-2.5 py-1 text-xs font-medium text-paper">
          Recomendado
        </span>
      )}
      <h3 className="font-serif text-xl font-bold text-ink">{plan.name}</h3>
      <p className="mt-1 text-sm text-ink-muted">{plan.audience}</p>
      <div className="mt-5 flex items-baseline gap-2">
        <PriceValue value={isAnnual ? plan.priceAnnual : plan.priceMonthly} isAnnual={isAnnual} />
        <span className="text-sm text-ink-muted">USD / mes</span>
      </div>
      <p className="tnum h-5 text-sm text-ink-muted">
        {isAnnual ? `$${plan.priceYearTotal} USD facturados al año` : "facturación mensual"}
      </p>
      {plan.note && (
        <p className="mt-2 text-sm font-medium text-accent-deep">{plan.note}</p>
      )}
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" strokeWidth={2} />
            {f}
          </li>
        ))}
      </ul>
      <a
        href={isAnnual ? plan.links.annual : plan.links.monthly}
        className={`mt-7 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-[background-color,border-color,transform] duration-200 active:scale-[0.97] ${
          plan.popular
            ? "bg-ink text-paper hover:bg-ink-strong"
            : "border border-line-strong text-ink hover:border-ink-muted"
        }`}
      >
        Comenzar prueba gratis
      </a>
    </StaggerItem>
  );
}

export function PricingSection({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const [isAnnual, setIsAnnual] = React.useState(true);
  const reduce = useReducedMotion();

  return (
    <>
      <SectionHeading align="center" title={title} subtitle={subtitle} />

      <Reveal delay={0.1} className="mt-8 flex items-center justify-center gap-3">
        <span className={`text-sm font-medium transition-colors duration-200 ${!isAnnual ? "text-ink" : "text-ink-muted"}`}>
          Mensual
        </span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          role="switch"
          aria-checked={isAnnual}
          aria-label="Cambiar entre facturación mensual y anual"
          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 ${
            isAnnual ? "bg-ink" : "bg-line-strong"
          }`}
        >
          <motion.span
            layout
            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 34 }}
            className={`inline-block h-5 w-5 rounded-full bg-paper-raised shadow ${
              isAnnual ? "ml-6" : "ml-1"
            }`}
          />
        </button>
        <span className={`text-sm font-medium transition-colors duration-200 ${isAnnual ? "text-ink" : "text-ink-muted"}`}>
          Anual
        </span>
        <span className="rounded-md bg-accent-wash px-2 py-0.5 text-xs font-semibold text-accent-deep">
          Ahorra 20%
        </span>
      </Reveal>

      <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3" amount={0.15}>
        {PLANS.map((p) => (
          <PlanCard key={p.name} plan={p} isAnnual={isAnnual} />
        ))}
      </StaggerGroup>

      <Reveal delay={0.05} className="mt-8 text-center">
        <p className="text-sm text-ink-soft">
          Todos los planes incluyen 14 días de prueba. Sin tarjeta, cancelas
          cuando quieras.
        </p>
      </Reveal>
    </>
  );
}

"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { URLS, CTA_LABEL } from "./data";
import { Reveal } from "./motion";

/* Cierre en tinta: invierte el esquema para el último empujón */
export function FinalCta({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight tracking-tight text-paper sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-9">
            <a
              href={URLS.register}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-paper px-7 py-4 text-base font-medium text-ink transition-[background-color,transform] duration-200 hover:bg-white active:scale-[0.97]"
            >
              {CTA_LABEL}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
            </a>
          </div>
          <p className="mt-4 text-sm text-paper/50">
            14 días de prueba. Sin tarjeta, cancelas cuando quieras.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

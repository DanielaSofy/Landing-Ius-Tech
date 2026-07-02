"use client";

import React from "react";
import { URLS } from "./data";
import { Reveal } from "./motion";
import { SectionHeading } from "./section";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line-strong bg-paper-raised px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export function ContactSection({
  title,
  subtitle,
  source,
  messageLabel,
  firmLabel = "Despacho o empresa",
}: {
  title: string;
  subtitle: string;
  source: string;
  messageLabel: string;
  firmLabel?: string;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <SectionHeading title={title} subtitle={subtitle} />
        <Reveal delay={0.15} className="mt-8">
          <p className="text-sm text-ink-soft">
            ¿Prefieres hablar antes de escribir?
          </p>
          <a
            href={URLS.typeform}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm font-medium text-accent-deep underline decoration-accent/40 underline-offset-4 transition-colors duration-200 hover:decoration-accent"
          >
            Agenda una llamada de 15 minutos con la fundadora
          </a>
          <p className="mt-6 text-sm text-ink-soft">
            O escríbenos directo:{" "}
            <a href={`mailto:${URLS.email}`} className="font-medium text-ink hover:underline">
              {URLS.email}
            </a>
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <form
          action={URLS.formspree}
          method="POST"
          className="rounded-xl border border-line bg-paper-raised p-6 sm:p-8"
        >
          <input type="hidden" name="source" value={source} />
          <div className="grid gap-5">
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium text-ink">
                Nombre completo
              </label>
              <input id="contact-name" name="name" required autoComplete="name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm font-medium text-ink">
                Correo electrónico
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-firm" className="text-sm font-medium text-ink">
                {firmLabel} <span className="font-normal text-ink-muted">(opcional)</span>
              </label>
              <input id="contact-firm" name="firm" autoComplete="organization" className={inputClass} />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-sm font-medium text-ink">
                {messageLabel}
              </label>
              <textarea id="contact-message" name="message" rows={3} className={inputClass} />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-ink px-6 py-3.5 text-base font-medium text-paper transition-[background-color,transform] duration-200 hover:bg-ink-strong active:scale-[0.97]"
          >
            Enviar solicitud
          </button>
          <p className="mt-3 text-center text-xs text-ink-muted">
            Te respondemos en menos de un día hábil.
          </p>
        </form>
      </Reveal>
    </div>
  );
}

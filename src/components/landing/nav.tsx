"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { URLS, CTA_LABEL } from "./data";
import { EASE } from "./motion";

const NAV_LINKS = [
  { href: "#funciones", label: "Funciones" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export function Nav({ badge }: { badge?: string }) {
  const [open, setOpen] = React.useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink">
            <Image src="/logo-white.png" alt="" width={20} height={20} />
          </span>
          <span className="font-serif text-lg font-bold tracking-tight text-ink">
            Ius-Tech
          </span>
          {badge && (
            <span className="hidden rounded-md border border-line bg-paper-raised px-2 py-0.5 text-xs font-medium text-ink-soft sm:inline-block">
              {badge}
            </span>
          )}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={URLS.login}
            className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
          >
            Iniciar sesión
          </a>
          <a
            href={URLS.register}
            className="group inline-flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-paper transition-[background-color,transform] duration-200 hover:bg-ink-strong active:scale-[0.97]"
          >
            {CTA_LABEL}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
          </a>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="rounded-lg px-2 py-2.5 text-[15px] text-ink-soft hover:bg-paper-raised hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={URLS.login}
                className="rounded-lg px-2 py-2.5 text-[15px] text-ink-soft hover:bg-paper-raised hover:text-ink"
              >
                Iniciar sesión
              </a>
              <a
                href={URLS.register}
                className="mt-2 mb-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-ink px-4 py-3 text-sm font-medium text-paper active:scale-[0.98]"
              >
                {CTA_LABEL}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

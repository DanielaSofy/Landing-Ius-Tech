"use client";

import Image from "next/image";
import Link from "next/link";
import { URLS } from "./data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/logo-white.png" alt="Ius-Tech" width={28} height={28} />
              <span className="font-serif text-lg font-bold">Ius-Tech</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Software de gestión legal para abogados en México. Expedientes,
              plazos, escritos y reportes en una sola plataforma.
            </p>
            <p className="mt-4 text-sm text-paper/60">
              <a href={`mailto:${URLS.email}`} className="hover:text-paper">
                {URLS.email}
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-paper/40">
              Producto
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
              <li><a href="#funciones" className="hover:text-paper">Funciones</a></li>
              <li><a href="#seguridad" className="hover:text-paper">Seguridad</a></li>
              <li><a href="#precios" className="hover:text-paper">Precios</a></li>
              <li><a href="#faq" className="hover:text-paper">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-paper/40">
              Soluciones
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
              <li><Link href="/" className="hover:text-paper">Para despachos</Link></li>
              <li><Link href="/fiscalistas" className="hover:text-paper">Para fiscalistas</Link></li>
              <li><Link href="/in-house" className="hover:text-paper">Para equipos in-house</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-paper/40">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
              <li><a href={URLS.legal.terms} className="hover:text-paper">Términos y condiciones</a></li>
              <li><a href={URLS.legal.privacy} className="hover:text-paper">Aviso de privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-paper/10 pt-6 text-sm text-paper/50 sm:flex-row sm:items-center">
          <p>© {year} Ius-Tech. Todos los derechos reservados.</p>
          <p>Hecho en México</p>
        </div>
      </div>
    </footer>
  );
}

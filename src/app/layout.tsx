import type { Metadata } from "next";
import "./globals.css";

// (Opcional) Si usas @next/font de plantilla, deja los imports de la fuente como estaban.

export const metadata: Metadata = {
  title: "Ius-Tech • IA",
  description: "Automatiza documentos, controla plazos y resguarda expedientes.",
  openGraph: {
    title: "Ius-Tech • IA",
    description: "La plataforma legal todo-en-uno impulsada por IA",
    url: "https://tu-dominio.com",          // cámbialo cuando tengas dominio
    siteName: "Ius-Tech • IA",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

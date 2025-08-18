import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ius-Tech • IA",
  description: "Automatiza documentos, controla plazos y resguarda expedientes.",
  openGraph: {
    title: "Ius-Tech • IA",
    description: "La plataforma legal todo-en-uno impulsada por IA",
    url: "https://tu-dominio.com", // cámbialo cuando tengas dominio
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
    <html lang="es">
      <head>
        {/* 👇 Esto hace que la página sea responsive en celulares */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}


import type { Metadata, Viewport } from "next";
import { Geist, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const caslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-caslon",
  display: "swap",
});

const SITE_URL = "https://ius-tech.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ius-Tech: software de gestión legal para abogados en México",
    template: "%s | Ius-Tech",
  },
  description:
    "Plataforma de gestión legal para abogados en México: expedientes, cálculo de plazos SAT y TFJA, seguimiento del PJF, generación de escritos con IA y reportes para clientes.",
  keywords: [
    "software legal México",
    "gestión de expedientes",
    "cálculo de plazos SAT",
    "litigio fiscal",
    "software para abogados fiscalistas",
    "legaltech México",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Ius-Tech",
    title: "Ius-Tech: software de gestión legal para abogados en México",
    description:
      "Expedientes, plazos SAT/TFJA, vigilancia del PJF y escritos con IA en una sola plataforma. Hecho en México por una abogada fiscalista.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ius-Tech: software de gestión legal para abogados en México",
    description:
      "Expedientes, plazos SAT/TFJA, vigilancia del PJF y escritos con IA en una sola plataforma.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7f4",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ius-Tech",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-white.png`,
  description:
    "Empresa mexicana de tecnología legal. Desarrolla software de gestión para abogados: expedientes, plazos fiscales, generación de documentos con IA y reportes para clientes.",
  email: "contacto@ius-tech.com.mx",
  foundingLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressCountry: "MX" },
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contacto@ius-tech.com.mx",
    contactType: "sales",
    availableLanguage: ["es"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${geist.variable} ${caslon.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

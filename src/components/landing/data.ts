export const URLS = {
  register: "https://ius-tech.com.mx/register",
  login: "https://ius-tech.com.mx/login",
  plans: {
    individual: {
      monthly: "https://ius-tech.com.mx/register?plan=individual&billing=monthly",
      annual: "https://ius-tech.com.mx/register?plan=individual&billing=annual",
    },
    team: {
      monthly: "https://ius-tech.com.mx/register?plan=team&billing=monthly",
      annual: "https://ius-tech.com.mx/register?plan=team&billing=annual",
    },
    enterprise: {
      monthly: "https://ius-tech.com.mx/register?plan=enterprise&billing=monthly",
      annual: "https://ius-tech.com.mx/register?plan=enterprise&billing=annual",
    },
  },
  legal: {
    terms: "https://ius-tech.com.mx/terminos",
    privacy: "https://ius-tech.com.mx/privacidad",
  },
  typeform: "https://f3949l9nprt.typeform.com/to/QZCzL5hA",
  formspree: "https://formspree.io/f/xkgzaojb",
  email: "contacto@ius-tech.com.mx",
} as const;

export const CTA_LABEL = "Comenzar prueba gratis";

export type Plan = {
  name: string;
  audience: string;
  priceMonthly: number;
  priceAnnual: number;
  priceYearTotal: number;
  features: string[];
  links: { monthly: string; annual: string };
  popular?: boolean;
  note?: string;
};

export const PLANS: Plan[] = [
  {
    name: "Individual",
    audience: "Para práctica independiente",
    priceMonthly: 25,
    priceAnnual: 20,
    priceYearTotal: 240,
    features: [
      "1 usuario",
      "Clientes y expedientes ilimitados",
      "Tareas, plazos y recordatorios",
      "Panel de vencimientos",
      "Importación desde Excel",
      "Soporte por correo",
    ],
    links: URLS.plans.individual,
  },
  {
    name: "Team",
    audience: "Hasta 10 usuarios",
    priceMonthly: 180,
    priceAnnual: 144,
    priceYearTotal: 1728,
    features: [
      "Todo lo del plan Individual",
      "Seguimiento automático del PJF",
      "Cálculo de plazos SAT y TFJA",
      "Monitor del Diario Oficial",
      "Escritos y reportes con IA",
      "Chat del Código Fiscal con IA",
      "Soporte prioritario",
    ],
    links: URLS.plans.team,
    popular: true,
    note: "Incluye todas las funciones fiscales",
  },
  {
    name: "Enterprise",
    audience: "Hasta 30 usuarios",
    priceMonthly: 450,
    priceAnnual: 360,
    priceYearTotal: 4320,
    features: [
      "Todo lo del plan Team",
      "Plantillas personalizadas",
      "Onboarding dedicado",
      "Soporte telefónico",
    ],
    links: URLS.plans.enterprise,
  },
];

export type FaqItem = { q: string; a: string };

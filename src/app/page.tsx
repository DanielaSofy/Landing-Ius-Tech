"use client";

import React from "react";
import ThreeBackgroundClient from "@/components/ThreeBackgroundClient";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, CheckCircle2, FileText, Gavel, CalendarDays, Lock, Bot,
  BarChart3, Clock, Folder, Sparkles, Globe2, Send, Menu, X
} from "lucide-react";

/* =========================
   i18n (ES/EN)
========================= */

type Lang = "es" | "en";

const I18nContext = React.createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "es",
  setLang: () => {},
});

const copy = {
  es: {
    brand: "Ius-Tech • IA",
    nav: { features: "Funciones", security: "Seguridad", pricing: "Precios", faq: "FAQ", contact: "Contacto", demo: "Probar demo" },
    hero: {
      title: "La plataforma legal todo-en-uno impulsada por IA",
      subtitle:
        "Automatiza documentos, controla plazos y resguarda expedientes con seguridad multitenant. Para abogados que piensan out of the box.",
      cta1: "Probar demo gratis",
      cta2: "Ver planes",
      bullets: ["Sin tarjetas ni instalación", "En la nube (AWS)", "Encriptación en tránsito y en reposo"],
    },
    features: {
      kicker: "FUNCIONALIDADES",
      title: "Todo lo que necesitas para operar tu despacho con precisión",
      subtitle: "Moderno, seguro y diseñado para flujos jurídicos reales",
    },
    how: {
      kicker: "CÓMO FUNCIONA",
      title: "De cero a escrito en minutos",
      steps: ["Carga tus asuntos", "Automatiza con IA", "Organiza y colabora", "Enfócate en la estrategia"],
      stepText: [
        "Importa clientes y expedientes; centraliza tu operación.",
        "Genera documentos y calcula plazos con contexto legal.",
        "Versiona, busca y comparte de forma segura.",
        "La plataforma se encarga de lo operativo.",
      ],
    },
    security: {
      kicker: "Seguridad",
      title: "Privacidad a nivel empresarial",
      p: "Arquitectura multitenant: cada usuario accede únicamente a su propia información. Encriptación en tránsito (TLS) y en reposo.",
      bullets: ["Roles y permisos por equipo", "Backups automáticos", "Registro de actividad (audit trail)"],
    },
    pricing: {
      kicker: "PRECIOS",
      title: "Planes sencillos para crecer contigo",
      subtitle: "Comienza gratis y escala cuando lo necesites",
      starter: "Probar gratis",
      pro: "Elegir Pro",
      ent: "Hablar con ventas",
      popular: "Más popular",
      periodTrial: "/14 días",
      periodMonth: "/mes",
    },
    testimonials: { kicker: "TESTIMONIOS", title: "Historias reales de equipos legales" },
    faq: {
      kicker: "PREGUNTAS FRECUENTES",
      title: "Todo lo que te gustaría saber",
      items: [
        { q: "¿Cómo funciona la prueba gratuita?", a: "Accedes a todas las funciones del plan Starter durante 14 días, sin tarjeta. Puedes cancelar en cualquier momento." },
        { q: "¿Dónde se aloja la plataforma?", a: "En AWS. Servimos contenido estático con CloudFront y ciframos datos en reposo; el tránsito usa TLS." },
        { q: "¿Puedo migrar mis expedientes actuales?", a: "Sí. Hay importadores para clientes, asuntos y documentos. Te guiamos en el onboarding." },
        { q: "¿Cumplen con privacidad y acceso por roles?", a: "Sí. Separación por tenant, roles y permisos, y bitácora de auditoría." },
      ],
    },
    contact: {
      kicker: "CONTACTO",
      title: "Agendemos una demo o escríbenos",
      subtitle: "Déjanos tus datos y te contactamos en menos de 24 horas.",
      name: "Nombre",
      email: "Email",
      firm: "Despacho/Empresa",
      message: "Mensaje",
      send: "Enviar",
      or: "o",
      typeform: "Agendar demo (Typeform)",
    },
    cta: { title: "Transforma tu práctica legal", p: "Sé parte de la nueva era Ius-Tech. Empieza hoy.", demo: "Agenda una demo", start: "Empieza ahora" },
    footer: { links: ["Funciones", "Seguridad", "Precios", "FAQ"], copyright: (y: number) => `© ${y} Ius-Tech • IA` },
  },
  en: {
    brand: "Ius-Tech • AI",
    nav: { features: "Features", security: "Security", pricing: "Pricing", faq: "FAQ", contact: "Contact", demo: "Try demo" },
    hero: {
      title: "The all-in-one legal platform powered by AI",
      subtitle:
        "Automate documents, track deadlines, and secure case files with multitenant security. For lawyers who think out of the box.",
      cta1: "Start free demo",
      cta2: "See plans",
      bullets: ["No credit card required", "Cloud-hosted (AWS)", "Encryption in transit and at rest"],
    },
    features: {
      kicker: "FEATURES",
      title: "Everything you need to run your practice precisely",
      subtitle: "Modern, secure, and built for real legal workflows",
    },
    how: {
      kicker: "HOW IT WORKS",
      title: "From zero to draft in minutes",
      steps: ["Import your matters", "Automate with AI", "Organize & collaborate", "Focus on strategy"],
      stepText: [
        "Import clients and files; centralize your ops.",
        "Generate documents and compute deadlines with legal context.",
        "Version, search and share securely.",
        "We handle operations so you focus on strategy.",
      ],
    },
    security: {
      kicker: "Security",
      title: "Enterprise-grade privacy",
      p: "Multitenant architecture: each user only accesses their own data. Encryption in transit (TLS) and at rest.",
      bullets: ["Team roles & permissions", "Automated backups", "Audit trail"],
    },
    pricing: {
      kicker: "PRICING",
      title: "Simple plans to grow with you",
      subtitle: "Start free and scale when needed",
      starter: "Start free",
      pro: "Choose Pro",
      ent: "Talk to Sales",
      popular: "Most popular",
      periodTrial: "/14 days",
      periodMonth: "/month",
    },
    testimonials: { kicker: "TESTIMONIALS", title: "Real stories from legal teams" },
    faq: {
      kicker: "FREQUENTLY ASKED QUESTIONS",
      title: "Everything you want to know",
      items: [
        { q: "How does the free trial work?", a: "You get Starter features for 14 days, no credit card required. Cancel anytime." },
        { q: "Where is the platform hosted?", a: "On AWS. We serve static via CloudFront and encrypt data at rest; transit uses TLS." },
        { q: "Can I migrate my current files?", a: "Yes. We provide importers for clients, matters and documents. Our team guides the onboarding." },
        { q: "Do you support privacy and role-based access?", a: "Yes. Multitenant separation by tenant, roles & permissions, and audit trail." },
      ],
    },
    contact: {
      kicker: "CONTACT",
      title: "Book a demo or write to us",
      subtitle: "Leave your details and we'll reach out within 24 hours.",
      name: "Name",
      email: "Email",
      firm: "Law firm/Company",
      message: "Message",
      send: "Send",
      or: "or",
      typeform: "Book demo (Typeform)",
    },
    cta: { title: "Transform your legal practice", p: "Join the new era of Ius-Tech. Start today.", demo: "Book a demo", start: "Start now" },
    footer: { links: ["Features", "Security", "Pricing", "FAQ"], copyright: (y: number) => `© ${y} Ius-Tech • AI` },
  },
} as const;

const featuresData = (lang: Lang) =>
  lang === "es"
    ? [
        { icon: <FileText className="w-6 h-6" aria-hidden />, title: "Automatización documental", text: "Genera escritos en minutos a partir de entrevistas guiadas y plantillas personalizadas." },
        { icon: <Gavel className="w-6 h-6" aria-hidden />, title: "Gestión de casos", text: "Control de Poder Judicial, Tribunales Administrativos y Autoridades Administrativas, organizado por cliente." },
        { icon: <Folder className="w-6 h-6" aria-hidden />, title: "Expedientes electrónicos", text: "Cada documento queda vinculado al cliente y accesible cuando lo necesites." },
        { icon: <CalendarDays className="w-6 h-6" aria-hidden />, title: "Cálculo de plazos (SAT / TFJA)", text: "Calendario interactivo con días inhábiles, vencimientos y fundamentos legales." },
        { icon: <Bot className="w-6 h-6" aria-hidden />, title: "Asistente legal con IA", text: "Resuelve dudas rápidas o prepara borradores de escritos al instante." },
        { icon: <BarChart3 className="w-6 h-6" aria-hidden />, title: "Reportes en PDF", text: "Genera informes profesionales con un clic, listos para presentar o compartir." },
        { icon: <Clock className="w-6 h-6" aria-hidden />, title: "Automatización de tareas", text: "Recordatorios clave para que ningún plazo se pase por alto." },
        { icon: <Lock className="w-6 h-6" aria-hidden />, title: "Seguridad multitenant", text: "Cada usuario accede únicamente a su propia información. Privacidad a nivel empresarial." },
      ]
    : [
        { icon: <FileText className="w-6 h-6" aria-hidden />, title: "Document automation", text: "Generate filings in minutes from guided interviews and custom templates." },
        { icon: <Gavel className="w-6 h-6" aria-hidden />, title: "Case management", text: "Track courts & authorities with client-organized timelines." },
        { icon: <Folder className="w-6 h-6" aria-hidden />, title: "Electronic case files", text: "Every document linked to its client and instantly accessible." },
        { icon: <CalendarDays className="w-6 h-6" aria-hidden />, title: "Deadlines (SAT / TFJA)", text: "Interactive calendar with holidays, due dates and legal basis." },
        { icon: <Bot className="w-6 h-6" aria-hidden />, title: "AI legal assistant", text: "Instant answers or first-draft filings." },
        { icon: <BarChart3 className="w-6 h-6" aria-hidden />, title: "PDF reports", text: "One-click professional reports ready to share or file." },
        { icon: <Clock className="w-6 h-6" aria-hidden />, title: "Task automation", text: "Key reminders so nothing slips." },
        { icon: <Lock className="w-6 h-6" aria-hidden />, title: "Multitenant security", text: "Each user can only access their own data. Enterprise privacy." },
      ];

const stepsData = (lang: Lang) =>
  lang === "es"
    ? [
        { title: copy.es.how.steps[0], text: copy.es.how.stepText[0] },
        { title: copy.es.how.steps[1], text: copy.es.how.stepText[1] },
        { title: copy.es.how.steps[2], text: copy.es.how.stepText[2] },
        { title: copy.es.how.steps[3], text: copy.es.how.stepText[3] },
      ]
    : [
        { title: copy.en.how.steps[0], text: copy.en.how.stepText[0] },
        { title: copy.en.how.steps[1], text: copy.en.how.stepText[1] },
        { title: copy.en.how.steps[2], text: copy.en.how.stepText[2] },
        { title: copy.en.how.steps[3], text: copy.en.how.stepText[3] },
      ];

/* =========================
   UI helpers
========================= */

function GradientOrb() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl sm:h-[32rem] sm:w-[32rem]"
        style={{ background: "radial-gradient(closest-side, #6EE7F9 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -right-32 h-[26rem] w-[26rem] rounded-full blur-3xl sm:h-[30rem] sm:w-[30rem]"
        style={{ background: "radial-gradient(closest-side, #A78BFA 0%, transparent 70%)" }}
      />
    </motion.div>
  );
}

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-400">{kicker}</p>
      <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
    </div>
  );
}

function LanguageToggle() {
  const { lang, setLang } = React.useContext(I18nContext);
  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="inline-flex items-center gap-1 rounded-xl border border-slate-700 px-2 py-1 text-xs text-slate-300 hover:border-slate-500"
      aria-label="Language toggle"
    >
      <Globe2 className="h-3.5 w-3.5" /> {lang === "es" ? "EN" : "ES"}
    </button>
  );
}

/* =========================
   Navbar (responsive)
========================= */

function Navbar() {
  const { lang } = React.useContext(I18nContext);
  const c = copy[lang];
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-40 border-b border-slate-800/40 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-300" aria-hidden />
          <span className="text-sm sm:text-base font-medium text-slate-300">{c.brand}</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#features" className="text-sm text-slate-300 hover:text-white">{c.nav.features}</a>
          <a href="#security" className="text-sm text-slate-300 hover:text-white">{c.nav.security}</a>
          <a href="#pricing" className="text-sm text-slate-300 hover:text-white">{c.nav.pricing}</a>
          <a href="#faq" className="text-sm text-slate-300 hover:text-white">{c.nav.faq}</a>
          <a href="#contact" className="text-sm text-slate-300 hover:text-white">{c.nav.contact}</a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-200 hover:bg-cyan-400/20"
          >
            {c.nav.demo}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <LanguageToggle />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-800/40">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#features" className="text-slate-200">• {c.nav.features}</a>
            <a onClick={() => setOpen(false)} href="#security" className="text-slate-200">• {c.nav.security}</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="text-slate-200">• {c.nav.pricing}</a>
            <a onClick={() => setOpen(false)} href="#faq" className="text-slate-200">• {c.nav.faq}</a>
            <a onClick={() => setOpen(false)} href="#contact" className="text-slate-200">• {c.nav.contact}</a>
            <div className="flex items-center gap-3 pt-2">
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-200"
              >
                {c.nav.demo} <ArrowRight className="h-4 w-4" />
              </a>
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


/* =========================
   Secciones
========================= */

function Hero() {
  const { lang } = React.useContext(I18nContext);
  const c = copy[lang];
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <header className="relative isolate overflow-hidden">
      <GradientOrb />
      <motion.div style={{ y }} className="mx-auto max-w-7xl px-4 pt-16 sm:pt-20 pb-14 sm:pb-20">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-semibold tracking-tight text-white"
            >
              {c.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-slate-300"
            >
              {c.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact" className="rounded-2xl bg-cyan-400/90 px-5 py-3 text-center text-slate-900 transition hover:bg-cyan-300">
                {c.hero.cta1}
              </a>
              <a
                href="#pricing"
                className="rounded-2xl border border-slate-700 px-5 py-3 text-center text-slate-200 hover:border-slate-500"
              >
                {c.hero.cta2}
              </a>
            </motion.div>
            <div className="mt-5 sm:mt-6 flex flex-col gap-2 text-sm text-slate-400">
              {c.hero.bullets.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" /> {b}
                </div>
              ))}
            </div>
          </div>

          {/* Mosaico de features */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/60 p-3 sm:p-4 shadow-2xl">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 sm:p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {featuresData(lang).slice(0, 6).map((f, i) => (
                    <motion.div key={i} whileHover={{ y: -3 }} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                      <div className="text-cyan-300">{f.icon}</div>
                      <div className="mt-2 text-sm font-medium text-white">{f.title}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 h-16 w-16 sm:h-24 sm:w-24 -translate-x-1/2 rounded-full border border-cyan-400/30 bg-cyan-400/10 blur-xl" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}

function Features() {
  const { lang } = React.useContext(I18nContext);
  const c = copy[lang];
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={c.features.kicker} title={c.features.title} subtitle={c.features.subtitle} />
      <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuresData(lang).map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.03 }}
            className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow hover:border-slate-700"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-700 p-2 text-cyan-300 group-hover:border-slate-600">{f.icon}</div>
              <h3 className="text-base font-semibold text-white">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const { lang } = React.useContext(I18nContext);
  const c = copy[lang];
  const steps = stepsData(lang);
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={c.how.kicker} title={c.how.title} />
      <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05 }}
            className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
          >
            <div className="absolute -top-3 left-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
              {lang === "es" ? "Paso" : "Step"} {i + 1}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-slate-300">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Security() {
  const { lang } = React.useContext(I18nContext);
  const c = copy[lang];
  return (
    <section id="security" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900 p-6 sm:p-8">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full blur-3xl sm:h-72 sm:w-72"
          style={{ background: "radial-gradient(closest-side, #22d3ee33 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -left-24 -bottom-24 h-60 w-60 rounded-full blur-3xl sm:h-72 sm:w-72"
          style={{ background: "radial-gradient(closest-side, #a78bfa33 0%, transparent 70%)" }}
        />
        <div className="relative grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-cyan-300">{c.security.kicker}</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">{c.security.title}</h3>
            <p className="mt-4 text-slate-300">{c.security.p}</p>
            <ul className="mt-6 space-y-2 text-slate-300">
              {c.security.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-cyan-300" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-xl border border-slate-700 p-2 text-cyan-300">
                <CalendarDays className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-white">{lang === "es" ? "Plazos procesales automáticos" : "Automated legal deadlines"}</h4>
                <p className="mt-1 text-sm text-slate-300">
                  {lang === "es" ? "SAT / TFJA con días inhábiles y fundamento legal aplicable." : "SAT / TFJA with holidays and legal basis."}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="rounded-xl border border-slate-700 p-2 text-cyan-300">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-white">{lang === "es" ? "Asistente legal con IA" : "AI legal assistant"}</h4>
                <p className="mt-1 text-sm text-slate-300">
                  {lang === "es" ? "Borradores de escritos y respuestas inmediatas en contexto." : "Context-aware answers and first drafts."}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="rounded-xl border border-slate-700 p-2 text-cyan-300">
                <Folder className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-white">{lang === "es" ? "Expediente electrónico" : "Electronic case file"}</h4>
                <p className="mt-1 text-sm text-slate-300">
                  {lang === "es" ? "Todo tu caso, organizado y consultable al instante." : "Your whole case, organized and searchable."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { lang } = React.useContext(I18nContext);
  const c = copy[lang].pricing;
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: c.periodTrial,
      features: [lang === "es" ? "1 usuario" : "1 user", lang === "es" ? "Automatización documental" : "Document automation", lang === "es" ? "Cálculo de plazos (básico)" : "Deadlines (basic)", lang === "es" ? "Soporte por email" : "Email support"],
      cta: c.starter,
    },
    {
      name: "Pro",
      price: "$49",
      period: c.periodMonth,
      features: [lang === "es" ? "Hasta 5 usuarios" : "Up to 5 users", lang === "es" ? "IA asistente legal" : "AI legal assistant", lang === "es" ? "Expediente electrónico" : "Electronic case file", lang === "es" ? "Reportes PDF ilimitados" : "Unlimited PDF reports", lang === "es" ? "Recordatorios automáticos" : "Automated reminders"],
      cta: c.pro,
      popular: true,
    },
    {
      name: "Enterprise",
      price: lang === "es" ? "A medida" : "Custom",
      period: "",
      features: [lang === "es" ? "Usuarios ilimitados" : "Unlimited users", lang === "es" ? "Roles/Permisos avanzados" : "Advanced roles/permissions", lang === "es" ? "SLA y soporte prioritario" : "SLA & priority support", "SSO (SAML)", lang === "es" ? "Onboarding personalizado" : "Guided onboarding"],
      cta: c.ent,
    },
  ];
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={c.kicker} title={c.title} subtitle={c.subtitle} />
      <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05 }}
            className={`relative rounded-2xl border ${p.popular ? "border-cyan-400/40" : "border-slate-800"} bg-slate-900/60 p-6`}
          >
            {p.popular && (
              <div className="absolute -top-3 left-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                {c.popular}
              </div>
            )}
            <h3 className="text-lg sm:text-xl font-semibold text-white">{p.name}</h3>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-white">{p.price}</span>
              <span className="text-slate-400">{p.period}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="#contact"
                className={`inline-block w-full text-center rounded-2xl px-5 py-2 ${
                  p.popular ? "bg-cyan-400/90 text-slate-900 hover:bg-cyan-300" : "border border-slate-700 text-slate-200 hover:border-slate-500"
                }`}
              >
                {p.cta}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const { lang } = React.useContext(I18nContext);
  const c = copy[lang].testimonials;
  const quotes = [
    {
      name: lang === "es" ? "María L." : "Maria L.",
      role: lang === "es" ? "Socia en despacho fiscal" : "Partner, tax firm",
      text:
        lang === "es"
          ? "Reducimos en 70% el tiempo para preparar promociones ante el TFJA y nunca más se nos pasó un plazo."
          : "We cut 70% off drafting time for TFJA filings and never missed a deadline again.",
    },
    {
      name: "Jorge R.",
      role: lang === "es" ? "Litigio administrativo" : "Administrative litigation",
      text:
        lang === "es"
          ? "La automatización documental y el cálculo de plazos nos cambió el juego. La IA ahorra horas cada semana."
          : "Document automation and deadlines changed the game. AI saves hours every week.",
    },
    {
      name: "Ana P.",
      role: "Compliance",
      text:
        lang === "es"
          ? "Expedientes organizados y reportes en un clic: mejor control y auditorías más fáciles."
          : "Organized case files and one-click reports: better control and easier audits.",
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={c.kicker} title={c.title} />
      <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <p className="text-slate-200">“{q.text}”</p>
            <div className="mt-4 text-sm text-slate-400">
              {q.name} • {q.role}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const { lang } = React.useContext(I18nContext);
  const c = copy[lang].faq;
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <section id="faq" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={c.kicker} title={c.title} />
      <div className="mt-8 sm:mt-10 divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/60">
        {c.items.map((it, i) => (
          <div key={i} className="p-5 sm:p-6">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-base font-semibold text-white">{it.q}</span>
              <ArrowRight className={`h-4 w-4 transition-transform ${open === i ? "rotate-90" : ""}`} />
            </button>
            <motion.div
              initial={false}
              animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-sm text-slate-300">{it.a}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactLead() {
  const { lang } = React.useContext(I18nContext);
  const c = copy[lang].contact;
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={c.kicker} title={c.title} subtitle={c.subtitle} />
      <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-2">
        {/* Formspree */}
        <form
          action="https://formspree.io/f/xkgzaojb"
          method="POST"
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-slate-300">{c.name}</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-slate-300">{c.email}</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">{c.firm}</label>
              <input
                name="firm"
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">{c.message}</label>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-cyan-400/90 px-5 py-2 text-slate-900 hover:bg-cyan-300"
          >
            <Send className="h-4 w-4" /> {c.send}
          </button>
        </form>

        {/* Typeform como link (nueva pestaña) */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center">
          <p className="text-slate-300">{c.or}</p>
          <a
            href="https://f3949l9nprt.typeform.com/to/QZCzL5hA"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block w-full sm:w-auto rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-cyan-200 hover:bg-cyan-400/20"
          >
            {c.typeform}
          </a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { lang } = React.useContext(I18nContext);
  const c = copy[lang].cta;
  return (
    <section id="cta" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 text-center">
        <div
          className="absolute -right-24 -top-24 h-60 w-60 rounded-full blur-3xl sm:h-72 sm:w-72"
          style={{ background: "radial-gradient(closest-side, #22d3ee33 0%, transparent 70%)" }}
        />
        <div
          className="absolute -left-24 -bottom-24 h-60 w-60 rounded-full blur-3xl sm:h-72 sm:w-72"
          style={{ background: "radial-gradient(closest-side, #a78bfa33 0%, transparent 70%)" }}
        />
        <div className="relative">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">{c.title}</h3>
          <p className="mt-3 text-slate-300">{c.p}</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a href="#contact" className="rounded-2xl bg-cyan-400/90 px-6 py-3 text-center text-slate-900 transition hover:bg-cyan-300">
              {c.demo}
            </a>
            <a
              href="#pricing"
              className="rounded-2xl border border-slate-700 px-6 py-3 text-center text-slate-200 hover:border-slate-500"
            >
              {c.start}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { lang } = React.useContext(I18nContext);
  const c = copy[lang];
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-8 sm:pb-10">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-slate-400">
            <Sparkles className="h-5 w-5 text-cyan-300" aria-hidden />
            <span className="text-sm">{c.footer.copyright(year)}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <a href="#features" className="hover:text-white">{c.footer.links[0]}</a>
            <a href="#security" className="hover:text-white">{c.footer.links[1]}</a>
            <a href="#pricing" className="hover:text-white">{c.footer.links[2]}</a>
            <a href="#faq" className="hover:text-white">{c.footer.links[3]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================
   Página
========================= */
// ...
export default function LandingLegalTechDark() {
  const [lang, setLang] = React.useState<Lang>("es");

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {/* Fondo 3D */}
      <ThreeBackgroundClient />

      {/* Contenido por encima del canvas */}
      <div className="relative z-10 min-h-screen text-slate-100 antialiased">
        {/* TIP: usa fondos con opacidad (ej. bg-slate-900/60) en secciones,
            NO pongas un bg sólido a este div para que se vea el 3D */}
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactLead />
        <CTA />
        <Footer />
      </div>
    </I18nContext.Provider>
  );
}

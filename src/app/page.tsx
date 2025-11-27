"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThreeBackgroundClient from "@/components/ThreeBackgroundClient";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, CheckCircle2, FileText, Gavel, CalendarDays, Lock, Bot,
  Clock, Folder, Globe2, Send, Menu, X,
  Bell, Users, Shield, AlertTriangle, Coffee, MessageSquare, 
  LayoutDashboard, Link2, Zap, Upload, Scale, Building2, Briefcase
} from "lucide-react";

/* =========================
   URLs de la aplicación
========================= */
const URLS = {
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
};

/* =========================
   Textos
========================= */
const copy = {
  brand: "Ius-Tech",
  nav: { features: "Funciones", security: "Seguridad", pricing: "Precios", faq: "FAQ", contact: "Contacto", demo: "Comenzar ahora", login: "Ya tengo cuenta" },
  hero: {
    badge: "🚀 ACCESO ANTICIPADO — Lugares limitados",
    title: "El software que hace el trabajo tedioso por ti",
    subtitle: "Gestiona expedientes, calcula plazos, genera documentos y mantén a tu equipo sincronizado. Ius-Tech automatiza lo repetitivo para que tú te enfoques en lo que importa: tus clientes y tus casos.",
    cta1: "Comenzar gratis",
    cta2: "Ver cómo funciona",
    bullets: [
      "Fácil de usar, sin curva de aprendizaje",
      "Todo conectado: clientes, expedientes, tareas",
      "Con funciones especializadas para litigio fiscal"
    ],
  },
  segments: {
    kicker: "¿QUIÉN USA IUS-TECH?",
    title: "Diseñado para diferentes tipos de práctica",
    items: [
      {
        icon: <Scale className="w-8 h-8" />,
        title: "Abogados Fiscalistas",
        text: "Cálculo de plazos SAT/TFJA, seguimiento del PJF, generación de escritos fiscales con IA. Todo lo que necesitas para litigio fiscal.",
        link: "/fiscalistas",
        cta: "Ver funciones para fiscalistas"
      },
      {
        icon: <Building2 className="w-8 h-8" />,
        title: "Abogados In-House",
        text: "Gestión de tareas, vigilancia de litigios externos, control de vencimientos de contratos. Ten todo bajo control sin juntas innecesarias.",
        link: "/in-house",
        cta: "Ver funciones para in-house"
      },
      {
        icon: <Briefcase className="w-8 h-8" />,
        title: "Despachos y Litigantes",
        text: "Expedientes completos, reportes automáticos, comunicación clara con clientes. Maneja más casos sin perder el control.",
        link: "#features",
        cta: "Ver todas las funciones"
      },
    ],
  },
  pain: {
    kicker: "¿TE SUENA FAMILIAR?",
    title: "El día a día de un abogado",
    items: [
      { icon: <Clock className="w-6 h-6" />, title: "Tareas que se pierden", text: "Sin un sistema, las tareas se olvidan o se duplican. Terminas en juntas solo para saber quién está haciendo qué." },
      { icon: <AlertTriangle className="w-6 h-6" />, title: "Plazos que se calculan a mano", text: "Contar días hábiles, restar inhábiles, verificar... Un error y se pierde el caso o la oportunidad." },
      { icon: <Coffee className="w-6 h-6" />, title: "Documentos desde cero", text: "Cada contrato o escrito empieza buscando uno similar. Copias, pegas, ajustas. Una y otra vez." },
      { icon: <Users className="w-6 h-6" />, title: "Clientes que preguntan '¿cómo va?'", text: "Preparar reportes de estatus consume tiempo. Y luego hay que traducir la jerga legal." },
    ],
  },
  value: {
    kicker: "LA SOLUCIÓN",
    title: "Un sistema que trabaja mientras tú duermes",
    subtitle: "Sube tu información una vez. El sistema organiza, calcula, recuerda y reporta. Tú te enfocas en el análisis y la estrategia.",
  },
  features: {
    kicker: "¿QUÉ PUEDES HACER?",
    title: "Funciones que sí entiendes para qué sirven",
    subtitle: "Sin tecnicismos. Sin promesas vacías. Esto es lo que Ius-Tech hace por ti:",
  },
  how: {
    kicker: "ASÍ DE FÁCIL",
    title: "De cero a productivo en minutos",
    steps: [
      { title: "Sube tu información", text: "Importa clientes y expedientes desde Excel. El sistema detecta las columnas automáticamente." },
      { title: "El sistema trabaja", text: "Calcula plazos, organiza tareas, monitorea vencimientos. Te avisa cuando algo necesita atención." },
      { title: "Tú decides", text: "Con la información organizada y actualizada, tú te enfocas en la estrategia." },
      { title: "Tu cliente entiende", text: "Genera reportes y correos en lenguaje claro. Sin tener que traducir tú." },
    ],
  },
  security: {
    kicker: "Seguridad",
    title: "Tu información, solo tuya",
    p: "Cada despacho tiene su espacio aislado. Nadie más puede ver tu información. Encriptación en tránsito y en reposo.",
    bullets: ["Aislamiento total por cuenta", "Backups automáticos diarios", "Hospedado en AWS (Amazon)"],
  },
  pricing: {
    kicker: "PRECIOS TRANSPARENTES",
    title: "Sin sorpresas, sin letras chiquitas",
    subtitle: "Elige el plan que se ajuste a tu práctica",
    monthly: "Mensual",
    annual: "Anual",
    savePercent: "Ahorra 20%",
    popular: "Más popular",
    note: "Todos los planes incluyen 14 días de prueba gratis",
    trial: "14 días gratis • Sin tarjeta • Cancela cuando quieras",
  },
  beta: {
    kicker: "ACCESO ANTICIPADO",
    title: "Sé de los primeros",
    subtitle: "Estamos en fase beta con lugares limitados. Los early adopters obtienen:",
    benefits: [
      "30 días gratis para probar todo",
      "Precio congelado de por vida",
      "Acceso directo a la fundadora",
      "Influencia en nuevas funciones",
    ],
  },
  faq: {
    kicker: "PREGUNTAS FRECUENTES",
    title: "Lo que necesitas saber",
    items: [
      { q: "¿Qué tipo de abogado puede usar Ius-Tech?", a: "Cualquier abogado o equipo legal. Tenemos funciones generales (gestión de tareas, expedientes, reportes) y funciones especializadas para litigio fiscal (plazos SAT/TFJA, seguimiento del PJF, escritos fiscales)." },
      { q: "¿Qué es 'acceso anticipado'?", a: "Estamos en fase beta. Aceptamos usuarios que quieran probar la plataforma a cambio de feedback. Los primeros usuarios mantienen el precio de early adopter de por vida." },
      { q: "¿Los documentos los genera la inteligencia artificial?", a: "Los documentos base están hechos por expertos. La IA ayuda a potenciarlos con información de tus expedientes, pero la estructura legal es de profesionales." },
      { q: "¿Puedo importar mis expedientes actuales?", a: "Sí. Tenemos importación desde Excel con mapeo inteligente. Subes tu archivo y el sistema detecta qué columna es cuál." },
      { q: "¿Qué tan difícil es de usar?", a: "Muy fácil. Si sabes usar Excel y correo, sabes usar Ius-Tech. No necesitas conocimientos técnicos." },
      { q: "¿Qué pasa si no me gusta?", a: "Tienes 14 días de prueba gratis. Cancelas cuando quieras. Sin preguntas, sin complicaciones." },
    ],
  },
  contact: {
    kicker: "EMPIEZA HOY",
    title: "Solicita tu acceso",
    subtitle: "Déjanos tus datos y te contactamos para darte acceso.",
    name: "Nombre completo",
    email: "Email",
    firm: "Nombre del despacho o empresa",
    message: "¿Qué tipo de práctica tienes? ¿Qué te interesa de Ius-Tech?",
    send: "Solicitar acceso",
    or: "o agenda una llamada de",
    typeform: "15 minutos conmigo →",
  },
  cta: { 
    title: "Recupera tu tiempo", 
    p: "Deja que Ius-Tech haga el trabajo repetitivo. Tú enfócate en lo que importa.", 
    demo: "Comenzar gratis"
  },
  footer: { 
    links: ["Funciones", "Seguridad", "Precios", "FAQ"], 
    copyright: (y: number) => `© ${y} Ius-Tech — Hecho en México 🇲🇽`,
    legal: ["Términos y Condiciones", "Aviso de Privacidad"],
    pages: ["Para Fiscalistas", "Para In-House"],
  },
};

const featuresData = [
  { icon: <Link2 className="w-6 h-6" />, title: "Todo conectado", text: "Clientes, expedientes, documentos, tareas. Captura una vez y todo se vincula automáticamente.", badge: "Principal" },
  { icon: <LayoutDashboard className="w-6 h-6" />, title: "Panel de control visual", text: "Ve de un vistazo qué vence hoy, qué está pendiente y qué está atrasado. Colores que te dicen qué necesita atención.", badge: null },
  { icon: <CalendarDays className="w-6 h-6" />, title: "Gestión de tareas y plazos", text: "Crea tareas, asígnalas a tu equipo, pon fechas límite. Recordatorios automáticos por correo para que nada se olvide.", badge: null },
  { icon: <FileText className="w-6 h-6" />, title: "Tus plantillas, tus documentos", text: "Sube tus plantillas una vez. Genera documentos con los datos de tus expedientes ya rellenados. Sin copiar y pegar.", badge: null },
  { icon: <Folder className="w-6 h-6" />, title: "Expedientes completos", text: "En cada expediente ves el historial, los documentos generados y los asuntos relacionados. Todo en un lugar.", badge: null },
  { icon: <Send className="w-6 h-6" />, title: "Reportes y correos con IA", text: "Genera reportes de estatus y correos para clientes. La IA traduce la jerga legal a lenguaje claro.", badge: "IA" },
  { icon: <Upload className="w-6 h-6" />, title: "Importación desde Excel", text: "Sube tu Excel de clientes o expedientes. El sistema detecta las columnas automáticamente.", badge: null },
  { icon: <Users className="w-6 h-6" />, title: "Clientes y proveedores", text: "Diferencia entre clientes y proveedores. Ideal para abogados in-house que manejan ambos.", badge: null },
  { icon: <Gavel className="w-6 h-6" />, title: "Seguimiento automático del PJF", text: "Tus expedientes en el Poder Judicial Federal se actualizan solos. Sin entrar al portal.", badge: "Fiscal" },
  { icon: <Bot className="w-6 h-6" />, title: "Cálculo de plazos SAT/TFJA", text: "Calcula automáticamente los días hábiles considerando inhábiles de cada autoridad fiscal.", badge: "Fiscal" },
  { icon: <MessageSquare className="w-6 h-6" />, title: "Chatbot fiscal con IA", text: "Pregúntale lo que quieras del Código Fiscal de la Federación. Respuestas instantáneas.", badge: "Fiscal" },
  { icon: <Bell className="w-6 h-6" />, title: "Alertas del Diario Oficial", text: "El sistema revisa el DOF diariamente y te avisa si hay publicaciones fiscales relevantes.", badge: "Fiscal" },
];

/* =========================
   UI Components
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
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl sm:h-[32rem] sm:w-[32rem]" style={{ background: "radial-gradient(closest-side, #6869D8 0%, transparent 70%)" }} />
      <div className="absolute -bottom-40 -right-32 h-[26rem] w-[26rem] rounded-full blur-3xl sm:h-[30rem] sm:w-[30rem]" style={{ background: "radial-gradient(closest-side, #668FC6 0%, transparent 70%)" }} />
    </motion.div>
  );
}

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs sm:text-sm uppercase tracking-widest text-violet-400 font-semibold">{kicker}</p>
      <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="sticky top-0 z-40 border-b border-slate-800/40 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-white.png" alt="Ius-Tech" width={32} height={32} className="rounded-lg" />
          <span className="text-sm sm:text-base font-bold text-white">{copy.brand}</span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <a href="#features" className="text-sm text-slate-300 hover:text-white">{copy.nav.features}</a>
          <a href="#security" className="text-sm text-slate-300 hover:text-white">{copy.nav.security}</a>
          <a href="#pricing" className="text-sm text-slate-300 hover:text-white">{copy.nav.pricing}</a>
          <a href="#faq" className="text-sm text-slate-300 hover:text-white">{copy.nav.faq}</a>
          <a href={URLS.login} className="text-sm text-slate-300 hover:text-white">{copy.nav.login}</a>
          <a href={URLS.register} className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white hover:from-violet-500 hover:to-indigo-500 transition-all">
            {copy.nav.demo} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-200" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-800/40 px-4 py-3 flex flex-col gap-3">
          <a onClick={() => setOpen(false)} href="#features" className="text-slate-200">• {copy.nav.features}</a>
          <a onClick={() => setOpen(false)} href="#security" className="text-slate-200">• {copy.nav.security}</a>
          <a onClick={() => setOpen(false)} href="#pricing" className="text-slate-200">• {copy.nav.pricing}</a>
          <a onClick={() => setOpen(false)} href="#faq" className="text-slate-200">• {copy.nav.faq}</a>
          <a onClick={() => setOpen(false)} href={URLS.login} className="text-slate-200">• {copy.nav.login}</a>
          <a href={URLS.register} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white w-fit">
            {copy.nav.demo} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);
  return (
    <header className="relative isolate overflow-hidden">
      <GradientOrb />
      <motion.div style={{ y }} className="mx-auto max-w-7xl px-4 pt-12 sm:pt-16 pb-14 sm:pb-20">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">{copy.hero.badge}</span>
        </motion.div>
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">{copy.hero.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 sm:mt-6 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto">{copy.hero.subtitle}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href={URLS.register} className="rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-center text-lg font-semibold text-white transition hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25">{copy.hero.cta1}</a>
            <a href="#features" className="rounded-2xl border border-slate-600 px-8 py-4 text-center text-lg font-semibold text-slate-200 hover:border-slate-500 hover:bg-slate-800/50">{copy.hero.cta2}</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-slate-400">
            {copy.hero.bullets.map((b) => (<div key={b} className="flex items-center justify-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> {b}</div>))}
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}

function Segments() {
  const c = copy.segments;
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={c.kicker} title={c.title} />
      <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-3">
        {c.items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-violet-500/30 transition-colors">
            <div className="text-violet-400 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-slate-300 mb-4">{item.text}</p>
            <Link href={item.link} className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium text-sm">{item.cta} <ArrowRight className="h-4 w-4" /></Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={copy.pain.kicker} title={copy.pain.title} />
      <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {copy.pain.items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
            <div className="flex items-center gap-3 text-red-400">{item.icon}<h3 className="text-base font-semibold text-white">{item.title}</h3></div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ValueProp() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent p-8 sm:p-12 text-center">
        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full blur-3xl sm:h-72 sm:w-72" style={{ background: "radial-gradient(closest-side, #6869D833 0%, transparent 70%)" }} />
        <div className="relative">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-violet-400 font-semibold">{copy.value.kicker}</p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-white">{copy.value.title}</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">{copy.value.subtitle}</p>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={copy.features.kicker} title={copy.features.title} subtitle={copy.features.subtitle} />
      <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow hover:border-violet-500/30 transition-colors">
            {f.badge && <span className={`absolute -top-2 right-4 rounded-full px-2 py-0.5 text-xs font-semibold text-white ${f.badge === "Fiscal" ? "bg-gradient-to-r from-amber-500 to-orange-500" : "bg-gradient-to-r from-violet-600 to-indigo-600"}`}>{f.badge}</span>}
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-700 p-2 text-violet-400 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-colors">{f.icon}</div>
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
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={copy.how.kicker} title={copy.how.title} />
      <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {copy.how.steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-sm font-bold text-white">{i + 1}</div>
            <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-slate-300">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Security() {
  return (
    <section id="security" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900 p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full blur-3xl sm:h-72 sm:w-72" style={{ background: "radial-gradient(closest-side, #6869D833 0%, transparent 70%)" }} />
        <div className="relative grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-violet-400 font-semibold">{copy.security.kicker}</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">{copy.security.title}</h3>
            <p className="mt-4 text-slate-300">{copy.security.p}</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {copy.security.bullets.map((b) => (<li key={b} className="flex items-center gap-3"><div className="rounded-full bg-violet-500/20 p-1"><Lock className="h-4 w-4 text-violet-400" /></div>{b}</li>))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3 mb-4"><Shield className="h-8 w-8 text-violet-400" /><span className="text-lg font-semibold text-white">AWS + PostgreSQL</span></div>
            <div className="space-y-3 text-sm text-slate-400">
              {["Elastic Beanstalk con Auto-scaling", "RDS con encriptación AES-256", "TLS 1.3 en tránsito", "Certificado SSL con ACM"].map((t) => (<div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /><span>{t}</span></div>))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(true);
  const plans = [
    { name: "Individual", priceMonthly: 25, priceAnnual: 20, priceYearTotal: 240, features: ["1 usuario", "Clientes y expedientes ilimitados", "Gestión de tareas y plazos", "Panel de control visual", "Soporte por email"], ctaLink: isAnnual ? URLS.plans.individual.annual : URLS.plans.individual.monthly, popular: false },
    { name: "Team", priceMonthly: 180, priceAnnual: 144, priceYearTotal: 1728, subtext: "Hasta 10 usuarios", features: ["Todo de Individual +", "Hasta 10 usuarios", "Funciones fiscales (PJF, SAT/TFJA)", "Generación de documentos con IA", "Chatbot fiscal con IA", "Soporte prioritario"], ctaLink: isAnnual ? URLS.plans.team.annual : URLS.plans.team.monthly, popular: true },
    { name: "Enterprise", priceMonthly: 450, priceAnnual: 360, priceYearTotal: 4320, subtext: "Hasta 30 usuarios", features: ["Todo de Team +", "Hasta 30 usuarios", "Plantillas personalizadas", "Onboarding dedicado", "Soporte telefónico"], ctaLink: isAnnual ? URLS.plans.enterprise.annual : URLS.plans.enterprise.monthly, popular: false },
  ];
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={copy.pricing.kicker} title={copy.pricing.title} subtitle={copy.pricing.subtitle} />
      <div className="mt-8 flex items-center justify-center gap-4">
        <span className={`text-base font-semibold transition-colors ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>{copy.pricing.monthly}</span>
        <button onClick={() => setIsAnnual(!isAnnual)} className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors" style={{ background: isAnnual ? 'linear-gradient(to right, #6869D8, #668FC6)' : '#374151' }} aria-label="Toggle billing">
          <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`} />
        </button>
        <span className={`text-base font-semibold transition-colors ${isAnnual ? 'text-white' : 'text-slate-400'}`}>{copy.pricing.annual}</span>
        <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">{copy.pricing.savePercent}</span>
      </div>
      <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`relative rounded-2xl border ${p.popular ? "border-violet-500/40 ring-2 ring-violet-500/20" : "border-slate-800"} bg-slate-900/60 p-6`}>
            {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-1 text-xs font-semibold text-white">{copy.pricing.popular}</div>}
            <h3 className="text-lg sm:text-xl font-semibold text-white">{p.name}</h3>
            {p.subtext && <p className="text-sm text-slate-400">{p.subtext}</p>}
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-bold text-white">${isAnnual ? p.priceAnnual : p.priceMonthly}</span>
              <span className="text-slate-400">USD/mes</span>
            </div>
            {isAnnual && <div className="mt-1 text-sm text-slate-500">${p.priceYearTotal} USD/año</div>}
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {p.features.map((f) => (<li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" /> {f}</li>))}
            </ul>
            <div className="mt-6">
              <a href={p.ctaLink} className={`inline-block w-full text-center rounded-2xl px-5 py-3 font-semibold transition-all ${p.popular ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500" : "border border-slate-700 text-slate-200 hover:border-violet-500/50 hover:bg-violet-500/10"}`}>Comenzar</a>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-violet-400 font-medium">{copy.pricing.note}</p>
        <p className="mt-2 text-sm text-slate-400">{copy.pricing.trial}</p>
      </div>
    </section>
  );
}

function BetaBenefits() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-transparent p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-violet-400 font-semibold">{copy.beta.kicker}</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">{copy.beta.title}</h3>
            <p className="mt-4 text-slate-300">{copy.beta.subtitle}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.beta.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <div className="rounded-full bg-violet-500/20 p-1.5"><Zap className="h-4 w-4 text-violet-400" /></div>
                <span className="text-sm text-slate-200">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <section id="faq" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={copy.faq.kicker} title={copy.faq.title} />
      <div className="mt-8 sm:mt-10 max-w-3xl mx-auto divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/60">
        {copy.faq.items.map((it, i) => (
          <div key={i} className="p-5 sm:p-6">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between text-left">
              <span className="text-base font-semibold text-white pr-4">{it.q}</span>
              <ArrowRight className={`h-4 w-4 text-violet-400 transition-transform flex-shrink-0 ${open === i ? "rotate-90" : ""}`} />
            </button>
            <motion.div initial={false} animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }} className="overflow-hidden">
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{it.a}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactLead() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={copy.contact.kicker} title={copy.contact.title} subtitle={copy.contact.subtitle} />
      <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
        <form action={URLS.formspree} method="POST" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
          <div className="grid gap-4">
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.name}</label><input name="name" required className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" /></div>
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.email}</label><input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" /></div>
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.firm}</label><input name="firm" className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" /></div>
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.message}</label><textarea name="message" rows={3} className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" /></div>
          </div>
          <button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white hover:from-violet-500 hover:to-indigo-500 transition-all"><Send className="h-4 w-4" /> {copy.contact.send}</button>
        </form>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-violet-500/20 flex items-center justify-center mb-4"><Users className="h-8 w-8 text-violet-400" /></div>
          <p className="text-slate-300 mb-4">{copy.contact.or}</p>
          <a href={URLS.typeform} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-violet-500/30 bg-violet-500/10 px-6 py-3 text-violet-300 hover:bg-violet-500/20 font-semibold transition-colors">{copy.contact.typeform}</a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent p-8 sm:p-12 text-center">
        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full blur-3xl sm:h-72 sm:w-72" style={{ background: "radial-gradient(closest-side, #6869D833 0%, transparent 70%)" }} />
        <div className="relative">
          <h3 className="text-2xl sm:text-4xl font-bold text-white">{copy.cta.title}</h3>
          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">{copy.cta.p}</p>
          <div className="mt-8"><a href={URLS.register} className="rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white transition hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 inline-block">{copy.cta.demo}</a></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-8 sm:pb-10">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-slate-400">
            <Image src="/logo-white.png" alt="Ius-Tech" width={24} height={24} className="rounded-md" />
            <span className="text-sm">{copy.footer.copyright(year)}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <a href="#features" className="hover:text-white">{copy.footer.links[0]}</a>
            <a href="#security" className="hover:text-white">{copy.footer.links[1]}</a>
            <a href="#pricing" className="hover:text-white">{copy.footer.links[2]}</a>
            <a href="#faq" className="hover:text-white">{copy.footer.links[3]}</a>
            <span className="text-slate-600">|</span>
            <Link href="/fiscalistas" className="hover:text-white">{copy.footer.pages[0]}</Link>
            <Link href="/in-house" className="hover:text-white">{copy.footer.pages[1]}</Link>
            <span className="text-slate-600">|</span>
            <a href={URLS.legal.terms} className="hover:text-white">{copy.footer.legal[0]}</a>
            <a href={URLS.legal.privacy} className="hover:text-white">{copy.footer.legal[1]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingGeneral() {
  return (
    <>
      <ThreeBackgroundClient />
      <div className="relative z-10 min-h-screen text-slate-100 antialiased">
      <Navbar />
      <Hero />
      <Segments />
      <PainPoints />
      <ValueProp />
      <Features />
      <HowItWorks />
      <Security />
      <Pricing />
      <BetaBenefits />
      <FAQ />
      <ContactLead />
      <CTA />
      <Footer />
    </div>
    </>
  );
}
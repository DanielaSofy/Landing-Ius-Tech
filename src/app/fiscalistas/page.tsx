"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThreeBackgroundClient from "@/components/ThreeBackgroundClient";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, CheckCircle2, FileText, Gavel, CalendarDays, Lock, Bot,
  Clock, Folder, Send, Menu, X,
  Bell, Users, Shield, AlertTriangle, Coffee, MessageSquare, 
  LayoutDashboard, Link2, Zap, Upload, Scale
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
};

/* =========================
   Textos
========================= */
const copy = {
  brand: "Ius-Tech",
  nav: { features: "Funciones", security: "Seguridad", pricing: "Precios", faq: "FAQ", demo: "Comenzar ahora", login: "Ya tengo cuenta" },
  hero: {
    badge: "🎯 DISEÑADO PARA FISCALISTAS",
    title: "Deja de perder tiempo en tareas que no requieren tu análisis",
    subtitle: "Ius-Tech automatiza el cálculo de plazos, el seguimiento del PJF, las alertas del DOF y la redacción de escritos. Tú te enfocas en la estrategia fiscal.",
    cta1: "Comenzar gratis",
    cta2: "Ver cómo funciona",
    bullets: [
      "Cálculo de plazos SAT y TFJA automático",
      "Seguimiento del PJF sin entrar al portal",
      "Escritos fiscales potenciados con IA"
    ],
  },
  pain: {
    kicker: "¿TE SUENA FAMILIAR?",
    title: "El día a día de un fiscalista",
    items: [
      { icon: <Clock className="w-6 h-6" />, title: "Revisando el PJF todos los días", text: "Entras al portal del Poder Judicial, buscas tus expedientes uno por uno. 30 minutos diarios que podrías usar en otra cosa." },
      { icon: <AlertTriangle className="w-6 h-6" />, title: "Calculando plazos a mano", text: "30 días hábiles menos inhábiles del SAT, más los del TFJA... Un error de un día y se pierde el caso." },
      { icon: <Coffee className="w-6 h-6" />, title: "Redactando recursos desde cero", text: "Cada recurso de revocación empieza buscando uno similar. Copias los antecedentes, ajustas los hechos, revisas el fundamento." },
      { icon: <Users className="w-6 h-6" />, title: "Traduciendo para el cliente", text: "'Se tuvo por contestada la ampliación de demanda'. Ahora explícale eso a tu cliente en español normal." },
    ],
  },
  value: {
    kicker: "LA SOLUCIÓN",
    title: "Tu asistente fiscal que trabaja 24/7",
    subtitle: "Mientras duermes, Ius-Tech revisa el PJF, monitorea el DOF y calcula tus plazos. Tú llegas en la mañana con todo listo.",
  },
  features: {
    kicker: "FUNCIONES PARA FISCALISTAS",
    title: "Lo que ningún otro software legal tiene",
    subtitle: "Estas funciones las diseñamos específicamente para el flujo de trabajo de un fiscalista mexicano:",
  },
  how: {
    kicker: "ASÍ DE FÁCIL",
    title: "De cero a escrito presentado",
    steps: [
      { title: "Sube tus expedientes", text: "Importa desde Excel o captura manualmente. El sistema detecta las columnas automáticamente." },
      { title: "El sistema vigila", text: "Monitorea el PJF y el DOF diariamente. Calcula plazos con días inhábiles. Te avisa lo importante." },
      { title: "Genera con IA", text: "Contesta preguntas sobre tu caso. La IA redacta antecedentes, hechos y argumentos con tu información." },
      { title: "Presenta y reporta", text: "Descarga el escrito listo. Genera el reporte para tu cliente en lenguaje claro." },
    ],
  },
  security: {
    kicker: "Seguridad",
    title: "Tus expedientes fiscales, solo tuyos",
    p: "Información fiscal es información sensible. Cada despacho tiene su espacio aislado con encriptación de nivel bancario.",
    bullets: ["Aislamiento total por despacho", "Backups automáticos diarios", "Hospedado en AWS (Amazon)"],
  },
  pricing: {
    kicker: "PRECIOS PARA FISCALISTAS",
    title: "Invierte menos de lo que cobras por una hora",
    subtitle: "El plan Team incluye todas las funciones fiscales",
    monthly: "Mensual",
    annual: "Anual",
    savePercent: "Ahorra 20%",
    popular: "Recomendado para fiscalistas",
    note: "Todos los planes incluyen 14 días de prueba gratis",
    trial: "14 días gratis • Sin tarjeta • Cancela cuando quieras",
  },
  beta: {
    kicker: "ACCESO ANTICIPADO",
    title: "Sé de los primeros fiscalistas",
    subtitle: "Estamos en fase beta. Los primeros usuarios obtienen beneficios exclusivos:",
    benefits: [
      "30 días gratis para probar todo",
      "Precio congelado de por vida",
      "Acceso directo a la fundadora (también fiscalista)",
      "Tus sugerencias se implementan primero",
    ],
  },
  faq: {
    kicker: "PREGUNTAS DE FISCALISTAS",
    title: "Lo que necesitas saber",
    items: [
      { q: "¿Realmente calcula bien los plazos del SAT y TFJA?", a: "Sí. El sistema tiene configurados los días inhábiles de cada autoridad y calcula automáticamente considerando ambos calendarios. Te muestra el fundamento legal del cálculo." },
      { q: "¿Cómo funciona el seguimiento del PJF?", a: "Ingresas el número de expediente y el circuito. El sistema revisa el portal diariamente y te notifica cuando hay un nuevo acuerdo o resolución." },
      { q: "¿La IA realmente entiende derecho fiscal mexicano?", a: "Los prompts están entrenados con terminología fiscal mexicana, estructura de recursos de revocación y formato de escritos ante el TFJA. No es IA genérica." },
      { q: "¿Puedo generar recursos de revocación?", a: "Sí. El sistema te hace preguntas sobre el caso (autoridad, acto impugnado, agravios) y genera el escrito con la estructura correcta. Tú revisas y ajustas." },
      { q: "¿Qué pasa con mis clientes pequeños que no pagan mucho?", a: "Con Ius-Tech puedes atender esos casos que antes rechazabas por el tiempo que tomaban. Un escrito que te llevaba 2 horas ahora toma 15 minutos." },
      { q: "¿Quién está detrás de esto?", a: "Ius-Tech fue creado por una abogada fiscalista mexicana que se cansó de hacer las mismas tareas repetitivas. Entendemos tu práctica porque la vivimos." },
    ],
  },
  contact: {
    kicker: "EMPIEZA HOY",
    title: "Únete a los primeros fiscalistas",
    subtitle: "Déjanos tus datos y te damos acceso a la beta.",
    name: "Nombre completo",
    email: "Email",
    firm: "Nombre del despacho",
    message: "¿Cuántos expedientes fiscales manejas aproximadamente?",
    send: "Solicitar acceso",
    or: "o agenda una llamada de",
    typeform: "15 minutos conmigo →",
  },
  cta: { 
    title: "Recupera 10 horas a la semana", 
    p: "Deja que Ius-Tech haga el seguimiento, los cálculos y los borradores. Tú enfócate en ganar casos.", 
    demo: "Comenzar gratis"
  },
  footer: { 
    links: ["Funciones", "Seguridad", "Precios", "FAQ"], 
    copyright: (y: number) => `© ${y} Ius-Tech — Hecho en México 🇲🇽`,
    legal: ["Términos y Condiciones", "Aviso de Privacidad"],
    pages: ["Página principal", "Para In-House"],
  },
};

const featuresData = [
  { icon: <Gavel className="w-6 h-6" />, title: "Seguimiento automático del PJF", text: "Ingresa tus números de expediente. El sistema revisa el portal del Poder Judicial Federal diariamente y te notifica cada novedad.", badge: "Exclusivo", highlight: true },
  { icon: <CalendarDays className="w-6 h-6" />, title: "Cálculo de plazos SAT/TFJA", text: "Ingresa una fecha. El sistema calcula el vencimiento considerando días inhábiles de SAT y TFJA. Con fundamento legal incluido.", badge: "Exclusivo", highlight: true },
  { icon: <Bell className="w-6 h-6" />, title: "Monitor del Diario Oficial", text: "Cada mañana revisamos el DOF. Si hay publicaciones fiscales relevantes (reformas, resoluciones, criterios), te avisamos.", badge: "Exclusivo", highlight: true },
  { icon: <MessageSquare className="w-6 h-6" />, title: "Chatbot del Código Fiscal", text: "Pregúntale lo que quieras del CFF. '¿Cuál es el plazo para interponer recurso de revocación?' Respuesta instantánea con artículos.", badge: "IA", highlight: true },
  { icon: <FileText className="w-6 h-6" />, title: "Generador de escritos fiscales", text: "Recursos de revocación, contestaciones, promociones. Contestas preguntas sobre tu caso, el sistema genera el borrador.", badge: "IA", highlight: false },
  { icon: <Bot className="w-6 h-6" />, title: "Documentos por expertos + IA", text: "Las plantillas las hicieron fiscalistas expertos. La IA las potencia con la información de tu expediente.", badge: "IA", highlight: false },
  { icon: <Link2 className="w-6 h-6" />, title: "Todo conectado", text: "Cliente → Expediente → Documentos → Plazos → Tareas. Capturas una vez, todo se vincula automáticamente.", badge: null, highlight: false },
  { icon: <LayoutDashboard className="w-6 h-6" />, title: "Panel de vencimientos", text: "Ve de un vistazo qué vence hoy, esta semana, este mes. Colores rojo/amarillo/verde que te dicen qué urge.", badge: null, highlight: false },
  { icon: <Folder className="w-6 h-6" />, title: "Expedientes completos", text: "En cada expediente ves: historial de seguimientos, documentos generados, asuntos relacionados (del juicio al recurso previo).", badge: null, highlight: false },
  { icon: <Send className="w-6 h-6" />, title: "Correos para clientes", text: "Cada que agregas un acontecimiento, el sistema redacta un correo en lenguaje simple para tu cliente. Tú solo revisas y envías.", badge: "IA", highlight: false },
  { icon: <Upload className="w-6 h-6" />, title: "Importación desde Excel", text: "¿Ya tienes tus expedientes en Excel? Súbelo. El sistema detecta las columnas automáticamente.", badge: null, highlight: false },
  { icon: <Scale className="w-6 h-6" />, title: "Reportes de estatus", text: "Genera reportes para tus clientes con un clic. En lenguaje que ellos entienden, no jerga legal.", badge: null, highlight: false },
];

/* =========================
   UI Components
========================= */

function GradientOrb() {
  return (
    <motion.div aria-hidden initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl sm:h-[32rem] sm:w-[32rem]" style={{ background: "radial-gradient(closest-side, #F59E0B 0%, transparent 70%)" }} />
      <div className="absolute -bottom-40 -right-32 h-[26rem] w-[26rem] rounded-full blur-3xl sm:h-[30rem] sm:w-[30rem]" style={{ background: "radial-gradient(closest-side, #6869D8 0%, transparent 70%)" }} />
    </motion.div>
  );
}

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-semibold">{kicker}</p>
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
          <span className="hidden sm:inline-flex items-center rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-300">Fiscalistas</span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <a href="#features" className="text-sm text-slate-300 hover:text-white">{copy.nav.features}</a>
          <a href="#security" className="text-sm text-slate-300 hover:text-white">{copy.nav.security}</a>
          <a href="#pricing" className="text-sm text-slate-300 hover:text-white">{copy.nav.pricing}</a>
          <a href="#faq" className="text-sm text-slate-300 hover:text-white">{copy.nav.faq}</a>
          <a href={URLS.login} className="text-sm text-slate-300 hover:text-white">{copy.nav.login}</a>
          <a href={URLS.register} className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-medium text-white hover:from-amber-400 hover:to-orange-400 transition-all">
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
          <a href={URLS.register} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-medium text-white w-fit">
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
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300">{copy.hero.badge}</span>
        </motion.div>
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">{copy.hero.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 sm:mt-6 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto">{copy.hero.subtitle}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href={URLS.register} className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-center text-lg font-semibold text-white transition hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/25">{copy.hero.cta1}</a>
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
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-8 sm:p-12 text-center">
        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full blur-3xl sm:h-72 sm:w-72" style={{ background: "radial-gradient(closest-side, #F59E0B33 0%, transparent 70%)" }} />
        <div className="relative">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-semibold">{copy.value.kicker}</p>
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
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className={`group relative rounded-2xl border ${f.highlight ? "border-amber-500/30 bg-amber-500/5" : "border-slate-800 bg-slate-900/50"} p-5 shadow hover:border-amber-500/40 transition-colors`}>
            {f.badge && <span className={`absolute -top-2 right-4 rounded-full px-2 py-0.5 text-xs font-semibold text-white ${f.badge === "Exclusivo" ? "bg-gradient-to-r from-amber-500 to-orange-500" : "bg-gradient-to-r from-violet-600 to-indigo-600"}`}>{f.badge}</span>}
            <div className="flex items-center gap-3">
              <div className={`rounded-xl border p-2 ${f.highlight ? "border-amber-500/50 text-amber-400 bg-amber-500/10" : "border-slate-700 text-violet-400"} group-hover:border-amber-500/50 transition-colors`}>{f.icon}</div>
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
            <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-sm font-bold text-white">{i + 1}</div>
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
            <p className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-semibold">{copy.security.kicker}</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">{copy.security.title}</h3>
            <p className="mt-4 text-slate-300">{copy.security.p}</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {copy.security.bullets.map((b) => (<li key={b} className="flex items-center gap-3"><div className="rounded-full bg-amber-500/20 p-1"><Lock className="h-4 w-4 text-amber-400" /></div>{b}</li>))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3 mb-4"><Shield className="h-8 w-8 text-amber-400" /><span className="text-lg font-semibold text-white">AWS + PostgreSQL</span></div>
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
    { name: "Individual", priceMonthly: 25, priceAnnual: 20, priceYearTotal: 240, features: ["1 usuario", "Clientes y expedientes ilimitados", "Gestión de tareas y plazos", "Panel de control visual", "Soporte por email"], ctaLink: isAnnual ? URLS.plans.individual.annual : URLS.plans.individual.monthly, popular: false, note: "Funciones básicas" },
    { name: "Team", priceMonthly: 180, priceAnnual: 144, priceYearTotal: 1728, subtext: "Hasta 10 usuarios", features: ["Todo de Individual +", "Seguimiento automático del PJF", "Cálculo de plazos SAT/TFJA", "Monitor del DOF", "Chatbot fiscal con IA", "Generación de escritos con IA", "Soporte prioritario"], ctaLink: isAnnual ? URLS.plans.team.annual : URLS.plans.team.monthly, popular: true, note: "Todas las funciones fiscales" },
    { name: "Enterprise", priceMonthly: 450, priceAnnual: 360, priceYearTotal: 4320, subtext: "Hasta 30 usuarios", features: ["Todo de Team +", "Hasta 30 usuarios", "Plantillas personalizadas", "Onboarding dedicado", "Soporte telefónico"], ctaLink: isAnnual ? URLS.plans.enterprise.annual : URLS.plans.enterprise.monthly, popular: false, note: "Para despachos grandes" },
  ];
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={copy.pricing.kicker} title={copy.pricing.title} subtitle={copy.pricing.subtitle} />
      <div className="mt-8 flex items-center justify-center gap-4">
        <span className={`text-base font-semibold transition-colors ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>{copy.pricing.monthly}</span>
        <button onClick={() => setIsAnnual(!isAnnual)} className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors" style={{ background: isAnnual ? 'linear-gradient(to right, #F59E0B, #F97316)' : '#374151' }} aria-label="Toggle billing">
          <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`} />
        </button>
        <span className={`text-base font-semibold transition-colors ${isAnnual ? 'text-white' : 'text-slate-400'}`}>{copy.pricing.annual}</span>
        <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">{copy.pricing.savePercent}</span>
      </div>
      <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`relative rounded-2xl border ${p.popular ? "border-amber-500/40 ring-2 ring-amber-500/20" : "border-slate-800"} bg-slate-900/60 p-6`}>
            {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1 text-xs font-semibold text-white whitespace-nowrap">{copy.pricing.popular}</div>}
            <h3 className="text-lg sm:text-xl font-semibold text-white">{p.name}</h3>
            {p.subtext && <p className="text-sm text-slate-400">{p.subtext}</p>}
            {p.note && <p className="text-xs text-amber-400 mt-1">{p.note}</p>}
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-bold text-white">${isAnnual ? p.priceAnnual : p.priceMonthly}</span>
              <span className="text-slate-400">USD/mes</span>
            </div>
            {isAnnual && <div className="mt-1 text-sm text-slate-500">${p.priceYearTotal} USD/año</div>}
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {p.features.map((f) => (<li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" /> {f}</li>))}
            </ul>
            <div className="mt-6">
              <a href={p.ctaLink} className={`inline-block w-full text-center rounded-2xl px-5 py-3 font-semibold transition-all ${p.popular ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-400 hover:to-orange-400" : "border border-slate-700 text-slate-200 hover:border-amber-500/50 hover:bg-amber-500/10"}`}>Comenzar</a>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-amber-400 font-medium">{copy.pricing.note}</p>
        <p className="mt-2 text-sm text-slate-400">{copy.pricing.trial}</p>
      </div>
    </section>
  );
}

function BetaBenefits() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-semibold">{copy.beta.kicker}</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">{copy.beta.title}</h3>
            <p className="mt-4 text-slate-300">{copy.beta.subtitle}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.beta.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <div className="rounded-full bg-amber-500/20 p-1.5"><Zap className="h-4 w-4 text-amber-400" /></div>
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
              <ArrowRight className={`h-4 w-4 text-amber-400 transition-transform flex-shrink-0 ${open === i ? "rotate-90" : ""}`} />
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
          <input type="hidden" name="source" value="landing-fiscalistas" />
          <div className="grid gap-4">
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.name}</label><input name="name" required className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" /></div>
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.email}</label><input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" /></div>
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.firm}</label><input name="firm" className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" /></div>
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.message}</label><textarea name="message" rows={3} className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" /></div>
          </div>
          <button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold text-white hover:from-amber-400 hover:to-orange-400 transition-all"><Send className="h-4 w-4" /> {copy.contact.send}</button>
        </form>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4"><Scale className="h-8 w-8 text-amber-400" /></div>
          <p className="text-slate-300 mb-4">{copy.contact.or}</p>
          <a href={URLS.typeform} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-6 py-3 text-amber-300 hover:bg-amber-500/20 font-semibold transition-colors">{copy.contact.typeform}</a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-8 sm:p-12 text-center">
        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full blur-3xl sm:h-72 sm:w-72" style={{ background: "radial-gradient(closest-side, #F59E0B33 0%, transparent 70%)" }} />
        <div className="relative">
          <h3 className="text-2xl sm:text-4xl font-bold text-white">{copy.cta.title}</h3>
          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">{copy.cta.p}</p>
          <div className="mt-8"><a href={URLS.register} className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-lg font-semibold text-white transition hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/25 inline-block">{copy.cta.demo}</a></div>
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
            <Link href="/" className="hover:text-white">{copy.footer.pages[0]}</Link>
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

export default function LandingFiscalistas() {
  return (
    <>
      <ThreeBackgroundClient />
      <div className="relative z-10 min-h-screen text-slate-100 antialiased">
      <Navbar />
      <Hero />
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
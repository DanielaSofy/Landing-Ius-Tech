"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThreeBackgroundClient from "@/components/ThreeBackgroundClient";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, CheckCircle2, FileText, CalendarDays, Lock,
  Clock, Folder, Send, Menu, X,
  Bell, Users, Shield, AlertTriangle, Coffee, 
  LayoutDashboard, Link2, Zap, Upload, Building2, Briefcase,
  Eye, FileCheck, ClipboardList, UserCheck
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
    badge: "🏢 PARA ABOGADOS IN-HOUSE",
    title: "Deja de perseguir información y enfócate en lo estratégico",
    subtitle: "Gestión de tareas, vigilancia de litigios externos, control de vencimientos de contratos y requerimientos fiscales. Todo en un solo lugar, sin juntas de status innecesarias.",
    cta1: "Comenzar gratis",
    cta2: "Ver cómo funciona",
    bullets: [
      "Ve qué hace tu equipo sin preguntar",
      "Controla litigios externos sin llamar al despacho",
      "Alertas de vencimientos automáticas"
    ],
  },
  pain: {
    kicker: "¿TE SUENA FAMILIAR?",
    title: "El día a día de un abogado in-house",
    items: [
      { icon: <Clock className="w-6 h-6" />, title: "Juntas de status los lunes", text: "Una hora preguntando '¿en qué vas?' a cada miembro del equipo. Información que podrías tener en un dashboard." },
      { icon: <AlertTriangle className="w-6 h-6" />, title: "Contratos que se vencen sin aviso", text: "Te enteras que un contrato importante venció cuando el proveedor ya dejó de dar servicio." },
      { icon: <Coffee className="w-6 h-6" />, title: "Llamando al despacho externo", text: "'¿Ya contestaron la demanda?' '¿Cuándo es la audiencia?' Información que deberías tener sin preguntar." },
      { icon: <Users className="w-6 h-6" />, title: "Requerimientos fiscales sorpresa", text: "Llega un requerimiento del SAT y nadie sabe dónde está la documentación ni cuándo vence el plazo." },
    ],
  },
  value: {
    kicker: "LA SOLUCIÓN",
    title: "Control total sin micromanagement",
    subtitle: "Tu equipo actualiza sus tareas. El sistema te muestra el estatus. Tú supervisas sin interrumpir. Todos ganan.",
  },
  features: {
    kicker: "FUNCIONES PARA IN-HOUSE",
    title: "Diseñado para equipos legales corporativos",
    subtitle: "Estas funciones resuelven los problemas específicos de un departamento legal interno:",
  },
  how: {
    kicker: "ASÍ DE FÁCIL",
    title: "De caos a control en una semana",
    steps: [
      { title: "Sube tu información", text: "Importa contratos, proveedores, litigios desde Excel. El sistema detecta las columnas automáticamente." },
      { title: "Asigna y organiza", text: "Crea tareas, asígnalas a tu equipo, pon fechas límite. El sistema manda recordatorios automáticos." },
      { title: "El dashboard trabaja", text: "Ve de un vistazo qué está pendiente, qué vence esta semana, quién está saturado. Sin preguntar." },
      { title: "Reporta sin esfuerzo", text: "Genera reportes para dirección con un clic. En el formato que ellos entienden." },
    ],
  },
  security: {
    kicker: "Seguridad",
    title: "Información corporativa protegida",
    p: "Contratos, litigios, información de proveedores. Todo encriptado y aislado. Cumplimos con estándares de seguridad corporativa.",
    bullets: ["Aislamiento total por empresa", "Backups automáticos diarios", "Hospedado en AWS (Amazon)"],
  },
  pricing: {
    kicker: "PRECIOS PARA EQUIPOS",
    title: "Menos de lo que cuesta una junta de status",
    subtitle: "El plan Team es ideal para departamentos legales",
    monthly: "Mensual",
    annual: "Anual",
    savePercent: "Ahorra 20%",
    popular: "Ideal para in-house",
    note: "Todos los planes incluyen 14 días de prueba gratis",
    trial: "14 días gratis • Sin tarjeta • Cancela cuando quieras",
  },
  beta: {
    kicker: "ACCESO ANTICIPADO",
    title: "Sé de los primeros equipos in-house",
    subtitle: "Estamos en fase beta. Los primeros equipos obtienen beneficios exclusivos:",
    benefits: [
      "30 días gratis para probar con tu equipo",
      "Precio congelado de por vida",
      "Onboarding personalizado",
      "Tus sugerencias se implementan primero",
    ],
  },
  faq: {
    kicker: "PREGUNTAS DE IN-HOUSE",
    title: "Lo que necesitas saber",
    items: [
      { q: "¿Mi equipo puede ver las tareas de otros?", a: "Tú decides. Puedes configurar que cada quien vea solo sus tareas, o que todos vean todo. Lo que funcione para tu equipo." },
      { q: "¿Puedo dar seguimiento a litigios que lleva un despacho externo?", a: "Sí. Creas el expediente, lo marcas como 'externo' y agregas los acontecimientos. El sistema calcula plazos y te avisa de vencimientos." },
      { q: "¿Sirve para contratos, no solo litigios?", a: "Sí. Puedes registrar contratos como 'expedientes' con fecha de vencimiento. El sistema te avisa antes de que venzan para renovar o renegociar." },
      { q: "¿Puedo diferenciar entre clientes internos y proveedores?", a: "Sí. Hay un botón para marcar si es cliente o proveedor. Útil para filtrar y reportar por tipo." },
      { q: "¿Qué pasa con requerimientos fiscales?", a: "Puedes registrarlos como expedientes con plazos. El sistema calcula días hábiles del SAT y te manda recordatorios. Sin necesidad de contratar un fiscalista para cosas simples." },
      { q: "¿Puedo generar reportes para dirección?", a: "Sí. Con un clic generas reportes de estatus, carga de trabajo por persona, vencimientos próximos. En formato que dirección entiende." },
    ],
  },
  contact: {
    kicker: "EMPIEZA HOY",
    title: "Solicita acceso para tu equipo",
    subtitle: "Déjanos tus datos y te contactamos para configurar tu cuenta.",
    name: "Nombre completo",
    email: "Email corporativo",
    firm: "Nombre de la empresa",
    message: "¿Cuántas personas hay en tu equipo legal?",
    send: "Solicitar acceso",
    or: "o agenda una llamada de",
    typeform: "15 minutos conmigo →",
  },
  cta: { 
    title: "Recupera las horas de juntas de status", 
    p: "Tu equipo actualiza. El sistema reporta. Tú supervisas sin interrumpir.", 
    demo: "Comenzar gratis"
  },
  footer: { 
    links: ["Funciones", "Seguridad", "Precios", "FAQ"], 
    copyright: (y: number) => `© ${y} Ius-Tech — Hecho en México 🇲🇽`,
    legal: ["Términos y Condiciones", "Aviso de Privacidad"],
    pages: ["Página principal", "Para Fiscalistas"],
  },
};

const featuresData = [
  { icon: <LayoutDashboard className="w-6 h-6" />, title: "Panel de control del equipo", text: "Ve de un vistazo qué tiene cada quien, qué está atrasado, quién está saturado. Sin preguntar en juntas.", badge: "Principal", highlight: true },
  { icon: <Bell className="w-6 h-6" />, title: "Alertas de vencimientos", text: "Contratos, poderes, permisos. Configura cuántos días antes quieres el aviso. El sistema manda correos automáticos.", badge: "Principal", highlight: true },
  { icon: <Eye className="w-6 h-6" />, title: "Vigilancia de litigios externos", text: "Registra los litigios que lleva tu despacho externo. Ve el estatus sin llamarles. Te avisa de audiencias y vencimientos.", badge: "Principal", highlight: true },
  { icon: <ClipboardList className="w-6 h-6" />, title: "Gestión de tareas visual", text: "Asigna tareas a tu equipo con fechas límite. Ve en qué etapa está cada una. Colores que te dicen qué urge.", badge: null, highlight: false },
  { icon: <UserCheck className="w-6 h-6" />, title: "Clientes internos y proveedores", text: "Diferencia entre áreas internas que te piden trabajo y proveedores externos. Filtra y reporta por tipo.", badge: null, highlight: false },
  { icon: <CalendarDays className="w-6 h-6" />, title: "Recordatorios automáticos", text: "Configura quién recibe el recordatorio: tú, el responsable, todo el equipo, o alguien específico.", badge: null, highlight: false },
  { icon: <FileCheck className="w-6 h-6" />, title: "Control de contratos", text: "Registra contratos con fecha de vencimiento. El sistema te avisa antes para renovar o renegociar.", badge: null, highlight: false },
  { icon: <Briefcase className="w-6 h-6" />, title: "Respuesta a requerimientos fiscales", text: "Registra requerimientos del SAT como expedientes. El sistema calcula plazos con días hábiles correctos.", badge: "Fiscal", highlight: false },
  { icon: <Link2 className="w-6 h-6" />, title: "Todo conectado", text: "Proveedor → Contrato → Litigio → Tareas. Capturas una vez, todo se vincula automáticamente.", badge: null, highlight: false },
  { icon: <FileText className="w-6 h-6" />, title: "Plantillas de documentos", text: "Sube tus plantillas de contratos, órdenes de compra, cartas. Genera documentos con datos pre-rellenados.", badge: null, highlight: false },
  { icon: <Send className="w-6 h-6" />, title: "Reportes para dirección", text: "Genera reportes de carga de trabajo, estatus de litigios, vencimientos próximos. Con un clic.", badge: null, highlight: false },
  { icon: <Upload className="w-6 h-6" />, title: "Importación desde Excel", text: "¿Ya tienes tus contratos o proveedores en Excel? Súbelo. El sistema detecta las columnas.", badge: null, highlight: false },
];

/* =========================
   UI Components
========================= */

function GradientOrb() {
  return (
    <motion.div aria-hidden initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 1.2 }} className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl sm:h-[32rem] sm:w-[32rem]" style={{ background: "radial-gradient(closest-side, #3B82F6 0%, transparent 70%)" }} />
      <div className="absolute -bottom-40 -right-32 h-[26rem] w-[26rem] rounded-full blur-3xl sm:h-[30rem] sm:w-[30rem]" style={{ background: "radial-gradient(closest-side, #6869D8 0%, transparent 70%)" }} />
    </motion.div>
  );
}

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-400 font-semibold">{kicker}</p>
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
          <span className="hidden sm:inline-flex items-center rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">In-House</span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <a href="#features" className="text-sm text-slate-300 hover:text-white">{copy.nav.features}</a>
          <a href="#security" className="text-sm text-slate-300 hover:text-white">{copy.nav.security}</a>
          <a href="#pricing" className="text-sm text-slate-300 hover:text-white">{copy.nav.pricing}</a>
          <a href="#faq" className="text-sm text-slate-300 hover:text-white">{copy.nav.faq}</a>
          <a href={URLS.login} className="text-sm text-slate-300 hover:text-white">{copy.nav.login}</a>
          <a href={URLS.register} className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white hover:from-blue-400 hover:to-indigo-400 transition-all">
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
          <a href={URLS.register} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white w-fit">
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
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">{copy.hero.badge}</span>
        </motion.div>
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">{copy.hero.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 sm:mt-6 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto">{copy.hero.subtitle}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href={URLS.register} className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 text-center text-lg font-semibold text-white transition hover:from-blue-400 hover:to-indigo-400 shadow-lg shadow-blue-500/25">{copy.hero.cta1}</a>
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
      <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-8 sm:p-12 text-center">
        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full blur-3xl sm:h-72 sm:w-72" style={{ background: "radial-gradient(closest-side, #3B82F633 0%, transparent 70%)" }} />
        <div className="relative">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-400 font-semibold">{copy.value.kicker}</p>
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
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className={`group relative rounded-2xl border ${f.highlight ? "border-blue-500/30 bg-blue-500/5" : "border-slate-800 bg-slate-900/50"} p-5 shadow hover:border-blue-500/40 transition-colors`}>
            {f.badge && <span className={`absolute -top-2 right-4 rounded-full px-2 py-0.5 text-xs font-semibold text-white ${f.badge === "Principal" ? "bg-gradient-to-r from-blue-500 to-indigo-500" : f.badge === "Fiscal" ? "bg-gradient-to-r from-amber-500 to-orange-500" : "bg-gradient-to-r from-violet-600 to-indigo-600"}`}>{f.badge}</span>}
            <div className="flex items-center gap-3">
              <div className={`rounded-xl border p-2 ${f.highlight ? "border-blue-500/50 text-blue-400 bg-blue-500/10" : "border-slate-700 text-violet-400"} group-hover:border-blue-500/50 transition-colors`}>{f.icon}</div>
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
            <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-sm font-bold text-white">{i + 1}</div>
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
            <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-400 font-semibold">{copy.security.kicker}</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">{copy.security.title}</h3>
            <p className="mt-4 text-slate-300">{copy.security.p}</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {copy.security.bullets.map((b) => (<li key={b} className="flex items-center gap-3"><div className="rounded-full bg-blue-500/20 p-1"><Lock className="h-4 w-4 text-blue-400" /></div>{b}</li>))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3 mb-4"><Shield className="h-8 w-8 text-blue-400" /><span className="text-lg font-semibold text-white">AWS + PostgreSQL</span></div>
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
    { name: "Individual", priceMonthly: 25, priceAnnual: 20, priceYearTotal: 240, features: ["1 usuario", "Clientes y expedientes ilimitados", "Gestión de tareas y plazos", "Panel de control visual", "Soporte por email"], ctaLink: isAnnual ? URLS.plans.individual.annual : URLS.plans.individual.monthly, popular: false, note: "Para abogado solo" },
    { name: "Team", priceMonthly: 180, priceAnnual: 144, priceYearTotal: 1728, subtext: "Hasta 10 usuarios", features: ["Todo de Individual +", "Hasta 10 usuarios", "Vista de equipo completa", "Alertas de vencimientos", "Vigilancia de litigios externos", "Clientes vs proveedores", "Soporte prioritario"], ctaLink: isAnnual ? URLS.plans.team.annual : URLS.plans.team.monthly, popular: true, note: "Ideal para departamentos legales" },
    { name: "Enterprise", priceMonthly: 450, priceAnnual: 360, priceYearTotal: 4320, subtext: "Hasta 30 usuarios", features: ["Todo de Team +", "Hasta 30 usuarios", "Plantillas personalizadas", "Onboarding dedicado", "Soporte telefónico"], ctaLink: isAnnual ? URLS.plans.enterprise.annual : URLS.plans.enterprise.monthly, popular: false, note: "Para equipos grandes" },
  ];
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeader kicker={copy.pricing.kicker} title={copy.pricing.title} subtitle={copy.pricing.subtitle} />
      <div className="mt-8 flex items-center justify-center gap-4">
        <span className={`text-base font-semibold transition-colors ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>{copy.pricing.monthly}</span>
        <button onClick={() => setIsAnnual(!isAnnual)} className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors" style={{ background: isAnnual ? 'linear-gradient(to right, #3B82F6, #6366F1)' : '#374151' }} aria-label="Toggle billing">
          <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`} />
        </button>
        <span className={`text-base font-semibold transition-colors ${isAnnual ? 'text-white' : 'text-slate-400'}`}>{copy.pricing.annual}</span>
        <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">{copy.pricing.savePercent}</span>
      </div>
      <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`relative rounded-2xl border ${p.popular ? "border-blue-500/40 ring-2 ring-blue-500/20" : "border-slate-800"} bg-slate-900/60 p-6`}>
            {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-1 text-xs font-semibold text-white whitespace-nowrap">{copy.pricing.popular}</div>}
            <h3 className="text-lg sm:text-xl font-semibold text-white">{p.name}</h3>
            {p.subtext && <p className="text-sm text-slate-400">{p.subtext}</p>}
            {p.note && <p className="text-xs text-blue-400 mt-1">{p.note}</p>}
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-bold text-white">${isAnnual ? p.priceAnnual : p.priceMonthly}</span>
              <span className="text-slate-400">USD/mes</span>
            </div>
            {isAnnual && <div className="mt-1 text-sm text-slate-500">${p.priceYearTotal} USD/año</div>}
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {p.features.map((f) => (<li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" /> {f}</li>))}
            </ul>
            <div className="mt-6">
              <a href={p.ctaLink} className={`inline-block w-full text-center rounded-2xl px-5 py-3 font-semibold transition-all ${p.popular ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-400 hover:to-indigo-400" : "border border-slate-700 text-slate-200 hover:border-blue-500/50 hover:bg-blue-500/10"}`}>Comenzar</a>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-blue-400 font-medium">{copy.pricing.note}</p>
        <p className="mt-2 text-sm text-slate-400">{copy.pricing.trial}</p>
      </div>
    </section>
  );
}

function BetaBenefits() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-400 font-semibold">{copy.beta.kicker}</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">{copy.beta.title}</h3>
            <p className="mt-4 text-slate-300">{copy.beta.subtitle}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.beta.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <div className="rounded-full bg-blue-500/20 p-1.5"><Zap className="h-4 w-4 text-blue-400" /></div>
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
              <ArrowRight className={`h-4 w-4 text-blue-400 transition-transform flex-shrink-0 ${open === i ? "rotate-90" : ""}`} />
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
          <input type="hidden" name="source" value="landing-in-house" />
          <div className="grid gap-4">
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.name}</label><input name="name" required className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" /></div>
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.email}</label><input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" /></div>
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.firm}</label><input name="firm" className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" /></div>
            <div><label className="text-sm text-slate-300 font-medium">{copy.contact.message}</label><textarea name="message" rows={3} className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" /></div>
          </div>
          <button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 font-semibold text-white hover:from-blue-400 hover:to-indigo-400 transition-all"><Send className="h-4 w-4" /> {copy.contact.send}</button>
        </form>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4"><Building2 className="h-8 w-8 text-blue-400" /></div>
          <p className="text-slate-300 mb-4">{copy.contact.or}</p>
          <a href={URLS.typeform} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-blue-300 hover:bg-blue-500/20 font-semibold transition-colors">{copy.contact.typeform}</a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-8 sm:p-12 text-center">
        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full blur-3xl sm:h-72 sm:w-72" style={{ background: "radial-gradient(closest-side, #3B82F633 0%, transparent 70%)" }} />
        <div className="relative">
          <h3 className="text-2xl sm:text-4xl font-bold text-white">{copy.cta.title}</h3>
          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">{copy.cta.p}</p>
          <div className="mt-8"><a href={URLS.register} className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 text-lg font-semibold text-white transition hover:from-blue-400 hover:to-indigo-400 shadow-lg shadow-blue-500/25 inline-block">{copy.cta.demo}</a></div>
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
            <Link href="/fiscalistas" className="hover:text-white">{copy.footer.pages[1]}</Link>
            <span className="text-slate-600">|</span>
            <a href={URLS.legal.terms} className="hover:text-white">{copy.footer.legal[0]}</a>
            <a href={URLS.legal.privacy} className="hover:text-white">{copy.footer.legal[1]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingInHouse() {
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
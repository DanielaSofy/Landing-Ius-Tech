import type { FaqItem } from "./data";

export const HOME_FAQ: FaqItem[] = [
  {
    q: "¿Qué es Ius-Tech?",
    a: "Ius-Tech es una plataforma mexicana de gestión legal para abogados. Organiza expedientes, calcula plazos considerando los días inhábiles del SAT y del TFJA, da seguimiento automático a expedientes del PJF, genera escritos con IA y produce reportes de estatus en lenguaje claro. Funciona en el navegador, sin instalar nada.",
  },
  {
    q: "¿Para qué tipo de abogado sirve?",
    a: "Para cualquier abogado o equipo legal en México. Las funciones generales (expedientes, tareas, plazos, reportes) sirven a cualquier práctica. Además hay módulos especializados para litigio fiscal (plazos SAT/TFJA, PJF, DOF) y para equipos in-house (litigios externos, contratos, requerimientos).",
  },
  {
    q: "¿Los documentos los redacta la inteligencia artificial?",
    a: "Las plantillas base las estructuraron abogados, no un modelo de lenguaje. La IA integra los datos de tu expediente en esa estructura y te entrega un borrador. Tú lo revisas y lo apruebas: nada se presenta ni se envía sin tu visto bueno.",
  },
  {
    q: "¿Puedo importar mis expedientes actuales?",
    a: "Sí. Subes tu archivo de Excel con clientes o expedientes y el sistema detecta qué columna corresponde a qué campo. No necesitas darle un formato especial ni capturar de nuevo.",
  },
  {
    q: "¿Qué tan difícil es de usar?",
    a: "Si usas Excel y correo electrónico, puedes usar Ius-Tech. No requiere instalación, capacitación técnica ni personal de sistemas. La mayoría de los usuarios importa su cartera y agenda sus primeros plazos el mismo día.",
  },
  {
    q: "¿Cuánto cuesta Ius-Tech?",
    a: "El plan Individual cuesta 25 USD al mes (20 USD con facturación anual). El plan Team, con todas las funciones fiscales y hasta 10 usuarios, cuesta 180 USD al mes (144 USD con facturación anual). El plan Enterprise, hasta 30 usuarios, cuesta 450 USD al mes (360 USD con facturación anual). Todos incluyen 14 días de prueba sin tarjeta.",
  },
  {
    q: "¿Dónde se guarda mi información?",
    a: "En infraestructura de AWS, con cifrado AES-256 en reposo y TLS 1.3 en tránsito. Cada despacho opera en un espacio aislado y hay respaldos automáticos diarios.",
  },
  {
    q: "¿Qué pasa si no me convence?",
    a: "Tienes 14 días de prueba sin tarjeta y sin permanencia. Si no te sirve, cancelas desde tu cuenta y no se te cobra nada.",
  },
];

export const FISCALISTAS_FAQ: FaqItem[] = [
  {
    q: "¿Realmente calcula bien los plazos del SAT y del TFJA?",
    a: "Sí. El sistema tiene configurados los calendarios de días inhábiles de cada autoridad y calcula el vencimiento considerando ambos. Cada cálculo muestra su fundamento legal, para que puedas verificarlo y citarlo en tu control interno.",
  },
  {
    q: "¿Cómo funciona el seguimiento del PJF?",
    a: "Registras el número de expediente y el órgano jurisdiccional. Ius-Tech revisa el portal del Poder Judicial de la Federación todos los días y te notifica por correo cuando aparece un acuerdo o resolución nueva. Dejas de entrar al portal expediente por expediente.",
  },
  {
    q: "¿La IA entiende derecho fiscal mexicano?",
    a: "Los generadores están construidos con terminología fiscal mexicana: estructura de recursos de revocación, demandas de nulidad y promociones ante el TFJA. No es un chat genérico; las plantillas las estructuraron fiscalistas y la IA solo las llena con los datos de tu expediente.",
  },
  {
    q: "¿Puedo generar recursos de revocación completos?",
    a: "El sistema te hace preguntas sobre el caso (autoridad, acto impugnado, agravios) y genera un borrador con antecedentes, agravios, pruebas y puntos petitorios. Tú revisas, ajustas el criterio jurídico y decides qué se presenta.",
  },
  {
    q: "¿Qué gano con los asuntos pequeños que hoy rechazo?",
    a: "Tiempo. Un escrito que te tomaba dos horas sale en 15 minutos de revisión, así que los asuntos de honorarios bajos vuelven a ser rentables en lugar de un estorbo.",
  },
  {
    q: "¿Quién está detrás de Ius-Tech?",
    a: "Una abogada fiscalista mexicana en ejercicio, que construyó la herramienta que quería usar en su propia práctica. En acceso anticipado, los usuarios hablan directo con ella: los reportes de errores y las sugerencias no pasan por un call center.",
  },
];

export const INHOUSE_FAQ: FaqItem[] = [
  {
    q: "¿Mi equipo puede ver las tareas de los demás?",
    a: "Tú decides. Puedes configurar que cada quien vea solo lo suyo o que todo el equipo vea todo. El panel de carga de trabajo te muestra quién tiene qué, sin necesidad de preguntar en juntas.",
  },
  {
    q: "¿Puedo dar seguimiento a litigios que lleva un despacho externo?",
    a: "Sí. Registras el expediente, lo marcas como externo y capturas los acontecimientos. El sistema calcula plazos, te avisa de audiencias y vencimientos, y te da el estatus sin llamar al despacho.",
  },
  {
    q: "¿Sirve para contratos, no solo litigios?",
    a: "Sí. Registras contratos con su fecha de vencimiento y el sistema te avisa con la anticipación que definas, para renovar o renegociar a tiempo. Lo mismo aplica a poderes y permisos.",
  },
  {
    q: "¿Qué pasa con los requerimientos del SAT?",
    a: "Los registras como expedientes con plazo. El sistema calcula los días hábiles considerando el calendario del SAT y manda recordatorios automáticos a quien tú definas, antes de que el plazo venza.",
  },
  {
    q: "¿Puedo generar reportes para la dirección?",
    a: "Sí. Con un clic generas reportes de estatus de litigios, carga de trabajo por persona y vencimientos próximos, en un formato pensado para lectores no abogados.",
  },
  {
    q: "¿Cuánto cuesta para un equipo?",
    a: "El plan Team cubre hasta 10 usuarios por 180 USD al mes (144 USD con facturación anual) e incluye todas las funciones. Para equipos de hasta 30 personas, el plan Enterprise cuesta 450 USD al mes (360 USD con facturación anual) e incluye onboarding dedicado.",
  },
];

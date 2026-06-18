// Core Data for archibelardo.ai - Gestión documental firme por la patria

export interface ProblemCard {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export interface CapacityCard {
  id: string;
  icon: string;
  title: string;
  action: string;
  desc: string;
}

export interface DoctrineItem {
  id: string;
  num: string;
  title: string;
  desc: string;
}

export interface PlanItem {
  name: string;
  price: string;
  period: string;
  badge: string;
  tagline: string;
  features: string[];
  cta: string;
  primary: boolean;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatarText: string;
}

export interface MockDocument {
  id: string;
  name: string;
  type: 'pdf' | 'docx' | 'xlsx';
  initialStatus: string;
  finalStatus: string;
  patriotIndex: string;
}

export const PROBLEMS_DATA: ProblemCard[] = [
  {
    id: "prob_1",
    icon: "FileWarning",
    title: "El bucle infinito 'FINAL_v8_revisado'",
    desc: "Archivos bautizados como 'este_si_es_el_final_definitivo_v12.pdf' que ensucian la memoria de la patria y provocan tibieza cognitiva."
  },
  {
    id: "prob_2",
    icon: "Database",
    title: "Radicados atrapados en Excel 2009",
    desc: "Un libro de cálculo corrupto custodiado por un subdirector ausente que contiene la trazabilidad de toda una generación."
  },
  {
    id: "prob_3",
    icon: "HelpCircle",
    title: "La leyenda de 'eso lo tiene Jurídica'",
    desc: "El limbo burocrático donde mueren los expedientes clave, con un 0% de trazabilidad y un 100% de especulación institucional."
  },
  {
    id: "prob_4",
    icon: "Trash2",
    title: "Carpetas mofletudas y blanditas",
    desc: "Carpetas sin fuelle, desorganizadas y con nombres lacónicos como 'varios' o 'documentos_nuevos' que ofenden el decoro archivístico."
  }
];

export const CAPABILITIES_DATA: CapacityCard[] = [
  {
    id: "cap_1",
    icon: "Award",
    title: "OCR con Corbata",
    action: "Lectura Republicana",
    desc: "Reconoce caracteres en manuscritos de 1845 o PDFs borrosos, interpretando la intención con un decoro tipográfico intachable."
  },
  {
    id: "cap_2",
    icon: "Shield",
    title: "Clasificador de Folios Patriotas",
    action: "Jerarquización Decidida",
    desc: "Clasifica y divide carpetas huérfanas en sub-series institucionales con audacia patriótica, desterrando las carpetas blanditas."
  },
  {
    id: "cap_3",
    icon: "Search",
    title: "Buscador Semántico con Temple",
    action: "Indagación Con Carácter",
    desc: "Encuentra folios perdidos no por simples caracteres, sino por el honor y la dignidad del metadato contenido en su doctrina."
  },
  {
    id: "cap_4",
    icon: "FileText",
    title: "Resumen Ejecutivo sin Carreta",
    action: "Síntesis Imperativa",
    desc: "Sintetiza acuerdos bilaterales de 800 folios en tres bullets con tono imperativo, listos para la toma de decisiones firmes."
  },
  {
    id: "cap_5",
    icon: "Clock",
    title: "Alerta de Vencimiento Honorable",
    action: "Notificación Ineludible",
    desc: "Suena un clarín digital cuando un término de retención legal se aproxima, evitando la deshonra de una prescripción no deseada."
  },
  {
    id: "cap_6",
    icon: "History",
    title: "Trazabilidad hasta la última grapa",
    action: "Auditoría Perpetua",
    desc: "Registra en un ledger inmutable cada movimiento de folio, corchete o grapa virtual, neutralizando la tibieza burocrática."
  }
];

export const DOCTRINE_DATA: DoctrineItem[] = [
  {
    id: "doc_1",
    num: "I",
    title: "Ningún documento sin metadato",
    desc: "Un archivo sin metadato es como un soldado sin escarapela: vaga desamparado por el servidor sin dar cuenta de su procedencia legal."
  },
  {
    id: "doc_2",
    num: "II",
    title: "Ningún expediente sin trazabilidad",
    desc: "Toda consulta, modificación o traslado debe ser documentado con carácter, rigor técnico y un sello digital inalterable."
  },
  {
    id: "doc_3",
    num: "III",
    title: "Ningún archivo sin destino final",
    desc: "El ciclo vital del documento se respeta: transferencia o eliminación certificada. El purgatorio digital no está permitido."
  },
  {
    id: "doc_4",
    num: "IV",
    title: "Ninguna carpeta llamada 'varios'",
    desc: "Esa palabra es el refugio de los que improvisan. En archibelardo.ai, todo se bautiza bajo un estricto protocolo de clasificación."
  },
  {
    id: "doc_5",
    num: "V",
    title: "Ningún folio se queda atrás",
    desc: "Ya sea un memorando de tres renglones o un tratado tricolor de mil páginas, la IA custodia cada letra con igual celo y rigor nacional."
  }
];

export const PLANS_DATA: PlanItem[] = [
  {
    name: "Plan Folio Raso",
    price: "$0",
    period: "con juramento",
    badge: "Iniciación",
    tagline: "Para archivistas noveles decididos a erradicar la tibieza de sus ordenadores locales.",
    features: [
      "Hasta 1,000 documentos custodiados con carácter",
      "OCR básico sin desmayos tipográficos",
      "Sello digital decorativo (Marca de agua 'Solemne')",
      "Trazabilidad de hasta 3 grapas virtuales",
      "Búsqueda literal con paciencia patria"
    ],
    cta: "Solicitar juramento",
    primary: false
  },
  {
    name: "Plan Expediente Firme",
    price: "$299",
    period: "oro nacional / mes",
    badge: "Recomendado",
    tagline: "Para secretarías y despachos que no toleran folios huérfanos ni dobles radicados.",
    features: [
      "Hasta 50,000 folios perfectamente organizados",
      "OCR Avanzado con Corbata en manuscritos",
      "Buscador Semántico con Temple",
      "Alertas de Vencimiento Honorable automáticas",
      "Sello Imperial con código QR inviolable",
      "Trazabilidad inmutable de grapas, ganchos y folios"
    ],
    cta: "Quiero ordenar la patria",
    primary: true
  },
  {
    name: "Plan Prócer Documental",
    price: "$799",
    period: "patria o muerte / mes",
    badge: "Imperial",
    tagline: "Para Ministerios, corporaciones gloriosas y guardianes históricos del orden total.",
    features: [
      "Folios ilimitados (Espacio soberano en la nube)",
      "Resumen Ejecutivo sin Carreta multi-idioma",
      "Acompañamiento solemne de transformación documental",
      "Auditoría militar contra duplicados compulsivos",
      "Escudo imperial de encriptación patriótica",
      "IA generativa que redacta oficios de disculpa formal"
    ],
    cta: "Ascender a Prócer Archivístico",
    primary: false
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: "Dra. Foliada Restrepo",
    role: "Directora de Archivos y Grapas de la República",
    quote: "Antes teníamos 18 carpetas llamadas 'FINAL DEFINITIVO'. Vivíamos en la anarquía archivística. Hoy, con archibelardo.ai, cada folio respira honor militar y metadatos limpios. He llorado de la emoción.",
    avatarText: "FR"
  },
  {
    name: "Capitán Metadato",
    role: "Comandante de Trazabilidad e Índices",
    quote: "La clasificación documental ha dejado de ser un oficio de sótano y se ha convertido en una causa de seguridad nacional. Ningún folio se escapa a mi Ledger inmutable de honor.",
    avatarText: "CM"
  },
  {
    name: "Lic. Radicado Bermúdez",
    role: "Prócer de la Radicación Definitiva",
    quote: "Con el OCR con Corbata, encontramos un acta perdida de 2012 que resolvía el dilema de las papelerías estatales. Su búsqueda semántica con temple no tiene rival en Occidente.",
    avatarText: "RB"
  }
];

export const MOCK_DOCUMENTS: MockDocument[] = [
  {
    id: "FAC-984_patriota",
    name: "Contrato de prestación de servicios con honor.pdf",
    type: "pdf",
    initialStatus: "En revisión (Tibio)",
    finalStatus: "Custodiado e Inmortalizado",
    patriotIndex: "9.8"
  },
  {
    id: "ACT-002_solemne",
    name: "Acta de comité extraordinario y solemne.docx",
    type: "docx",
    initialStatus: "Metadatos Huérfanos",
    finalStatus: "Radicado con Decoro",
    patriotIndex: "10.0"
  },
  {
    id: "REP-431_v8_FINAL",
    name: "Resolución definitiva final finalísima de verdad v12.pdf",
    type: "pdf",
    initialStatus: "Tibio / Duplicado Compulsivo",
    finalStatus: "Defendido y Depurado",
    patriotIndex: "9.9"
  },
  {
    id: "INV-2026_firme",
    name: "Inventario documental patriótico de herraduras.xlsx",
    type: "xlsx",
    initialStatus: "Tabla sin ordenar",
    finalStatus: "Clasificado con Sello Imperial",
    patriotIndex: "9.7"
  }
];

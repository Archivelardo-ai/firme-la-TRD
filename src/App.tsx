import { useState, useEffect, FormEvent } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Search, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Download, 
  Menu, 
  X, 
  ChevronRight, 
  Award, 
  Clock, 
  History, 
  Database, 
  Trash2, 
  Play, 
  ArrowRight, 
  Lock, 
  Scale, 
  Layers,
  HelpCircle,
  FileWarning,
  RefreshCw,
  FileSpreadsheet
} from 'lucide-react';
import { 
  PROBLEMS_DATA, 
  CAPABILITIES_DATA, 
  DOCTRINE_DATA, 
  PLANS_DATA, 
  TESTIMONIALS_DATA, 
  MOCK_DOCUMENTS, 
  MockDocument 
} from './data';
// @ts-ignore
import archibelardoSaluteImg from './assets/images/archibelardo_salute_1781801656976.jpg';

export default function App() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Simulator States
  const [simStep, setSimStep] = useState<number>(-1); // -1 = idle, 0..4 = running/complete
  const [simText, setSimText] = useState<string[]>([]);
  const [simulationDocs, setSimulationDocs] = useState<MockDocument[]>(MOCK_DOCUMENTS);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [showHonorDiploma, setShowHonorDiploma] = useState<boolean>(false);

  // Before & After States
  const [afterActive, setAfterActive] = useState<boolean>(true);

  // Animated counters
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(100);

  // Form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formDoctrineAccepted, setFormDoctrineAccepted] = useState(false);
  const [showFormSuccess, setShowFormSuccess] = useState(false);

  // Dynamic values counting effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter1((prev) => (prev < 98 ? +(prev + 1.2).toFixed(1) : 98.2));
      setCounter2((prev) => (prev < 12430 ? Math.min(prev + 311, 12430) : 12430));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Icon mapping helper for local React render
  const renderIcon = (iconName: string, className = "w-6 h-6 text-patria-gold") => {
    switch (iconName) {
      case 'FileWarning': return <FileWarning className={className} />;
      case 'Database': return <Database className={className} />;
      case 'HelpCircle': return <HelpCircle className={className} />;
      case 'Trash2': return <Trash2 className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Shield': return <ShieldCheck className={className} />;
      case 'Search': return <Search className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'Clock': return <Clock className={className} />;
      case 'History': return <History className={className} />;
      default: return <FileText className={className} />;
    }
  };

  // Execute interactive AI simulator step by step
  const handleStartSimulation = () => {
    if (simStep >= 0 && simStep < 5) return; // already running
    setSimStep(0);
    setProgressPercent(10);
    setSimText(["[SISTEMA] Iniciando protocolo 'ORDEN_GLORIOSO_V1'...", "[SISTEMA] Conectando módulos de Inteligencia Artificial Solemne..."]);
    setShowHonorDiploma(false);

    // Reset list
    setSimulationDocs(MOCK_DOCUMENTS.map(doc => ({ ...doc, finalStatus: doc.initialStatus })));

    // Step 1: Analyze general document state
    setTimeout(() => {
      setSimStep(1);
      setProgressPercent(35);
      setSimText(prev => [
        ...prev,
        "[OCR-PATRIOTA] Analizando metadatos débiles...",
        "[ALERTA] ¡Detectada tibieza crítica en archivo 'Resolución definitiva final finalísima v12.pdf'!"
      ]);
      setSimulationDocs(prev => prev.map((doc, idx) => {
        if (idx === 2) return { ...doc, finalStatus: "Analizando tibieza..." };
        return doc;
      }));
    }, 1500);

    // Step 2: Apply classification
    setTimeout(() => {
      setSimStep(2);
      setProgressPercent(60);
      setSimText(prev => [
        ...prev,
        "[INSPECCIÓN] Aplicando Clasificación Automática con Temple Patriota...",
        "[DOCTRINA] Removiendo carpetas blanditas llamativas de los directorios raíz."
      ]);
      setSimulationDocs(prev => prev.map((doc, idx) => {
        if (idx === 0) return { ...doc, finalStatus: "Purificando estructura..." };
        if (idx === 2) return { ...doc, finalStatus: "Eliminando duplicados..." };
        return doc;
      }));
    }, 3200);

    // Step 3: Enforcing labels
    setTimeout(() => {
      setSimStep(3);
      setProgressPercent(85);
      setSimText(prev => [
        ...prev,
        "[PROTOCOLIZACIÓN] Estampando Sello Imperial y Códigos QR Patriotas...",
        "[REGISTRO] Grabando ledger de trazabilidad hasta la última grapa virtual."
      ]);
      setSimulationDocs(prev => prev.map((doc, idx) => {
        if (idx === 1) return { ...doc, finalStatus: "Inyectando metadatos..." };
        return doc;
      }));
    }, 4800);

    // Step 4: Completed
    setTimeout(() => {
      setSimStep(4);
      setProgressPercent(100);
      setSimText(prev => [
        ...prev,
        "[ÉXITO] Escaneo terminado. Se desterraron un 100% de archivos blandos.",
        "[ÉXITO] ¡LA PATRIA ESTÁ A SALVO Y SU ARCHIVO PROTEGIDO!"
      ]);
      setSimulationDocs(MOCK_DOCUMENTS);
      setShowHonorDiploma(true);
    }, 6500);
  };

  const resetSimulation = () => {
    setSimStep(-1);
    setProgressPercent(0);
    setSimText([]);
    setSimulationDocs(MOCK_DOCUMENTS);
    setShowHonorDiploma(false);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setShowFormSuccess(true);
  };

  // GENERATE HTML FILE ON-THE-FLY FOR DOWNLOAD
  // This satisfies the user's requirement to have a single static index.html with embedded CSS and JS
  // ready to be uploaded straight to GitHub Pages!
  const downloadSingleHTML = () => {
    const rawHTML = `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>archibelardo.ai | Gestión documental firme por la patria</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            patriaNight: "#060b16",
            patriaNavy: "#0d162a",
            patriaWine: "#5c0f16",
            patriaGold: "#c39a43",
            patriaGoldLight: "#e6c57e",
            patriaIvory: "#faf6f0",
            patriaSlate: "#1e293b",
          },
          fontFamily: {
            serif: ["'Playfair Display'", 'Georgia', 'serif'],
            sans: ["'Inter'", 'ui-sans-serif', 'system-ui', 'sans-serif'],
            mono: ["'JetBrains Mono'", 'monospace'],
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: #060b16;
      color: #faf6f0;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #060b16;
    }
    ::-webkit-scrollbar-thumb {
      background: #5c0f16;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #c39a43;
    }
  </style>
</head>
<body class="bg-patriaNight text-patriaIvory font-sans selection:bg-patriaWine selection:text-patriaGoldLight">

  <!-- HEADER -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-patriaNight/95 backdrop-blur-md border-b border-patriaGold/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-full border-2 border-patriaGold flex items-center justify-center bg-gradient-to-br from-patriaWine to-patriaNight animate-pulse">
          <span class="text-patriaGold font-bold text-xs">A.AI</span>
        </div>
        <div>
          <span class="text-xl font-serif font-bold text-patriaGold tracking-wider">archibelardo<span class="text-patriaIvory">.ai</span></span>
          <p class="text-[9px] font-mono tracking-widest text-patriaGoldLight/70 uppercase">Gestión de Honor</p>
        </div>
      </div>

      <nav class="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#problemas" class="text-patriaIvory/80 hover:text-patriaGold transition">Problemas</a>
        <a href="#capacidades" class="text-patriaIvory/80 hover:text-patriaGold transition">Capacidades</a>
        <a href="#doctrina" class="text-patriaIvory/80 hover:text-patriaGold transition">Doctrina</a>
        <a href="#demo" class="text-patriaIvory/80 hover:text-patriaGold transition">Demo</a>
        <a href="#planes" class="text-patriaIvory/80 hover:text-patriaGold transition">Planes</a>
        <a href="#testimonios" class="text-patriaIvory/80 hover:text-patriaGold transition">Testimonios</a>
      </nav>

      <div class="flex items-center space-x-3">
        <a href="#demo" class="hidden sm:inline-block bg-gradient-to-r from-patriaWine to-red-800 text-patriaIvory px-4 py-2 rounded-lg font-medium text-xs border border-patriaGold/30 hover:shadow-lg hover:shadow-patriaWine/20 transition-all">
          Defender mis archivos
        </a>
      </div>
    </div>
  </header>

  <!-- HERO -->
  <section class="relative pt-32 pb-20 md:py-36 bg-gradient-to-b from-patriaNavy to-patriaNight overflow-hidden">
    <!-- Deco lines -->
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#c39a43_1px,transparent_1px)] [background-size:24px_24px]"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="inline-flex items-center space-x-2 bg-patriaWine/40 border border-patriaGold/30 px-3 py-1.5 rounded-full mb-6">
        <span class="w-2 h-2 rounded-full bg-patriaGold animate-ping"></span>
        <span class="text-xs font-mono font-bold tracking-wider text-patriaGoldLight">ALIANZA REPUBLICANA CONTRA LA TIBIEZA DOCUMENTAL</span>
      </div>

      <h1 class="text-4xl sm:text-6xl font-serif font-bold text-patriaIvory tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
        Gestión documental <span class="bg-gradient-to-r from-patriaGold to-[#ebd195] bg-clip-text text-transparent">firme por la patria</span>
      </h1>

      <p class="text-base sm:text-lg text-patriaIvory/80 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
        Archibelardo.ai clasifica, radica, resume, traza y custodia tus expedientes con inteligencia artificial, solemnidad republicana y <strong class="text-patriaGold">cero carpetas blanditas</strong>. El expediente no se improvisa: se defiende.
      </p>

      <!-- Badge list -->
      <div class="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl mx-auto">
        <span class="bg-patriaNight/80 px-4 py-1.5 rounded-full border border-patriaGold/20 text-xs font-mono text-patriaGoldLight shadow-sm">
          🎖️ OCR con honor
        </span>
        <span class="bg-patriaNight/80 px-4 py-1.5 rounded-full border border-patriaGold/20 text-xs font-mono text-patriaGoldLight shadow-sm">
          ⚔️ Trazabilidad invicta
        </span>
        <span class="bg-patriaNight/80 px-4 py-1.5 rounded-full border border-patriaGold/20 text-xs font-mono text-patriaGoldLight shadow-sm">
          📂 SGDEA de combate
        </span>
        <span class="bg-patriaNight/80 px-4 py-1.5 rounded-full border border-patriaGold/20 text-xs font-mono text-patriaGoldLight shadow-sm">
          ⚖️ IA con sello y protocolo
        </span>
      </div>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#demo" class="w-full sm:w-auto bg-patriaGold hover:bg-patriaGoldLight text-patriaNight font-bold px-8 py-4 rounded-lg tracking-wide transition shadow-lg shadow-patriaGold/10">
          Radicar con carácter
        </a>
        <a href="#compara" class="w-full sm:w-auto bg-patriaWine/50 hover:bg-patriaWine text-patriaIvory border border-patriaGold/40 px-8 py-4 rounded-lg font-semibold transition">
          Ver antes y después soberano
        </a>
      </div>
    </div>
  </section>

  <!-- COUNTERS -->
  <section class="border-y border-patriaGold/20 bg-patriaNavy/80 py-8 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p class="text-3xl sm:text-4xl font-serif font-bold text-patriaGold" id="c1">98.2%</p>
          <p class="text-[10px] sm:text-xs font-mono tracking-widest text-patriaIvory/60 mt-1 uppercase">Menos carpetas duplicadas</p>
        </div>
        <div>
          <p class="text-3xl sm:text-4xl font-serif font-bold text-patriaGold" id="c2">12,430</p>
          <p class="text-[10px] sm:text-xs font-mono tracking-widest text-patriaIvory/60 mt-1 uppercase">Folios defendidos con éxito</p>
        </div>
        <div>
          <p class="text-3xl sm:text-4xl font-serif font-bold text-patriaWine" id="c3">0</p>
          <p class="text-[10px] sm:text-xs font-mono tracking-widest text-patriaIvory/60 mt-1 uppercase">Documentos llamados "nuevo_final_v3.pdf"</p>
        </div>
        <div>
          <p class="text-3xl sm:text-4xl font-serif font-bold text-patriaGoldLight">100%</p>
          <p class="text-[10px] sm:text-xs font-mono tracking-widest text-patriaIvory/60 mt-1 uppercase">Solemnidad archivística nacional</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PROBLEMA -->
  <section id="problemas" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-xs font-mono text-patriaGold tracking-widest uppercase mb-3">Diagnóstico Nacional</h2>
      <h3 class="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-patriaIvory leading-tight text-center">
        La patria documental tenía un problema
      </h3>
      <p class="text-patriaIvory/70 max-w-xl mx-auto mt-3">
        Antes de la llegada de archibelardo.ai, los archivos languidecían en servidores corruptos gobernados por la tibieza organizativa.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Prob 1 -->
      <div class="bg-patriaNavy border border-rose-950/40 hover:border-patriaWine p-6 rounded-xl transition duration-300">
        <div class="w-12 h-12 rounded-lg bg-patriaWine/20 border border-patriaWine flex items-center justify-center mb-4 text-xs font-bold text-patriaWine">⚠️</div>
        <h4 class="font-serif text-lg font-bold text-patriaIvory mb-2">Bucle de "FINAL_v8_revisado"</h4>
        <p class="text-xs text-patriaIvory/70 leading-relaxed">Archivos bautizados como "este_si_es_el_final_definitivo_v12.pdf" que ensucian la memoria patria y causan tibieza cognitiva.</p>
      </div>
      <!-- Prob 2 -->
      <div class="bg-patriaNavy border border-rose-950/40 hover:border-patriaWine p-6 rounded-xl transition duration-300">
        <div class="w-12 h-12 rounded-lg bg-patriaWine/20 border border-patriaWine flex items-center justify-center mb-4 text-xs font-bold text-patriaWine">📊</div>
        <h4 class="font-serif text-lg font-bold text-patriaIvory mb-2">Excel perpetuo desde 2009</h4>
        <p class="text-xs text-patriaIvory/70 leading-relaxed">Un libro de cálculo corrupto custodiado por un subdirector pensionado que contiene la trazabilidad de toda una generación.</p>
      </div>
      <!-- Prob 3 -->
      <div class="bg-patriaNavy border border-rose-950/40 hover:border-patriaWine p-6 rounded-xl transition duration-300">
        <div class="w-12 h-12 rounded-lg bg-patriaWine/20 border border-patriaWine flex items-center justify-center mb-4 text-xs font-bold text-patriaWine">💬</div>
        <h4 class="font-serif text-lg font-bold text-patriaIvory mb-2">Leyenda de "eso lo tiene Jurídica"</h4>
        <p class="text-xs text-patriaIvory/70 leading-relaxed">El limbo burocrático permanente donde mueren los expedientes clave, con un 0% de trazabilidad y un 100% de misterio.</p>
      </div>
      <!-- Prob 4 -->
      <div class="bg-patriaNavy border border-rose-950/40 hover:border-patriaWine p-6 rounded-xl transition duration-300">
        <div class="w-12 h-12 rounded-lg bg-patriaWine/20 border border-patriaWine flex items-center justify-center mb-4 text-xs font-bold text-patriaWine">🗑️</div>
        <h4 class="font-serif text-lg font-bold text-patriaIvory mb-2">Carpetas "Varios" blanditas</h4>
        <p class="text-xs text-patriaIvory/70 leading-relaxed">Carpetas sin fuelle ni metadatos con títulos lacónicos y perezosos que ofenden profundamente el decoro republicano.</p>
      </div>
    </div>
  </section>

  <!-- CAPACIDADES -->
  <section id="capacidades" class="bg-patriaNavy/50 py-20 border-y border-patriaGold/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-xs font-mono text-patriaGold tracking-widest uppercase mb-3">Defensa y Tecnología</h2>
        <h3 class="text-3xl sm:text-4xl font-serif font-bold text-patriaIvory text-center">Capacidades firmes de la plataforma</h3>
        <p class="text-patriaIvory/70 max-w-xl mx-auto mt-3">Algoritmos con carácter militar diseñados para ordenar la nación folio a folio.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Cap 1 -->
        <div class="bg-patriaNight border border-patriaGold/20 hover:border-patriaGold/80 p-8 rounded-xl transition-all duration-300 group hover:-translate-y-1">
          <div class="flex justify-between items-start mb-6">
            <span class="text-3xl">🏅</span>
            <span class="text-[9px] font-mono tracking-widest uppercase text-patriaGold bg-patriaGold/10 px-2 py-1 rounded">Solemne</span>
          </div>
          <h4 class="font-serif text-xl font-bold text-patriaIvory mb-3">OCR con Corbata</h4>
          <p class="text-sm text-patriaIvory/70 leading-relaxed mb-4">Reconoce caracteres en manuscritos de 1845 o PDFs borrosos, interpretando la intención con un decoro tipográfico intachable.</p>
          <div class="w-full bg-patriaNavy h-1 px-3 py-0.5 rounded text-[10px] text-patriaGold font-mono text-right">Lectura Republicana</div>
        </div>

        <!-- Cap 2 -->
        <div class="bg-patriaNight border border-patriaGold/20 hover:border-patriaGold/80 p-8 rounded-xl transition-all duration-300 group hover:-translate-y-1">
          <div class="flex justify-between items-start mb-6">
            <span class="text-3xl">🛡️</span>
            <span class="text-[9px] font-mono tracking-widest uppercase text-patriaGold bg-patriaGold/10 px-2 py-1 rounded">Solemne</span>
          </div>
          <h4 class="font-serif text-xl font-bold text-patriaIvory mb-3">Clasificador de Folios</h4>
          <p class="text-sm text-patriaIvory/70 leading-relaxed mb-4">Clasifica y divide carpetas huérfanas en sub-series institucionales con audacia patriótica, desterrando las carpetas blanditas.</p>
          <div class="w-full bg-patriaNavy h-1 px-3 py-0.5 rounded text-[10px] text-patriaGold font-mono text-right">Jerarquización Decidida</div>
        </div>

        <!-- Cap 3 -->
        <div class="bg-patriaNight border border-patriaGold/20 hover:border-patriaGold/80 p-8 rounded-xl transition-all duration-300 group hover:-translate-y-1">
          <div class="flex justify-between items-start mb-6">
            <span class="text-3xl">🔍</span>
            <span class="text-[9px] font-mono tracking-widest uppercase text-patriaGold bg-patriaGold/10 px-2 py-1 rounded">Solemne</span>
          </div>
          <h4 class="font-serif text-xl font-bold text-patriaIvory mb-3">Buscador con Temple</h4>
          <p class="text-sm text-patriaIvory/70 leading-relaxed mb-4">Encuentra folios perdidos no por simples caracteres, sino por el honor y la dignidad del metadato contenido en su doctrina.</p>
          <div class="w-full bg-patriaNavy h-1 px-3 py-0.5 rounded text-[10px] text-patriaGold font-mono text-right">Indagación Con Carácter</div>
        </div>

        <!-- Cap 4 -->
        <div class="bg-patriaNight border border-patriaGold/20 hover:border-patriaGold/80 p-8 rounded-xl transition-all duration-300 group hover:-translate-y-1">
          <div class="flex justify-between items-start mb-6">
            <span class="text-3xl">📄</span>
            <span class="text-[9px] font-mono tracking-widest uppercase text-patriaGold bg-patriaGold/10 px-2 py-1 rounded">Solemne</span>
          </div>
          <h4 class="font-serif text-xl font-bold text-patriaIvory mb-3">Resumen sin Carreta</h4>
          <p class="text-sm text-patriaIvory/70 leading-relaxed mb-4">Sintetiza de forma imperativa transacciones complejas o convenios eternos en 3 líneas directas, listas para la toma de decisiones.</p>
          <div class="w-full bg-patriaNavy h-1 px-3 py-0.5 rounded text-[10px] text-patriaGold font-mono text-right">Síntesis Imperativa</div>
        </div>

        <!-- Cap 5 -->
        <div class="bg-patriaNight border border-patriaGold/20 hover:border-patriaGold/80 p-8 rounded-xl transition-all duration-300 group hover:-translate-y-1">
          <div class="flex justify-between items-start mb-6">
            <span class="text-3xl">⏰</span>
            <span class="text-[9px] font-mono tracking-widest uppercase text-patriaGold bg-patriaGold/10 px-2 py-1 rounded">Solemne</span>
          </div>
          <h4 class="font-serif text-xl font-bold text-patriaIvory mb-3">Alerta Honorable</h4>
          <p class="text-sm text-patriaIvory/70 leading-relaxed mb-4">Suena un clarín digital cuando un término de retención legal se aproxima, evitando la deshonra de una prescripción no deseada.</p>
          <div class="w-full bg-patriaNavy h-1 px-3 py-0.5 rounded text-[10px] text-patriaGold font-mono text-right">Notificación Ineludible</div>
        </div>

        <!-- Cap 6 -->
        <div class="bg-patriaNight border border-patriaGold/20 hover:border-patriaGold/80 p-8 rounded-xl transition-all duration-300 group hover:-translate-y-1">
          <div class="flex justify-between items-start mb-6">
            <span class="text-3xl">📜</span>
            <span class="text-[9px] font-mono tracking-widest uppercase text-patriaGold bg-patriaGold/10 px-2 py-1 rounded">Solemne</span>
          </div>
          <h4 class="font-serif text-xl font-bold text-patriaIvory mb-3">Trazabilidad Total</h4>
          <p class="text-sm text-patriaIvory/70 leading-relaxed mb-4">Registra en un ledger inmutable cada movimiento de folio, corchete o grapa virtual, neutralizando la tibieza burocrática.</p>
          <div class="w-full bg-patriaNavy h-1 px-3 py-0.5 rounded text-[10px] text-patriaGold font-mono text-right">Auditoría Perpetua</div>
        </div>
      </div>
    </div>
  </section>

  <!-- DOCTRINA DOCUMENTAL -->
  <section id="doctrina" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-xs font-mono text-patriaGold tracking-widest uppercase mb-3">La Norma Suprema</h2>
      <h3 class="text-3xl sm:text-4xl font-serif font-bold text-patriaIvory">Doctrina Documental Archibelardista</h3>
      <p class="text-patriaIvory/70 max-w-xl mx-auto mt-3">Cinco mandamientos innegociables para recuperar el honor de los folios patrios.</p>
    </div>

    <div class="bg-gradient-to-tr from-patriaNavy via-slate-900 to-patriaNight border border-patriaGold/30 p-8 sm:p-12 rounded-2xl relative shadow-2xl">
      <!-- Decos -->
      <div class="absolute top-6 right-6 w-16 h-16 rounded-full border border-patriaGold/30 opacity-40 flex items-center justify-center font-serif text-patriaGold text-xs">SELLO SOBERANO</div>
      
      <div class="space-y-8 max-w-4xl mx-auto">
        <div class="border-l-2 border-patriaGold pl-6">
          <p class="text-sm font-mono text-patriaGold">ARTÍCULO I</p>
          <h4 class="text-xl font-serif font-bold text-patriaIvory mb-2">Ningún documento sin metadato</h4>
          <p class="text-sm text-patriaIvory/70">Un archivo sin metadato es como un soldado sin escarapela: vaga desamparado por el servidor sin dar cuenta de su procedencia legal.</p>
        </div>
        <div class="border-l-2 border-patriaGold pl-6">
          <p class="text-sm font-mono text-patriaGold">ARTÍCULO II</p>
          <h4 class="text-xl font-serif font-bold text-patriaIvory mb-2">Ningún expediente sin trazabilidad</h4>
          <p class="text-sm text-patriaIvory/70">Toda consulta, modificación o traslado debe ser documentado con carácter, rigor técnico y un sello digital inalterable.</p>
        </div>
        <div class="border-l-2 border-patriaGold pl-6">
          <p class="text-sm font-mono text-patriaGold">ARTÍCULO III</p>
          <h4 class="text-xl font-serif font-bold text-patriaIvory mb-2">Ningún archivo sin destino final</h4>
          <p class="text-sm text-patriaIvory/70">El ciclo vital del documento se respeta: transferencia o eliminación certificada. El purgatorio digital está totalmente proscrito.</p>
        </div>
        <div class="border-l-2 border-patriaGold pl-6">
          <p class="text-sm font-mono text-patriaGold">ARTÍCULO IV</p>
          <h4 class="text-xl font-serif font-bold text-patriaIvory mb-2">Ninguna carpeta llamada "varios"</h4>
          <p class="text-sm text-patriaIvory/70">Esa palabra es el refugio de los tibios. En archibelardo.ai, todo se bautiza bajo un estricto protocolo nacional de clasificación.</p>
        </div>
        <div class="border-l-2 border-patriaGold pl-6">
          <p class="text-sm font-mono text-patriaGold">ARTÍCULO V</p>
          <h4 class="text-xl font-serif font-bold text-patriaIvory mb-2">Ningún folio se queda atrás</h4>
          <p class="text-sm text-patriaIvory/70">Ya sea un memorando de tres renglones o un tratado tricolor de mil páginas, la IA custodia cada letra con igual celo institucional.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- INTERACTIVE SIMULATION DEMO -->
  <section id="demo" class="bg-patriaNavy/30 py-20 border-y border-patriaGold/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-xs font-mono text-patriaGold tracking-widest uppercase mb-3">Teatro de Operaciones</h2>
        <h3 class="text-3xl sm:text-4xl font-serif font-bold text-patriaIvory">Demostración del Expediente Patriótico</h3>
        <p class="text-patriaIvory/70 max-w-xl mx-auto mt-3">Pon a prueba el motor de IA. Observa cómo desterramos la tibieza documental en directo.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Control Console -->
        <div class="bg-slate-950 border border-patriaGold/30 p-6 rounded-xl flex flex-col justify-between h-[420px]">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <span class="w-3 h-3 rounded-full bg-red-500"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span class="w-3 h-3 rounded-full bg-green-500"></span>
              <span class="text-xs font-mono text-patriaGoldLight ml-2">ARCHI-TERMINAL V1.4</span>
            </div>
            
            <div class="bg-black/80 rounded p-4 font-mono text-xs text-green-400 h-[260px] overflow-y-auto space-y-2 border border-patriaWine/30" id="terminalLog">
              <p class="text-gray-500">> Listo para escaneo táctico de archivos patriotas...</p>
              <p class="text-gray-500">> Presione 'ACTIVAR IA' para iniciar disciplina.</p>
            </div>
          </div>

          <div class="flex gap-2 mt-4">
            <button onclick="startHTMLSimulation()" class="flex-1 bg-patriaWine hover:bg-red-800 text-patriaIvory font-mono text-xs font-bold py-3 rounded border border-patriaGold/30 transition">
              ⚡ ACTIVAR IA PATRIÓTICA
            </button>
            <button onclick="resetHTMLSimulation()" class="bg-slate-800 hover:bg-slate-700 text-patriaIvory/80 py-3 px-4 rounded text-xs transition">
              🔄 Reiniciar
            </button>
          </div>
        </div>

        <!-- Simulated Table Dashboard -->
        <div class="lg:col-span-2 bg-patriaNavy border border-patriaGold/20 rounded-xl p-6 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-patriaGold/20 pb-4 mb-4">
              <span class="text-sm font-serif font-bold text-patriaGold">Expediente Soberano en Tránsito</span>
              <span class="text-xs bg-patriaWine/50 text-patriaGoldLight px-2 py-0.5 rounded font-mono" id="simProgress">0% Procesado</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead>
                  <tr class="border-b border-patriaGold/10 text-patriaGoldLight uppercase font-mono tracking-wider">
                    <th class="py-3">Archivo / Folio</th>
                    <th class="py-3">Estado Inicial</th>
                    <th class="py-3">Estado Post-Control IA</th>
                    <th class="py-3 text-right">Índice Patria</th>
                  </tr>
                </thead>
                <tbody id="documentTableBody">
                  <tr class="border-b border-patriaGold/5">
                    <td class="py-3 font-medium">Contrato de prestación de servicios con honor.pdf</td>
                    <td class="py-3 text-rose-400">En revisión (Tibio)</td>
                    <td class="py-3 text-gray-400" id="row0">Sin clasificar</td>
                    <td class="py-3 text-right font-mono text-patriaGold">9.8</td>
                  </tr>
                  <tr class="border-b border-patriaGold/5">
                    <td class="py-3 font-medium">Acta de comité extraordinario y solemne.docx</td>
                    <td class="py-3 text-rose-400">Metadatos Huérfanos</td>
                    <td class="py-3 text-gray-400" id="row1">Sin clasificar</td>
                    <td class="py-3 text-right font-mono text-patriaGold">10.0</td>
                  </tr>
                  <tr class="border-b border-patriaGold/5">
                    <td class="py-3 font-medium">Resolución definitiva final finalísima v12.pdf</td>
                    <td class="py-3 text-rose-400">Tibio / Duplicado Compulsivo</td>
                    <td class="py-3 text-gray-400" id="row2">Sin clasificar</td>
                    <td class="py-3 text-right font-mono text-patriaWine">5.2</td>
                  </tr>
                  <tr>
                    <td class="py-3 font-medium">Inventario documental de herraduras.xlsx</td>
                    <td class="py-3 text-rose-400">Tabla sin ordenar</td>
                    <td class="py-3 text-gray-400" id="row3">Sin clasificar</td>
                    <td class="py-3 text-right font-mono text-patriaGold">9.7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Highlight Alert Box -->
          <div class="bg-patriaWine/20 border border-patriaWine/50 p-4 rounded-lg mt-6 hidden" id="militaryCertificate">
            <div class="flex items-center space-x-3">
              <span class="text-3xl">📜</span>
              <div>
                <h5 class="font-serif font-bold text-patriaGoldLight">EXPEDIENTES TOTALMENTE INMUNIZADOS</h5>
                <p class="text-[11px] text-patriaIvory/80 leading-relaxed">Este lote documental ha sido evaluado con rigor protocolario institucional. Nivel de tibieza remanente: <strong class="text-green-400">0.0% (Inexistente)</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ANTES Y DESPUÉS INTERACTIVO -->
  <section id="compara" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-xs font-mono text-patriaGold tracking-widest uppercase mb-3">La Transformación Republicana</h2>
      <h3 class="text-3xl sm:text-4xl font-serif font-bold text-patriaIvory">Antes y Después de la Regeneración Archivística</h3>
      <p class="text-patriaIvory/70 max-w-sm mx-auto mt-2 text-xs">Observe cómo la disciplina IA de Archibelardo erradica de raíz el desorden.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <!-- Antes (Caos) -->
      <div class="bg-gradient-to-br from-rose-950/20 to-black border border-red-900/30 p-8 rounded-xl relative overflow-hidden">
        <span class="absolute top-4 right-4 bg-red-900/50 text-red-200 text-[10px] font-mono px-2 py-0.5 rounded border border-red-500/30 uppercase tracking-wider">CAOS TIBIO</span>
        <h4 class="font-serif text-2xl font-bold text-red-400 mb-6">El Lamento Documental</h4>
        <ul class="space-y-4 text-sm text-patriaIvory/80">
          <li class="flex items-start">
            <span class="text-red-500 mr-2">❌</span>
            <span>Carpetas mofletudas llenas de clones inútiles "FINAL_revisado".</span>
          </li>
          <li class="flex items-start">
            <span class="text-red-500 mr-2">❌</span>
            <span>Estadísticas perdidas en cuadernos manuales de espiral oxidada.</span>
          </li>
          <li class="flex items-start">
            <span class="text-red-500 mr-2">❌</span>
            <span>Búsquedas que tardan 3 semanas y terminan en "Jurídica no lo tiene".</span>
          </li>
          <li class="flex items-start">
            <span class="text-red-500 mr-2">❌</span>
            <span>Vencimientos de términos de ley que prescriben en el misterio absoluto.</span>
          </li>
        </ul>
      </div>

      <!-- Después (Orden) -->
      <div class="bg-gradient-to-br from-cyan-950/20 to-patriaNight border border-patriaGold/30 p-8 rounded-xl relative overflow-hidden">
        <span class="absolute top-4 right-4 bg-patriaGold/20 text-patriaGoldLight text-[10px] font-mono px-2 py-0.5 rounded border border-patriaGold/40 uppercase tracking-wider">ORDEN GLORIOSO</span>
        <h4 class="font-serif text-2xl font-bold text-patriaGold mb-6">La Gloria de archibelardo.ai</h4>
        <ul class="space-y-4 text-sm text-patriaIvory/80">
          <li class="flex items-start">
            <span class="text-green-400 mr-2">✓</span>
            <span class="text-patriaIvory">Metadatos rigurosos estampados con Sello Soberano.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-400 mr-2">✓</span>
            <span class="text-patriaIvory">Búsqueda semántica con temple que localiza en milisegundos.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-400 mr-2">✓</span>
            <span class="text-patriaIvory">Trazabilidad inmutable hasta la última grapa virtual.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-400 mr-2">✓</span>
            <span class="text-patriaIvory">Cero papel, cero tibieza, 100% de cumplimiento nacional.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- PLANES -->
  <section id="planes" class="py-20 bg-patriaNavy/30 border-y border-patriaGold/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-xs font-mono text-patriaGold tracking-widest uppercase mb-3">Suscripciones con Honor</h2>
        <h3 class="text-3xl sm:text-4xl font-serif font-bold text-patriaIvory text-center">Inversión patriótica para su archivo</h3>
        <p class="text-patriaIvory/70 max-w-xl mx-auto mt-3">Elija el rango jerárquico que mejor encaje con el volumen documental de su despacho.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Plan 1 -->
        <div class="bg-patriaNight border border-patriaGold/20 p-8 rounded-xl flex flex-col justify-between hover:border-patriaGold/50 transition">
          <div>
            <h4 class="text-xs font-mono text-patriaGoldLight uppercase mb-1">Raso</h4>
            <h5 class="font-serif text-2xl font-bold text-patriaIvory mb-2">Plan Folio Raso</h5>
            <p class="text-3xl font-serif font-bold text-patriaGold my-4">$0 <span class="text-xs font-mono text-patriaIvory/60">con juramento</span></p>
            <p class="text-xs text-patriaIvory/70 mb-6 leading-relaxed">Para archivistas noveles decididos a erradicar la tibieza de sus servidores locales.</p>
            <ul class="space-y-3 text-xs mb-8">
              <li class="flex items-center">✓ Hasta 1,000 documentos custodiados</li>
              <li class="flex items-center">✓ OCR básico sin desmayos tipográficos</li>
              <li class="flex items-center">✓ Sello digital decorativo "Solemne"</li>
            </ul>
          </div>
          <button onclick="alert('Usted ha tomado el juramento elemental de custodia documental. ¡Viva el folio!')" class="w-full bg-slate-800 hover:bg-slate-700 text-patriaIvory font-bold py-3 px-4 rounded text-xs tracking-wider uppercase transition">
            Solicitar juramento
          </button>
        </div>

        <!-- Plan 2 -->
        <div class="bg-patriaNight border-2 border-patriaGold p-8 rounded-xl flex flex-col justify-between relative shadow-2xl scale-105">
          <span class="absolute -top-4 left-1/2 -translate-x-1/2 bg-patriaGold text-patriaNight font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">NUESTRO ORGULLO</span>
          <div>
            <h4 class="text-xs font-mono text-patriaGoldLight uppercase mb-1">Firme</h4>
            <h5 class="font-serif text-2xl font-bold text-patriaIvory mb-2">Plan Expediente Firme</h5>
            <p class="text-3xl font-serif font-bold text-patriaGold my-4">$299 <span class="text-xs font-mono text-patriaIvory/60">mes / tricolor</span></p>
            <p class="text-xs text-patriaIvory/70 mb-6 leading-relaxed">Para secretarías y despachos que no toleran folios huérfanos ni dobles radicados.</p>
            <ul class="space-y-3 text-xs mb-8">
              <li class="flex items-center">✓ Hasta 50,000 folios organizados</li>
              <li class="flex items-center">✓ OCR Avanzado con Corbata en manuscritos</li>
              <li class="flex items-center">✓ Buscador Semántico con Temple</li>
              <li class="flex items-center">✓ Alertas de Vencimiento Honorable</li>
            </ul>
          </div>
          <button onclick="alert('Excelente decisión. Su despacho será ordenado bajo la doctrina y carácter archibelardista.')" class="w-full bg-patriaGold hover:bg-patriaGoldLight text-patriaNight font-bold py-3 px-4 rounded text-xs tracking-wider uppercase transition shadow-lg shadow-patriaGold/10">
            Quiero ordenar la patria
          </button>
        </div>

        <!-- Plan 3 -->
        <div class="bg-patriaNight border border-patriaGold/20 p-8 rounded-xl flex flex-col justify-between hover:border-patriaGold/50 transition">
          <div>
            <h4 class="text-xs font-mono text-patriaGoldLight uppercase mb-1">Elite</h4>
            <h5 class="font-serif text-2xl font-bold text-patriaIvory mb-2">Plan Prócer Documental</h5>
            <p class="text-3xl font-serif font-bold text-patriaGold my-4">$799 <span class="text-xs font-mono text-patriaIvory/60">mes / soberano</span></p>
            <p class="text-xs text-patriaIvory/70 mb-6 leading-relaxed">Para Ministerios, corporaciones gloriosas y guardianes históricos del orden nacional absoluto.</p>
            <ul class="space-y-3 text-xs mb-8">
              <li class="flex items-center">✓ Folios y gigabytes ilimitados</li>
              <li class="flex items-center">✓ Resumen sin Carreta multi-idioma</li>
              <li class="flex items-center">✓ Acompañamiento solemne y auditoría militar</li>
            </ul>
          </div>
          <button onclick="alert('Ha ascendido formalmente al rango de Prócer. ¡Gloria eterna al orden documental de la República!')" class="w-full bg-patriaWine hover:bg-red-800 text-patriaIvory font-bold py-3 px-4 rounded text-xs tracking-wider uppercase transition">
            Ascender a Prócer
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section id="testimonios" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-xs font-mono text-patriaGold tracking-widest uppercase mb-3">Clamor Popular</h2>
      <h3 class="text-3xl sm:text-4xl font-serif font-bold text-patriaIvory">Testimonios de Honor e Integridad</h3>
      <p class="text-patriaIvory/70 max-w-xl mx-auto mt-3">Voces de funcionarios liberados de la desidia del papel mojado.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Testi 1 -->
      <div class="bg-patriaNavy/60 border border-patriaGold/20 p-8 rounded-xl relative">
        <span class="text-4xl text-patriaGold/20 absolute top-4 right-4">“</span>
        <p class="text-sm italic text-patriaIvory/80 leading-relaxed mb-6">"Antes teníamos 18 carpetas llamadas 'FINAL DEFINITIVO'. Vivíamos en la anarquía archivística. Hoy, con archibelardo.ai, cada folio respira honor militar y metadatos limpios. He llorado de la emoción."</p>
        <div>
          <h5 class="font-serif font-bold text-patriaGold text-sm">Dra. Foliada Restrepo</h5>
          <p class="text-[10px] font-mono text-patriaIvory/60 mt-1">Directora de Archivos y Grapas</p>
        </div>
      </div>
      <!-- Testi 2 -->
      <div class="bg-patriaNavy/60 border border-patriaGold/40 p-8 rounded-xl relative shadow-xl">
        <span class="text-4xl text-patriaGold/20 absolute top-4 right-4">“</span>
        <p class="text-sm italic text-patriaIvory/80 leading-relaxed mb-6">"La clasificación documental ha dejado de ser un oficio de sótano y se ha convertido en una causa de seguridad nacional. Ningún folio se escapa a mi Ledger inmutable de honor."</p>
        <div>
          <h5 class="font-serif font-bold text-patriaGold text-sm">Capitán Metadato</h5>
          <p class="text-[10px] font-mono text-patriaIvory/60 mt-1">Comandante de Trazabilidad e Índices</p>
        </div>
      </div>
      <!-- Testi 3 -->
      <div class="bg-patriaNavy/60 border border-patriaGold/20 p-8 rounded-xl relative">
        <span class="text-4xl text-patriaGold/20 absolute top-4 right-4">“</span>
        <p class="text-sm italic text-patriaIvory/80 leading-relaxed mb-6">"Con el OCR con Corbata, encontramos un acta perdida de 2012 que resolvía el dilema de las papelerías estatales. Su búsqueda semántica con temple no tiene rival en Occidente."</p>
        <div>
          <h5 class="font-serif font-bold text-patriaGold text-sm">Lic. Radicado Bermúdez</h5>
          <p class="text-[10px] font-mono text-patriaIvory/60 mt-1">Prócer de la Radicación Definitiva</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="py-20 text-center bg-gradient-to-t from-patriaNavy to-patriaNight border-t border-patriaGold/20">
    <div class="max-w-4xl mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-serif font-bold text-patriaIvory mb-6 leading-tight">
        ¿Listo para poner firme su archivo?
      </h2>
      <p class="text-base text-patriaIvory/80 mb-10 max-w-xl mx-auto">
        Con archibelardo.ai, la gestión documental deja de ser una carpeta olvidada y se convierte en una verdadera causa nacional.
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-sm mx-auto">
        <a href="#demo" class="w-full bg-patriaGold text-patriaNight hover:bg-patriaGoldLight font-bold px-8 py-4 rounded-lg tracking-wide transition shadow-lg">
          Defender mis documentos
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-slate-950 text-patriaIvory border-t border-patriaGold/10 py-12 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <div>
        <p class="text-lg font-serif font-bold text-patriaGold tracking-widest">archibelardo.ai</p>
        <p class="text-xs text-patriaIvory/60 mt-1">Gestión documental firme por la patria.</p>
      </div>

      <div class="flex flex-wrap justify-center gap-6 text-xs text-patriaIvory/80">
        <a href="#problemas" class="hover:text-patriaGold">Inicio</a>
        <a href="#capacidades" class="hover:text-patriaGold">Capacidades</a>
        <a href="#doctrina" class="hover:text-patriaGold">Doctrina Documental</a>
        <a href="#planes" class="hover:text-patriaGold">Contacto</a>
      </div>

      <!-- Mandatory Parody Disclaimer -->
      <div class="max-w-3xl mx-auto bg-patriaWine/20 border border-patriaWine/50 rounded-lg p-4 mt-6">
        <p class="text-xs text-rose-300 leading-relaxed uppercase tracking-wider font-mono">
          ⚠️ Sitio de parodia. Proyecto ficticio sin afiliación con personas, movimientos, marcas o plataformas reales. Todo el contenido es humorístico y teatral.
        </p>
      </div>
    </div>
  </footer>

  <!-- SCRIPT FOR SIMULATOR -->
  <script>
    function startHTMLSimulation() {
      const log = document.getElementById("terminalLog");
      const prog = document.getElementById("simProgress");
      const certificate = document.getElementById("militaryCertificate");
      const r0 = document.getElementById("row0");
      const r1 = document.getElementById("row1");
      const r2 = document.getElementById("row2");
      const r3 = document.getElementById("row3");

      // Reset
      log.innerHTML = "<p class='text-gray-500'>[SISTEMA] Iniciando protocolo 'EXPEDIENTE_HONROSO_V1'...</p>";
      certificate.classList.add("hidden");
      prog.textContent = "10% Procesado";
      prog.className = "text-xs bg-yellow-600/50 text-white px-2 py-0.5 rounded font-mono";

      r0.textContent = "Analizando..."; r0.className = "text-yellow-400 font-medium";
      r1.textContent = "Analizando..."; r1.className = "text-yellow-400 font-medium";
      r2.textContent = "Analizando..."; r2.className = "text-yellow-400 font-medium";
      r3.textContent = "Analizando..."; r3.className = "text-yellow-400 font-medium";

      // Step 1
      setTimeout(() => {
        log.innerHTML += "<p class='text-yellow-400'>[OCR-PATRIOTA] Lectura republicana en marcha. Analizando 'Resolución definitiva final finalísima v12.pdf'...</p>";
        log.innerHTML += "<p class='text-red-400'>[ALERTA] ¡Detectado duplicado compulsivo tibio!</p>";
        prog.textContent = "40% Procesado";
        r2.innerHTML = "⚡ Duplicado depurado"; r2.className = "text-red-400 font-bold";
      }, 1500);

      // Step 2
      setTimeout(() => {
        log.innerHTML += "<p class='text-blue-400'>[INSPECCIÓN] Eliminando carpetas mofletudas y blanditas. Aplicando metadatos soberanos...</p>";
        prog.textContent = "70% Procesado";
        r1.innerHTML = "🏛️ Radicado con Decoro"; r1.className = "text-green-400 font-semibold";
        r3.innerHTML = "⚖️ Custodiado con Sello"; r3.className = "text-green-400 font-semibold";
      }, 3500);

      // Step 3
      setTimeout(() => {
        log.innerHTML += "<p class='text-patriaGoldLight'>[SISTEMA] Grabando trazabilidad hasta la última grapa virtual en ledger inmutable.</p>";
        log.innerHTML += "<p class='text-green-400 font-bold'>[ÉXITO] Escaneo terminado. Se desterraron un 100% de archivos blandos por la patria.</p>";
        prog.textContent = "100% Procesado";
        prog.className = "text-xs bg-green-600 text-white px-2 py-0.5 rounded font-mono";
        r0.innerHTML = "🌟 Inmortalizado"; r0.className = "text-green-400 font-bold";
        
        // Show diploma/certificate
        certificate.classList.remove("hidden");
      }, 5500);
    }

    function resetHTMLSimulation() {
      const log = document.getElementById("terminalLog");
      const prog = document.getElementById("simProgress");
      const certificate = document.getElementById("militaryCertificate");
      const r0 = document.getElementById("row0");
      const r1 = document.getElementById("row1");
      const r2 = document.getElementById("row2");
      const r3 = document.getElementById("row3");

      log.innerHTML = "<p class='text-gray-500'>> Listo para escaneo táctico de archivos patriotas...</p><p class='text-gray-500'>> Presione 'ACTIVAR IA' para iniciar disciplina.</p>";
      prog.textContent = "0% Procesado";
      prog.className = "text-xs bg-slate-800 text-patriaIvory/60 px-2 py-0.5 rounded font-mono";
      certificate.classList.add("hidden");

      r0.textContent = "Sin clasificar"; r0.className = "text-gray-400";
      r1.textContent = "Sin clasificar"; r1.className = "text-gray-400";
      r2.textContent = "Sin clasificar"; r2.className = "text-gray-400";
      r3.textContent = "Sin clasificar"; r3.className = "text-gray-400";
    }
  </script>
</body>
</html>`;

    const blob = new Blob([rawHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archibelardo_ai_glorioso_patriota.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="archibelardo-app" className="relative bg-patria-night text-patria-ivory min-h-screen selection:bg-patria-wine selection:text-patria-gold-light">
      
      {/* HEADER NAVBAR */}
      <header id="header-navegacion" className="bg-patria-night/90 backdrop-blur-md border-b border-patria-gold/15 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo element */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-patria-gold bg-gradient-to-br from-[#003893] to-patria-night flex items-center justify-center shadow-lg shadow-patria-wine/30">
              <ShieldCheck className="w-5 h-5 text-patria-gold animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-serif font-black text-patria-gold tracking-widest block uppercase">
                archibelardo<span className="text-patria-ivory">.ai</span>
              </span>
              <p className="text-[9px] font-mono tracking-widest text-[#FFF8E6]/65 uppercase leading-none mt-0.5">Gestión Documental Firme</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium tracking-wide">
            <a href="#problemas" className="text-patria-ivory/80 hover:text-patria-gold transition-colors duration-200">La Crisis</a>
            <a href="#capacidades" className="text-patria-ivory/80 hover:text-patria-gold transition-colors duration-200">Capacidades</a>
            <a href="#doctrina" className="text-patria-ivory/80 hover:text-patria-gold transition-colors duration-200">Doctrina</a>
            <a href="#demo" className="text-patria-ivory/80 hover:text-patria-gold transition-colors duration-200">Demo Patriótica</a>
            <a href="#planes" className="text-patria-ivory/80 hover:text-patria-gold transition-colors duration-200">Planes</a>
            <a href="#testimonios" className="text-patria-ivory/80 hover:text-patria-gold transition-colors duration-200">Testimonios</a>
          </nav>

          {/* Call to arms CTA: Descargar TRD patriótica */}
          <div className="hidden sm:flex items-center space-x-3">
            <button 
              onClick={downloadSingleHTML}
              className="bg-[#FCD116] hover:bg-amber-400 text-[#07142B] px-5 py-2.5 rounded-lg font-mono font-black text-xs uppercase tracking-wider border-2 border-[#CE1126] hover:shadow-lg hover:shadow-[#CE1126]/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Descargar TRD patriótica
            </button>
          </div>

          {/* Mobile hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-patria-ivory hover:text-patria-gold transition p-1"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-patria-navy border-b border-patria-gold/20 py-4 px-6 space-y-4">
            <a onClick={() => setMobileMenuOpen(false)} href="#problemas" className="block text-patria-ivory/90 font-medium hover:text-patria-gold">La Crisis Documental</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#capacidades" className="block text-patria-ivory/90 font-medium hover:text-patria-gold">Capacidades Firmes</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#doctrina" className="block text-patria-ivory/90 font-medium hover:text-patria-gold">Doctrina Archibelardista</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#demo" className="block text-patria-ivory/90 font-medium hover:text-patria-gold">Demo Táctica</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#planes" className="block text-patria-ivory/90 font-medium hover:text-patria-gold">Suscripciones con Honor</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#testimonios" className="block text-patria-ivory/90 font-medium hover:text-patria-gold">Clamor Civil</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); downloadSingleHTML(); }}
              className="block w-full text-center bg-[#FCD116] hover:bg-amber-400 text-[#07142B] py-3 rounded-lg border-2 border-[#CE1126] text-xs font-black uppercase tracking-wider font-mono cursor-pointer"
            >
              Descargar TRD patriótica
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-24 pb-20 lg:py-32 bg-gradient-to-b from-patria-navy to-patria-night overflow-hidden border-b border-patria-gold/15">
        
        {/* Waving Colombian Flag Abstract Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-15 overflow-hidden">
          <svg className="w-full h-full min-w-[800px]" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M 0,80 Q 360,220 720,120 T 1440,220 L 1440,0 L 0,0 Z" fill="#FCD116" />
            <path d="M 0,80 Q 360,220 720,120 T 1440,220 L 1440,350 Q 1080,230 720,350 T 0,250 Z" fill="#003893" />
            <path d="M 0,250 Q 360,350 720,230 T 1440,350 L 1440,480 Q 1080,360 720,480 T 0,380 Z" fill="#CE1126" />
          </svg>
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(#FCD116_1px,transparent_1px)] [background-size:32px_32px] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-patria-wine/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#003893]/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-8">
              
              {/* Tagline */}
              <div className="inline-flex items-center space-x-2 bg-patria-wine/30 border border-[#FCD116]/30 px-4 py-2 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FCD116] animate-pulse"></span>
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#FFF8E6] uppercase">
                  Alianza Solemne por la Integridad Archivística
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-[#FFF8E6] leading-[1.15] uppercase tracking-tight">
                Archibelardo vigila el <span className="bg-gradient-to-r from-[#FCD116] via-[#D6A83A] to-[#FCD116] bg-clip-text text-transparent">archivo nacional del desorden</span>.
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-xl text-[#FFF8E6]/90 leading-relaxed font-sans max-w-2xl">
                IA documental, trazabilidad firme y metadatos con carácter patriótico. Clasifique, radique y organice sus TRD con temple institucional indoblegable.
              </p>

              {/* Interactive Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-patria-navy/90 border border-patria-gold/20 p-3 rounded-lg">
                  <p className="text-[9px] uppercase font-mono text-[#FCD116]/80">Servicio</p>
                  <p className="text-xs font-bold text-[#FFF8E6]">🎖️ OCR con honor</p>
                </div>
                <div className="bg-patria-navy/90 border border-patria-gold/20 p-3 rounded-lg">
                  <p className="text-[9px] uppercase font-mono text-[#FCD116]/80">Sistema</p>
                  <p className="text-xs font-bold text-[#FFF8E6]">⚔️ Trazabilidad invicta</p>
                </div>
                <div className="bg-patria-navy/90 border border-patria-gold/20 p-3 rounded-lg col-span-2 sm:col-span-1">
                  <p className="text-[9px] uppercase font-mono text-[#FCD116]/80">Estándar</p>
                  <p className="text-xs font-bold text-[#FFF8E6]">📂 SGDEA de combate</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#doctrina" 
                  className="bg-[#FCD116] hover:bg-amber-400 text-[#07142B] text-center font-serif font-black px-8 py-4 rounded-lg tracking-wider text-sm uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FCD116]/15 active:scale-95"
                >
                  Explorar la doctrina documental
                </a>
                <button 
                  onClick={downloadSingleHTML}
                  className="bg-patria-wine/40 hover:bg-patria-wine text-[#FFF8E6] text-center border-2 border-[#CE1126] px-8 py-4 rounded-lg font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                >
                  Descargar TRD patriótica
                </button>
              </div>

            </div>

            {/* Right Character Column: Patriotic Waving Archibelardo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Decorative rotating gears / rays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FCD116]/20 via-[#003893]/10 to-[#CE1126]/20 rounded-full filter blur-2xl animate-pulse"></div>
                
                <svg className="w-72 h-72 md:w-96 md:h-96 mx-auto drop-shadow-2xl relative z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Definitions of Gradientes y Filtros para un look 3D Premium */}
                  <defs>
                    <linearGradient id="cyberBg" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0B1930" />
                      <stop offset="50%" stopColor="#07142B" />
                      <stop offset="100%" stopColor="#020813" />
                    </linearGradient>
                    <linearGradient id="hairGrad" x1="0" y1="110" x2="0" y2="160" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#252F48" />
                      <stop offset="35%" stopColor="#111827" />
                      <stop offset="100%" stopColor="#030712" />
                    </linearGradient>
                    <linearGradient id="metalGrad" x1="240" y1="270" x2="300" y2="370" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#F1F5F9" />
                      <stop offset="30%" stopColor="#CBD5E1" />
                      <stop offset="70%" stopColor="#94A3B8" />
                      <stop offset="100%" stopColor="#475569" />
                    </linearGradient>
                    <linearGradient id="reactorGrad" x1="0" y1="0" x2="0" y2="1" gradientTransform="translate(200, 310) scale(30)">
                      <stop offset="0%" stopColor="#CCFFFF" />
                      <stop offset="40%" stopColor="#33F0FF" />
                      <stop offset="100%" stopColor="#007799" />
                    </linearGradient>
                    <linearGradient id="skinGrad" x1="160" y1="120" x2="240" y2="240" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#F8D7A4" />
                      <stop offset="100%" stopColor="#DCA86A" />
                    </linearGradient>
                    <radialGradient id="neonGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                    </radialGradient>
                    <clipPath id="avatarClip">
                      <circle cx="200" cy="200" r="170" />
                    </clipPath>
                  </defs>

                  {/* Outer circle framework with golden and patriotic neon details */}
                  <circle cx="200" cy="200" r="180" fill="url(#cyberBg)" stroke="#FCD116" strokeWidth="4.5" />
                  <circle cx="200" cy="200" r="174" stroke="#003893" strokeWidth="2.5" />
                  <circle cx="200" cy="200" r="170" stroke="#CE1126" strokeWidth="2" strokeDasharray="6 8" />

                  {/* Scientific background sci-fi grid overlay */}
                  <g opacity="0.15">
                    <line x1="20" y1="120" x2="380" y2="120" stroke="#00E5FF" strokeWidth="0.8" />
                    <line x1="20" y1="200" x2="380" y2="200" stroke="#00E5FF" strokeWidth="0.8" />
                    <line x1="20" y1="280" x2="380" y2="280" stroke="#00E5FF" strokeWidth="0.8" />
                    <line x1="120" y1="20" x2="120" y2="380" stroke="#00E5FF" strokeWidth="0.8" />
                    <line x1="200" y1="20" x2="200" y2="380" stroke="#00E5FF" strokeWidth="0.8" />
                    <line x1="280" y1="20" x2="280" y2="380" stroke="#00E5FF" strokeWidth="0.8" />
                    {/* Glowing dots/nodes */}
                    <circle cx="120" cy="120" r="2.5" fill="#00E5FF" />
                    <circle cx="280" cy="200" r="2.5" fill="#00E5FF" />
                    <circle cx="200" cy="280" r="2.5" fill="#00E5FF" />
                  </g>

                  {/* HUD circular compass */}
                  <circle cx="200" cy="200" r="150" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="3 15" opacity="0.4" />
                  <path d="M 200 10 L 200 36 M 200 364 L 200 390" stroke="#FCD116" strokeWidth="2" opacity="0.8" />
                  <path d="M 10 200 L 36 200 M 364 200 L 390 200" stroke="#FCD116" strokeWidth="2" opacity="0.8" />

                  {/* Floating documents & folders */}
                  {/* Document (left) */}
                  <g transform="translate(42, 85) rotate(-12)">
                    <rect x="0" y="0" width="36" height="46" rx="3" fill="#FFF8E6" stroke="#D6A83A" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
                    <line x1="6" y1="10" x2="30" y2="10" stroke="#003893" strokeWidth="2"/>
                    <line x1="6" y1="18" x2="30" y2="18" stroke="#003893" strokeWidth="1.5"/>
                    <line x1="6" y1="26" x2="22" y2="26" stroke="#CE1126" strokeWidth="1.5"/>
                    <circle cx="28" cy="34" r="3.5" fill="#FCD116"/>
                  </g>

                  {/* Folder (right) */}
                  <g transform="translate(315, 230) rotate(8)">
                    <path d="M 0 5 L 12 5 L 18 10 L 46 10 L 46 38 L 0 38 Z" fill="#D6A83A" stroke="#FFF8E6" strokeWidth="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"/>
                    <rect x="4" y="14" width="38" height="20" rx="1.5" fill="#FFF8E6"/>
                    <text x="9" y="27" fill="#003893" fontSize="8.5" fontFamily="monospace" fontWeight="bold">TRD</text>
                  </g>

                  {/* QR Code / Digital stamp (right top) */}
                  <g transform="translate(320, 75)">
                    <rect x="0" y="0" width="38" height="38" rx="4" fill="#FFF8E6" stroke="#07142B" strokeWidth="1.8" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"/>
                    <rect x="4" y="4" width="10" height="10" fill="#003893"/>
                    <rect x="24" y="4" width="10" height="10" fill="#003893"/>
                    <rect x="4" y="24" width="10" height="10" fill="#003893"/>
                    <rect x="24" y="24" width="8" height="8" fill="#CE1126"/>
                    <rect x="15" y="15" width="8" height="8" fill="#07142B"/>
                  </g>

                  {/* Stamp "RADICADO SOBERANO" (left bottom) */}
                  <g transform="translate(32, 275) rotate(10)">
                    <rect x="0" y="0" width="76" height="22" rx="2" fill="rgba(206,17,38,0.05)" stroke="#CE1126" strokeWidth="1.8" strokeDasharray="3 2" />
                    <text x="38" y="14" fill="#CE1126" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">RADICADO.AI</text>
                  </g>

                  {/* CHARACTERS DETAILS: CYBER TRICOLOR ARCHIVIST REAL 3D RENDER */}
                  <g clipPath="url(#avatarClip)">
                    <image 
                      href={archibelardoSaluteImg} 
                      x="30" 
                      y="30" 
                      width="340" 
                      height="340"
                      referrerPolicy="no-referrer"
                    />
                  </g>

                  {/* Version indicator and branding label */}
                  <text x="200" y="380" fill="#FCD116" fontSize="10" fontFamily="monospace" fontWeight="bolder" textAnchor="middle" letterSpacing="2">
                    ARCHIBELARDO v3.0 // SOLEMNE
                  </text>
                </svg>

                {/* Sello de honor floating indicator */}
                <div className="absolute -bottom-2 -right-2 bg-slate-950 border-2 border-patria-gold text-patria-gold font-mono text-[9px] font-bold px-3 py-1 rounded max-w-[124px] tracking-wide text-center uppercase z-20 shadow-xl">
                  🎖️ CERO PAPEL // CERO TIBIEZA
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COUNTER METRICS TICKER BANNER */}
      <section className="relative border-y border-patria-gold/20 bg-patria-navy py-8 text-center select-none shadow-inner overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-patria-wine/10 via-transparent to-patria-wine/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <div>
            <p className="text-3xl sm:text-5xl font-serif font-black text-patria-gold">{counter1}%</p>
            <p className="text-[10px] font-mono text-patria-ivory/60 uppercase tracking-widest mt-1">Menos carpetas duplicadas</p>
          </div>
          <div>
            <p className="text-3xl sm:text-5xl font-serif font-black text-patria-gold">{counter2.toLocaleString()}</p>
            <p className="text-[10px] font-mono text-patria-ivory/60 uppercase tracking-widest mt-1">Folios Defendidos</p>
          </div>
          <div>
            <p className="text-3xl sm:text-5xl font-serif font-black text-patria-wine">{0}</p>
            <p className="text-[10px] font-mono text-patria-ivory/60 uppercase tracking-widest mt-1">Archivos llamados "Definitivo_Final_V3"</p>
          </div>
          <div>
            <p className="text-3xl sm:text-5xl font-serif font-black text-patria-gold-light">{counter3}%</p>
            <p className="text-[10px] font-mono text-patria-ivory/60 uppercase tracking-widest mt-1">Solemnidad Archivística</p>
          </div>
        </div>
      </section>

      {/* PROBLEMAS SECTION: "La patria documental tenía un problema" */}
      <section id="problemas" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-patria-gold uppercase mb-3">CONCEPCIONES EXPUESTAS</p>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase tracking-tight text-patria-ivory mb-4">
            La patria documental tenía un problema
          </h2>
          <div className="w-24 h-1 bg-patria-wine mx-auto mb-4"></div>
          <p className="text-patria-ivory/70 max-w-xl mx-auto mt-3">
            Antes de la llegada de archibelardo.ai, los folios languidecían en servidores corruptos y mentes perezosas dominadas por la ausencia de metadatos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS_DATA.map((p) => (
            <div 
              key={p.id} 
              className="bg-patria-navy border border-[#cc3344]/20 hover:border-patria-wine p-6 rounded-xl transition duration-300 relative group overflow-hidden"
            >
              {/* background threat highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-patria-wine/5 to-transparent rounded-bl-full"></div>
              
              <div className="w-12 h-12 rounded-lg bg-patria-wine/20 border border-patria-wine flex items-center justify-center mb-6">
                {renderIcon(p.icon, "w-6 h-6 text-red-500")}
              </div>
              
              <h3 className="font-serif text-xl font-bold text-patria-ivory tracking-tight mb-3 group-hover:text-patria-gold transition-colors duration-200">
                {p.title}
              </h3>
              
              <p className="text-xs text-patria-ivory/70 leading-relaxed font-sans">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITES SECTION: "Capacidades firmes" */}
      <section id="capacidades" className="bg-patria-navy/40 py-24 border-y border-patria-gold/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-patria-night/50 via-transparent to-patria-night/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <p className="text-xs font-mono font-bold tracking-widest text-patria-gold uppercase mb-3">REVOLUCIÓN TÁCTICA</p>
            <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase text-patria-ivory">
              Capacidades Solemnes de la Plataforma
            </h2>
            <div className="w-24 h-1 bg-patria-gold mx-auto mb-4"></div>
            <p className="text-patria-ivory/70 max-w-xl mx-auto mt-3">
              Algoritmos con temple de hierro diseñados bajo estricto rigor republicano para ordenar la patria folio a folio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES_DATA.map((cap) => (
              <div 
                key={cap.id} 
                className="bg-patria-night border border-patria-gold/20 hover:border-patria-gold-light p-8 rounded-xl transition-all duration-300 group hover:-translate-y-1 relative"
              >
                {/* Corner gold brand */}
                <span className="absolute top-4 right-4 bg-patria-gold/15 text-patria-gold-light text-[8px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  PROTOCOLO IA
                </span>

                <div className="w-12 h-12 rounded-lg bg-patria-gold/10 border border-patria-gold flex items-center justify-center mb-6">
                  {renderIcon(cap.icon, "w-6 h-6 text-patria-gold")}
                </div>

                <h3 className="font-serif text-xl font-bold text-patria-ivory tracking-tight mb-3">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-patria-ivory/70 leading-relaxed mb-6 font-sans">
                  {cap.desc}
                </p>

                <div className="border-t border-patria-gold/10 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-patria-gold">{cap.action}</span>
                  <span className="text-[9px] font-mono text-patria-ivory/40">Inalterable</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DOCTRINA SECTION: "Doctrina Documental Archibelardista" */}
      <section id="doctrina" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-patria-gold uppercase mb-3">LA DOCTRINA SOBERANA</p>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase text-patria-ivory tracking-tight">
            Doctrina Documental Archibelardista
          </h2>
          <div className="w-24 h-1 bg-patria-wine mx-auto mb-4"></div>
          <p className="text-patria-ivory/70 max-w-xl mx-auto mt-3">
            Cinco mandamientos innegociables para recuperar el honor de los despachos y la dignidad de cada folio de la patria.
          </p>
        </div>

        {/* Illuminated Digital Scroll Frame */}
        <div className="bg-gradient-to-b from-patria-navy to-slate-950 border-2 border-patria-gold/30 rounded-2xl p-8 sm:p-14 relative shadow-2xl overflow-hidden">
          
          {/* Sello de lacre digital en background */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border-4 border-patria-wine/30 opacity-20 flex items-center justify-center animate-spin">
            <span className="text-[9px] font-mono tracking-widest text-patria-wine-light font-bold">SELLO IMPERIAL DE LA REPÚBLICA DIGITAL</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            {DOCTRINE_DATA.map((item, index) => (
              <div 
                key={item.id} 
                className="group border-l-2 border-patria-gold hover:border-patria-wine pl-6 sm:pl-8 transition-all duration-300 transform hover:translate-x-2"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-serif font-bold text-lg text-patria-gold bg-patria-gold/10 px-2.5 py-0.5 rounded inline-block">
                    {item.num}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-patria-ivory tracking-tight group-hover:text-patria-gold transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-patria-ivory/70 font-sans leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative scroll handles */}
          <div className="h-2 bg-gradient-to-r from-patria-gold via-patria-gold-light to-patria-gold absolute top-0 left-0 right-0 opacity-80"></div>
          <div className="h-2 bg-gradient-to-r from-patria-gold via-patria-gold-light to-patria-gold absolute bottom-0 left-0 right-0 opacity-80"></div>
        </div>
      </section>

      {/* DEMO PATRIÓTICA: INTERACTIVE SIMULATOR */}
      <section id="demo" className="bg-patria-navy/35 py-24 border-y border-patria-gold/15 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-patria-night/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <p className="text-xs font-mono font-bold tracking-widest text-patria-gold uppercase mb-3">TEATRO DE OPERACIONES</p>
            <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase text-patria-ivory">
              Demo del Expediente Patriótico
            </h2>
            <div className="w-24 h-1 bg-patria-gold mx-auto mb-4"></div>
            <p className="text-patria-ivory/70 max-w-xl mx-auto mt-3">
              Observe en tiempo real cómo descontaminamos el acervo documental del país. Presione el botón y examine la depuración.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Terminal control box */}
            <div className="bg-slate-950 border-2 border-patria-gold/25 p-6 rounded-xl flex flex-col justify-between h-[450px] shadow-2xl">
              <div>
                <div className="flex items-center justify-between border-b border-patria-gold/15 pb-4 mb-4">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                  </div>
                  <span className="text-[10px] font-mono text-patria-gold-light font-bold">TERMINAL-ARCHI_v2.0</span>
                </div>

                {/* Simulated typewriter logs */}
                <div className="bg-black/80 rounded p-4 font-mono text-xs text-green-400 h-[280px] overflow-y-auto space-y-2.5 border border-patria-wine/30 select-text">
                  {simText.length === 0 ? (
                    <div className="text-gray-500 italic space-y-1">
                      <p>&gt; Módulos militares listos para escaneo táctico.</p>
                      <p>&gt; Presione "ACTIVAR IA PATRIÓTICA" para encender la disciplina en los expedientes soberanos.</p>
                    </div>
                  ) : (
                    simText.map((t, i) => (
                      <p key={i} className="leading-relaxed animate-fade-in">&gt; {t}</p>
                    ))
                  )}
                </div>
              </div>

              {/* Action controller buttons */}
              <div className="flex items-center gap-2 pt-4 border-t border-patria-gold/10">
                <button 
                  onClick={handleStartSimulation}
                  disabled={simStep >= 0 && simStep < 4}
                  className={`flex-1 bg-patria-wine text-patria-ivory border border-patria-gold/40 hover:text-patria-gold hover:border-patria-gold font-mono font-bold text-[11px] uppercase tracking-wider py-3.5 rounded cursor-pointer transition-all duration-300 ${simStep >= 0 && simStep < 4 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 shadow-md shadow-patria-wine/20'}`}
                >
                  ⚡ Activar IA Patriótica
                </button>
                <button 
                  onClick={resetSimulation}
                  className="bg-slate-800 hover:bg-slate-700 text-patria-ivory/80 px-4 py-3.5 rounded text-xs font-mono tracking-wider cursor-pointer transition"
                >
                  Reiniciar
                </button>
              </div>
            </div>

            {/* Simulated file explorer table */}
            <div className="lg:col-span-2 bg-patria-navy border border-patria-gold/20 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl min-h-[450px]">
              <div>
                <div className="flex items-center justify-between border-b border-patria-gold/25 pb-4 mb-6">
                  <div>
                    <h4 className="text-base font-serif font-bold text-patria-gold uppercase">Gabinete Digital de Radicados</h4>
                    <p className="text-[10px] font-mono text-patria-ivory/50">ARCHIBELARDO IA MOTOR VERSIÓN 4.1</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-patria-gold animate-ping"></span>
                    <span className="text-xs bg-slate-950 px-3 py-1 rounded border border-patria-gold/30 font-mono text-patria-gold-light">
                      PROCESO: {progressPercent}%
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-patria-gold/15 text-patria-gold-light uppercase font-mono text-[10px] sm:text-xs tracking-wider">
                        <th className="py-3 px-2">Nombre del Folio</th>
                        <th className="py-3 px-2">Estado Inicial</th>
                        <th className="py-3 px-2">Depuración Archibelardo</th>
                        <th className="py-3 px-2 text-right">Índice Patria</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-patria-gold/10 font-sans text-xs">
                      {simulationDocs.map((doc, idx) => (
                        <tr key={doc.id} className="hover:bg-patria-night/30 transition-colors">
                          <td className="py-3.5 px-2 font-medium max-w-[200px] sm:max-w-xs truncate">
                            <div className="flex items-center space-x-2">
                              {doc.type === 'xlsx' ? (
                                <FileSpreadsheet className="w-4 h-4 text-green-500 shrink-0" />
                              ) : (
                                <FileText className="w-4 h-4 text-patria-gold shrink-0" />
                              )}
                              <span className="truncate">{doc.name}</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-2">
                            <span className="text-red-400 bg-red-950/40 border border-red-900/30 px-2 py-0.5 rounded text-[10px] font-mono">
                              {doc.initialStatus}
                            </span>
                          </td>
                          <td className="py-3.5 px-2">
                            {simStep === -1 ? (
                              <span className="text-gray-400 italic">En lista de espera</span>
                            ) : (
                              <span className={`px-2 py-0.5 rounded text-[10.5px] font-mono font-bold border ${doc.finalStatus === doc.initialStatus ? 'text-amber-400 bg-amber-950/35 border-amber-900/30' : 'text-green-400 bg-green-950/45 border-green-800'}`}>
                                {doc.finalStatus}
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-2 text-right font-mono text-patria-gold font-bold">
                            {doc.patriotIndex} / 10
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Special honor diploma certificate on completion */}
              {showHonorDiploma && (
                <div className="bg-gradient-to-r from-patria-wine/30 to-patria-gold/10 border-2 border-patria-gold p-5 rounded-lg mt-6 animate-fade-in">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl sm:text-4xl shrink-0">🏛️</span>
                    <div>
                      <h5 className="font-serif font-black text-patria-gold text-sm sm:text-base uppercase tracking-wider">
                        Resolución Definitiva de Limpieza Archivística
                      </h5>
                      <p className="text-xs text-patria-ivory/85 leading-relaxed mt-1">
                        Se certifica por el honor de la patria que los expedientes de este despacho han sido descontaminados. Han obtenido una calificación global de <strong className="text-green-400">10.0 (Dignidad Documental Absoluta)</strong>. No se tolerará la tibieza del papel mojado.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* BEFORE & AFTER SECTION: "Antes y después" */}
      <section id="compara" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-patria-gold uppercase mb-3">LA COMPARATIVA INELUDIBLE</p>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase text-patria-ivory tracking-tight">
            Antes y Después del Control Archibelardista
          </h2>
          <div className="w-24 h-1 bg-patria-wine mx-auto mb-4"></div>
          <p className="text-patria-ivory/70 max-w-sm mx-auto mt-2 text-xs">
            Un contraste inequívoco entre el desorden tibio burocrático y el orden sublime inteligente.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-patria-navy p-1.5 rounded-lg border border-patria-gold/20 flex space-x-1">
            <button 
              onClick={() => setAfterActive(false)}
              className={`px-6 py-2.5 rounded-md text-xs font-mono font-bold uppercase tracking-wider cursor-pointer ${!afterActive ? 'bg-red-950 border border-red-800 text-red-200' : 'text-patria-ivory/60 hover:text-patria-ivory'}`}
            >
              ⚠️ Anarquía del Caos Documental (Antes)
            </button>
            <button 
              onClick={() => setAfterActive(true)}
              className={`px-6 py-2.5 rounded-md text-xs font-mono font-bold uppercase tracking-wider cursor-pointer ${afterActive ? 'bg-patria-wine border border-patria-gold text-patria-gold-light' : 'text-patria-ivory/60 hover:text-patria-ivory'}`}
            >
              🏛️ Orgullo y Sello archibelardo.ai (Después)
            </button>
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <div className="max-w-5xl mx-auto bg-slate-950 border border-patria-gold/25 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {!afterActive ? (
              // CHAOS BEFORE ELEMENTS
              <>
                <div className="bg-red-950/20 border border-red-950 p-6 rounded-lg">
                  <h4 className="font-serif font-bold text-red-400 mb-2">Despachos Inundados</h4>
                  <p className="text-xs text-patria-ivory/70 leading-relaxed font-sans">
                    Fisicamente atascados de expedientes de papel periódico enrollado con ganchos oxidados que manchan la reputación de la patria.
                  </p>
                </div>
                <div className="bg-red-950/20 border border-red-950 p-6 rounded-lg">
                  <h4 className="font-serif font-bold text-red-400 mb-2">Búsqueda Manual Eterna</h4>
                  <p className="text-xs text-patria-ivory/70 leading-relaxed font-sans">
                    Secretarias enviando correos duplicados preguntando quién tiene el acta de conciliación, perdiendo semanas en el limbo.
                  </p>
                </div>
                <div className="bg-red-950/20 border border-red-950 p-6 rounded-lg">
                  <h4 className="font-serif font-bold text-red-400 mb-2">El Olvido de Plazos</h4>
                  <p className="text-xs text-patria-ivory/70 leading-relaxed font-sans">
                    Vencimiento de plazos clave y prescripción de demandas debido a que las alarmas se apuntaron en un tablero de corcho descolorido.
                  </p>
                </div>
              </>
            ) : (
              // DIGITAL SOLEMN AFTER ELEMENTS
              <>
                <div className="bg-patria-wine/10 border border-patria-gold/30 p-6 rounded-lg">
                  <h4 className="font-serif font-bold text-patria-gold mb-2">Orden Soberano</h4>
                  <p className="text-xs text-patria-ivory/90 leading-relaxed font-sans">
                    Nube nacional de alta encriptación donde cada folio es custodiado por inteligencia automatizada que vigila la seguridad del metadato.
                  </p>
                </div>
                <div className="bg-patria-wine/10 border border-patria-gold/30 p-6 rounded-lg">
                  <h4 className="font-serif font-bold text-patria-gold mb-2">Buscador con Temple</h4>
                  <p className="text-xs text-patria-ivory/90 leading-relaxed font-sans">
                    Localización en menos de tres milisegundos empleando búsquedas contextuales de alta trazabilidad republicana.
                  </p>
                </div>
                <div className="bg-patria-wine/10 border border-patria-gold/30 p-6 rounded-lg">
                  <h4 className="font-serif font-bold text-patria-gold mb-2">Alarmas de Honor</h4>
                  <p className="text-xs text-patria-ivory/90 leading-relaxed font-sans">
                    Llamados ineludibles y notificaciones de alta prioridad antes del cumplimiento de plazos para defender la memoria del trámite.
                  </p>
                </div>
              </>
            )}

          </div>

          <div className="mt-8 pt-6 border-t border-patria-gold/15 text-center">
            <p className="text-xs italic text-patria-gold-light font-mono">
              {!afterActive 
                ? "La tibieza genera anarquía y destruye instituciones." 
                : "La disciplina documental inteligente pacifica la nación y consagra las memorias."}
            </p>
          </div>
        </div>
      </section>

      {/* PLANES SECTION: "Planes" */}
      <section id="planes" className="py-24 bg-patria-navy/55 border-y border-patria-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <p className="text-xs font-mono font-bold tracking-widest text-patria-gold uppercase mb-3">CONCESIÓN DISCIPLINARIA</p>
            <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase text-patria-ivory text-center">
              Suscripciones con Honor
            </h2>
            <div className="w-24 h-1 bg-patria-gold mx-auto mb-4"></div>
            <p className="text-patria-ivory/70 max-w-xl mx-auto mt-3">
              Seleccione el rango archivístico adecuado para inmunizar su empresa u organismo institucional contra el desorden de folios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS_DATA.map((plan) => (
              <div 
                key={plan.name} 
                className={`bg-patria-night rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl transition-all duration-300 ${plan.primary ? 'border-2 border-patria-gold scale-105 md:-translate-y-2' : 'border border-patria-gold/25 hover:border-patria-gold/60'}`}
              >
                {plan.primary && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-patria-gold text-patria-night font-mono text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                    RECOMENDADO NACIONAL
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-mono text-patria-gold bg-patria-gold/10 px-2.5 py-0.5 rounded font-bold">
                      {plan.badge}
                    </span>
                    <span className="text-xs text-patria-ivory/50">Inmune</span>
                  </div>

                  <h3 className="font-serif text-2xl font-black text-patria-ivory tracking-tight mb-2 uppercase">
                    {plan.name}
                  </h3>

                  <p className="text-xs italic text-patria-ivory/60 mb-6 font-sans">
                    {plan.tagline}
                  </p>

                  <div className="my-6 border-y border-patria-gold/10 py-4">
                    <span className="text-4xl font-serif font-black text-patria-gold">{plan.price}</span>
                    <span className="text-xs font-mono text-patria-ivory/50 ml-1.5 font-bold uppercase tracking-wider">
                      / {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs text-patria-ivory/85 mb-8 font-sans">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <span className="text-patria-gold mr-2.5 shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => alert(`Su juramento por el '${plan.name}' ha sido sellado con éxito. Su expediente soberano será defendido con honor en nuestro ledger.`)}
                  className={`w-full font-mono font-bold text-xs uppercase tracking-widest py-4 px-4 rounded-lg cursor-pointer transition ${plan.primary ? 'bg-patria-gold hover:bg-patria-gold-light text-patria-night font-black shadow-lg shadow-patria-gold/10' : 'bg-slate-900 border border-patria-gold/30 hover:bg-slate-800 text-patria-ivory'}`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION: "Testimonios ficticios" */}
      <section id="testimonios" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-patria-gold uppercase mb-3">CLAMOR DE ARCHIVISTAS</p>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase text-patria-ivory tracking-tight">
            Testimonios de Honor e Integridad
          </h2>
          <div className="w-24 h-1 bg-patria-wine mx-auto mb-4"></div>
          <p className="text-patria-ivory/70 max-w-xl mx-auto mt-3">
            Voces patrióticas de funcionarios que fueron rescatados de la tibieza burocrática por nuestra IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div 
              key={t.name} 
              className="bg-patria-navy/50 border border-patria-gold/20 hover:border-patria-gold p-8 rounded-xl relative shadow-xl flex flex-col justify-between"
            >
              {/* decorative double quotes */}
              <span className="absolute top-4 right-4 text-5xl font-serif text-patria-gold/15 select-none font-bold">“</span>

              <p className="text-xs sm:text-sm italic text-patria-ivory/80 leading-relaxed mb-8 relative z-10 font-sans">
                "{t.quote}"
              </p>

              <div className="flex items-center space-x-3 pt-4 border-t border-patria-gold/10">
                <div className="w-10 h-10 rounded-full bg-patria-wine/30 border border-patria-gold/40 flex items-center justify-center font-bold text-xs text-patria-gold">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-patria-gold text-sm">{t.name}</h4>
                  <p className="text-[10px] font-mono text-patria-ivory/50 mt-0.5 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REGISTRATION CALL FOR CIVIL SERVICES */}
      <section className="bg-gradient-to-t from-patria-navy to-patria-night py-24 border-t border-patria-gold/15 relative overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(#5c0f16_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          
          <span className="text-3xl mb-4 inline-block">📯</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase text-patria-ivory mb-6 leading-tight">
            ¿Listo para poner firme su archivo?
          </h2>
          
          <p className="text-base sm:text-lg text-patria-ivory/80 mb-10 max-w-xl mx-auto font-sans leading-relaxed">
            Súmese a los despachos ilustres de la nación que han desterrado a los PDFs tibios. Pida su juramento y ordene la patria folio a folio.
          </p>

          <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto bg-slate-950 p-6 sm:p-8 rounded-xl border border-patria-gold/25 shadow-2xl">
            {showFormSuccess ? (
              <div className="text-center py-6 animate-fade-in">
                <span className="text-4xl mb-3 inline-block">🦁</span>
                <h4 className="font-serif font-black text-patria-gold text-lg uppercase">Juramento Recibido</h4>
                <p className="text-xs text-patria-ivory/80 mt-2 font-sans leading-relaxed">
                  Su solicitud ha sido radicada. Recibirá noticias solemnes en su buzón electrónico de inmediato. Conserve la compostura tipográfica.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-left">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-patria-gold-light mb-1">Nombre o Despacho del Solicitante</label>
                  <input 
                    type="text" 
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                    placeholder="Ej. Consorcio de los Andes o Dra. Foliada"
                    className="w-full bg-patria-night rounded-lg border border-patria-gold/25 px-4 py-2.5 text-xs text-patria-ivory focus:outline-none focus:border-patria-gold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-patria-gold-light mb-1">Correo para Oficio Formal</label>
                  <input 
                    type="email" 
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    required
                    placeholder="correo@patria.org"
                    className="w-full bg-patria-night rounded-lg border border-patria-gold/25 px-4 py-2.5 text-xs text-patria-ivory focus:outline-none focus:border-patria-gold"
                  />
                </div>
                <div className="flex items-start py-2">
                  <input 
                    type="checkbox" 
                    id="doctrineCheck"
                    checked={formDoctrineAccepted}
                    onChange={(e) => setFormDoctrineAccepted(e.target.checked)}
                    className="mt-0.5 rounded text-patria-wine focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="doctrineCheck" className="text-[10.5px] text-patria-ivory/70 ml-2 select-none cursor-pointer leading-tight">
                    Acepto jurar fidelidad a la **Doctrina Documental Archibelardista** y renunciar para siempre al término "borrador_definitivo".
                  </label>
                </div>
                <button 
                  type="submit"
                  disabled={!formDoctrineAccepted}
                  className={`w-full bg-patria-gold text-patria-night font-serif font-black py-3.5 rounded-lg text-xs tracking-wider uppercase transition-all duration-300 ${!formDoctrineAccepted ? 'opacity-40 cursor-not-allowed' : 'hover:scale-[1.02] shadow-lg shadow-patria-gold/15'}`}
                >
                  Firmar Juramento Archivístico
                </button>
              </div>
            )}
          </form>

        </div>
      </section>

      {/* IMMUTABLE FOOTER: Elegant corporate-patriotic multiple-column layout inspired by Archivaldo.ai, with parody details */}
      <footer className="bg-slate-950 text-patria-ivory border-t-4 border-[#FCD116] pt-16 pb-12 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-patria-gold/15">
            
            {/* Column 1: Brand & Character info */}
            <div className="md:col-span-4 space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#003893] border border-[#FCD116] flex items-center justify-center font-bold text-xs text-[#FCD116]">
                  🦅
                </div>
                <span className="text-xl font-serif font-black text-patria-gold tracking-widest uppercase">
                  archibelardo<span className="text-patria-ivory">.ai</span>
                </span>
              </div>
              
              <p className="text-xs text-[#FFF8E6]/85 max-w-xs leading-relaxed font-sans">
                La primera plataforma de Inteligencia Archivística Republicana para la erradicación definitiva del desorden documental y la vaguedad metadataria.
              </p>

              {/* Social networks & Badges mock */}
              <div className="flex items-center space-x-3 pt-2">
                <a href="#" className="w-8 h-8 rounded bg-patria-navy hover:bg-[#003893] text-[#FCD116] flex items-center justify-center transition border border-patria-gold/10 hover:border-[#FCD116]" title="X (Twitter) Soberano">
                  <span className="font-mono text-xs font-bold">𝕏</span>
                </a>
                <a href="#" className="w-8 h-8 rounded bg-patria-navy hover:bg-[#003893] text-[#FCD116] flex items-center justify-center transition border border-patria-gold/10 hover:border-[#FCD116]" title="Soberanía de Redes">
                  <span className="font-mono text-xs font-bold">in</span>
                </a>
                <a href="#" className="w-8 h-8 rounded bg-patria-navy hover:bg-[#003893] text-[#FCD116] flex items-center justify-center transition border border-patria-gold/10 hover:border-[#FCD116]" title="Gobernanza del Código">
                  <span className="font-mono text-xs font-bold">git</span>
                </a>
              </div>
            </div>

            {/* Column 2: DOCTRINA SOBERANA */}
            <div className="md:col-span-2 text-left space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-widest text-patria-gold uppercase border-l-2 border-[#CE1126] pl-2 text-[10px]">
                Doctrina Soberana
              </h4>
              <ul className="space-y-1.5 text-xs text-patria-ivory/70">
                <li><a href="#doctrina" className="hover:text-patria-gold transition-colors block">Manifiesto Anti-Borrador</a></li>
                <li><a href="#doctrina" className="hover:text-patria-gold transition-colors block">Leyes del Folio Invencible</a></li>
                <li><a href="#doctrina" className="hover:text-patria-gold transition-colors block">Código Metadatario</a></li>
                <li><a href="#doctrina" className="hover:text-patria-gold transition-colors block">Juramento del Escáner</a></li>
              </ul>
            </div>

            {/* Column 3: RECURSOS DE CONTROL */}
            <div className="md:col-span-3 text-left space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#FCD116] uppercase border-l-2 border-[#003893] pl-2 text-[10px]">
                Recursos de Control
              </h4>
              <ul className="space-y-1.5 text-xs text-patria-ivory/70">
                <li><button onClick={downloadSingleHTML} className="hover:text-[#FCD116] transition-colors block text-left">Descargar TRD Patriótica</button></li>
                <li><a href="#demo" className="hover:text-patria-gold transition-colors block">Validador de Firmas Solemnes</a></li>
                <li><a href="#capacidades" className="hover:text-patria-gold transition-colors block">Glosario de SGDEA Militante</a></li>
                <li><a href="#contacto" className="hover:text-patria-gold transition-colors block text-rose-400">Denunciar PDF Tibio</a></li>
              </ul>
            </div>

            {/* Column 4: DESPACHOS SOBERANOS */}
            <div className="md:col-span-3 text-left space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#FFF8E6] uppercase border-l-2 border-[#CE1126] pl-2 text-[10px]">
                Despachos Soberanos
              </h4>
              <ul className="space-y-1.5 text-xs text-patria-ivory/70 font-mono text-[11px]">
                <li>🏢 Sede del Metadato Sólido</li>
                <li>🛡️ División de Radicación Táctica</li>
                <li>🦁 Comando Central General del Folio</li>
                <li>🇨🇴 República Bolivariana Archivística</li>
              </ul>
            </div>

          </div>

          {/* Bottom section: Disclaimers & Copyrights */}
          <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Mandatory visible parody disclaimer inside footer as requested */}
            <div className="lg:col-span-8 bg-patria-wine/10 border border-[#CE1126]/35 rounded-xl p-4 text-left">
              <p className="text-[10px] sm:text-xs text-rose-300 font-mono tracking-wide leading-relaxed uppercase">
                ⚠️ SITIO DE PARODIA. Proyecto puramente ficticio con fines satíricos, artísticos y teatrales. Sin afiliación a personas, gobiernos, movimientos políticos, entidades públicas reales ni marcas comerciales registradas. El expediente se respeta con humor.
              </p>
            </div>

            {/* Copyright & UTC indicators */}
            <div className="lg:col-span-4 text-center lg:text-right space-y-2">
              <p className="text-[10px] text-patria-ivory/50 font-mono">
                © {new Date().getFullYear()} archibelardo.ai - Soberanía total de la base documental nacional.
              </p>
              <p className="text-[9px] text-[#FCD116]/60 font-mono tracking-widest uppercase">
                ESTÁNDAR COLOMBIA // CERO TIBIEZA v3.0
              </p>
            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}


import { 
  Atom, FileCode2, Zap, Server, Database, Globe, 
  MessageSquare, Users, ShieldCheck, Terminal, Target, 
  Languages, Layout, MonitorCheck, ServerCog, Layers,
  Palette
} from 'lucide-react';
import type { Project, Service, Experience, Certificate } from './types';

// --- SHARED CONSTANTS ---
const COMMON_PROJECTS = [
  {
    name: 'Noor Dubai AI',
    stack: ['WordPress', 'Elementor Pro', 'CSS3', 'Motion Design'],
    liveUrl: 'https://noordubai.ai/',
    repoUrl: 'https://github.com/H3m0rv1ch1',
  },
  {
    name: 'Billionaire ERP',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://www.facebook.com/billionaire.for.rent/',
    repoUrl: 'https://github.com/H3m0rv1ch1',
  },
  {
    name: 'Watermarking App',
    stack: ['React', 'JavaScript', 'Canvas API', 'File Handling'],
    liveUrl: 'https://watermarking-app.pages.dev/',
    repoUrl: 'https://github.com/H3m0rv1ch1/Watermarking-App',
  },
  {
    name: 'X To-Do Corp',
    stack: ['React', 'TypeScript', 'State Management', 'UI/UX'],
    liveUrl: 'https://x-to-do-corp.pages.dev/',
    repoUrl: 'https://github.com/H3m0rv1ch1/x-to-do-corp',
  },
  {
    name: 'Noor Interiors',
    stack: ['WordPress', 'PHP', 'JavaScript', 'Visual Composer'],
    liveUrl: 'https://noordubai.net/',
    repoUrl: 'https://github.com/H3m0rv1ch1',
  },
  {
    name: 'Noor Woods',
    stack: ['WordPress', 'WooCommerce', 'Custom Theme', 'Analytics'],
    liveUrl: 'https://noorwoods.com',
    repoUrl: 'https://github.com/H3m0rv1ch1',
  },
  {
    name: 'Spookify AI',
    stack: ['React', 'TypeScript', 'AI Styling', 'Tailwind CSS'],
    liveUrl: 'https://spookify-ai-the-void.pages.dev/upload',
    repoUrl: 'https://github.com/H3m0rv1ch1/spookify-ai-The-void',
  },
  {
    name: 'Enjaz',
    stack: ['Tauri', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://enjaz.pages.dev/#/dashboard',
    repoUrl: 'https://github.com/H3m0rv1ch1/Enjaz',
  },
];

const COMMON_CERTIFICATES: Certificate[] = [
  {
    name: 'Certificate of Experience',
    issuer: 'Research Institute of Ophthalmology',
    date: '2022',
    url: 'https://media.licdn.com/dms/image/v2/D4D2DAQHVbpYnsHLAKg/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1692808833825?e=1766001600&v=beta&t=Yz1f6B9JST9gtUWBt26vTP-S2XDi8IlRYv2bR26fq_U'
  },
  {
    name: 'Optical Fiber Network Installation & Maintenance',
    issuer: 'NTI',
    date: '2021',
    url: 'https://media.licdn.com/dms/image/v2/D4D2DAQGUmR-80uL9Pw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1692809291186?e=1765929600&v=beta&t=XQvA77gptqz9wnY5m2ga31f2ImxeBboFO2HjlPBYM4U'
  },
  {
    name: 'Training Statement of Completion',
    issuer: 'NTI',
    date: '2021',
    url: 'https://media.licdn.com/dms/image/v2/D4D2DAQFEUwr1LWBv7A/profile-treasury-image-shrink_1280_1280/B4DZsJqHpHKsAQ-/0/1765393597448?e=1766001600&v=beta&t=Ci3cZY8JdUhhrYUNFWOQiMJY1GkfVyZ98XvuP8WE7jE'
  },
  {
    name: 'MTA: Networking Fundamentals',
    issuer: 'Microsoft',
    date: '2021',
    url: 'https://media.licdn.com/dms/image/v2/D4D2DAQHQLl-vIfs2-w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1692809221366?e=1765929600&v=beta&t=G8oWkUHI6ixg1I6Vmfvf326MzvO4EESGCY3wXVTxwVY'
  },
  {
    name: 'MTA: Windows Operating System Fundamentals',
    issuer: 'Microsoft',
    date: '2020',
    url: 'https://media.licdn.com/dms/image/v2/D4D2DAQETvSnM7V3pfg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1692809181747?e=1765929600&v=beta&t=WAWFbqaFWOEyvr5IyAbWXwkd8sgTCzfKrBybA2elgq0'
  },
  {
    name: 'MTA: Server Administration Fundamentals',
    issuer: 'Microsoft',
    date: '2022',
    url: 'https://media.licdn.com/dms/image/v2/D4D2DAQEkdbx8HX23uA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1692809107366?e=1765929600&v=beta&t=zAW9VSECOu63JHVZf3cb1TMhipoEAZ-O8QFvm-Xv5hM'
  }
];

export const SKILLS = [
    { name: 'React', icon: Atom },
    { name: 'Next.js', icon: Zap },
    { name: 'WordPress', icon: Layout },
    { name: 'Node.js', icon: Server },
    { name: 'TypeScript', icon: FileCode2 },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'PHP', icon: FileCode2 },
    { name: 'MongoDB', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'Git & GitHub', icon: Zap },
    { name: 'Network Security', icon: ShieldCheck },
    { name: 'Windows Server', icon: Terminal },
];

export const COMPETENCIES = [
  { name: 'System Architecture', icon: Layers },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'Strategic Planning', icon: Target },
  { name: 'Team Leadership', icon: Users },
  { name: 'Client Relations', icon: MessageSquare },
];

export const LANGUAGES = [
  { name: 'Arabic', level: 'Native / Fluent', icon: Globe },
  { name: 'English', level: 'Professional Proficiency', icon: Languages },
];


// --- MULTI-LANGUAGE DATA DICTIONARY ---

export const DATA_BY_LANG = {
  en: {
    personalInfo: {
      name: 'Mohammed Alghanam',
      title: 'Full Stack Engineer | Digital Architect',
      bio: "I am a digital architect bridging the gap between creative design and technical engineering. With a strong foundation in IT infrastructure, I build robust, secure, and visually stunning digital solutions. My portfolio spans from immersive WordPress experiences for luxury brands like Noor Group to complex, data-driven ERP systems for enterprise resource planning. I don't just write code; I design systems that solve business problems with elegance and efficiency.",
    },
    projects: COMMON_PROJECTS.map((p, i) => ({
      ...p,
      description: [
        'A futuristic digital headquarters for a leading advertising agency. I engineered a high-impact, visually immersive experience using WordPress and Elementor Pro, focusing on micro-interactions and high-conversion UI patterns.',
        'A mission-critical ERP system built for "Billionaire Car Rental". Developed with Next.js and TypeScript, this internal platform handles fleet management, real-time booking logistics, and financial reporting.',
        'A high-performance, client-side image processing tool. Built with React and the Canvas API, it enables secure, batch watermarking for content creators, emphasizing data privacy by processing all assets locally.',
        'A minimalist yet powerful task management ecosystem. Engineered for corporate productivity, this application features persistent state management, drag-and-drop prioritization, and a distraction-free UI.',
        'A digital art gallery for premium interior design. I utilized a headless-style approach within WordPress to create a fluid, image-first navigation system that allows the portfolio to take center stage.',
        'A comprehensive digital catalog for luxury wood manufacturing. This project involved structuring complex product data into an intuitive browsing experience, bridging the gap between physical craftsmanship and digital presentation.',
        'Spookify AI is an immersive, high-tech costume generator that transforms your photos into cinematic Halloween characters using advanced neural styling.',
        'Enjaz is a modern desktop application for team performance tracking, task management, and evaluation. Built with Tauri, React, and TypeScript for cross-platform performance.'
      ][i]
    })),
    services: [
      {
        title: 'Enterprise Web Apps',
        description: 'Building scalable, business-critical applications using Next.js and React. Specialized in ERPs, Dashboards, and Management Systems.',
        icon: MonitorCheck
      },
      {
        title: 'Premium WordPress Sites',
        description: 'Expert creation of custom, high-performance WordPress websites. From Corporate Portfolios to E-commerce, tailored to your brand identity.',
        icon: Layout
      },
      {
        title: 'IT & Cloud Architecture',
        description: 'Leveraging deep IT management experience to consult on server infrastructure, security protocols, and cloud deployment strategies.',
        icon: ServerCog
      },
    ],
    experiences: [
      {
        role: 'Lead Full Stack Developer',
        company: 'Freelance / Independent Contractor',
        period: '2024 - Present',
        description: [
            'Delivering digital transformation for clients including Noor Group (Advertising, Interiors, Woods), creating high-performance WordPress solutions.',
            'Architecting custom ERP systems, such as the solution for Billionaire Car Rental built with Next.js, optimizing fleet operations and booking logic.',
            'Specializing in translating complex business requirements into intuitive, aesthetically pleasing digital interfaces for diverse clients.',
            'Integrating SEO best practices and security protocols across all enterprise deployments.',
        ],
      },
      {
        role: 'IT Manager',
        company: 'Bugshan Egypt Group',
        period: '2023 - 2024',
        description: [
            'Oversaw complete IT department operations, infrastructure planning, and staff training.',
            'Managed network and system performance, conducting advanced troubleshooting, security patching, and preventative maintenance.',
            'Orchestrated hardware deployment procedures for high-availability corporate environments.',
            'Developed and implemented robust cybersecurity measures to protect enterprise data assets.',
        ],
      },
      {
        role: 'IT Infrastructure Specialist',
        company: 'Egy Shark Construction',
        period: '2021 - 2023',
        description: [
            'Managed enterprise deployment of Windows Server 2019 and client workstations.',
            'Resolved complex hardware and software issues for peripherals and mobile computing units.',
            'Architected internal network topologies to meet specific construction site connectivity requirements.',
        ],
      },
      {
        role: 'System Support Engineer',
        company: 'Research Institute of Ophthalmology',
        period: '2019 - 2022',
        description: [
            'Administered Windows Server environments (2012/2019) and managed Active Directory user policies.',
            'Provided critical technical support for medical imaging peripherals and office hardware.',
            'Assisted in the configuration of secure internal networks for sensitive medical data handling.',
        ],
      },
      {
        role: 'Network Operations Lead',
        company: 'M.I.C.A Academy',
        period: '2019 - 2021',
        description: [
            'Designed, implemented, and maintained enterprise-level network infrastructures for educational facilities.',
            'Configured and optimized network devices (Routers, Switches, Firewalls) to ensure high availability and scalability.',
        ],
      },
    ],
    certificates: COMMON_CERTIFICATES
  },
  ar: {
    personalInfo: {
      name: 'محمد الغنام',
      title: 'Full Stack Engineer | Digital Architect',
      bio: "مهندس برمجيات ومخطط استراتيجي للحلول الرقمية، أجمع بين الحس الفني في التصميم والصرامة الهندسية في التطوير. أمتلك خبرة واسعة في البنية التحتية لتكنولوجيا المعلومات (IT Infrastructure)، مما يمكنني من بناء أنظمة رقمية ليست فقط جذابة بصرياً، بل آمنة، سريعة، وقابلة للتوسع. يمتد سجل أعمالي من تطوير تجارب ويب تفاعلية لعلامات تجارية مرموقة مثل 'مجموعة نور'، إلى هندسة أنظمة ERP معقدة تعتمد على البيانات لإدارة الموارد المؤسسية. أنا لا أكتب مجرد أكواد؛ بل أصمم أنظمة ذكية تحل مشكلات الأعمال بكفاءة وأناقة.",
    },
    projects: COMMON_PROJECTS.map((p, i) => ({
      ...p,
      description: [
        'المقر الرقمي لوكالة إعلانية رائدة. قمت بهندسة تجربة مستخدم بصرية غامرة وعالية الأداء باستخدام WordPress و Elementor Pro، مع التركيز على التفاعلات الدقيقة (Micro-interactions) وواجهات المستخدم التي تعزز معدلات التحويل.',
        'نظام تخطيط موارد المؤسسات (ERP) حيوي لشركة "Billionaire Car Rental". تم تطويره باستخدام Next.js و TypeScript لإدارة أسطول السيارات، العمليات اللوجستية للحجوزات، والتقارير المالية بشكل لحظي، مما يجعله العمود الفقري لعمليات الشركة.',
        'أداة معالجة صور عالية الأداء تعمل من جانب العميل (Client-side). تم بناؤها باستخدام React و Canvas API لتمكين صناع المحتوى من إضافة العلامات المائية ومعالجة الصور بشكل آمن وسريع محلياً دون الحاجة لرفع الملفات للخوادم، مما يضمن خصوصية كاملة للبيانات.',
        'منظومة لإدارة المهام تتميز بالبساطة والقوة. صُممت لزيادة الإنتاجية المؤسسية، وتوفر ميزات مثل إدارة الحالة المستمرة (Persistent State)، وتحديد الأولويات بالسحب والإفلات، وواجهة مستخدم خالية من المشتتات.',
        'معرض فني رقمي لتصاميم الديكور الداخلي الفاخر. اعتمدت نهجاً تقنياً متطوراً (Headless-style) داخل بيئة WordPress لإنشاء نظام تصفح سلس يضع الصور في قلب التجربة، مما يبرز جماليات الأعمال المعروضة.',
        'كتالوج رقمي شامل لمصنع أخشاب فاخر. تضمن المشروع هيكلة بيانات معقدة للمنتجات وتقديمها في تجربة تصفح بديهية، مما يسد الفجوة بين الحرفية المادية والعرض الرقمي.',
        'تطبيق تفاعلي يعتمد على الذكاء الاصطناعي التوليدي (Generative AI). يقوم بتحويل الصور الشخصية إلى شخصيات سينمائية بأسلوب الهالوين باستخدام تقنيات المعالجة العصبية للصور، مقدماً تجربة مستخدم ممتعة وفريدة.',
        'تطبيق سطح مكتب حديث (Desktop App) لتتبع أداء الفرق وإدارة المهام والتقييم. مبني باستخدام تقنيات Tauri و React و TypeScript لضمان أداء يضاهي التطبيقات الأصلية (Native Performance) مع العمل عبر مختلف أنظمة التشغيل.'
      ][i]
    })),
    services: [
      {
        title: 'تطبيقات الويب المؤسسية',
        description: 'بناء تطبيقات ويب قابلة للتوسع وحيوية للأعمال (Business-Critical) باستخدام أحدث التقنيات مثل Next.js و React. متخصص في أنظمة ERP، لوحات التحكم، وأنظمة الإدارة المتكاملة.',
        icon: MonitorCheck
      },
      {
        title: 'مواقع WordPress احترافية',
        description: 'تصميم وتطوير مواقع WordPress مخصصة عالية الأداء. من المواقع التعريفية للشركات إلى منصات التجارة الإلكترونية، نصمم حلولاً تعكس هوية علامتك التجارية بدقة.',
        icon: Layout
      },
      {
        title: 'هندسة البنية التحتية والسحابة',
        description: 'توظيف الخبرة العميقة في إدارة تكنولوجيا المعلومات لتقديم استشارات حول البنية التحتية للخوادم، بروتوكولات الأمان، واستراتيجيات النشر السحابي (Cloud Deployment).',
        icon: ServerCog
      },
    ],
    experiences: [
      {
        role: 'Lead Full Stack Developer',
        company: 'عمل حر / مستقل',
        period: '2024 - الحالي',
        description: [
            'قيادة التحول الرقمي لعملاء مثل مجموعة شركات نور، وتقديم حلول ويب رفعت من كفاءة التواجد الرقمي.',
            'هندسة وتطوير نظام ERP مخصص لعملاء مثل Billionaire لتأجير السيارات باستخدام Next.js، مما أدى لتحسين عمليات الأسطول ومنطق الحجوزات بشكل جذري.',
            'التخصص في ترجمة متطلبات الأعمال المعقدة لعملاء متعددين إلى واجهات رقمية بديهية وعملية.',
            'دمج أفضل ممارسات تحسين محركات البحث (SEO) وبروتوكولات الأمان السيبراني في جميع الأنظمة.',
        ],
      },
      {
        role: 'IT Manager',
        company: 'مجموعة بقشان مصر',
        period: '2023 - 2024',
        description: [
            'الإشراف الكامل على عمليات قسم تكنولوجيا المعلومات، وتخطيط البنية التحتية، وتدريب الكوادر البشرية.',
            'إدارة أداء الشبكات والأنظمة، وإجراء عمليات استكشاف الأخطاء وإصلاحها (Troubleshooting) المتقدمة، والصيانة الوقائية.',
            'تنظيم إجراءات نشر الأجهزة (Hardware Deployment) في بيئات عمل الشركات عالية التوافر.',
            'تطوير وتنفيذ تدابير أمن سيبراني قوية لحماية أصول البيانات المؤسسية.',
        ],
      },
      {
        role: 'IT Infrastructure Specialist',
        company: 'إيجي شارك للمقاولات',
        period: '2021 - 2023',
        description: [
            'إدارة نشر خوادم Windows Server ومحطات عمل العملاء على مستوى المؤسسة.',
            'حل المشكلات المعقدة المتعلقة بالأجهزة والبرمجيات للأجهزة الطرفية ووحدات الحوسبة المتنقلة.',
            'هندسة طبولوجيا الشبكات الداخلية لتلبية متطلبات الاتصال المحددة لمواقع البناء والعمل الميداني.',
        ],
      },
      {
        role: 'System Support Engineer',
        company: 'معهد بحوث أمراض العيون',
        period: '2019 - 2022',
        description: [
            'إدارة بيئات Windows Server (2012/2019) والتحكم في سياسات المستخدم عبر Active Directory.',
            'تقديم الدعم الفني الحيوي للأجهزة الطبية المتصلة بالشبكة والأجهزة المكتبية.',
            'المساعدة في تكوين شبكات داخلية آمنة للتعامل مع البيانات الطبية الحساسة.',
        ],
      },
      {
        role: 'Network Operations Lead',
        company: 'أكاديمية M.I.C.A',
        period: '2019 - 2021',
        description: [
            'تصميم وتنفيذ وصيانة البنية التحتية للشبكات على مستوى المؤسسة للمرافق التعليمية.',
            'تكوين وتحسين أجهزة الشبكة (Routers, Switches, Firewalls) لضمان التوافر العالي وقابلية التوسع.',
        ],
      },
    ],
    certificates: COMMON_CERTIFICATES
  },
  it: {
    personalInfo: {
      name: 'Mohammed Alghanam',
      title: 'Full Stack Engineer | Digital Architect',
      bio: "Sono un architetto digitale che colma il divario tra design creativo e ingegneria tecnica. Con una solida base nell'infrastruttura IT, costruisco soluzioni digitali robuste, sicure e visivamente sbalorditive. Il mio portfolio spazia da esperienze immersive WordPress per marchi di lusso come Noor Group a complessi sistemi ERP basati sui dati per la pianificazione delle risorse aziendali.",
    },
    projects: COMMON_PROJECTS.map((p, i) => ({
      ...p,
      description: [
        'Un quartier generale digitale futuristico per un\'agenzia pubblicitaria leader. Ho progettato un\'esperienza visivamente immersiva ad alto impatto utilizzando WordPress ed Elementor Pro.',
        'Un sistema ERP mission-critical costruito per "Billionaire Car Rental". Sviluppato con Next.js e TypeScript, questa piattaforma interna gestisce la gestione della flotta e la logistica delle prenotazioni.',
        'Uno strumento di elaborazione delle immagini lato client ad alte prestazioni. Costruito con React and Canvas API, consente filigrane sicure e in batch per i creatori di contenuti.',
        'Un ecosistema di gestione delle attività minimalista ma potente. Progettato per la produttività aziendale, questa applicazione offre gestione persistente dello stato e un\'interfaccia utente priva di distrazioni.',
        'Una galleria d\'arte digitale per il design d\'interni premium. Ho utilizzato un approccio headless all\'interno di WordPress per creare un sistema di navigazione fluido.',
        'Un catalogo digitale completo per la produzione di legno di lusso. Questo progetto ha comportato la strutturazione di dati di prodotto complessi in un\'esperienza di navigazione intuitiva.',
        'Spookify AI è un generatore di costumi immersivo e high-tech che trasforma le tue foto in personaggi cinematografici di Halloween utilizzando uno styling neurale avanzato.',
        'Enjaz è una moderna applicazione desktop per il monitoraggio delle prestazioni del team, la gestione delle attività e la valutazione. Costruita con Tauri, React e TypeScript.'
      ][i]
    })),
    services: [
      {
        title: 'Web App Aziendali',
        description: 'Costruzione di applicazioni scalabili e critiche per il business utilizzando Next.js e React. Specializzato in ERP, Dashboard e Sistemi di Gestione.',
        icon: MonitorCheck
      },
      {
        title: 'Siti WordPress Premium',
        description: 'Creazione esperta di siti web WordPress personalizzati ad alte prestazioni. Dai portfolio aziendali all\'E-commerce, su misura per la tua brand identity.',
        icon: Layout
      },
      {
        title: 'Architettura IT & Cloud',
        description: 'Sfruttare una profonda esperienza di gestione IT per consulenze su infrastrutture server, protocolli di sicurezza e strategie di distribuzione cloud.',
        icon: ServerCog
      },
    ],
    experiences: [
      {
        role: 'Lead Full Stack Developer',
        company: 'Freelance / Libero Professionista',
        period: '2024 - Presente',
        description: [
            'Guidato la trasformazione digitale per clienti come Noor Group, fornendo soluzioni WordPress ad alte prestazioni.',
            'Architettato sistemi ERP personalizzati, come quello per Billionaire Car Rental utilizzando Next.js.',
            'Specializzato nella traduzione di requisiti aziendali complessi in interfacce digitali intuitive.',
            'Integrato le migliori pratiche SEO e protocolli di sicurezza in tutte le distribuzioni aziendali.',
        ],
      },
      {
        role: 'IT Manager',
        company: 'Bugshan Egypt Group',
        period: '2023 - 2024',
        description: [
            'Supervisionato le operazioni complete del dipartimento IT, la pianificazione dell\'infrastruttura e la formazione del personale.',
            'Gestito le prestazioni di rete e sistema, conducendo risoluzione dei problemi avanzata.',
            'Orchestrato le procedure di distribuzione hardware per ambienti aziendali ad alta disponibilità.',
            'Sviluppato e implementato robuste misure di sicurezza informatica.',
        ],
      },
      {
        role: 'Specialista Infrastrutture IT',
        company: 'Egy Shark Construction',
        period: '2021 - 2023',
        description: [
            'Gestito la distribuzione aziendale di Windows Server 2019 e workstation client.',
            'Risolto complessi problemi hardware e software per periferiche.',
            'Architettato topologie di rete interne per soddisfare specifici requisiti di connettività del cantiere.',
        ],
      },
      {
        role: 'System Support Engineer',
        company: 'Research Institute of Ophthalmology',
        period: '2019 - 2022',
        description: [
            'Amministrato ambienti Windows Server (2012/2019) e gestito le policy utente di Active Directory.',
            'Fornito supporto tecnico critico per periferiche di imaging medico.',
            'Assistito nella configurazione di reti interne sicure.',
        ],
      },
      {
        role: 'Network Operations Lead',
        company: 'M.I.C.A Academy',
        period: '2019 - 2021',
        description: [
            'Progettato, implementato e mantenuto infrastrutture di rete a livello aziendale.',
            'Configurato e ottimizzato dispositivi di rete (Router, Switch, Firewall).',
        ],
      },
    ],
    certificates: COMMON_CERTIFICATES
  },
  fr: {
    personalInfo: {
      name: 'Mohammed Alghanam',
      title: 'Ingénieur Full Stack | Architecte Numérique',
      bio: "Je suis un architecte numérique comblant le fossé entre le design créatif et l'ingénierie technique. Avec une base solide en infrastructure informatique, je construis des solutions numériques robustes, sécurisées et visuellement époustouflantes.",
    },
    projects: COMMON_PROJECTS.map((p, i) => ({
      ...p,
      description: [
        'Un siège numérique futuriste pour une agence de publicité de premier plan.',
        'Un système ERP critique construit pour "Billionaire Car Rental".',
        'Un outil de traitement d\'images côté client haute performance.',
        'Un écosystème de gestion des tâches minimaliste mais puissant.',
        'Une galerie d\'art numérique pour le design d\'intérieur haut de gamme.',
        'Un catalogue numérique complet pour la fabrication de bois de luxe.',
        'Spookify AI est un générateur de costumes immersif et high-tech qui transforme vos photos en personnages d\'Halloween cinématographiques grâce à un stylisme neuronal avancé.',
        'Enjaz est une application de bureau moderne pour le suivi des performances d\'équipe, la gestion des tâches et l\'évaluation. Construit avec Tauri, React et TypeScript.'
      ][i]
    })),
    services: [
      {
        title: 'Applications Web d\'Entreprise',
        description: 'Construction d\'applications évolutives et critiques pour l\'entreprise utilisant Next.js et React.',
        icon: MonitorCheck
      },
      {
        title: 'Sites WordPress Premium',
        description: 'Création experte de sites web WordPress personnalisés et performants.',
        icon: Layout
      },
      {
        title: 'Architecture IT & Cloud',
        description: 'Tirer parti d\'une profonde expérience de gestion informatique pour consulter sur l\'infrastructure serveur.',
        icon: ServerCog
      },
    ],
    experiences: [
      {
        role: 'Lead Full Stack Developer',
        company: 'Freelance / Indépendant',
        period: '2024 - Présent',
        description: [
            'Dirigé la transformation numérique pour des clients comme Noor Group, en fournissant des solutions WordPress performantes.',
            'Architecturé des systèmes ERP personnalisés, comme pour Billionaire Car Rental, optimisant la logique de réservation.',
            'Spécialisé dans la traduction des exigences commerciales en interfaces intuitives pour divers clients.',
            'Intégré les meilleures pratiques SEO et protocoles de sécurité sur tous les déploiements.',
        ],
      },
      {
        role: 'IT Manager',
        company: 'Bugshan Egypt Group',
        period: '2023 - 2024',
        description: [
            'Supervisé les opérations complètes du département informatique.',
            'Géré les performances réseau et système.',
            'Orchestré les procédures de déploiement matériel.',
            'Développé et mis en œuvre des mesures de cybersécurité robustes.',
        ],
      },
      {
        role: 'Spécialiste Infrastructure IT',
        company: 'Egy Shark Construction',
        period: '2021 - 2023',
        description: [
            'Géré le déploiement d\'entreprise de Windows Server 2019.',
            'Résolu des problèmes matériels et logiciels complexes.',
            'Architecturé des topologies de réseau internes.',
        ],
      },
      {
        role: 'System Support Engineer',
        company: 'Research Institute of Ophthalmology',
        period: '2019 - 2022',
        description: [
            'Administré des environnements Windows Server.',
            'Fourni un support technique critique.',
            'Aidé à la configuration de réseaux internes sécurisés.',
        ],
      },
      {
        role: 'Network Operations Lead',
        company: 'M.I.C.A Academy',
        period: '2019 - 2021',
        description: [
            'Conçu, mis en œuvre et maintenu des infrastructures réseau.',
            'Configuré et optimisé les périphériques réseau.',
        ],
      },
    ],
    certificates: COMMON_CERTIFICATES
  }
};

// Default exports (English) for backward compatibility with IDE views
export const PERSONAL_INFO = DATA_BY_LANG.en.personalInfo;
export const PROJECTS = DATA_BY_LANG.en.projects;
export const SERVICES = DATA_BY_LANG.en.services;
export const EXPERIENCES = DATA_BY_LANG.en.experiences;
export const CERTIFICATES = DATA_BY_LANG.en.certificates;

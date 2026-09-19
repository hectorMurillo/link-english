import { CompanyAgreement, CourseProgram, FaqItem, NavItem, SocialLink, TestimonialItem } from '../types';

export const SITE_CONFIG = {
  brandName: 'Link English',
  tagline: 'Cursos de inglés dinámicos para el ámbito laboral con respaldo Pearson',
  description:
    'Aprende inglés mientras trabajas con Link English. Cursos dinámicos con respaldo académico de Pearson (pearson.com), horarios flexibles y beneficios especiales para colaboradores de Coppel.',
  phoneNumberRaw: '526673314414',
  phoneNumberFormatted: '667 331 4414',
  email: 'link.english.schoollanguage@gmail.com',
  city: 'Culiacán, Sinaloa, México',
  defaultWhatsAppMessage:
    'Hola, estoy interesado en las clases de Link English con respaldo Pearson, ¿me puede dar más información?',
  logoUrl:
    'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/YZ9joPGJwyT20D5J/lenglish-YD0wLE6V6NCrWxG1.jpg',
  faviconUrl:
    'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=32,h=32,fit=crop,f=png/YZ9joPGJwyT20D5J/link-english-mjE4vgLpeysO7Pn0.png',
  heroVideoUrl:
    'https://videos.pexels.com/video-files/4629798/4629798-uhd_2560_1440_25fps.mp4',
  heroVideoPoster:
    'https://images.pexels.com/videos/4629798/pexels-photo-4629798.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  webhookUrl:
    'https://n8n.srv639121.hstgr.cloud/webhook/251cd575-33c6-41f8-bb66-9f9a65422965',
  pearsonUrl: 'https://www.pearson.com/',
};

export const PEARSON_INFO = {
  title: 'Respaldo Académico Internacional de Pearson',
  badge: 'Metodología Pearson.com',
  description:
    'En Link English basamos nuestros programas y evaluaciones en los estándares globales de Pearson (pearson.com), líder mundial en educación y evaluación lingüística (Global Scale of English - GSE).',
  highlights: [
    'Materiales y progresiones pedagógicas alineadas al marco global de Pearson',
    'Escala Global de Inglés (GSE) para medir avances reales y medibles',
    'Preparación integral con enfoque en competencias comunicativas de negocios',
    'Garantía de calidad académica internacional para tu currículum',
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Cursos', href: '#cursos' },
  { label: 'Convenios', href: '#convenios' },
  { label: 'Pearson', href: '#pearson' },
  { label: 'Preguntas', href: '#faq' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100084694850920',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/linkenglishschoolingles/',
    icon: 'instagram',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@linkenglish4',
    icon: 'tiktok',
  },
  {
    name: 'LinkedIn',
    url: 'https://mx.linkedin.com/company/link-english-escuela-de-ingl%C3%A9s',
    icon: 'linkedin',
  },
];

export const COURSES: CourseProgram[] = [
  {
    id: 'enfoque-profesional',
    title: 'Enfoque Profesional e Individual',
    badge: '100% Personalizado',
    description:
      'Nuestro equipo está compuesto por expertos comprometidos con la enseñanza eficaz del idioma inglés adaptada a tu ritmo, objetivos de carrera y agenda.',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=643,fit=crop/YZ9joPGJwyT20D5J/blog1-2-mP4MbBX0gLSvK4zn.jpg',
    features: [
      'Entrevistas de trabajo en inglés y roleplay',
      'Presentaciones corporativas y reportes',
      'Vocabulario técnico de tu industria',
      'Horarios flexibles 1 a 1 con docentes dedicados',
    ],
    idealFor: 'Profesionales, ejecutivos y personas con horarios específicos',
  },
  {
    id: 'enfoque-grupal',
    title: 'Enfoques Grupales y de Equipo',
    badge: 'Colaborativo y Dinámico',
    description:
      'Ofrecemos capacitaciones grupales formando grupos del mismo interés y nivel con el objetivo de aprovechar al máximo las dinámicas y la interacción.',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=643,fit=crop/YZ9joPGJwyT20D5J/blog3-mxBXeNVkXlSePGw1.jpg',
    features: [
      'Conversación activa y debate en equipo',
      'Resolución de situaciones laborales reales',
      'Grupos reducidos por nivel evaluado',
      'Costos preferenciales y dinámica participativa',
    ],
    idealFor: 'Colaboradores de empresas y personas que buscan practicar conversación',
  },
];

export const AGREEMENTS: CompanyAgreement[] = [
  {
    id: 'coppel',
    companyName: 'Coppel',
    buttonText: 'Soy colaborador Coppel',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=841,fit=crop/YZ9joPGJwyT20D5J/whatsapp-image-2025-09-28-at-5.28.53-pm-Y4LPVjr17MFErbOB.jpeg',
    waParam: 'SOY+COLABORADOR+COPPEL+',
    benefits: [
      'Descuento preferencial exclusivo por convenio',
      'Facilidad de horarios compatibles con jornadas laborales',
      'Diagnóstico de nivel sin costo para colaboradores',
    ],
  },
  {
    id: 'sukarne',
    companyName: 'SuKarne',
    buttonText: 'Soy colaborador SuKarne',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=890,fit=crop/YZ9joPGJwyT20D5J/whatsapp-image-2025-09-28-at-5.29.14-pm-Yan0ylrZeLHl9XO4.jpeg',
    waParam: 'SOY+COLABORADOR+SUKARNE+',
    benefits: [
      'Tarifa corporativa especial para colaboradores',
      'Enfoque en comunicación efectiva y proyectos de exportación',
      'Atención y seguimiento personalizado por WhatsApp',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Silvia Burboa',
    city: 'Culiacán, Sin.',
    quote: 'Excelente escuela de inglés 👌🏻 recomiendo completamente.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
  },
  {
    id: '2',
    name: 'Noelia Cortes',
    city: 'Culiacán, Sin.',
    quote:
      'Muy buena escuela, usan métodos de aprendizaje muy dinámicos y fácil de entender y siempre dispuestos a responder dudas.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
  },
];

export const STATS = [
  { value: '150+', label: 'Alumnos activos', description: 'Transformando sus oportunidades laborales' },
  { value: '5+', label: 'Años de experiencia', description: 'Capacitando a profesionales y empresas' },
  { value: '100%', label: 'Enfoque práctico', description: 'Orientado a conversaciones y negocios reales' },
  { value: 'Pearson', label: 'Respaldo Académico', description: 'Metodología y estándares globales pearson.com' },
];

export const SEO_FAQS: FaqItem[] = [
  {
    question: '¿Cómo puedo aprender inglés mientras trabajo a tiempo completo?',
    answer:
      'En Link English diseñamos horarios flexibles matutinos, vespertinos y sabatinos creados especialmente para personas con jornadas laborales completas. Con nuestro método dinámico no pierdes tiempo en tareas repetitivas; las sesiones se centran 100% en conversación práctica, simulación de reuniones laborales y casos de negocio reales.',
    category: 'Horarios y Modalidad',
  },
  {
    question: '¿Qué beneficios ofrece el convenio para empleados y colaboradores de Coppel?',
    answer:
      'Los colaboradores de Grupo Coppel (tiendas, BanCoppel, centros de distribución y corporativo en Culiacán o nacional) cuentan con tarifas preferenciales con descuento exclusivo, diagnóstico de nivel sin costo, atención prioritaria por WhatsApp y horarios adaptados a sus turnos de trabajo.',
    category: 'Convenio Coppel',
  },
  {
    question: '¿En qué consiste el respaldo académico de Pearson (pearson.com)?',
    answer:
      'Nuestros planes de estudio y evaluaciones se apoyan en los estándares pedagógicos de Pearson (pearson.com), la empresa líder mundial en educación y certificación de idiomas. Utilizamos la Escala Global de Inglés (Global Scale of English - GSE) para que cada habilidad aprendida tenga valor y reconocimiento profesional estandarizado.',
    category: 'Respaldo Pearson',
  },
  {
    question: '¿En cuánto tiempo comenzaré a notar avances en mi inglés de trabajo?',
    answer:
      'Desde el primer mes notarás mayor confianza al hablar, redactar correos en inglés y comprender vocabulario técnico. Nuestro objetivo es que apliques de inmediato lo aprendido en tus juntas, correos electrónicos y entrevistas de trabajo.',
    category: 'Resultados',
  },
  {
    question: '¿El diagnóstico y la entrevista inicial son realmente gratuitos?',
    answer:
      'Sí, es 100% gratuito y sin compromiso. Uno de nuestros docentes evaluará tu fluidez, comprensión y metas laborales para recomendarte el plan individual o grupal óptimo.',
    category: 'Admisiones',
  },
];

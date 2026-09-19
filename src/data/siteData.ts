import { CompanyAgreement, CourseProgram, NavItem, SocialLink, TestimonialItem } from '../types';

export const SITE_CONFIG = {
  brandName: 'Link English',
  tagline: 'Cursos de inglés dinámicos para el ámbito laboral',
  description:
    'En Link English ofrecemos cursos de inglés enfocados en el ámbito laboral con una metodología dinámica, práctica y divertida para impulsar tu crecimiento profesional.',
  phoneNumberRaw: '526673314414',
  phoneNumberFormatted: '667 331 4414',
  email: 'link.english.schoollanguage@gmail.com',
  city: 'Culiacán, Sinaloa, México',
  defaultWhatsAppMessage:
    'Hola, estoy interesado en las clases de Link English, ¿me puede dar más información?',
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
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Convenios', href: '#convenios' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#datos' },
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
  { value: '5★', label: 'Calificación promedio', description: 'Recomendado por nuestros egresados' },
];

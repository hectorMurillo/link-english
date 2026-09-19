export type EnglishLevel = 'Básico' | 'Intermedio' | 'Avanzado' | 'No lo sé';
export type ContactPreference = 'WhatsApp' | 'Llamada';

export interface LeadFormData {
  nombre: string;
  whatsapp: string;
  empresa: string;
  nivel: EnglishLevel | '';
  contacto: ContactPreference;
  linkEnglish?: string; // honeypot
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'facebook' | 'instagram' | 'tiktok' | 'linkedin';
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface CompanyAgreement {
  id: string;
  companyName: string;
  buttonText: string;
  image: string;
  waParam: string;
  benefits: string[];
}

export interface CourseProgram {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  features: string[];
  idealFor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export type AwardCategory = 'all' | 'stationery' | 'technology' | 'boardgames' | 'discounts' | 'gift-cards';

export interface AwardItem {
  id: string;
  name: string;
  nameEn: string;
  cost: number;
  category: AwardCategory;
  image: string;
  badge?: string;
  badgeEn?: string;
}

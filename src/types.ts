export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Applications' | 'AI / ML' | 'Personal';
  description: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'Programming Languages' | 'Web Technologies' | 'Frameworks & Libraries' | 'Tools & Design' | string;
  percentage: number;
  icon: string;
  description: string;
  color?: string;
  level?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
  icon: string;
  location?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  duration?: string;
  icon?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  flagCode?: string;
}

export interface TechContentCard {
  id: string;
  title: string;
  category: string;
  description: string;
  link?: string;
  icon: string;
}

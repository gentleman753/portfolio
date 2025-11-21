import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  techStack: string[];
  description: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
  image?: string; // Optional placeholder
}

export interface ExperienceItem {
  role: string;
  company: string;
  period?: string;
  highlights: string[];
}

export interface Achievement {
  title: string;
  rank: string;
  description?: string;
  icon: LucideIcon;
}
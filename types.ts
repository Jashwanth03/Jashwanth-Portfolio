import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  // Fix: Use ReactNode for component types to avoid JSX namespace issues in .ts files.
  icon: ReactNode;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export enum ExperienceType {
  Work = 'Work',
  Education = 'Education',
}

export interface ExperienceItem {
  type: ExperienceType;
  title: string;
  institution: string;
  period: string;
  description?: string; // Made optional
  grade?: string; // Added optional grade
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

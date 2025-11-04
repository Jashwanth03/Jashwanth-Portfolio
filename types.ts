import type { ReactNode } from 'react';

export interface SkillPillColors {
    bg: string;
    text: string;
    border: string;
}

export interface SkillCardData {
    title: string;
    icon: string;
    skills: string[];
    pillColors: SkillPillColors;
    cardTheme: {
        border: string;
        shadow: string;
    };
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
  liveUrlText?: string;
  repoUrl?: string;
}

export interface Hobby {
  icon: string;
  title: string;
  description: string;
  theme: {
    border: string;
    shadow: string;
  };
}
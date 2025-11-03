import React from 'react';
import { type Skill, type SkillCategory, ExperienceType, type ExperienceItem, type Project } from './types';

// --- SKILL ICONS (Updated with official & clean SVGs) ---

const HTML5Icon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>HTML5</title>
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.924-2.91.78-2.91-.78-.188-2.11H6.248l.33 4.17L12 19.35l5.378-1.44.744-8.157H4.59L3.54 0h17.92l-.97 4.413z" fill="#E34F26"/>
    </svg>
);

const CSS3Icon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>CSS3</title>
        <path d="m1.5.002 1.9 21.56L12 24.002l8.6-2.44L22.5.002H1.5zM17.1 4.415l-11.7.002.2 2.62h9.2l-.2 2.717H8.3l.2 2.575h6.1l-.4 3.925-2.9.782-2.9-.782-.2-2.11h-2.2l.3 4.172L12 19.352l5.4-1.442.7-8.157H4.6l-.9-4.338h15.2l-.2 2.573z" fill="#1572B6"/>
    </svg>
);

const JSIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>JavaScript</title>
        <path d="M0 0h24v24H0V0z" fill="#F7DF1E"/>
        <path d="M9.424 16.428c.27.42.66.72 1.17.9.51.18 1.05.27 1.62.27.87 0 1.62-.21 2.25-.63.63-.42.945-1.02.945-1.8s-.315-1.41-.945-1.86c-.63-.45-1.41-.675-2.34-.675h-.72v-1.32h.66c.81 0 1.5-.21 2.07-.63.57-.42.855-.99.855-1.71 0-.69-.24-1.245-.72-1.665-.48-.42-1.11-.63-1.89-.63-.72 0-1.32.21-1.77.63-.45.42-.675.96-.675 1.62H7.294c0-.99.33-1.845.99-2.565.66-.72 1.515-1.08 2.565-1.08 1.02 0 1.89.345 2.61.93.72.675 1.08 1.485 1.08 2.43 0 .78-.21 1.44-.63 1.98-.42.54-.99.9-1.71 1.08v.21c.96.15 1.77.585 2.43 1.305.66.72.99 1.62.99 2.7 0 1.02-.36 1.875-1.08 2.565-.72.69-1.635 1.035-2.745 1.035-1.14 0-2.07-.315-2.79-.945-.72-.63-1.08-1.44-1.08-2.43h2.16c0 .63.195 1.14.585 1.53z" fill="#000"/>
    </svg>
);

const ReactIcon = () => (
    <svg role="img" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
        <title>React</title>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
    </svg>
);

const JavaIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Java</title>
        <path d="M18.8 6.78c-1.22-2.3-3.14-4.2-5.46-5.4-2.32-1.2-4.9-1.8-7.7-1.8-5.5 0-10.1 1.9-13.8 5.7S-3.76 14.18-3.76 20.08c0 5.4 1.7 10 5.2 13.8s7.9 5.7 13.3 5.7c2.9 0 5.6-.6 8.1-1.8s4.6-2.9 6.2-5.1c-1.3.8-2.8 1.4-4.5 1.8s-3.5.6-5.4.6c-4.1 0-7.7-1.4-10.7-4.1-3-2.8-4.5-6.3-4.5-10.5s1.5-7.7 4.5-10.5c3-2.8 6.6-4.1 10.7-4.1 1.9 0 3.7.3 5.3.9s3.1 1.5 4.4 2.8c-1.8-1.2-3.8-1.8-6.1-1.8-4.8 0-8.8 1.6-12.1 4.7-3.3 3.1-4.9 7.3-4.9 12.4s1.7 9.3 5 12.4c3.3 3.1 7.4 4.7 12.2 4.7.9 0 1.8-.1 2.7-.2s1.7-.3 2.5-.6c3-1.1 5.4-3.1 7.2-6 .3-1.1.5-2.2.5-3.3.01-2.8-.79-5.3-2.29-7.5zm2.5 13.22v-4h-4.9c-.2-1.3-.6-2.6-1.1-3.8.8-.4 1.6-1 2.3-1.7s1.2-1.6 1.4-2.5h2.3v-4H4.24v4h2.4c-.2.9-.6 1.8-1.2 2.5s-1.4 1.3-2.2 1.7c-.6 1.2-1 2.5-1.2 3.8H-1.06v4h4.9c.2 1.3.6 2.6 1.1 3.8-.8.4-1.6 1-2.3 1.7s-1.2 1.6-1.4 2.5H-1.06v4h16.11v-4h-2.4c.2-.9.6-1.8 1.2-2.5s1.4-1.3 2.2-1.7c.6-1.2 1-2.5 1.2-3.8H21.3z" fill="#007396"/>
        <path d="M12.89 1.45s-1.89-1.58-4.43-1.43c-3.53.21-5.78 3.1-5.78 6.57 0 2.2 1.07 5.31 3.4 6.9-1.28-1.2-1.92-3.46-1.92-5.43 0-2.68 1.43-4.48 3.59-4.83 2-.31 3.55 1.15 3.55 1.15l1.59-3z" fill="#F89820"/>
    </svg>
);

const SpringBootIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Spring</title>
        <path d="M22.518 9.682c.246-1.996-.28-4.136-1.45-5.83-1.2-1.74-2.9-2.926-4.94-3.48-1.956-.53-4.12-.41-5.95.335-1.9.77-3.49 2.15-4.5 3.91-.97 1.7-.99 3.75-.04 5.48.92 1.67 2.65 2.92 4.6 3.49 1.95.57 4.04.41 5.79-.39 1.6-.72 2.87-2.02 3.6-3.54.34-.7.54-1.46.6-2.24l.01-.15v-.01c0-.02 0-.03.01-.05m-5.18 2.21c-.57.99-1.48 1.74-2.58 2.1-1.12.35-2.34.28-3.4-.2-1.1-.5-1.98-1.4-2.48-2.43-.5-1.01-.58-2.2-.2-3.32.38-1.12 1.2-2.1 2.25-2.68 1.05-.58 2.28-.73 3.48-.42 1.15.3 2.15 1.05 2.76 2.08.63 1.04.8 2.3.45 3.45-.17.58-.45 1.12-.8 1.6.02-.01.03-.02.02-.02z" fill="#6DB33F"/>
    </svg>
);

const PostgreSQLIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>PostgreSQL</title>
        <path d="M12.44.225h-.37c-3.15 0-6.14.53-8.91 1.58-2.77 1.05-5.2 2.6-7.34 4.6-2.13 2-3.8 4.4-4.88 7.15-1.07 2.75-1.63 5.7-1.63 8.85 0 2.85.53 5.6 1.58 8.25 1.05 2.65 2.58 5.05 4.56 7.1 2 2.1 4.35 3.8 7.05 4.9 2.7 1.1 5.6 1.6 8.7 1.6h.15c3.6 0 7.05-.78 10.2-2.36 3.15-1.58 5.9-3.86 8.1-6.75l20.4-20.39 6.6-6.6-20.39-20.4c2.55-3.08 4.35-6.75 5.25-10.95.9-4.12.53-8.4-1.28-12.45S1.64-15.675-1.34-17.925c-3-2.3-6.53-3.9-10.43-4.95-3.9-1.05-8.1-1.43-12.38-1.12zm58.18 82.22L6.14 58.07c-2.92 2.4-6.22 4.2-9.75 5.4-3.52 1.2-7.27 1.8-11.17 1.8h-.15c-2.78 0-5.5-.45-8.1-1.35s-4.95-2.1-7.05-3.6c-2.1-1.5-3.83-3.3-5.18-5.4-1.35-2.1-2.02-4.5-2.02-7.1s.6-5.1 1.72-7.35c1.13-2.25 2.78-4.3 4.8-5.92 2.03-1.65 4.35-2.96 6.9-3.86 2.55-.9 5.32-1.4 8.25-1.4h.3c3.6 0 7.05.6 10.35 1.88s6.07 3.22 8.32 5.77c2.25 2.55 3.9 5.55 4.73 9s.56 6.9-.6 10.2c-1.16 3.3-2.96 6.2-5.4 8.7l20.08 20.1 4.43 4.42-.15.15-2.1 2.1zm-46-26.8c-1.42 0-2.8-.15-4.12-.52-1.32-.38-2.58-.83-3.87-1.32-1.28-.48-2.48-1.08-3.6-1.72-1.12-.65-2.15-1.3-3.08-2s-1.6-1.5-2.18-2.32-1.05-1.78-1.35-2.82c-.3-1.05-.45-2.18-.45-3.3s.15-2.1.45-3.15c.3-1.05.7-2 1.3-2.92s1.3-1.78 2.2-2.58c.9-.8 1.85-1.5 3-2.2s2.38-1.3 3.75-1.8c1.38-.5 2.82-.9 4.32-1.2s3-.45 4.5-.45h.15c2.4 0 4.75.4 7 1.28 2.25.88 4.3 2.02 6.08 3.45 1.78 1.42 3.22 3.1 4.28 5.02s1.65 3.9 1.65 6c0 2.2-.56 4.3-1.68 6.3-1.12 2-2.68 3.7-4.65 5.1-1.97 1.4-4.2 2.5-6.68 3.2-2.48.7-5.18 1.05-8.1 1.05zm-1.05-36.9c-2.25 0-4.42.38-6.52 1.12-2.1.75-4.05 1.8-5.7 3.1-1.65 1.3-3.15 2.9-4.28 4.7-1.12 1.8-1.72 3.8-1.72 5.9s.6 4.3 1.8 6.2c1.2 1.9 2.85 3.6 4.95 4.95 2.1 1.35 4.5 2.4 7.2 3.08s5.55 1.05 8.55 1.05h.38c1.9 0 3.75-.22 5.55-.6s3.45-.9 5.02-1.6c1.58-.7 3-1.6 4.12-2.7s2.08-2.5 2.7-4.1c.62-1.6.9-3.3.9-5.2s-.3-3.8-.9-5.5c-.6-1.7-1.42-3.2-2.25-4.6-.82-1.4-1.9-2.7-3.15-3.8s-2.78-2.1-4.42-2.9c-1.65-.8-3.45-1.4-5.4-1.8-1.95-.4-3.9-.6-6-.6h-.22z" fill="#336791"/>
    </svg>
);


export const SKILLS_DATA: SkillCategory[] = [
    {
        category: 'Front End',
        skills: [
            { name: 'HTML', icon: <HTML5Icon /> },
            { name: 'CSS', icon: <CSS3Icon /> },
            { name: 'Javascript', icon: <JSIcon /> },
            { name: 'React.js', icon: <ReactIcon /> },
        ]
    },
    {
        category: 'Back End',
        skills: [
            { name: 'Java', icon: <JavaIcon /> },
            { name: 'Spring Boot', icon: <SpringBootIcon /> },
        ]
    },
    {
        category: 'Database',
        skills: [
            { name: 'PostgreSQL', icon: <PostgreSQLIcon /> },
        ]
    }
];

export const EDUCATION_DATA: ExperienceItem[] = [
  {
    type: ExperienceType.Education,
    title: "Bachelor's in Computer Science",
    institution: 'Panimalar Institute of Technology - Chennai',
    period: '2021-2025',
    grade: '8.53 CGPA',
  },
  {
    type: ExperienceType.Education,
    title: 'HSC',
    institution: 'Velammal Vidhyalaya',
    period: '2020-2021',
    grade: '82%',
  },
  {
    type: ExperienceType.Education,
    title: 'SSLC',
    institution: 'Velammal Vidhyalaya',
    period: '2018-2019',
    grade: '84%',
  },
];

export const WORK_DATA: ExperienceItem[] = [
  {
    type: ExperienceType.Work,
    title: 'Center Of Excellence (COE) Trainee',
    institution: 'Tech Mahindra - Chennai',
    period: 'Jan 2025 - April 2025',
  },
  {
    type: ExperienceType.Work,
    title: 'Software Development Trainee',
    institution: 'TANGEDCO - Chennai',
    period: 'Jul 2024 - Aug 2024',
  },
];


export const PROJECTS_DATA: Project[] = [
  {
    title: 'CrisisConnect: Disaster Management App',
    description: 'A college project building a disaster safety app with React and Node.js for real-time alerts in India. Features weather updates, user signup, SMS alerts via Twilio, and an interactive map with React-Leaflet.',
    tags: ['React', 'Node.js', 'TailwindCSS', 'MongoDB', 'Twilio', 'Ambee API'],
    imageUrl: 'https://picsum.photos/seed/crisisconnect/400/300',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Movie Search App',
    description: 'A personal project developed with React to display trending movies and implement search functionality. Integrates The Movie DB API for real-time data and uses AppWrite for the database.',
    tags: ['React', 'JavaScript', 'TailwindCSS', 'AppWrite', 'The Movie DB API'],
    imageUrl: 'https://picsum.photos/seed/moviesearch/400/300',
    liveUrl: '#',
    repoUrl: '#',
  },
];
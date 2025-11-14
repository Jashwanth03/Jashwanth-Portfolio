
import React from 'react';
import { ExperienceType, type ExperienceItem, type Project, type SkillCardData, type Hobby } from './types';



export const SKILLS_DATA: SkillCardData[] = [
    {
        title: 'Programming',
        icon: '/assets/icons/programming.png',
        skills: ['Java', 'JavaScript'],
        pillColors: { bg: 'bg-sky-900/50', text: 'text-sky-300', border: 'border-sky-400/20' },
        cardTheme: { border: 'hover:border-sky-500', shadow: 'hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]' }
    },
    {
        title: 'Front-end',
        icon: '/assets/icons/frontend.png',
        skills: ['HTML', 'CSS', 'React.js', 'TailwindCSS'],
        pillColors: { bg: 'bg-purple-900/50', text: 'text-purple-300', border: 'border-purple-400/20' },
        cardTheme: { border: 'hover:border-purple-500', shadow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' }
    },
    {
        title: 'Backend & Database',
        icon: '/assets/icons/database.png',
        skills: ['Spring Boot', 'PostgreSQL', 'MongoDB', 'AppWrite' ],
        pillColors: { bg: 'bg-green-900/50', text: 'text-green-300', border: 'border-green-400/20' },
        cardTheme: { border: 'hover:border-green-500', shadow: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]' }
    },
    {
        title: 'Languages',
        icon: '/assets/icons/language.png',
        skills: ['English', 'Tamil', 'Hindi', 'Telugu'],
        pillColors: { bg: 'bg-red-900/50', text: 'text-red-300', border: 'border-red-400/20' },
        cardTheme: { border: 'hover:border-red-500', shadow: 'hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]' }
    }
];

export const EDUCATION_DATA: ExperienceItem[] = [
  {
    type: ExperienceType.Education,
    title: "Bachelor's in Computer Science",
    institution: 'Panimalar Institute of Technology | Chennai',
    period: '2021-2025',
    grade: '8.53 CGPA',
  },
  {
    type: ExperienceType.Education,
    title: 'HSC',
    institution: 'Velammal Vidhyala | Mel Ayanambakkam',
    period: '2020-2021',
    grade: '82%',
  },
  {
    type: ExperienceType.Education,
    title: 'SSLC',
    institution: 'Velammal Vidhyala | Mel Ayanambakkam',
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
    title: 'Movie Search App',
    description: 'A personal project developed with React to display trending movies and implement search functionality. Integrates The Movie DB API for real-time data and uses AppWrite for the database.',
    tags: ['React', 'JavaScript', 'TailwindCSS', 'AppWrite', 'The Movie DB API'],
    imageUrl: '/assets/movieapp.png',
    liveUrl: 'https://movieflex-app.vercel.app/',
    repoUrl: 'https://github.com/Jashwanth03/Movieflex-App',
  },
  {
    title: 'CrisisConnect: Disaster Management App',
    description: 'A college project building a disaster safety app with React and Node.js for real-time alerts in India. Features weather updates, user signup, SMS alerts via Twilio, and an interactive map with React-Leaflet.',
    tags: ['React', 'Node.js', 'TailwindCSS', 'MongoDB', 'Twilio', 'Ambee API'],
    imageUrl: '/assets/crisisconnect.png',
    liveUrl: 'https://youtu.be/G9wY4K9uKyw',
    liveUrlText: 'Watch Video',
    repoUrl: 'https://github.com/Jashwanth03/CRISISCONNECT-CROWD-SOURCE-DISASTER-MANAGEMENT-APPLICATION-',
  },
  {
    title: 'To-Do React App',
    description: 'Built a clean and responsive To‑Do List web app using React JS and Tailwind CSS, featuring dynamic task management with add, complete, and delete actions. Implemented real‑time UI updates and browser‑based data persistence using local storage.',
    tags: ['React', 'JavaScript', 'TailwindCSS', 'Browser Local Storage'],
    imageUrl: '/assets/todo.png',
    liveUrl: 'https://to-do-app-three-zeta-69.vercel.app/',
    repoUrl: 'https://github.com/Jashwanth03/To-Do-App',
  },
];

// --- FONT AWESOME HOBBY ICONS ---



export const HOBBIES_DATA: Hobby[] = [
    {
        icon: '/assets/icons/gamepad.png',
        title: 'Playing Games',
        description: "Diving into immersive open worlds, competitive matchmaking, and quirky indie titles. It's my favorite way to unwind and strategize.",
        theme: { border: 'hover:border-purple-500', shadow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' }
    },
    {
        icon: '/assets/icons/spotify.png',
        title: 'Listening to Music',
        description: "Spotify is my constant companion. I'm always exploring new genres, creating playlists for every mood, and finding the perfect soundtrack for coding.",
        theme: { border: 'hover:border-green-500', shadow: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]' }
    },
    {
        icon: '/assets/icons/gamedev.png',
        title: 'Developing Games',
        description: "Bringing ideas to life with code is my passion. I love the challenge of building game mechanics and creating interactive experiences from scratch.",
        theme: { border: 'hover:border-orange-500', shadow: 'hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]' }
    },
    {
        icon: '/assets/icons/manga.png',
        title: 'Manga & Anime',
        description: "Getting lost in compelling stories and stunning animation. From epic adventures to thought-provoking dramas, I'm always looking for the next great series.",
        theme: { border: 'hover:border-sky-500', shadow: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]' }
    }
];
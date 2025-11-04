
import React from 'react';
import { ExperienceType, type ExperienceItem, type Project, type SkillCardData, type Hobby } from './types';

// --- NEW SKILL CATEGORY ICONS ---

const ProgrammingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-sky-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
    </svg>
);

const FrontendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-purple-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
  </svg>
);

const BackendDatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full text-green-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
    </svg>
);

const LanguagesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-red-400" stroke="currentColor" strokeWidth="1.5" fill="none" viewBox="0 0 24 24" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
    </svg>
);


export const SKILLS_DATA: SkillCardData[] = [
    {
        title: 'Programming',
        icon: <ProgrammingIcon />,
        skills: ['Java', 'JavaScript'],
        pillColors: { bg: 'bg-sky-900/50', text: 'text-sky-300', border: 'border-sky-400/20' },
        cardTheme: { border: 'hover:border-sky-500', shadow: 'hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]' }
    },
    {
        title: 'Front-end',
        icon: <FrontendIcon />,
        skills: ['HTML', 'CSS', 'React.js', 'TailwindCSS'],
        pillColors: { bg: 'bg-purple-900/50', text: 'text-purple-300', border: 'border-purple-400/20' },
        cardTheme: { border: 'hover:border-purple-500', shadow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' }
    },
    {
        title: 'Backend & Database',
        icon: <BackendDatabaseIcon />,
        skills: ['Spring Boot', 'PostgreSQL', 'MongoDB', 'AppWrite' ],
        pillColors: { bg: 'bg-green-900/50', text: 'text-green-300', border: 'border-green-400/20' },
        cardTheme: { border: 'hover:border-green-500', shadow: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]' }
    },
    {
        title: 'Languages',
        icon: <LanguagesIcon />,
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
    imageUrl: 'https://images.unsplash.com/photo-1620145648299-f926ac0a9470?q=80&w=400&h=300&fit=crop',
    liveUrl: 'https://movieflex-app.vercel.app/',
    repoUrl: 'https://github.com/Jashwanth03/Movieflex-App',
  },
  {
    title: 'CrisisConnect: Disaster Management App',
    description: 'A college project building a disaster safety app with React and Node.js for real-time alerts in India. Features weather updates, user signup, SMS alerts via Twilio, and an interactive map with React-Leaflet.',
    tags: ['React', 'Node.js', 'TailwindCSS', 'MongoDB', 'Twilio', 'Ambee API'],
    imageUrl: 'https://picsum.photos/seed/crisisconnect/400/300',
    liveUrl: 'https://youtu.be/G9wY4K9uKyw',
    liveUrlText: 'Watch Video',
    repoUrl: 'https://github.com/Jashwanth03/CRISISCONNECT-CROWD-SOURCE-DISASTER-MANAGEMENT-APPLICATION-',
  },
];

// --- FONT AWESOME HOBBY ICONS ---

const GamingIcon = () => (
    <svg viewBox="0 0 640 512" className="h-12 w-12 text-purple-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192S554 64 448 64H192zM160 240c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V304h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H256v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H160zm224 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm64-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
    </svg>
);


const MusicIcon = () => (
    <svg viewBox="0 0 496 512" className="h-12 w-12 text-green-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zM362.3 334.8c-6.8 11.2-22.1 14.8-33.3 8-41.9-25.2-94.2-30.8-158.4-16.9-13.1 2.9-26.1-4.8-29-17.9s4.8-26.1 17.9-29c71.2-15.5 130-9.2 178.2 19.3 12.3 7.3 16.6 23.3 9.3 35.5zM390.4 274.1c-8.4 13.8-27.1 18.2-40.9 9.8-49.3-29.6-123.5-37.6-180.1-20.8-15.5 4.6-31.5-3.8-36.1-19.3s3.8-31.5 19.3-36.1c66-19.3 147.2-10.3 203.4 24 15.2 9.1 19.9 29.3 10.9 44.4zm23.6-64.4c-9.8 16.3-33.7 21.4-50.1 11.6-60.6-36.5-160-45.5-224.2-25.1-18.1 5.8-36.8-4.1-42.6-22.2s4.1-36.8 22.2-42.6c73-23.4 181.4-13.2 252.4 28.5 17.5 10.5 22.9 34.9 12.3 52.4z"/>
    </svg>
);

const GameDevIcon = () => (
    <svg viewBox="0 0 384 512" className="h-12 w-12 text-orange-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M192 0C86 0 0 86 0 192V320c0 44.2 35.8 80 80 80h32c0 44.2 35.8 80 80 80s80-35.8 80-80h32c44.2 0 80-35.8 80-80V192C384 86 298 0 192 0zM128 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm128 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
    </svg>
);

const MangaAnimeIcon = () => (
    <svg viewBox="0 0 640 512" className="h-12 w-12 text-sky-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M192 128c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 10.9 5.5 20.7 14.1 26.5L64 224v64h96v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h16.2c-2.3-10.4-3.5-21.2-3.8-32.2c-.3-11.4 1.1-22.8 4.3-33.8c3-10.4 7.6-20.2 13.5-29.2c1.6-2.4 3.2-4.7 4.9-7c2.2-2.9 4.4-5.6 6.8-8.2c5-5.3 10.2-10 15.9-14.1c11-7.8 23.2-13.4 36.3-16.5c-1.2-5.3-1.8-10.7-1.8-16.1c0-35.3 28.7-64 64-64s64 28.7 64 64c0 5.5-.7 10.8-1.8 16.1c13.1 3.1 25.3 8.7 36.3 16.5c5.7 4.1 10.9 8.8 15.9 14.1c2.4 2.6 4.6 5.3 6.8 8.2c1.7 2.3 3.3 4.6 4.9 7c5.9 9 10.5 18.8 13.5 29.2c3.2 11 4.6 22.3 4.3 33.8c-.3 11-1.5 21.8-3.8 32.2H544v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h96V224L517.9 154.5c8.6-5.8 14.1-15.6 14.1-26.5c0-17.7-14.3-32-32-32s-32 14.3-32 32zm80 288c-17.7 0-32 14.3-32 32v32h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-32c0-17.7-14.3-32-32-32z"/>
    </svg>
);

export const HOBBIES_DATA: Hobby[] = [
    {
        icon: <GamingIcon />,
        title: 'Playing Games',
        description: "Diving into immersive open worlds, competitive matchmaking, and quirky indie titles. It's my favorite way to unwind and strategize.",
        theme: { border: 'hover:border-purple-500', shadow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' }
    },
    {
        icon: <MusicIcon />,
        title: 'Listening to Music',
        description: "Spotify is my constant companion. I'm always exploring new genres, creating playlists for every mood, and finding the perfect soundtrack for coding.",
        theme: { border: 'hover:border-green-500', shadow: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]' }
    },
    {
        icon: <GameDevIcon />,
        title: 'Developing Games',
        description: "Bringing ideas to life with code is my passion. I love the challenge of building game mechanics and creating interactive experiences from scratch.",
        theme: { border: 'hover:border-orange-500', shadow: 'hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]' }
    },
    {
        icon: <MangaAnimeIcon />,
        title: 'Manga & Anime',
        description: "Getting lost in compelling stories and stunning animation. From epic adventures to thought-provoking dramas, I'm always looking for the next great series.",
        theme: { border: 'hover:border-sky-500', shadow: 'hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]' }
    }
];
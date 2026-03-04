// ── NAVIGATION ───────────────────────────────────────────────────────────────
export const NAV_LINKS = ['home', 'about', 'skills', 'projects', 'contact'];

// ── PROJECTS ──────────────────────────────────────────────────────────────────
export interface Project {
  id: number;
  name: string;
  tag: string;
  github: string;
  live: string;
  desc: string;
  tech: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Regal Cravings',
    tag: 'Food App',
    github: 'https://github.com/dem199/Regal-Cravings',
    live: 'https://regal-cravings.netlify.app/',
    desc: 'A full-featured food ordering app. Browse menus, add to cart, and get your cravings delivered to your doorstep.',
    tech: ['React', 'CSS', 'Firebase'],
  },
  {
    id: 2,
    name: 'Koinnest',
    tag: 'Fintech App',
    github: 'https://github.com/dem199/koinnest',
    live: 'https://dem199.github.io/Capstone-project',
    desc: 'A modern fintech dashboard featuring authentication, transaction management, clean, responsive UI with darkmode support.',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 3,
    name: 'Movie Search App',
    tag: 'React App',
    github: 'https://github.com/dem199/Movie-search-app',
    live: 'https://dem199.github.io/Movie-search-app',
    desc: 'Search any film with real-time results, ratings, release dates, and detailed overviews.',
    tech: ['React', 'OMDB API', 'CSS'],
  },
 


  {
    id: 4,
    name: 'Tenzies Game',
    tag: 'Game',
    github: 'https://github.com/dem199/Tenzies-game',
    live: 'https://tenzies-game-optimistic.netlify.app',
    desc: 'Classic dice game in React. Hold matching dice and roll the rest until all ten show the same number!',
    tech: ['React', 'useState', 'CSS'],
  },
  {
    id: 5,
    name: 'VanCruise',
    tag: 'Full App',
    github: 'https://github.com/dem199/vancruise',
    live: 'https://vancruise.netlify.app/',
    desc: 'Airbnb-style van rental platform for road-trippers, with browsing, filtering, and host dashboards.',
    tech: ['React Router', 'Firebase', 'CSS'],
  },
];

// ── SKILLS ────────────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  level: number;
  color: string;
}

export const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 90, color: '#F7DF1E' },
  { name: 'React / TypeScript', level: 88, color: '#61DAFB' },
  { name: 'HTML5 / CSS3', level: 95, color: '#E34F26' },
  { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
  { name: 'Next.js', level: 72, color: '#ffffff' },
  { name: 'Firebase', level: 70, color: '#FFCA28' },
  { name: 'Git / GitHub', level: 85, color: '#F05032' },
  { name: 'Figma / UI Design', level: 68, color: '#A259FF' },
];

export const TOOLS = [
  'VS Code', 'Figma', 'Git', 'Netlify', 'Firebase',
  'Bootstrap', 'Sass', 'Stack Overflow', 'Next.js',
  'TypeScript', 'React', 'Tailwind CSS',
];

export const LEARNING = [
  'Three.js / WebGL',
  'Node.js & Express',
  'PostgreSQL',
  'Docker Basics',
];

// ── STATS ─────────────────────────────────────────────────────────────────────
export interface Stat {
  label: string;
  value: number;
}

export const STATS: Stat[] = [
  { label: 'Projects Built', value: 9 },
  { label: 'GitHub Commits', value: 200 },
  { label: 'Tech Skills', value: 15 },
  { label: 'Years Coding', value: 3 },
];

// ── SOCIAL LINKS ──────────────────────────────────────────────────────────────
export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  value: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Email',
    href: 'mailto:olatunbosunopeyemi186035@gmail.com',
    icon: '📧',
    value: 'olatunbosunopeyemi186035@gmail.com',
  },
  {
    label: 'WhatsApp',
    href: 'http://wa.me/+2348176779961',
    icon: '💬',
    value: '+234 817 677 9961',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/opeyemi-olatunbosun-85b30b163',
    icon: '🔗',
    value: 'opeyemi-olatunbosun',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/dem199',
    icon: '🐱',
    value: 'github.com/dem199',
  },
];

// ── TYPE ANIMATION WORDS ──────────────────────────────────────────────────────
export const TYPE_WORDS = [
  'Frontend Developer',
  'React Specialist',
  'Software Engineer',
  'UI Craftsman',
];
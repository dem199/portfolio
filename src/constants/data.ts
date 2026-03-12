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
    name: 'Sales Monitorr',
    tag: 'Dashboard',
    github: 'https://github.com/dem199/sales-dashboard-pro',
    live: 'https://sales-monitorr.netlify.app/',
    desc: 'A professional sales analytics dashboard with real-time charts, KPI tracking, and an intuitive reporting interface.',
    tech: ['React', 'Recharts', 'Tailwind'],
  },
  {
    id: 3,
    name: 'Koinnest',
    tag: 'Fintech',
    github: 'https://github.com/dem199/koinnest',
    live: 'https://koinnest.netlify.app/',
    desc: 'A fintech platform for seamless digital payments and crypto tracking. Built for modern finance.',
    tech: ['React', 'TypeScript', 'Firebase'],
  },
  {
    id: 4,
    name: 'VanCruise',
    tag: 'Full App',
    github: 'https://github.com/dem199/vancruise',
    live: 'https://vancruise.netlify.app/',
    desc: 'Airbnb-style van rental platform for road-trippers, with browsing, filtering, and host dashboards.',
    tech: ['React Router', 'Firebase', 'CSS'],
  },
  {
    id: 5,
    name: 'Speed Typing Game',
    tag: 'Game',
    github: 'https://github.com/dem199/Speed-typing-game',
    live: 'https://dem199.github.io/Speed-typing-game',
    desc: 'Race the clock to type as many words as possible. Real-time tracking, countdown timer, and final score.',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 6,
    name: 'Movie Watchlist',
    tag: 'React App',
    github: 'https://github.com/dem199/Movie-watchlist',
    live: 'https://my-movie-search-watchlist.netlify.app',
    desc: 'Save and manage your personal watchlist with detailed info, star ratings, and search functionality.',
    tech: ['React', 'REST API', 'Netlify'],
  },
  {
    id: 7,
    name: 'Tenzies Game',
    tag: 'Game',
    github: 'https://github.com/dem199/Tenzies-game',
    live: 'https://tenzies-game-optimistic.netlify.app',
    desc: 'Classic dice game in React. Hold matching dice and roll the rest until all ten show the same number.',
    tech: ['React', 'useState', 'CSS'],
  },
];

// ── SKILLS (shown as progress bars) ──────────────────────────────────────────
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
  { name: 'Node.js & Express', level: 68, color: '#68A063' },
  { name: 'Next.js', level: 72, color: '#A78BFA' },
  { name: 'Firebase', level: 70, color: '#FFCA28' },
  { name: 'Git / GitHub', level: 85, color: '#F05032' },
  { name: 'AI Prompt Engineering', level: 75, color: '#A259FF' },
  { name: 'Figma / UI Design', level: 68, color: '#F24E1E' },
];

// Skill names used in bars — used to exclude them from TOOLS chips
const SKILL_NAMES = new Set([
  'JavaScript', 'React', 'TypeScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'Node.js', 'Next.js', 'Firebase', 'Git', 'GitHub', 'Figma',
]);

// ── TOOLS (no duplicates with skill bars above) ────────────────────────────────
export const TOOLS = [
  // Dev tools & platforms
  'VS Code',
  'Postman',
  'Netlify',
  'Vercel',
  'Bootstrap',
  'Sass',
  'Zustand',
  'RESTful APIs',
  'MongoDB',
  'MySQL',
  'Supabase',
  // WordPress ecosystem
  'WordPress',
  'WooCommerce',
  'Elementor',
  'Plugin/Theme Development',
  // AI tools
  'ChatGPT',
  'GitHub Copilot',
  'Claude AI',
  'Cursor',
  // Collaboration
  'Slack',
];

// ── CURRENTLY LEARNING ────────────────────────────────────────────────────────
export const LEARNING = [
  'LangChain & AI Agents',
  'OpenAI API Integration',
  'Retrieval-Augmented Generation (RAG)',
  'Three.js / WebGL',
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
  { label: 'Tech Skills', value: 20 },
  { label: 'Years Coding', value: 3 },
];

// ── SOCIAL / CONTACT LINKS ────────────────────────────────────────────────────
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
    icon: 'email',
    value: 'olatunbosunopeyemi186035@gmail.com',
  },
  {
    label: 'WhatsApp',
    href: 'http://wa.me/+2348176779961',
    icon: 'whatsapp',
    value: '+234 817 677 9961',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/opeyemi-olatunbosun-85b30b163',
    icon: 'linkedin',
    value: 'opeyemi-olatunbosun',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/dem199',
    icon: 'github',
    value: 'github.com/dem199',
  },
];

// ── TYPEWRITER WORDS ──────────────────────────────────────────────────────────
export const TYPE_WORDS = [
  'Frontend Developer',
  'React Specialist',
  'Software Engineer',
  'UI Craftsman',
  'AI Enthusiast',
];
export interface ProjectLink {
  label: string;
  url: string;
  external: boolean;
}

/** Drop screenshots in `public/projects/` named after the project `slug`,
    e.g. `public/projects/spookify-ai.webp`, then set `image` on the project. */
export interface Project {  slug: string;
  id: string;
  name: string;
  company: string;
  year: string;
  tags: string[];
  description: string;
  gradient: string;
  /** Optional screenshot, served from /public. Falls back to the gradient plate. */
  image?: string;
  liveUrl: string;
  githubUrl: string;
  /** Case-study copy. Derived from existing project facts only — no invented claims. */
  overview: string[];
}

export const projects: Project[] = [
  {
    slug: 'noor-dubai-ai',
    id: '01',
    name: 'Noor Dubai AI',
    company: 'Noor Group',
    year: '2024',
    tags: ['WordPress', 'Elementor Pro', 'Motion Design'],
    description: 'Futuristic digital HQ for advertising agency with immersive experience.',
    gradient: 'p-noor-ai',
    image: './projects/noor-dubai-ai.webp',
    liveUrl: 'https://noordubai.ai/',
    githubUrl: 'https://github.com/H3m0rv1ch1',
    overview: [
      'Noor Dubai AI is the digital headquarters for the Noor Group advertising agency — a futuristic, story-driven site built to feel like an immersive experience rather than a static brochure.',
      'The build leans on Elementor Pro for layout control, with custom motion design layered on top so every section has a clear point of view. The result is a branded space that holds attention as the agency narrates its work.'
    ]
  },
  {
    slug: 'billionaire-erp',
    id: '02',
    name: 'Billionaire ERP',
    company: 'Billionaire Car Rental',
    year: '2024',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    description: 'Mission-critical ERP for fleet management & bookings.',
    gradient: 'p-billionaire',
    image: './projects/billionaire-erp.webp',
    liveUrl: 'https://www.facebook.com/billionaire.for.rent/',
    githubUrl: 'https://github.com/H3m0rv1ch1',
    overview: [
      'A mission-critical ERP for Billionaire Car Rental handling fleet management and bookings end to end — from vehicle inventory and availability to reservation workflows.',
      'Built on Next.js with React and TypeScript for a typed, predictable codebase, backed by a Node.js API. Speed and reliability of the admin flows matter more than ornament: the interface is built to be worked in, every day.'
    ]
  },
  {
    slug: 'watermarking-app',
    id: '03',
    name: 'Watermarking App',
    company: 'Personal Project',
    year: '2025',
    tags: ['React', 'TypeScript', 'Web App'],
    description: 'Lightweight, fast, and polished desktop-class app for batch watermarking images.',
    gradient: 'p-watermark',
    image: './projects/watermarking-app.webp',
    liveUrl: 'https://watermarking-app.pages.dev/',
    githubUrl: 'https://github.com/H3m0rv1ch1/Watermarking-App',
    overview: [
      'Watermarking App is a lightweight, fast and polished tool for adding watermarks to images in batch — designed so a repetitive job feels quick instead of tedious.',
      'Written in TypeScript with React, it keeps the flow simple: load a batch, apply the mark, export the results. The repository is public and the app ships on Cloudflare Pages.'
    ]
  },
  {
    slug: 'x-to-do-corp',
    id: '04',
    name: 'X To-Do Corp',
    company: 'Personal Project',
    year: '2025',
    tags: ['React', 'TypeScript', 'PWA', 'Vite'],
    description: 'Feature-rich task manager with a Twitter/X-inspired interface.',
    gradient: 'p-todo',
    image: './projects/x-to-do-corp.webp',
    liveUrl: '',
    githubUrl: 'https://github.com/H3m0rv1ch1/x-to-do-corp',
    overview: [
      'X To-Do Corp is a feature-rich task manager with a Twitter/X-inspired interface — sorting tickets across boards should feel physical, not bureaucratic.',
      'React, TypeScript and Vite carry the structure, with offline-first PWA behaviour so the board keeps working when the network does not. The source is public on GitHub.'
    ]
  },
  {
    slug: 'noor-interiors',
    id: '05',
    name: 'Noor Interiors',
    company: 'Noor Group',
    year: '2024',
    tags: ['WordPress', 'Elementor', 'Web Design'],
    description: 'Interior design portfolio with elegant visual storytelling.',
    gradient: 'p-noor-interiors',
    image: './projects/noor-interiors.webp',
    liveUrl: 'https://noordubai.net/',
    githubUrl: 'https://github.com/H3m0rv1ch1',
    overview: [
      'A portfolio for Noor Interiors built around elegant visual storytelling — generous photography, calm typography and unhurried pacing let the spaces themselves lead.',
      'Assembled with WordPress and Elementor, with the design tuned so every viewport presents the work at its best.'
    ]
  },
  {
    slug: 'noor-woods',
    id: '06',
    name: 'Noor Woods',
    company: 'Noor Group',
    year: '2024',
    tags: ['WordPress', 'E-commerce', 'WooCommerce'],
    description: 'Woodwork and carpentry showcase with product catalog.',
    gradient: 'p-noor-woods',
    image: './projects/noor-woods.webp',
    liveUrl: 'https://noorwoods.com',
    githubUrl: 'https://github.com/H3m0rv1ch1',
    overview: [
      'A woodwork and carpentry showcase paired with a working product catalog on WooCommerce.',
      'The site balances two jobs with very different rhythms — the narrative warmth of a craft portfolio and the utility of a shop — while keeping both under one voice.'
    ]
  },
  {
    slug: 'spookify-ai',
    id: '07',
    name: 'Spookify AI',
    company: 'Personal Project',
    year: '2025',
    tags: ['React', 'TypeScript', 'AI', 'Hackathon'],
    description: 'Immersive AI costume generator that turns photos into cinematic Halloween characters.',
    gradient: 'p-spookify',
    image: './projects/spookify-ai.webp',
    liveUrl: 'https://spookify-ai-the-void.pages.dev/upload',
    githubUrl: 'https://github.com/H3m0rv1ch1/spookify-ai-The-void',
    overview: [
      'Spookify AI is an immersive, high-tech costume generator that transforms your photos into cinematic Halloween characters using advanced neural styling.',
      'React and TypeScript handle the interface and the AI layer turns a theme into a full costume concept. Built as a hackathon project — live in production, source open on GitHub.'
    ]
  },
  {
    slug: 'enjaz',
    id: '08',
    name: 'Enjaz',
    company: 'Personal Project',
    year: '2025',
    tags: ['Tauri', 'React', 'TypeScript', 'Arabic UI'],
    description: 'Desktop app for team performance tracking, task management and evaluation.',
    gradient: 'p-enjaz',
    image: './projects/enjaz.webp',
    liveUrl: 'https://enjaz.pages.dev/#/dashboard',
    githubUrl: 'https://github.com/H3m0rv1ch1/Enjaz',
    overview: [
      'Enjaz is a cross-platform desktop application for team performance tracking, task management and evaluation, built with Tauri for a small, fast native binary.',
      'The interface is a React + TypeScript dashboard with Arabic support built in, focusing on readability: clear charts, clear status, no ceremony — the kind of tool people open every morning and keep open.'
    ]
  },
  {
    slug: 'native-dictate-pro',
    id: '09',
    name: 'Native Dictate Pro',
    company: 'Private Project',
    year: '2024',
    tags: ['React Native', 'TypeScript', 'Mobile'],
    description: 'Private dictation and transcription app.',
    gradient: 'p-dictate',
    image: './projects/native-dictate-pro.webp',
    liveUrl: '#private',
    githubUrl: '#private',
    overview: [
      'A private mobile dictation and transcription app built in React Native with TypeScript.',
      'Designed around a single loop: speak, see the words appear, keep working. Built for a client on request — the app and code remain private.'
    ]
  },
  {
    slug: 'rafiq-al-muslim',
    id: '10',
    name: 'Rafiq Al-Muslim',
    company: 'Personal Project',
    year: '2024',
    tags: ['Next.js', 'PWA', 'React', 'Tailwind CSS'],
    description: 'Islamic web app with prayer times, Quran, AI assistant.',
    gradient: 'p-rafiq',
    image: './projects/rafiq-al-muslim.webp',
    liveUrl: 'https://rafiqalmuslim.com/',
    githubUrl: 'https://github.com/H3m0rv1ch1',
    overview: [
      'Rafiq Al-Muslim is a daily companion web app: prayer times, the Quran and a helpful AI assistant, delivered as an installable PWA.',
      'Built on Next.js with React and Tailwind CSS, with offline-friendly PWA behaviour so the essentials work wherever the day takes you.'
    ]
  },
  {
    slug: 'doctors-outfit',
    id: '11',
    name: "Doctor's Outfit",
    company: 'Personal Project',
    year: '2024',
    tags: ['Next.js', 'React', 'E-commerce', 'Stripe', 'Prisma'],
    description: 'Modern e-commerce platform for medical apparel with seamless checkout.',
    gradient: 'p-doctors',
    image: './projects/doctors-outfit.webp',
    liveUrl: 'https://doctorsoutfit.com',
    githubUrl: 'https://github.com/H3m0rv1ch1',
    overview: [
      'A modern e-commerce platform for medical apparel, with a catalog, cart and a checkout that never gets in the way.',
      'Full-stack on Next.js with React, Prisma on the data layer and Stripe for payments — designed so browsing and buying feel like one continuous motion.'
    ]
  },
  {
    slug: 'store-fix-tool',
    id: '12',
    name: 'Store Fix Tool',
    company: 'Open Source',
    year: '2026',
    tags: ['Python', 'PowerShell', 'Windows', 'MIT'],
    description: 'Dependency-free Windows GUI to remove, reinstall or repair the Microsoft Store.',
    gradient: 'p-storefix',
    image: './projects/store-fix-tool.webp',
    liveUrl: '',
    githubUrl: 'https://github.com/H3m0rv1ch1/store-fix-tool',
    overview: [
      'Store Fix Tool is a dependency-free Windows GUI for removing, reinstalling or repairing the Microsoft Store, and for fixing app-install errors such as 0x800706D9.',
      'Written in Python with PowerShell doing the system-level work, it runs elevated and ships MIT licensed — no installers, no bundled runtimes. Download it, run it, fix the Store.'
    ]
  }
];

export const getProject = (slug: string | null): Project | undefined =>
  projects.find((p) => p.slug === slug);

/** Projects navigable around the given one (skips private ones as "previous/next" dead ends is fine — they exist too). */
export const neighbours = (project: Project): { prev: Project; next: Project } => {
  const i = projects.findIndex((p) => p.slug === project.slug);
  return {
    prev: projects[(i + projects.length - 1) % projects.length],
    next: projects[(i + 1) % projects.length]
  };
};

export const projectLinks = (p: Project): ProjectLink[] => {
  const links: ProjectLink[] = [];
  if (p.liveUrl && p.liveUrl !== '#private') {
    links.push({ label: 'Live Preview', url: p.liveUrl, external: true });
  }
  if (p.githubUrl !== '#private') {
    links.push({ label: 'Source Code', url: p.githubUrl, external: true });
  }
  return links;
};

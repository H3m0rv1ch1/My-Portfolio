export interface ProjectLink {
  label: string;
  url: string;
  external: boolean;
}

export interface Project {
  slug: string;
  id: string;
  name: string;
  company: string;
  year: string;
  tags: string[];
  description: string;
  gradient: string;
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
    year: '2024',
    tags: ['React', 'Canvas API', 'JavaScript'],
    description: 'Client-side image processing tool for batch watermarking.',
    gradient: 'p-watermark',
    liveUrl: 'https://watermarking-app.pages.dev/',
    githubUrl: 'https://github.com/H3m0rv1ch1/Watermarking-App',
    overview: [
      'A focused, client-side tool that batch-watermarks images directly in the browser using the Canvas API.',
      'Because all processing happens on the client, images never leave the user\u2019s device — fast, private, and free to run. A model of a small tool that does one job properly.'
    ]
  },
  {
    slug: 'x-to-do-corp',
    id: '04',
    name: 'X To-Do Corp',
    company: 'Personal Project',
    year: '2024',
    tags: ['React', 'TypeScript', 'State Management'],
    description: 'Corporate task management with drag-and-drop.',
    gradient: 'p-todo',
    liveUrl: '#private',
    githubUrl: 'https://github.com/H3m0rv1ch1/x-to-do-corp',
    overview: [
      'A corporate-style task management app with drag and drop at its core — sorting tickets across boards should feel physical, not bureaucratic.',
      'React and TypeScript carry the structure, with deliberate state management to keep drag interactions, lists and persistence in sync. Code is public; the app itself stays private.'
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
    year: '2024',
    tags: ['React', 'TypeScript', 'AI', 'Tailwind CSS'],
    description: 'AI-powered Halloween costume generator.',
    gradient: 'p-spookify',
    liveUrl: 'https://spookify-ai-the-void.pages.dev/upload',
    githubUrl: 'https://github.com/H3m0rv1ch1/spookify-ai-The-void',
    overview: [
      'An AI-powered Halloween costume generator — pick your vibe, let the model do the haunting.',
      'React and TypeScript handle the interface, Tailwind CSS keeps the styling expressive and quick to iterate, and the AI layer turns a theme into a full costume concept.'
    ]
  },
  {
    slug: 'enjaz',
    id: '08',
    name: 'Enjaz',
    company: 'Personal Project',
    year: '2024',
    tags: ['Tauri', 'React', 'TypeScript', 'Desktop'],
    description: 'Desktop app for team performance tracking.',
    gradient: 'p-enjaz',
    liveUrl: 'https://enjaz.pages.dev/#/dashboard',
    githubUrl: 'https://github.com/H3m0rv1ch1/Enjaz',
    overview: [
      'Enjaz is a cross-platform desktop application for tracking team performance, built with Tauri for a small, fast native binary.',
      'The interface is a React + TypeScript dashboard focusing on readability: clear charts, clear status, no ceremony — the kind of tool people open every morning and keep open.'
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
    liveUrl: 'https://doctorsoutfit.com',
    githubUrl: 'https://github.com/H3m0rv1ch1',
    overview: [
      'A modern e-commerce platform for medical apparel, with a catalog, cart and a checkout that never gets in the way.',
      'Full-stack on Next.js with React, Prisma on the data layer and Stripe for payments — designed so browsing and buying feel like one continuous motion.'
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
  if (p.liveUrl !== '#private') {
    links.push({ label: 'Live Preview', url: p.liveUrl, external: true });
  }
  if (p.githubUrl !== '#private') {
    links.push({ label: 'Source Code', url: p.githubUrl, external: true });
  }
  return links;
};

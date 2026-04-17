import { useEffect, useRef, memo } from 'react';
import { HoverExpand } from './HoverExpand';

interface Project {
  id: string;
  name: string;
  company: string;
  year: string;
  tags: string[];
  description: string;
  gradient: string;
  liveUrl: string;
  githubUrl: string;
}

interface HoverItem {
  label: string;
  sublabel: string;
  description: string;
  gradient: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: '01',
    name: 'Noor Dubai AI',
    company: 'Noor Group',
    year: '2024',
    tags: ['WordPress', 'Elementor Pro', 'Motion Design'],
    description: 'Futuristic digital HQ for advertising agency with immersive experience.',
    gradient: 'p-noor-ai',
    liveUrl: 'https://noordubai.ai/',
    githubUrl: 'https://github.com/H3m0rv1ch1'
  },
  {
    id: '02',
    name: 'Billionaire ERP',
    company: 'Billionaire Car Rental',
    year: '2024',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    description: 'Mission-critical ERP for fleet management & bookings.',
    gradient: 'p-billionaire',
    liveUrl: 'https://www.facebook.com/billionaire.for.rent/',
    githubUrl: 'https://github.com/H3m0rv1ch1'
  },
  {
    id: '03',
    name: 'Watermarking App',
    company: 'Personal Project',
    year: '2024',
    tags: ['React', 'Canvas API', 'JavaScript'],
    description: 'Client-side image processing tool for batch watermarking.',
    gradient: 'p-watermark',
    liveUrl: 'https://watermarking-app.pages.dev/',
    githubUrl: 'https://github.com/H3m0rv1ch1/Watermarking-App'
  },
  {
    id: '04',
    name: 'X To-Do Corp',
    company: 'Personal Project',
    year: '2024',
    tags: ['React', 'TypeScript', 'State Management'],
    description: 'Corporate task management with drag-and-drop.',
    gradient: 'p-todo',
    liveUrl: '#private',
    githubUrl: 'https://github.com/H3m0rv1ch1/x-to-do-corp'
  },
  {
    id: '05',
    name: 'Noor Interiors',
    company: 'Noor Group',
    year: '2024',
    tags: ['WordPress', 'Elementor', 'Web Design'],
    description: 'Interior design portfolio with elegant visual storytelling.',
    gradient: 'p-noor-interiors',
    liveUrl: 'https://noordubai.net/',
    githubUrl: 'https://github.com/H3m0rv1ch1'
  },
  {
    id: '06',
    name: 'Noor Woods',
    company: 'Noor Group',
    year: '2024',
    tags: ['WordPress', 'E-commerce', 'WooCommerce'],
    description: 'Woodwork and carpentry showcase with product catalog.',
    gradient: 'p-noor-woods',
    liveUrl: 'https://noorwoods.com',
    githubUrl: 'https://github.com/H3m0rv1ch1'
  },
  {
    id: '07',
    name: 'Spookify AI',
    company: 'Personal Project',
    year: '2024',
    tags: ['React', 'TypeScript', 'AI', 'Tailwind CSS'],
    description: 'AI-powered Halloween costume generator.',
    gradient: 'p-spookify',
    liveUrl: 'https://spookify-ai-the-void.pages.dev/upload',
    githubUrl: 'https://github.com/H3m0rv1ch1/spookify-ai-The-void'
  },
  {
    id: '08',
    name: 'Enjaz',
    company: 'Personal Project',
    year: '2024',
    tags: ['Tauri', 'React', 'TypeScript', 'Desktop'],
    description: 'Desktop app for team performance tracking.',
    gradient: 'p-enjaz',
    liveUrl: 'https://enjaz.pages.dev/#/dashboard',
    githubUrl: 'https://github.com/H3m0rv1ch1/Enjaz'
  },
  {
    id: '09',
    name: 'Native Dictate Pro',
    company: 'Private Project',
    year: '2024',
    tags: ['React Native', 'TypeScript', 'Mobile'],
    description: 'Private dictation and transcription app.',
    gradient: 'p-dictate',
    liveUrl: '#private',
    githubUrl: '#private'
  },
  {
    id: '10',
    name: 'Rafiq Al-Muslim',
    company: 'Personal Project',
    year: '2024',
    tags: ['Next.js', 'PWA', 'React', 'Tailwind CSS'],
    description: 'Islamic web app with prayer times, Quran, AI assistant.',
    gradient: 'p-rafiq',
    liveUrl: 'https://rafiqalmuslim.com/',
    githubUrl: 'https://github.com/H3m0rv1ch1'
  },
  {
    id: '11',
    name: "Doctor's Outfit",
    company: 'Personal Project',
    year: '2024',
    tags: ['Next.js', 'React', 'E-commerce', 'Stripe', 'Prisma'],
    description: 'Modern e-commerce platform for medical apparel with seamless checkout.',
    gradient: 'p-doctors',
    liveUrl: 'https://doctorsoutfit.com',
    githubUrl: 'https://github.com/H3m0rv1ch1'
  }
];

const Work = memo(function Work(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = section.querySelectorAll('.pcard');
    cards.forEach((card, i) => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(40px)';
      (card as HTMLElement).style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const hoverItems: HoverItem[] = projects.map((p) => ({
    label: p.name,
    sublabel: p.year,
    description: p.tags.slice(0, 3).join(' · '),
    gradient: p.gradient,
    liveUrl: p.liveUrl,
  }));

  const handleItemClick = (index: number): void => {
    const item = hoverItems[index];
    if (item.liveUrl && item.liveUrl !== '#private') {
      window.open(item.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="work" ref={sectionRef}>
      <div className="s-header">
        <div>
          <p className="s-label">Selected Work</p>
          <h2 className="s-title">Projects</h2>
        </div>
        <span className="s-count">11</span>
      </div>

      <HoverExpand 
        items={hoverItems} 
        onItemClick={handleItemClick}
      />
    </section>
  );
});

export default Work;

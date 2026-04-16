import { useEffect, useRef } from 'react';

interface Project {
  id: string;
  name: string;
  company: string;
  year: string;
  tags: string[];
  description: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: '01',
    name: 'Noor Dubai AI',
    company: 'Noor Group',
    year: '2024',
    tags: ['WordPress', 'Elementor Pro', 'Motion Design'],
    description: 'Futuristic digital HQ for advertising agency with immersive experience.',
    gradient: 'p-noor-ai'
  },
  {
    id: '02',
    name: 'Billionaire ERP',
    company: 'Billionaire Car Rental',
    year: '2024',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    description: 'Mission-critical ERP for fleet management & bookings.',
    gradient: 'p-billionaire'
  },
  {
    id: '03',
    name: 'Watermarking App',
    company: 'Personal Project',
    year: '2024',
    tags: ['React', 'Canvas API', 'JavaScript'],
    description: 'Client-side image processing tool for batch watermarking.',
    gradient: 'p-watermark'
  },
  {
    id: '04',
    name: 'X To-Do Corp',
    company: 'Personal Project',
    year: '2024',
    tags: ['React', 'TypeScript', 'State Management'],
    description: 'Corporate task management with drag-and-drop.',
    gradient: 'p-todo'
  },
  {
    id: '05',
    name: 'Spookify AI',
    company: 'Personal Project',
    year: '2024',
    tags: ['React', 'TypeScript', 'AI', 'Tailwind CSS'],
    description: 'AI-powered Halloween costume generator.',
    gradient: 'p-spookify'
  },
  {
    id: '06',
    name: 'Enjaz',
    company: 'Personal Project',
    year: '2024',
    tags: ['Tauri', 'React', 'TypeScript', 'Desktop'],
    description: 'Desktop app for team performance tracking.',
    gradient: 'p-enjaz'
  },
  {
    id: '07',
    name: 'Rafiq Al-Muslim',
    company: 'Personal Project',
    year: '2024',
    tags: ['Next.js', 'PWA', 'React', 'Tailwind CSS'],
    description: 'Islamic web app with prayer times, Quran, AI assistant.',
    gradient: 'p-rafiq'
  }
];

export default function Work(): JSX.Element {
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

  return (
    <section id="work" ref={sectionRef}>
      <div className="s-header">
        <div>
          <p className="s-label">Selected Work</p>
          <h2 className="s-title">Projects</h2>
        </div>
        <span className="s-count">07</span>
      </div>

      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className={`pcard ${project.gradient}`}>
            <div className="pcard-inner">
              <div className="pcard-info">
                <div className="pcard-top">
                  <span className="pnum">{project.id}</span>
                </div>
                <div className="pcard-mid">
                  <div>
                    <p className="pcompany">{project.company}</p>
                    <h3 className="pname">{project.name}</h3>
                    <p className="pyear">{project.year}</p>
                  </div>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pcard-vis">
                <div className="pcard-bg"></div>
                <div className="blob blob1"></div>
                <div className="blob blob2"></div>
                <div className="pcard-img-overlay"></div>
                <div className="p-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

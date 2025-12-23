
import React, { useRef } from 'react';
import Section from './Section';
import { useLanguage } from '../LanguageContext';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard: React.FC<{ project: { name: string; description: string; stack: string[]; liveUrl?: string; repoUrl: string }; isFeatured: boolean }> = ({ project, isFeatured }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Spotlight position
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // 3D Tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Rotate X depends on Y distance (tilt up/down)
    const rotateX = ((y - centerY) / centerY) * -3; // Max 3 deg rotation
    // Rotate Y depends on X distance (tilt left/right)
    const rotateY = ((x - centerX) / centerX) * 3; // Max 3 deg rotation

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div 
      ref={cardRef}
      className="spotlight-card flex flex-col h-full group transition-all duration-300 ease-out hover:border-blue-500/30 hover:shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-5 md:p-8 flex flex-col h-full z-10 relative">
        <div className="flex justify-between items-start mb-5 md:mb-8">
             <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:text-[var(--text-primary)] transition-all duration-300 shadow-inner">
                 <span className="text-xl md:text-2xl font-bold">{project.name.charAt(0)}</span>
             </div>
            <div className="flex gap-2">
                {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 md:p-2.5 text-[var(--text-secondary)] hover:text-blue-500 hover:bg-blue-500/10 rounded-lg transition-all hover:scale-110 transform" title="Live Demo">
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                )}
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="p-2 md:p-2.5 text-[var(--text-secondary)] hover:text-cyan-500 hover:bg-cyan-500/10 rounded-lg transition-all hover:scale-110 transform" title="View Code">
                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                </a>
            </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3 md:mb-4 group-hover:text-blue-500 transition-colors">{project.name}</h3>
        <p className="text-[var(--text-secondary)] mb-6 md:mb-8 text-sm leading-relaxed flex-grow group-hover:text-[var(--text-primary)] transition-colors">
            {project.description}
        </p>
        
        <div className="pt-5 md:pt-6 border-t border-[var(--border-color)]">
            <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
                <span key={tech} className="text-[10px] md:text-xs font-medium px-2 py-1 md:px-2.5 rounded-md bg-[var(--bg-chip)] text-[var(--text-tertiary)] border border-[var(--border-color)] group-hover:border-blue-500/20 group-hover:text-[var(--text-secondary)] transition-colors">
                {tech}
                </span>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const { t, data } = useLanguage();

  return (
    <Section id="projects" title={t('projects_title')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        {data.projects.map((project, index) => (
          <div key={index} className="reveal-card" style={{ transitionDelay: `${index * 150}ms` }}>
            <ProjectCard project={project} isFeatured={index === 1} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;

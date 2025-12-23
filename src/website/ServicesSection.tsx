
import React, { useRef } from 'react';
import Section from './Section';
import { useLanguage } from '../LanguageContext';
import { Code2, Palette, PenTool } from 'lucide-react';

const serviceIcons = [Code2, Palette, PenTool];

const ServiceCard: React.FC<{ service: { title: string; description: string; icon: any }, icon: React.FC<any> }> = ({ service, icon: Icon }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

         // 3D Tilt calculation
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4; 
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    return (
        <div 
            ref={cardRef}
            className="spotlight-card p-6 md:p-8 transition-all duration-300 ease-out group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="z-10 relative h-full flex flex-col">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 flex items-center justify-center mb-5 md:mb-6 text-blue-500 group-hover:scale-110 group-hover:text-[var(--text-primary)] transition-all duration-300 shadow-lg">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-2 md:mb-3 group-hover:text-blue-500 transition-colors">{service.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm flex-grow group-hover:text-[var(--text-primary)] transition-colors">{service.description}</p>
            </div>
        </div>
    );
};


const ServicesSection: React.FC = () => {
  const { t, data } = useLanguage();

  return (
    <Section id="services" title={t('services_title')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {data.services.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length];
          return (
            <div key={index} className="reveal-card" style={{ transitionDelay: `${index * 150}ms` }}>
                <ServiceCard service={service} icon={Icon} />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ServicesSection;

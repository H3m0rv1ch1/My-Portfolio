
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-24 lg:py-32 section-fade-in relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight relative inline-block">
                {title}
            </h2>
            <div className="mt-3 md:mt-4 h-1 w-16 md:w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto opacity-80"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;

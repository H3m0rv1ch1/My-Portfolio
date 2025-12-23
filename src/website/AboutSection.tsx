
import React from 'react';
import Section from './Section';
import { SKILLS, COMPETENCIES, LANGUAGES } from '../data';
import { useLanguage } from '../LanguageContext';
import profileImg from '../assets/profile.png';

const AboutSection: React.FC = () => {
  const { t, data } = useLanguage();

  return (
    <Section id="about" title={t('about_title')}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* --- Left Column: Image & Skills (Span 5) --- */}
        <div className="lg:col-span-5 space-y-8">
            {/* Profile Image Card */}
            <div className="glass-card p-2 md:p-3 rounded-2xl relative group overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl reveal-scale">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[var(--bg-secondary)]">
                    <img 
                        src={profileImg}
                        alt={data.personalInfo.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Overlay Name */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
                        <p className="text-white font-bold text-xl">{data.personalInfo.name}</p>
                        <p className="text-blue-400 text-sm font-medium">Full Stack Developer</p>
                    </div>
                </div>
            </div>

            {/* Skills Section (Moved to Left) */}
            <div className="reveal-slide-up">
                <h3 className="text-xl font-bold mb-4 md:mb-6 text-[var(--text-primary)] flex items-center gap-2 reveal-blur">
                    {t('skills_title')}
                </h3>
                <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                    <div key={skill.name} className="stagger-child group flex items-center gap-2 bg-[var(--bg-chip)] border border-[var(--border-color)] rounded-lg px-2.5 py-1.5 md:px-3 md:py-2 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:-translate-y-1 cursor-default">
                        <div className="text-[var(--text-secondary)] group-hover:text-blue-500 transition-colors">
                            <skill.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </div>
                        <span className="text-xs font-medium text-[var(--text-primary)] group-hover:text-[var(--text-primary)]">{skill.name}</span>
                    </div>
                ))}
                </div>
            </div>

            {/* Competencies Section */}
            <div className="reveal-slide-up">
                <h3 className="text-xl font-bold mb-4 md:mb-6 text-[var(--text-primary)] flex items-center gap-2 reveal-blur">
                    {t('comp_title')}
                </h3>
                <div className="flex flex-wrap gap-2">
                {COMPETENCIES.map((item) => (
                    <div key={item.name} className="stagger-child group flex items-center gap-2 bg-[var(--bg-chip)] border border-[var(--border-color)] rounded-lg px-2.5 py-1.5 md:px-3 md:py-2 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:-translate-y-1 cursor-default">
                    <div className="text-[var(--text-secondary)] group-hover:text-blue-500 transition-colors">
                        <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                    <span className="text-xs font-medium text-[var(--text-primary)] group-hover:text-[var(--text-primary)]">{item.name}</span>
                    </div>
                ))}
                </div>
            </div>

             {/* Languages Section */}
            <div className="reveal-slide-up">
                <h3 className="text-xl font-bold mb-4 md:mb-6 text-[var(--text-primary)] flex items-center gap-2 reveal-blur">
                    {t('lang_title')}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                {LANGUAGES.map((lang) => (
                    <div key={lang.name} className="stagger-child group flex items-center gap-3 bg-[var(--bg-chip)] border border-[var(--border-color)] rounded-lg px-4 py-3 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:-translate-y-1 cursor-default w-full">
                    <div className="text-[var(--text-secondary)] group-hover:text-blue-500 transition-colors bg-[var(--bg-ide-main)] p-2 rounded-md">
                        <lang.icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--text-primary)]">{lang.name}</span>
                        <span className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">{lang.level}</span>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

        {/* --- Right Column: Bio & Experience (Span 7) --- */}
        <div className="lg:col-span-7 space-y-8 md:space-y-12">
          
          {/* Bio Card */}
          <div className="glass-card p-6 md:p-8 relative overflow-hidden group border-l-4 border-l-blue-500 hover:border-l-cyan-500 transition-colors duration-500 reveal-slide-up rtl:border-l-0 rtl:border-r-4 rtl:hover:border-r-cyan-500">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3 text-[var(--text-primary)] reveal-blur">
                {t('bio_title')}
            </h3>
            <p className="text-[var(--text-secondary)] leading-7 mb-6 md:mb-8 text-sm md:text-lg reveal-blur" style={{ transitionDelay: '0.1s' }}>
              {data.personalInfo.bio}
            </p>
            <div className="grid grid-cols-3 gap-2 md:gap-8 border-t border-[var(--border-color)] pt-6">
                <div className="text-center sm:text-left rtl:sm:text-right reveal-slide-up" style={{ transitionDelay: '0.2s' }}>
                    <span className="block text-2xl md:text-4xl font-bold text-[var(--text-primary)]">2+</span>
                    <span className="text-[10px] md:text-xs text-[var(--text-tertiary)] uppercase tracking-wider font-semibold">Years Exp</span>
                </div>
                <div className="text-center sm:text-left rtl:sm:text-right reveal-slide-up border-l border-[var(--border-color)] sm:border-l-0 pl-2 sm:pl-0" style={{ transitionDelay: '0.3s' }}>
                    <span className="block text-2xl md:text-4xl font-bold text-[var(--text-primary)]">15+</span>
                    <span className="text-[10px] md:text-xs text-[var(--text-tertiary)] uppercase tracking-wider font-semibold">Projects</span>
                </div>
                <div className="text-center sm:text-left rtl:sm:text-right reveal-slide-up border-l border-[var(--border-color)] sm:border-l-0 pl-2 sm:pl-0" style={{ transitionDelay: '0.4s' }}>
                    <span className="block text-2xl md:text-4xl font-bold text-[var(--text-primary)]">100%</span>
                    <span className="text-[10px] md:text-xs text-[var(--text-tertiary)] uppercase tracking-wider font-semibold">Commitment</span>
                </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div id="experience" className="relative reveal-slide-up">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3 text-[var(--text-primary)] reveal-blur">
                    <span className="w-1 h-6 md:h-8 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                    {t('exp_title')}
                </h3>
                
                {/* Vertical Line */}
                <div className="absolute left-4 rtl:left-auto rtl:right-4 top-16 md:top-20 bottom-4 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-transparent"></div>

                <div className="space-y-6 md:space-y-10">
                {data.experiences.map((exp, index) => (
                    <div key={index} className="relative pl-10 rtl:pl-0 rtl:pr-10 sm:pl-12 rtl:sm:pr-12 stagger-child group" style={{ transitionDelay: `${index * 150}ms` }}>
                    {/* Timeline Dot */}
                    <div className="absolute left-[11px] rtl:left-auto rtl:right-[11px] top-1.5 h-[10px] w-[10px] rounded-full border-2 border-blue-500 bg-[var(--bg-primary)] z-10 group-hover:bg-blue-500 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
                    
                    <div className="bg-[var(--bg-card)] p-4 md:p-6 rounded-xl border border-[var(--border-color)] hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm shadow-sm hover:translate-x-2 rtl:hover:-translate-x-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                            <h4 className="text-base md:text-lg font-bold text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">{exp.role}</h4>
                            <span className="inline-block px-2 py-0.5 md:py-1 rounded text-[10px] md:text-xs font-semibold bg-[var(--bg-chip)] text-[var(--text-secondary)] border border-[var(--border-color)] whitespace-nowrap w-fit group-hover:border-blue-500/30 transition-colors">
                                {exp.period}
                            </span>
                        </div>
                        <p className="text-sm md:text-md text-blue-500/80 font-medium mb-3 md:mb-4">{exp.company}</p>
                        <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                            <li key={i} className="text-xs md:text-sm text-[var(--text-secondary)] flex items-start gap-2.5">
                                <span className="mt-1.5 md:mt-2 h-1 w-1 rounded-full bg-blue-500/50 flex-shrink-0 group-hover:bg-blue-500 transition-colors"></span>
                                <span className="leading-relaxed">{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

      </div>
    </Section>
  );
};

export default AboutSection;

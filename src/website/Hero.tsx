
import React, { useState, useEffect, useMemo } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const useTypingEffect = (words: string[], typeSpeed = 80, deleteSpeed = 40, delay = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Reset when words change (language switch)
    setWordIndex(0);
    setText('');
    setIsDeleting(false);
  }, [words]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const currentWord = words[wordIndex] || '';
    const isComplete = !isDeleting && text === currentWord;
    const isCleared = isDeleting && text === '';

    if (isComplete) {
      // Finished typing, wait before deleting
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isCleared) {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Typing or Deleting
      timer = setTimeout(() => {
        const nextText = isDeleting 
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1);
        setText(nextText);
      }, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);

  return text;
};

const Hero: React.FC = () => {
  const { t, data } = useLanguage();
  
  const roles = useMemo(() => data.personalInfo.title.split(' | '), [data.personalInfo.title]);
  
  const typedText = useTypingEffect(roles);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0">
        
        {/* Central Glow Spotlight (Replaces clutter icons) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10 mix-blend-screen dark:mix-blend-normal"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
            <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
                
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-md animate-fade-in-up transition-all hover:bg-blue-500/10 cursor-default shadow-[0_0_15px_rgba(59,130,246,0.1)] mb-4 md:mb-6">
                    <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-blue-500"></span>
                    </span>
                    <span className="text-[10px] md:text-xs font-bold text-blue-500 tracking-wide uppercase">
                        {t('hero_badge')}
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05] text-[var(--text-primary)] animate-fade-in-up animation-delay-100 drop-shadow-xl">
                    {t('hero_title_prefix')} <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 animate-gradient-text block md:inline mt-2 md:mt-0 pb-2">
                        {t('hero_title_highlight')}
                    </span>
                </h1>
                
                {/* Dynamic Subtitle */}
                <div className="h-16 md:h-12 animate-fade-in-up animation-delay-200 flex items-center justify-center">
                    <p className="text-lg sm:text-2xl md:text-3xl text-[var(--text-secondary)] font-light flex flex-col md:flex-row items-center gap-2 md:gap-3">
                       <span className="opacity-60 hidden sm:inline">{t('hero_subtitle_prefix')}</span>
                       <span className="font-bold text-[var(--text-primary)] border-b-2 border-blue-500 pb-1 min-w-[20px] text-center md:text-left font-mono leading-tight">
                         {typedText}
                       </span>
                    </p>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300 px-2 md:px-4 font-light opacity-90">
                  {t('hero_description')}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-row items-center justify-center gap-3 md:gap-6 mt-8 md:mt-12 animate-fade-in-up animation-delay-500 w-full px-4 sm:px-0 max-w-md sm:max-w-none mx-auto">
                    <a 
                      href="#experience" 
                      onClick={(e) => handleScrollTo(e, 'experience')}
                      className="flex-1 sm:flex-none sm:w-auto px-6 py-3.5 md:px-10 md:py-4 rounded-xl bg-blue-600 text-white font-bold text-sm md:text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2"
                    >
                        <span>{t('hero_btn_exp')}</span>
                    </a>
                    <a 
                      href="#contact" 
                      onClick={(e) => handleScrollTo(e, 'contact')}
                      className="flex-1 sm:flex-none sm:w-auto px-6 py-3.5 md:px-10 md:py-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold text-sm md:text-lg hover:border-blue-500/50 hover:bg-[var(--bg-tertiary)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2"
                    >
                        <span>{t('hero_btn_contact')}</span>
                    </a>
                </div>

                {/* Animated Scroll Indicator */}
                <div className="pt-10 md:pt-16 flex justify-center animate-fade-in-up animation-delay-700">
                    <a 
                      href="#about" 
                      onClick={(e) => handleScrollTo(e, 'about')}
                      aria-label="Scroll down" 
                      className="p-3 rounded-full animate-bounce cursor-pointer hover:bg-[var(--bg-chip)] transition-colors border border-[var(--border-color)] group hover:border-blue-500/50 bg-[var(--bg-card)] backdrop-blur-sm shadow-lg"
                    >
                         <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-[var(--text-secondary)] group-hover:text-blue-500 transition-colors" />
                    </a>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Hero;

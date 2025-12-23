
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Code2, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../utils/locales';

interface NavbarProps {
  onSwitchMode: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  currentView: string;
  onNavigate: (view: 'HOME' | 'PRIVACY' | 'TERMS') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSwitchMode, theme, onToggleTheme, currentView, onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();
  const langMenuRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === '/website' || location.pathname === '/website/';

  const navLinks = [
    { id: 'home', label: t('nav_home'), path: '/website' },
    { id: 'about', label: t('nav_about'), path: '/website/about' },
    { id: 'projects', label: t('nav_projects'), path: '/website/projects' },
    { id: 'services', label: t('nav_services'), path: '/website/services' },
    { id: 'certificates', label: t('nav_certificates'), path: '/website/certificates' },
    { id: 'contact', label: t('nav_contact'), path: '/website/contact' }
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'it', label: 'Italiano' },
    { code: 'fr', label: 'Français' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Only set up observer if we are on home page
    let observer: IntersectionObserver | null = null;
    
    if (isHomePage) {
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-40% 0px -60% 0px' });

        navLinks.forEach(link => {
            const elem = document.getElementById(link.id);
            if (elem) observer?.observe(elem);
        });
    }

    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
        if (observer) {
            navLinks.forEach(link => {
                const elem = document.getElementById(link.id);
                if (elem) observer?.unobserve(elem);
            });
        }
    };
  }, [navLinks, isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
      e.preventDefault();
      setIsMenuOpen(false);
      
      // If on home page and clicking a section, scroll to it
      if (isHomePage && link.id !== 'home') {
          const element = document.getElementById(link.id);
          if (element) {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              return;
          }
      }
      
      // Otherwise navigate to the page
      navigate(link.path);
  };

  const NavLinksComponent: React.FC<{isMobile?: boolean}> = ({ isMobile = false }) => (
    <nav className={`${isMobile ? 'flex flex-col items-center space-y-8 text-xl pt-24' : 'flex items-center space-x-8'}`}>
      {navLinks.map(link => (
        <a 
          key={link.id} 
          href={link.path} 
          onClick={(e) => handleNavClick(e, link)}
          className={`relative text-sm font-medium transition-colors duration-300
            ${(isHomePage && activeSection === link.id) || location.pathname === link.path ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}
          `}
        >
          {link.label}
          {((isHomePage && activeSection === link.id) || location.pathname === link.path) && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"></span>
          )}
        </a>
      ))}
    </nav>
  );

  // Define common button classes for consistency
  const buttonClasses = "flex items-center justify-center gap-2 px-4 py-2 bg-[var(--bg-tertiary)] hover:bg-opacity-80 border border-[var(--border-color)] rounded-full text-sm font-medium transition-colors text-[var(--text-primary)] min-w-[90px]";
  const iconButtonClasses = "flex items-center justify-center w-10 h-10 bg-[var(--bg-tertiary)] hover:bg-opacity-80 border border-[var(--border-color)] rounded-full transition-colors text-[var(--text-primary)] hover:border-blue-500/50 hover:text-blue-500";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled || isMenuOpen ? 'glassmorphism border-[var(--border-color)]' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo */}
            <div className="flex-shrink-0">
                <a 
                    href="/website" 
                    className="flex items-center space-x-2 rtl:space-x-reverse group" 
                    aria-label="Homepage"
                    onClick={(e) => { e.preventDefault(); navigate('/website'); setIsMenuOpen(false); }}
                >
                    <div className="p-1.5 bg-blue-500/10 rounded border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                        <Code2 className="w-6 h-6 text-blue-500" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">ME</span>
                </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <NavLinksComponent />
            </div>

            {/* Right Side: Actions */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                
                {/* Language Selector (Desktop Only) */}
                <div className="relative hidden md:block" ref={langMenuRef}>
                    <button 
                        onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                        className={iconButtonClasses}
                        title="Change Language"
                    >
                        <Globe className={`w-5 h-5 ${isLangMenuOpen ? 'text-blue-500' : ''}`} />
                    </button>
                    {isLangMenuOpen && (
                        <div className={`absolute top-full mt-2 w-40 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 ${dir === 'rtl' ? 'left-0' : 'right-0'}`}>
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsLangMenuOpen(false);
                                    }}
                                    className={`w-full text-left rtl:text-right px-4 py-2.5 text-sm transition-colors hover:bg-[var(--bg-tertiary)]
                                        ${language === lang.code ? 'text-blue-500 font-bold bg-blue-500/10' : 'text-[var(--text-primary)]'}
                                    `}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Theme Toggle Button (Desktop Only) */}
                <div className="hidden md:block">
                    <button
                        onClick={onToggleTheme}
                        className={iconButtonClasses}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                </div>

                <div className="hidden md:block">
                    <button
                        onClick={() => onSwitchMode()}
                        className={buttonClasses}
                    >
                        <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                        <span>{t('return_ide')}</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative p-2 text-[var(--text-primary)]">
                        <div className="space-y-1.5">
                            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-[var(--bg-primary)] z-40 transform transition-transform duration-300 flex flex-col items-center justify-center ${isMenuOpen ? 'translate-x-0' : (dir === 'rtl' ? '-translate-x-full' : 'translate-x-full')}`}>
        <div className="flex-1 w-full flex flex-col items-center justify-center overflow-y-auto pb-32">
            <NavLinksComponent isMobile />
            
            {/* Mobile Actions Container */}
            <div className="mt-12 w-full px-8 flex flex-col gap-6 items-center">
                
                {/* Language Switcher Mobile */}
                <div className="flex flex-wrap justify-center gap-3">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code);
                                // Don't close menu immediately to allow theme switch or other actions
                            }}
                            className={`px-4 py-2 rounded-full text-sm border transition-all
                                ${language === lang.code 
                                    ? 'bg-blue-500 text-white border-blue-500 shadow-lg' 
                                    : 'bg-[var(--bg-tertiary)] text-[var(--text-primary)] border-[var(--border-color)]'
                                }
                            `}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>

                {/* Theme Switcher Mobile */}
                <button
                    onClick={onToggleTheme}
                    className="flex items-center space-x-2 px-6 py-3 bg-[var(--bg-tertiary)] hover:bg-opacity-80 border border-[var(--border-color)] rounded-full text-sm transition-colors text-[var(--text-primary)] w-full max-w-xs justify-center"
                >
                     {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                     <span className="capitalize text-lg">{theme} Mode</span>
                </button>
            </div>
        </div>

         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xs px-4">
            <button
                onClick={() => onSwitchMode()}
                className="flex items-center justify-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-[var(--bg-tertiary)] hover:bg-opacity-80 border border-[var(--border-color)] rounded-full text-sm transition-colors text-[var(--text-primary)] w-full"
              >
                <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
                <span>{t('return_ide')}</span>
            </button>
         </div>
      </div>
    </>
  );
};

export default Navbar;

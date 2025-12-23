import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowUp } from 'lucide-react';

interface WebsiteLayoutProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ theme, onToggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const cursorLightRef = useRef<HTMLDivElement>(null);

  const handleSwitchToIDE = () => {
    navigate('/');
  };

  useEffect(() => {
    document.body.classList.add('website-view');
    document.body.style.fontFamily = "";
    return () => {
      document.body.classList.remove('website-view');
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorLightRef.current) {
        cursorLightRef.current.style.left = `${e.clientX}px`;
        cursorLightRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    setTimeout(() => {
      const sections = document.querySelectorAll('.reveal-blur, .reveal-slide-up, .reveal-scale, .reveal-card, .section-fade-in');
      sections.forEach(section => observer.observe(section));
    }, 100);

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view: 'HOME' | 'PRIVACY' | 'TERMS') => {
    if (view === 'HOME') navigate('/website');
    else if (view === 'PRIVACY') navigate('/website/privacy');
    else if (view === 'TERMS') navigate('/website/terms');
  };

  const getCurrentView = (): 'HOME' | 'PRIVACY' | 'TERMS' => {
    if (location.pathname.includes('/privacy')) return 'PRIVACY';
    if (location.pathname.includes('/terms')) return 'TERMS';
    return 'HOME';
  };

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-[var(--accent-primary)] selection:text-white transition-colors duration-300">
      <div className="bg-noise"></div>

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]'} bg-[size:24px_24px]`}></div>
        
        <div 
          className={`absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob ${theme === 'light' ? 'opacity-40 mix-blend-normal bg-purple-300/40' : ''}`}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className={`absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 ${theme === 'light' ? 'opacity-40 mix-blend-normal bg-blue-300/40' : ''}`}
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div 
          className={`absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 ${theme === 'light' ? 'opacity-40 mix-blend-normal bg-cyan-300/40' : ''}`}
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        ></div>

        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[radial-gradient(circle_at_center,transparent_0%,#0f1115_120%)]' : 'bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_120%)]'}`}></div>
      </div>

      <div ref={cursorLightRef} id="cursor-light" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          onSwitchMode={handleSwitchToIDE}
          theme={theme}
          onToggleTheme={onToggleTheme}
          currentView={getCurrentView()}
          onNavigate={handleNavigate}
        />

        <main className="relative flex-grow">
          <Outlet />
        </main>

        <Footer onNavigate={handleNavigate} />

        {showScrollTop && (
          <button
            onClick={scrollTop}
            className="fixed bottom-8 right-8 bg-[var(--accent-primary)] text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 z-50 transform hover:scale-110 hover:shadow-blue-500/50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default WebsiteLayout;

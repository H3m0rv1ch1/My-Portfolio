import { useState, useEffect } from 'react';
import { useScrollNav } from '../hooks/useScrollNav';
import { useTheme } from '../hooks/useTheme';
import { Bot, User } from 'lucide-react';
import type { Mode } from '../hooks/useMode';

interface NavigationProps {
  mode: Mode;
  toggleMode: () => void;
}

export default function Navigation({ mode, toggleMode }: NavigationProps): JSX.Element {
  const scrolled = useScrollNav();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Add/remove menu-open class on body for backdrop blur
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div 
        className={`menu-backdrop${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <nav id="nav" className={scrolled && !menuOpen ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          <img src="/img.png" alt="Mohammed Alghanam - Full Stack Engineer" />
          <span>mo-alghanam</span>
        </a>
        <div className="nav-right">
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li><a href="#work" onClick={closeMenu}>Work</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        <button 
          className="theme-btn mode-btn" 
          onClick={toggleMode}
          aria-label={mode === 'human' ? 'Switch to AI mode' : 'Switch to human mode'}
          title={mode === 'human' ? 'Switch to AI / machine mode' : 'Switch to human mode'}
        >
          {mode === 'human' ? <Bot size={16} /> : <User size={16} />}
        </button>
        <button 
          className="theme-btn" 
          onClick={toggleTheme}
          aria-label="Toggle colour scheme"
        >
          <span className="t-icon">{theme === 'dark' ? '◐' : '◑'}</span>
        </button>
        <button 
          className={`menu-btn${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="menu-line" />
          <span className="menu-line" />
          <span className="menu-line" />
        </button>
      </div>
    </nav>
  </>
  );
}

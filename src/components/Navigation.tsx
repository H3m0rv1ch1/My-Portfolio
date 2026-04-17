import { useScrollNav } from '../hooks/useScrollNav';
import { useTheme } from '../hooks/useTheme';

export default function Navigation(): JSX.Element {
  const scrolled = useScrollNav();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">
        <img src="/img.png" alt="mo-alghanam" />
        <span>mo-alghanam</span>
      </a>
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button 
          className="theme-btn" 
          onClick={toggleTheme}
          aria-label="Toggle colour scheme"
        >
          <span className="t-icon">{theme === 'dark' ? '◐' : '◑'}</span>
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  );
}

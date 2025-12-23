
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
  className?: string;
  size?: 'sm' | 'md';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle, className = '', size = 'md' }) => {
  const isDark = theme === 'dark';
  const isSmall = size === 'sm';

  return (
    <button
      onClick={onToggle}
      className={`
        relative rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none
        border border-[var(--border-color)]
        ${isDark ? 'bg-[var(--bg-ide-input)] hover:border-blue-500/50' : 'bg-[var(--bg-chip)] hover:border-blue-500/50'}
        ${isSmall ? 'w-11 h-6' : 'w-14 h-7'}
        ${className}
      `}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Theme"
    >
      {/* Track Icons (Background) */}
      <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
        <Moon className={`${isSmall ? 'w-2.5 h-2.5' : 'w-3 h-3'} text-blue-400 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-40'}`} />
        <Sun className={`${isSmall ? 'w-2.5 h-2.5' : 'w-3 h-3'} text-blue-400 transition-opacity duration-300 ${isDark ? 'opacity-40' : 'opacity-100'}`} />
      </div>

      {/* Sliding Thumb */}
      <div
        className={`
          relative rounded-full shadow-sm transform transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          flex items-center justify-center
          ${isSmall ? 'w-4 h-4' : 'w-5 h-5'}
          ${isDark 
            ? 'translate-x-0 bg-blue-600' 
            : (isSmall ? 'translate-x-5 bg-white' : 'translate-x-7 bg-white')
          }
        `}
      >
        {/* Thumb Icon */}
        <div className={`relative ${isSmall ? 'w-2.5 h-2.5' : 'w-3 h-3'}`}>
            <Moon 
                className={`
                    absolute inset-0 w-full h-full text-white transition-all duration-300
                    ${isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'}
                `} 
            />
            <Sun 
                className={`
                    absolute inset-0 w-full h-full text-blue-500 transition-all duration-300
                    ${isDark ? 'opacity-0 scale-50 -rotate-90' : 'opacity-100 scale-100 rotate-0'}
                `} 
            />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;

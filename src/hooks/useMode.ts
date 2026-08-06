import { useState, useEffect } from 'react';

// Human / AI mode - no sensitive data stored
type Mode = 'human' | 'ai';

interface UseModeReturn {
  mode: Mode;
  toggleMode: () => void;
}

const STORAGE_KEY = 'portfolio_mode';

export function useMode(): UseModeReturn {
  const [mode, setMode] = useState<Mode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Mode | null;
      if (saved && (saved === 'human' || saved === 'ai')) {
        return saved;
      }
    } catch {
      // ignore storage errors
    }
    return 'human';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      console.warn('Mode storage failed:', error);
    }
  }, [mode]);

  const toggleMode = (): void => {
    setMode(prev => (prev === 'human' ? 'ai' : 'human'));
  };

  return { mode, toggleMode };
}
